import { useCallback, useSyncExternalStore } from 'react';
import { getLocale, subscribeLocale, translate } from '../i18n';

/** 订阅语言变化，更新文案而不卸载表单或清空当前操作。 */
export function useTranslation(): typeof translate {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return useCallback<typeof translate>((source, values, language = locale) => translate(source, values, language), [locale]);
}
