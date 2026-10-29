(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "936af7df-e80b-437b-91b6-76d2bd78cea2", e._sentryDebugIdIdentifier = "sentry-dbid-936af7df-e80b-437b-91b6-76d2bd78cea2");
	} catch {}
})();
import { CHART_CARD as e, CategoryTick as t, ChartEmpty as n, ChartHead as r, ChartTip as i, Dot as a, EvilBarChart as o, Layer as s, TIP_SURFACE as c, TIP_SWATCH as l, Text as u, TipRow as d, ZIndexLayer as f, adaptEventsOfChild as p, addAngleAxis as m, categoryAxisWidth as h, combineAxisTicks as g, combineCategoricalDomain as _, combineConfiguredScale as v, combineGraphicalItemTicks as y, createSelector as b, defaultPolarAngleAxisProps as x, degreeToRadian as S, getAxisTypeBasedOnLayout as ee, getClassNameFromUnknown as te, noop as ne, pickAxisType as C, polarToCartesian as w, rechartsScaleFactory as re, removeAngleAxis as ie, resolveDefaultProps as ae, roundTemplateLiteral as oe, selectAngleAxis as T, selectAngleAxisRangeWithReversed as se, selectChartLayout as E, selectDuplicateDomain as D, selectPolarAppliedValues as ce, selectPolarAxisCheckedDomain as le, selectPolarNiceTicks as ue, selectPolarViewBox as de, selectRadiusAxis as fe, selectRadiusAxisRangeWithReversed as pe, selectRealScaleType as O, selectRenderableAxisSettings as me, svgPropertiesAndEvents as k, svgPropertiesNoEvents as A, svgPropertiesNoEventsFromUnknown as he, tone as ge, useAppDispatch as _e, useAppSelector as j, useIsPanorama as ve, usePolarChartLayout as ye } from "./peach-app.chart-tip-CvXosTpk.js";
import { __toESM as be, clsx as M, f1 as xe, formatNumber as N, getLocale as Se, require_jsx_runtime as Ce, require_react as we, translate as Te, useTranslation as P } from "./peach-app.js";
// node_modules/recharts/es6/shape/Polygon.js
var F = /* @__PURE__ */ be(we()), Ee = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
], De;
function I() {
	return I = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, I.apply(null, arguments);
}
function Oe(e, t) {
	if (e == null) return {};
	var n, r, i = ke(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function ke(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Ae(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var je = (e) => e != null && e.x === +e.x && e.y === +e.y, Me = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	e.forEach((e) => {
		var n = t[t.length - 1];
		je(e) ? n && n.push(e) : n && n.length > 0 && t.push([]);
	});
	var n = e[0], r = t[t.length - 1];
	je(n) && r && r.push(n);
	var i = t[t.length - 1];
	return i && i.length <= 0 && (t = t.slice(0, -1)), t;
}, L = (e, t) => {
	var n = Me(e);
	t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
	var r = n.map((e) => e.reduce((e, t, n) => oe(De ||= Ae([
		"",
		"",
		"",
		",",
		""
	]), e, n === 0 ? "M" : "L", t.x, t.y), "")).join("");
	return n.length === 1 ? `${r}Z` : r;
}, Ne = (e, t, n) => {
	var r = L(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${L(Array.from(t).reverse(), n).slice(1)}`;
}, R = (e) => {
	var t = e.points, n = e.className, r = e.baseLinePoints, i = e.connectNulls, a = Oe(e, Ee);
	if (!t || !t.length) return null;
	var o = M("recharts-polygon", n);
	if (r && r.length) {
		var s = a.stroke && a.stroke !== "none", c = Ne(t, r, i);
		return /*#__PURE__*/ F.createElement("g", { className: o }, /*#__PURE__*/ F.createElement("path", I({}, k(a), {
			fill: c.slice(-1) === "Z" ? a.fill : "none",
			stroke: "none",
			d: c
		})), s ? /*#__PURE__*/ F.createElement("path", I({}, k(a), {
			fill: "none",
			d: L(t, i)
		})) : null, s ? /*#__PURE__*/ F.createElement("path", I({}, k(a), {
			fill: "none",
			d: L(r, i)
		})) : null);
	}
	var l = L(t, i);
	return /*#__PURE__*/ F.createElement("path", I({}, k(a), {
		fill: l.slice(-1) === "Z" ? a.fill : "none",
		className: o,
		d: l
	}));
}, z = (e, t, n) => {
	switch (t) {
		case "angleAxis": return T(e, n);
		case "radiusAxis": return fe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, B = (e, t, n) => {
	switch (t) {
		case "angleAxis": return se(e, n);
		case "radiusAxis": return pe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Pe = b([
	z,
	O,
	le,
	B
], v), V = b([Pe], re), Fe = b([
	E,
	ce,
	me,
	C
], _), H = b([
	E,
	z,
	O,
	V,
	ue,
	B,
	D,
	Fe,
	C
], g), Ie = b([H], (e) => {
	if (e) {
		var t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var n = (e.coordinate + 360) % 360;
			t.has(n) || t.set(n, e);
		}), Array.from(t.values());
	}
}), Le = b([
	E,
	z,
	V,
	B,
	D,
	Fe,
	C
], y), Re = ["children", "type"], ze = ["ref"];
function U() {
	return U = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, U.apply(null, arguments);
}
function W(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function G(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? W(Object(n), !0).forEach(function(t) {
			Be(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Be(e, t, n) {
	return (t = Ve(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ve(e) {
	var t = He(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function He(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function K(e, t) {
	if (e == null) return {};
	var n, r, i = Ue(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Ue(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var q = 1e-5, We = Math.cos(S(45)), Ge = "angleAxis";
function Ke(e) {
	var t = _e(), n = ye(), r = (0, F.useMemo)(() => {
		e.children;
		var t = e.type, r = K(e, Re), i = ee(n, "angleAxis", t);
		if (i != null) return G(G({}, r), {}, { type: i });
	}, [e, n]), i = r === j((e) => T(e, r?.id));
	return (0, F.useEffect)(() => r == null ? ne : (t(m(r)), () => {
		t(ie(r));
	}), [t, r]), i ? e.children : null;
}
var qe = (e, t) => {
	var n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = w(n, r, i, e.coordinate), c = w(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
	return {
		x1: s.x,
		y1: s.y,
		x2: c.x,
		y2: c.y
	};
}, Je = (e, t) => {
	var n = Math.cos(S(-e.coordinate));
	return n > q ? t === "outer" ? "start" : "end" : n < -q ? t === "outer" ? "end" : "start" : "middle";
}, Ye = (e) => {
	var t = Math.cos(S(-e.coordinate)), n = Math.sin(S(-e.coordinate));
	return Math.abs(t) <= We ? n > 0 ? "start" : "end" : "middle";
}, Xe = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.axisLineType, o = e.axisLine, s = e.ticks;
	if (!o) return null;
	var c = G(G({}, A(e)), {}, { fill: "none" }, A(o));
	if (i === "circle") return /*#__PURE__*/ F.createElement(a, U({ className: "recharts-polar-angle-axis-line" }, c, {
		cx: t,
		cy: n,
		r
	}));
	var l = s.map((e) => w(t, n, r, e.coordinate));
	return /*#__PURE__*/ F.createElement(R, U({ className: "recharts-polar-angle-axis-line" }, c, { points: l }));
}, Ze = (e) => {
	var t = e.tick, n = e.tickProps, r = e.value;
	return t ? /*#__PURE__*/ F.isValidElement(t) ? /*#__PURE__*/ F.cloneElement(t, n) : typeof t == "function" ? t(n) : /*#__PURE__*/ F.createElement(u, U({}, n, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, Qe = (e) => {
	var t = e.tick, n = e.tickLine, r = e.tickFormatter, i = e.stroke, a = e.ticks, o = A(e);
	o.ref;
	var c = K(o, ze), l = he(t), u = G(G({}, c), {}, { fill: "none" }, A(n)), d = a.map((a, o) => {
		var d = qe(a, e), f = Je(a, e.orientation), m = Ye(a), h = G(G(G({}, c), {}, {
			textAnchor: f,
			verticalAnchor: m,
			stroke: "none",
			fill: i
		}, l), {}, {
			index: o,
			payload: a,
			x: d.x2,
			y: d.y2
		});
		return /*#__PURE__*/ F.createElement(s, U({
			className: M("recharts-polar-angle-axis-tick", te(t)),
			key: `tick-${a.coordinate}`
		}, p(e, a, o)), n && /*#__PURE__*/ F.createElement("line", U({ className: "recharts-polar-angle-axis-tick-line" }, u, d)), /*#__PURE__*/ F.createElement(Ze, {
			tick: t,
			tickProps: h,
			value: r ? r(a.value, o) : a.value
		}));
	});
	return /*#__PURE__*/ F.createElement(s, { className: "recharts-polar-angle-axis-ticks" }, d);
}, $e = (e) => {
	var t = e.angleAxisId, n = j(de), r = j((e) => V(e, "angleAxis", t)), i = ve(), a = j((e) => Ie(e, "angleAxis", t, i));
	if (n == null || !a || !a.length || r == null) return null;
	var o = G(G(G({}, e), {}, { scale: r }, n), {}, {
		radius: n.outerRadius,
		ticks: a
	});
	return /*#__PURE__*/ F.createElement(f, { zIndex: o.zIndex }, /*#__PURE__*/ F.createElement(s, { className: M("recharts-polar-angle-axis", Ge, o.className) }, /*#__PURE__*/ F.createElement(Xe, o), /*#__PURE__*/ F.createElement(Qe, o)));
};
function J(e) {
	var t = ae(e, x);
	return /*#__PURE__*/ F.createElement(Ke, {
		id: t.angleAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: !1,
		allowDataOverflow: !1,
		reversed: t.reversed,
		includeHidden: !1,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tick: t.tick,
		domain: t.domain
	}, /*#__PURE__*/ F.createElement($e, t));
}
J.displayName = "PolarAngleAxis";
// src/react/charts/bar-card.tsx
var Y = Ce(), X = [0, (e) => e * 1.2];
function et(e) {
	if (Se() !== "zh-CN") return N(e, {
		notation: "compact",
		maximumFractionDigits: 1
	});
	let t = Math.abs(e), n = (t, n) => {
		let r = e / t;
		return `${r.toLocaleString(void 0, { maximumFractionDigits: +(Math.abs(r) < 100) })}${n}`;
	};
	return t >= 1e8 ? n(1e8, "亿") : t >= 1e5 ? n(1e4, "万") : e.toLocaleString();
}
var tt = (e) => ({
	position: e,
	className: "fill-text-secondary",
	formatter: (e) => et(Number(e))
});
function nt({ title: a, unit: s, series: c, rows: l, color: u, empty: d, layout: f = "vertical" }) {
	let p = P(), m = l.filter((e) => Number.isFinite(e.value) && e.value >= 0).map((e) => ({
		name: e.name,
		value: e.value
	})), g = m.reduce((e, t) => e + t.value, 0);
	if (!g) return /* @__PURE__ */ (0, Y.jsx)(n, {
		title: a,
		children: d
	});
	let _ = f === "horizontal";
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: e,
		"aria-label": a,
		children: [/* @__PURE__ */ (0, Y.jsx)(r, {
			title: p(a),
			figure: N(g),
			note: p(s)
		}), /* @__PURE__ */ (0, Y.jsxs)(o, {
			data: m,
			config: { value: {
				label: p(c),
				colors: ge(u)
			} },
			layout: f,
			barRadius: 4,
			chartProps: _ ? { margin: {
				top: 5,
				right: 56,
				bottom: 5,
				left: 5
			} } : void 0,
			className: _ ? "aspect-auto h-64 flex-none text-text-secondary" : "aspect-auto h-56 flex-none text-text-secondary",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(o.Grid, {}),
				_ ? /* @__PURE__ */ (0, Y.jsx)(o.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, Y.jsx)(t, { along: "y" }),
					width: h(m.map((e) => e.name))
				}) : /* @__PURE__ */ (0, Y.jsx)(o.XAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, Y.jsx)(t, { along: "x" })
				}),
				_ ? /* @__PURE__ */ (0, Y.jsx)(o.XAxis, {
					hide: !0,
					domain: X
				}) : /* @__PURE__ */ (0, Y.jsx)(o.YAxis, {
					hide: !0,
					domain: X
				}),
				/* @__PURE__ */ (0, Y.jsx)(o.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: tt(_ ? "right" : "top")
					}
				}),
				/* @__PURE__ */ (0, Y.jsx)(i, {})
			]
		})]
	});
}
// src/react/charts/heat.ts
var rt = [
	"周一",
	"周二",
	"周三",
	"周四",
	"周五",
	"周六",
	"周日"
], it = (e, t) => e ? Math.max(.12, e / t) : 0;
function at(e) {
	let t = Array.from({ length: 7 }, () => Array(24).fill(0));
	for (let n of e?.hours || []) {
		let { weekday: e, hour: r, count: i } = n;
		!Number.isInteger(e) || e < 0 || e > 6 || !Number.isInteger(r) || r < 0 || r > 23 || !Number.isFinite(i) || i < 0 || (t[e][r] = (t[e][r] || 0) + i);
	}
	let n = t.flat(), r = Math.max(1, ...n);
	return {
		cells: t.flatMap((e, t) => e.map((e, n) => ({
			key: `${t}-${n}`,
			label: `${Te(rt[t])} ${n}:00`,
			count: e,
			share: it(e, r)
		}))),
		total: n.reduce((e, t) => e + t, 0)
	};
}
function ot(e) {
	let t = (e?.days || []).filter((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date) && Number.isFinite(e.count) && e.count >= 0).slice().sort((e, t) => e.date.localeCompare(t.date)), n = {
		cells: [],
		total: 0,
		start: "",
		end: ""
	};
	if (!t.length) return n;
	let r = /* @__PURE__ */ new Date(`${t.at(-1).date}T00:00:00Z`), i = new Date(r);
	i.setUTCDate(i.getUTCDate() - 90);
	let a = new Map(t.map((e) => [e.date, e.count])), o = Math.max(1, ...t.map((e) => e.count)), s = Array.from({ length: 91 }, (e, t) => {
		let n = new Date(i);
		n.setUTCDate(i.getUTCDate() + t);
		let r = n.toISOString().slice(0, 10), s = a.get(r) || 0;
		return {
			key: r,
			label: r,
			count: s,
			share: it(s, o)
		};
	});
	return {
		cells: s,
		total: s.reduce((e, t) => e + t.count, 0),
		start: i.toISOString().slice(0, 10),
		end: t.at(-1).date
	};
}
// src/react/charts/heat-card.tsx
var Z = 14, Q = 17, st = {
	4: {
		fill: "fill-chart-4",
		dot: "bg-chart-4"
	},
	5: {
		fill: "fill-chart-5",
		dot: "bg-chart-5"
	}
}, ct = {
	start: "translate-x-0",
	center: "-translate-x-1/2",
	end: "-translate-x-full"
};
function lt({ cell: e, series: t, tone: n, left: r, top: i, anchor: a }) {
	let o = P();
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		"aria-hidden": !0,
		style: {
			left: `${r}%`,
			top: `${i}%`
		},
		className: `pointer-events-none absolute z-10 -mt-2 -translate-y-full ${c} ${ct[a]}`,
		children: [/* @__PURE__ */ (0, Y.jsx)("div", {
			className: "font-medium text-foreground",
			children: e.label
		}), /* @__PURE__ */ (0, Y.jsx)(d, {
			name: o(t),
			value: e.count,
			swatch: /* @__PURE__ */ (0, Y.jsx)("i", { className: `${l} ${st[n].dot}` })
		})]
	});
}
function $({ title: t, words: n, cells: i, total: a, columns: o, rows: s, axis: c, footer: l, tone: u }) {
	let d = P(), [f, p] = (0, F.useState)(-1), m = c ? 30 : 0, h = c ? 18 : 0, g = m + o * Q, _ = h + s * Q, v = (e) => ({
		x: m + e % o * Q,
		y: h + Math.floor(e / o) * Q
	}), y = i[f], b = y ? v(f) : null, x = b ? (b.x + Z / 2) / g : 0, S = x < .1 ? "start" : x > .9 ? "end" : "center", ee = b ? {
		start: b.x,
		center: b.x + Z / 2,
		end: b.x + Z
	}[S] : 0;
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: e,
		children: [
			/* @__PURE__ */ (0, Y.jsx)(r, {
				title: d(t),
				figure: N(y ? y.count : a),
				note: y ? y.label : d(n.unit)
			}),
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "min-w-0 overflow-x-auto",
					children: /* @__PURE__ */ (0, Y.jsxs)("svg", {
						role: "img",
						"aria-label": d(t),
						onPointerLeave: () => p(-1),
						viewBox: `0 0 ${g} ${_}`,
						className: c ? "block h-auto min-w-80 w-full" : "block h-auto w-full",
						children: [c, i.map((e, t) => {
							let { x: r, y: i } = v(t);
							return /* @__PURE__ */ (0, Y.jsx)("rect", {
								tabIndex: 0,
								role: "img",
								"aria-label": `${e.label}${d("，")}${N(e.count)} ${d(n.cellUnit)}`,
								x: r,
								y: i,
								width: Z,
								height: Z,
								rx: 3,
								fillOpacity: e.share || 1,
								opacity: f >= 0 && f !== t ? .4 : 1,
								className: e.share ? `outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring ${st[u].fill}` : "fill-chart-track outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring",
								onPointerEnter: () => p(t),
								onFocus: () => p(t),
								onBlur: () => p(-1)
							}, e.key);
						})]
					})
				}), y && b ? /* @__PURE__ */ (0, Y.jsx)(lt, {
					cell: y,
					series: n.series,
					tone: u,
					anchor: S,
					left: ee / g * 100,
					top: b.y / _ * 100
				}) : null]
			}),
			/* @__PURE__ */ (0, Y.jsx)("footer", {
				className: "flex flex-wrap justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: l
			})
		]
	});
}
function ut() {
	let e = P();
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [rt.map((t, n) => /* @__PURE__ */ (0, Y.jsx)("text", {
		x: 0,
		y: 18 + n * Q + 7,
		dominantBaseline: "middle",
		className: "fill-text-secondary text-caption-1-regular",
		children: e(t)
	}, t)), Array.from({ length: 24 }, (e, t) => t % 2 ? null : /* @__PURE__ */ (0, Y.jsx)("text", {
		x: 30 + t * Q,
		y: 8,
		dominantBaseline: "middle",
		className: "fill-text-secondary text-caption-1-regular",
		children: t
	}, t))] });
}
function dt({ activity: e, title: t, dailyTitle: r, words: i, tone: a, empty: o }) {
	let s = P(), c = at(e), l = ot(e);
	return l.cells.length ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "inline-grid w-full items-start gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, Y.jsx)($, {
			title: t,
			words: i,
			tone: a,
			cells: c.cells,
			total: c.total,
			columns: 24,
			rows: 7,
			axis: /* @__PURE__ */ (0, Y.jsx)(ut, {}),
			footer: /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: s("星期 × 小时") }), /* @__PURE__ */ (0, Y.jsx)("span", { children: e?.timezone || "UTC+08:00" })] })
		}), /* @__PURE__ */ (0, Y.jsx)($, {
			title: r,
			words: i,
			tone: a,
			cells: l.cells,
			total: l.total,
			columns: 13,
			rows: 7,
			footer: /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: l.start }), /* @__PURE__ */ (0, Y.jsx)("span", { children: l.end })] })
		})]
	}) : /* @__PURE__ */ (0, Y.jsx)(n, {
		title: t,
		children: o
	});
}
// src/react/components/expandable-ranking.tsx
function ft({ children: e, className: t = "", previewCount: n = 10 }) {
	let r = P(), i = (0, F.useId)(), a = (0, F.useRef)(null), [o, s] = (0, F.useState)(!1), [c, l] = (0, F.useState)(!1), u = F.Children.toArray(e), d = u.length > n;
	(0, F.useLayoutEffect)(() => {
		let e = a.current;
		if (!e || !d) return;
		let t = () => {
			let t = e.children[Math.min(n, e.children.length) - 1];
			t && e.offsetWidth && (e.style.setProperty("--ranking-collapsed-height", `${t.offsetTop - e.offsetTop + t.offsetHeight}px`), e.style.setProperty("--ranking-expanded-height", `${e.scrollHeight}px`));
		};
		t();
		let r = new ResizeObserver(t);
		return r.observe(e), () => r.disconnect();
	}, [
		d,
		n,
		u.length
	]);
	let f = u.map((e, t) => !(0, F.isValidElement)(e) || t < n ? e : (0, F.cloneElement)(e, { inert: !o || void 0 }));
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		"data-expandable-ranking": !0,
		"data-expandable": d || void 0,
		"data-expanded": o || void 0,
		"data-animating": c || void 0,
		children: [/* @__PURE__ */ (0, Y.jsx)("ol", {
			id: i,
			ref: a,
			"data-expandable-ranking-list": !0,
			className: t,
			onTransitionEnd: (e) => {
				e.target === a.current && e.propertyName === "max-height" && l(!1);
			},
			children: f
		}), d ? /* @__PURE__ */ (0, Y.jsx)("button", {
			type: "button",
			"data-ranking-toggle": !0,
			"aria-controls": i,
			"aria-expanded": o,
			"aria-label": r(o ? "收起排名" : "展开更多排名"),
			onClick: () => {
				l(!0), s((e) => !e);
			},
			children: /* @__PURE__ */ (0, Y.jsx)(xe, { "aria-hidden": !0 })
		}) : null]
	});
}
export { dt as ActivityHeat, X as BAR_DOMAIN, nt as BarCard, ft as ExpandableRanking, J as PolarAngleAxis, R as Polygon, tt as barLabel, V as selectPolarAxisScale, H as selectPolarAxisTicks, Le as selectPolarGraphicalItemAxisTicks };

//# debugId=936af7df-e80b-437b-91b6-76d2bd78cea2