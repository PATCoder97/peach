(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8e2a5050-a302-4c88-ae90-fcc1a8bc1c99", e._sentryDebugIdIdentifier = "sentry-dbid-8e2a5050-a302-4c88-ae90-fcc1a8bc1c99");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, COVER_JOB_KEY as a, CUSTOM_SOURCES_KEY as o, CUSTOM_SOURCES_URL as s, Checkbox as c, Disclosure as l, ErrorText as u, ExternalLink as d, Fact as f, FactList as p, FieldLabel as m, Footer as h, Help as g, Input as _, LinkButton as v, LoadingDots as y, Note as b, Rows as x, SCRAPING_CHECK_URL as ee, SCRAPING_COVER_URL as S, SCRAPING_KEY as C, SCRAPING_SETTINGS_URL as te, SEGMENT as ne, SEGMENTED_TRACK as re, Section as w, SegmentedRadioGroup as ie, Select$1 as ae, SelectField as T, SelectItem as oe, SettingsRow as se, Stack as E, StatusLabel as D, __toESM as O, apiSend as k, busyProps as A, checkText as ce, confirmModal as j, errorMessage as M, esc as N, fetchAmaneBridge as P, fetchCoverJob as F, fetchCustomSources as I, fetchSources as L, formatDateTime as le, i2 as ue, queryClient as R, require_jsx_runtime as z, require_react as B, spinnerHtml as V, useAction as H, useBackgroundJob as U, useMutation as W, useQuery as G, useTranslation as K } from "./peach-app.js";
import { CodeBlock as de } from "./peach-app.code-block-BLPqm2xI.js";
import { Page as q } from "./peach-app.page-QAncjzM1.js";
import { SiteMark as J } from "./peach-app.site-mark-D_VlIyJz.js";
import { ConnectionStatus as fe } from "./peach-app.connection-status-Usa7d0Cc.js";
// src/react/scraping/custom-sources.tsx
var Y = /* @__PURE__ */ O(B(), 1), X = z(), pe = [
	["code", "番号"],
	["title", "标题"],
	["studio", "厂牌"],
	["series", "系列"],
	["release_date", "发行日期"],
	["performers", "演员（文本数组）"],
	["tags", "标签（文本数组）"]
], me = [
	["censored", "有码"],
	["amateur", "素人"],
	["uncensored", "无码"],
	["fc2", "FC2"],
	["kmib", "韩国 MIB"],
	["other", "其他"],
	["unsure", "待核番号"],
	["unknown", "未知"]
], he = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function ge({ receipt: e }) {
	let t = K(), [n, r] = (0, Y.useState)(null), a = G({
		queryKey: o,
		queryFn: ({ signal: e }) => I(e)
	}), c = H(), l = (e) => R.setQueryData(o, e), d = !!(a.isPending || a.error || a.data?.items.length || c.error), f = /* @__PURE__ */ (0, X.jsx)(i, {
		variant: "secondary",
		onClick: () => r(he()),
		children: t("添加来源")
	});
	return /* @__PURE__ */ (0, X.jsxs)(w, {
		title: t("自定义元数据来源"),
		children: [
			d ? /* @__PURE__ */ (0, X.jsxs)(E, { children: [
				a.isPending ? /* @__PURE__ */ (0, X.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": t("读取自定义来源")
				}) : null,
				a.error ? /* @__PURE__ */ (0, X.jsx)(u, { children: M(a.error) }) : null,
				a.data?.items.map((n) => /* @__PURE__ */ (0, X.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 flex-1",
							children: n.name
						}),
						/* @__PURE__ */ (0, X.jsx)(D, {
							tone: n.enabled ? "success" : "neutral",
							children: n.enabled ? t("已启用") : t("已停用")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "secondary",
							onClick: () => r(n),
							children: t("编辑")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "secondary",
							...A(c.busy === n.id),
							onClick: () => void c.run(n.id, (e) => k(s, {
								...n,
								enabled: !n.enabled
							}, "POST", e), (t) => {
								l(t), e(n.enabled ? "已停用来源" : "已启用来源");
							}),
							children: n.enabled ? t("停用") : t("启用")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "danger",
							onClick: () => j({
								title: "删除自定义来源",
								body: `删除「${N(n.name)}」后，采集将不再查询这个来源。`,
								confirmLabel: "删除来源",
								danger: !0,
								onConfirm: async () => {
									l(await k(s, {
										action: "delete",
										id: n.id
									})), r(null), e("已删除来源");
								}
							}),
							children: t("删除")
						})
					]
				}, n.id)),
				c.error ? /* @__PURE__ */ (0, X.jsx)(u, { children: c.error }) : null
			] }) : null,
			n ? null : d ? /* @__PURE__ */ (0, X.jsx)(h, { children: f }) : /* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex justify-end",
				children: f
			}) }),
			n ? /* @__PURE__ */ (0, X.jsx)(_e, {
				initial: n,
				cancel: () => r(null),
				saved: (t) => {
					l(t), r(null), e("已保存来源");
				}
			}, n.id || "new") : null
		]
	});
}
function _e({ initial: e, cancel: t, saved: n }) {
	let r = K(), [a, o] = (0, Y.useState)(e), [l, d] = (0, Y.useState)(""), [f, p] = (0, Y.useState)(""), v = (0, Y.useRef)(0), y = H(), b = (e) => {
		v.current++, o((t) => ({
			...t,
			...e
		})), p("");
	};
	return /* @__PURE__ */ (0, X.jsxs)("form", {
		"aria-label": r("元数据来源配置"),
		"aria-busy": y.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), y.run("save", (e) => k(s, a, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, X.jsxs)(E, { children: [
			/* @__PURE__ */ (0, X.jsx)(_, {
				label: r("来源名称"),
				value: a.name,
				maxLength: 80,
				onChange: (e) => b({ name: e })
			}),
			/* @__PURE__ */ (0, X.jsx)(_, {
				label: r("JSON 接口地址"),
				value: a.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => b({ endpoint: e })
			}),
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)(m, { children: r("来源连接方式") }), /* @__PURE__ */ (0, X.jsx)(T, {
					id: "custom-source-network",
					label: r("来源连接方式"),
					epoch: 0,
					value: a.network || "direct",
					options: [["direct", "直连"], ["peach_proxy", "Peach 代理"]],
					onPick: (e) => b({ network: e })
				})]
			}),
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)(m, { children: r("接口番号格式") }), /* @__PURE__ */ (0, X.jsx)(T, {
					id: "custom-source-code-format",
					label: r("接口番号格式"),
					epoch: 0,
					value: a.code_format || "original",
					options: [
						["original", "原样"],
						["lowercase", "小写"],
						["compact", "去掉连字符"],
						["underscore", "连字符转下划线"]
					],
					onPick: (e) => b({ code_format: e })
				})]
			}),
			/* @__PURE__ */ (0, X.jsx)(g, { children: r("填写公开 JSON 接口和响应字段路径，例如 data.title。番号字段用于核对作品身份。") }),
			pe.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(_, {
				label: r("{value0}字段路径", { value0: r(t) }),
				value: a.fields[e] || "",
				onChange: (t) => {
					let n = { ...a.fields };
					t ? n[e] = t : delete n[e], b({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": r("适用内容类型"),
				children: me.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(c, {
					isSelected: a.content_types.includes(e),
					onChange: (t) => b({ content_types: t ? [...a.content_types, e] : a.content_types.filter((t) => t !== e) }),
					children: r(t)
				}, e))
			}),
			/* @__PURE__ */ (0, X.jsx)(c, {
				isSelected: a.enabled,
				onChange: (e) => b({ enabled: e }),
				children: r("启用来源")
			}),
			/* @__PURE__ */ (0, X.jsx)(_, {
				label: r("试查番号（回车查询）"),
				value: l,
				onChange: (e) => {
					v.current++, d(e), p("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
					e.preventDefault();
					let t = v.current;
					y.run("preview", (e) => k(s, {
						...a,
						code: l,
						action: "preview"
					}, "POST", e), (e) => {
						t === v.current && p(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === v.current && y.setError(M(e));
					});
				}
			}),
			y.busy === "preview" ? /* @__PURE__ */ (0, X.jsxs)(g, {
				role: "status",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { dangerouslySetInnerHTML: { __html: V("正在试查来源") } }), r("正在试查来源")]
			}) : null,
			f ? /* @__PURE__ */ (0, X.jsx)(de, {
				code: f,
				language: "json",
				label: r("元数据接口返回")
			}) : null,
			y.error ? /* @__PURE__ */ (0, X.jsx)(u, { children: y.error }) : null
		] }), /* @__PURE__ */ (0, X.jsxs)(h, { children: [/* @__PURE__ */ (0, X.jsx)(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: r("取消")
		}), /* @__PURE__ */ (0, X.jsx)(i, {
			type: "submit",
			...A(y.busy === "save"),
			children: r("保存来源")
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var Z = [["peach", "Peach 代理"], ["direct", "直接连接"]];
function Q(e) {
	return Z.some(([t]) => t === e) || !e ? [...Z] : [...Z, [e, e]];
}
function $(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var ve = [["paste", "粘贴 Cookie"], ["file", "导入文件"]];
function ye() {
	return /* @__PURE__ */ (0, X.jsx)(J, { source: "github" });
}
function be({ source: t, toast: n }) {
	let r = K(), [a, o] = (0, Y.useState)(t.network), [s, c] = (0, Y.useState)(""), [l, f] = (0, Y.useState)(""), [p, g] = (0, Y.useState)(ve[0][0]), [y, S] = (0, Y.useState)(""), [T, O] = (0, Y.useState)(""), j = (0, Y.useRef)(null);
	function N() {
		c(""), f(""), S(""), O(""), j.current && (j.current.value = "");
	}
	let P = W({
		mutationFn: (e) => k(te, {
			source: t.source,
			network: a,
			cookie: s,
			cookies_text: l,
			revoke: e
		}),
		onSuccess: (e, t) => {
			R.setQueryData(C, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), N(), n(t ? "Cookie 已撤销" : "来源设置已保存");
		}
	}), F = W({ mutationFn: () => k(ee, { source: t.source }) }), I = P.isPending || F.isPending, L = (e) => {
		e.preventDefault(), !I && (F.reset(), P.mutate(!1));
	}, z = () => {
		I || (F.reset(), P.mutate(!0));
	}, B = () => {
		I || (P.reset(), F.mutate());
	};
	async function V(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (f(""), O(""), !n) S("");
		else if (n.size > 262144) t.value = "", S(""), O("Cookie 文本超过 256 KiB");
		else try {
			let e = await n.text();
			f(e), S(n.name);
		} catch {
			O("Cookie 文件未读取，请重新选择");
		}
	}
	let H = T || (P.error ? M(P.error) : "") || (F.error ? M(F.error) : ""), U = F.data?.results ?? [], G = a === "peach" || t.accepts_cookie || t.browser || !!H || U.length > 0;
	return /* @__PURE__ */ (0, X.jsxs)(w, {
		title: t.label,
		onSubmit: L,
		aside: /* @__PURE__ */ (0, X.jsxs)("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, X.jsx)(J, { source: t.source }), t.login ? /* @__PURE__ */ (0, X.jsx)(d, {
				href: t.login,
				children: $(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ (0, X.jsx)(x, { children: /* @__PURE__ */ (0, X.jsx)(se, {
				label: r("连接方式"),
				children: /* @__PURE__ */ (0, X.jsx)(ae, {
					"aria-label": r("连接方式"),
					className: "w-44 min-w-0",
					selectedKey: a,
					onSelectionChange: (e) => {
						e !== null && o(String(e));
					},
					children: Q(a).map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(oe, {
						id: e,
						children: r(t)
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, X.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, X.jsx)(D, {
						tone: "warning",
						children: r("冷却中")
					}), /* @__PURE__ */ (0, X.jsxs)("span", { children: [
						r("可在 "),
						le(t.cooldown_until * 1e3, {
							dateStyle: "short",
							timeStyle: "medium"
						}),
						r(" 后重试。")
					] })]
				})
			}) : null,
			G ? /* @__PURE__ */ (0, X.jsxs)(E, {
				divided: !0,
				children: [
					a === "peach" ? /* @__PURE__ */ (0, X.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, X.jsx)(v, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: ue,
							children: r("配置 Peach 代理")
						})
					}) : null,
					t.browser ? /* @__PURE__ */ (0, X.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: r("人机验证由本机浏览器自动完成；需要点击时窗口会弹出。这台机器上不需要 Cookie。")
					}) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
						/* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, X.jsx)("span", {
								className: "self-start",
								children: /* @__PURE__ */ (0, X.jsx)(D, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? r("Cookie 已保存") : r("Cookie 未配置")
								})
							}), /* @__PURE__ */ (0, X.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? r("登录有效性待验证。") : r("需要登录时，任选一种方式提供 Cookie。")
							})]
						}),
						/* @__PURE__ */ (0, X.jsx)(ie, {
							"aria-label": r("提供 Cookie 的方式（二选一）"),
							value: p,
							onChange: (e) => {
								g(e), N();
							},
							className: re,
							children: ve.map(([t, n]) => /* @__PURE__ */ (0, X.jsx)(e, {
								value: t,
								className: ne,
								children: r(n)
							}, t))
						}),
						p === "paste" ? /* @__PURE__ */ (0, X.jsx)(_, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: s,
							onChange: c
						}) : /* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, X.jsx)(m, { children: r("Netscape Cookie 文件（.txt）") }),
								/* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, X.jsx)(i, {
										variant: "secondary",
										onClick: () => j.current?.click(),
										children: r("选择文件")
									}), /* @__PURE__ */ (0, X.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: y || r("未选择文件")
									})]
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: j,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										V(e);
									}
								})
							]
						})
					] }) : null,
					H ? /* @__PURE__ */ (0, X.jsx)(u, { children: H }) : null,
					U.map((e) => /* @__PURE__ */ (0, X.jsx)(b, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ (0, X.jsxs)("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, X.jsx)(fe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? r("可访问") : r("连接失败")
							}), /* @__PURE__ */ (0, X.jsx)("span", { children: ce(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)(h, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: z,
					...A(I),
					children: r("撤销 Cookie")
				}) : null,
				/* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: B,
					...A(I),
					children: r("检查连接")
				}),
				/* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					...A(I),
					children: r("保存")
				})
			] })
		]
	});
}
function xe({ toast: e }) {
	let t = K(), [n, r] = (0, Y.useState)(""), { running: o, outcome: s, start: c } = U({
		queryKey: a,
		queryFn: ({ signal: e }) => F(e),
		start: () => k(S, { code: n }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "封面采集完成");
		}
	}), l = (e) => {
		e.preventDefault(), !(o || c.isPending || !n.trim()) && c.mutate();
	}, u = c.error ? M(c.error) : s?.status === "failed" ? s.error || "采集未取得" : "";
	return /* @__PURE__ */ (0, X.jsx)(w, {
		title: t("高清封面"),
		onSubmit: l,
		children: /* @__PURE__ */ (0, X.jsxs)(E, { children: [
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, X.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, X.jsx)(_, {
						"aria-label": t("馆藏番号"),
						isRequired: !0,
						isDisabled: o,
						value: n,
						onChange: r,
						placeholder: t("输入馆藏番号，如 ABW-232")
					})
				}), /* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					disabled: !n.trim(),
					...A(o || c.isPending),
					children: t("抓取封面")
				})]
			}),
			o ? /* @__PURE__ */ (0, X.jsx)(y, { label: t("正在抓取封面") }) : null,
			u ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "error",
				children: u
			}) : null,
			s?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
				tone: "success",
				children: s.result || t("封面采集完成")
			}) : null
		] })
	});
}
function Se({ toast: e }) {
	let a = K(), { query: o, running: s, outcome: c, start: u } = U({
		queryKey: n,
		queryFn: ({ signal: e }) => P(e),
		start: () => k(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "amane 桥已重建");
		}
	}), m = W({ mutationFn: () => k(t, {}) }), _ = o.data;
	if (!_) return o.error ? /* @__PURE__ */ (0, X.jsx)(w, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)(b, {
			tone: "error",
			children: M(o.error)
		}) })
	}) : null;
	let v = s || u.isPending || m.isPending, x = u.error ? M(u.error) : m.error ? M(m.error) : c?.status === "failed" ? c.error || "重建未完成" : "";
	return /* @__PURE__ */ (0, X.jsxs)(w, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, X.jsx)(d, {
			href: _.repository,
			leadingIcon: ye,
			children: _.repository
		}),
		children: [
			/* @__PURE__ */ (0, X.jsxs)(p, { children: [
				/* @__PURE__ */ (0, X.jsx)(f, {
					term: a("已安装版本"),
					children: _.installed_version || a("未安装")
				}),
				/* @__PURE__ */ (0, X.jsx)(f, {
					term: a("上游最新版本"),
					children: m.data?.latest ?? a("尚未检查")
				}),
				/* @__PURE__ */ (0, X.jsx)(f, {
					term: a("运行环境"),
					children: _.installed ? a("已安装") : a("未安装")
				}),
				/* @__PURE__ */ (0, X.jsxs)(f, {
					term: a("内置站点"),
					children: [_.sites.length.toLocaleString(), a(" 个")]
				})
			] }),
			/* @__PURE__ */ (0, X.jsxs)(E, {
				divided: !0,
				children: [
					_.sites.length ? /* @__PURE__ */ (0, X.jsx)(l, {
						summary: a("查看内置站点"),
						children: /* @__PURE__ */ (0, X.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: _.sites.map((e) => a(e.label)).join(a("、"))
						})
					}) : null,
					_.problem ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: _.problem
					}) : /* @__PURE__ */ (0, X.jsxs)(g, { children: [
						"amane（",
						_.license,
						a("）提供这些内置站点的解析能力。首次需要时，Peach 会自动准备锁定的 "),
						_.version,
						a(" 版本；安装包内已有可用环境时直接使用。 手动安装也使用此版本，不随上游自动升级。")
					] }),
					s ? /* @__PURE__ */ (0, X.jsx)(y, { label: a("正在重建运行环境") }) : null,
					x ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "error",
						children: x
					}) : null,
					c?.status === "complete" ? /* @__PURE__ */ (0, X.jsx)(b, {
						tone: "success",
						children: c.result || a("amane 桥已重建")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, X.jsxs)(h, { children: [/* @__PURE__ */ (0, X.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					v || m.mutate();
				},
				...A(m.isPending),
				children: a("检查上游版本")
			}), /* @__PURE__ */ (0, X.jsx)(i, {
				disabled: !!_.problem,
				onClick: () => {
					v || u.mutate();
				},
				...A(s || u.isPending),
				children: _.installed ? a("重新安装") : a("安装")
			})] })
		]
	});
}
function Ce({ toast: e }) {
	let t = K(), n = G({
		queryKey: C,
		queryFn: ({ signal: e }) => L(e)
	}), r = n.data;
	return r ? /* @__PURE__ */ (0, X.jsxs)(q, { children: [
		/* @__PURE__ */ (0, X.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: t("高清图片可能要经代理才能下载，先检查连接。")
		}),
		/* @__PURE__ */ (0, X.jsx)(xe, { toast: e }),
		/* @__PURE__ */ (0, X.jsx)(ge, { receipt: e }),
		(r.sources || []).map((t) => /* @__PURE__ */ (0, X.jsx)(be, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ (0, X.jsx)(Se, { toast: e })
	] }) : /* @__PURE__ */ (0, X.jsx)(q, { children: /* @__PURE__ */ (0, X.jsx)(b, {
		tone: "error",
		title: t("采集来源读取失败"),
		children: n.error ? M(n.error) : t("读取采集来源失败")
	}) });
}
export { Ce as ScrapingPage, $ as linkHost, Q as networkOptions };

//# debugId=8e2a5050-a302-4c88-ae90-fcc1a8bc1c99