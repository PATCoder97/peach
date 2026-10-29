(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b578a7cc-d8a3-4709-9b2e-9c09d028a449", e._sentryDebugIdIdentifier = "sentry-dbid-b578a7cc-d8a3-4709-9b2e-9c09d028a449");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, Button as n, EmptyFocusButton as r, EmptyState as i, Input as a, MENU_ITEM as o, MENU_ITEM_INTERACTIVE as s, MENU_POPOVER_SURFACE as c, MenuDialog as l, MixCard as u, ModalFrame as d, PLAYLISTS_KEY as f, RetryNote as p, __toESM as m, busyProps as h, confirmModal as g, createPlaylist as _, cx as v, deletePlaylist as y, errorMessage as b, fetchPlaylists as x, keepPlaylist as S, posterUrl as C, recreatePlaylist as w, refreshPlaylists as T, renamePlaylist as E, require_jsx_runtime as D, require_react as O, resumeAssetId as k, spriteGlyph as A, translate as j, useMutation as M, useQuery as N, useTranslation as P } from "./peach-app.js";
// src/react/playlists/playlists-page.tsx
var F = /* @__PURE__ */ m(O(), 1), I = D(), L = A("ellipsis"), R = A("pencil"), z = A("trash"), B = A("playlist"), V = v(o, s, "text-body-2-medium"), H = "播放列表名称不能为空", U = (e) => async () => {
	try {
		await e();
	} finally {
		T();
	}
};
function W({ toast: e }) {
	let t = P(), [r, i] = (0, F.useState)(""), [o, s] = (0, F.useState)(""), c = M({
		mutationFn: (e) => _(e),
		onSuccess: (t) => {
			i(""), s(""), T(), e("已新建播放列表", { undo: U(() => y(t.playlist.id)) });
		},
		onError: (e) => s(b(e) || "新建失败")
	});
	return /* @__PURE__ */ (0, I.jsxs)("form", {
		"data-playlist-create": "",
		"aria-label": j("新建播放列表"),
		onSubmit: (e) => {
			e.preventDefault(), !c.isPending && (r.trim() ? c.mutate(r) : s(H));
		},
		className: "flex flex-wrap items-end gap-2",
		children: [/* @__PURE__ */ (0, I.jsx)("div", {
			className: "min-w-50 max-w-80 flex-1 basis-50 max-board-narrow:min-w-0 max-board-narrow:max-w-none",
			children: /* @__PURE__ */ (0, I.jsx)(a, {
				label: j("新播放列表"),
				placeholder: j("输入名称"),
				maxLength: 80,
				value: r,
				onChange: (e) => {
					i(e), s("");
				},
				validationBehavior: "aria",
				isInvalid: !!o,
				hint: o ? t(o) : void 0
			})
		}), /* @__PURE__ */ (0, I.jsx)(n, {
			type: "submit",
			...h(c.isPending),
			children: j("新建")
		})]
	});
}
function G({ target: t, close: r, toast: i }) {
	let o = P(), [s, c] = (0, F.useState)(""), [l, u] = (0, F.useState)(""), f = (0, F.useRef)(null);
	(0, F.useEffect)(() => {
		if (!t) return;
		c(t.name), u("");
		let e = requestAnimationFrame(() => {
			f.current?.focus(), f.current?.select();
		});
		return () => cancelAnimationFrame(e);
	}, [t]);
	let p = M({
		mutationFn: ({ row: e, value: t }) => E(e.id, t),
		onSuccess: (e, { row: t }) => {
			r(), T(), i("已重命名播放列表", { undo: U(() => E(t.id, t.name)) });
		},
		onError: (e) => u(b(e))
	});
	return /* @__PURE__ */ (0, I.jsx)(d, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || r();
		},
		width: "form",
		children: /* @__PURE__ */ (0, I.jsxs)("form", {
			"data-playlist-rename": "",
			onSubmit: (e) => {
				if (e.preventDefault(), !t || p.isPending) return;
				let n = s.trim();
				n ? p.mutate({
					row: t,
					value: n
				}) : u(H);
			},
			className: "flex min-h-0 flex-col",
			children: [/* @__PURE__ */ (0, I.jsxs)("div", {
				className: "flex flex-col gap-4 p-5",
				children: [/* @__PURE__ */ (0, I.jsx)(e, {
					slot: "title",
					className: "text-title-2-semibold text-text-primary",
					children: j("编辑名称")
				}), /* @__PURE__ */ (0, I.jsx)(a, {
					ref: f,
					label: j("名称"),
					placeholder: j("输入名称"),
					maxLength: 80,
					value: s,
					onChange: (e) => {
						c(e), u("");
					},
					validationBehavior: "aria",
					isInvalid: !!l,
					hint: l ? o(l) : void 0
				})]
			}), /* @__PURE__ */ (0, I.jsxs)("div", {
				className: "flex justify-between gap-4 p-3",
				children: [/* @__PURE__ */ (0, I.jsx)(n, {
					variant: "secondary",
					onClick: r,
					children: j("取消")
				}), /* @__PURE__ */ (0, I.jsx)(n, {
					type: "submit",
					...h(p.isPending),
					children: j("保存名称")
				})]
			})]
		})
	});
}
function K({ name: e, onRename: n, onDelete: r }) {
	let i = P();
	P();
	let a = (0, F.useRef)(null), [o, s] = (0, F.useState)(!1), u = (e) => {
		s(!1), e();
	};
	return /* @__PURE__ */ (0, I.jsxs)(I.Fragment, { children: [/* @__PURE__ */ (0, I.jsx)("button", {
		ref: a,
		type: "button",
		title: j("更多操作"),
		"aria-label": i("播放列表操作：{value0}", { value0: String(e) }),
		"aria-haspopup": "dialog",
		"aria-expanded": o,
		"data-playlist-menu": "",
		onClick: () => s(!0),
		className: "flex size-7.5 flex-none cursor-pointer items-center justify-center rounded-2lg text-foreground-icon-secondary outline-none transition-colors hover:bg-background-primary-hover hover:text-foreground-icon-primary aria-expanded:bg-background-primary-hover aria-expanded:text-foreground-icon-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring",
		children: /* @__PURE__ */ (0, I.jsx)(L, {
			"aria-hidden": !0,
			className: "size-4.5"
		})
	}), /* @__PURE__ */ (0, I.jsx)(t, {
		triggerRef: a,
		isOpen: o,
		onOpenChange: s,
		placement: "bottom end",
		offset: 4,
		className: c,
		children: /* @__PURE__ */ (0, I.jsxs)(l, {
			"aria-label": i("播放列表操作：{value0}", { value0: String(e) }),
			className: "flex w-37.5 flex-col gap-0.5 outline-none",
			children: [/* @__PURE__ */ (0, I.jsxs)("button", {
				type: "button",
				className: V,
				onClick: () => u(n),
				children: [/* @__PURE__ */ (0, I.jsx)(R, {
					"aria-hidden": !0,
					className: "size-(--icon-inline) shrink-0"
				}), j("编辑名称")]
			}), /* @__PURE__ */ (0, I.jsxs)("button", {
				type: "button",
				className: V,
				onClick: () => u(r),
				children: [/* @__PURE__ */ (0, I.jsx)(z, {
					"aria-hidden": !0,
					className: "size-(--icon-inline) shrink-0"
				}), j("删除播放列表")]
			})]
		})
	})] });
}
function q({ openPlaylist: e, openEntity: t, canFlip: n, toast: a, revision: o }) {
	P();
	let s = N({
		queryKey: f,
		queryFn: ({ signal: e }) => x(e)
	}), [c, l] = (0, F.useState)(null), d = (0, F.useRef)(o);
	(0, F.useEffect)(() => {
		d.current !== o && (d.current = o, T());
	}, [o]);
	let m = s.data, h = m?.items ?? [], _ = (e) => {
		g({
			title: "删除播放列表",
			body: "这个播放列表将被删除，视频文件保留。",
			confirmLabel: "删除播放列表",
			danger: !0,
			onConfirm: async () => {
				let t = await S(e.id);
				await y(e.id), T(), a("已删除播放列表", t ? { undo: U(() => w(t)) } : void 0);
			}
		});
	};
	return /* @__PURE__ */ (0, I.jsxs)("div", {
		className: "w-full pt-1 pb-10.5",
		children: [
			/* @__PURE__ */ (0, I.jsxs)("header", {
				className: "mb-4 flex items-start justify-between gap-4.5 max-board-narrow:flex-col max-board-narrow:items-stretch",
				children: [/* @__PURE__ */ (0, I.jsxs)("div", { children: [/* @__PURE__ */ (0, I.jsx)("h2", {
					className: "mb-1 text-display-4-medium! text-text-primary",
					children: j("播放列表")
				}), /* @__PURE__ */ (0, I.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: j("保存 Mix，按自己的顺序继续播放。")
				})] }), /* @__PURE__ */ (0, I.jsx)(W, { toast: a })]
			}),
			/* @__PURE__ */ (0, I.jsx)("div", {
				className: "mx-auto w-full max-w-board",
				children: m ? h.length ? /* @__PURE__ */ (0, I.jsx)("div", {
					"data-playlist-grid": "",
					className: "card-grid-cover gap-4.5",
					children: h.map((r) => {
						let i = k(r), a = r.name.trim() || "未命名播放列表";
						return /* @__PURE__ */ (0, I.jsx)(u, {
							"data-playlist-card": String(r.id),
							name: a,
							caption: r.source_kind === "mix" ? j("由 Mix 保存") : j("手动播放列表"),
							count: r.item_count,
							poster: r.preview_asset_id ? C(r.preview_asset_id) : null,
							flipImages: async () => (r.preview_ids || []).map(C),
							canFlip: n,
							faces: r.faces || [],
							onOpenEntity: t,
							...i ? { onOpen: () => e(r.id, i) } : {},
							openLabel: `打开播放列表 ${a}`,
							menu: /* @__PURE__ */ (0, I.jsx)(K, {
								name: a,
								onRename: () => l(r),
								onDelete: () => _(r)
							})
						}, r.id);
					})
				}) : /* @__PURE__ */ (0, I.jsx)(i, {
					icon: B,
					title: j("还没有播放列表"),
					actions: /* @__PURE__ */ (0, I.jsx)(r, {
						target: "[data-playlist-create] input",
						children: j("新建播放列表")
					}),
					children: j("保存 Mix 或新建列表后，会在这里按自己的顺序继续播放。")
				}) : s.isError ? /* @__PURE__ */ (0, I.jsx)(p, {
					message: b(s.error) || j("播放列表读取失败"),
					onRetry: () => void s.refetch()
				}) : null
			}),
			/* @__PURE__ */ (0, I.jsx)(G, {
				target: c,
				close: () => l(null),
				toast: a
			})
		]
	});
}
export { q as PlaylistsPage };

//# debugId=b578a7cc-d8a3-4709-9b2e-9c09d028a449