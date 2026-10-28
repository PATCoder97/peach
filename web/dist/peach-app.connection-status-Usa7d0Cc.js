(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0623d3a8-d3bd-478b-a51f-612368e47ebd", e._sentryDebugIdIdentifier = "sentry-dbid-0623d3a8-d3bd-478b-a51f-612368e47ebd");
	} catch {}
})();
import { cx as e, require_jsx_runtime as t, sortCx as n, useTranslation as r } from "./peach-app.js";
// src/react/boardui/components/base/badges/status-dot.tsx
var i = t(), a = n({
	base: "inline-flex size-3 shrink-0 items-center justify-center rounded-full",
	halo: {
		green: "bg-status-dot-green-halo",
		yellow: "bg-status-dot-yellow-halo",
		indigo: "bg-status-dot-indigo-halo"
	},
	dot: {
		green: "bg-green-500",
		yellow: "bg-yellow-500",
		indigo: "bg-indigo-500"
	}
});
function o({ color: t = "green", className: n, ref: r, ...o }) {
	return /* @__PURE__ */ (0, i.jsx)("span", {
		ref: r,
		"aria-hidden": !0,
		className: e(a.base, a.halo[t], n),
		...o,
		children: /* @__PURE__ */ (0, i.jsx)("span", { className: e("size-1.5 rounded-full", a.dot[t]) })
	});
}
// src/react/components/connection-status.tsx
var s = {
	success: "text-green-700 dark:text-green-400",
	warning: "text-status-yellow-text",
	progress: "text-notification-information-foreground",
	neutral: "text-text-secondary",
	error: "text-text-error-primary"
};
function c({ online: t, tone: n, children: a }) {
	let c = r(), l = n ?? (t === !0 ? "success" : t === !1 ? "warning" : "neutral");
	return /* @__PURE__ */ (0, i.jsxs)("span", {
		"data-mount": t === !0 ? "online" : t === !1 ? "offline" : "unknown",
		"data-connection-tone": l,
		className: e("inline-flex items-center gap-1.5 whitespace-nowrap text-body-2-medium", s[l]),
		children: [/* @__PURE__ */ (0, i.jsx)(o, { color: l === "success" ? "green" : l === "warning" ? "yellow" : "indigo" }), a == null ? c(t === !0 ? "在线" : t === !1 ? "离线" : "未检测") : typeof a == "string" ? c(a) : a]
	});
}
export { c as ConnectionStatus };

//# debugId=0623d3a8-d3bd-478b-a51f-612368e47ebd