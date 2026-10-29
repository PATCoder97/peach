(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "41e34f74-c8a5-45a5-a63c-5786c158d7fa", e._sentryDebugIdIdentifier = "sentry-dbid-41e34f74-c8a5-45a5-a63c-5786c158d7fa");
	} catch {}
})();
import { AnimatedItems as e, CHART_CARD as t, CHART_COLORS as n, Cell as r, ChartBackground as i, ChartContainer as a, ChartEmpty as o, ChartLegend as s, ChartLegendContent as c, ChartTip as l, ChartTooltip as u, ChartTooltipContent as d, DefaultZIndexes as f, LabelListFromLabelProp as p, Layer as m, LoadingIndicator as h, PolarChart as g, PolarLabelListContextProvider as _, RegisterGraphicalItemId as v, Sector as y, SetPolarGraphicalItem as b, SetPolarLegendPayload as x, SetTooltipEntrySettings as S, Shape as C, ZIndexLayer as w, adaptEventsOfChild as T, arrayTooltipSearcher as E, combineAllBarPositions as ee, combineBarPosition as D, combineBarSizeList as te, combineDisplayedStackedData as ne, combineStackGroups as re, combineStackedData as ie, createSelector as O, defaultPolarChartProps as ae, findAllByType as oe, getBandSizeOfAxis as k, getBaseValueOfBar as se, getCateCoordinateOfBar as ce, getColorsCount as le, getNormalizedStackId as ue, getTooltipNameProp as de, getValueByDataKey as fe, getZIndexFromUnknown as pe, interpolate as me, isCategoricalAxis as he, isNullish as ge, isStacked as _e, matchAppend as ve, mathSign as ye, noop as be, resolveDefaultProps as xe, selectActiveTooltipIndex as Se, selectAngleAxis as Ce, selectBarCategoryGap as we, selectBarGap as Te, selectChartDataAndAlwaysIgnoreIndexes as Ee, selectChartDataWithIndexes as De, selectChartLayout as A, selectPolarItemsSettings as Oe, selectPolarViewBox as ke, selectRadiusAxis as Ae, selectReverseStackOrder as je, selectRootBarSize as Me, selectRootMaxBarSize as Ne, selectStackOffsetType as Pe, selectTooltipAxis as Fe, selectUnfilteredPolarItems as Ie, sliceConfig as Le, sliceKey as Re, svgPropertiesNoEvents as ze, svgPropertiesNoEventsFromUnknown as Be, truncateByDomain as Ve, useAnimationCallbacks as He, useAppSelector as Ue, useMouseClickItemDispatch as We, useMouseEnterItemDispatch as Ge, useMouseLeaveItemDispatch as Ke, usePolarChartLayout as qe } from "./peach-app.chart-tip-CvXosTpk.js";
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as j, $b4f18e3395fe64d7$export$3e41faf802a29e71 as M, $b4f18e3395fe64d7$export$b2539bed5023c21c as Je, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as Ye, ButtonLink as N, EmptyState as P, LOC as Xe, MEDIA_SOURCE_ICONS as Ze, NR as Qe, Note as $e, Progress as F, SEGMENT as et, SEGMENTED_TRACK as tt, STATS_KEY as nt, SegmentedTabList as rt, SourceMark as it, StatusLabel as at, Xc as ot, Xt as st, _8 as ct, __toESM as lt, bandRows as ut, cardClass as dt, clsx as ft, errorMessage as pt, fetchStats as mt, fmtCount as I, fmtSize as L, known as ht, lengthRows as gt, mM as _t, mediumRows as vt, percentText as R, playedFor as yt, playedItemUrl as bt, radialArc as xt, radialBarSize as St, radialCeiling as Ct, radialSlices as wt, reachedShare as Tt, replayRows as Et, require_jsx_runtime as Dt, require_react as Ot, settingsPath as kt, uo as At, useQuery as jt, useTranslation as z, watchNote as Mt, watchedShare as Nt } from "./peach-app.js";
import { Page as Pt } from "./peach-app.page-QAncjzM1.js";
import { STAT_STRIP as Ft, StatCard as It, statCardClass as Lt } from "./peach-app.stat-card-BeemgLDd.js";
import { ConnectionStatus as Rt } from "./peach-app.connection-status-Usa7d0Cc.js";
import { ActivityHeat as zt, BarCard as B, ExpandableRanking as Bt, PolarAngleAxis as Vt, selectPolarAxisScale as Ht, selectPolarAxisTicks as Ut, selectPolarGraphicalItemAxisTicks as Wt } from "./peach-app.expandable-ranking-Bn7UsLOY.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var V = /* @__PURE__ */ lt(Ot()), Gt = ["option"];
function Kt(e, t) {
	if (e == null) return {};
	var n, r, i = qt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function qt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Jt = y;
function Yt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function H(e) {
	var t = e.option, n = Kt(e, Gt);
	return /*#__PURE__*/ V.createElement(C, {
		option: t,
		DefaultShape: Jt,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function Xt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Xt(Object(n), !0).forEach(function(t) {
			Zt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Zt(e, t, n) {
	return (t = Qt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Qt(e) {
	var t = $t(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function $t(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var W = O([(e, t) => Ae(e, t), (e, t) => Ht(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), en = (e, t) => Wt(e, "radiusAxis", t, !1), G = O([(e, t, n) => Ce(e, n), (e, t, n) => Ht(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), tn = (e, t, n) => Ut(e, "angleAxis", n, !1), nn = O([Ie, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), rn = O([
	A,
	W,
	en,
	G,
	tn
], (e, t, n, r, i) => he(e, "radiusAxis") ? k(t, n, !1) : k(r, i, !1)), an = O([
	G,
	W,
	A
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return se({ numericAxis: r });
}), on = (e, t, n, r, i) => i, sn = (e, t, n, r, i) => n, cn = (e, t, n, r, i) => t, ln = (e, t, n, r, i) => r.maxBarSize, un = (e) => e.type === "radialBar", dn = O([
	A,
	Ie,
	sn,
	cn
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(un)), fn = O([
	dn,
	Me,
	() => void 0
], te), pn = O([
	A,
	Ne,
	G,
	tn,
	W,
	en,
	ln
], (e, t, n, r, i, a, o) => {
	var s = ge(o) ? t : o;
	return e === "centric" ? k(n, r, !0) ?? s ?? 0 : k(i, a, !0) ?? s ?? 0;
}), mn = O([
	fn,
	Ne,
	Te,
	we,
	pn,
	rn,
	ln
], ee), hn = O([mn, nn], D), gn = O([Oe], (e) => e.filter(un).filter(_e)), _n = O([
	gn,
	Ee,
	Fe
], ne), vn = O([
	_n,
	gn,
	Pe,
	je
], re), yn = O([(e, t, n) => A(e) === "centric" ? vn(e, "radiusAxis", t) : vn(e, "angleAxis", n), nn], ie), bn = O([
	G,
	tn,
	W,
	en,
	De,
	nn,
	rn,
	A,
	an,
	ke,
	on,
	hn,
	yn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Vn({
		angleAxis: e,
		angleAxisTicks: t,
		bandSize: o,
		baseValue: c,
		cells: u,
		cx: v,
		cy: y,
		dataKey: g,
		dataStartIndex: m,
		displayedData: p.slice(m, h + 1),
		endAngle: x,
		layout: s,
		minPointSize: _,
		pos: d,
		radiusAxis: n,
		radiusAxisTicks: r,
		stackedData: f,
		stackedDomain: f ? (s === "centric" ? n : e).scale.domain() : null,
		startAngle: b
	});
}), xn = O([Ee, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), Sn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], Cn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], wn = ["value", "background"];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function Tn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Tn(Object(n), !0).forEach(function(t) {
			En(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function En(e, t, n) {
	return (t = Dn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Dn(e) {
	var t = On(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function On(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function kn(e, t) {
	if (e == null) return {};
	var n, r, i = An(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function An(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var jn = [];
function Mn(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = n.map((e) => ({
		value: e.value,
		payload: e.payload,
		parentViewBox: void 0,
		clockWise: !1,
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
	}));
	return /*#__PURE__*/ V.createElement(_, { value: t ? i : void 0 }, r);
}
function Nn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = kn(n, Sn), m = ze(d), h = Ue(Se), g = n.onMouseEnter, _ = n.onClick, v = n.onMouseLeave, y = kn(n, Cn), b = Ge(g, n.dataKey, u), x = Ke(v), S = We(_, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ V.createElement(Mn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && h === String(t)), r = b(e, t), u = x(e, t), p = S(e, t), g = q(q(q(q({}, m), {}, { cornerRadius: Yt(l) }, e), T(y, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: p,
			className: `recharts-radial-bar-sector ${e.className}`,
			forceCornerRadius: d.forceCornerRadius,
			cornerIsExternal: d.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ V.createElement(w, {
			zIndex: f.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ V.createElement(H, g)) : /*#__PURE__*/ V.createElement(H, K({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, g));
	}), /*#__PURE__*/ V.createElement(p, { label: n.label }), n.children);
}
var Pn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [q(q({}, e.next), {}, {
	startAngle: me(e.prev.startAngle, e.next.startAngle, t),
	endAngle: me(e.prev.endAngle, e.next.endAngle, t)
})] : [q(q({}, e.next), {}, { endAngle: me(e.next.startAngle, e.next.endAngle, t) })]);
function Fn(t) {
	var n = t.props, r = t.previousSectorsRef, i = n.sectors, a = n.isAnimationActive, o = n.animationBegin, s = n.animationDuration, c = n.animationEasing, l = n.onAnimationStart, u = n.onAnimationEnd, d = He(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = qe();
	return h == null ? null : /*#__PURE__*/ V.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-radialbar-",
		items: i,
		previousItemsRef: r,
		isAnimationActive: a,
		animationBegin: o,
		animationDuration: s,
		animationEasing: c,
		onAnimationStart: p,
		onAnimationEnd: m,
		animationInterpolateFn: n.animationInterpolateFn,
		animationMatchBy: n.animationMatchBy,
		layout: h
	}, (e, t, r) => /*#__PURE__*/ V.createElement(Nn, {
		sectors: e,
		allOtherRadialBarProps: n,
		showLabels: !f,
		animationElapsedTime: t,
		isAnimating: f || t < 1,
		isEntrance: r
	}));
}
function In(e) {
	var t = (0, V.useRef)(null);
	return /*#__PURE__*/ V.createElement(Fn, {
		props: e,
		previousSectorsRef: t
	});
}
function Ln(e) {
	var t = Ue((t) => xn(t, e.legendType));
	return /*#__PURE__*/ V.createElement(x, { legendPayload: t ?? [] });
}
var Rn = /*#__PURE__*/ V.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: be,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: de(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ V.createElement(S, { tooltipEntrySettings: d });
}), zn = class extends V.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = Be(this.props.background);
		return /*#__PURE__*/ V.createElement(w, { zIndex: pe(this.props.background, f.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = kn(e, wn);
			if (!i) return null;
			var o = q(q(q(q(q({ cornerRadius: Yt(t) }, a), {}, { fill: "#eee" }, i), n), T(this.props, e, r)), {}, {
				index: r,
				className: ft("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ V.createElement(H, K({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = ft("recharts-area", r);
		return /*#__PURE__*/ V.createElement(w, { zIndex: this.props.zIndex }, /*#__PURE__*/ V.createElement(m, { className: a }, i && /*#__PURE__*/ V.createElement(m, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ V.createElement(m, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ V.createElement(In, this.props))));
	}
};
function Bn(e) {
	var t = V.useMemo(() => oe(e.children, r), [e.children]), n = V.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: ue(e.stackId),
		maxBarSize: e.maxBarSize,
		barSize: e.barSize,
		type: "radialBar",
		angleAxisId: e.angleAxisId,
		radiusAxisId: e.radiusAxisId
	}), [
		e.id,
		e.dataKey,
		e.minPointSize,
		e.stackId,
		e.maxBarSize,
		e.barSize,
		e.angleAxisId,
		e.radiusAxisId
	]), i = Ue((r) => bn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? jn;
	return /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(Rn, {
		dataKey: e.dataKey,
		sectors: i,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id
	}), /*#__PURE__*/ V.createElement(zn, K({}, e, { sectors: i })));
}
var J = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: ve,
	animationInterpolateFn: Pn,
	background: !1,
	cornerIsExternal: !1,
	cornerRadius: 0,
	forceCornerRadius: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: 0,
	radiusAxisId: 0,
	shape: Jt,
	zIndex: f.bar
};
function Vn(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? jn : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = Ve(n[r + t], i) : (b = fe(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = ce({
				axis: c,
				ticks: l,
				bandSize: u,
				offset: d.offset,
				entry: e,
				index: t
			}), x != null && w != null && C != null) {
				S = x + d.size;
				var E = w - C;
				if (Math.abs(p) > 0 && Math.abs(E) < Math.abs(p)) {
					var ee = ye(E || p) * (Math.abs(p) - Math.abs(E));
					w += ee;
				}
				T = { background: {
					cx: m,
					cy: h,
					innerRadius: x,
					outerRadius: S,
					startAngle: v,
					endAngle: y
				} };
			}
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = ce({
			axis: f,
			ticks: g,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), x != null && S != null && C != null) {
			w = C + d.size;
			var D = S - x;
			if (Math.abs(p) > 0 && Math.abs(D) < Math.abs(p)) {
				var te = ye(D || p) * (Math.abs(p) - Math.abs(D));
				S += te;
			}
		}
		return q(q(q({}, e), T), {}, {
			payload: e,
			value: n ? b : b[1],
			cx: m,
			cy: h,
			innerRadius: x,
			outerRadius: S,
			startAngle: C,
			endAngle: w
		}, _ && _[t] && _[t].props);
	});
}
function Hn(e) {
	var t = xe(e, J);
	return /*#__PURE__*/ V.createElement(v, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ V.createElement(V.Fragment, null, /*#__PURE__*/ V.createElement(b, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? J.hide,
		angleAxisId: t.angleAxisId ?? J.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? J.radiusAxisId,
		stackId: ue(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ V.createElement(Ln, t), /*#__PURE__*/ V.createElement(Bn, K({}, t, { id: e }))));
}
Hn.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function Un(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Wn(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Un(Object(n), !0).forEach(function(t) {
			Gn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Un(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Gn(e, t, n) {
	return (t = Kn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Kn(e) {
	var t = qn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function qn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Jn = ["axis", "item"], Yn = Wn(Wn({}, ae), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Xn = /*#__PURE__*/ (0, V.forwardRef)((e, t) => {
	var n = xe(e, Yn);
	return /*#__PURE__*/ V.createElement(g, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Jn,
		tooltipPayloadSearcher: E,
		categoricalChartProps: n,
		ref: t
	});
}), Y = Dt(), Zn = "30%", Qn = "100%", $n = 5, er = 14, tr = 5, nr = 1500, rr = (0, V.createContext)(null);
function ir() {
	let e = (0, V.use)(rr);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function X({ config: e, data: t, nameKey: n, children: r, className: o, chartProps: s, variant: c = "full", max: l, innerRadius: u = Zn, outerRadius: d = Qn, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: g }) {
	let _ = (0, V.useId)().replace(/:/g, ""), [v, y] = (0, V.useState)(f), b = dr(m), x = cr(c), S = (0, V.useCallback)((e, t) => {
		y(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), C = (0, V.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${_}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		_
	]), w = (0, V.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: _,
		isLoading: m,
		selectedBar: v,
		selectBar: S
	}), [
		e,
		n,
		_,
		m,
		v,
		S
	]);
	return /* @__PURE__ */ (0, Y.jsx)(rr, {
		value: w,
		children: /* @__PURE__ */ (0, Y.jsxs)(a, {
			className: o,
			config: e,
			children: [/* @__PURE__ */ (0, Y.jsx)(h, { isLoading: m }), /* @__PURE__ */ (0, Y.jsxs)(Xn, {
				id: _,
				data: m ? b : C,
				innerRadius: u,
				outerRadius: d,
				startAngle: x.startAngle,
				endAngle: x.endAngle,
				cx: x.cx,
				cy: x.cy,
				...s,
				children: [
					l != null && l > 0 && /* @__PURE__ */ (0, Y.jsx)(Vt, {
						type: "number",
						domain: [0, l],
						tick: !1,
						axisLine: !1
					}),
					g && /* @__PURE__ */ (0, Y.jsx)(i, { variant: g }),
					r,
					m && /* @__PURE__ */ (0, Y.jsx)(fr, {}),
					/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)(lr, {
						config: e,
						chartId: _
					}) })
				]
			})]
		})
	});
}
function ar({ dataKey: e, cornerRadius: t = $n, barSize: n = er, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = ir();
	return s ? null : /* @__PURE__ */ (0, Y.jsx)(Hn, {
		dataKey: e,
		cornerRadius: t,
		barSize: n,
		background: r,
		className: "drop-shadow-sm",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: (t, n) => {
			if (!i) return;
			let r = t, a = r?.[o] ?? String(n), s = Number(r?.[e] ?? 0);
			l(c === a ? null : a, s);
		},
		shape: (e) => {
			let t = e[o], n = c === null || c === t;
			return /* @__PURE__ */ (0, Y.jsx)(y, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function or({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = ir();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(u, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, Y.jsx)(d, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function sr({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: l } = ir();
	return a ? null : /* @__PURE__ */ (0, Y.jsx)(s, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Y.jsx)(c, {
			selected: o,
			onSelectChange: l,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function cr(e) {
	switch (e) {
		case "semi": return {
			startAngle: 180,
			endAngle: 0,
			cx: "50%",
			cy: "70%"
		};
		default: return {
			startAngle: 90,
			endAngle: -270,
			cx: "50%",
			cy: "50%"
		};
	}
}
var lr = ({ config: e, chartId: t }) => /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = le(n);
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Y.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function ur() {
	return Array.from({ length: tr }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function dr(e) {
	let [t, n] = (0, V.useState)(0);
	return (0, V.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, nr);
		return () => clearInterval(t);
	}, [e]), (0, V.useMemo)(() => ur(), [t]);
}
var fr = () => /* @__PURE__ */ (0, Y.jsx)(Hn, {
	dataKey: "value",
	cornerRadius: $n,
	barSize: er,
	background: !0,
	isAnimationActive: !0,
	animationDuration: nr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ (0, Y.jsx)(y, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
X.RadialBar = ar, X.Tooltip = or, X.Legend = sr;
// src/react/stats/radial-card.tsx
var pr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], mr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function hr({ title: e, rows: n, empty: r, unit: i = "个视频" }) {
	let a = z(), [s, c] = (0, V.useState)(-1), [u, d] = (0, V.useState)(-1), f = wt(n);
	if (!f.length) return /* @__PURE__ */ (0, Y.jsx)(o, {
		title: e,
		children: r
	});
	let p = u >= 0 ? u : s, m = f.reduce((e, t) => e + t.value, 0), h = f[p], g = (e) => c((t) => t === e ? -1 : e), _ = Ct(f.map((e) => e.value)), v = f.map((e, t) => ({
		slice: Re(t),
		value: e.value,
		arc: xt(e.value, _)
	}));
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: t,
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Y.jsxs)("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [h?.mark ? /* @__PURE__ */ (0, Y.jsx)(it, { mark: h.mark }) : null, h ? h.name : e]
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (h ? h.value : m).toLocaleString()
					})]
				}), /* @__PURE__ */ (0, Y.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: a(i)
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => d(-1),
				children: /* @__PURE__ */ (0, Y.jsxs)(X, {
					data: v,
					nameKey: "slice",
					config: Le(f.map((e) => e.name)),
					max: _,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ (0, Y.jsx)(X.RadialBar, {
						dataKey: "arc",
						barSize: St(f.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ (0, Y.jsx)(y, {
								...e,
								opacity: p >= 0 && p !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => g(t),
							onMouseEnter: (e, t) => d(t)
						}
					}), /* @__PURE__ */ (0, Y.jsx)(l, {
						nameKey: "slice",
						valueKey: "value",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: f.map((e, t) => /* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					"aria-pressed": s === t,
					onClick: () => g(t),
					onPointerEnter: () => d(t),
					onPointerLeave: () => d(-1),
					onFocus: () => d(t),
					onBlur: () => d(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${mr[t % 6]}`,
					children: [
						/* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ (0, Y.jsx)("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${pr[t % 6]}`
							}), /* @__PURE__ */ (0, Y.jsxs)("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ (0, Y.jsx)(it, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ (0, Y.jsx)("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: L(e.bytes)
						})
					]
				}, Re(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var gr = kt("媒体库与入库"), _r = 10, vr = n[5], yr = n[4], br = `${dt()} flex flex-col gap-4`, xr = "添加媒体目录或关注来源后，这里会显示馆藏统计。", Sr = "补全资料或添加标签后，这里会显示馆藏中的内容标签。", Cr = "开始播放后，这里会显示最近的真实观看证据。", wr = "补充作品资料或手动添加标签后，这里会显示各个标签来源对应的视频数量。", Tr = "添加媒体目录后，这里会显示存储空间。", Er = "把媒体目录归进媒体库后，这里会按库显示视频数。", Dr = "探测时长后，这里会显示时长分布。", Or = "探测画质后，这里会显示画质分布。", kr = "开始播放后，这里会显示播放落在一周的哪些时段。", Ar = "开始播放后，这里会显示每个作品播了几次。", jr = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, Y.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Y.jsx)("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: I(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, Y.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: e }), /* @__PURE__ */ (0, Y.jsxs)("b", {
				className: "tabular-nums",
				children: [I(t), ht(t) ? /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: R(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ (0, Y.jsx)(F, {
			label: `${e}：${I(t)} / ${n.toLocaleString()}`,
			value: ht(t) ? jr(t, r) : 0,
			max: r
		})]
	});
}
function Mr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Y.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Nr({ headline: e, children: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `${br} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Pr({ data: e }) {
	let t = z();
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, Y.jsx)(hr, {
				title: t("网盘与本地"),
				empty: xr,
				rows: e.by_loc.map((e) => ({
					name: t(Xe[e.k] ?? e.k),
					value: e.videos,
					bytes: e.bytes,
					mark: Ze[e.k] || "database"
				}))
			}), /* @__PURE__ */ (0, Y.jsx)(hr, {
				title: t("媒体库"),
				empty: Er,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: Ze[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(B, {
					title: t("时长"),
					unit: "个视频",
					series: "视频",
					color: vr,
					rows: gt(e.by_length),
					empty: Dr
				}),
				/* @__PURE__ */ (0, Y.jsx)(B, {
					title: t("画质"),
					unit: "个视频",
					series: "视频",
					color: vr,
					rows: ut(e.by_quality),
					empty: Or
				}),
				/* @__PURE__ */ (0, Y.jsx)(B, {
					title: t("文件类型"),
					unit: "个条目",
					series: "条目",
					color: vr,
					layout: "horizontal",
					rows: vt(e.by_medium),
					empty: xr
				})
			]
		})]
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		icon: Qe,
		title: t("还没有视频"),
		actions: /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: t("添加关注")
		}), /* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "primary",
			href: gr,
			size: "small",
			children: t("添加媒体")
		})] }),
		children: xr
	});
}
function Fr({ data: e }) {
	let t = z();
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(zt, {
		activity: e.play_activity,
		title: t("播放时间"),
		dailyTitle: t("每日播放"),
		words: {
			unit: "个作品",
			series: "作品",
			cellUnit: "个作品"
		},
		tone: 5,
		empty: kr
	}), /* @__PURE__ */ (0, Y.jsx)(B, {
		title: t("播放次数"),
		unit: "个作品",
		series: "作品",
		color: yr,
		rows: Et(e.replays),
		empty: Ar
	})] });
}
function Ir({ attribution: e }) {
	let t = z(), n = e.videos;
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: t("有创作者"),
				value: e.creator,
				total: n
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: t("有番号"),
				value: e.code,
				total: n
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: t("有厂牌"),
				value: e.studio,
				total: n
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: t("已抽帧"),
				value: e.thumb,
				total: n
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: t("已探测时长"),
				value: e.duration,
				total: n
			})
		]
	});
}
function Lr({ volume: e }) {
	let t = z(), n = e.total, r = e.used ?? 0;
	return /* @__PURE__ */ (0, Y.jsxs)("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
					className: "min-w-0 break-words",
					children: e.label
				}), n == null ? e.online ? /* @__PURE__ */ (0, Y.jsx)(at, { children: t("容量未取得") }) : /* @__PURE__ */ (0, Y.jsx)(Rt, { online: !1 }) : /* @__PURE__ */ (0, Y.jsxs)("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [L(r), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: R(r, n)
					})]
				})]
			}),
			n == null ? null : /* @__PURE__ */ (0, Y.jsx)(F, {
				label: t("{value0}空间使用率", { value0: String(e.label) }),
				value: jr(r, Math.max(n, 1)),
				max: Math.max(n, 1)
			}),
			/* @__PURE__ */ (0, Y.jsxs)("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "min-w-0 break-words",
					children: e.root ?? t("未映射")
				}), n == null ? null : /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: t("可用 {value0} · 共 {value1}", {
						value0: String(L(e.free ?? 0)),
						value1: String(L(n))
					})
				})]
			})
		]
	});
}
function Rr({ volumes: e }) {
	let t = z();
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsx)(Lr, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		icon: ot,
		title: t("还没有存储来源"),
		actions: /* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "primary",
			href: gr,
			size: "small",
			children: t("添加媒体")
		}),
		children: Tr
	});
}
function zr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	let i = z();
	return e.length ? /* @__PURE__ */ (0, Y.jsx)(Bt, {
		previewCount: _r,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ (0, Y.jsx)("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ (0, Y.jsxs)("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		icon: _t,
		title: i("还没有内容标签"),
		actions: /* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: i(r ? "补全资料" : "添加媒体")
		}),
		children: Sr
	});
}
function Br({ rows: e, hasMedia: t }) {
	let n = z();
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = Nt(e);
			return /* @__PURE__ */ (0, Y.jsxs)("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ (0, Y.jsx)("a", {
							href: bt(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ (0, Y.jsxs)("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ (0, Y.jsx)("span", { children: Mt(e) })]
					})]
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ (0, Y.jsx)(F, {
						label: n("真实观看 {value0}%", { value0: String(t.toFixed(0)) }),
						value: t
					}), /* @__PURE__ */ (0, Y.jsx)("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: n("真实 {value0}% · 到达 {value1}%", {
							value0: String(t.toFixed(0)),
							value1: String(Tt(e).toFixed(0))
						})
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		icon: At,
		title: n("还没有观看记录"),
		actions: /* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: n(t ? "浏览馆藏" : "添加媒体")
		}),
		children: Cr
	});
}
function Vr({ sources: e, videos: t }) {
	let n = z();
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsxs)("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ (0, Y.jsxs)("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: n("个视频")
						})]
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(F, {
					label: n("{value0} 覆盖视频", { value0: String(e.k) }),
					value: jr(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ (0, Y.jsxs)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: [e.n.toLocaleString(), n(" 条标签")]
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		icon: _t,
		title: n("还没有标签来源"),
		actions: /* @__PURE__ */ (0, Y.jsx)(N, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: n(t ? "补全资料" : "添加媒体")
		}),
		children: wr
	});
}
function $({ id: e, label: t, figure: n, detail: r, icon: i, accent: a }) {
	return /* @__PURE__ */ (0, Y.jsx)(M, {
		id: e,
		className: Lt({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ (0, Y.jsx)(It, {
			label: t,
			icon: i,
			accent: a,
			figure: n,
			footer: r
		})
	});
}
function Hr(e) {
	let t = z(), n = jt({
		queryKey: nt,
		queryFn: ({ signal: e }) => mt(e)
	}), r = n.data;
	if (!r) return /* @__PURE__ */ (0, Y.jsx)(Pt, { children: /* @__PURE__ */ (0, Y.jsx)($e, {
		tone: "error",
		title: t("馆藏统计读取失败"),
		children: n.error ? pt(n.error) : t("未取得统计数据，请刷新页面重试。")
	}) });
	let i = r.consumption, a = r.storage_summary, o = r.by_loc.reduce((e, t) => e + t.videos, 0), s = r.by_loc.reduce((e, t) => e + t.bytes, 0), c = ht(r.tag_cov) ? R(r.tag_cov, r.attribution.videos) : "未取得", l = `${I(r.tag_cov)} / ${r.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ (0, Y.jsxs)(Pt, { children: [
		/* @__PURE__ */ (0, Y.jsx)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: t("数据库中的当前统计 · {count} 个视频 · {size}", {
				count: o.toLocaleString(),
				size: L(s)
			})
		}),
		/* @__PURE__ */ (0, Y.jsxs)(Je, {
			defaultSelectedKey: "inventory",
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)(Ye, {
					"aria-label": t("统计视图"),
					className: Ft,
					children: [
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "inventory",
							label: t("馆藏视频"),
							icon: ct,
							accent: 0,
							figure: o.toLocaleString(),
							detail: L(s)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "viewing",
							label: t("看过"),
							icon: st,
							accent: 1,
							figure: I(i.played),
							detail: yt(i.play_seconds)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "coverage",
							label: t("内容标签"),
							icon: _t,
							accent: 2,
							figure: c,
							detail: l
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "storage",
							label: t("使用空间"),
							icon: ot,
							accent: 3,
							figure: t("{count} 个卷", { count: a.online.toLocaleString() }),
							detail: a.measured ? t("已用 {size}", { size: L(a.used) }) : t("容量未取得")
						})
					]
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "inventory",
					children: /* @__PURE__ */ (0, Y.jsx)(Pr, {
						data: r,
						...e
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)(j, {
					id: "viewing",
					className: "flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, Y.jsx)(Nr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Mr, {
							term: t("观看"),
							figure: I(i.played),
							unit: "个作品有播放记录"
						}),
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "inline-grid w-full gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("馆藏观看"),
									value: i.library_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("在线直接观看"),
									value: i.online_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("高潮计数"),
									value: i.o_total
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("快进扫过"),
									value: i.skimmed
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("喜欢"),
									value: i.liked
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("明确不喜欢"),
									value: i.dislike
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("看过了"),
									value: i.seen
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: t("回收站"),
									value: i.trash
								})
							]
						})
					}), /* @__PURE__ */ (0, Y.jsx)(Fr, { data: r })]
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "coverage",
					children: /* @__PURE__ */ (0, Y.jsx)(Nr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Mr, {
							term: t("内容标签覆盖"),
							figure: c,
							unit: l
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(Ir, { attribution: r.attribution })
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "storage",
					children: /* @__PURE__ */ (0, Y.jsx)(Nr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(Mr, {
							term: t("使用空间"),
							figure: a.measured.toLocaleString(),
							unit: "个卷已取得容量"
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(Rr, {
							volumes: r.storage_volumes,
							...e
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, Y.jsxs)(Je, {
			defaultSelectedKey: "tags",
			className: `${dt({ padding: "none" })} flex flex-col`,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ (0, Y.jsxs)(rt, {
						"aria-label": t("统计维度"),
						className: tt,
						children: [
							/* @__PURE__ */ (0, Y.jsx)(M, {
								id: "tags",
								className: et,
								children: t("内容标签")
							}),
							/* @__PURE__ */ (0, Y.jsx)(M, {
								id: "recent",
								className: et,
								children: t("最近看过")
							}),
							/* @__PURE__ */ (0, Y.jsx)(M, {
								id: "sources",
								className: et,
								children: t("标签来源")
							})
						]
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "tags",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(zr, {
						tags: r.top_tags,
						hasMedia: o > 0,
						...e
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "recent",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(Br, {
						rows: r.recent,
						hasMedia: o > 0
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(j, {
					id: "sources",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(Vr, {
						sources: r.tag_source,
						videos: r.attribution.videos
					})
				})
			]
		})
	] });
}
export { Hr as StatsPage };

//# debugId=41e34f74-c8a5-45a5-a63c-5786c158d7fa