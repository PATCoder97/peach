import { useTranslation as useUiTranslation } from "../i18n";
import { translate as t } from '../../i18n/index';
import { useTranslation } from '../i18n';
/* 媒体库一级的来源色与处理方式，由「媒体库与目录」按媒体库分组时放在每个媒体库的标题行里，
 * 随「保存配置」写进 `media.library_catalog`（ADR-0116）。三档处理方式的说明在分组上方只写一次；
 * 只有选了「自定义」的媒体库才展开五个步骤。来源色默认不上色，点开色球选一档强调色。 */
import { useRef, useState } from 'react';
import { Dialog, Popover, VisuallyHidden } from 'react-aria-components';
import { UNSAFE_PortalProvider } from 'react-aria';

import { Checkbox } from '@/components/base/checkbox/checkbox';
import { MENU_POPOVER_SURFACE } from '@/components/base/dropdown/menu-styles';
import { Select, SelectItem } from '../components/select';
import { ACCENTS as ACCENT_CHOICES } from '../../appearance/home-glow';
import { previewLibraryColor } from '../components/library-tint';
import { overlayHost } from '../components/overlay-host';
import { Disclosure, Help } from './section';
import { POLICY_COLUMNS, POLICY_COVER_NOTE, POLICY_MATRIX, POLICY_SUMMARY } from './library-policy-copy';
import '../components/glow-preset-grid.css';
import './library-policy-settings.css';

export type Preset = 'auto' | 'local' | 'custom';
export const STAGES = [
  ['probe', '读取视频信息'],
  ['metadata', '联网补资料'],
  ['cover', '联网补封面'],
  ['people', '联网补人物图片'],
  ['preview', '生成九宫格预览'],
] as const;
export type Stage = (typeof STAGES)[number][0];
export const AUTO_STAGES: readonly Stage[] = ['probe', 'metadata', 'cover', 'people', 'preview'];
const PRESETS: readonly (readonly [Preset, string, string])[] = [
  ['auto', '自动补全', '缺什么联网补什么'],
  ['local', '仅使用本地资料', '不联网，只用本地 NFO 和图片'],
  ['custom', '自定义', '逐项选择要做的步骤'],
];

/** 三档处理方式的说明，分组上方只放一份：常显一句话，三档的差别收在可展开的对比表里。 */
export function PolicyLegend() {
  const uiText = useUiTranslation();
  useTranslation();
  return (
    <div data-policy-legend="" className="flex flex-col gap-1">
      <Help>{t(POLICY_SUMMARY)}</Help>
      <Disclosure summary={uiText("三种处理方式对比")}>
        <table data-policy-matrix="" className="text-body-2-regular">
          <thead><tr><th scope="col"><VisuallyHidden>{t("步骤")}</VisuallyHidden></th>
            {POLICY_COLUMNS.map(name => <th key={name} scope="col">{t(name)}</th>)}</tr></thead>
          <tbody>{POLICY_MATRIX.map(([step, ...cells]) => <tr key={step}><th scope="row">{t(step)}</th>
            {cells.map((cell, index) => <td key={POLICY_COLUMNS[index]} data-policy-cell={cell === '✓' ? 'on' : cell === '—' ? 'off' : 'choice'}>
              {cell === '✓' ? <span aria-label={t("做")}>✓</span> : cell === '—' ? <span aria-label={t("不做")}>—</span> : t(cell)}</td>)}</tr>)}</tbody>
        </table>
        <Help>{t(POLICY_COVER_NOTE)}</Help>
      </Disclosure>
    </div>
  );
}

/** 标题行里的处理方式下拉：弹层顶部写明在选什么，每档带一句话；收起时只显示档名。 */
export function PresetSelect({ name, value, onChange }: { name: string; value: Preset; onChange(value: Preset): void }) {
  useTranslation();
  return (
    <Select className="w-full" aria-label={t('{name} 处理方式', { name })} selectedKey={value} prefix={t('处理方式')}
      renderValue={<span className="truncate">{t(PRESETS.find(([key]) => key === value)?.[1] ?? '')}</span>}
      onSelectionChange={key => onChange(String(key) as Preset)}>
      {PRESETS.map(([key, label, hint]) => (
        <SelectItem key={key} id={key} textValue={t(label)}>
          <span className="flex min-w-0 flex-col">
            <span>{t(label)}</span>
            <span className="text-body-2-regular text-text-secondary whitespace-normal">{t(hint)}</span>
          </span>
        </SelectItem>
      ))}
    </Select>
  );
}

export function StageChooser({ name, value, onChange }: { name: string; value: readonly Stage[]; onChange(value: readonly Stage[]): void }) {
  useTranslation();
  return (
    <Disclosure defaultOpen summary={t('{name} 的处理步骤（{selected}/{total}）', { name, selected: value.length, total: STAGES.length })}>
      <div className="flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label={t('{name} 处理步骤', { name })}>
        {STAGES.map(([key, label]) => (
          <Checkbox key={key} isSelected={value.includes(key)}
            onChange={(on) => onChange(on ? [...value, key] : value.filter(stage => stage !== key))}>
            {t(label)}
          </Checkbox>
        ))}
      </div>
    </Disclosure>
  );
}

/** 一颗显示当前来源色的球；点开是「无颜色」加十二档强调色。 */
export function LibraryColorPicker({ id, name, value: color, onChange }: {
  id: string; name: string; value: string; onChange(color: string): void;
}) {
  const uiText = useUiTranslation();
  useTranslation();
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const label = t(ACCENT_CHOICES.find(([key]) => key === color)?.[1] || '无颜色');
  const choose = (next: string) => { onChange(next); previewLibraryColor(id, next); setOpen(false) };
  return <>
    <button ref={trigger} type="button" className="text-body-medium" data-glow-chip="" data-library-color-trigger="" aria-haspopup="dialog"
      aria-expanded={open} aria-label={uiText("{value0} 来源色：{value1}", { value0: String(name || uiText("未命名媒体库")), value1: String(label) })} title={label} onClick={() => setOpen(true)}>
      <span aria-hidden className="text-text-tertiary">{t("来源色")}</span>
      {color
        ? <span data-glow-ball="" aria-hidden="true" data-accent-ball={color} />
        : <span data-glow-ball="" data-library-none="" aria-hidden="true" />}
      <span>{label}</span>
    </button>
    <UNSAFE_PortalProvider getContainer={() => overlayHost(trigger.current)}>
      <Popover triggerRef={trigger} isOpen={open} onOpenChange={setOpen} placement="bottom start" offset={8}
        containerPadding={12} className={MENU_POPOVER_SURFACE}>
        <Dialog aria-label={uiText("{value0} 来源色", { value0: String(name || uiText("未命名媒体库")) })} className="outline-none">
          <p className="px-1 pb-2 text-body-medium text-text-primary">{t("选择来源色")}</p>
          <div data-accent-grid="" data-library-colors="" role="group">
            <button type="button" data-glow-chip="" aria-pressed={!color} title={t("无颜色")} aria-label={t("无颜色")}
              onClick={() => choose('')}>
              <span data-glow-ball="" data-library-none="" aria-hidden="true" />
            </button>
            {ACCENT_CHOICES.map(([key, choice]) => (
              <button type="button" key={key} data-glow-chip="" aria-pressed={key === color} title={t(choice)} aria-label={t(choice)}
                onClick={() => choose(key)}>
                <span data-glow-ball="" aria-hidden="true" data-accent-ball={key} />
              </button>
            ))}
          </div>
        </Dialog>
      </Popover>
    </UNSAFE_PortalProvider>
  </>;
}
