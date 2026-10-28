import type { ComponentProps } from 'react';
import { SettingsRow as BoardSettingsRow } from '@/components/application/settings/settings-rows';
import { useSystemTranslation } from '../i18n';

export { SettingsCard, SettingsSectionLabel } from '@/components/application/settings/settings-rows';

/** 设置行的标签和说明属于系统文案；表单值仍由原控件持有。 */
export function SettingsRow({ label, description, ...props }: ComponentProps<typeof BoardSettingsRow>) {
  const systemText = useSystemTranslation();
  return <BoardSettingsRow {...props}
    label={typeof label === 'string' ? systemText(label) : label}
    description={typeof description === 'string' ? systemText(description) : description} />;
}
