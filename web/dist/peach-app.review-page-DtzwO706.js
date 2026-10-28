(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e56f58f-7143-439a-a063-7a6dd61f99a7", e._sentryDebugIdIdentifier = "sentry-dbid-3e56f58f-7143-439a-a063-7a6dd61f99a7");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $ea3928288112382f$export$439d29a4e110a164 as r, $fe21c36db05242bb$export$a98f0dcb43a68a25 as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, Button as o, ButtonLink as s, Checkbox as c, CheckboxGlyph as l, Chip as u, CollapseChevron as d, CollapseRegion as f, DEFAULT_CATEGORY as p, ENTITY_REVIEW_KINDS as m, Ea as h, EmptyState as ee, ExternalLink as te, FIELDSET_FOOT as g, FilterGlassRows as _, Gg as v, InputBase as y, LinkButton as ne, Note as b, REVIEW_CATEGORIES as x, REVIEW_DECISION_LABELS as re, REVIEW_KEY as S, REVIEW_LABELS as C, REVIEW_QUEUES as ie, REVIEW_QUEUE_LABELS as w, Select as T, SelectItem as E, SelectionActions as D, SelectionDock as O, TextField as k, Wt as A, __toESM as j, avatarInner as M, busyProps as N, canApprove as ae, cardClass as oe, commonReviewSources as P, currentReviewRow as F, cx as I, decisionPayload as se, decisionReceipt as ce, defaultChoice as le, errorMessage as ue, fetchReview as de, filterReviewRows as fe, groupReviewRows as pe, isReviewCategory as me, l7 as L, m7 as he, mirrorText as ge, paginationRange as _e, pendingGenres as R, recordGenre as ve, reloadReview as ye, require_jsx_runtime as be, require_react as xe, reviewGroupingOptions as Se, reviewQueueData as Ce, reviewQueueOf as we, reviewWindow as Te, rowEvidence as Ee, rowFieldName as De, rowSubject as z, rowTags as B, rowTitle as Oe, selectReviewRange as ke, settleReviewRows as Ae, spinnerHtml as je, submitDecision as Me, useMutation as Ne, useOverlayScrollbar as V, useQuery as Pe, useTranslation as H, useViewGlide as U } from "./peach-app.js";
import { Page as Fe } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Ie } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as Le } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
// src/react/review/bulk-toolbar.tsx
var W = /* @__PURE__ */ j(xe(), 1), G = be();
function Re(e) {
	let t = H(), { groupOptions: n, groupBy: r, onGroupBy: i, groups: a, filter: s, onFilter: c, pageKeys: l, selected: u, onSelected: d, selectedRows: f, metadata: p, approvable: m, busy: h, feedback: ee, onUnifySource: te, onRun: g, queueView: v = "pending", queueCounts: y, onQueueChange: ne, locked: b, fields: x, fieldFilter: re, onFieldFilter: S } = e, C = l.filter((e) => u.has(e)), D = C.length > 0 && C.length === l.length, k = P(f), A = p && f.some((e) => (e.candidates?.length || 0) > 1), j = k.length ? "统一选择来源" : "所选项目无共同来源", M = (0, W.useRef)(null), N = (0, W.useRef)(null), ae = (0, W.useRef)(null), [oe, F] = (0, W.useState)(!1), I = U(M, N, "[data-entity-state][aria-pressed=\"true\"]", v);
	return (0, W.useLayoutEffect)(() => {
		let e = N.current, t = ae.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => F(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)(_, {
		label: t("复核筛选"),
		topLabel: t("处理状态"),
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: l.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: ae,
		panes: /* @__PURE__ */ (0, G.jsx)("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ (0, G.jsxs)("div", {
			ref: N,
			role: "group",
			"aria-label": t("复核状态"),
			"data-entity-states": "",
			onPointerLeave: I.leave,
			children: [ie.map((e) => /* @__PURE__ */ (0, G.jsxs)("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: h,
				"aria-pressed": v === e,
				onPointerEnter: I.hover,
				onClick: () => {
					e !== v && ne(e);
				},
				children: [
					/* @__PURE__ */ (0, G.jsx)("span", {
						"data-copy-key": `review.queue.${e}`,
						children: t(w[e])
					}),
					" ",
					/* @__PURE__ */ (0, G.jsx)("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: y ? y[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ (0, G.jsx)("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: oe ? void 0 : "invisible"
			})]
		}),
		bottom: l.length ? /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [
			p && x.length ? /* @__PURE__ */ (0, G.jsxs)(T, {
				"aria-label": t("筛选资料字段"),
				size: "sm",
				prefix: /* @__PURE__ */ (0, G.jsx)("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: t("字段")
				}),
				selectedKey: re || "*",
				isDisabled: h,
				onSelectionChange: (e) => {
					e !== null && S(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, G.jsx)(E, {
					id: "*",
					children: t("全部")
				}), x.map((e) => /* @__PURE__ */ (0, G.jsx)(E, {
					id: e.key,
					children: `${t(e.title)} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ (0, G.jsx)(T, {
				"aria-label": t("筛选分组方式"),
				size: "sm",
				selectedKey: r,
				onSelectionChange: (e) => {
					e !== null && i(String(e));
				},
				children: n.map(([e, n]) => /* @__PURE__ */ (0, G.jsx)(E, {
					id: e,
					children: t(n)
				}, e))
			}),
			a.length > 1 ? /* @__PURE__ */ (0, G.jsxs)(T, {
				"aria-label": t(r === "field" ? "筛选字段分类" : "筛选当前分类"),
				size: "sm",
				prefix: t("分类"),
				selectedKey: s || "*",
				onSelectionChange: (e) => {
					e !== null && c(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, G.jsx)(E, {
					id: "*",
					children: t("全部")
				}), a.map((e) => /* @__PURE__ */ (0, G.jsx)(E, {
					id: e.key,
					children: `${t(e.title)} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			b ? null : /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				leadingIcon: L,
				"aria-pressed": D,
				disabled: h,
				onClick: () => {
					let e = new Set(u);
					for (let t of l) D ? e.delete(t) : e.add(t);
					d(e);
				},
				children: t(D ? "清空当前选择" : s ? "全选当前分类" : "全选本页")
			})
		] }) : null
	}), /* @__PURE__ */ (0, G.jsxs)(O, {
		label: t("复核所选项目"),
		visible: !b && u.size > 0,
		count: `已选 ${u.size} 项`,
		children: [
			A && v !== "ignored" ? /* @__PURE__ */ (0, G.jsxs)(T, {
				"aria-label": t("统一选择来源"),
				size: "sm",
				selectedKey: "",
				isDisabled: h || !k.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && te(String(e));
				},
				children: [/* @__PURE__ */ (0, G.jsx)(E, {
					id: "",
					children: j
				}), k.map((e) => /* @__PURE__ */ (0, G.jsx)(E, {
					id: e,
					children: e
				}, e))]
			}) : null,
			v === "ignored" ? null : /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "ghost",
				size: "small",
				disabled: h || !u.size,
				onClick: () => g("rejected"),
				children: t("忽略所选")
			}),
			v === "pending" ? /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: h || !u.size,
				onClick: () => g("skipped"),
				children: t("稍后处理所选")
			}) : /* @__PURE__ */ (0, G.jsx)(o, {
				variant: v === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: h || !u.size,
				onClick: () => g("restore"),
				children: t("恢复所选")
			}),
			v === "ignored" ? null : /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "primary",
				size: "small",
				disabled: h || !u.size || !m,
				onClick: () => g("approved"),
				children: t("通过所选")
			}),
			/* @__PURE__ */ (0, G.jsx)(o, {
				variant: "ghost",
				size: "small",
				disabled: h,
				onClick: () => d(/* @__PURE__ */ new Set()),
				children: t("取消选择")
			}),
			ee ? /* @__PURE__ */ (0, G.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: ee
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio.tsx
var ze = {
	sm: {
		dot: "size-3.5",
		inner: "size-[5px]",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_0.875px_var(--color-accent-500),inset_0px_1.75px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border-[0.875px]",
		gap: "gap-2",
		label: "text-body-2-medium"
	},
	md: {
		dot: "size-4",
		inner: "size-1.5",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_1px_var(--color-accent-500),inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border",
		gap: "gap-2",
		label: "text-body-medium"
	}
};
function Be({ selected: e = !1, size: t = "sm", focusVisible: n = !1, className: r }) {
	let i = ze[t];
	return /* @__PURE__ */ (0, G.jsxs)("span", {
		"aria-hidden": !0,
		className: I("relative flex shrink-0 items-center justify-center rounded-full", i.dot, n && "ring-2 ring-border-focus-ring ring-offset-2", r),
		children: [
			/* @__PURE__ */ (0, G.jsx)("span", { className: I("absolute inset-0 rounded-full border-border-checkbox-default bg-background-primary-default shadow-xs", "transition-opacity duration-200 ease", i.border, e && "opacity-0") }),
			/* @__PURE__ */ (0, G.jsx)("span", { className: I("absolute inset-0 rounded-full", "transition-opacity duration-200 ease", i.selected, !e && "opacity-0") }),
			/* @__PURE__ */ (0, G.jsx)("span", { className: I("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-control-indicator-background", "transition-[scale,opacity] duration-200 ease", i.inner, e ? "scale-100 opacity-100" : "scale-0 opacity-0") })
		]
	});
}
function K({ className: e, children: t, ref: n, ...r }) {
	return /* @__PURE__ */ (0, G.jsx)(i, {
		ref: n,
		...r,
		className: (t) => I("flex flex-col gap-2", typeof e == "function" ? e(t) : e),
		children: t
	});
}
// src/react/boardui/components/base/radio/radio-card.tsx
function Ve({ className: e, title: t, description: n, ref: r, ...i }) {
	return /* @__PURE__ */ (0, G.jsx)(a, {
		ref: r,
		...i,
		className: (t) => I("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsxs)("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, G.jsx)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: t
			}), n != null && /* @__PURE__ */ (0, G.jsx)("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: n
			})]
		}), /* @__PURE__ */ (0, G.jsx)("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ (0, G.jsx)(Be, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// node_modules/diff/libesm/diff/base.js
var q = class {
	diff(e, t, n = {}) {
		let r;
		typeof n == "function" ? (r = n, n = {}) : "callback" in n && (r = n.callback);
		let i = this.castInput(e, n), a = this.castInput(t, n), o = this.removeEmpty(this.tokenize(i, n)), s = this.removeEmpty(this.tokenize(a, n));
		return this.diffWithOptionsObj(o, s, n, r);
	}
	diffWithOptionsObj(e, t, n, r) {
		let i = (e) => {
			if (e = this.postProcess(e, n), r) setTimeout(function() {
				r(e);
			}, 0);
			else return e;
		}, a = t.length, o = e.length, s = 1, c = a + o;
		n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
		let l = n.timeout ?? Infinity, u = Date.now() + l, d = [{
			oldPos: -1,
			lastComponent: void 0
		}], f = this.extractCommon(d[0], t, e, 0, n);
		if (d[0].oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(d[0].lastComponent, t, e));
		let p = -Infinity, m = Infinity, h = () => {
			for (let r = Math.max(p, -s); r <= Math.min(m, s); r += 2) {
				let s, c = d[r - 1], l = d[r + 1];
				c && (d[r - 1] = void 0);
				let u = !1;
				if (l) {
					let e = l.oldPos - r;
					u = l && 0 <= e && e < a;
				}
				let h = c && c.oldPos + 1 < o;
				if (!u && !h) d[r] = void 0;
				else {
					if (s = !h || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, n) : this.addToPath(c, !1, !0, 1, n), f = this.extractCommon(s, t, e, r, n), s.oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(s.lastComponent, t, e)) || !0;
					d[r] = s, s.oldPos + 1 >= o && (m = Math.min(m, r - 1)), f + 1 >= a && (p = Math.max(p, r + 1));
				}
			}
			s++;
		};
		if (r) (function e() {
			setTimeout(function() {
				if (s > c || Date.now() > u) return r(void 0);
				h() || e();
			}, 0);
		})();
		else for (; s <= c && Date.now() <= u;) {
			let e = h();
			if (e) return e;
		}
	}
	addToPath(e, t, n, r, i) {
		let a = e.lastComponent;
		return a && !i.oneChangePerToken && a.added === t && a.removed === n ? {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: a.count + 1,
				added: t,
				removed: n,
				previousComponent: a.previousComponent
			}
		} : {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: 1,
				added: t,
				removed: n,
				previousComponent: a
			}
		};
	}
	extractCommon(e, t, n, r, i) {
		let a = t.length, o = n.length, s = e.oldPos, c = s - r, l = 0;
		for (; c + 1 < a && s + 1 < o && this.equals(n[s + 1], t[c + 1], i);) c++, s++, l++, i.oneChangePerToken && (e.lastComponent = {
			count: 1,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		});
		return l && !i.oneChangePerToken && (e.lastComponent = {
			count: l,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		}), e.oldPos = s, c;
	}
	equals(e, t, n) {
		return n.comparator ? n.comparator(e, t) : e === t || !!n.ignoreCase && e.toLowerCase() === t.toLowerCase();
	}
	removeEmpty(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) e[n] && t.push(e[n]);
		return t;
	}
	castInput(e, t) {
		return e;
	}
	tokenize(e, t) {
		return Array.from(e);
	}
	join(e) {
		return e.join("");
	}
	postProcess(e, t) {
		return e;
	}
	get useLongestToken() {
		return !1;
	}
	buildValues(e, t, n) {
		let r = [], i;
		for (; e;) r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
		r.reverse();
		let a = r.length, o = 0, s = 0, c = 0;
		for (; o < a; o++) {
			let e = r[o];
			if (e.removed) e.value = this.join(n.slice(c, c + e.count)), c += e.count;
			else {
				if (!e.added && this.useLongestToken) {
					let r = t.slice(s, s + e.count);
					r = r.map(function(e, t) {
						let r = n[c + t];
						return r.length > e.length ? r : e;
					}), e.value = this.join(r);
				} else e.value = this.join(t.slice(s, s + e.count));
				s += e.count, e.added || (c += e.count);
			}
		}
		return r;
	}
}, He = new class extends q {}();
function Ue(e, t, n) {
	return He.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function J(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function We(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function Ge(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function Ke(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function Y(e, t) {
	return Ge(e, t, "");
}
function X(e, t) {
	return Ke(e, t, "");
}
function qe(e, t) {
	return t.slice(0, Je(e, t));
}
function Je(e, t) {
	let n = 0;
	e.length > t.length && (n = e.length - t.length);
	let r = t.length;
	e.length < t.length && (r = e.length);
	let i = Array(r), a = 0;
	i[0] = 0;
	for (let e = 1; e < r; e++) {
		for (t[e] == t[a] ? i[e] = i[a] : i[e] = a; a > 0 && t[e] != t[a];) a = i[a];
		t[e] == t[a] && a++;
	}
	a = 0;
	for (let r = n; r < e.length; r++) {
		for (; a > 0 && e[r] != t[a];) a = i[a];
		e[r] == t[a] && a++;
	}
	return a;
}
function Ye(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function Xe(e, t) {
	if (t) return Q(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function Z(e, t) {
	if (t) return Q(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function Q(e, t) {
	if (!t) return [Z(e), Xe(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = Ye(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var $ = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Ze = RegExp(`[${$}]+|\\s+|[^${$}]`, "ug");
new class extends q {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = Ye(e, r);
		} else n = e.match(Ze) || [];
		let r = [], i = null;
		return n.forEach((e) => {
			/\s/.test(e) ? i == null ? r.push(e) : r.push(r.pop() + e) : i != null && /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + e) : r.push(i + e) : r.push(e), i = e;
		}), r;
	}
	join(e) {
		return e.map((e, t) => t == 0 ? e : e.replace(/^\s+/, "")).join("");
	}
	postProcess(e, t) {
		if (!e || t.oneChangePerToken) return e;
		let n = null, r = null, i = null;
		return e.forEach((e) => {
			e.added ? r = e : e.removed ? i = e : ((r || i) && Qe(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && Qe(n, i, r, null, t.intlSegmenter), e;
	}
}();
function Qe(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = Q(t.value, i), [s, c] = Q(n.value, i);
		if (e) {
			let r = J(a, s);
			e.value = Ke(e.value, s, r), t.value = Y(t.value, r), n.value = Y(n.value, r);
		}
		if (r) {
			let e = We(o, c);
			r.value = Ge(r.value, c, e), t.value = X(t.value, e), n.value = X(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = Z(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = Z(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = Z(r.value, i), [a, o] = Q(t.value, i), s = J(n, a);
		t.value = Y(t.value, s);
		let c = We(Y(n, s), o);
		t.value = X(t.value, c), r.value = Ge(r.value, n, c), e.value = Ke(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = Z(r.value, i), n = qe(Xe(t.value, i), e);
		t.value = X(t.value, n);
	} else if (e) {
		let n = qe(Xe(e.value, i), Z(t.value, i));
		t.value = Y(t.value, n);
	}
}
new class extends q {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${$}]+|[^\\S\\n\\r]+|[^${$}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends q {
	constructor() {
		super(...arguments), this.tokenize = $e;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function $e(e, t) {
	t.stripTrailingCr && (e = e.replace(/\r\n/g, "\n"));
	let n = [], r = e.split(/(\n|\r\n)/);
	r[r.length - 1] || r.pop();
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		e % 2 && !t.newlineIsToken ? n[n.length - 1] += i : n.push(i);
	}
	return n;
}
// node_modules/diff/libesm/diff/sentence.js
function et(e) {
	return e == "." || e == "!" || e == "?";
}
new class extends q {
	tokenize(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			if (r == e.length - 1) {
				t.push(e.slice(n));
				break;
			}
			if (et(e[r]) && e[r + 1].match(/\s/)) {
				for (t.push(e.slice(n, r + 1)), r = n = r + 1; e[r + 1]?.match(/\s/);) r++;
				t.push(e.slice(n, r + 1)), n = r + 1;
			}
		}
		return t;
	}
}(), new class extends q {
	tokenize(e) {
		return e.split(/([{}:;,]|\s+)/);
	}
}(), new class extends q {
	constructor() {
		super(...arguments), this.tokenize = $e;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify(tt(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function tt(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = tt(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = tt(e[s], t, n, r, s);
		t.pop(), n.pop();
	} else o = e;
	return o;
}
new class extends q {
	tokenize(e) {
		return e.slice();
	}
	join(e) {
		return e;
	}
	removeEmpty(e) {
		return e;
	}
}();
// src/react/review/comparison-text.tsx
function nt({ value: e, reference: t }) {
	let n = (0, W.useMemo)(() => t ? Ue(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ (0, G.jsx)(G.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ (0, G.jsx)("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ (0, G.jsx)("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
var rt = {
	title: "标题",
	original_title: "原标题",
	runtime: "来源时长",
	director: "导演",
	label: "Label",
	poster_url: "海报",
	cover_url: "封面",
	screenshot_urls: "截图",
	trailer_url: "预告片"
}, it = "reviewgenretags";
function at({ tags: e }) {
	return e.length ? /* @__PURE__ */ (0, G.jsx)("datalist", {
		id: it,
		children: e.map((e) => /* @__PURE__ */ (0, G.jsx)("option", { value: e }, e))
	}) : null;
}
function ot({ candidate: e, row: t }) {
	let n = H(), [r, i] = (0, W.useState)(!1), a = (0, W.useId)(), s = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return s.length ? /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, G.jsxs)(o, {
			variant: "secondary",
			size: "small",
			leadingIcon: d,
			"aria-expanded": r,
			"aria-controls": a,
			"aria-label": n(r ? "收起 {source} 的来源依据" : "展开 {source} 的来源依据", { source: e.source || n("该来源") }),
			onClick: () => i(!r),
			children: [/* @__PURE__ */ (0, G.jsx)("span", {
				"data-copy-key": "review.card.source_evidence",
				children: n("来源依据")
			}), ` · ${s.length}`]
		}), /* @__PURE__ */ (0, G.jsx)(f, {
			id: a,
			open: r,
			children: /* @__PURE__ */ (0, G.jsx)("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: s.map(([r, i]) => /* @__PURE__ */ (0, G.jsxs)("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ (0, G.jsx)("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: n(rt[r] || r)
						}),
						/* @__PURE__ */ (0, G.jsx)("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ (0, G.jsx)(nt, {
								value: i.display_value || "",
								reference: r === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[r]?.display_value)?.catalog_evidence?.[r]?.display_value
							})
						}),
						(i.warnings || []).map((e) => /* @__PURE__ */ (0, G.jsx)("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, r))
			})
		})]
	}) : null;
}
function st(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || "未标注来源"}${e.official ? " · 官方优先" : ""}${t ? ` · ID ${t}` : ""}`;
}
function ct({ candidate: e, reference: t }) {
	return /* @__PURE__ */ (0, G.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ (0, G.jsx)("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ (0, G.jsx)(nt, {
				value: e.display_value || "",
				reference: t
			})
		}), (e.warnings || []).map((e) => /* @__PURE__ */ (0, G.jsx)("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function lt({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = H(), o = e.candidates || [];
	return o.length ? o.length === 1 ? /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-body-medium text-text-primary",
				children: st(o[0])
			}), /* @__PURE__ */ (0, G.jsx)(ct, {
				candidate: o[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ (0, G.jsx)(ot, {
			candidate: o[0],
			row: e
		})]
	}) : /* @__PURE__ */ (0, G.jsx)(K, {
		"aria-label": a("{field}的来源", { field: t || a("资料") }),
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ (0, G.jsx)("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: o.map((t) => /* @__PURE__ */ (0, G.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, G.jsx)(Ve, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ (0, G.jsx)("span", {
						title: st(t),
						children: st(t)
					}),
					description: /* @__PURE__ */ (0, G.jsx)(ct, {
						candidate: t,
						reference: e.current_value || o.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ (0, G.jsx)(ot, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function ut({ genre: e, tags: t, locked: n, toast: r }) {
	let i = H(), [a, s] = (0, W.useState)(""), [c, l] = (0, W.useState)(""), u = Ne({
		mutationFn: (t) => ve(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (r(n ? `已把「${e}」收录为标签「${n}」` : `已把「${e}」判为非内容标签`), await ye()) : l(t.error || "服务端拒绝了这次收录");
		},
		onError: (e) => l(ue(e))
	}), d = () => {
		let e = a.trim();
		e ? (l(""), u.mutate(e)) : l("先给它一个中文标签");
	};
	return /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, G.jsx)("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ (0, G.jsx)(k, {
				"aria-label": i("「{value0}」收录成的中文标签", { value0: String(e) }),
				value: a,
				onChange: s,
				maxLength: 40,
				isDisabled: n || u.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, G.jsx)(y, {
					size: "small",
					list: t.length ? it : void 0,
					autoComplete: "off",
					placeholder: i("中文标签"),
					onKeyDown: (e) => {
						e.key !== "Enter" || e.nativeEvent.isComposing || (e.preventDefault(), d());
					}
				})
			}),
			/* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: n || u.isPending,
				onClick: d,
				children: i("收录")
			}),
			/* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: n || u.isPending,
				onClick: () => {
					l(""), u.mutate("");
				},
				children: i("不是内容")
			}),
			c ? /* @__PURE__ */ (0, G.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: c
			}) : null
		]
	});
}
function dt({ row: e, tags: t, locked: n, toast: r }) {
	let i = H(), a = R(e);
	return a.length ? /* @__PURE__ */ (0, G.jsxs)("div", {
		role: "group",
		"aria-label": i("未收录 genre"),
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ (0, G.jsx)("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: i("未收录 genre · {value0}", { value0: String(a.length) })
		}), /* @__PURE__ */ (0, G.jsx)("div", {
			role: "list",
			className: "flex flex-col",
			children: a.map((e, i) => /* @__PURE__ */ (0, G.jsx)("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ (0, G.jsx)(ut, {
					genre: e,
					tags: t,
					locked: n,
					toast: r
				})
			}, e))
		})]
	}) : null;
}
// src/react/review/review-evidence.tsx
var ft = (e = "") => /^https?:\/\//i.test(e) ? e : "", pt = (e = "") => ft(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function mt({ url: e }) {
	let t = pt(e || "");
	return /* @__PURE__ */ (0, G.jsx)(ht, { source: t }, t);
}
function ht({ source: e }) {
	let t = H(), [n, r] = (0, W.useState)("idle");
	return (0, W.useEffect)(() => {
		if (n !== "loading") return;
		let e = setTimeout(() => r("failed"), 3e4);
		return () => clearTimeout(e);
	}, [n]), /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [n === "loading" ? /* @__PURE__ */ (0, G.jsxs)("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ (0, G.jsx)("span", { dangerouslySetInnerHTML: { __html: je("正在加载图片") } }), t("正在加载图片")]
		}) : null, e && (n === "loading" || n === "ready") ? /* @__PURE__ */ (0, G.jsx)("img", {
			src: e,
			alt: t("来源提供的备选图片"),
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${n === "loading" ? "invisible" : ""}`,
			onLoad: () => r("ready"),
			onError: () => r("failed")
		}) : e ? /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [n === "failed" ? /* @__PURE__ */ (0, G.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: t("未取得来源图片")
			}) : null, /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				"aria-label": n === "failed" ? t("立即重试加载来源图片") : void 0,
				onClick: () => r("loading"),
				children: t(n === "failed" ? "立即重试" : "查看来源图片")
			})]
		}) : /* @__PURE__ */ (0, G.jsx)("span", {
			className: "text-body-2-regular text-text-secondary",
			children: t("未取得来源图片")
		})]
	});
}
function gt({ asset: e, openItem: t }) {
	let n = H(), i = e.name || "";
	return /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, G.jsxs)("button", {
			type: "button",
			onClick: () => t(e.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [e.preview_url ? /* @__PURE__ */ (0, G.jsx)("img", {
				src: e.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, G.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: n("无封面")
			}), /* @__PURE__ */ (0, G.jsx)(r, { children: n("打开原视频 {name}", { name: i }) })]
		}), /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ (0, G.jsx)("b", {
				title: i,
				className: "w-full truncate text-body-medium text-text-primary",
				children: e.code || i || n("原视频")
			}), /* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				leadingIcon: v,
				onClick: () => t(e.id),
				children: n("打开原视频")
			})]
		})]
	});
}
function _t({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	let a = H();
	return /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, G.jsx)("button", {
			type: "button",
			"aria-label": a("打开创作者页：{value0}", { value0: String(t) }),
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${Ie}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ (0, G.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ (0, G.jsx)("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ (0, G.jsx)("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: a("{value0} 部作品", { value0: String(n.toLocaleString()) })
			}) : null]
		})]
	});
}
function vt({ row: e, openItem: t, openEntity: n, onReveal: r, revealing: i, note: a }) {
	let c = H(), l = ft(e.profile_url || ""), u = (e.preview_assets || []).slice(0, 6), d = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ (0, G.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, G.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: c("待确认人物：{value0}", { value0: String(e.babepedia_name || c("未标注")) })
			}),
			/* @__PURE__ */ (0, G.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [l ? /* @__PURE__ */ (0, G.jsx)(s, {
					variant: "secondary",
					size: "small",
					trailingIcon: A,
					href: l,
					target: "_blank",
					rel: "noopener noreferrer",
					children: c("来源资料")
				}) : null, /* @__PURE__ */ (0, G.jsx)(o, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: c("查看全部 {value0} 部作品", { value0: String(d.toLocaleString()) })
				})]
			}),
			/* @__PURE__ */ (0, G.jsx)(mt, { url: e.preview_url }),
			/* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: c("通过后记录身份判断。")
			}),
			u.length ? /* @__PURE__ */ (0, G.jsxs)(G.Fragment, { children: [/* @__PURE__ */ (0, G.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: c("本地作品样本")
			}), /* @__PURE__ */ (0, G.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: u.map((e) => /* @__PURE__ */ (0, G.jsxs)("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, G.jsx)(o, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ (0, G.jsx)("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ (0, G.jsx)(o, {
						variant: "ghost",
						size: "small",
						"aria-label": c("打开 {value0} 的文件位置", { value0: String(e.name) }),
						...N(i === e.id),
						onClick: () => r(e.id),
						children: c("文件位置")
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ (0, G.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: c("暂无本地作品样本，打开全部作品核对。")
			}),
			a ? /* @__PURE__ */ (0, G.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: a
			}) : null
		]
	});
}
function yt({ assets: e, picked: t, onPicked: n, locked: i }) {
	let a = H(), [o, s] = (0, W.useState)(null), c = new Set(t), u = (t, r) => {
		if (i) return;
		let a = new Set(c);
		if (r && o !== null) {
			let [n, r] = [Math.min(o, t), Math.max(o, t)];
			for (let t = n; t <= r; t++) a.add(e[t].id);
		} else {
			let n = e[t].id;
			a.has(n) ? a.delete(n) : a.add(n);
		}
		s(t), n(e.filter((e) => a.has(e.id)).map((e) => e.id));
	};
	return /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, G.jsx)(D, {
			prefix: /* @__PURE__ */ (0, G.jsx)("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: a("已选 {value0} / {value1}", {
					value0: String(c.size),
					value1: String(e.length)
				})
			}),
			actions: [{
				label: "全选",
				disabled: i,
				onPress: () => n(e.map((e) => e.id))
			}, {
				label: "清空",
				disabled: i,
				onPress: () => n([])
			}]
		}), /* @__PURE__ */ (0, G.jsx)("div", {
			className: "review-asset-grid gap-1.5",
			children: e.map((e, t) => {
				let n = c.has(e.id);
				return /* @__PURE__ */ (0, G.jsxs)("button", {
					type: "button",
					"aria-pressed": n,
					title: e.name,
					onClick: (e) => u(t, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${n ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ (0, G.jsx)("img", {
							src: `/poster?id=${e.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, G.jsx)("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ (0, G.jsx)(l, {
								size: "sm",
								state: {
									isSelected: n,
									isIndeterminate: !1,
									isFocusVisible: !1,
									isDisabled: i,
									isHovered: !1
								}
							})
						}),
						/* @__PURE__ */ (0, G.jsx)(r, { children: `${n ? "已选" : "未选"} ${e.name || e.id}` })
					]
				}, e.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var bt = oe({
	variant: "filled",
	padding: "none",
	bordered: "soft",
	className: "flex flex-col overflow-hidden"
}), xt = "flex min-h-6 min-w-0 items-center", St = 2, Ct = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function wt(e) {
	let t = H(), { category: n, row: r, choice: i, onChoice: a, selected: s, onSelect: l, locked: d, busy: f, problem: p, genreTags: te, onDecide: _, handlers: v, queueView: y = "pending" } = e, b = (0, W.useRef)(!1), x = V(), S = n === "metadata_fields", C = m[n] || "", ie = String(r.creator || "").trim(), w = !!C && !!ie, T = t(De(n, r)), E = z(n, r), D = T ? `${E} · ${T}` : Oe(n, r), O = Ee(r), k = B(r), A = ae(n, r), j = r.comparison_assets || [], oe = r.preview_assets || [], P = re[r.decision || ""], F = j.length > 1 ? /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [j.slice(0, St).map((e) => /* @__PURE__ */ (0, G.jsx)(gt, {
			asset: e,
			openItem: v.openItem
		}, e.id)), j.length > St ? /* @__PURE__ */ (0, G.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: t("另有 {value0} 部对照作品", { value0: String((j.length - St).toLocaleString()) })
		}) : null]
	}) : w ? /* @__PURE__ */ (0, G.jsx)(_t, {
		kind: C,
		name: ie,
		works: Number(r.video_count || r.videos || 0),
		openEntity: v.openEntity,
		avatar: M(ie, r.entity_id ? {
			id: r.entity_id,
			has_image: !!r.has_image,
			image_version: r.image_version,
			avatar_focus: r.avatar_focus
		} : null, null, C)
	}) : r.asset_id ? /* @__PURE__ */ (0, G.jsx)(gt, {
		openItem: v.openItem,
		asset: {
			id: r.asset_id,
			name: r.asset_name,
			code: r.code,
			preview_url: r.asset_preview_url
		}
	}) : null, se = S ? /* @__PURE__ */ (0, G.jsx)(lt, {
		row: r,
		fieldName: T,
		value: i.candidateKey,
		onChange: (e) => a({
			...i,
			candidateKey: e
		}),
		locked: d
	}) : n === "creator_tags" ? oe.length ? /* @__PURE__ */ (0, G.jsx)(yt, {
		assets: oe,
		picked: i.assets,
		locked: d,
		onPicked: (e) => a({
			...i,
			assets: e
		})
	}) : /* @__PURE__ */ (0, G.jsx)(ee, {
		size: "compact",
		icon: h,
		title: t("这批作品尚未抽帧"),
		children: t("{value0} 条作品还没有可用预览；批准后仍会按所选资料写入标签。", { value0: String(r.video_count || "") })
	}) : n === "fc2_similarity" ? null : n === "western_identity" ? /* @__PURE__ */ (0, G.jsx)(vt, {
		row: r,
		openItem: v.openItem,
		openEntity: v.openEntity,
		onReveal: v.onReveal,
		revealing: v.revealing,
		note: v.revealNote
	}) : /* @__PURE__ */ (0, G.jsx)(mt, { url: r.preview_url }), ce = w ? F : T ? /* @__PURE__ */ (0, G.jsxs)("h4", {
		className: I(xt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ (0, G.jsx)("span", {
			title: T,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ (0, G.jsx)(u, {
				variant: "caption",
				color: "neutral",
				children: T
			})
		}), /* @__PURE__ */ (0, G.jsx)("span", {
			title: E,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: E
		})]
	}) : /* @__PURE__ */ (0, G.jsx)("h4", {
		className: xt,
		children: /* @__PURE__ */ (0, G.jsx)("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})
	});
	return /* @__PURE__ */ (0, G.jsxs)("section", {
		"aria-label": D,
		"data-review-key": r.item_key,
		className: I(bt, Ct(n)),
		children: [
			/* @__PURE__ */ (0, G.jsxs)("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					d ? null : /* @__PURE__ */ (0, G.jsx)("span", {
						className: I(xt, "shrink-0"),
						onPointerDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						children: /* @__PURE__ */ (0, G.jsx)(c, {
							isSelected: s,
							"aria-label": t("选择 {name}", { name: D }),
							onChange: (e) => l(b.current, e)
						})
					}),
					/* @__PURE__ */ (0, G.jsx)("div", {
						className: "min-w-0 flex-1",
						children: ce
					}),
					P ? /* @__PURE__ */ (0, G.jsx)(u, {
						variant: "caption",
						color: "neutral",
						children: t(P)
					}) : null
				]
			}),
			/* @__PURE__ */ (0, G.jsx)("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, G.jsxs)("div", {
					ref: x,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						r.source_name ? /* @__PURE__ */ (0, G.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: t("来源写法：{value0}", { value0: String(r.source_name) })
						}) : null,
						!w && (r.board || r.assets) ? /* @__PURE__ */ (0, G.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: t("对照文件：{value0}", { value0: String(Number(r.video_count || r.assets || 0).toLocaleString()) })
						}) : null,
						!w && F ? F : null,
						S && (O || r.current_value !== void 0) ? /* @__PURE__ */ (0, G.jsxs)("div", {
							role: "region",
							"aria-label": t("当前信息"),
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ (0, G.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, G.jsx)("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: t("当前值")
									}), r.current_owner?.startsWith("user:") || r.current_owner?.startsWith("review:") ? /* @__PURE__ */ (0, G.jsx)(u, {
										variant: "caption",
										color: "neutral",
										children: t("人工确认")
									}) : null]
								}),
								/* @__PURE__ */ (0, G.jsx)("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: r.current_value === void 0 ? O : r.current_value ? /* @__PURE__ */ (0, G.jsx)(nt, {
										value: r.current_value,
										reference: (r.candidates?.find((e) => e.candidate_key === i.candidateKey) || r.candidates?.[0])?.display_value
									}) : t("尚无资料")
								}),
								r.videos === void 0 ? null : /* @__PURE__ */ (0, G.jsx)("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: t(r.asset_path ? "{count} 个匹配文件" : "{count} 个同番号文件", { count: Number(r.videos).toLocaleString() })
								})
							]
						}) : null,
						k.length || n === "creator_tags" ? /* @__PURE__ */ (0, G.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: k.length ? k.map((e) => /* @__PURE__ */ (0, G.jsx)(u, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ (0, G.jsx)("small", {
								className: "text-body-2-regular text-text-secondary",
								children: t("暂无待确认标签")
							})
						}) : null,
						S ? /* @__PURE__ */ (0, G.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, G.jsxs)("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ (0, G.jsx)("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: t("候选来源")
								}), ` · ${r.candidates?.length || 0}`]
							}), r.current_value || (r.candidates?.length || 0) > 1 ? /* @__PURE__ */ (0, G.jsx)("span", {
								"data-copy-key": r.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: r.current_value ? t("与当前值比较") : t("来源间差异")
							}) : null]
						}) : null,
						se,
						/* @__PURE__ */ (0, G.jsx)(dt, {
							row: r,
							tags: te,
							locked: d,
							toast: v.toast
						}),
						!S && O ? /* @__PURE__ */ (0, G.jsx)("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ (0, G.jsxs)("footer", {
				className: I(g.stack, "shrink-0"),
				children: [
					y === "ignored" ? null : /* @__PURE__ */ (0, G.jsx)(ne, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: d,
						...N(f),
						onClick: () => _("rejected"),
						children: t("忽略")
					}),
					y === "pending" ? /* @__PURE__ */ (0, G.jsx)(o, {
						variant: "secondary",
						size: "small",
						disabled: d,
						...N(f),
						onClick: () => _("skipped"),
						children: t("稍后处理")
					}) : /* @__PURE__ */ (0, G.jsx)(o, {
						variant: y === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: d,
						...N(f),
						onClick: () => _("restore"),
						children: t("恢复待处理")
					}),
					y === "ignored" ? null : /* @__PURE__ */ (0, G.jsx)(o, {
						variant: "primary",
						size: "small",
						disabled: d || !A,
						...N(f),
						title: A ? void 0 : t("没有可采用的资料，可先保留或忽略"),
						onClick: () => _("approved"),
						children: t(A ? "通过" : "不可通过")
					}),
					p ? /* @__PURE__ */ (0, G.jsx)("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: p
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var Tt = "flex cursor-pointer items-center justify-between gap-2";
function Et({ page: e, pages: t, onPage: n }) {
	let r = H();
	return t <= 1 ? null : /* @__PURE__ */ (0, G.jsxs)("nav", {
		"aria-label": r("复核分页"),
		"data-pagination-layout": "",
		className: "inline-grid w-full min-w-0 items-center gap-2",
		children: [
			/* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: e <= 1,
				onClick: () => n(e - 1),
				children: r("上一页")
			}),
			/* @__PURE__ */ (0, G.jsx)("ul", {
				className: "flex min-w-0 flex-wrap items-center justify-center gap-1",
				children: _e(e, t).map((t, i) => /* @__PURE__ */ (0, G.jsx)("li", { children: t === "…" ? /* @__PURE__ */ (0, G.jsx)("span", {
					"aria-hidden": !0,
					className: "px-1 text-body-2-regular text-text-tertiary",
					children: "…"
				}) : /* @__PURE__ */ (0, G.jsx)(o, {
					variant: t === e ? "secondary" : "ghost",
					size: "small",
					"aria-label": r("第 {page} 页", { page: t }),
					"aria-current": t === e ? "page" : void 0,
					onClick: () => n(Number(t)),
					children: t
				}) }, t === "…" ? `dots-${i}` : t))
			}),
			/* @__PURE__ */ (0, G.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: e >= t,
				onClick: () => n(e + 1),
				children: r("下一页")
			})
		]
	});
}
function Dt(r) {
	let i = H(), [a, s] = (0, W.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, W.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => s(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: c, openItem: l, openEntity: u, revealSource: d, toast: f, readOnly: m, readOnlyMessage: h, writerUrl: g } = r, [_, v] = (0, W.useState)(me(r.category) ? r.category : p), [y, ne] = (0, W.useState)(() => we(r.queue)), [re, T] = (0, W.useState)("candidates"), [E, D] = (0, W.useState)(""), [O, k] = (0, W.useState)(""), [A, j] = (0, W.useState)(1), [M, N] = (0, W.useState)(/* @__PURE__ */ new Set()), [oe, P] = (0, W.useState)(/* @__PURE__ */ new Map()), [I, L] = (0, W.useState)(/* @__PURE__ */ new Map()), [_e, R] = (0, W.useState)(""), ve = (0, W.useRef)(null), [ye, be] = (0, W.useState)(0), [xe, Ee] = (0, W.useState)(""), De = (0, W.useRef)(!0);
	(0, W.useEffect)(() => () => {
		De.current = !1;
	}, []);
	let z = Pe({
		queryKey: S,
		queryFn: ({ signal: e }) => de(e)
	}), B = z.data || {
		sections: {},
		counts: {},
		queues: {
			later: {
				sections: {},
				counts: {}
			},
			ignored: {
				sections: {},
				counts: {}
			}
		}
	}, Oe = Ce(B, y), je = z.data ? Object.fromEntries(ie.map((e) => [e, x.reduce((t, n) => t + Number(Ce(B, e).counts[n] || 0), 0)])) : void 0, V = Oe.sections[_] || [], U = _ === "metadata_fields", Ie = m;
	(0, W.useEffect)(() => {
		let e = new Set(V.map((e) => e.item_key));
		N((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), P((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), L((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [V]);
	let ze = (0, W.useMemo)(() => U ? pe(V, "field") : [], [V, U]), Be = ze.some((e) => e.key === O) ? O : "", K = (0, W.useMemo)(() => U ? fe(V, "field", Be) : V, [
		V,
		U,
		Be
	]), Ve = (0, W.useMemo)(() => Se(K, U), [K, U]), q = Ve.some(([e]) => e === re) ? re : "candidates", He = (0, W.useMemo)(() => pe(K, q), [K, q]), Ue = He.some((e) => e.key === E) ? E : "", J = (0, W.useMemo)(() => Te(fe(K, q, Ue), A), [
		K,
		q,
		Ue,
		A
	]), We = J.rows.map((e) => e.item_key), Ge = new Set(We), Ke = He.map((e) => ({
		...e,
		rows: e.rows.filter((e) => Ge.has(e.item_key))
	})).filter((e) => e.rows.length), Y = (e) => oe.get(e.item_key) || le(e), X = (0, W.useMemo)(() => V.filter((e) => M.has(e.item_key)), [V, M]), qe = (e) => {
		let t = new Set(e);
		N((e) => new Set([...e].filter((e) => !t.has(e)))), P((e) => new Map([...e].filter(([e]) => !t.has(e)))), L((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, Je = (e, t) => L((n) => new Map(n).set(e, t)), Ye = () => {
		T("candidates"), D(""), k(""), j(1), N(/* @__PURE__ */ new Set()), P(/* @__PURE__ */ new Map()), L(/* @__PURE__ */ new Map()), R(""), ve.current = null;
	}, Xe = (e) => {
		v(e), Ye(), c({
			category: e === "metadata_fields" ? "" : e,
			queue: y === "pending" ? "" : y
		});
	}, Z = (e) => {
		ne(e), Ye(), c({
			category: _ === "metadata_fields" ? "" : _,
			queue: e === "pending" ? "" : e
		});
	}, Q = Ne({
		mutationFn: ({ row: e, status: t, category: n }) => Me(se(n, F(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (Ae(r, [t.item_key], n), qe([t.item_key]), f(ce(n))) : Je(t.item_key, e.error || "服务端拒绝了这次判定");
		},
		onError: (e, { row: t }) => Je(t.item_key, ue(e))
	}), $ = Ne({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!De.current) break;
				R(`正在处理 ${a} / ${n.length}`);
				try {
					let n = await Me(se(t, F(t, o), e, Y(o)));
					if (!n.ok) throw Error(n.error || "服务端未采用该项");
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, ue(e)]);
				}
			}
			return {
				status: e,
				category: t,
				done: r,
				failures: i
			};
		},
		onSuccess: ({ status: e, category: t, done: n, failures: r }) => {
			Ae(t, n, e), qe(n), r.forEach(([e, t]) => Je(e, t)), R("");
			let i = {
				approved: "通过",
				rejected: "忽略",
				skipped: "移至稍后处理",
				restore: "恢复待处理"
			}[e];
			f(`已${i} ${n.length} 项` + (r.length ? `，${r.length} 项未完成` : ""));
		},
		onError: (e) => {
			R(ue(e));
		}
	}), Ze = (e) => {
		!$.isPending && X.length && (e === "approved" && U && X.some((e) => !Y(e).candidateKey) ? R("请先为所选资料选择要采用的来源。") : (R(""), $.mutate({
			status: e,
			category: _,
			rows: X
		})));
	}, Qe = (e) => {
		P((t) => {
			let n = new Map(t);
			for (let t of X) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Y(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), R(`已选择 ${e}，点击通过所选采用。`);
	}, $e = async (e) => {
		if (ye) return;
		be(e), Ee("");
		let t = await d(e);
		De.current && (be(0), Ee(t));
	}, et = ge(B.mirror, h), tt = B.genre_tags || [], nt = {
		openItem: l,
		openEntity: u,
		onReveal: $e,
		revealing: ye,
		revealNote: xe,
		toast: f
	};
	return /* @__PURE__ */ (0, G.jsx)(Fe, { children: /* @__PURE__ */ (0, G.jsxs)("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			Ie ? /* @__PURE__ */ (0, G.jsx)(b, {
				tone: "warning",
				title: i("本机只能浏览"),
				extra: g ? /* @__PURE__ */ (0, G.jsx)("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ (0, G.jsx)(te, {
						href: g,
						children: i("前往写入端复核")
					})
				}) : void 0,
				children: et
			}) : null,
			/* @__PURE__ */ (0, G.jsx)(at, { tags: tt }),
			/* @__PURE__ */ (0, G.jsxs)(n, {
				orientation: a ? "horizontal" : "vertical",
				selectedKey: _,
				onSelectionChange: (e) => {
					let t = String(e);
					me(t) && Xe(t);
				},
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ (0, G.jsxs)("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ (0, G.jsx)("h2", {
						id: "reviewcategories",
						children: i("复核分类")
					}), /* @__PURE__ */ (0, G.jsx)(Le, {
						scrollable: a,
						"aria-labelledby": "reviewcategories",
						"data-section-items": !0,
						className: "flex review-split:flex-col review-split:items-stretch",
						children: x.map((e) => {
							let n = Number(Oe.counts[e] || 0);
							return /* @__PURE__ */ (0, G.jsxs)(t, {
								id: e,
								className: Tt,
								isDisabled: Q.isPending || $.isPending,
								"data-pill-selected": _ === e ? "" : void 0,
								"data-pill-variant": "gray",
								children: [i(C[e]), n ? /* @__PURE__ */ (0, G.jsx)("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: n.toLocaleString()
								}) : null]
							}, e);
						})
					})]
				}), /* @__PURE__ */ (0, G.jsxs)(e, {
					id: _,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, G.jsx)(Re, {
							queueView: y,
							queueCounts: je,
							onQueueChange: Z,
							locked: Ie,
							fields: ze,
							fieldFilter: Be,
							onFieldFilter: (e) => {
								k(e), D(""), j(1);
							},
							groupOptions: Ve,
							groupBy: q,
							onGroupBy: (e) => {
								T(e), D(""), j(1);
							},
							groups: He,
							filter: Ue,
							onFilter: (e) => {
								D(e), j(1);
							},
							pageKeys: We,
							selected: M,
							onSelected: N,
							selectedRows: X,
							metadata: U,
							approvable: X.every((e) => ae(_, e)),
							busy: $.isPending || Q.isPending,
							feedback: _e,
							onUnifySource: Qe,
							onRun: Ze
						}),
						J.rows.length ? Ke.map((e) => /* @__PURE__ */ (0, G.jsxs)("section", {
							className: "flex flex-col gap-3",
							children: [Ke.length > 1 || q !== "candidates" ? /* @__PURE__ */ (0, G.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, G.jsx)("h3", {
									className: "text-body-medium text-text-primary",
									children: `${i(e.title)} · ${e.rows.length}`
								}), Ie ? null : /* @__PURE__ */ (0, G.jsx)(o, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => M.has(e)), r = new Set(M);
										for (let e of t) n ? r.delete(e) : r.add(e);
										N(r);
									},
									children: e.rows.every((e) => M.has(e.item_key)) ? i("清空本组") : i("全选本组")
								})]
							}) : null, /* @__PURE__ */ (0, G.jsx)("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ (0, G.jsx)(wt, {
									category: _,
									row: e,
									queueView: y,
									choice: Y(e),
									onChoice: (t) => P((n) => new Map(n).set(e.item_key, t)),
									selected: M.has(e.item_key),
									onSelect: (t, n) => N((r) => {
										let i = new Set(r);
										return ve.current = ke(i, We, ve.current, e.item_key, t, n), i;
									}),
									locked: Ie,
									busy: $.isPending || Q.isPending && Q.variables?.row.item_key === e.item_key,
									problem: I.get(e.item_key) || "",
									genreTags: tt,
									onDecide: (t) => {
										Q.isPending || $.isPending || (L((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Q.mutate({
											row: e,
											status: t,
											category: _
										}));
									},
									handlers: nt
								}, e.item_key))
							})]
						}, e.key)) : z.isError && !z.data ? /* @__PURE__ */ (0, G.jsx)(b, {
							tone: "error",
							title: i("复核队列读取失败"),
							action: /* @__PURE__ */ (0, G.jsx)(o, {
								variant: "secondary",
								size: "small",
								disabled: z.isFetching,
								onClick: () => void z.refetch(),
								children: i("立即重试")
							}),
							children: ue(z.error)
						}) : /* @__PURE__ */ (0, G.jsx)(ee, {
							icon: he,
							title: i("此分类没有{value0}项目", { value0: i(w[y]) }),
							actions: x.some((e) => e !== _ && Number(Oe.counts[e] || 0) > 0) ? /* @__PURE__ */ (0, G.jsx)(o, {
								size: "small",
								onClick: () => {
									let e = x.find((e) => e !== _ && Number(Oe.counts[e] || 0) > 0);
									e && Xe(e);
								},
								children: i("查看其他分类")
							}) : void 0,
							children: y === "pending" ? i("可切换分类查看其他待确认资料。") : i("{value0}的资料会保留在这里，可恢复到待处理。", { value0: i(w[y]) })
						}),
						/* @__PURE__ */ (0, G.jsx)(Et, {
							page: J.page,
							pages: J.pages,
							onPage: j
						})
					]
				})]
			})
		]
	}) });
}
export { Dt as ReviewPage };

//# debugId=3e56f58f-7143-439a-a063-7a6dd61f99a7