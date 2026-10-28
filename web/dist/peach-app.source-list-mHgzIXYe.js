(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3c619d1a-c117-4f38-bb9f-7e76d239c2ff", e._sentryDebugIdIdentifier = "sentry-dbid-3c619d1a-c117-4f38-bb9f-7e76d239c2ff");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { $76d00c5a4edb230a$export$76ccd210b9029917 as t, $76d00c5a4edb230a$export$816b5d811295e6bc as n, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as r, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as i, $76d00c5a4edb230a$export$f850895b287ef28e as ee, $ea3928288112382f$export$439d29a4e110a164 as te, Button as a, Bx as ne, COLUMN_SORT as o, Checkbox as s, ChevronSortDown as re, CollapseChevron as ie, CollapseRegion as c, DataTableFooter as ae, DataTableFrame as oe, EmptyState as se, FOLLOW_CHECK_KEY as ce, LAYOUTS as l, M6 as le, Note as u, SORT_DEFAULT_DIR as ue, SORT_OPTIONS as de, Select as fe, SelectItem as pe, SelectionDock as me, SortDirectionIcon as he, Switch as ge, Table as _e, TableColumnControls as ve, TableColumnResizer as ye, TableSelectionHeader as be, TaskProgress as xe, Un as Se, __toESM as d, authorGroups as Ce, authorName as we, busyProps as f, cardClass as Te, checkEvidenceGap as Ee, checkFailures as De, checkReceipt as Oe, checkSummary as ke, checkedText as Ae, clickedBlank as p, columnVisibilityFeature as m, confirmModal as h, createColumnHelper as je, dZ as g, dropSources as Me, du as Ne, errorHeadline as Pe, errorMessage as _, fetchCheckJob as Fe, fetchPending as Ie, flexRender as Le, isBroken as Re, l7 as ze, mapLimit as Be, markItem as Ve, pageWindow as He, patchSource as Ue, reloadFollowManage as We, removeSource as Ge, require_jsx_runtime as v, require_react as y, rowPaginationFeature as b, rowSelectionFeature as x, rowSortingFeature as Ke, selectionState as qe, setSourceEnabled as Je, sortLabel as Ye, startCheck as Xe, tableFeatures as S, tableRows as Ze, toggleGroup as C, useBackgroundJob as Qe, useMutation as w, useTable as $e, useTablePreferences as et, useTranslation as T } from "./peach-app.js";
import { AuthorAvatar as tt, ErrorLine as nt, SourceIcon as E, SourceLink as rt, StatusBadge as it } from "./peach-app.source-view-BXb_-4C5.js";
// src/react/follow-manage/source-list.tsx
var D = /* @__PURE__ */ d(y(), 1), O = v(), at = S({
	rowPaginationFeature: b,
	rowSelectionFeature: x,
	rowSortingFeature: Ke,
	columnVisibilityFeature: m,
	paginatedRowModel: e()
}), k = (e) => (Number(e) || 0).toLocaleString(), ot = Object.fromEntries(Object.entries(o).map(([e, t]) => [t, e])), st = 740;
function ct() {
	let [e, t] = (0, D.useState)(!1), n = (0, D.useRef)(null), r = (0, D.useCallback)((e) => {
		if (n.current?.disconnect(), !e) {
			n.current = null;
			return;
		}
		let r = new ResizeObserver(() => t(e.clientWidth < st));
		r.observe(e), n.current = r, t(e.clientWidth < st);
	}, []);
	return (0, D.useEffect)(() => () => n.current?.disconnect(), []), [r, e];
}
var lt = {
	select: "选择",
	author: "创作者",
	source: "来源",
	provider: "站点",
	status: "状态",
	checked: "上次检查",
	actions: "操作"
}, ut = Object.entries(lt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "source" ? 320 : e === "author" ? 240 : e === "actions" ? 208 : 184,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "source" ? 320 : 112,
	max: e === "select" ? 48 : e === "source" ? 2e3 : 800,
	flex: e === "source",
	required: e === "select" || e === "source"
}));
function A({ source: e, selected: t, onToggle: n, handlers: r }) {
	let i = T();
	return /* @__PURE__ */ (0, O.jsxs)("div", {
		"data-selected": t || void 0,
		"data-follow-source-row": "",
		className: "flex min-h-16 flex-wrap items-center gap-3 px-2 py-3 last:rounded-b-lg max-sm:gap-x-2",
		onClick: (e) => {
			p(e, e.currentTarget) && n(!t);
		},
		children: [
			/* @__PURE__ */ (0, O.jsx)(s, {
				isSelected: t,
				onChange: n,
				"aria-label": i("选择 {value0}", { value0: String(e.label) })
			}),
			/* @__PURE__ */ (0, O.jsxs)("span", {
				className: "flex min-w-0 grow basis-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, O.jsx)("span", {
					"data-follow-source-site": "",
					className: "flex shrink-0 items-center text-body-medium",
					children: /* @__PURE__ */ (0, O.jsx)(E, { provider: e.provider })
				}), /* @__PURE__ */ (0, O.jsx)(rt, { source: e })]
			}),
			/* @__PURE__ */ (0, O.jsx)(te, { children: e.provider_label }),
			/* @__PURE__ */ (0, O.jsx)(it, { source: e }),
			e.last_error ? /* @__PURE__ */ (0, O.jsxs)("span", {
				"data-follow-source-error": "",
				className: "flex min-w-0 basis-full gap-3 max-sm:gap-x-2 sm:order-last",
				children: [/* @__PURE__ */ (0, O.jsx)("span", {
					"aria-hidden": !0,
					className: "w-4 shrink-0"
				}), /* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex min-w-0 grow gap-1.5",
					children: [/* @__PURE__ */ (0, O.jsx)("span", {
						"aria-hidden": !0,
						className: "w-(--icon-inline) shrink-0 text-body-medium"
					}), /* @__PURE__ */ (0, O.jsx)("span", {
						className: "min-w-0 grow",
						children: /* @__PURE__ */ (0, O.jsx)(nt, { text: e.last_error })
					})]
				})]
			}) : null,
			/* @__PURE__ */ (0, O.jsxs)("span", {
				"data-follow-source-controls": "",
				className: "flex w-max max-w-full flex-none flex-wrap items-center gap-1.5 max-sm:w-full",
				children: [
					/* @__PURE__ */ (0, O.jsx)("span", {
						className: "shrink-0 text-body-2-regular whitespace-nowrap text-text-secondary max-sm:mr-auto max-sm:text-caption-1-regular",
						children: Ae(e)
					}),
					/* @__PURE__ */ (0, O.jsx)(ge, {
						"aria-label": i("启用 {value0}", { value0: String(e.label) }),
						isSelected: e.enabled,
						isDisabled: r.readOnly,
						onChange: (t) => r.toggle(e, t)
					}),
					/* @__PURE__ */ (0, O.jsxs)("span", {
						className: "flex shrink-0 items-center gap-1",
						children: [/* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: g,
							"aria-label": i("检查 {value0} 的更新", { value0: String(e.label) }),
							disabled: !e.enabled || r.readOnly,
							...f(r.busy),
							onClick: () => r.check([e.id])
						}), /* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: le,
							"aria-label": i("移除 {value0}", { value0: String(e.label) }),
							disabled: r.readOnly,
							onClick: () => r.remove(e)
						})]
					})
				]
			})
		]
	});
}
function dt({ group: e, name: t, open: n, selected: r, handlers: i, onOpen: ee, onToggleGroup: ne, onToggle: o }) {
	let s = T(), re = e.map((e) => e.id), ae = e.filter((e) => e.enabled).map((e) => e.id), oe = e.filter(Re).length, se = [...new Set(e.map((e) => e.provider_label || e.provider))].join("、"), ce = `follow-author-${e[0].id}`, l = qe(r, re);
	return /* @__PURE__ */ (0, O.jsxs)("section", {
		"aria-label": s("{value0} 的关注来源", { value0: String(t) }),
		className: Te({
			variant: "raised",
			padding: "none",
			className: "flex flex-col overflow-hidden p-2"
		}),
		children: [/* @__PURE__ */ (0, O.jsxs)("div", {
			"data-follow-author-header": !0,
			"data-open": n || void 0,
			className: "flex flex-wrap items-center gap-3 px-2 py-2.5",
			children: [
				/* @__PURE__ */ (0, O.jsx)(tt, {
					group: e,
					name: t
				}),
				/* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex min-w-0 grow basis-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, O.jsx)("b", {
						className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
						children: t
					}), /* @__PURE__ */ (0, O.jsxs)("span", {
						"data-follow-author-sites": "",
						className: "flex min-w-0 flex-wrap items-center gap-1 text-body-2-regular",
						title: se,
						children: [
							e.map((e) => /* @__PURE__ */ (0, O.jsx)(E, { provider: e.provider }, e.id)),
							/* @__PURE__ */ (0, O.jsx)(te, { children: s("来源：{value0}", { value0: String(se) }) }),
							oe ? /* @__PURE__ */ (0, O.jsx)("span", {
								className: "ml-1 shrink-0 text-text-error-primary",
								children: s("{value0} 个失败", { value0: String(oe) })
							}) : null
						]
					})]
				}),
				/* @__PURE__ */ (0, O.jsxs)("span", {
					"data-follow-author-controls": "",
					className: "flex flex-none items-center gap-2 max-sm:w-full max-sm:justify-end",
					children: [/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						iconOnly: !0,
						leadingIcon: g,
						"aria-label": s("检查 {value0} 的全部来源", { value0: String(t) }),
						disabled: !ae.length || i.readOnly,
						...f(i.busy),
						onClick: () => i.check(ae)
					}), /* @__PURE__ */ (0, O.jsxs)("span", {
						className: "flex flex-none items-center gap-2",
						children: [/* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							leadingIcon: ze,
							"aria-pressed": l.all ? "true" : l.some ? "mixed" : "false",
							"aria-label": s("{value0} {value1} 的来源", {
								value0: String(l.all ? s("取消全选") : s("全选")),
								value1: String(t)
							}),
							onClick: () => ne(!l.all),
							children: l.all ? s("取消全选") : s("全选")
						}), /* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							"aria-expanded": n,
							"aria-controls": ce,
							leadingIcon: ie,
							"aria-label": s("{value0} {value1} 的来源", {
								value0: String(s(n ? "收起" : "展开")),
								value1: String(t)
							}),
							onClick: () => ee(!n),
							children: s(n ? "收起" : "展开")
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, O.jsx)(c, {
			id: ce,
			open: n,
			"data-source-divider": !0,
			children: e.map((e) => /* @__PURE__ */ (0, O.jsx)(A, {
				source: e,
				handlers: i,
				selected: r.has(e.id),
				onToggle: (t) => o(e.id, t)
			}, e.id))
		})]
	});
}
function j(e) {
	let c = T(), { data: d, sort: p, dir: m, page: Re, layout: ze, pageSize: v, selected: y, readOnly: b, onSort: x, onPage: Ke, onLayout: S, onPageSize: st, onSelected: A, toast: j, openFollow: ft, onAdd: pt } = e, M = d.sources, N = (0, D.useMemo)(() => d.author_aliases || [], [d.author_aliases]), P = d.counts || {}, [F, mt] = (0, D.useState)(/* @__PURE__ */ new Set()), [ht, gt] = ct(), [_t, I] = (0, D.useState)(""), L = (0, D.useMemo)(() => Ce(M, p, m, N), [
		M,
		p,
		m,
		N
	]), vt = (0, D.useMemo)(() => Ze(L, p, m, N), [
		L,
		p,
		m,
		N
	]), { job: R, running: z, outcome: B, start: V } = Qe({
		queryKey: ce,
		queryFn: ({ signal: e }) => Fe(e),
		start: (e) => Xe(e),
		onError: (e) => I(_(e)),
		onFinish: (e) => {
			We(), j(e.status === "failed" ? e.error || "检查失败" : Oe(e));
		}
	}), H = (e) => {
		z || V.isPending || (I(""), V.mutate(e));
	}, yt = (e, t) => A(C(y, [e], t)), bt = (e, t) => A(C(y, e, t)), xt = w({
		mutationFn: (e) => Ge(e),
		onSuccess: (e, t) => {
			Me([t]), A(C(y, [t], !1)), j("已取消关注来源");
		},
		onError: (e) => I(_(e))
	}), St = w({
		mutationFn: (e) => Je(e.id, e.enabled),
		onSuccess: (e, t) => {
			Ue(t.id, { enabled: t.enabled }), I("");
		},
		onError: (e) => I(_(e))
	}), Ct = (e) => void h({
		title: "取消关注来源",
		body: "将移除这个来源及已抓取的条目，媒体文件保留。",
		confirmLabel: "取消关注来源",
		danger: !0,
		onConfirm: () => xt.mutateAsync(e.id)
	}), U = w({
		mutationFn: async (e) => {
			let t = await Be(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ge(t) : await Je(t, e.action === "enabled");
			});
			return {
				...e,
				done: e.ids.filter((e, n) => t[n]?.ok),
				results: t
			};
		},
		onSuccess: (e) => {
			if (e.action === "remove") Me(e.done);
			else for (let t of e.done) Ue(t, { enabled: e.action === "enabled" });
			A(C(y, e.done, !1));
			let t = e.results.filter((e) => !e.ok);
			if (t.length) {
				I(`${t.length}/${e.ids.length} 个来源未更新：${_(t[0]?.error)}`);
				return;
			}
			I("");
			let n = e.action === "remove" ? "删除" : e.action === "enabled" ? "启用" : "暂停";
			j(`已${n} ${e.done.length} 个关注来源`);
		},
		onError: (e) => I(_(e))
	}), W = w({
		mutationFn: async (e) => {
			let t = ((await Ie()).groups || []).flatMap((e) => [
				e.primary,
				...e.variants,
				...e.duplicates
			]).filter((e) => e.status === "new").map((e) => e.id);
			return {
				ids: t,
				failed: (await Be(t, 6, (t) => Ve(t, e))).filter((e) => !e.ok)
			};
		},
		onSuccess: (e) => {
			We(), e.failed.length ? I(`批量更新 ${e.failed.length}/${e.ids.length} 项未完成`) : (I(""), j(`已批量标记 ${e.ids.length} 项`));
		},
		onError: (e) => I(_(e))
	}), wt = (e, t) => St.mutate({
		id: e.id,
		enabled: t
	}), G = (0, D.useRef)({
		check: H,
		toggle: wt,
		remove: Ct,
		busy: !1,
		readOnly: b
	});
	G.current = {
		check: H,
		toggle: wt,
		remove: Ct,
		busy: z || V.isPending,
		readOnly: b
	};
	let K = G.current, Tt = (0, D.useMemo)(() => {
		let e = je(), t = (e) => () => c(lt[e] || e);
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, O.jsx)(be, {
					table: e.table,
					label: c("全选本页来源"),
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, O.jsx)(s, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": c("选择 {value0}", { value0: String(e.row.original.source.label) })
				})
			}),
			e.accessor((e) => e.author, {
				id: "author",
				header: t("author"),
				cell: (e) => /* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, O.jsx)(tt, {
						group: e.row.original.group,
						name: e.row.original.author
					}), /* @__PURE__ */ (0, O.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.row.original.author
					})]
				})
			}),
			e.accessor((e) => e.source.label, {
				id: "source",
				header: t("source"),
				cell: (e) => /* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, O.jsx)(rt, { source: e.row.original.source }), e.row.original.source.last_error ? /* @__PURE__ */ (0, O.jsx)(nt, { text: e.row.original.source.last_error }) : null]
				})
			}),
			e.accessor((e) => e.source.provider_label, {
				id: "provider",
				header: t("provider"),
				cell: (e) => /* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, O.jsx)(E, { provider: e.row.original.source.provider }), e.row.original.source.provider_label]
				})
			}),
			e.display({
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, O.jsx)(it, { source: e.row.original.source })
			}),
			e.accessor((e) => e.source.last_checked_at || "", {
				id: "checked",
				header: t("checked"),
				cell: (e) => Ae(e.row.original.source)
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, O.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, O.jsx)(ge, {
							"aria-label": c("启用 {value0}", { value0: String(e.row.original.source.label) }),
							isSelected: e.row.original.source.enabled,
							isDisabled: K.readOnly,
							onChange: (t) => G.current.toggle(e.row.original.source, t)
						}),
						/* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: g,
							"aria-label": c("检查 {value0} 的更新", { value0: String(e.row.original.source.label) }),
							disabled: !e.row.original.source.enabled || K.readOnly,
							...f(K.busy),
							onClick: () => G.current.check([e.row.original.source.id])
						}),
						/* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: le,
							"aria-label": c("移除 {value0}", { value0: String(e.row.original.source.label) }),
							disabled: K.readOnly,
							onClick: () => G.current.remove(e.row.original.source)
						})
					]
				})
			})
		]);
	}, [K, c]), q = (0, D.useMemo)(() => {
		let e = ot[p];
		return e ? [{
			id: e,
			desc: m === "desc"
		}] : [];
	}, [p, m]), Et = (0, D.useMemo)(() => Object.fromEntries([...y].map((e) => [String(e), !0])), [y]), J = ze === "table", Y = et("follow-sources", ut), X = He(J ? vt.length : L.length, v, Re), Z = $e({
		features: at,
		data: vt,
		columns: Tt,
		getRowId: (e) => String(e.source.id),
		state: {
			sorting: q,
			rowSelection: Et,
			pagination: {
				pageIndex: X.page - 1,
				pageSize: v
			},
			columnVisibility: Y.visibility
		},
		onColumnVisibilityChange: Y.change,
		manualSorting: !0,
		enableRowSelection: !0,
		onSortingChange: (e) => {
			let t = (typeof e == "function" ? e(q) : e)[0];
			if (!t) return;
			let n = o[t.id];
			n && x(n, t.desc ? "desc" : "asc");
		},
		onRowSelectionChange: (e) => {
			let t = typeof e == "function" ? e(Et) : e;
			A(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		},
		onPaginationChange: (e) => {
			let t = {
				pageIndex: X.page - 1,
				pageSize: v
			}, n = typeof e == "function" ? e(t) : e;
			n.pageSize === v ? n.pageIndex !== t.pageIndex && Ke(n.pageIndex + 1) : st(n.pageSize);
		}
	}), Dt = Z.getRowModel().rows, Ot = J ? Dt.map((e) => e.original.source.id) : L.slice(X.start, X.end).flatMap((e) => e.map((e) => e.id)), kt = qe(y, Ot), Q = [...y], At = De(B), jt = M.filter((e) => e.enabled && (e.last_status === "error" || e.last_status === "unauthorized")).map((e) => e.id), Mt = Ee(B), $ = L.length > 0 && F.size >= L.length;
	return M.length ? /* @__PURE__ */ (0, O.jsxs)("div", {
		className: Te({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, O.jsxs)("div", {
				ref: ht,
				"data-follow-toolbar": "",
				"data-responsive-toolbar": "",
				children: [/* @__PURE__ */ (0, O.jsxs)("span", {
					"data-follow-toolbar-heading": "",
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, O.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: c("关注列表")
					}), /* @__PURE__ */ (0, O.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: c("{value0} 个来源{value1}", {
							value0: String(M.length.toLocaleString()),
							value1: String(P.new ? c(" · {value0} 条未看", { value0: String(k(P.new)) }) : "")
						})
					})]
				}), /* @__PURE__ */ (0, O.jsxs)("div", {
					"data-follow-toolbar-actions": "",
					"data-toolbar-actions": "",
					children: [
						jt.length ? /* @__PURE__ */ (0, O.jsx)(a, {
							variant: "secondary",
							disabled: b,
							...f(K.busy),
							onClick: () => H(jt),
							children: c("检查失败项")
						}) : null,
						/* @__PURE__ */ (0, O.jsx)(a, {
							variant: "primary",
							leadingIcon: g,
							disabled: b,
							"aria-label": c("检查全部"),
							iconOnly: gt,
							...f(K.busy),
							onClick: () => H([]),
							children: c("检查全部")
						}),
						/* @__PURE__ */ (0, O.jsxs)("span", {
							"data-follow-toolbar-controls": "",
							className: "contents",
							children: [
								/* @__PURE__ */ (0, O.jsxs)("span", {
									"data-button-group": !0,
									role: "group",
									"aria-label": c("关注列表版式"),
									children: [/* @__PURE__ */ (0, O.jsx)(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Se,
										"aria-label": c(l[0][1]),
										"aria-pressed": !J,
										onClick: () => S("default")
									}), /* @__PURE__ */ (0, O.jsx)(a, {
										variant: "ghost",
										iconOnly: !0,
										leadingIcon: Ne,
										"aria-label": c(l[1][1]),
										"aria-pressed": J,
										onClick: () => S("table")
									})]
								}),
								J ? /* @__PURE__ */ (0, O.jsx)(ve, {
									preferences: Y,
									label: c("关注来源")
								}) : null,
								/* @__PURE__ */ (0, O.jsxs)("span", {
									className: "flex flex-none items-center gap-2",
									children: [/* @__PURE__ */ (0, O.jsx)(fe, {
										"aria-label": c("关注列表排序"),
										prefix: c("排序"),
										selectedKey: p,
										onSelectionChange: (e) => {
											if (e === null) return;
											let t = String(e);
											x(t, ue[t]);
										},
										children: de.map(([e, t]) => /* @__PURE__ */ (0, O.jsx)(pe, {
											id: e,
											children: t
										}, e))
									}), /* @__PURE__ */ (0, O.jsx)(a, {
										variant: "secondary",
										iconOnly: !0,
										leadingIcon: he,
										"data-icon-state": m === "asc" ? "a" : "b",
										"aria-label": Ye(p, m),
										onClick: () => x(p, m === "asc" ? "desc" : "asc")
									})]
								}),
								J ? null : /* @__PURE__ */ (0, O.jsx)(a, {
									variant: "secondary",
									iconOnly: gt,
									leadingIcon: ie,
									"aria-expanded": !$,
									"aria-label": c($ ? "全部展开" : "全部收起"),
									onClick: () => mt($ ? /* @__PURE__ */ new Set() : new Set(L.map((e) => String(e[0].author_key || e[0].id)))),
									children: c($ ? "全部展开" : "全部收起")
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, O.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [
					z ? /* @__PURE__ */ (0, O.jsx)(xe, {
						embedded: !0,
						label: R?.message || (R?.total ? `${R.older ? "抓取历史" : "检查更新"}：已完成 ${R.checked || 0}/${R.total} 个来源` : "正在准备检查任务"),
						value: R?.checked,
						total: R?.total
					}) : null,
					_t ? /* @__PURE__ */ (0, O.jsx)(u, {
						tone: "error",
						title: c("操作未完成"),
						children: _t
					}) : null,
					!z && B?.results?.length ? /* @__PURE__ */ (0, O.jsx)(u, {
						tone: "neutral",
						title: c("检查结果"),
						children: ke(B)
					}) : null,
					At.length ? /* @__PURE__ */ (0, O.jsx)(u, {
						tone: "error",
						title: c("{value0} 个来源检查失败", { value0: String(At.length) }),
						extra: /* @__PURE__ */ (0, O.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: At.map((e, t) => /* @__PURE__ */ (0, O.jsx)("li", { children: `${e.provider_label || e.provider || ""} ${e.author || e.label || e.ref || ""}：${Pe(e.error || "") || "未说明原因"}` }, `${e.provider || ""}-${e.ref || t}`))
						}),
						children: c("这些来源这一轮没有取到更新。")
					}) : null,
					Mt ? /* @__PURE__ */ (0, O.jsx)(u, {
						tone: "warning",
						children: c("条目已保存，但这次未保存来源的原始响应：{value0}", { value0: String(Mt) })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, O.jsxs)(me, {
				label: c("关注来源批量操作"),
				visible: Q.length > 0,
				count: `已选 ${Q.length} 个来源`,
				children: [
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...f(K.busy),
						onClick: () => H(Q),
						children: c("检查所选")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...f(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "enabled"
						}),
						children: c("启用")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...f(U.isPending),
						onClick: () => U.mutate({
							ids: Q,
							action: "paused"
						}),
						children: c("暂停")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "danger",
						size: "small",
						disabled: b,
						...f(U.isPending),
						onClick: () => void h({
							title: `删除 ${Q.length} 个关注来源`,
							body: "将移除所选关注来源及其已抓取条目，媒体文件保留。",
							confirmLabel: "删除所选来源",
							danger: !0,
							onConfirm: () => U.mutateAsync({
								ids: Q,
								action: "remove"
							})
						}),
						children: c("删除")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "ghost",
						size: "small",
						onClick: () => A(/* @__PURE__ */ new Set()),
						children: c("取消选择")
					})
				]
			}),
			J ? /* @__PURE__ */ (0, O.jsx)(oe, {
				follow: !0,
				preferences: Y,
				onRowClick: (e) => yt(Number(e), !y.has(Number(e))),
				children: /* @__PURE__ */ (0, O.jsxs)(_e, {
					"aria-label": c("关注来源"),
					size: "sm",
					sortDescriptor: q[0] ? {
						column: q[0].id,
						direction: q[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Z.setSorting([{
						id: String(e.column),
						desc: e.direction === "descending"
					}]),
					children: [/* @__PURE__ */ (0, O.jsxs)(ee, { children: [Z.getHeaderGroups()[0].headers.map((e) => {
						let t = e.column.id in o, r = Le(e.column.columnDef.header, e.getContext());
						return /* @__PURE__ */ (0, O.jsx)(n, {
							id: e.id,
							allowsSorting: t,
							isRowHeader: e.column.id === "source",
							...Y.columnProps(e.id),
							children: ({ sortDirection: n }) => /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [e.id === "select" ? r : t ? /* @__PURE__ */ (0, O.jsxs)("span", {
								className: "flex items-center gap-0.5",
								children: [r, /* @__PURE__ */ (0, O.jsx)("span", {
									"data-sort-indicator": !0,
									"data-direction": n || void 0,
									children: /* @__PURE__ */ (0, O.jsx)(re, {})
								})]
							}) : /* @__PURE__ */ (0, O.jsx)(te, { children: r }), /* @__PURE__ */ (0, O.jsx)(ye, {
								preferences: Y,
								id: e.id
							})] })
						}, e.id);
					}), /* @__PURE__ */ (0, O.jsx)(n, {
						id: "remaining-space",
						"aria-label": c("行空白区域"),
						"data-table-space": "",
						width: Y.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, O.jsx)(t, {
						renderEmptyState: () => "这一页没有来源",
						children: Dt.map((e) => /* @__PURE__ */ (0, O.jsxs)(r, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, O.jsx)(i, { children: Le(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, O.jsx)(i, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}) : /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [/* @__PURE__ */ (0, O.jsx)(s, {
				isSelected: kt.all,
				isIndeterminate: kt.some,
				onChange: (e) => bt(Ot, e),
				"aria-label": c("全选本页来源"),
				children: c("全选本页")
			}), /* @__PURE__ */ (0, O.jsx)("div", {
				className: "flex flex-col gap-3",
				children: L.slice(X.start, X.end).map((e) => {
					let t = String(e[0].author_key || e[0].id);
					return /* @__PURE__ */ (0, O.jsx)(dt, {
						group: e,
						name: we(e, N),
						handlers: K,
						selected: y,
						open: !F.has(t),
						onOpen: (e) => {
							let n = new Set(F);
							e ? n.delete(t) : n.add(t), mt(n);
						},
						onToggleGroup: (t) => bt(e.map((e) => e.id), t),
						onToggle: yt
					}, t);
				})
			})] }),
			/* @__PURE__ */ (0, O.jsx)(ae, {
				label: c("关注列表"),
				total: X.total,
				pagination: {
					pageIndex: X.page - 1,
					pageSize: v
				},
				unit: J ? "个来源" : "位创作者",
				pageUnit: J ? "条" : "位",
				onChange: (e) => {
					e.pageSize === v ? Z.setPageIndex(e.pageIndex) : Z.setPageSize(e.pageSize);
				}
			}),
			P.new ? /* @__PURE__ */ (0, O.jsxs)("div", {
				className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
				children: [
					/* @__PURE__ */ (0, O.jsx)("span", {
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: c("未看 {value0} · 已看 {value1} · 已保存 {value2} · 已忽略 {value3}", {
							value0: String(k(P.new)),
							value1: String(k(P.seen)),
							value2: String(k(P.saved)),
							value3: String(k(P.ignored))
						})
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						onClick: ft,
						children: c("去看更新")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...f(W.isPending),
						onClick: () => void h({
							title: "标记已看",
							body: "将把当前未看作品标记为已看。",
							confirmLabel: "标记已看",
							onConfirm: () => W.mutateAsync("seen")
						}),
						children: c("全部标记已看")
					}),
					/* @__PURE__ */ (0, O.jsx)(a, {
						variant: "secondary",
						size: "small",
						disabled: b,
						...f(W.isPending),
						onClick: () => void h({
							title: "标记已忽略",
							body: "将把当前未看作品标记为已忽略。",
							confirmLabel: "标记已忽略",
							onConfirm: () => W.mutateAsync("ignored")
						}),
						children: c("全部忽略")
					})
				]
			}) : null
		]
	}) : /* @__PURE__ */ (0, O.jsx)(se, {
		icon: ne,
		title: c("还没有关注来源"),
		actions: /* @__PURE__ */ (0, O.jsx)(a, {
			variant: "primary",
			size: "small",
			onClick: pt,
			children: c("添加关注")
		}),
		children: c("关注来源及其检查状态会显示在这里。")
	});
}
export { j as SourceList };

//# debugId=3c619d1a-c117-4f38-bb9f-7e76d239c2ff