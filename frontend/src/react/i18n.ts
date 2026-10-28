import { useCallback, useSyncExternalStore } from 'react';
import { getLocale, subscribeLocale, translate } from '../i18n';
import { translateSystem } from '../i18n/system';

/** 订阅语言变化，更新文案而不卸载表单或清空当前操作。 */
export function useTranslation(): typeof translate {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return useCallback<typeof translate>((source, values, language = locale) => translate(source, values, language), [locale]);
}

/** 系统消息中的路径和名称只作为模板参数展示。 */
export function useSystemTranslation(): typeof translateSystem {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return useCallback<typeof translateSystem>((source, language = locale) => translateSystem(source, language), [locale]);
}
