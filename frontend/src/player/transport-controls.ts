/** 画面中央的触屏播放与固定 30 秒跳转控件。 */
import { icon } from '../core';
import { subscribeLocale, translate as t } from '../i18n';
import { seekVideoBy } from './playback';
import type { VjsPlayer } from './types';

export function mountPlayerTransport(player: VjsPlayer, video: HTMLVideoElement, anchor: HTMLElement): void {
  const group = document.createElement('div');
  group.className = 'vjs-peach-transport';
  group.setAttribute('role', 'group');
  group.innerHTML = `<button type="button" data-player-skip="-30">${icon('rotate-ccw')}<span aria-hidden="true">30</span></button>
    <button type="button" data-player-transport-play>${icon('player-play')}</button>
    <button type="button" data-player-skip="30">${icon('rotate-cw')}<span aria-hidden="true">30</span></button>`;
  anchor.before(group);
  const play = group.querySelector<HTMLButtonElement>('[data-player-transport-play]')!;
  const skips = [...group.querySelectorAll<HTMLButtonElement>('[data-player-skip]')];
  const sync = () => {
    const paused = player.paused() || player.ended();
    play.setAttribute('aria-label', t(paused ? '播放' : '暂停'));
    play.querySelector('use')!.setAttribute('href', paused ? '#i-player-play' : '#i-player-pause');
    group.setAttribute('aria-label', t('播放控制'));
    for (const button of skips) {
      button.setAttribute('aria-label', t(Number(button.dataset.playerSkip) < 0 ? '后退 {seconds} 秒' : '前进 {seconds} 秒', { seconds: 30 }));
      button.disabled = !Number.isFinite(video.duration) || video.duration <= 0;
    }
  };
  group.addEventListener('click', event => { if ((event.target as Element).closest('button')) event.stopPropagation() });
  play.onclick = () => { if (player.paused() || player.ended()) void player.play()?.catch(() => {}); else player.pause() };
  skips.forEach(button => { button.onclick = () => seekVideoBy(video, Number(button.dataset.playerSkip)) });
  const events = ['play', 'pause', 'ended', 'loadedmetadata', 'durationchange', 'emptied'];
  events.forEach(event => video.addEventListener(event, sync));
  const unsubscribe = subscribeLocale(sync);
  sync();
  player.on('dispose', () => {
    unsubscribe();
    events.forEach(event => video.removeEventListener(event, sync));
    group.remove();
  });
}
