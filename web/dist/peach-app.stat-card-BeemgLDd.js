(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d5a50dfc-6460-474c-8b98-90352d71cb42", e._sentryDebugIdIdentifier = "sentry-dbid-d5a50dfc-6460-474c-8b98-90352d71cb42");
	} catch {}
})();
import { cardClass as e, require_jsx_runtime as t, useSystemTranslation as n } from "./peach-app.js";
// src/react/components/stat-card.tsx
var r = t(), i = [
	"text-chart-6",
	"text-chart-5",
	"text-chart-7",
	"text-chart-8"
], a = [
	"bg-chart-6/10",
	"bg-chart-5/10",
	"bg-chart-7/10",
	"bg-chart-8/10"
];
function o(t = {}) {
	return `${e({
		...t,
		padding: "none"
	})} flex flex-col overflow-hidden pt-4 text-left`;
}
var s = "inline-grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4", c = "inline-grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 xl:grid-cols-6";
function l({ interactive: t = !1 } = {}) {
	return e({
		padding: "none",
		radius: "plain",
		interactive: t,
		className: "flex min-h-33 flex-col gap-2 p-4 text-left"
	});
}
var u = "inline-grid w-full grid-cols-5 gap-4 max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1";
function d({ label: e, icon: t, mark: i, aside: a, figure: o, meta: s, wrapMeta: c = !1 }) {
	let l = n();
	return /* @__PURE__ */ (0, r.jsxs)(r.Fragment, { children: [
		/* @__PURE__ */ (0, r.jsxs)("span", {
			className: "flex min-w-0 items-center gap-2 text-body-medium text-text-secondary",
			children: [
				t || i ? /* @__PURE__ */ (0, r.jsx)("i", {
					"aria-hidden": !0,
					className: "flex size-8 shrink-0 items-center justify-center rounded-md bg-background-primary-default text-text-primary",
					children: t ? /* @__PURE__ */ (0, r.jsx)(t, {
						"aria-hidden": !0,
						className: "size-4"
					}) : i
				}) : null,
				/* @__PURE__ */ (0, r.jsx)("span", {
					className: "min-w-0 truncate",
					children: l(e)
				}),
				a ? /* @__PURE__ */ (0, r.jsx)("span", {
					className: "ml-auto shrink-0 text-caption-1-regular",
					children: a
				}) : null
			]
		}),
		/* @__PURE__ */ (0, r.jsx)("strong", {
			className: "block text-title-1-medium tabular-nums text-text-primary",
			children: l(o)
		}),
		/* @__PURE__ */ (0, r.jsx)("span", {
			className: `block min-h-4 text-caption-1-regular text-text-tertiary ${c ? "" : "truncate"}`,
			children: s ? l(s) : null
		})
	] });
}
function f({ label: e, icon: t, accent: n = 0, figure: o, footer: s }) {
	return /* @__PURE__ */ (0, r.jsxs)(r.Fragment, { children: [
		/* @__PURE__ */ (0, r.jsxs)("span", {
			className: "flex min-w-0 items-center gap-2 px-4 text-body-regular text-text-secondary max-sm:gap-1.5 max-sm:px-3",
			children: [t ? /* @__PURE__ */ (0, r.jsx)("i", {
				"aria-hidden": !0,
				className: `flex size-7 shrink-0 items-center justify-center rounded-lg max-sm:size-6 ${i[n % 4]} ${a[n % 4]}`,
				children: /* @__PURE__ */ (0, r.jsx)(t, {
					"aria-hidden": !0,
					className: "size-4"
				})
			}) : null, /* @__PURE__ */ (0, r.jsx)("span", {
				className: "min-w-0 truncate",
				children: e
			})]
		}),
		/* @__PURE__ */ (0, r.jsx)("b", {
			className: "px-4 pt-3 pb-4 text-title-1-medium tabular-nums text-text-primary wrap-anywhere max-sm:px-3 max-sm:pb-3 max-sm:text-title-3-medium",
			children: o
		}),
		/* @__PURE__ */ (0, r.jsx)("small", {
			className: "mt-auto block min-h-9.5 bg-card-footer px-4 py-2.5 text-caption-1-regular text-text-secondary max-sm:px-3 max-sm:py-2",
			children: s
		})
	] });
}
export { u as PLAIN_STAT_STRIP, d as PlainStat, s as STAT_STRIP, c as STAT_STRIP_SIX, f as StatCard, l as plainStatClass, o as statCardClass };

//# debugId=d5a50dfc-6460-474c-8b98-90352d71cb42