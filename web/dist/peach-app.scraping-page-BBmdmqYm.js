(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d0c7e310-5cd6-4714-b4cb-f7beb718cdb6", e._sentryDebugIdIdentifier = "sentry-dbid-d0c7e310-5cd6-4714-b4cb-f7beb718cdb6");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, COVER_JOB_KEY as a, CUSTOM_SOURCES_KEY as o, CUSTOM_SOURCES_URL as s, Checkbox as c, Disclosure as l, ErrorText as u, ExternalLink as d, Fact as f, FactList as p, FieldLabel as m, Footer as h, Help as g, Input as _, LinkButton as v, LoadingDots as y, Note as b, Rows as x, SCRAPING_CHECK_URL as ee, SCRAPING_COVER_URL as S, SCRAPING_KEY as C, SCRAPING_SETTINGS_URL as te, SEGMENT as ne, SEGMENTED_TRACK as re, Section as w, SegmentedRadioGroup as ie, Select$1 as ae, SelectField as T, SelectItem as oe, SettingsRow as se, Stack as E, StatusLabel as D, __toESM as ce, apiSend as O, busyProps as k, checkText as le, confirmModal as A, errorMessage as j, esc as M, fetchAmaneBridge as N, fetchCoverJob as P, fetchCustomSources as F, fetchSources as I, formatDateTime as ue, i2 as de, queryClient as L, require_jsx_runtime as R, require_react as z, spinnerHtml as B, useAction as V, useBackgroundJob as H, useMutation as U, useQuery as W, useTranslation as G } from "./peach-app.js";
import { CodeBlock as K } from "./peach-app.code-block-BLPqm2xI.js";
import { Page as q } from "./peach-app.page-QAncjzM1.js";
import { SiteMark as J } from "./peach-app.site-mark-D_VlIyJz.js";
import { ConnectionStatus as fe } from "./peach-app.connection-status-Usa7d0Cc.js";
// src/react/scraping/custom-sources.tsx
var Y = /* @__PURE__ */ ce(z(), 1), X = R(), Z = [
	["code", "番号"],
	["title", "标题"],
	["studio", "厂牌"],
	["series", "系列"],
	["release_date", "发行日期"],
	["performers", "演员（文本数组）"],
	["tags", "标签（文本数组）"]
], pe = [
	["censored", "有码"],
	["amateur", "素人"],
	["uncensored", "无码"],
	["fc2", "FC2"],
	["kmib", "韩国 MIB"],
	["other", "其他"],
	["unsure", "待核番号"],
	["unknown", "未知"]
], me = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function he({ receipt: e }) {
	let t = G(), [n, r] = (0, Y.useState)(null), a = W({
		queryKey: o,
		queryFn: ({ signal: e }) => F(e)
	}), c = V(), l = (e) => L.setQueryData(o, e), d = !!(a.isPending || a.error || a.data?.items.length || c.error), f = /* @__PURE__ */ (0, X.jsx)(i, {
		variant: "secondary",
		onClick: () => r(me()),
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
				a.error ? /* @__PURE__ */ (0, X.jsx)(u, { children: j(a.error) }) : null,
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
							...k(c.busy === n.id),
							onClick: () => void c.run(n.id, (e) => O(s, {
								...n,
								enabled: !n.enabled
							}, "POST", e), (t) => {
								l(t), e(n.enabled ? "已停用来源" : "已启用来源");
							}),
							children: n.enabled ? t("停用") : t("启用")
						}),
						/* @__PURE__ */ (0, X.jsx)(i, {
							variant: "danger",
							onClick: () => A({
								title: "删除自定义来源",
								body: `删除「${M(n.name)}」后，采集将不再查询这个来源。`,
								confirmLabel: "删除来源",
								danger: !0,
								onConfirm: async () => {
									l(await O(s, {
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
			n ? /* @__PURE__ */ (0, X.jsx)(ge, {
				initial: n,
				cancel: () => r(null),
				saved: (t) => {
					l(t), r(null), e("已保存来源");
				}
			}, n.id || "new") : null
		]
	});
}
function ge({ initial: e, cancel: t, saved: n }) {
	let r = G(), [a, o] = (0, Y.useState)(e), [l, d] = (0, Y.useState)(""), [f, p] = (0, Y.useState)(""), v = (0, Y.useRef)(0), y = V(), b = (e) => {
		v.current++, o((t) => ({
			...t,
			...e
		})), p("");
	};
	return /* @__PURE__ */ (0, X.jsxs)("form", {
		"aria-label": r("元数据来源配置"),
		"aria-busy": y.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), y.run("save", (e) => O(s, a, "POST", e), n);
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
			Z.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(_, {
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
				children: pe.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(c, {
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
					y.run("preview", (e) => O(s, {
						...a,
						code: l,
						action: "preview"
					}, "POST", e), (e) => {
						t === v.current && p(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === v.current && y.setError(j(e));
					});
				}
			}),
			y.busy === "preview" ? /* @__PURE__ */ (0, X.jsxs)(g, {
				role: "status",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { dangerouslySetInnerHTML: { __html: B("正在试查来源") } }), r("正在试查来源")]
			}) : null,
			f ? /* @__PURE__ */ (0, X.jsx)(K, {
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
			...k(y.busy === "save"),
			children: r("保存来源")
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var Q = [["peach", "Peach 代理"], ["direct", "直接连接"]];
function $(e) {
	return Q.some(([t]) => t === e) || !e ? [...Q] : [...Q, [e, e]];
}
function _e(e) {
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
	let r = G(), [a, o] = (0, Y.useState)(t.network), [s, c] = (0, Y.useState)(""), [l, f] = (0, Y.useState)(t.user_agent ?? ""), [p, y] = (0, Y.useState)(""), [S, T] = (0, Y.useState)(ve[0][0]), [ce, A] = (0, Y.useState)(""), [M, N] = (0, Y.useState)(""), P = (0, Y.useRef)(null);
	function F() {
		c(""), y(""), A(""), N(""), P.current && (P.current.value = "");
	}
	let I = U({
		mutationFn: (e) => O(te, {
			source: t.source,
			network: a,
			cookie: s,
			cookies_text: p,
			revoke: e,
			...t.accepts_cookie ? { user_agent: l } : {}
		}),
		onSuccess: (e, t) => {
			L.setQueryData(C, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), F(), n(t ? "Cookie 已撤销" : "来源设置已保存");
		}
	}), R = U({
		mutationFn: () => O(ee, { source: t.source }),
		onSuccess: (e) => {
			let n = e.source;
			n && L.setQueryData(C, (e) => e && {
				...e,
				sources: e.sources.map((e) => e.source === t.source ? n : e)
			});
		}
	}), z = I.isPending || R.isPending, B = (e) => {
		e.preventDefault(), !z && (R.reset(), I.mutate(!1));
	}, V = () => {
		z || (R.reset(), I.mutate(!0));
	}, H = () => {
		z || (I.reset(), R.mutate());
	};
	async function W(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (y(""), N(""), !n) A("");
		else if (n.size > 262144) t.value = "", A(""), N("Cookie 文本超过 256 KiB");
		else try {
			let e = await n.text();
			y(e), A(n.name);
		} catch {
			N("Cookie 文件未读取，请重新选择");
		}
	}
	let K = M || (I.error ? j(I.error) : "") || (R.error ? j(R.error) : ""), q = R.data?.results ?? [], Z = a === "peach" || t.accepts_cookie || t.browser || !!K || q.length > 0;
	return /* @__PURE__ */ (0, X.jsxs)(w, {
		title: t.label,
		onSubmit: B,
		aside: /* @__PURE__ */ (0, X.jsxs)("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, X.jsx)(J, { source: t.source }), t.login ? /* @__PURE__ */ (0, X.jsx)(d, {
				href: t.login,
				children: _e(t.login)
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
					children: $(a).map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(oe, {
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
						ue(t.cooldown_until * 1e3, {
							dateStyle: "short",
							timeStyle: "medium"
						}),
						r(" 后重试。")
					] })]
				})
			}) : null,
			Z ? /* @__PURE__ */ (0, X.jsxs)(E, {
				divided: !0,
				children: [
					a === "peach" ? /* @__PURE__ */ (0, X.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, X.jsx)(v, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: de,
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
							value: S,
							onChange: (e) => {
								T(e), F();
							},
							className: re,
							children: ve.map(([t, n]) => /* @__PURE__ */ (0, X.jsx)(e, {
								value: t,
								className: ne,
								children: r(n)
							}, t))
						}),
						S === "paste" ? /* @__PURE__ */ (0, X.jsx)(_, {
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
										onClick: () => P.current?.click(),
										children: r("选择文件")
									}), /* @__PURE__ */ (0, X.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: ce || r("未选择文件")
									})]
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: P,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										W(e);
									}
								})
							]
						}),
						/* @__PURE__ */ (0, X.jsx)(_, {
							label: r("取 Cookie 的浏览器 User-Agent"),
							autoComplete: "off",
							value: l,
							onChange: f
						}),
						/* @__PURE__ */ (0, X.jsx)(g, { children: r("从成功请求的 Request Headers 复制 User-Agent，与 Cookie 一起保存；留空使用 Peach 默认值。Docker 与取 Cookie 的浏览器应使用同一网络出口，但 Cloudflare 仍可能拒绝 HTTP 客户端。") })
					] }) : null,
					K ? /* @__PURE__ */ (0, X.jsx)(u, { children: K }) : null,
					q.map((e) => /* @__PURE__ */ (0, X.jsx)(b, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ (0, X.jsxs)("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, X.jsx)(fe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? r("可访问") : r("连接失败")
							}), /* @__PURE__ */ (0, X.jsx)("span", { children: le(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)(h, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: V,
					...k(z),
					children: r("撤销 Cookie")
				}) : null,
				/* @__PURE__ */ (0, X.jsx)(i, {
					variant: "secondary",
					onClick: H,
					...k(z),
					children: r("检查连接")
				}),
				/* @__PURE__ */ (0, X.jsx)(i, {
					type: "submit",
					...k(z),
					children: r("保存")
				})
			] })
		]
	});
}
function xe({ toast: e }) {
	let t = G(), [n, r] = (0, Y.useState)(""), { running: o, outcome: s, start: c } = H({
		queryKey: a,
		queryFn: ({ signal: e }) => P(e),
		start: () => O(S, { code: n }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "封面采集完成");
		}
	}), l = (e) => {
		e.preventDefault(), !(o || c.isPending || !n.trim()) && c.mutate();
	}, u = c.error ? j(c.error) : s?.status === "failed" ? s.error || "采集未取得" : "";
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
					...k(o || c.isPending),
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
	let a = G(), { query: o, running: s, outcome: c, start: u } = H({
		queryKey: n,
		queryFn: ({ signal: e }) => N(e),
		start: () => O(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "amane 桥已重建");
		}
	}), m = U({ mutationFn: () => O(t, {}) }), _ = o.data;
	if (!_) return o.error ? /* @__PURE__ */ (0, X.jsx)(w, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, X.jsx)(E, { children: /* @__PURE__ */ (0, X.jsx)(b, {
			tone: "error",
			children: j(o.error)
		}) })
	}) : null;
	let v = s || u.isPending || m.isPending, x = u.error ? j(u.error) : m.error ? j(m.error) : c?.status === "failed" ? c.error || "重建未完成" : "";
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
				...k(m.isPending),
				children: a("检查上游版本")
			}), /* @__PURE__ */ (0, X.jsx)(i, {
				disabled: !!_.problem,
				onClick: () => {
					v || u.mutate();
				},
				...k(s || u.isPending),
				children: _.installed ? a("重新安装") : a("安装")
			})] })
		]
	});
}
function Ce({ toast: e }) {
	let t = G(), n = W({
		queryKey: C,
		queryFn: ({ signal: e }) => I(e)
	}), r = n.data;
	return r ? /* @__PURE__ */ (0, X.jsxs)(q, { children: [
		/* @__PURE__ */ (0, X.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: t("高清图片可能要经代理才能下载，先检查连接。")
		}),
		/* @__PURE__ */ (0, X.jsx)(xe, { toast: e }),
		/* @__PURE__ */ (0, X.jsx)(he, { receipt: e }),
		(r.sources || []).map((t) => /* @__PURE__ */ (0, X.jsx)(be, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ (0, X.jsx)(Se, { toast: e })
	] }) : /* @__PURE__ */ (0, X.jsx)(q, { children: /* @__PURE__ */ (0, X.jsx)(b, {
		tone: "error",
		title: t("采集来源读取失败"),
		children: n.error ? j(n.error) : t("读取采集来源失败")
	}) });
}
export { Ce as ScrapingPage, _e as linkHost, $ as networkOptions };

//# debugId=d0c7e310-5cd6-4714-b4cb-f7beb718cdb6