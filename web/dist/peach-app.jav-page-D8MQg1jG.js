(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a50f869-7098-4e1f-a7f3-8b5d86690708", e._sentryDebugIdIdentifier = "sentry-dbid-8a50f869-7098-4e1f-a7f3-8b5d86690708");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, ArtSlot as t, Button as n, ButtonLink as r, Chip as i, CloudDownloadDialog as a, DISCOVERY_SORTS as o, DOWNLOADS_KEY as s, DOWNLOADS_URL as c, E3 as l, EmptyFocusButton as u, EmptyState as d, FilterGlassRows as f, FilterIconButton as p, FilterPill as m, GlassPill as h, Help as g, Input as _, JAV_LAYOUTS as v, JAV_RECOMMENDATION_GRID as y, JavHeader as b, LibraryShortcuts as ee, M6 as x, Note as S, PHASES as te, Pagination as C, SEGMENT as w, SEGMENTED_TRACK as T, SegmentedRadioGroup as E, Segments as D, SortKeys as O, SourceAvatar as k, TaskProgress as ne, WANTS_KEY as re, WantMagnets as ie, Wt as ae, __toESM as A, addWant as oe, apiGet as se, appSettingsStore as ce, avatarInner as le, busyProps as j, cachedMagnetStates as ue, cardClass as M, cardRatio as de, coverUrl as fe, discoveryArtwork as pe, discoveryKey as me, discoveryScore as he, entityPath as ge, errorMessage as N, fetchDiscoveries as _e, fetchWants as P, gridLayout as ve, invalidateWants as F, javContentSkeleton as ye, javLayout as be, javTagSkeleton as xe, pageWindow as Se, peachHistory$1 as I, qE as L, recommendationScore as Ce, relayoutCovers as we, removeWants as R, require_jsx_runtime as z, require_react as B, resetWants as V, searchNote as H, shellNavigate as U, spriteGlyph as W, storeJavLayout as Te, textLang as Ee, useAction as G, useQuery as K, useTranslation as q, wantName as J, wireHorizontalScroller as De } from "./peach-app.js";
import { ErrorLine as Oe } from "./peach-app.source-view-BXb_-4C5.js";
import "./peach-app.source-list-DQPuk_Wi.js";
// src/react/jav/discovery-faces.tsx
var Y = /* @__PURE__ */ A(B(), 1), X = z();
function ke({ item: e }) {
	let t = q(), n = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), r = n.slice(0, 5).map((n, r) => {
		let i = { "--media-avatar-index": r }, a = n.source_avatar && n.source_actor_id && !n.has_image ? { children: /* @__PURE__ */ (0, X.jsx)(k, {
			code: e.code,
			person: n
		}) } : { dangerouslySetInnerHTML: { __html: le(n.name, n, null) } };
		return n.id ? /* @__PURE__ */ (0, X.jsx)("a", {
			"data-media-avatar": "",
			style: i,
			href: ge("performer", n.name, n.id),
			"aria-label": t("打开女优页：{value0}", { value0: String(n.name) }),
			...a
		}, n.name) : /* @__PURE__ */ (0, X.jsx)("span", {
			"data-media-avatar": "",
			style: i,
			title: n.name,
			...a
		}, n.name);
	});
	return n.length > 1 ? /* @__PURE__ */ (0, X.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, n.length) },
		children: r
	}) : r[0] || null;
}
// src/react/wants/want-list.tsx
var Z = {
	code: "手动添加",
	feed: "订阅新作",
	follow: "关注"
}, Q = [
	["all", "全部"],
	["available", "有磁链"],
	["missing", "没磁链"]
], Ae = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	Z[e.origin]
].filter(Boolean).join(" · ");
function je({ want: e }) {
	let t = q();
	return /* @__PURE__ */ (0, X.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, X.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: t("无封面")
		}), e.cover ? /* @__PURE__ */ (0, X.jsx)("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function Me({ want: e, readOnly: t, busy: i, onReset: a, onRemove: o, onCloudDownload: s, downloads: c, provider: l, toast: u }) {
	let d = q(), [f, p] = (0, Y.useState)(""), m = e.link || f || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, X.jsxs)("li", {
		"data-want-id": e.id,
		className: M({
			bordered: "soft",
			className: "flex flex-col gap-4 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, X.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, X.jsx)(je, { want: e }), /* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, X.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, X.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: J(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					Ae(e) ? /* @__PURE__ */ (0, X.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: Ae(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, X.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: H(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, X.jsx)(Oe, {
						text: e.scrape_error,
						prefix: d("资料未取得："),
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							m ? /* @__PURE__ */ (0, X.jsx)(r, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: ae,
								href: m,
								target: "_blank",
								rel: "noopener noreferrer",
								children: d("来源页")
							}) : null,
							/* @__PURE__ */ (0, X.jsx)(n, {
								variant: "secondary",
								size: "small",
								leadingIcon: x,
								disabled: t,
								...j(i === `remove:${e.id}`),
								onClick: o,
								children: d("移除")
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, X.jsx)(n, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...j(i === `reset:${e.id}`),
								onClick: a,
								children: d("重新查找")
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, X.jsx)(n, {
								variant: "secondary",
								size: "small",
								onClick: s,
								children: d("查找资源")
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, X.jsx)(ie, {
			want: e,
			readOnly: t,
			downloads: c,
			provider: l,
			toast: u,
			onSource: p
		}) : null]
	});
}
function Ne({ phase: t, label: r, rows: i, row: a }) {
	let o = q(), [s, c] = (0, Y.useState)(1), [l, u] = (0, Y.useState)("all"), f = ue(i), p = (e) => e.has_magnets ?? f.get(e.code || "") ?? !1, m = i.filter(p), h = t !== "searching" || l === "all" ? i : i.filter((e) => p(e) === (l === "available")), g = Se(h.length, 20, s);
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		"aria-label": o(r),
		"data-want-phase": t,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, X.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [o(r), /* @__PURE__ */ (0, X.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: i.length.toLocaleString()
					})]
				}), t === "searching" ? /* @__PURE__ */ (0, X.jsx)(E, {
					name: "want-magnet-filter",
					"aria-label": o("待找磁链筛选"),
					orientation: "horizontal",
					value: l,
					className: T,
					onChange: (e) => {
						u(e), c(1);
					},
					children: Q.map(([t, n]) => /* @__PURE__ */ (0, X.jsxs)(e, {
						value: t,
						"aria-label": o(n),
						className: w,
						children: [o(n), /* @__PURE__ */ (0, X.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (t === "all" ? i.length : t === "available" ? m.length : i.length - m.length).toLocaleString()
						})]
					}, t))
				}) : null]
			}),
			h.length ? null : /* @__PURE__ */ (0, X.jsx)(d, {
				size: "compact",
				icon: L,
				title: o("暂无符合条件的作品"),
				actions: /* @__PURE__ */ (0, X.jsx)(n, {
					size: "small",
					onClick: () => {
						u("all"), c(1);
					},
					children: o("查看全部")
				}),
				children: null
			}),
			/* @__PURE__ */ (0, X.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: h.slice(g.start, g.end).map(a)
			}),
			g.pages > 1 ? /* @__PURE__ */ (0, X.jsxs)("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, X.jsx)("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: o("{value0}–{value1} / {value2} 条", {
						value0: String((g.start + 1).toLocaleString()),
						value1: String(g.end.toLocaleString()),
						value2: String(g.total.toLocaleString())
					})
				}), /* @__PURE__ */ (0, X.jsx)(C, {
					label: o("{value0}分页", { value0: o(r) }),
					page: g.page,
					pages: g.pages,
					onPage: c
				})]
			}) : null
		]
	});
}
function Pe({ readOnly: e, toast: t, query: r = "", clearQuery: i }) {
	let o = q(), l = (0, Y.useId)(), [f, p] = (0, Y.useState)(""), [m, h] = (0, Y.useState)(null), v = G(), y = K({
		queryKey: re,
		queryFn: ({ signal: e }) => P(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), b = () => {
		let n = f.trim();
		n && !e && v.run("add", (e) => oe({ code: n }, e), (e) => {
			t(e.created ? `已加入想要：${J(e.want)}` : `${J(e.want)} 已经在想要里`), p(""), F();
		});
	}, ee = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), b());
	}, x = (e) => {
		v.run(`remove:${e.id}`, (t) => R([e.id], t), () => {
			t(`已移除：${J(e)}`), F();
		});
	}, C = (e) => {
		v.run(`reset:${e.id}`, (t) => V([e.id], t), () => {
			t(`${J(e)} 回到待找`), F();
		});
	}, w = y.data, T = (w?.items || []).filter((e) => !r || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase())), E = K({
		queryKey: s,
		queryFn: ({ signal: e }) => se(`${c}?limit=100`, e),
		enabled: T.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), D = E.data?.providers.filter((e) => e.configured) || [], O = D[0]?.key || "";
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		"aria-busy": y.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: M({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, X.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: o("按番号添加")
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, X.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, X.jsx)(_, {
								id: l,
								"aria-label": o("番号"),
								placeholder: o("输入番号，例如 SSIS-950"),
								value: f,
								isDisabled: e,
								onChange: p,
								onKeyDown: ee
							})
						}), /* @__PURE__ */ (0, X.jsx)(n, {
							variant: "primary",
							disabled: e || !f.trim(),
							...j(v.busy === "add"),
							onClick: b,
							children: o("添加")
						})]
					}),
					v.error ? /* @__PURE__ */ (0, X.jsx)(S, {
						tone: "error",
						title: o("这一次没有完成"),
						children: v.error
					}) : null
				]
			}),
			y.error ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "error",
				title: o("想要清单读取失败"),
				children: N(y.error)
			}) : null,
			y.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
				role: "status",
				"aria-label": o("正在读取想要"),
				dangerouslySetInnerHTML: { __html: ye("wants") }
			}) : null,
			w?.scraping ? /* @__PURE__ */ (0, X.jsx)(g, {
				role: "status",
				children: o("正在给刚加入的番号取资料与封面。")
			}) : null,
			E.error ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "error",
				title: o("下载配置未取得"),
				children: N(E.error)
			}) : null,
			E.data && !D.length ? /* @__PURE__ */ (0, X.jsxs)(S, {
				tone: "neutral",
				children: [o("尚未配置下载渠道。"), /* @__PURE__ */ (0, X.jsx)("a", {
					href: "/settings/library?section=%E4%B8%8B%E8%BD%BD%E6%B8%A0%E9%81%93",
					children: o("下载渠道设置")
				})]
			}) : null,
			E.data && !E.data.available ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "neutral",
				children: o("云下载只在允许修改数据库的设备上可用。")
			}) : null,
			w && !T.length ? /* @__PURE__ */ (0, X.jsx)(d, {
				size: "compact",
				icon: L,
				title: o(r ? "没有符合条件的作品" : "还没有想要的作品"),
				actions: r && i ? /* @__PURE__ */ (0, X.jsx)(n, {
					size: "small",
					onClick: i,
					children: o("清除搜索")
				}) : !r && !e ? /* @__PURE__ */ (0, X.jsx)(u, {
					target: `[id="${l}"]`,
					children: o("添加作品")
				}) : void 0,
				children: o(r ? "试试其他番号、女优或标题。" : "输入番号，添加想看的作品。")
			}) : null,
			te.map(([n, r]) => {
				let i = T.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, X.jsx)(Ne, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, X.jsx)(Me, {
						want: n,
						readOnly: e,
						busy: v.busy,
						downloads: E.data,
						provider: O,
						toast: t,
						onReset: () => C(n),
						onRemove: () => x(n),
						onCloudDownload: () => h({
							code: n.code || "",
							title: n.title || "",
							origin: `wishlist:${n.id}`,
							cover: n.cover || "",
							performers: n.performers || "",
							release_date: n.release_date || "",
							studio: n.studio || ""
						})
					}, n.id)
				}, n) : null;
			}),
			/* @__PURE__ */ (0, X.jsx)(a, {
				prefill: m,
				close: () => h(null),
				receipt: t,
				provider: O
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var Fe = W("search"), Ie = W("x"), Le = W("refresh-cw");
function $(e) {
	let t = new URLSearchParams(location.search);
	for (let [n, r] of Object.entries(e)) r ? t.set(n, r) : t.delete(n);
	U(location.pathname + (t.size ? `?${t}` : ""), {
		replace: !0,
		state: I.navigation.location.state
	});
}
function Re({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let i = q(), [o, s] = (0, Y.useState)(null), [c, l] = (0, Y.useState)(() => new URLSearchParams(location.search).get("q") || ""), u = (e) => {
		l(e), $({ q: e });
	};
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, X.jsx)(b, {
				tab: e,
				navigate: n,
				find: () => s({})
			}),
			/* @__PURE__ */ (0, X.jsx)("form", {
				"aria-label": i(e === "discover" ? "筛选推荐" : "筛选想要"),
				onSubmit: (e) => {
					e.preventDefault();
				},
				children: /* @__PURE__ */ (0, X.jsx)(_, {
					type: "search",
					"aria-label": i(e === "discover" ? "筛选推荐" : "筛选想要"),
					placeholder: i("筛选番号、女优或标题"),
					leadingIcon: Fe,
					value: c,
					onChange: u,
					enterKeyHint: "search"
				})
			}),
			e === "discover" ? /* @__PURE__ */ (0, X.jsx)(ze, {
				readOnly: t,
				receipt: r,
				resource: s,
				query: c.trim(),
				navigate: n,
				clearText: () => u("")
			}) : /* @__PURE__ */ (0, X.jsx)(Pe, {
				readOnly: t,
				toast: r,
				query: c.trim(),
				clearQuery: () => u("")
			}),
			/* @__PURE__ */ (0, X.jsx)(a, {
				prefill: o,
				close: () => s(null),
				receipt: r
			})
		]
	});
}
function ze({ readOnly: e, receipt: a, resource: s, query: c, navigate: u, clearText: g }) {
	let _ = q(), b = new URLSearchParams(location.search), [x, te] = (0, Y.useState)(() => b.get("scope") === "library" ? "library" : "external"), [C, w] = (0, Y.useState)(() => b.get("tag") || ""), [T, E] = (0, Y.useState)(() => o.some(([e]) => e === b.get("sort")) ? b.get("sort") : "taste"), [k, re] = (0, Y.useState)(() => b.get("dir") === "asc"), ie = (e) => {
		te(e), $({ scope: e === "external" ? "" : e });
	}, A = (e) => {
		w(e), $({ tag: e });
	}, se = (e) => {
		E(e), $({ sort: e === "taste" ? "" : e });
	}, le = (e) => {
		re(e), $({ dir: e ? "asc" : "" });
	}, ue = (0, Y.useRef)(null);
	(0, Y.useEffect)(() => {
		let e = [...ue.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => De(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let M = ce();
	(0, Y.useSyncExternalStore)(M.subscribe, M.version, M.version);
	let P = be(), Se = de(ve({
		active: !0,
		home: !1,
		portrait: !1
	})), I = (0, Y.useRef)({}), L = (0, Y.useRef)(!1), R = (0, Y.useRef)(!1), z = k ? "asc" : "desc", B = K({
		queryKey: me(x, T, z),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = L.current, n = R.current;
			return L.current = !1, R.current = !1, _e(x, e, {
				sort: T,
				direction: z,
				jobId: t ? void 0 : I.current[x],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), V = B.data?.metadata_job;
	(0, Y.useEffect)(() => {
		V?.job_id && (I.current[x] = V.job_id);
	}, [x, V?.job_id]);
	let H = G(), U = G(), W = (e) => {
		U.run(e, async () => (R.current = e === "stop", L.current = e !== "stop", B.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, J = B.data?.items || [], Oe = [...new Set(J.flatMap((e) => e.tags || []))], Z = J.filter((e) => (!C || e.tags?.includes(C)) && (!c || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(c.toLocaleLowerCase()))), Q = B.isPending;
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		ref: ue,
		"aria-label": _("为你推荐"),
		"aria-busy": Q,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, X.jsx)(f, {
				label: _("发现筛选与排序"),
				topLabel: _("发现范围与标签"),
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: Q,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, X.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, X.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", "库外发现"], ["library", "馆藏探索"]].map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(m, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: x === e,
							onPress: () => {
								ie(e), A("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, X.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, X.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: Q ? { __html: xe() } : void 0,
						children: Q ? null : Oe.map((e) => /* @__PURE__ */ (0, X.jsxs)(m, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: C === e,
							onPress: () => A(C === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, X.jsx)("span", {
								"data-count-badge": "",
								children: J.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
					/* @__PURE__ */ (0, X.jsx)("span", {
						"data-catalog-readout": "",
						children: Q ? /* @__PURE__ */ (0, X.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : _("{value0} 部", { value0: String(Z.length) })
					}),
					/* @__PURE__ */ (0, X.jsx)(ee, { currentHref: () => location.pathname + location.search }),
					c || C ? /* @__PURE__ */ (0, X.jsx)(h, {
						onPress: () => {
							A(""), g();
						},
						children: _("清除筛选")
					}) : null,
					/* @__PURE__ */ (0, X.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							x === "external" ? /* @__PURE__ */ (0, X.jsx)(p, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: V?.status === "running" ? _("停止读取") : _("更新资料"),
								disabled: Q,
								"data-skeleton-action": Q ? "" : void 0,
								busy: !!U.busy,
								icon: V?.status === "running" ? Ie : Le,
								onPress: () => W(V?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, X.jsx)(D, {
								label: _("JAV 卡片版式"),
								value: P,
								options: v,
								onChange: Te
							}),
							/* @__PURE__ */ (0, X.jsx)(O, {
								sorts: o.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === T,
									dir: z
								})),
								onSort: (e) => {
									e === T ? le(!k) : (se(e), le(e === "code"));
								}
							})
						]
					})
				] })
			}),
			Q ? /* @__PURE__ */ (0, X.jsx)("div", {
				role: "status",
				"aria-label": _("正在读取推荐"),
				dangerouslySetInnerHTML: { __html: ye("discover", P) }
			}) : null,
			B.error ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "error",
				title: _("推荐未取得"),
				children: N(B.error)
			}) : null,
			x === "external" && V?.status === "running" ? /* @__PURE__ */ (0, X.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, X.jsx)(ne, {
					embedded: !0,
					label: _("正在读取作品资料 · {value0} / {value1} 部", {
						value0: String(V.completed),
						value1: String(V.total)
					}),
					value: V.completed,
					total: V.total
				})
			}) : null,
			V && V.status !== "running" && (V.status !== "complete" || V.failed > 0) ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, X.jsx)(n, {
					variant: "secondary",
					...j(U.busy === "retry"),
					"aria-label": _("立即重试读取作品资料"),
					onClick: () => W("retry"),
					children: _("立即重试")
				}),
				children: V.message || _("作品资料 {value0} / {value1} 部", {
					value0: String(V.completed),
					value1: String(V.total)
				})
			}) : null,
			U.error ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "error",
				children: U.error
			}) : null,
			!Q && !B.error && !Z.length ? /* @__PURE__ */ (0, X.jsx)(d, {
				icon: l,
				title: _(c || C ? "没有符合条件的推荐" : "暂无匹配口味的作品"),
				actions: /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(r, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: _("查看口味")
				}), c || C ? /* @__PURE__ */ (0, X.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => {
						g(), w(""), $({
							q: "",
							tag: ""
						});
					},
					children: _("清除筛选")
				}) : x === "library" ? /* @__PURE__ */ (0, X.jsx)(r, {
					variant: "primary",
					size: "small",
					href: "/",
					children: _("浏览馆藏")
				}) : /* @__PURE__ */ (0, X.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => s({}),
					children: _("查找作品")
				})] }),
				children: _(c || C ? "清除筛选后查看其他作品。" : x === "library" ? "观看或标记作品后，可以探索少看的馆藏。" : "可以查找番号，或更新关注来源。")
			}) : null,
			H.error ? /* @__PURE__ */ (0, X.jsx)(S, {
				tone: "error",
				children: H.error
			}) : null,
			/* @__PURE__ */ (0, X.jsx)("div", {
				"data-media-grid": "",
				className: y,
				style: { "--card-ratio": Se },
				children: Z.map((o) => {
					let c = o.performer_refs?.length ? o.performer_refs.map((e) => e.name).join("、") : o.performers, l = pe(o, P, M.value.javImage), d = Ce(o.taste_score ?? o.score), f = [
						_(d.label),
						_("口味 {score}", { score: he(o.taste_score ?? o.score) }),
						B.data?.ranking_method === "mmr" && o.ranking_score != null ? _("排序 {score}", { score: he(o.ranking_score) }) : "",
						o.source_score == null ? "" : _("来源评分 {score} / 5", { score: o.source_score.toFixed(1) }),
						...(o.reasons || []).map((e) => _(e))
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, X.jsxs)("article", {
						"data-media-card": "",
						"data-jav-card": "",
						onClick: (e) => {
							e.target.closest("a,button,input") || u(o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`);
						},
						children: [
							/* @__PURE__ */ (0, X.jsx)("a", {
								href: o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`,
								"aria-label": _("查看 {value0} 详情", { value0: String(o.code) }),
								onClick: (e) => {
									e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), u(e.currentTarget.getAttribute("href")));
								},
								"data-media-pic": "",
								"data-jav-cover-box": "",
								className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
								children: l ? /* @__PURE__ */ (0, X.jsx)(t, {
									artwork: {
										kind: "cover",
										html: l
									},
									identity: pe(o, "small", M.value.javImage),
									relayout: (e) => we(e, P)
								}) : /* @__PURE__ */ (0, X.jsx)("span", {
									"data-media-nopic": "",
									children: _("无封面")
								})
							}),
							/* @__PURE__ */ (0, X.jsxs)("div", {
								"data-media-meta": "",
								children: [/* @__PURE__ */ (0, X.jsx)(ke, { item: o }), /* @__PURE__ */ (0, X.jsxs)("div", {
									"data-media-text": "",
									children: [
										/* @__PURE__ */ (0, X.jsxs)("h3", {
											"data-jav-title": "",
											"data-media-title": "",
											title: `${o.code} · ${o.title || _("标题未取得")}`,
											children: [
												/* @__PURE__ */ (0, X.jsx)("b", { children: o.code }),
												" ",
												o.title ? /* @__PURE__ */ (0, X.jsx)("span", {
													lang: Ee(o.title),
													children: o.title
												}) : _("标题未取得")
											]
										}),
										/* @__PURE__ */ (0, X.jsxs)("div", {
											"data-media-byline": "",
											children: [
												o.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, X.jsxs)("a", {
													"data-media-who": "",
													href: ge("performer", o.performer_refs[0].name),
													title: c,
													children: [/* @__PURE__ */ (0, X.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, X.jsx)("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ (0, X.jsx)("span", { children: o.performer_refs[0].name })]
												}) : /* @__PURE__ */ (0, X.jsxs)("span", {
													"data-media-who": "",
													title: c,
													children: [/* @__PURE__ */ (0, X.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, X.jsx)("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ (0, X.jsx)("span", { children: o.performer_refs?.[0]?.name || c })]
												}),
												(o.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, X.jsxs)("span", {
													"data-media-who-more": "",
													children: [
														_("等 "),
														o.performer_refs.length,
														_(" 人")
													]
												}) : null,
												o.release_date ? /* @__PURE__ */ (0, X.jsxs)("time", {
													"data-media-release": "",
													dateTime: o.release_date,
													children: [/* @__PURE__ */ (0, X.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, X.jsx)("use", { href: "#i-calendar" })
													}), o.release_date]
												}) : null
											]
										}),
										/* @__PURE__ */ (0, X.jsxs)("div", {
											"data-jav-tags": "",
											"data-media-tags": "",
											children: [/* @__PURE__ */ (0, X.jsx)("button", {
												"data-jav-taste-score": "",
												type: "button",
												title: f,
												"aria-label": _("推荐分 {value0}，{value1}", {
													value0: String(d.score),
													value1: _(d.label)
												}),
												className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
												children: /* @__PURE__ */ (0, X.jsx)(i, {
													color: d.color,
													children: _(d.label)
												})
											}), (o.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, X.jsx)("button", {
												type: "button",
												"data-media-tag": "",
												"aria-pressed": C === e,
												onClick: () => A(C === e ? "" : e),
												children: e
											}, e))]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, X.jsxs)("div", {
								"data-jav-actions": "",
								className: "flex flex-wrap gap-2",
								children: [
									o.link ? /* @__PURE__ */ (0, X.jsx)(r, {
										"data-button-link": "",
										variant: "secondary",
										trailingIcon: ae,
										href: o.link,
										target: "_blank",
										rel: "noopener noreferrer",
										children: _("作品来源")
									}) : null,
									/* @__PURE__ */ (0, X.jsx)(n, {
										variant: "ghost",
										disabled: e || o.wanted || !!o.asset_id,
										...j(H.busy === String(o.id)),
										onClick: () => {
											H.run(String(o.id), (e) => oe({ code: o.code }, e), () => {
												a("已加入想要"), F(), B.refetch();
											});
										},
										children: o.asset_id ? _("已入库") : o.wanted ? _("已加入想要") : _("想要")
									}),
									/* @__PURE__ */ (0, X.jsx)(n, {
										variant: "secondary",
										onClick: () => s({
											...o,
											cover: o.has_cover ? fe(o, !0) : o.cover_url,
											origin: `${o.asset_id ? "asset" : "feed"}:${o.id}`
										}),
										children: _("查找资源")
									})
								]
							})
						]
					}, o.id);
				})
			})
		]
	});
}
export { Re as JavPage };

//# debugId=8a50f869-7098-4e1f-a7f3-8b5d86690708