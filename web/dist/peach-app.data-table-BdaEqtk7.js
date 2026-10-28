(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6aba482b-a309-48ac-bc3b-64de4a0b0716", e._sentryDebugIdIdentifier = "sentry-dbid-6aba482b-a309-48ac-bc3b-64de4a0b0716");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $76d00c5a4edb230a$export$76ccd210b9029917 as r, $76d00c5a4edb230a$export$816b5d811295e6bc as i, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as a, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as o, $76d00c5a4edb230a$export$f850895b287ef28e as s, Button as c, Checkbox as l, ChevronSortDown as u, DataTableFooter as d, DataTableFrame as f, DataTableSort as p, SelectionDock as m, Table as h, TableColumnControls as g, TableColumnResizer as _, TableSelectionHeader as v, __toESM as y, cardClass as b, columnVisibilityFeature as x, createColumnHelper as S, flexRender as C, formatNumber as w, require_jsx_runtime as T, require_react as E, rowPaginationFeature as D, rowSelectionFeature as O, rowSortingFeature as k, tableFeatures as A, useTable as j, useTablePreferences as M, useTranslation as ee } from "./peach-app.js";
// src/react/components/data-table.tsx
var N = /* @__PURE__ */ y(E(), 1), P = T(), F = A({
	rowSortingFeature: k,
	rowSelectionFeature: O,
	rowPaginationFeature: D,
	columnVisibilityFeature: x,
	sortedRowModel: t(),
	paginatedRowModel: e()
});
function I({ label: e, items: t, columns: y, rowId: x, rowLabel: T, selected: E, onSelected: D, actions: O, title: k = e, titleId: A, description: I, footerActions: L, panel: R = !0, unit: z = "条记录" }) {
	let B = ee(), [V, H] = (0, N.useState)([]), U = (0, N.useMemo)(() => [{
		id: "select",
		label: "选择",
		width: 48,
		min: 48,
		max: 48,
		required: !0
	}, ...y.map((e, t) => ({
		...e,
		width: e.width ?? (t === 0 ? 320 : 160),
		min: e.min ?? (t === 0 ? 320 : 96),
		flex: e.flex ?? t === 0,
		required: t === 0
	}))], [y]), W = M(`data:${e}`, U), [G, K] = (0, N.useState)({
		pageIndex: 0,
		pageSize: 20
	}), q = n(() => D([])), J = Math.max(1, Math.ceil(t.length / G.pageSize)), Y = Math.min(G.pageIndex, J - 1), X = Object.fromEntries(E.map((e) => [e, !0])), Z = (0, N.useMemo)(() => {
		let t = S();
		return t.columns([t.display({
			id: "select",
			header: ({ table: t }) => /* @__PURE__ */ (0, P.jsx)(v, {
				table: t,
				label: B("全选{label}", { label: B(e) })
			}),
			cell: ({ row: e }) => /* @__PURE__ */ (0, P.jsx)(l, {
				slot: null,
				"aria-label": B("选择 {name}", { name: T(e.original) }),
				isSelected: e.getIsSelected(),
				onChange: (t) => e.toggleSelected(t)
			})
		}), ...y.map((e) => t.accessor((t) => e.value?.(t) ?? "", {
			id: e.id,
			header: B(e.label),
			enableSorting: !!e.value,
			sortFn: (t, n) => {
				let r = e.value(t.original), i = e.value(n.original);
				return typeof r == "number" && typeof i == "number" ? r - i : String(r).localeCompare(String(i), "zh-CN", { numeric: !0 });
			},
			cell: ({ row: t }) => e.render(t.original)
		}))]);
	}, [
		y,
		e,
		T,
		B
	]), Q = j({
		features: F,
		data: t,
		columns: Z,
		getRowId: x,
		state: {
			sorting: V,
			rowSelection: X,
			pagination: {
				...G,
				pageIndex: Y
			},
			columnVisibility: W.visibility
		},
		onColumnVisibilityChange: W.change,
		onSortingChange: (e) => {
			H(e), K((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: K,
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let n = typeof e == "function" ? e(X) : e;
			Object.values(n).some(Boolean) && q(), D(t.filter((e) => n[x(e)]).map(x));
		}
	}), $ = Q.getSelectedRowModel().rows.map((e) => e.original);
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		"data-data-table-panel": R || void 0,
		className: R ? b({
			padding: "none",
			bordered: "line",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}) : "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, P.jsxs)("div", {
				"data-responsive-toolbar": "",
				role: "toolbar",
				"aria-label": B("{label}工具栏", { label: B(e) }),
				children: [/* @__PURE__ */ (0, P.jsxs)("div", {
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, P.jsx)("h3", {
						id: A,
						className: "text-title-2-medium text-text-primary",
						children: B(k)
					}), /* @__PURE__ */ (0, P.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: `${w(t.length)} ${B(z)}`
					})]
				}), /* @__PURE__ */ (0, P.jsxs)("div", {
					"data-toolbar-actions": "",
					children: [/* @__PURE__ */ (0, P.jsx)(g, {
						preferences: W,
						label: e
					}), /* @__PURE__ */ (0, P.jsx)(p, {
						label: e,
						options: y.filter((e) => e.value).map((e) => ({
							id: e.id,
							label: e.label
						})),
						sorting: V,
						onChange: (e) => {
							H(e), K((e) => ({
								...e,
								pageIndex: 0
							}));
						}
					})]
				})]
			}),
			I ? /* @__PURE__ */ (0, P.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: I
			}) : null,
			/* @__PURE__ */ (0, P.jsxs)(m, {
				label: B("{label}批量操作", { label: B(e) }),
				visible: $.length > 0,
				count: B("已选 {count} {unit}", {
					count: w($.length),
					unit: B(z)
				}),
				children: [O($, () => D([])), /* @__PURE__ */ (0, P.jsx)(c, {
					variant: "ghost",
					size: "small",
					onClick: () => D([]),
					children: B("取消选择")
				})]
			}),
			/* @__PURE__ */ (0, P.jsx)(f, {
				follow: !0,
				preferences: W,
				onRowClick: (e) => Q.getRow(e)?.toggleSelected(),
				children: /* @__PURE__ */ (0, P.jsxs)(h, {
					"aria-label": B(e),
					size: "sm",
					sortDescriptor: V[0] ? {
						column: V[0].id,
						direction: V[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => Q.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
					children: [/* @__PURE__ */ (0, P.jsxs)(s, { children: [Q.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, P.jsx)(i, {
						id: e.id,
						isRowHeader: e.id === y[0].id,
						allowsSorting: e.column.getCanSort(),
						...W.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [C(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, P.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, P.jsx)(u, {})
							}) : null]
						}), /* @__PURE__ */ (0, P.jsx)(_, {
							preferences: W,
							id: e.id
						})] })
					}, e.id)), /* @__PURE__ */ (0, P.jsx)(i, {
						id: "remaining-space",
						"aria-label": B("行空白区域"),
						"data-table-space": "",
						width: W.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, P.jsx)(r, {
						renderEmptyState: () => B("没有记录"),
						children: Q.getRowModel().rows.map((e) => /* @__PURE__ */ (0, P.jsxs)(a, {
							id: e.id,
							"data-board-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, P.jsx)(o, { children: C(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, P.jsx)(o, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, P.jsx)(d, {
				label: e,
				total: t.length,
				pagination: {
					...G,
					pageIndex: Y
				},
				onChange: K,
				unit: z
			}),
			L ? /* @__PURE__ */ (0, P.jsx)("div", {
				className: "flex flex-wrap items-center justify-end gap-2 border-t border-separator-border pt-4",
				children: L
			}) : null
		]
	});
}
export { I as DataTable };

//# debugId=6aba482b-a309-48ac-bc3b-64de4a0b0716