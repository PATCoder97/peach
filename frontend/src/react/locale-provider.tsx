import { useSyncExternalStore, type ReactNode } from 'react';
import { I18nProvider } from 'react-aria';
import { getLocale, subscribeLocale } from '../i18n';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocale, getLocale);
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
