(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2baeadeb-0bec-43ea-adf8-fce4ac9f015b", e._sentryDebugIdIdentifier = "sentry-dbid-2baeadeb-0bec-43ea-adf8-fce4ac9f015b");
	} catch {}
})();
import { ApiError as e, Button as t, ButtonLink as n, Chip as r, DIAGNOSTICS_KEY as i, Disclosure as a, EmptyState as o, Fact as s, FactList as c, Fieldset as l, FieldsetTitle as u, Input as d, LOC as f, LinkButton as p, LoadingDots as m, Note as h, Progress as g, Section as _, SettingsCard as v, SettingsSectionLabel as y, Stack as b, __toESM as x, apiGet as S, apiSend as C, busyProps as w, configurationSection as T, cx as E, diagnosticHeaders as D, diagnosticsSkeleton as O, errorMessage as k, fetchDiagnostics as A, fmtDur as j, fmtSize as M, queryClient as N, require_jsx_runtime as ee, require_react as te, settingsPath as ne, tl as re, useAction as P, useQuery as F, useSystemTranslation as I, useTranslation as L } from "./peach-app.js";
import { ErrorExcerpt as R } from "./peach-app.error-excerpt-B5Q9c4yt.js";
import { DataTable as z } from "./peach-app.data-table-BdaEqtk7.js";
import { SiteMark as B } from "./peach-app.site-mark-D_VlIyJz.js";
// src/react/diagnostics/health-list.tsx
var V = /* @__PURE__ */ x(te(), 1), H = ee(), U = (e) => e.title || e.name || e.code || `作品 #${e.id}`, W = (e) => [[
	"作品",
	"番号",
	"文件名",
	"媒体库",
	"路径",
	"时长（秒）",
	"大小（字节）"
], ...e.map((e) => [
	U(e),
	e.code ?? "",
	e.name,
	f[e.location] || e.location,
	e.path,
	e.duration ?? "",
	e.size ?? ""
])].map((e) => e.map((e) => String(e ?? "").replace(/[\t\r\n]+/g, " ")).join("	")).join("\n");
function G({ group: e, openItem: n, receipt: r }) {
	let i = L(), s = P(), [c, l] = (0, V.useState)([]), u = (e) => void s.run("copy", () => navigator.clipboard.writeText(W(e)), () => r("已复制清单")), d = [
		{
			id: "title",
			label: "作品",
			value: U,
			render: (e) => /* @__PURE__ */ (0, H.jsxs)("span", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, H.jsx)(p, {
					variant: "primary",
					className: "justify-start whitespace-normal text-left",
					onClick: () => n(e.id),
					children: U(e)
				}), e.name && e.name !== U(e) ? /* @__PURE__ */ (0, H.jsx)("span", {
					"data-middle-truncate": !0,
					title: e.name,
					className: "block min-w-0 text-caption-1-regular text-text-secondary",
					children: e.name
				}) : null]
			})
		},
		{
			id: "code",
			label: "番号",
			width: 144,
			value: (e) => e.code || "",
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				className: "whitespace-nowrap",
				children: e.code || i("未识别")
			})
		},
		{
			id: "location",
			label: "媒体库",
			width: 128,
			value: (e) => f[e.location] || e.location,
			render: (e) => i(f[e.location] || e.location || "未取得")
		},
		{
			id: "path",
			label: "文件路径",
			width: 320,
			min: 180,
			value: (e) => e.path,
			render: (e) => /* @__PURE__ */ (0, H.jsx)("span", {
				"data-middle-truncate": !0,
				title: e.path,
				className: "block min-w-0 w-full text-body-2-regular text-text-secondary",
				children: e.path || i("未取得")
			})
		},
		{
			id: "duration",
			label: "时长",
			width: 112,
			value: (e) => e.duration ?? 0,
			render: (e) => e.duration && e.duration > 0 ? j(e.duration) : i("未取得")
		},
		{
			id: "size",
			label: "大小",
			width: 112,
			value: (e) => e.size ?? 0,
			render: (e) => e.size === null ? i("未取得") : M(e.size)
		}
	];
	return /* @__PURE__ */ (0, H.jsx)(a, {
		summary: `${i(e.label)} · ${e.count === null ? i("未取得") : i("{count} 项", { count: e.count.toLocaleString() })}`,
		children: e.count === null ? /* @__PURE__ */ (0, H.jsx)(h, {
			tone: "neutral",
			children: i("清单未取得，请重新检查。")
		}) : e.items.length ? /* @__PURE__ */ (0, H.jsxs)(b, { children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [e.truncated ? /* @__PURE__ */ (0, H.jsxs)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: [
						i("已载入 "),
						e.items.length.toLocaleString(),
						" / ",
						e.count.toLocaleString(),
						i(" 项")
					]
				}) : null, /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...w(s.busy === "copy"),
					onClick: () => u(e.items),
					children: i("复制当前清单")
				})]
			}),
			s.error ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				children: s.error
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(z, {
				label: e.label,
				title: i("作品清单"),
				unit: "部作品",
				panel: !1,
				items: e.items,
				columns: d,
				rowId: (e) => String(e.id),
				rowLabel: U,
				selected: c,
				onSelected: l,
				actions: (e) => /* @__PURE__ */ (0, H.jsx)(t, {
					size: "small",
					variant: "secondary",
					...w(s.busy === "copy"),
					onClick: () => u(e),
					children: i("复制所选")
				})
			})
		] }) : /* @__PURE__ */ (0, H.jsx)(o, {
			icon: re,
			title: i("清单为空"),
			size: "compact",
			children: i("没有需要处理的作品。")
		})
	});
}
// src/react/diagnostics/scraping-export.tsx
var K = "/api/diagnostics/exports", q = ["diagnostic-export"];
function J({ kind: r, codes: i = "" }) {
	let a = L(), o = P(), s = F({
		queryKey: q,
		queryFn: ({ signal: e }) => S(K, e),
		refetchInterval: (e) => ["running", "cancelling"].includes(e.state.data?.status || "") ? 1e3 : !1
	}), c = s.data, l = c?.kind === r, u = c?.status === "running" || c?.status === "cancelling", d = r === "support" ? "下载诊断报告" : "导出刮削记录", f = (e) => {
		N.setQueryData(q, e);
	}, p = () => void o.run("start", async (t) => {
		let n = await fetch(K, {
			method: "POST",
			signal: t,
			credentials: "same-origin",
			headers: {
				...await D(),
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				kind: r,
				codes: i
			})
		}), a = await n.json().catch(() => null);
		if (!n.ok) throw new e(a?.detail || a?.error || "诊断导出未启动", n.status, a);
		if (!a || !a.job_id) throw Error("导出任务状态未取得");
		return a;
	}, f), _ = () => void o.run("cancel", (e) => C(`${K}/${c.job_id}/cancel`, {}, "POST", e), f);
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, H.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: u,
						...w(o.busy === "start"),
						onClick: p,
						children: a(d)
					}),
					l && u ? /* @__PURE__ */ (0, H.jsx)(t, {
						type: "button",
						variant: "secondary",
						disabled: c.status === "cancelling",
						...w(o.busy === "cancel"),
						onClick: _,
						children: a("取消导出")
					}) : null,
					l && c.status === "complete" && c.download_url ? /* @__PURE__ */ (0, H.jsx)(n, {
						variant: "secondary",
						href: c.download_url,
						children: a("下载已生成的文件")
					}) : null
				]
			}),
			l && u ? c.total && c.total > 0 ? /* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-col gap-2",
				role: "status",
				children: [/* @__PURE__ */ (0, H.jsxs)("span", {
					className: "text-body-2-regular",
					children: [
						a(c.stage || ""),
						" · ",
						c.done || 0,
						" / ",
						c.total,
						a(" 项")
					]
				}), /* @__PURE__ */ (0, H.jsx)(g, {
					label: a("导出进度"),
					value: c.done || 0,
					max: c.total
				})]
			}) : /* @__PURE__ */ (0, H.jsx)(m, { label: `${a(c.stage || "准备导出")}${c.rows ? a(" · {count} 条候选", { count: c.rows }) : ""}${c.files ? a(" · {count} 个文件", { count: c.files }) : ""}` }) : null,
			l && c.status === "complete" ? /* @__PURE__ */ (0, H.jsxs)("p", {
				role: "status",
				className: "text-body-2-regular text-text-secondary",
				children: [
					a("导出已完成 · "),
					((c.bytes || 0) / 1024 / 1024).toFixed(2),
					" MiB"
				]
			}) : null,
			l && c.status === "cancelled" ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "neutral",
				children: a("导出已取消")
			}) : null,
			s.isError ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					type: "button",
					variant: "secondary",
					...w(s.isFetching),
					onClick: () => {
						s.refetch();
					},
					children: a("重新读取")
				}),
				children: a("导出进度未取得")
			}) : null,
			o.error || l && c.status === "failed" ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				children: o.error || c?.error
			}) : null
		]
	});
}
function Y() {
	let e = L(), [t, n] = (0, V.useState)("");
	return /* @__PURE__ */ (0, H.jsx)(l, {
		layout: "stack",
		labelledBy: "scraping-export-title",
		footer: /* @__PURE__ */ (0, H.jsx)(J, {
			kind: "scraping",
			codes: t
		}),
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			"aria-label": e("导出刮削记录"),
			children: [
				/* @__PURE__ */ (0, H.jsx)(u, {
					id: "scraping-export-title",
					children: e("刮削记录")
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: e("导出作品资料、来源取值及演员、厂牌和系列归属，供排查刮削错误。")
				}),
				/* @__PURE__ */ (0, H.jsx)(d, {
					label: e("问题番号（可选）"),
					name: "scraping-codes",
					value: t,
					onChange: n,
					autoComplete: "off",
					spellCheck: "false",
					maxLength: 1300,
					placeholder: e("例如 ABF-087、SYKH-145…"),
					hint: e("多个番号用逗号分隔，最多 20 个；留空导出近期作品。")
				})
			]
		})
	});
}
// src/react/diagnostics/diagnostics-page.tsx
var ie = {
	ok: "正常",
	warning: "需检查",
	failed: "需处理",
	unknown: "未取得",
	disabled: "未配置",
	stale: "待复查",
	unchecked: "尚无记录"
}, ae = { "/tasks": "查看任务" }, oe = [
	["媒体库与挂载", ["media_mounts", "data_root"]],
	["数据库与迁移", ["database", "schema"]],
	["工具", ["ffmpeg"]],
	["配置与访问", [
		"configured",
		"security",
		"port",
		"version"
	]],
	["后台任务", ["tasks"]]
], X = (e) => new Date(e).toLocaleString();
function Z({ status: e }) {
	let t = L();
	return /* @__PURE__ */ (0, H.jsx)(r, {
		variant: "caption",
		"data-diagnostic-status": e,
		color: e === "failed" ? "rose" : e === "ok" ? "lime" : e === "warning" || e === "stale" ? "yellow" : "neutral",
		children: t(ie[e] ?? "未取得")
	});
}
function Q() {
	return /* @__PURE__ */ (0, H.jsx)(J, { kind: "support" });
}
function $({ name: e, check: t, compact: r = !1 }) {
	let i = L(), a = I(), o = t.target === "/settings/library" && (e === "security" || e === "port") ? ne("网络与访问") : t.target, s = r ? "h4" : "h3";
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		"data-diagnostic-check": e,
		className: E("flex flex-col gap-4 border-b border-separator-border pr-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between", r ? "py-3" : "py-5"),
		children: [/* @__PURE__ */ (0, H.jsxs)("div", {
			className: E("flex min-w-0 flex-1 flex-col", r ? "gap-1" : "gap-2"),
			children: [
				/* @__PURE__ */ (0, H.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, H.jsx)(s, {
						className: E("text-text-primary", r ? "text-body-2-medium" : "text-body-medium"),
						children: i(t.label)
					}), /* @__PURE__ */ (0, H.jsx)(Z, { status: t.status })]
				}),
				/* @__PURE__ */ (0, H.jsx)("p", {
					"data-check-reason": !0,
					className: E("text-body-2-regular break-words", r ? "text-text-secondary" : "text-text-primary"),
					children: a(t.reason)
				}),
				t.action ? /* @__PURE__ */ (0, H.jsxs)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: [i("处理建议："), a(t.action)]
				}) : null
			]
		}), o ? /* @__PURE__ */ (0, H.jsx)("div", {
			className: "shrink-0 self-end sm:self-auto",
			children: /* @__PURE__ */ (0, H.jsx)(n, {
				size: "small",
				variant: "secondary",
				href: o,
				children: o.startsWith("/settings/") ? i("打开{value0}", { value0: i(T(o)) }) : ae[o] ?? i("打开相关页面")
			})
		}) : null]
	});
}
function se(e) {
	let r = L(), o = F({
		queryKey: i,
		queryFn: ({ signal: e }) => A(e),
		staleTime: 1e4
	}), l = P(), [u, d] = (0, V.useState)(""), f = () => void l.run("refresh", async () => {
		let e = await o.refetch();
		if (e.error) throw e.error;
		return e.data;
	}, () => d(""), (e) => d(k(e))), p = o.data;
	if (!p && o.isPending) return /* @__PURE__ */ (0, H.jsx)("div", {
		role: "status",
		"aria-label": r("正在读取系统诊断"),
		dangerouslySetInnerHTML: { __html: O() }
	});
	if (!p) return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "ui-configpage",
		children: [
			/* @__PURE__ */ (0, H.jsx)(Q, {}),
			/* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				title: r("诊断读取失败"),
				action: /* @__PURE__ */ (0, H.jsx)(t, {
					variant: "secondary",
					onClick: f,
					...w(l.busy === "refresh"),
					children: r("重新检查")
				}),
				children: o.error ? k(o.error) : r("诊断报告未取得。")
			}),
			/* @__PURE__ */ (0, H.jsx)(Y, {})
		]
	});
	let m = Object.entries(p.checks).filter(([, e]) => [
		"warning",
		"failed",
		"unknown"
	].includes(e.status)), g = Object.entries(p.checks).filter(([, e]) => ![
		"warning",
		"failed",
		"unknown"
	].includes(e.status));
	return /* @__PURE__ */ (0, H.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, H.jsx)(Q, {}), /* @__PURE__ */ (0, H.jsx)(t, {
					variant: "secondary",
					onClick: f,
					...w(l.busy === "refresh"),
					children: r("重新检查")
				})]
			}),
			u ? /* @__PURE__ */ (0, H.jsx)(h, {
				tone: "error",
				children: u
			}) : null,
			m.length ? /* @__PURE__ */ (0, H.jsx)(_, {
				title: r("需要关注 · {value0} 项", { value0: String(m.length) }),
				children: m.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
					name: e,
					check: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(_, {
				title: r("库健康"),
				children: /* @__PURE__ */ (0, H.jsxs)(b, { children: [p.library.issue_at ? /* @__PURE__ */ (0, H.jsxs)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: [r("处理记录 · "), X(p.library.issue_at)]
				}) : null, Object.entries(p.library.groups).map(([t, n]) => /* @__PURE__ */ (0, H.jsx)(G, {
					group: n,
					...e
				}, t))] })
			}),
			g.length ? /* @__PURE__ */ (0, H.jsx)("section", {
				"aria-label": r("系统检查"),
				children: /* @__PURE__ */ (0, H.jsx)(a, {
					summary: r("其他检查 · {value0} 项", { value0: String(g.length) }),
					contentClassName: "gap-5",
					children: oe.map(([e, t]) => {
						let n = g.filter(([e]) => t.some((t) => t === e));
						return n.length ? /* @__PURE__ */ (0, H.jsxs)("section", {
							"aria-label": r(e),
							"data-diagnostic-group": "",
							className: "flex min-w-0 flex-col gap-2",
							children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
								className: "flex items-center gap-2 px-3 text-body-medium text-text-primary",
								children: [r(e), /* @__PURE__ */ (0, H.jsxs)("span", {
									className: "text-caption-1-regular text-text-secondary",
									children: [n.length, r(" 项")]
								})]
							}), /* @__PURE__ */ (0, H.jsx)(v, { children: n.map(([e, t]) => /* @__PURE__ */ (0, H.jsx)($, {
								name: e,
								check: t,
								compact: !0
							}, e)) })]
						}, e) : null;
					})
				})
			}) : null,
			/* @__PURE__ */ (0, H.jsx)(Y, {}),
			/* @__PURE__ */ (0, H.jsxs)("section", {
				"aria-label": r("来源会话"),
				className: "flex min-w-0 flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, H.jsx)(y, { children: r("来源会话") }),
					p.sources.map((e) => /* @__PURE__ */ (0, H.jsx)("article", {
						"data-diagnostic-source": e.source,
						children: /* @__PURE__ */ (0, H.jsx)(v, { children: /* @__PURE__ */ (0, H.jsxs)(b, { children: [
							/* @__PURE__ */ (0, H.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, H.jsxs)("h3", {
									className: "flex min-w-0 items-center gap-2 text-body-medium text-text-primary",
									children: [/* @__PURE__ */ (0, H.jsx)(B, { source: e.source }), e.label]
								}), /* @__PURE__ */ (0, H.jsx)(Z, { status: e.status })]
							}),
							/* @__PURE__ */ (0, H.jsx)(R, {
								text: e.reason,
								className: "text-body-regular text-text-primary"
							}),
							/* @__PURE__ */ (0, H.jsxs)(c, { children: [
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: r("上次解析成功"),
									children: e.last_success_at ? X(e.last_success_at) : r("尚无成功记录")
								}),
								e.last_check_at ? /* @__PURE__ */ (0, H.jsxs)(s, {
									term: r("上次检查"),
									children: [X(e.last_check_at), e.elapsed_s !== void 0 && e.elapsed_s !== null ? r(" · {value0} 秒", { value0: String(e.elapsed_s.toFixed(2)) }) : ""]
								}) : null,
								/* @__PURE__ */ (0, H.jsx)(s, {
									term: r("暂停访问至"),
									children: e.cooldown_until ? X(e.cooldown_until) : r("未暂停")
								})
							] })
						] }) })
					}, e.source)),
					/* @__PURE__ */ (0, H.jsx)("div", { children: /* @__PURE__ */ (0, H.jsx)(n, {
						size: "small",
						variant: "secondary",
						href: "/sources",
						children: r("打开来源和凭证")
					}) })
				]
			})
		]
	});
}
export { se as DiagnosticsPage };

//# debugId=2baeadeb-0bec-43ea-adf8-fce4ac9f015b