import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { createV10Player } from '../src/player/v10-player';
import { mountPlayerTransport } from '../src/player/transport-controls';
import { LOCALE_KEY, setLocale } from '../src/i18n';

const engine = () => ({ bandwidthEstimate: 8000000, currentLevel: -1,
  levels: [{ width: 1280, height: 720 }, { width: 1920, height: 1080 }], on: vi.fn() });

class TestMedia extends HTMLElement {
  source: unknown = null;
  engine = engine();
  adapter = { destroy: vi.fn() };
}
beforeAll(() => {
  if (!customElements.get('hlsjs-video')) customElements.define('hlsjs-video', TestMedia);
  if (!customElements.get('dash-video')) customElements.define('dash-video', class extends TestMedia {});
});
afterEach(() => { setLocale('zh-CN'); localStorage.removeItem(LOCALE_KEY); document.body.replaceChildren(); vi.useRealTimers(); vi.restoreAllMocks(); vi.unstubAllGlobals() });

function mounted(controls = false) {
  const video = document.createElement('video'); document.body.append(video);
  const player = createV10Player(video, { controls });
  const media = player.el().querySelector('hlsjs-video') as TestMedia;
  return { video, player, media };
}

describe('Video.js 10 播放会话', () => {
  it.each([true, false])('点击画面显示控件并保持 paused=%s，触屏移动不抢先唤起控件', paused => {
    const { video, player } = mounted(true);
    Object.defineProperty(video, 'paused', { configurable: true, value: paused });
    const pause = vi.spyOn(video, 'pause').mockImplementation(() => {});
    const play = vi.spyOn(video, 'play').mockResolvedValue(undefined);
    player.el().classList.replace('vjs-user-active', 'vjs-user-inactive');
    player.el().dispatchEvent(new PointerEvent('pointermove', { pointerType: 'touch' }));
    expect(player.el().classList.contains('vjs-user-inactive')).toBe(true);
    video.click();
    expect(player.el().classList.contains('vjs-user-active')).toBe(true);
    expect(play).not.toHaveBeenCalled();
    expect(pause).not.toHaveBeenCalled();
    player.dispose();
  });

  it('播放时控件自动隐藏，点击画面唤回并重新开始隐藏计时', () => {
    vi.useFakeTimers();
    const { video, player } = mounted(true);
    Object.defineProperty(video, 'paused', { configurable: true, value: false });
    video.dispatchEvent(new Event('play'));
    vi.advanceTimersByTime(2500);
    expect(player.el().classList.contains('vjs-user-inactive')).toBe(true);
    video.click();
    expect(player.el().classList.contains('vjs-user-active')).toBe(true);
    vi.advanceTimersByTime(2499);
    expect(player.el().classList.contains('vjs-user-active')).toBe(true);
    vi.advanceTimersByTime(1);
    expect(player.el().classList.contains('vjs-user-inactive')).toBe(true);
    player.dispose();
    vi.useRealTimers();
  });

  it('前后 30 秒连续跳转限制在片长内，未知片长时禁用跳转', () => {
    const { video, player } = mounted(true);
    mountPlayerTransport(player, video, player.el().querySelector<HTMLElement>('.vjs-control-bar')!);
    const back = player.el().querySelector<HTMLButtonElement>('[data-player-skip="-30"]')!;
    const ahead = player.el().querySelector<HTMLButtonElement>('[data-player-skip="30"]')!;
    expect(back.disabled).toBe(true);
    Object.defineProperty(video, 'duration', { configurable: true, value: 100 });
    video.dispatchEvent(new Event('loadedmetadata'));
    expect(back.disabled).toBe(false);
    video.currentTime = 40;
    ahead.click(); expect(video.currentTime).toBe(70);
    ahead.click(); ahead.click(); expect(video.currentTime).toBe(100);
    back.click(); expect(video.currentTime).toBe(70);
    video.currentTime = 10;
    back.click(); expect(video.currentTime).toBe(0);
    Object.defineProperty(video, 'duration', { configurable: true, value: NaN });
    video.dispatchEvent(new Event('emptied'));
    expect(ahead.disabled).toBe(true);
    player.dispose();
  });

  it('中央按钮通过播放会话切换状态，名称随语言与播放状态更新，销毁后解除订阅', () => {
    const { video, player } = mounted(true);
    let paused = true;
    Object.defineProperty(video, 'paused', { get: () => paused });
    const play = vi.spyOn(player, 'play').mockImplementation(async () => { paused = false; video.dispatchEvent(new Event('play')) });
    const pause = vi.spyOn(player, 'pause').mockImplementation(() => { paused = true; video.dispatchEvent(new Event('pause')) });
    mountPlayerTransport(player, video, player.el().querySelector<HTMLElement>('.vjs-control-bar')!);
    const group = player.el().querySelector<HTMLElement>('.vjs-peach-transport')!;
    const button = group.querySelector<HTMLButtonElement>('[data-player-transport-play]')!;
    setLocale('vi');
    expect(button.getAttribute('aria-label')).toBe('Phát');
    expect(group.querySelector('[data-player-skip="-30"]')?.getAttribute('aria-label')).toBe('Lùi 30 giây');
    button.click(); expect(play).toHaveBeenCalledOnce();
    expect(button.getAttribute('aria-label')).toBe('Tạm dừng');
    button.click(); expect(pause).toHaveBeenCalledOnce();
    setLocale('en');
    expect(button.getAttribute('aria-label')).toBe('Playback');
    player.dispose();
    setLocale('vi');
    expect(button.getAttribute('aria-label')).toBe('Playback');
    expect(group.isConnected).toBe(false);
  });

  it('普通 HTTP 的随机源为无 ID 的视频创建独立播放器', () => {
    vi.stubGlobal('crypto', { getRandomValues: crypto.getRandomValues.bind(crypto) });
    const first = mounted().player;
    const second = mounted().player;
    try {
      expect(first.el().id).toMatch(/^peach-player-/);
      expect(first.el().id).not.toBe(second.el().id);
    } finally { first.dispose(); second.dispose() }
  });

  it('片源交给异步 adapter 后立即播放，原生 play 使用已挂载的片源', async () => {
    const { video, player, media } = mounted();
    Object.defineProperty(media, 'source', { set: (value: { src: string }) => {
      queueMicrotask(() => { video.src = value.src });
    } });
    const play = vi.spyOn(video, 'play').mockImplementation(() => video.getAttribute('src')
      ? Promise.resolve() : Promise.reject(new DOMException('没有可播放的片源', 'NotSupportedError')));
    player.src({ src: '/example.mp4', type: 'video/mp4' });
    await expect(player.play()).resolves.toBeUndefined();
    expect(play).toHaveBeenCalledOnce();
    expect(video.src).toContain('/example.mp4');
    player.dispose();
  });

  it.each(['pause', 'source', 'dispose'] as const)('排队播放期间 %s 会取消该请求', async action => {
    const { video, player } = mounted();
    const play = vi.spyOn(video, 'play').mockResolvedValue(undefined);
    const pending = player.play();
    if (action === 'pause') player.pause();
    else if (action === 'source') player.src({ src: '/next.mp4', type: 'video/mp4' });
    else player.dispose();
    await expect(pending).rejects.toMatchObject({ name: 'AbortError' });
    expect(play).not.toHaveBeenCalled();
    player.dispose();
  });

  it('媒体错误可补充来源状态文案，展示错误不会再次触发错误处理', () => {
    const { player, media } = mounted();
    const callback = vi.fn(() => player.error({ code: 2, message: '媒体目录无法访问' }));
    player.on('error', callback);
    media.dispatchEvent(new Event('error'));
    expect(callback).toHaveBeenCalledOnce();
    expect(player.error()).toEqual({ code: 2, message: '媒体目录无法访问' });
    player.dispose();
  });

  it('固定清晰度和自动码率使用同一条 HLS 引擎，带宽读取实际估计', async () => {
    const { player, media } = mounted();
    player.src({ src: '/example.m3u8', type: 'application/vnd.apple.mpegurl' });
    const levels = player.qualityLevels!();
    expect(levels.length).toBe(2);
    videoMetadata(player.el()); videoMetadata(player.el());
    expect(media.engine.on).toHaveBeenCalledTimes(2);
    levels[0]!.enabled = false; levels[1]!.enabled = true;
    await Promise.resolve(); expect(media.engine.currentLevel).toBe(1);
    levels[0]!.enabled = true; levels[1]!.enabled = true;
    await Promise.resolve(); expect(media.engine.currentLevel).toBe(-1);
    expect(player.bandwidth!()).toBe(8000000);
    player.dispose();
  });

  it('清晰度选择排队后切换片源或销毁，不再写入旧引擎', async () => {
    const { player, media } = mounted();
    player.src({ src: '/first.m3u8', type: 'application/vnd.apple.mpegurl' });
    const levels = player.qualityLevels!();
    levels[0]!.enabled = false; levels[1]!.enabled = true;
    player.src({ src: '/second.m3u8', type: 'application/vnd.apple.mpegurl' });
    await Promise.resolve(); expect(media.engine.currentLevel).toBe(-1);
    levels[0]!.enabled = false; levels[1]!.enabled = true;
    player.dispose();
    await Promise.resolve(); expect(media.engine.currentLevel).toBe(-1);
  });

  it('HLS 与 DASH 切源保留原生视频和字幕，销毁停播并解除事件', () => {
    const { video, player, media } = mounted();
    const pause = vi.spyOn(video, 'pause').mockImplementation(() => {});
    const load = vi.spyOn(video, 'load').mockImplementation(() => {});
    const played = vi.fn(); player.on('play', played);
    video.dispatchEvent(new Event('play')); expect(played).toHaveBeenCalledOnce();
    const track = document.createElement('track'); track.label = '中文'; video.append(track);
    player.src({ src: '/example.mpd', type: 'application/dash+xml' });
    expect(media.adapter.destroy).toHaveBeenCalledOnce();
    expect(player.el().querySelector('dash-video > video')).toBe(video);
    expect(video.querySelector('track')).toBe(track);
    player.dispose(); player.dispose();
    expect(pause).toHaveBeenCalledOnce(); expect(load).toHaveBeenCalledOnce();
    video.dispatchEvent(new Event('play')); expect(played).toHaveBeenCalledOnce();
    expect(document.querySelector('.video-js')).toBeNull();
  });
});

function videoMetadata(root: HTMLElement) { root.querySelector('video')!.dispatchEvent(new Event('loadedmetadata')) }
