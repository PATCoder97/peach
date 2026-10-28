(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5451632b-aea3-4844-a8eb-1969f429c7cf", e._sentryDebugIdIdentifier = "sentry-dbid-5451632b-aea3-4844-a8eb-1969f429c7cf");
	} catch {}
})();
import { Button as e, Chip as t, DIRECTORY_TEMPLATE_ERROR as n, DUPLICATES_KEY as r, Fieldset as i, FieldsetTitle as a, IDLE_REPAIR as o, IconButton as s, Input as c, JUNK_KEY as l, LINKS_KEY as u, LINK_CHECK_KEY as d, LINK_KINDS as f, LINK_PRUNE_KEY as p, LOC as m, LibraryProcessingCard as h, MEDIA_REPAIR_KEY as g, MEDIA_REPAIR_URL as _, MEDIA_SOURCES_KEY as v, MEDIA_SOURCE_ICONS as y, Note as b, ORGANIZE_KEY as x, ORPHAN_RECORDS_KEY as S, Progress as C, QUALITY_GOALS_KEY as w, REPAIR_CARD_TEXT as T, REPAIR_LIBRARIES_KEY as E, RESOURCE_APPLY_KEY as D, RESOURCE_SCAN_KEY as O, RESULT_PANEL as k, RESULT_SECTION as A, REVIEW_COUNTS_KEY as j, SOURCE_LABELS as M, Select as N, SelectItem as ee, SourceMark as te, StatusLabel as P, TRASH_KEY as F, TaskProgress as ne, Wt as re, __toESM as I, apiSend as ie, applyConfirmText as ae, applyLeftovers as L, applyPlanText as R, applyText as z, attachOrphan as oe, baseName as se, busyProps as B, candidateText as V, checkLine as ce, confirmModal as H, entityFaceImg as le, entityPath as ue, errorMessage as U, esc as de, fetchDuplicates as fe, fetchJunkSummary as pe, fetchLinkCheck as me, fetchLinkPrune as W, fetchLinkStats as he, fetchMediaRepair as G, fetchMediaSources as ge, fetchOrganize as _e, fetchOrganizeExample as ve, fetchOrphanRecords as ye, fetchQualityGoals as be, fetchRepairLibraries as xe, fetchResourceApply as Se, fetchResourceScan as Ce, fetchReviewCounts as we, fetchTrashSummary as Te, firstGrapheme as Ee, fmtSize as De, getLocale as Oe, hasChanges as ke, hasResourceRoots as Ae, junkBreakdown as je, missingToolText as Me, organizeOutcome as Ne, pickOrganizeFolder as Pe, planSummary as Fe, previewOrganize as Ie, pruneText as Le, purgeCount as Re, purgeOrphan as ze, queryClient as K, recordsText as Be, rememberTemplates as Ve, require_jsx_runtime as He, require_react as Ue, reviewSummary as We, scanLine as Ge, sourceMeta as Ke, spriteGlyph as q, startLinkCheck as qe, startLinkPrune as Je, startOrganize as Ye, startResourceApply as Xe, startResourceScan as Ze, statusLine as Qe, useAction as $e, useBackgroundJob as J, useMutation as et, useQuery as Y, useSystemTranslation as tt, useTranslation as X, withOrganizeJob as nt } from "./peach-app.js";
import { Page as rt } from "./peach-app.page-QAncjzM1.js";
import { ErrorExcerpt as it } from "./peach-app.error-excerpt-B5Q9c4yt.js";
import { PLAIN_STAT_STRIP as at, PlainStat as ot, plainStatClass as st } from "./peach-app.stat-card-BeemgLDd.js";
import { DataTable as ct } from "./peach-app.data-table-BdaEqtk7.js";
import { SiteMark as lt } from "./peach-app.site-mark-D_VlIyJz.js";
import { LEGACY_AVATAR_IMG as ut } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { FolderSearchIcon as dt } from "./peach-app.folder-rows-BXmcgS-S.js";
import { ConnectionStatus as ft } from "./peach-app.connection-status-Usa7d0Cc.js";
// src/react/media-repair/media-repair-card.tsx
var Z = /* @__PURE__ */ I(Ue(), 1), Q = He(), pt = (e) => y[e] || e, mt = (e) => K.setQueryData(g, e);
function ht({ toast: t = () => {} }) {
	let n = X(), r = J({
		queryKey: g,
		queryFn: ({ signal: e }) => G(e),
		start: (e) => ie(_, {
			library: e,
			restart: !0
		}),
		onFinish: (e) => {
			e.status === "complete" && !e.failed && !e.missing_tool && t(e.repaired ? `已修复 ${e.repaired.toLocaleString()} 部视频` : "已检查媒体库，没有需要修复的视频");
		}
	}), s = Y({
		queryKey: E,
		queryFn: ({ signal: e }) => xe(e)
	}), [c, l] = (0, Z.useState)(""), u = $e(), d = r.job ?? o, f = s.data ?? [], p = d.status === "running", m = f.find((e) => e.id === (p ? d.library : c)) ?? f.find((e) => e.id === d.library) ?? f[0], h = () => {
		m && H({
			title: `修复媒体库「${m.name}」`,
			body: "缺时间戳表的片子另存一份修好的头，原文件不动；缺索引的片子重建后替换原文件，坏原件改名成同目录的隐藏文件（.文件名.peach-original）留着。" + (m.metered ? "这个库在计费来源上，每修一部都要把片子完整拉一遍。" : ""),
			confirmLabel: "修复媒体库",
			onConfirm: async () => {
				await r.start.mutateAsync(m.id);
			}
		});
	}, v = () => void u.run("stop", (e) => ie(_, { stop: !0 }, "POST", e), mt), y = r.outcome, x = Qe(p ? d : y ?? o), S = u.error || y?.error || (r.query.error ? "读不到媒体修复的状态" : "");
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsx)(i, {
			layout: "split",
			label: n("媒体修复"),
			footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(N, {
				"aria-label": n("媒体库"),
				prefix: n("媒体库"),
				className: "w-48",
				selectedKey: m?.id ?? null,
				isDisabled: p || !f.length,
				onSelectionChange: (e) => {
					e !== null && l(String(e));
				},
				children: f.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ee, {
					id: e.id,
					textValue: e.name,
					children: [/* @__PURE__ */ (0, Q.jsx)(te, { mark: pt(e.icon) }), e.name]
				}, e.id))
			}), p ? /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: v,
				...B(u.busy === "stop"),
				children: n("停止")
			}) : /* @__PURE__ */ (0, Q.jsx)(e, {
				onClick: h,
				disabled: !m,
				children: n("开始修复")
			})] }),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(a, { children: n("媒体修复") }),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: n(T)
					}),
					p && d.total ? /* @__PURE__ */ (0, Q.jsx)(C, {
						label: n("修复进度"),
						value: d.checked,
						max: d.total
					}) : null,
					x ? /* @__PURE__ */ (0, Q.jsx)("p", {
						role: "status",
						className: "text-caption-1-regular text-text-secondary",
						children: x
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: [y?.status === "complete" && y.missing_tool ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "warning",
				title: n("缺少 untrunc"),
				action: /* @__PURE__ */ (0, Q.jsx)(e, {
					variant: "ghost",
					size: "small",
					onClick: r.dismiss,
					children: n("关闭提示")
				}),
				children: Me(y)
			}) : null, S ? /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				children: S
			}) : null]
		})]
	});
}
// src/react/data-cleanup/link-check-icon.tsx
function gt({ className: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		"data-link-check-icon": "",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }),
			/* @__PURE__ */ (0, Q.jsx)("path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }),
			/* @__PURE__ */ (0, Q.jsxs)("g", {
				"data-link-check-rays": "",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M8 2v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M2 8h3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M16 19v3" }),
					/* @__PURE__ */ (0, Q.jsx)("path", { d: "M19 16h3" })
				]
			})
		]
	});
}
// src/react/data-cleanup/link-manager.tsx
var _t = q("rotate-cw"), vt = "站点返回 404 或 410，确认这个地址不存在。", yt = "站点拒绝程序访问或一次临时故障都会落在这里。链接保留，可勾选后单独重试。", bt = "删除前会逐条重验一次；此操作不可撤销。", xt = "暂时无法读取进度，正在重新连接…", St = (e) => Number(e || 0).toLocaleString();
function Ct({ label: e, value: t, note: n }) {
	let r = tt();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-0.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: r(e)
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-title-2-semibold font-bold leading-5 tabular-nums text-text-primary",
				children: t
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "text-caption-1-regular leading-5 text-text-secondary",
				children: r(n)
			}) : null
		]
	});
}
function wt({ title: e, items: t, hint: n, picked: r, onPick: i, children: a, footer: o, confirmed: s = !1 }) {
	let c = X();
	return t.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
		className: A,
		"data-link-results": s ? "gone" : "unclear",
		children: /* @__PURE__ */ (0, Q.jsx)(ct, {
			label: e,
			items: t,
			columns: [
				{
					id: "entity",
					label: "Peach 资料",
					width: 180,
					min: 128,
					value: (e) => e.entity,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						className: "flex min-w-24 items-center gap-2 text-text-secondary hover:text-text-primary hover:underline",
						href: e.entity_id && e.entity_kind ? ue(e.entity_kind, e.entity, e.entity_id) : void 0,
						"data-link-identity": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("span", {
							"data-link-avatar": "",
							className: `relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-background-quaternary-default text-caption-1-medium text-text-primary ${ut}`,
							"aria-hidden": !0,
							dangerouslySetInnerHTML: { __html: `<span>${de(Ee(e.entity))}</span>` + le({
								kind: e.entity_kind,
								id: e.entity_id,
								hasImage: e.face?.has_image,
								version: e.face?.image_version,
								focus: e.face?.avatar_focus,
								thumb: !0,
								mark: e.entity_kind === "studio" || e.entity_kind === "agency" ? e.id : null
							}) }
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.entity
						})]
					})
				},
				{
					id: "kind",
					label: "类型",
					width: 128,
					value: (e) => f[e.link_kind] || e.link_kind,
					render: (e) => f[e.link_kind] || e.link_kind
				},
				{
					id: "label",
					label: "链接名称",
					min: 128,
					value: (e) => e.label || "",
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "flex min-w-24 items-center gap-2",
						"data-link-name": "",
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.label || new URL(e.url).hostname
						})
					})
				},
				{
					id: "note",
					label: "结果",
					width: 320,
					min: 192,
					value: (e) => e.note,
					render: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "min-w-0 w-full",
						"data-link-result": s ? "gone" : "unclear",
						children: /^(?:HTTP\s+)?[1-5]\d{2}$/.test(e.note.trim()) ? /* @__PURE__ */ (0, Q.jsx)(P, {
							tone: s || /^(?:HTTP\s+)?5\d{2}$/.test(e.note.trim()) ? "error" : "warning",
							"data-link-code": "",
							children: e.note.trim()
						}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, Q.jsx)(P, {
								tone: s ? "error" : "warning",
								children: c(s ? "地址已失效" : "未取得结论")
							}), /* @__PURE__ */ (0, Q.jsx)(it, {
								text: e.note,
								className: "tabular-nums text-text-secondary"
							})]
						})
					})
				},
				{
					id: "url",
					label: "地址",
					width: 360,
					min: 180,
					value: (e) => e.url,
					render: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
						href: e.url,
						target: "_blank",
						rel: "noopener noreferrer",
						title: e.url,
						"data-link-address": "",
						className: "flex min-w-0 items-center gap-1 text-text-secondary hover:text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(lt, { linkId: e.id }),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								"data-middle-truncate": !0,
								className: "min-w-0 truncate",
								children: e.url
							}),
							/* @__PURE__ */ (0, Q.jsx)(re, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})
						]
					})
				}
			],
			rowId: (e) => String(e.id),
			description: n,
			unit: "条链接",
			panel: !1,
			footerActions: o,
			rowLabel: (e) => `${e.entity} 的${e.label || e.url}`,
			selected: r.map(String),
			onSelected: (e) => i(e.map(Number)),
			actions: () => a
		})
	}) : null;
}
function Tt() {
	let n = X(), r = Y({
		queryKey: u,
		queryFn: ({ signal: e }) => he(e)
	}), [o, s] = (0, Z.useState)([]), [c, l] = (0, Z.useState)([]), m = J({
		queryKey: p,
		queryFn: ({ signal: e }) => W(e),
		start: Je,
		onFinish: () => {
			K.invalidateQueries({
				queryKey: u,
				exact: !0
			}), K.invalidateQueries({
				queryKey: d,
				exact: !0
			});
		}
	}), h = J({
		queryKey: d,
		queryFn: ({ signal: e }) => me(e),
		start: qe,
		onStarted: () => {
			m.dismiss(), s([]), l([]);
		}
	}), g = h.job, _ = g?.check_id ?? "";
	(0, Z.useEffect)(() => {
		s([]), l([]);
	}, [_]);
	let v = h.running || h.start.isPending, y = m.running || m.start.isPending, x = g?.status === "complete", S = g?.gone ?? [], C = g?.unclear ?? [], w = x ? C : [], T = S.filter((e) => c.includes(e.id)).map((e) => e.id), E = w.filter((e) => o.includes(e.id)).map((e) => e.id), D = r.data, O = (D?.top_hosts ?? []).slice(0, 3), j = (e) => {
		v || e && !e.length || h.start.mutate(e ? {
			retry: e,
			checkId: _
		} : {});
	}, M = (e) => {
		!y && S.length && H({
			title: "删除失效链接",
			body: `将删除 ${e?.length ?? S.length} 条失效链接。删除前会再次检查，删除后无法恢复。`,
			confirmLabel: "删除失效链接",
			danger: !0,
			onConfirm: () => m.start.mutateAsync({
				checkId: _,
				ids: e
			})
		});
	}, N = m.outcome, ee = h.start.error ?? m.start.error, te = null, P = null;
	if (N?.status === "failed") P = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("链接清理未完成"),
		children: N.error || n("请查看任务记录，核对已处理的链接。")
	});
	else if (N && !S.length && !C.length) P = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "success",
		title: n("完成"),
		children: Le(N)
	});
	else if (ee) P = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("检查失败"),
		children: U(ee)
	});
	else if (h.query.isError && g) P = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: n("任务状态"),
		children: xt
	});
	else if (g?.status === "failed") P = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("检查失败"),
		children: g.error || n("检查失败")
	});
	else if (g && g.status !== "idle") {
		te = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [g.status === "running" ? /* @__PURE__ */ (0, Q.jsx)(ne, {
			embedded: !0,
			label: ce(g),
			value: Math.min(g.checked || 0, g.total || 0),
			total: g.total
		}) : null, y ? /* @__PURE__ */ (0, Q.jsx)(ne, {
			embedded: !0,
			label: m.job?.message || n("正在重验并删除失效链接"),
			value: Math.min(m.job?.checked || 0, m.job?.total || 0),
			total: m.job?.total
		}) : null] });
		let t = `立即重试所选（${E.length}）`;
		P = x || S.length || C.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: k,
			children: [
				N?.status === "complete" ? /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "success",
					title: n("完成"),
					children: Le(N)
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)(wt, {
					title: n("地址已失效"),
					items: S,
					hint: vt,
					picked: c,
					onPick: l,
					confirmed: !0,
					footer: x && S.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "mr-auto min-w-0 text-caption-1-regular text-text-secondary",
						children: bt
					}), /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						...B(y),
						onClick: () => M(),
						children: n("删除 {value0} 条失效链接", { value0: String(S.length) })
					})] }) : null,
					children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "danger",
						size: "small",
						disabled: !x || !T.length,
						...B(y),
						onClick: () => M(T),
						children: n("删除所选（{value0}）", { value0: String(T.length) })
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(wt, {
					title: n("本次未访问成功"),
					items: C,
					hint: yt,
					picked: o,
					onPick: s,
					footer: w.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "primary",
						leadingIcon: _t,
						...B(v),
						onClick: () => j(w.map((e) => e.id)),
						children: n("立即重试全部（{value0}）", { value0: String(w.length) })
					}) : null,
					children: w.length ? /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: /* @__PURE__ */ (0, Q.jsx)(e, {
						variant: "secondary",
						leadingIcon: _t,
						disabled: !E.length,
						...B(v),
						onClick: () => j(E),
						children: t
					}) }) : null
				}),
				x && !S.length && !C.length ? /* @__PURE__ */ (0, Q.jsx)("p", {
					className: `${A} text-body-regular text-notification-success-foreground`,
					children: n("全部链接均可访问。")
				}) : null
			]
		}) : null;
	}
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "link-manager",
		"aria-labelledby": "link-manager-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "stack",
			labelledBy: "link-manager-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-link-check": "",
				leadingIcon: gt,
				...B(v),
				onClick: () => j(),
				children: n(v ? "检查中" : x ? "重新检查" : "检查死链")
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(a, {
					id: "link-manager-title",
					gap: "small",
					children: n("链接管理")
				}),
				r.isError ? /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "error",
					title: n("链接统计读取失败"),
					children: U(r.error)
				}) : D ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "link-stat-grid mt-4 gap-x-8 gap-y-3",
					children: [/* @__PURE__ */ (0, Q.jsx)(Ct, {
						label: n("链接总数"),
						value: St(D.total),
						note: `分布在 ${St(D.entities)} 个女优、厂牌与系列`
					}), Object.entries(D.by_kind ?? {}).map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ct, {
						label: f[e] || e,
						value: St(t)
					}, e))]
				}), O.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "mt-4 flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: n("主要站点")
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						className: "flex min-w-0 flex-wrap gap-x-5 gap-y-2",
						children: O.map(([e, n]) => /* @__PURE__ */ (0, Q.jsxs)("span", {
							"data-top-host": "",
							className: "inline-flex min-w-0 max-w-full items-center gap-1.5",
							children: [/* @__PURE__ */ (0, Q.jsxs)("a", {
								href: `https://${e}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex min-w-0 items-center gap-1.5 text-body-2-medium text-text-primary",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(lt, { linkId: D.top_host_link_ids?.[e] }),
									/* @__PURE__ */ (0, Q.jsx)("span", {
										className: "min-w-0 wrap-anywhere",
										children: e
									}),
									/* @__PURE__ */ (0, Q.jsx)(re, {
										"aria-hidden": !0,
										className: "size-(--icon-inline) shrink-0"
									})
								]
							}), /* @__PURE__ */ (0, Q.jsx)(t, {
								variant: "caption",
								color: "neutral",
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "tabular-nums",
									children: St(n)
								})
							})]
						}, e))
					})]
				}) : null] }) : null,
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 flex flex-col gap-3 empty:hidden",
					children: te
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "empty:hidden",
			children: P
		})]
	});
}
// src/react/data-cleanup/organize-card.tsx
var Et = (e, t) => `将整理「${e}」${t ? `的「${t}」及其子目录` : "上的文件名与目录"}，清理特殊符号与乱码，并按已填模板改名或移动。目标已存在的行会整行跳过。这一批可以从「回滚上一批」整批退回。`, Dt = "将把上一批整理动过的文件退回整理前的名字与位置，数据库路径跟着退回。退回后这一批不再出现在这里。", Ot = 8;
function kt({ plan: e }) {
	let t = X();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("ol", {
		className: "mt-2 flex min-w-0 flex-col gap-1",
		children: e.rows.slice(0, Ot).map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
			className: "flex min-w-0 items-center gap-2 text-caption-1-regular text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.current_path,
					className: "min-w-0 truncate",
					children: se(e.current_path)
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"aria-hidden": !0,
					children: "→"
				}),
				/* @__PURE__ */ (0, Q.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.target_path,
					className: "min-w-0 truncate text-text-primary",
					children: se(e.target_path)
				})
			]
		}, e.current_path))
	}), e.truncated || e.rows.length > Ot ? /* @__PURE__ */ (0, Q.jsx)("p", {
		className: "text-caption-1-regular text-text-secondary",
		children: t("只列出前 8 行，完整计划在计划 CSV 里。")
	}) : null] });
}
function At({ toast: t, failure: r }) {
	let o = X(), l = Y({
		queryKey: x,
		queryFn: ({ signal: e }) => _e(e)
	}), u = l.data, d = u?.locations ?? [], [f, p] = (0, Z.useState)(""), h = d.some((e) => e.location === f) ? f : d[0]?.location ?? "", g = u?.templates?.[h], [_, v] = (0, Z.useState)(null), S = _?.location === h ? _ : {
		location: h,
		file: g?.file ?? "",
		dir: g?.dir ?? ""
	}, C = (e) => {
		v({
			...S,
			...e
		}), L.reset();
	}, [w, T] = (0, Z.useState)({
		location: "",
		path: ""
	}), E = w.location === h ? w.path : "", D = (0, Z.useRef)({
		location: h,
		path: E
	});
	D.current = {
		location: h,
		path: E
	};
	let [O, k] = (0, Z.useState)(null), A = (0, Z.useRef)(null), j = (0, Z.useRef)(null), M = (0, Z.useRef)(null), P = Y({
		queryKey: [
			"organize-example",
			S.file,
			S.dir,
			Oe()
		],
		queryFn: ({ signal: e }) => ve(S.file, S.dir, e, Oe()),
		enabled: !!u
	}), [F, re] = (0, Z.useState)("file"), I = (0, Z.useRef)(!1), ie = (0, Z.useRef)(null);
	(0, Z.useLayoutEffect)(() => {
		let e = ie.current;
		if (!e) return;
		ie.current = null;
		let t = (e.field === "file" ? A : j).current;
		t?.focus(), t?.setSelectionRange(e.caret, e.caret);
	});
	let ae = () => ({
		location: h,
		path: E.trim(),
		file_template: S.file.trim(),
		dir_template: S.dir.trim()
	}), L = et({
		mutationFn: Ie,
		onError: (e) => {
			let t = /整理路径/.test(U(e)) ? "path" : n.test(U(e)) ? "dir" : "file";
			k(t), (t === "path" ? M : t === "dir" ? j : A).current?.focus();
		}
	}), R = et({
		mutationFn: ({ initial: e }) => Pe(e),
		onSuccess: (e, t) => {
			e.path && t.location === D.current.location && t.path === D.current.path && (T({
				location: t.location,
				path: e.path
			}), k(null), L.reset(), M.current?.focus());
		}
	}), z = J({
		queryKey: x,
		queryFn: ({ signal: e }) => _e(e),
		start: Ye,
		jobOf: (e) => e,
		withJob: nt,
		onStarted: () => L.reset(),
		onFinish: (e) => {
			if (K.invalidateQueries({
				queryKey: x,
				exact: !0
			}), e.status !== "complete") return;
			let { text: n, failed: i } = Ne(e);
			i ? r("整理文件", /* @__PURE__ */ Error(`${i} 行未能处理`)) : t(n.replace(/。$/, ""));
		}
	}), oe = z.running || z.start.isPending, se = JSON.stringify(L.variables) === JSON.stringify(ae()), V = se ? L.data : void 0, ce = Number(V?.counts?.change || 0), le = m[h] || h, ue = (e) => {
		C(e), k(null), L.reset();
	}, de = (e) => {
		let t = (F === "file" ? A : j).current, n = S[F], r = I.current ? t?.selectionStart ?? n.length : n.length, i = I.current ? t?.selectionEnd ?? r : r, a = `{${e}}`;
		ie.current = {
			field: F,
			caret: r + a.length
		}, ue({ [F]: n.slice(0, r) + a + n.slice(i) });
	}, fe = () => {
		L.isPending || oe || !h || (z.dismiss(), z.start.reset(), k(null), L.mutate(ae()));
	}, pe = () => {
		let e = L.variables;
		e && V && ce && H({
			title: "整理文件",
			body: Et(le, e.path),
			confirmLabel: "整理文件",
			onConfirm: async () => {
				await z.start.mutateAsync({
					kind: "apply",
					request: e
				}), Ve({
					...u?.templates ?? {},
					[e.location]: {
						file: e.file_template,
						dir: e.dir_template
					}
				});
			}
		});
	}, me = () => void H({
		title: "回滚上一批整理",
		body: Dt,
		confirmLabel: "回滚整理",
		onConfirm: () => z.start.mutateAsync({ kind: "rollback" })
	}), W = null, he = !!ce && !oe && !z.outcome, G = z.job, ge = z.outcome;
	if (G?.status === "running") {
		let e = G.message || G.stage || "正在整理文件";
		W = /* @__PURE__ */ (0, Q.jsx)(ne, {
			embedded: !0,
			label: e,
			value: Math.min(G.checked || 0, G.total || 0),
			total: G.total
		});
	} else if (ge?.status === "failed") W = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: o("文件整理未完成"),
		children: ge.error || o("请查看任务记录，核对已处理的文件。")
	});
	else if (ge) {
		let { text: e, failed: t } = Ne(ge);
		W = /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: t ? "warning" : "success",
			title: o(t ? "部分完成" : "整理结果"),
			children: e
		});
	} else z.start.isError ? W = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: o("整理失败"),
		children: U(z.start.error)
	}) : L.isPending ? W = /* @__PURE__ */ (0, Q.jsx)(ne, {
		embedded: !0,
		label: o("正在核对整理计划")
	}) : L.isError && se ? W = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: o("整理预览失败"),
		children: U(L.error)
	}) : V && (W = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: o("预览结果"),
		children: Fe(V)
	}), ce ? /* @__PURE__ */ (0, Q.jsx)(kt, { plan: V }) : null] }));
	return /* @__PURE__ */ (0, Q.jsxs)(i, {
		layout: "stack",
		id: "organize",
		labelledBy: "cleanup-organize-title",
		attributes: { "data-cleanup-organize": "" },
		footer: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			u?.last_batch ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "secondary",
				...B(oe),
				onClick: me,
				children: o("回滚上一批")
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: he ? "secondary" : "primary",
				disabled: !d.length || oe,
				...B(L.isPending),
				onClick: fe,
				children: o("预览")
			}),
			he ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				onClick: pe,
				children: o("执行整理")
			}) : null
		] }),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(a, {
				id: "cleanup-organize-title",
				gap: "medium",
				children: o("整理")
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-regular text-text-secondary",
				children: o("清理文件名中的特殊符号与乱码，也可按模板改名并归入目录。先预览，确认后执行；执行过的一批可以整批退回。")
			}),
			l.isError ? /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, Q.jsx)(b, {
					tone: "error",
					title: o("整理配置读取失败"),
					children: U(l.error)
				})
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "mt-3 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-organize-scope": !0,
						className: "flex min-w-0 flex-wrap items-start gap-2",
						children: [d.length ? /* @__PURE__ */ (0, Q.jsx)(N, {
							"aria-label": o("整理哪个来源"),
							prefix: o("来源"),
							className: "w-fit min-w-25",
							selectedKey: h || null,
							onSelectionChange: (e) => {
								e !== null && (p(String(e)), T({
									location: String(e),
									path: ""
								}), k(null), L.reset(), R.reset(), I.current = !1);
							},
							children: d.map((e) => /* @__PURE__ */ (0, Q.jsxs)(ee, {
								id: e.location,
								textValue: o(m[e.location] || e.location),
								children: [/* @__PURE__ */ (0, Q.jsx)(te, { mark: y[e.location] || "database" }), o(m[e.location] || e.location)]
							}, e.location))
						}) : null, /* @__PURE__ */ (0, Q.jsxs)("div", {
							className: "flex min-w-0 basis-64 flex-1 items-start gap-2",
							children: [/* @__PURE__ */ (0, Q.jsx)(c, {
								"aria-label": o("整理路径"),
								className: "min-w-0 flex-1",
								placeholder: o("留空整理整个来源"),
								name: "organize-path",
								autoComplete: "off",
								spellCheck: "false",
								value: E,
								ref: M,
								isInvalid: O === "path",
								onChange: (e) => {
									T({
										location: h,
										path: e
									}), k(null), L.reset(), R.reset();
								}
							}), /* @__PURE__ */ (0, Q.jsx)(s, {
								icon: dt,
								"aria-label": o("选择整理路径"),
								...B(R.isPending),
								onClick: () => R.mutate({
									initial: E || d.find((e) => e.location === h)?.roots[0] || "",
									location: h,
									path: E
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: o("指定路径时包含子目录，目录模板以该路径为起点。模板均留空时只清理文件名。")
					}),
					R.isError ? /* @__PURE__ */ (0, Q.jsxs)(b, {
						tone: "error",
						title: o("目录选择失败"),
						children: [U(R.error), o("；也可直接输入路径。")]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(c, {
						label: o("文件名模板"),
						placeholder: "{code}[ {title}]",
						value: S.file,
						ref: A,
						spellCheck: "false",
						isInvalid: O === "file",
						onFocus: () => {
							re("file"), I.current = !0;
						},
						onChange: (e) => ue({ file: e })
					}),
					/* @__PURE__ */ (0, Q.jsx)(c, {
						label: o("目录模板"),
						placeholder: o("留空表示原地改名"),
						value: S.dir,
						ref: j,
						spellCheck: "false",
						isInvalid: O === "dir",
						onFocus: () => {
							re("dir"), I.current = !0;
						},
						onChange: (e) => ue({ dir: e })
					}),
					u?.presets?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": o("套用模板"),
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-caption-1-medium text-text-secondary",
							children: o("套用模板")
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: u.presets.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "secondary",
								size: "small",
								title: o(t.example || t.label),
								className: "max-w-full [&>span]:min-w-0 [&>span]:shrink",
								onClick: () => {
									ue({
										file: t.file,
										dir: t.dir
									}), I.current = !1;
								},
								children: /* @__PURE__ */ (0, Q.jsx)("span", {
									className: "truncate",
									children: o(t.label)
								})
							}, t.label))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						"aria-live": "polite",
						"aria-busy": P.isFetching,
						"data-organize-example": "",
						className: "text-caption-1-regular text-text-secondary",
						children: [o("路径示例："), /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "wrap-anywhere",
							children: P.data?.example || P.data?.error || (P.isError ? U(P.error) : "正在预览…")
						})]
					}),
					u?.placeholders?.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-col gap-2",
						role: "group",
						"aria-label": o("插入参数"),
						children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
							className: "text-caption-1-regular text-text-secondary",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, Q.jsx)("strong", {
									className: "text-caption-1-semibold text-text-primary",
									children: o("插入参数")
								}),
								o("（到"),
								o(F === "file" ? "文件名模板" : "目录模板"),
								"）"
							]
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: u.placeholders.map((t) => /* @__PURE__ */ (0, Q.jsx)(e, {
								variant: "ghost",
								size: "small",
								"aria-label": `${o(t.label)} {${t.key}}`,
								onClick: () => de(t.key),
								children: /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "inline-flex flex-wrap items-center gap-x-1.5",
									children: [/* @__PURE__ */ (0, Q.jsx)("code", { children: `{${t.key}}` }), /* @__PURE__ */ (0, Q.jsx)("span", {
										className: "text-text-secondary",
										children: o(t.label)
									})]
								})
							}, t.key))
						})]
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular leading-4.5 text-text-secondary",
						children: o("点击参数插入光标处，选中文字可替换。方括号里的内容在字段为空时整段省略。")
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"aria-live": "polite",
				className: "mt-3 flex flex-col gap-2 empty:hidden",
				children: W
			})
		]
	});
}
// src/react/data-cleanup/orphan-records-card.tsx
var jt = q("play"), Mt = () => K.invalidateQueries({
	queryKey: S,
	exact: !0
});
function Nt({ item: t, toast: n }) {
	let r = X(), [i, a] = (0, Z.useState)(t.candidates[0]?.id ?? null), o = et({
		mutationFn: () => oe(t.id, Number(i)),
		onSuccess: () => {
			let e = t.candidates.find((e) => e.id === i);
			n(`已将「${t.name}」的个人记录转移到「${e?.name ?? "所选文件"}」`), Mt();
		},
		onError: (e) => n(U(e))
	}), s = et({
		mutationFn: () => ze(t.id),
		onSuccess: (e) => {
			n(e.blocked.length ? `「${t.name}」的文件已恢复，记录未删除；下次扫描后恢复为在库状态` : `已删除「${t.name}」的作品记录及个人记录`), Mt();
		}
	}), c = () => {
		H({
			title: "删除记录",
			body: `将删除「${t.name}」的作品记录${Be(t.records) ? `及其个人记录（${Be(t.records)}）` : ""}。此操作不可撤销。`,
			confirmLabel: "删除记录",
			danger: !0,
			onConfirm: () => s.mutateAsync()
		});
	}, l = o.isPending || s.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				...B(l),
				onClick: c,
				children: r("删除记录")
			}),
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(N, {
				"aria-label": r("选择接收 {value0} 个人记录的文件", { value0: String(t.name) }),
				prefix: r("接收"),
				className: "w-52",
				selectedKey: i,
				onSelectionChange: (e) => {
					e !== null && a(Number(e));
				},
				children: t.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(ee, {
					id: e.id,
					textValue: V(e),
					children: V(e)
				}, e.id))
			}) : null,
			t.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "primary",
				size: "small",
				disabled: i === null,
				...B(l),
				onClick: () => o.mutate(),
				children: r("转移记录")
			}) : null
		]
	});
}
function Pt({ item: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "relative inline-grid aspect-16/10 w-24 flex-none place-items-center max-cleanup-tight:hidden overflow-hidden rounded-lg border border-separator-border bg-background-tertiary-default text-text-tertiary",
			children: [/* @__PURE__ */ (0, Q.jsx)(jt, {
				"aria-hidden": !0,
				className: "size-5"
			}), e.has_thumb ? /* @__PURE__ */ (0, Q.jsx)("img", {
				src: `/thumb?id=${e.id}&c=4`,
				alt: "",
				loading: "lazy",
				onError: (e) => e.currentTarget.remove(),
				className: "absolute inset-0 size-full object-contain"
			}) : null]
		}), /* @__PURE__ */ (0, Q.jsxs)("span", {
			className: "flex min-w-0 flex-1 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				title: e.name,
				className: "truncate text-body-regular text-text-primary",
				children: e.name
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "truncate text-caption-1-regular text-text-secondary",
				children: [e.code, m[e.location] || e.location].filter(Boolean).join(" · ")
			})]
		})]
	});
}
function Ft({ toast: t }) {
	let n = X(), [r, o] = (0, Z.useState)([]), s = Y({
		queryKey: S,
		queryFn: ({ signal: e }) => ye(e)
	}), c = s.data?.items ?? [], l = et({
		mutationFn: (e) => ze(e),
		onSuccess: (e) => {
			t(`已删除 ${e.purged} 条作品记录及其个人记录${e.blocked.length ? `；${e.blocked.length} 条文件已恢复，记录未删除` : ""}`), o([]), Mt();
		}
	}), u = (e) => void H({
		title: "删除所选记录",
		body: `将删除以下 ${e.length} 条作品记录及其全部个人记录。此操作不可撤销。`,
		items: e.map((e) => e.name),
		confirmLabel: "删除所选记录",
		danger: !0,
		onConfirm: () => l.mutateAsync(e.map((e) => e.id))
	}), d = [
		{
			id: "item",
			label: "作品",
			width: 480,
			min: 320,
			value: (e) => e.name,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(Pt, { item: e })
		},
		{
			id: "records",
			label: "个人记录",
			width: 176,
			min: 144,
			value: (e) => Be(e.records),
			render: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "block min-w-0 whitespace-normal wrap-anywhere",
				children: Be(e.records) || n("无")
			})
		},
		{
			id: "target",
			label: "操作",
			width: c.some((e) => e.candidates.length) ? 360 : 128,
			min: 128,
			value: (e) => e.candidates.length,
			render: (e) => /* @__PURE__ */ (0, Q.jsx)(Nt, {
				item: e,
				toast: t
			})
		}
	];
	return !s.isError && !c.length ? null : /* @__PURE__ */ (0, Q.jsx)("section", {
		id: "orphan-records",
		"aria-labelledby": "orphan-records-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: s.isError ? /* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "stack",
			labelledBy: "orphan-records-title",
			children: [/* @__PURE__ */ (0, Q.jsx)(a, {
				id: "orphan-records-title",
				children: n("文件已丢失的记录")
			}), /* @__PURE__ */ (0, Q.jsx)(b, {
				tone: "error",
				title: n("读取文件已丢失的记录失败"),
				children: U(s.error)
			})]
		}) : /* @__PURE__ */ (0, Q.jsx)(ct, {
			label: n("文件已消失的作品"),
			items: c,
			columns: d,
			title: n("文件已丢失的记录"),
			titleId: "orphan-records-title",
			unit: "条作品",
			description: n("这些作品的源文件已删除，喜欢、稍后看、播放列表与观看历史仍保留。选择替代文件后，这些记录会转移到该文件，旧作品记录随之删除。"),
			rowId: (e) => String(e.id),
			rowLabel: (e) => e.name,
			selected: r,
			onSelected: o,
			actions: (t) => /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				size: "small",
				disabled: !t.length,
				...B(l.isPending),
				onClick: () => u(t),
				children: n("删除所选记录（{value0}）", { value0: String(t.length) })
			})
		})
	});
}
// src/react/data-cleanup/resource-sync-card.tsx
var It = q("git-compare"), Lt = q("rotate-cw"), Rt = "暂时无法读取进度，正在重新连接…", zt = "清理失效条目", Bt = "inline-grid w-full grid-flow-col auto-cols-fr gap-4 max-plain-stat-pair:grid-flow-row max-plain-stat-pair:grid-cols-2 max-plain-stat-single:grid-cols-1", $ = (e) => Number(e || 0).toLocaleString();
function Vt({ scan: e, partial: t = !1 }) {
	let n = X(), r = e.cache ?? {
		files: 0,
		bytes: 0
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("div", {
		className: Bt,
		children: (e.sources ?? []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("article", {
			className: st(),
			children: [/* @__PURE__ */ (0, Q.jsx)(ot, {
				label: M[e.location] || n("媒体来源"),
				mark: /* @__PURE__ */ (0, Q.jsx)(te, { mark: y[e.location] ?? "database" }),
				aside: /* @__PURE__ */ (0, Q.jsx)(ft, {
					online: e.online,
					children: e.online ? n("可访问") : n("离线")
				}),
				figure: e.online ? `${$(e.missing)} 项` : "—",
				meta: e.online ? Ke(e) : n("{value0} · 本次已跳过", { value0: String(Ke(e)) }),
				wrapMeta: !0
			}), e.online && e.unreadable > 0 ? /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsxs)(P, {
					tone: "warning",
					children: [$(e.unreadable), n(" 个目录未读取")]
				})
			}) : null]
		}, e.location))
	}), !t && /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Bt,
		children: [
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: st(),
				children: /* @__PURE__ */ (0, Q.jsx)(ot, {
					label: n("待永久删除"),
					figure: `${$(Re(e))} 项`,
					meta: n("文件已不在盘上，含回收站")
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: st(),
				children: /* @__PURE__ */ (0, Q.jsx)(ot, {
					label: n("将标为已消失"),
					figure: `${$(e.vanish)} 项`,
					meta: n("带个人记录，记录留着")
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: st(),
				children: /* @__PURE__ */ (0, Q.jsx)(ot, {
					label: n("空文件夹"),
					figure: `${$(e.empty)} 个`,
					meta: n("保留来源根目录")
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)("article", {
				className: st(),
				children: /* @__PURE__ */ (0, Q.jsx)(ot, {
					label: n("可清理的缓存"),
					figure: `${$(r.files)} 个`,
					meta: r.files ? De(r.bytes) : ""
				})
			})
		]
	})] });
}
function Ht({ toast: t }) {
	let n = X(), r = J({
		queryKey: D,
		queryFn: ({ signal: e }) => Se(e),
		start: Xe,
		onFinish: (e) => {
			if (K.invalidateQueries({
				queryKey: F,
				exact: !0
			}), K.invalidateQueries({
				queryKey: O,
				exact: !0
			}), e.status !== "complete") return;
			let { done: n, left: r } = L(e);
			r ? t(`已完成 ${$(n)} 项，${$(r)} 项没有处理`, { warning: !0 }) : t("已清理失效条目");
		}
	}), o = J({
		queryKey: O,
		queryFn: ({ signal: e }) => Ce(e),
		start: Ze,
		onStarted: () => r.dismiss()
	}), s = o.job, c = o.running || o.start.isPending, l = r.running || r.start.isPending, u = s?.status === "complete" || s?.status === "failed", d = c ? "扫描中" : u ? "重新扫描" : "检查文件", f = (e) => void H({
		title: zt,
		body: ae(e),
		confirmLabel: zt,
		danger: !0,
		onConfirm: () => r.start.mutateAsync(e.scan_id || "")
	}), p = r.outcome, m = (e) => {
		let t = L(e).left > 0;
		return /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: t ? "warning" : "success",
			title: n(t ? "部分完成" : "清理结果"),
			children: z(e, De)
		});
	}, h = null, g = null;
	if (p?.status === "failed") g = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("资源清理未完成"),
		children: p.error || n("请查看任务记录，核对已处理的文件。")
	});
	else if (p) g = m(p);
	else if (r.running) h = /* @__PURE__ */ (0, Q.jsx)(ne, {
		embedded: !0,
		label: r.job?.message || n("正在复核并清理失效条目")
	});
	else if (o.start.isError) g = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("扫描失败"),
		children: U(o.start.error)
	});
	else if (o.query.isError && s) g = /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: n("任务状态"),
		children: Rt
	});
	else if (s?.status === "running") {
		let e = Ge(s);
		h = /* @__PURE__ */ (0, Q.jsx)(ne, {
			embedded: !0,
			label: e,
			value: s.completed_sources,
			total: s.total_sources
		}), s.sources?.length && (g = /* @__PURE__ */ (0, Q.jsx)(Vt, {
			scan: s,
			partial: !0
		}));
	} else if (s?.status === "failed") g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [s.sources?.length ? /* @__PURE__ */ (0, Q.jsx)(Vt, {
		scan: s,
		partial: !0
	}) : null, /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("扫描失败"),
		children: s.error || n("后台扫描失败")
	})] });
	else if (s?.status === "complete" && s.applied) g = r.job?.status === "complete" ? m(r.job) : /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "neutral",
		title: n("清理结果"),
		children: n("这次检查的结果已经清理，重新扫描可再核对。")
	});
	else if (s?.status === "complete") {
		let t = ke(s);
		g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Vt, { scan: s }), t ? /* @__PURE__ */ (0, Q.jsx)(b, {
			tone: "neutral",
			title: n("清理内容"),
			action: /* @__PURE__ */ (0, Q.jsx)(e, {
				variant: "danger",
				...B(l),
				onClick: () => f(s),
				children: l ? n("正在复核并清理…") : zt
			}),
			children: R(s)
		}) : /* @__PURE__ */ (0, Q.jsx)("p", {
			className: "mr-auto text-body-regular text-notification-success-foreground",
			children: n("已检查可访问的来源，没有待清理的记录、空文件夹或缓存。")
		})] });
	}
	return r.start.isError && !p && (g = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [g, /* @__PURE__ */ (0, Q.jsx)(b, {
		tone: "error",
		title: n("清理失败"),
		children: U(r.start.error)
	})] })), /* @__PURE__ */ (0, Q.jsxs)("section", {
		id: "resource-sync",
		"aria-labelledby": "resource-sync-title",
		className: "flex scroll-mt-20 flex-col gap-4",
		children: [/* @__PURE__ */ (0, Q.jsxs)(i, {
			layout: "split",
			labelledBy: "resource-sync-title",
			footer: /* @__PURE__ */ (0, Q.jsx)(e, {
				"data-resource-scan": !0,
				leadingIcon: u && !c ? Lt : It,
				...B(c),
				onClick: () => {
					c || o.start.mutate();
				},
				children: n(d)
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsx)(a, {
					id: "resource-sync-title",
					gap: "small",
					children: n("资源同步")
				}),
				/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "max-w-190 text-body-2-regular leading-5 text-text-secondary",
					children: n("按馆藏记录逐条查找本地磁盘与网盘上的文件，列出文件已不存在的记录、空文件夹，以及不再被引用的缓存。")
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					"aria-live": "polite",
					className: "mt-4 empty:hidden",
					children: h
				})
			]
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			"aria-live": "polite",
			className: "flex flex-col gap-4 empty:hidden",
			children: g
		})]
	});
}
// src/react/data-cleanup/data-cleanup-page.tsx
function Ut(e, t) {
	return e.data === void 0 ? { figure: e.isError ? "读取失败" : "—" } : t(e.data);
}
function Wt({ section: e, label: t, icon: n, value: r, open: i }) {
	return /* @__PURE__ */ (0, Q.jsx)("button", {
		type: "button",
		className: st({ interactive: !0 }),
		"data-cleanup-go": e,
		onClick: () => i(e),
		children: /* @__PURE__ */ (0, Q.jsx)(ot, {
			label: t,
			icon: n,
			figure: r.figure,
			meta: r.meta
		})
	});
}
var Gt = q("square-check-big"), Kt = q("sparkles"), qt = q("file-stack"), Jt = q("file-archive"), Yt = q("trash"), Xt = [
	j,
	w,
	r
], Zt = () => {
	for (let e of Xt) K.invalidateQueries({
		queryKey: e,
		exact: !0
	});
};
function Qt({ toast: e, failure: t, open: n }) {
	let i = X(), a = Y({
		queryKey: j,
		queryFn: ({ signal: e }) => we(e)
	}), o = Y({
		queryKey: w,
		queryFn: ({ signal: e }) => be(e)
	}), s = Y({
		queryKey: r,
		queryFn: ({ signal: e }) => fe(e)
	}), c = Y({
		queryKey: l,
		queryFn: ({ signal: e }) => pe(e)
	}), u = Y({
		queryKey: F,
		queryFn: ({ signal: e }) => Te(e)
	}), d = Y({
		queryKey: v,
		queryFn: ({ signal: e }) => ge(e)
	}), f = (t) => e(t);
	return /* @__PURE__ */ (0, Q.jsxs)(rt, { children: [
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: at,
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					section: "review",
					label: i("人工复核"),
					icon: Gt,
					open: n,
					value: Ut(a, We)
				}),
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					section: "quality",
					label: i("高清版"),
					icon: Kt,
					open: n,
					value: Ut(o, (e) => ({ figure: `${Number(e.total || 0).toLocaleString()} 个待升级` }))
				}),
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					section: "duplicates",
					label: i("重复文件"),
					icon: qt,
					open: n,
					value: Ut(s, (e) => Number(e.total || 0) ? {
						figure: `${Number(e.total).toLocaleString()} 组 · ${Number(e.files || 0).toLocaleString()} 个文件`,
						meta: `可回收 ${De(e.reclaimable || 0)}`
					} : { figure: "没有重复内容" })
				}),
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					section: "ads",
					label: i("垃圾文件"),
					icon: Jt,
					open: n,
					value: Ut(c, (e) => ({
						figure: `${Number(e.pending_total || 0).toLocaleString()} 个待判断`,
						meta: je(e)
					}))
				}),
				/* @__PURE__ */ (0, Q.jsx)(Wt, {
					section: "trash",
					label: i("回收站"),
					icon: Yt,
					open: n,
					value: Ut(u, (e) => ({
						figure: `${Number(e.total || 0).toLocaleString()} 项在回收站`,
						meta: e.total ? `占用 ${De(e.bytes || 0)}` : ""
					}))
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-col gap-4 max-cleanup-tight:gap-3",
			children: [
				/* @__PURE__ */ (0, Q.jsx)("div", {
					id: "libraryProcessing",
					className: "scroll-mt-20",
					children: /* @__PURE__ */ (0, Q.jsx)(h, {
						toast: f,
						monitor: !0,
						onComplete: Zt
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)("div", {
					id: "mediaRepair",
					children: /* @__PURE__ */ (0, Q.jsx)(ht, { toast: f })
				}),
				/* @__PURE__ */ (0, Q.jsx)(At, {
					toast: f,
					failure: t
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)(Tt, {}),
		/* @__PURE__ */ (0, Q.jsx)(Ft, { toast: f }),
		Ae(d.data) ? /* @__PURE__ */ (0, Q.jsx)(Ht, { toast: e }) : null
	] });
}
export { Qt as DataCleanupPage };

//# debugId=5451632b-aea3-4844-a8eb-1969f429c7cf