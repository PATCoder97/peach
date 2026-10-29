import { esc } from '../core';
import { translate } from './index';
import { translateSystem } from './system';

/** 遗留 HTML 构件显式登记界面文字，语言变化只更新登记过的文本。 */
export const uiTextHtml = (source: string): string =>
  `<span data-i18n-text="${esc(source)}">${esc(translate(source))}</span>`;

export const systemTextHtml = (source: string): string =>
  `<span data-i18n-system="${esc(source)}">${esc(translateSystem(source))}</span>`;
