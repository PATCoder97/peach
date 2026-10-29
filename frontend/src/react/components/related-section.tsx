import { useTranslation as useUiTranslation } from "../i18n";
import { useCallback, type ComponentPropsWithoutRef } from 'react';
import { fitSkeleton } from '@peach/legacy/ui';
import { RiVideoLine } from '@remixicon/react';
import { ButtonLink } from '@/components/base/buttons/button';
import { EmptyState } from './empty-state';
import { RetryNote } from './grid-reveal';

/** 两种详情的推荐带：标题、横滚与骨架占位共用一处。 */
export function RelatedSection({ children, wireDrag, busy, empty, error, onRetry, online = false, ...attrs }: ComponentPropsWithoutRef<'div'> & {
  wireDrag(row: Element): void; busy?: boolean; empty?: boolean; error?: string; onRetry?: () => void; online?: boolean;
}) {
  const uiText = useUiTranslation();
  const row = useCallback((node: HTMLDivElement | null) => {
    if (node) { fitSkeleton(node); wireDrag(node) }
  }, [wireDrag]);
  return <div {...attrs} data-item-related="" aria-busy={busy || undefined}>
    <h3 className="font-semibold">{uiText("接着看")}</h3>
    {error ? <div data-related-state=""><RetryNote message={error} onRetry={onRetry || (() => {})} /></div>
      : empty && !busy ? <div data-related-state=""><EmptyState size="compact" icon={RiVideoLine} title={uiText("暂无接着看的内容")}
        actions={<ButtonLink size="small" href={online ? '/follow' : '/'}>{online ? uiText("返回关注") : uiText("浏览馆藏")}</ButtonLink>}>{uiText("可以回到列表挑选其他作品。")}</EmptyState></div>
      : <div ref={row} id="nrow" data-related-row="">{children}</div>}
  </div>;
}
