(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "80b518a2-0380-4157-a90d-56a6eb547f0f", e._sentryDebugIdIdentifier = "sentry-dbid-80b518a2-0380-4157-a90d-56a6eb547f0f");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, LinkButton as a, LoadingDots as o, Note as s, Progress as c, TASKS_KEY as l, TRIGGER_LABELS as u, __toESM as d, apiGet as f, apiSend as p, busyProps as m, cardClass as h, elapsedText as g, errorMessage as _, f1 as v, fetchEarlier as ee, fetchTasks as te, foldByKind as ne, foldRoutine as re, followupDetail as y, followupTally as b, formatNumber as x, groupFollowups as ie, hasResultProblems as S, i2 as C, isActive as w, isRoutine as ae, latestOfKind as oe, mergeFinished as T, momentText as E, pollInterval as se, problemDestination as D, progressText as O, require_jsx_runtime as k, require_react as A, statusLabel as j, summaryItems as M, taskIssues as N, uo as ce, useMutation as P, useQuery as F, useQueryClient as I, useTranslation as L } from "./peach-app.js";
import { CodeBlock as R } from "./peach-app.code-block-BLPqm2xI.js";
import { Page as z } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as B, ErrorExcerpt as V } from "./peach-app.error-excerpt-B5Q9c4yt.js";
// src/react/activity/background-issues.tsx
var H = /* @__PURE__ */ d(A(), 1), U = k(), W = ["background-issues"];
function le() {
	let e = L(), t = (0, H.useId)(), n = F({
		queryKey: W,
		queryFn: ({ signal: e }) => f("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return n.length ? /* @__PURE__ */ (0, U.jsxs)("section", {
		"aria-labelledby": t,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, U.jsx)("h3", {
			id: t,
			className: "text-title-2-medium text-text-primary",
			children: e("需要处理")
		}), /* @__PURE__ */ (0, U.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: n.map((e) => /* @__PURE__ */ (0, U.jsx)("li", { children: /* @__PURE__ */ (0, U.jsx)(G, { issue: e }) }, e.key))
		})]
	}) : null;
}
function G({ issue: t }) {
	let n = L(), r = I(), i = P({
		mutationFn: () => p(t.retry, {}),
		onSuccess: () => {
			r.invalidateQueries({ queryKey: W });
		}
	}), o = t.since ? n("自 {time} 起", { time: E(t.since) }) : n("发现于 {time}", { time: E(t.noticed_at) });
	return /* @__PURE__ */ (0, U.jsx)(s, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, U.jsx)(a, {
				href: t.href,
				size: "small",
				trailingIcon: C,
				children: n(t.link_label)
			}), t.retry ? /* @__PURE__ */ (0, U.jsx)(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...m(i.isPending),
				onClick: () => i.mutate(),
				children: n("立即重试")
			}) : null]
		}),
		children: i.error ? n("{value0}\n没有重试：{value1}", {
			value0: String(o),
			value1: n(_(i.error))
		}) : o
	});
}
// src/react/activity/activity-page.tsx
var K = 50, ue = /* @__PURE__ */ new Set(["upgrade-repairs"]), q = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "neutral",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
};
function J({ run: e }) {
	let n = L(), r = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", i = r || e.status === "succeeded" && S(e);
	return /* @__PURE__ */ (0, U.jsx)(t, {
		color: i ? "yellow" : q[e.status] ?? "neutral",
		children: n(r ? "部分项目需处理" : i ? "发现问题" : j(e.status))
	});
}
function Y({ rows: e }) {
	let t = L();
	return /* @__PURE__ */ (0, U.jsx)("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let r = y(e);
			return /* @__PURE__ */ (0, U.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ (0, U.jsx)("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-primary",
						children: t(e.task_label)
					}),
					/* @__PURE__ */ (0, U.jsx)(J, { run: e }),
					r ? /* @__PURE__ */ (0, U.jsx)("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
						children: r
					}) : null,
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, U.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, U.jsx)(n, {
							summary: t("技术详情"),
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, U.jsx)(R, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: t("{name}技术详情", { name: t(e.task_label) })
							})
						})
					}) : null
				]
			}, e.id);
		})
	});
}
function X({ run: e, meta: t, children: r, footer: i, followups: a, followupTotal: o = 0, badge: s }) {
	let c = L(), l = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), u = a ? [...a].sort((e, t) => l(t) - l(e) || t.id - e.id).slice(0, K) : [], d = u.length, f = Math.max(a?.length || 0, o);
	return /* @__PURE__ */ (0, U.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: h({
			padding: "none",
			bordered: "line",
			className: e.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, U.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, U.jsx)("strong", {
							className: "min-w-0 break-words text-title-3-medium text-text-primary",
							children: c(e.task_label)
						}), s ?? /* @__PURE__ */ (0, U.jsx)(J, { run: e })]
					}),
					/* @__PURE__ */ (0, U.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					r
				]
			}),
			d ? /* @__PURE__ */ (0, U.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, U.jsxs)(n, {
					summary: c("任务明细 · {count} 项", { count: x(f) }),
					contentClassName: "pb-2.5",
					defaultOpen: u.some((e) => w(e)),
					children: [d < f ? /* @__PURE__ */ (0, U.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: c("列出其中 {count} 项，正在处理的排在前面", { count: x(d) })
					}) : null, /* @__PURE__ */ (0, U.jsx)(Y, { rows: u })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, U.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, U.jsx)(n, {
					summary: c("技术详情"),
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ (0, U.jsx)(R, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: c("{value0}技术详情", { value0: c(e.task_label) })
					})
				})
			}) : null,
			i ? /* @__PURE__ */ (0, U.jsx)("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ (0, U.jsx)(V, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function de({ run: e, followups: t }) {
	let n = L(), r = e.progress_total || 0, i = e.progress_current || 0, a = n(e.progress_label || "正在进行"), s = g(e.elapsed_seconds), l = [n(u[e.trigger] || e.trigger), s && n("已跑 {elapsed}", { elapsed: s })].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, U.jsx)(X, {
		run: e,
		meta: l,
		followups: t,
		children: r > 0 ? /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, U.jsx)(c, {
				label: a,
				value: Math.min(i, r),
				max: r
			}), /* @__PURE__ */ (0, U.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					a,
					" · ",
					O(i, r),
					n(" 项")
				]
			})]
		}) : /* @__PURE__ */ (0, U.jsx)(o, { label: a })
	});
}
function Z({ run: e, followups: r, runs: i, latest: o, followupTotal: s, followupFailed: c = 0 }) {
	let l = L(), d = !!(i && i.length > 1 && s), f = d ? [l("共处理 {count} 项", { count: x(s) }), c ? l("其中 {count} 项失败", { count: x(c) }) : ""].filter(Boolean) : M(e.result_summary).filter((t) => t !== e.error), p = N(e), m = D(e, o), h = g(e.elapsed_seconds), _ = i && i.length > 1 ? i[i.length - 1] : void 0, v = (_ ? [
		l(u[e.trigger] || e.trigger),
		l("近 {count} 轮", { count: x(i.length) }),
		`${E(_.finished_at)} – ${E(e.finished_at)}`
	] : [
		l(u[e.trigger] || e.trigger),
		E(e.finished_at),
		h && l("用时 {elapsed}", { elapsed: h })
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, U.jsxs)(X, {
		run: e,
		meta: v,
		footer: e.error,
		followups: r,
		followupTotal: s,
		badge: d && c ? /* @__PURE__ */ (0, U.jsx)(t, {
			color: "yellow",
			children: l("发现问题")
		}) : void 0,
		children: [
			f.length === 1 ? /* @__PURE__ */ (0, U.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f[0]
			}) : f.length ? /* @__PURE__ */ (0, U.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: f.map((e, t) => /* @__PURE__ */ (0, U.jsx)("li", { children: e }, t))
			}) : null,
			p.length ? /* @__PURE__ */ (0, U.jsx)(n, {
				summary: l("问题详情 · {count} 项", { count: x(p.length) }),
				contentClassName: "pt-2",
				children: /* @__PURE__ */ (0, U.jsx)(B, {
					label: l("任务问题详情"),
					children: /* @__PURE__ */ (0, U.jsx)("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: p.map((e, t) => /* @__PURE__ */ (0, U.jsxs)("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ (0, U.jsx)("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ (0, U.jsx)(V, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : S(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, U.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: l("未取得本轮逐项详情，可到来源列表查看检查结果。")
			}) : null,
			m ? /* @__PURE__ */ (0, U.jsx)(a, {
				href: m.href,
				size: "small",
				trailingIcon: C,
				className: "self-start",
				children: m.label
			}) : null
		]
	});
}
function fe({ runs: e, followups: n, counts: r }) {
	let i = L(), a = e[0], o = e[e.length - 1], s = b(r, e), l = Math.max(s.total, n.length), d = s.total ? s.settled : n.filter((e) => !w(e)).length, f = s.total ? s.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, p = [
		i(u[a.trigger] || a.trigger),
		e.length > 1 ? i("{count} 批", { count: x(e.length) }) : "",
		i("{time} 开始", { time: E(o.started_at || o.finished_at) })
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, U.jsx)(X, {
		run: a,
		meta: p,
		followups: n,
		followupTotal: l,
		badge: /* @__PURE__ */ (0, U.jsx)(t, {
			color: "blue",
			children: i("进行中")
		}),
		children: /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, U.jsx)(c, {
				label: i("{name}进度", { name: i(a.task_label) }),
				value: d,
				max: l
			}), /* @__PURE__ */ (0, U.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [i("已处理 {count} 项", { count: O(d, l) }), f ? ` · ${i("其中 {count} 项失败", { count: x(f) })}` : ""]
			})]
		})
	});
}
function Q({ title: e, children: t }) {
	let n = (0, H.useId)();
	return /* @__PURE__ */ (0, U.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, U.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function $({ live: e = !1, children: t }) {
	return /* @__PURE__ */ (0, U.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function pe() {
	let t = L(), n = F({
		queryKey: l,
		queryFn: ({ signal: e }) => te(e),
		refetchInterval: (e) => se(e.state.data)
	}), a = n.data, o = a?.finished, [c, u] = (0, H.useState)([]), [d, f] = (0, H.useState)(!1), [p, h] = (0, H.useState)({}), [g, y] = (0, H.useState)(o);
	o !== g && (y(o), c.length && g && u(T(c, g)));
	let x = P({
		mutationFn: ({ oldest: e }) => ee(e),
		onSuccess: (e, { shown: t }) => {
			u((n) => T(n, t, e.finished || [])), f(!!e.finished_has_more), h((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), C = n.error ? _(n.error) : "";
	if (!a) return /* @__PURE__ */ (0, U.jsx)(z, { children: /* @__PURE__ */ (0, U.jsx)(s, {
		tone: "error",
		children: C || t("读取任务中心失败")
	}) });
	let E = T(a.finished || [], c), D = a.working_parents || [], O = [
		...a.running || [],
		...a.skipped || [],
		...E,
		...D
	], k = ie(O), A = new Set(O.map((e) => e.id)), j = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && A.has(e.parent_run_id))), M = j(E), N = M[M.length - 1], I = !!N && (c.length ? d : !!a.finished_has_more), R = () => {
		!x.isPending && N && x.mutate({
			oldest: N,
			shown: E
		});
	}, B = {
		...p,
		...a.followup_counts
	}, V = (e) => e.flatMap((e) => k.get(e.id) || []), W = [...M, ...j(D)].filter((e) => b(B, [e]).active > 0 || k.get(e.id)?.some(w)).sort((e, t) => t.id - e.id), G = j(a.running || []), K = j(a.skipped || []), q = M.filter((e) => !W.includes(e) && !K.some((t) => t.id === e.id)), J = (e) => (k.get(e.id) || []).every((e) => e.status === "succeeded" && !S(e)) && b(B, [e]).failed === 0, Y = re(q, (e) => ae(e) && (J(e) || ue.has(e.task_key))), X = oe(O), pe = !G.length && !W.length && !K.length && !q.length;
	return /* @__PURE__ */ (0, U.jsxs)(z, { children: [
		C ? /* @__PURE__ */ (0, U.jsx)(s, {
			tone: "error",
			children: C
		}) : null,
		a.available === !1 ? /* @__PURE__ */ (0, U.jsx)(s, {
			tone: "warning",
			children: t(a.message || "数据库尚未准备好任务记录表")
		}) : null,
		/* @__PURE__ */ (0, U.jsx)(le, {}),
		pe ? /* @__PURE__ */ (0, U.jsx)(i, {
			icon: ce,
			title: t("还没有任务记录"),
			children: t("扫描、追更检查、批量操作和命令行批处理跑起来之后，这里会显示它们的进度与结果。")
		}) : /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
			/* @__PURE__ */ (0, U.jsx)(Q, {
				title: t("正在进行"),
				children: G.length || W.length ? /* @__PURE__ */ (0, U.jsxs)($, {
					live: !0,
					children: [G.map((e) => /* @__PURE__ */ (0, U.jsx)(de, {
						run: e,
						followups: k.get(e.id)
					}, e.id)), ne(W).map(({ run: e, runs: t }) => /* @__PURE__ */ (0, U.jsx)(fe, {
						runs: t,
						followups: V(t),
						counts: B
					}, e.id))]
				}) : /* @__PURE__ */ (0, U.jsx)(s, {
					tone: "neutral",
					children: t("没有任务在跑。")
				})
			}),
			K.length ? /* @__PURE__ */ (0, U.jsx)(Q, {
				title: t("本次未执行"),
				children: /* @__PURE__ */ (0, U.jsx)($, { children: K.map((e) => /* @__PURE__ */ (0, U.jsx)(Z, {
					run: e,
					latest: X.has(e.id),
					followups: k.get(e.id)
				}, e.id)) })
			}) : null,
			q.length || I ? /* @__PURE__ */ (0, U.jsxs)(Q, {
				title: t("最近完成"),
				children: [
					q.length ? /* @__PURE__ */ (0, U.jsx)($, { children: Y.map(({ run: e, runs: t }) => {
						let n = b(B, t);
						return /* @__PURE__ */ (0, U.jsx)(Z, {
							run: e,
							runs: t,
							latest: X.has(e.id),
							followups: V(t),
							followupTotal: n.total,
							followupFailed: n.failed
						}, e.id);
					}) }) : null,
					x.error ? /* @__PURE__ */ (0, U.jsx)(s, {
						tone: "error",
						children: _(x.error)
					}) : null,
					I ? /* @__PURE__ */ (0, U.jsx)(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: v,
						className: "self-start",
						...m(x.isPending),
						onClick: R,
						children: t("加载更早")
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ (0, U.jsx)(r, {})
	] });
}
export { pe as ActivityPage };

//# debugId=80b518a2-0380-4157-a90d-56a6eb547f0f