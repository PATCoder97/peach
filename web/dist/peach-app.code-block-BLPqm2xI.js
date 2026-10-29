(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "09c542eb-c39a-4db4-9e16-60c334e87749", e._sentryDebugIdIdentifier = "sentry-dbid-09c542eb-c39a-4db4-9e16-60c334e87749");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, cx as r, require_jsx_runtime as i, require_react as a, useOverlayScrollbar as o, useTranslation as s } from "./peach-app.js";
// src/react/components/code-block.tsx
var c = /* @__PURE__ */ t(a(), 1), l = i();
function u({ code: t, language: i, label: a, maxCharacters: u, bounded: d = !0, copyLabel: f, onCopy: p }) {
	let m = s(), h = o(), [g, _] = (0, c.useState)(""), [v, y] = (0, c.useState)(!1);
	(0, c.useEffect)(() => {
		_(""), y(!1);
	}, [t]);
	let b = u !== void 0 && t.length > u, x = async () => {
		try {
			await navigator.clipboard.writeText(t), y(!1), _("已复制"), p?.();
		} catch {
			y(!0), _("复制失败，请选中文本复制。");
		}
	};
	return /* @__PURE__ */ (0, l.jsxs)("div", {
		className: r(n({
			bordered: "soft",
			radius: "plain",
			padding: "none"
		}), "overflow-hidden bg-background-tertiary-default"),
		"data-code-block": !0,
		children: [
			/* @__PURE__ */ (0, l.jsxs)("div", {
				className: "flex min-w-0 items-center justify-between gap-3 border-b border-separator-border px-3 py-2",
				children: [/* @__PURE__ */ (0, l.jsx)("span", {
					className: "text-caption-1-medium text-text-secondary",
					children: i.toUpperCase()
				}), /* @__PURE__ */ (0, l.jsx)(e, {
					variant: "secondary",
					size: "small",
					onClick: () => void x(),
					children: m(f || (b ? "复制完整内容" : "复制代码"))
				})]
			}),
			/* @__PURE__ */ (0, l.jsx)("div", {
				className: "relative min-w-0",
				children: /* @__PURE__ */ (0, l.jsx)("pre", {
					ref: h,
					tabIndex: 0,
					"aria-label": a,
					className: r("m-0 overflow-auto overscroll-contain p-3 font-mono text-caption-1-regular whitespace-pre text-text-primary", d && "max-h-80"),
					children: /* @__PURE__ */ (0, l.jsx)("code", { children: u === void 0 ? t : t.slice(0, u) })
				})
			}),
			g ? /* @__PURE__ */ (0, l.jsx)("p", {
				role: v ? "alert" : "status",
				className: "m-0 px-3 pb-2 text-caption-1-regular text-text-secondary",
				children: m(g)
			}) : null
		]
	});
}
export { u as CodeBlock };

//# debugId=09c542eb-c39a-4db4-9e16-60c334e87749