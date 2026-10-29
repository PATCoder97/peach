import { useCallback, useSyncExternalStore } from 'react';
import { getLocale, subscribeLocale, translate } from '../i18n';
import { translateSystem } from '../i18n/system';

/** 明确的界面文案接收词条或已登记系统模板；来源字段仍由调用方原样呈现。 */
export function useTranslation(): typeof translate {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return useCallback<typeof translate>((source, values, language = locale) => {
    const text = translate(source, values, language);
    return text === source && (!values || Object.keys(values).length === 0)
      ? translateSystem(source, language) : text;
  }, [locale]);
}

/** 系统消息中的路径和名称只作为模板参数展示。 */
export function useSystemTranslation(): typeof translateSystem {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return useCallback<typeof translateSystem>((source, language = locale) => translateSystem(source, language), [locale]);
}
