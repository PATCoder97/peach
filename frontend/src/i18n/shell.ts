import { applyDocumentLocale, getLocale, subscribeLocale, translate } from './index';
import { translateSystem } from './system';

export function setShellText(node: HTMLElement, source: string): void {
  node.dataset.i18nText = source;
  node.textContent = translate(source);
}

export function setShellAttribute(node: HTMLElement, attribute: 'title' | 'aria-label' | 'placeholder', source: string): void {
  node.setAttribute(`data-i18n-${attribute}`, source);
  node.setAttribute(attribute, translate(source));
}

/** 只接管壳明确标记的界面属性，不遍历或翻译馆藏与用户输入。 */
export function installShellLocale(root: ParentNode = document): () => void {
  const attributes = ['title', 'aria-label', 'placeholder'] as const;
  let previous = getLocale();
  const update = () => {
    applyDocumentLocale();
    for (const node of root.querySelectorAll<HTMLElement>('[data-i18n-title],[data-i18n-aria-label],[data-i18n-placeholder],[data-i18n-text],[data-i18n-system]')) {
      // 路由已经改成另一种用途的属性由调用方负责，不能恢复成启动文案。
      for (const attribute of attributes) {
        const source = node.getAttribute(`data-i18n-${attribute}`);
        if (source === null) continue;
        const current = node.getAttribute(attribute);
        if (current === source || current === translate(source, {}, previous)) node.setAttribute(attribute, translate(source));
      }
      const source = node.dataset.i18nText;
      if (source !== undefined && (node.textContent === source || node.textContent === translate(source, {}, previous))) node.textContent = translate(source);
      const systemSource = node.dataset.i18nSystem;
      if (systemSource !== undefined && (node.textContent === systemSource || node.textContent === translateSystem(systemSource, previous))) node.textContent = translateSystem(systemSource);
    }
    previous = getLocale();
  };
  update();
  return subscribeLocale(update);
}
