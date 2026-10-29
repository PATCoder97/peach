(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "02cdaa5c-424c-4959-bcb8-0494e289f927", e._sentryDebugIdIdentifier = "sentry-dbid-02cdaa5c-424c-4959-bcb8-0494e289f927");
	} catch {}
})();
import { Button as e, CloudDownloadDialog as t, CollectionSummary as n, EmptyState as r, LOC as i, Note as a, OA as o, QUALITY_GOALS_KEY as s, __toESM as c, cardClass as l, errorMessage as u, fetchQualityGoals as d, fmtDur as f, fmtSize as p, previewUrl as m, require_jsx_runtime as h, require_react as g, useQuery as _, useTranslation as v } from "./peach-app.js";
import { Page as y } from "./peach-app.page-QAncjzM1.js";
// src/react/quality-goals/quality-goals-page.tsx
var b = /* @__PURE__ */ c(g(), 1), x = h();
function S({ item: t, openItem: n, searchResources: r, javTitleHtml: a, javDisplayName: o, srcBadge: s }) {
	let c = v(), u = () => n(t.id);
	return /* @__PURE__ */ (0, x.jsxs)("li", {
		"data-goal-id": t.id,
		className: l({
			padding: "none",
			bordered: "soft",
			className: "flex flex-col gap-3 p-3"
		}),
		children: [/* @__PURE__ */ (0, x.jsxs)("div", {
			className: "flex min-w-0 gap-4",
			children: [/* @__PURE__ */ (0, x.jsxs)("button", {
				type: "button",
				onClick: u,
				"aria-label": c("打开 {value0}", { value0: String(o(t)) }),
				className: "relative inline-grid w-card-cover shrink-0 self-start aspect-card-cover cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
				children: [/* @__PURE__ */ (0, x.jsx)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: c("暂无预览")
				}), /* @__PURE__ */ (0, x.jsx)("img", {
					src: m(t),
					alt: "",
					loading: "lazy",
					onError: (e) => e.currentTarget.remove(),
					className: "absolute inset-0 size-full object-contain"
				})]
			}), /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, x.jsx)("h3", {
						className: "text-headline-medium text-text-primary",
						children: /* @__PURE__ */ (0, x.jsx)("button", {
							type: "button",
							onClick: u,
							title: o(t),
							className: "line-clamp-2 w-full cursor-pointer text-left wrap-anywhere",
							dangerouslySetInnerHTML: { __html: a(t) }
						})
					}),
					/* @__PURE__ */ (0, x.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [
							/* @__PURE__ */ (0, x.jsx)("span", {
								className: "contents",
								dangerouslySetInnerHTML: { __html: s(t.location, t.cost) }
							}),
							/* @__PURE__ */ (0, x.jsx)("span", { children: i[t.location] ?? t.location }),
							/* @__PURE__ */ (0, x.jsx)("span", { children: f(t.duration) }),
							/* @__PURE__ */ (0, x.jsx)("span", { children: Number(t.size) > 0 ? p(Number(t.size)) : c("大小未知") })
						]
					}),
					t.reason ? /* @__PURE__ */ (0, x.jsx)("p", {
						className: "border-t border-separator-border pt-3 text-body-2-regular text-text-secondary wrap-anywhere",
						children: t.reason
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, x.jsxs)("footer", {
			className: "flex flex-wrap justify-end gap-2",
			children: [t.code ? /* @__PURE__ */ (0, x.jsx)(e, {
				variant: "secondary",
				size: "small",
				onClick: () => r({
					code: t.code,
					title: o(t),
					origin: `asset:${t.id}`,
					searchReason: t.reason || "",
					duration: t.duration,
					cover: m(t)
				}),
				children: c("查找资源")
			}) : null, /* @__PURE__ */ (0, x.jsx)(e, {
				variant: "secondary",
				size: "small",
				onClick: u,
				children: c("查看版本")
			})]
		})]
	});
}
function C({ toast: e, ...i }) {
	let c = v(), [l, f] = (0, b.useState)(null), p = _({
		queryKey: s,
		queryFn: ({ signal: e }) => d(e)
	}), m = p.data;
	if (!m) return /* @__PURE__ */ (0, x.jsx)(y, { children: /* @__PURE__ */ (0, x.jsx)(a, {
		tone: "error",
		title: c("高清版目标读取失败"),
		children: p.error ? u(p.error) : c("未取得高清版目标，请刷新页面重试。")
	}) });
	let h = m.items || [];
	return h.length ? /* @__PURE__ */ (0, x.jsxs)(y, { children: [
		/* @__PURE__ */ (0, x.jsx)(n, {
			label: c("待升级"),
			figure: `${Number(m.total || 0).toLocaleString()} 部作品`,
			flush: !0
		}),
		/* @__PURE__ */ (0, x.jsx)("ul", {
			className: "card-grid-cover gap-5",
			children: h.map((e) => /* @__PURE__ */ (0, x.jsx)(S, {
				item: e,
				...i,
				searchResources: f
			}, e.id))
		}),
		Number(m.total || 0) > h.length ? /* @__PURE__ */ (0, x.jsx)("p", {
			className: "mt-6 text-center text-caption-1-regular text-text-secondary",
			children: c("显示前 {value0} 部，共 {value1} 部。", {
				value0: String(h.length.toLocaleString()),
				value1: String(Number(m.total).toLocaleString())
			})
		}) : null,
		/* @__PURE__ */ (0, x.jsx)(t, {
			prefill: l,
			close: () => f(null),
			receipt: e
		})
	] }) : /* @__PURE__ */ (0, x.jsx)(y, { children: /* @__PURE__ */ (0, x.jsx)(r, {
		icon: o,
		title: c("没有标记中的高清版目标"),
		children: c("现有版本都已满足条件，或还没有加入追踪。")
	}) });
}
export { C as QualityGoalsPage };

//# debugId=02cdaa5c-424c-4959-bcb8-0494e289f927