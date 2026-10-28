(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "835aeb45-d401-4442-9274-de2f1451bd66", e._sentryDebugIdIdentifier = "sentry-dbid-835aeb45-d401-4442-9274-de2f1451bd66");
	} catch {}
})();
import { Button as e, CollectionSummary as t, DUPLICATES_KEY as n, EmptyState as r, FilterGlass as i, GlassPill as a, KEEP_LABELS as o, LOC as s, MEDIA_SOURCES_KEY as c, MEDIA_SOURCE_ICONS as l, Note as u, SourceLabel as d, SourceMark as f, TRASH_KEY as p, __toESM as m, batchOperate as h, bulkCloudPreferences as g, busyProps as _, cardClass as v, cloudLocations as y, confirmModal as b, distinctName as x, duplicateVictims as S, errorMessage as C, fetchDuplicates as w, fetchMediaSources as T, fmtDur as E, fmtSize as D, mixedCloudPreferences as O, queryClient as k, require_jsx_runtime as A, require_react as j, sharedNamePrefix as M, spriteGlyph as N, useMutation as P, useQuery as F, useTranslation as I, victimBytes as L } from "./peach-app.js";
// src/react/duplicates/duplicates-page.tsx
var R = /* @__PURE__ */ m(j(), 1), z = A(), B = N("play"), V = N("file-stack"), H = v({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), U = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", W = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", G = "font-mono text-caption-1-regular leading-5 text-text-secondary", K = () => {
	k.invalidateQueries({
		queryKey: n,
		exact: !0
	}), k.invalidateQueries({
		queryKey: p,
		exact: !0
	});
};
function q({ group: e }) {
	let t = I();
	return e.identical ? /* @__PURE__ */ (0, z.jsx)("span", {
		className: `${W} text-(--keep)`,
		children: t("sha1 一致")
	}) : /* @__PURE__ */ (0, z.jsx)("span", {
		className: `${W} text-text-secondary`,
		children: t(e.evidence === "same_code_short_copy" ? "同番号短版本" : "时长推断")
	});
}
function J({ file: e, prefix: t, openItem: n }) {
	let r = I(), i = () => n(e.id), a = s[e.location] || e.location || e.drive;
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		children: [
			/* @__PURE__ */ (0, z.jsxs)("button", {
				type: "button",
				onClick: i,
				"aria-label": r("预览 {value0}", { value0: String(e.name) }),
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default text-text-secondary",
				children: [/* @__PURE__ */ (0, z.jsx)(B, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ (0, z.jsx)("img", {
					src: `/thumb?id=${e.id}&c=4`,
					alt: "",
					loading: "lazy",
					onError: (e) => e.currentTarget.remove(),
					className: "absolute inset-0 size-full object-contain"
				})]
			}),
			/* @__PURE__ */ (0, z.jsxs)("span", {
				className: "flex min-w-0 items-center gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [/* @__PURE__ */ (0, z.jsx)("button", {
					type: "button",
					onClick: i,
					title: e.name,
					"data-middle-truncate": !0,
					"data-middle-truncate-within": !0,
					className: "min-w-0 shrink cursor-pointer truncate text-left text-body-regular hover:text-text-secondary",
					children: x(e.name, t)
				}), e.is_largest || e.is_longest ? /* @__PURE__ */ (0, z.jsxs)("span", {
					className: "flex flex-none gap-1",
					children: [e.is_largest ? /* @__PURE__ */ (0, z.jsx)("i", {
						className: `${U} not-italic bg-background-primary-hover text-text-secondary`,
						children: r("最大")
					}) : null, e.is_longest ? /* @__PURE__ */ (0, z.jsx)("i", {
						className: `${U} not-italic bg-(--keep)/22 text-(--keep)`,
						children: r("最长")
					}) : null]
				}) : null]
			}),
			/* @__PURE__ */ (0, z.jsxs)("span", {
				className: `${G} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ (0, z.jsx)(f, { mark: l[e.location] || "database" }), /* @__PURE__ */ (0, z.jsx)("span", {
					title: a,
					className: "min-w-0 truncate",
					children: a
				})]
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: G,
				children: D(e.size || 0)
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: G,
				children: E(e.duration)
			}),
			/* @__PURE__ */ (0, z.jsx)("span", {
				className: `${G} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: e.path ?? ""
			})
		]
	});
}
function Y({ openItem: l, toast: f, failure: p }) {
	let m = I(), v = F({
		queryKey: n,
		queryFn: ({ signal: e }) => w(e)
	}), x = F({
		queryKey: c,
		queryFn: ({ signal: e }) => T(e)
	}), [E, k] = (0, R.useState)(""), A = P({
		mutationFn: (e) => h(e, "dispose"),
		onSuccess: (e, t) => {
			K(), f(`已把 ${t.length} 项移入回收站`, { undo: async () => {
				try {
					await h(t, "restore");
				} catch (e) {
					p("撤销移入回收站", e);
				} finally {
					K();
				}
			} });
		},
		onSettled: () => k("")
	}), j = v.data;
	if (!j) return /* @__PURE__ */ (0, z.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, z.jsx)(u, {
			tone: "error",
			title: m("重复文件读取失败"),
			children: v.error ? C(v.error) : m("未取得重复文件列表，请刷新页面重试。")
		})
	});
	let N = j.groups ?? [], B = y(x.data), U = ({ groups: e, keep: t, key: n }) => {
		if (A.isPending) return;
		let r = S(e, t);
		r.length && b({
			title: "移入回收站",
			body: `将把 ${r.length} 个重复文件的馆藏记录移入回收站，每组保留${o[t] ?? o.largest}。文件共 ${D(L(e, r))}，记录可从回收站还原。`,
			confirmLabel: "移入回收站",
			onConfirm: () => (k(n), A.mutateAsync(r))
		});
	}, G = (e) => _(E === e && A.isPending);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			/* @__PURE__ */ (0, z.jsx)(t, {
				label: m("重复内容"),
				figure: `${Number(j.total || 0).toLocaleString()} 组`,
				detail: `${Number(j.files || 0).toLocaleString()} 个文件 · 可回收 ${D(j.reclaimable)}`
			}),
			N.length ? /* @__PURE__ */ (0, z.jsxs)(i, {
				title: m("批量保留"),
				children: [
					/* @__PURE__ */ (0, z.jsx)(a, {
						busy: E === "all:largest",
						onPress: () => U({
							groups: N,
							keep: "largest",
							key: "all:largest"
						}),
						children: m("全部保留最大")
					}),
					/* @__PURE__ */ (0, z.jsx)(a, {
						busy: E === "all:longest",
						onPress: () => U({
							groups: N,
							keep: "longest",
							key: "all:longest"
						}),
						children: m("全部保留最长")
					}),
					g(N, B).map((e) => /* @__PURE__ */ (0, z.jsx)(a, {
						busy: E === `all:${e}`,
						onPress: () => U({
							groups: N,
							keep: e,
							key: `all:${e}`
						}),
						children: /* @__PURE__ */ (0, z.jsx)(d, {
							source: e,
							label: m("全部优先 {value0}", { value0: String(s[e] || e) })
						})
					}, e))
				]
			}) : null,
			A.isError ? /* @__PURE__ */ (0, z.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, z.jsx)(u, {
					tone: "error",
					title: m("移入回收站失败"),
					children: C(A.error)
				})
			}) : null,
			N.length ? N.map((t, n) => {
				let r = [t], i = M(t.files.map((e) => e.name)), a = (e) => `${n}:${e}`;
				return /* @__PURE__ */ (0, z.jsxs)("section", {
					"aria-label": t.code,
					className: H,
					children: [/* @__PURE__ */ (0, z.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
						children: [
							/* @__PURE__ */ (0, z.jsx)("b", {
								className: "text-title-2-medium text-text-primary",
								children: t.code
							}),
							/* @__PURE__ */ (0, z.jsx)("span", {
								className: "font-mono text-caption-1-regular leading-5 text-text-primary",
								children: m("{value0} 个 · 可回收 {value1}", {
									value0: String(Number(t.count || 0).toLocaleString()),
									value1: String(D(t.reclaimable))
								})
							}),
							/* @__PURE__ */ (0, z.jsx)(q, { group: t }),
							t.cross_drive ? /* @__PURE__ */ (0, z.jsx)("span", {
								className: `${W} text-text-secondary`,
								children: m("跨盘 {value0}", { value0: String(t.drives.join(" ")) })
							}) : null,
							/* @__PURE__ */ (0, z.jsxs)("span", {
								className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
								children: [
									/* @__PURE__ */ (0, z.jsx)(e, {
										variant: "secondary",
										size: "small",
										...G(a("largest")),
										onClick: () => U({
											groups: r,
											keep: "largest",
											key: a("largest")
										}),
										children: m("留最大")
									}),
									/* @__PURE__ */ (0, z.jsx)(e, {
										variant: "secondary",
										size: "small",
										...G(a("longest")),
										onClick: () => U({
											groups: r,
											keep: "longest",
											key: a("longest")
										}),
										children: m("留最长")
									}),
									O(t.files, B).map((t) => /* @__PURE__ */ (0, z.jsx)(e, {
										variant: "secondary",
										size: "small",
										...G(a(t)),
										onClick: () => U({
											groups: r,
											keep: t,
											key: a(t)
										}),
										children: /* @__PURE__ */ (0, z.jsx)(d, {
											source: t,
											label: m("留 {value0}", { value0: String(s[t] || t) })
										})
									}, t)),
									/* @__PURE__ */ (0, z.jsx)(e, {
										variant: "danger",
										size: "small",
										...G(a("all")),
										onClick: () => U({
											groups: r,
											keep: "all",
											key: a("all")
										}),
										children: m("整组回收")
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, z.jsx)("div", { children: t.files.map((e) => /* @__PURE__ */ (0, z.jsx)(J, {
						file: e,
						prefix: i,
						openItem: l
					}, e.id)) })]
				}, `${t.code}-${n}`);
			}) : /* @__PURE__ */ (0, z.jsx)(r, {
				icon: V,
				title: m("没有找到重复文件"),
				children: m("所有来源之间没有检测到内容相同的文件。扫描新来源后，这里会自动更新。")
			}),
			N.length > 0 && j.total > N.length ? /* @__PURE__ */ (0, z.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: m("显示可回收最多的前 {value0} 组，共 {value1} 组；处理掉这些后，其余的会补上来。", {
					value0: String(N.length.toLocaleString()),
					value1: String(Number(j.total).toLocaleString())
				})
			}) : null
		]
	});
}
export { Y as DuplicatesPage };

//# debugId=835aeb45-d401-4442-9274-de2f1451bd66