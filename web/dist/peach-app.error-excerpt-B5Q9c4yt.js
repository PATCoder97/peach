(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "28226f15-0db3-4188-8565-5a3a1e3dc5f4", e._sentryDebugIdIdentifier = "sentry-dbid-28226f15-0db3-4188-8565-5a3a1e3dc5f4");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, readableErrorHeadline as r, require_jsx_runtime as i, require_react as a, useOverlayScrollbar as o, useTranslation as s } from "./peach-app.js";
// src/react/activity/error-excerpt.tsx
var c = /* @__PURE__ */ t(a(), 1), l = i();
function u({ children: e, label: t, id: r }) {
	let i = o();
	return /* @__PURE__ */ (0, l.jsx)("div", {
		"data-error-details": "",
		className: n({
			bordered: "soft",
			radius: "surface",
			padding: "none",
			className: "relative w-full min-w-0 overflow-hidden bg-background-tertiary-default"
		}),
		children: /* @__PURE__ */ (0, l.jsx)("div", {
			ref: i,
			id: r,
			role: "region",
			"aria-label": t,
			tabIndex: 0,
			className: "max-h-80 overflow-y-auto overscroll-contain p-3 text-body-2-regular whitespace-pre-line wrap-anywhere text-text-primary",
			children: e
		})
	});
}
function d({ text: t, className: n = "" }) {
	let i = s(), [a, o] = (0, c.useState)(!1), d = (0, c.useId)(), f = String(t || "").trim(), p = r(f);
	if (!p) return null;
	let m = p !== f;
	return /* @__PURE__ */ (0, l.jsxs)("div", {
		"data-error-excerpt": "",
		className: `flex min-w-0 max-w-full flex-col items-start gap-1 ${n}`,
		children: [a ? /* @__PURE__ */ (0, l.jsx)(u, {
			id: d,
			label: i("完整错误详情"),
			children: f
		}) : /* @__PURE__ */ (0, l.jsx)("p", {
			className: "w-full wrap-anywhere",
			children: p
		}), m ? /* @__PURE__ */ (0, l.jsx)(e, {
			variant: "ghost",
			size: "small",
			"data-error-details-toggle": "",
			className: "-ml-2",
			"aria-expanded": a,
			"aria-controls": a ? d : void 0,
			onClick: () => o(!a),
			children: i(a ? "收起详情" : "查看详情")
		}) : null]
	});
}
export { u as ErrorDetails, d as ErrorExcerpt };

//# debugId=28226f15-0db3-4188-8565-5a3a1e3dc5f4