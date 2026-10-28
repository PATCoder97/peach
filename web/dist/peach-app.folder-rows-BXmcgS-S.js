(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c89f37ea-8a0c-4bb3-b695-500440f0e245", e._sentryDebugIdIdentifier = "sentry-dbid-c89f37ea-8a0c-4bb3-b695-500440f0e245");
	} catch {}
})();
import { Button as e, CLOUD_LOCATIONS as t, ErrorText as n, Help as r, IconButton as i, Input as a, Label as o, M6 as s, MEDIA_SOURCE_ICONS as c, MEDIA_SOURCE_OPTIONS as l, Select$1 as u, SelectItem as d, SourceMark as f, __toESM as p, busyProps as m, cx as h, require_jsx_runtime as g, require_react as _, translate as v, useTranslation as y } from "./peach-app.js";
// src/react/settings/folder-rows.tsx
var b = /* @__PURE__ */ p(_(), 1), x = g();
function S({ className: e }) {
	return /* @__PURE__ */ (0, x.jsx)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		children: /* @__PURE__ */ (0, x.jsx)("use", { href: "#i-folder-search" })
	});
}
var C = l, w = (e) => c[e] || "database", T = (e) => t.includes(e);
function E({ label: e, className: t, children: n }) {
	return /* @__PURE__ */ (0, x.jsxs)("div", {
		className: h("flex min-w-0 flex-col gap-1", t),
		children: [/* @__PURE__ */ (0, x.jsx)(o, {
			elementType: "span",
			"aria-hidden": !0,
			children: e
		}), n]
	});
}
function D({ children: e }) {
	return /* @__PURE__ */ (0, x.jsx)("div", {
		className: "flex w-full flex-wrap items-start gap-2",
		children: e
	});
}
function O({ index: e, cost: t, error: r, onChange: i }) {
	let a = y();
	return y(), /* @__PURE__ */ (0, x.jsxs)("div", {
		"data-media-read-policy": e,
		className: "flex w-full flex-col gap-1 @lg:w-32",
		children: [
			/* @__PURE__ */ (0, x.jsx)(o, {
				elementType: "span",
				"aria-hidden": !0,
				children: v("读取策略")
			}),
			/* @__PURE__ */ (0, x.jsxs)(u, {
				"aria-label": a("媒体读取策略 {value0}", { value0: String(e + 1) }),
				placeholder: v("选择读取策略"),
				isRequired: !0,
				validationBehavior: "aria",
				isInvalid: !!r,
				selectedKey: t || null,
				onSelectionChange: (e) => {
					(e === "free" || e === "metered") && i(e);
				},
				children: [/* @__PURE__ */ (0, x.jsx)(d, {
					id: "free",
					children: v("正常读取")
				}), /* @__PURE__ */ (0, x.jsx)(d, {
					id: "metered",
					children: v("代理保护")
				})]
			}),
			r ? /* @__PURE__ */ (0, x.jsx)(n, { children: r }) : null
		]
	});
}
function k() {
	return y(), /* @__PURE__ */ (0, x.jsx)(r, { children: v("读取策略选「代理保护」时，会限制自动读取视频。") });
}
function A({ initial: e, blank: t, pickFolder: n, describe: r, focusAfterPick: i = !1 }) {
	let [a, o] = (0, b.useState)(e), [s, c] = (0, b.useState)([]), [l, u] = (0, b.useState)(null), [d, f] = (0, b.useState)(null), p = (0, b.useRef)(!1), m = (0, b.useRef)([]);
	(0, b.useLayoutEffect)(() => {
		l !== null && (m.current[l]?.focus(), u(null));
	}, [l]);
	let h = (e, t) => o((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), g = (e, t) => c((n) => {
		let r = [...n];
		for (; r.length <= e;) r.push("");
		return r[e] = t, r;
	});
	return {
		rows: a,
		edit: h,
		add: () => {
			u(a.length), o((e) => [...e, t()]);
		},
		remove: (e) => {
			o((t) => t.filter((t, n) => n !== e)), c((t) => t.filter((t, n) => n !== e));
		},
		errors: s,
		setErrors: c,
		picking: d,
		pick: async (e) => {
			if (!p.current) {
				p.current = !0, f(e);
				try {
					let t = await n(a[e]?.path ?? "");
					t && (h(e, { path: t }), g(e, "")), i && u(e);
				} catch (t) {
					g(e, r(t));
				} finally {
					p.current = !1, f(null);
				}
			}
		},
		inputRef: (e) => (t) => {
			m.current[e] = t;
		}
	};
}
function j({ label: t, path: n, onPath: r, error: o, inputRef: c, picking: l, onPick: u, onRemove: d, status: f, children: p }) {
	y();
	let h = (0, b.useRef)(null), g = () => {
		let e = h.current;
		e && e.ownerDocument.activeElement !== e && (e.scrollLeft = e.scrollWidth);
	};
	return (0, b.useLayoutEffect)(() => {
		h.current && (h.current.title = n), g();
	}, [n]), /* @__PURE__ */ (0, x.jsxs)("div", {
		"data-folder-row": !0,
		className: "@container flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, x.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [
				/* @__PURE__ */ (0, x.jsx)(a, {
					className: "min-w-0 flex-1",
					"aria-label": t,
					placeholder: v("媒体目录路径"),
					value: n,
					onChange: r,
					ref: (e) => {
						h.current = e, c(e);
					},
					onBlur: () => requestAnimationFrame(g),
					validationBehavior: "aria",
					isInvalid: !!o,
					hint: o || void 0
				}),
				f ? /* @__PURE__ */ (0, x.jsx)("div", {
					className: "flex h-9 shrink-0 items-center",
					children: f
				}) : null,
				/* @__PURE__ */ (0, x.jsx)(i, {
					icon: S,
					"aria-label": v("选择文件夹"),
					onClick: u,
					...m(l)
				}),
				d ? /* @__PURE__ */ (0, x.jsx)(e, {
					variant: "danger",
					iconOnly: !0,
					leadingIcon: s,
					"aria-label": v("移除这个文件夹"),
					onClick: d
				}) : null
			]
		}), /* @__PURE__ */ (0, x.jsx)("div", {
			className: "flex flex-wrap items-end gap-2",
			children: p
		})]
	});
}
function M({ index: e, value: t, onChange: n, options: r = C }) {
	let i = y();
	return y(), /* @__PURE__ */ (0, x.jsx)(E, {
		label: v("来源"),
		className: "w-full @lg:w-60",
		children: /* @__PURE__ */ (0, x.jsx)(u, {
			className: "w-full",
			"aria-label": i("媒体来源 {value0}", { value0: String(e + 1) }),
			selectedKey: t,
			onSelectionChange: (e) => {
				e !== null && n(String(e));
			},
			children: r.map(([e, t]) => /* @__PURE__ */ (0, x.jsxs)(d, {
				id: e,
				textValue: v(t),
				children: [/* @__PURE__ */ (0, x.jsx)(f, { mark: w(e) }), v(t)]
			}, e))
		})
	});
}
export { E as FolderField, D as FolderFieldLine, j as FolderRow, S as FolderSearchIcon, C as MEDIA_SOURCES, O as MediaReadPolicy, k as MediaReadPolicyHelp, M as SourceSelect, T as isCloudSource, w as sourceMark, A as useFolderRows };

//# debugId=c89f37ea-8a0c-4bb3-b695-500440f0e245