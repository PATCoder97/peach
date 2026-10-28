import { useState, useSyncExternalStore } from 'react';
import { getLocale, LANGUAGE_CHOICES, normalizeLocale, setLocale, subscribeLocale } from '../../i18n';
import { useTranslation } from '../i18n';
import { Select, SelectItem } from '@/components/base/select/select';
import './language-setting.css';

/** 设备级界面偏好，不经过 ledger 设置接口。 */
export function LanguageSetting({ compact = false }: { compact?: boolean }) {
  const language = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  const t = useTranslation();
  const [error, setError] = useState(false);
  return <div data-language-setting="" className="peach-react">
    <div data-language-description=""><b id="interfaceLanguageLabel">{t('界面语言')}</b>
      {!compact ? <small id="interfaceLanguageHelp">{t('语言只影响当前浏览器，不修改馆藏内容。')}</small> : null}
    </div>
    <Select selectedKey={language} aria-labelledby="interfaceLanguageLabel" isInvalid={error}
      aria-describedby={error ? 'interfaceLanguageError' : compact ? undefined : 'interfaceLanguageHelp'}
      onSelectionChange={(value) => {
        const next = normalizeLocale(value);
        if (!next) return;
        try { setLocale(next); setError(false) } catch { setError(true) }
      }}>
      {LANGUAGE_CHOICES.map(([value, name]) => <SelectItem key={value} id={value} textValue={name}><span lang={value}>{name}</span></SelectItem>)}
    </Select>
    {error ? <p id="interfaceLanguageError" role="alert">{t('无法保存语言设置，请检查浏览器存储权限。')}</p> : null}
  </div>;
}
