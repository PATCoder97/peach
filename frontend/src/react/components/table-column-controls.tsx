import { useTranslation as useUiTranslation } from "../i18n";
import { ColumnResizer } from 'react-aria-components';
import { Button } from '@/components/base/buttons/button';
import { SelectionPopover } from './selection-popover';
import type { TablePreferences } from './table-column-preferences';

export function TableColumnControls({ preferences, label = '表格' }: { preferences: TablePreferences; label?: string }) {
  const uiText = useUiTranslation();
  const columns = preferences.columns.filter(column => !column.required);
  return <div role="group" aria-label={uiText('{label}列设置', { label: uiText(label) })} className="flex flex-none gap-2">
    <SelectionPopover label={uiText('{label}显示列', { label: uiText(label) })} triggerLabel={uiText("显示列")} actionLayout="fullWidth"
      items={columns.map(column => ({ id: column.id, label: uiText(column.label), selected: preferences.visibility[column.id] !== false }))}
      onChange={(id, on) => preferences.change(current => ({ ...current, [id]: on }))}
      actions={[
        { label: uiText('显示全部列'), onPress: () => preferences.change(Object.fromEntries(columns.map(column => [column.id, true]))) },
        { label: uiText('恢复默认显示'), onPress: () => preferences.change({}) },
      ]} />
    <Button variant="secondary" size="medium" onClick={preferences.reset}>{uiText("重置列宽")}</Button>
  </div>;
}

export function TableColumnResizer({ preferences, id }: { preferences: TablePreferences; id: string }) {
  const uiText = useUiTranslation();
  const column = preferences.columns.find(column => column.id === id)!;
  return preferences.canResize(id) ? <ColumnResizer aria-label={uiText('调整{label}列宽', { label: uiText(column.label) })} /> : null;
}
