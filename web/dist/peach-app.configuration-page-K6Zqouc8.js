(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7ae20d1b-863c-4a3d-88e1-365f68c21ae7", e._sentryDebugIdIdentifier = "sentry-dbid-7ae20d1b-863c-4a3d-88e1-365f68c21ae7");
	} catch {}
})();
import { AnimatedItems as e, Cell as t, ChartBackground as n, ChartContainer as r, ChartLegend as i, ChartLegendContent as a, ChartTip as o, ChartTooltip as s, ChartTooltipContent as c, Curve as l, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as u, DATA_ITEM_INDEX_ATTRIBUTE_NAME as d, DefaultZIndexes as f, EvilBarChart as p, LabelList as m, LabelListFromLabelProp as h, Layer as g, LoadingIndicator as _, PolarChart as v, PolarLabelContextProvider as y, PolarLabelListContextProvider as b, RegisterGraphicalItemId as x, Sector as S, SetPolarGraphicalItem as C, SetPolarLegendPayload as w, SetTooltipEntrySettings as T, Shape as ee, TIP_SWATCH as te, Text as ne, ZIndexLayer as re, adaptEventsOfChild as ie, arrayTooltipSearcher as ae, createSelector as oe, defaultPolarChartProps as se, findAllByType as ce, get as le, getClassNameFromUnknown as ue, getColorsCount as de, getMaxRadius as fe, getPercentValue as pe, getTooltipNameProp as me, getValueByDataKey as he, interpolate as ge, isNumber as _e, matchAppend as ve, mathSign as ye, polarToCartesian as be, resolveDefaultProps as xe, selectActiveTooltipDataKey as Se, selectActiveTooltipGraphicalItemId as Ce, selectActiveTooltipIndex as we, selectChartDataAndAlwaysIgnoreIndexes as Te, selectChartOffsetInternal as Ee, selectUnfilteredPolarItems as De, svgPropertiesNoEvents as Oe, svgPropertiesNoEventsFromUnknown as ke, tone as Ae, useAnimationCallbacks as je, useAppSelector as Me, useMouseClickItemDispatch as Ne, useMouseEnterItemDispatch as Pe, useMouseLeaveItemDispatch as Fe, usePolarChartLayout as Ie } from "./peach-app.chart-tip-CvXosTpk.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as Le, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as Re, $542a13ca2fa5b484$export$5b6b19405a83ff9d as ze, $72abaeab4d80592f$export$78efe591171d7d45 as Be, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as Ve, $ea3928288112382f$export$439d29a4e110a164 as He, $f2ff30fde7b014be$export$3ddf2d174ce01153 as Ue, $fe21c36db05242bb$export$a98f0dcb43a68a25 as We, $fe21c36db05242bb$export$d7b12c4107be0d61 as Ge, ACCENTS as Ke, ApiError as qe, Button as E, ButtonLink as Je, CLOUD_LOCATIONS as Ye, CLOUD_PROXY_HELP as Xe, CONFIGURATION_KEY as Ze, CONFIGURATION_URL as Qe, CREDENTIAL_STATE as $e, Checkbox as et, Chip as tt, Disclosure as D, ENTRY_LINKS_HELP as nt, ENTRY_LINKS_HINT as rt, EmptyState as it, ErrorText as O, ExternalLink as k, FEED_SCHEDULE_KEY as at, FOLLOW_CREDENTIALS_KEY as ot, FOLLOW_INITIAL_RANGE_OPTIONS as st, FOLLOW_SCHEDULE_KEY as ct, Fact as A, FactList as lt, FieldLabel as ut, Footer as j, Help as M, HintText as dt, Input as N, LIBRARY_FOLDER_HELP as ft, LIBRARY_PROCESSING_KEY as pt, Label as mt, LinkButton as ht, LoadingDots as gt, M6 as _t, MEDIA_PROCESSING_KEY as vt, MEDIA_PROCESSING_URL as yt, MEDIA_SOURCE_ICONS as bt, MENU_POPOVER_SURFACE as xt, Note as P, PICK_FOLDER_URL as St, POLICY_COLUMNS as Ct, POLICY_COVER_NOTE as wt, POLICY_MATRIX as Tt, POLICY_SUMMARY as Et, PathLine as Dt, PillTabList as Ot, Progress as kt, Rows as F, SEGMENT as At, SEGMENTED_TRACK as jt, SETTINGS_KEY as Mt, SETTINGS_URL as Nt, Section as I, SectionSkeleton as Pt, SegmentedRadioGroup as Ft, Select as It, Select$1 as L, SelectItem as R, SettingsCard as Lt, SettingsRow as z, SiteLabel as Rt, SourceLabel as zt, SourceMark as Bt, Stack as B, StatusLabel as V, Switch as H, THUMBNAIL_JOBS_KEY as Vt, TaskCenterLink as Ht, TextField as Ut, TextFieldContext as Wt, __toESM as Gt, animate as Kt, apiGet as qt, apiSend as U, appSettingsStore as Jt, boundedPreference as Yt, busyProps as W, cardClass as Xt, cloudProxySkeleton as Zt, clsx as Qt, cn as $t, confirmModal as en, credentialDone as tn, credentialsSkeleton as nn, cx as rn, errorMessage as G, fetchConfiguration as an, fetchCredentials as on, fetchFeedSchedule as sn, fetchFollowSchedule as cn, fetchMediaProcessing as ln, fetchSettings as un, fetchThumbnailJobs as dn, fmtSize as K, indexersSkeleton as fn, javBrowserSkeleton as pn, momentText as mn, motion as hn, overlayHost as gn, peachHistory$1 as _n, previewLibraryColor as vn, providerIcon as yn, queryClient as bn, randomId as xn, rememberShape as Sn, require_jsx_runtime as Cn, require_react as wn, saveCredential as Tn, schedulePollInterval as En, settingsPath as Dn, shellNavigate as On, sortCx as kn, sourceDefaultCost as An, translate as q, useAction as J, useClientUpdates as jn, useLibraryTints as Mn, useMutation as Nn, useQuery as Y, useReducedMotion as Pn, useRunSchedule as Fn, useSaveFollowSchedule as In, useSaveSettings as Ln, useSaveThumbnailMode as Rn, useSystemTranslation as zn, useTranslation as X } from "./peach-app.js";
import { CodeBlock as Bn } from "./peach-app.code-block-BLPqm2xI.js";
import { FolderField as Vn, FolderFieldLine as Hn, FolderRow as Un, MEDIA_SOURCES as Wn, MediaReadPolicy as Gn, MediaReadPolicyHelp as Kn, SourceSelect as qn, isCloudSource as Jn, sourceMark as Yn, useFolderRows as Xn } from "./peach-app.folder-rows-BK9W3UH7.js";
import { ConnectionStatus as Zn } from "./peach-app.connection-status-Usa7d0Cc.js";
import { SourceIcon as Qn } from "./peach-app.source-view-BXb_-4C5.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ Gt(wn(), 1), $n = "flex flex-col gap-6";
function er(e) {
	return e ? {
		className: e.active ? `${$n} ui-board-group-active` : $n,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	} : { className: $n };
}
// src/react/settings/userscript-probe.ts
function tr() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = xn(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
var Q = Cn();
function nr(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function rr({ enabled: e, release: t }) {
	let n = X(), { frame: r, attempt: i, status: a, retry: o } = tr(), s = typeof a == "object", c = s && !nr(a.version, t.minimum_version), l = s && !nr(a.version, t.version), u = a === "checking" ? "progress" : a === "missing" ? "neutral" : c || l || !a.paired ? "warning" : "success", d = a === "checking" ? "检测中" : a === "missing" ? "未检测到" : c ? "需更新" : l ? "可更新" : a.paired ? "已连接" : "待配对", f = a === "checking" ? "checking" : a === "missing" ? "missing" : c ? "required" : l ? "available" : a.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("iframe", {
		ref: r,
		title: n("Peach 用户脚本检测"),
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, i), /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Xt({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: n("Peach 用户脚本")
				}), /* @__PURE__ */ (0, Q.jsx)(Zn, {
					tone: u,
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.${f}.status`,
						children: n(d)
					})
				})]
			}),
			s ? /* @__PURE__ */ (0, Q.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: [n("用户脚本 v"), a.version]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: n("浏览器添加")
				}), /* @__PURE__ */ (0, Q.jsx)(V, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: n(e ? "已启用" : "未启用")
					})
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				"data-copy-key": `userscript.${f}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: a === "checking" ? n("正在检测当前浏览器的用户脚本。") : a === "missing" ? n("确认脚本已启用并更新至最新版。Chrome 还需在 Tampermonkey 扩展详情中开启「允许用户脚本」或开发者模式，并允许访问当前 Peach 站点；刷新页面后重新检测。") : c ? n("请更新至 v{value0} 或更高版本。", { value0: String(t.minimum_version) }) : l ? n("用户脚本 v{value0} 可更新。", { value0: String(t.version) }) : a.paired ? n(e ? "可在支持的站点直接加入 Peach 馆藏。" : "启用浏览器添加后，可在支持的站点直接加入 Peach 馆藏。") : n("生成令牌后复制配对信息，在用户脚本设置中粘贴并保存。")
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					a === "missing" || c || l ? /* @__PURE__ */ (0, Q.jsx)(k, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": `userscript.${a === "missing" ? "install" : "update"}.action`,
							children: n(c || l ? "更新用户脚本" : "安装 Peach 用户脚本")
						})
					}) : null,
					a === "missing" ? /* @__PURE__ */ (0, Q.jsx)(k, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: n("Tampermonkey 权限设置说明")
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						...W(a === "checking"),
						onClick: o,
						children: n("重新检测")
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var ir = "/api/configuration/jav-browser";
function ar({ receipt: e, refreshKey: t }) {
	let n = X(), r = Y({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => qt(ir, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return r.error && !r.data ? /* @__PURE__ */ (0, Q.jsx)(O, { children: G(r.error) }) : r.isFetching && !r.data ? /* @__PURE__ */ (0, Q.jsx)(Pt, {
		label: n("正在读取浏览器添加设置"),
		html: pn
	}) : r.data ? /* @__PURE__ */ (0, Q.jsx)(or, {
		initial: r.data,
		receipt: e
	}) : null;
}
function or({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(e.provider), [s, c] = (0, Z.useState)(""), l = J();
	(0, Z.useEffect)(() => {
		Sn("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), i(e), o((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || c("");
	}, [e]);
	let u = (e) => {
		l.run(e, (t) => U(ir, {
			action: e,
			provider: a
		}, "POST", t), (n) => {
			let { token: r = "", ...a } = n;
			i(a), o(a.provider), c(r), t(e === "disable" ? "已关闭浏览器添加" : "已生成专用令牌");
		});
	}, d = r.providers.some((e) => e.key === a && e.configured && e.target);
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("浏览器添加 JAV"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(rr, {
					enabled: r.enabled,
					release: r.userscript
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ut, { children: n("浏览器添加的下载渠道") }), /* @__PURE__ */ (0, Q.jsx)(L, {
						"aria-label": n("浏览器添加的下载渠道"),
						selectedKey: a || null,
						placeholder: n("暂无可用渠道"),
						onSelectionChange: (e) => {
							e !== null && o(String(e));
						},
						isDisabled: !r.providers.length || !!l.busy,
						children: r.providers.map((e) => /* @__PURE__ */ (0, Q.jsx)(R, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, Q.jsx)(zt, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				d ? null : /* @__PURE__ */ (0, Q.jsx)(M, { children: n("请在媒体库中添加支持云下载的网盘，并配置账号与目标目录。") }),
				r.problems?.map((e) => /* @__PURE__ */ (0, Q.jsx)(M, { children: e }, e)),
				r.enabled && r.active_provider && !r.providers.some((e) => e.key === r.active_provider) ? /* @__PURE__ */ (0, Q.jsx)(M, { children: n("已启用的下载渠道不可用，请选择渠道并更新令牌。") }) : null,
				/* @__PURE__ */ (0, Q.jsx)(N, {
					label: n("Peach 地址"),
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				s ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					/* @__PURE__ */ (0, Q.jsx)(N, {
						label: n("浏览器添加专用令牌"),
						type: "password",
						value: s,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							l.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: s
							})), () => t("已复制配对信息"));
						},
						...W(l.busy === "copy"),
						children: n("复制配对信息")
					}) }),
					/* @__PURE__ */ (0, Q.jsx)(M, { children: n("在用户脚本设置的「Peach 地址」中粘贴配对信息，即可填好地址与令牌。") })
				] }) : null
			]
		}), l.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: l.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(j, { children: [r.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!l.busy,
			onClick: () => u("disable"),
			children: n("关闭浏览器添加")
		}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "button",
			disabled: !r.available || !d || !!l.busy,
			onClick: () => u(r.enabled ? "rotate" : "enable"),
			...W(l.busy === "enable" || l.busy === "rotate"),
			children: n(r.enabled ? "更新渠道与令牌" : "启用并生成令牌")
		})] })]
	});
}
// src/react/settings/download-settings.tsx
var sr = "/api/configuration/downloads", cr = "/api/configuration/downloads/check", lr = "/api/configuration/downloads/folder", ur = "/api/configuration/downloads/pikpak/login", dr = "/api/configuration/downloads/pikpak/logout", fr = "/api/configuration/downloads/pikpak/browser-login", pr = 2e3, mr = yn("pikpak");
function hr({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(n),
		children: [r, e ? /* @__PURE__ */ (0, Q.jsx)(gr, {
			initial: e,
			receipt: t
		}) : null]
	});
}
function gr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		r((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let o = n.media_sources ?? [], s = o.includes("pikpak"), c = o.some((e) => Ye.includes(e)), l = s && (n.pikpak.logged_in || !!i.trim());
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		c ? /* @__PURE__ */ (0, Q.jsx)(_r, {
			state: n,
			settle: r,
			receipt: t,
			pikpakAccount: l
		}) : null,
		s ? /* @__PURE__ */ (0, Q.jsx)(br, {
			state: n,
			settle: r,
			receipt: t,
			username: i,
			setUsername: a
		}) : null,
		/* @__PURE__ */ (0, Q.jsx)(ar, {
			receipt: t,
			refreshKey: JSON.stringify([
				n.media_sources,
				n.config,
				n.token_set,
				n.pikpak.logged_in
			])
		})
	] });
}
function _r({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let i = X(), [a, o] = (0, Z.useState)(e.config), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(String(e.config.wait_hours)), [d, f] = (0, Z.useState)(null), [p, m] = (0, Z.useState)(""), [h, g] = (0, Z.useState)(vr), [_, v] = (0, Z.useState)(""), [y, b] = (0, Z.useState)(!1), x = J(), S = e.media_sources ?? [], C = S.includes("115"), w = S.includes("pikpak"), T = (e) => a.targets[e] ?? "", ee = (e, t) => o({
		...a,
		targets: {
			...a.targets,
			[e]: t
		}
	}), te = C && !(!h.target || h.target.exists || T("115") !== h.target.path), ne = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), a = t.root ? e.suggested_pikpak_root : "";
		o((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: a || n.pikpak_root
		})), f(e), m(t.address ? e.address : ""), g({
			target: r,
			root: a,
			saved: i
		}), b(!1), v("");
	};
	return (0, Z.useEffect)(() => {
		if (!e.available || !e.config.clouddrive_address || !e.token_set) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		x.run("auto", (e) => qt(cr, e), (e) => ne(e, t), (e) => v(G(e)));
	}, []), /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: i("云下载"),
		onSubmit: (e) => {
			if (e.preventDefault(), te) {
				b(!0);
				return;
			}
			let i = !T("115").trim(), d = {
				...a,
				wait_hours: l,
				token: s,
				pikpak_account: r
			};
			x.run("save", (e) => U(sr, d, "POST", e), (e) => {
				let { report: r, ...a } = e;
				t(a), o(a.config), u(String(a.config.wait_hours)), c(""), r ? ne(r, {
					address: !a.config.clouddrive_address,
					target: i,
					root: !a.config.pikpak_root
				}, a.config.targets[115] ?? "") : (f(null), m(""), g(vr), b(!1), v("")), n("已保存配置");
			}, (e) => v(G(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: i("云下载配置需要检查"),
				children: e.problems.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(B, { children: [
				/* @__PURE__ */ (0, Q.jsx)(N, {
					label: i("CloudDrive2 地址"),
					placeholder: i("留空自动查找"),
					autoComplete: "off",
					maxLength: 200,
					value: a.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => o({
						...a,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(N, {
					label: i("CloudDrive2 API 令牌"),
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? i("已保存，留空不改") : i("在 CloudDrive2「设置 → API 令牌」中生成"),
					hint: i("需要离线任务权限。"),
					value: s,
					isDisabled: !e.available,
					onChange: c
				}),
				C ? /* @__PURE__ */ (0, Q.jsx)(N, {
					label: /* @__PURE__ */ (0, Q.jsx)(zt, {
						source: "115",
						label: i("115 目标目录")
					}),
					placeholder: i("留空时根据媒体库目录自动填写"),
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: te,
					hint: te ? y ? "先新建这个目录，或填写已有目录。" : "这个目录不存在。" : i("应位于自动入库的云端路径前缀内。"),
					value: T("115"),
					isDisabled: !e.available,
					onChange: (e) => ee("115", e)
				}) : null,
				w ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(N, {
					label: /* @__PURE__ */ (0, Q.jsx)(zt, {
						source: "pikpak",
						label: i("PikPak 目标目录")
					}),
					placeholder: i("以 / 开头的网盘路径"),
					autoComplete: "off",
					maxLength: 300,
					hint: i("目录要已经存在。"),
					value: T("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => ee("pikpak", e)
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ut, { children: /* @__PURE__ */ (0, Q.jsx)(zt, {
						source: "pikpak",
						label: i("PikPak 根目录对应的媒体目录")
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, Q.jsx)(L, {
						"aria-label": i("PikPak 根目录对应的媒体目录"),
						selectedKey: a.pikpak_root || null,
						isDisabled: !e.available,
						placeholder: i("检查时根据媒体库目录选择"),
						onSelectionChange: (e) => o({
							...a,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, Q.jsx)(R, {
							id: e,
							children: e
						}, e))
					}) : /* @__PURE__ */ (0, Q.jsx)(M, { children: i("先在「媒体库与入库」添加 PikPak 挂载文件夹。") })]
				})] }) : null,
				/* @__PURE__ */ (0, Q.jsx)(N, {
					label: i("等待上限（小时）"),
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: i("超时标为停滞；可填 1–{value0} 小时。", { value0: String(e.max_wait_hours) }),
					value: l,
					isDisabled: !e.available,
					onChange: u
				})
			] }),
			x.busy === "auto" ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(gt, { label: i("正在检查 CloudDrive2") })
			}) : null,
			d ? /* @__PURE__ */ (0, Q.jsx)(yr, {
				report: d,
				detected: p,
				suggested: h,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: a.clouddrive_address,
						token: s,
						path: e,
						pikpak_root: a.pikpak_root,
						pikpak_account: r
					};
					x.run("folder", (e) => U(lr, t, "POST", e), (t) => {
						f(t), g((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), b(!1), v(""), n("已新建目录");
					}, (e) => v(G(e)));
				} : void 0,
				creating: x.busy === "folder"
			}) : null,
			_ || x.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: _ || x.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(j, {
				status: e.available ? void 0 : "云下载只在允许修改数据库的设备上可用。",
				children: [/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !a.clouddrive_address.trim(),
							target: !T("115").trim(),
							root: !a.pikpak_root
						}, t = {
							clouddrive_address: a.clouddrive_address,
							token: s,
							target: T("115"),
							pikpak_root: a.pikpak_root,
							pikpak_account: r
						};
						x.run("check", (e) => U(cr, t, "POST", e), (t) => ne(t, e), (e) => v(G(e)));
					},
					disabled: !e.available,
					...W(x.busy === "check"),
					children: i("检查连接")
				}), /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !e.available,
					...W(x.busy === "save"),
					children: i("保存配置")
				})]
			})
		]
	});
}
var vr = {
	target: null,
	root: "",
	saved: !1
};
function yr({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = X(), o = n.target, s = !!(t || o || n.root || e.permissions.length || e.folder || e.quota);
	return !s && !e.problems.length ? null : /* @__PURE__ */ (0, Q.jsxs)(B, {
		divided: !0,
		children: [s ? /* @__PURE__ */ (0, Q.jsxs)(lt, { children: [
			t ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("CloudDrive2 地址"),
				children: a("探测到 {value0}，保存配置后生效", { value0: String(t) })
			}) : null,
			o?.exists ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: /* @__PURE__ */ (0, Q.jsx)(zt, {
					source: "115",
					label: a("115 目标目录")
				}),
				children: n.saved ? a("已根据媒体库目录填入 {value0}", { value0: String(o.path) }) : a("根据媒体库目录填入 {value0}，保存配置后生效", { value0: String(o.path) })
			}) : null,
			o && !o.exists ? /* @__PURE__ */ (0, Q.jsxs)(A, {
				term: /* @__PURE__ */ (0, Q.jsx)(zt, {
					source: "115",
					label: a("115 目标目录")
				}),
				children: [a("{value0} 不存在", { value0: String(o.path) }), r ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					size: "small",
					onClick: () => r(o.path),
					...W(i),
					children: a("新建这个目录")
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: /* @__PURE__ */ (0, Q.jsx)(zt, {
					source: "pikpak",
					label: a("PikPak 根目录")
				}),
				children: a("根据媒体库目录填入 {value0}，保存配置后生效", { value0: String(n.root) })
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("离线权限"),
				children: e.missing.length ? e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(tt, {
					variant: "caption",
					color: "yellow",
					children: a("缺 {value0}", { value0: String(e) })
				}, e)) : /* @__PURE__ */ (0, Q.jsx)(tt, {
					variant: "caption",
					color: "lime",
					children: a("齐全")
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("目标目录"),
				children: e.folder.can_offline ? a("{value0} 可以离线下载", { value0: String(e.folder.path) }) : a("{value0} 不支持离线下载", { value0: String(e.folder.path) })
			}) : null,
			e.quota ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: /* @__PURE__ */ (0, Q.jsx)(zt, {
					source: "115",
					label: a("115 离线配额")
				}),
				children: a("本月还剩 {value0} 条，共 {value1} 条", {
					value0: String(e.quota.left),
					value1: String(e.quota.total)
				})
			}) : null
		] }) : null, e.problems.map((e) => /* @__PURE__ */ (0, Q.jsx)(O, { children: e }, e))]
	});
}
function br({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let a = X(), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(!1), [u, d] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(""), g = J(), _ = e.pikpak, v = e.pikpak_browser, y = v.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!y) return;
		let e = new AbortController(), r, i = async () => {
			try {
				let r = await qt(fr, e.signal);
				if (e.signal.aborted || (t(r), r.pikpak_browser.state === "done" ? n("已登录 PikPak") : r.pikpak_browser.state !== "waiting" && h(r.pikpak_browser.message), r.pikpak_browser.state !== "waiting")) return;
			} catch (t) {
				if (e.signal.aborted) return;
				p(G(t));
			}
			r = setTimeout(i, pr);
		};
		return r = setTimeout(i, pr), () => {
			e.abort(), clearTimeout(r);
		};
	}, [y]);
	let b = () => {
		h(""), g.run("browser", (e) => U(fr, {}, "POST", e), (e) => {
			t(e), p("");
		}, (e) => p(G(e)));
	}, x = () => {
		g.run("cancel", (e) => U(`${fr}/cancel`, {}, "POST", e), (e) => {
			t(e), p(""), h(e.pikpak_browser.message);
		}, (e) => p(G(e)));
	}, S = (e) => {
		if (e.preventDefault(), _.logged_in) return;
		let i = {
			username: r,
			password: o,
			remember: c
		};
		g.run("login", (e) => U(ur, i, "POST", e), (e) => {
			t(e.settings), p(""), e.ok ? (d(""), s(""), n("已登录 PikPak")) : d(e.captcha_url ?? "");
		}, (e) => p(G(e)));
	}, C = () => {
		g.run("logout", (e) => U(dr, {}, "POST", e), (e) => {
			t(e), p(""), n("已登出 PikPak");
		}, (e) => p(G(e)));
	}, w = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(N, {
			label: a("账号"),
			placeholder: a("邮箱或手机号"),
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, Q.jsx)(N, {
			label: a("密码"),
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: o,
			isDisabled: !e.available,
			onChange: s
		}),
		/* @__PURE__ */ (0, Q.jsx)(et, {
			isSelected: c,
			isDisabled: !e.available,
			onChange: l,
			children: a("保存密码，登录过期时自动重新登录")
		}),
		u ? /* @__PURE__ */ (0, Q.jsx)(P, {
			tone: "warning",
			title: a("需要人机验证"),
			extra: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: u,
					children: a("打开 PikPak 验证页")
				})
			}),
			children: a("在浏览器里完成验证后，回到这里再点一次「登录」。")
		}) : null
	] }), T = /* @__PURE__ */ (0, Q.jsx)(E, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || y,
		...W(g.busy === "login"),
		children: a("登录")
	}), ee = v.state === "timeout" || v.state === "failed";
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: a("PikPak 账号"),
		icon: /* @__PURE__ */ (0, Q.jsx)(mr, {}),
		onSubmit: S,
		aside: /* @__PURE__ */ (0, Q.jsx)(V, {
			tone: _.logged_in ? "success" : y ? "progress" : ee ? "error" : "neutral",
			children: _.logged_in ? a("已登录") : a(y ? "等待登录" : ee ? "登录未完成" : "待登录")
		}),
		children: [
			_.logged_in ? /* @__PURE__ */ (0, Q.jsxs)(lt, { children: [/* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("账号"),
				children: _.username || a("已登录")
			}), _.method === "browser" ? /* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("登录方式"),
				children: a("浏览器登录，由 Peach 续期")
			}) : /* @__PURE__ */ (0, Q.jsx)(A, {
				term: a("密码"),
				children: _.remember ? a("已保存，登录过期时自动重新登录") : a("未保存，登录过期后需要回到这里重新登录")
			})] }) : /* @__PURE__ */ (0, Q.jsxs)(B, { children: [m ? ee ? /* @__PURE__ */ (0, Q.jsx)(O, { children: m }) : /* @__PURE__ */ (0, Q.jsx)(M, {
				role: "status",
				children: m
			}) : null, w] }),
			f || g.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: f || g.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, {
				status: !_.logged_in && y ? /* @__PURE__ */ (0, Q.jsx)(gt, { label: v.message || a("等你在浏览器窗口里登录 PikPak") }) : null,
				children: _.logged_in ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: C,
					disabled: !e.available,
					...W(g.busy === "logout"),
					children: a("登出")
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [v.available ? y ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: x,
					...W(g.busy === "cancel"),
					children: a("取消")
				}) : /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: b,
					disabled: !e.available,
					...W(g.busy === "browser"),
					children: a("用浏览器登录")
				}) : null, T] })
			})
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
function xr({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(!1), d = (0, Z.useMemo)(() => a ? JSON.stringify(a.data, null, 2) : "", [a]), f = J(), p = (e) => void f.run("save", (t) => U("/api/configuration/library-sharing", {
		enabled: e,
		schema: r.schema,
		consent: l,
		preview_token: a?.token
	}, "POST", t), (e) => {
		i(e), o(null), u(!1), c(!1), t("已保存馆藏与口味上传选项");
	}), m = () => {
		let e = URL.createObjectURL(new Blob([d], { type: "application/json" })), t = document.createElement("a");
		t.href = e, t.download = "peach-library-taste-preview.json", document.body.append(t);
		try {
			t.click();
		} finally {
			t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
			label: n("上传馆藏与口味明细"),
			description: r.notice,
			children: /* @__PURE__ */ (0, Q.jsx)(H, {
				"aria-label": n("上传馆藏与口味明细"),
				isSelected: r.enabled,
				onChange: (e) => e ? c(!0) : p(!1),
				...W(f.busy === "save")
			})
		}) }),
		r.available ? null : /* @__PURE__ */ (0, Q.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(V, { children: n("上传服务未配置") })
			})
		}),
		r.enabled && r.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, Q.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(V, {
					tone: r.last_attempt.attempted ? "error" : "warning",
					children: r.last_attempt.attempted ? n("上传失败") : n("待重新准备")
				})
			}), /* @__PURE__ */ (0, Q.jsx)(O, { children: r.last_attempt.attempted ? n("馆藏与口味上传失败，本周不再发送。") : n("馆藏与口味上传未完成，将自动重新准备。") })]
		}) : null,
		r.enabled && r.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, Q.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(V, { children: n("等待数据") })
			}), /* @__PURE__ */ (0, Q.jsx)(M, { children: n("等待可分析的馆藏或偏好数据。") })]
		}) : null,
		r.enabled && r.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, Q.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(V, {
					tone: "warning",
					children: n("结果未取得")
				})
			}), /* @__PURE__ */ (0, Q.jsx)(M, { children: n("未取得上传结果，本周不再发送。") })]
		}) : null,
		a ? /* @__PURE__ */ (0, Q.jsxs)(B, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
					n("当前预览包含 "),
					a.data.library.length,
					n(" 部有编号作品、"),
					a.data.coverage.uncoded_items,
					n(" 条无编号馆藏的汇总，约 "),
					(a.bytes / 1024).toFixed(1),
					n(" KiB。不含账号、设备、文件路径和浏览器历史记录等个人数据。")
				] }),
				/* @__PURE__ */ (0, Q.jsx)(D, {
					summary: n("上传数据预览"),
					defaultOpen: !0,
					children: /* @__PURE__ */ (0, Q.jsx)(Bn, {
						code: d,
						language: "json",
						label: n("馆藏与口味上传预览"),
						maxCharacters: 24e3
					})
				}),
				d.length > 24e3 ? /* @__PURE__ */ (0, Q.jsx)(M, { children: n("显示前 24,000 个字符，下载可查看完整内容。") }) : null,
				/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: m,
					children: n("下载完整预览")
				}),
				r.enabled ? null : /* @__PURE__ */ (0, Q.jsx)(et, {
					isSelected: l,
					onChange: u,
					children: n("我已查看上传预览，同意上传馆藏与口味明细")
				})
			]
		}) : null,
		f.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(O, { children: f.error })
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)(j, { children: [
			s && !r.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					c(!1), o(null), u(!1);
				},
				children: n("取消")
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					c(!0), f.run("preview", (e) => qt("/api/configuration/library-sharing/preview", e), (e) => {
						o(e), u(!1);
					});
				},
				...W(f.busy === "preview"),
				children: n("预览上传内容")
			}),
			!r.enabled && a ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "primary",
				disabled: !l,
				onClick: () => p(!0),
				...W(f.busy === "save"),
				children: n("同意并开启上传")
			}) : null
		] })
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function Sr({ value: e, onChange: t, busy: n = !1 }) {
	return X(), /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
		label: q("发送版本统计与错误诊断（推荐）"),
		description: q("上传版本、系统信息、故障类型、代码位置与发生次数。"),
		children: /* @__PURE__ */ (0, Q.jsx)(H, {
			"aria-label": q("发送版本统计与错误诊断（推荐）"),
			isSelected: e.usage && e.errors,
			onChange: (n) => t({
				...e,
				usage: n,
				errors: n
			}),
			...W(n)
		})
	}) }), e.available ? null : /* @__PURE__ */ (0, Q.jsx)(B, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "self-start",
			children: /* @__PURE__ */ (0, Q.jsx)(V, { children: q("上传服务未配置") })
		})
	})] });
}
function Cr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = J();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Sr, {
		value: n,
		busy: i.busy === "save",
		onChange: (e) => {
			i.run("save", (t) => U("/api/configuration/remote-reporting", {
				usage: e.usage,
				errors: e.errors
			}, "POST", t), (e) => {
				r(e), t("已保存诊断选项");
			});
		}
	}), i.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)(O, { children: i.error })
	}) : null] });
}
// src/react/components/animated-number.tsx
var wr = .6;
function Tr({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
	let r = Pn(), [i, a] = (0, Z.useState)(e), o = (0, Z.useRef)(e);
	return (0, Z.useEffect)(() => {
		if (r || o.current === e) {
			o.current = e, a(e);
			return;
		}
		let t = Kt(o.current, e, {
			duration: wr,
			ease: "easeOut",
			onUpdate: (e) => {
				o.current = e, a(e);
			}
		});
		return () => t.stop();
	}, [e, r]), /* @__PURE__ */ (0, Q.jsx)("span", {
		className: n ? `tabular-nums ${n}` : "tabular-nums",
		children: t(i)
	});
}
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function Er(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Dr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Er(Object(n), !0).forEach(function(t) {
			Or(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Er(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Or(e, t, n) {
	return (t = kr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function kr(e) {
	var t = Ar(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ar(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var jr = oe([De, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), Mr = [], Nr = (e, t, n) => n?.length === 0 ? Mr : n, Pr = oe([
	Te,
	jr,
	Nr
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => Dr(Dr({}, t.presentationProps), e.props))), i != null) return i;
	}
}), Fr = oe([
	Pr,
	jr,
	Nr
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = he(e, t.nameKey, t.name), o = n != null && (i = n[r]) != null && (i = i.props) != null && i.fill ? n[r].props.fill : typeof e == "object" && e && "fill" in e ? e.fill : t.fill;
		return {
			value: me(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), Ir = oe([
	Pr,
	jr,
	Nr,
	Ee
], (e, t, n, r) => {
	if (t != null && e != null) return si({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), Lr = ["key"], Rr = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], zr = ["id"], Br = ["id"];
function Vr() {
	return Vr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Vr.apply(null, arguments);
}
function Hr(e, t) {
	if (e == null) return {};
	var n, r, i = Ur(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ur(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Wr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Wr(Object(n), !0).forEach(function(t) {
			Gr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Gr(e, t, n) {
	return (t = Kr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kr(e) {
	var t = qr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Jr = S;
function Yr(e) {
	var n = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), r = Me((t) => Fr(t, e.id, n));
	return r == null ? null : /*#__PURE__*/ Z.createElement(w, { legendPayload: r });
}
function Xr(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var Zr = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = Xr(f), m = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return p == null || t == null ? t : t.map((e) => $($({}, e), {}, {
				color: p,
				fill: p
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: me(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(T, { tooltipEntrySettings: m });
}), Qr = (e, t) => e > t ? "start" : e < t ? "end" : "middle", $r = (e, t, n) => pe(typeof t == "function" ? t(e) : t, n, n * .8), ei = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = fe(a, o);
	return {
		cx: i + pe(e.cx, a, a / 2),
		cy: r + pe(e.cy, o, o / 2),
		innerRadius: pe(e.innerRadius, s, 0),
		outerRadius: $r(n, e.outerRadius, s),
		maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2
	};
}, ti = (e, t) => ye(t - e) * Math.min(Math.abs(t - e), 360), ni = (e, t) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = Qt("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = Hr(t, Lr);
	return /*#__PURE__*/ Z.createElement(l, Vr({}, r, {
		type: "linear",
		className: n
	}));
}, ri = (e, t, n) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var r = n;
	if (typeof e == "function" && (r = e(t), /*#__PURE__*/ Z.isValidElement(r))) return r;
	var i = Qt("recharts-pie-label-text", ue(e));
	return /*#__PURE__*/ Z.createElement(ne, Vr({}, t, {
		alignmentBaseline: "middle",
		className: i
	}), r);
};
function ii(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label, a = n.labelLine, o = n.dataKey;
	if (!r || !i || !t) return null;
	var s = Oe(n), c = ke(i), l = ke(a), u = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, d = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = be(e.cx, e.cy, e.outerRadius + u, n), d = $($($($({}, s), e), {}, { stroke: "none" }, c), {}, {
			index: t,
			textAnchor: Qr(r.x, e.cx)
		}, r), p = $($($($({}, s), e), {}, {
			fill: "none",
			stroke: e.fill
		}, l), {}, {
			index: t,
			points: [be(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(re, {
			zIndex: f.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ Z.createElement(g, null, a && ni(a, p), ri(i, d, he(e, o))));
	});
	return /*#__PURE__*/ Z.createElement(g, { className: "recharts-pie-labels" }, d);
}
function ai(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(h, { label: i }) : /*#__PURE__*/ Z.createElement(ii, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function oi(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, f = Me(we), p = Me(Se), m = Me(Ce), h = i.onMouseEnter, _ = i.onClick, v = i.onMouseLeave, y = Hr(i, Rr), b = Pe(h, i.dataKey, o), x = Fe(v), S = Ne(_, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, h) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var _ = m == null || m === o, v = String(h) === f && (p == null || i.dataKey === p) && _, C = n && v ? n : f ? r : null, w = $($({}, e), {}, {
			stroke: e.stroke,
			tabIndex: -1,
			index: h,
			isActive: v,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[d]: h,
			[u]: o
		});
		return /*#__PURE__*/ Z.createElement(g, Vr({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${h}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, ie(y, e, h), {
			onMouseEnter: b(e, h),
			onMouseLeave: x(e, h),
			onClick: S(e, h)
		}), /*#__PURE__*/ Z.createElement(ee, {
			option: C ?? a,
			DefaultShape: Jr,
			shapeProps: w
		}));
	}));
}
function si(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = ti(o, s), p = Math.abs(f), m = n.length <= 1 ? 0 : t.paddingAngle ?? 0, h = n.filter((e) => he(e, c, 0) !== 0).length, g = (p >= 360 ? h : h - 1) * m, _ = n.reduce((e, t) => {
		var n = he(t, c, 0);
		return e + (_e(n) ? n : 0);
	}, 0), v = d > 0 && _ > 0 && n.some((e) => {
		var t = he(e, c, 0), n = (_e(t) ? t : 0) / _;
		return t !== 0 && n * p < d;
	}) ? d : 0, y = p - h * v - g, b;
	if (_ > 0) {
		var x;
		b = n.map((e, n) => {
			var s = he(e, c, 0), d = he(e, l, n), p = ei(t, i, e), h = (_e(s) ? s : 0) / _, g, b = $($({}, e), r && r[n] && r[n].props), S = b != null && "fill" in b && typeof b.fill == "string" ? b.fill : t.fill;
			g = n ? x.endAngle + ye(f) * m * (s === 0 ? 0 : 1) : o;
			var C = g + ye(f) * ((s === 0 ? 0 : v) + h * y), w = (g + C) / 2, T = (p.innerRadius + p.outerRadius) / 2, ee = [{
				name: d,
				value: s,
				payload: b,
				dataKey: c,
				type: u,
				color: S,
				fill: S,
				graphicalItemId: t.id
			}], te = be(p.cx, p.cy, T, w);
			return x = $($($($({}, t.presentationProps), {}, {
				percent: h,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: ee,
				midAngle: w,
				middleRadius: T,
				tooltipPosition: te
			}, b), p), {}, {
				value: s,
				dataKey: c,
				startAngle: g,
				endAngle: C,
				payload: b,
				paddingAngle: s === 0 ? 0 : ye(f) * m
			}), x;
		});
	}
	return b;
}
function ci(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, Z.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	})), [n, t]);
	return /*#__PURE__*/ Z.createElement(b, { value: t ? i : void 0 }, r);
}
var li = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			var a = r > 0 ? le(e.next, "paddingAngle", 0) : 0;
			if (e.status === "matched") {
				var o = ge(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = ge(0, e.next.endAngle - e.next.startAngle, t), l = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + c + a
				});
				n.push(l), i = l.endAngle;
			}
		}
	}), n;
};
function ui(t) {
	var n = t.props, r = t.previousSectorsRef, i = t.id, a = n.sectors, o = n.activeShape, s = n.inactiveShape, c = n.animationInterpolateFn, l = je(n.onAnimationStart, n.onAnimationEnd), u = l.isAnimating, d = l.handleAnimationStart, f = l.handleAnimationEnd, p = Ie();
	if (p == null) return null;
	var m = a[0];
	return /*#__PURE__*/ Z.createElement(ci, {
		showLabels: !u,
		sectors: a
	}, /*#__PURE__*/ Z.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-pie-",
		items: a,
		previousItemsRef: r,
		isAnimationActive: n.isAnimationActive,
		animationBegin: n.animationBegin,
		animationDuration: n.animationDuration,
		animationEasing: n.animationEasing,
		onAnimationStart: d,
		onAnimationEnd: f,
		animationInterpolateFn: c,
		animationMatchBy: n.animationMatchBy,
		layout: p
	}, (e, t, r) => /*#__PURE__*/ Z.createElement(g, null, /*#__PURE__*/ Z.createElement(oi, {
		sectors: e,
		activeShape: o,
		inactiveShape: s,
		allOtherPieProps: n,
		shape: n.shape,
		id: i,
		animationElapsedTime: t,
		isAnimating: u || t < 1,
		isEntrance: r
	}))), /*#__PURE__*/ Z.createElement(ai, {
		showLabels: !u,
		sectors: a,
		props: n
	}), /*#__PURE__*/ Z.createElement(y, {
		cx: m?.cx ?? 0,
		cy: m?.cy ?? 0,
		innerRadius: m?.innerRadius ?? 0,
		outerRadius: m?.outerRadius ?? 0,
		startAngle: n.startAngle,
		endAngle: n.endAngle,
		clockWise: !1
	}, n.children));
}
var di = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: li,
	animationMatchBy: ve,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: Jr,
	startAngle: 0,
	stroke: "#fff",
	zIndex: f.area
};
function fi(e) {
	var n = e.id, r = Hr(e, zr), i = e.hide, a = e.className, o = e.rootTabIndex, s = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), c = Me((e) => Ir(e, n, s)), l = (0, Z.useRef)(null), u = Qt("recharts-pie", a);
	return i || c == null ? (l.current = null, /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	})) : /*#__PURE__*/ Z.createElement(re, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(Zr, {
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: c,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		fill: e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: n,
		activeShape: e.activeShape
	}), /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	}, /*#__PURE__*/ Z.createElement(ui, {
		props: $($({}, r), {}, { sectors: c }),
		previousSectorsRef: l,
		id: n
	})));
}
function pi(e) {
	var t = xe(e, di), n = t.id, r = Hr(t, Br), i = Oe(r);
	return /*#__PURE__*/ Z.createElement(x, {
		id: n,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(C, {
		type: "pie",
		id: e,
		data: r.data,
		dataKey: r.dataKey,
		hide: r.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: r.name,
		nameKey: r.nameKey,
		tooltipType: r.tooltipType,
		legendType: r.legendType,
		fill: r.fill,
		cx: r.cx,
		cy: r.cy,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		paddingAngle: r.paddingAngle,
		minAngle: r.minAngle,
		innerRadius: r.innerRadius,
		outerRadius: r.outerRadius,
		cornerRadius: r.cornerRadius,
		presentationProps: i,
		maxRadius: t.maxRadius
	}), /*#__PURE__*/ Z.createElement(Yr, Vr({}, r, { id: e })), /*#__PURE__*/ Z.createElement(fi, Vr({}, r, { id: e }))));
}
var mi = pi;
mi.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function hi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function gi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? hi(Object(n), !0).forEach(function(t) {
			_i(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function _i(e, t, n) {
	return (t = vi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function vi(e) {
	var t = yi(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function yi(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var bi = ["item"], xi = gi(gi({}, se), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), Si = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = xe(e, xi);
	return /*#__PURE__*/ Z.createElement(v, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: bi,
		tooltipPayloadSearcher: ae,
		categoricalChartProps: n,
		ref: t
	});
}), Ci = 5, wi = 2e3, Ti = 0, Ei = "80%", Di = 0, Oi = 0, ki = 0, Ai = 360, ji = [], Mi = (0, Z.createContext)(null);
function Ni() {
	let e = (0, Z.use)(Mi);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function Pi({ config: e, data: t, dataKey: n, nameKey: i, children: a, className: o, chartProps: s, defaultSelectedSector: c = null, onSelectionChange: l, isLoading: u = !1 }) {
	let [d, f] = (0, Z.useState)(c), p = (0, Z.useCallback)((e) => {
		if (f(e), e === null) {
			l?.(null);
			return;
		}
		let r = t.find((t) => t[i] === e);
		r && l?.({
			dataKey: e,
			value: r[n]
		});
	}, [
		t,
		n,
		i,
		l
	]), m = (0, Z.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: i,
		isLoading: u,
		selectedSector: d,
		selectSector: p
	}), [
		e,
		t,
		n,
		i,
		u,
		d,
		p
	]);
	return /* @__PURE__ */ (0, Q.jsx)(Mi, {
		value: m,
		children: /* @__PURE__ */ (0, Q.jsxs)(r, {
			className: o,
			config: e,
			children: [/* @__PURE__ */ (0, Q.jsx)(_, { isLoading: u }), /* @__PURE__ */ (0, Q.jsx)(Si, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...s,
				children: a
			})]
		})
	});
}
function Fi({ variant: e = "gradient", innerRadius: t = Ti, outerRadius: n = Ei, cornerRadius: r = Di, paddingAngle: i = Oi, startAngle: a = ki, endAngle: o = Ai, isClickable: s = !1, glowingSectors: c = ji, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Ni(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, Q.jsx)(mi, {
		data: Ui,
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
		shape: (e) => /* @__PURE__ */ (0, Q.jsx)(Wi, { ...e })
	});
	let y = Bi(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(mi, {
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, Q.jsx)(S, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
	}), /* @__PURE__ */ (0, Q.jsxs)("defs", { children: [/* @__PURE__ */ (0, Q.jsx)(Vi, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, Q.jsx)(Hi, {
		id: v,
		glowingSectors: c
	})] })] });
}
var Ii = () => null;
function Li({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Ni();
	return r ? null : /* @__PURE__ */ (0, Q.jsx)(s, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, Q.jsx)(c, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function Ri({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: o, selectedSector: s, selectSector: c } = Ni();
	return /* @__PURE__ */ (0, Q.jsx)(i, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Q.jsx)(a, {
			selected: s,
			onSelectChange: c,
			isClickable: r,
			nameKey: o,
			variant: e
		})
	});
}
function zi({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, Q.jsx)(n, { variant: e });
}
var Bi = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== Ii) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, Q.jsx)(m, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, Vi = ({ id: e, config: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = de(n);
	return /* @__PURE__ */ (0, Q.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Q.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), Hi = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, Q.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, Q.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, Q.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, Q.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), Ui = Array.from({ length: Ci }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / Ci
})), Wi = (e) => {
	let { index: t = 0, ...n } = e, r = t / Ci * (wi / 1e3);
	return /* @__PURE__ */ (0, Q.jsx)(hn.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: wi / 1e3,
			delay: r,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, Q.jsx)(S, {
			...n,
			fill: "currentColor"
		})
	});
};
Pi.Pie = Fi, Pi.Label = Ii, Pi.Tooltip = Li, Pi.Legend = Ri, Pi.Background = zi;
// src/react/settings/storage-charts.tsx
var Gi = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	sources: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	tools: "var(--color-chart-9)"
}, Ki = "var(--color-text-tertiary)", qi = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	sources: "bg-chart-7",
	records: "bg-chart-8",
	tools: "bg-chart-9"
}, Ji = (e) => K(e);
function Yi(e) {
	let t = e.filter((e) => Gi[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: Gi[e.key]
	})), n = e.filter((e) => !Gi[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: "其余",
		bytes: n,
		color: Ki
	}] : t;
}
function Xi({ storage: e }) {
	let t = X(), n = e.usage, r = Yi(n.categories), i = Object.fromEntries(r.map((e) => [e.key, {
		label: e.label,
		colors: Ae(e.color)
	}])), a = r.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": t("数据目录共 {value0}，各类占比", { value0: String(Ji(n.total_bytes)) }),
			children: [/* @__PURE__ */ (0, Q.jsxs)(Pi, {
				data: a,
				dataKey: "value",
				nameKey: "slice",
				config: i,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, Q.jsx)(Pi.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, Q.jsx)(o, {
					nameKey: "slice",
					hideLabel: !0,
					format: Ji
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, Q.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: Ji(n.total_bytes)
				}), /* @__PURE__ */ (0, Q.jsxs)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: [n.total_files.toLocaleString(), t(" 个文件")]
				})]
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": t("图例"),
				children: r.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `${te} ${qi[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: Ji(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, Q.jsx)(Zi, { storage: e })]
		})]
	});
}
function Zi({ storage: e }) {
	let t = X();
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let n = Math.min(e.usage.total_bytes, e.total_bytes), r = e.free_bytes, i = Math.max(0, e.total_bytes - r - n), a = {
		peach: {
			label: "Peach 数据",
			colors: Ae("var(--color-border-focus-ring)")
		},
		others: {
			label: "其他文件",
			colors: Ae(Ki)
		},
		free: {
			label: "可用",
			colors: Ae("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: [
				t("所在磁盘共 "),
				Ji(e.total_bytes),
				e.system_drive ? t("（系统盘）") : "",
				t("，Peach 占 "),
				((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? "不到 0.1%" : `${n.toFixed(+(n < 10))}%`;
				})(n),
				t("， 可用 "),
				Ji(r)
			]
		}), /* @__PURE__ */ (0, Q.jsxs)(p, {
			data: [{
				disk: "磁盘",
				peach: n,
				others: i,
				free: r
			}],
			config: a,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(p.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, Q.jsx)(p.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, Q.jsx)(o, {
					hideLabel: !0,
					format: Ji
				})
			]
		})]
	});
}
// src/react/settings/storage-settings.tsx
var Qi = "/api/configuration/storage", $i = 1500, ea = 864e5, ta = (e) => e instanceof qe && e.body?.errors?.target || G(e);
function na(e) {
	if (e.free_bytes === null || e.total_bytes === null) return "未取得";
	let t = `${K(e.free_bytes)} 可用，共 ${K(e.total_bytes)}`;
	return e.system_drive ? `${t}（系统盘）` : t;
}
var ra = (e) => e.cleanable && e.reclaimable > 0;
function ia({ job: e }) {
	let t = X(), n = e.files || 0, r = e.expected_files || 0, i = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		t("已统计 "),
		/* @__PURE__ */ (0, Q.jsx)(Tr, { value: n }),
		t(" 个文件 · "),
		/* @__PURE__ */ (0, Q.jsx)(Tr, {
			value: e.bytes || 0,
			format: K
		})
	] });
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(kt, {
			label: t("统计进度"),
			value: Math.min(n, r * .99),
			max: r
		}), /* @__PURE__ */ (0, Q.jsxs)(M, { children: [
			i,
			t("，上次共 "),
			r.toLocaleString(),
			t(" 个")
		] })] }) : /* @__PURE__ */ (0, Q.jsx)(gt, { label: t("正在统计占用空间") }), r ? null : /* @__PURE__ */ (0, Q.jsx)(M, { children: i })]
	});
}
function aa({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = X(), a = ra(e), o = e.cleanable ? e.reclaimable > 0 ? `清理后${e.note}` : "没有可以清理的文件" : `不能清理：${e.note}`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(et, {
				"aria-label": i("清理{value0}", { value0: i(e.label) }),
				isSelected: t,
				isDisabled: !a || n,
				onChange: r,
				className: "mt-0.5"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${qi[e.key] || "bg-text-tertiary"}`
						}), e.label]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-tertiary",
						children: o
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, Q.jsx)(Tr, {
					value: e.bytes,
					format: K,
					className: "text-body-regular text-text-primary"
				}), a ? /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: [i("可释放 "), K(e.reclaimable)]
				}) : null]
			})
		]
	});
}
function oa({ initial: e, receipt: t }) {
	let n = zn(), r = X(), [i, a] = (0, Z.useState)(e), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(/* @__PURE__ */ new Set()), u = J(), d = i.job.state !== "idle", f = (0, Z.useRef)(d);
	(0, Z.useEffect)(() => {
		if (!d) return;
		let e = new AbortController(), t = setTimeout(() => {
			qt(Qi, e.signal).then(a, () => {
				e.signal.aborted || a((e) => ({ ...e }));
			});
		}, $i);
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [i]), (0, Z.useEffect)(() => {
		d ? f.current = !0 : f.current && (f.current = !1, l(/* @__PURE__ */ new Set()), i.job.error || t(i.job.message || "已统计占用空间"));
	}, [d]);
	let p = () => void u.run("measure", (e) => U(`${Qi}/measure`, {}, "POST", e), a), m = i.usage, h = m?.categories.filter(ra) ?? [], g = h.filter((e) => c.has(e.key)), _ = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		en({
			title: t,
			body: `将删除 ${K(n)}：${e.map((e) => `${e.label} ${K(e.reclaimable)}（清理后${e.note}）`).join("；")}。`,
			confirmLabel: `清理 ${K(n)}`,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => a(await U(`${Qi}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, v = () => void u.run("relocate", async (e) => {
		let t = (await U(St, { initial: i.data_root }, "POST", e)).path;
		if (!t) return;
		let n = i.usage ? K(i.usage.total_bytes) : "";
		await en({
			title: "迁移数据目录",
			body: `将 ${n} 数据从 ${i.data_root} 移到 ${t}。迁移期间 Peach 会退出，完成后自动重新打开；原位置的数据在新位置核对无误后删除。`,
			confirmLabel: "迁移数据目录",
			onConfirm: async () => {
				try {
					s((await U(`${Qi}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(ta(e));
				}
			}
		});
	}, () => void 0), y = i.relocation.last, b = y && (y.state === "error" || (y.notes?.length ?? 0) > 0 || Date.now() - y.finished_at * 1e3 < ea), x = m?.categories.find((e) => e.key === i.job.category)?.label, S = o || (i.job.state === "cleaning" ? `正在清理${x || ""}…` : i.job.state === "measuring" ? "正在统计占用空间…" : g.length ? `已选 ${g.length} 类，可释放 ${K(g.reduce((e, t) => e + t.reclaimable, 0))}` : m ? `统计于 ${(/* @__PURE__ */ new Date(m.measured_at * 1e3)).toLocaleString()}` : ""), C = d || !!o, w = (e) => (t) => l((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "storageSettings",
		title: r("存储空间"),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(lt, { children: [/* @__PURE__ */ (0, Q.jsx)(A, {
				term: r("数据目录"),
				children: /* @__PURE__ */ (0, Q.jsx)(Dt, {
					path: i.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, Q.jsx)(A, {
				term: r("所在磁盘"),
				children: n(na(i))
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)(B, {
				divided: !0,
				children: [
					i.job.state === "measuring" ? /* @__PURE__ */ (0, Q.jsx)(ia, { job: i.job }) : null,
					m ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-storage-result": "",
						className: Xt({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, Q.jsx)(Xi, { storage: i })
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-col pl-4",
							children: m.categories.map((e) => /* @__PURE__ */ (0, Q.jsx)(aa, {
								category: e,
								selected: c.has(e.key),
								disabled: C,
								onToggle: w(e.key)
							}, e.key))
						})]
					}) : i.job.state === "measuring" ? null : /* @__PURE__ */ (0, Q.jsx)(M, { children: r("统计后显示各类数据的占用，并可清理缓存与旧备份。") }),
					i.relocation.available ? null : /* @__PURE__ */ (0, Q.jsx)(M, { children: i.relocation.message }),
					!i.relocation.available && i.relocation.steps?.length ? /* @__PURE__ */ (0, Q.jsx)("ol", {
						className: "flex list-decimal flex-col gap-2 pl-5 text-body-2-regular text-text-secondary",
						"aria-label": r("在宿主机上迁移"),
						children: i.relocation.steps.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", { children: [e.text, /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "mt-1 block rounded-md bg-background-tertiary-default px-2 py-1 text-caption-1-regular break-all text-text-primary",
							children: e.command
						})] }, e.command))
					}) : null,
					i.job.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: i.job.message }) : null,
					u.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: u.error }) : null,
					b && y ? y.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(O, { children: y.message }) : /* @__PURE__ */ (0, Q.jsx)(M, { children: [y.message, ...y.notes ?? []].join("；") }) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(j, {
				status: S ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: o ? "status" : void 0,
					children: S
				}) : null,
				children: [
					m ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: C || !g.length,
						...W(i.job.state === "cleaning" && g.length > 0),
						onClick: () => _(g, "清理所选数据"),
						children: r("清理所选")
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: C || !h.length,
						onClick: () => _(h, "清理全部可清理的数据"),
						children: r("全部清理")
					})] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: C || !i.relocation.available || !m,
						onClick: v,
						...W(u.busy === "relocate"),
						children: r("更改位置")
					}),
					/* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: !!o || i.job.state === "cleaning",
						onClick: p,
						...W(u.busy === "measure" || i.job.state === "measuring"),
						children: r(m ? "重新统计" : "统计占用")
					})
				]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var sa = [
	["6", "每 6 小时"],
	["24", "每天"],
	["168", "每周"]
];
function ca({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	let i = X();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(oa, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.remote_reporting || e.library_sharing ? /* @__PURE__ */ (0, Q.jsxs)(I, {
				id: "librarySharing",
				title: i("数据上传"),
				children: [e.remote_reporting ? /* @__PURE__ */ (0, Q.jsx)(Cr, {
					initial: e.remote_reporting,
					receipt: t
				}) : null, e.library_sharing ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "border-t border-separator-border",
					children: /* @__PURE__ */ (0, Q.jsx)(xr, {
						initial: e.library_sharing,
						receipt: t
					})
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(da, { facts: e.facts }),
			/* @__PURE__ */ (0, Q.jsx)(la, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, Q.jsx)(fa, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function la({ receipt: e, reopenTutorial: t }) {
	let n = X(), r = J();
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		"aria-label": n("安装教程"),
		className: "w-full",
		children: /* @__PURE__ */ (0, Q.jsxs)(Lt, { children: [/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
			label: n("安装教程"),
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void r.run("reopen", () => t(), () => e("已重新打开安装教程")),
				...W(r.busy === "reopen"),
				children: n("重新打开教程")
			})
		}) }), r.error ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(O, { children: r.error }) }) : null] })
	});
}
function ua({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e.mode), [a, o] = (0, Z.useState)(e.interval_hours), s = J(e.error), c = (n) => {
		n.preventDefault(), e.available && s.run("save", (e) => U("/api/configuration/automatic-updates", {
			mode: r,
			interval_hours: a
		}, "POST", e), () => t("已保存配置"));
	}, l = e.available ? e.download_available ? "下载完成后在这里确认重启安装。" : void 0 : "自动更新需要由托盘管理的服务。";
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "automaticUpdates",
		title: n("自动更新"),
		onSubmit: c,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(F, { children: [
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("自动检查新版本"),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("自动检查新版本"),
						isSelected: r !== "off",
						isDisabled: !e.available,
						onChange: (e) => i(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("自动下载更新"),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("自动下载更新"),
						isSelected: r === "download",
						isDisabled: !e.available || !e.download_available || r === "off",
						onChange: (e) => i(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("检查频率"),
					description: l,
					children: /* @__PURE__ */ (0, Q.jsx)(L, {
						"aria-label": n("检查频率"),
						selectedKey: String(a),
						isDisabled: !e.available,
						onSelectionChange: (e) => {
							e !== null && o(Number(e));
						},
						children: sa.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(R, {
							id: e,
							children: n(t)
						}, e))
					})
				})
			] }),
			s.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: s.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...W(s.busy === "save"),
				children: n("保存配置")
			}) })
		]
	});
}
function da({ facts: e }) {
	let t = X(), n = zn();
	return /* @__PURE__ */ (0, Q.jsx)(I, {
		title: t("运行信息"),
		children: /* @__PURE__ */ (0, Q.jsx)(lt, { children: e.map((e) => /* @__PURE__ */ (0, Q.jsxs)(A, {
			term: t(e.term),
			children: [n(e.value), e.download_url ? /* @__PURE__ */ (0, Q.jsx)(k, {
				href: e.download_url,
				children: t(e.download_label || "")
			}) : null]
		}, e.term)) })
	});
}
function fa({ uninstall: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(!1), [a, o] = (0, Z.useState)(""), s = () => void en({
		title: "卸载 Peach",
		danger: !0,
		body: r ? "将退出 Peach，移除程序、开机自启、桌面图标、设置、本地数据库、观看记录、凭据和缓存。原始媒体文件保留。" : "将退出 Peach 并移除程序、开机自启和桌面图标。设置、本地数据库、观看记录与缓存保留。",
		confirmLabel: "卸载 Peach",
		onConfirm: async () => {
			let e = await U("/api/configuration/uninstall", {
				delete_data: r,
				confirmation: "卸载 Peach"
			});
			o(e.message);
		}
	}), c = a || e.message, l = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "uninstallPeach",
		title: n("卸载 Peach"),
		children: [
			e.available ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(M, { children: n("卸载移除 Peach 程序本身，原始媒体文件保留。") }) }) : null,
			/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
				label: n("完全卸载"),
				description: n("同时删除设置、本地数据库、观看记录、凭据和缓存"),
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					"aria-label": n("完全卸载"),
					isSelected: r,
					isDisabled: !e.full_available || !!a,
					onChange: i
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(D, {
					summary: n("数据目录"),
					children: l.map((e) => /* @__PURE__ */ (0, Q.jsx)(Dt, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(j, {
				status: c ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: a ? "status" : void 0,
					children: n(c)
				}) : null,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: !e.available || !!a,
					onClick: s,
					children: n("卸载 Peach")
				})
			})
		]
	});
}
// src/react/settings/release-updates.tsx
var pa = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), ma = [
	65,
	75,
	90
], ha = 120, ga = "https://github.com/peach-mitao/peach/releases";
function _a({ initial: e, initialJob: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), [s, c] = (0, Z.useState)(""), l = J(), u = (0, Z.useRef)(!1), d = (0, Z.useRef)(!0), f = pa.has(a.state);
	(0, Z.useEffect)(() => (d.current = !0, () => {
		d.current = !1;
	}), []);
	let p = async () => {
		let e = await U("/api/configuration/update-restart", {});
		d.current && o(e);
	}, m = () => void en({
		title: "更新已准备好",
		body: `Peach ${a.version || ""} 将在重启后安装。`,
		confirmLabel: "立即重启",
		cancelLabel: "稍后",
		onConfirm: p
	});
	(0, Z.useEffect)(() => {
		a.state !== "ready" || u.current || (u.current = !0, m());
	}, [a.state]), (0, Z.useEffect)(() => {
		let e = new AbortController(), t = pa.has(a.state) ? 1e3 : 3e4, n, r = 0, s = async () => {
			try {
				let t = await qt("/api/configuration/update-status", e.signal);
				if (e.signal.aborted) return;
				o(t), r = 0, t.state === "complete" && i((e) => ({
					...e,
					current_version: t.version || e.current_version,
					state: "current",
					message: "已是最新测试版。"
				}));
				let n = await qt("/api/configuration/automatic-updates", e.signal);
				!e.signal.aborted && n.result && i(n.result);
			} catch {
				r += 1, r >= ha && !e.signal.aborted && c("尚未连接到 Peach，请检查托盘后刷新页面。");
			}
			!e.signal.aborted && r < ha && (n = setTimeout(s, t));
		};
		return n = setTimeout(s, t), () => {
			e.abort(), clearTimeout(n);
		};
	}, [a.state]);
	let h = () => {
		f || (u.current = !1, c(""), l.run("download", (e) => U("/api/configuration/update", {}, "POST", e), o));
	}, g = () => void l.run("check", (e) => qt("/api/configuration/updates", e), i, (t) => {
		i({
			...e,
			state: "error"
		}), l.setError(G(t));
	}), _ = l.error || s, v = a.state === "downloading" && a.total ? `${((a.downloaded || 0) / 1048576).toFixed(1)} / ${(a.total / 1048576).toFixed(1)} MB` : `${a.progress}%`;
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "releaseUpdates",
		title: n("检查更新"),
		aside: /* @__PURE__ */ (0, Q.jsx)(V, {
			tone: _ || r.state === "error" || a.state === "error" ? "error" : f ? "progress" : r.state === "available" ? "warning" : r.state === "unchecked" ? "neutral" : "success",
			children: _ || r.state === "error" || a.state === "error" ? n("检查未完成") : f ? n("准备更新中") : a.state === "ready" ? n("可安装") : r.state === "available" ? n("有可用更新") : r.state === "unchecked" ? n("尚未检查") : n("检查完成")
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(lt, { children: [
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: n("当前版本"),
					children: r.current_version
				}),
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: n("安装方式"),
					children: n(r.installation)
				}),
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: n("更新通道"),
					children: n(r.channel)
				}),
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: n("最新版本"),
					children: r.latest_version || n("未取得")
				}),
				r.package_kind ? /* @__PURE__ */ (0, Q.jsxs)(A, {
					term: n("下载内容"),
					children: [r.package_kind === "update" ? n("应用更新包") : n("应用与工具"), r.asset_size ? ` · ${(r.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			r.package_kind === "update" ? /* @__PURE__ */ (0, Q.jsx)(M, { children: n("应用更新包复用已安装工具；工具缺失、损坏或版本变化时会另行下载所需工具包。") }) : r.package_kind === "full" ? /* @__PURE__ */ (0, Q.jsx)(M, { children: n("本次更新包含媒体工具。") }) : null,
			r.state === "unchecked" && !r.checked_at && !_ && a.state === "idle" ? null : /* @__PURE__ */ (0, Q.jsxs)(B, {
				divided: !0,
				children: [
					r.checked_at ? /* @__PURE__ */ (0, Q.jsxs)(M, { children: [n("检查于 "), (/* @__PURE__ */ new Date(r.checked_at * 1e3)).toLocaleString()] }) : null,
					r.state === "available" && !_ ? /* @__PURE__ */ (0, Q.jsx)(P, {
						tone: "info",
						title: n("有可用更新"),
						children: r.message
					}) : _ || r.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(O, { children: _ || r.message }) : r.state === "unchecked" ? null : /* @__PURE__ */ (0, Q.jsx)(M, {
						role: "status",
						children: r.message
					}),
					a.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(O, { children: a.message }) : null,
					a.state !== "idle" && a.state !== "error" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(kt, {
								label: n("更新准备进度"),
								value: a.progress,
								stops: ma
							}),
							/* @__PURE__ */ (0, Q.jsxs)(M, { children: [n("下载 → 校验 → 解压 → 准备安装 · "), a.message] }),
							/* @__PURE__ */ (0, Q.jsx)(M, { children: v })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(j, {
				status: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: "https://peach.video/#download",
							children: n("官网")
						}),
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, Q.jsx)(k, {
							href: r.release_url || ga,
							children: n("查看发布页")
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: a.state === "ready" || r.state === "available" && r.installation === "独立测试包" ? "secondary" : "primary",
						disabled: f,
						onClick: g,
						...W(l.busy === "check"),
						children: n("检查更新")
					}),
					r.state === "available" && r.installation === "独立测试包" && a.state !== "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: h,
						...W(f || l.busy === "download"),
						children: n("下载并安装")
					}) : null,
					a.state === "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: m,
						children: n("重启安装")
					}) : null
				]
			})
		]
	});
}
// src/react/settings/upgrade-repairs.tsx
var va = {
	pending: "等待修复",
	running: "正在修复",
	failed: "需要重试",
	review: "需要复核",
	complete: "已完成",
	unavailable: "当前部署未启用"
};
function ya() {
	let e = X(), { snapshot: t } = jn(), [n, r] = (0, Z.useState)(null), i = J();
	(0, Z.useEffect)(() => r(null), [t]);
	let a = n ?? t?.repairs, o = a?.state || "pending", s = a?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, c = a?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, l = a?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "upgradeRepairs",
		title: e("自动修复"),
		aside: /* @__PURE__ */ (0, Q.jsx)(V, {
			tone: o === "failed" ? "error" : o === "running" ? "progress" : o === "review" ? "warning" : o === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${o}.status`,
				children: e(va[o] || "未取得")
			}, o)
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(M, { children: e("升级后自动修正资料、更新缓存。") }) }),
			/* @__PURE__ */ (0, Q.jsxs)(lt, { children: [
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: e("待完成"),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Tr, { value: s }), e(" 项")] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: e("失败"),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Tr, { value: c }), e(" 项")] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(A, {
					term: e("待复核"),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Tr, { value: l }), e(" 项")] })
				})
			] }),
			a?.message || i.error ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(O, { children: i.error || a?.message }) }) : null,
			o === "running" ? /* @__PURE__ */ (0, Q.jsxs)(B, { children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: e("资料与预览正在后台补全。") }), /* @__PURE__ */ (0, Q.jsx)(Ht, {})] }) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, {
				status: l ? /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "/api/configuration/upgrade-repairs/review",
					children: e("下载复核记录")
				}) : void 0,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					size: "small",
					variant: "secondary",
					disabled: !a?.available || o === "running" || !!i.busy || !c && o !== "failed",
					onClick: () => void i.run("retry", (e) => U("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						r(e), document.dispatchEvent(new Event("peach:client-updates"));
					}),
					children: e("重试失败项")
				})
			})
		]
	});
}
// src/react/settings/general-settings.tsx
function ba({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, Q.jsx)(_a, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(ya, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, Q.jsx)(ua, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, Q.jsx)(xa, {
				startup: e.startup,
				receipt: t
			}) : null
		]
	});
}
function xa({ startup: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e.enabled), [a, o] = (0, Z.useState)(e.silent), [s, c] = (0, Z.useState)(e.desktop), l = J(), u = e.available && !e.desktop_message;
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("开机自启"),
		onSubmit: (n) => {
			n.preventDefault(), e.available && l.run("save", (e) => U("/api/configuration/startup", {
				enabled: r,
				silent: a,
				desktop: s
			}, "POST", e), () => t("已保存配置"));
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(F, { children: [
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("开机后启动 Peach"),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("开机后启动 Peach"),
						isSelected: r,
						isDisabled: !e.available,
						onChange: i
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("只启动托盘，不打开网页"),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("只启动托盘，不打开网页"),
						isSelected: a,
						isDisabled: !e.available || !r,
						onChange: o
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("在桌面创建快捷方式"),
					description: e.desktop_message || void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("在桌面创建快捷方式"),
						isSelected: s,
						isDisabled: !u,
						onChange: c
					})
				})
			] }),
			e.message || l.error ? /* @__PURE__ */ (0, Q.jsxs)(B, {
				divided: !0,
				children: [e.message ? /* @__PURE__ */ (0, Q.jsx)(M, { children: e.message }) : null, l.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: l.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...W(l.busy === "save"),
				children: n("保存配置")
			}) })
		]
	});
}
// src/react/restart-redirect.ts
var Sa = 8e3, Ca = [
	{
		name: "机械硬盘，或内存 8 GB 以内",
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: "1 个"
	},
	{
		name: "SATA SSD，内存 8–16 GB",
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: "1–2 个"
	},
	{
		name: "NVMe SSD，内存 16 GB 以上",
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: "2 个起步"
	}
], wa = [
	["cache", "缓存上限"],
	["read", "读取长度（默认 / 最小）"],
	["task", "同时处理视频"]
];
function Ta() {
	let e = X();
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)(D, {
			summary: e("CloudDrive 设置帮助"),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(M, { children: [e("先将 CloudDrive2 或 OpenList 中的网盘挂载为本机文件夹，再在这里选择。"), /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "https://www.clouddrive2.com/help.html",
					children: e("挂载帮助")
				})] }),
				/* @__PURE__ */ (0, Q.jsx)(M, { children: e("缓存按所在硬盘和可用内存选起步值，再根据播放表现调整。") }),
				/* @__PURE__ */ (0, Q.jsx)(M, { children: e("文件操作需要挂载工具和网盘账号授予写入权限。光鸭云盘的上传、建文件夹、改名和移动需要 CloudDrive2 v1.1.0 或更高版本，删除和复制暂不支持。") }),
				/* @__PURE__ */ (0, Q.jsx)("ul", {
					"aria-label": e("按缓存所在硬盘分档"),
					className: "flex flex-col gap-2",
					children: Ca.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, Q.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: wa.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Q.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, Q.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("li", { children: e("缓存上限和清理方式填在 CloudDrive「设置」里，清理方式选 LRU。上限不要填 0，系统盘至少留 40 GiB；填完重开设置页确认存住了。") }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: e("读取长度和下载线程填在每个网盘各自的下载设置里，线程都从 2 开始。") }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: e("Buffer Cache 占内存，磁盘缓存和文件夹缓存占硬盘，改一个管不住另外两个。") })
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: e("完整配置与调优说明")
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var Ea = "/api/configuration/cloud-proxies", Da = [
	["direct", "直连"],
	["system", "跟随系统"],
	["http", "HTTP 代理"],
	["socks5", "SOCKS5 代理"]
];
function Oa({ receipt: e }) {
	let t = X(), [n, r] = (0, Z.useState)(null), [i, a] = (0, Z.useState)(!0), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), s = (0, Z.useRef)(/* @__PURE__ */ new Set()), [c, l] = (0, Z.useState)(!1), u = (0, Z.useRef)(() => void 0), d = J(), f = () => {
		s.current.size || d.run("refresh", (e) => qt(Ea, e), (e) => {
			o.current.clear(), r(e), a(!1);
		}, (e) => {
			a(!1), d.setError(e instanceof Error ? e.message : "无法读取网盘代理");
		});
	};
	return u.current = f, (0, Z.useEffect)(() => {
		u.current();
		let e = () => {
			o.current.size || u.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!n) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		Sn("cloudProxy", {
			configured: n.configured !== !1,
			unlinked: n.unlinked?.length ?? 0,
			accounts: n.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [n]), i ? /* @__PURE__ */ (0, Q.jsx)(Pt, {
		label: t("正在读取网盘代理"),
		html: Zt
	}) : /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("CloudDrive 代理"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: Xe }), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				d.error ? /* @__PURE__ */ (0, Q.jsxs)(P, {
					tone: "error",
					title: t("没有读取配置"),
					children: [
						d.error,
						" ",
						/* @__PURE__ */ (0, Q.jsx)(ht, {
							href: "/settings/downloads",
							size: "small",
							children: t("下载设置")
						})
					]
				}) : null,
				n?.configured === !1 ? /* @__PURE__ */ (0, Q.jsxs)(M, { children: [t("填写 CloudDrive2 地址和 API 令牌后，在这里设置各网盘账号的代理。 "), /* @__PURE__ */ (0, Q.jsx)(ht, {
					href: "/settings/downloads",
					size: "small",
					children: t("下载设置")
				})] }) : n?.accounts.length === 0 && !n.unlinked?.length ? /* @__PURE__ */ (0, Q.jsx)(M, { children: t("还没有使用 CloudDrive 的媒体库。") }) : null,
				n?.unlinked?.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(ut, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: Yn(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, Q.jsx)(M, { children: t("尚未匹配 CloudDrive 账号") })]
				}, e.root)),
				n?.accounts.map((t) => /* @__PURE__ */ (0, Q.jsx)(ka, {
					initial: t,
					receipt: e,
					onDirty: () => o.current.add(t.id),
					onSaving: (e) => {
						e ? s.current.add(t.id) : s.current.delete(t.id), l(!!s.current.size);
					},
					onSaved: (e) => {
						o.current.delete(e.id), r((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			disabled: c,
			onClick: f,
			...W(d.busy === "refresh"),
			children: t("重新读取")
		}) })]
	});
}
function ka({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let a = X(), [o, s] = (0, Z.useState)(e), [c, l] = (0, Z.useState)([]), u = o.libraries?.map((e) => e.name).join("、") || o.name, d = J(), f = (e, t) => {
		s((n) => ({
			...n,
			[e]: t
		})), l((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": a("{value0} 代理", { value0: String(u) }),
		onSubmit: (e) => {
			e.preventDefault(), i(!0), d.run("save", (e) => U(Ea, {
				id: o.id,
				revision: o.revision,
				...c.includes("api") ? { api: o.api } : {},
				...c.includes("data") ? { data: o.data } : {}
			}, "POST", e), (e) => {
				s(e), l([]), r(e), t("已保存 CloudDrive 代理");
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ut, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: Yn(o.libraries?.[0]?.location || (o.cloud === "115open" ? "115" : o.cloud.toLowerCase())) }), u]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
				o.name,
				" · ",
				o.path
			] }),
			/* @__PURE__ */ (0, Q.jsx)(Aa, {
				label: a("数据代理"),
				value: o.data,
				disabled: !o.writable || !!d.busy,
				onChange: (e) => f("data", e)
			}),
			/* @__PURE__ */ (0, Q.jsx)(Aa, {
				label: a("API 代理"),
				value: o.api,
				disabled: !o.writable || !!d.busy,
				onChange: (e) => f("api", e)
			}),
			o.writable ? null : /* @__PURE__ */ (0, Q.jsx)(M, { children: a("API 令牌需要“修改云盘”权限才能保存。") }),
			d.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: a("没有保存"),
				children: d.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !o.writable || !c.length,
					...W(d.busy === "save"),
					children: a("保存配置")
				})
			})
		]
	});
}
function Aa({ label: e, value: t, disabled: n, onChange: r }) {
	let i = X(), a = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ut, { children: e }),
			/* @__PURE__ */ (0, Q.jsxs)(L, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, Q.jsx)(R, {
					id: "unknown",
					children: i("无法识别的代理类型")
				}) : null, Da.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(R, {
					id: e,
					children: t
				}, e))]
			}),
			a ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)(N, {
					className: "min-w-40 flex-1",
					label: i("{value0}地址", { value0: String(e) }),
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, Q.jsx)(N, {
					className: "w-full sm:w-28",
					label: i("{value0}端口", { value0: String(e) }),
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)(D, {
				summary: i("代理认证"),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(N, {
						label: i("{value0}用户名", { value0: String(e) }),
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(N, {
						label: i("{value0}密码", { value0: String(e) }),
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? i("已保存，留空不改") : i("可选"),
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, Q.jsx)(et, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: i("清除已保存的密码")
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var ja = [
	["", "自动识别"],
	["hard-drive", "磁盘"],
	["database", "资料库"],
	["heart", "心动"],
	["heart-hand", "亲密"],
	["flame", "热情"],
	["cherry", "樱桃"],
	["lollipop", "甜心"],
	["candy", "糖果"],
	["banana", "香蕉"],
	["droplets", "湿润"],
	["venus", "女性"],
	["mars", "男性"],
	["venus-and-mars", "情侣"],
	["gem", "精选"],
	["crown", "女王"],
	["ribbon", "丝带"],
	["shirt", "制服"],
	["graduation-cap", "学生"],
	["stethoscope", "护士"],
	["glasses", "眼镜"],
	["footprints", "足迹"],
	["hand", "手部"],
	["flower", "花朵"],
	["venetian-mask", "角色扮演"],
	["rabbit", "兔女郎"],
	["paw-print", "兽耳"],
	["dumbbell", "健身"],
	["bed-double", "卧室"],
	["bath", "浴室"],
	["key-round", "私密"],
	["wine", "微醺"],
	["cigarette", "烟"],
	["moon", "夜色"],
	["sparkles", "幻想"],
	["camera", "写真"],
	["video", "影片"],
	["film", "电影"],
	["image", "图集"],
	["gamepad-2", "游戏"],
	["star", "收藏"],
	["tags", "主题"]
];
function Ma(e) {
	let t = e === "local" ? "" : bt[e];
	return t ? [t, "自动识别"] : ["hard-drive", "默认"];
}
var Na = "auto";
function Pa({ value: e, label: t, kind: n = "local", onChange: r }) {
	let i = X();
	X();
	let a = (0, Z.useRef)(null), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(e), [u, d] = Ma(n);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
		ref: a,
		variant: "secondary",
		className: "self-start",
		"aria-label": t,
		"aria-haspopup": "dialog",
		"aria-expanded": o,
		onClick: () => {
			l(e), s(!0);
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: e || u }), q(((e) => e && ja.find(([t]) => t === e)?.[1] || d)(e))]
		})
	}), /* @__PURE__ */ (0, Q.jsx)(ze, {
		triggerRef: a,
		isOpen: o,
		onOpenChange: s,
		placement: "bottom start",
		offset: 4,
		className: xt,
		children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
			"aria-label": i("{value0}可选图标", { value0: String(t) }),
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Le, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: q("选择媒体库图标")
				}),
				/* @__PURE__ */ (0, Q.jsx)(We, {
					"aria-label": q("可选图标"),
					value: c || Na,
					onChange: (e) => l(e === Na ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: ja.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
						value: e || Na,
						"aria-label": q(e ? t : d),
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, Q.jsx)(Bt, { mark: e || u })
					}, e || Na))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						onClick: () => s(!1),
						children: q("取消")
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: c === e,
						onClick: () => {
							r(c), s(!1);
						},
						children: q("应用")
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var Fa = [
	["probe", "读取视频信息"],
	["metadata", "联网补资料"],
	["cover", "联网补封面"],
	["people", "联网补人物图片"],
	["preview", "生成九宫格预览"]
], Ia = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], La = [
	[
		"auto",
		"自动补全",
		"缺什么联网补什么"
	],
	[
		"local",
		"仅使用本地资料",
		"不联网，只用本地 NFO 和图片"
	],
	[
		"custom",
		"自定义",
		"逐项选择要做的步骤"
	]
];
function Ra() {
	let e = X();
	return X(), /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: q(Et) }), /* @__PURE__ */ (0, Q.jsxs)(D, {
			summary: e("三种处理方式对比"),
			children: [/* @__PURE__ */ (0, Q.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, Q.jsx)("thead", { children: /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, Q.jsx)(He, { children: q("步骤") })
				}), Ct.map((e) => /* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: q(e)
				}, e))] }) }), /* @__PURE__ */ (0, Q.jsx)("tbody", { children: Tt.map(([e, ...t]) => /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "row",
					children: q(e)
				}), t.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": q("做"),
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": q("不做"),
						children: "—"
					}) : q(e)
				}, Ct[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, Q.jsx)(M, { children: q(wt) })]
		})]
	});
}
function za({ name: e, value: t, onChange: n }) {
	return X(), /* @__PURE__ */ (0, Q.jsx)(It, {
		className: "w-full",
		"aria-label": q("{name} 处理方式", { name: e }),
		selectedKey: t,
		prefix: q("处理方式"),
		renderValue: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate",
			children: q(La.find(([e]) => e === t)?.[1] ?? "")
		}),
		onSelectionChange: (e) => n(String(e)),
		children: La.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(R, {
			id: e,
			textValue: q(t),
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: q(t) }), /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: q(n)
				})]
			})
		}, e))
	});
}
function Ba({ name: e, value: t, onChange: n }) {
	return X(), /* @__PURE__ */ (0, Q.jsx)(D, {
		defaultOpen: !0,
		summary: q("{name} 的处理步骤（{selected}/{total}）", {
			name: e,
			selected: t.length,
			total: Fa.length
		}),
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": q("{name} 处理步骤", { name: e }),
			children: Fa.map(([e, r]) => /* @__PURE__ */ (0, Q.jsx)(et, {
				isSelected: t.includes(e),
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: q(r)
			}, e))
		})
	});
}
function Va({ id: e, name: t, value: n, onChange: r }) {
	let i = X();
	X();
	let a = (0, Z.useRef)(null), [o, s] = (0, Z.useState)(!1), c = q(Ke.find(([e]) => e === n)?.[1] || "无颜色"), l = (t) => {
		r(t), vn(e, t), s(!1);
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
		ref: a,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": o,
		"aria-label": i("{value0} 来源色：{value1}", {
			value0: String(t || i("未命名媒体库")),
			value1: String(c)
		}),
		title: c,
		onClick: () => s(!0),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: q("来源色")
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": n
			}) : /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: c })
		]
	}), /* @__PURE__ */ (0, Q.jsx)(Be, {
		getContainer: () => gn(a.current),
		children: /* @__PURE__ */ (0, Q.jsx)(ze, {
			triggerRef: a,
			isOpen: o,
			onOpenChange: s,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: xt,
			children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
				"aria-label": i("{value0} 来源色", { value0: String(t || i("未命名媒体库")) }),
				className: "outline-none",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: q("选择来源色")
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !n,
						title: q("无颜色"),
						"aria-label": q("无颜色"),
						onClick: () => l(""),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), Ke.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === n,
						title: q(t),
						"aria-label": q(t),
						onClick: () => l(e),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var Ha = "/api/configuration/push-discovery", Ua = "/api/configuration/push-discovery/secret";
function Wa({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(e.prefixes), [s, c] = (0, Z.useState)(""), l = J(), u = r.media_roots, [d, f] = (0, Z.useState)(e), p = (e, n) => {
		i(e), f(e), o(e.prefixes), c(""), t(n);
	}, m = (e, t) => o((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), h = (e) => {
		e.preventDefault();
		let t = {
			enabled: r.enabled,
			watch_local: r.watch_local,
			cloud: r.cloud,
			prefixes: a
		};
		l.run("save", (e) => U(Ha, t, "POST", e), (e) => p(e, "已保存配置"), (e) => c(G(e)));
	}, g = () => {
		l.run("secret", (e) => U(Ua, {}, "POST", e), (e) => p(e, "已更换共享密钥"), (e) => c(G(e)));
	}, _ = `已入库 ${d.queue.ingested} 个文件` + (d.queue.failed ? `，${d.queue.failed} 个入库失败` : "") + (d.queue.pending ? `，队列里还有 ${d.queue.pending} 条` : ""), v = d.local_running ? `正在监视 ${d.local_roots.join("、")}` : d.local_message || "没有运行";
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "pushDiscovery",
		title: n("自动发现新文件"),
		onSubmit: h,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: n("本机监视")
				}), /* @__PURE__ */ (0, Q.jsx)(V, {
					tone: !d.enabled || !d.watch_local ? "neutral" : d.local_running ? "progress" : "warning",
					children: !d.enabled || !d.watch_local ? n("未启用") : d.local_running ? n("运行中") : n("未运行")
				})]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(F, { children: [
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("发现新文件后自动入库"),
					description: d.enabled ? _ : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("发现新文件后自动入库"),
						isSelected: r.enabled,
						isDisabled: !r.available,
						onChange: (e) => i({
							...r,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("监视本机文件夹"),
					description: d.enabled && d.watch_local ? v : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("监视本机文件夹"),
						isSelected: r.watch_local,
						isDisabled: !r.available || !r.enabled,
						onChange: (e) => i({
							...r,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("接收 CloudDrive2 通知"),
					children: /* @__PURE__ */ (0, Q.jsx)(H, {
						"aria-label": n("接收 CloudDrive2 通知"),
						isSelected: r.cloud,
						isDisabled: !r.available || !r.enabled,
						onChange: (e) => i({
							...r,
							cloud: e
						})
					})
				}),
				d.enabled && d.cloud ? /* @__PURE__ */ (0, Q.jsx)(z, {
					label: n("Webhook 配置"),
					description: d.config_toml ? n("贴进 CloudDrive2「设置 → Webhooks」，需要会员；更换密钥后要重贴。") : d.origin ? n("还没有共享密钥，保存配置后生成。") : n("要先有 CloudDrive2 能访问的局域网地址才能生成。")
				}) : null
			] }),
			d.enabled && d.queue.last_error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(P, {
					tone: "error",
					title: n("最近一次入库失败"),
					children: d.queue.last_error
				})
			}) : null,
			d.enabled && d.cloud && d.config_toml ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, Q.jsxs)(D, {
						summary: n("查看配置"),
						children: [/* @__PURE__ */ (0, Q.jsx)(Bn, {
							code: d.config_toml,
							language: "toml",
							label: n("CloudDrive2 配置"),
							bounded: !1,
							copyLabel: n("复制配置"),
							onCopy: () => t("已复制 CloudDrive2 配置")
						}), /* @__PURE__ */ (0, Q.jsx)(M, { children: n("Windows 桌面版粘贴后显示「无效」时，把这段存成 .toml 文件，放进 %LOCALAPPDATA%\\CloudDrive.WinUI\\webhooks\\ 目录。") })]
					})
				})
			}) : null,
			r.enabled && r.cloud ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(ut, { children: n("云端路径前缀") }),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							role: "group",
							"aria-label": n("云端路径前缀"),
							className: "flex flex-col gap-3",
							children: a.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(N, {
										className: "min-w-0 flex-1",
										"aria-label": n("云端路径前缀 {value0}", { value0: String(t + 1) }),
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => m(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(It, {
										"aria-label": n("前缀 {value0} 对应的媒体根", { value0: String(t + 1) }),
										prefix: n("对应目录"),
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && m(t, { root: String(e) });
										},
										children: u.map((e) => /* @__PURE__ */ (0, Q.jsx)(R, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: _t,
										"aria-label": n("移除这一条"),
										onClick: () => o((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
							variant: "secondary",
							onClick: () => o((e) => [...e, {
								prefix: "",
								root: u[0] ?? ""
							}]),
							children: n("添加前缀")
						}) })
					]
				})
			}) : null,
			s || l.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: s || l.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(j, { children: [d.enabled && d.cloud && d.config_toml ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: g,
				disabled: !r.available,
				...W(l.busy === "secret"),
				children: n("更换密钥")
			}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !r.available,
				...W(l.busy === "save"),
				children: n("保存配置")
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
var Ga = (e) => Wn.find(([t]) => t === e)?.[1] ?? e, Ka = [...Wn, ["smb", "SMB 共享"]], qa = (e) => e.library_icon || Ma(e.transport === "smb" ? "smb" : e.location)[0], Ja = async (e) => (await U(St, { initial: e })).path, Ya = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), Xa = (e) => e.library_stages ? Ia.filter((t) => e.library_stages.split(",").includes(t)) : [], Za = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: xn(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function Qa(e) {
	let t = e.media_sources?.filter((e) => Wn.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || xn(),
		cost: e.cost ?? An(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => Za(e));
}
var $a = (e) => !(e instanceof qe) || e.status !== 400 ? null : e.body?.errors ?? null;
function eo({ data: e, receipt: t, panel: n }) {
	let r = X(), i = !!e.media_sources?.some((e) => Jn(e.location));
	return (0, Z.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of Qa(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			Sn("media", {
				folders: [...t.values()],
				cloud: i
			});
		}
		let t = e.push_discovery;
		t && Sn("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [e, i]), /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, Q.jsx)(to, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "neutral",
				title: r("只读"),
				children: e.notice
			}),
			e.editable ? null : /* @__PURE__ */ (0, Q.jsx)(ro, { data: e }),
			i ? /* @__PURE__ */ (0, Q.jsx)(Oa, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, Q.jsx)(Wa, {
				initial: e.push_discovery,
				receipt: t
			}) : null
		]
	});
}
function to({ data: e, receipt: t }) {
	let n = X(), { rows: r, edit: i, add: a, remove: o, errors: s, setErrors: c, picking: l, pick: u, inputRef: d } = Xn({
		initial: () => Qa(e),
		blank: () => Za(),
		pickFolder: Ja,
		describe: G
	}), [f, p] = (0, Z.useState)(!1), [m, h] = (0, Z.useState)(!1), [g, _] = (0, Z.useState)(""), [v, y] = (0, Z.useState)({}), [b, x] = (0, Z.useState)(null), S = (0, Z.useRef)(e.revision), C = J();
	Mn();
	let w = (e, t) => {
		r.forEach((n, a) => {
			n.library_id === r[e].library_id && i(a, t);
		});
	}, T = [...r.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], [ee, te] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!ee) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(ee)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), te(null);
	}, [ee]);
	let ne = (e, t) => {
		let n = r.find((e) => e.library_id === t);
		if (n) {
			i(e, Ya(n));
			return;
		}
		let a = xn();
		i(e, {
			library_id: a,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), te(a);
	};
	(0, Z.useEffect)(() => {
		if (!b) return;
		let e = setTimeout(() => location.assign(b.url), Sa);
		return () => clearTimeout(e);
	}, [b]);
	let re = (n) => {
		n.preventDefault();
		let i = r.findIndex((e) => !e.cost);
		if (i >= 0) {
			h(!0);
			let e = n.currentTarget;
			requestAnimationFrame(() => e.querySelector(`[data-media-read-policy="${i}"] button`)?.focus());
		} else _(""), C.run("save", (t) => U(Qe, {
			revision: S.current,
			media_dirs: r.map((e) => e.path),
			...e.media_sources ? { media_sources: r } : {},
			port: String(e.port),
			scan_now: f
		}, "POST", t), (e) => {
			S.current = e.revision, c([]), t("已保存配置"), x(e);
		}, (e) => {
			let t = $a(e);
			c(t?.media_dirs ?? []), (!t || t.port) && _(t?.port || G(e));
		});
	};
	if (b) return /* @__PURE__ */ (0, Q.jsx)(I, {
		title: n("媒体库与目录"),
		children: /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsxs)(P, {
			tone: "success",
			title: n("配置已保存"),
			children: [
				n("Peach 正在重新启动。稍后自动跳转，或点击"),
				/* @__PURE__ */ (0, Q.jsx)(ht, {
					href: b.url,
					size: "small",
					children: n("进入馆藏")
				}),
				"。"
			]
		}) })
	});
	let ie = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), ae = r.some((e) => Jn(e.location)), oe = ae ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("媒体库与目录"),
		onSubmit: re,
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [
			/* @__PURE__ */ (0, Q.jsx)(Ra, {}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				role: "group",
				"aria-label": n("媒体库与目录"),
				className: "flex flex-col gap-4",
				children: T.map((e) => {
					let t = r.findIndex((t) => t.library_id === e.library_id), c = r.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), f = e.library_policy, p = e.library || "未命名媒体库";
					return /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Xt({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(Pa, {
										label: n("{value0} 图标", { value0: String(p) }),
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => w(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(N, {
										className: "w-full",
										"aria-label": n("{value0} 名称", { value0: String(p) }),
										maxLength: 80,
										placeholder: n("媒体库名称"),
										value: e.library,
										onChange: (e) => w(t, { library: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Va, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => w(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(za, {
										name: p,
										value: f,
										onChange: (n) => w(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || Ia.join(",") : ""
										})
									})
								]
							}),
							f === "custom" ? /* @__PURE__ */ (0, Q.jsx)(Ba, {
								name: p,
								value: Xa(e),
								onChange: (e) => w(t, { library_stages: Ia.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": n("{value0} 的文件夹", { value0: String(p) }),
								children: [c.map(({ row: t, index: a }) => /* @__PURE__ */ (0, Q.jsxs)(Un, {
									label: n("媒体目录 {value0}", { value0: String(a + 1) }),
									path: t.path,
									onPath: (e) => i(a, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: s[a],
									inputRef: d(a),
									picking: l === a,
									onPick: () => void u(a),
									onRemove: r.length > 1 ? () => o(a) : void 0,
									status: ie(t) ? /* @__PURE__ */ (0, Q.jsx)(no, { online: ie(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, Q.jsxs)(Hn, { children: [
										/* @__PURE__ */ (0, Q.jsx)(qn, {
											index: a,
											value: t.transport === "smb" ? "smb" : t.location,
											options: Ka,
											onChange: (e) => {
												let n = e === "smb";
												i(a, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), y((e) => {
													let t = { ...e };
													return delete t[a], t;
												});
											}
										}),
										/* @__PURE__ */ (0, Q.jsx)(Gn, {
											index: a,
											cost: t.cost,
											onChange: (e) => i(a, { cost: e }),
											error: m && !t.cost ? "请选择媒体读取策略" : void 0
										}),
										t.root_id && !ie(t) ? /* @__PURE__ */ (0, Q.jsx)(Vn, {
											label: n("变更方式"),
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, Q.jsxs)(L, {
												className: "w-full",
												"aria-label": n("目录变更方式 {value0}", { value0: String(a + 1) }),
												placeholder: n("选择目录变更方式"),
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? i(a, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : i(a, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, Q.jsx)(R, {
													id: "relocate",
													children: n("重定位此目录，保留文件记录")
												}), /* @__PURE__ */ (0, Q.jsx)(R, {
													id: "add",
													children: n("添加另一目录")
												})]
											})
										}) : null,
										T.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(Vn, {
											label: n("移到媒体库"),
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, Q.jsxs)(L, {
												className: "w-full",
												"aria-label": n("目录所属媒体库 {value0}", { value0: String(a + 1) }),
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, Q.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: qa(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
														className: "truncate",
														children: p
													})]
												}),
												onSelectionChange: (e) => {
													e && ne(a, String(e));
												},
												children: [T.map((e) => /* @__PURE__ */ (0, Q.jsx)(R, {
													id: e.library_id,
													textValue: e.library || n("未命名媒体库"),
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: qa(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
															className: "truncate",
															children: e.library || n("未命名媒体库")
														})]
													})
												}, e.library_id)), c.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(R, {
													id: "new",
													textValue: n("新建媒体库"),
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: n("新建媒体库") })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, Q.jsxs)(Hn, { children: [/* @__PURE__ */ (0, Q.jsx)(Vn, {
												label: n("SMB 账号"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(N, {
													"aria-label": n("SMB 账号 {value0}", { value0: String(a + 1) }),
													value: t.smb_username || "",
													autoComplete: "off",
													onChange: (e) => i(a, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, Q.jsx)(Vn, {
												label: n("SMB 密码"),
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(N, {
													"aria-label": n("SMB 密码 {value0}", { value0: String(a + 1) }),
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? n("留空保留已保存密码") : "",
													onChange: (e) => i(a, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, Q.jsx)(et, {
												isSelected: t.smb_encrypt || !1,
												onChange: (e) => i(a, { smb_encrypt: e }),
												children: n("要求 SMB 加密")
											}),
											/* @__PURE__ */ (0, Q.jsx)(et, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => i(a, { smb_clear: e }),
												children: n("移除已保存的 SMB 账号")
											}),
											/* @__PURE__ */ (0, Q.jsx)(E, {
												className: "self-start",
												variant: "secondary",
												...W(C.busy === `smb-${a}`),
												onClick: () => void C.run(`smb-${a}`, (e) => U("/api/configuration/smb/test", t, "POST", e), (e) => y((t) => ({
													...t,
													[a]: {
														message: "共享目录可读取",
														directories: e.directories
													}
												})), (e) => y((t) => ({
													...t,
													[a]: {
														message: G(e),
														directories: []
													}
												}))),
												children: n("测试连接")
											}),
											v[a] ? /* @__PURE__ */ (0, Q.jsx)(M, { children: v[a].message }) : null,
											v[a]?.directories.length ? /* @__PURE__ */ (0, Q.jsx)(L, {
												"aria-label": n("SMB 子目录 {value0}", { value0: String(a + 1) }),
												placeholder: n("进入子目录"),
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (i(a, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), y((e) => ({
														...e,
														[a]: {
															message: "请测试此子目录",
															directories: []
														}
													})));
												},
												children: v[a].directories.map((e) => /* @__PURE__ */ (0, Q.jsx)(R, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, Q.jsx)(M, { children: n("地址填写 smb://服务器/共享/目录。按共享账号权限读写；整理和删除由对应操作触发，资料和预览保存在 Peach 数据目录。") })
										]
									}) : null]
								}, a)), /* @__PURE__ */ (0, Q.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "secondary",
										"aria-label": n("给 {value0} 添加文件夹", { value0: String(p) }),
										onClick: () => {
											a(), i(r.length, {
												...Ya(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: n("添加文件夹")
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				className: "self-start",
				onClick: a,
				children: n("添加媒体库")
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, { children: ft }),
			ae ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Kn, {}), /* @__PURE__ */ (0, Q.jsx)(Ta, {})] }) : null,
			oe.map((e) => /* @__PURE__ */ (0, Q.jsxs)(M, { children: [
				n("未检测到 "),
				e.name,
				"。",
				/* @__PURE__ */ (0, Q.jsxs)(k, {
					href: e.download_url,
					children: [n("下载 "), e.name]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, Q.jsx)(et, {
				isSelected: f,
				onChange: p,
				children: n("保存后扫描并补全资料")
			}),
			g ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: n("没有保存"),
				children: g
			}) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(j, {
			status: n("保存后 Peach 会重新启动。"),
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...W(C.busy === "save"),
				children: n("保存配置")
			})
		})]
	});
}
function no({ online: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(Zn, { online: e });
}
function ro({ data: e }) {
	let t = X(), n = e.media_sources, r = J();
	return n ? /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("挂载状态"),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(lt, { children: n.map((e, n) => /* @__PURE__ */ (0, Q.jsxs)(A, {
				term: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Bt, { mark: Yn(e.location) }), t(Ga(e.location))] }),
				children: [e.path || t("未配置挂载点"), /* @__PURE__ */ (0, Q.jsx)(no, { online: e.online })]
			}, n)) }),
			r.error ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: r.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void r.run("refresh", (e) => an(e), (e) => bn.setQueryData(Ze, e)),
				...W(r.busy === "refresh"),
				children: t("刷新挂载状态")
			}) })
		]
	}) : null;
}
// src/react/settings/service-preferences.tsx
var io = [
	["off", "关闭"],
	["precise", "每 10 秒一张"],
	["coarse", "每 30 秒一张"]
];
function ao({ epoch: e = 0, disabled: t = !1 }) {
	let n = X(), r = Y({
		queryKey: Vt,
		queryFn: ({ signal: e }) => dn(e),
		refetchOnMount: "always"
	}), i = Rn(), a = i.reset;
	(0, Z.useEffect)(() => {
		a();
	}, [e, a]);
	let o = r.data, s = i.error || r.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
			label: n("时间轴预览"),
			description: n("按所选间隔抽帧，仅处理本机磁盘上的视频。"),
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, Q.jsx)(L, {
					"aria-label": n("缩略图采集间隔"),
					selectedKey: o?.mode || "off",
					isDisabled: t || !o || r.isFetching || i.isPending,
					onSelectionChange: (e) => {
						e !== null && i.mutate(String(e));
					},
					children: io.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(R, {
						id: e,
						children: n(t)
					}, e))
				})
			})
		}) }),
		i.isPending || o?.status === "running" ? /* @__PURE__ */ (0, Q.jsxs)(B, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)(M, {
				role: "status",
				children: i.isPending ? n("正在保存…") : n("正在采集。")
			}), i.isPending ? null : /* @__PURE__ */ (0, Q.jsx)(Ht, {})]
		}) : null,
		s ? /* @__PURE__ */ (0, Q.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(O, { children: G(s) })
		}) : null
	] });
}
function oo({ receipt: e }) {
	let t = X(), n = Jt();
	(0, Z.useSyncExternalStore)(n.subscribe, n.version);
	let r = Y({
		queryKey: Mt,
		queryFn: ({ signal: e }) => un(e),
		refetchOnMount: "always"
	}), i = Ln(), a = r.data?.followInitialDays ?? n.value.followInitialDays, o = i.error || r.error;
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("关注采集"),
		children: [/* @__PURE__ */ (0, Q.jsxs)(F, { children: [
			/* @__PURE__ */ (0, Q.jsx)(so, {}),
			/* @__PURE__ */ (0, Q.jsx)(co, {}),
			/* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("首次采集范围"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "followInitialDaysSetting",
					children: /* @__PURE__ */ (0, Q.jsx)(L, {
						"aria-label": t("首次采集范围"),
						selectedKey: String(a),
						isDisabled: r.isFetching || i.isPending,
						onSelectionChange: (t) => {
							t !== null && i.mutate({ followInitialDays: Number(t) }, { onSuccess: (t) => {
								typeof t.followInitialDays == "number" && (n.value.followInitialDays = t.followInitialDays), n.save(), e("已保存首次采集范围");
							} });
						},
						children: st.map(([e, n]) => /* @__PURE__ */ (0, Q.jsx)(R, {
							id: e,
							children: t(n)
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("头像刷新"),
				children: t("每 3 个月")
			}),
			/* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("favicon 刷新"),
				children: t("每年")
			})
		] }), o ? /* @__PURE__ */ (0, Q.jsx)(B, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(O, { children: G(o) })
		}) : null]
	});
}
function so() {
	let e = X(), t = Y({
		queryKey: ct,
		queryFn: ({ signal: e }) => cn(e),
		refetchOnMount: "always",
		refetchInterval: (e) => En(e.state.data)
	}), n = In(), r = t.data, i = (0, Z.useRef)(Yt(Number(localStorage.getItem("peach.number.followScheduleSetting")), 15, 10080, 60)), [a, o] = (0, Z.useState)("60"), [s, c] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		r?.enabled && (i.current = r.interval_minutes, o(String(r.interval_minutes)));
	}, [r]);
	let l = !r?.available || t.isFetching || n.isPending, u = () => {
		let e = Number(a);
		!Number.isInteger(e) || e < 15 || e > 10080 ? c(!0) : (c(!1), r?.enabled && !l && e !== r.interval_minutes && (i.current = e, localStorage.setItem("peach.number.followScheduleSetting", String(e)), n.mutate(e)));
	}, d = n.error || t.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(z, {
			label: e("自动检查更新"),
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				id: "followScheduleSetting",
				className: "flex min-h-9 min-w-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(H, {
					"aria-label": e("自动检查更新"),
					isSelected: r?.enabled === !0,
					isDisabled: l,
					onChange: (e) => {
						localStorage.setItem("peach.number.followScheduleSetting", String(i.current)), n.mutate(e ? i.current : 0);
					}
				}), r?.enabled ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(N, {
						type: "number",
						inputMode: "numeric",
						name: "follow-interval",
						autoComplete: "off",
						"aria-label": e("自动检查间隔"),
						className: "w-24",
						value: a,
						onChange: (e) => {
							o(e), c(!1);
						},
						onBlur: u,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), u());
						},
						isDisabled: l,
						isInvalid: s
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: e("分钟")
					})]
				}) : null]
			})
		}),
		s ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(O, { children: e("请输入 15–10080 的整数（分钟）。") }) }) : null,
		n.isPending || r?.running ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(M, {
			role: "status",
			children: n.isPending ? e("正在保存…") : e("正在检查来源更新…")
		}) }) : null,
		/* @__PURE__ */ (0, Q.jsx)(lo, {
			kind: "follow",
			status: r,
			title: e("上次自动检查失败")
		}),
		d ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(O, { children: G(d) }) }) : null
	] });
}
function co() {
	let e = X(), t = Y({
		queryKey: at,
		queryFn: ({ signal: e }) => sn(e),
		refetchOnMount: "always",
		refetchInterval: (e) => En(e.state.data)
	}), n = t.data;
	if (!n) return t.isPending ? /* @__PURE__ */ (0, Q.jsx)(z, {
		label: e("订阅源拉取"),
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			"data-skeleton": !0,
			"aria-busy": "true",
			"aria-label": e("正在读取订阅源拉取间隔"),
			className: "block h-4 w-16 rounded-2lg bg-background-tertiary-default"
		})
	}) : null;
	let r = n.interval_minutes, i = r % 60 ? e("每 {count} 分钟", { count: r }) : e("每 {count} 小时", { count: r / 60 });
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(z, {
			label: e("订阅源拉取"),
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				id: "feedScheduleSetting",
				children: n.available ? n.enabled ? i : e("已关闭") : e("只在写入端可用")
			})
		}),
		n.running ? /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(M, {
			role: "status",
			children: e("正在拉取订阅源…")
		}) }) : null,
		/* @__PURE__ */ (0, Q.jsx)(lo, {
			kind: "feed",
			status: n,
			title: e("上次自动拉取失败")
		})
	] });
}
function lo({ kind: e, status: t, title: n }) {
	let r = X(), i = Fn(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let a = t.consecutive_failures ?? 0, o = mn(t.next_run_at), s = [a > 1 ? `已连续失败 ${a} 次` : "", o ? `下一轮 ${o}` : ""].filter(Boolean).join("，"), c = [
		t.last_error,
		s,
		i.error ? `没有重试：${G(i.error)}` : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)(P, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...W(i.isPending),
			onClick: () => i.mutate(),
			children: r("立即重试")
		}),
		children: c
	}) });
}
// src/react/settings/media-processing-settings.tsx
function uo({ receipt: e }) {
	let t = X(), n = Y({
		queryKey: vt,
		queryFn: ({ signal: e }) => ln(e)
	}), r = J(), i = r.error || (n.error ? G(n.error) : ""), a = !n.data || n.isFetching || !!r.busy;
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("视频预览"),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("生成视频预览"),
				description: t("为本地视频生成九宫格与时间轴预览；关闭后仍按入库规则探测时长与分辨率。"),
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					"aria-label": t("生成视频预览"),
					isSelected: !!n.data && !n.data.metadata_only,
					isDisabled: a,
					onChange: (t) => void r.run("save", (e) => U(yt, { metadata_only: !t }, "POST", e), (t) => {
						bn.setQueryData(vt, t), bn.invalidateQueries({ queryKey: Vt }), bn.invalidateQueries({ queryKey: pt }), e(t.metadata_only ? "已关闭视频预览生成" : "已开启视频预览生成");
					})
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(ao, { disabled: !n.data || n.data.metadata_only || !!r.busy }),
			/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("抽帧解码方式"),
				description: t("用于生成封面、九宫格和时间轴。"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(L, {
						"aria-label": t("抽帧解码方式"),
						selectedKey: n.data?.preview_acceleration || "auto",
						isDisabled: a,
						onSelectionChange: (t) => {
							t !== null && r.run("preview_acceleration", (e) => U(yt, { preview_acceleration: String(t) }, "POST", e), (t) => {
								bn.setQueryData(vt, t), e("已保存抽帧解码方式");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(R, {
							id: "auto",
							children: t("自动（硬件优先）")
						}), /* @__PURE__ */ (0, Q.jsx)(R, {
							id: "software",
							children: t("软件解码")
						})]
					})
				})
			}) }),
			r.busy ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(M, {
					role: "status",
					children: t("正在保存…")
				})
			}) : null,
			i ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: i })
			}) : null
		]
	});
}
function fo({ receipt: e }) {
	let t = X(), n = Y({
		queryKey: vt,
		queryFn: ({ signal: e }) => ln(e)
	}), r = J(), i = r.error || (n.error ? G(n.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("视频播放"),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
				label: t("转码方式"),
				description: t("用于播放时的视频转码。"),
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(L, {
						"aria-label": t("转码方式"),
						selectedKey: n.data?.playback_acceleration || "auto",
						isDisabled: !n.data || n.isFetching || !!r.busy,
						onSelectionChange: (t) => {
							t !== null && r.run("playback_acceleration", (e) => U(yt, { playback_acceleration: String(t) }, "POST", e), (t) => {
								bn.setQueryData(vt, t), e("已保存转码方式");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(R, {
							id: "auto",
							children: t("自动（硬件优先）")
						}), /* @__PURE__ */ (0, Q.jsx)(R, {
							id: "software",
							children: t("软件编解码")
						})]
					})
				})
			}) }),
			r.busy ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(M, {
					role: "status",
					children: t("正在保存…")
				})
			}) : null,
			i ? /* @__PURE__ */ (0, Q.jsx)(B, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, { children: i })
			}) : null
		]
	});
}
// src/react/boardui/components/base/textarea/textarea.tsx
var po = kn({
	field: "relative flex w-full flex-col rounded-2lg bg-background-tertiary-default text-foreground-icon-tertiary ring-2 ring-inset ring-transparent transition-[background-color,box-shadow,color] duration-[var(--input-transition-ms)] ease",
	fieldSize: {
		medium: "p-2",
		small: "px-1.5 py-2"
	},
	textarea: "block w-full min-w-0 bg-transparent border-0 outline-none m-0 p-0 px-1 font-sans text-body-regular text-text-primary placeholder:text-text-tertiary focus:placeholder:text-text-primary disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed aria-invalid:placeholder:text-text-error-placeholder",
	resize: {
		none: "resize-none",
		vertical: "resize-y"
	},
	footer: "flex w-full items-start justify-between gap-3",
	count: "ms-auto shrink-0 pt-px text-caption-1-medium text-text-tertiary tabular-nums"
}), mo = 20;
function ho({ size: e, rows: t = 3, autoResize: n = !1, maxRows: r, resize: i = "vertical", fieldClassName: a, className: o, ref: s, groupRef: c, onInput: l, ...u }) {
	let d = (0, Z.useContext)(Wt), f = e ?? d.size ?? "medium", p = (0, Z.useRef)(null), m = (e) => {
		p.current = e, typeof s == "function" ? s(e) : s && (s.current = e);
	}, h = () => {
		let e = p.current;
		if (!e) return;
		if (!n) {
			e.style.height = "", e.style.maxHeight = "", e.style.overflowY = "";
			return;
		}
		let i = parseFloat(window.getComputedStyle(e).lineHeight) || mo, a = r ? r * i : Infinity;
		e.style.height = "0px";
		let o = Math.max(e.scrollHeight, t * i);
		e.style.height = `${Math.min(o, a)}px`, e.style.maxHeight = r ? `${a}px` : "", e.style.overflowY = o > a ? "auto" : "hidden";
	};
	return (0, Z.useLayoutEffect)(h), /* @__PURE__ */ (0, Q.jsx)(Re, {
		ref: c,
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => rn(po.field, po.fieldSize[f], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", d.fieldClassName, a),
		children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
			ref: m,
			rows: t,
			...u,
			onInput: (e) => {
				h(), l?.(e);
			},
			className: rn(po.textarea, po.resize[n ? "none" : i], d.inputClassName, o)
		})
	});
}
ho.displayName = "TextareaBase";
function go({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
	let [v, y] = (0, Z.useState)(() => (h ?? "").length), b = m === void 0 ? v : m.length;
	return /* @__PURE__ */ (0, Q.jsx)(Ut, {
		..._,
		value: m,
		defaultValue: h,
		onChange: (e) => {
			l && m === void 0 && y(e.length), g?.(e);
		},
		className: p,
		"aria-label": _["aria-label"] ?? (!e && typeof r == "string" ? r : void 0),
		children: ({ isRequired: p, isInvalid: m }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			e && /* @__PURE__ */ (0, Q.jsx)(mt, {
				isRequired: p,
				isInvalid: m,
				tooltip: n,
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)(ho, {
				ref: d,
				groupRef: f,
				placeholder: r,
				rows: i,
				autoResize: a,
				maxRows: o,
				resize: s,
				maxLength: c,
				fieldClassName: u
			}),
			(t || l) && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: po.footer,
				children: [t && /* @__PURE__ */ (0, Q.jsx)(dt, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: rn(po.count, m && "text-text-error-primary"),
					children: c ? `${b}/${c}` : b
				})]
			})
		] })
	});
}
go.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var _o = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function vo({ receipt: e }) {
	let t = X(), n = Y({
		queryKey: Mt,
		queryFn: ({ signal: e }) => un(e)
	}), [r, i] = (0, Z.useState)(null), a = J(), o = r ?? (n.data?.codePatterns ?? []).join("\n"), s = a.error || (n.error ? G(n.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: t("番号识别规则"),
		onSubmit: (t) => {
			t.preventDefault();
			let n = o.split("\n").map((e) => e.trim()).filter(Boolean);
			a.run("save", (e) => U(Nt, { codePatterns: n }, "POST", e), (t) => {
				bn.setQueryData(Mt, t), i(null), e("已保存配置");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [/* @__PURE__ */ (0, Q.jsx)(M, { children: t("内置规则认不出番号时，按这里的规则从文件名里取。每行一条正则表达式，番号写在 (?<code>…) 里，没有命名组就取第一个括号。规则在下一次处理时对还没有番号的视频生效。") }), /* @__PURE__ */ (0, Q.jsx)(go, {
			id: "codePatternSetting",
			"aria-label": t("番号识别规则"),
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: _o,
			value: o,
			isDisabled: !n.data,
			isInvalid: !!s,
			hint: s ? t(s) : void 0,
			onChange: i
		})] }), /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...W(a.busy === "save"),
			children: t("保存配置")
		}) })]
	});
}
// src/react/settings/password-pair.tsx
function yo({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	let u = X();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(N, {
		id: "access-password",
		type: "password",
		label: q(e),
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s ? q(s) : void 0 : (typeof o == "string" ? u(o) : o) || (s ? q(s) : void 0)
	}), /* @__PURE__ */ (0, Q.jsx)(N, {
		id: "access-confirm",
		type: "password",
		label: q("确认访问密码"),
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : typeof c == "string" ? u(c) : c
	})] });
}
// src/react/settings/access-settings.tsx
var bo = {
	legacy: "当前使用系统生成的访问口令。改设自己的密码，或关闭登录要求。",
	locked: "访问设置无法读取，请在本机检查配置文件。",
	password: "已设置密码。新设备需要登录，登录时勾选「保持登录」可保持 30 天。"
};
function xo({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(""), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)({}), h = (0, Z.useRef)(null), g = J(), _ = (e) => {
		e.preventDefault();
		let n = {};
		r.mode === "password" && !a && (n.current_password = "请输入当前访问密码"), d || ((s.length < 8 || s.length > 256) && (n.password = "访问密码需为 8–256 个字符"), s !== l && (n.confirmation = "两次输入的密码不一致")), m(n), Object.keys(n).length ? requestAnimationFrame(() => h.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : g.run("save", (e) => U("/api/configuration/access", {
			revision: r.revision,
			action: d ? "disable" : "set",
			confirm_disable: d,
			current_password: a,
			password: d ? "" : s,
			confirmation: d ? "" : l
		}, "POST", e), (e) => {
			i(e), o(""), c(""), u(""), f(!1), m({}), t(e.mode === "open" ? "已关闭访问密码" : "已保存配置");
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? m(n) : g.setError(G(e));
		});
	}, v = bo[r.mode], y = r.mode !== "locked";
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("访问密码"),
		onSubmit: _,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: h,
			children: /* @__PURE__ */ (0, Q.jsxs)(B, { children: [
				v ? /* @__PURE__ */ (0, Q.jsx)(M, { children: v }) : null,
				r.mode === "open" ? /* @__PURE__ */ (0, Q.jsx)(P, {
					tone: "warning",
					title: n("未设置访问密码"),
					children: n("能连接到 Peach 的设备打开地址就能看馆藏，不需要登录。")
				}) : null,
				r.mode === "password" || r.mode === "legacy" ? /* @__PURE__ */ (0, Q.jsx)(et, {
					isSelected: d,
					onChange: f,
					children: n("关闭访问密码")
				}) : null,
				r.mode === "password" ? /* @__PURE__ */ (0, Q.jsx)(N, {
					id: "access-current",
					type: "password",
					label: n("当前访问密码"),
					autoComplete: "current-password",
					maxLength: 256,
					value: a,
					onChange: o,
					isRequired: !0,
					validationBehavior: "aria",
					isInvalid: !!p.current_password,
					hint: p.current_password ? n(p.current_password) : void 0
				}) : null,
				y && !d ? /* @__PURE__ */ (0, Q.jsx)(yo, {
					label: r.mode === "password" ? n("新访问密码") : n("设置访问密码"),
					password: s,
					confirmation: l,
					onPassword: c,
					onConfirmation: u,
					passwordError: p.password,
					confirmationError: p.confirmation,
					passwordHint: n("至少 8 个字符。保存后其他设备需要重新登录。")
				}) : null,
				d ? /* @__PURE__ */ (0, Q.jsx)(P, {
					tone: "warning",
					title: n("访问范围"),
					children: n("保存后，能连接到 Peach 的设备将直接访问馆藏。")
				}) : null,
				g.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: g.error }) : null
			] })
		}), y ? /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...W(g.busy === "save"),
			children: n("保存配置")
		}) }) : null]
	});
}
// src/react/components/configuration-fields.tsx
function So({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
	let c = X(), l = `${e}-label`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(mt, {
				id: l,
				elementType: "span",
				children: c(t)
			}),
			/* @__PURE__ */ (0, Q.jsx)(Ft, {
				id: e,
				"aria-labelledby": l,
				orientation: "horizontal",
				className: jt,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: o,
				children: i.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
					value: e.value,
					className: At,
					children: c(e.label)
				}, e.value))
			}),
			s
		]
	});
}
function Co({ prefix: e, suffix: t, ...n }) {
	let r = X(), i = () => /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "shrink-0 pr-1 text-body-regular text-text-secondary",
		children: t
	});
	return /* @__PURE__ */ (0, Q.jsx)(N, {
		...n,
		label: typeof n.label == "string" ? r(n.label) : n.label,
		hint: typeof n.hint == "string" ? r(n.hint) : n.hint,
		placeholder: n.placeholder ? r(n.placeholder) : n.placeholder,
		leadingAddon: e ? /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: t ? i : void 0
	});
}
// src/react/settings/port-settings.tsx
var wo = [{
	value: "0.0.0.0",
	label: "同一局域网的设备"
}, {
	value: "127.0.0.1",
	label: "只有这台电脑"
}];
function To({ data: e, receipt: t }) {
	let n = X(), r = e.network, i = r ? r.editable : e.editable && e.port_editable !== !1, [a, o] = (0, Z.useState)(r?.host ?? "127.0.0.1"), [s, c] = (0, Z.useState)(r?.mdns_name ?? "peach"), [l, u] = (0, Z.useState)(String(e.port)), [d, f] = (0, Z.useState)({}), [p, m] = (0, Z.useState)(null), h = J();
	return (0, Z.useEffect)(() => {
		if (!p) return;
		let e = setTimeout(() => location.assign(p.url), Sa);
		return () => clearTimeout(e);
	}, [p]), p ? /* @__PURE__ */ (0, Q.jsx)(I, {
		title: n("访问地址"),
		children: /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsxs)(P, {
			tone: "success",
			title: n("配置已保存"),
			children: [n("Peach 正在重新启动。"), /* @__PURE__ */ (0, Q.jsx)(ht, {
				href: p.url,
				size: "small",
				children: n("返回网络与访问")
			})]
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("访问地址"),
		onSubmit: i ? (n) => {
			n.preventDefault(), f({}), h.run("save", (t) => U(Qe, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: l,
				scan_now: !1,
				...r?.editable ? {
					host: a,
					...a === "0.0.0.0" ? { mdns_name: s } : {}
				} : {}
			}, "POST", t), (e) => {
				m({ url: new URL("/settings/network", e.url).href }), t("已保存配置");
			}, (e) => {
				let t = e instanceof qe && e.status === 400 ? e.body?.errors : null;
				t && (t.port || t.host || t.mdns_name) ? f(t) : h.setError(G(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [
			r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Eo, {
				label: n("本机地址"),
				value: r.local_url,
				receipt: t
			}), r.lan_url || r.ip_url ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)(Eo, {
					label: n("手机连接地址"),
					value: r.lan_url || r.ip_url,
					receipt: t
				}),
				r.lan_url && r.ip_url ? /* @__PURE__ */ (0, Q.jsx)(Eo, {
					label: n("备用 IP 地址"),
					value: r.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(M, { children: [n("手机与电脑连接同一 Wi-Fi。"), r.ip_url && r.lan_url ? n("名称地址打不开时，可尝试备用 IP 地址。") : ""] })
			] }) : /* @__PURE__ */ (0, Q.jsx)(M, { children: r.scope === "local" ? n("当前只允许这台电脑访问，手机无法连接。") : n("局域网连接地址未取得，请检查电脑的网络连接和服务启动配置。") })] }) : null,
			i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [r?.editable ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(So, {
				id: "configHost",
				label: n("谁可以访问"),
				value: a,
				onChange: o,
				options: wo,
				isDisabled: !!h.busy,
				isInvalid: !!d.host,
				children: d.host ? /* @__PURE__ */ (0, Q.jsx)(O, { children: d.host }) : null
			}), a === "0.0.0.0" ? /* @__PURE__ */ (0, Q.jsx)(Co, {
				id: "configMdnsName",
				label: n("局域网访问地址"),
				value: s,
				onChange: c,
				prefix: r.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!h.busy,
				validationBehavior: "aria",
				isInvalid: !!d.mdns_name,
				hint: d.mdns_name ? n(d.mdns_name) : void 0
			}) : null] }) : null, /* @__PURE__ */ (0, Q.jsx)(Co, {
				id: "configPort",
				label: n("端口"),
				prefix: "localhost:",
				inputMode: "numeric",
				value: l,
				onChange: u,
				isDisabled: !!h.busy,
				validationBehavior: "aria",
				isInvalid: !!d.port,
				hint: d.port ? n(d.port) : void 0
			})] }) : /* @__PURE__ */ (0, Q.jsx)(M, { children: e.notice || n("访问范围、名称与端口由服务启动配置管理。") }),
			r?.editable && a === "0.0.0.0" && r.scope === "local" ? /* @__PURE__ */ (0, Q.jsx)(M, { children: n("保存并重启后显示手机连接地址。可在下方设置访问密码。") }) : null,
			h.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: n("没有保存"),
				children: h.error
			}) : null
		] }), i ? /* @__PURE__ */ (0, Q.jsx)(j, {
			status: n("保存后 Peach 会重启，并跳转到新地址。"),
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...W(h.busy === "save"),
				children: n("保存配置")
			})
		}) : null]
	});
}
function Eo({ label: e, value: t, receipt: n }) {
	let r = X(), i = J();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(N, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				"aria-label": r("复制{label}", { label: e }),
				onClick: () => void i.run("copy", () => navigator.clipboard.writeText(t), () => n("已复制地址")),
				children: r("复制地址")
			})]
		}), i.error ? /* @__PURE__ */ (0, Q.jsx)(M, {
			role: "status",
			children: r("复制失败，请选中地址复制。")
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var Do = [
	["environment", "跟随环境"],
	["direct", "直连"],
	["proxy", "自定义"]
];
function Oo({ mode: e, onChange: t, labelledBy: n }) {
	return X(), /* @__PURE__ */ (0, Q.jsx)(L, {
		"aria-label": n ? void 0 : q("连接方式"),
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: Do.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(R, {
			id: e,
			children: q(t)
		}, e))
	});
}
function ko({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
	let a = X();
	return /* @__PURE__ */ (0, Q.jsx)(N, {
		id: e,
		type: "password",
		label: q("代理地址"),
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? q("已保存，留空保留") : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isInvalid: !!i,
		hint: typeof i == "string" ? a(i) : i
	});
}
// src/react/settings/tunnel-settings.tsx
var Ao = 2e3, jo = [["quick", "临时链接"], ["named", "命名隧道"]], Mo = {
	quick: "临时预览用，地址随机，重启后会变。启动前要先设置访问密码。",
	named: "使用你在 Cloudflare 绑定的固定域名。启动前要先设置访问密码。"
};
function No({ revision: e, initial: t, receipt: n }) {
	let r = X(), [i, a] = (0, Z.useState)(t), [o, s] = (0, Z.useState)(e), [c, l] = (0, Z.useState)(t.mode), [u, d] = (0, Z.useState)(t.hostname), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)({}), g = J(), _ = i.state === "starting" || i.state === "running", v = i.named_available && c === "named";
	(0, Z.useEffect)(() => {
		if (i.state !== "starting") return;
		let e = new AbortController(), t = window.setInterval(() => {
			an(e.signal).then((t) => {
				!e.signal.aborted && t.tunnel && (bn.setQueryData(Ze, t), a(t.tunnel), s(t.revision));
			}).catch(() => void 0);
		}, Ao);
		return () => {
			e.abort(), window.clearInterval(t);
		};
	}, [i.state]);
	let y = (e, t, n) => {
		h({}), g.run(e, (e) => U("/api/configuration/tunnel", {
			revision: o,
			enabled: t,
			mode: c,
			hostname: u,
			token: f
		}, "POST", e), (e) => {
			a(e), s(e.revision), l(e.mode), d(e.hostname), p(""), n(e);
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? h(n) : g.setError(G(e));
		});
	};
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "tunnel",
		title: r("Cloudflare 公网入口"),
		onSubmit: (e) => {
			e.preventDefault(), y("save", _, () => n("已保存配置"));
		},
		aside: /* @__PURE__ */ (0, Q.jsx)(V, {
			tone: i.error ? "error" : _ ? "progress" : "neutral",
			children: i.error ? r("连接失败") : i.state === "running" ? r("运行中") : i.state === "starting" ? r("连接中") : r("已停止")
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [
			i.named_available ? /* @__PURE__ */ (0, Q.jsx)(Ft, {
				"aria-label": r("公网入口的形态（二选一）"),
				value: c,
				isDisabled: _,
				onChange: (e) => l(e),
				className: jt,
				children: jo.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
					value: e,
					className: At,
					children: r(t)
				}, e))
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: Mo[v ? "named" : "quick"] }),
			v ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(N, {
				id: "tunnel-hostname",
				label: r("公开主机名"),
				autoComplete: "off",
				maxLength: 253,
				value: u,
				onChange: d,
				isDisabled: _,
				validationBehavior: "aria",
				isInvalid: !!m.hostname,
				hint: m.hostname ? r(m.hostname) : r("Cloudflare Zero Trust 里指向这台电脑的主机名。")
			}), /* @__PURE__ */ (0, Q.jsx)(N, {
				id: "tunnel-token",
				type: "password",
				label: r("隧道令牌"),
				autoComplete: "off",
				maxLength: 2048,
				value: f,
				onChange: p,
				isDisabled: _,
				validationBehavior: "aria",
				hint: i.token_set ? r("已保存，留空不改。") : r("在 Cloudflare Zero Trust 的隧道详情页复制。")
			})] }) : null,
			i.available ? null : /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "warning",
				title: r("找不到 cloudflared"),
				children: r("安装官方 cloudflared，或用设置文件的 tunnel.binary 与 PEACH_CLOUDFLARED 指定路径。")
			}),
			i.state === "running" && i.url ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "info",
				title: r("公网地址"),
				children: /* @__PURE__ */ (0, Q.jsx)(k, {
					href: i.url,
					children: i.url
				})
			}) : null,
			i.state === "starting" ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "info",
				title: r("正在连接"),
				children: r("正在等待 cloudflared 连上 Cloudflare 边缘。")
			}) : null,
			i.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: i.error }) : null,
			g.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: g.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsxs)(j, {
			status: i.enabled ? "Peach 重启后自动恢复。" : void 0,
			children: [/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: i.named_available ? "secondary" : "primary",
				onClick: () => y("toggle", !_, (e) => n(e.enabled ? "公网入口已启动" : "公网入口已停止")),
				...W(g.busy === "toggle"),
				children: r(_ ? "停止公网入口" : "启动公网入口")
			}), i.named_available ? /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...W(g.busy === "save"),
				children: r("保存配置")
			}) : null]
		})]
	});
}
// src/react/settings/network-settings.tsx
function Po({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, Q.jsx)(To, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, Q.jsx)(xo, {
				initial: e.access,
				receipt: t
			}) : null,
			e.tunnel ? /* @__PURE__ */ (0, Q.jsx)(No, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t
			}) : null,
			e.peach_proxy ? /* @__PURE__ */ (0, Q.jsx)(Fo, {
				initial: e.peach_proxy,
				receipt: t
			}) : null
		]
	});
}
function Fo({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e), [a, o] = (0, Z.useState)(e.mode), [s, c] = (0, Z.useState)(""), l = J();
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		id: "peachProxy",
		title: n("Peach 代理"),
		onSubmit: (e) => {
			e.preventDefault(), l.run("save", (e) => U("/api/configuration/peach-proxy", {
				mode: a,
				proxy: s
			}, "POST", e), (e) => {
				i(e), c(""), t("已保存配置");
			});
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)(F, { children: /* @__PURE__ */ (0, Q.jsx)(z, {
				label: n("连接方式"),
				children: /* @__PURE__ */ (0, Q.jsx)(Oo, {
					mode: a,
					onChange: o
				})
			}) }),
			a === "proxy" || r.needs_selection || l.error ? /* @__PURE__ */ (0, Q.jsxs)(B, {
				divided: !0,
				children: [
					a === "proxy" ? /* @__PURE__ */ (0, Q.jsx)(ko, {
						id: "peachProxyAddress",
						value: s,
						onChange: c,
						saved: r.proxy_saved
					}) : null,
					r.needs_selection ? /* @__PURE__ */ (0, Q.jsx)(P, {
						tone: "warning",
						title: n("需要选择连接方式"),
						children: n("已有来源的代理地址不同，请选择公共连接方式。")
					}) : null,
					l.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: l.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...W(l.busy === "save"),
				children: n("保存配置")
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var Io = "将清除这个来源在本机和共享副本中的登录凭据。", Lo = "其他系统用户可以读取此凭据文件。请在运行 Peach 的 Mac 或 Linux 电脑上，将文件权限设为仅当前用户可读写（0600）。";
function Ro(e, t) {
	return (e.shared_fields || []).includes(t) ? q("来自共享，留空表示不改") : q(e.fields.includes(t) ? "已保存，留空表示不改" : "未填写");
}
function zo({ row: e }) {
	let t = X();
	if (tn(e)) return /* @__PURE__ */ (0, Q.jsx)(tt, {
		variant: "caption",
		color: "lime",
		children: t("已配置")
	});
	let n = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, Q.jsx)(tt, {
		variant: "caption",
		color: n,
		children: t($e[e.requirement] || "")
	});
}
function Bo({ row: e, readOnly: t, toast: n }) {
	let r = X(), [i, a] = (0, Z.useState)({}), [o, s] = (0, Z.useState)(""), c = tn(e), l = Nn({
		mutationFn: (t) => Tn(e.provider, t),
		onSuccess: (e, t) => {
			e.note ? s(e.note) : (s(""), a({}), bn.invalidateQueries({
				queryKey: ot,
				exact: !0
			}), n(Object.keys(t).length ? "已保存来源凭据" : "已清除来源凭据"));
		},
		onError: (e) => s(G(e))
	}), u = () => {
		let e = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? l.mutate(e) : s("没有填写内容");
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [r(e.why || ""), e.where ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [" ", /* @__PURE__ */ (0, Q.jsx)(k, {
				href: e.where,
				children: r("获取凭据")
			})] }) : null] }),
			e.howto ? /* @__PURE__ */ (0, Q.jsx)(M, { children: e.howto }) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, Q.jsx)(N, {
					type: "password",
					label: n,
					placeholder: Ro(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t,
					value: i[n] || "",
					onChange: (e) => a({
						...i,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: t,
					...W(l.isPending),
					onClick: () => void en({
						title: "清除来源凭据",
						body: Io,
						confirmLabel: "清除来源凭据",
						danger: !0,
						onConfirm: () => l.mutateAsync({})
					}),
					children: r("清除")
				}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "primary",
					disabled: t,
					...W(l.isPending),
					onClick: u,
					children: r("保存配置")
				})]
			}),
			o ? /* @__PURE__ */ (0, Q.jsx)(O, { children: o }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, Q.jsx)(M, { children: r("{value0} 使用共享副本中的登录信息，本机没有单独保存。清除时，本机和共享副本中的登录信息都会删除。", { value0: String(e.shared_fields.join("、")) }) }) : null,
			e.path ? /* @__PURE__ */ (0, Q.jsx)(D, {
				summary: r("凭据文件"),
				children: /* @__PURE__ */ (0, Q.jsx)(Dt, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: n
				})
			}) : null
		]
	});
}
function Vo({ row: e, readOnly: t, toast: n }) {
	let r = X(), i = /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, Q.jsx)(Qn, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, Q.jsx)(zo, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(tt, {
				variant: "caption",
				color: "rose",
				children: r("缺 {field}", { field: e })
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [i, e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsx)(M, { children: e.why }) : null]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			i,
			/* @__PURE__ */ (0, Q.jsx)(D, {
				summary: r(tn(e) ? "修改凭据" : "填写凭据"),
				defaultOpen: e.requirement === "required" && !tn(e),
				children: /* @__PURE__ */ (0, Q.jsx)(Bo, {
					row: e,
					readOnly: t,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: r("凭据文件权限过宽"),
				children: Lo
			}) : null
		]
	});
}
function Ho({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = X(), a = e.providers || [], o = a.filter((e) => e.requirement === "required" && !tn(e));
	if ((0, Z.useEffect)(() => {
		Sn("credentials", { done: a.filter(tn).map((e) => e.provider) });
	}, [e]), !a.length) return /* @__PURE__ */ (0, Q.jsx)(it, {
		size: "compact",
		icon: $t,
		title: i("没有可配置的来源"),
		children: i("已接入的站点及其凭据状态会显示在这里。")
	});
	let s = o.length ? /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: i("{count} 个待配置", { count: o.length })
	}) : null, c = /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: [
		{
			title: "可配置凭据",
			rows: a.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: "不需要凭据",
			rows: a.filter((e) => e.requirement === "none")
		},
		{
			title: "暂不支持",
			rows: a.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": i(e.title),
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: i(e.title)
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: Xt({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(Vo, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, Q.jsx)(I, {
		title: i("来源凭据"),
		aside: s || void 0,
		children: /* @__PURE__ */ (0, Q.jsx)(B, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-col gap-4",
			children: c
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Xt({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: i("来源凭据")
			}), s]
		}), c]
	});
}
// src/react/settings/entry-links-settings.tsx
function Uo({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e.sites), a = J(), o = (e, t) => i((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("作品资料站点"),
		onSubmit: (e) => {
			e.preventDefault();
			let n = { sites: Object.fromEntries(r.map((e) => [e.key, { host: e.host }])) };
			a.run("save", (e) => U("/api/configuration/entry-links", n, "POST", e), (e) => {
				i(e.sites), t("已保存配置");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [
			/* @__PURE__ */ (0, Q.jsx)(M, { children: nt }),
			r.map((e) => /* @__PURE__ */ (0, Q.jsx)(N, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, Q.jsx)(Rt, {
					site: e.key,
					label: n("{site} 地址", { site: e.label })
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => o(e.key, t),
				validationBehavior: "aria",
				hint: n(rt)
			}, e.key)),
			a.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: a.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(j, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...W(a.busy === "save"),
			children: n("保存配置")
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var Wo = "/api/configuration/indexers";
function Go({ receipt: e }) {
	let t = X(), n = Y({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => qt(Wo, e),
		refetchOnMount: "always"
	});
	return n.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: G(n.error) }) : n.isFetching ? /* @__PURE__ */ (0, Q.jsx)(Pt, {
		label: t("正在读取资源搜索设置"),
		html: fn
	}) : n.data ? /* @__PURE__ */ (0, Q.jsx)(Jo, {
		initial: n.data,
		receipt: e
	}) : null;
}
function Ko(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function qo({ row: e, index: t }) {
	let n = X(), r = [
		e.url ? Ko(e.url) : "未填地址",
		e.enabled ? "已启用" : "已停用",
		e.api_key_set && !e.clear_api_key ? "已保存 API key" : e.api_key ? "API key 待保存" : "没有 API key"
	];
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || n("索引器 {value0}", { value0: String(t + 1) })
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: r.join(" · ")
		})]
	});
}
function Jo({ initial: e, receipt: t }) {
	let n = X(), [r, i] = (0, Z.useState)(e.indexers), a = J();
	(0, Z.useEffect)(() => {
		Sn("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let o = (e, t) => i((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(I, {
		title: n("资源搜索"),
		onSubmit: (e) => {
			e.preventDefault(), a.run("save", (e) => U(Wo, { indexers: r }, "POST", e), (e) => {
				i(e.indexers), t("已保存索引器");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(B, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(D, {
				summary: n("索引器连接帮助"),
				children: /* @__PURE__ */ (0, Q.jsxs)(M, { children: [
					n("填写 Prowlarr 或 Jackett 提供的 Torznab 地址和 API key。"),
					" ",
					/* @__PURE__ */ (0, Q.jsx)(k, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: n("详细配置说明")
					})
				] })
			}), r.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(D, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, Q.jsx)(qo, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(N, {
								label: n("名称"),
								"aria-label": n("索引器 {value0} 名称", { value0: String(t + 1) }),
								value: e.name,
								maxLength: 80,
								isDisabled: !!a.busy,
								onChange: (t) => o(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(N, {
								label: n("Torznab 地址"),
								"aria-label": n("索引器 {value0} Torznab 地址", { value0: String(t + 1) }),
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: n("索引器提供的 API 地址"),
								isDisabled: !!a.busy,
								onChange: (t) => o(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(N, {
								label: "API key",
								"aria-label": n("索引器 {value0} API key", { value0: String(t + 1) }),
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? n("已保存，留空不改") : void 0,
								isDisabled: !!a.busy,
								onChange: (t) => o(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(et, {
										isSelected: e.enabled,
										isDisabled: !!a.busy,
										onChange: (t) => o(e.key, { enabled: t }),
										children: n("启用")
									}),
									e.api_key_set ? /* @__PURE__ */ (0, Q.jsx)(et, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!a.busy,
										onChange: (t) => o(e.key, { clear_api_key: t }),
										children: n("清除已保存的 API key")
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!a.busy,
										"aria-label": n("移除索引器 {value0}", { value0: String(t + 1) }),
										onClick: () => i(r.filter((t) => t.key !== e.key)),
										children: n("移除")
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), a.error ? /* @__PURE__ */ (0, Q.jsx)(O, { children: a.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(j, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!a.busy || r.length >= e.max_indexers,
			onClick: () => i([...r, {
				key: xn(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: n("添加索引器")
		}), /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...W(a.busy === "save"),
			children: n("保存配置")
		})] })]
	});
}
// src/react/settings/source-settings.tsx
function Yo({ data: e, receipt: t, panel: n, issues: r }) {
	let i = X(), a = Y({
		queryKey: ot,
		queryFn: ({ signal: e }) => on(e),
		enabled: n?.active !== !1,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...er(n),
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(Je, {
				href: "/sources",
				variant: "secondary",
				children: i("采集来源与登录状态")
			}) }),
			a.data ? /* @__PURE__ */ (0, Q.jsx)(Ho, {
				data: a.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : a.error ? /* @__PURE__ */ (0, Q.jsx)(P, {
				tone: "error",
				title: i("来源凭据未取得"),
				children: G(a.error)
			}) : n?.active === !1 ? null : /* @__PURE__ */ (0, Q.jsx)(Pt, {
				label: i("正在读取来源凭据"),
				html: nn
			}),
			/* @__PURE__ */ (0, Q.jsx)(oo, { receipt: t }),
			/* @__PURE__ */ (0, Q.jsx)(Go, { receipt: t }),
			e.entry_links ? /* @__PURE__ */ (0, Q.jsx)(Uo, {
				initial: e.entry_links,
				receipt: t
			}) : null
		]
	});
}
// src/react/settings/configuration-shape.ts
function Xo(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => Ye.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available
	};
}
function Zo(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function Qo(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharing: !!e.library_sharing,
		sharingNotice: !!e.library_sharing?.notice,
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function $o({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X(), a = Y({
		queryKey: Ze,
		queryFn: ({ signal: e }) => an(e)
	}), o = a.data;
	return o ? /* @__PURE__ */ (0, Q.jsx)(ns, {
		data: o,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: a.isFetching,
		reload: () => {
			a.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, Q.jsx)(P, {
			tone: "error",
			title: i("配置读取失败"),
			children: a.error ? G(a.error) : i("未取得配置，请刷新页面重试。")
		})
	});
}
function es({ data: e, sections: t, reload: n, refreshing: r }) {
	let i = X();
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => {
		let a = e.section_errors?.[t];
		return a ? /* @__PURE__ */ (0, Q.jsx)(P, {
			tone: "error",
			title: a.title,
			action: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...W(r),
				children: i("重新读取")
			}),
			children: a.message
		}, t) : null;
	}) });
}
var ts = 0;
function ns({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let s = X(), [c] = (0, Z.useState)(() => `board-tabs-${++ts}`), [l, u] = (0, Z.useState)(r), d = (0, Z.useRef)(null), f = (0, Z.useRef)(l);
	(0, Z.useEffect)(() => {
		u(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = Xo(e);
		t && Sn("downloads", t), Sn("network", Zo(e)), Sn("maintenance", Qo(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		if (f.current === l) return;
		f.current = l;
		let e = d.current?.querySelector("[role=\"tablist\"]"), t = d.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [l]);
	let p = (e) => {
		u(e), On(Dn(e), {
			replace: !0,
			state: _n.navigation.location.state
		});
	}, [m, h] = (0, Z.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => h(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let g = (0, Z.useRef)([]), _ = {
		data: e,
		receipt: t
	}, v = (t) => /* @__PURE__ */ (0, Q.jsx)(es, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), y = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], b = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || y.some((t) => e.section_errors?.[t])), x = e.downloads, S = [
		{
			title: "媒体库与入库",
			body: (n) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...er(n),
				children: [
					v([
						"media_sources",
						"library_count",
						"mount_dependencies"
					]),
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, Q.jsx)(eo, { ..._ }) : null,
					/* @__PURE__ */ (0, Q.jsx)(vo, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(uo, { receipt: t })
				]
			})
		},
		{
			title: "来源与订阅",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Yo, {
				..._,
				panel: e,
				issues: v(["entry_links"])
			})
		},
		...x || e.section_errors?.downloads ? [{
			title: "下载渠道",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(hr, {
				initial: x,
				receipt: t,
				panel: e,
				issues: v(["downloads"])
			})
		}] : [],
		...b ? [{
			title: "网络与访问",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Po, {
				..._,
				panel: e,
				issues: v(y)
			})
		}] : [],
		{
			title: "应用与维护",
			body: (e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...er(e),
				children: [
					v([
						"startup",
						"uninstall",
						"storage",
						"remote_reporting",
						"library_sharing",
						"updates",
						"update_job",
						"automatic_updates",
						"facts"
					]),
					/* @__PURE__ */ (0, Q.jsx)(ba, { ..._ }),
					/* @__PURE__ */ (0, Q.jsx)(fo, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(ca, {
						..._,
						reopenTutorial: n
					})
				]
			})
		},
		{
			title: "系统诊断",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
				...er(e),
				children: e.active ? i : null
			})
		}
	], C = Math.max(0, S.findIndex((e) => e.title === l)), w = (e, t) => {
		let n = S.length - 1, r;
		if (e.key === "ArrowRight" || e.key === "ArrowDown") r = t === n ? 0 : t + 1;
		else if (e.key === "ArrowLeft" || e.key === "ArrowUp") r = t === 0 ? n : t - 1;
		else if (e.key === "Home") r = 0;
		else if (e.key === "End") r = n;
		else return;
		e.preventDefault(), p(S[r].title), g.current[r]?.focus();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: d,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, Q.jsx)(Ot, {
			className: "ui-board-local-nav",
			role: "tablist",
			"aria-label": s("配置分区"),
			"data-section-nav": "",
			"data-section-items": "",
			"data-pill-nav": "",
			"aria-orientation": m ? "horizontal" : "vertical",
			children: S.map(({ title: e }, t) => /* @__PURE__ */ (0, Q.jsx)("button", {
				ref: (e) => {
					g.current[t] = e;
				},
				type: "button",
				role: "tab",
				id: `${c}-tab-${t}`,
				"aria-controls": `${c}-panel-${t}-0`,
				"aria-selected": t === C,
				"data-pill-selected": t === C ? "" : void 0,
				"data-pill-variant": "gray",
				tabIndex: t === C ? 0 : -1,
				onClick: () => p(e),
				onKeyDown: (e) => w(e, t),
				children: s(e)
			}, e))
		}), S.map(({ title: e, body: t }, n) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
			className: "ui-configgroup",
			children: s(e)
		}), t({
			index: n,
			id: `${c}-panel-${n}-0`,
			labelledBy: `${c}-tab-${n}`,
			active: n === C
		})] }, e))]
	});
}
export { $o as ConfigurationPage };

//# debugId=7ae20d1b-863c-4a3d-88e1-365f68c21ae7