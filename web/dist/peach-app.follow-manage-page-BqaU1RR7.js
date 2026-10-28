(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f646b968-172e-420c-ae8d-ad32980d3dfc", e._sentryDebugIdIdentifier = "sentry-dbid-f646b968-172e-420c-ae8d-ad32980d3dfc");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as g, Bx as _, Checkbox as v, ChevronSortDown as y, Chip as b, DataTableFooter as x, DataTableFrame as S, DataTableSort as ee, EmptyFocusButton as te, EmptyState as ne, ErrorText as C, ExternalLink as w, FEEDS_KEY as re, FOLLOW_CREDENTIALS_KEY as T, FOLLOW_MANAGE_KEY as ie, FOLLOW_MANAGE_NAV as E, FOLLOW_RESOLVE_KEY as D, FieldLabel as O, Help as k, Input as A, LoadingDots as j, M6 as M, MENU_ITEM as N, MENU_ITEM_INTERACTIVE as P, MENU_POPOVER_SURFACE as F, ModalFrame as I, Note as L, P7 as R, SORT_DEFAULT_DIR as z, SelectionDock as ae, SelectionPopover as B, SiteLabel as V, Switch as H, Table as oe, TableColumnControls as se, TableColumnResizer as ce, TableSelectionHeader as le, TagManager as ue, TaskProgress as de, Wt as fe, Xf as U, __toESM as W, addAlias as pe, addSource as me, avatarInner as G, busyProps as K, cardClass as he, checkFeeds as ge, columnVisibilityFeature as _e, confirmModal as ve, createColumnHelper as ye, credentialDone as q, cx as be, dZ as xe, errorHeadline as Se, errorMessage as J, feedIntervalText as Ce, fetchCredentials as we, fetchFeeds as Y, fetchFollow as Te, fetchResolveJob as Ee, fetchSuggestions as De, flexRender as Oe, followFeedByName as ke, followSuggestKey as Ae, groupByAuthor as je, isBroken as Me, isLayout as Ne, keepSelected as Pe, localTime as Fe, lookupFeedActor as Ie, mapLimit as Le, pageSizeOf as Re, pageWindow as ze, pv as Be, queryClient as Ve, reloadFollowManage as He, removeAlias as Ue, removeFeed as We, renameAliasGroup as Ge, require_jsx_runtime as Ke, require_react as qe, resolveFollowSort as Je, rowPaginationFeature as Ye, rowSelectionFeature as Xe, rowSortingFeature as Ze, setFeedEnabled as Qe, startCheck as $e, startResolve as et, tableFeatures as tt, useAction as nt, useBackgroundJob as rt, useMutation as it, useQuery as at, useTable as ot, useTablePreferences as st, useTranslation as X } from "./peach-app.js";
import { Page as ct } from "./peach-app.page-QAncjzM1.js";
import { STAT_STRIP_SIX as lt } from "./peach-app.stat-card-BeemgLDd.js";
import { LEGACY_AVATAR_IMG as ut } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as dt } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as ft, SourceIcon as pt } from "./peach-app.source-view-BXb_-4C5.js";
import { SourceList as mt } from "./peach-app.source-list-mHgzIXYe.js";
// src/react/follow-manage/add-source.tsx
var Z = /* @__PURE__ */ W(qe(), 1), Q = Ke(), ht = be(N, P, "text-body-2-medium"), gt = "粘贴来源链接，或输入创作者名、id…", _t = "添加创作者关注", vt = "查找中（首次按名字查要下载创作者索引，可能几十秒）", yt = "识别中", bt = "站内没有查到来源", xt = "/settings/subscriptions", St = (e, t) => `${e}:${t.url}`;
function Ct({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	let c = X();
	return (0, Z.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, Q.jsxs)(i, {
		ref: t,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": c("来源建议"),
		className: be(F, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Q.jsx)(j, { label: c("正在查找建议") })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Q.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? be(ht, "bg-background-secondary-default") : ht,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function wt({ credentials: e, hidden: t, onHidden: n }) {
	let r = X(), i = (e.providers || []).filter((e) => e.followable), a = i.filter((e) => !t.has(e.provider_label)).length, o = a === i.length ? "全部来源" : `${a}/${i.length} 个来源`;
	return /* @__PURE__ */ (0, Q.jsx)(B, {
		label: r("来源筛选"),
		triggerLabel: o,
		leadingIcon: m,
		empty: r("暂无可用来源"),
		items: i.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(pt, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "全选",
				disabled: !i.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "全不选",
				disabled: !i.length,
				onPress: () => n(new Set(i.map((e) => e.provider_label)))
			},
			{
				label: "凭据设置",
				href: xt
			}
		]
	});
}
function Tt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	let a = X();
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(L, {
		tone: "error",
		title: e.line,
		children: e.error || a("查找失败")
	});
	let o = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), s = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: he({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			o.length ? o.map((e) => {
				let n = St(t, e);
				return /* @__PURE__ */ (0, Q.jsx)(v, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(pt, { provider: e.provider }),
							/* @__PURE__ */ (0, Q.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Q.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? a("已经关注") : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Q.jsx)(k, { children: bt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Q.jsx)(w, {
					href: e.url,
					children: `${e.label}：${e.query}`
				})]
			}, e.url)),
			s.length ? /* @__PURE__ */ (0, Q.jsx)(k, { children: s.map(([e, t]) => `${e}：${t}`).join("；") }) : null
		]
	});
}
function Et({ data: e, credentials: t, readOnly: n, toast: r }) {
	let i = X(), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(!1), [g, _] = (0, Z.useState)(null), [v, y] = (0, Z.useState)(-1), b = (0, Z.useRef)(null), x = (0, Z.useRef)(null), [S, ee] = (0, Z.useState)(/* @__PURE__ */ new Set()), [te, ne] = (0, Z.useState)(/* @__PURE__ */ new Set()), [C, w] = (0, Z.useState)(""), [re, T] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = a.trim();
		if (s || !e || e.includes("/")) {
			f("");
			return;
		}
		let t = setTimeout(() => f(e), 250);
		return () => clearTimeout(t);
	}, [a, s]);
	let ie = at({
		queryKey: Ae(d),
		queryFn: ({ signal: e }) => De(d, e),
		enabled: d.length > 0 && p && !s && g !== a
	}), E = (0, Z.useMemo)(() => (ie.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [ie.data]), { job: k, running: j, outcome: M, start: N, dismiss: P } = rt({
		queryKey: D,
		queryFn: ({ signal: e }) => Ee(e),
		start: (e) => et([e]),
		onStarted: () => ne(/* @__PURE__ */ new Set()),
		onError: (e) => w(J(e)),
		onFinish: (e) => {
			e.status === "failed" && w(e.error || "查找失败");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || s || j || N.isPending || (w(""), y(-1), u(t), o(t), f(""), _(t), N.mutate(t));
	}, I = ie.isFetching, R = p && !s && g !== a && (E.length > 0 || I), z = () => {
		y(-1), _(a);
	}, ae = (e) => {
		if (!(s || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229)) {
			if (e.key === "Escape" && R) z();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!E.length) return;
				if (e.preventDefault(), !R) {
					_(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				y((e) => {
					let n = e + t;
					return n < 0 ? E.length - 1 : n >= E.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(E[v]?.value || a));
		}
	}, B = M?.results || [], V = B.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !S.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: St(t, e)
	})).filter((e) => !te.has(e.key))), H = it({
		mutationFn: async (e) => {
			let t = [], n = [];
			T(0);
			for (let r of e) {
				try {
					let e = await me(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}：${J(e)}`);
				}
				T((e) => e + 1);
			}
			if (n.length) try {
				await $e(n);
			} catch (e) {
				t.push(J(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			He(), e.failures.length ? w(e.failures.join("；")) : (w(""), P(), r(`已添加 ${e.sources.length} 个关注来源`));
		},
		onError: (e) => w(J(e))
	}), oe = e.suggestions || [], se = !l.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": _t,
		className: he({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: _t
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: b,
						className: "min-w-64 grow",
						onFocus: () => m(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !x.current?.contains(t) && m(!1);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(A, {
							"aria-label": i("来源链接、名字或 id"),
							placeholder: gt,
							value: a,
							leadingIcon: Be,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: o,
							onCompositionStart: () => {
								c(!0), y(-1);
							},
							onCompositionEnd: (e) => {
								c(!1), o(e.currentTarget.value);
							},
							onKeyDown: ae
						}), R ? /* @__PURE__ */ (0, Q.jsx)(Ct, {
							field: b,
							menu: x,
							options: E,
							active: v,
							busy: I,
							onPick: F,
							onClose: z
						}) : null]
					}),
					/* @__PURE__ */ (0, Q.jsx)(wt, {
						credentials: t,
						hidden: S,
						onHidden: ee
					}),
					/* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "primary",
						disabled: n || !a.trim(),
						...K(j || N.isPending),
						onClick: () => F(a),
						children: i("查找")
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [j || N.isPending ? /* @__PURE__ */ (0, Q.jsx)(de, {
					embedded: !0,
					label: k?.message || (k?.total ? `查找中：${k.checked || 0}/${k.total}` : se ? vt : yt),
					value: k?.checked,
					total: k?.total
				}) : null, C ? /* @__PURE__ */ (0, Q.jsx)(L, {
					tone: "error",
					title: i("这一次没有完成"),
					children: C
				}) : null]
			}),
			B.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(O, { children: i("查找结果") }),
					B.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(Tt, {
						row: e,
						at: t,
						hidden: S,
						unpicked: te,
						onPick: (e, t) => {
							let n = new Set(te);
							t ? n.delete(e) : n.add(e), ne(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: () => P(),
								children: i("关闭")
							}),
							/* @__PURE__ */ (0, Q.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: n || !V.length,
								...K(H.isPending),
								onClick: () => H.mutate(V),
								children: i("添加选中（{value0}）", { value0: String(V.length) })
							}),
							H.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: i("添加中… {value0}/{value1}", {
									value0: String(re),
									value1: String(V.length)
								})
							}) : null
						]
					})
				]
			}) : null,
			oe.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: i("猜你喜欢")
				}), oe.map((e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: i("浏览历史里出现 {value0} 次{value1}", {
						value0: String(e.visits),
						value1: String(e.origin ? ` · ${e.origin}` : "")
					}),
					onClick: () => F(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Dt = "输入女优名，到 JavDB 找她的演员页", Ot = "添加 JAV 订阅";
function kt(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `所勾的卡分属数据库里不同的人：${[...n.values()].join("、")}，先去合并再订`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `会登记到「${r}」名下`,
		blocked: !1
	} : e.known ? {
		text: `会登记到数据库里的「${e.known.name}」名下`,
		blocked: !1
	} : {
		text: `数据库里还没有「${e.q}」，会新建一位`,
		blocked: !1
	};
}
function At({ card: e, picked: t, onPick: n }) {
	let r = X();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(v, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join("、")
					}),
					e.record ? /* @__PURE__ */ (0, Q.jsx)(b, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Q.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: r("已在「{value0}」名下", { value0: String(e.held_by.name) })
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function jt({ readOnly: e, toast: t, onAdded: n }) {
	let r = X(), [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(null), [c, l] = (0, Z.useState)(/* @__PURE__ */ new Set()), u = nt(), d = () => {
		let t = i.trim();
		t && !e && u.run("lookup", (e) => Ie(t, e), (e) => {
			s(e), l(new Set(e.suggested));
		});
	}, f = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), d());
	}, p = () => {
		s(null), l(/* @__PURE__ */ new Set()), u.setError("");
	}, m = () => {
		o && u.run("follow", (e) => ke(o.q, [...c], e), (e) => {
			t(e.created ? `已新建「${e.entity_name}」并订阅她的新作` : `已订阅「${e.entity_name}」的新作`), a(""), p(), n();
		});
	}, g = o ? kt(o, c) : null;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Ot,
		className: he({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Ot
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Q.jsx)(A, {
						"aria-label": r("女优名"),
						placeholder: Dt,
						value: i,
						leadingIcon: Be,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: a,
						onKeyDown: f
					})
				}), /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "primary",
					disabled: e || !i.trim(),
					...K(u.busy === "lookup"),
					onClick: d,
					children: r("查找")
				})]
			}),
			u.error ? /* @__PURE__ */ (0, Q.jsx)(L, {
				tone: "error",
				title: r("这一次没有完成"),
				children: u.error
			}) : null,
			o ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(O, { children: r("JavDB 上的演员卡") }),
					o.candidates.length ? o.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(At, {
						card: e,
						picked: c.has(e.id),
						onPick: (t) => l((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Q.jsx)(k, { children: r("JavDB 上没有搜到这个名字。") }),
					o.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(k, {
						role: "status",
						children: c.size ? g.text : r("勾选她的演员卡；有碼与無碼两条记录都是她的话，两张都勾。")
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							onClick: p,
							children: r("关闭")
						}), o.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "primary",
							size: "small",
							disabled: e || !c.size || g.blocked,
							...K(u.busy === "follow"),
							onClick: m,
							children: r("添加订阅（{value0}）", { value0: String(c.size) })
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function Mt({ group: e, close: t, receipt: n }) {
	let r = X();
	return /* @__PURE__ */ (0, Q.jsx)(I, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: r("修改统一名称"),
		children: e ? /* @__PURE__ */ (0, Q.jsx)(Nt, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Nt({ group: e, close: t, receipt: n }) {
	let i = X(), [a, o] = (0, Z.useState)(e.canonical_name), s = nt();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), a.trim() && a.trim() !== e.canonical_name && s.run("rename", (t) => Ge(e.canonical_key, a.trim(), t), () => {
				He(), n(`已把统一名称改为 ${a.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: i("修改统一名称")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: [i("当前名称："), e.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(A, {
				"aria-label": i("统一名称"),
				autoFocus: !0,
				value: a,
				onChange: o
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(O, { children: i("选择已有别名") }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "secondary",
						size: "small",
						onClick: () => o(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: i("原名称保留为别名，关联档案和作品署名会同步更新。")
			}),
			s.error ? /* @__PURE__ */ (0, Q.jsx)(L, {
				tone: "error",
				children: s.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					onClick: t,
					children: i("取消")
				}), /* @__PURE__ */ (0, Q.jsx)(h, {
					type: "submit",
					variant: "primary",
					disabled: !a.trim() || a.trim() === e.canonical_name,
					...K(!!s.busy),
					children: i("修改统一名称")
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Pt = (e) => `将移除别名「${e}」，对应来源恢复为独立创作者组。`, Ft = tt({
	rowSelectionFeature: Xe,
	rowSortingFeature: Ze,
	rowPaginationFeature: Ye,
	columnVisibilityFeature: _e,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), It = Ft, Lt = {
	id: "select",
	label: "选择",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Rt = {
	id: "canonical",
	label: "统一名称",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, zt = [
	Lt,
	Rt,
	{
		id: "alias",
		label: "平台别名",
		width: 240
	},
	{
		id: "evidence",
		label: "依据",
		width: 320
	},
	{
		id: "actions",
		label: "操作",
		width: 112
	}
], Bt = [
	Lt,
	Rt,
	{
		id: "aliases",
		label: "平台别名",
		width: 400
	},
	{
		id: "actions",
		label: "操作",
		width: 184,
		min: 168
	}
], Vt = (e) => e.alias;
function Ht(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Ut({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(ft, {
			group: Ht(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Wt({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = X(), f = (0, Z.useId)(), p = st("alias-suggestions", zt), m = st("alias-saved", Bt), [g, _] = (0, Z.useState)(null), [b, w] = (0, Z.useState)({}), [re, T] = (0, Z.useState)({}), ie = n(() => w({})), E = n(() => T({})), [D, k] = (0, Z.useState)([]), [j, M] = (0, Z.useState)([]), [N, P] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [F, I] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), L = {
		...N,
		pageIndex: Math.min(N.pageIndex, Math.max(0, Math.ceil(t.length / N.pageSize) - 1))
	}, z = {
		...F,
		pageIndex: Math.min(F.pageIndex, Math.max(0, Math.ceil(e.length / F.pageSize) - 1))
	}, [B, V] = (0, Z.useState)(""), [H, ue] = (0, Z.useState)(""), [de, fe] = (0, Z.useState)(""), W = it({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await pe(n.canonical, n.alias);
				} catch (n) {
					throw t && He(), Error(`${J(n)}（还有 ${e.length - t} 组没有合并）`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			V(""), w({}), He(), u(`已合并 ${e.done} 组创作者别名`);
		},
		onError: (e) => V(J(e))
	}), me = it({
		mutationFn: (e) => pe(e.canonical, e.alias),
		onSuccess: () => {
			V(""), ue(""), fe(""), He(), u("已保存创作者别名");
		},
		onError: (e) => V(J(e))
	}), G = it({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await Ue(e), n += 1;
			} catch (e) {
				throw Error(`${J(e)}（已移除 ${n} 个别名，还有 ${t.length - n} 个未移除）`);
			} finally {
				He();
			}
		},
		onSuccess: () => {
			V(""), T({}), u("已移除创作者别名");
		},
		onError: (e) => V(J(e))
	}), ge = (e, t) => {
		e.length && ve({
			title: t ? "合并全部创作者别名" : "合并所选创作者别名",
			body: `将合并以下 ${e.length} 组创作者：${e.map((e) => `「${e.alias}」归入「${e.canonical}」`).join("；")}。`,
			confirmLabel: t ? "合并全部别名" : "合并所选别名",
			onConfirm: () => W.mutateAsync(e)
		});
	}, _e = (e) => void ve({
		title: "移除创作者别名",
		body: Pt(e),
		confirmLabel: "移除创作者别名",
		onConfirm: () => G.mutateAsync(e)
	}), q = (0, Z.useRef)({
		sources: r,
		readOnly: i,
		merging: W.isPending,
		removing: G.isPending,
		merge: ge,
		remove: _e,
		rename: _
	});
	q.current = {
		sources: r,
		readOnly: i,
		merging: W.isPending,
		removing: G.isPending,
		merge: ge,
		remove: _e,
		rename: _
	};
	let be = (0, Z.useMemo)(() => {
		let e = ye();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e.table,
					label: d("全选待合并别名")
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": d("选择别名 {value0}，归入 {value1}", {
						value0: String(e.row.original.alias),
						value1: String(e.row.original.canonical)
					}),
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ut, {
					sources: q.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "平台别名",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "依据",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: q.current.readOnly,
					...K(q.current.merging),
					onClick: () => q.current.merge([e.row.original], !1),
					children: d("合并")
				})
			})
		]);
	}, [d]), xe = (0, Z.useMemo)(() => {
		let e = ye();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e,
					label: d("全选已保存别名")
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					"aria-label": d("选择已保存别名 {value0}", { value0: String(e.original.canonical_name) }),
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "统一名称",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ut, {
					sources: q.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "平台别名",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: R,
							"aria-label": d("移除别名 {value0}", { value0: String(e.name) }),
							disabled: q.current.readOnly,
							...K(q.current.removing),
							onClick: () => q.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "操作",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: q.current.readOnly,
					"aria-label": d("修改 {value0} 的统一名称", { value0: String(e.original.canonical_name) }),
					onClick: () => q.current.rename(e.original),
					children: d("修改统一名称")
				})
			})
		]);
	}, [d]), Se = ot({
		features: Ft,
		data: t,
		columns: be,
		getRowId: Vt,
		state: {
			rowSelection: b,
			sorting: D,
			pagination: L,
			columnVisibility: p.visibility
		},
		onColumnVisibilityChange: p.change,
		onRowSelectionChange: (e) => {
			ie(), w(e);
		},
		onSortingChange: (e) => {
			k(e), P((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: P,
		enableRowSelection: !0
	}), Ce = ot({
		features: It,
		data: e,
		columns: xe,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: re,
			sorting: j,
			pagination: z,
			columnVisibility: m.visibility
		},
		onColumnVisibilityChange: m.change,
		onRowSelectionChange: (e) => {
			E(), T(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			M(e), I((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: I
	}), we = Se.getSelectedRowModel().rows.map((e) => e.original), Y = Ce.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Te = K(W.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: he({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: d("创作者别名")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(O, { children: d("手动添加别名") }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(A, {
							id: f,
							"aria-label": d("统一名称"),
							placeholder: d("在 Peach 中统一显示的名称"),
							value: H,
							onChange: ue,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(A, {
							"aria-label": d("平台别名"),
							placeholder: d("平台别名"),
							value: de,
							onChange: fe,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "primary",
							disabled: i || !H.trim() || !de.trim(),
							...K(me.isPending),
							onClick: () => me.mutate({
								canonical: H.trim(),
								alias: de.trim()
							}),
							children: d("保存别名")
						})
					]
				})]
			}),
			B ? /* @__PURE__ */ (0, Q.jsx)(C, { children: B }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(O, { children: d("待合并") }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: d("{value0} 组", { value0: String(t.length) })
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(h, {
									variant: "primary",
									size: "small",
									disabled: i,
									...Te,
									onClick: () => ge(t, !0),
									children: d("全部合并（{value0}）", { value0: String(t.length) })
								}),
								/* @__PURE__ */ (0, Q.jsx)(ee, {
									label: d("待合并创作者别名"),
									sorting: D,
									options: [
										{
											id: "canonical",
											label: "统一名称"
										},
										{
											id: "alias",
											label: "平台别名"
										},
										{
											id: "evidence",
											label: "依据"
										}
									],
									onChange: (e) => {
										k(e), P((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(se, {
									preferences: p,
									label: d("待合并创作者别名")
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(ae, {
						label: d("待合并别名批量操作"),
						visible: we.length > 0,
						count: `已选 ${we.length} 组`,
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Te,
							onClick: () => ge(we, !1),
							children: d("合并所选（{value0}）", { value0: String(we.length) })
						}), /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: d("取消选择")
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(S, {
						follow: !0,
						preferences: p,
						onRowClick: (e) => Se.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
							"aria-label": d("待合并创作者别名"),
							size: "sm",
							sortDescriptor: D[0] ? {
								column: D[0].id,
								direction: D[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Se.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [Se.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...p.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Oe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(y, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: p,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": d("行空白区域"),
								"data-table-space": "",
								width: p.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: Se.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(x, {
						label: d("待合并创作者别名"),
						unit: "组",
						total: t.length,
						pagination: L,
						onChange: P
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(O, { children: d("已保存别名") }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: d("{value0} 组", { value0: String(e.length) })
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(ee, {
								label: d("已保存创作者别名"),
								sorting: j,
								options: [{
									id: "canonical",
									label: "统一名称"
								}, {
									id: "aliases",
									label: "平台别名"
								}],
								onChange: (e) => {
									M(e), I((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(se, {
								preferences: m,
								label: d("已保存创作者别名")
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(ae, {
						label: d("已保存别名批量操作"),
						visible: Y.length > 0,
						count: `已选 ${Y.length} 个别名`,
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...K(G.isPending),
							onClick: () => void ve({
								title: "移除所选创作者别名",
								body: `将移除以下 ${Y.length} 个别名，对应来源恢复为独立创作者组。`,
								items: Y,
								confirmLabel: "移除所选别名",
								onConfirm: () => G.mutateAsync(Y)
							}),
							children: d("移除所选别名（{value0}）", { value0: String(Y.length) })
						}), /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => T({}),
							children: d("取消选择")
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(S, {
						follow: !0,
						preferences: m,
						onRowClick: (e) => Ce.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
							"aria-label": d("已保存创作者别名"),
							size: "sm",
							sortDescriptor: j[0] ? {
								column: j[0].id,
								direction: j[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => Ce.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [Ce.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...m.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [Oe(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(y, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: m,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": d("行空白区域"),
								"data-table-space": "",
								width: m.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: Ce.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(x, {
						label: d("已保存创作者别名"),
						unit: "组",
						total: e.length,
						pagination: z,
						onChange: I
					})] }) : /* @__PURE__ */ (0, Q.jsx)(ne, {
						size: "compact",
						icon: U,
						title: d("还没有保存创作者别名"),
						actions: i ? void 0 : /* @__PURE__ */ (0, Q.jsx)(te, {
							target: `[id="${f}"]`,
							children: d("添加别名")
						}),
						children: d("填写统一名称，以及该创作者在其他平台使用的名字。")
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(Mt, {
				group: g,
				close: () => _(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Gt = tt({
	rowPaginationFeature: Ye,
	rowSelectionFeature: Xe,
	rowSortingFeature: Ze,
	columnVisibilityFeature: _e,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Kt = {
	select: "选择",
	name: "名称",
	kind: "类型",
	origin: "来源",
	status: "状态",
	interval: "频率",
	fetched: "上次拉取",
	fresh: "上次新增",
	actions: "操作"
}, qt = /* @__PURE__ */ new Set(["actions"]), Jt = Object.entries(Kt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Yt = () => Ve.invalidateQueries({
	queryKey: re,
	exact: !0
}), $ = (e) => e.name || e.url;
function Xt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Zt({ source: e }) {
	let t = X();
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(b, {
		variant: "caption",
		color: "rose",
		children: t("拉取失败")
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(b, {
		variant: "caption",
		color: "lime",
		children: t("正常")
	}) : /* @__PURE__ */ (0, Q.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: t("未检查")
	}) : /* @__PURE__ */ (0, Q.jsx)(b, {
		variant: "caption",
		color: "gray",
		children: t("已暂停")
	});
}
function Qt({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${ut}`,
		dangerouslySetInnerHTML: { __html: G($(e), t, null, "performer") }
	});
}
var $t = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function en(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function tn(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return ve({
		title: n ? "移除订阅源" : `移除 ${e.length} 条订阅源`,
		body: n ? `将移除订阅源「${$(n)}」，之后不再拉取它的新作；已经拉到的新作保留。` : "将移除所选订阅源，之后不再拉取它们的新作；已经拉到的新作保留。",
		confirmLabel: n ? "移除订阅源" : "移除所选订阅源",
		danger: !0,
		onConfirm: t
	});
}
function nn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = X(), u = at({
		queryKey: re,
		queryFn: ({ signal: e }) => Y(e)
	}), d = nt(), f = st("jav-feeds", Jt), m = u.data, g = (0, Z.useMemo)(() => m?.sources ?? [], [m]), [b, te] = (0, Z.useState)(/* @__PURE__ */ new Set()), w = r?.ids ?? b, T = r?.onChange ?? te, [ie, E] = (0, Z.useState)(1), [D, O] = (0, Z.useState)(20), [A, j] = (0, Z.useState)([]), N = ze(g.length, D, ie);
	(0, Z.useEffect)(() => {
		E((e) => Math.min(e, N.pages));
	}, [N.pages]), (0, Z.useEffect)(() => {
		T((e) => {
			let t = new Set(g.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [g, T]);
	let P = it({
		mutationFn: async (e) => {
			let t = await Le(e.ids, 4, async (t) => {
				e.action === "remove" ? await We(t) : await Qe(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (T(/* @__PURE__ */ new Set()), Yt(), e.action === "remove" && r && t(`已移除 ${r} 条订阅源`), n.length) {
				let e = n[0];
				d.setError(`${n.length} 条没有写入：${e.ok ? "" : J(e.error)}`);
			}
		},
		onError: (e) => d.setError(J(e))
	}), F = (0, Z.useMemo)(() => en(g), [g]), I = (0, Z.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: F,
		busy: d.busy,
		toggle: (e, t) => void d.run(`enabled-${e.id}`, (n) => Qe(e.id, t, n), () => void Yt()),
		fetch: (e) => void d.run(`check-${e.id}`, (t) => ge(t, [e.id]), () => void Yt()),
		remove: (e) => void tn([e], async () => {
			await We(e.id), t(`已移除订阅源「${$(e)}」`), Yt();
		})
	};
	let R = (0, Z.useMemo)(() => {
		let e = ye(), t = (e) => () => i(Kt[e] || e);
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(le, {
					table: e.table,
					label: i("全选本页订阅源"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(v, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": i("选择 {value0}", { value0: String($(e.row.original)) })
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = $t(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Qt, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: i("站上这一页挂在「{value0}」名下", { value0: String(t) }),
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: i("打开来源页面"),
					className: "text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(V, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : Xt(e.getValue()),
						label: Xt(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(fe, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "拉取失败" : e.enabled ? "已启用" : "已暂停", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Zt, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: Ce(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Fe(e.row.original.last_fetched_at) : i("还没拉过")
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: i("{value0} 条", { value0: String(e.getValue()) })
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(H, {
							"aria-label": i("启用 {value0}", { value0: String($(e.row.original)) }),
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: xe,
							"aria-label": i("拉取 {value0}", { value0: String($(e.row.original)) }),
							disabled: I.current.readOnly,
							...K(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: M,
							"aria-label": i("移除 {value0}", { value0: String($(e.row.original)) }),
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, [i]), z = (0, Z.useMemo)(() => Object.fromEntries([...w].map((e) => [String(e), !0])), [w]), B = ot({
		features: Gt,
		data: g,
		columns: R,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: z,
			sorting: A,
			pagination: {
				pageIndex: N.page - 1,
				pageSize: D
			},
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onSortingChange: (e) => {
			j(e), E(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(z) : e;
			T(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!m) return u.error ? /* @__PURE__ */ (0, Q.jsx)(L, {
		tone: "error",
		title: i("打不开订阅源"),
		children: J(u.error)
	}) : /* @__PURE__ */ (0, Q.jsx)(k, { children: i("正在读订阅源。") });
	let ue = () => void d.run("check", (e) => ge(e), () => void Yt()), de = (e) => {
		r?.onActivate(), T((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, U = g.filter((e) => w.has(e.id)), W = g.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": i("JAV 订阅列表"),
			className: he({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: i("JAV 订阅源")
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: i("{value0} 个订阅源 · {value1} 条未看", {
								value0: String(g.length.toLocaleString()),
								value1: String((Number(m.unread) || 0).toLocaleString())
							})
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(h, {
								onClick: ue,
								disabled: e,
								...K(d.busy === "check"),
								children: i("立即拉取")
							}),
							/* @__PURE__ */ (0, Q.jsx)(se, {
								preferences: f,
								label: i("JAV 订阅源")
							}),
							/* @__PURE__ */ (0, Q.jsx)(ee, {
								label: i("JAV 订阅源"),
								sorting: A,
								onChange: (e) => {
									j(e), E(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: Kt[e]
								}))
							})
						]
					})]
				}),
				W.length || d.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [W.length ? /* @__PURE__ */ (0, Q.jsx)(L, {
						tone: "error",
						title: i("{value0} 条订阅源拉取失败", { value0: String(W.length.toLocaleString()) }),
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: W.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}：${Se(e.last_error || "") || "未说明原因"}`
							}, e.id))
						}),
						children: i("这些订阅源这一轮没有取到新条目。")
					}) : null, d.error ? /* @__PURE__ */ (0, Q.jsx)(C, { children: d.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(ae, {
					visible: U.length > 0,
					label: i("订阅源批量操作"),
					count: `已选 ${U.length} 条订阅源`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(P.isPending),
							onClick: () => P.mutate({
								ids: U.map((e) => e.id),
								action: "enabled"
							}),
							children: i("启用")
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...K(P.isPending),
							onClick: () => P.mutate({
								ids: U.map((e) => e.id),
								action: "paused"
							}),
							children: i("暂停")
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...K(P.isPending),
							onClick: () => void tn(U, () => P.mutateAsync({
								ids: U.map((e) => e.id),
								action: "remove"
							})),
							children: i("移除")
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => T(/* @__PURE__ */ new Set()),
							children: i("取消选择")
						})
					]
				}),
				g.length ? /* @__PURE__ */ (0, Q.jsx)(S, {
					follow: !0,
					preferences: f,
					onRowClick: (e) => de(Number(e)),
					children: /* @__PURE__ */ (0, Q.jsxs)(oe, {
						"aria-label": i("JAV 订阅源"),
						size: "sm",
						sortDescriptor: A[0] ? {
							column: A[0].id,
							direction: A[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => B.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [B.getHeaderGroups()[0].headers.map((e) => {
							let t = Oe(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [qt.has(e.column.id) ? /* @__PURE__ */ (0, Q.jsx)(p, { children: t }) : /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(y, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(ce, {
									preferences: f,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(o, {
							id: "remaining-space",
							"aria-label": i("行空白区域"),
							"data-table-space": "",
							width: f.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: B.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: Oe(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Q.jsx)(ne, {
					icon: _,
					title: i("还没有订阅源"),
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "secondary",
						onClick: n,
						children: i("添加订阅")
					}),
					children: i("在「添加关注」按女优名添加，或在人物页点「订阅新作」。")
				}),
				g.length ? /* @__PURE__ */ (0, Q.jsx)(x, {
					label: i("JAV 订阅"),
					total: N.total,
					unit: "个订阅源",
					pagination: {
						pageIndex: N.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						O(e.pageSize), E(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: i("未看 {value0} · 已启用 {value1} / {value2}", {
							value0: String((Number(m.unread) || 0).toLocaleString()),
							value1: String(g.filter((e) => e.enabled).length.toLocaleString()),
							value2: String(g.length.toLocaleString())
						})
					})
				})
			]
		})
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var rn = (e) => E.some(([t]) => t === e);
function an({ term: e, figure: t, unit: n }) {
	let r = X();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: he({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Q.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${r(n)}`
			})]
		})]
	});
}
function on(e) {
	let t = X(), { route: n, savePreference: r, toast: i, openFollow: a, readOnly: o, readOnlyMessage: s, writerUrl: c } = e, [l, p] = (0, Z.useState)(rn(e.tab) ? e.tab : "list"), [m, h] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [_, v] = (0, Z.useState)(() => Je(e.sort, e.dir).sort), [y, b] = (0, Z.useState)(() => Je(e.sort, e.dir).dir), [x, S] = (0, Z.useState)(Ne(e.layout) ? e.layout : "default"), [ee, te] = (0, Z.useState)(Re(e.pageSize)), [ne, C] = (0, Z.useState)(/* @__PURE__ */ new Set()), [D, O] = (0, Z.useState)(/* @__PURE__ */ new Set()), k = at({
		queryKey: ie,
		queryFn: ({ signal: e }) => Te(e)
	}), A = at({
		queryKey: T,
		queryFn: ({ signal: e }) => we(e)
	}), j = at({
		queryKey: re,
		queryFn: ({ signal: e }) => Y(e)
	}), M = k.data || { sources: [] }, N = A.data || {
		root: "",
		providers: []
	}, P = M.sources;
	(0, Z.useEffect)(() => {
		C((e) => {
			let t = Pe(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let t = e.sort ?? _, r = e.dir ?? y;
		n({
			tab: e.tab ?? l,
			page: e.page ?? m,
			sort: t === "checked" ? "" : t,
			dir: r === z[t] ? "" : r
		});
	}, I = je(P), R = P.filter(Me).length, ae = P.filter((e) => e.enabled).length, B = (N.providers || []).filter((e) => e.requirement === "required" && !q(e)).length, V = new Set((j.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Q.jsxs)(ct, { children: [
		o ? /* @__PURE__ */ (0, Q.jsx)(L, {
			tone: "warning",
			title: t("本机只能浏览"),
			extra: c ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					href: c,
					children: t("前往写入端管理关注")
				})
			}) : void 0,
			children: s
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: lt,
			"aria-label": t("关注概览"),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("关注创作者"),
					figure: I.length,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("启用来源"),
					figure: ae,
					unit: `/ ${P.length}`
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("检查失败"),
					figure: R,
					unit: "个来源"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("未看更新"),
					figure: M.counts?.new || 0,
					unit: "条"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("JAV 订阅"),
					figure: V,
					unit: "位"
				}),
				/* @__PURE__ */ (0, Q.jsx)(an, {
					term: t("未看新作"),
					figure: j.data?.unread || 0,
					unit: "条"
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)(f, {
			selectedKey: l,
			onSelectionChange: (e) => {
				let t = String(e);
				rn(t) && (C(/* @__PURE__ */ new Set()), O(/* @__PURE__ */ new Set()), p(t), F({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(dt, {
					"aria-label": t("关注管理区域"),
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: E.map(([e, n]) => /* @__PURE__ */ (0, Q.jsx)(d, {
						id: e,
						"data-pill-selected": l === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t(n)
					}, e))
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Q.jsx)(nn, {
						readOnly: o,
						toast: i,
						onAdd: () => {
							p("add"), F({ tab: "add" });
						},
						selection: {
							ids: D,
							onChange: O,
							onActivate: () => C(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, Q.jsx)(mt, {
						data: M,
						sort: _,
						dir: y,
						page: m,
						layout: x,
						pageSize: ee,
						selected: ne,
						readOnly: o,
						toast: i,
						openFollow: a,
						onAdd: () => {
							p("add"), F({ tab: "add" });
						},
						onSort: (e, t) => {
							v(e), b(t), h(1), F({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							h(e), F({ page: e });
						},
						onSelected: (e) => {
							C(e), O(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							S(e), h(1), r({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							te(e), h(1), r({ pageSize: e }), F({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(Et, {
							data: M,
							credentials: N,
							readOnly: o,
							toast: i
						}),
						/* @__PURE__ */ (0, Q.jsx)(jt, {
							readOnly: o,
							toast: i,
							onAdded: () => {
								j.refetch(), p("list"), F({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, Q.jsx)(Wt, {
							groups: M.author_aliases || [],
							readOnly: o,
							toast: i,
							suggestions: M.alias_suggestions || [],
							sources: M.sources
						})
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Q.jsx)(ue, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(g, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: [t("来源与订阅设置"), B ? `（${B}）` : ""]
		}) })
	] });
}
export { on as FollowManagePage };

//# debugId=f646b968-172e-420c-ae8d-ad32980d3dfc