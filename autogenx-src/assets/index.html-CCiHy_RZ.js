var _a;
import { x as APP_VERSION_DISPLAY, A as APP_FULL_LABEL, y as createInitialPipelineStatus, a as TEXT_COLORS, O as OMNI_FLASH_DURATION_DEFAULT, z as SCRIPT_STYLES, C as ASPECT_RATIOS, E as VIDEO_MODELS, F as OMNI_FLASH_DURATIONS, G as PROMPT_LANGUAGES, H as IMAGE_MODELS, b as IMAGE_STYLES, I as IMAGE_CAMERA_ANGLES, L as LIGHTING_TYPES, M as MODEL_TYPES, T as TEXT_POSITIONS, J as VIDEO_STYLES, K as VIDEO_STYLE_POSE_LOCKS, V as VIDEO_CAMERA_MOVEMENTS, N as POSE_STYLES, S as SCENE_TYPES, Q as EXTENDED_VOICES, R as PRODUCT_CATEGORIES, k as syncDialogueIntoVideoPrompt, U as syncTextIntoImagePrompt, g as generateDialogueSuggestion, W as STORY_GENRES, X as STORY_VOICES, Y as STORY_IMAGE_STYLES, Z as STORY_MOODS, _ as STORY_AUDIENCES, $ as VOICE_MODES, a0 as DISCLAIMER_PRESETS, a1 as DISCLAIMER_POSITIONS, a2 as SCENE_COUNTS, q as STORY_HOOKS, p as STORY_BODIES, o as STORY_CTAS, v as DRAMA_SETUPS, u as DRAMA_CONFLICTS, t as DRAMA_TURNINGS, D as DRAMA_MORALS } from "./prompt-overlay-sync-DkM4NOLq.js";
import { D as DEV, s as shouldDropInRelease } from "./pipeline-log-C2ZJNMjJ.js";
import { F as FLOW_HOME_URL, T as TIKTOK_STUDIO_URL, i as isFlowProjectUrl } from "./urls-DiE2CpbD.js";
import { c as createLogger } from "./logger-CbU0UFxz.js";
(function polyfill() {
  const _0x46f0f5 = document["createElement"]("link")["relList"];
  if (_0x46f0f5 && _0x46f0f5["supports"] && _0x46f0f5["supports"]("modulepreload")) return;
  for (const _0x5d5996 of document["querySelectorAll"]('link[rel="modulepreload"]')) {
    _0x261f21(_0x5d5996);
  }
  new MutationObserver((_0x119ebb) => {
    for (const _0x39084a of _0x119ebb) {
      if (_0x39084a["type"] !== "childList") continue;
      for (const _0x1b8537 of _0x39084a["addedNodes"]) {
        if (_0x1b8537["tagName"] === "LINK" && _0x1b8537["rel"] === "modulepreload") _0x261f21(_0x1b8537);
      }
    }
  })["observe"](document, { "childList": !![], "subtree": !![] });
  function _0x265d84(_0x1c225b) {
    const _0x2ea1ca = {};
    if (_0x1c225b["integrity"]) _0x2ea1ca["integrity"] = _0x1c225b["integrity"];
    if (_0x1c225b["referrerPolicy"]) _0x2ea1ca["referrerPolicy"] = _0x1c225b["referrerPolicy"];
    if (_0x1c225b["crossOrigin"] === "use-credentials") _0x2ea1ca["credentials"] = "include";
    else {
      if (_0x1c225b["crossOrigin"] === "anonymous") _0x2ea1ca["credentials"] = "omit";
      else _0x2ea1ca["credentials"] = "same-origin";
    }
    return _0x2ea1ca;
  }
  function _0x261f21(_0x1688d0) {
    if (_0x1688d0["ep"]) return;
    _0x1688d0["ep"] = !![];
    const _0x475caa = _0x265d84(_0x1688d0);
    fetch(_0x1688d0["href"], _0x475caa);
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = globalThis, e$4 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
let n$3 = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$4 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$4.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$4.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new n$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$3 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$3(o2, t2, s$2);
}, S$1 = (s2, o2) => {
  if (e$4) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n3 = t$3.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$2 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$4(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$3, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$3, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$1 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i2 = t2;
  switch (s2) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s2) => !i$2(t2, s2), b$1 = { attribute: true, type: String, converter: u$1, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i2 = Symbol(), h2 = this.getPropertyDescriptor(t2, i2, s2);
      void 0 !== h2 && e$3(this.prototype, t2, h2);
    }
  }
  static getPropertyDescriptor(t2, s2, i2) {
    const { get: e2, set: r2 } = h$1(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h2 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$2(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$3(t3), ...o$3(t3)];
      for (const i2 of s2) this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i2] of s2) this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i2 = this._$Eu(t3, s2);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i2 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i2.unshift(c$2(s3));
    } else void 0 !== s2 && i2.push(c$2(s2));
    return i2;
  }
  static _$Eu(t2, s2) {
    const i2 = s2.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i2 of s2.keys()) this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i2) {
    this._$AK(t2, i2);
  }
  _$ET(t2, s2) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e2 && true === i2.reflect) {
      const h2 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$1).toAttribute(s2, i2.type);
      this._$Em = t2, null == h2 ? this.removeAttribute(e2) : this.setAttribute(e2, h2), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a2, _b;
    const i2 = this.constructor, e2 = i2._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i2.getPropertyOptions(e2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$1;
      this._$Em = e2;
      const r2 = h2.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b = this._$Ej) == null ? void 0 : _b.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i2, e2 = false, h2) {
    var _a2;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h2 = this[t2]), i2 ?? (i2 = r2.getPropertyOptions(t2)), !((i2.hasChanged ?? f$1)(h2, s2) || i2.useDefault && i2.reflect && h2 === ((_a2 = this._$Ej) == null ? void 0 : _a2.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i2)))) return;
      this.C(t2, s2, i2);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i2, reflect: e2, wrapped: h2 }, r2) {
    i2 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h2 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i2 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i2] of t3) {
        const { wrapped: t4 } = i2, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i2, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$EO) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis, i$1 = (t2) => t2, s$1 = t$2.trustedTypes, e$2 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h = "$lit$", o$2 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$1 = "?" + o$2, r$2 = `<${n$1}>`, l = document, c = () => l.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u = Array.isArray, d = (t2) => u(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y2 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), b = x(1), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t2, i2) {
  if (!u(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$2 ? e$2.createHTML(i2) : i2;
}
const N = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let n3, l2 = 2 === i2 ? "<svg>" : 3 === i2 ? "<math>" : "", c2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v ? "!--" === u2[1] ? c2 = _ : void 0 !== u2[1] ? c2 = m : void 0 !== u2[2] ? (y2.test(u2[2]) && (n3 = RegExp("</" + u2[2], "g")), c2 = p) : void 0 !== u2[3] && (c2 = p) : c2 === p ? ">" === u2[0] ? (c2 = n3 ?? v, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p : '"' === u2[3] ? $ : g) : c2 === $ || c2 === g ? c2 = p : c2 === _ || c2 === m ? c2 = v : (c2 = p, n3 = void 0);
    const x2 = c2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v ? s3 + r$2 : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h + s3.slice(d2) + o$2 + x2) : s3 + o$2 + (-2 === d2 ? i3 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : 3 === i2 ? "</math>" : "")), e2];
};
class S {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i2);
    if (this.el = S.createElement(f2, e2), P.currentNode = this.el.content, 2 === i2 || 3 === i2) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h)) {
          const i3 = v2[a2++], s2 = r2.getAttribute(t3).split(o$2), e3 = /([.?@])?(.*)/.exec(i3);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I : "?" === e3[1] ? L : "@" === e3[1] ? z : H }), r2.removeAttribute(t3);
        } else t3.startsWith(o$2) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$2), i3 = t3.length - 1;
          if (i3 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++) r2.append(t3[s2], c()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i3], c());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n$1) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$2, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$2.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i2, s2 = t2, e2) {
  var _a2, _b;
  if (i2 === E) return i2;
  let h2 = void 0 !== e2 ? (_a2 = s2._$Co) == null ? void 0 : _a2[e2] : s2._$Cl;
  const o2 = a(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h2 : s2._$Cl = h2), void 0 !== h2 && (i2 = M(t2, h2._$AS(t2, i2.values), h2, e2)), i2;
}
class R {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l).importNode(i2, true);
    P.currentNode = e2;
    let h2 = P.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i3;
        2 === r2.type ? i3 = new k(h2, h2.nextSibling, this, t2) : 1 === r2.type ? i3 = new r2.ctor(h2, r2.name, r2.strings, this, t2) : 6 === r2.type && (i3 = new Z(h2, this, t2)), this._$AV.push(i3), r2 = s2[++n3];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h2 = P.nextNode(), o2++);
    }
    return P.currentNode = l, e2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class k {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
  }
  constructor(t2, i2, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = M(this, t2, i2), a(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a2;
    const { values: i2, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e2) this._$AH.p(i2);
    else {
      const t3 = new R(e2, this), s3 = t3.u(this.options);
      t3.p(i2), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = C.get(t2.strings);
    return void 0 === i2 && C.set(t2.strings, i2 = new S(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const h2 of t2) e2 === i2.length ? i2.push(s2 = new k(this.O(c()), this.O(c()), this, this.options)) : s2 = i2[e2], s2._$AI(h2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$1(t2).nextSibling;
      i$1(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s2, e2, h2) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = h2, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2) t2 = M(this, t2, i2, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++) r2 = M(this, e3[s2 + n3], i2, n3), r2 === E && (r2 = this._$AH[n3]), o2 || (o2 = !a(r2) || r2 !== this._$AH[n3]), r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z extends H {
  constructor(t2, i2, s2, e2, h2) {
    super(t2, i2, s2, e2, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = M(this, t2, i2, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h2 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const B = t$2.litHtmlPolyfillSupport;
B == null ? void 0 : B(S, k), (t$2.litHtmlVersions ?? (t$2.litHtmlVersions = [])).push("3.3.2");
const D = (t2, i2, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i2;
  let h2 = e2._$litPart$;
  if (void 0 === h2) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h2 = new k(i2.insertBefore(c(), t3), t3, void 0, s2 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = globalThis;
class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t2 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return E;
  }
}
i._$litElement$ = true, i["finalized"] = true, (_a = s.litElementHydrateSupport) == null ? void 0 : _a.call(s, { LitElement: i });
const o$1 = s.litElementPolyfillSupport;
o$1 == null ? void 0 : o$1({ LitElement: i });
(s.litElementVersions ?? (s.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o, e2, r2) => {
  const { kind: n3, metadata: i2 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i2, s2 = /* @__PURE__ */ new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n2(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$1(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return n2({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e2, r2) {
  return (n3, s2, i2) => {
    const o2 = (t2) => {
      var _a2;
      return ((_a2 = t2.renderRoot) == null ? void 0 : _a2.querySelector(e2)) ?? null;
    };
    return e$1(n3, s2, { get() {
      return o2(this);
    } });
  };
}
var __defProp$t = Object["defineProperty"], __getOwnPropDesc$u = Object["getOwnPropertyDescriptor"], __decorateClass$u = (_0x3bafb6, _0x2f54f1, _0x3b63c4, _0x281048) => {
  var _0x2fef5f = _0x281048 > 1 ? void 0 : _0x281048 ? __getOwnPropDesc$u(_0x2f54f1, _0x3b63c4) : _0x2f54f1;
  for (var _0x509adb = _0x3bafb6["length"] - 1, _0x1e8e7f; _0x509adb >= 0; _0x509adb--) if (_0x1e8e7f = _0x3bafb6[_0x509adb]) _0x2fef5f = (_0x281048 ? _0x1e8e7f(_0x2f54f1, _0x3b63c4, _0x2fef5f) : _0x1e8e7f(_0x2fef5f)) || _0x2fef5f;
  if (_0x281048 && _0x2fef5f) __defProp$t(_0x2f54f1, _0x3b63c4, _0x2fef5f);
  return _0x2fef5f;
};
let AgxHeader = class extends i {
  constructor() {
    super(...arguments), this["version"] = APP_VERSION_DISPLAY["replace"](/^v/, ""), this["lang"] = "th", this["locked"] = ![];
  }
  ["render"]() {
    return b`
      <div class="header">
        <div class="brand">
          <span class="logo">AutoGenX</span>
          <span class="version">v${this["version"]}</span>
        </div>
        <div class="actions">
          <button
            class="icon-btn lang-btn ${this["lang"] === "en" ? "active" : ""}"
            title=${this["locked"] ? "กำลังทำงาน — กด Stop ก่อนเปลี่ยนภาษา" : "Switch Language"}
            ?disabled=${this["locked"]}
            style=${this["locked"] ? "opacity:0.4;cursor:not-allowed" : ""}
            @click=${this["_toggleLang"]}
          >
            ${this["lang"] === "en" ? "EN" : "TH"}
          </button>
          <button
            class="icon-btn"
            title=${this["locked"] ? "กำลังทำงาน — กด Stop ก่อนเปิด Settings" : "Settings"}
            ?disabled=${this["locked"]}
            style=${this["locked"] ? "opacity:0.4;cursor:not-allowed" : ""}
            @click=${this["_openSettings"]}
          >
            &#9881;
          </button>
        </div>
      </div>
    `;
  }
  ["_toggleLang"]() {
    if (this["locked"]) return;
    this["lang"] = this["lang"] === "th" ? "en" : "th", this["dispatchEvent"](new CustomEvent("lang-change", { "detail": { "lang": this["lang"] }, "bubbles": !![], "composed": !![] }));
  }
  ["_openSettings"]() {
    if (this["locked"]) return;
    this["dispatchEvent"](new CustomEvent("open-settings", { "bubbles": !![], "composed": !![] }));
  }
};
AgxHeader["styles"] = i$3`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: var(--agx-bg-base, #101420);
      border-bottom: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .logo {
      font-family: var(--agx-font-mono, monospace);
      font-size: 15px;
      font-weight: 700;
      background: var(--agx-gradient-primary, #4A8DFF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .version {
      font-size: 10px;
      color: var(--agx-text-muted, #64748b);
      padding: 1px 5px;
      background: var(--agx-bg-surface, #1a2730);
      border-radius: 4px;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .icon-btn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-radius: var(--agx-radius-sm, 6px);
      color: var(--agx-text-secondary, #94a3b8);
      cursor: pointer;
      font-size: 14px;
      transition: all 200ms ease;
    }

    .icon-btn:hover {
      background: var(--agx-bg-surface, #1a2730);
      color: var(--agx-text-primary, #f0f4f8);
    }

    .lang-btn {
      font-size: 11px;
      font-weight: 600;
      font-family: var(--agx-font-mono, monospace);
    }

    .lang-btn.active {
      border-color: var(--agx-accent, #4A8DFF);
      color: var(--agx-accent, #4A8DFF);
    }
  `, __decorateClass$u([n2()], AgxHeader["prototype"], "version", 2), __decorateClass$u([n2()], AgxHeader["prototype"], "lang", 2), __decorateClass$u([n2({ "type": Boolean })], AgxHeader["prototype"], "locked", 2), AgxHeader = __decorateClass$u([t$1("agx-header")], AgxHeader);
var __defProp$s = Object["defineProperty"], __getOwnPropDesc$t = Object["getOwnPropertyDescriptor"], __decorateClass$t = (_0x1d7ea1, _0xf07876, _0x5e69bd, _0x26e498) => {
  var _0x461d2e = _0x26e498 > 1 ? void 0 : _0x26e498 ? __getOwnPropDesc$t(_0xf07876, _0x5e69bd) : _0xf07876;
  for (var _0x1a51c1 = _0x1d7ea1["length"] - 1, _0xa7a581; _0x1a51c1 >= 0; _0x1a51c1--) if (_0xa7a581 = _0x1d7ea1[_0x1a51c1]) _0x461d2e = (_0x26e498 ? _0xa7a581(_0xf07876, _0x5e69bd, _0x461d2e) : _0xa7a581(_0x461d2e)) || _0x461d2e;
  if (_0x26e498 && _0x461d2e) __defProp$s(_0xf07876, _0x5e69bd, _0x461d2e);
  return _0x461d2e;
};
const MODES = [{ "id": "auto", "icon": "🎬", "label": "Full Auto Video", "labelEn": "Full Auto Video", "badge": "HIT" }, { "id": "post", "icon": "📮", "label": "โพสคลิป", "labelEn": "Post" }, { "id": "shop", "icon": "📦", "label": "สินค้า", "labelEn": "Shop" }, { "id": "creator", "icon": "🎨", "label": "Creator", "labelEn": "Creator" }];
let AgxModeBar = class extends i {
  constructor() {
    super(...arguments), this["active"] = "auto", this["lang"] = "th", this["locked"] = ![];
  }
  ["render"]() {
    return b`
      <div class="bar">
        ${MODES["map"]((_0x1ce4c3) => b`
            <button
              class="mode ${_0x1ce4c3["id"] === this["active"] ? "active" : ""} ${this["locked"] ? "locked" : ""}"
              title=${this["locked"] && _0x1ce4c3["id"] !== this["active"] ? "กำลังทำงาน — กด Stop ก่อนสลับโหมด" : ""}
              @click=${() => this["_select"](_0x1ce4c3["id"])}
            >
              <span class="mode-icon">${_0x1ce4c3["icon"]}</span>
              <span>${this["lang"] === "en" ? _0x1ce4c3["labelEn"] : _0x1ce4c3["label"]}</span>
              ${_0x1ce4c3["badge"] ? b`<span class="badge">${_0x1ce4c3["badge"]}</span>` : ""}
            </button>
          `)}
      </div>
    `;
  }
  ["_select"](_0x4ee1ae) {
    if (this["locked"] && _0x4ee1ae !== this["active"]) return;
    this["active"] = _0x4ee1ae, this["dispatchEvent"](new CustomEvent("mode-change", { "detail": { "mode": _0x4ee1ae }, "bubbles": !![], "composed": !![] }));
  }
};
AgxModeBar["styles"] = i$3`
    :host { display: block; padding: 8px 10px; }

    .bar {
      display: flex;
      gap: 3px;
      background: var(--agx-bg-deep, #000);
      border-radius: var(--agx-radius-lg, 10px);
      padding: 3px;
    }

    .mode {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 8px 4px 6px;
      border: none;
      border-radius: var(--agx-radius-md, 8px);
      background: transparent;
      color: var(--agx-text-muted, #64748b);
      font-family: var(--agx-font-thai, sans-serif);
      font-size: 10px;
      font-weight: 500;
      cursor: pointer;
      transition: all 200ms ease;
      position: relative;
    }

    .mode:hover {
      color: var(--agx-text-secondary, #94a3b8);
      background: var(--agx-bg-surface, #1a2730);
    }

    .mode.active {
      background: var(--agx-gradient-primary, #4A8DFF);
      color: white;
      box-shadow: 0 2px 10px rgba(47, 107, 255, 0.3);
    }

    .mode.locked:not(.active) {
      opacity: 0.35;
      cursor: not-allowed;
    }
    .mode.locked:not(.active):hover {
      background: transparent;
      color: var(--agx-text-muted, #64748b);
    }

    .mode-icon { font-size: 16px; }

    .badge {
      position: absolute;
      top: 2px;
      right: 4px;
      font-size: 7px;
      padding: 1px 3px;
      border-radius: 3px;
      background: var(--agx-danger, #ef4444);
      color: white;
      font-weight: 700;
    }
  `, __decorateClass$t([n2()], AgxModeBar["prototype"], "active", 2), __decorateClass$t([n2()], AgxModeBar["prototype"], "lang", 2), __decorateClass$t([n2({ "type": Boolean })], AgxModeBar["prototype"], "locked", 2), AgxModeBar = __decorateClass$t([t$1("agx-mode-bar")], AgxModeBar);
var __getOwnPropDesc$s = Object["getOwnPropertyDescriptor"], __decorateClass$s = (_0x1951b1, _0x1eea53, _0x5a5858, _0x4a1673) => {
  var _0x4a7c0f = _0x4a1673 > 1 ? void 0 : _0x4a1673 ? __getOwnPropDesc$s(_0x1eea53, _0x5a5858) : _0x1eea53;
  for (var _0x34b65c = _0x1951b1["length"] - 1, _0x23318d; _0x34b65c >= 0; _0x34b65c--) if (_0x23318d = _0x1951b1[_0x34b65c]) _0x4a7c0f = _0x23318d(_0x4a7c0f) || _0x4a7c0f;
  return _0x4a7c0f;
};
let AgxFooter = class extends i {
  ["render"]() {
    return b`
      <div class="footer">
        <div class="line-top">${APP_FULL_LABEL} &mdash; Developed by Kan, Head Programmer</div>
        <div class="line-bottom">&copy; ${(/* @__PURE__ */ new Date())["getFullYear"]()} Prompt Generation Group Co., Ltd. All rights reserved.</div>
      </div>
    `;
  }
};
AgxFooter["styles"] = i$3`
    :host {
      display: block;
      position: sticky;
      bottom: 0;
    }

    .footer {
      padding: 6px 14px;
      text-align: center;
      font-size: 10px;
      color: var(--agx-text-muted, #64748b);
      background: var(--agx-bg-base, #101420);
      border-top: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      line-height: 1.5;
    }

    .line-top {
      color: var(--agx-text-secondary, #94a3b8);
    }
    .line-bottom {
      font-size: 9px;
      opacity: 0.75;
    }
  `, AgxFooter = __decorateClass$s([t$1("agx-footer")], AgxFooter);
var __defProp$r = Object["defineProperty"], __getOwnPropDesc$r = Object["getOwnPropertyDescriptor"], __decorateClass$r = (_0x25fe2b, _0x25e8cd, _0x964326, _0x4d9966) => {
  var _0x30933b = _0x4d9966 > 1 ? void 0 : _0x4d9966 ? __getOwnPropDesc$r(_0x25e8cd, _0x964326) : _0x25e8cd;
  for (var _0x440267 = _0x25fe2b["length"] - 1, _0x487c88; _0x440267 >= 0; _0x440267--) if (_0x487c88 = _0x25fe2b[_0x440267]) _0x30933b = (_0x4d9966 ? _0x487c88(_0x25e8cd, _0x964326, _0x30933b) : _0x487c88(_0x30933b)) || _0x30933b;
  if (_0x4d9966 && _0x30933b) __defProp$r(_0x25e8cd, _0x964326, _0x30933b);
  return _0x30933b;
};
let AgxTabs = class extends i {
  constructor() {
    super(...arguments), this["tabs"] = [], this["active"] = "";
  }
  ["render"]() {
    return b`
      <div class="tabs">
        ${this["tabs"]["map"]((_0x3d1a17) => b`
            <button
              class="tab ${_0x3d1a17["id"] === this["active"] ? "active" : ""} ${_0x3d1a17["disabled"] ? "disabled" : ""}"
              title=${_0x3d1a17["tooltip"] || ""}
              @click=${() => this["_selectTab"](_0x3d1a17)}
            >
              ${_0x3d1a17["icon"] ? b`<span class="icon">${_0x3d1a17["icon"]}</span>` : ""}
              ${_0x3d1a17["label"]}
              ${_0x3d1a17["badge"] ? b`<span class="badge">${_0x3d1a17["badge"]}</span>` : ""}
            </button>
          `)}
      </div>
    `;
  }
  ["_selectTab"](_0x37d536) {
    if (_0x37d536["disabled"]) {
      this["dispatchEvent"](new CustomEvent("tab-disabled-click", { "detail": { "id": _0x37d536["id"] }, "bubbles": !![], "composed": !![] }));
      return;
    }
    this["active"] = _0x37d536["id"], this["dispatchEvent"](new CustomEvent("tab-change", { "detail": { "id": _0x37d536["id"] }, "bubbles": !![], "composed": !![] }));
  }
};
AgxTabs["styles"] = i$3`
    :host { display: block; }

    .tabs {
      display: flex;
      gap: 2px;
      background: var(--agx-bg-deep, #000);
      border-radius: var(--agx-radius-md, 8px);
      padding: 3px;
    }

    .tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 6px;
      border: none;
      border-radius: var(--agx-radius-sm, 6px);
      background: transparent;
      color: var(--agx-text-muted, #64748b);
      font-family: var(--agx-font-thai, sans-serif);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 200ms ease;
      position: relative;
      white-space: nowrap;
    }

    .tab:hover {
      color: var(--agx-text-secondary, #94a3b8);
      background: var(--agx-bg-surface, #1a2730);
    }

    .tab.active {
      background: var(--agx-gradient-primary, #4A8DFF);
      color: white;
      box-shadow: 0 2px 8px rgba(47, 107, 255, 0.3);
    }

    .tab.disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .tab.disabled:hover {
      color: var(--agx-text-muted, #64748b);
      background: transparent;
    }

    .badge {
      position: absolute;
      top: 2px;
      right: 4px;
      font-size: 8px;
      padding: 1px 4px;
      border-radius: 4px;
      background: var(--agx-danger, #ef4444);
      color: white;
      line-height: 1.2;
    }

    .icon {
      font-size: 14px;
    }
  `, __decorateClass$r([n2({ "type": Array })], AgxTabs["prototype"], "tabs", 2), __decorateClass$r([n2()], AgxTabs["prototype"], "active", 2), AgxTabs = __decorateClass$r([t$1("agx-tabs")], AgxTabs);
var __defProp$q = Object["defineProperty"], __getOwnPropDesc$q = Object["getOwnPropertyDescriptor"], __decorateClass$q = (_0x3c7d65, _0x4ad631, _0x27a785, _0x42eae1) => {
  var _0x369266 = _0x42eae1 > 1 ? void 0 : _0x42eae1 ? __getOwnPropDesc$q(_0x4ad631, _0x27a785) : _0x4ad631;
  for (var _0x4f6441 = _0x3c7d65["length"] - 1, _0x5794a0; _0x4f6441 >= 0; _0x4f6441--) if (_0x5794a0 = _0x3c7d65[_0x4f6441]) _0x369266 = (_0x42eae1 ? _0x5794a0(_0x4ad631, _0x27a785, _0x369266) : _0x5794a0(_0x369266)) || _0x369266;
  if (_0x42eae1 && _0x369266) __defProp$q(_0x4ad631, _0x27a785, _0x369266);
  return _0x369266;
};
let AgxDrawer = class extends i {
  constructor() {
    super(...arguments), this["label"] = "", this["open"] = ![];
  }
  ["render"]() {
    return b`
      <div class="header" @click=${this["_toggle"]}>
        <span class="label">${this["label"]}</span>
        <span class="icon">▼</span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
  ["_toggle"]() {
    this["open"] = !this["open"];
  }
};
AgxDrawer["styles"] = i$3`
    :host { display: block; margin-bottom: 8px; }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: var(--agx-bg-card, #111a22);
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-radius: var(--agx-radius-md, 8px);
      cursor: pointer;
      user-select: none;
      transition: all 200ms ease;
    }

    :host([open]) .header {
      border-color: var(--agx-border, rgba(47, 107, 255,0.2));
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .header:hover {
      background: var(--agx-bg-hover, #1f2f3a);
    }

    .label {
      font-size: 13px;
      font-weight: 500;
      color: var(--agx-text-primary, #f0f4f8);
    }

    .icon {
      font-size: 10px;
      color: var(--agx-text-muted, #64748b);
      transition: transform 200ms ease;
    }

    :host([open]) .icon {
      transform: rotate(180deg);
    }

    .content {
      display: none;
      padding: 12px;
      background: var(--agx-bg-card, #111a22);
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-top: none;
      border-bottom-left-radius: var(--agx-radius-md, 8px);
      border-bottom-right-radius: var(--agx-radius-md, 8px);
    }

    :host([open]) .content {
      display: block;
      animation: slideDown 200ms ease;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `, __decorateClass$q([n2()], AgxDrawer["prototype"], "label", 2), __decorateClass$q([n2({ "type": Boolean, "reflect": !![] })], AgxDrawer["prototype"], "open", 2), AgxDrawer = __decorateClass$q([t$1("agx-drawer")], AgxDrawer);
var __defProp$p = Object["defineProperty"], __getOwnPropDesc$p = Object["getOwnPropertyDescriptor"], __decorateClass$p = (_0x51429d, _0x464d8c, _0xb73458, _0x47be1a) => {
  var _0x5e8d22 = _0x47be1a > 1 ? void 0 : _0x47be1a ? __getOwnPropDesc$p(_0x464d8c, _0xb73458) : _0x464d8c;
  for (var _0x2e12a2 = _0x51429d["length"] - 1, _0x1b8576; _0x2e12a2 >= 0; _0x2e12a2--) if (_0x1b8576 = _0x51429d[_0x2e12a2]) _0x5e8d22 = (_0x47be1a ? _0x1b8576(_0x464d8c, _0xb73458, _0x5e8d22) : _0x1b8576(_0x5e8d22)) || _0x5e8d22;
  if (_0x47be1a && _0x5e8d22) __defProp$p(_0x464d8c, _0xb73458, _0x5e8d22);
  return _0x5e8d22;
};
let AgxButton = class extends i {
  constructor() {
    super(...arguments), this["variant"] = "primary", this["size"] = "md", this["disabled"] = ![], this["loading"] = ![], this["full"] = ![];
  }
  ["render"]() {
    return b`
      <button
        class="${this["variant"]} ${this["size"]}"
        ?disabled=${this["disabled"] || this["loading"]}
        @click=${this["_handleClick"]}
      >
        ${this["loading"] ? b`<span class="spinner"></span>` : ""}
        <slot></slot>
      </button>
    `;
  }
  ["_handleClick"](_0x4a4d60) {
    (this["disabled"] || this["loading"]) && _0x4a4d60["stopPropagation"]();
  }
};
AgxButton["styles"] = i$3`
    :host { display: inline-block; }
    :host([full]) { display: block; width: 100%; }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      border: 1px solid transparent;
      border-radius: var(--agx-radius-md, 8px);
      font-family: var(--agx-font-thai, sans-serif);
      font-weight: 500;
      cursor: pointer;
      transition: all 200ms ease;
      white-space: nowrap;
      width: 100%;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Sizes */
    button.sm { padding: 4px 10px; font-size: 11px; }
    button.md { padding: 8px 16px; font-size: 13px; }
    button.lg { padding: 10px 20px; font-size: 14px; }

    /* Variants */
    button.primary {
      background: var(--agx-gradient-primary, #4A8DFF);
      color: white;
      border-color: transparent;
    }
    button.primary:hover:not(:disabled) {
      box-shadow: 0 0 16px rgba(47, 107, 255, 0.3);
    }

    button.secondary {
      background: var(--agx-bg-surface, #1a2730);
      color: var(--agx-text-primary, #f0f4f8);
      border-color: var(--agx-border-subtle, rgba(255,255,255,0.08));
    }
    button.secondary:hover:not(:disabled) {
      background: var(--agx-bg-hover, #1f2f3a);
    }

    button.danger {
      background: var(--agx-danger, #ef4444);
      color: white;
    }
    button.danger:hover:not(:disabled) {
      background: var(--agx-danger-dark, #dc2626);
    }

    button.success {
      background: var(--agx-success, #22c55e);
      color: white;
    }

    button.ghost {
      background: transparent;
      color: var(--agx-text-secondary, #94a3b8);
      border-color: var(--agx-border-subtle, rgba(255,255,255,0.08));
    }
    button.ghost:hover:not(:disabled) {
      color: var(--agx-text-primary, #f0f4f8);
      border-color: var(--agx-border, rgba(47, 107, 255,0.2));
    }

    button.gold {
      background: var(--agx-gradient-premium, #d4a843);
      color: #1a1a1a;
      font-weight: 600;
    }
    button.gold:hover:not(:disabled) {
      box-shadow: 0 0 16px rgba(212, 168, 67, 0.3);
    }

    .spinner {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 600ms linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `, __decorateClass$p([n2()], AgxButton["prototype"], "variant", 2), __decorateClass$p([n2()], AgxButton["prototype"], "size", 2), __decorateClass$p([n2({ "type": Boolean })], AgxButton["prototype"], "disabled", 2), __decorateClass$p([n2({ "type": Boolean })], AgxButton["prototype"], "loading", 2), __decorateClass$p([n2({ "type": Boolean })], AgxButton["prototype"], "full", 2), AgxButton = __decorateClass$p([t$1("agx-button")], AgxButton);
var __defProp$o = Object["defineProperty"], __getOwnPropDesc$o = Object["getOwnPropertyDescriptor"], __decorateClass$o = (_0xb05fd3, _0x3cb21a, _0x17f557, _0x4ba7d1) => {
  var _0x5f1a48 = _0x4ba7d1 > 1 ? void 0 : _0x4ba7d1 ? __getOwnPropDesc$o(_0x3cb21a, _0x17f557) : _0x3cb21a;
  for (var _0x27dc22 = _0xb05fd3["length"] - 1, _0x1e4e1a; _0x27dc22 >= 0; _0x27dc22--) if (_0x1e4e1a = _0xb05fd3[_0x27dc22]) _0x5f1a48 = (_0x4ba7d1 ? _0x1e4e1a(_0x3cb21a, _0x17f557, _0x5f1a48) : _0x1e4e1a(_0x5f1a48)) || _0x5f1a48;
  if (_0x4ba7d1 && _0x5f1a48) __defProp$o(_0x3cb21a, _0x17f557, _0x5f1a48);
  return _0x5f1a48;
};
let AgxSelect = class extends i {
  constructor() {
    super(...arguments), this["label"] = "", this["value"] = "", this["options"] = [], this["optional"] = ![], this["disabled"] = ![], this["hint"] = "";
  }
  ["render"]() {
    return b`
      ${this["label"] ? b`<label>
            ${this["label"]}
            ${this["optional"] ? b`<span class="optional">(ไม่บังคับ)</span>` : ""}
          </label>` : ""}
      <select .value=${this["value"]} ?disabled=${this["disabled"]} @change=${this["_onChange"]}>
        ${this["options"]["map"]((_0x350fb4) => b`<option value=${_0x350fb4["id"]} ?selected=${_0x350fb4["id"] === this["value"]}>
              ${_0x350fb4["label"]}
            </option>`)}
      </select>
      ${this["hint"] ? b`<div class="hint">${this["hint"]}</div>` : ""}
    `;
  }
  ["_onChange"](_0x5d5607) {
    _0x5d5607["stopPropagation"]();
    const _0x1ef464 = _0x5d5607["target"];
    this["value"] = _0x1ef464["value"], this["dispatchEvent"](new CustomEvent("change", { "detail": { "value": this["value"] }, "bubbles": !![], "composed": !![] }));
  }
};
AgxSelect["styles"] = i$3`
    :host { display: block; }

    label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary, #94a3b8);
      margin-bottom: 4px;
    }

    .optional {
      color: var(--agx-text-muted, #64748b);
      font-weight: 400;
      font-size: 10px;
    }

    select {
      width: 100%;
      padding: 8px 10px;
      background: var(--agx-bg-surface, #1a2730);
      color: var(--agx-text-primary, #f0f4f8);
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-radius: var(--agx-radius-sm, 6px);
      font-family: var(--agx-font-thai, sans-serif);
      font-size: 13px;
      cursor: pointer;
      transition: border-color 200ms ease;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2364748b'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 10px center;
      padding-right: 28px;
    }

    select:focus {
      border-color: var(--agx-accent, #4A8DFF);
      outline: none;
    }

    select:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--agx-bg-deep, #0f1619);
    }

    .hint {
      font-size: 11px;
      color: var(--agx-text-muted, #64748b);
      margin-top: 2px;
    }
  `, __decorateClass$o([n2()], AgxSelect["prototype"], "label", 2), __decorateClass$o([n2()], AgxSelect["prototype"], "value", 2), __decorateClass$o([n2({ "type": Array })], AgxSelect["prototype"], "options", 2), __decorateClass$o([n2({ "type": Boolean })], AgxSelect["prototype"], "optional", 2), __decorateClass$o([n2({ "type": Boolean })], AgxSelect["prototype"], "disabled", 2), __decorateClass$o([n2()], AgxSelect["prototype"], "hint", 2), AgxSelect = __decorateClass$o([t$1("agx-select")], AgxSelect);
var __defProp$n = Object["defineProperty"], __getOwnPropDesc$n = Object["getOwnPropertyDescriptor"], __decorateClass$n = (_0x309529, _0x2af789, _0x5640eb, _0x4f699b) => {
  var _0xb0fc82 = _0x4f699b > 1 ? void 0 : _0x4f699b ? __getOwnPropDesc$n(_0x2af789, _0x5640eb) : _0x2af789;
  for (var _0x474ba0 = _0x309529["length"] - 1, _0x1af775; _0x474ba0 >= 0; _0x474ba0--) if (_0x1af775 = _0x309529[_0x474ba0]) _0xb0fc82 = (_0x4f699b ? _0x1af775(_0x2af789, _0x5640eb, _0xb0fc82) : _0x1af775(_0xb0fc82)) || _0xb0fc82;
  if (_0x4f699b && _0xb0fc82) __defProp$n(_0x2af789, _0x5640eb, _0xb0fc82);
  return _0xb0fc82;
};
let AgxInput = class extends i {
  constructor() {
    super(...arguments), this["label"] = "", this["value"] = "", this["placeholder"] = "", this["type"] = "text", this["optional"] = ![], this["disabled"] = ![], this["hint"] = "", this["maxlength"] = 0, this["rows"] = 3;
  }
  ["render"]() {
    const _0x3099ee = this["value"] == null ? "" : String(this["value"]);
    return b`
      ${this["label"] ? b`<label>
            ${this["label"]}
            ${this["optional"] ? b`<span class="optional">(ไม่บังคับ)</span>` : ""}
          </label>` : ""}
      ${this["type"] === "textarea" ? b`<textarea
            .value=${_0x3099ee}
            placeholder=${this["placeholder"]}
            ?disabled=${this["disabled"]}
            rows=${this["rows"]}
            maxlength=${this["maxlength"] || void 0}
            @input=${this["_onInput"]}
          ></textarea>` : b`<input
            type=${this["type"]}
            .value=${_0x3099ee}
            placeholder=${this["placeholder"]}
            ?disabled=${this["disabled"]}
            maxlength=${this["maxlength"] || void 0}
            @input=${this["_onInput"]}
          />`}
      ${this["hint"] ? b`<div class="hint">${this["hint"]}</div>` : ""}
      ${this["maxlength"] ? b`<div class="char-count">${_0x3099ee["length"]}/${this["maxlength"]}</div>` : ""}
    `;
  }
  ["_onInput"](_0x41c9b6) {
    _0x41c9b6["stopPropagation"]();
    const _0x3b654c = _0x41c9b6["target"];
    this["value"] = _0x3b654c["value"], this["dispatchEvent"](new CustomEvent("input", { "detail": { "value": this["value"] }, "bubbles": !![], "composed": !![] }));
  }
};
AgxInput["styles"] = i$3`
    :host { display: block; }

    label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary, #94a3b8);
      margin-bottom: 4px;
    }

    .optional {
      color: var(--agx-text-muted, #64748b);
      font-weight: 400;
      font-size: 10px;
    }

    input, textarea {
      width: 100%;
      padding: 8px 10px;
      background: var(--agx-bg-surface, #1a2730);
      color: var(--agx-text-primary, #f0f4f8);
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-radius: var(--agx-radius-sm, 6px);
      font-family: var(--agx-font-thai, sans-serif);
      font-size: 13px;
      transition: border-color 200ms ease;
      box-sizing: border-box;
    }

    textarea {
      resize: vertical;
      min-height: 60px;
    }

    input:focus, textarea:focus {
      border-color: var(--agx-accent, #4A8DFF);
      outline: none;
    }

    input:disabled, textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .hint {
      font-size: 11px;
      color: var(--agx-text-muted, #64748b);
      margin-top: 2px;
    }

    .char-count {
      font-size: 10px;
      color: var(--agx-text-muted, #64748b);
      text-align: right;
      margin-top: 2px;
    }
  `, __decorateClass$n([n2()], AgxInput["prototype"], "label", 2), __decorateClass$n([n2()], AgxInput["prototype"], "value", 2), __decorateClass$n([n2()], AgxInput["prototype"], "placeholder", 2), __decorateClass$n([n2()], AgxInput["prototype"], "type", 2), __decorateClass$n([n2({ "type": Boolean })], AgxInput["prototype"], "optional", 2), __decorateClass$n([n2({ "type": Boolean })], AgxInput["prototype"], "disabled", 2), __decorateClass$n([n2()], AgxInput["prototype"], "hint", 2), __decorateClass$n([n2({ "type": Number })], AgxInput["prototype"], "maxlength", 2), __decorateClass$n([n2({ "type": Number })], AgxInput["prototype"], "rows", 2), AgxInput = __decorateClass$n([t$1("agx-input")], AgxInput);
var __defProp$m = Object["defineProperty"], __getOwnPropDesc$m = Object["getOwnPropertyDescriptor"], __decorateClass$m = (_0x4584b0, _0xc0fcaf, _0x4eb6d6, _0x1c6901) => {
  var _0x5a5013 = _0x1c6901 > 1 ? void 0 : _0x1c6901 ? __getOwnPropDesc$m(_0xc0fcaf, _0x4eb6d6) : _0xc0fcaf;
  for (var _0x228c0a = _0x4584b0["length"] - 1, _0x5e3f16; _0x228c0a >= 0; _0x228c0a--) if (_0x5e3f16 = _0x4584b0[_0x228c0a]) _0x5a5013 = (_0x1c6901 ? _0x5e3f16(_0xc0fcaf, _0x4eb6d6, _0x5a5013) : _0x5e3f16(_0x5a5013)) || _0x5a5013;
  if (_0x1c6901 && _0x5a5013) __defProp$m(_0xc0fcaf, _0x4eb6d6, _0x5a5013);
  return _0x5a5013;
};
let AgxToggle = class extends i {
  constructor() {
    super(...arguments), this["label"] = "", this["checked"] = ![], this["disabled"] = ![];
  }
  ["render"]() {
    return b`
      <div
        class="wrapper ${this["disabled"] ? "disabled" : ""}"
        @click=${this["_toggle"]}
        role="checkbox"
        aria-checked=${this["checked"]}
        aria-disabled=${this["disabled"]}
      >
        <div class="box">
          <div class="check"></div>
        </div>
        <span class="label">${this["label"]}</span>
      </div>
    `;
  }
  ["_toggle"]() {
    if (this["disabled"]) return;
    this["checked"] = !this["checked"], this["dispatchEvent"](new CustomEvent("change", { "detail": { "checked": this["checked"] }, "bubbles": !![], "composed": !![] }));
  }
};
AgxToggle["styles"] = i$3`
    :host { display: block; }

    .wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }

    .wrapper.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Checkbox box — replaces the old track+thumb toggle. */
    .box {
      width: 18px;
      height: 18px;
      border-radius: 4px;
      background: var(--agx-bg-surface, #1a2730);
      border: 1.5px solid var(--agx-border-subtle, rgba(255,255,255,0.18));
      position: relative;
      transition: all 150ms ease;
      flex-shrink: 0;
      box-sizing: border-box;
    }

    .wrapper:hover .box {
      border-color: var(--agx-accent, #4A8DFF);
    }

    :host([checked]) .box {
      background: var(--agx-accent, #4A8DFF);
      border-color: var(--agx-accent, #4A8DFF);
    }

    /* Checkmark drawn with two CSS borders — no SVG needed. */
    .check {
      position: absolute;
      top: 1px;
      left: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg) scale(0);
      transition: transform 120ms ease;
      pointer-events: none;
    }

    :host([checked]) .check {
      transform: rotate(45deg) scale(1);
    }

    .label {
      font-size: 13px;
      color: var(--agx-text-primary, #f0f4f8);
    }
  `, __decorateClass$m([n2()], AgxToggle["prototype"], "label", 2), __decorateClass$m([n2({ "type": Boolean, "reflect": !![] })], AgxToggle["prototype"], "checked", 2), __decorateClass$m([n2({ "type": Boolean })], AgxToggle["prototype"], "disabled", 2), AgxToggle = __decorateClass$m([t$1("agx-toggle")], AgxToggle);
var __defProp$l = Object["defineProperty"], __getOwnPropDesc$l = Object["getOwnPropertyDescriptor"], __decorateClass$l = (_0x53b317, _0x2e17c8, _0x5e0d97, _0x5a13b3) => {
  var _0x421f01 = _0x5a13b3 > 1 ? void 0 : _0x5a13b3 ? __getOwnPropDesc$l(_0x2e17c8, _0x5e0d97) : _0x2e17c8;
  for (var _0x32da36 = _0x53b317["length"] - 1, _0x366972; _0x32da36 >= 0; _0x32da36--) if (_0x366972 = _0x53b317[_0x32da36]) _0x421f01 = (_0x5a13b3 ? _0x366972(_0x2e17c8, _0x5e0d97, _0x421f01) : _0x366972(_0x421f01)) || _0x421f01;
  if (_0x5a13b3 && _0x421f01) __defProp$l(_0x2e17c8, _0x5e0d97, _0x421f01);
  return _0x421f01;
};
let nextId = 0;
let AgxToast = class extends i {
  constructor() {
    super(...arguments), this["messages"] = [];
  }
  ["render"]() {
    return b`
      ${this["messages"]["map"]((_0x594817) => b`<div class="toast ${_0x594817["type"]}" id="toast-${_0x594817["id"]}">${_0x594817["text"]}</div>`)}
    `;
  }
  ["show"](_0x3ce2e4, _0x42a261 = "info", _0x4e99dd = 3e3) {
    const _0x546524 = nextId++;
    this["messages"] = [...this["messages"], { "id": _0x546524, "text": _0x3ce2e4, "type": _0x42a261, "duration": _0x4e99dd }], setTimeout(() => {
      var _a2;
      const _0x5be4f1 = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["getElementById"]("toast-" + _0x546524);
      if (_0x5be4f1) _0x5be4f1["classList"]["add"]("removing");
      setTimeout(() => {
        this["messages"] = this["messages"]["filter"]((_0x20bae5) => _0x20bae5["id"] !== _0x546524);
      }, 200);
    }, _0x4e99dd);
  }
};
AgxToast["styles"] = i$3`
    :host {
      position: fixed;
      top: 12px;
      right: 12px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 6px;
      max-width: 320px;
    }

    .toast {
      padding: 8px 14px;
      border-radius: var(--agx-radius-md, 8px);
      font-size: 12px;
      color: white;
      animation: slideInRight 300ms ease forwards;
      box-shadow: var(--agx-shadow-md, 0 4px 16px rgba(0,0,0,0.4));
    }

    .toast.removing {
      animation: slideOutRight 200ms ease forwards;
    }

    .toast.info { background: var(--agx-info, #3b82f6); }
    .toast.success { background: linear-gradient(135deg, #2F6BFF, #4A8DFF); }
    .toast.warning { background: var(--agx-warning, #f59e0b); color: #1a1a1a; }
    .toast.error { background: var(--agx-danger, #ef4444); }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideOutRight {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100%); }
    }
  `, __decorateClass$l([r()], AgxToast["prototype"], "messages", 2), AgxToast = __decorateClass$l([t$1("agx-toast")], AgxToast);
var __defProp$k = Object["defineProperty"], __getOwnPropDesc$k = Object["getOwnPropertyDescriptor"], __decorateClass$k = (_0x48e329, _0x285661, _0x4b7eea, _0x5e10f0) => {
  var _0x3d854e = _0x5e10f0 > 1 ? void 0 : _0x5e10f0 ? __getOwnPropDesc$k(_0x285661, _0x4b7eea) : _0x285661;
  for (var _0x2179d1 = _0x48e329["length"] - 1, _0x116b5c; _0x2179d1 >= 0; _0x2179d1--) if (_0x116b5c = _0x48e329[_0x2179d1]) _0x3d854e = (_0x5e10f0 ? _0x116b5c(_0x285661, _0x4b7eea, _0x3d854e) : _0x116b5c(_0x3d854e)) || _0x3d854e;
  if (_0x5e10f0 && _0x3d854e) __defProp$k(_0x285661, _0x4b7eea, _0x3d854e);
  return _0x3d854e;
};
let AgxLog = class extends i {
  constructor() {
    super(...arguments), this["entries"] = [], this["maxEntries"] = 200;
  }
  ["render"]() {
    if (this["entries"]["length"] === 0) return b`<div class="container"><div class="empty">ยังไม่มีข้อมูล</div></div>`;
    return b`
      <div class="container">
        ${this["entries"]["map"]((_0x43ff9c) => b`
            <div class="entry">
              <span class="time">${this["_formatTime"](_0x43ff9c["timestamp"])}</span>
              <span class="msg ${_0x43ff9c["level"]}">${_0x43ff9c["message"]}</span>
            </div>
          `)}
      </div>
    `;
  }
  ["addEntry"](_0x44f35d) {
    this["entries"] = [...this["entries"], _0x44f35d]["slice"](-this["maxEntries"]);
  }
  ["updated"](_0xd2fa34) {
    var _a2;
    if (_0xd2fa34["has"]("entries")) {
      const _0x5ad103 = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["querySelector"](".container");
      if (_0x5ad103) _0x5ad103["scrollTop"] = _0x5ad103["scrollHeight"];
    }
  }
  ["clear"]() {
    this["entries"] = [];
  }
  ["_formatTime"](_0x15c312) {
    const _0x1f369e = new Date(_0x15c312);
    return _0x1f369e["toLocaleTimeString"]("th-TH", { "hour": "2-digit", "minute": "2-digit", "second": "2-digit" });
  }
};
AgxLog["styles"] = i$3`
    :host { display: block; }

    .container {
      background: var(--agx-bg-deep, #000);
      border: 1px solid var(--agx-border-subtle, rgba(255,255,255,0.08));
      border-radius: var(--agx-radius-md, 8px);
      padding: 8px;
      max-height: 300px;
      overflow-y: auto;
      font-family: var(--agx-font-mono, monospace);
      font-size: 11px;
      line-height: 1.6;
    }

    .entry {
      padding: 1px 0;
      display: flex;
      gap: 6px;
    }

    .time {
      color: var(--agx-text-muted, #64748b);
      flex-shrink: 0;
    }

    .msg { word-break: break-word; }
    .msg.info { color: var(--agx-text-secondary, #94a3b8); }
    .msg.warn { color: var(--agx-warning, #f59e0b); }
    .msg.error { color: var(--agx-danger, #ef4444); }
    .msg.success { color: var(--agx-accent, #4A8DFF); }
    /* notice — "นี่ไม่ใช่ error" สีฟ้าเหมือน success แต่ semantic ต่าง
       ใช้กับ informational degradation เช่น API key ไม่กรอก แต่ pipeline ยัง run ต่อได้ */
    .msg.notice { color: var(--agx-accent, #4A8DFF); }

    .empty {
      color: var(--agx-text-muted, #64748b);
      text-align: center;
      padding: 16px 0;
      font-family: var(--agx-font-thai, sans-serif);
      font-size: 12px;
    }
  `, __decorateClass$k([r()], AgxLog["prototype"], "entries", 2), __decorateClass$k([n2({ "type": Number })], AgxLog["prototype"], "maxEntries", 2), AgxLog = __decorateClass$k([t$1("agx-log")], AgxLog);
var __defProp$j = Object["defineProperty"], __getOwnPropDesc$j = Object["getOwnPropertyDescriptor"], __decorateClass$j = (_0x3ec00d, _0xbc901e, _0x33adc8, _0x1f09e4) => {
  var _0x205bdb = _0x1f09e4 > 1 ? void 0 : _0x1f09e4 ? __getOwnPropDesc$j(_0xbc901e, _0x33adc8) : _0xbc901e;
  for (var _0x1d7803 = _0x3ec00d["length"] - 1, _0x11c2f0; _0x1d7803 >= 0; _0x1d7803--) if (_0x11c2f0 = _0x3ec00d[_0x1d7803]) _0x205bdb = (_0x1f09e4 ? _0x11c2f0(_0xbc901e, _0x33adc8, _0x205bdb) : _0x11c2f0(_0x205bdb)) || _0x205bdb;
  if (_0x1f09e4 && _0x205bdb) __defProp$j(_0xbc901e, _0x33adc8, _0x205bdb);
  return _0x205bdb;
};
let AgxBadge = class extends i {
  constructor() {
    super(...arguments), this["variant"] = "new";
  }
  ["render"]() {
    return b`<span class="badge ${this["variant"]}"><slot></slot></span>`;
  }
};
AgxBadge["styles"] = i$3`
    :host { display: inline-block; }

    .badge {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .hit { background: var(--agx-danger, #ef4444); color: white; }
    .hot { background: var(--agx-warning, #f59e0b); color: #1a1a1a; }
    .new { background: var(--agx-accent, #4A8DFF); color: white; }
    .soon { background: var(--agx-text-muted, #64748b); color: white; }
    .vip { background: var(--agx-gradient-premium, #d4a843); color: #1a1a1a; }
  `, __decorateClass$j([n2()], AgxBadge["prototype"], "variant", 2), AgxBadge = __decorateClass$j([t$1("agx-badge")], AgxBadge);
var __defProp$i = Object["defineProperty"], __getOwnPropDesc$i = Object["getOwnPropertyDescriptor"], __decorateClass$i = (_0x4a1d27, _0x3eaede, _0x1efc08, _0x3b8419) => {
  var _0x5c1c15 = _0x3b8419 > 1 ? void 0 : _0x3b8419 ? __getOwnPropDesc$i(_0x3eaede, _0x1efc08) : _0x3eaede;
  for (var _0x5cf4ba = _0x4a1d27["length"] - 1, _0x32986d; _0x5cf4ba >= 0; _0x5cf4ba--) if (_0x32986d = _0x4a1d27[_0x5cf4ba]) _0x5c1c15 = (_0x3b8419 ? _0x32986d(_0x3eaede, _0x1efc08, _0x5c1c15) : _0x32986d(_0x5c1c15)) || _0x5c1c15;
  if (_0x3b8419 && _0x5c1c15) __defProp$i(_0x3eaede, _0x1efc08, _0x5c1c15);
  return _0x5c1c15;
};
let AgxOverlay = class extends i {
  constructor() {
    super(...arguments), this["active"] = ![], this["title"] = "", this["progress"] = 0, this["total"] = 0, this["step"] = "";
  }
  ["render"]() {
    const _0x2f53e4 = this["total"] > 0 ? this["progress"] / this["total"] * 100 : 0;
    return b`
      <div class="header">
        <span class="title">${this["title"] || "Processing..."}</span>
        ${this["total"] > 0 ? b`<span class="progress-info">${this["progress"]}/${this["total"]}</span>` : ""}
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${_0x2f53e4}%"></div>
      </div>
      ${this["step"] ? b`<div class="step">${this["step"]}</div>` : ""}
      <div class="log-area">
        <slot></slot>
      </div>
      <div class="controls">
        <slot name="controls"></slot>
      </div>
    `;
  }
};
AgxOverlay["styles"] = i$3`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9000;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(4px);
      flex-direction: column;
    }

    :host([active]) {
      display: flex;
    }

    .header {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      font-size: 14px;
      font-weight: 600;
      color: var(--agx-accent, #4A8DFF);
    }

    .progress-info {
      font-size: 12px;
      color: var(--agx-text-secondary, #94a3b8);
    }

    .progress-bar {
      height: 3px;
      background: var(--agx-bg-surface, #1a2730);
    }

    .progress-fill {
      height: 100%;
      background: var(--agx-gradient-primary, #4A8DFF);
      transition: width 300ms ease;
    }

    .step {
      padding: 8px 16px;
      font-size: 12px;
      color: var(--agx-text-muted, #64748b);
    }

    .log-area {
      flex: 1;
      overflow-y: auto;
      padding: 0 16px 16px;
    }

    .controls {
      padding: 12px 16px;
      display: flex;
      justify-content: center;
    }
  `, __decorateClass$i([n2({ "type": Boolean, "reflect": !![] })], AgxOverlay["prototype"], "active", 2), __decorateClass$i([n2()], AgxOverlay["prototype"], "title", 2), __decorateClass$i([n2({ "type": Number })], AgxOverlay["prototype"], "progress", 2), __decorateClass$i([n2({ "type": Number })], AgxOverlay["prototype"], "total", 2), __decorateClass$i([n2()], AgxOverlay["prototype"], "step", 2), AgxOverlay = __decorateClass$i([t$1("agx-overlay")], AgxOverlay);
var __defProp$h = Object["defineProperty"], __getOwnPropDesc$h = Object["getOwnPropertyDescriptor"], __decorateClass$h = (_0x4d89fb, _0x197e2c, _0x21b238, _0x102350) => {
  var _0x2071f9 = _0x102350 > 1 ? void 0 : _0x102350 ? __getOwnPropDesc$h(_0x197e2c, _0x21b238) : _0x197e2c;
  for (var _0x17f9b8 = _0x4d89fb["length"] - 1, _0x26ffcf; _0x17f9b8 >= 0; _0x17f9b8--) if (_0x26ffcf = _0x4d89fb[_0x17f9b8]) _0x2071f9 = (_0x102350 ? _0x26ffcf(_0x197e2c, _0x21b238, _0x2071f9) : _0x26ffcf(_0x2071f9)) || _0x2071f9;
  if (_0x102350 && _0x2071f9) __defProp$h(_0x197e2c, _0x21b238, _0x2071f9);
  return _0x2071f9;
};
let AgxUpdatePopup = class extends i {
  constructor() {
    super(...arguments), this["current"] = "";
  }
  ["_download"]() {
    var _a2;
    const _0x590fe9 = (_a2 = this["latest"]) == null ? void 0 : _a2["url"];
    _0x590fe9 && void chrome["tabs"]["create"]({ "url": _0x590fe9 }), this["_dismiss"]("downloaded");
  }
  ["_dismiss"](_0x588695 = "later") {
    this["dispatchEvent"](new CustomEvent("popup-dismissed", { "detail": { "reason": _0x588695, "version": this["_latestVersion"]() }, "bubbles": !![], "composed": !![] }));
  }
  ["_latestVersion"]() {
    var _a2;
    return (((_a2 = this["latest"]) == null ? void 0 : _a2["fullLabel"]) || "")["trim"]();
  }
  ["render"]() {
    if (!this["latest"]) return null;
    return b`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="upd-title">
        <span class="badge">มีอัพเดทใหม่</span>
        <h3 id="upd-title">${this["latest"]["fullLabel"]}</h3>
        <div class="version-line">
          ปัจจุบัน: <strong>${this["current"]}</strong>
          <span class="arrow">→</span>
          <strong style="color:#06c755">${this["latest"]["fullLabel"]}</strong>
          ${this["latest"]["date"] ? b` · ${this["latest"]["date"]}` : ""}
        </div>
        <div class="summary">${this["latest"]["summary"] || "อัพเดทเวอร์ชั่นใหม่พร้อมใช้งานแล้ว"}</div>
        <div class="actions">
          <button class="btn-download" @click=${this["_download"]}
                  ?disabled=${!this["latest"]["url"]}>
            ⬇ Download now
          </button>
          <button class="btn-dismiss" @click=${() => this["_dismiss"]("later")}>
            ไว้ทีหลัง
          </button>
        </div>
      </div>
    `;
  }
};
AgxUpdatePopup["styles"] = i$3`
    :host {
      position: fixed;
      inset: 0;
      z-index: 9500;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      background: rgba(0, 0, 0, 0.72);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      animation: fadeIn 180ms ease-out;
      font-family: var(--agx-font-thai, 'Sarabun', sans-serif);
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp {
      from { transform: translateY(16px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .modal {
      width: 100%;
      max-width: 360px;
      background: linear-gradient(155deg, #1e2531 0%, #161b25 100%);
      color: var(--agx-text-primary, #f0f4f8);
      border-radius: 14px;
      padding: 22px 20px 18px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5),
                  0 0 0 1px rgba(74, 141, 255, 0.18) inset;
      animation: slideUp 220ms cubic-bezier(.2,.9,.3,1.1);
    }
    .badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #06c755;
      background: rgba(6, 199, 85, 0.12);
      border: 1px solid rgba(6, 199, 85, 0.3);
      padding: 3px 8px;
      border-radius: 999px;
      margin-bottom: 10px;
    }
    h3 {
      margin: 0 0 6px;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.3;
      color: #ffffff;
    }
    .version-line {
      font-size: 11px;
      color: var(--agx-text-muted, #94a3b8);
      margin-bottom: 12px;
    }
    .version-line .arrow {
      color: #4A8DFF;
      margin: 0 4px;
    }
    .summary {
      font-size: 12.5px;
      line-height: 1.55;
      color: var(--agx-text-secondary, #d3dbe6);
      background: rgba(74, 141, 255, 0.06);
      border-left: 3px solid #4A8DFF;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 16px;
      max-height: 110px;
      overflow-y: auto;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    button {
      font-family: inherit;
      font-size: 13px;
      font-weight: 600;
      border: 0;
      border-radius: 8px;
      padding: 11px 14px;
      cursor: pointer;
      transition: transform 80ms ease, filter 120ms ease;
    }
    button:hover { filter: brightness(1.08); }
    button:active { transform: scale(0.98); }
    .btn-download {
      background: linear-gradient(135deg, #4A8DFF, #2f6bff);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }
    .btn-dismiss {
      background: transparent;
      color: var(--agx-text-muted, #94a3b8);
      font-weight: 500;
    }
    .btn-dismiss:hover {
      color: var(--agx-text-primary, #f0f4f8);
      background: rgba(255, 255, 255, 0.04);
    }
  `, __decorateClass$h([n2({ "type": Object })], AgxUpdatePopup["prototype"], "latest", 2), __decorateClass$h([n2()], AgxUpdatePopup["prototype"], "current", 2), AgxUpdatePopup = __decorateClass$h([t$1("agx-update-popup")], AgxUpdatePopup);
const isString = (obj) => typeof obj === "string";
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = (object) => {
  if (object == null) return "";
  return "" + object;
};
const copy = (a2, s2, t2) => {
  a2.forEach((m2) => {
    if (s2[m2]) t2[m2] = s2[m2];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
const canNotTraverseDeeper = (object) => !object || isString(object);
const getLastOfPath = (object, path, Empty) => {
  const stack = !isString(path) ? path : path.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path, newValue) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path, Object);
  if (obj !== void 0 || path.length === 1) {
    obj[k2] = newValue;
    return;
  }
  let e2 = path[path.length - 1];
  let p2 = path.slice(0, path.length - 1);
  let last = getLastOfPath(object, p2, Object);
  while (last.obj === void 0 && p2.length) {
    e2 = `${p2[p2.length - 1]}.${e2}`;
    p2 = p2.slice(0, p2.length - 1);
    last = getLastOfPath(object, p2, Object);
    if ((last == null ? void 0 : last.obj) && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e2}`] = newValue;
};
const pushPath = (object, path, newValue, concat) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path, Object);
  obj[k2] = obj[k2] || [];
  obj[k2].push(newValue);
};
const getPath = (object, path) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path);
  if (!obj) return void 0;
  if (!Object.prototype.hasOwnProperty.call(obj, k2)) return void 0;
  return obj[k2];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const escape = (data) => {
  if (isString(data)) {
    return data.replace(/[&<>"'\/]/g, (s2) => _entityMap[s2]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [" ", ",", "?", "!", ";"];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
  if (possibleChars.length === 0) return true;
  const r2 = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
  let matched = !r2.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r2.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function(obj, path) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj) return void 0;
  if (obj[path]) {
    if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
    return obj[path];
  }
  const tokens = path.split(keySeparator);
  let current = obj;
  for (let i2 = 0; i2 < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i2; j < tokens.length; ++j) {
      if (j !== i2) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i2 += j - i2 + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = (code) => code == null ? void 0 : code.replace("_", "-");
const consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    var _a2, _b;
    (_b = (_a2 = console == null ? void 0 : console[type]) == null ? void 0 : _a2.apply) == null ? void 0 : _b.call(_a2, console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();
class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach((_ref) => {
        let [observer, numTimesAdded] = _ref;
        for (let i2 = 0; i2 < numTimesAdded; i2++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach((_ref2) => {
        let [observer, numTimesAdded] = _ref2;
        for (let i2 = 0; i2 < numTimesAdded; i2++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}
class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    var _a2, _b;
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path;
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
    } else {
      path = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path.push(...key);
        } else if (isString(key) && keySeparator) {
          path.push(...key.split(keySeparator));
        } else {
          path.push(key);
        }
      }
    }
    const result = getPath(this.data, path);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path[0];
      ns = path[1];
      key = path.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || !isString(key)) return result;
    return deepFind((_b = (_a2 = this.data) == null ? void 0 : _a2[lng]) == null ? void 0 : _b[ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path = [lng, ns];
    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      value = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path, value);
    if (!options.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m2 in resources) {
      if (isString(resources[m2]) || Array.isArray(resources[m2])) this.addResource(lng, ns, m2, resources[m2], {
        silent: true
      });
    }
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path, pack);
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n3 = data && Object.keys(data) || [];
    return !!n3.find((v2) => data[v2] && Object.keys(data[v2]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      var _a2;
      value = ((_a2 = this.processors[processor]) == null ? void 0 : _a2.process(value, key, options, translator)) ?? value;
    });
    return value;
  }
};
const checkedLoadedFor = {};
const shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key == null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return (resolved == null ? void 0 : resolved.res) !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m2 = key.match(this.interpolator.nestingRegexp);
      if (m2 && m2.length > 0) {
        return {
          key,
          namespaces: isString(namespaces) ? [namespaces] : namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    return {
      key,
      namespaces: isString(namespaces) ? [namespaces] : namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object") options = {
      ...options
    };
    if (!options) options = {};
    if (keys == null) return "";
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((lng == null ? void 0 : lng.toLowerCase()) === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved == null ? void 0 : resolved.res;
    const resUsedKey = (resolved == null ? void 0 : resolved.usedKey) || key;
    const resExactUsedKey = (resolved == null ? void 0 : resolved.exactUsedKey) || key;
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const needsPluralHandling = options.count !== void 0 && !isString(options.count);
    const hasDefaultValue = Translator.hasDefaultValue(options);
    const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
    const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
      ordinal: false
    }) : "";
    const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
    const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
    let resForObjHndl = res;
    if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
      resForObjHndl = defaultValue;
    }
    const handleAsObject = shouldHandleAsObject(resForObjHndl);
    const resType = Object.prototype.toString.apply(resForObjHndl);
    if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r2;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r2;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(resForObjHndl);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m2 in resForObjHndl) {
          if (Object.prototype.hasOwnProperty.call(resForObjHndl, m2)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m2}`;
            if (hasDefaultValue && !res) {
              copy2[m2] = this.translate(deepKey, {
                ...options,
                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m2] : void 0,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            } else {
              copy2[m2] = this.translate(deepKey, {
                ...options,
                ...{
                  joinArrays: false,
                  ns: namespaces
                }
              });
            }
            if (copy2[m2] === deepKey) copy2[m2] = resForObjHndl[m2];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i2 = 0; i2 < fallbackLngs.length; i2++) {
            lngs.push(fallbackLngs[i2]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l2, k2, specificDefaultValue) => {
          var _a2;
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
          } else if ((_a2 = this.backendConnector) == null ? void 0 : _a2.saveMissing) {
            this.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l2, namespace, k2, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _a2, _b;
    var _this = this;
    if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = isString(res) && (((_b = options == null ? void 0 : options.interpolation) == null ? void 0 : _b.skipOnVariables) !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data = options.replace && !isString(options.replace) ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if ((lastKey == null ? void 0 : lastKey[0]) === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
    if (res != null && (postProcessorNames == null ? void 0 : postProcessorNames.length) && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (isString(keys)) keys = [keys];
    keys.forEach((k2) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k2, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && !isString(options.count);
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0;
      const needsContextHandling = options.context !== void 0 && (isString(options.context) || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        var _a2, _b;
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && ((_a2 = this.utils) == null ? void 0 : _a2.hasLoadedNamespace) && !((_b = this.utils) == null ? void 0 : _b.hasLoadedNamespace(usedNS))) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          var _a3;
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if ((_a3 = this.i18nFormat) == null ? void 0 : _a3.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    var _a2;
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if ((_a2 = this.i18nFormat) == null ? void 0 : _a2.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && !isString(options.replace);
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
}
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return null;
    const p2 = code.split("-");
    if (p2.length === 2) return null;
    p2.pop();
    if (p2[p2.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p2.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return code;
    const p2 = code.split("-");
    return this.formatLanguageCode(p2[0]);
  }
  formatLanguageCode(code) {
    if (isString(code) && code.indexOf("-") > -1) {
      let formattedCode;
      try {
        formattedCode = Intl.getCanonicalLocales(code)[0];
      } catch (e2) {
      }
      if (formattedCode && this.options.lowerCaseLng) {
        formattedCode = formattedCode.toLowerCase();
      }
      if (formattedCode) return formattedCode;
      if (this.options.lowerCaseLng) {
        return code.toLowerCase();
      }
      return code;
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (isString(fallbacks)) fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c2) => {
      if (!c2) return;
      if (this.isSupportedCode(c2)) {
        codes.push(c2);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
      }
    };
    if (isString(code) && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (isString(code)) {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
}
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const dummyRule = {
  select: (count) => count === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
    const type = options.ordinal ? "ordinal" : "cardinal";
    const cacheKey = JSON.stringify({
      cleanedCode,
      type
    });
    if (cacheKey in this.pluralRulesCache) {
      return this.pluralRulesCache[cacheKey];
    }
    let rule;
    try {
      rule = new Intl.PluralRules(cleanedCode, {
        type
      });
    } catch (err) {
      if (!Intl) {
        this.logger.error("No Intl support, please use an Intl polyfill!");
        return dummyRule;
      }
      if (!code.match(/-|_/)) return dummyRule;
      const lngPart = this.languageUtils.getLanguagePartFromCode(code);
      rule = this.getRule(lngPart, options);
    }
    this.pluralRulesCache[cacheKey] = rule;
    return rule;
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    return (rule == null ? void 0 : rule.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let rule = this.getRule(code, options);
    if (!rule) rule = this.getRule("dev", options);
    if (!rule) return [];
    return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return this.getSuffix("dev", count, options);
  }
}
const deepFindWithDefaults = function(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path = getPathWithDefaults(data, defaultData, key);
  if (!path && ignoreJSONStructure && isString(key)) {
    path = deepFind(data, key, keySeparator);
    if (path === void 0) path = deepFind(defaultData, key, keySeparator);
  }
  return path;
};
const regexSafe = (val) => val.replace(/\$/g, "$$$$");
class Interpolator {
  constructor() {
    var _a2;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = ((_a2 = options == null ? void 0 : options.interpolation) == null ? void 0 : _a2.format) || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if ((existingRegExp == null ? void 0 : existingRegExp.source) === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    var _a2;
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path;
      }
      const p2 = key.split(this.formatSeparator);
      const k2 = p2.shift().trim();
      const f2 = p2.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k2, this.options.keySeparator, this.options.ignoreJSONStructure), f2, lng, {
        ...options,
        ...data,
        interpolationkey: k2
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = (options == null ? void 0 : options.missingInterpolationHandler) || this.options.missingInterpolationHandler;
    const skipOnVariables = ((_a2 = options == null ? void 0 : options.interpolation) == null ? void 0 : _a2.skipOnVariables) !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = isString(temp) ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (!isString(value) && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c2 = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c2[1]}`;
      key = c2[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (((matchedSingleQuotes == null ? void 0 : matchedSingleQuotes.length) ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e2) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r2 = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r2.shift();
        formatters = r2;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && !isString(value)) return value;
      if (!isString(value)) value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v2, f2) => this.format(v2, f2, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
const parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p2 = formatStr.split("(");
    formatName = p2[0].toLowerCase().trim();
    const optStr = p2[1].substring(0, p2[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = (fn) => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: void 0
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = options.interpolation.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f2) => f2.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f2) => f2.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f2) => {
      var _a2;
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f2);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = ((_a2 = options == null ? void 0 : options.formatParams) == null ? void 0 : _a2[options.interpolationkey]) || {};
          const l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l2, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}
const removePending = (q, name) => {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store2, services) {
    var _a2, _b;
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store2;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    (_b = (_a2 = this.backend) == null ? void 0 : _a2.init) == null ? void 0 : _b.call(_a2, services, options.backend, options);
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s2 = name.split("|");
    const lng = s2[0];
    const ns = s2[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err) q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l2) => {
          if (!loaded[l2]) loaded[l2] = {};
          const loadedKeys = q.loaded[l2];
          if (loadedKeys.length) {
            loadedKeys.forEach((n3) => {
              if (loaded[l2][n3] === void 0) loaded[l2][n3] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r2 = fc(lng, ns);
        if (r2 && typeof r2.then === "function") {
          r2.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r2);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
    if (isString(namespaces)) namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s2 = name.split("|");
    const lng = s2[0];
    const ns = s2[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    var _a2, _b, _c, _d, _e;
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (((_b = (_a2 = this.services) == null ? void 0 : _a2.utils) == null ? void 0 : _b.hasLoadedNamespace) && !((_d = (_c = this.services) == null ? void 0 : _c.utils) == null ? void 0 : _d.hasLoadedNamespace(namespace))) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if ((_e = this.backend) == null ? void 0 : _e.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r2;
          if (fc.length === 5) {
            r2 = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r2 = fc(languages, namespace, key, fallbackValue);
          }
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r2);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
const get = () => ({
  debug: false,
  initAsync: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (isString(args[1])) ret.defaultValue = args[1];
    if (isString(args[2])) ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  }
});
const transformOptions = (options) => {
  var _a2, _b;
  if (isString(options.ns)) options.ns = [options.ns];
  if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
  if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
  if (((_b = (_a2 = options.supportedLngs) == null ? void 0 : _a2.indexOf) == null ? void 0 : _b.call(_a2, "cimode")) < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  if (typeof options.initImmediate === "boolean") options.initAsync = options.initImmediate;
  return options;
};
const noop = () => {
};
const bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initAsync) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (options.defaultNS == null && options.ns) {
      if (isString(options.ns)) {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    this.options.interpolation = {
      ...defOpts.interpolation,
      ...this.options.interpolation
    };
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s2 = this.services;
      s2.logger = baseLogger;
      s2.resourceStore = this.store;
      s2.languageUtils = lu;
      s2.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s2.formatter = createClassOnDemand(formatter);
        s2.formatter.init(s2, this.options);
        this.options.interpolation.format = s2.formatter.format.bind(s2.formatter);
      }
      s2.interpolator = new Interpolator(this.options);
      s2.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s2.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s2.resourceStore, s2, this.options);
      s2.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s2.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s2.languageDetector.init) s2.languageDetector.init(s2, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s2.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s2.i18nFormat.init) s2.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m2) => {
        if (m2.init) m2.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initAsync) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    var _a2, _b;
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = isString(language) ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if ((usedLng == null ? void 0 : usedLng.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l2) => {
          if (l2 === "cimode") return;
          if (toLoad.indexOf(l2) < 0) toLoad.push(l2);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l2) => append(l2));
      } else {
        append(usedLng);
      }
      (_b = (_a2 = this.options.preload) == null ? void 0 : _a2.forEach) == null ? void 0 : _b.call(_a2, (l2) => append(l2));
      this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
        if (!e2 && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e2);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module) {
    if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module.type === "backend") {
      this.modules.backend = module;
    }
    if (module.type === "logger" || module.log && module.warn && module.error) {
      this.modules.logger = module;
    }
    if (module.type === "languageDetector") {
      this.modules.languageDetector = module;
    }
    if (module.type === "i18nFormat") {
      this.modules.i18nFormat = module;
    }
    if (module.type === "postProcessor") {
      postProcessor.addPostProcessor(module);
    }
    if (module.type === "formatter") {
      this.modules.formatter = module;
    }
    if (module.type === "3rdParty") {
      this.modules.external.push(module);
    }
    return this;
  }
  setResolvedLanguage(l2) {
    if (!l2 || !this.languages) return;
    if (["cimode", "dev"].indexOf(l2) > -1) return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l2) => {
      this.language = l2;
      this.languages = this.services.languageUtils.toResolveHierarchy(l2);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l2);
    };
    const done = (err, l2) => {
      if (l2) {
        setLngProps(l2);
        this.translator.changeLanguage(l2);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l2);
        this.logger.log("languageChanged", l2);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function() {
        return _this2.t(...arguments);
      });
    };
    const setLng = (lngs) => {
      var _a2, _b;
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l2 = isString(lngs) ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l2) {
        if (!this.language) {
          setLngProps(l2);
        }
        if (!this.translator.language) this.translator.changeLanguage(l2);
        (_b = (_a2 = this.services.languageDetector) == null ? void 0 : _a2.cacheUserLanguage) == null ? void 0 : _b.call(_a2, l2);
      }
      this.loadResources(l2, (err) => {
        done(err, l2);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== "") options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k2) => `${options.keyPrefix}${keySeparator}${k2}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (isString(lng)) {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    var _a2;
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return (_a2 = this.translator) == null ? void 0 : _a2.translate(...args);
  }
  exists() {
    var _a2;
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return (_a2 = this.translator) == null ? void 0 : _a2.exists(...args);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l2, n3) => {
      const loadState = this.services.backendConnector.state[`${l2}|${n3}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (isString(ns)) ns = [ns];
    ns.forEach((n3) => {
      if (this.options.ns.indexOf(n3) < 0) this.options.ns.push(n3);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (isString(lngs)) lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    var _a2, _b;
    if (!lng) lng = this.resolvedLanguage || (((_a2 = this.languages) == null ? void 0 : _a2.length) > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = ((_b = this.services) == null ? void 0 : _b.languageUtils) || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m2) => {
      clone[m2] = this[m2];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      const clonedData = Object.keys(this.store.data).reduce((prev, l2) => {
        prev[l2] = {
          ...this.store.data[l2]
        };
        return Object.keys(prev[l2]).reduce((acc, n3) => {
          acc[n3] = {
            ...prev[l2][n3]
          };
          return acc;
        }, {});
      }, {});
      clone.store = new ResourceStore(clonedData, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
const header$1 = {
  settings: "ตั้งค่า",
  language: "ภาษา"
};
const modes$1 = {
  auto: "Full Auto Video",
  post: "โพสคลิป",
  shop: "สินค้า",
  creator: "Creator"
};
const auto$1 = {
  title: "Full Auto Video",
  aspectRatio: "สัดส่วนภาพ",
  clipCount: "จำนวนคลิป",
  imageCount: "จำนวนภาพ",
  modelType: "ประเภทตัวแบบ",
  voiceType: "ประเภทเสียง",
  videoModel: "โมเดลวิดีโอ",
  imageStyle: "สไตล์ภาพ",
  videoStyle: "สไตล์วิดีโอ",
  basicSettings: "🎛️ ตั้งค่าพื้นฐาน",
  styleSettings: "ตั้งค่าสไตล์",
  loopSettings: "⏰ ลูปและตั้งเวลา",
  disclaimer: "Disclaimer/Overlay",
  startGeneration: "เริ่มสร้างคลิป",
  stopGeneration: "หยุด",
  addProductSet: "เพิ่มชุดสินค้า",
  productName: "ชื่อสินค้า",
  productSets: "ชุดสินค้า"
};
const post$1 = {
  title: "โพสคลิปลง TikTok",
  postType: "ประเภทการโพส",
  draft: "บันทึกแบบร่าง",
  postNow: "โพสเลย",
  schedule: "ตั้งเวลา",
  startPosting: "เริ่มโพส",
  hashtags: "แฮชแท็ก",
  caption: "แคปชั่น",
  basketName: "Product ID"
};
const shop$1 = {
  title: "โหลดสินค้า",
  fetchProducts: "ดึงสินค้า",
  exportJson: "Export JSON",
  importJson: "Import JSON",
  selectAll: "เลือกทั้งหมด",
  deselectAll: "ยกเลิกทั้งหมด",
  search: "ค้นหาสินค้า",
  name: "ชื่อ",
  price: "ราคา",
  stock: "สต็อก"
};
const creator$1 = {
  title: "Creator Mode",
  podcast: "Podcast",
  story: "Story",
  drama: "Drama",
  character1: "ตัวละคร 1",
  character2: "ตัวละคร 2",
  quote: "Quote/คำคม",
  topic: "หัวข้อ",
  customScript: "บทพูดกำหนดเอง",
  videoStyle: "สไตล์วิดีโอ",
  speakingStyle: "สไตล์การพูด",
  sceneCount: "จำนวนฉาก",
  genre: "ประเภท",
  hook: "Hook (เปิดเรื่อง)",
  body: "เนื้อเรื่อง",
  cta: "CTA (ปิดเรื่อง)",
  setup: "ปูเรื่อง",
  conflict: "ปมขัดแย้ง",
  turning: "จุดพลิก",
  moral: "บทเรียน",
  startCreation: "เริ่มสร้าง"
};
const settings$1 = {
  title: "ตั้งค่า",
  apiProvider: "ผู้ให้บริการ AI",
  apiKey: "API Key",
  model: "โมเดล",
  autoFallback: "Fallback อัตโนมัติ",
  saveSettings: "บันทึก",
  testConnection: "ทดสอบการเชื่อมต่อ",
  clearCache: "ล้างแคช",
  resetBot: "รีเซ็ตบอท"
};
const license$1 = {
  title: "เปิดใช้งาน AutoGenX",
  enterKey: "กรอก License Key",
  activate: "เปิดใช้งาน",
  deviceId: "Device ID",
  deviceName: "ชื่ออุปกรณ์",
  activeSessions: "อุปกรณ์ที่ใช้งาน",
  expiryDate: "วันหมดอายุ"
};
const common$1 = {
  start: "เริ่ม",
  stop: "หยุด",
  save: "บันทึก",
  cancel: "ยกเลิก",
  close: "ปิด",
  loading: "กำลังโหลด...",
  success: "สำเร็จ",
  error: "เกิดข้อผิดพลาด",
  confirm: "ยืนยัน",
  noData: "ยังไม่มีข้อมูล",
  optional: "ไม่บังคับ",
  custom: "กำหนดเอง"
};
const _0x5eb43b = {
  header: header$1,
  modes: modes$1,
  auto: auto$1,
  post: post$1,
  shop: shop$1,
  creator: creator$1,
  settings: settings$1,
  license: license$1,
  common: common$1
};
const header = {
  settings: "Settings",
  language: "Language"
};
const modes = {
  auto: "Full Auto Video",
  post: "Post",
  shop: "Shop",
  creator: "Creator"
};
const auto = {
  title: "Full Auto Video",
  aspectRatio: "Aspect Ratio",
  clipCount: "Clip Count",
  imageCount: "Image Count",
  modelType: "Model Type",
  voiceType: "Voice Type",
  videoModel: "Video Model",
  imageStyle: "Image Style",
  videoStyle: "Video Style",
  basicSettings: "🎛️ Basic Settings",
  styleSettings: "Style Settings",
  loopSettings: "⏰ Loop & Schedule",
  disclaimer: "Disclaimer/Overlay",
  startGeneration: "Start Generation",
  stopGeneration: "Stop",
  addProductSet: "Add Product Set",
  productName: "Product Name",
  productSets: "Product Sets"
};
const post = {
  title: "Post Clips to TikTok",
  postType: "Post Type",
  draft: "Save as Draft",
  postNow: "Post Now",
  schedule: "Schedule",
  startPosting: "Start Posting",
  hashtags: "Hashtags",
  caption: "Caption",
  basketName: "Product ID"
};
const shop = {
  title: "Load Products",
  fetchProducts: "Fetch Products",
  exportJson: "Export JSON",
  importJson: "Import JSON",
  selectAll: "Select All",
  deselectAll: "Deselect All",
  search: "Search Products",
  name: "Name",
  price: "Price",
  stock: "Stock"
};
const creator = {
  title: "Creator Mode",
  podcast: "Podcast",
  story: "Story",
  drama: "Drama",
  character1: "Character 1",
  character2: "Character 2",
  quote: "Quote",
  topic: "Topic",
  customScript: "Custom Script",
  videoStyle: "Video Style",
  speakingStyle: "Speaking Style",
  sceneCount: "Scene Count",
  genre: "Genre",
  hook: "Hook (Opening)",
  body: "Body (Story)",
  cta: "CTA (Closing)",
  setup: "Setup",
  conflict: "Conflict",
  turning: "Turning Point",
  moral: "Moral/Lesson",
  startCreation: "Start Creation"
};
const settings = {
  title: "Settings",
  apiProvider: "AI Provider",
  apiKey: "API Key",
  model: "Model",
  autoFallback: "Auto Fallback",
  saveSettings: "Save",
  testConnection: "Test Connection",
  clearCache: "Clear Cache",
  resetBot: "Reset Bot"
};
const license = {
  title: "Activate AutoGenX",
  enterKey: "Enter License Key",
  activate: "Activate",
  deviceId: "Device ID",
  deviceName: "Device Name",
  activeSessions: "Active Sessions",
  expiryDate: "Expiry Date"
};
const common = {
  start: "Start",
  stop: "Stop",
  save: "Save",
  cancel: "Cancel",
  close: "Close",
  loading: "Loading...",
  success: "Success",
  error: "Error",
  confirm: "Confirm",
  noData: "No data",
  optional: "Optional",
  custom: "Custom"
};
const _0x40dd88 = {
  header,
  modes,
  auto,
  post,
  shop,
  creator,
  settings,
  license,
  common
};
let initialized = ![];
async function initI18n(_0x3d37ff = "th") {
  if (initialized) {
    await instance["changeLanguage"](_0x3d37ff);
    return;
  }
  await instance["init"]({ "lng": _0x3d37ff, "fallbackLng": "th", "resources": { "th": { "translation": _0x5eb43b }, "en": { "translation": _0x40dd88 } }, "interpolation": { "escapeValue": ![] } }), initialized = !![];
}
function t(_0x32802a, _0x17fd4b) {
  return instance["t"](_0x32802a, _0x17fd4b);
}
var __defProp$g = Object["defineProperty"], __getOwnPropDesc$g = Object["getOwnPropertyDescriptor"], __decorateClass$g = (_0x2f879, _0x1526ed, _0x4b96b1, _0x2f7e74) => {
  var _0x33681e = _0x2f7e74 > 1 ? void 0 : _0x2f7e74 ? __getOwnPropDesc$g(_0x1526ed, _0x4b96b1) : _0x1526ed;
  for (var _0x41d962 = _0x2f879["length"] - 1, _0x5a5603; _0x41d962 >= 0; _0x41d962--) if (_0x5a5603 = _0x2f879[_0x41d962]) _0x33681e = (_0x2f7e74 ? _0x5a5603(_0x1526ed, _0x4b96b1, _0x33681e) : _0x5a5603(_0x33681e)) || _0x33681e;
  if (_0x2f7e74 && _0x33681e) __defProp$g(_0x1526ed, _0x4b96b1, _0x33681e);
  return _0x33681e;
};
let AgxLicense = class extends i {
  constructor() {
    super(...arguments), this["licenseKey"] = "", this["deviceName"] = "", this["loading"] = ![], this["errorMsg"] = "", this["successMsg"] = "", this["deviceId"] = "", this["devices"] = [], this["showDevices"] = ![], this["removingDeviceId"] = "";
  }
  async ["connectedCallback"]() {
    super["connectedCallback"](), await this["_loadDeviceId"]();
  }
  ["render"]() {
    return b`
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>

      <div class="container">
        <img class="applogo" src="/images/applogo.png" alt="AutoGenX" />
        <div class="logo">AutoGenX</div>
        <div class="version">${APP_VERSION_DISPLAY}</div>
        <div class="subtitle">สร้างคลิปโฆษณาสินค้าด้วย AI โพสต์ลง TikTok อัตโนมัติ</div>

        <div class="features">
          <div class="feature"><span class="feature-icon">🎬</span> สร้างคลิป AI</div>
          <div class="feature"><span class="feature-icon">📮</span> โพสต์ TikTok</div>
          <div class="feature"><span class="feature-icon">🎨</span> Podcast/Story</div>
        </div>

        <div class="form-card">
          <label class="form-label">${t("license.enterKey")}</label>
          <input
            class="key-input"
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            .value=${this["licenseKey"]}
            @input=${this["_onKeyInput"]}
            ?disabled=${this["loading"]}
          />

          <label class="form-label" style="margin-top:10px">${t("license.deviceName")}</label>
          <input
            class="name-input"
            type="text"
            placeholder="เช่น โน้ตบุ๊คบ้าน, PC ออฟฟิศ"
            .value=${this["deviceName"]}
            @input=${(_0x37ed7f) => {
      this["deviceName"] = _0x37ed7f["target"]["value"];
    }}
            ?disabled=${this["loading"]}
            maxlength="40"
          />

          ${this["errorMsg"] ? b`<div class="error" style="margin-top:10px">${this["errorMsg"]}</div>` : ""}
          ${this["successMsg"] ? b`<div class="success" style="margin-top:10px">${this["successMsg"]}</div>` : ""}

          ${this["showDevices"] ? this["_renderDeviceList"]() : ""}

          <button
            class="activate-btn"
            ?disabled=${this["loading"] || !this["licenseKey"]["trim"]()}
            @click=${this["_activate"]}
          >
            ${this["loading"] ? b`<span class="spinner"></span> กำลังเปิดใช้งาน...` : b`✨ ${t("license.activate")}`}
          </button>
        </div>

        <div class="footer">
          <div>Device ID:</div>
          <div class="footer-device-id">${this["deviceId"] || "-"}</div>
        </div>
      </div>
    `;
  }
  ["_renderDeviceList"]() {
    if (this["devices"]["length"] === 0) return "";
    return b`
      <div class="devices-box" style="margin-top:10px">
        <div class="devices-title">กรุณาลบเครื่องเก่าออกก่อนเพิ่มเครื่องใหม่</div>
        ${this["devices"]["map"]((_0x39a81f) => b`
            <div class="device-item">
              <div class="device-info">
                📱 ${_0x39a81f["deviceName"] || _0x39a81f["deviceId"]["slice"](0, 8) + "..."}
                <br/><span style="font-size:10px;color:var(--agx-text-muted)">${_0x39a81f["lastSeen"]}</span>
              </div>
              <button
                class="remove-btn"
                ?disabled=${this["removingDeviceId"] === _0x39a81f["deviceId"]}
                @click=${() => this["_removeDevice"](_0x39a81f["deviceId"])}
              >
                ${this["removingDeviceId"] === _0x39a81f["deviceId"] ? "..." : "✕ ลบ"}
              </button>
            </div>
          `)}
      </div>
    `;
  }
  ["_onKeyInput"](_0x18446f) {
    const _0x593497 = _0x18446f["target"];
    this["licenseKey"] = _0x593497["value"]["toUpperCase"](), this["errorMsg"] = "", this["successMsg"] = "", this["showDevices"] = ![];
  }
  async ["_loadDeviceId"]() {
    try {
      const _0x2882dc = await chrome["storage"]["local"]["get"](["agx_device_id"]);
      _0x2882dc["agx_device_id"] ? this["deviceId"] = _0x2882dc["agx_device_id"] : this["deviceId"] = "(จะสร้างเมื่อเปิดใช้งาน)";
    } catch {
      this["deviceId"] = "-";
    }
  }
  async ["_activate"]() {
    const _0x5816c4 = this["licenseKey"]["trim"]();
    if (!_0x5816c4) {
      this["errorMsg"] = "❌ กรุณากรอก License Key";
      return;
    }
    this["loading"] = !![], this["errorMsg"] = "", this["successMsg"] = "", this["showDevices"] = ![];
    try {
      const _0x1a13b9 = await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_ACTIVATE", "payload": { "key": _0x5816c4, "deviceName": this["deviceName"]["trim"]() || void 0 } });
      (_0x1a13b9 == null ? void 0 : _0x1a13b9["valid"]) ? (this["successMsg"] = "✅ เปิดใช้งานสำเร็จ! หมดอายุ: " + (_0x1a13b9["expireDate"] || "-"), this["dispatchEvent"](new CustomEvent("license-activated", { "detail": { "key": _0x5816c4, "expireDate": _0x1a13b9["expireDate"], "maxSessions": _0x1a13b9["maxSessions"], "devices": _0x1a13b9["devices"] }, "bubbles": !![], "composed": !![] }))) : this["_handleError"](_0x1a13b9);
    } catch (_0x13185b) {
      const _0x312cbd = _0x13185b instanceof Error ? _0x13185b["message"] : String(_0x13185b);
      this["errorMsg"] = _0x312cbd["length"] > 80 ? "❌ " + _0x312cbd["slice"](0, 80) + "..." : "❌ " + _0x312cbd;
    } finally {
      this["loading"] = ![];
    }
  }
  ["_handleError"](_0x5334aa) {
    switch (_0x5334aa == null ? void 0 : _0x5334aa["reason"]) {
      case "not_found":
        this["errorMsg"] = "❌ License ไม่ถูกต้อง";
        break;
      case "expired":
        this["errorMsg"] = "⏳ License หมดอายุแล้ว (" + (_0x5334aa["expireDate"] || "") + ")";
        break;
      case "max_sessions":
        this["errorMsg"] = "⚠️ ใช้งานครบแล้ว (" + (_0x5334aa["activeSessions"] ?? _0x5334aa["currentSessions"] ?? "?") + "/" + _0x5334aa["maxSessions"] + " เครื่อง)", this["devices"] = _0x5334aa["devices"] || [], this["showDevices"] = !![];
        break;
      default:
        this["errorMsg"] = "❌ ข้อผิดพลาด: " + ((_0x5334aa == null ? void 0 : _0x5334aa["error"]) || (_0x5334aa == null ? void 0 : _0x5334aa["reason"]) || "unknown");
    }
  }
  async ["_removeDevice"](_0x19a5cc) {
    this["removingDeviceId"] = _0x19a5cc;
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_DEACTIVATE", "payload": { "key": this["licenseKey"], "deviceId": _0x19a5cc } }), this["devices"] = this["devices"]["filter"]((_0x1503bf) => _0x1503bf["deviceId"] !== _0x19a5cc), this["devices"]["length"] === 0 && (this["showDevices"] = ![], this["errorMsg"] = "", this["successMsg"] = "✅ ลบเครื่องสำเร็จ กดเปิดใช้งานอีกครั้ง");
    } catch (_0x52ca4e) {
      this["errorMsg"] = "❌ ลบเครื่องไม่สำเร็จ: " + (_0x52ca4e instanceof Error ? _0x52ca4e["message"] : "unknown");
    } finally {
      this["removingDeviceId"] = "";
    }
  }
};
AgxLicense["styles"] = i$3`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
      padding: 24px 20px;
      background: var(--agx-bg-base, #101420);
      position: relative;
      overflow-y: auto;        /* scroll ถ้าจอเตี้ยกว่า content */
      overflow-x: hidden;      /* กัน orb ล้นจอแนวนอน */
      box-sizing: border-box;
    }

    /* Background orbs */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.15;
      pointer-events: none;
    }
    .orb-1 { width: 300px; height: 300px; background: var(--agx-accent); top: -80px; right: -60px; }
    .orb-2 { width: 200px; height: 200px; background: var(--agx-gold); bottom: -40px; left: -40px; }
    .orb-3 { width: 150px; height: 150px; background: var(--agx-info); top: 50%; left: 60%; }

    .container {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin: auto 0;          /* center vertical เมื่อ content < viewport, top-align เมื่อ content > viewport */
      padding-bottom: 16px;    /* breathing room ตอน scroll สุด */
    }

    /* Logo */
    .logo {
      font-family: var(--agx-font-mono, monospace);
      font-size: 28px;
      font-weight: 800;
      background: var(--agx-gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.5px;
    }

    .applogo {
      width: 84px;
      height: 84px;
      margin: 0 auto 12px;
      display: block;
      object-fit: contain;
      filter: drop-shadow(0 4px 16px rgba(74, 141, 255, 0.4));
    }

    .version {
      font-size: 12px;
      color: var(--agx-text-muted);
      margin-top: -12px;
    }

    .subtitle {
      font-size: 13px;
      color: var(--agx-text-secondary);
      text-align: center;
    }

    /* Features grid */
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      width: 100%;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 10px;
      background: var(--agx-glass-bg);
      border: 1px solid var(--agx-glass-border);
      border-radius: var(--agx-radius-md);
      font-size: 11px;
      color: var(--agx-text-secondary);
    }

    .feature-icon { font-size: 14px; }

    /* Form */
    .form-card {
      width: 100%;
      padding: 20px 16px;
      background: var(--agx-glass-bg);
      backdrop-filter: var(--agx-glass-blur);
      border: 1px solid var(--agx-glass-border);
      border-radius: var(--agx-radius-xl);
    }

    .form-label {
      display: block;
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary);
      margin-bottom: 6px;
    }

    .key-input {
      width: 100%;
      padding: 12px 14px;
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      font-family: var(--agx-font-mono);
      font-size: 15px;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2px;
      transition: border-color 200ms;
      box-sizing: border-box;
    }

    .key-input:focus {
      outline: none;
      border-color: var(--agx-accent);
    }

    .key-input::placeholder {
      text-transform: none;
      letter-spacing: 1px;
      color: var(--agx-text-muted);
      font-size: 13px;
    }

    .name-input {
      width: 100%;
      padding: 10px 12px;
      margin-top: 10px;
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      font-family: var(--agx-font-thai);
      font-size: 13px;
      text-align: center;
      transition: border-color 200ms;
      box-sizing: border-box;
    }

    .name-input:focus {
      outline: none;
      border-color: var(--agx-accent);
    }

    .name-input::placeholder {
      color: var(--agx-text-muted);
      font-size: 12px;
    }

    /* Messages */
    .error {
      padding: 8px 12px;
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: var(--agx-radius-md);
      color: var(--agx-danger);
      font-size: 12px;
      text-align: center;
      width: 100%;
      word-break: break-word;
      overflow: hidden;
    }

    .success {
      padding: 8px 12px;
      background: rgba(47, 107, 255, 0.15);
      border: 1px solid rgba(47, 107, 255, 0.3);
      border-radius: var(--agx-radius-md);
      color: var(--agx-accent);
      font-size: 12px;
      text-align: center;
      width: 100%;
    }

    /* Activate button */
    .activate-btn {
      width: 100%;
      padding: 12px;
      margin-top: 12px;
      background: var(--agx-gradient-primary);
      color: white;
      border: none;
      border-radius: var(--agx-radius-md);
      font-family: var(--agx-font-thai);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 200ms;
    }

    .activate-btn:hover:not(:disabled) {
      box-shadow: 0 0 20px rgba(47, 107, 255, 0.3);
    }

    .activate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Device list */
    .devices-box {
      width: 100%;
      padding: 12px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
    }

    .devices-title {
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary);
      margin-bottom: 8px;
    }

    .device-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px;
      border-bottom: 1px solid var(--agx-border-subtle);
      font-size: 11px;
    }

    .device-item:last-child { border-bottom: none; }

    .device-info {
      color: var(--agx-text-secondary);
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .device-id {
      font-family: var(--agx-font-mono);
      font-size: 10px;
      color: var(--agx-text-muted);
    }

    .remove-btn {
      background: none;
      border: none;
      color: var(--agx-danger);
      cursor: pointer;
      font-size: 11px;
      padding: 2px 6px;
      border-radius: 4px;
      flex-shrink: 0;
    }

    .remove-btn:hover { background: rgba(239, 68, 68, 0.15); }

    /* Footer */
    .footer {
      font-size: 10px;
      color: var(--agx-text-muted);
      text-align: center;
    }

    .footer-device-id {
      font-family: var(--agx-font-mono);
      font-size: 9px;
      color: var(--agx-text-muted);
      word-break: break-all;
    }

    .spinner {
      display: inline-block;
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 600ms linear infinite;
      vertical-align: middle;
      margin-right: 6px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
  `, __decorateClass$g([r()], AgxLicense["prototype"], "licenseKey", 2), __decorateClass$g([r()], AgxLicense["prototype"], "deviceName", 2), __decorateClass$g([r()], AgxLicense["prototype"], "loading", 2), __decorateClass$g([r()], AgxLicense["prototype"], "errorMsg", 2), __decorateClass$g([r()], AgxLicense["prototype"], "successMsg", 2), __decorateClass$g([r()], AgxLicense["prototype"], "deviceId", 2), __decorateClass$g([r()], AgxLicense["prototype"], "devices", 2), __decorateClass$g([r()], AgxLicense["prototype"], "showDevices", 2), __decorateClass$g([r()], AgxLicense["prototype"], "removingDeviceId", 2), AgxLicense = __decorateClass$g([t$1("agx-license")], AgxLicense);
const GEMINI_MODELS = [{ "id": "gemini-2.5-flash-lite", "name": "Gemini 2.5 Flash Lite (ประหยัดที่สุด แนะนำ)" }, { "id": "gemini-2.5-flash", "name": "Gemini 2.5 Flash (สมดุล)" }, { "id": "gemini-2.5-pro", "name": "Gemini 2.5 Pro (แพงสุด ฉลาดสุด)" }];
const OPENAI_MODELS = [{ "id": "gpt-4o", "name": "GPT-4o" }, { "id": "gpt-4o-mini", "name": "GPT-4o Mini" }, { "id": "gpt-4-turbo", "name": "GPT-4 Turbo" }];
function createDefaultSettings() {
  return { "aiProvider": "gemini", "autoFallback": !![], "gemini": { "apiKey": "", "model": "gemini-2.5-flash-lite" }, "openai": { "apiKey": "", "model": "gpt-4o" }, "language": "th" };
}
function createInitialState() {
  return { "activeMode": "auto", "settingsOpen": ![], "licenseValid": ![], "settings": createDefaultSettings(), "pipeline": createInitialPipelineStatus() };
}
class Store {
  constructor() {
    this["state"] = createInitialState(), this["listeners"] = /* @__PURE__ */ new Set();
  }
  ["getState"]() {
    return this["state"];
  }
  ["setState"](_0x7e6c0f) {
    this["state"] = { ...this["state"], ..._0x7e6c0f }, this["notify"]();
  }
  ["updateSettings"](_0x40160b) {
    this["state"] = { ...this["state"], "settings": { ...this["state"]["settings"], ..._0x40160b } }, this["notify"]();
  }
  ["subscribe"](_0x506017) {
    return this["listeners"]["add"](_0x506017), () => this["listeners"]["delete"](_0x506017);
  }
  ["notify"]() {
    this["listeners"]["forEach"]((_0xdf1dac) => _0xdf1dac());
  }
}
const store = new Store();
let cached = null;
function getToast() {
  if (cached) return cached;
  const _0x3406c2 = document["querySelector"]("agx-toast");
  if (!_0x3406c2) return null;
  return cached = _0x3406c2, _0x3406c2;
}
function showToast(_0x46f46f, _0x2ee87f = "info", _0x43870e = 3e3) {
  var _a2;
  (_a2 = getToast()) == null ? void 0 : _a2["show"](_0x46f46f, _0x2ee87f, _0x43870e);
}
var __defProp$f = Object["defineProperty"], __getOwnPropDesc$f = Object["getOwnPropertyDescriptor"], __decorateClass$f = (_0x4d6e74, _0x22cb6a, _0xeec5ad, _0x3a8ff8) => {
  var _0x47cc42 = _0x3a8ff8 > 1 ? void 0 : _0x3a8ff8 ? __getOwnPropDesc$f(_0x22cb6a, _0xeec5ad) : _0x22cb6a;
  for (var _0x4ad8a0 = _0x4d6e74["length"] - 1, _0x16021f; _0x4ad8a0 >= 0; _0x4ad8a0--) if (_0x16021f = _0x4d6e74[_0x4ad8a0]) _0x47cc42 = (_0x3a8ff8 ? _0x16021f(_0x22cb6a, _0xeec5ad, _0x47cc42) : _0x16021f(_0x47cc42)) || _0x47cc42;
  if (_0x3a8ff8 && _0x47cc42) __defProp$f(_0x22cb6a, _0xeec5ad, _0x47cc42);
  return _0x47cc42;
};
let AgxSettings = class extends i {
  constructor() {
    super(...arguments), this["settings"] = store["getState"]()["settings"], this["activeProviderTab"] = this["settings"]["aiProvider"], this["testing"] = ![], this["testResult"] = "", this["testDetails"] = [], this["saveResult"] = "", this["saving"] = ![], this["devices"] = [], this["sessionsCount"] = 0, this["maxSessions"] = 0, this["expireDate"] = "", this["loadingDevices"] = ![], this["resetKeepLicense"] = !![], this["resetKeepSettings"] = ![], this["resetResult"] = "", this["showTerms"] = ![], this["showServerInfo"] = ![], this["versionResult"] = null, this["checkingVersion"] = ![], this["logReportNote"] = "", this["sendingLogReport"] = ![], this["logReportResult"] = "";
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["settings"] = store["getState"]()["settings"], this["settings"]["aiProvider"] === "server" && (this["settings"] = { ...this["settings"], "aiProvider": "gemini" }), this["activeProviderTab"] = this["settings"]["aiProvider"], !this["versionResult"] && void this["_checkVersion"]();
  }
  ["render"]() {
    var _a2, _b, _c, _d, _e, _f;
    return b`
      <div class="header">
        <span class="title">⚙️ ${t("settings.title")}</span>
        <button class="close-btn" @click=${this["_close"]}>✕</button>
      </div>

      <div class="body">
        <!-- API Provider -->
        <div class="section">
          <div class="section-title">${t("settings.apiProvider")}</div>
          <agx-tabs
            .tabs=${[{ "id": "server", "label": "🔒 Server", "disabled": !![], "tooltip": "เร็วๆ นี้ — แพ็กเกจรายเดือน" }, { "id": "gemini", "label": "Gemini" }, { "id": "openai", "label": "OpenAI" }]}
            .active=${this["activeProviderTab"]}
            @tab-change=${this["_onProviderTabChange"]}
            @tab-disabled-click=${this["_onServerTabClick"]}
          ></agx-tabs>

          <div class="provider-content">
            ${this["showServerInfo"] ? this["_renderServerInfo"]() : this["_renderProviderForm"]()}
          </div>

          <div style="margin-top:8px">
            <agx-toggle
              label="${t("settings.autoFallback")}"
              .checked=${this["settings"]["autoFallback"]}
              @change=${(_0x2221d1) => this["_updateSetting"]("autoFallback", _0x2221d1["detail"]["checked"])}
            ></agx-toggle>
          </div>

          <div class="btn-row">
            <agx-button variant="secondary" @click=${this["_testConnection"]} .loading=${this["testing"]}>
              ${t("settings.testConnection")}
            </agx-button>
            <agx-button variant="primary" @click=${this["_saveSettings"]} .loading=${this["saving"]}>
              ${t("settings.saveSettings")}
            </agx-button>
          </div>

          ${this["testResult"] ? b`<div class="test-result ${this["_testResultClass"]()}">
                <div class="test-summary">${this["testResult"]}</div>
                ${this["testDetails"]["length"] > 0 ? b`<div class="test-details">
                      ${this["testDetails"]["map"]((_0x3f6e67) => b`<div class="test-row">
                          <span class="test-row-name">${this["_providerLabel"](_0x3f6e67["provider"])}</span>
                          <span class="test-row-info">
                            ${_0x3f6e67["ok"] ? b`<span class="ok">พร้อมใช้งาน</span>` : b`<span class="err">ไม่พร้อมใช้งาน (${this["_friendlyError"](_0x3f6e67["error"])})</span>`}
                          </span>
                        </div>`)}
                    </div>` : ""}
              </div>` : ""}

          ${this["saveResult"] === "success" ? b`<div class="save-result success">✅ บันทึกสำเร็จ</div>` : this["saveResult"]["startsWith"]("error:") ? b`<div class="save-result error">❌ บันทึกไม่สำเร็จ: ${this["saveResult"]["slice"](6)}</div>` : ""}
        </div>

        <!-- Cache -->
        <agx-drawer label="🗑️ ${t("settings.clearCache")}">
          <div class="cache-options">
            <agx-toggle label="Flow Web Cache (labs.google.com)" id="clearFlow"></agx-toggle>
            <agx-toggle label="Extension Data (ชุดสินค้า + ตั้งค่า)" id="clearExt"></agx-toggle>
            <agx-toggle label="Download History" id="clearDownloads"></agx-toggle>
            <agx-toggle label="Cookies" id="clearCookies"></agx-toggle>
          </div>
          <agx-button variant="danger" full @click=${this["_clearCache"]}>ล้างแคช</agx-button>
        </agx-drawer>

        <!-- Device Management -->
        <agx-drawer label="📱 จัดการอุปกรณ์">
          <div class="sessions-header">
            <span>ใช้งาน: ${this["sessionsCount"]}/${this["maxSessions"]} เครื่อง</span>
            <span>หมดอายุ: ${this["expireDate"] || "-"}</span>
          </div>

          ${this["devices"]["map"]((_0x25366c) => b`
              <div class="device-item">
                <div class="device-info">
                  📱 ${_0x25366c["deviceName"] || _0x25366c["deviceId"]["slice"](0, 12) + "..."}
                  <br/><span style="font-size:10px">${_0x25366c["lastSeen"]}</span>
                </div>
                <button class="remove-btn" @click=${() => this["_removeDevice"](_0x25366c["deviceId"])}>✕</button>
              </div>
            `)}

          <div class="btn-row">
            <agx-button variant="secondary" @click=${this["_refreshSessions"]} .loading=${this["loadingDevices"]}>
              🔄 รีเฟรช
            </agx-button>
            <agx-button variant="danger" @click=${this["_deactivate"]}>
              🚪 ออกจากระบบ
            </agx-button>
          </div>
        </agx-drawer>

        <!-- Version Info -->
        <agx-drawer label="📦 ข้อมูลเวอร์ชัน">
          <div class="version-row">
            <span class="label">เวอร์ชันปัจจุบัน</span>
            <span class="value">${APP_FULL_LABEL}</span>
          </div>
          ${((_a2 = this["versionResult"]) == null ? void 0 : _a2["ok"]) && this["versionResult"]["info"] ? b`
              <div class="version-row">
                <span class="label">เวอร์ชันล่าสุด</span>
                <span class="value">${this["versionResult"]["info"]["latest"]["fullLabel"]}</span>
              </div>
              <div class="version-row">
                <span class="label">วันที่อัพเดท</span>
                <span class="value">${this["versionResult"]["info"]["latest"]["date"]}</span>
              </div>
              <div class="version-row">
                <span class="label">สถานะ</span>
                ${this["versionResult"]["isOutdated"] ? b`<span class="version-badge outdated">🔥 มีเวอร์ชันใหม่</span>` : b`<span class="version-badge latest">✓ เวอร์ชันล่าสุด</span>`}
              </div>
              ${this["versionResult"]["isOutdated"] ? b`<div class="version-summary">${this["versionResult"]["info"]["latest"]["summary"]}</div>` : ""}
            ` : ""}
          ${this["versionResult"] && !this["versionResult"]["ok"] ? b`<div class="version-row">
                <span class="label">สถานะ</span>
                <span class="version-badge error">เช็คไม่ได้: ${this["versionResult"]["error"]}</span>
              </div>` : ""}

          <div style="margin-top:10px;display:flex;gap:8px">
            <agx-button
              variant="primary"
              full
              .loading=${this["checkingVersion"]}
              @click=${this["_checkVersion"]}>
              🔍 เช็คอัพเดท
            </agx-button>
            ${((_b = this["versionResult"]) == null ? void 0 : _b["isOutdated"]) && ((_c = this["versionResult"]["info"]) == null ? void 0 : _c["latest"]["url"]) ? b`<a class="version-history-dl"
                  href=${this["versionResult"]["info"]["latest"]["url"]}
                  target="_blank"
                  rel="noopener"
                  style="padding:8px 14px;display:flex;align-items:center">
                  ⬇ ดาวน์โหลด
                </a>` : ""}
          </div>

          <!-- Debug Panel — step-by-step testing สำหรับ dev/diagnostics
               กล่องนี้แสดงเฉพาะตอน DEV.ENABLE_DEBUG_PANEL=true (release ปิดไว้) -->
          ${DEV["ENABLE_DEBUG_PANEL"] ? b`
          <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--agx-border-subtle)">
            <div style="font-size:11px;font-weight:600;color:var(--agx-text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">
              🛠 Debug Panel (สำหรับทดสอบทีละ step)
            </div>
            <p style="font-size:11px;color:var(--agx-text-muted);margin:0 0 8px;line-height:1.5">
              เปิดหน้า Debug — ปุ่มทดสอบ Flow/TikTok ทีละขั้น (ping, status, upload, prompt, generate, ฯลฯ)
              <br>เหมาะตอน Flow update แล้วระบบรวน หรือกำลังเทส feature ใหม่
            </p>
            <agx-button
              variant="gold"
              full
              @click=${() => {
      window["location"]["hash"] = "#/debug", this["_close"]();
    }}
              style="margin-bottom:8px">
              🛠 เปิด Debug Panel
            </agx-button>
            <div style="font-size:10px;color:var(--agx-text-muted);font-style:italic;text-align:center;margin-bottom:4px">
              (ปิดด้วยปุ่ม "ปิด" มุมขวาบนของหน้า Debug)
            </div>
          </div>
          ` : ""}

          <!-- Log report — let user send pipeline logs to dev for diagnosis -->
          <div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--agx-border-subtle)">
            <div style="font-size:11px;font-weight:600;color:var(--agx-text-muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">
              📤 ส่ง Log ให้ผู้พัฒนา (Debug)
            </div>
            <p style="font-size:11px;color:var(--agx-text-muted);margin:0 0 8px;line-height:1.5">
              ส่ง log ของ pipeline ล่าสุด (ไม่ส่งข้อมูลสินค้า/prompt) ไปยังทีมพัฒนาเพื่อช่วยตรวจหาสาเหตุ
            </p>
            <textarea
              .value=${this["logReportNote"]}
              @input=${(_0x1b1e25) => {
      this["logReportNote"] = _0x1b1e25["target"]["value"];
    }}
              placeholder="อธิบายสั้นๆ ว่าเกิดอะไรขึ้น (เช่น: ค้างที่ตรวจ draft recovery banner)"
              rows="2"
              style="width:100%;padding:6px 8px;border-radius:var(--agx-radius-sm);border:1px solid var(--agx-border-subtle);background:var(--agx-bg-card);color:var(--agx-text-primary);font-size:12px;resize:vertical;font-family:inherit"
            ></textarea>
            <agx-button
              variant="secondary"
              full
              .loading=${this["sendingLogReport"]}
              @click=${this["_sendLogReport"]}
              style="margin-top:8px">
              📤 ส่ง Log Report
            </agx-button>
            ${this["logReportResult"] ? b`<div class="test-result ${this["logReportResult"]["startsWith"]("✅") ? "success" : "error"}" style="margin-top:8px">
                  ${this["logReportResult"]}
                </div>` : ""}
          </div>

          ${((_f = (_e = (_d = this["versionResult"]) == null ? void 0 : _d["info"]) == null ? void 0 : _e["history"]) == null ? void 0 : _f["length"]) ? b`
              <div style="margin-top:14px;font-size:11px;font-weight:600;color:var(--agx-text-muted);text-transform:uppercase;letter-spacing:.5px">
                ประวัติเวอร์ชัน
              </div>
              <div class="version-history">
                ${this["versionResult"]["info"]["history"]["slice"](0, 10)["map"]((_0x459d4b) => b`
                  <div class="version-history-item">
                    <div class="version-history-meta">
                      <div class="version-history-title">${_0x459d4b["fullLabel"]}</div>
                      <div class="version-history-date">${_0x459d4b["date"]}</div>
                      <div class="version-history-summary">${_0x459d4b["summary"]}</div>
                    </div>
                    ${_0x459d4b["url"] ? b`<a class="version-history-dl" href=${_0x459d4b["url"]} target="_blank" rel="noopener">โหลด</a>` : ""}
                  </div>
                `)}
              </div>
            ` : ""}
        </agx-drawer>

        <!-- Reset -->
        <agx-drawer label="🔄 ${t("settings.resetBot")}">
          <p style="font-size:12px;color:var(--agx-text-muted);margin-bottom:10px">
            ล้างข้อมูล Extension ทั้งหมด — สินค้า, preset, log, state, cache
          </p>

          <div class="cache-options">
            <agx-toggle
              label="🔑 เก็บ License Key (ไม่ต้อง login ใหม่)"
              .checked=${this["resetKeepLicense"]}
              @change=${(_0x1b06c0) => {
      this["resetKeepLicense"] = _0x1b06c0["detail"]["checked"];
    }}
            ></agx-toggle>
            <agx-toggle
              label="⚙️ เก็บ Settings (API Keys + ตั้งค่า panel)"
              .checked=${this["resetKeepSettings"]}
              @change=${(_0x59a1e4) => {
      this["resetKeepSettings"] = _0x59a1e4["detail"]["checked"];
    }}
            ></agx-toggle>
          </div>

          <agx-button variant="danger" full @click=${this["_resetBot"]}>รีเซ็ต Extension</agx-button>

          ${this["resetResult"] ? b`<div class="test-result ${this["resetResult"]["startsWith"]("✅") ? "success" : "error"}">
                ${this["resetResult"]}
              </div>` : ""}
        </agx-drawer>

        <!-- Terms of Service / About -->
        <agx-drawer label="📜 ข้อตกลงการใช้งาน (Terms of Service)">
          <div class="terms-body">
            <p><strong>${APP_FULL_LABEL}</strong></p>
            <p>© 2026 <strong>Prompt Generation Group Co., Ltd.</strong><br/>
            บริษัท พร้อมเจนเนอร์เรชั่น กรุ๊ป จำกัด — All rights reserved.</p>

            <p>การใช้งานซอฟต์แวร์นี้ถือว่าผู้ใช้ยอมรับและผูกพันตามข้อตกลงด้านล่าง:</p>

            <ol class="terms-list">
              <li><strong>การอนุญาตใช้งาน:</strong> สิทธิ์ใช้งานจำกัด non-exclusive, non-transferable สำหรับผู้ที่มี License Key ที่ถูกต้องเท่านั้น</li>
              <li><strong>ข้อห้าม:</strong> ห้ามคัดลอก/แจกจ่าย/ดัดแปลง/reverse engineer/sublicense โดยไม่ได้รับอนุญาต</li>
              <li><strong>กรรมสิทธิ์:</strong> ลิขสิทธิ์และเครื่องหมายทั้งหมดเป็นของบริษัท — License ให้เพียงสิทธิ์ใช้งาน ไม่ใช่กรรมสิทธิ์</li>
              <li><strong>ปฏิเสธการรับประกัน:</strong> ซอฟต์แวร์ให้ "AS IS" ไม่มีการรับประกันใด ๆ</li>
              <li><strong>ข้อจำกัดความรับผิด:</strong> บริษัทไม่รับผิดชอบต่อความเสียหายทางอ้อม, ข้อมูลสูญหาย, รายได้ที่สูญเสีย</li>
              <li><strong>บริการบุคคลที่สาม:</strong> ไม่รับผิดชอบต่อ TikTok / Google Labs Flow / AI APIs เปลี่ยน UI, downtime, quota หรือค่าใช้จ่าย credit</li>
              <li><strong>การยกเลิก:</strong> บริษัทมีสิทธิ์ระงับ License หากผู้ใช้ละเมิดข้อตกลง</li>
              <li><strong>กฎหมาย:</strong> อยู่ภายใต้กฎหมายไทย — ข้อพิพาทระงับในศาลไทย</li>
            </ol>

            <p class="terms-footer">
              ข้อตกลงฉบับเต็มดูได้ที่ไฟล์ <code>TERMS.md</code> ที่มาพร้อมส่วนขยาย
            </p>
          </div>
        </agx-drawer>
      </div>
    `;
  }
  ["_renderProviderForm"]() {
    switch (this["activeProviderTab"]) {
      case "gemini":
        return b`
          <agx-input
            label="Gemini API Key"
            type="password"
            .value=${this["settings"]["gemini"]["apiKey"]}
            placeholder="AIza..."
            @input=${(_0x5c0268) => this["_updateProviderKey"]("gemini", _0x5c0268["detail"]["value"])}
          ></agx-input>
          <div style="margin-top:8px">
            <agx-select
              label="${t("settings.model")}"
              .value=${this["settings"]["gemini"]["model"]}
              .options=${GEMINI_MODELS["map"]((_0x11212a) => ({ "id": _0x11212a["id"], "label": _0x11212a["name"] }))}
              @change=${(_0x32ee9c) => this["_updateProviderModel"]("gemini", _0x32ee9c["detail"]["value"])}
            ></agx-select>
          </div>
        `;
      case "openai":
        return b`
          <agx-input
            label="OpenAI API Key"
            type="password"
            .value=${this["settings"]["openai"]["apiKey"]}
            placeholder="sk-..."
            @input=${(_0x3c0153) => this["_updateProviderKey"]("openai", _0x3c0153["detail"]["value"])}
          ></agx-input>
          <div style="margin-top:8px">
            <agx-select
              label="${t("settings.model")}"
              .value=${this["settings"]["openai"]["model"]}
              .options=${OPENAI_MODELS["map"]((_0x510b44) => ({ "id": _0x510b44["id"], "label": _0x510b44["name"] }))}
              @change=${(_0x47b801) => this["_updateProviderModel"]("openai", _0x47b801["detail"]["value"])}
            ></agx-select>
          </div>
        `;
    }
  }
  ["_testResultClass"]() {
    if (this["testResult"]["startsWith"]("✅")) return "success";
    if (this["testResult"]["startsWith"]("ℹ")) return "notice";
    if (this["testResult"]["startsWith"]("⚠")) return "warn";
    return "error";
  }
  ["_providerLabel"](_0x26962f) {
    return _0x26962f === "gemini" ? "Gemini" : _0x26962f === "openai" ? "OpenAI" : _0x26962f;
  }
  ["_friendlyError"](_0x44801e) {
    if (!_0x44801e) return "ไม่ทราบสาเหตุ";
    const _0x144db9 = _0x44801e["toLowerCase"]();
    if (_0x144db9["includes"]("401") || _0x144db9["includes"]("unauthorized") || _0x144db9["includes"]("invalid_api_key")) return "API Key ไม่ถูกต้อง";
    if (_0x144db9["includes"]("403") || _0x144db9["includes"]("forbidden")) return "API Key ไม่มีสิทธิ์เข้าถึง";
    if (_0x144db9["includes"]("429") || _0x144db9["includes"]("rate") || _0x144db9["includes"]("quota")) return "เกินโควตา/Rate limit";
    if (_0x144db9["includes"]("404")) return "ไม่พบ endpoint";
    if (_0x144db9["match"](/5\d\d/) || _0x144db9["includes"]("server error")) return "Server ปัญหาชั่วคราว";
    if (_0x144db9["includes"]("timeout") || _0x144db9["includes"]("timed out")) return "เชื่อมต่อช้าเกินไป";
    if (_0x144db9["includes"]("network") || _0x144db9["includes"]("curl") || _0x144db9["includes"]("fetch") || _0x144db9["includes"]("failed")) return "เชื่อมต่อไม่ได้";
    if (_0x144db9["includes"]("api key ว่าง") || _0x144db9["includes"]("empty")) return "ยังไม่กรอก API Key";
    return _0x44801e;
  }
  ["_renderServerInfo"]() {
    return b`
      <div class="server-info">
        <div class="server-info-title">🔒 Server — เร็วๆ นี้ (แพ็กเกจรายเดือน)</div>
        <p>ใช้ AI ของ server โดยไม่ต้องใส่ API key ของตัวเอง</p>
        <p class="server-info-note">ครอบคลุม: Image prompt, Video prompt / Veo 3.1, Caption — ทุกอย่างฟรีในแพ็กเกจ</p>
        <div class="server-info-quota">Token เหลือ: <strong>-</strong></div>
        <div class="server-info-status">📅 เปิดให้บริการ: เร็วๆ นี้</div>
      </div>
    `;
  }
  ["_onServerTabClick"]() {
    this["showServerInfo"] = !![], setTimeout(() => {
      this["showServerInfo"] = ![];
    }, 6e3);
  }
  ["_onProviderTabChange"](_0xd958cd) {
    this["showServerInfo"] = ![], this["activeProviderTab"] = _0xd958cd["detail"]["id"], this["_updateSetting"]("aiProvider", this["activeProviderTab"]);
  }
  ["_updateSetting"](_0x3ea63a, _0x2d864b) {
    this["settings"] = { ...this["settings"], [_0x3ea63a]: _0x2d864b }, store["updateSettings"](this["settings"]);
  }
  ["_updateProviderKey"](_0x15418f, _0x1a1ecc) {
    this["settings"] = { ...this["settings"], [_0x15418f]: { ...this["settings"][_0x15418f], "apiKey": _0x1a1ecc } }, store["updateSettings"](this["settings"]);
  }
  ["_updateProviderModel"](_0x56364b, _0x50266e) {
    this["settings"] = { ...this["settings"], [_0x56364b]: { ...this["settings"][_0x56364b], "model": _0x50266e } }, store["updateSettings"](this["settings"]);
  }
  async ["_saveSettings"]() {
    this["saving"] = !![], this["saveResult"] = "";
    try {
      store["updateSettings"](this["settings"]);
      const _0x3f51c4 = await chrome["storage"]["local"]["get"]("agx_panel_state"), _0x7d2e49 = _0x3f51c4["agx_panel_state"] || {};
      await chrome["storage"]["local"]["set"]({ "agx_panel_state": { ..._0x7d2e49, "settings": this["settings"] } }), this["saveResult"] = "success", this["dispatchEvent"](new CustomEvent("settings-saved", { "bubbles": !![], "composed": !![] })), setTimeout(() => {
        this["saveResult"] = "";
      }, 3e3);
    } catch (_0x4b9746) {
      const _0xc649a = _0x4b9746 instanceof Error ? _0x4b9746["message"] : String(_0x4b9746);
      this["saveResult"] = "error:" + _0xc649a;
    } finally {
      this["saving"] = ![];
    }
  }
  async ["_testConnection"]() {
    this["testing"] = !![], this["testResult"] = "", this["testDetails"] = [];
    const _0x2e290c = ["gemini", "openai"], _0x5e4921 = _0x2e290c["filter"]((_0x140465) => {
      var _a2, _b;
      return (_b = (_a2 = this["settings"][_0x140465]) == null ? void 0 : _a2["apiKey"]) == null ? void 0 : _b["trim"]();
    });
    if (_0x5e4921["length"] === 0) {
      this["testResult"] = "ℹ ไม่ได้ตั้งค่า API — ใช้ของระบบแทน", this["testing"] = ![];
      return;
    }
    const _0x424e0b = await Promise["all"](_0x5e4921["map"](async (_0x8e8e69) => {
      try {
        const _0xe0d1cb = await chrome["runtime"]["sendMessage"]({ "type": "AI_TEST_CONNECTION", "payload": { "provider": _0x8e8e69, "settings": this["settings"] } });
        if (_0xe0d1cb == null ? void 0 : _0xe0d1cb["success"]) return { "provider": _0x8e8e69, "ok": !![], "ms": _0xe0d1cb["latencyMs"] };
        return { "provider": _0x8e8e69, "ok": ![], "error": (_0xe0d1cb == null ? void 0 : _0xe0d1cb["error"]) || "failed" };
      } catch (_0x235338) {
        return { "provider": _0x8e8e69, "ok": ![], "error": _0x235338 instanceof Error ? _0x235338["message"] : String(_0x235338) };
      }
    }));
    this["testDetails"] = _0x424e0b;
    const _0x7aeb2 = _0x424e0b["filter"]((_0x375eab) => _0x375eab["ok"])["length"];
    if (_0x7aeb2 === _0x424e0b["length"]) this["testResult"] = "✅ พร้อมใช้งาน " + _0x7aeb2 + "/" + _0x424e0b["length"] + " provider";
    else _0x7aeb2 > 0 ? this["testResult"] = "⚠ พร้อมใช้งาน " + _0x7aeb2 + "/" + _0x424e0b["length"] + " provider" : this["testResult"] = "❌ ไม่มี provider ที่เชื่อมต่อได้";
    this["testing"] = ![];
  }
  async ["_clearCache"]() {
    if (!confirm("ล้างแคชและ Cookies ของ Flow (labs.google) ใช่หรือไม่?\n\nหลังล้าง อาจต้อง login Google ใหม่")) return;
    try {
      const _0x7f6c1d = await chrome["runtime"]["sendMessage"]({ "type": "CLEAR_CACHE", "payload": {} });
      (_0x7f6c1d == null ? void 0 : _0x7f6c1d["success"]) ? showToast("✓ ล้างแคชสำเร็จ", "success") : showToast("✗ ล้างแคชล้มเหลว: " + ((_0x7f6c1d == null ? void 0 : _0x7f6c1d["error"]) || "unknown"), "error", 5e3);
    } catch (_0x54d100) {
      const _0xee7149 = _0x54d100 instanceof Error ? _0x54d100["message"] : "เชื่อมต่อ background ไม่ได้";
      showToast("✗ ล้างแคชล้มเหลว: " + _0xee7149, "error", 5e3);
    }
  }
  async ["_refreshSessions"]() {
    this["loadingDevices"] = !![];
    try {
      const _0x1073ca = await chrome["storage"]["local"]["get"](["licenseKey"]);
      if (_0x1073ca["licenseKey"]) {
        const _0x4aef10 = await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_SESSIONS", "payload": { "key": _0x1073ca["licenseKey"] } });
        _0x4aef10 && (this["devices"] = _0x4aef10["devices"] || [], this["sessionsCount"] = _0x4aef10["activeSessions"] ?? _0x4aef10["currentSessions"] ?? 0, this["maxSessions"] = _0x4aef10["maxSessions"] || 0, this["expireDate"] = _0x4aef10["expireDate"] || "");
      }
    } finally {
      this["loadingDevices"] = ![];
    }
  }
  async ["_removeDevice"](_0x5405c6) {
    const _0x1cd845 = await chrome["storage"]["local"]["get"](["licenseKey"]);
    _0x1cd845["licenseKey"] && (await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_DEACTIVATE", "payload": { "key": _0x1cd845["licenseKey"], "deviceId": _0x5405c6 } }), await this["_refreshSessions"]());
  }
  async ["_deactivate"]() {
    const _0x4d18cb = await chrome["storage"]["local"]["get"](["licenseKey"]);
    _0x4d18cb["licenseKey"] && (await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_DEACTIVATE", "payload": { "key": _0x4d18cb["licenseKey"] } }), this["dispatchEvent"](new CustomEvent("license-deactivated", { "bubbles": !![], "composed": !![] })));
  }
  async ["_sendLogReport"]() {
    this["sendingLogReport"] = !![], this["logReportResult"] = "";
    try {
      const _0x51c17c = await chrome["runtime"]["sendMessage"]({ "type": "LOG_REPORT_SEND", "payload": { "note": this["logReportNote"] } });
      (_0x51c17c == null ? void 0 : _0x51c17c["ok"]) ? (this["logReportResult"] = "✅ ส่งสำเร็จ — Report ID: " + _0x51c17c["reportId"] + " (" + _0x51c17c["logCount"] + " log entries)", this["logReportNote"] = "") : this["logReportResult"] = "❌ ส่งไม่สำเร็จ: " + ((_0x51c17c == null ? void 0 : _0x51c17c["error"]) || "unknown");
    } catch (_0x372644) {
      this["logReportResult"] = "❌ " + (_0x372644 instanceof Error ? _0x372644["message"] : String(_0x372644));
    } finally {
      this["sendingLogReport"] = ![];
    }
  }
  async ["_checkVersion"]() {
    this["checkingVersion"] = !![];
    try {
      const _0x1aed9b = await chrome["runtime"]["sendMessage"]({ "type": "VERSION_CHECK", "payload": {} });
      this["versionResult"] = _0x1aed9b;
    } catch (_0x263086) {
      this["versionResult"] = { "ok": ![], "current": APP_FULL_LABEL, "error": _0x263086 instanceof Error ? _0x263086["message"] : String(_0x263086) };
    } finally {
      this["checkingVersion"] = ![];
    }
  }
  async ["_resetBot"]() {
    var _a2;
    const _0x383d94 = ["รีเซ็ต Extension จะลบข้อมูลต่อไปนี้:", "• รายการสินค้าทั้งหมดใน Auto mode", "• Settings ของ Creator (Podcast / Story)", "• Pipeline state ที่ค้างอยู่", "• Log / cache / token transient", "", this["resetKeepLicense"] ? "✓ เก็บ License Key" : "✗ ลบ License Key — ต้อง login ใหม่", this["resetKeepSettings"] ? "✓ เก็บ Settings (API Keys)" : "✗ ลบ Settings (รวม API Keys)", "", "ดำเนินการต่อหรือไม่?"]["join"]("\n");
    if (!confirm(_0x383d94)) return;
    this["resetResult"] = "⏳ กำลังรีเซ็ต...", showToast("⏳ กำลังรีเซ็ต Extension...", "info", 2500);
    try {
      const _0x24dbb2 = await chrome["runtime"]["sendMessage"]({ "type": "RESET_BOT", "payload": { "keepLicense": this["resetKeepLicense"], "keepSettings": this["resetKeepSettings"] } });
      if (_0x24dbb2 == null ? void 0 : _0x24dbb2["success"]) {
        const _0x27401e = _0x24dbb2["flowTabsReloaded"] ? " + Flow " + _0x24dbb2["flowTabsReloaded"] + " แท็บ" : "", _0x17f774 = "✅ รีเซ็ตเสร็จ — " + (((_a2 = _0x24dbb2["preserved"]) == null ? void 0 : _a2["length"]) ?? 0) + " keys เก็บ" + _0x27401e;
        this["resetResult"] = _0x17f774 + " | 🔄 กำลัง reload extension...", showToast(_0x17f774, "success", 4e3);
      } else {
        const _0x1d27c4 = (_0x24dbb2 == null ? void 0 : _0x24dbb2["error"]) || "รีเซ็ตล้มเหลว";
        this["resetResult"] = "❌ " + _0x1d27c4, showToast("❌ " + _0x1d27c4, "error", 5e3);
      }
    } catch (_0x4df64d) {
      const _0x13b525 = _0x4df64d instanceof Error ? _0x4df64d["message"] : "เชื่อมต่อ background ไม่ได้";
      this["resetResult"] = "❌ " + _0x13b525, showToast("❌ " + _0x13b525, "error", 5e3);
    }
  }
  ["_close"]() {
    this["_saveSettings"](), this["dispatchEvent"](new CustomEvent("close-settings", { "bubbles": !![], "composed": !![] }));
  }
};
AgxSettings["styles"] = i$3`
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 5000;
      background: var(--agx-bg-base, #101420);
      overflow-y: auto;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px;
      border-bottom: 1px solid var(--agx-border-subtle);
      position: sticky;
      top: 0;
      background: var(--agx-bg-base);
      z-index: 10;
    }

    .title {
      font-size: 15px;
      font-weight: 600;
      color: var(--agx-text-primary);
    }

    .close-btn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      cursor: pointer;
      font-size: 16px;
    }

    .close-btn:hover {
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
    }

    .body { padding: 10px 14px 20px; }

    .section { margin-bottom: 12px; }

    .section-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--agx-accent);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .form-row {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
    }

    .form-row > * { flex: 1; }

    .provider-content {
      margin-top: 10px;
      padding: 12px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
    }

    .server-info {
      font-size: 12px;
      color: var(--agx-text-secondary);
      line-height: 1.6;
    }
    .server-info-title {
      font-weight: 600;
      color: var(--agx-text-primary);
      margin-bottom: 6px;
    }
    .server-info p { margin: 4px 0; }
    .server-info-note {
      font-size: 11px;
      color: var(--agx-text-muted);
    }
    .server-info-quota {
      margin-top: 8px;
      padding: 6px 10px;
      background: rgba(74, 141, 255, 0.08);
      border-radius: var(--agx-radius-sm);
      font-size: 11px;
    }
    .server-info-status {
      margin-top: 6px;
      font-size: 11px;
      color: var(--agx-accent);
    }

    .test-result {
      padding: 6px 10px;
      border-radius: var(--agx-radius-sm);
      font-size: 11px;
      margin-top: 8px;
    }

    .test-result.success {
      background: rgba(47, 107, 255, 0.15);
      color: var(--agx-accent);
    }

    .test-result.warn {
      background: rgba(245, 158, 11, 0.15);
      color: #f59e0b;
    }

    /* notice — "นี่ไม่ใช่ error" สีฟ้าเหมือน success
       ใช้กับเคส informational เช่น ไม่กรอก API key — system จะใช้ server fallback แทน */
    .test-result.notice {
      background: rgba(47, 107, 255, 0.15);
      color: var(--agx-accent);
    }

    .test-result.error {
      background: rgba(239, 68, 68, 0.15);
      color: var(--agx-danger);
    }

    .test-summary {
      font-weight: 500;
    }

    .test-details {
      margin-top: 8px;
      padding-top: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .test-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-size: 11px;
    }

    .test-row-name {
      color: var(--agx-text-primary);
    }

    .test-row-info .ok {
      color: #22c55e;
    }

    .test-row-info .err {
      color: var(--agx-danger);
      word-break: break-word;
    }

    .save-result {
      padding: 6px 10px;
      border-radius: var(--agx-radius-sm);
      font-size: 11px;
      margin-top: 8px;
      animation: fade-in 200ms ease;
    }

    .save-result.success {
      background: rgba(34, 197, 94, 0.15);
      color: #22c55e;
    }

    .save-result.error {
      background: rgba(239, 68, 68, 0.15);
      color: var(--agx-danger);
    }

    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-4px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ── Version drawer ── */
    .version-row {
      display: flex; justify-content: space-between; align-items: center;
      gap: 8px; padding: 6px 0; font-size: 12px;
      border-bottom: 1px solid var(--agx-border-subtle);
    }
    .version-row:last-child { border-bottom: 0; }
    .version-row .label { color: var(--agx-text-muted); }
    .version-row .value { color: var(--agx-text-primary); font-weight: 500; }
    .version-badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 10px;
      font-weight: 600;
    }
    .version-badge.latest { background: rgba(34, 197, 94, .15); color: #22c55e; }
    .version-badge.outdated { background: rgba(245, 158, 11, .15); color: #f59e0b; }
    .version-badge.error { background: rgba(239, 68, 68, .15); color: var(--agx-danger); }
    .version-summary { color: var(--agx-text-muted); font-size: 11px; margin-top: 4px; }
    .version-history {
      margin-top: 10px;
      max-height: 240px;
      overflow-y: auto;
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
    }
    .version-history-item {
      padding: 8px 10px;
      border-bottom: 1px solid var(--agx-border-subtle);
      display: flex; gap: 10px; justify-content: space-between; align-items: flex-start;
    }
    .version-history-item:last-child { border-bottom: 0; }
    .version-history-meta { flex: 1; min-width: 0; }
    .version-history-title { font-weight: 600; font-size: 12px; color: var(--agx-text-primary); }
    .version-history-date { font-size: 10px; color: var(--agx-text-muted); margin-top: 2px; }
    .version-history-summary { font-size: 11px; color: var(--agx-text-secondary); margin-top: 4px; line-height: 1.5; }
    .version-history-dl {
      flex-shrink: 0;
      padding: 4px 10px;
      background: var(--agx-accent);
      color: white;
      border: 0;
      border-radius: var(--agx-radius-sm);
      cursor: pointer;
      font-size: 11px;
      font-weight: 600;
      text-decoration: none;
    }
    .version-history-dl:hover { opacity: .9; }

    /* Terms of Service */
    .terms-body {
      font-size: 11px;
      line-height: 1.6;
      color: var(--agx-text-secondary, #94a3b8);
    }
    .terms-body p { margin: 0 0 8px; }
    .terms-body strong { color: var(--agx-text-primary, #e2e8f0); }
    .terms-list {
      margin: 6px 0 10px;
      padding-left: 18px;
      font-size: 11px;
    }
    .terms-list li { margin-bottom: 5px; }
    .terms-footer {
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 10px;
      font-style: italic;
      opacity: 0.7;
    }
    .terms-body code {
      background: rgba(255,255,255,0.06);
      padding: 1px 5px;
      border-radius: 3px;
      font-family: var(--agx-font-mono, monospace);
      font-size: 10px;
    }

    /* Device management */
    .sessions-header {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: var(--agx-text-secondary);
      margin-bottom: 8px;
    }

    .device-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 8px;
      background: var(--agx-bg-surface);
      border-radius: var(--agx-radius-sm);
      margin-bottom: 4px;
      font-size: 11px;
    }

    .device-info { color: var(--agx-text-secondary); flex: 1; overflow: hidden; }
    .device-id { font-family: var(--agx-font-mono); font-size: 10px; color: var(--agx-text-muted); }

    .remove-btn {
      background: none;
      border: none;
      color: var(--agx-danger);
      cursor: pointer;
      font-size: 11px;
      padding: 2px 6px;
    }

    .btn-row {
      display: flex;
      gap: 8px;
      margin-top: 10px;
    }

    .btn-row > * { flex: 1; }

    .cache-options {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 10px;
    }
  `, __decorateClass$f([r()], AgxSettings["prototype"], "settings", 2), __decorateClass$f([r()], AgxSettings["prototype"], "activeProviderTab", 2), __decorateClass$f([r()], AgxSettings["prototype"], "testing", 2), __decorateClass$f([r()], AgxSettings["prototype"], "testResult", 2), __decorateClass$f([r()], AgxSettings["prototype"], "testDetails", 2), __decorateClass$f([r()], AgxSettings["prototype"], "saveResult", 2), __decorateClass$f([r()], AgxSettings["prototype"], "saving", 2), __decorateClass$f([r()], AgxSettings["prototype"], "devices", 2), __decorateClass$f([r()], AgxSettings["prototype"], "sessionsCount", 2), __decorateClass$f([r()], AgxSettings["prototype"], "maxSessions", 2), __decorateClass$f([r()], AgxSettings["prototype"], "expireDate", 2), __decorateClass$f([r()], AgxSettings["prototype"], "loadingDevices", 2), __decorateClass$f([r()], AgxSettings["prototype"], "resetKeepLicense", 2), __decorateClass$f([r()], AgxSettings["prototype"], "resetKeepSettings", 2), __decorateClass$f([r()], AgxSettings["prototype"], "resetResult", 2), __decorateClass$f([r()], AgxSettings["prototype"], "showTerms", 2), __decorateClass$f([r()], AgxSettings["prototype"], "showServerInfo", 2), __decorateClass$f([r()], AgxSettings["prototype"], "versionResult", 2), __decorateClass$f([r()], AgxSettings["prototype"], "checkingVersion", 2), __decorateClass$f([r()], AgxSettings["prototype"], "logReportNote", 2), __decorateClass$f([r()], AgxSettings["prototype"], "sendingLogReport", 2), __decorateClass$f([r()], AgxSettings["prototype"], "logReportResult", 2), AgxSettings = __decorateClass$f([t$1("agx-settings")], AgxSettings);
var __defProp$e = Object["defineProperty"], __getOwnPropDesc$e = Object["getOwnPropertyDescriptor"], __decorateClass$e = (_0x390c08, _0x7d71a2, _0x434a99, _0x21ddf8) => {
  var _0x1e9842 = _0x21ddf8 > 1 ? void 0 : _0x21ddf8 ? __getOwnPropDesc$e(_0x7d71a2, _0x434a99) : _0x7d71a2;
  for (var _0xeb1d74 = _0x390c08["length"] - 1, _0x315e9b; _0xeb1d74 >= 0; _0xeb1d74--) if (_0x315e9b = _0x390c08[_0xeb1d74]) _0x1e9842 = (_0x21ddf8 ? _0x315e9b(_0x7d71a2, _0x434a99, _0x1e9842) : _0x315e9b(_0x1e9842)) || _0x1e9842;
  if (_0x21ddf8 && _0x1e9842) __defProp$e(_0x7d71a2, _0x434a99, _0x1e9842);
  return _0x1e9842;
};
let AgxDebugPanel = class extends i {
  constructor() {
    super(...arguments), this["logs"] = [], this["flowTabId"] = null, this["tiktokTabId"] = null, this["flowUrl"] = "", this["prompt"] = "a cat playing piano in space", this["fileDataUrl"] = null, this["fileName"] = "", this["busy"] = null, this["extendMatch"] = "Extend", this["extendPrompt"] = "continue the scene with the same character", this["clickClipIndex"] = -1, this["clickClipUseCdp"] = ![], this["snapshottedClipCount"] = -1, this["pipelineOutputMode"] = "download", this["pipelinePostCreateWaitSec"] = 10, this["pipelineNTotalClips"] = 3, this["trimClipIndex"] = -2, this["trimDx"] = -32, this["trimUseCdp"] = ![], this["deleteClipIndex"] = -1, this["_ping"] = () => this["_run"]("FLOW_PING", async () => {
      const _0x22fb64 = await this["_send"]("FLOW_PING");
      if (_0x22fb64 == null ? void 0 : _0x22fb64["ready"]) this["_log"]("ok", "pong (ready=true)");
      else this["_log"]("warn", "pong: " + JSON["stringify"](_0x22fb64));
    }), this["_status"] = () => this["_run"]("FLOW_STATUS", async () => {
      const _0xc61ecf = await this["_send"]("FLOW_STATUS");
      if (!_0xc61ecf) {
        this["_log"]("err", "no response");
        return;
      }
      await this["_refreshTabs"](), this["_log"]("ok", "ready=" + _0xc61ecf["ready"] + " onProject=" + _0xc61ecf["onProject"]), this["_log"]("info", "url: " + _0xc61ecf["url"]);
    }), this["_navHome"] = () => this["_run"]("FLOW_NAVIGATE_HOME", async () => {
      const _0x165a45 = await this["_send"]("FLOW_NAVIGATE_HOME");
      this["_log"]("ok", "nav home: " + JSON["stringify"](_0x165a45));
    }), this["_reload"] = () => this["_run"]("FLOW_RELOAD", async () => {
      const _0x5a371e = await this["_send"]("FLOW_RELOAD");
      this["_log"]("ok", "reload: " + JSON["stringify"](_0x5a371e) + " (รอ ~3 วิ แล้วลองใหม่)");
    }), this["_newProject"] = () => this["_run"]("FLOW_NEW_PROJECT", async () => {
      const _0x3d8bb6 = await this["_send"]("FLOW_NEW_PROJECT");
      this["_log"]("ok", "new project: " + JSON["stringify"](_0x3d8bb6));
    }), this["_hasFailed"] = () => this["_run"]("FLOW_HAS_FAILED_TILE", async () => {
      const _0x368eef = await this["_send"]("FLOW_HAS_FAILED_TILE");
      if (_0x368eef == null ? void 0 : _0x368eef["found"]) this["_log"]("err", "⚠ พบ failed tile บนหน้า Flow!");
      else this["_log"]("ok", "ไม่พบ failed tile");
    }), this["_healthProbe"] = () => this["_run"]("🩺 health probe", async () => {
      await this["_refreshTabs"](), this["_log"]("info", "Flow tab: " + (this["flowTabId"] ?? "(none)") + " | TT tab: " + (this["tiktokTabId"] ?? "(none)"));
      if (!this["flowTabId"]) {
        this["_log"]("err", "no Flow tab");
        return;
      }
      const _0x1ee8c7 = await this["_send"]("FLOW_PING");
      this["_log"]((_0x1ee8c7 == null ? void 0 : _0x1ee8c7["ready"]) ? "ok" : "err", "1/4 ping: ready=" + (_0x1ee8c7 == null ? void 0 : _0x1ee8c7["ready"]));
      const _0x1ac192 = await this["_send"]("FLOW_STATUS");
      this["_log"]("info", "2/4 status: onProject=" + (_0x1ac192 == null ? void 0 : _0x1ac192["onProject"]));
      if (_0x1ac192 == null ? void 0 : _0x1ac192["onProject"]) {
        const _0xe9f12 = await this["_send"]("FLOW_GET_PROJECT_ID");
        this["_log"]("info", "3/4 projectId: " + (_0xe9f12 == null ? void 0 : _0xe9f12["projectId"]) + " (locale=" + (_0xe9f12 == null ? void 0 : _0xe9f12["locale"]) + ")");
      } else this["_log"]("warn", "3/4 ข้าม (ยังไม่อยู่หน้า project)");
      const _0x3c64ab = await this["_send"]("FLOW_HAS_FAILED_TILE");
      this["_log"]((_0x3c64ab == null ? void 0 : _0x3c64ab["found"]) ? "err" : "ok", "4/4 failed tile: " + ((_0x3c64ab == null ? void 0 : _0x3c64ab["found"]) ? "⚠ มี!" : "ไม่มี"));
    }), this["_getProjectId"] = () => this["_run"]("FLOW_GET_PROJECT_ID", async () => {
      const _0x2b7af8 = await this["_send"]("FLOW_GET_PROJECT_ID");
      this["_log"]("ok", "pid=" + (_0x2b7af8 == null ? void 0 : _0x2b7af8["projectId"]) + " locale=" + (_0x2b7af8 == null ? void 0 : _0x2b7af8["locale"]));
    }), this["_ensureProject"] = () => this["_run"]("FLOW_ENSURE_PROJECT", async () => {
      const _0x18763d = await this["_send"]("FLOW_ENSURE_PROJECT");
      this["_log"]((_0x18763d == null ? void 0 : _0x18763d["success"]) ? "ok" : "err", "ensure: " + JSON["stringify"](_0x18763d));
    }), this["_disableAgent"] = () => this["_run"]("FLOW_DEBUG_DISABLE_AGENT", async () => {
      var _a2, _b, _c;
      const _0x487b30 = await this["_send"]("FLOW_DEBUG_DISABLE_AGENT");
      if (!_0x487b30) {
        this["_log"]("err", "no response");
        return;
      }
      ((_a2 = _0x487b30["panel"]) == null ? void 0 : _a2["panelFound"]) ? this["_log"](_0x487b30["panel"]["closeClicked"] ? "ok" : "err", "[1/2] session panel: found=yes, close=" + (_0x487b30["panel"]["closeClicked"] ? "clicked" : "NOT FOUND") + " (poll " + _0x487b30["panel"]["pollIterations"] + "× / " + _0x487b30["panel"]["elapsedMs"] + "ms)") : this["_log"]("info", "[1/2] session panel: not present (poll " + ((_b = _0x487b30["panel"]) == null ? void 0 : _b["pollIterations"]) + "× / " + ((_c = _0x487b30["panel"]) == null ? void 0 : _c["elapsedMs"]) + "ms)");
      const _0x2d39cc = _0x487b30["toggle"];
      if (!_0x2d39cc) {
        this["_log"]("err", "[2/2] toggle: no result");
        return;
      }
      if (!_0x2d39cc["toggleFound"]) this["_log"]("warn", "[2/2] toggle: NOT FOUND (poll " + _0x2d39cc["pollIterations"] + "× / " + _0x2d39cc["elapsedMs"] + "ms) — Flow build อาจไม่มี Agent feature");
      else {
        const _0x4436c2 = _0x2d39cc["initialPressed"] === "true" && _0x2d39cc["finalPressed"] === "false", _0x2db865 = _0x2d39cc["initialPressed"] === "false", _0x51abda = _0x2d39cc["finalPressed"] === "true";
        let _0x4e7e7b = "ok", _0x119f27 = "";
        if (_0x2db865) _0x119f27 = "already OFF";
        else {
          if (_0x4436c2) _0x119f27 = _0x2d39cc["clickedTwice"] ? "flipped OFF (needed retry)" : "flipped OFF";
          else _0x51abda ? (_0x119f27 = "STILL ON — click did not register", _0x4e7e7b = "err") : (_0x119f27 = "final=" + _0x2d39cc["finalPressed"], _0x4e7e7b = "warn");
        }
        this["_log"](_0x4e7e7b, "[2/2] toggle: " + _0x119f27 + " (initial=" + _0x2d39cc["initialPressed"] + ", final=" + _0x2d39cc["finalPressed"] + ", clicks=" + (_0x2d39cc["clickedOnce"] ? _0x2d39cc["clickedTwice"] ? 2 : 1 : 0) + ", poll " + _0x2d39cc["pollIterations"] + "× / " + _0x2d39cc["elapsedMs"] + "ms)");
      }
      this["_log"](_0x487b30["success"] ? "ok" : "err", "▶ overall: " + (_0x487b30["success"] ? "SUCCESS" : "FAILED"));
    }), this["_switchAllMedia"] = () => this["_run"]("FLOW_SWITCH_TO_ALL_MEDIA", async () => {
      const _0xbe2b23 = await this["_send"]("FLOW_SWITCH_TO_ALL_MEDIA");
      this["_log"]((_0xbe2b23 == null ? void 0 : _0xbe2b23["success"]) ? "ok" : "err", "switch: " + JSON["stringify"](_0xbe2b23));
    }), this["_setPrompt"] = () => this["_run"]("FLOW_SET_PROMPT", async () => {
      if (!this["prompt"]["trim"]()) {
        this["_log"]("warn", "prompt ว่าง");
        return;
      }
      const _0x3b7dd2 = await this["_send"]("FLOW_SET_PROMPT", { "prompt": this["prompt"] });
      this["_log"]((_0x3b7dd2 == null ? void 0 : _0x3b7dd2["success"]) ? "ok" : "err", "set prompt: " + JSON["stringify"](_0x3b7dd2));
    }), this["_generate"] = () => this["_run"]("FLOW_GENERATE", async () => {
      const _0x5477e8 = await this["_send"]("FLOW_GENERATE");
      this["_log"]((_0x5477e8 == null ? void 0 : _0x5477e8["success"]) ? "ok" : "err", "generate clicked: " + JSON["stringify"](_0x5477e8));
    }), this["_waitResult"] = () => this["_run"]("FLOW_WAIT_RESULT (180s)", async () => {
      this["_log"]("info", "รอผล... (timeout 180 วิ)");
      const _0x1924e1 = await this["_send"]("FLOW_WAIT_RESULT", { "timeout": 18e4 });
      this["_log"]("ok", "result: " + JSON["stringify"](_0x1924e1)["slice"](0, 300));
    }), this["_uploadFile"] = () => this["_run"]("FLOW_UPLOAD_IMAGE", async () => {
      if (!this["fileDataUrl"]) {
        this["_log"]("warn", "เลือกรูปก่อน");
        return;
      }
      const _0x26ea61 = await this["_send"]("FLOW_UPLOAD_IMAGE", { "imageDataUrl": this["fileDataUrl"] });
      this["_log"]((_0x26ea61 == null ? void 0 : _0x26ea61["success"]) ? "ok" : "err", "upload: " + JSON["stringify"](_0x26ea61));
    }), this["_attachLatest"] = () => this["_run"]("FLOW_ATTACH_LATEST_IMAGE", async () => {
      const _0x199045 = await this["_send"]("FLOW_ATTACH_LATEST_IMAGE");
      this["_log"]("ok", "attach: " + JSON["stringify"](_0x199045));
    }), this["_attachUploads"] = () => this["_run"]("FLOW_ATTACH_UPLOADS (1)", async () => {
      const _0x47dafb = await this["_send"]("FLOW_ATTACH_UPLOADS", { "count": 1 });
      this["_log"]((_0x47dafb == null ? void 0 : _0x47dafb["success"]) ? "ok" : "err", "attach uploads: " + JSON["stringify"](_0x47dafb));
    }), this["_openAddMenu"] = () => this["_run"]("FLOW_EXTEND_OPEN_ADD_MENU", async () => {
      const _0x2218fe = await this["_send"]("FLOW_EXTEND_OPEN_ADD_MENU");
      if (_0x2218fe == null ? void 0 : _0x2218fe["success"]) this["_log"]("ok", "menu opened — " + _0x2218fe["menuItemsCount"] + " items (aria-expanded=" + _0x2218fe["ariaExpanded"] + ")");
      else this["_log"]("err", "open menu fail: " + ((_0x2218fe == null ? void 0 : _0x2218fe["error"]) || JSON["stringify"](_0x2218fe)));
    }), this["_pickMenuOption"] = () => this["_run"]("FLOW_EXTEND_PICK_MENU_OPTION (" + this["extendMatch"] + ")", async () => {
      var _a2;
      const _0x16e6d5 = await this["_send"]("FLOW_EXTEND_PICK_MENU_OPTION", { "match": this["extendMatch"] });
      if (_0x16e6d5 == null ? void 0 : _0x16e6d5["success"]) this["_log"]("ok", "picked: " + _0x16e6d5["picked"]);
      else {
        this["_log"]("err", "pick fail: " + (_0x16e6d5 == null ? void 0 : _0x16e6d5["error"]));
        if ((_a2 = _0x16e6d5 == null ? void 0 : _0x16e6d5["available"]) == null ? void 0 : _a2["length"]) this["_log"]("info", "options: " + _0x16e6d5["available"]["join"](" | "));
      }
    }), this["_selectVideoModel"] = (_0x17a9eb, _0x5ae1a5) => this["_run"]("FLOW_SELECT_VIDEO_MODEL (" + _0x5ae1a5 + ")", async () => {
      var _a2;
      const _0x5710c8 = await this["_send"]("FLOW_SELECT_VIDEO_MODEL", { "modelId": _0x17a9eb });
      if ((_0x5710c8 == null ? void 0 : _0x5710c8["success"]) && _0x5710c8["alreadySelected"]) this["_log"]("ok", 'already set: "' + _0x5710c8["current"] + '"');
      else {
        if (_0x5710c8 == null ? void 0 : _0x5710c8["success"]) this["_log"]("ok", 'selected: "' + _0x5710c8["pickedText"] + '" (was "' + _0x5710c8["previous"] + '")');
        else {
          this["_log"]("err", "select fail: " + (_0x5710c8 == null ? void 0 : _0x5710c8["error"]));
          if ((_a2 = _0x5710c8 == null ? void 0 : _0x5710c8["available"]) == null ? void 0 : _a2["length"]) this["_log"]("info", "available: " + _0x5710c8["available"]["join"](" | "));
        }
      }
    }), this["_selectDuration"] = (_0x2718b7) => this["_run"]("FLOW_SELECT_VIDEO_DURATION (" + _0x2718b7 + "s)", async () => {
      var _a2;
      const _0x5374a4 = await this["_send"]("FLOW_SELECT_VIDEO_DURATION", { "seconds": _0x2718b7 });
      if ((_0x5374a4 == null ? void 0 : _0x5374a4["success"]) && _0x5374a4["alreadySelected"]) this["_log"]("ok", "already " + _0x5374a4["duration"]);
      else {
        if (_0x5374a4 == null ? void 0 : _0x5374a4["success"]) this["_log"]("ok", "duration → " + _0x5374a4["duration"]);
        else {
          this["_log"]("err", "duration fail: " + (_0x5374a4 == null ? void 0 : _0x5374a4["error"]));
          if ((_a2 = _0x5374a4 == null ? void 0 : _0x5374a4["available"]) == null ? void 0 : _a2["length"]) this["_log"]("info", "tabs: " + _0x5374a4["available"]["join"](" | "));
        }
      }
    }), this["_clickClipByIdx"] = () => this["_run"]("FLOW_CLICK_CLIP (idx=" + this["clickClipIndex"] + (this["clickClipUseCdp"] ? ", cdp" : "") + ")", async () => {
      var _a2, _b;
      const _0x2f2a48 = await this["_send"]("FLOW_CLICK_CLIP", { "clipIndex": this["clickClipIndex"], "useCdp": this["clickClipUseCdp"] });
      if (_0x2f2a48 == null ? void 0 : _0x2f2a48["success"]) this["_log"]("ok", "[" + _0x2f2a48["method"] + "] clicked clip[" + _0x2f2a48["clipIndexResolved"] + "/" + ((_0x2f2a48["clipsTotal"] ?? 0) - 1) + "] id=" + _0x2f2a48["clipId"] + " at (" + ((_a2 = _0x2f2a48["clickedAt"]) == null ? void 0 : _a2["x"]) + "," + ((_b = _0x2f2a48["clickedAt"]) == null ? void 0 : _b["y"]) + ")");
      else this["_log"]("err", "click fail: " + ((_0x2f2a48 == null ? void 0 : _0x2f2a48["error"]) || (_0x2f2a48 == null ? void 0 : _0x2f2a48["cdpError"])));
    }), this["_downloadFullVideo"] = () => this["_run"]("FLOW_DOWNLOAD_EXTENDED_VIDEO (legacy menu)", async () => {
      this["_log"]("info", "⏳ [legacy] click Download dropdown → Full Video → 720p...");
      const _0x31b596 = await this["_send"]("FLOW_DOWNLOAD_EXTENDED_VIDEO", { "timeoutMs": 5 * 6e4 });
      if (_0x31b596 == null ? void 0 : _0x31b596["success"]) this["_log"]("ok", "✓ legacy download triggered");
      else this["_log"]("err", "download fail: " + (_0x31b596 == null ? void 0 : _0x31b596["error"]));
    }), this["_runExtendNPipeline"] = () => this["_run"]("DEBUG_EXTEND_N_CLIPS_PIPELINE (N=" + this["pipelineNTotalClips"] + ")", async () => {
      this["_log"]("info", "🎬 รัน pipeline extend " + this["pipelineNTotalClips"] + " คลิป (" + (this["pipelineNTotalClips"] - 1) + " iterations)...");
      const _0x52f583 = await chrome["runtime"]["sendMessage"]({ "type": "DEBUG_EXTEND_N_CLIPS_PIPELINE", "payload": { "totalClips": this["pipelineNTotalClips"], "prompt": this["extendPrompt"], "matchText": this["extendMatch"], "outputMode": this["pipelineOutputMode"], "postCreateWaitMs": this["pipelinePostCreateWaitSec"] * 1e3, "maxRetries": 3 } });
      (_0x52f583 == null ? void 0 : _0x52f583["success"]) ? this["_log"]("ok", "✓ pipeline สำเร็จ — " + _0x52f583["totalClips"] + " clips, output=" + _0x52f583["output"] + (_0x52f583["sizeMb"] ? " (" + _0x52f583["sizeMb"] + " MB)" : "")) : this["_log"]("err", "pipeline fail: " + (_0x52f583 == null ? void 0 : _0x52f583["error"]));
    }), this["_runExtend2Pipeline"] = () => this["_run"]("DEBUG_EXTEND_2_CLIPS_PIPELINE", async () => {
      this["_log"]("info", "🎬 รัน pipeline extend 2 คลิป...");
      const _0x30177b = await chrome["runtime"]["sendMessage"]({ "type": "DEBUG_EXTEND_2_CLIPS_PIPELINE", "payload": { "prompt": this["extendPrompt"], "matchText": this["extendMatch"], "trimDx": -100, "outputMode": this["pipelineOutputMode"], "postCreateWaitMs": this["pipelinePostCreateWaitSec"] * 1e3 } });
      (_0x30177b == null ? void 0 : _0x30177b["success"]) ? this["_log"]("ok", "✓ pipeline สำเร็จ — EN=" + _0x30177b["EN"] + ", trimΔ=" + _0x30177b["trimDelta"] + "px, output=" + _0x30177b["output"] + (_0x30177b["sizeMb"] ? " (" + _0x30177b["sizeMb"] + " MB)" : "")) : this["_log"]("err", "pipeline fail: " + (_0x30177b == null ? void 0 : _0x30177b["error"]));
    }), this["_fullPipelineDebug"] = () => this["_run"]("DEBUG_DOWNLOAD_AND_TIKTOK", async () => {
      this["_log"]("info", "🚀 download Flow scene + fetch blob + upload TikTok (draft)...");
      const _0x2397f1 = await chrome["runtime"]["sendMessage"]({ "type": "DEBUG_DOWNLOAD_AND_TIKTOK" });
      (_0x2397f1 == null ? void 0 : _0x2397f1["success"]) ? this["_log"]("ok", "✓ pipeline สำเร็จ " + _0x2397f1["sizeMb"] + " MB — เช็ค TikTok drafts (tiktok.com/tiktokstudio/content?tab=draft)") : this["_log"]("err", "pipeline fail: " + (_0x2397f1 == null ? void 0 : _0x2397f1["error"]));
    }), this["_downloadSceneDirect"] = () => this["_run"]("FLOW_DOWNLOAD_SCENE_DIRECT (/scene/ direct)", async () => {
      this["_log"]("info", '⏳ click Download (direct) + watch "Exporting your scene…"');
      const _0x3ada01 = await this["_send"]("FLOW_DOWNLOAD_SCENE_DIRECT", { "timeoutMs": 3 * 6e4 });
      if (_0x3ada01 == null ? void 0 : _0x3ada01["success"]) {
        const _0x5c74bd = Math["round"]((_0x3ada01["totalMs"] ?? 0) / 1e3);
        this["_log"]("ok", "✓ exported in " + _0x5c74bd + "s (sawExporting=" + _0x3ada01["sawExporting"] + ", sawComplete=" + _0x3ada01["sawComplete"] + ") — เช็ค chrome://downloads/");
      } else this["_log"]("err", "download fail: " + (_0x3ada01 == null ? void 0 : _0x3ada01["error"]) + " (sawExporting=" + (_0x3ada01 == null ? void 0 : _0x3ada01["sawExporting"]) + ")");
    }), this["_snapshotClipCount"] = () => this["_run"]("snapshot clip count", async () => {
      const _0x26936b = await this["_send"]("FLOW_LIST_CLIPS");
      if (!(_0x26936b == null ? void 0 : _0x26936b["success"])) {
        this["_log"]("err", "snapshot fail");
        return;
      }
      this["snapshottedClipCount"] = _0x26936b["count"] ?? 0, this["_log"]("ok", "📸 snapshot: " + this["snapshottedClipCount"] + ' clip(s) — กด Create แล้วค่อยกด "wait new ready"');
    }), this["_waitNewClipReady"] = () => this["_run"]("FLOW_WAIT_NEW_CLIP_READY (prev=" + this["snapshottedClipCount"] + ")", async () => {
      if (this["snapshottedClipCount"] < 0) {
        this["_log"]("err", 'ยังไม่ได้ snapshot — กดปุ่ม "snapshot count" ก่อน');
        return;
      }
      this["_log"]("info", "⏳ รอ clip ใหม่ (จากเดิม " + this["snapshottedClipCount"] + " clips) + frames โหลด...");
      const _0x7bc6f6 = await this["_send"]("FLOW_WAIT_NEW_CLIP_READY", { "previousCount": this["snapshottedClipCount"], "timeoutMs": 3e5, "minFrames": 1 });
      if ((_0x7bc6f6 == null ? void 0 : _0x7bc6f6["success"]) && _0x7bc6f6["ready"]) {
        const _0x7b908f = Math["round"]((_0x7bc6f6["appearedAfterMs"] ?? 0) / 1e3), _0x1b68df = Math["round"]((_0x7bc6f6["framesAfterMs"] ?? 0) / 1e3);
        this["_log"]("ok", "✓ new clip ready! id=" + _0x7bc6f6["clipId"] + " (appear " + _0x7b908f + "s, frames " + _0x1b68df + "s) — count " + _0x7bc6f6["previousCount"] + "→" + _0x7bc6f6["currentCount"] + ", imgs=" + _0x7bc6f6["imgCount"]);
      } else (_0x7bc6f6 == null ? void 0 : _0x7bc6f6["phase"]) === "disappeared" ? this["_log"]("err", "❌ " + _0x7bc6f6["error"] + " — RETRY ได้") : this["_log"]("err", "wait fail: " + (_0x7bc6f6 == null ? void 0 : _0x7bc6f6["error"]));
    }), this["_waitClipReady"] = () => this["_run"]("FLOW_WAIT_CLIP_READY (idx=" + this["clickClipIndex"] + ")", async () => {
      this["_log"]("info", "⏳ รอ clip[" + this["clickClipIndex"] + "] โหลด frames... (poll ทุก 2.5s)");
      const _0x46b8f1 = await this["_send"]("FLOW_WAIT_CLIP_READY", { "clipIndex": this["clickClipIndex"], "timeoutMs": 3e5 });
      if ((_0x46b8f1 == null ? void 0 : _0x46b8f1["success"]) && _0x46b8f1["ready"]) {
        const _0x4d6a32 = Math["round"]((_0x46b8f1["elapsedMs"] ?? 0) / 1e3);
        this["_log"]("ok", "✓ clip[" + _0x46b8f1["clipIndexResolved"] + "] ready! id=" + _0x46b8f1["clipId"] + " imgs=" + _0x46b8f1["imgCount"] + " elapsed=" + _0x4d6a32 + "s");
      } else this["_log"]("err", "wait fail: " + (_0x46b8f1 == null ? void 0 : _0x46b8f1["error"]) + " (imgs=" + (_0x46b8f1 == null ? void 0 : _0x46b8f1["imgCount"]) + ")");
    }), this["_listClips"] = () => this["_run"]("FLOW_LIST_CLIPS", async () => {
      const _0x410d9a = await this["_send"]("FLOW_LIST_CLIPS");
      if (!(_0x410d9a == null ? void 0 : _0x410d9a["success"])) {
        this["_log"]("err", "list fail: " + (_0x410d9a == null ? void 0 : _0x410d9a["error"]));
        return;
      }
      this["_log"]("ok", _0x410d9a["count"] + " clip(s) in timeline:"), (_0x410d9a["clips"] || [])["forEach"]((_0x5d683e) => this["_log"]("info", "  [" + _0x5d683e["idx"] + "] " + _0x5d683e["clipId"] + "  (" + _0x5d683e["widthPx"] + "px)"));
    }), this["_extendTypePrompt"] = () => this["_run"]("FLOW_EXTEND_TYPE_PROMPT", async () => {
      const _0x5622c6 = await this["_send"]("FLOW_EXTEND_TYPE_PROMPT", { "text": this["extendPrompt"] });
      if (_0x5622c6 == null ? void 0 : _0x5622c6["success"]) this["_log"]("ok", "typed → editor=" + _0x5622c6["editorTag"] + " slate=" + _0x5622c6["editorIsSlate"] + ' now="' + _0x5622c6["currentText"] + '"');
      else this["_log"]("err", "type fail: " + (_0x5622c6 == null ? void 0 : _0x5622c6["error"]));
    }), this["_extendClickCreate"] = () => this["_run"]("FLOW_EXTEND_CLICK_CREATE", async () => {
      var _a2, _b;
      const _0x27c20b = await this["_send"]("FLOW_EXTEND_CLICK_CREATE");
      if (_0x27c20b == null ? void 0 : _0x27c20b["success"]) this["_log"]("ok", "Create clicked at (" + ((_a2 = _0x27c20b["clickedAt"]) == null ? void 0 : _a2["x"]) + ", " + ((_b = _0x27c20b["clickedAt"]) == null ? void 0 : _b["y"]) + ")");
      else this["_log"]("err", "create fail: " + ((_0x27c20b == null ? void 0 : _0x27c20b["error"]) || (_0x27c20b == null ? void 0 : _0x27c20b["cdpError"])));
    }), this["_scrollTimelineEnd"] = () => this["_run"]("FLOW_TIMELINE_SCROLL_END", async () => {
      const _0x320a0f = await this["_send"]("FLOW_TIMELINE_SCROLL_END");
      if (_0x320a0f == null ? void 0 : _0x320a0f["success"]) {
        const _0xd2f5e1 = _0x320a0f["addBtnVisible"] ? "addBtn visible ✓" : "addBtn NOT visible ✗";
        this["_log"]("ok", "scrolled " + _0x320a0f["count"] + " container(s) — " + _0xd2f5e1 + " — " + JSON["stringify"](_0x320a0f["results"]));
      } else this["_log"]("err", "scroll fail: " + (_0x320a0f == null ? void 0 : _0x320a0f["error"]));
    }), this["_runStoryFullTest"] = () => this["_run"]("Story Full Test (Add×3 → Open Scene → Download)", async () => {
      const _0x34f653 = (_0x5d8942) => new Promise((_0x138445) => setTimeout(_0x138445, _0x5d8942)), _0x401e41 = 2500;
      this["_log"]("info", "▶ Step 1/5 — Add clip 1 → Create Scene");
      const _0x5a357e = await this["_send"]("FLOW_ADD_CLIP_TO_SCENE", { "sceneMode": "create" });
      if (!(_0x5a357e == null ? void 0 : _0x5a357e["success"])) {
        this["_log"]("err", "Step 1 fail: " + ((_0x5a357e == null ? void 0 : _0x5a357e["error"]) || "unknown"));
        return;
      }
      this["_log"]("ok", '   ✓ Step 1 — เลือก "' + _0x5a357e["selectedSceneText"] + '"'), await _0x34f653(_0x401e41), this["_log"]("info", "▶ Step 2/5 — Add clip 2 → append");
      const _0x31e3bc = await this["_send"]("FLOW_ADD_CLIP_TO_SCENE", { "sceneMode": "append" });
      if (!(_0x31e3bc == null ? void 0 : _0x31e3bc["success"])) {
        this["_log"]("err", "Step 2 fail: " + ((_0x31e3bc == null ? void 0 : _0x31e3bc["error"]) || "unknown"));
        return;
      }
      this["_log"]("ok", '   ✓ Step 2 — เลือก "' + _0x31e3bc["selectedSceneText"] + '"'), await _0x34f653(_0x401e41), this["_log"]("info", "▶ Step 3/5 — Add clip 3 → append");
      const _0x300e20 = await this["_send"]("FLOW_ADD_CLIP_TO_SCENE", { "sceneMode": "append" });
      if (!(_0x300e20 == null ? void 0 : _0x300e20["success"])) {
        this["_log"]("err", "Step 3 fail: " + ((_0x300e20 == null ? void 0 : _0x300e20["error"]) || "unknown"));
        return;
      }
      this["_log"]("ok", '   ✓ Step 3 — เลือก "' + _0x300e20["selectedSceneText"] + '"'), await _0x34f653(_0x401e41), this["_log"]("info", "▶ Step 4/5 — Open latest scene → /scene/");
      const _0x4d3e80 = await this["_send"]("FLOW_OPEN_LATEST_SCENE", {});
      if (!(_0x4d3e80 == null ? void 0 : _0x4d3e80["success"])) {
        this["_log"]("err", "Step 4 fail: " + ((_0x4d3e80 == null ? void 0 : _0x4d3e80["error"]) || "unknown"));
        return;
      }
      _0x4d3e80["skipped"] ? this["_log"]("ok", "   ⏩ Step 4 — อยู่ /scene/ แล้ว (URL=" + _0x4d3e80["afterUrl"] + ")") : this["_log"]("ok", "   ✓ Step 4 — URL: " + _0x4d3e80["afterUrl"]);
      await _0x34f653(2e3), this["_log"]("info", "▶ Step 5/5 — Download (direct)");
      const _0x5807fe = await this["_send"]("FLOW_DOWNLOAD_SCENE_DIRECT", {});
      if (!(_0x5807fe == null ? void 0 : _0x5807fe["success"])) {
        this["_log"]("err", "Step 5 fail: " + ((_0x5807fe == null ? void 0 : _0x5807fe["error"]) || "unknown"));
        return;
      }
      this["_log"]("ok", "   ✓ Step 5 — Download สำเร็จ"), this["_log"]("ok", "🎉 Story Full Test — สำเร็จทั้ง 5 ขั้นตอน");
    }), this["_openLatestScene"] = () => this["_run"]("FLOW_OPEN_LATEST_SCENE (View scenes → latest tile → /scene/)", async () => {
      const _0x118538 = await this["_send"]("FLOW_OPEN_LATEST_SCENE", {});
      (_0x118538 == null ? void 0 : _0x118538["success"]) ? _0x118538["skipped"] ? this["_log"]("ok", "✓ อยู่ /scene/ แล้ว — skip (URL=" + _0x118538["beforeUrl"] + ")") : this["_log"]("ok", "✓ navigate /scene/ สำเร็จ — tile=" + (_0x118538["tileId"] || "")["slice"](0, 18) + "... | URL: " + _0x118538["beforeUrl"] + " → " + _0x118538["afterUrl"]) : this["_log"]("err", "open latest scene fail: " + ((_0x118538 == null ? void 0 : _0x118538["error"]) || "unknown"));
    }), this["_addClipToScene"] = (_0x39920) => this["_run"]("FLOW_ADD_CLIP_TO_SCENE (mode=" + _0x39920 + ")", async () => {
      const _0x267f35 = await this["_send"]("FLOW_ADD_CLIP_TO_SCENE", { "sceneMode": _0x39920 });
      (_0x267f35 == null ? void 0 : _0x267f35["success"]) ? this["_log"]("ok", '✓ Add to Scene สำเร็จ — เลือก "' + (_0x267f35["selectedSceneText"] || "?") + '" (mode=' + _0x39920 + ")") : this["_log"]("err", "Add to Scene fail: " + ((_0x267f35 == null ? void 0 : _0x267f35["error"]) || "unknown"));
    }), this["_deleteClipViaContextMenu"] = () => this["_run"]("FLOW_DELETE_FAILED_STEP (right-click → Delete, idx=" + this["deleteClipIndex"] + ")", async () => {
      const _0x20d573 = await this["_send"]("FLOW_DELETE_FAILED_STEP", { "clipIndex": this["deleteClipIndex"] });
      (_0x20d573 == null ? void 0 : _0x20d573["success"]) ? this["_log"]("ok", "[" + _0x20d573["method"] + "] ลบ clip[" + _0x20d573["clipIndexResolved"] + "/" + ((_0x20d573["clipsTotal"] ?? 0) - 1) + "] id=" + (_0x20d573["clipId"] || "")["slice"](0, 30) + "... สำเร็จ") : this["_log"]("err", "delete fail: " + ((_0x20d573 == null ? void 0 : _0x20d573["error"]) || "unknown"));
    }), this["_trimClip"] = () => this["_run"]("FLOW_TRIM_CLIP_BY_PX (idx=" + this["trimClipIndex"] + ", dx=" + this["trimDx"] + (this["trimUseCdp"] ? ", cdp" : "") + ")", async () => {
      var _a2;
      const _0x5789a4 = await this["_send"]("FLOW_TRIM_CLIP_BY_PX", { "clipIndex": this["trimClipIndex"], "dx": this["trimDx"], "useCdp": this["trimUseCdp"] });
      if (_0x5789a4 == null ? void 0 : _0x5789a4["success"]) {
        const _0x35f273 = ((_a2 = _0x5789a4["rectAfter"]) == null ? void 0 : _a2["widthDelta"]) ?? "?", _0x2e3cd = _0x5789a4["handleEl"] ? " [target=" + _0x5789a4["handleEl"] + "]" : "";
        this["_log"]("ok", "[" + _0x5789a4["method"] + "] trim clip[" + _0x5789a4["clipIndexResolved"] + "/" + ((_0x5789a4["clipsTotal"] ?? 0) - 1) + "] (" + _0x5789a4["startX"] + "," + _0x5789a4["startY"] + ")→(" + _0x5789a4["endX"] + "," + _0x5789a4["endY"] + ") widthΔ=" + _0x35f273 + "px" + _0x2e3cd);
      } else this["_log"]("err", "trim fail: " + ((_0x5789a4 == null ? void 0 : _0x5789a4["error"]) || (_0x5789a4 == null ? void 0 : _0x5789a4["cdpError"])));
    });
  }
  async ["connectedCallback"]() {
    super["connectedCallback"](), await this["_refreshTabs"](), this["_log"]("info", "🛠 Debug Panel พร้อมใช้งาน — กดปุ่มทดสอบทีละขั้น"), this["_pipelineLogListener"] = (_0x168a35) => {
      if ((_0x168a35 == null ? void 0 : _0x168a35["type"]) !== "PIPELINE_LOG") return;
      const _0x53c21e = _0x168a35["payload"] || {}, _0x3f6d01 = _0x53c21e["level"] || "info", _0x4b973e = _0x3f6d01 === "ok" || _0x3f6d01 === "warn" || _0x3f6d01 === "err" || _0x3f6d01 === "info" ? _0x3f6d01 : _0x3f6d01 === "success" ? "ok" : _0x3f6d01 === "error" ? "err" : "info";
      this["_log"](_0x4b973e, _0x53c21e["message"] || "");
    }, chrome["runtime"]["onMessage"]["addListener"](this["_pipelineLogListener"]);
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_pipelineLogListener"] && (chrome["runtime"]["onMessage"]["removeListener"](this["_pipelineLogListener"]), this["_pipelineLogListener"] = void 0);
  }
  async ["_refreshTabs"]() {
    try {
      const _0x41dae3 = await chrome["tabs"]["query"]({}), _0x4096de = _0x41dae3["find"]((_0x49c7cf) => /labs\.google\/fx(?:\/[a-z]{2})?\/tools\/flow/i["test"](_0x49c7cf["url"] || "")), _0x2e99e6 = _0x41dae3["find"]((_0xc534e9) => /tiktok\.com\/tiktokstudio/i["test"](_0xc534e9["url"] || ""));
      this["flowTabId"] = (_0x4096de == null ? void 0 : _0x4096de["id"]) ?? null, this["tiktokTabId"] = (_0x2e99e6 == null ? void 0 : _0x2e99e6["id"]) ?? null, this["flowUrl"] = (_0x4096de == null ? void 0 : _0x4096de["url"]) || "";
    } catch (_0x4689a1) {
      this["_log"]("err", "refreshTabs: " + _0x4689a1);
    }
  }
  ["_log"](_0x2f7fbd, _0x3230fb) {
    const _0x46b89c = (/* @__PURE__ */ new Date())["toLocaleTimeString"]("en-GB", { "hour12": ![] });
    this["logs"] = [...this["logs"], { "ts": _0x46b89c, "level": _0x2f7fbd, "msg": _0x3230fb }]["slice"](-200), queueMicrotask(() => {
      if (this["logArea"]) this["logArea"]["scrollTop"] = this["logArea"]["scrollHeight"];
    });
  }
  ["_clearLog"]() {
    this["logs"] = [];
  }
  async ["_send"](_0x51beef, _0x1fe2b6) {
    if (!this["flowTabId"]) {
      await this["_refreshTabs"]();
      if (!this["flowTabId"]) return this["_log"]("err", _0x51beef + ': ไม่พบ Flow tab — กด "เปิด Flow" ก่อน'), null;
      this["_log"]("info", "auto-discovered Flow tab #" + this["flowTabId"]);
    }
    try {
      return await chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": _0x51beef, "payload": _0x1fe2b6 });
    } catch (_0xa20784) {
      const _0x3d1189 = String(_0xa20784)["slice"](0, 100);
      this["_log"]("warn", _0x51beef + " ล้มเหลว: " + _0x3d1189 + " — auto-refresh + retry...");
    }
    const _0x4dff99 = this["flowTabId"];
    await this["_refreshTabs"]();
    if (!this["flowTabId"]) return this["_log"]("err", _0x51beef + ": Flow tab หาย (อาจถูกปิด) — เปิด Flow ใหม่"), null;
    this["flowTabId"] !== _0x4dff99 && this["_log"]("ok", "↻ reconnected Flow tab: #" + _0x4dff99 + " → #" + this["flowTabId"]);
    try {
      return await chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": _0x51beef, "payload": _0x1fe2b6 });
    } catch (_0x3c2c75) {
      const _0x42c6b7 = String(_0x3c2c75);
      this["_log"]("err", _0x51beef + " retry ล้มเหลว: " + _0x42c6b7["slice"](0, 120));
      if (_0x42c6b7["includes"]("Could not establish connection") || _0x42c6b7["includes"]("Receiving end")) try {
        const _0x58014e = await chrome["tabs"]["get"](this["flowTabId"]);
        this["_log"]("warn", "tab url: " + (_0x58014e["url"] || "")["slice"](0, 100)), this["_log"]("warn", "💡 อาจต้อง F5 หน้า Flow ก่อน — content script ยังไม่ inject (ถ้าเปิด Flow ก่อน install extension)");
      } catch {
      }
      return null;
    }
  }
  async ["_run"](_0x414632, _0x3276f9) {
    if (this["busy"]) {
      this["_log"]("warn", 'กำลังรัน "' + this["busy"] + '" — รอให้เสร็จก่อน');
      return;
    }
    this["busy"] = _0x414632, this["_log"]("info", "▶ " + _0x414632);
    try {
      await _0x3276f9();
    } catch (_0x30ab1a) {
      this["_log"]("err", _0x414632 + ": " + _0x30ab1a);
    } finally {
      this["busy"] = null;
    }
  }
  async ["_waitTabUrlReady"](_0x2d89d4, _0x22bcca, _0x3fa98d = 8e3) {
    const _0x386735 = Date["now"]() + _0x3fa98d;
    while (Date["now"]() < _0x386735) {
      try {
        const _0x38f29f = await chrome["tabs"]["get"](_0x2d89d4);
        if (_0x38f29f["status"] === "complete" || _0x22bcca["test"](_0x38f29f["url"] || "")) return;
      } catch {
        return;
      }
      await new Promise((_0x2e2384) => setTimeout(_0x2e2384, 250));
    }
  }
  async ["_openFlow"]() {
    await this["_refreshTabs"]();
    if (this["flowTabId"]) {
      await chrome["tabs"]["update"](this["flowTabId"], { "active": !![] });
      const _0x861b3f = await chrome["tabs"]["get"](this["flowTabId"]);
      if (_0x861b3f["windowId"] !== void 0) await chrome["windows"]["update"](_0x861b3f["windowId"], { "focused": !![] });
      this["_log"]("ok", "Flow tab #" + this["flowTabId"] + " focused"), await this["_refreshTabs"]();
    } else {
      const _0x56feb1 = await chrome["tabs"]["create"]({ "url": FLOW_HOME_URL });
      this["flowTabId"] = _0x56feb1["id"] ?? null, this["flowUrl"] = FLOW_HOME_URL, this["_log"]("ok", "เปิด Flow tab #" + this["flowTabId"] + " (กำลังโหลด...)");
      if (_0x56feb1["id"]) await this["_waitTabUrlReady"](_0x56feb1["id"], /labs\.google\/fx(?:\/[a-z]{2})?\/tools\/flow/i);
      await this["_refreshTabs"](), this["_log"]("ok", "Flow tab #" + this["flowTabId"] + " พร้อมใช้งาน");
    }
  }
  async ["_openTikTok"]() {
    await this["_refreshTabs"]();
    if (this["tiktokTabId"]) await chrome["tabs"]["update"](this["tiktokTabId"], { "active": !![] }), this["_log"]("ok", "TikTok tab #" + this["tiktokTabId"] + " focused"), await this["_refreshTabs"]();
    else {
      const _0x7003a2 = await chrome["tabs"]["create"]({ "url": TIKTOK_STUDIO_URL });
      this["tiktokTabId"] = _0x7003a2["id"] ?? null, this["_log"]("ok", "เปิด TikTok tab #" + this["tiktokTabId"] + " (กำลังโหลด...)");
      if (_0x7003a2["id"]) await this["_waitTabUrlReady"](_0x7003a2["id"], /tiktok\.com\/tiktokstudio/i);
      await this["_refreshTabs"](), this["_log"]("ok", "TikTok tab #" + this["tiktokTabId"] + " พร้อมใช้งาน");
    }
  }
  async ["_focusFlow"]() {
    if (!this["flowTabId"]) {
      this["_log"]("warn", "ไม่มี Flow tab");
      return;
    }
    await chrome["tabs"]["update"](this["flowTabId"], { "active": !![] });
    const _0x5b76e0 = await chrome["tabs"]["get"](this["flowTabId"]);
    if (_0x5b76e0["windowId"] !== void 0) await chrome["windows"]["update"](_0x5b76e0["windowId"], { "focused": !![] });
    this["_log"]("ok", "focus Flow #" + this["flowTabId"]);
  }
  async ["_focusTikTok"]() {
    if (!this["tiktokTabId"]) {
      this["_log"]("warn", "ไม่มี TikTok tab");
      return;
    }
    await chrome["tabs"]["update"](this["tiktokTabId"], { "active": !![] }), this["_log"]("ok", "focus TikTok #" + this["tiktokTabId"]);
  }
  async ["_onFile"](_0x17ae19) {
    var _a2;
    const _0x32082f = _0x17ae19["target"], _0x487e3b = (_a2 = _0x32082f["files"]) == null ? void 0 : _a2[0];
    if (!_0x487e3b) return;
    this["fileName"] = _0x487e3b["name"];
    const _0x6acd06 = new FileReader();
    _0x6acd06["onload"] = () => {
      this["fileDataUrl"] = _0x6acd06["result"], this["_log"]("info", "loaded " + _0x487e3b["name"] + " (" + (_0x487e3b["size"] / 1024)["toFixed"](1) + " KB)");
    }, _0x6acd06["readAsDataURL"](_0x487e3b);
  }
  ["_close"]() {
    window["location"]["hash"] = "";
  }
  ["render"]() {
    const _0x573398 = isFlowProjectUrl(this["flowUrl"]);
    return b`
      <div class="topbar">
        <div class="title">🛠 Debug Panel</div>
        <div class="badge">DEV</div>
        <button class="close" @click=${this["_close"]}>ปิด</button>
      </div>

      <div class="status">
        Flow tab: <span class=${this["flowTabId"] ? "ok" : "no"}>${this["flowTabId"] ?? "(ไม่พบ)"}</span>
        | TT tab: <span class=${this["tiktokTabId"] ? "ok" : "no"}>${this["tiktokTabId"] ?? "(ไม่พบ)"}</span>
        | onProject: <span class=${_0x573398 ? "ok" : "no"}>${_0x573398 ? "yes" : "no"}</span>
        ${this["flowUrl"] ? b`<br>url: ${this["flowUrl"]}` : ""}
      </div>

      <!-- Card 1: Flow / TikTok tab control -->
      <div class="card">
        <div class="card-title"><span class="dot"></span> Flow / TikTok control</div>
        <div class="grid3">
          <button class="act" @click=${this["_openFlow"]}>เปิด Flow</button>
          <button class="act" @click=${this["_openTikTok"]}>เปิด TikTok</button>
          <button class="act ghost" @click=${() => this["_refreshTabs"]()}>refresh tabs</button>
          <button class="act ghost" @click=${this["_focusFlow"]}>focus Flow</button>
          <button class="act ghost" @click=${this["_focusTikTok"]}>focus TT</button>
          <button class="act ghost" @click=${this["_status"]}>status</button>
          <button class="act ghost" @click=${this["_ping"]}>ping</button>
          <button class="act ghost" @click=${this["_navHome"]}>nav home</button>
          <button class="act ghost" @click=${this["_reload"]}>reload</button>
          <button class="act ghost" @click=${this["_newProject"]}>new project</button>
          <button class="act ghost" @click=${this["_hasFailed"]}>has failed?</button>
          <button class="act ghost" @click=${this["_getProjectId"]}>get pid</button>
          <button class="act warn full" @click=${this["_healthProbe"]} ?disabled=${!!this["busy"]}>
            🩺 health probe
          </button>
        </div>
      </div>

      <!-- Card 2: Generate -->
      <div class="card">
        <div class="card-title"><span class="dot"></span> Prompt / Generate</div>
        <textarea
          .value=${this["prompt"]}
          @input=${(_0x34399f) => this["prompt"] = _0x34399f["target"]["value"]}
          placeholder="พิมพ์ prompt..."
        ></textarea>
        <div class="grid3">
          <button class="act" @click=${this["_setPrompt"]} ?disabled=${!!this["busy"]}>set prompt</button>
          <button class="act success" @click=${this["_generate"]} ?disabled=${!!this["busy"]}>generate ▶</button>
          <button class="act ghost" @click=${this["_waitResult"]} ?disabled=${!!this["busy"]}>wait result</button>
        </div>
      </div>

      <!-- Card 3: Upload + Attach -->
      <div class="card">
        <div class="card-title"><span class="dot"></span> Upload + Attach</div>
        <input type="file" accept="image/*" @change=${(_0x1db961) => this["_onFile"](_0x1db961)}>
        ${this["fileName"] ? b`<div class="file-info">📎 ${this["fileName"]} ${this["fileDataUrl"] ? "✓" : "..."}</div>` : ""}
        <div class="grid3">
          <button class="act" @click=${this["_uploadFile"]} ?disabled=${!!this["busy"] || !this["fileDataUrl"]}>upload</button>
          <button class="act ghost" @click=${this["_attachUploads"]} ?disabled=${!!this["busy"]}>attach (1)</button>
          <button class="act ghost" @click=${this["_attachLatest"]} ?disabled=${!!this["busy"]}>attach latest</button>
        </div>
      </div>

      <!-- Card 4: Project -->
      <div class="card">
        <div class="card-title"><span class="dot"></span> Project</div>
        <div class="grid3">
          <button class="act ghost" @click=${this["_ensureProject"]} ?disabled=${!!this["busy"]}>ensure proj</button>
          <button class="act ghost" @click=${this["_switchAllMedia"]} ?disabled=${!!this["busy"]}>all media</button>
          <button class="act ghost" @click=${this["_getProjectId"]} ?disabled=${!!this["busy"]}>get pid</button>
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.4">
            🤖 <strong>disable Agent</strong> — ครบ flow: หาหน้าที่มี Agent session panel → กด Close → หา Agent toggle → กดปิด → verify aria-pressed=false
          </div>
          <button class="act" @click=${this["_disableAgent"]} ?disabled=${!!this["busy"]}
            style="width:100%;background:#a855f7">🤖 disable Agent (full flow)</button>
        </div>
      </div>

      <!-- Card 5: Extend Flow (new DOM 2026-05) -->
      <div class="card">
        <div class="card-title">
          <span class="dot" style="background:#a855f7"></span> 🎬 Extend Flow (new DOM)
        </div>
        <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.4">
          ทดสอบทีละสเต็ปก่อน wire เข้า pipeline จริง — ทำตามลำดับ:
          <br>1. <strong>scroll →end</strong> ให้ปุ่ม Add visible
          <br>2. <strong>open Add menu</strong> เปิดเมนู Add Clip
          <br>3. <strong>pick option</strong> เลือก Extend Lite/Fast/Quality (กรอกคำที่ตรง)
          <br>4. <strong>type prompt (Extend)</strong> + <strong>click Create (Extend)</strong> ใน dialog
          <br>5. หลัง Create แล้ว Flow จะพาไป /scene/ — <strong>trim clip N-1</strong> ลดวิหนึ่ง
        </div>
        <div class="grid3">
          <button class="act" @click=${this["_scrollTimelineEnd"]} ?disabled=${!!this["busy"]}>scroll →end</button>
          <button class="act" @click=${this["_openAddMenu"]} ?disabled=${!!this["busy"]}>open Add menu</button>
          <button class="act" @click=${this["_pickMenuOption"]} ?disabled=${!!this["busy"]}>pick option</button>
        </div>
        <div style="margin-top:6px">
          <input type="text" .value=${this["extendMatch"]}
            placeholder="match text (Extend / Lite / Fast / Quality)"
            @input=${(_0x5d1993) => this["extendMatch"] = _0x5d1993["target"]["value"]}
          >
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
            ✏ Extend dialog — type prompt + click Create (scoped ใน open dialog เท่านั้น)
          </div>
          <textarea
            .value=${this["extendPrompt"]}
            @input=${(_0x1b749c) => this["extendPrompt"] = _0x1b749c["target"]["value"]}
            placeholder="extend prompt..."
            style="width:100%;min-height:44px;margin-bottom:6px"
          ></textarea>
          <div class="grid3">
            <button class="act" @click=${this["_extendTypePrompt"]} ?disabled=${!!this["busy"]}>type prompt (Extend)</button>
            <button class="act success" @click=${this["_extendClickCreate"]} ?disabled=${!!this["busy"]}>click Create ▶</button>
          </div>
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
            🎛 Video model — เลือก model ใน picker ที่ visible (dialog / project page)
          </div>
          <div class="grid2">
            <button class="act" @click=${() => this["_selectVideoModel"]("omni-flash", "Omni Flash")} ?disabled=${!!this["busy"]}>Omni Flash</button>
            <button class="act" @click=${() => this["_selectVideoModel"]("veo-3.1-lite", "Veo Lite")} ?disabled=${!!this["busy"]}>Veo 3.1 Lite</button>
            <button class="act" @click=${() => this["_selectVideoModel"]("veo-3.1-fast", "Veo Fast")} ?disabled=${!!this["busy"]}>Veo 3.1 Fast</button>
            <button class="act" @click=${() => this["_selectVideoModel"]("veo-3.1-quality", "Veo Quality")} ?disabled=${!!this["busy"]}>Veo 3.1 Quality</button>
          </div>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-top:8px;margin-bottom:4px">
            ⏱ Duration (เฉพาะ Omni Flash) — ต้องเลือก Omni Flash ก่อน
          </div>
          <div class="grid3" style="grid-template-columns:repeat(4,1fr)">
            <button class="act ghost" @click=${() => this["_selectDuration"](4)} ?disabled=${!!this["busy"]}>4s</button>
            <button class="act ghost" @click=${() => this["_selectDuration"](6)} ?disabled=${!!this["busy"]}>6s</button>
            <button class="act ghost" @click=${() => this["_selectDuration"](8)} ?disabled=${!!this["busy"]}>8s</button>
            <button class="act ghost" @click=${() => this["_selectDuration"](10)} ?disabled=${!!this["busy"]}>10s</button>
          </div>
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
            🎯 Click clip — เลือก clip ใน timeline (CDP click, isTrusted)
          </div>
          <div style="display:grid;grid-template-columns:80px 1fr 1fr;gap:6px;align-items:center">
            <input type="number" .value=${Number["isFinite"](this["clickClipIndex"]) ? String(this["clickClipIndex"]) : ""}
              @input=${(_0x4f7851) => {
      const _0x534966 = parseInt(_0x4f7851["target"]["value"], 10);
      this["clickClipIndex"] = Number["isFinite"](_0x534966) ? _0x534966 : -1;
    }}
              title="clip index — -1=ล่าสุด, -2=ก่อนสุดท้าย, 0+=ตำแหน่ง"
            >
            <button class="act" @click=${this["_clickClipByIdx"]} ?disabled=${!!this["busy"]}>click clip</button>
            <button class="act ghost" @click=${this["_listClips"]} ?disabled=${!!this["busy"]}>list clips</button>
          </div>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
            -1=ล่าสุด, -2=ก่อนสุดท้าย, 0+=ตำแหน่ง (กด list clips ดู index ทั้งหมด)
          </div>
          <label style="display:flex;align-items:center;gap:6px;font-size:10px;margin-top:6px;color:var(--agx-text-muted);cursor:pointer">
            <input type="checkbox" .checked=${this["clickClipUseCdp"]}
              @change=${(_0xc86be8) => this["clickClipUseCdp"] = _0xc86be8["target"]["checked"]}
            >
            <span>Force CDP click (มี banner) — ใช้ถ้า synthetic click ไม่ทำงาน</span>
          </label>
          <div style="margin-top:6px">
            <button class="act ghost" style="width:100%"
              @click=${this["_waitClipReady"]} ?disabled=${!!this["busy"]}
            >⏳ wait clip[${Number["isFinite"](this["clickClipIndex"]) ? this["clickClipIndex"] : -1}] ready (frames โหลด)</button>
            <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
              Poll ทุก 2.5s (timeout 5 นาที) — รอจน clip ที่เลือกมี img frames (extend สำเร็จ)
            </div>
          </div>

          <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
            <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
              🆕 Wait new clip (snapshot-based, ตรวจ fail) — workflow ที่ pipeline ใช้
            </div>
            <div class="grid2">
              <button class="act ghost" @click=${this["_snapshotClipCount"]} ?disabled=${!!this["busy"]}>📸 snapshot count</button>
              <button class="act" @click=${this["_waitNewClipReady"]} ?disabled=${!!this["busy"] || this["snapshottedClipCount"] < 0}>
                ⏳ wait new ready ${this["snapshottedClipCount"] >= 0 ? "(prev=" + this["snapshottedClipCount"] + ")" : ""}
              </button>
            </div>
            <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
              1. กด snapshot → 2. กด Create → 3. กด wait new ready · timeout = fail, last clip หาย = fail (retry ได้)
            </div>
          </div>

          <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
            <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
              💾 Download — 2 พฤติกรรม
            </div>
            <div class="grid2">
              <button class="act" @click=${this["_downloadSceneDirect"]} ?disabled=${!!this["busy"]} title="หน้า /scene/ ใหม่ — click ปุ่ม download ตรงๆ + watch 'Exporting your scene…'">
                💾 download (direct)
              </button>
              <button class="act ghost" @click=${this["_downloadFullVideo"]} ?disabled=${!!this["busy"]} title="ลำดับเก่า: Download dropdown → Full Video → 720p">
                💾 download (legacy menu)
              </button>
            </div>
            <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
              <strong>direct</strong>: หน้า /scene/ ใหม่ (ปกติใช้อันนี้) — click ปุ่มเดียวเริ่มโหลด<br>
              <strong>legacy menu</strong>: หน้า /edit/ เก่า — มี dropdown menu
            </div>
            <div style="margin-top:8px;padding-top:8px;border-top:1px dashed var(--agx-border)">
              <button class="act success" style="width:100%" @click=${this["_fullPipelineDebug"]} ?disabled=${!!this["busy"]}>
                🚀 download + fetch + upload TikTok (draft)
              </button>
              <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
                ต้องเปิด 2 tab ก่อน: <strong>labs.google/fx/tools/flow</strong> (clip ที่จะโหลด) +
                <strong>tiktok.com/tiktokstudio/upload</strong> (login แล้ว) →
                กดปุ่มนี้ → จะลง TikTok drafts ไม่โพสจริง
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
            ✂ Trim clip — drag right handle ไปทางซ้าย/ขวา (ผ่าน CDP)
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 2fr;gap:6px;align-items:center">
            <input type="number" .value=${Number["isFinite"](this["trimClipIndex"]) ? String(this["trimClipIndex"]) : ""}
              @input=${(_0x1c11b3) => {
      const _0x3f6183 = parseInt(_0x1c11b3["target"]["value"], 10);
      this["trimClipIndex"] = Number["isFinite"](_0x3f6183) ? _0x3f6183 : -2;
    }}
              title="clip index — -1=ล่าสุด, -2=ก่อนสุดท้าย, 0+=ตำแหน่ง"
            >
            <input type="number" .value=${Number["isFinite"](this["trimDx"]) ? String(this["trimDx"]) : ""}
              @input=${(_0x9b82bd) => {
      const _0xcd5146 = parseInt(_0x9b82bd["target"]["value"], 10);
      this["trimDx"] = Number["isFinite"](_0xcd5146) ? _0xcd5146 : -32;
    }}
              title="dx px — ลบ=ลากซ้าย(ย่อ), บวก=ลากขวา(ยืด)"
            >
            <button class="act danger" @click=${this["_trimClip"]} ?disabled=${!!this["busy"]}>
              trim (idx ${this["trimClipIndex"]}, ${this["trimDx"] > 0 ? "+" : ""}${this["trimDx"]}px)
            </button>
          </div>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
            ลองค่า dx ต่างๆ จนเจอ "1 วินาที" = ? px (ขึ้นกับ zoom timeline) แล้วจดไว้ — zoom 100% = 100px/วินาที
          </div>
          <label style="display:flex;align-items:center;gap:6px;font-size:10px;margin-top:6px;color:var(--agx-text-muted);cursor:pointer">
            <input type="checkbox" .checked=${this["trimUseCdp"]}
              @change=${(_0x4bd265) => this["trimUseCdp"] = _0x4bd265["target"]["checked"]}
            >
            <span>Force CDP drag (มี banner — coords อาจ shift) — default = synthetic PointerEvent (dnd-kit รับ)</span>
          </label>
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px">
            🗑 Delete clip — right-click ที่ clip → context menu → "Delete"
          </div>
          <div style="display:grid;grid-template-columns:1fr 3fr;gap:6px;align-items:center">
            <input type="number" .value=${Number["isFinite"](this["deleteClipIndex"]) ? String(this["deleteClipIndex"]) : ""}
              @input=${(_0x777a73) => {
      const _0x570858 = parseInt(_0x777a73["target"]["value"], 10);
      this["deleteClipIndex"] = Number["isFinite"](_0x570858) ? _0x570858 : -1;
    }}
              title="clip index — -1=ล่าสุด(EN-1), -2=ก่อนสุดท้าย, 0+=ตำแหน่ง"
            >
            <button class="act danger" @click=${this["_deleteClipViaContextMenu"]} ?disabled=${!!this["busy"]}>
              🗑 Right-click → Delete clip[${this["deleteClipIndex"]}]
            </button>
          </div>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-top:4px;font-style:italic">
            ใช้ตอน Failed-recovery — dispatch contextmenu(button=2) ที่ clip → รอ menu เปิด → click "Delete" menuitem
          </div>
        </div>
      </div>

      <!-- Card 6: Full pipeline (extend 2 clips) -->
      <div class="card">
        <div class="card-title">
          <span class="dot" style="background:#06c755"></span> 🎬 Full pipeline — Extend 2 clips (15s)
        </div>
        <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.5">
          เริ่มจากหน้า /edit/ ที่มี clip 1 อยู่แล้ว → workflow:
          <br>baseline [6] → [1][2][3][4] → wait → [6]=EN → [10] wait clip[EN-1] → [6] refresh →
          <br>[5] click clip[<strong>EN-2</strong>] → [9] trim clip[<strong>EN-2</strong>] <strong>-100px</strong> → ${this["pipelineOutputMode"] === "download" ? "[7]" : "[8]"}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
          <label style="font-size:10px;color:var(--agx-text-secondary);display:flex;flex-direction:column;gap:2px">
            <span>รอหลัง Create (วินาที)</span>
            <input type="number" .value=${String(this["pipelinePostCreateWaitSec"])}
              @input=${(_0x3d3b27) => {
      const _0x541b23 = parseInt(_0x3d3b27["target"]["value"], 10);
      this["pipelinePostCreateWaitSec"] = Number["isFinite"](_0x541b23) && _0x541b23 > 0 ? _0x541b23 : 10;
    }}
              title="รอ Flow เปลี่ยน /edit/ → /scene/"
            >
          </label>
          <label style="font-size:10px;color:var(--agx-text-secondary);display:flex;flex-direction:column;gap:2px">
            <span>Output</span>
            <select
              .value=${this["pipelineOutputMode"]}
              @change=${(_0x259b46) => this["pipelineOutputMode"] = _0x259b46["target"]["value"]}
              style="padding:6px;background:var(--agx-bg-surface);color:var(--agx-text-primary);border:1px solid var(--agx-border);border-radius:6px"
            >
              <option value="download">[7] download only</option>
              <option value="tiktok">[8] download + TikTok draft</option>
            </select>
          </label>
        </div>
        <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;font-style:italic">
          ใช้ prompt + match จาก Card 5 | trim hard-coded -100px (= 1 วินาที)
        </div>
        <button class="act success" style="width:100%;padding:10px" @click=${this["_runExtend2Pipeline"]} ?disabled=${!!this["busy"]}>
          🎬 รัน pipeline (extend 2 clips → ${this["pipelineOutputMode"] === "download" ? "download" : "TikTok draft"})
        </button>
      </div>

      <!-- Card 7: Full pipeline N clips (loop) -->
      <div class="card">
        <div class="card-title">
          <span class="dot" style="background:#a855f7"></span> 🔁 Full pipeline — Extend N clips (loop)
        </div>
        <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.5">
          วน ${this["pipelineNTotalClips"] - 1} iterations สร้าง clip 2 ถึง ${this["pipelineNTotalClips"]} ต่อกัน:
          <br>iter 1: baseline → [1][2][3][4] → wait 10s → [10] → [5]+[9] clip[EN-2]
          <br>iter 2+: [5] click EN-1 → [1][2][3][4] → [10] → [5]+[9] clip[EN-2] (ไม่รอ 10s)
          <br>retry ทุก iteration max 3 ครั้ง ถ้า [10] fail
          <br>สรุปยาว: ${this["pipelineNTotalClips"]} × 7s + 1s = <strong>${(this["pipelineNTotalClips"] - 1) * 7 + 8}s</strong> (clip สุดท้ายเต็ม 8s)
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:6px">
          <label style="font-size:10px;color:var(--agx-text-secondary);display:flex;flex-direction:column;gap:2px">
            <span>Total clips (N)</span>
            <input type="number" min="2" max="10" .value=${String(this["pipelineNTotalClips"])}
              @input=${(_0x17e8ba) => {
      const _0x4103d1 = parseInt(_0x17e8ba["target"]["value"], 10);
      this["pipelineNTotalClips"] = Number["isFinite"](_0x4103d1) && _0x4103d1 >= 2 && _0x4103d1 <= 10 ? _0x4103d1 : 3;
    }}
              title="จำนวน clip ทั้งหมด (2-10)"
            >
          </label>
          <label style="font-size:10px;color:var(--agx-text-secondary);display:flex;flex-direction:column;gap:2px">
            <span>รอ iter 1 (s)</span>
            <input type="number" .value=${String(this["pipelinePostCreateWaitSec"])}
              @input=${(_0x450919) => {
      const _0x135dfe = parseInt(_0x450919["target"]["value"], 10);
      this["pipelinePostCreateWaitSec"] = Number["isFinite"](_0x135dfe) && _0x135dfe > 0 ? _0x135dfe : 10;
    }}
              title="iter 1 รอ Flow เปลี่ยน /edit/→/scene/ (iter 2+ ไม่รอ)"
            >
          </label>
          <label style="font-size:10px;color:var(--agx-text-secondary);display:flex;flex-direction:column;gap:2px">
            <span>Output</span>
            <select
              .value=${this["pipelineOutputMode"]}
              @change=${(_0x5aa373) => this["pipelineOutputMode"] = _0x5aa373["target"]["value"]}
              style="padding:6px;background:var(--agx-bg-surface);color:var(--agx-text-primary);border:1px solid var(--agx-border);border-radius:6px"
            >
              <option value="download">[7] download</option>
              <option value="tiktok">[8] TikTok draft</option>
            </select>
          </label>
        </div>
        <button class="act success" style="width:100%;padding:10px" @click=${this["_runExtendNPipeline"]} ?disabled=${!!this["busy"]}>
          🔁 รัน pipeline N=${this["pipelineNTotalClips"]} clips → ${this["pipelineOutputMode"] === "download" ? "download" : "TikTok draft"}
        </button>
      </div>

      <!-- Card 8: Story Mode — Add to Scene (submenu DOM 2026-05-20) -->
      <div class="card">
        <div class="card-title">
          <span class="dot" style="background:#22d3ee"></span> 🎬 Story Mode — Add latest video to Scene
        </div>
        <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:8px;line-height:1.5">
          Right-click video tile ล่าสุด → "Add to scene" → <strong>submenu</strong> เปิด:
          <br>• <strong>Create Scene</strong> (เสมอตัวแรก) — ใช้กับคลิป 1
          <br>• <strong>Untitled Scene MM-DD HH:mm:ss</strong> (ตัวที่ 2+) — ใช้กับคลิป 2+
          <br>auto = ถ้ามี option ต่อจาก Create Scene → append; ถ้าไม่มี → create
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;margin-bottom:8px">
          <button class="act success" @click=${() => this["_addClipToScene"]("create")} ?disabled=${!!this["busy"]}>
            create (คลิป 1)
          </button>
          <button class="act success" @click=${() => this["_addClipToScene"]("append")} ?disabled=${!!this["busy"]}>
            append (คลิป 2+)
          </button>
          <button class="act" @click=${() => this["_addClipToScene"]("auto")} ?disabled=${!!this["busy"]}>
            auto
          </button>
        </div>

        <div style="padding-top:8px;border-top:1px dashed var(--agx-border)">
          <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.5">
            หลัง Add to Scene → กดเข้า Scene Builder page:
            <br>1. click "View scenes" (icon=movie + sr-only label) → tile gallery เปิด
            <br>2. click tile ล่าสุด (มี <code>&lt;a href="/scene/..."&gt;</code>)
            <br>3. รอ URL → <code>/scene/{sceneId}</code> (timeout 10s) — พร้อมให้ Download (direct)
          </div>
          <button class="act success" style="width:100%" @click=${this["_openLatestScene"]} ?disabled=${!!this["busy"]}>
            🎬 Open latest scene → /scene/
          </button>
        </div>

        <div style="margin-top:10px;padding-top:8px;border-top:2px solid var(--agx-border)">
          <div style="font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px;font-weight:600">
            🧪 Full pipeline test
          </div>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-bottom:6px;line-height:1.5">
            sequence: Add×3 → Open Scene → Download (direct)
            <br>⚠ ต้องมีวิดีโออย่างน้อย 3 ตัวใน Videos tab (ตัวล่าสุดจะถูกหยิบทั้ง 3 ครั้ง)
            <br>Add 1 = create (new scene), Add 2-3 = append (existing scene)
            <br>รอ 2.5s ระหว่าง add แต่ละครั้ง + 2s ก่อน download
          </div>
          <button class="act success" style="width:100%;padding:10px;background:#22d3ee" @click=${this["_runStoryFullTest"]} ?disabled=${!!this["busy"]}>
            🎬 รัน Story Full Test (Add×3 → Scene → Download)
          </button>
        </div>
      </div>

      <!-- Log -->
      <div class="card">
        <div class="card-title">
          <span class="dot"></span> Live log
          ${this["busy"] ? b`<span style="color:#f59e0b;font-weight:600;">⏳ ${this["busy"]}</span>` : ""}
        </div>
        <div class="log-actions">
          <button @click=${() => this["_clearLog"]()}>clear</button>
          <button @click=${() => navigator["clipboard"]["writeText"](this["logs"]["map"]((_0x848de5) => _0x848de5["ts"] + " [" + _0x848de5["level"] + "] " + _0x848de5["msg"])["join"]("\n"))}>copy</button>
        </div>
        <div class="log" id="log-area">
          ${this["logs"]["length"] === 0 ? b`<div style="color:#475569;">(ยังไม่มี log)</div>` : this["logs"]["map"]((_0x2f3677) => b`
                  <div class="log-row">
                    <span class="log-ts">${_0x2f3677["ts"]}</span>
                    <span class="log-${_0x2f3677["level"]}">${_0x2f3677["msg"]}</span>
                  </div>
                `)}
        </div>
      </div>
    `;
  }
};
AgxDebugPanel["styles"] = i$3`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100vh;
      padding: 8px;
      overflow-y: auto;
      overflow-x: hidden;
      font-family: var(--agx-font-thai, sans-serif);
      color: var(--agx-text-primary, #f0f4f8);
      font-size: 12px;
      /* Scrollbar style — thin + theme-matched */
      scrollbar-width: thin;
      scrollbar-color: var(--agx-border, #2a3441) transparent;
    }
    :host::-webkit-scrollbar { width: 8px; }
    :host::-webkit-scrollbar-track { background: transparent; }
    :host::-webkit-scrollbar-thumb {
      background: var(--agx-border, #2a3441);
      border-radius: 4px;
    }
    :host::-webkit-scrollbar-thumb:hover { background: var(--agx-accent, #4A8DFF); }

    .topbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 4px 10px;
      margin: -8px -8px 10px;       /* extend to host edges */
      padding-left: 12px;
      padding-right: 12px;
      border-bottom: 1px solid var(--agx-border, #2a3441);
      /* Stick to top while scrolling */
      position: sticky;
      top: -8px;                    /* offset host padding-top */
      background: var(--agx-bg, #0c1118);
      z-index: 10;
      backdrop-filter: blur(6px);
    }
    .title {
      flex: 1;
      font-weight: 700;
      font-size: 14px;
    }
    .badge {
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 4px;
      background: var(--agx-warning, #f59e0b);
      color: #111;
      font-weight: 700;
    }
    .close {
      background: transparent;
      color: var(--agx-text-muted, #94a3b8);
      border: 1px solid var(--agx-border, #2a3441);
      border-radius: 6px;
      padding: 4px 10px;
      cursor: pointer;
      font-size: 11px;
    }
    .close:hover { color: var(--agx-text-primary); border-color: var(--agx-accent); }

    .status {
      font-size: 10px;
      color: var(--agx-text-muted, #94a3b8);
      padding: 4px 8px;
      background: rgba(255,255,255,0.03);
      border-radius: 6px;
      margin-bottom: 8px;
      font-family: ui-monospace, monospace;
      word-break: break-all;
    }
    .status .ok { color: #10b981; }
    .status .no { color: #ef4444; }

    .card {
      background: var(--agx-bg-surface, #1a2330);
      border: 1px solid var(--agx-border, #2a3441);
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .card-title {
      font-size: 11px;
      font-weight: 600;
      color: var(--agx-text-secondary, #cbd5e1);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .card-title .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--agx-accent, #4A8DFF);
    }

    .grid3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6px;
    }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .grid1 { display: grid; grid-template-columns: 1fr; gap: 6px; }

    button.act {
      background: var(--agx-gradient-primary, #4A8DFF);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 8px 6px;
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      transition: opacity 150ms;
    }
    button.act:hover:not(:disabled) { opacity: 0.85; }
    button.act:disabled { opacity: 0.4; cursor: not-allowed; }
    button.act.ghost {
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--agx-border, #2a3441);
      color: var(--agx-text-secondary, #cbd5e1);
    }
    button.act.danger { background: #ef4444; }
    button.act.success { background: #10b981; }
    button.act.warn { background: #f59e0b; color: #111; }

    .full { grid-column: 1 / -1; }

    textarea, input[type=text], input[type=number] {
      width: 100%;
      box-sizing: border-box;
      background: var(--agx-bg-deep, #0a1118);
      color: var(--agx-text-primary, #f0f4f8);
      border: 1px solid var(--agx-border, #2a3441);
      border-radius: 6px;
      padding: 6px 8px;
      font-size: 11px;
      font-family: inherit;
      margin-bottom: 6px;
    }
    textarea { resize: vertical; min-height: 50px; }

    input[type=file] {
      width: 100%;
      font-size: 10px;
      color: var(--agx-text-muted, #94a3b8);
      margin-bottom: 6px;
    }

    .file-info {
      font-size: 10px;
      color: var(--agx-text-muted, #94a3b8);
      margin-bottom: 6px;
      font-family: ui-monospace, monospace;
    }

    .log {
      background: var(--agx-bg-deep, #0a1118);
      border: 1px solid var(--agx-border, #2a3441);
      border-radius: 6px;
      padding: 8px;
      max-height: 240px;
      overflow-y: auto;
      font-family: ui-monospace, monospace;
      font-size: 10px;
      line-height: 1.5;
    }
    .log-row { display: flex; gap: 6px; padding: 1px 0; word-break: break-all; }
    .log-ts { color: #475569; flex-shrink: 0; }
    .log-info { color: #cbd5e1; }
    .log-ok   { color: #10b981; }
    .log-warn { color: #f59e0b; }
    .log-err  { color: #ef4444; }

    .log-actions {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-bottom: 6px;
    }
    .log-actions button {
      background: transparent;
      border: 1px solid var(--agx-border);
      color: var(--agx-text-muted);
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 10px;
    }
  `, __decorateClass$e([r()], AgxDebugPanel["prototype"], "logs", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "flowTabId", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "tiktokTabId", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "flowUrl", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "prompt", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "fileDataUrl", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "fileName", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "busy", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "extendMatch", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "extendPrompt", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "clickClipIndex", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "clickClipUseCdp", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "snapshottedClipCount", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "pipelineOutputMode", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "pipelinePostCreateWaitSec", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "pipelineNTotalClips", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "trimClipIndex", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "trimDx", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "trimUseCdp", 2), __decorateClass$e([r()], AgxDebugPanel["prototype"], "deleteClipIndex", 2), __decorateClass$e([e("#log-area")], AgxDebugPanel["prototype"], "logArea", 2), AgxDebugPanel = __decorateClass$e([t$1("agx-debug-panel")], AgxDebugPanel);
const log$9 = createLogger("ProductFormat");
const EXPORT_MODE = "autogenx";
const EXPORT_VERSION = "2.0";
function isDataUri(_0x86c427) {
  return typeof _0x86c427 === "string" && _0x86c427["startsWith"]("data:");
}
async function urlToDataUri(_0x339b54) {
  const _0x537431 = await fetch(_0x339b54);
  if (!_0x537431["ok"]) throw new Error("fetch " + _0x537431["status"] + " " + _0x537431["statusText"]);
  const _0x3ca021 = await _0x537431["blob"]();
  return await new Promise((_0x5cd2c1, _0x1b9995) => {
    const _0x504e66 = new FileReader();
    _0x504e66["onloadend"] = () => _0x5cd2c1(_0x504e66["result"]), _0x504e66["onerror"] = () => _0x1b9995(_0x504e66["error"]), _0x504e66["readAsDataURL"](_0x3ca021);
  });
}
async function normalizeImageList(_0x648b94, _0x36dee8) {
  const _0x166e4f = _0x648b94["length"], _0x175193 = [];
  for (let _0x17ee2b = 0; _0x17ee2b < _0x166e4f; _0x17ee2b++) {
    const _0x22f141 = _0x648b94[_0x17ee2b];
    if (!_0x22f141) {
      _0x36dee8 == null ? void 0 : _0x36dee8(_0x17ee2b + 1, _0x166e4f);
      continue;
    }
    if (isDataUri(_0x22f141)) {
      _0x175193["push"](_0x22f141), _0x36dee8 == null ? void 0 : _0x36dee8(_0x17ee2b + 1, _0x166e4f);
      continue;
    }
    try {
      _0x175193["push"](await urlToDataUri(_0x22f141));
    } catch (_0x388e7b) {
      log$9["warn"]("Failed to fetch " + _0x22f141["slice"](0, 60) + "...: " + _0x388e7b);
    }
    _0x36dee8 == null ? void 0 : _0x36dee8(_0x17ee2b + 1, _0x166e4f);
  }
  return _0x175193;
}
function wrapExport(_0x108b69) {
  return { "mode": EXPORT_MODE, "version": EXPORT_VERSION, "exportDate": (/* @__PURE__ */ new Date())["toISOString"](), "productCount": _0x108b69["length"], "products": _0x108b69 };
}
function unwrapImport(_0x34bf70) {
  if (Array["isArray"](_0x34bf70)) return _0x34bf70;
  if (_0x34bf70 && typeof _0x34bf70 === "object") {
    const _0x591c62 = _0x34bf70["products"];
    if (Array["isArray"](_0x591c62)) return _0x591c62;
  }
  throw new Error('ไม่พบรายการสินค้าในไฟล์ (ต้องเป็น array หรือมี field "products")');
}
var __defProp$d = Object["defineProperty"], __getOwnPropDesc$d = Object["getOwnPropertyDescriptor"], __decorateClass$d = (_0x29b2c2, _0x341a7e, _0x4affa4, _0x24c88f) => {
  var _0x206758 = _0x24c88f > 1 ? void 0 : _0x24c88f ? __getOwnPropDesc$d(_0x341a7e, _0x4affa4) : _0x341a7e;
  for (var _0x3df453 = _0x29b2c2["length"] - 1, _0x26a89e; _0x3df453 >= 0; _0x3df453--) if (_0x26a89e = _0x29b2c2[_0x3df453]) _0x206758 = (_0x24c88f ? _0x26a89e(_0x341a7e, _0x4affa4, _0x206758) : _0x26a89e(_0x206758)) || _0x206758;
  if (_0x24c88f && _0x206758) __defProp$d(_0x341a7e, _0x4affa4, _0x206758);
  return _0x206758;
};
const log$8 = createLogger("AutoMode"), TEXT_COLOR_OPTIONS = TEXT_COLORS["map"]((_0x1aa6bb) => {
  const _0xdfbfc3 = _0x1aa6bb["useCase"];
  return { "id": _0x1aa6bb["id"], "label": _0xdfbfc3 ? _0x1aa6bb["label"] + " — " + _0xdfbfc3 : _0x1aa6bb["label"] };
});
function toLocalYMD$3(_0x260217) {
  const _0x2b5de9 = _0x260217["getFullYear"](), _0x305137 = String(_0x260217["getMonth"]() + 1)["padStart"](2, "0"), _0x5652ac = String(_0x260217["getDate"]())["padStart"](2, "0");
  return _0x2b5de9 + "-" + _0x305137 + "-" + _0x5652ac;
}
let AgxAutoMode = class extends i {
  constructor() {
    super(...arguments), this["products"] = [], this["aspectRatio"] = "9:16", this["mode"] = "full", this["imageCount"] = "1", this["clipCount"] = "1", this["videoModel"] = "veo-3.1-lite-lp", this["videoDuration"] = OMNI_FLASH_DURATION_DEFAULT, this["imageModel"] = "nano-banana-pro", this["scriptStyle"] = "normal", this["modelType"] = "from_image", this["voiceType"] = "adult_female", this["imageStyle"] = "clean_minimal", this["videoStyle"] = "professional", this["imageCameraAngle"] = "medium", this["videoCameraMovement"] = "static", this["poseStyle"] = "none", this["sceneType"] = "none", this["customSceneDesc"] = "", this["textColor"] = "white", this["textPosition"] = "bottom", this["promptLanguage"] = "th", this["videoPromptStyle"] = "v1", this["extraAIInstruction"] = "", this["lighting"] = "natural", this["customVoiceDesc"] = "", this["lipSync"] = !![], this["customImageText"] = "", this["imageNegativeWords"] = "", this["customSpeech"] = "", this["forceCustomSpeech"] = ![], this["openingSpeech"] = "", this["negativeSpeech"] = "", this["useImageAI"] = !![], this["useVideoAI"] = !![], this["slowUploadMode"] = ![], this["customUploadWaitSec"] = 20, this["productTabs"] = {}, this["loopEnabled"] = ![], this["loopCount"] = 1, this["loopDelay"] = "60", this["productDelayEnabled"] = ![], this["productDelay"] = "60", this["loopAllEnabled"] = ![], this["loopAllCount"] = 2, this["saveClip"] = ![], this["clipQuality"] = "720p", this["autoPost"] = ![], this["postType"] = "draft", this["noBasket"] = ![], this["scheduleDate"] = toLocalYMD$3(/* @__PURE__ */ new Date()), this["scheduleHour"] = String((/* @__PURE__ */ new Date())["getHours"]())["padStart"](2, "0"), this["scheduleMinute"] = (() => {
      const _0x32080c = (/* @__PURE__ */ new Date())["getMinutes"](), _0x5eb7c2 = Math["ceil"](_0x32080c / 5) * 5;
      return String(_0x5eb7c2 >= 60 ? 55 : _0x5eb7c2)["padStart"](2, "0");
    })(), this["scheduleInterval"] = 30, this["ingredientMode"] = ![], this["multiSceneEnabled"] = ![], this["sceneCount"] = 2, this["assemblyMode"] = "extend", this["extendScene"] = ![], this["clipDuration"] = "32", this["running"] = ![], this["showLog"] = ![], this["logEntries"] = [], this["importExportBusy"] = ![], this["importExportLabel"] = "", this["importExportDone"] = 0, this["importExportTotal"] = 0, this["dialogueGenerating"] = {}, this["preparing"] = {}, this["_messageListener"] = null;
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["_loadProducts"](), this["_loadSettings"](), this["_messageListener"] = (_0x268f92) => {
      const _0x39416b = _0x268f92["type"];
      if (_0x39416b === "PIPELINE_LOG") {
        const _0x183ee4 = _0x268f92["payload"];
        this["_addLog"](_0x183ee4["level"] || "info", _0x183ee4["message"] || "", _0x183ee4["replace"] === !![]);
      } else {
        if (_0x39416b === "PIPELINE_ERROR") {
          const _0x22ec1f = _0x268f92["payload"];
          this["_addLog"]("error", _0x22ec1f["error"] || "Unknown error"), this["running"] = ![];
        } else _0x39416b === "PIPELINE_DONE" && (this["_addLog"]("success", "Pipeline เสร็จสิ้น"), this["running"] = ![]);
      }
    }, chrome["runtime"]["onMessage"]["addListener"](this["_messageListener"]);
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_messageListener"] && (chrome["runtime"]["onMessage"]["removeListener"](this["_messageListener"]), this["_messageListener"] = null);
  }
  async ["_loadProducts"]() {
    try {
      const _0x190324 = await chrome["storage"]["local"]["get"]([AgxAutoMode["STORAGE_KEY"]]), _0x51fd3d = _0x190324[AgxAutoMode["STORAGE_KEY"]];
      if (Array["isArray"](_0x51fd3d)) {
        let _0x44f1be = ![];
        const _0x23553e = _0x51fd3d["map"]((_0x52eca7) => {
          let _0x147fb9 = _0x52eca7;
          return !_0x147fb9["productId"] && _0x147fb9["basketName"] && (_0x44f1be = !![], _0x147fb9 = { ..._0x147fb9, "productId": _0x147fb9["basketName"], "basketName": "" }), _0x147fb9["basketName"] && _0x147fb9["basketName"] === _0x147fb9["productId"] && (_0x44f1be = !![], _0x147fb9 = { ..._0x147fb9, "basketName": "" }), _0x147fb9;
        });
        this["products"] = _0x23553e, _0x44f1be && (this["_saveProducts"](), log$8["info"]("Migrated old products: lifted legacy basketName→productId / cleared duplicate basketName")), log$8["info"]("Loaded " + _0x23553e["length"] + " products from storage");
      }
    } catch (_0x2a3392) {
      log$8["error"]("Failed to load products", _0x2a3392);
    }
  }
  ["_saveProducts"]() {
    chrome["storage"]["local"]["set"]({ [AgxAutoMode["STORAGE_KEY"]]: this["products"] })["catch"]((_0x2f79e0) => {
      log$8["error"]("Failed to save products", _0x2f79e0);
    });
  }
  async ["_loadSettings"]() {
    try {
      const _0x200eae = await chrome["storage"]["local"]["get"]([AgxAutoMode["SETTINGS_KEY"]]), _0x1df765 = _0x200eae[AgxAutoMode["SETTINGS_KEY"]];
      if (!_0x1df765 || typeof _0x1df765 !== "object") return;
      for (const _0x1dea94 of AgxAutoMode["PERSIST_FIELDS"]) {
        _0x1df765[_0x1dea94] !== void 0 && (this[_0x1dea94] = _0x1df765[_0x1dea94]);
      }
      this["assemblyMode"] === "scenebuilder" && (this["assemblyMode"] = "extend");
      this["videoModel"] === "veo-3.1-fast-lp" && (this["videoModel"] = "veo-3.1-lite-lp");
      if (!SCRIPT_STYLES["some"]((_0x448dd2) => _0x448dd2["id"] === this["scriptStyle"])) {
        const _0x3bcd89 = { "friendly": "normal", "professional": "posh", "energetic": "exciting", "calm": "peaceful", "motivational": "resilient", "mysterious": "whisper", "funny": "cheeky", "educational": "confident", "dramatic": "action", "isaan": "isan", "southern": "isan", "crude": "raw", "creepy": "haunting", "debate": "confident", "gossip": "cheeky" };
        this["scriptStyle"] = _0x3bcd89[this["scriptStyle"]] || "normal";
      }
      log$8["info"]("Loaded " + AgxAutoMode["PERSIST_FIELDS"]["length"] + " settings from storage");
    } catch (_0x52a604) {
      log$8["error"]("Failed to load settings", _0x52a604);
    }
  }
  ["_saveSettings"]() {
    const _0x305405 = {};
    for (const _0x239106 of AgxAutoMode["PERSIST_FIELDS"]) {
      _0x305405[_0x239106] = this[_0x239106];
    }
    chrome["storage"]["local"]["set"]({ [AgxAutoMode["SETTINGS_KEY"]]: _0x305405 })["catch"]((_0x1dda0b) => {
      log$8["error"]("Failed to save settings", _0x1dda0b);
    });
  }
  ["updated"](_0x1cb64c) {
    _0x1cb64c["has"]("products") && this["_saveProducts"]();
    for (const _0x12e1e0 of AgxAutoMode["PERSIST_FIELDS"]) {
      if (_0x1cb64c["has"](_0x12e1e0)) {
        this["_saveSettings"]();
        break;
      }
    }
  }
  ["_addLog"](_0xc24b05, _0x55be48, _0x39d575 = ![]) {
    _0x39d575 && this["logEntries"]["length"] > 0 ? this["logEntries"] = [...this["logEntries"]["slice"](0, -1), { "level": _0xc24b05, "message": _0x55be48, "timestamp": Date["now"]() }] : this["logEntries"] = [...this["logEntries"], { "level": _0xc24b05, "message": _0x55be48, "timestamp": Date["now"]() }], this["showLog"] = !![], this["updateComplete"]["then"](() => {
      var _a2;
      const _0x4451a2 = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["querySelector"]("#autoLog");
      if (_0x4451a2) _0x4451a2["entries"] = this["logEntries"];
    });
  }
  ["_clearLog"]() {
    this["logEntries"] = [];
  }
  ["render"]() {
    return b`
      <!-- Product Sets -->
      <agx-drawer label="📦 รายการสินค้า (${this["products"]["length"]})" open>
        <div class="toolbar">
          <div class="toolbar-left">
            <button class="toolbar-btn" @click=${this["_addProduct"]} ?disabled=${this["importExportBusy"]}>+ เพิ่มสินค้า</button>
            <button class="toolbar-btn" @click=${this["_importProducts"]} ?disabled=${this["importExportBusy"]} title="นำเข้า JSON">📂</button>
            <button class="toolbar-btn" @click=${this["_exportProducts"]} ?disabled=${this["importExportBusy"] || this["products"]["length"] === 0} title="ส่งออก JSON">💾</button>
            ${this["products"]["length"] > 0 ? b`
              <button class="toolbar-btn danger" @click=${this["_clearAllProducts"]} ?disabled=${this["importExportBusy"]} title="ล้างสินค้าทั้งหมด">ล้าง</button>
            ` : ""}
          </div>
          <span class="count">${this["products"]["length"]}/50</span>
        </div>

        ${this["importExportBusy"] ? b`
          <div class="progress-wrap">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${this["importExportTotal"] > 0 ? Math["round"](this["importExportDone"] / this["importExportTotal"] * 100) : 0}%"></div>
            </div>
            <div class="progress-text">${this["importExportLabel"]} ${this["importExportTotal"] > 0 ? this["importExportDone"] + "/" + this["importExportTotal"] : ""}</div>
          </div>
        ` : ""}

        ${this["products"]["length"] === 0 ? b`<div class="empty-state">กดปุ่ม "+ เพิ่มสินค้า" เพื่อเริ่มต้น</div>` : this["products"]["map"]((_0x387934, _0x15884f) => this["_renderProductCard"](_0x387934, _0x15884f))}
      </agx-drawer>

      <input class="hidden-input" type="file" id="importInput" accept=".json" @change=${this["_onImportFile"]} />

      <!-- Basic Settings -->
      <agx-drawer label="${t("auto.basicSettings")}" open>
        <div class="form-row">
          <agx-select
            label="${t("auto.aspectRatio")}"
            .value=${this["aspectRatio"]}
            .options=${ASPECT_RATIOS["map"]((_0x1755f8) => ({ "id": _0x1755f8["id"], "label": _0x1755f8["label"] }))}
            @change=${(_0x22dcab) => {
      this["aspectRatio"] = _0x22dcab["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="โหมด"
            .value=${this["mode"]}
            .options=${[{ "id": "full", "label": "ภาพ + วิดีโอ" }, { "id": "imageOnly", "label": "ภาพอย่างเดียว" }, { "id": "videoOnly", "label": "วิดีโออย่างเดียว" }]}
            @change=${(_0x2689f8) => {
      this["mode"] = _0x2689f8["detail"]["value"];
    }}
          ></agx-select>
        </div>

        <div class="form-row">
          <agx-select
            label="${t("auto.imageCount")}"
            .value=${this["imageCount"]}
            .options=${["1", "2", "3", "4"]["map"]((_0x11576c) => ({ "id": _0x11576c, "label": _0x11576c + " ภาพ" }))}
            @change=${(_0x341482) => {
      this["imageCount"] = _0x341482["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="${t("auto.clipCount")}"
            .value=${this["clipCount"]}
            .options=${["1", "2", "3", "4"]["map"]((_0x2c44ea) => ({ "id": _0x2c44ea, "label": _0x2c44ea + " คลิป" }))}
            @change=${(_0x1097e5) => {
      this["clipCount"] = _0x1097e5["detail"]["value"];
    }}
          ></agx-select>
        </div>

        <agx-select
          label="${t("auto.videoModel")}"
          .value=${this["videoModel"]}
          .options=${VIDEO_MODELS["map"]((_0x2999ec) => ({ "id": _0x2999ec["id"], "label": _0x2999ec["label"] }))}
          @change=${(_0x393c2d) => {
      this["videoModel"] = _0x393c2d["detail"]["value"];
    }}
        ></agx-select>

        ${this["videoModel"] === "omni-flash" ? b`
          <div style="margin-top:6px">
            <agx-select
              label="⏱ ระยะเวลาคลิป (Omni Flash)"
              .value=${String(this["videoDuration"])}
              .options=${OMNI_FLASH_DURATIONS["map"]((_0x1c748e) => ({ "id": String(_0x1c748e), "label": _0x1c748e + " วินาที" }))}
              @change=${(_0x3e7d36) => {
      this["videoDuration"] = Number(_0x3e7d36["detail"]["value"]) || OMNI_FLASH_DURATION_DEFAULT;
    }}
            ></agx-select>
            <div style="font-size:10px;color:var(--agx-text-muted);margin-top:2px">
              ถ้าบัญชี Flow ไม่มี Omni Flash → ระบบจะ fallback เป็น Lite ฟรี → Lite อัตโนมัติ
            </div>
          </div>
        ` : ""}

        <div style="margin-top:10px">
          <agx-select
            label="🌐 ภาษา Prompt"
            .value=${this["promptLanguage"]}
            .options=${PROMPT_LANGUAGES["map"]((_0x3e559e) => ({ "id": _0x3e559e["id"], "label": _0x3e559e["label"] }))}
            @change=${(_0x447a50) => {
      this["promptLanguage"] = _0x447a50["detail"]["value"];
    }}
          ></agx-select>
        </div>
        <div style="margin-top:8px">
          <agx-select
            label="🎬 รูปแบบ Prompt วิดีโอ"
            .value=${this["videoPromptStyle"]}
            .options=${[{ "id": "v1", "label": "V1 — แบบสั้น (template, ไม่ผ่าน AI เขียน Prompt) — แนะนำ" }, { "id": "v2", "label": "V2 — AI เขียน Prompt ละเอียด (แบบเดิม)" }]}
            @change=${(_0x5180dd) => {
      this["videoPromptStyle"] = _0x5180dd["detail"]["value"] === "v2" ? "v2" : "v1";
    }}
          ></agx-select>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-top:2px">V1 = สั้นเรียบแบบ V1 (แนะนำ — สาธิตการใช้สินค้าเฉพาะเมื่อเลือกสไตล์ "รีวิวการใช้งาน/เห็นมืออย่างเดียว/ลองสวมใส่"); ใช้กับทั้งรันปกติและปุ่ม Prepare</div>
        </div>

        <!-- Ingredients mode (Veo 3.1 — preserve product design) -->
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--agx-border-subtle)">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:4px">
            <input
              type="checkbox"
              style="width:15px;height:15px;accent-color:var(--agx-accent)"
              .checked=${this["ingredientMode"]}
              @change=${(_0xd21656) => {
      this["ingredientMode"] = _0xd21656["target"]["checked"];
    }}
            />
            <span style="font-size:12px;color:var(--agx-text-primary);font-weight:600">🧪 ใช้ Ingredients</span>
          </label>
          <div style="font-size:10px;color:var(--agx-text-muted);margin-left:23px;line-height:1.4">
            Veo 3.1 จะใช้รูปสินค้าเป็น reference "ingredient" — แทน Frames mode ปกติ
          </div>
        </div>

        <!-- ต่อฉาก (Multi-scene) — เปิดใช้ตั้งแต่ v2.1.1 (2026-05-21) -->
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--agx-border-subtle)">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:6px">
            <input
              type="checkbox"
              style="width:15px;height:15px;accent-color:var(--agx-accent)"
              .checked=${this["multiSceneEnabled"]}
              @change=${(_0x45c2b0) => {
      this["multiSceneEnabled"] = _0x45c2b0["target"]["checked"];
    }}
            />
            <span style="font-size:12px;color:var(--agx-text-primary);font-weight:600">🎬 ต่อฉาก (Auto Blueprint)</span>
          </label>

          ${this["multiSceneEnabled"] ? b`
            <agx-select
              label="จำนวนฉาก"
              .value=${String(this["sceneCount"])}
              .options=${[2, 3, 4, 5, 6, 7, 8, 9, 10]["map"]((_0xc021eb) => ({ "id": String(_0xc021eb), "label": _0xc021eb + " ฉาก (" + (8 + (_0xc021eb - 1) * 7) + "-" + (8 + (_0xc021eb - 1) * 8) + " วิ)" }))}
              @change=${(_0x526011) => {
      this["sceneCount"] = parseInt(_0x526011["detail"]["value"]);
    }}
            ></agx-select>

            <div style="font-size:11px;color:var(--agx-text-secondary);margin:6px 0 4px">Assembly Mode:</div>
            <div style="display:flex;flex-direction:column;gap:4px">
              <!-- SceneBuilder ปิดใช้ชั่วคราว — รออัพเดทระบบ extract video bytes
              <label style="display:flex;align-items:center;gap:6px;font-size:11px;cursor:pointer">
                <input type="radio" name="assemblyMode" value="scenebuilder"
                  ?checked=${this["assemblyMode"] === "scenebuilder"}
                  @change=${() => {
      this["assemblyMode"] = "scenebuilder";
    }}
                />
                <span>SceneBuilder (ฟรี — แนะนำ)</span>
              </label>
              -->
              <label style="display:flex;align-items:center;gap:6px;font-size:11px;cursor:pointer">
                <input type="radio" name="assemblyMode" value="extend" checked disabled />
                <span>Extend mode (ต่อฉากจากคลิปก่อนหน้า)</span>
              </label>
              <div style="font-size:10px;color:var(--agx-text-muted);margin-top:2px;font-style:italic">
                ℹ SceneBuilder ปิดใช้ชั่วคราว — รออัพเดทระบบ
              </div>
            </div>
          ` : ""}
        </div>
      </agx-drawer>

      <!-- 🖼️ ตั้งค่าภาพ -->
      <agx-drawer label="🖼️ ตั้งค่าภาพ">
        <label style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--agx-text-secondary);margin-bottom:6px;cursor:pointer">
          <input type="checkbox"
            .checked=${this["slowUploadMode"]}
            @change=${(_0x3dbe1f) => {
      this["slowUploadMode"] = _0x3dbe1f["target"]["checked"];
    }} />
          <span>🐢 สำหรับเครื่องที่มีอาการรวนจากการอัพโหลดรูป (เพิ่มเวลารอ)</span>
        </label>
        ${this["slowUploadMode"] ? b`
          <div style="display:flex;align-items:center;gap:6px;margin:0 0 10px 22px;font-size:11px;color:var(--agx-text-secondary)">
            <span>เวลารอหลังอัพโหลด:</span>
            <input type="number"
              min="20" max="120" step="5"
              .value=${String(this["customUploadWaitSec"])}
              @input=${(_0x385a81) => {
      const _0x42b47e = parseInt(_0x385a81["target"]["value"], 10);
      this["customUploadWaitSec"] = isNaN(_0x42b47e) ? 20 : Math["max"](20, Math["min"](120, _0x42b47e));
    }}
              style="width:60px;padding:2px 4px;background:var(--agx-bg3);border:1px solid var(--agx-border);border-radius:4px;color:var(--agx-text);font-size:11px" />
            <span>วินาที (ขั้นต่ำ 20)</span>
          </div>
        ` : ""}
        <label style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--agx-text-secondary);margin-bottom:10px;cursor:pointer">
          <input type="checkbox"
            .checked=${this["useImageAI"]}
            @change=${(_0x348c2a) => {
      this["useImageAI"] = _0x348c2a["target"]["checked"];
    }} />
          <span>🤖 ใช้ API ภายนอกในการสร้างบท (ปิด = ใช้ fallback ของระบบ)</span>
        </label>

        <agx-select
          label="โมเดลรูปภาพ"
          .value=${this["imageModel"]}
          .options=${IMAGE_MODELS["map"]((_0x24d5f2) => ({ "id": _0x24d5f2["id"], "label": _0x24d5f2["label"] }))}
          @change=${(_0x457fc8) => {
      this["imageModel"] = _0x457fc8["detail"]["value"];
    }}
        ></agx-select>

        <div class="form-row" style="margin-top:8px">
          <agx-select
            label="🎨 สไตล์ภาพ"
            .value=${this["imageStyle"]}
            .options=${IMAGE_STYLES["map"]((_0x253919) => ({ "id": _0x253919["id"], "label": _0x253919["label"] }))}
            @change=${(_0x110fc8) => {
      this["imageStyle"] = _0x110fc8["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="📷 มุมกล้อง"
            .value=${this["imageCameraAngle"]}
            .options=${IMAGE_CAMERA_ANGLES["map"]((_0x41a959) => ({ "id": _0x41a959["id"], "label": _0x41a959["label"] }))}
            @change=${(_0xe66313) => {
      this["imageCameraAngle"] = _0xe66313["detail"]["value"];
    }}
          ></agx-select>
        </div>

        <div class="form-row" style="margin-top:8px">
          <agx-select
            label="💡 การจัดแสง"
            .value=${this["lighting"]}
            .options=${LIGHTING_TYPES["map"]((_0x14d057) => ({ "id": _0x14d057["id"], "label": _0x14d057["label"] }))}
            @change=${(_0x4cdcb6) => {
      this["lighting"] = _0x4cdcb6["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="👤 ตัวแบบ"
            .value=${this["modelType"]}
            .options=${MODEL_TYPES["map"]((_0x132491) => ({ "id": _0x132491["id"], "label": _0x132491["label"] }))}
            @change=${(_0x33b0ab) => {
      this["modelType"] = _0x33b0ab["detail"]["value"];
    }}
          ></agx-select>
        </div>

        <!-- ข้อความบนภาพ -->
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--agx-border-subtle)">
          <div style="font-size:11px; color:var(--agx-text-muted); margin-bottom:6px">🏷️ ข้อความบนภาพ</div>

          <div class="form-row">
            <agx-select
              label="สีข้อความ"
              .value=${this["textColor"]}
              .options=${TEXT_COLOR_OPTIONS}
              @change=${(_0xea6a01) => {
      this["textColor"] = _0xea6a01["detail"]["value"];
    }}
            ></agx-select>
            <agx-select
              label="ตำแหน่งข้อความ"
              .value=${this["textPosition"]}
              .options=${TEXT_POSITIONS["map"]((_0x7985d0) => ({ "id": _0x7985d0["id"], "label": _0x7985d0["label"] }))}
              @change=${(_0x111185) => {
      this["textPosition"] = _0x111185["detail"]["value"];
    }}
            ></agx-select>
          </div>
          <div style="margin-top:6px">
            <agx-input
              label="ข้อความบนภาพ"
              placeholder="เช่น: ลด 50%, ของแท้ 100%"
              optional
              .value=${this["customImageText"]}
              @input=${(_0x400590) => {
      this["customImageText"] = _0x400590["detail"]["value"];
    }}
            ></agx-input>
          </div>
          <div style="margin-top:6px">
            <agx-input
              label="คำต้องห้ามบนภาพ"
              placeholder="เช่น: ราคา, 99"
              optional
              .value=${this["imageNegativeWords"]}
              @input=${(_0x46c91c) => {
      this["imageNegativeWords"] = _0x46c91c["detail"]["value"];
    }}
            ></agx-input>
          </div>
        </div>
      </agx-drawer>

      <!-- 🎬 ตั้งค่าวิดีโอ -->
      <agx-drawer label="🎬 ตั้งค่าวิดีโอ">
        <label style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--agx-text-secondary);margin-bottom:10px;cursor:pointer">
          <input type="checkbox"
            .checked=${this["useVideoAI"]}
            @change=${(_0x17f522) => {
      this["useVideoAI"] = _0x17f522["target"]["checked"];
    }} />
          <span>🤖 ใช้ API ภายนอกในการสร้างบท (ปิด = ใช้ fallback ของระบบ)</span>
        </label>

        <div class="form-row" style="margin-top:8px">
          <agx-select
            label="สไตล์วิดีโอ"
            .value=${this["videoStyle"]}
            .options=${VIDEO_STYLES["map"]((_0x5cddcb) => ({ "id": _0x5cddcb["id"], "label": _0x5cddcb["label"] }))}
            @change=${(_0x5e7cc5) => {
      this["videoStyle"] = _0x5e7cc5["detail"]["value"];
      const _0x1d0ba0 = VIDEO_STYLE_POSE_LOCKS[_0x5e7cc5["detail"]["value"]];
      if (_0x1d0ba0) this["poseStyle"] = _0x1d0ba0;
    }}
          ></agx-select>
          <agx-select
            label="🎥 การขยับกล้อง"
            .value=${this["videoCameraMovement"]}
            .options=${VIDEO_CAMERA_MOVEMENTS["map"]((_0x8c984d) => ({ "id": _0x8c984d["id"], "label": _0x8c984d["label"] }))}
            @change=${(_0xbf386) => {
      this["videoCameraMovement"] = _0xbf386["detail"]["value"];
    }}
          ></agx-select>
        </div>

        <div class="form-row" style="margin-top:8px">
          <agx-select
            label="🚶 ท่าทาง${VIDEO_STYLE_POSE_LOCKS[this["videoStyle"]] ? " 🔒" : ""}"
            .value=${this["poseStyle"]}
            .options=${POSE_STYLES["map"]((_0x51af26) => ({ "id": _0x51af26["id"], "label": _0x51af26["label"] }))}
            ?disabled=${!!VIDEO_STYLE_POSE_LOCKS[this["videoStyle"]]}
            @change=${(_0x44defb) => {
      this["poseStyle"] = _0x44defb["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="🏞️ ฉาก"
            .value=${this["sceneType"]}
            .options=${SCENE_TYPES["map"]((_0x2d792b) => ({ "id": _0x2d792b["id"], "label": _0x2d792b["label"] }))}
            @change=${(_0x2a992d) => {
      this["sceneType"] = _0x2a992d["detail"]["value"];
    }}
          ></agx-select>
        </div>

        ${this["sceneType"] === "custom" ? b`
          <div style="margin-top:8px">
            <agx-input
              label="✏️ คำอธิบายฉาก (พิมพ์เอง)"
              placeholder="เช่น a busy Bangkok night market with neon signs"
              .value=${this["customSceneDesc"]}
              @input=${(_0x2ecab1) => {
      this["customSceneDesc"] = _0x2ecab1["detail"]["value"];
    }}
            ></agx-input>
          </div>
        ` : ""}

        <!-- เสียงและบทพูด -->
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed var(--agx-border-subtle)">
          <div style="font-size:11px; color:var(--agx-text-muted); margin-bottom:6px">🗣️ เสียงและบทพูด</div>

          <div class="form-row">
            <agx-select
              label="ประเภทเสียง"
              .value=${this["voiceType"]}
              .options=${EXTENDED_VOICES["map"]((_0x5c63b0) => ({ "id": _0x5c63b0["id"], "label": _0x5c63b0["label"] }))}
              @change=${(_0x218d00) => {
      this["voiceType"] = _0x218d00["detail"]["value"];
    }}
            ></agx-select>
            <agx-select
              label="🎭 โทนบทพูด"
              .value=${this["scriptStyle"]}
              .options=${SCRIPT_STYLES["map"]((_0x5593eb) => ({ "id": _0x5593eb["id"], "label": _0x5593eb["label"] }))}
              @change=${(_0x1832e3) => {
      this["scriptStyle"] = _0x1832e3["detail"]["value"];
    }}
            ></agx-select>
          </div>

          <div style="margin-top:6px">
            <label class="checkbox-row">
              <input type="checkbox"
                .checked=${this["lipSync"]}
                @change=${(_0x475b3a) => {
      this["lipSync"] = _0x475b3a["target"]["checked"];
    }}
              />
              👄 ลิปซิงค์ (ขยับปากตามบทพูด)
            </label>
          </div>

          ${this["voiceType"] === "custom" ? b`
            <div style="margin-top:6px">
              <agx-input
                label="✏️ อธิบายเสียงที่ต้องการ"
                placeholder="เช่น: เสียงผู้หญิงวัยกลางคน พูดนุ่มๆ ฟังดูน่าเชื่อถือ"
                .value=${this["customVoiceDesc"]}
                @input=${(_0x295293) => {
      this["customVoiceDesc"] = _0x295293["detail"]["value"];
    }}
              ></agx-input>
            </div>
          ` : ""}

          <div style="margin-top:6px">
            <agx-input
              label="🎤 ท่อนพูดที่อยากให้มี"
              type="textarea"
              placeholder=${this["multiSceneEnabled"] ? "เช่น: ฉาก1|||ฉาก2|||ฉาก3 (ใส่ ||| คั่น; ถ้าน้อยกว่า sceneCount ฉากที่เหลือ AI เขียนเอง)" : "เช่น: ลดราคาพิเศษวันนี้เท่านั้น!"}
              optional
              .rows=${2}
              .value=${this["customSpeech"]}
              @input=${(_0x557018) => {
      this["customSpeech"] = _0x557018["detail"]["value"];
    }}
            ></agx-input>
            <label class="checkbox-row" style="margin-top:4px">
              <input type="checkbox"
                .checked=${this["forceCustomSpeech"]}
                @change=${(_0x18fb7d) => {
      this["forceCustomSpeech"] = _0x18fb7d["target"]["checked"];
    }}
              />
              🔒 บังคับใช้บทพูดนี้ (override AI)
            </label>
          </div>
          <div style="margin-top:6px">
            <agx-input
              label="🎬 ท่อนพูดเริ่มต้น"
              placeholder="เช่น: ตัวนี้มาแล้ว"
              optional
              .value=${this["openingSpeech"]}
              @input=${(_0x489eaf) => {
      this["openingSpeech"] = _0x489eaf["detail"]["value"];
    }}
            ></agx-input>
          </div>
          <div style="margin-top:6px">
            <agx-input
              label="🚫 คำที่ห้ามมีในบทพูด"
              placeholder="เช่น: สวัสดี, ราคาถูก"
              optional
              .value=${this["negativeSpeech"]}
              @input=${(_0x356a77) => {
      this["negativeSpeech"] = _0x356a77["detail"]["value"];
    }}
            ></agx-input>
          </div>
        </div>

        <div style="margin-top:8px">
          <agx-input
            label="💡 คำสั่งเพิ่มเติมให้ AI"
            type="textarea"
            placeholder="เช่น: เน้นสินค้าในภาพ, ไม่ใส่โลโก้"
            optional
            .rows=${3}
            .value=${this["extraAIInstruction"]}
            @input=${(_0x45b06e) => {
      this["extraAIInstruction"] = _0x45b06e["detail"]["value"];
    }}
          ></agx-input>
        </div>
      </agx-drawer>

      <!-- Loop & Schedule -->
      <agx-drawer label="${t("auto.loopSettings")}">
        <div style="width:100%">
          <label class="checkbox-row">
            <input type="checkbox"
              .checked=${this["loopEnabled"]}
              @change=${(_0x1a3a19) => {
      this["loopEnabled"] = _0x1a3a19["target"]["checked"];
    }}
            />
            🔄 รันวนซ้ำ (Loop)
          </label>
        </div>

        ${this["loopEnabled"] ? b`
          <div class="form-row" style="margin-top:8px">
            <agx-input
              label="จำนวนรอบ"
              type="number"
              .value=${String(this["loopCount"])}
              @input=${(_0x1d4e20) => {
      this["loopCount"] = parseInt(_0x1d4e20["detail"]["value"]) || 1;
    }}
            ></agx-input>
            <agx-select
              label="ดีเลย์ระหว่างรอบ"
              .value=${this["loopDelay"]}
              .options=${[{ "id": "30", "label": "30 วินาที" }, { "id": "60", "label": "1 นาที" }, { "id": "300", "label": "5 นาที" }, { "id": "600", "label": "10 นาที" }, { "id": "1800", "label": "30 นาที" }]}
              @change=${(_0x212445) => {
      this["loopDelay"] = _0x212445["detail"]["value"];
    }}
            ></agx-select>
          </div>
        ` : ""}

        ${this["products"]["length"] > 1 ? b`
          <div style="width:100%; margin-top:8px">
            <label class="checkbox-row">
              <input type="checkbox"
                .checked=${this["productDelayEnabled"]}
                @change=${(_0x4bc12a) => {
      this["productDelayEnabled"] = _0x4bc12a["target"]["checked"];
    }}
              />
              ⏸ พักระหว่างชุดสินค้า
            </label>
          </div>

          ${this["productDelayEnabled"] ? b`
            <div style="margin-top:8px">
              <agx-select
                label="ระยะเวลาพัก"
                .value=${this["productDelay"]}
                .options=${[{ "id": "30", "label": "30 วินาที" }, { "id": "60", "label": "1 นาที" }, { "id": "120", "label": "2 นาที" }, { "id": "300", "label": "5 นาที" }, { "id": "600", "label": "10 นาที" }, { "id": "900", "label": "15 นาที" }, { "id": "1800", "label": "30 นาที" }, { "id": "3600", "label": "1 ชั่วโมง" }]}
                @change=${(_0x23270d) => {
      this["productDelay"] = _0x23270d["detail"]["value"];
    }}
              ></agx-select>
            </div>
          ` : ""}
        ` : ""}

        ${this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder" ? b`
          <div style="margin-top:8px;padding:8px 10px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.4);border-radius:6px;font-size:11px;color:rgba(245,158,11,0.95);line-height:1.5">
            ⚠ โหมดต่อฉาก SceneBuilder: ดาวน์โหลด Full Video ลง Downloads folder อัตโนมัติ — <strong>ปิดโพสต์ TikTok อัตโนมัติชั่วคราว</strong> (ติดข้อจำกัด extract video bytes — รออัพเดท)
          </div>
        ` : this["multiSceneEnabled"] ? b`
          <div style="margin-top:8px;padding:8px 10px;background:rgba(74,141,255,0.1);border:1px solid rgba(74,141,255,0.3);border-radius:6px;font-size:11px;color:rgba(74,141,255,0.95);line-height:1.5">
            ℹ โหมดต่อฉาก Extend: โหลด Full Video ลงเครื่องอัตโนมัติ (ปิด save เพราะซ้ำ) → อัพ TikTok ถ้าเปิด autoPost
          </div>
        ` : ""}

        <div style="width:100%; margin-top:8px">
          <label class="checkbox-row" style="${this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder" ? "opacity:0.4;cursor:not-allowed" : ""}">
            <input type="checkbox"
              .checked=${this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder" ? ![] : this["autoPost"]}
              ?disabled=${this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder"}
              @change=${(_0x3a7bc5) => {
      this["autoPost"] = _0x3a7bc5["target"]["checked"];
    }}
            />
            📮 โพสต์ TikTok อัตโนมัติ
          </label>
        </div>

        ${this["autoPost"] && !(this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder") ? b`
          <div style="margin-top:8px">
            <agx-select
              label="ประเภทการโพส"
              .value=${this["postType"]}
              .options=${[{ "id": "draft", "label": "บันทึกแบบร่าง" }, { "id": "now", "label": "โพสเลย" }, { "id": "schedule", "label": "ตั้งเวลา (ล่วงหน้า)" }]}
              @change=${(_0x2fe61d) => {
      this["postType"] = _0x2fe61d["detail"]["value"];
    }}
            ></agx-select>
          </div>

          ${this["postType"] === "schedule" ? b`
            <div style="margin-top:10px;display:flex;gap:6px;align-items:flex-end">
              <div style="flex:1">
                <agx-input
                  label="📅 วันที่โพส"
                  type="date"
                  .value=${this["scheduleDate"]}
                  @input=${(_0x4a1584) => {
      this["scheduleDate"] = _0x4a1584["detail"]["value"];
    }}
                ></agx-input>
              </div>
              <button style="padding:6px 10px;font-size:12px;border-radius:6px;background:rgba(74,141,255,0.15);border:1px solid rgba(74,141,255,0.4);color:#4A8DFF;cursor:pointer"
                @click=${() => {
      this["scheduleDate"] = toLocalYMD$3(/* @__PURE__ */ new Date());
    }}>วันนี้</button>
              <button style="padding:6px 10px;font-size:12px;border-radius:6px;background:rgba(255,99,177,0.15);border:1px solid rgba(255,99,177,0.4);color:#FF63B1;cursor:pointer"
                @click=${() => {
      const _0x7a01ac = /* @__PURE__ */ new Date();
      _0x7a01ac["setDate"](_0x7a01ac["getDate"]() + 1), this["scheduleDate"] = toLocalYMD$3(_0x7a01ac);
    }}>พรุ่งนี้</button>
            </div>
            <div class="form-row" style="margin-top:8px">
              <agx-select
                label="⏰ ชั่วโมง"
                .value=${this["scheduleHour"]}
                .options=${Array["from"]({ "length": 24 }, (_0x22b61b, _0x24ba34) => {
      const _0x39bd6e = String(_0x24ba34)["padStart"](2, "0");
      return { "id": _0x39bd6e, "label": _0x39bd6e };
    })}
                @change=${(_0x3862bd) => {
      this["scheduleHour"] = _0x3862bd["detail"]["value"];
    }}
              ></agx-select>
              <agx-select
                label="นาที"
                .value=${this["scheduleMinute"]}
                .options=${[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]["map"]((_0x312e39) => {
      const _0x1ab1b1 = String(_0x312e39)["padStart"](2, "0");
      return { "id": _0x1ab1b1, "label": _0x1ab1b1 };
    })}
                @change=${(_0x36256f) => {
      this["scheduleMinute"] = _0x36256f["detail"]["value"];
    }}
              ></agx-select>
            </div>
            <div style="margin-top:8px">
              <agx-select
                label="⏳ ห่างกัน (ต่อคลิป)"
                .value=${String(this["scheduleInterval"])}
                .options=${[{ "id": "5", "label": "5 นาที" }, { "id": "10", "label": "10 นาที" }, { "id": "15", "label": "15 นาที" }, { "id": "20", "label": "20 นาที" }, { "id": "30", "label": "30 นาที" }, { "id": "60", "label": "1 ชั่วโมง" }, { "id": "120", "label": "2 ชั่วโมง" }, { "id": "180", "label": "3 ชั่วโมง" }, { "id": "240", "label": "4 ชั่วโมง" }, { "id": "360", "label": "6 ชั่วโมง" }]}
                @change=${(_0x1d99eb) => {
      this["scheduleInterval"] = Number(_0x1d99eb["detail"]["value"]) || 30;
    }}
              ></agx-select>
            </div>
          ` : ""}

          <div style="width:100%; margin-top:8px">
            <label class="checkbox-row">
              <input type="checkbox"
                .checked=${this["noBasket"]}
                @change=${(_0x5014a1) => {
      this["noBasket"] = _0x5014a1["target"]["checked"];
    }}
              />
              🧺 ไม่ปักตระกร้า
            </label>
          </div>
        ` : ""}

        ${this["extendScene"] ? b`
          <div style="margin-top:8px">
            <agx-select
              label="ความยาวคลิป"
              .value=${this["clipDuration"]}
              .options=${[{ "id": "16", "label": "16 วินาที (2 ฉาก)" }, { "id": "24", "label": "24 วินาที (3 ฉาก)" }, { "id": "32", "label": "32 วินาที (4 ฉาก)" }, { "id": "40", "label": "40 วินาที (5 ฉาก)" }, { "id": "48", "label": "48 วินาที (6 ฉาก)" }, { "id": "56", "label": "56 วินาที (7 ฉาก)" }, { "id": "64", "label": "64 วินาที (8 ฉาก)" }, { "id": "72", "label": "72 วินาที (9 ฉาก)" }, { "id": "80", "label": "80 วินาที (10 ฉาก)" }]}
              @change=${(_0x150318) => {
      this["clipDuration"] = _0x150318["detail"]["value"];
    }}
            ></agx-select>
          </div>
        ` : ""}

        <div style="width:100%; margin-top:8px">
          <label class="checkbox-row" style="${this["multiSceneEnabled"] ? "opacity:0.4;cursor:not-allowed" : ""}">
            <input type="checkbox"
              .checked=${this["multiSceneEnabled"] ? ![] : this["saveClip"]}
              ?disabled=${this["multiSceneEnabled"]}
              @change=${(_0x376ca8) => {
      this["saveClip"] = _0x376ca8["target"]["checked"];
    }}
            />
            💾 เซฟคลิปลงเครื่อง ${this["multiSceneEnabled"] ? b`<span style="font-size:10px;color:var(--agx-text-muted)">(โหมดต่อฉาก: โหลดผ่าน Flow อัตโนมัติ)</span>` : ""}
          </label>
        </div>

        ${this["saveClip"] && !this["multiSceneEnabled"] ? b`
          <div style="margin-top:8px">
            <agx-select
              label="ความละเอียดคลิป"
              .value=${this["clipQuality"]}
              .options=${[{ "id": "720p", "label": "720p (ต้นฉบับ)" }, { "id": "1080p", "label": "1080p (อัพสเกล)" }, { "id": "4k", "label": "4K (ใช้ 50 credits)" }]}
              @change=${(_0x4f23bf) => {
      this["clipQuality"] = _0x4f23bf["detail"]["value"];
    }}
            ></agx-select>
          </div>
        ` : ""}

        <!-- ทำสินค้าทั้งหมดใหม่ N รอบ — ต่างจาก loop retry ของ GEN_VIDEO -->
        <div style="width:100%; margin-top:8px">
          <label class="checkbox-row">
            <input type="checkbox"
              .checked=${this["loopAllEnabled"]}
              @change=${(_0x300491) => {
      this["loopAllEnabled"] = _0x300491["target"]["checked"];
    }}
            />
            🔁 ทำสินค้าทั้งหมดใหม่หลายรอบ
          </label>
        </div>

        ${this["loopAllEnabled"] ? b`
          <div style="margin-top:8px">
            <agx-select
              label="จำนวนรอบ"
              .value=${String(this["loopAllCount"])}
              .options=${[2, 3, 5, 10, 20, 50, 100]["map"]((_0x3a491c) => ({ "id": String(_0x3a491c), "label": _0x3a491c + " รอบ" }))}
              @change=${(_0x2e49da) => {
      this["loopAllCount"] = parseInt(_0x2e49da["detail"]["value"]) || 2;
    }}
            ></agx-select>
          </div>
        ` : ""}
      </agx-drawer>

      <!-- Log -->
      <div class="log-section">
        <div class="log-header" @click=${() => {
      this["showLog"] = !this["showLog"];
    }}>
          <span class="log-title">
            <span class="log-dot ${this["running"] ? "active" : this["logEntries"]["some"]((_0x47946c) => _0x47946c["level"] === "error") ? "error" : ""}"></span>
            📋 Log (${this["logEntries"]["length"]})
          </span>
          <span class="log-actions">
            <button class="log-action-btn" @click=${(_0x463f1f) => {
      _0x463f1f["stopPropagation"](), this["_clearLog"]();
    }}>ล้าง</button>
            <span style="color:var(--agx-text-muted);font-size:10px">${this["showLog"] ? "▲" : "▼"}</span>
          </span>
        </div>
        ${this["showLog"] ? b`
          <div class="log-body">
            <agx-log id="autoLog" .entries=${this["logEntries"]}></agx-log>
          </div>
        ` : ""}
      </div>

      <!-- Start Button -->
      <div class="start-section">
        ${this["running"] ? b`<agx-button variant="danger" full @click=${this["_stop"]}>⏹ หยุด</agx-button>` : b`<agx-button variant="primary" full @click=${this["_start"]}
              ?disabled=${this["products"]["length"] === 0}>
              🎬 ${t("auto.startGeneration")} (${this["products"]["length"]} สินค้า)
            </agx-button>`}
      </div>
    `;
  }
  ["_renderProductCard"](_0x566844, _0x228e32) {
    var _a2, _b;
    const _0x279035 = this["productTabs"][_0x566844["id"]] || "info", _0x16f08e = _0x566844["productImages"]["filter"](Boolean)["length"], _0x8c9208 = Math["min"](3, _0x16f08e + 1), _0x23f34d = Array["from"]({ "length": _0x8c9208 }, (_0x1fef84, _0x1fc19a) => {
      const _0x3f4e65 = _0x566844["productImages"][_0x1fc19a], _0x20d90a = "สินค้า " + (_0x1fc19a + 1);
      return b`
        <div class="upload-box" @click=${() => this["_pickSingleImage"](_0x228e32, _0x1fc19a, "product")}>
          ${_0x3f4e65 ? b`
              <img src=${_0x3f4e65} alt="" />
              <button class="upload-remove" @click=${(_0x2a0735) => {
        _0x2a0735["stopPropagation"](), this["_removeImage"](_0x228e32, _0x1fc19a, "product");
      }}>✕</button>
            ` : b`<span>🖼️</span><span class="upload-label">${_0x20d90a}</span>`}
        </div>
      `;
    });
    return b`
      <div class="product-card">
        <!-- Header: name + remove -->
        <div class="product-header">
          <input
            class="product-name-input"
            type="text"
            placeholder="ชื่อสินค้า"
            .value=${_0x566844["name"]}
            @input=${(_0x434c36) => this["_updateProduct"](_0x228e32, { "name": _0x434c36["target"]["value"] })}
          />
          <button class="product-remove" @click=${() => this["_removeProduct"](_0x228e32)}>✕</button>
        </div>

        <!-- Image uploads: 3 product + 1 model -->
        <div class="image-row">
          ${_0x23f34d}
          <div class="upload-box model" @click=${() => this["_pickSingleImage"](_0x228e32, 0, "model")}>
            ${_0x566844["modelImage"] ? b`
                <img src=${_0x566844["modelImage"]} alt="" />
                <button class="upload-remove" @click=${(_0x4f3eb0) => {
      _0x4f3eb0["stopPropagation"](), this["_removeImage"](_0x228e32, 0, "model");
    }}>✕</button>
              ` : b`<span>👤</span><span class="upload-label">ตัวแบบ</span>`}
          </div>
        </div>

        <!-- Prepare button (every product) -->
        <div class="prepare-row">
          <button
            class="prepare-btn"
            ?disabled=${this["preparing"][_0x566844["id"]] === !![]}
            title="ให้ AI คิดชื่อ + บทพูด + prompt + caption + hashtags จากรูป + รายละเอียดสินค้า (~฿0.005/ครั้ง) — เขียนทับช่องที่มีอยู่"
            @click=${() => this["_prepareProduct"](_0x228e32)}>
            ${this["preparing"][_0x566844["id"]] === !![] ? "⏳ กำลังเตรียม..." : "✨ Prepare (AI คิดข้อมูลให้)"}
          </button>
        </div>

        <!-- Spread buttons (only on first product when >1) -->
        ${_0x228e32 === 0 && this["products"]["length"] > 1 ? b`
          <div class="spread-row">
            <button class="spread-btn" @click=${this["_spreadModelImage"]}>กระจายตัวแบบ</button>
            <button class="spread-btn" @click=${this["_spreadOptions"]}>กระจาย options</button>
          </div>
        ` : ""}

        <!-- Per-product options (tabs) -->
        <div class="product-options">
          <details>
            <summary>📋 ตั้งค่าเพิ่มเติม</summary>

            <!-- Tab bar -->
            <div class="tab-bar">
              <button class="tab-btn ${_0x279035 === "info" ? "active" : ""}"
                @click=${() => this["_setProductTab"](_0x566844["id"], "info")}>📝 ข้อมูล</button>
              <button class="tab-btn ${_0x279035 === "video" ? "active" : ""}"
                @click=${() => this["_setProductTab"](_0x566844["id"], "video")}>🎬 วิดีโอ</button>
            </div>

            <!-- Info tab -->
            ${_0x279035 === "info" ? b`
              <div class="opt-field">
                <div class="opt-label">📝 รายละเอียดสินค้า (ช่วย AI เข้าใจสินค้า — ใช้ตอน Prepare/สร้าง)</div>
                <textarea
                  class="opt-textarea"
                  rows="2"
                  placeholder="เช่น ครีมกำจัดขนกลิ่นสตรอเบอร์รี่ ใช้ทาทิ้งไว้ 3-5 นาที เหมาะกับผิวบอบบาง..."
                  .value=${_0x566844["description"] || ""}
                  @input=${(_0x2454d8) => this["_updateProduct"](_0x228e32, { "description": _0x2454d8["target"]["value"] })}
                ></textarea>
              </div>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>🗂️ หมวดหมู่สินค้า</span>
                  <button class="dist-btn" type="button"
                    title="คัดลอกหมวดหมู่นี้ไปยังสินค้าทุกรายการ"
                    @click=${() => this["_distributeField"](_0x228e32, "category", "หมวดหมู่สินค้า")}>⤵ ทุกสินค้า</button>
                </div>
                <agx-select
                  .value=${_0x566844["category"] || "auto"}
                  .options=${PRODUCT_CATEGORIES["map"]((_0x16d843) => ({ "id": _0x16d843["id"], "label": _0x16d843["label"] }))}
                  @change=${(_0xc74591) => this["_updateProduct"](_0x228e32, { "category": _0xc74591["detail"]["value"] })}
                ></agx-select>
              </div>
              <label class="checkbox-row">
                <input type="checkbox"
                  .checked=${_0x566844["showImageText"] === !![]}
                  @change=${(_0x2ca944) => this["_updateProduct"](_0x228e32, { "showImageText": _0x2ca944["target"]["checked"] })} />
                🏷️ มีข้อความบนภาพ
              </label>
              ${_0x566844["showImageText"] === !![] ? b`
              <div class="opt-field">
                <div class="opt-label">✏️ ข้อความบนภาพ (ว่าง = AI สร้างให้)</div>
                <input type="text" placeholder="เช่น: ลด 50%, ของแท้ 100%"
                  .value=${_0x566844["customImageText"] || ""}
                  @input=${(_0x301109) => this["_updateProduct"](_0x228e32, { "customImageText": _0x301109["target"]["value"] })} />
              </div>
              ` : ""}
              <div class="opt-field">
                <div class="opt-label">🚫 คำต้องห้ามบนภาพ</div>
                <input type="text" placeholder="เช่น: ราคา, 99"
                  .value=${_0x566844["imageNegativeWords"] || ""}
                  @input=${(_0x2758f2) => this["_updateProduct"](_0x228e32, { "imageNegativeWords": _0x2758f2["target"]["value"] })} />
              </div>
              <label class="checkbox-row">
                <input type="checkbox"
                  .checked=${_0x566844["lipSyncOverride"] ?? this["lipSync"]}
                  @change=${(_0x16426a) => this["_updateProduct"](_0x228e32, { "lipSyncOverride": _0x16426a["target"]["checked"] })} />
                👄 ลิปซิงค์ (ขยับปากตามบทพูด)
              </label>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>🎤 ท่อนพูดที่อยากให้มี</span>
                  <span style="display:flex;gap:4px">
                    <button
                      class="sep-btn"
                      type="button"
                      @click=${() => this["_insertSeparator"](_0x566844["id"], "customSpeech")}
                      title="แทรก ||| คั่นบทพูดต่อฉาก (multi-scene)"
                    >|||</button>
                    <button
                      class="ai-gen-btn"
                      ?disabled=${!!this["dialogueGenerating"][_0x566844["id"]]}
                      @click=${() => this["_aiGenDialogue"](_0x228e32)}
                      title="ให้ AI สร้างบทพูดให้ — กรณีต่อฉาก จะคั่นด้วย ||| ตามจำนวนฉาก"
                    >
                      ${this["dialogueGenerating"][_0x566844["id"]] ? "⏳ กำลังสร้าง..." : "✨ AI Gen"}
                    </button>
                  </span>
                </div>
                <textarea rows="2" placeholder="เช่น: ลดราคาพิเศษวันนี้เท่านั้น"
                  data-product-id=${_0x566844["id"]}
                  data-field="customSpeech"
                  .value=${_0x566844["customSpeech"] || ""}
                  @input=${(_0x18fe91) => this["_updateProduct"](_0x228e32, { "customSpeech": _0x18fe91["target"]["value"] })}></textarea>
                <label class="checkbox-row" style="margin-top:4px">
                  <input type="checkbox"
                    .checked=${_0x566844["forceCustomSpeech"] ?? ![]}
                    @change=${(_0x292bd9) => this["_updateProduct"](_0x228e32, { "forceCustomSpeech": _0x292bd9["target"]["checked"] })} />
                  🔒 บังคับใช้บทพูดนี้ (override AI)
                </label>
              </div>
              <div class="opt-field">
                <div class="opt-label">🎬 ท่อนพูดเริ่มต้น</div>
                <input type="text" placeholder="เช่น: ตัวนี้มาแล้ว"
                  .value=${_0x566844["openingSpeech"] || ""}
                  @input=${(_0x10f91a) => this["_updateProduct"](_0x228e32, { "openingSpeech": _0x10f91a["target"]["value"] })} />
              </div>
              <div class="opt-field">
                <div class="opt-label">🚫 คำที่ห้ามมีในบทพูด</div>
                <input type="text" placeholder="เช่น: สวัสดี, ราคาถูก"
                  .value=${_0x566844["negativeSpeech"] || ""}
                  @input=${(_0x388eee) => this["_updateProduct"](_0x228e32, { "negativeSpeech": _0x388eee["target"]["value"] })} />
              </div>
              <div class="opt-field">
                <div class="opt-label">📱 แคปชั่นโพสต์ TikTok (ว่าง = AI สร้างให้)</div>
                <textarea rows="2" placeholder="ว่าง = ใช้ caption ที่ AI สร้างให้. ถ้ากรอก = ใช้ข้อความนี้แทน (hashtag แยกช่องด้านล่าง)"
                  .value=${_0x566844["customCaptionOverride"] || ""}
                  @input=${(_0x27dea5) => this["_updateProduct"](_0x228e32, { "customCaptionOverride": _0x27dea5["target"]["value"] })}></textarea>
              </div>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>#️⃣ แฮชแท็ก</span>
                  <button class="dist-btn" type="button"
                    title="คัดลอกแฮชแท็กชุดนี้ไปยังสินค้าทุกรายการ"
                    @click=${() => this["_distributeField"](_0x228e32, "hashtags", "แฮชแท็ก")}>⤵ ทุกสินค้า</button>
                </div>
                <input type="text" placeholder="#สินค้าดี #ของแท้"
                  .value=${_0x566844["hashtags"] || ""}
                  @input=${(_0x53db97) => this["_updateProduct"](_0x228e32, { "hashtags": _0x53db97["target"]["value"] })} />
              </div>
              <div class="opt-field">
                <div class="opt-label">🆔 Product ID (จาก TikTok Shop)</div>
                <input type="text" placeholder="เช่น: 1729387654321 — ว่างได้ถ้าไม่ทราบ"
                  .value=${_0x566844["productId"] || ""}
                  @input=${(_0x11a172) => this["_updateProduct"](_0x228e32, { "productId": _0x11a172["target"]["value"]["trim"]() })} />
                <div style="font-size:10px;color:var(--agx-text-muted);margin-top:2px">ถ้ากรอก จะใช้ Product ID ค้นสินค้าตอนปักตะกร้า (แม่นกว่า) — ไม่กรอกก็จะใช้ "ชื่อตะกร้า" ด้านล่างแทน</div>
              </div>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>🛒 ชื่อตะกร้า / คำค้นสินค้า (สำรองถ้าไม่มี Product ID — 25-30 ตัว)</span>
                  <button class="dist-btn" type="button"
                    title="คัดลอกชื่อตะกร้านี้ไปยังสินค้าทุกรายการ"
                    @click=${() => this["_distributeField"](_0x228e32, "basketName", "ชื่อตะกร้า")}>⤵ ทุกสินค้า</button>
                </div>
                <input type="text" maxlength="30" placeholder="เช่น: ครีมกันแดด SPF50 ขนาด 30ml"
                  .value=${_0x566844["basketName"] || ""}
                  @input=${(_0x2ad736) => this["_updateProduct"](_0x228e32, { "basketName": _0x2ad736["target"]["value"]["slice"](0, 30) })} />
                <div style="font-size:10px;color:var(--agx-text-muted);margin-top:2px">${(_0x566844["basketName"] || "")["length"]}/30 ตัว — ว่างทั้งคู่ (ID + ชื่อ) = ไม่ปักสินค้าในตะกร้าตอนโพสต์</div>
              </div>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>🖼 Prompt สร้างรูปกำหนดเอง</span>
                  <span style="display:flex;gap:4px">
                    <button
                      class="ai-gen-btn"
                      type="button"
                      ?disabled=${!((_a2 = _0x566844["customImagePromptOverride"]) == null ? void 0 : _a2["trim"]())}
                      @click=${() => this["_syncImageTextToImagePrompt"](_0x228e32)}
                      title="แทนข้อความบนภาพใน Prompt นี้ ด้วยค่าจากช่อง 'ข้อความบนภาพ' (Info tab)"
                    >↻ ใส่ข้อความบนรูป</button>
                    <button
                      class="sep-btn"
                      type="button"
                      @click=${() => this["_insertSeparator"](_0x566844["id"], "customImagePromptOverride")}
                      title="แทรก ||| คั่น prompt ต่อฉาก (SceneBuilder = N รูป)"
                    >|||</button>
                  </span>
                </div>
                <textarea rows="3" placeholder="ว่าง = ใช้ prompt ที่ระบบสร้างให้ (template + AI). ถ้ากรอก = แทนที่ทั้งหมด ระบบไม่เรียก AI/template เลย — multi-scene คั่นด้วย |||"
                  data-product-id=${_0x566844["id"]}
                  data-field="customImagePromptOverride"
                  .value=${_0x566844["customImagePromptOverride"] || ""}
                  @input=${(_0x4377f8) => this["_updateProduct"](_0x228e32, { "customImagePromptOverride": _0x4377f8["target"]["value"] })}></textarea>
              </div>
              <div class="opt-field">
                <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                  <span>🎬 Prompt สร้างวิดีโอกำหนดเอง</span>
                  <span style="display:flex;gap:4px">
                    <button
                      class="ai-gen-btn"
                      type="button"
                      ?disabled=${!((_b = _0x566844["customVideoPromptOverride"]) == null ? void 0 : _b["trim"]())}
                      @click=${() => this["_syncSpeechToVideoPrompt"](_0x228e32)}
                      title="แทนบทพูดในเครื่องหมายคำพูดใน Prompt นี้ ด้วยค่าจากช่อง 'ท่อนพูดที่อยากให้มี'"
                    >↻ ใส่บทพูด</button>
                    <button
                      class="sep-btn"
                      type="button"
                      @click=${() => this["_insertSeparator"](_0x566844["id"], "customVideoPromptOverride")}
                      title="แทรก ||| คั่น prompt ต่อฉาก (Extend = N ฉาก)"
                    >|||</button>
                  </span>
                </div>
                <textarea rows="3" placeholder="ว่าง = ใช้ Veo prompt ที่ระบบ/AI สร้างให้. ถ้ากรอก = แทนที่ทั้งหมด ระบบไม่เรียก AI เลย — multi-scene Extend คั่นด้วย |||"
                  data-product-id=${_0x566844["id"]}
                  data-field="customVideoPromptOverride"
                  .value=${_0x566844["customVideoPromptOverride"] || ""}
                  @input=${(_0x1d5a6e) => this["_updateProduct"](_0x228e32, { "customVideoPromptOverride": _0x1d5a6e["target"]["value"] })}></textarea>
              </div>
            ` : ""}

            <!-- Video tab -->
            ${_0x279035 === "video" ? b`
              <label class="override-toggle">
                <input type="checkbox"
                  .checked=${!!_0x566844["useCustomVideoSettings"]}
                  @change=${(_0x9b280a) => this["_updateProduct"](_0x228e32, { "useCustomVideoSettings": _0x9b280a["target"]["checked"] })} />
                <span>🎬 ตั้งค่าวิดีโอเฉพาะสินค้านี้ (override global)</span>
              </label>

              ${_0x566844["useCustomVideoSettings"] ? b`
                ${this["_renderOverrideSelect"](_0x228e32, "modelTypeOverride", "👤 ตัวแบบ", MODEL_TYPES, this["modelType"])}
                ${this["_renderOverrideSelect"](_0x228e32, "voiceTypeOverride", "🗣️ ประเภทเสียง", EXTENDED_VOICES, this["voiceType"])}
                ${this["_renderOverrideSelect"](_0x228e32, "imageStyleOverride", "🎨 สไตล์ภาพ", IMAGE_STYLES, this["imageStyle"])}
                ${this["_renderOverrideSelect"](_0x228e32, "videoStyleOverride", "🎬 สไตล์วิดีโอ", VIDEO_STYLES, this["videoStyle"], (_0x266c00) => {
      const _0x46866b = VIDEO_STYLE_POSE_LOCKS[_0x266c00];
      if (_0x46866b) this["_updateProduct"](_0x228e32, { "poseStyleOverride": _0x46866b });
    })}
                ${this["_renderOverrideSelect"](_0x228e32, "imageCameraAngleOverride", "📷 มุมกล้องภาพ", IMAGE_CAMERA_ANGLES, this["imageCameraAngle"])}
                ${this["_renderOverrideSelect"](_0x228e32, "videoCameraMovementOverride", "🎥 การขยับกล้อง", VIDEO_CAMERA_MOVEMENTS, this["videoCameraMovement"])}
                ${this["_renderOverrideSelect"](_0x228e32, "poseStyleOverride", "🚶 ท่าทาง", POSE_STYLES, this["poseStyle"], void 0, this["_isPoseLockedForProduct"](_0x566844))}
                ${this["_renderOverrideSelect"](_0x228e32, "sceneTypeOverride", "🏞️ ฉาก", SCENE_TYPES, this["sceneType"])}
                ${_0x566844["sceneTypeOverride"] === "custom" || !_0x566844["sceneTypeOverride"] && this["sceneType"] === "custom" ? b`
                  <div class="opt-field">
                    <div class="opt-label">✏️ คำอธิบายฉาก (เฉพาะสินค้านี้)</div>
                    <textarea rows="2" placeholder="ว่าง = ใช้ global customSceneDesc"
                      .value=${_0x566844["customSceneDescOverride"] || ""}
                      @input=${(_0x446487) => this["_updateProduct"](_0x228e32, { "customSceneDescOverride": _0x446487["target"]["value"] })}></textarea>
                  </div>
                ` : ""}
                ${this["_renderOverrideSelect"](_0x228e32, "lightingOverride", "💡 การจัดแสง", LIGHTING_TYPES, this["lighting"])}
                ${this["_renderOverrideSelect"](_0x228e32, "scriptStyleOverride", "🎭 โทนบทพูด", SCRIPT_STYLES, this["scriptStyle"])}
                ${this["_renderOverrideSelect"](_0x228e32, "textColorOverride", "🎨 สีข้อความ", TEXT_COLOR_OPTIONS, this["textColor"])}
                ${this["_renderOverrideSelect"](_0x228e32, "textPositionOverride", "🎯 ตำแหน่งข้อความ", TEXT_POSITIONS, this["textPosition"])}

                <div class="opt-field">
                  <div class="opt-label" style="display:flex;align-items:center;justify-content:space-between;gap:6px">
                    <span>💡 คำสั่งเพิ่มเติมให้ AI (เฉพาะสินค้านี้)</span>
                    <button
                      class="sep-btn"
                      type="button"
                      @click=${() => this["_insertSeparator"](_0x566844["id"], "extraAIInstructionOverride")}
                      title="แทรก ||| คั่นคำสั่งต่อฉาก (multi-scene)"
                    >|||</button>
                  </div>
                  <textarea rows="2" placeholder="เช่น: เน้นสินค้าในภาพ, ฉากในครัว — AI ยังเขียน prompt ให้ แค่ทำตามคำสั่งนี้ด้วย (ไม่ใช่ Veo prompt เต็มก้อน). ว่าง = ใช้ของ global. multi-scene คั่นด้วย |||"
                    data-product-id=${_0x566844["id"]}
                    data-field="extraAIInstructionOverride"
                    .value=${_0x566844["extraAIInstructionOverride"] || ""}
                    @input=${(_0x4c554a) => this["_updateProduct"](_0x228e32, { "extraAIInstructionOverride": _0x4c554a["target"]["value"] })}></textarea>
                </div>
              ` : ""}
            ` : ""}
          </details>
        </div>
      </div>
    `;
  }
  ["_renderOverrideSelect"](_0xc4843e, _0x772621, _0x52fa7b, _0x5f45fd, _0x43337b, _0x22e9ed, _0x3de709 = ![]) {
    var _a2;
    const _0x18654b = this["products"][_0xc4843e], _0x29643f = _0x18654b[_0x772621] || "", _0x1bdec6 = ((_a2 = _0x5f45fd["find"]((_0x1cc4a7) => _0x1cc4a7["id"] === _0x43337b)) == null ? void 0 : _a2["label"]) || _0x43337b;
    return b`
      <div class="opt-field">
        <div class="opt-label">${_0x52fa7b}${_0x3de709 ? " 🔒" : ""}</div>
        <select
          class="override-select"
          .value=${_0x29643f}
          ?disabled=${_0x3de709}
          @change=${(_0x2701fe) => {
      const _0x435c86 = _0x2701fe["target"]["value"];
      this["_updateProduct"](_0xc4843e, { [_0x772621]: _0x435c86 }), _0x22e9ed == null ? void 0 : _0x22e9ed(_0x435c86);
    }}
        >
          <option value="">(${_0x1bdec6})</option>
          ${_0x5f45fd["map"]((_0x1443a4) => b`<option value=${_0x1443a4["id"]} ?selected=${_0x29643f === _0x1443a4["id"]}>${_0x1443a4["label"]}</option>`)}
        </select>
      </div>
    `;
  }
  ["_isPoseLockedForProduct"](_0x1ba303) {
    const _0x1c6f24 = _0x1ba303["videoStyleOverride"] || this["videoStyle"];
    return !!VIDEO_STYLE_POSE_LOCKS[_0x1c6f24];
  }
  ["_addProduct"]() {
    if (this["products"]["length"] >= 50) return;
    this["products"] = [...this["products"], { "id": crypto["randomUUID"](), "name": "", "productImages": [], "showImageText": ![] }];
  }
  ["_removeProduct"](_0x30bc00) {
    this["products"] = this["products"]["filter"]((_0x518a68, _0x4add40) => _0x4add40 !== _0x30bc00);
  }
  ["_setProductTab"](_0x2fa75b, _0x223990) {
    this["productTabs"] = { ...this["productTabs"], [_0x2fa75b]: _0x223990 };
  }
  ["_clearAllProducts"]() {
    if (this["products"]["length"] === 0) return;
    const _0x2d4da2 = confirm("ลบสินค้าทั้งหมด " + this["products"]["length"] + " รายการ?");
    if (!_0x2d4da2) return;
    this["products"] = [];
  }
  ["_updateProduct"](_0x5b605e, _0x555847) {
    this["products"] = this["products"]["map"]((_0x17612f, _0x57b671) => _0x57b671 === _0x5b605e ? { ..._0x17612f, ..._0x555847 } : _0x17612f);
  }
  ["_distributeField"](_0x209f4b, _0x58939d, _0x3e22f8) {
    var _a2;
    const _0x2035da = this["products"][_0x209f4b];
    if (!_0x2035da) return;
    const _0x4b3d9d = this["products"]["length"] - 1;
    if (_0x4b3d9d <= 0) {
      this["_addLog"]("warn", "มีสินค้าแค่รายการเดียว — ไม่มีอะไรให้กระจาย");
      return;
    }
    const _0x437711 = _0x58939d === "category" ? _0x2035da["category"] || "auto" : _0x2035da[_0x58939d] || "", _0x16cad7 = _0x58939d === "category" ? ((_a2 = PRODUCT_CATEGORIES["find"]((_0x5c504c) => _0x5c504c["id"] === _0x437711)) == null ? void 0 : _a2["label"]) ?? _0x437711 : _0x437711 || "(ว่าง)";
    if (!confirm('กระจาย "' + _0x3e22f8 + '" = ' + _0x16cad7 + "\nไปยังสินค้าอีก " + _0x4b3d9d + " รายการ? (เขียนทับค่าเดิมของแต่ละสินค้า)")) return;
    this["products"] = this["products"]["map"]((_0x76f81e, _0x37acc5) => _0x37acc5 === _0x209f4b ? _0x76f81e : { ..._0x76f81e, [_0x58939d]: _0x437711 }), this["_addLog"]("success", '✓ กระจาย "' + _0x3e22f8 + '" = ' + _0x16cad7 + " → สินค้าทั้งหมด " + this["products"]["length"] + " รายการ");
  }
  ["_syncSpeechToVideoPrompt"](_0x46c953) {
    var _a2, _b;
    const _0x4b5dc9 = this["products"][_0x46c953];
    if (!_0x4b5dc9) return;
    if (!((_a2 = _0x4b5dc9["customVideoPromptOverride"]) == null ? void 0 : _a2["trim"]())) {
      this["_addLog"]("warn", "⚠ ยังไม่มี Prompt สร้างวิดีโอกำหนดเอง — กรอกก่อน");
      return;
    }
    if (!((_b = _0x4b5dc9["customSpeech"]) == null ? void 0 : _b["trim"]())) {
      this["_addLog"]("warn", "⚠ ยังไม่ได้กรอกบทพูด (🎤 ท่อนพูดที่อยากให้มี) — sync ไม่ได้");
      return;
    }
    const { result: _0x52a8f0, changed: _0x3b5165, note: _0x4fde3e, usedSpeech: _0x1de080 } = syncDialogueIntoVideoPrompt(_0x4b5dc9["customVideoPromptOverride"], _0x4b5dc9["customSpeech"]);
    if (_0x3b5165) {
      const _0x530d5f = { "customVideoPromptOverride": _0x52a8f0 };
      if (_0x1de080 && _0x1de080 !== _0x4b5dc9["customSpeech"]["trim"]()) _0x530d5f["customSpeech"] = _0x1de080;
      this["_updateProduct"](_0x46c953, _0x530d5f), this["_addLog"]("success", "✓ ใส่บทพูดลง Prompt วิดีโอแล้ว" + (_0x530d5f["customSpeech"] ? " (แบ่งบทพูดให้ตรงจำนวนฉากด้วย)" : "") + (_0x4fde3e ? " — " + _0x4fde3e : ""));
    } else this["_addLog"]("warn", "⚠ " + (_0x4fde3e ?? "ไม่พบบทพูดในเครื่องหมายคำพูดใน Prompt วิดีโอ — แก้เอง"));
  }
  ["_syncImageTextToImagePrompt"](_0x23e4aa) {
    var _a2, _b;
    const _0x2ec279 = this["products"][_0x23e4aa];
    if (!_0x2ec279) return;
    if (!((_a2 = _0x2ec279["customImagePromptOverride"]) == null ? void 0 : _a2["trim"]())) {
      this["_addLog"]("warn", "⚠ ยังไม่มี Prompt สร้างรูปกำหนดเอง — กรอกก่อน");
      return;
    }
    if (!((_b = _0x2ec279["customImageText"]) == null ? void 0 : _b["trim"]())) {
      this["_addLog"]("warn", "⚠ ยังไม่ได้กรอกข้อความบนภาพ (✏️ ข้อความบนภาพ ใน Info tab) — sync ไม่ได้");
      return;
    }
    const { result: _0x519b89, changed: _0x4a78b7, note: _0xbd2f33 } = syncTextIntoImagePrompt(_0x2ec279["customImagePromptOverride"], _0x2ec279["customImageText"]);
    _0x4a78b7 ? (this["_updateProduct"](_0x23e4aa, { "customImagePromptOverride": _0x519b89 }), this["_addLog"]("success", "✓ ใส่ข้อความบนรูปลง Prompt รูปแล้ว" + (_0xbd2f33 ? " (" + _0xbd2f33 + ")" : ""))) : this["_addLog"]("warn", "⚠ " + (_0xbd2f33 ?? "ไม่พบบรรทัดข้อความบนภาพใน Prompt รูป — แก้เอง"));
  }
  ["_insertSeparator"](_0x4deb71, _0x49ef34) {
    const _0x24c0ab = 'textarea[data-product-id="' + _0x4deb71 + '"][data-field="' + _0x49ef34 + '"]', _0x42f726 = this["renderRoot"]["querySelector"](_0x24c0ab);
    if (!_0x42f726) return;
    const _0x4139ba = _0x42f726["selectionStart"] ?? _0x42f726["value"]["length"], _0x13aa94 = _0x42f726["selectionEnd"] ?? _0x42f726["value"]["length"], _0x2e57b8 = _0x42f726["value"]["substring"](0, _0x4139ba), _0x223d24 = _0x42f726["value"]["substring"](_0x13aa94), _0x20778c = (_0x2e57b8["endsWith"](" ") || _0x2e57b8 === "" ? "" : " ") + "|||" + (_0x223d24["startsWith"](" ") || _0x223d24 === "" ? "" : " "), _0x1b204b = _0x2e57b8 + _0x20778c + _0x223d24, _0x22e497 = this["products"]["findIndex"]((_0x398053) => _0x398053["id"] === _0x4deb71);
    if (_0x22e497 < 0) return;
    this["_updateProduct"](_0x22e497, { [_0x49ef34]: _0x1b204b }), requestAnimationFrame(() => {
      const _0x4622fe = this["renderRoot"]["querySelector"](_0x24c0ab);
      if (!_0x4622fe) return;
      const _0x33947a = _0x2e57b8["length"] + _0x20778c["length"];
      _0x4622fe["focus"](), _0x4622fe["setSelectionRange"](_0x33947a, _0x33947a);
    });
  }
  async ["_aiGenDialogue"](_0x22b0ac) {
    var _a2, _b, _c, _d;
    const _0x53af5c = this["products"][_0x22b0ac];
    if (!_0x53af5c) return;
    if (this["dialogueGenerating"][_0x53af5c["id"]]) return;
    if (!_0x53af5c["name"] || !_0x53af5c["name"]["trim"]()) {
      this["_addLog"]("warn", "⚠ ใส่ชื่อสินค้าก่อน AI Gen");
      return;
    }
    this["dialogueGenerating"] = { ...this["dialogueGenerating"], [_0x53af5c["id"]]: !![] };
    try {
      const _0x113feb = this["multiSceneEnabled"] ? this["sceneCount"] : 1, _0x2882ca = { "aspectRatio": this["aspectRatio"], "mode": this["mode"], "imageCount": parseInt(this["imageCount"]), "clipCount": parseInt(this["clipCount"]), "videoModel": this["videoModel"], "videoDuration": this["videoDuration"], "imageModel": this["imageModel"], "scriptStyle": this["scriptStyle"], "modelType": this["modelType"], "voiceType": this["voiceType"], "videoStyle": this["videoStyle"], "sceneCount": _0x113feb, "promptLanguage": this["promptLanguage"], "videoPromptStyle": this["videoPromptStyle"], "openingSpeech": ((_a2 = _0x53af5c["openingSpeech"]) == null ? void 0 : _a2["trim"]()) || ((_b = this["openingSpeech"]) == null ? void 0 : _b["trim"]()) || "", "negativeSpeech": ((_c = _0x53af5c["negativeSpeech"]) == null ? void 0 : _c["trim"]()) || ((_d = this["negativeSpeech"]) == null ? void 0 : _d["trim"]()) || "", "customSpeech": "", "forceCustomSpeech": ![], "loopEnabled": ![], "loopCount": 1, "loopDelay": 0, "saveClip": ![], "clipQuality": "720p", "noBasket": ![] };
      this["_addLog"]("info", '🤖 AI Gen Dialogue: "' + _0x53af5c["name"]["slice"](0, 40) + '" (' + _0x113feb + " ฉาก)...");
      const _0x2d816c = await generateDialogueSuggestion(_0x53af5c, _0x2882ca);
      if (!_0x2d816c) {
        this["_addLog"]("error", "❌ AI Gen Dialogue ไม่สำเร็จ — ลองอีกครั้งภายหลัง");
        return;
      }
      this["_updateProduct"](_0x22b0ac, { "customSpeech": _0x2d816c, "forceCustomSpeech": !![] }), this["_addLog"]("success", "✓ AI Gen Dialogue สำเร็จ (" + _0x2d816c["length"] + " ตัวอักษร) — บังคับบทพูดเปิดอัตโนมัติ");
    } catch (_0xdfb64c) {
      const _0x266138 = _0xdfb64c instanceof Error ? _0xdfb64c["message"] : String(_0xdfb64c);
      this["_addLog"]("error", "❌ AI Gen Dialogue: " + _0x266138);
    } finally {
      const _0x568cf5 = { ...this["dialogueGenerating"] };
      delete _0x568cf5[_0x53af5c["id"]], this["dialogueGenerating"] = _0x568cf5;
    }
  }
  async ["_prepareProduct"](_0xdb841c) {
    var _a2, _b, _c;
    const _0x2f0c0a = this["products"][_0xdb841c];
    if (!_0x2f0c0a) return;
    if (this["preparing"][_0x2f0c0a["id"]]) return;
    const _0x19b688 = (_0x2f0c0a["productImages"] || [])["some"](Boolean) || !!_0x2f0c0a["modelImage"];
    if (!_0x19b688 && !((_a2 = _0x2f0c0a["name"]) == null ? void 0 : _a2["trim"]()) && !((_b = _0x2f0c0a["description"]) == null ? void 0 : _b["trim"]())) {
      this["_addLog"]("warn", "⚠ ต้องมีรูปสินค้า หรือชื่อ หรือรายละเอียดสินค้าอย่างน้อย 1 อย่างก่อนกด Prepare");
      return;
    }
    this["preparing"] = { ...this["preparing"], [_0x2f0c0a["id"]]: !![] };
    try {
      const _0x2d5159 = this["multiSceneEnabled"] ? this["sceneCount"] : 1, _0x3795c6 = { "aspectRatio": this["aspectRatio"], "mode": this["mode"], "imageCount": parseInt(this["imageCount"]), "clipCount": parseInt(this["clipCount"]), "videoModel": this["videoModel"], "videoDuration": this["videoDuration"], "imageModel": this["imageModel"], "scriptStyle": this["scriptStyle"], "modelType": this["modelType"], "voiceType": this["voiceType"], "imageStyle": this["imageStyle"], "videoStyle": this["videoStyle"], "imageCameraAngle": this["imageCameraAngle"], "videoCameraMovement": this["videoCameraMovement"], "poseStyle": this["poseStyle"], "sceneType": this["sceneType"], "customSceneDesc": this["customSceneDesc"], "lighting": this["lighting"], "textColor": this["textColor"], "textPosition": this["textPosition"], "sceneCount": _0x2d5159, "promptLanguage": this["promptLanguage"], "videoPromptStyle": this["videoPromptStyle"], "customSpeech": "", "forceCustomSpeech": ![], "loopEnabled": ![], "loopCount": 1, "loopDelay": 0, "saveClip": ![], "clipQuality": "720p", "noBasket": ![] };
      this["_addLog"]("info", '✨ Prepare: "' + (_0x2f0c0a["name"] || "(ยังไม่มีชื่อ)")["slice"](0, 40) + '" (' + _0x2d5159 + " ฉาก)...");
      const _0x1ffb54 = await chrome["runtime"]["sendMessage"]({ "type": "PREPARE_PRODUCT_BLUEPRINT", "payload": { "product": _0x2f0c0a, "settings": _0x3795c6 } });
      if (!(_0x1ffb54 == null ? void 0 : _0x1ffb54["ok"]) || !_0x1ffb54["blueprint"]) {
        this["_addLog"]("error", "❌ Prepare ไม่สำเร็จ: " + ((_0x1ffb54 == null ? void 0 : _0x1ffb54["error"]) || "unknown"));
        return;
      }
      const _0x1a4a8a = _0x1ffb54["blueprint"], _0x2fd6c7 = { "name": _0x1a4a8a["productName"], "customSpeech": _0x1a4a8a["speech"], "forceCustomSpeech": !![], "customImageText": _0x1a4a8a["imageText"], "customCaptionOverride": _0x1a4a8a["caption"], "hashtags": _0x1a4a8a["hashtags"], "customImagePromptOverride": _0x1a4a8a["imagePrompt"], "customVideoPromptOverride": _0x1a4a8a["videoPrompt"] };
      if (_0x1a4a8a["sceneDesc"]["trim"]()) _0x2fd6c7["customSceneDescOverride"] = _0x1a4a8a["sceneDesc"];
      !((_c = _0x2f0c0a["basketName"]) == null ? void 0 : _c["trim"]()) && (_0x2fd6c7["basketName"] = (_0x1a4a8a["basketName"] || _0x1a4a8a["productName"] || "")["slice"](0, 30)["trim"]()), this["_updateProduct"](_0xdb841c, _0x2fd6c7), this["_addLog"]("success", '✓ Prepare สำเร็จ — ชื่อ "' + _0x1a4a8a["productName"] + '" + บทพูด ' + _0x1a4a8a["speech"]["length"] + " ตัวอักษร + caption + hashtags + prompt รูป/วิดีโอ" + (_0x2fd6c7["basketName"] ? ' + ชื่อตะกร้า "' + _0x2fd6c7["basketName"] + '"' : ""));
    } catch (_0x289ec0) {
      const _0x1682c1 = _0x289ec0 instanceof Error ? _0x289ec0["message"] : String(_0x289ec0);
      this["_addLog"]("error", "❌ Prepare: " + _0x1682c1);
    } finally {
      const _0x5e7e7e = { ...this["preparing"] };
      delete _0x5e7e7e[_0x2f0c0a["id"]], this["preparing"] = _0x5e7e7e;
    }
  }
  ["_pickSingleImage"](_0x32747a, _0x77c91, _0x1bbe25) {
    const _0x2a1464 = document["createElement"]("input");
    _0x2a1464["type"] = "file", _0x2a1464["accept"] = "image/png,image/jpeg,image/webp", _0x2a1464["onchange"] = () => {
      var _a2;
      const _0x3cf18c = (_a2 = _0x2a1464["files"]) == null ? void 0 : _a2[0];
      if (!_0x3cf18c) return;
      const _0x10c333 = new FileReader();
      _0x10c333["onload"] = () => {
        const _0x4d8277 = _0x10c333["result"];
        if (_0x1bbe25 === "model") this["_updateProduct"](_0x32747a, { "modelImage": _0x4d8277 });
        else {
          const _0x592f2f = this["products"][_0x32747a], _0x294ca4 = [..._0x592f2f["productImages"]];
          _0x294ca4[_0x77c91] = _0x4d8277, this["_updateProduct"](_0x32747a, { "productImages": _0x294ca4 });
        }
      }, _0x10c333["readAsDataURL"](_0x3cf18c);
    }, _0x2a1464["click"]();
  }
  ["_removeImage"](_0xd694d1, _0x270113, _0x5d937f) {
    if (_0x5d937f === "model") this["_updateProduct"](_0xd694d1, { "modelImage": void 0 });
    else {
      const _0x214d6a = this["products"][_0xd694d1], _0x368db5 = _0x214d6a["productImages"]["filter"]((_0x374e3b, _0x44a289) => _0x44a289 !== _0x270113);
      this["_updateProduct"](_0xd694d1, { "productImages": _0x368db5 });
    }
  }
  ["_spreadModelImage"]() {
    const _0x49452f = this["products"][0];
    if (!(_0x49452f == null ? void 0 : _0x49452f["modelImage"]) || this["products"]["length"] < 2) return;
    this["products"] = this["products"]["map"]((_0x2e6025, _0x4c0a7f) => _0x4c0a7f === 0 ? _0x2e6025 : { ..._0x2e6025, "modelImage": _0x49452f["modelImage"] });
  }
  ["_spreadOptions"]() {
    const _0x55f636 = this["products"][0];
    if (!_0x55f636 || this["products"]["length"] < 2) {
      alert("ต้องมีอย่างน้อย 2 สินค้าจึงกระจายได้");
      return;
    }
    this["products"] = this["products"]["map"]((_0x5b2f55, _0x3c8b25) => _0x3c8b25 === 0 ? _0x5b2f55 : { ..._0x5b2f55, "showImageText": _0x55f636["showImageText"], "useCustomVideoSettings": _0x55f636["useCustomVideoSettings"], "lipSyncOverride": _0x55f636["lipSyncOverride"], "forceCustomSpeech": _0x55f636["forceCustomSpeech"], "imageNegativeWords": _0x55f636["imageNegativeWords"], "imageModelOverride": _0x55f636["imageModelOverride"], "modelTypeOverride": _0x55f636["modelTypeOverride"], "voiceTypeOverride": _0x55f636["voiceTypeOverride"], "imageStyleOverride": _0x55f636["imageStyleOverride"], "videoStyleOverride": _0x55f636["videoStyleOverride"], "imageCameraAngleOverride": _0x55f636["imageCameraAngleOverride"], "videoCameraMovementOverride": _0x55f636["videoCameraMovementOverride"], "poseStyleOverride": _0x55f636["poseStyleOverride"], "sceneTypeOverride": _0x55f636["sceneTypeOverride"], "lightingOverride": _0x55f636["lightingOverride"], "textColorOverride": _0x55f636["textColorOverride"], "textPositionOverride": _0x55f636["textPositionOverride"], "scriptStyleOverride": _0x55f636["scriptStyleOverride"], "promptLanguageOverride": _0x55f636["promptLanguageOverride"] });
    const _0x2bb759 = this["products"]["length"] - 1;
    setTimeout(() => {
      const _0x485ab2 = this["shadowRoot"];
      _0x485ab2 && _0x485ab2["querySelectorAll"]("details")["forEach"]((_0x54447e) => _0x54447e["open"] = !![]);
    }, 50), alert("✓ กระจาย options จากสินค้า #1 ไปอีก " + _0x2bb759 + " สินค้าแล้ว");
  }
  async ["_exportProducts"]() {
    if (this["products"]["length"] === 0 || this["importExportBusy"]) return;
    this["importExportBusy"] = !![], this["importExportLabel"] = "แปลงรูปเป็น base64", this["importExportDone"] = 0, this["importExportTotal"] = this["products"]["reduce"]((_0x332953, _0x264556) => {
      var _a2;
      return _0x332953 + (((_a2 = _0x264556["productImages"]) == null ? void 0 : _a2["length"]) || 0) + (_0x264556["modelImage"] ? 1 : 0);
    }, 0);
    const _0x37f648 = () => {
      this["importExportDone"]++;
    };
    try {
      const _0x236f4a = [];
      for (const _0x1dc5ab of this["products"]) {
        const _0xf38d9c = await normalizeImageList(_0x1dc5ab["productImages"] || [], _0x37f648);
        let _0x50a597 = _0x1dc5ab["modelImage"];
        if (_0x50a597) {
          const [_0x1ebacf] = await normalizeImageList([_0x50a597], _0x37f648);
          _0x50a597 = _0x1ebacf || void 0;
        }
        _0x236f4a["push"]({ ..._0x1dc5ab, "productImages": _0xf38d9c, "modelImage": _0x50a597 });
      }
      const _0x349cfc = JSON["stringify"](wrapExport(_0x236f4a), null, 2), _0x56b293 = new Blob([_0x349cfc], { "type": "application/json" }), _0x1369e9 = URL["createObjectURL"](_0x56b293), _0x274a6c = document["createElement"]("a");
      _0x274a6c["href"] = _0x1369e9, _0x274a6c["download"] = "autogenx-products-" + Date["now"]() + ".json", _0x274a6c["click"](), URL["revokeObjectURL"](_0x1369e9);
    } catch (_0x1b8635) {
      log$8["error"]("Export failed", _0x1b8635), alert("Export ล้มเหลว: " + (_0x1b8635 instanceof Error ? _0x1b8635["message"] : String(_0x1b8635)));
    } finally {
      this["importExportBusy"] = ![], this["importExportLabel"] = "", this["importExportDone"] = 0, this["importExportTotal"] = 0;
    }
  }
  ["_importProducts"]() {
    var _a2, _b;
    if (this["importExportBusy"]) return;
    (_b = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["getElementById"]("importInput")) == null ? void 0 : _b["click"]();
  }
  async ["_onImportFile"](_0x48345e) {
    var _a2;
    const _0x28211d = _0x48345e["target"], _0x5f1aed = (_a2 = _0x28211d["files"]) == null ? void 0 : _a2[0];
    if (!_0x5f1aed) return;
    _0x28211d["value"] = "";
    if (this["importExportBusy"]) return;
    log$8["info"]("Importing file: " + _0x5f1aed["name"] + " (" + (_0x5f1aed["size"] / 1024)["toFixed"](1) + " KB)"), this["importExportBusy"] = !![], this["importExportLabel"] = "อ่านไฟล์", this["importExportDone"] = 0, this["importExportTotal"] = 0;
    try {
      const _0x39282b = await _0x5f1aed["text"](), _0x31878d = JSON["parse"](_0x39282b), _0x3c9c34 = unwrapImport(_0x31878d)["slice"](0, 50);
      log$8["info"]("Parsed " + _0x3c9c34["length"] + " items from JSON");
      if (_0x3c9c34["length"] === 0) return;
      this["importExportLabel"] = "แปลงรูปเป็น base64", this["importExportTotal"] = _0x3c9c34["reduce"]((_0x19fbdc, _0xad7c2b) => {
        const _0x2422dd = _0xad7c2b, _0x145ae8 = Array["isArray"](_0x2422dd["productImages"]) ? _0x2422dd["productImages"]["length"] : _0x2422dd["imageDataUrl"] || _0x2422dd["productImage"] ? 1 : 0;
        return _0x19fbdc + _0x145ae8 + (_0x2422dd["modelImage"] ? 1 : 0);
      }, 0);
      const _0x5aba61 = () => {
        this["importExportDone"]++;
      }, _0x11b6ed = [];
      for (const _0x4ff524 of _0x3c9c34) {
        const _0x2bd213 = _0x4ff524, _0x358664 = (() => {
          if (Array["isArray"](_0x2bd213["productImages"])) return _0x2bd213["productImages"]["map"]((_0x1d0949) => String(_0x1d0949 || ""))["filter"](Boolean);
          const _0x438d2b = _0x2bd213["imageDataUrl"] || _0x2bd213["productImage"] || "";
          return _0x438d2b ? [String(_0x438d2b)] : [];
        })(), _0x13161c = await normalizeImageList(_0x358664, _0x5aba61);
        let _0xe3a97f;
        if (_0x2bd213["modelImage"]) {
          const [_0x201ee3] = await normalizeImageList([String(_0x2bd213["modelImage"])], _0x5aba61);
          _0xe3a97f = _0x201ee3 || void 0;
        }
        const _0x5c23e0 = _0x2bd213["productId"] != null ? String(_0x2bd213["productId"]) : void 0;
        _0x11b6ed["push"]({ "id": _0x2bd213["id"] || _0x5c23e0 || crypto["randomUUID"](), "productId": _0x5c23e0, "name": _0x2bd213["name"] || _0x2bd213["productName"] || "", "category": _0x2bd213["category"], "productImages": _0x13161c, "modelImage": _0xe3a97f, "showImageText": _0x2bd213["showImageText"], "customImageText": _0x2bd213["customImageText"], "imageNegativeWords": _0x2bd213["imageNegativeWords"], "customSpeech": _0x2bd213["customSpeech"], "openingSpeech": _0x2bd213["openingSpeech"], "negativeSpeech": _0x2bd213["negativeSpeech"], "basketName": _0x2bd213["basketName"] || void 0, "hashtags": _0x2bd213["hashtags"], "useCustomVideoSettings": _0x2bd213["useCustomVideoSettings"], "imageModelOverride": _0x2bd213["imageModelOverride"], "modelTypeOverride": _0x2bd213["modelTypeOverride"], "voiceTypeOverride": _0x2bd213["voiceTypeOverride"], "imageStyleOverride": _0x2bd213["imageStyleOverride"], "videoStyleOverride": _0x2bd213["videoStyleOverride"], "imageCameraAngleOverride": _0x2bd213["imageCameraAngleOverride"], "videoCameraMovementOverride": _0x2bd213["videoCameraMovementOverride"], "poseStyleOverride": _0x2bd213["poseStyleOverride"], "sceneTypeOverride": _0x2bd213["sceneTypeOverride"], "lightingOverride": _0x2bd213["lightingOverride"], "textColorOverride": _0x2bd213["textColorOverride"], "textPositionOverride": _0x2bd213["textPositionOverride"], "scriptStyleOverride": _0x2bd213["scriptStyleOverride"], "promptLanguageOverride": _0x2bd213["promptLanguageOverride"], "extraAIInstructionOverride": _0x2bd213["extraAIInstructionOverride"], "customImagePromptOverride": _0x2bd213["customImagePromptOverride"] });
      }
      this["products"] = _0x11b6ed, log$8["info"]("Loaded " + this["products"]["length"] + " products");
    } catch (_0x1b629b) {
      log$8["error"]("Failed to parse/import file", _0x1b629b), alert("Import ล้มเหลว: " + (_0x1b629b instanceof Error ? _0x1b629b["message"] : String(_0x1b629b)));
    } finally {
      this["importExportBusy"] = ![], this["importExportLabel"] = "", this["importExportDone"] = 0, this["importExportTotal"] = 0;
    }
  }
  async ["_start"]() {
    if (this["products"]["length"] === 0) return;
    const _0x709910 = this["products"]["map"]((_0x7a6dd9, _0x420cce) => ({ "i": _0x420cce, "name": (_0x7a6dd9["name"] || "")["trim"]() }))["filter"]((_0x332538) => _0x332538["name"] === "");
    if (_0x709910["length"] > 0) {
      const _0x15f601 = _0x709910["map"]((_0xf4aad3) => "#" + (_0xf4aad3["i"] + 1))["join"](", ");
      this["_addLog"]("warn", "⚠ สินค้า " + _0x15f601 + ' ยังไม่มีชื่อ — ใส่ชื่อ หรือกดปุ่ม "✨ Prepare" ที่สินค้านั้นเพื่อให้ AI คิดชื่อให้ ก่อนเริ่มสร้าง');
      return;
    }
    this["running"] = !![];
    const _0x5285e5 = { "products": this["products"], "settings": { "aspectRatio": this["aspectRatio"], "mode": this["mode"], "imageCount": parseInt(this["imageCount"]), "clipCount": parseInt(this["clipCount"]), "videoModel": this["videoModel"], "videoDuration": this["videoDuration"], "imageModel": this["imageModel"], "scriptStyle": this["scriptStyle"], "modelType": this["modelType"], "voiceType": this["voiceType"], "lipSync": this["lipSync"], "customVoiceDesc": this["customVoiceDesc"], "lighting": this["lighting"], "imageStyle": this["imageStyle"], "videoStyle": this["videoStyle"], "imageCameraAngle": this["imageCameraAngle"], "videoCameraMovement": this["videoCameraMovement"], "poseStyle": this["poseStyle"], "sceneType": this["sceneType"], "customSceneDesc": this["customSceneDesc"]["trim"](), "textColor": this["textColor"], "textPosition": this["textPosition"], "promptLanguage": this["promptLanguage"], "videoPromptStyle": this["videoPromptStyle"], "extraAIInstruction": this["extraAIInstruction"], "useImageAI": this["useImageAI"], "slowUploadMode": this["slowUploadMode"], "customUploadWaitSec": this["customUploadWaitSec"], "useVideoAI": this["useVideoAI"], "customImageText": this["customImageText"], "imageNegativeWords": this["imageNegativeWords"], "customSpeech": this["customSpeech"], "forceCustomSpeech": this["forceCustomSpeech"], "openingSpeech": this["openingSpeech"], "negativeSpeech": this["negativeSpeech"], "sceneCount": this["multiSceneEnabled"] ? this["sceneCount"] : 1, "assemblyMode": this["assemblyMode"], "ingredientMode": this["ingredientMode"], "extendScene": this["extendScene"], "clipDuration": parseInt(this["clipDuration"]), "autoPost": this["multiSceneEnabled"] && this["assemblyMode"] === "scenebuilder" ? ![] : this["autoPost"], "postType": this["postType"], "scheduleDate": this["scheduleDate"], "scheduleHour": this["scheduleHour"], "scheduleMinute": this["scheduleMinute"], "scheduleInterval": this["scheduleInterval"], "loopEnabled": this["loopEnabled"], "loopCount": this["loopCount"], "loopDelay": parseInt(this["loopDelay"]), "productDelay": this["productDelayEnabled"] ? parseInt(this["productDelay"]) || 0 : 0, "loopAllEnabled": this["loopAllEnabled"], "loopAllCount": this["loopAllEnabled"] ? this["loopAllCount"] || 2 : 1, "saveClip": this["multiSceneEnabled"] ? ![] : this["saveClip"], "clipQuality": this["clipQuality"], "noBasket": this["noBasket"] } };
    this["dispatchEvent"](new CustomEvent("auto-start", { "detail": _0x5285e5, "bubbles": !![], "composed": !![] }));
  }
  ["_stop"]() {
    this["running"] = ![], this["dispatchEvent"](new CustomEvent("auto-stop", { "bubbles": !![], "composed": !![] }));
  }
};
AgxAutoMode["STORAGE_KEY"] = "agx_auto_products", AgxAutoMode["SETTINGS_KEY"] = "agx_auto_settings", AgxAutoMode["PERSIST_FIELDS"] = ["aspectRatio", "mode", "imageCount", "clipCount", "videoModel", "videoDuration", "imageModel", "scriptStyle", "modelType", "voiceType", "imageStyle", "videoStyle", "imageCameraAngle", "videoCameraMovement", "poseStyle", "sceneType", "customSceneDesc", "textColor", "textPosition", "promptLanguage", "videoPromptStyle", "extraAIInstruction", "lighting", "customVoiceDesc", "lipSync", "customImageText", "imageNegativeWords", "customSpeech", "forceCustomSpeech", "openingSpeech", "negativeSpeech", "useImageAI", "useVideoAI", "slowUploadMode", "customUploadWaitSec", "loopEnabled", "loopCount", "loopDelay", "productDelayEnabled", "productDelay", "loopAllEnabled", "loopAllCount", "saveClip", "clipQuality", "autoPost", "postType", "noBasket", "scheduleDate", "scheduleHour", "scheduleMinute", "scheduleInterval", "ingredientMode", "multiSceneEnabled", "sceneCount", "assemblyMode", "extendScene", "clipDuration"], AgxAutoMode["styles"] = i$3`
    :host { display: block; }

    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .toolbar-left {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .toolbar-btn {
      padding: 4px 8px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      font-size: 11px;
      cursor: pointer;
    }

    .toolbar-btn:hover {
      background: var(--agx-bg-hover);
      color: var(--agx-text-primary);
    }

    .toolbar-btn.danger {
      background: var(--agx-danger, #ef4444);
      color: #fff;
      border-color: var(--agx-danger, #ef4444);
    }

    .toolbar-btn.danger:hover {
      filter: brightness(1.1);
      color: #fff;
    }

    .count {
      font-size: 11px;
      color: var(--agx-text-muted);
    }

    .progress-wrap {
      margin: 8px 0;
    }
    .progress-bar {
      height: 6px;
      background: rgba(255,255,255,0.08);
      border-radius: 3px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #2F6BFF, #4A8DFF);
      transition: width 200ms ease;
    }
    .progress-text {
      font-size: 10px;
      color: var(--agx-text-muted, #94a3b8);
      text-align: center;
      margin-top: 4px;
    }

    /* Product set card */
    .product-card {
      padding: 10px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      margin-bottom: 6px;
    }

    .product-header {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .product-name-input {
      flex: 1;
      padding: 4px 6px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: 4px;
      color: var(--agx-text-primary);
      font-family: var(--agx-font-thai);
      font-size: 12px;
      box-sizing: border-box;
    }

    .product-name-input:focus {
      outline: none;
      border-color: var(--agx-accent);
    }

    .product-remove {
      background: none;
      border: none;
      color: var(--agx-text-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
    }

    .product-remove:hover { color: var(--agx-danger); }

    /* Image upload row */
    .image-row {
      display: flex;
      gap: 6px;
      margin-top: 8px;
    }

    .upload-box {
      width: 52px;
      height: 52px;
      border-radius: var(--agx-radius-sm);
      background: var(--agx-bg-surface);
      border: 1px dashed var(--agx-border-subtle);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;
      overflow: hidden;
      flex-shrink: 0;
      position: relative;
    }

    .upload-box:hover {
      border-color: var(--agx-accent);
      background: var(--agx-bg-hover);
    }

    .upload-box.model {
      border-color: rgba(74, 141, 255, 0.4);
    }

    .upload-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .upload-label {
      font-size: 8px;
      color: var(--agx-text-muted);
      margin-top: 1px;
    }

    .upload-remove {
      position: absolute;
      top: 1px;
      right: 1px;
      width: 14px;
      height: 14px;
      background: rgba(0,0,0,0.6);
      color: #fff;
      border: none;
      border-radius: 50%;
      font-size: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    /* Generic checkbox row (รันวนซ้ำ / โพสต์ TikTok / เซฟคลิป ฯลฯ) */
    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--agx-text, #e4e6eb);
      cursor: pointer;
    }
    .checkbox-row input[type="checkbox"] {
      width: 14px;
      height: 14px;
      margin: 0;
      cursor: pointer;
      accent-color: var(--agx-accent, #2F6BFF);
    }

    /* Spread buttons */
    .spread-row {
      display: flex;
      gap: 4px;
      margin-top: 6px;
    }

    .spread-btn {
      padding: 2px 6px;
      background: var(--agx-accent);
      color: #fff;
      border: none;
      border-radius: 3px;
      font-size: 9px;
      font-weight: 700;
      cursor: pointer;
    }

    .spread-btn:hover { filter: brightness(1.1); }

    /* Prepare button (per product) */
    .prepare-row {
      margin-top: 6px;
    }
    .prepare-btn {
      width: 100%;
      padding: 6px 10px;
      background: linear-gradient(135deg, rgba(74, 141, 255, 0.18), rgba(167, 71, 255, 0.18));
      border: 1px solid rgba(74, 141, 255, 0.5);
      color: var(--agx-accent, #6aa9ff);
      font-size: 11px;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
    }
    .prepare-btn:hover:not(:disabled) { filter: brightness(1.15); }
    .prepare-btn:disabled { opacity: 0.55; cursor: not-allowed; }

    /* Per-product options (collapsible) */
    .product-options {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px solid var(--agx-border-subtle);
    }

    .product-options summary {
      font-size: 10px;
      color: var(--agx-text-muted);
      cursor: pointer;
      user-select: none;
    }

    .product-options .opt-field {
      margin-top: 4px;
    }

    .product-options .opt-label {
      font-size: 12px;
      color: var(--agx-text-secondary);
      margin-bottom: 3px;
    }

    .product-options .ai-gen-btn {
      background: linear-gradient(135deg, rgba(74, 141, 255, 0.18), rgba(167, 71, 255, 0.18));
      border: 1px solid rgba(74, 141, 255, 0.5);
      color: var(--agx-accent, #6aa9ff);
      font-size: 10.5px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .product-options .ai-gen-btn:hover:not(:disabled) {
      background: linear-gradient(135deg, rgba(74, 141, 255, 0.32), rgba(167, 71, 255, 0.32));
      border-color: rgba(74, 141, 255, 0.8);
    }
    .product-options .ai-gen-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Small ||| separator insert button — กดแล้วใส่ ||| ที่ตำแหน่ง cursor (สำหรับ multi-scene split) */
    .product-options .sep-btn {
      background: rgba(167, 71, 255, 0.12);
      border: 1px solid rgba(167, 71, 255, 0.45);
      color: rgba(167, 71, 255, 0.95);
      font-size: 10px;
      font-weight: 700;
      padding: 1px 6px;
      border-radius: 5px;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.15s;
    }
    .product-options .sep-btn:hover {
      background: rgba(167, 71, 255, 0.24);
      border-color: rgba(167, 71, 255, 0.7);
    }

    /* "กระจายลงทุกสินค้า" — copy this field's value to every product */
    .product-options .dist-btn {
      background: rgba(34, 197, 94, 0.12);
      border: 1px solid rgba(34, 197, 94, 0.45);
      color: rgba(74, 222, 128, 0.95);
      font-size: 10px;
      font-weight: 600;
      padding: 1px 7px;
      border-radius: 5px;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .product-options .dist-btn:hover {
      background: rgba(34, 197, 94, 0.24);
      border-color: rgba(34, 197, 94, 0.7);
    }

    .product-options .checkbox-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--agx-text-secondary);
      cursor: pointer;
      padding: 2px 0;
    }

    .product-options .checkbox-row input[type="checkbox"] {
      width: 13px;
      height: 13px;
      margin: 0;
      cursor: pointer;
      accent-color: var(--agx-accent, #2F6BFF);
    }

    .product-options input,
    .product-options textarea {
      width: 100%;
      padding: 3px 5px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: 3px;
      color: var(--agx-text-primary);
      font-family: var(--agx-font-thai);
      font-size: 11px;
      box-sizing: border-box;
      resize: vertical;
    }

    .product-options input:focus,
    .product-options textarea:focus,
    .product-options select:focus {
      outline: none;
      border-color: var(--agx-accent);
    }

    .tab-bar {
      display: flex;
      gap: 2px;
      margin-top: 6px;
      margin-bottom: 6px;
      background: var(--agx-bg-deep, #000);
      border-radius: 4px;
      padding: 2px;
    }

    .tab-btn {
      flex: 1;
      padding: 4px 8px;
      background: transparent;
      border: none;
      color: var(--agx-text-muted);
      font-family: var(--agx-font-thai);
      font-size: 11px;
      border-radius: 3px;
      cursor: pointer;
    }

    .tab-btn:hover {
      color: var(--agx-text-primary);
    }

    .tab-btn.active {
      background: var(--agx-accent);
      color: #fff;
    }

    .override-section {
      margin-top: 8px;
      padding-top: 6px;
      border-top: 1px dashed var(--agx-border-subtle);
    }

    .override-toggle {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: var(--agx-text-secondary);
      cursor: pointer;
      user-select: none;
    }

    .override-toggle input[type="checkbox"] {
      width: auto;
      cursor: pointer;
    }

    .override-select {
      width: 100%;
      padding: 3px 5px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: 3px;
      color: var(--agx-text-primary);
      font-family: var(--agx-font-thai);
      font-size: 11px;
      box-sizing: border-box;
      cursor: pointer;
    }

    .empty-state {
      text-align: center;
      padding: 20px;
      color: var(--agx-text-muted);
      font-size: 12px;
    }

    .form-row {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
    }

    .form-row > * { flex: 1; }

    .start-section {
      padding: 12px 0;
      display: flex;
      gap: 8px;
    }

    .start-section > *:first-child { flex: 1; }

    .hidden-input { display: none; }

    /* Log section */
    .log-section {
      margin-top: 8px;
    }

    .log-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      cursor: pointer;
      user-select: none;
    }

    .log-header:hover {
      background: var(--agx-bg-hover);
    }

    .log-title {
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .log-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--agx-text-muted);
    }

    .log-dot.active {
      background: var(--agx-success);
      animation: pulse 1.5s ease infinite;
    }

    .log-dot.error {
      background: var(--agx-danger);
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .log-actions {
      display: flex;
      gap: 4px;
    }

    .log-action-btn {
      padding: 2px 6px;
      background: none;
      border: none;
      color: var(--agx-text-muted);
      font-size: 11px;
      cursor: pointer;
      border-radius: 3px;
    }

    .log-action-btn:hover {
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
    }

    .log-body {
      margin-top: 4px;
    }
  `, __decorateClass$d([r()], AgxAutoMode["prototype"], "products", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "aspectRatio", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "mode", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "imageCount", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "clipCount", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "videoModel", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "videoDuration", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "imageModel", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "scriptStyle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "modelType", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "voiceType", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "imageStyle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "videoStyle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "imageCameraAngle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "videoCameraMovement", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "poseStyle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "sceneType", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "customSceneDesc", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "textColor", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "textPosition", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "promptLanguage", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "videoPromptStyle", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "extraAIInstruction", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "lighting", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "customVoiceDesc", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "lipSync", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "customImageText", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "imageNegativeWords", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "customSpeech", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "forceCustomSpeech", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "openingSpeech", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "negativeSpeech", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "useImageAI", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "useVideoAI", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "slowUploadMode", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "customUploadWaitSec", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "productTabs", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "loopEnabled", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "loopCount", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "loopDelay", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "productDelayEnabled", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "productDelay", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "loopAllEnabled", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "loopAllCount", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "saveClip", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "clipQuality", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "autoPost", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "postType", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "noBasket", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "scheduleDate", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "scheduleHour", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "scheduleMinute", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "scheduleInterval", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "ingredientMode", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "multiSceneEnabled", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "sceneCount", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "assemblyMode", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "extendScene", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "clipDuration", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "running", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "showLog", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "logEntries", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "importExportBusy", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "importExportLabel", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "importExportDone", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "importExportTotal", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "dialogueGenerating", 2), __decorateClass$d([r()], AgxAutoMode["prototype"], "preparing", 2), AgxAutoMode = __decorateClass$d([t$1("agx-auto-mode")], AgxAutoMode);
var __defProp$c = Object["defineProperty"], __getOwnPropDesc$c = Object["getOwnPropertyDescriptor"], __decorateClass$c = (_0x1e61d4, _0x5163e4, _0x5bd682, _0xc6e9c0) => {
  var _0x49573b = _0xc6e9c0 > 1 ? void 0 : _0xc6e9c0 ? __getOwnPropDesc$c(_0x5163e4, _0x5bd682) : _0x5163e4;
  for (var _0x408256 = _0x1e61d4["length"] - 1, _0x1ef995; _0x408256 >= 0; _0x408256--) if (_0x1ef995 = _0x1e61d4[_0x408256]) _0x49573b = (_0xc6e9c0 ? _0x1ef995(_0x5163e4, _0x5bd682, _0x49573b) : _0x1ef995(_0x49573b)) || _0x49573b;
  if (_0xc6e9c0 && _0x49573b) __defProp$c(_0x5163e4, _0x5bd682, _0x49573b);
  return _0x49573b;
};
let AgxPickerModal = class extends i {
  constructor() {
    super(...arguments), this["title"] = "เลือก", this["options"] = [], this["selectedIds"] = [], this["local"] = /* @__PURE__ */ new Set(), this["_selectAll"] = () => {
      this["local"] = new Set(this["options"]["map"]((_0x273c23) => _0x273c23["id"]));
    }, this["_deselectAll"] = () => {
      this["local"] = /* @__PURE__ */ new Set();
    }, this["_selectSafe"] = () => {
      this["local"] = new Set(this["options"]["filter"]((_0x418a99) => !_0x418a99["isAdult"])["map"]((_0x51c5bf) => _0x51c5bf["id"]));
    }, this["_save"] = () => {
      this["dispatchEvent"](new CustomEvent("save", { "detail": { "selectedIds": [...this["local"]] }, "bubbles": !![], "composed": !![] }));
    }, this["_cancel"] = () => {
      this["dispatchEvent"](new CustomEvent("close", { "bubbles": !![], "composed": !![] }));
    }, this["_onBackdropClick"] = () => {
      this["_cancel"]();
    };
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["local"] = new Set(this["selectedIds"]);
  }
  ["render"]() {
    const _0x13d880 = this["local"]["size"];
    return b`
      <div class="backdrop" @click=${this["_onBackdropClick"]}>
        <div class="modal" @click=${(_0x2e26f8) => _0x2e26f8["stopPropagation"]()}>
          <div class="header">
            <span class="title">${this["title"]}</span>
            <button class="close-btn" @click=${this["_cancel"]}>✕</button>
          </div>

          <div class="quick-actions">
            <button class="quick-btn" @click=${this["_selectAll"]}>เลือกทั้งหมด</button>
            <button class="quick-btn" @click=${this["_deselectAll"]}>ยกเลิกทั้งหมด</button>
            <button class="quick-btn" @click=${this["_selectSafe"]}>เฉพาะไม่ 18+</button>
          </div>

          <div class="count">เลือก ${_0x13d880}/${this["options"]["length"]}</div>

          <div class="list">
            ${this["options"]["map"]((_0x2ab2cf) => b`
              <label class="item">
                <input
                  type="checkbox"
                  ?checked=${this["local"]["has"](_0x2ab2cf["id"])}
                  @change=${(_0x2659e8) => this["_toggle"](_0x2ab2cf["id"], _0x2659e8["target"]["checked"])}
                />
                <span>${_0x2ab2cf["label"]}</span>
              </label>
            `)}
          </div>

          <div class="footer">
            <button class="btn cancel" @click=${this["_cancel"]}>ยกเลิก</button>
            <button class="btn save" @click=${this["_save"]}>บันทึก</button>
          </div>
        </div>
      </div>
    `;
  }
  ["_toggle"](_0x555bbf, _0x1ee955) {
    const _0x1f24a4 = new Set(this["local"]);
    if (_0x1ee955) _0x1f24a4["add"](_0x555bbf);
    else _0x1f24a4["delete"](_0x555bbf);
    this["local"] = _0x1f24a4;
  }
};
AgxPickerModal["styles"] = i$3`
    :host { display: block; }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal {
      background: var(--agx-bg-card, #1a2730);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-lg, 10px);
      max-width: 380px;
      width: 100%;
      max-height: 80vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .header {
      padding: 12px 14px;
      border-bottom: 1px solid var(--agx-border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      font-size: 13px;
      font-weight: 600;
      color: var(--agx-text-primary);
    }

    .close-btn {
      background: none;
      border: none;
      color: var(--agx-text-muted);
      font-size: 18px;
      cursor: pointer;
      padding: 0 4px;
    }

    .quick-actions {
      padding: 8px 14px;
      display: flex;
      gap: 6px;
      border-bottom: 1px solid var(--agx-border-subtle);
    }

    .quick-btn {
      padding: 4px 8px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      font-family: var(--agx-font-thai);
      font-size: 11px;
      cursor: pointer;
    }
    .quick-btn:hover { background: var(--agx-bg-hover); color: var(--agx-text-primary); }

    .list {
      overflow-y: auto;
      flex: 1;
      padding: 8px 14px;
    }

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 4px;
      cursor: pointer;
      font-size: 12px;
      color: var(--agx-text-primary);
      font-family: var(--agx-font-thai);
    }
    .item:hover { background: var(--agx-bg-hover); border-radius: 4px; }
    .item input { cursor: pointer; }

    .count {
      font-size: 11px;
      color: var(--agx-text-muted);
      padding: 0 14px 6px;
    }

    .footer {
      padding: 10px 14px;
      border-top: 1px solid var(--agx-border-subtle);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    .btn {
      padding: 6px 14px;
      border-radius: var(--agx-radius-sm);
      border: 1px solid var(--agx-border-subtle);
      font-family: var(--agx-font-thai);
      font-size: 12px;
      cursor: pointer;
    }
    .btn.cancel {
      background: transparent;
      color: var(--agx-text-secondary);
    }
    .btn.save {
      background: var(--agx-accent);
      color: #fff;
      border-color: var(--agx-accent);
    }
  `, __decorateClass$c([n2()], AgxPickerModal["prototype"], "title", 2), __decorateClass$c([n2({ "type": Array })], AgxPickerModal["prototype"], "options", 2), __decorateClass$c([n2({ "type": Array })], AgxPickerModal["prototype"], "selectedIds", 2), __decorateClass$c([r()], AgxPickerModal["prototype"], "local", 2), AgxPickerModal = __decorateClass$c([t$1("agx-picker-modal")], AgxPickerModal);
var __defProp$b = Object["defineProperty"], __getOwnPropDesc$b = Object["getOwnPropertyDescriptor"], __decorateClass$b = (_0xedfd5, _0x201b60, _0x5ae949, _0x954653) => {
  var _0x2ba861 = _0x954653 > 1 ? void 0 : _0x954653 ? __getOwnPropDesc$b(_0x201b60, _0x5ae949) : _0x201b60;
  for (var _0x2afac6 = _0xedfd5["length"] - 1, _0x445584; _0x2afac6 >= 0; _0x2afac6--) if (_0x445584 = _0xedfd5[_0x2afac6]) _0x2ba861 = (_0x954653 ? _0x445584(_0x201b60, _0x5ae949, _0x2ba861) : _0x445584(_0x2ba861)) || _0x2ba861;
  if (_0x954653 && _0x2ba861) __defProp$b(_0x201b60, _0x5ae949, _0x2ba861);
  return _0x2ba861;
};
let AgxPreparedSceneCard = class extends i {
  constructor() {
    super(...arguments), this["index"] = 0, this["imagePrompt"] = "", this["videoPrompt"] = "";
  }
  ["render"]() {
    return b`
      <div class="card">
        <div class="header">📦 ฉาก ${this["index"] + 1}</div>

        <div class="row">
          <span class="label">🖼 Prompt สร้างรูป (image)</span>
          <textarea
            .value=${this["imagePrompt"]}
            @input=${(_0x23b152) => this["_onChange"]("imagePrompt", _0x23b152["target"]["value"])}
          ></textarea>
        </div>

        <div class="row">
          <span class="label">🎬 Prompt สร้างวิดีโอ (video) — บทพูดอยู่ท้ายประโยค</span>
          <textarea
            .value=${this["videoPrompt"]}
            @input=${(_0x1714a2) => this["_onChange"]("videoPrompt", _0x1714a2["target"]["value"])}
          ></textarea>
        </div>
      </div>
    `;
  }
  ["_onChange"](_0x17e908, _0x39b4c2) {
    this["dispatchEvent"](new CustomEvent("scene-change", { "detail": { "index": this["index"], "key": _0x17e908, "value": _0x39b4c2 }, "bubbles": !![], "composed": !![] }));
  }
};
AgxPreparedSceneCard["styles"] = i$3`
    :host { display: block; }
    .card {
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      background: var(--agx-bg-card);
      padding: 12px;
      margin-bottom: 12px;
    }
    .header {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--agx-text-primary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .label {
      font-size: 11px;
      color: var(--agx-text-secondary);
      margin-bottom: 4px;
      display: block;
    }
    textarea {
      width: 100%;
      min-height: 80px;
      max-height: 240px;
      padding: 8px;
      font-family: inherit;
      font-size: 12px;
      line-height: 1.4;
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      resize: vertical;
      box-sizing: border-box;
    }
    textarea:focus {
      outline: none;
      border-color: var(--agx-accent);
    }
    .row { margin-bottom: 10px; }
    .row:last-child { margin-bottom: 0; }
  `, __decorateClass$b([n2({ "type": Number })], AgxPreparedSceneCard["prototype"], "index", 2), __decorateClass$b([n2({ "type": String })], AgxPreparedSceneCard["prototype"], "imagePrompt", 2), __decorateClass$b([n2({ "type": String })], AgxPreparedSceneCard["prototype"], "videoPrompt", 2), AgxPreparedSceneCard = __decorateClass$b([t$1("agx-prepared-scene-card")], AgxPreparedSceneCard);
var __defProp$a = Object["defineProperty"], __getOwnPropDesc$a = Object["getOwnPropertyDescriptor"], __decorateClass$a = (_0x1642c0, _0x359a5b, _0x150a28, _0x3ee534) => {
  var _0x44c752 = _0x3ee534 > 1 ? void 0 : _0x3ee534 ? __getOwnPropDesc$a(_0x359a5b, _0x150a28) : _0x359a5b;
  for (var _0x4f48d9 = _0x1642c0["length"] - 1, _0x25df0c; _0x4f48d9 >= 0; _0x4f48d9--) if (_0x25df0c = _0x1642c0[_0x4f48d9]) _0x44c752 = (_0x3ee534 ? _0x25df0c(_0x359a5b, _0x150a28, _0x44c752) : _0x25df0c(_0x44c752)) || _0x44c752;
  if (_0x3ee534 && _0x44c752) __defProp$a(_0x359a5b, _0x150a28, _0x44c752);
  return _0x44c752;
};
let AgxCreatorStory = class extends i {
  constructor() {
    super(...arguments), this["topic"] = "", this["details"] = "", this["applyDetailsAllRounds"] = ![], this["manualPromptMode"] = ![], this["storyType"] = "cartoon", this["customType"] = "", this["realisticMode"] = ![], this["useCustomChars"] = ![], this["char1"] = { "name": "", "description": "", "useCartoonStyle": !![], "gender": "female", "voice": "teen_female" }, this["char2"] = { "name": "", "description": "", "useCartoonStyle": !![], "gender": "male", "voice": "teen_male" }, this["products"] = [], this["imageStyle"] = "pixar_3d", this["mood"] = "tough_love", this["audience"] = "general", this["randomStyle"] = ![], this["randomMood"] = ![], this["randomAudience"] = ![], this["stylePool"] = [], this["moodPool"] = [], this["audiencePool"] = [], this["pickerOpen"] = null, this["voiceMode"] = "lip_sync", this["voice"] = "teen_female", this["language"] = "th", this["coverEnabled"] = ![], this["coverText"] = "", this["coverPosition"] = "top", this["coverColor"] = "white", this["noTextOverlay"] = ![], this["disclaimerEnabled"] = ![], this["disclaimerPreset"] = "supplement", this["disclaimerText"] = "", this["disclaimerPosition"] = "bottom-right", this["customStructure"] = ![], this["randomStructure"] = ![], this["hookStyle"] = "question", this["bodyStyle"] = "intense", this["ctaStyle"] = "sweet", this["dramaSetup"] = "daily_life", this["dramaConflict"] = "betrayal", this["dramaTurning"] = "realization", this["dramaMoral"] = "gratitude", this["sceneCount"] = "4", this["randomSceneCount"] = ![], this["aspectRatio"] = "9:16", this["imageModel"] = "nano-banana-pro", this["videoModel"] = "veo-3.1-lite-lp", this["loopEnabled"] = ![], this["loopCount"] = 1, this["loopUnlimited"] = ![], this["loopDelay"] = "60", this["topicsOnlyLoop"] = ![], this["running"] = ![], this["prepareState"] = "idle", this["preparedScenes"] = [], this["prepareError"] = "", this["prepareErrorOpen"] = ![], this["prepareSnapshot"] = "", this["logEntries"] = [], this["showLog"] = ![], this["_pipelineListener"] = null, this["_onPickerSave"] = (_0x3c7c5d) => {
      const _0x2c480c = _0x3c7c5d["detail"]["selectedIds"];
      if (this["pickerOpen"] === "style") this["stylePool"] = _0x2c480c;
      else {
        if (this["pickerOpen"] === "mood") this["moodPool"] = _0x2c480c;
        else {
          if (this["pickerOpen"] === "audience") this["audiencePool"] = _0x2c480c;
        }
      }
      this["pickerOpen"] = null;
    };
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["_loadState"](), this["_pipelineListener"] = (_0x2b5e57) => {
      const _0x234d93 = _0x2b5e57["type"];
      if (_0x234d93 === "PIPELINE_LOG") {
        const _0xe1e732 = _0x2b5e57["payload"];
        this["_addLog"](_0xe1e732["level"] || "info", _0xe1e732["message"] || "", _0xe1e732["replace"] === !![]);
      } else {
        if (_0x234d93 === "PIPELINE_ERROR") {
          const _0x280128 = _0x2b5e57["payload"];
          if (_0x280128 == null ? void 0 : _0x280128["error"]) this["_addLog"]("error", _0x280128["error"]);
          this["running"] = ![];
        } else _0x234d93 === "PIPELINE_DONE" && (this["_addLog"]("success", "Pipeline เสร็จสิ้น"), this["running"] = ![]);
      }
    }, chrome["runtime"]["onMessage"]["addListener"](this["_pipelineListener"]);
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_pipelineListener"] && (chrome["runtime"]["onMessage"]["removeListener"](this["_pipelineListener"]), this["_pipelineListener"] = null);
  }
  ["_addLog"](_0x8d21d4, _0x2fa886, _0xc21be3 = ![]) {
    _0xc21be3 && this["logEntries"]["length"] > 0 ? this["logEntries"] = [...this["logEntries"]["slice"](0, -1), { "level": _0x8d21d4, "message": _0x2fa886, "timestamp": Date["now"]() }] : this["logEntries"] = [...this["logEntries"], { "level": _0x8d21d4, "message": _0x2fa886, "timestamp": Date["now"]() }], this["showLog"] = !![], this["updateComplete"]["then"](() => {
      var _a2;
      const _0x5c5250 = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["querySelector"]("#storyLog");
      if (_0x5c5250) _0x5c5250["entries"] = this["logEntries"];
    });
  }
  ["_clearLog"]() {
    this["logEntries"] = [];
  }
  async ["_loadState"]() {
    try {
      const _0x4858c0 = await chrome["storage"]["local"]["get"]([AgxCreatorStory["STORAGE_KEY"]]), _0x51e660 = _0x4858c0[AgxCreatorStory["STORAGE_KEY"]];
      if (_0x51e660 && typeof _0x51e660 === "object") {
        const _0x35128e = {};
        for (const [_0x3b014c, _0x6fa98c] of Object["entries"](_0x51e660)) {
          if (_0x6fa98c !== void 0 && _0x6fa98c !== null) _0x35128e[_0x3b014c] = _0x6fa98c;
        }
        if (_0x35128e["videoModel"] === "veo-3.1-fast-lp") _0x35128e["videoModel"] = "veo-3.1-lite-lp";
        Object["assign"](this, _0x35128e);
      }
    } catch {
    }
  }
  ["_saveState"]() {
    const _0x3d768e = {}, _0x18129c = ["topic", "details", "applyDetailsAllRounds", "manualPromptMode", "storyType", "customType", "realisticMode", "useCustomChars", "char1", "char2", "products", "imageStyle", "mood", "audience", "randomStyle", "randomMood", "randomAudience", "stylePool", "moodPool", "audiencePool", "voiceMode", "voice", "language", "coverEnabled", "coverText", "coverPosition", "coverColor", "noTextOverlay", "disclaimerEnabled", "disclaimerPreset", "disclaimerText", "disclaimerPosition", "customStructure", "randomStructure", "hookStyle", "bodyStyle", "ctaStyle", "dramaSetup", "dramaConflict", "dramaTurning", "dramaMoral", "sceneCount", "randomSceneCount", "aspectRatio", "imageModel", "videoModel", "loopEnabled", "loopCount", "loopUnlimited", "loopDelay", "topicsOnlyLoop"];
    for (const _0x308f8a of _0x18129c) _0x3d768e[_0x308f8a] = this[_0x308f8a];
    chrome["storage"]["local"]["set"]({ [AgxCreatorStory["STORAGE_KEY"]]: _0x3d768e })["catch"](() => {
    });
  }
  ["updated"](_0x235839) {
    var _a2;
    this["_saveState"](), this["_checkStale"](), this["manualPromptMode"] && _0x235839["has"]("sceneCount") && this["_syncManualScenes"](), (_a2 = super["updated"]) == null ? void 0 : _a2.call(this, _0x235839);
  }
  ["render"]() {
    return b`
      <!-- Save/Load preset -->
      <div class="preset-toolbar">
        <button class="toolbar-btn" @click=${this["_exportPreset"]} title="ส่งออกค่าที่ตั้งไว้เป็น JSON">💾 บันทึก</button>
        <button class="toolbar-btn" @click=${this["_importPreset"]} title="โหลดค่าจากไฟล์ JSON">📂 โหลด</button>
        <input class="hidden-input" type="file" id="presetInput" accept=".json" @change=${this["_onImportFile"]} />
      </div>

      <!-- Topic -->
      <agx-drawer label="📝 หัวข้อเรื่อง" open>
        <agx-input
          label="หัวข้อเรื่อง (1 หัวข้อ/บรรทัด หรือคั่นด้วย comma)"
          type="textarea"
          .rows=${3}
          placeholder="เช่น 5 อาหารลดพุง, เคล็ดผิวสวย"
          .value=${this["topic"]}
          @input=${(_0x1b09be) => {
      this["topic"] = _0x1b09be["detail"]["value"];
    }}
        ></agx-input>

        <div style="margin-top:6px">
          <agx-input
            label="รายละเอียดเพิ่มเติม"
            type="textarea"
            .rows=${2}
            placeholder="เช่น ตัวละครเป็นคนไทยวัย 30"
            optional
            .value=${this["details"]}
            @input=${(_0x56f71f) => {
      this["details"] = _0x56f71f["detail"]["value"];
    }}
          ></agx-input>
        </div>

        <div style="margin-top:6px">
          <agx-toggle
            label="ต้องการใส่ Prompt ด้วยตัวเอง (ข้าม AI)"
            .checked=${this["manualPromptMode"]}
            @change=${(_0x400e5f) => this["_onManualModeChange"](_0x400e5f["detail"]["checked"])}
          ></agx-toggle>
        </div>

        <div style="margin-top:6px">
          <agx-toggle
            label="ใช้รายละเอียดทุกรอบ (ถ้าวนซ้ำ)"
            .checked=${this["applyDetailsAllRounds"]}
            @change=${(_0x26e6ec) => {
      this["applyDetailsAllRounds"] = _0x26e6ec["detail"]["checked"];
    }}
          ></agx-toggle>
        </div>
      </agx-drawer>

      <!-- Story Type -->
      <agx-drawer label="🎬 ประเภทเรื่อง" open>
        <div class="genre-grid">
          ${STORY_GENRES["map"]((_0x443b59) => b`
            <button
              class="genre-btn ${this["storyType"] === _0x443b59["id"] ? "active" : ""}"
              @click=${() => {
      this["storyType"] = _0x443b59["id"];
    }}
            >
              <span class="genre-icon">${_0x443b59["icon"]}</span>
              <span>${_0x443b59["label"]}</span>
            </button>
          `)}
          <button
            class="genre-btn ${this["storyType"] === "custom" ? "active" : ""}"
            @click=${() => {
      this["storyType"] = "custom";
    }}
          >
            <span class="genre-icon">✏️</span>
            <span>กำหนดเอง</span>
          </button>
        </div>

        ${this["storyType"] === "custom" ? b`
          <div style="margin-top:8px">
            <agx-input
              label="อธิบายสไตล์เรื่องเอง"
              placeholder="เช่น สารคดีเชิงสำรวจ"
              .value=${this["customType"]}
              @input=${(_0x37dfb7) => {
      this["customType"] = _0x37dfb7["detail"]["value"];
    }}
            ></agx-input>
          </div>
        ` : ""}

        <div style="margin-top:8px">
          <agx-toggle
            label="โหมดสมจริง (แทนการ์ตูน)"
            .checked=${this["realisticMode"]}
            @change=${(_0x47f684) => {
      this["realisticMode"] = _0x47f684["detail"]["checked"];
    }}
          ></agx-toggle>
        </div>
      </agx-drawer>

      <!-- Characters -->
      <agx-drawer label="🎭 ตัวละครกำหนดเอง">
        <agx-toggle
          label="ใช้ตัวละครกำหนดเอง"
          .checked=${this["useCustomChars"]}
          @change=${(_0x4fb5b4) => {
      this["useCustomChars"] = _0x4fb5b4["detail"]["checked"];
    }}
        ></agx-toggle>

        ${this["useCustomChars"] ? b`
          <div class="char-row" style="margin-top:8px">
            <div class="char-card">
              <div class="char-title">ตัวละคร 1</div>
              <div class="upload-box" @click=${() => this["_pickCharImage"](1)}>
                ${this["char1"]["imageDataUrl"] ? b`<img src=${this["char1"]["imageDataUrl"]} />` : b`👤`}
              </div>
              <agx-input
                label="ชื่อ"
                placeholder="เช่น ลุง, มิน, ป้า"
                .value=${this["char1"]["name"]}
                @input=${(_0x51ea35) => {
      this["char1"] = { ...this["char1"], "name": _0x51ea35["detail"]["value"] };
    }}
              ></agx-input>
              <div style="margin-top:4px">
                <agx-input
                  label="ลักษณะ"
                  placeholder="เช่น ชายเสื้อส้ม"
                  .value=${this["char1"]["description"]}
                  @input=${(_0x1dd056) => {
      this["char1"] = { ...this["char1"], "description": _0x1dd056["detail"]["value"] };
    }}
                ></agx-input>
              </div>
              <div style="margin-top:4px">
                <agx-select
                  label="เสียง"
                  .value=${this["char1"]["voice"]}
                  .options=${STORY_VOICES["map"]((_0x585b07) => ({ "id": _0x585b07["id"], "label": _0x585b07["label"] }))}
                  @change=${(_0x478288) => {
      this["char1"] = { ...this["char1"], "voice": _0x478288["detail"]["value"] };
    }}
                ></agx-select>
              </div>
            </div>

            <div class="char-card">
              <div class="char-title">ตัวละคร 2</div>
              <div class="upload-box" @click=${() => this["_pickCharImage"](2)}>
                ${this["char2"]["imageDataUrl"] ? b`<img src=${this["char2"]["imageDataUrl"]} />` : b`👤`}
              </div>
              <agx-input
                label="ชื่อ"
                .value=${this["char2"]["name"]}
                @input=${(_0x2431ed) => {
      this["char2"] = { ...this["char2"], "name": _0x2431ed["detail"]["value"] };
    }}
              ></agx-input>
              <div style="margin-top:4px">
                <agx-input
                  label="ลักษณะ"
                  .value=${this["char2"]["description"]}
                  @input=${(_0x2d504a) => {
      this["char2"] = { ...this["char2"], "description": _0x2d504a["detail"]["value"] };
    }}
                ></agx-input>
              </div>
              <div style="margin-top:4px">
                <agx-select
                  label="เสียง"
                  .value=${this["char2"]["voice"]}
                  .options=${STORY_VOICES["map"]((_0x31adce) => ({ "id": _0x31adce["id"], "label": _0x31adce["label"] }))}
                  @change=${(_0x445f0c) => {
      this["char2"] = { ...this["char2"], "voice": _0x445f0c["detail"]["value"] };
    }}
                ></agx-select>
              </div>
            </div>
          </div>
        ` : ""}
      </agx-drawer>

      <!-- Products -->
      <agx-drawer label="📦 สินค้า (${this["products"]["length"]})">
        <div class="prod-toolbar">
          <button class="toolbar-btn" @click=${this["_addProduct"]}>+ เพิ่มสินค้า</button>
          ${this["products"]["length"] > 0 ? b`
            <button class="toolbar-btn danger" @click=${this["_clearProducts"]}>ล้างทั้งหมด</button>
          ` : ""}
        </div>

        ${this["products"]["length"] === 0 ? b`<div class="empty-hint">ยังไม่มีสินค้า — กดเพิ่มสินค้าเพื่อเริ่มต้น</div>` : this["products"]["map"]((_0x33b82e, _0x82c193) => b`
            <div class="prod-card">
              <div class="prod-row">
                <div class="prod-thumb" @click=${() => this["_pickProductSlotImage"](_0x82c193)}>
                  ${_0x33b82e["imageDataUrl"] ? b`<img src=${_0x33b82e["imageDataUrl"]} />` : b`📷`}
                </div>
                <div class="prod-info">
                  <input
                    class="prod-name"
                    type="text"
                    placeholder="ชื่อสินค้า"
                    .value=${_0x33b82e["name"]}
                    @input=${(_0x4f5f97) => this["_updateProduct"](_0x82c193, { "name": _0x4f5f97["target"]["value"] })}
                  />
                  <div class="prod-toggles">
                    <label class="mini-toggle">
                      <input type="checkbox" .checked=${_0x33b82e["asProp"]} @change=${(_0x2d15f4) => this["_updateProduct"](_0x82c193, { "asProp": _0x2d15f4["target"]["checked"] })} />
                      Prop
                    </label>
                    <label class="mini-toggle">
                      <input type="checkbox" .checked=${_0x33b82e["inScenes"]} @change=${(_0x1a93d1) => this["_updateProduct"](_0x82c193, { "inScenes": _0x1a93d1["target"]["checked"] })} />
                      ในฉาก
                    </label>
                    <label class="mini-toggle">
                      <input type="checkbox" .checked=${_0x33b82e["mention"]} @change=${(_0x35f5c0) => this["_updateProduct"](_0x82c193, { "mention": _0x35f5c0["target"]["checked"] })} />
                      พูดถึง
                    </label>
                  </div>
                </div>
                <button class="prod-remove" @click=${() => this["_removeProduct"](_0x82c193)}>✕</button>
              </div>
            </div>
          `)}
      </agx-drawer>

      <!-- Visual Style -->
      <agx-drawer label="🎨 สไตล์ภาพ + Mood">
        <agx-select
          label="สไตล์ภาพ"
          .value=${this["imageStyle"]}
          .options=${STORY_IMAGE_STYLES["map"]((_0x4e7df0) => ({ "id": _0x4e7df0["id"], "label": _0x4e7df0["label"] }))}
          @change=${(_0x2218d6) => {
      this["imageStyle"] = _0x2218d6["detail"]["value"];
    }}
        ></agx-select>
        <div class="random-row">
          <agx-toggle
            label="🎲 สุ่มสไตล์ภาพแต่ละรอบ"
            .checked=${this["randomStyle"]}
            @change=${(_0x3fbba2) => {
      this["randomStyle"] = _0x3fbba2["detail"]["checked"];
    }}
          ></agx-toggle>
          ${this["randomStyle"] ? b`
            <button class="settings-btn" @click=${() => {
      this["pickerOpen"] = "style";
    }}>
              ⚙️ ${this["stylePool"]["length"] || "ทั้งหมด"}
            </button>
          ` : ""}
        </div>

        <div style="margin-top:8px">
          <agx-select
            label="อารมณ์/โทน"
            .value=${this["mood"]}
            .options=${STORY_MOODS["map"]((_0x5db130) => ({ "id": _0x5db130["id"], "label": _0x5db130["label"] }))}
            @change=${(_0x1d582c) => {
      this["mood"] = _0x1d582c["detail"]["value"];
    }}
          ></agx-select>
        </div>
        <div class="random-row">
          <agx-toggle
            label="🎲 สุ่มโทน"
            .checked=${this["randomMood"]}
            @change=${(_0x36fce4) => {
      this["randomMood"] = _0x36fce4["detail"]["checked"];
    }}
          ></agx-toggle>
          ${this["randomMood"] ? b`
            <button class="settings-btn" @click=${() => {
      this["pickerOpen"] = "mood";
    }}>
              ⚙️ ${this["moodPool"]["length"] || "ทั้งหมด"}
            </button>
          ` : ""}
        </div>

        <div style="margin-top:8px">
          <agx-select
            label="กลุ่มเป้าหมาย"
            .value=${this["audience"]}
            .options=${STORY_AUDIENCES["map"]((_0x2fc00c) => ({ "id": _0x2fc00c["id"], "label": _0x2fc00c["label"] }))}
            @change=${(_0x3d1a13) => {
      this["audience"] = _0x3d1a13["detail"]["value"];
    }}
          ></agx-select>
        </div>
        <div class="random-row">
          <agx-toggle
            label="🎲 สุ่มกลุ่มเป้าหมาย"
            .checked=${this["randomAudience"]}
            @change=${(_0x155fda) => {
      this["randomAudience"] = _0x155fda["detail"]["checked"];
    }}
          ></agx-toggle>
          ${this["randomAudience"] ? b`
            <button class="settings-btn" @click=${() => {
      this["pickerOpen"] = "audience";
    }}>
              ⚙️ ${this["audiencePool"]["length"] || "ทั้งหมด"}
            </button>
          ` : ""}
        </div>
      </agx-drawer>

      <!-- Randomization picker modal -->
      ${this["pickerOpen"] ? this["_renderPicker"]() : ""}

      <!-- Voice -->
      <agx-drawer label="🎤 เสียง/บรรยาย">
        <agx-select
          label="โหมดเสียง"
          .value=${this["voiceMode"]}
          .options=${VOICE_MODES["map"]((_0x967838) => ({ "id": _0x967838["id"], "label": _0x967838["label"] }))}
          @change=${(_0x4b488d) => {
      this["voiceMode"] = _0x4b488d["detail"]["value"];
    }}
        ></agx-select>
        <div style="margin-top:6px">
          <agx-select
            label="เสียงหลัก"
            .value=${this["voice"]}
            .options=${STORY_VOICES["map"]((_0x3bad1a) => ({ "id": _0x3bad1a["id"], "label": _0x3bad1a["label"] }))}
            @change=${(_0x4b0cc4) => {
      this["voice"] = _0x4b0cc4["detail"]["value"];
    }}
          ></agx-select>
        </div>
        <div style="margin-top:6px">
          <agx-select
            label="ภาษา"
            .value=${this["language"]}
            .options=${PROMPT_LANGUAGES["map"]((_0x7d288a) => ({ "id": _0x7d288a["id"], "label": _0x7d288a["label"] }))}
            @change=${(_0x13428b) => {
      this["language"] = _0x13428b["detail"]["value"];
    }}
          ></agx-select>
        </div>
      </agx-drawer>

      <!-- Cover Text -->
      <agx-drawer label="🖼️ ข้อความหน้าปก (Cover)">
        <agx-toggle
          label="เปิดข้อความหน้าปก"
          .checked=${this["coverEnabled"]}
          @change=${(_0x1b22b0) => {
      this["coverEnabled"] = _0x1b22b0["detail"]["checked"];
    }}
        ></agx-toggle>

        ${this["coverEnabled"] ? b`
          <div style="margin-top:6px">
            <agx-input
              label="ข้อความหน้าปก"
              placeholder="เช่น 5 อาหารลดพุง"
              .value=${this["coverText"]}
              @input=${(_0x36cabd) => {
      this["coverText"] = _0x36cabd["detail"]["value"];
    }}
            ></agx-input>
          </div>
          <div class="form-row" style="margin-top:6px">
            <agx-select
              label="ตำแหน่ง"
              .value=${this["coverPosition"]}
              .options=${TEXT_POSITIONS["map"]((_0x481d54) => ({ "id": _0x481d54["id"], "label": _0x481d54["label"] }))}
              @change=${(_0x302e72) => {
      this["coverPosition"] = _0x302e72["detail"]["value"];
    }}
            ></agx-select>
            <agx-select
              label="สี"
              .value=${this["coverColor"]}
              .options=${TEXT_COLORS["map"]((_0x3e8208) => ({ "id": _0x3e8208["id"], "label": _0x3e8208["label"] }))}
              @change=${(_0x41dcc8) => {
      this["coverColor"] = _0x41dcc8["detail"]["value"];
    }}
            ></agx-select>
          </div>
        ` : ""}

        <div style="margin-top:8px">
          <agx-toggle
            label="ไม่มีข้อความบนภาพเลย"
            .checked=${this["noTextOverlay"]}
            @change=${(_0x4a40e2) => {
      this["noTextOverlay"] = _0x4a40e2["detail"]["checked"];
    }}
          ></agx-toggle>
        </div>
      </agx-drawer>

      <!-- Disclaimer -->
      <agx-drawer label="📝 ข้อจำกัดความรับผิดชอบ">
        <agx-toggle
          label="แสดงข้อจำกัด"
          .checked=${this["disclaimerEnabled"]}
          @change=${(_0x559410) => {
      this["disclaimerEnabled"] = _0x559410["detail"]["checked"];
    }}
        ></agx-toggle>

        ${this["disclaimerEnabled"] ? b`
          <div style="margin-top:6px">
            <agx-select
              label="เทมเพลต"
              .value=${this["disclaimerPreset"]}
              .options=${DISCLAIMER_PRESETS["map"]((_0xd04ebc) => ({ "id": _0xd04ebc["id"], "label": _0xd04ebc["label"] }))}
              @change=${(_0x455cea) => {
      this["disclaimerPreset"] = _0x455cea["detail"]["value"];
    }}
            ></agx-select>
          </div>
          ${this["disclaimerPreset"] === "custom" ? b`
            <div style="margin-top:6px">
              <agx-input
                label="ข้อความ"
                .value=${this["disclaimerText"]}
                @input=${(_0x57bdef) => {
      this["disclaimerText"] = _0x57bdef["detail"]["value"];
    }}
              ></agx-input>
            </div>
          ` : ""}
          <div style="margin-top:6px">
            <agx-select
              label="ตำแหน่ง"
              .value=${this["disclaimerPosition"]}
              .options=${DISCLAIMER_POSITIONS["map"]((_0x2f471f) => ({ "id": _0x2f471f["id"], "label": _0x2f471f["label"] }))}
              @change=${(_0xc0aa67) => {
      this["disclaimerPosition"] = _0xc0aa67["detail"]["value"];
    }}
            ></agx-select>
          </div>
        ` : ""}
      </agx-drawer>

      <!-- Structure -->
      <agx-drawer label="📖 โครงสร้างเรื่อง">
        <agx-toggle
          label="กำหนดโครงสร้างเอง"
          .checked=${this["customStructure"]}
          @change=${(_0x3526a7) => {
      this["customStructure"] = _0x3526a7["detail"]["checked"];
    }}
        ></agx-toggle>

        ${this["customStructure"] ? b`
          <div style="margin-top:6px">
            <agx-toggle
              label="🎲 สุ่มโครงสร้าง"
              .checked=${this["randomStructure"]}
              @change=${(_0x464942) => {
      this["randomStructure"] = _0x464942["detail"]["checked"];
    }}
            ></agx-toggle>
          </div>

          ${this["storyType"] === "drama" ? this["_renderDramaStructure"]() : this["_renderGenericStructure"]()}
        ` : b`
          <div style="font-size:10px; color:var(--agx-text-muted); margin-top:4px">
            ใช้โครงสร้างมาตรฐาน: Hook → Body → CTA
          </div>
        `}
      </agx-drawer>

      <!-- Layout -->
      <agx-drawer label="📐 ขนาดและจำนวนฉาก">
        <div class="form-row">
          <agx-select
            label="สัดส่วน"
            .value=${this["aspectRatio"]}
            .options=${ASPECT_RATIOS["map"]((_0x32235e) => ({ "id": _0x32235e["id"], "label": _0x32235e["label"] }))}
            @change=${(_0xd91b59) => {
      this["aspectRatio"] = _0xd91b59["detail"]["value"];
    }}
          ></agx-select>
          <agx-select
            label="จำนวนฉาก"
            .value=${this["sceneCount"]}
            .options=${SCENE_COUNTS["map"]((_0xbeb6bd) => ({ "id": _0xbeb6bd["id"], "label": _0xbeb6bd["label"] }))}
            @change=${(_0x1dc8c5) => {
      this["sceneCount"] = _0x1dc8c5["detail"]["value"];
    }}
          ></agx-select>
        </div>
        <agx-toggle
          label="🎲 สุ่มจำนวนฉาก"
          .checked=${this["randomSceneCount"]}
          @change=${(_0x455ff1) => {
      this["randomSceneCount"] = _0x455ff1["detail"]["checked"];
    }}
        ></agx-toggle>
      </agx-drawer>

      <!-- Models -->
      <agx-drawer label="🤖 โมเดล AI">
        <agx-select
          label="โมเดลรูปภาพ"
          .value=${this["imageModel"]}
          .options=${IMAGE_MODELS["map"]((_0x128f9e) => ({ "id": _0x128f9e["id"], "label": _0x128f9e["label"] }))}
          @change=${(_0x811710) => {
      this["imageModel"] = _0x811710["detail"]["value"];
    }}
        ></agx-select>
        <div style="margin-top:6px">
          <agx-select
            label="โมเดลวิดีโอ"
            .value=${this["videoModel"]}
            .options=${VIDEO_MODELS["map"]((_0xee8b84) => ({ "id": _0xee8b84["id"], "label": _0xee8b84["label"] }))}
            @change=${(_0x4dc8bb) => {
      this["videoModel"] = _0x4dc8bb["detail"]["value"];
    }}
          ></agx-select>
        </div>
      </agx-drawer>

      <!-- Loop -->
      <agx-drawer label="🔄 รันวนซ้ำ">
        <agx-toggle
          label="รันวนซ้ำ"
          .checked=${this["loopEnabled"]}
          @change=${(_0x352dbf) => {
      this["loopEnabled"] = _0x352dbf["detail"]["checked"];
    }}
        ></agx-toggle>

        ${this["loopEnabled"] ? b`
          <div class="form-row" style="margin-top:6px">
            <agx-input
              label="จำนวนรอบ"
              type="number"
              .value=${String(this["loopCount"])}
              @input=${(_0x2e337d) => {
      this["loopCount"] = parseInt(_0x2e337d["detail"]["value"]) || 1;
    }}
            ></agx-input>
            <agx-select
              label="ดีเลย์"
              .value=${this["loopDelay"]}
              .options=${[{ "id": "30", "label": "30 วินาที" }, { "id": "60", "label": "1 นาที" }, { "id": "300", "label": "5 นาที" }, { "id": "1800", "label": "30 นาที" }]}
              @change=${(_0x1ee3bd) => {
      this["loopDelay"] = _0x1ee3bd["detail"]["value"];
    }}
            ></agx-select>
          </div>
          <div style="margin-top:6px">
            <agx-toggle
              label="ไม่จำกัดรอบ"
              .checked=${this["loopUnlimited"]}
              @change=${(_0x6ef6e1) => {
      this["loopUnlimited"] = _0x6ef6e1["detail"]["checked"];
    }}
            ></agx-toggle>
          </div>
          <div style="margin-top:6px">
            <agx-toggle
              label="วนเฉพาะหัวข้อ (ใช้ setting เดียวกัน)"
              .checked=${this["topicsOnlyLoop"]}
              @change=${(_0x3da350) => {
      this["topicsOnlyLoop"] = _0x3da350["detail"]["checked"];
    }}
            ></agx-toggle>
          </div>
        ` : ""}
      </agx-drawer>

      <!-- Log -->
      <div class="log-section">
        <div class="log-header" @click=${() => {
      this["showLog"] = !this["showLog"];
    }}>
          <span class="log-title">
            <span class="log-dot ${this["running"] ? "active" : this["logEntries"]["some"]((_0x45f768) => _0x45f768["level"] === "error") ? "error" : ""}"></span>
            📋 Log (${this["logEntries"]["length"]})
          </span>
          <span class="log-actions">
            <button class="log-action-btn" @click=${(_0x3e6c45) => {
      _0x3e6c45["stopPropagation"](), this["_clearLog"]();
    }}>ล้าง</button>
            <span style="color:var(--agx-text-muted);font-size:10px">${this["showLog"] ? "▲" : "▼"}</span>
          </span>
        </div>
        ${this["showLog"] ? b`
          <div class="log-body">
            <agx-log id="storyLog" .entries=${this["logEntries"]}></agx-log>
          </div>
        ` : ""}
      </div>

      <!-- Prepare review section (เปิดเมื่อ prepared/stale) -->
      ${this["prepareState"] === "prepared" || this["prepareState"] === "stale" ? this["_renderPrepareReview"]() : ""}

      <!-- Action -->
      <div class="start-section">
        ${this["_renderActionButtons"]()}
      </div>

      <!-- Error dialog (Prepare failure) -->
      ${this["prepareErrorOpen"] ? this["_renderErrorDialog"]() : ""}
    `;
  }
  ["_renderActionButtons"]() {
    if (this["running"]) return b`
        <div class="action-row">
          <agx-button variant="danger" full @click=${this["_stop"]}>⏹ หยุด</agx-button>
        </div>
      `;
    const _0x172bf9 = ![];
    if (this["manualPromptMode"]) {
      const _0x3fa805 = this["_emptyPromptCount"]();
      return b`
        <div class="action-row">
          <agx-button
            variant="primary"
            full
            ?disabled=${_0x172bf9 || _0x3fa805 > 0}
            @click=${this["_start"]}
          >🚀 สร้าง Storyboard</agx-button>
        </div>
        <div style="font-size:11px;text-align:center;margin-top:6px;color:${_0x172bf9 ? "#f59e0b" : _0x3fa805 > 0 ? "var(--agx-warning)" : "var(--agx-text-muted)"}">
          ${_0x172bf9 ? "🚧 Story Mode ปิดชั่วคราว — รอแก้ไขปัญหา Flow Extend" : _0x3fa805 > 0 ? b`⚠ กรุณาเติม Prompt ให้ครบทุกจุดก่อน — ยังขาด ${_0x3fa805} ฉาก` : "โหมดเขียน prompt เอง — Prompt ครบแล้ว พร้อมสร้าง"}
        </div>
      `;
    }
    if (this["prepareState"] === "preparing") return b`
        <div class="action-row">
          <agx-button variant="primary" full disabled>⏳ กำลังขอบทจาก AI...</agx-button>
        </div>
      `;
    if (this["prepareState"] === "idle") return b`
        <div class="action-row">
          <agx-button variant="primary" full @click=${this["_prepare"]}>📝 Prepare (ขอบทจาก AI)</agx-button>
        </div>
        <div style="font-size:11px;color:${_0x172bf9 ? "#f59e0b" : "var(--agx-text-muted)"};text-align:center;margin-top:6px">
          ${_0x172bf9 ? "🚧 ระบบสร้างปิดชั่วคราว — กด Prepare เพื่อขอบทจาก AI แล้วเอาไปสร้างด้วยมือเองได้" : "ต้องกด Prepare ก่อน ถึงจะสร้าง Storyboard ได้"}
        </div>
      `;
    const _0x29d59e = this["_emptyPromptCount"](), _0xddd1b6 = _0x29d59e > 0;
    return b`
      <div class="action-row" style="display:flex;gap:8px">
        <agx-button variant="secondary" @click=${this["_rePrepare"]}>🔄 Re-Prepare</agx-button>
        <agx-button
          variant="primary"
          full
          ?disabled=${_0x172bf9 || this["prepareState"] === "stale" || _0xddd1b6}
          @click=${this["_start"]}
        >🚀 สร้าง Storyboard</agx-button>
      </div>
      ${_0x172bf9 ? b`
        <div style="font-size:11px;color:#f59e0b;text-align:center;margin-top:6px">
          🚧 ระบบสร้างปิดชั่วคราว — บทพร้อมแล้ว นำไปสร้างด้วยมือเองได้ (ปุ่มสร้างจะกลับมาเร็วๆ นี้)
        </div>
      ` : ""}
      ${this["prepareState"] === "stale" ? b`
        <div style="font-size:11px;color:var(--agx-warning);text-align:center;margin-top:6px">
          ⚠ คุณเปลี่ยน setting หลัง Prepare — กด Re-Prepare เพื่อ refresh ก่อนสร้าง
        </div>
      ` : _0xddd1b6 ? b`
        <div style="font-size:11px;color:var(--agx-warning);text-align:center;margin-top:6px">
          ⚠ กรุณาเติม Prompt ให้ครบทุกจุดก่อน — ยังขาด ${_0x29d59e} ฉาก
        </div>
      ` : ""}
    `;
  }
  ["_renderPrepareReview"]() {
    return b`
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--agx-border-subtle)">
        <div style="font-size:13px;font-weight:600;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center">
          <span>${this["manualPromptMode"] ? b`✏ ใส่ Prompt แต่ละฉากด้วยตัวเอง (${this["preparedScenes"]["length"]} ฉาก)` : b`📋 บทที่ AI สร้าง — แก้ไขได้ก่อนสร้างจริง (${this["preparedScenes"]["length"]} ฉาก)`}</span>
        </div>
        ${this["preparedScenes"]["map"]((_0x55563f, _0x288d90) => b`
          <agx-prepared-scene-card
            .index=${_0x288d90}
            .imagePrompt=${_0x55563f["imagePrompt"]}
            .videoPrompt=${_0x55563f["videoPrompt"]}
            @scene-change=${(_0x594e6a) => this["_onSceneChange"](_0x594e6a["detail"]["index"], _0x594e6a["detail"]["key"], _0x594e6a["detail"]["value"])}
          ></agx-prepared-scene-card>
        `)}
      </div>
    `;
  }
  ["_renderErrorDialog"]() {
    return b`
      <div
        style="position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:9999"
        @click=${(_0x1b9874) => {
      if (_0x1b9874["target"] === _0x1b9874["currentTarget"]) this["prepareErrorOpen"] = ![];
    }}
      >
        <div style="background:var(--agx-bg-card);border:1px solid var(--agx-border-subtle);border-radius:var(--agx-radius-md);padding:20px;max-width:400px;width:90%">
          <div style="font-size:15px;font-weight:600;margin-bottom:8px;color:var(--agx-danger)">
            ❌ Prepare ล้มเหลว
          </div>
          <div style="font-size:13px;line-height:1.5;color:var(--agx-text-primary);margin-bottom:16px;white-space:pre-wrap">
            ${this["prepareError"]}
          </div>
          <div style="font-size:11px;color:var(--agx-text-muted);margin-bottom:12px">
            แก้สาเหตุก่อน (เช่น API key, network, quota) แล้วกด Prepare ใหม่
          </div>
          <div style="text-align:right">
            <agx-button variant="primary" @click=${() => {
      this["prepareErrorOpen"] = ![];
    }}>ปิด</agx-button>
          </div>
        </div>
      </div>
    `;
  }
  ["_renderGenericStructure"]() {
    return b`
      <div style="margin-top:6px">
        <agx-select
          label="🎬 Hook (ฉากเปิด)"
          .value=${this["hookStyle"]}
          .options=${STORY_HOOKS["map"]((_0x43c333) => ({ "id": _0x43c333["id"], "label": _0x43c333["label"] }))}
          @change=${(_0x257407) => {
      this["hookStyle"] = _0x257407["detail"]["value"];
    }}
        ></agx-select>
      </div>
      <div style="margin-top:6px">
        <agx-select
          label="📖 Body (เนื้อเรื่อง)"
          .value=${this["bodyStyle"]}
          .options=${STORY_BODIES["map"]((_0x36f630) => ({ "id": _0x36f630["id"], "label": _0x36f630["label"] }))}
          @change=${(_0x5bc8ea) => {
      this["bodyStyle"] = _0x5bc8ea["detail"]["value"];
    }}
        ></agx-select>
      </div>
      <div style="margin-top:6px">
        <agx-select
          label="🎬 CTA (ฉากจบ)"
          .value=${this["ctaStyle"]}
          .options=${STORY_CTAS["map"]((_0x293e0f) => ({ "id": _0x293e0f["id"], "label": _0x293e0f["label"] }))}
          @change=${(_0x2525f1) => {
      this["ctaStyle"] = _0x2525f1["detail"]["value"];
    }}
        ></agx-select>
      </div>
    `;
  }
  ["_renderDramaStructure"]() {
    return b`
      <div style="margin-top:6px">
        <agx-select
          label="🎬 Setup"
          .value=${this["dramaSetup"]}
          .options=${DRAMA_SETUPS["map"]((_0x1b4102) => ({ "id": _0x1b4102["id"], "label": _0x1b4102["label"] }))}
          @change=${(_0x21c5fd) => {
      this["dramaSetup"] = _0x21c5fd["detail"]["value"];
    }}
        ></agx-select>
      </div>
      <div style="margin-top:6px">
        <agx-select
          label="💥 Conflict"
          .value=${this["dramaConflict"]}
          .options=${DRAMA_CONFLICTS["map"]((_0x1a2d30) => ({ "id": _0x1a2d30["id"], "label": _0x1a2d30["label"] }))}
          @change=${(_0x4a4a1d) => {
      this["dramaConflict"] = _0x4a4a1d["detail"]["value"];
    }}
        ></agx-select>
      </div>
      <div style="margin-top:6px">
        <agx-select
          label="🔄 Turning Point"
          .value=${this["dramaTurning"]}
          .options=${DRAMA_TURNINGS["map"]((_0x5227cb) => ({ "id": _0x5227cb["id"], "label": _0x5227cb["label"] }))}
          @change=${(_0x3b9e7c) => {
      this["dramaTurning"] = _0x3b9e7c["detail"]["value"];
    }}
        ></agx-select>
      </div>
      <div style="margin-top:6px">
        <agx-select
          label="💡 Moral"
          .value=${this["dramaMoral"]}
          .options=${DRAMA_MORALS["map"]((_0xe34d2) => ({ "id": _0xe34d2["id"], "label": _0xe34d2["label"] }))}
          @change=${(_0x33d74d) => {
      this["dramaMoral"] = _0x33d74d["detail"]["value"];
    }}
        ></agx-select>
      </div>
    `;
  }
  ["_renderPicker"]() {
    let _0x2e3c86 = "", _0x327bd7 = [], _0xa453d0 = [];
    if (this["pickerOpen"] === "style") _0x2e3c86 = "🎨 สไตล์ภาพที่จะสุ่ม", _0x327bd7 = STORY_IMAGE_STYLES["map"]((_0x264556) => ({ "id": _0x264556["id"], "label": _0x264556["label"] })), _0xa453d0 = this["stylePool"];
    else {
      if (this["pickerOpen"] === "mood") _0x2e3c86 = "🎭 โทนที่จะสุ่ม", _0x327bd7 = STORY_MOODS["map"]((_0x417f7a) => ({ "id": _0x417f7a["id"], "label": _0x417f7a["label"], "isAdult": _0x417f7a["id"] === "crude_18" })), _0xa453d0 = this["moodPool"];
      else this["pickerOpen"] === "audience" && (_0x2e3c86 = "👥 กลุ่มเป้าหมายที่จะสุ่ม", _0x327bd7 = STORY_AUDIENCES["map"]((_0x14fcc9) => ({ "id": _0x14fcc9["id"], "label": _0x14fcc9["label"] })), _0xa453d0 = this["audiencePool"]);
    }
    return b`
      <agx-picker-modal
        .title=${_0x2e3c86}
        .options=${_0x327bd7}
        .selectedIds=${_0xa453d0}
        @save=${this["_onPickerSave"]}
        @close=${() => {
      this["pickerOpen"] = null;
    }}
      ></agx-picker-modal>
    `;
  }
  ["_pickCharImage"](_0x5ae05c) {
    this["_pickImageFile"]()["then"]((_0x441001) => {
      if (!_0x441001) return;
      if (_0x5ae05c === 1) this["char1"] = { ...this["char1"], "imageDataUrl": _0x441001 };
      else this["char2"] = { ...this["char2"], "imageDataUrl": _0x441001 };
    });
  }
  ["_addProduct"]() {
    if (this["products"]["length"] >= 50) return;
    this["products"] = [...this["products"], { "id": crypto["randomUUID"](), "name": "", "asProp": !![], "inScenes": ![], "mention": ![] }];
  }
  ["_removeProduct"](_0x28977c) {
    this["products"] = this["products"]["filter"]((_0x2f9833, _0xd7dc73) => _0xd7dc73 !== _0x28977c);
  }
  ["_clearProducts"]() {
    if (!confirm("ลบสินค้าทั้งหมด " + this["products"]["length"] + " รายการ?")) return;
    this["products"] = [];
  }
  ["_updateProduct"](_0x5f561e, _0x466e56) {
    this["products"] = this["products"]["map"]((_0x55785a, _0x13214c) => _0x13214c === _0x5f561e ? { ..._0x55785a, ..._0x466e56 } : _0x55785a);
  }
  ["_pickProductSlotImage"](_0x3f35c0) {
    this["_pickImageFile"]()["then"]((_0x3f8f07) => {
      if (_0x3f8f07) this["_updateProduct"](_0x3f35c0, { "imageDataUrl": _0x3f8f07 });
    });
  }
  ["_exportPreset"]() {
    const _0x2bf7b1 = ["topic", "details", "applyDetailsAllRounds", "manualPromptMode", "storyType", "customType", "realisticMode", "useCustomChars", "char1", "char2", "products", "imageStyle", "mood", "audience", "randomStyle", "randomMood", "randomAudience", "stylePool", "moodPool", "audiencePool", "voiceMode", "voice", "language", "coverEnabled", "coverText", "coverPosition", "coverColor", "noTextOverlay", "disclaimerEnabled", "disclaimerPreset", "disclaimerText", "disclaimerPosition", "customStructure", "randomStructure", "hookStyle", "bodyStyle", "ctaStyle", "dramaSetup", "dramaConflict", "dramaTurning", "dramaMoral", "sceneCount", "randomSceneCount", "aspectRatio", "imageModel", "videoModel", "loopEnabled", "loopCount", "loopUnlimited", "loopDelay", "topicsOnlyLoop"], _0x38ac06 = { "version": "story/1" };
    for (const _0x5df2f9 of _0x2bf7b1) _0x38ac06[_0x5df2f9] = this[_0x5df2f9];
    const _0x284cb7 = JSON["stringify"](_0x38ac06, null, 2), _0x28f1bf = new Blob([_0x284cb7], { "type": "application/json" }), _0x37d2c6 = URL["createObjectURL"](_0x28f1bf), _0x3ccc34 = document["createElement"]("a");
    _0x3ccc34["href"] = _0x37d2c6, _0x3ccc34["download"] = "agx-story-preset-" + Date["now"]() + ".json", _0x3ccc34["click"](), URL["revokeObjectURL"](_0x37d2c6);
  }
  ["_importPreset"]() {
    var _a2, _b;
    (_b = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["getElementById"]("presetInput")) == null ? void 0 : _b["click"]();
  }
  ["_onImportFile"](_0x1521a0) {
    var _a2;
    const _0x5e66be = (_a2 = _0x1521a0["target"]["files"]) == null ? void 0 : _a2[0];
    if (!_0x5e66be) return;
    const _0x4dfd32 = new FileReader();
    _0x4dfd32["onload"] = () => {
      try {
        const _0x4dcbe2 = JSON["parse"](_0x4dfd32["result"]);
        _0x4dcbe2 && typeof _0x4dcbe2 === "object" && (Object["assign"](this, _0x4dcbe2), this["requestUpdate"]());
      } catch {
      }
    }, _0x4dfd32["readAsText"](_0x5e66be);
  }
  ["_pickImageFile"]() {
    return new Promise((_0x4dcdbc) => {
      const _0x505ee2 = document["createElement"]("input");
      _0x505ee2["type"] = "file", _0x505ee2["accept"] = "image/png,image/jpeg,image/webp", _0x505ee2["onchange"] = () => {
        var _a2;
        const _0x5bdbec = (_a2 = _0x505ee2["files"]) == null ? void 0 : _a2[0];
        if (!_0x5bdbec) return _0x4dcdbc(null);
        const _0x51c4fd = new FileReader();
        _0x51c4fd["onload"] = () => _0x4dcdbc(_0x51c4fd["result"]), _0x51c4fd["readAsDataURL"](_0x5bdbec);
      }, _0x505ee2["click"]();
    });
  }
  ["_start"]() {
    if (this["prepareState"] !== "prepared") return;
    const _0x6202dc = this["_emptyPromptCount"]();
    if (_0x6202dc > 0) {
      this["prepareError"] = "กรุณาเติม Prompt ให้ครบทุกจุดก่อน — ยังขาด " + _0x6202dc + " ฉาก", this["prepareErrorOpen"] = !![];
      return;
    }
    this["running"] = !![];
    const _0x560568 = { ...this["_buildConfig"](), "preparedScenes": this["preparedScenes"] };
    this["dispatchEvent"](new CustomEvent("creator-story-start", { "detail": _0x560568, "bubbles": !![], "composed": !![] }));
  }
  ["_settingsSnapshot"]() {
    return JSON["stringify"]({ "topic": this["topic"], "details": this["details"], "storyType": this["storyType"], "customType": this["customType"], "realisticMode": this["realisticMode"], "useCustomChars": this["useCustomChars"], "char1": this["char1"], "char2": this["char2"], "products": this["products"], "imageStyle": this["imageStyle"], "mood": this["mood"], "audience": this["audience"], "voiceMode": this["voiceMode"], "voice": this["voice"], "language": this["language"], "coverEnabled": this["coverEnabled"], "coverText": this["coverText"], "noTextOverlay": this["noTextOverlay"], "disclaimerEnabled": this["disclaimerEnabled"], "disclaimerText": this["disclaimerText"], "hookStyle": this["hookStyle"], "bodyStyle": this["bodyStyle"], "ctaStyle": this["ctaStyle"], "dramaSetup": this["dramaSetup"], "dramaConflict": this["dramaConflict"], "dramaTurning": this["dramaTurning"], "dramaMoral": this["dramaMoral"], "sceneCount": this["sceneCount"], "aspectRatio": this["aspectRatio"], "imageModel": this["imageModel"], "videoModel": this["videoModel"] });
  }
  ["_checkStale"]() {
    if (this["manualPromptMode"]) return;
    if (this["prepareState"] !== "prepared" && this["prepareState"] !== "stale") return;
    const _0x2061f8 = this["_settingsSnapshot"]();
    if (_0x2061f8 !== this["prepareSnapshot"]) this["prepareState"] = "stale";
    else this["prepareState"] === "stale" && (this["prepareState"] = "prepared");
  }
  ["_emptyPromptCount"]() {
    var _a2, _b;
    let _0x9518b4 = 0;
    for (const _0x494666 of this["preparedScenes"]) {
      if (!((_a2 = _0x494666["imagePrompt"]) == null ? void 0 : _a2["trim"]()) || !((_b = _0x494666["videoPrompt"]) == null ? void 0 : _b["trim"]())) _0x9518b4++;
    }
    return _0x9518b4;
  }
  ["_onManualModeChange"](_0x2b0f29) {
    this["manualPromptMode"] = _0x2b0f29, _0x2b0f29 ? (this["_syncManualScenes"](), this["prepareState"] = "prepared") : (this["preparedScenes"] = [], this["prepareState"] = "idle");
  }
  ["_syncManualScenes"]() {
    const _0x1ac656 = parseInt(this["sceneCount"]) || 2, _0x2860b6 = this["preparedScenes"]["length"];
    if (_0x2860b6 === _0x1ac656) return;
    if (_0x1ac656 > _0x2860b6) {
      const _0x184ac7 = [...this["preparedScenes"]];
      for (let _0x49cce3 = _0x2860b6; _0x49cce3 < _0x1ac656; _0x49cce3++) _0x184ac7["push"]({ "imagePrompt": "", "videoPrompt": "" });
      this["preparedScenes"] = _0x184ac7;
    } else this["preparedScenes"] = this["preparedScenes"]["slice"](0, _0x1ac656);
  }
  async ["_prepare"]() {
    this["prepareState"] = "preparing", this["prepareError"] = "", this["prepareErrorOpen"] = ![];
    const _0x282bfb = this["_buildConfig"]();
    try {
      const _0x9f09a7 = await chrome["runtime"]["sendMessage"]({ "type": "PREPARE_STORY_BLUEPRINT", "payload": { "config": _0x282bfb } });
      if (!(_0x9f09a7 == null ? void 0 : _0x9f09a7["ok"])) {
        const _0x4fbab1 = (_0x9f09a7 == null ? void 0 : _0x9f09a7["error"]) || "ไม่ทราบสาเหตุ";
        this["prepareError"] = _0x4fbab1, this["prepareErrorOpen"] = !![], this["prepareState"] = "idle";
        return;
      }
      this["preparedScenes"] = _0x9f09a7["scenes"]["map"]((_0x70bb47) => ({ ..._0x70bb47 })), this["prepareSnapshot"] = this["_settingsSnapshot"](), this["prepareState"] = "prepared";
    } catch (_0x8c0d9e) {
      this["prepareError"] = _0x8c0d9e instanceof Error ? _0x8c0d9e["message"] : String(_0x8c0d9e), this["prepareErrorOpen"] = !![], this["prepareState"] = "idle";
    }
  }
  ["_rePrepare"]() {
    if (this["preparedScenes"]["length"] > 0) {
      const _0x529dbb = window["confirm"]("การกด Re-Prepare จะเขียนทับการแก้ไขที่ทำไว้ทั้งหมด — ยืนยันหรือไม่?");
      if (!_0x529dbb) return;
    }
    this["_prepare"]();
  }
  ["_onSceneChange"](_0x34e59a, _0xd64c9d, _0x5f5614) {
    const _0x15ca2a = [...this["preparedScenes"]];
    _0x15ca2a[_0x34e59a] = { ..._0x15ca2a[_0x34e59a], [_0xd64c9d]: _0x5f5614 }, this["preparedScenes"] = _0x15ca2a;
  }
  ["_stop"]() {
    this["running"] = ![], this["dispatchEvent"](new CustomEvent("creator-story-stop", { "bubbles": !![], "composed": !![] }));
  }
  ["_buildConfig"]() {
    return { "topic": this["topic"], "details": this["details"], "applyDetailsAllRounds": this["applyDetailsAllRounds"], "storyType": this["storyType"] === "custom" ? this["customType"] : this["storyType"], "realisticMode": this["realisticMode"], "characters": this["useCustomChars"] ? [this["char1"], this["char2"]] : [], "products": this["products"], "style": { "image": this["imageStyle"], "mood": this["mood"], "audience": this["audience"], "random": { "style": this["randomStyle"], "mood": this["randomMood"], "audience": this["randomAudience"] }, "pools": { "style": this["stylePool"], "mood": this["moodPool"], "audience": this["audiencePool"] } }, "voice": { "mode": this["voiceMode"], "voice": this["voice"], "language": this["language"] }, "cover": this["coverEnabled"] ? { "text": this["coverText"], "position": this["coverPosition"], "color": this["coverColor"] } : null, "noTextOverlay": this["noTextOverlay"], "disclaimer": this["disclaimerEnabled"] ? { "preset": this["disclaimerPreset"], "text": this["disclaimerText"], "position": this["disclaimerPosition"] } : null, "structure": this["customStructure"] ? this["storyType"] === "drama" ? { "random": this["randomStructure"], "setup": this["dramaSetup"], "conflict": this["dramaConflict"], "turning": this["dramaTurning"], "moral": this["dramaMoral"] } : { "random": this["randomStructure"], "hook": this["hookStyle"], "body": this["bodyStyle"], "cta": this["ctaStyle"] } : null, "layout": { "sceneCount": parseInt(this["sceneCount"]), "randomSceneCount": this["randomSceneCount"], "aspectRatio": this["aspectRatio"] }, "models": { "image": this["imageModel"], "video": this["videoModel"] }, "loop": this["loopEnabled"] ? { "count": this["loopUnlimited"] ? -1 : this["loopCount"], "delay": parseInt(this["loopDelay"]), "topicsOnly": this["topicsOnlyLoop"] } : null };
  }
};
AgxCreatorStory["STORAGE_KEY"] = "agx_creator_story", AgxCreatorStory["styles"] = i$3`
    :host { display: block; }

    .char-row { display: flex; gap: 8px; margin-bottom: 8px; }
    .char-card {
      flex: 1;
      padding: 8px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
    }
    .char-title {
      font-size: 11px;
      font-weight: 600;
      color: var(--agx-text-secondary);
      margin-bottom: 6px;
    }
    .upload-box {
      width: 100%;
      height: 80px;
      border-radius: var(--agx-radius-sm);
      background: var(--agx-bg-surface);
      border: 1px dashed var(--agx-border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      overflow: hidden;
      margin-bottom: 6px;
    }
    .upload-box img { width: 100%; height: 100%; object-fit: cover; }

    .form-row { display: flex; gap: 8px; margin-bottom: 8px; }
    .form-row > * { flex: 1; }

    .genre-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      margin-top: 4px;
    }
    .genre-btn {
      padding: 6px 4px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      font-family: var(--agx-font-thai);
      font-size: 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .genre-btn.active {
      background: var(--agx-accent);
      color: #fff;
      border-color: var(--agx-accent);
    }
    .genre-icon { font-size: 16px; }

    .start-section { padding: 12px 0; }
    .action-row { display: flex; gap: 6px; }

    .prod-toolbar { display: flex; gap: 6px; margin-bottom: 6px; }
    .toolbar-btn {
      padding: 4px 8px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      font-size: 11px;
      cursor: pointer;
    }
    .toolbar-btn.danger {
      background: var(--agx-danger, #ef4444);
      color: #fff;
      border-color: var(--agx-danger, #ef4444);
    }
    .toolbar-btn:hover { filter: brightness(1.1); }
    .empty-hint {
      text-align: center;
      padding: 12px;
      font-size: 11px;
      color: var(--agx-text-muted);
    }

    .prod-card {
      padding: 8px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      margin-bottom: 6px;
    }
    .prod-row { display: flex; gap: 8px; align-items: flex-start; }
    .prod-thumb {
      width: 48px;
      height: 48px;
      border-radius: var(--agx-radius-sm);
      background: var(--agx-bg-surface);
      border: 1px dashed var(--agx-border-subtle);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
      overflow: hidden;
      flex-shrink: 0;
    }
    .prod-thumb img { width: 100%; height: 100%; object-fit: cover; }
    .prod-info { flex: 1; min-width: 0; }
    .prod-name {
      width: 100%;
      padding: 4px 6px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: 4px;
      color: var(--agx-text-primary);
      font-family: var(--agx-font-thai);
      font-size: 12px;
      box-sizing: border-box;
    }
    .prod-toggles { display: flex; gap: 8px; margin-top: 4px; }
    .mini-toggle {
      display: flex;
      align-items: center;
      gap: 3px;
      font-size: 10px;
      color: var(--agx-text-secondary);
      cursor: pointer;
    }
    .mini-toggle input { cursor: pointer; }
    .prod-remove {
      background: none;
      border: none;
      color: var(--agx-text-muted);
      cursor: pointer;
      font-size: 14px;
      padding: 0 2px;
    }
    .prod-remove:hover { color: var(--agx-danger); }

    .preset-toolbar {
      display: flex;
      gap: 6px;
      margin-bottom: 8px;
    }
    .hidden-input { display: none; }

    .random-row {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 6px;
    }
    .random-row agx-toggle { flex: 1; }
    .settings-btn {
      padding: 4px 8px;
      background: var(--agx-bg-surface);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-sm);
      color: var(--agx-text-secondary);
      font-size: 11px;
      cursor: pointer;
    }
    .settings-btn:hover { color: var(--agx-text-primary); }

    /* Log section — mirrors Auto mode */
    .log-section { margin-top: 8px; }
    .log-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 10px;
      background: var(--agx-bg-card);
      border: 1px solid var(--agx-border-subtle);
      border-radius: var(--agx-radius-md);
      cursor: pointer;
      user-select: none;
    }
    .log-header:hover { background: var(--agx-bg-hover); }
    .log-title {
      font-size: 12px;
      font-weight: 500;
      color: var(--agx-text-secondary);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .log-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--agx-text-muted);
    }
    .log-dot.active {
      background: var(--agx-success);
      animation: pulse 1.5s ease infinite;
    }
    .log-dot.error { background: var(--agx-danger); }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .log-actions { display: flex; gap: 4px; }
    .log-action-btn {
      padding: 2px 6px;
      background: none;
      border: none;
      color: var(--agx-text-muted);
      font-size: 11px;
      cursor: pointer;
      border-radius: 3px;
    }
    .log-action-btn:hover {
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
    }
    .log-body { margin-top: 4px; }
  `, __decorateClass$a([r()], AgxCreatorStory["prototype"], "topic", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "details", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "applyDetailsAllRounds", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "manualPromptMode", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "storyType", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "customType", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "realisticMode", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "useCustomChars", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "char1", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "char2", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "products", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "imageStyle", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "mood", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "audience", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "randomStyle", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "randomMood", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "randomAudience", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "stylePool", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "moodPool", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "audiencePool", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "pickerOpen", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "voiceMode", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "voice", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "language", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "coverEnabled", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "coverText", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "coverPosition", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "coverColor", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "noTextOverlay", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "disclaimerEnabled", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "disclaimerPreset", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "disclaimerText", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "disclaimerPosition", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "customStructure", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "randomStructure", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "hookStyle", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "bodyStyle", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "ctaStyle", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "dramaSetup", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "dramaConflict", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "dramaTurning", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "dramaMoral", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "sceneCount", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "randomSceneCount", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "aspectRatio", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "imageModel", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "videoModel", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "loopEnabled", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "loopCount", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "loopUnlimited", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "loopDelay", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "topicsOnlyLoop", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "running", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "prepareState", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "preparedScenes", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "prepareError", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "prepareErrorOpen", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "logEntries", 2), __decorateClass$a([r()], AgxCreatorStory["prototype"], "showLog", 2), AgxCreatorStory = __decorateClass$a([t$1("agx-creator-story")], AgxCreatorStory);
var __defProp$9 = Object["defineProperty"], __getOwnPropDesc$9 = Object["getOwnPropertyDescriptor"], __decorateClass$9 = (_0x366180, _0x58e723, _0x572250, _0x4f36db) => {
  var _0x4be696 = _0x4f36db > 1 ? void 0 : _0x4f36db ? __getOwnPropDesc$9(_0x58e723, _0x572250) : _0x58e723;
  for (var _0x526687 = _0x366180["length"] - 1, _0x5706b7; _0x526687 >= 0; _0x526687--) if (_0x5706b7 = _0x366180[_0x526687]) _0x4be696 = (_0x4f36db ? _0x5706b7(_0x58e723, _0x572250, _0x4be696) : _0x5706b7(_0x4be696)) || _0x4be696;
  if (_0x4f36db && _0x4be696) __defProp$9(_0x58e723, _0x572250, _0x4be696);
  return _0x4be696;
};
let AgxCreatorMode = class extends i {
  constructor() {
    super(...arguments), this["tab"] = "story";
  }
  ["render"]() {
    return b`
      <div class="tabs">
        <button class="tab" disabled title="กำลังพัฒนา — เร็วๆ นี้">
          <span class="tab-icon">🎙️</span>
          <span>Podcast</span>
          <span class="badge">SOON</span>
        </button>
        <button class="tab ${this["tab"] === "story" ? "active" : ""}" @click=${() => this["tab"] = "story"}>
          <span class="tab-icon">📖</span>
          <span>Story</span>
          <span class="badge badge-beta">BETA</span>
        </button>
        <button class="tab" disabled>
          <span class="tab-icon">🔥</span>
          <span>Viral</span>
          <span class="badge">SOON</span>
        </button>
        <button class="tab" disabled title="กำลังพัฒนา — เร็วๆ นี้">
          <span class="tab-icon">📋</span>
          <span>Prompt</span>
          <span class="badge">SOON</span>
        </button>
      </div>

      ${this["tab"] === "story" ? b`<agx-creator-story></agx-creator-story>` : ""}
    `;
  }
};
AgxCreatorMode["styles"] = i$3`
    :host { display: block; }

    .tabs {
      display: flex;
      gap: 2px;
      background: var(--agx-bg-deep, #000);
      border-radius: var(--agx-radius-md, 8px);
      padding: 3px;
      margin-bottom: 12px;
    }

    .tab {
      flex: 1;
      padding: 8px 6px;
      background: transparent;
      border: none;
      color: var(--agx-text-muted);
      font-family: var(--agx-font-thai);
      font-size: 11px;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      position: relative;
    }

    .tab:hover:not(:disabled):not(.active) { color: var(--agx-text-primary); }

    .tab.active {
      background: var(--agx-accent);
      color: #fff;
    }

    .tab:disabled { opacity: 0.4; cursor: not-allowed; }

    .tab-icon { font-size: 16px; }

    .badge {
      position: absolute;
      top: 1px;
      right: 2px;
      background: var(--agx-danger, #ef4444);
      color: #fff;
      font-size: 7px;
      padding: 1px 3px;
      border-radius: 3px;
      font-weight: 700;
    }

    .badge-beta {
      background: #f59e0b;  /* amber — beta */
    }
  `, __decorateClass$9([r()], AgxCreatorMode["prototype"], "tab", 2), AgxCreatorMode = __decorateClass$9([t$1("agx-creator-mode")], AgxCreatorMode);
var __defProp$8 = Object["defineProperty"], __getOwnPropDesc$8 = Object["getOwnPropertyDescriptor"], __decorateClass$8 = (_0x1ab86a, _0x18ba45, _0x426dda, _0x3b993b) => {
  var _0x2f44e6 = _0x3b993b > 1 ? void 0 : _0x3b993b ? __getOwnPropDesc$8(_0x18ba45, _0x426dda) : _0x18ba45;
  for (var _0x66b78 = _0x1ab86a["length"] - 1, _0x3f736a; _0x66b78 >= 0; _0x66b78--) if (_0x3f736a = _0x1ab86a[_0x66b78]) _0x2f44e6 = (_0x3b993b ? _0x3f736a(_0x18ba45, _0x426dda, _0x2f44e6) : _0x3f736a(_0x2f44e6)) || _0x2f44e6;
  if (_0x3b993b && _0x2f44e6) __defProp$8(_0x18ba45, _0x426dda, _0x2f44e6);
  return _0x2f44e6;
};
const MAX_IMAGES = 3;
let AgxShopImagePicker = class extends i {
  constructor() {
    super(...arguments), this["productName"] = "", this["images"] = [], this["initialSelected"] = [], this["_selected"] = [];
  }
  ["connectedCallback"]() {
    super["connectedCallback"]();
    const _0x1d8a55 = /* @__PURE__ */ new Set();
    this["_selected"] = this["initialSelected"]["filter"]((_0x215195) => {
      if (!_0x215195 || _0x1d8a55["has"](_0x215195)) return ![];
      return _0x1d8a55["add"](_0x215195), !![];
    })["slice"](0, MAX_IMAGES);
  }
  ["_toggle"](_0x1bc539) {
    const _0x48d703 = this["_selected"]["indexOf"](_0x1bc539);
    if (_0x48d703 >= 0) {
      this["_selected"] = this["_selected"]["filter"]((_0x1459c5) => _0x1459c5 !== _0x1bc539);
      return;
    }
    if (this["_selected"]["length"] >= MAX_IMAGES) return;
    this["_selected"] = [...this["_selected"], _0x1bc539];
  }
  ["_save"]() {
    this["dispatchEvent"](new CustomEvent("images-selected", { "detail": { "images": [...this["_selected"]] }, "bubbles": !![], "composed": !![] }));
  }
  ["_cancel"]() {
    this["dispatchEvent"](new CustomEvent("picker-cancel", { "bubbles": !![], "composed": !![] }));
  }
  ["render"]() {
    const _0x2a07e8 = this["_selected"]["length"], _0x102cf8 = _0x2a07e8 >= MAX_IMAGES;
    return b`
      <div class="dialog" @click=${(_0x22dbee) => _0x22dbee["stopPropagation"]()}>
        <div class="header">
          <div class="title">📸 ${this["productName"]}</div>
          <button class="close" @click=${this["_cancel"]}>✕</button>
        </div>

        <div class="grid">
          ${this["images"]["map"]((_0xc91259) => {
      const _0x14268b = this["_selected"]["indexOf"](_0xc91259), _0x210f5c = _0x14268b >= 0, _0x896b97 = !_0x210f5c && _0x102cf8;
      return b`
              <div
                class="thumb ${_0x210f5c ? "selected" : ""} ${_0x896b97 ? "disabled" : ""}"
                @click=${() => {
        if (!_0x896b97) this["_toggle"](_0xc91259);
      }}
              >
                <img src=${_0xc91259} alt="" loading="lazy" />
                ${_0x210f5c ? b`<div class="badge">${_0x14268b + 1}</div>` : ""}
              </div>
            `;
    })}
        </div>

        <div class="footer">
          <span class="count">${_0x2a07e8 === 0 ? "ยังไม่ได้เลือก" : "เลือกแล้ว " + _0x2a07e8 + "/" + MAX_IMAGES}</span>
          <div class="actions">
            <agx-button variant="secondary" size="sm" @click=${this["_cancel"]}>ยกเลิก</agx-button>
            <agx-button
              variant="primary"
              size="sm"
              ?disabled=${_0x2a07e8 === 0}
              @click=${this["_save"]}
            >
              ใช้รูปนี้
            </agx-button>
          </div>
        </div>
      </div>
    `;
  }
};
AgxShopImagePicker["styles"] = i$3`
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.6);
      font-family: 'Bai Jamjuree', sans-serif;
    }

    .dialog {
      width: 92%;
      max-width: 420px;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      background: var(--agx-bg, #0f172a);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      overflow: hidden;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .title {
      font-size: 13px;
      font-weight: 600;
      color: var(--agx-text, #e2e8f0);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-right: 8px;
    }

    .close {
      cursor: pointer;
      background: none;
      border: none;
      color: var(--agx-text-muted, #94a3b8);
      font-size: 18px;
      line-height: 1;
      padding: 2px 6px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      padding: 12px;
      overflow-y: auto;
      flex: 1;
    }

    .thumb {
      position: relative;
      aspect-ratio: 1;
      border: 2px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      background: rgba(255, 255, 255, 0.03);
      transition: border-color 120ms;
    }

    .thumb:hover { border-color: rgba(74, 141, 255, 0.5); }
    .thumb.selected { border-color: var(--agx-accent, #4A8DFF); }
    .thumb.disabled { opacity: 0.4; cursor: not-allowed; }

    .thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .badge {
      position: absolute;
      top: 4px;
      right: 4px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--agx-accent, #4A8DFF);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      gap: 8px;
    }

    .count {
      font-size: 11px;
      color: var(--agx-text-muted, #94a3b8);
    }

    .actions {
      display: flex;
      gap: 6px;
    }
  `, __decorateClass$8([n2({ "type": String })], AgxShopImagePicker["prototype"], "productName", 2), __decorateClass$8([n2({ "type": Array })], AgxShopImagePicker["prototype"], "images", 2), __decorateClass$8([n2({ "type": Array })], AgxShopImagePicker["prototype"], "initialSelected", 2), __decorateClass$8([r()], AgxShopImagePicker["prototype"], "_selected", 2), AgxShopImagePicker = __decorateClass$8([t$1("agx-shop-image-picker")], AgxShopImagePicker);
const log$7 = createLogger("ShopeeAffiliate"), ENDPOINT = "https://open-api.affiliate.shopee.co.th/graphql", IMG_CDN = "https://cf.shopee.co.th/file/", CREDS_KEY$1 = "agx_shopee_creds";
async function getShopeeCreds() {
  try {
    const _0x28aadb = await chrome["storage"]["local"]["get"]([CREDS_KEY$1]), _0x8dea70 = _0x28aadb[CREDS_KEY$1];
    if (_0x8dea70 && typeof _0x8dea70["appId"] === "string" && typeof _0x8dea70["secret"] === "string" && _0x8dea70["appId"]["trim"]() && _0x8dea70["secret"]["trim"]()) return { "appId": _0x8dea70["appId"]["trim"](), "secret": _0x8dea70["secret"]["trim"]() };
  } catch {
  }
  return null;
}
async function setShopeeCreds(_0x524222, _0x2d6d0c) {
  const _0x497af6 = (_0x524222 || "")["trim"](), _0x4c13a0 = (_0x2d6d0c || "")["trim"]();
  try {
    if (_0x497af6 && _0x4c13a0) await chrome["storage"]["local"]["set"]({ [CREDS_KEY$1]: { "appId": _0x497af6, "secret": _0x4c13a0 } });
    else await chrome["storage"]["local"]["remove"]([CREDS_KEY$1]);
  } catch {
  }
}
async function sha256Hex(_0x5ec866) {
  const _0x130286 = await crypto["subtle"]["digest"]("SHA-256", new TextEncoder()["encode"](_0x5ec866));
  return Array["from"](new Uint8Array(_0x130286))["map"]((_0x373bd0) => _0x373bd0["toString"](16)["padStart"](2, "0"))["join"]("");
}
function imageUrlFromHash(_0x4291cc) {
  const _0x29ef76 = String(_0x4291cc || "")["trim"]();
  if (!_0x29ef76) return "";
  if (_0x29ef76["startsWith"]("http://") || _0x29ef76["startsWith"]("https://")) return _0x29ef76;
  if (_0x29ef76["startsWith"]("//")) return "https:" + _0x29ef76;
  return IMG_CDN + _0x29ef76["replace"](/^\/+/, "");
}
function readableShopeeError(_0x567650, _0x1f8512, _0x4d4ef2) {
  var _a2;
  const _0x1ee5e2 = ((_0x4d4ef2 == null ? void 0 : _0x4d4ef2["map"]((_0x280b00) => _0x280b00["message"])["filter"](Boolean)["join"]("; ")) || _0x1f8512 || "")["toLowerCase"]();
  if (_0x1ee5e2["includes"]("invalid signature") || _0x1ee5e2["includes"]("signature")) return "Invalid Signature — เช็ค App ID / Secret ว่าถูกต้อง และเวลาเครื่อง (clock) ไม่เพี้ยน";
  if (_0x1ee5e2["includes"]("appid") && (_0x1ee5e2["includes"]("not exist") || _0x1ee5e2["includes"]("invalid"))) return "App ID ไม่ถูกต้อง — เช็คค่าที่กรอกอีกครั้ง";
  if (_0x1ee5e2["includes"]("permission") || _0x1ee5e2["includes"]("not authorized") || _0x1ee5e2["includes"]("no access") || _0x567650 === 403) return "บัญชียังไม่ได้รับสิทธิ์ Shopee Open API — สมัคร Affiliate ให้ active แล้วขอ Open API ในหน้า affiliate ก่อน";
  if (_0x567650 === 401) return "ไม่ได้รับอนุญาต (401) — เชื่อมต่อใหม่ / เช็ค App ID & Secret";
  const _0x2a93af = ((_a2 = _0x4d4ef2 == null ? void 0 : _0x4d4ef2[0]) == null ? void 0 : _a2["message"]) || _0x1f8512["slice"](0, 200);
  return "Shopee API ผิดพลาด" + (_0x567650 ? " (HTTP " + _0x567650 + ")" : "") + ": " + (_0x2a93af || "unknown");
}
async function shopeeGql(_0xd4c2f6) {
  const _0x27f4c9 = await getShopeeCreds();
  if (!_0x27f4c9) throw new Error('ยังไม่ได้ตั้งค่า Shopee App ID / Secret — ไปที่ "ตั้งค่า Shopee Affiliate" ก่อน');
  const _0x375d80 = JSON["stringify"]({ "query": _0xd4c2f6, "operationName": null, "variables": {} }), _0x20d2f7 = Math["floor"](Date["now"]() / 1e3), _0x4b3cef = await sha256Hex(_0x27f4c9["appId"] + _0x20d2f7 + _0x375d80 + _0x27f4c9["secret"]);
  let _0x1436b9;
  try {
    _0x1436b9 = await fetch(ENDPOINT, { "method": "POST", "headers": { "Content-Type": "application/json", "Authorization": "SHA256 Credential=" + _0x27f4c9["appId"] + ", Timestamp=" + _0x20d2f7 + ", Signature=" + _0x4b3cef }, "body": _0x375d80 });
  } catch (_0xc59cb2) {
    throw new Error("เชื่อมต่อ Shopee API ไม่ได้ (network): " + (_0xc59cb2 instanceof Error ? _0xc59cb2["message"] : String(_0xc59cb2)));
  }
  const _0x443f1b = await _0x1436b9["text"]()["catch"](() => "");
  let _0x5ee815;
  try {
    _0x5ee815 = JSON["parse"](_0x443f1b);
  } catch {
  }
  if (!_0x1436b9["ok"] || !_0x5ee815 || _0x5ee815["errors"] && _0x5ee815["errors"]["length"] > 0) throw new Error(readableShopeeError(_0x1436b9["status"], _0x443f1b, _0x5ee815 == null ? void 0 : _0x5ee815["errors"]));
  if (_0x5ee815["data"] === void 0) throw new Error("Shopee API: ไม่มี data กลับมา");
  return _0x5ee815["data"];
}
function mapOffer(_0x5cd0ed) {
  return { "itemId": String(_0x5cd0ed["itemId"] ?? ""), "shopId": String(_0x5cd0ed["shopId"] ?? ""), "productName": String(_0x5cd0ed["productName"] ?? ""), "imageUrl": imageUrlFromHash(_0x5cd0ed["imageUrl"]), "price": String(_0x5cd0ed["price"] ?? ""), "priceMin": _0x5cd0ed["priceMin"] != null ? String(_0x5cd0ed["priceMin"]) : void 0, "priceMax": _0x5cd0ed["priceMax"] != null ? String(_0x5cd0ed["priceMax"]) : void 0, "commissionRate": String(_0x5cd0ed["commissionRate"] ?? ""), "sales": String(_0x5cd0ed["sales"] ?? ""), "ratingStar": _0x5cd0ed["ratingStar"] != null ? String(_0x5cd0ed["ratingStar"]) : void 0, "shopName": String(_0x5cd0ed["shopName"] ?? ""), "offerLink": String(_0x5cd0ed["offerLink"] ?? ""), "productLink": String(_0x5cd0ed["productLink"] ?? ""), "catIds": Array["isArray"](_0x5cd0ed["productCatIds"]) ? _0x5cd0ed["productCatIds"]["map"]((_0xc199e9) => Number(_0xc199e9))["filter"]((_0x5a2fd7) => !Number["isNaN"](_0x5a2fd7)) : [] };
}
const OFFER_FIELDS = "itemId shopId productName imageUrl price priceMin priceMax commissionRate sales ratingStar shopName offerLink productLink productCatIds";
async function searchProductOffers(_0xdd5c36) {
  var _a2, _b;
  const _0x5000fe = [];
  if (_0xdd5c36["keyword"] && _0xdd5c36["keyword"]["trim"]()) _0x5000fe["push"]("keyword: " + JSON["stringify"](_0xdd5c36["keyword"]["trim"]()));
  if (_0xdd5c36["shopId"] !== void 0 && String(_0xdd5c36["shopId"])["trim"]()) _0x5000fe["push"]("shopId: " + Number(_0xdd5c36["shopId"]));
  if (_0xdd5c36["sortType"] !== void 0) _0x5000fe["push"]("sortType: " + Number(_0xdd5c36["sortType"]));
  _0x5000fe["push"]("page: " + Math["max"](1, Number(_0xdd5c36["page"]) || 1)), _0x5000fe["push"]("limit: " + Math["min"](100, Math["max"](1, Number(_0xdd5c36["limit"]) || 20)));
  const _0x5ee007 = "{ productOfferV2(" + _0x5000fe["join"](", ") + ") { nodes { " + OFFER_FIELDS + " } pageInfo { page limit hasNextPage } } }", _0x42b9bc = await shopeeGql(_0x5ee007), _0xb98b51 = _0x42b9bc["productOfferV2"] || {};
  return { "items": (_0xb98b51["nodes"] || [])["map"](mapOffer), "hasNext": !!((_a2 = _0xb98b51["pageInfo"]) == null ? void 0 : _a2["hasNextPage"]), "page": ((_b = _0xb98b51["pageInfo"]) == null ? void 0 : _b["page"]) ?? (Number(_0xdd5c36["page"]) || 1) };
}
const sleep$2 = (_0x4fee2b) => new Promise((_0xb96b95) => setTimeout(_0xb96b95, _0x4fee2b));
async function searchAllProductOffers(_0x3a90ca, _0xcdd5ea = 60, _0x728a6b) {
  const _0x1bfac5 = Math["min"](100, Math["max"](1, Number(_0x3a90ca["limit"]) || 20)), _0x45194d = [];
  for (let _0x48fc7e = 1; _0x45194d["length"] < _0xcdd5ea && _0x48fc7e <= 20; _0x48fc7e++) {
    const { items: _0x1e85af, hasNext: _0x3a0676 } = await searchProductOffers({ ..._0x3a90ca, "page": _0x48fc7e, "limit": _0x1bfac5 });
    _0x45194d["push"](..._0x1e85af), _0x728a6b == null ? void 0 : _0x728a6b(_0x48fc7e, _0x45194d["length"]);
    if (!_0x3a0676 || _0x1e85af["length"] === 0) break;
    if (_0x45194d["length"] < _0xcdd5ea) await sleep$2(400);
  }
  return _0x45194d["slice"](0, _0xcdd5ea);
}
async function generateShortLink(_0x275a1c, _0x121270) {
  var _a2;
  const _0x53fd2f = (_0x275a1c || "")["trim"]();
  if (!_0x53fd2f) throw new Error("กรุณาวาง URL สินค้า Shopee ก่อน");
  const _0x2067f7 = "", _0x21d6de = "mutation { generateShortLink(input: { originUrl: " + JSON["stringify"](_0x53fd2f) + _0x2067f7 + " }) { shortLink } }", _0x53b154 = await shopeeGql(_0x21d6de), _0x5e8c48 = (_a2 = _0x53b154["generateShortLink"]) == null ? void 0 : _a2["shortLink"];
  if (!_0x5e8c48) throw new Error("สร้างลิงก์ไม่สำเร็จ — เช็คว่า URL เป็นลิงก์ Shopee ที่ถูกต้อง");
  return log$7["info"]("short link: " + _0x5e8c48), _0x5e8c48;
}
var __defProp$7 = Object["defineProperty"], __getOwnPropDesc$7 = Object["getOwnPropertyDescriptor"], __decorateClass$7 = (_0x713b03, _0x303719, _0x320abf, _0x1a453b) => {
  var _0x34c3c9 = _0x1a453b > 1 ? void 0 : _0x1a453b ? __getOwnPropDesc$7(_0x303719, _0x320abf) : _0x303719;
  for (var _0x10cc5d = _0x713b03["length"] - 1, _0x211c83; _0x10cc5d >= 0; _0x10cc5d--) if (_0x211c83 = _0x713b03[_0x10cc5d]) _0x34c3c9 = (_0x1a453b ? _0x211c83(_0x303719, _0x320abf, _0x34c3c9) : _0x211c83(_0x34c3c9)) || _0x34c3c9;
  if (_0x1a453b && _0x34c3c9) __defProp$7(_0x303719, _0x320abf, _0x34c3c9);
  return _0x34c3c9;
};
const log$6 = createLogger("ShopeeSource"), AUTO_PRODUCTS_KEY$1 = "agx_auto_products", CACHE_KEY = "agx_shopee_products", UI_KEY = "agx_shopee_ui", MAX_RESULTS = 60;
let AgxShopeeSource = class extends i {
  constructor() {
    super(...arguments), this["hasCreds"] = ![], this["appIdInput"] = "", this["secretInput"] = "", this["showSetup"] = ![], this["keyword"] = "", this["shopId"] = "", this["rows"] = [], this["loading"] = ![], this["fetchPage"] = 0, this["fetchCount"] = 0, this["adding"] = ![], this["addProgress"] = 0, this["addTotal"] = 0, this["genUrl"] = "", this["genResult"] = "", this["genBusy"] = ![], this["copied"] = ![], this["status"] = "", this["statusLevel"] = "info";
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), void this["_restore"]();
  }
  async ["_restore"]() {
    const _0x12ade2 = await getShopeeCreds();
    this["hasCreds"] = !!_0x12ade2;
    if (_0x12ade2) this["appIdInput"] = _0x12ade2["appId"];
    try {
      const _0x5d4d13 = await chrome["storage"]["local"]["get"]([CACHE_KEY, UI_KEY]), _0x563304 = _0x5d4d13[CACHE_KEY];
      if (Array["isArray"](_0x563304)) this["rows"] = _0x563304["map"]((_0x578ee7) => ({ ..._0x578ee7, "selected": ![] }));
      const _0x536047 = _0x5d4d13[UI_KEY];
      _0x536047 && (this["keyword"] = _0x536047["keyword"] || "", this["shopId"] = _0x536047["shopId"] || "", this["showSetup"] = !!_0x536047["showSetup"]);
    } catch {
    }
    if (!this["hasCreds"]) this["showSetup"] = !![];
  }
  ["_persistUi"]() {
    chrome["storage"]["local"]["set"]({ [UI_KEY]: { "keyword": this["keyword"], "shopId": this["shopId"], "showSetup": this["showSetup"] } })["catch"](() => {
    });
  }
  ["_persistCache"]() {
    chrome["storage"]["local"]["set"]({ [CACHE_KEY]: this["rows"]["map"](({ selected: _0x3ae447, ..._0x31156d }) => {
      return _0x31156d;
    }) })["catch"](() => {
    });
  }
  ["_setStatus"](_0x1aac6e, _0x3b5c56) {
    this["statusLevel"] = _0x1aac6e, this["status"] = _0x3b5c56;
  }
  async ["_saveCreds"]() {
    const _0xf3b3d1 = this["appIdInput"]["trim"](), _0x4fc761 = this["secretInput"]["trim"]();
    if (!_0xf3b3d1 || !_0x4fc761) {
      this["_setStatus"]("error", "กรอกทั้ง App ID และ Secret");
      return;
    }
    await setShopeeCreds(_0xf3b3d1, _0x4fc761), this["hasCreds"] = !!await getShopeeCreds(), this["secretInput"] = "", this["_setStatus"]("success", '✓ บันทึก App ID / Secret แล้ว — กด "ค้นหาสินค้า" ได้เลย');
  }
  async ["_clearCreds"]() {
    await setShopeeCreds("", ""), this["hasCreds"] = ![], this["appIdInput"] = "", this["secretInput"] = "", this["showSetup"] = !![], this["_setStatus"]("info", "ลบ App ID / Secret แล้ว");
  }
  async ["_search"]() {
    if (this["loading"]) return;
    if (!this["hasCreds"]) {
      this["showSetup"] = !![], this["_setStatus"]("error", "ตั้งค่า App ID / Secret ก่อน (ด้านบน)");
      return;
    }
    const _0x382c6f = this["keyword"]["trim"](), _0x575f4f = this["shopId"]["trim"]();
    if (!_0x382c6f && !_0x575f4f) {
      this["_setStatus"]("error", "ใส่คำค้นหา หรือ Shop ID อย่างน้อยหนึ่งอย่าง");
      return;
    }
    this["loading"] = !![], this["fetchPage"] = 0, this["fetchCount"] = 0, this["_setStatus"]("info", "กำลังค้นหาสินค้าจาก Shopee Affiliate..."), this["_persistUi"]();
    try {
      const _0xe7139e = await searchAllProductOffers({ "keyword": _0x382c6f || void 0, "shopId": _0x575f4f ? this["_parseShopId"](_0x575f4f) : void 0 }, MAX_RESULTS, (_0x1b8bf4, _0x1159a2) => {
        this["fetchPage"] = _0x1b8bf4, this["fetchCount"] = _0x1159a2, this["_setStatus"]("info", "กำลังโหลด... หน้า " + _0x1b8bf4 + " (" + _0x1159a2 + " สินค้า)");
      });
      this["rows"] = _0xe7139e["map"]((_0x12dcd2) => ({ ..._0x12dcd2, "selected": ![] })), this["_persistCache"](), this["_setStatus"](_0xe7139e["length"] > 0 ? "success" : "error", _0xe7139e["length"] > 0 ? "✓ พบ " + _0xe7139e["length"] + " สินค้า" : 'ไม่พบสินค้าในแคมเปญ affiliate — ลองคำค้นอื่น หรือใช้ "สร้างลิงก์จาก URL" ด้านล่าง'), log$6["info"]("fetched " + _0xe7139e["length"] + " Shopee offers");
    } catch (_0x2694be) {
      this["_setStatus"]("error", "❌ " + (_0x2694be instanceof Error ? _0x2694be["message"] : String(_0x2694be)));
    } finally {
      this["loading"] = ![], this["fetchPage"] = 0, this["fetchCount"] = 0;
    }
  }
  ["_parseShopId"](_0x4d05b8) {
    const _0x306153 = _0x4d05b8["match"](/shop\/(\d+)/) || _0x4d05b8["match"](/i\.(\d+)\.\d+/) || _0x4d05b8["match"](/-i\.(\d+)\.\d+/);
    if (_0x306153) return _0x306153[1];
    const _0x3c6b01 = _0x4d05b8["replace"](/\D/g, "");
    return _0x3c6b01 || _0x4d05b8;
  }
  ["_toggle"](_0x1610ef) {
    this["rows"] = this["rows"]["map"]((_0x221fad) => _0x221fad["itemId"] === _0x1610ef ? { ..._0x221fad, "selected": !_0x221fad["selected"] } : _0x221fad);
  }
  ["_selectAll"]() {
    this["rows"] = this["rows"]["map"]((_0x5a70e3) => ({ ..._0x5a70e3, "selected": !![] }));
  }
  ["_deselectAll"]() {
    this["rows"] = this["rows"]["map"]((_0x4d8c30) => ({ ..._0x4d8c30, "selected": ![] }));
  }
  ["_clearAll"]() {
    if (this["rows"]["length"] === 0) return;
    if (!confirm("ล้างผลค้นหา " + this["rows"]["length"] + " รายการ?")) return;
    this["rows"] = [], this["_persistCache"](), this["_setStatus"]("info", "ล้างผลค้นหาแล้ว");
  }
  get ["_selectedCount"]() {
    return this["rows"]["filter"]((_0x5e871f) => _0x5e871f["selected"])["length"];
  }
  async ["_addToAuto"]() {
    var _a2;
    const _0x1d1f81 = this["rows"]["filter"]((_0x1f9feb) => _0x1f9feb["selected"]);
    if (_0x1d1f81["length"] === 0) {
      this["_setStatus"]("error", "เลือกสินค้าก่อน");
      return;
    }
    this["adding"] = !![], this["addTotal"] = _0x1d1f81["filter"]((_0x34d631) => _0x34d631["imageUrl"])["length"], this["addProgress"] = 0, this["_setStatus"]("info", "กำลังเตรียมรูป " + this["addTotal"] + " ใบ...");
    const _0x9f8b1d = [];
    for (const _0x3aea23 of _0x1d1f81) {
      const _0x25f8a3 = _0x3aea23["imageUrl"] ? await normalizeImageList([_0x3aea23["imageUrl"]], () => {
        this["addProgress"]++, this["_setStatus"]("info", "กำลังเตรียมรูป " + this["addProgress"] + "/" + this["addTotal"] + "...");
      }) : [], _0x579ab4 = (_0x3aea23["shopId"] || "shopee") + "_" + _0x3aea23["itemId"];
      _0x9f8b1d["push"]({ "id": _0x579ab4, "name": _0x3aea23["productName"] || "(ไม่มีชื่อ)", "productId": _0x579ab4, "category": "auto", "productImages": _0x25f8a3, "hashtags": "", "basketName": "", "affiliateLink": _0x3aea23["offerLink"] || _0x3aea23["productLink"] || "" });
    }
    this["adding"] = ![];
    try {
      const _0x561ff0 = await chrome["storage"]["local"]["get"](AUTO_PRODUCTS_KEY$1), _0x4e31cc = Array["isArray"](_0x561ff0[AUTO_PRODUCTS_KEY$1]) ? _0x561ff0[AUTO_PRODUCTS_KEY$1] : [], _0x101824 = /* @__PURE__ */ new Map();
      for (const _0x2e9fa3 of _0x4e31cc) if (_0x2e9fa3["productId"]) _0x101824["set"](_0x2e9fa3["productId"], _0x2e9fa3);
      let _0x586931 = 0, _0x4ab1e2 = 0;
      for (const _0x15f16b of _0x9f8b1d) {
        const _0x5949c0 = _0x15f16b["productId"] ? _0x101824["get"](_0x15f16b["productId"]) : void 0;
        if (_0x5949c0) {
          const _0x21500b = { ..._0x5949c0, "name": _0x5949c0["name"] || _0x15f16b["name"], "productImages": ((_a2 = _0x5949c0["productImages"]) == null ? void 0 : _a2["length"]) ? _0x5949c0["productImages"] : _0x15f16b["productImages"], "affiliateLink": _0x5949c0["affiliateLink"] || _0x15f16b["affiliateLink"] };
          JSON["stringify"](_0x21500b) !== JSON["stringify"](_0x5949c0) && (_0x101824["set"](_0x15f16b["productId"], _0x21500b), _0x4ab1e2++);
        } else _0x101824["set"](_0x15f16b["productId"] || Date["now"]() + "_" + Math["random"](), _0x15f16b), _0x586931++;
      }
      await chrome["storage"]["local"]["set"]({ [AUTO_PRODUCTS_KEY$1]: Array["from"](_0x101824["values"]()) }), this["_setStatus"]("success", _0x586931 && _0x4ab1e2 ? "เพิ่ม " + _0x586931 + " + อัปเดต " + _0x4ab1e2 + " สินค้าไป Auto (พร้อมลิงก์ aff)" : _0x586931 ? "เพิ่ม " + _0x586931 + " สินค้าไป Auto แล้ว (พร้อมลิงก์ aff)" : _0x4ab1e2 ? "อัปเดต " + _0x4ab1e2 + " สินค้าที่มีอยู่" : "สินค้าที่เลือกมีอยู่แล้ว"), log$6["info"]("Shopee → Auto: +" + _0x586931 + " ~" + _0x4ab1e2);
    } catch (_0x38c877) {
      this["_setStatus"]("error", "เพิ่มไป Auto ไม่สำเร็จ: " + (_0x38c877 instanceof Error ? _0x38c877["message"] : String(_0x38c877)));
    }
  }
  async ["_genLink"]() {
    if (this["genBusy"]) return;
    if (!this["hasCreds"]) {
      this["showSetup"] = !![], this["_setStatus"]("error", "ตั้งค่า App ID / Secret ก่อน");
      return;
    }
    const _0x5ee8d9 = this["genUrl"]["trim"]();
    if (!_0x5ee8d9) {
      this["_setStatus"]("error", "วาง URL สินค้า Shopee ก่อน");
      return;
    }
    this["genBusy"] = !![], this["genResult"] = "";
    try {
      this["genResult"] = await generateShortLink(_0x5ee8d9), this["_setStatus"]("success", "✓ สร้างลิงก์ aff สำเร็จ");
    } catch (_0x296509) {
      this["_setStatus"]("error", "❌ " + (_0x296509 instanceof Error ? _0x296509["message"] : String(_0x296509)));
    } finally {
      this["genBusy"] = ![];
    }
  }
  async ["_copyGen"]() {
    if (!this["genResult"]) return;
    try {
      await navigator["clipboard"]["writeText"](this["genResult"]), this["copied"] = !![], setTimeout(() => {
        this["copied"] = ![];
      }, 1500);
    } catch {
    }
  }
  ["render"]() {
    const _0x4d8009 = this["_selectedCount"];
    return b`
      <div class="setup-toggle" @click=${() => {
      this["showSetup"] = !this["showSetup"], this["_persistUi"]();
    }}>
        ${this["showSetup"] ? "▼" : "▶"} 🔑 ตั้งค่า Shopee Affiliate (App ID + Secret)
        ${this["hasCreds"] ? b`<span class="ok-text">(ตั้งค่าแล้ว ✓)</span>` : b`<span style="color:#f0a">(ยังไม่ได้ตั้งค่า — จำเป็น)</span>`}
      </div>
      ${this["showSetup"] ? b`
        <div class="setup-box">
          ใส่ App ID + Secret ของ Shopee Affiliate Open API ของคุณเอง (ครั้งเดียว):
          <ol>
            <li>สมัคร/เข้า <code>affiliate.shopee.co.th</code> ให้บัญชี active</li>
            <li>หน้า affiliate → แท็บ <strong>"Open API"</strong> → สร้าง App → คัดลอก <strong>App ID</strong> และ <strong>Secret</strong></li>
            <li>วางด้านล่าง แล้วกดบันทึก (ถ้าแท็บ Open API ไม่ขึ้น = บัญชียังไม่ผ่านเกณฑ์ — ต้องสะสมยอด/ผ่านเงื่อนไขก่อน)</li>
          </ol>
          <div class="setup-grid">
            <agx-input label="App ID" placeholder="เช่น 18300000000" .value=${this["appIdInput"]}
              @input=${(_0x255c12) => {
      this["appIdInput"] = _0x255c12["detail"]["value"];
    }}></agx-input>
            <agx-input label="Secret" type="password" placeholder=${this["hasCreds"] ? "•••••••• (บันทึกไว้แล้ว — กรอกใหม่เพื่อเปลี่ยน)" : ""} .value=${this["secretInput"]}
              @input=${(_0x18db0f) => {
      this["secretInput"] = _0x18db0f["detail"]["value"];
    }}></agx-input>
          </div>
          <div style="display:flex;gap:6px">
            <button class="small-btn" @click=${this["_saveCreds"]}>💾 บันทึก</button>
            ${this["hasCreds"] ? b`<button class="small-btn" style="border-color:rgba(239,68,68,0.4);color:#ef6b6b;background:rgba(239,68,68,0.12)" @click=${this["_clearCreds"]}>ลบ</button>` : ""}
          </div>
        </div>
      ` : ""}

      <div class="row">
        <agx-input label="🔍 ค้นหาสินค้า (keyword)" placeholder="เช่น แก้วเก็บความเย็น" .value=${this["keyword"]}
          @input=${(_0x10261b) => {
      this["keyword"] = _0x10261b["detail"]["value"];
    }}
          @keydown=${(_0x118030) => {
      if (_0x118030["key"] === "Enter") this["_search"]();
    }}></agx-input>
      </div>
      <div class="row">
        <agx-input label="🏪 หรือ Shop ID / URL ร้าน (ไม่บังคับ)" placeholder="เช่น 123456789 หรือ shopee.co.th/shop/123456789" .value=${this["shopId"]}
          @input=${(_0x5653d2) => {
      this["shopId"] = _0x5653d2["detail"]["value"];
    }}></agx-input>
        <agx-button variant="primary" size="sm" ?disabled=${this["loading"] || !this["hasCreds"] || this["adding"]} @click=${this["_search"]}>
          ${this["loading"] ? b`<span class="spinner"></span>` : ""} ค้นหาสินค้า
        </agx-button>
      </div>

      ${this["loading"] && this["fetchPage"] > 0 ? b`
        <div class="progress-wrap">
          <div class="progress-bar"><div class="progress-fill" style="width:${Math["min"](100, Math["round"](this["fetchCount"] / MAX_RESULTS * 100))}%"></div></div>
          <div class="progress-text">หน้า ${this["fetchPage"]} · ${this["fetchCount"]}/${MAX_RESULTS}</div>
        </div>` : ""}
      ${this["adding"] && this["addTotal"] > 0 ? b`
        <div class="progress-wrap">
          <div class="progress-bar"><div class="progress-fill" style="width:${Math["round"](this["addProgress"] / this["addTotal"] * 100)}%"></div></div>
          <div class="progress-text">เตรียมรูป ${this["addProgress"]}/${this["addTotal"]}</div>
        </div>` : ""}

      ${this["rows"]["length"] > 0 ? b`
        <div style="display:flex;align-items:center;margin-bottom:6px;gap:8px">
          <agx-button variant="success" size="sm" ?disabled=${_0x4d8009 === 0 || this["adding"] || this["loading"]} @click=${this["_addToAuto"]}>
            เพิ่มไป Auto (${_0x4d8009})
          </agx-button>
          <agx-button variant="secondary" size="sm" ?disabled=${this["adding"] || this["loading"]} @click=${this["_clearAll"]}>🗑 ล้างผล</agx-button>
          <span class="count-badge">${this["rows"]["length"]} สินค้า</span>
        </div>
        <div class="select-links">
          <span @click=${this["_selectAll"]}>เลือกทั้งหมด</span>
          <span @click=${this["_deselectAll"]}>ยกเลิกทั้งหมด</span>
        </div>
      ` : ""}

      ${this["status"] ? b`<div class="status ${this["statusLevel"]}">${this["status"]}</div>` : ""}

      ${this["rows"]["length"] > 0 ? b`<div class="product-list">${this["rows"]["map"]((_0x39ba5a) => this["_renderCard"](_0x39ba5a))}</div>` : b`<div class="empty"><div class="empty-icon">🟠</div>${this["hasCreds"] ? 'ใส่คำค้นหาแล้วกด "ค้นหาสินค้า"' : "ตั้งค่า App ID / Secret ด้านบนก่อน"}</div>`}

      <div class="gen-box">
        <div style="font-size:12px;font-weight:600;margin-bottom:4px">🔗 สร้างลิงก์ affiliate จาก URL สินค้า Shopee</div>
        <div class="row" style="margin-bottom:0">
          <agx-input placeholder="วาง URL เช่น https://shopee.co.th/product/123/456 หรือ https://shopee.co.th/...-i.123.456" .value=${this["genUrl"]}
            @input=${(_0x144d27) => {
      this["genUrl"] = _0x144d27["detail"]["value"];
    }}></agx-input>
          <agx-button variant="secondary" size="sm" ?disabled=${this["genBusy"] || !this["hasCreds"]} @click=${this["_genLink"]}>
            ${this["genBusy"] ? b`<span class="spinner"></span>` : ""} สร้างลิงก์
          </agx-button>
        </div>
        ${this["genResult"] ? b`
          <div class="gen-result">
            <span class="link">${this["genResult"]}</span>
            <button class="small-btn" @click=${this["_copyGen"]}>${this["copied"] ? "✓ คัดลอกแล้ว" : "คัดลอก"}</button>
            <a class="small-btn" href=${this["genResult"]} target="_blank" rel="noopener" style="text-decoration:none">เปิด</a>
          </div>` : ""}
      </div>
    `;
  }
  ["_renderCard"](_0x5e8329) {
    const _0x18af77 = _0x5e8329["commissionRate"] ? Number(_0x5e8329["commissionRate"]) * 100 : NaN;
    return b`
      <div class="pcard ${_0x5e8329["selected"] ? "selected" : ""}">
        <input type="checkbox" class="pcheck" .checked=${_0x5e8329["selected"]}
          @click=${(_0x3ffc01) => _0x3ffc01["stopPropagation"]()} @change=${() => this["_toggle"](_0x5e8329["itemId"])} />
        ${_0x5e8329["imageUrl"] ? b`<img class="pimg" src=${_0x5e8329["imageUrl"]} alt="" loading="lazy" />` : b`<div class="pimg-ph">📷</div>`}
        <div class="pinfo" @click=${() => this["_toggle"](_0x5e8329["itemId"])}>
          <div class="pname">${_0x5e8329["productName"]}</div>
          <div class="pmeta">
            ${_0x5e8329["price"] && _0x5e8329["price"] !== "0" ? b`<strong style="color:#fbbf24">฿${_0x5e8329["price"]}</strong>` : _0x5e8329["priceMin"] ? b`<strong style="color:#fbbf24">฿${_0x5e8329["priceMin"]}${_0x5e8329["priceMax"] && _0x5e8329["priceMax"] !== _0x5e8329["priceMin"] ? "–" + _0x5e8329["priceMax"] : ""}</strong>` : ""}
            ${!Number["isNaN"](_0x18af77) ? b` · <span style="color:#4ade80">💰 ${_0x18af77 % 1 === 0 ? _0x18af77["toFixed"](0) : _0x18af77["toFixed"](1)}%</span>` : ""}
            ${_0x5e8329["ratingStar"] ? b` · ⭐ ${Number(_0x5e8329["ratingStar"])["toFixed"](1)}` : ""}
            ${_0x5e8329["sales"] && _0x5e8329["sales"] !== "0" ? b` · ขายแล้ว ${_0x5e8329["sales"]}` : ""}
          </div>
          ${_0x5e8329["shopName"] ? b`<div class="pmeta">🏪 ${_0x5e8329["shopName"]}</div>` : ""}
          ${_0x5e8329["offerLink"] ? b`<div class="pmeta">🔗 ${_0x5e8329["offerLink"]}</div>` : ""}
        </div>
      </div>
    `;
  }
};
AgxShopeeSource["styles"] = i$3`
    :host { display: block; font-family: 'Bai Jamjuree', sans-serif; color: var(--agx-text, #e4e6eb); }
    .setup-toggle { font-size: 11px; cursor: pointer; color: #6aa9ff; user-select: none; padding: 4px 0; }
    .setup-box { border: 1px solid rgba(255,165,0,0.25); background: rgba(255,165,0,0.05); border-radius: 8px; padding: 8px 10px; margin-bottom: 10px; font-size: 11px; line-height: 1.5; }
    .setup-box ol { margin: 4px 0 6px; padding-left: 18px; }
    .setup-box li { margin-bottom: 2px; }
    .setup-box code { background: rgba(0,0,0,0.3); padding: 0 3px; border-radius: 3px; }
    .setup-grid { display: grid; gap: 6px; margin: 6px 0; }
    .ok-text { color: #6ad08c; }
    .row { display: flex; gap: 6px; align-items: flex-end; margin-bottom: 8px; }
    .row agx-input { flex: 1; }
    .status { font-size: 11px; padding: 4px 8px; border-radius: 6px; margin-bottom: 8px; background: rgba(255,255,255,0.05); color: var(--agx-text-muted, #94a3b8); }
    .status.error { color: #f87171; background: rgba(248,113,113,0.1); }
    .status.success { color: #4ade80; background: rgba(74,222,128,0.1); }
    .select-links { display: flex; gap: 10px; margin-bottom: 6px; font-size: 11px; }
    .select-links span { color: var(--agx-accent, #4A8DFF); cursor: pointer; text-decoration: underline; }
    .count-badge { font-size: 11px; color: var(--agx-text-muted, #64748b); margin-left: auto; align-self: center; }
    .product-list { display: flex; flex-direction: column; gap: 6px; }
    .pcard { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 8px 10px; }
    .pcard.selected { border-color: var(--agx-accent, #4A8DFF); background: rgba(74,141,255,0.08); }
    .pcheck { width: 16px; height: 16px; flex-shrink: 0; accent-color: var(--agx-accent, #4A8DFF); cursor: pointer; }
    .pimg { width: 44px; height: 44px; object-fit: cover; border-radius: 6px; flex-shrink: 0; background: rgba(255,255,255,0.05); }
    .pimg-ph { width: 44px; height: 44px; border-radius: 6px; background: rgba(255,255,255,0.08); flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .pinfo { flex: 1; min-width: 0; cursor: pointer; }
    .pname { font-size: 13px; font-weight: 600; color: var(--agx-text-primary, #f0f4f8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .pmeta { font-size: 11px; color: var(--agx-text-muted, #64748b); margin-top: 2px; }
    .empty { text-align: center; padding: 36px 20px; color: var(--agx-text-muted, #64748b); font-size: 13px; }
    .empty-icon { font-size: 32px; margin-bottom: 6px; }
    .spinner { width: 14px; height: 14px; border: 2px solid rgba(74,141,255,0.3); border-top-color: var(--agx-accent, #4A8DFF); border-radius: 50%; animation: spin 600ms linear infinite; display: inline-block; vertical-align: middle; margin-right: 4px; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .gen-box { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 8px 10px; margin: 10px 0; background: rgba(255,255,255,0.03); }
    .gen-result { display: flex; gap: 6px; align-items: center; margin-top: 6px; font-size: 11px; }
    .gen-result .link { flex: 1; word-break: break-all; color: #cdd; background: rgba(0,0,0,0.3); padding: 4px 6px; border-radius: 5px; }
    .small-btn { padding: 4px 8px; font-size: 11px; cursor: pointer; border-radius: 5px; background: rgba(74,141,255,0.12); border: 1px solid rgba(74,141,255,0.4); color: #6aa9ff; }
    .progress-wrap { margin: 8px 0; }
    .progress-bar { height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #f59e0b, #fbbf24); transition: width 200ms ease; }
    .progress-text { font-size: 10px; color: var(--agx-text-muted, #94a3b8); text-align: center; margin-top: 4px; }
  `, __decorateClass$7([r()], AgxShopeeSource["prototype"], "hasCreds", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "appIdInput", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "secretInput", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "showSetup", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "keyword", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "shopId", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "rows", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "loading", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "fetchPage", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "fetchCount", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "adding", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "addProgress", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "addTotal", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "genUrl", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "genResult", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "genBusy", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "copied", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "status", 2), __decorateClass$7([r()], AgxShopeeSource["prototype"], "statusLevel", 2), AgxShopeeSource = __decorateClass$7([t$1("agx-shopee-source")], AgxShopeeSource);
var __defProp$6 = Object["defineProperty"], __getOwnPropDesc$6 = Object["getOwnPropertyDescriptor"], __decorateClass$6 = (_0x537a27, _0x3b1f74, _0x181807, _0x48eaa7) => {
  var _0x57c37c = _0x48eaa7 > 1 ? void 0 : _0x48eaa7 ? __getOwnPropDesc$6(_0x3b1f74, _0x181807) : _0x3b1f74;
  for (var _0x417afd = _0x537a27["length"] - 1, _0x21b6f7; _0x417afd >= 0; _0x417afd--) if (_0x21b6f7 = _0x537a27[_0x417afd]) _0x57c37c = (_0x48eaa7 ? _0x21b6f7(_0x3b1f74, _0x181807, _0x57c37c) : _0x21b6f7(_0x57c37c)) || _0x57c37c;
  if (_0x48eaa7 && _0x57c37c) __defProp$6(_0x3b1f74, _0x181807, _0x57c37c);
  return _0x57c37c;
};
const log$5 = createLogger("ShopMode"), AUTO_PRODUCTS_KEY = "agx_auto_products", SHOP_PRODUCTS_KEY = "agx_shop_products", SOURCE_KEY = "agx_shop_source";
let AgxShopMode = class extends i {
  constructor() {
    super(...arguments), this["source"] = "tiktok", this["products"] = [], this["loading"] = ![], this["search"] = "", this["status"] = "", this["statusLevel"] = "info", this["progressPage"] = 0, this["progressTotal"] = 0, this["showHelp"] = !![], this["exportProgress"] = 0, this["exportTotal"] = 0, this["exporting"] = ![], this["pickerProductId"] = null, this["_onMessage"] = null, this["_fileInput"] = null;
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["_onMessage"] = (_0xa2add0) => {
      if (_0xa2add0["type"] === "SHOWCASE_PROGRESS") {
        const _0x20e9c4 = _0xa2add0["payload"];
        this["progressPage"] = _0x20e9c4["page"] || 0, this["progressTotal"] = _0x20e9c4["total"] || 0, this["status"] = "กำลังโหลดหน้าที่ " + this["progressPage"] + "/" + this["progressTotal"] + "...", this["statusLevel"] = "info";
        return;
      }
      if (_0xa2add0["type"] === "SHOWCASE_RESULT") {
        const _0x15e7d5 = _0xa2add0["payload"];
        this["loading"] = ![], this["progressPage"] = 0, this["progressTotal"] = 0;
        if (_0x15e7d5["error"]) {
          this["status"] = "❌ " + _0x15e7d5["error"], this["statusLevel"] = "error";
          return;
        }
        Array["isArray"](_0x15e7d5["products"]) && (this["products"] = _0x15e7d5["products"]["map"]((_0x81f9ab) => ({ ..._0x81f9ab, "selected": ![] })), this["_saveProducts"](), this["status"] = this["products"]["length"] > 0 ? "✓ ดึงสำเร็จ " + this["products"]["length"] + " สินค้า" : "❌ ไม่พบสินค้า — กรุณา login TikTok Affiliate ก่อน", this["statusLevel"] = this["products"]["length"] > 0 ? "success" : "error", log$5["info"]("Received " + this["products"]["length"] + " products from Affiliate API"));
      }
    }, chrome["runtime"]["onMessage"]["addListener"](this["_onMessage"]), this["_loadProducts"](), void this["_loadSource"]();
  }
  async ["_loadSource"]() {
    try {
      const _0x54cca1 = await chrome["storage"]["local"]["get"](SOURCE_KEY);
      if (_0x54cca1[SOURCE_KEY] === "shopee") this["source"] = "tiktok";
    } catch {
    }
  }
  ["_setSource"](_0x1bdb10) {
    if (_0x1bdb10 === "shopee" || this["source"] === _0x1bdb10) return;
    this["source"] = _0x1bdb10, chrome["storage"]["local"]["set"]({ [SOURCE_KEY]: _0x1bdb10 })["catch"](() => {
    });
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_onMessage"] && (chrome["runtime"]["onMessage"]["removeListener"](this["_onMessage"]), this["_onMessage"] = null);
  }
  async ["_loadProducts"]() {
    try {
      const _0x157abd = await chrome["storage"]["local"]["get"](SHOP_PRODUCTS_KEY), _0x46d34c = _0x157abd[SHOP_PRODUCTS_KEY];
      Array["isArray"](_0x46d34c) && _0x46d34c["length"] > 0 && (this["products"] = _0x46d34c, this["status"] = "โหลดจาก cache: " + _0x46d34c["length"] + " สินค้า", this["statusLevel"] = "info");
    } catch (_0xd1357c) {
      log$5["warn"]("Could not load cached products", _0xd1357c);
    }
  }
  ["_saveProducts"]() {
    chrome["storage"]["local"]["set"]({ [SHOP_PRODUCTS_KEY]: this["products"] })["catch"]((_0x3cb82c) => log$5["warn"]("Failed to save shop products", _0x3cb82c));
  }
  async ["_fetchProducts"]() {
    if (this["loading"]) return;
    this["loading"] = !![], this["status"] = "กำลังเชื่อมต่อ TikTok Affiliate...", this["statusLevel"] = "info", this["progressPage"] = 0, this["progressTotal"] = 0;
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_FETCH", "payload": {} });
    } catch (_0x430265) {
      this["loading"] = ![], this["status"] = "ดึงสินค้าไม่สำเร็จ: " + _0x430265, this["statusLevel"] = "error";
    }
  }
  async ["_exportProducts"]() {
    const _0x107072 = this["products"]["filter"]((_0x3161b7) => _0x3161b7["selected"]), _0x47052e = _0x107072["length"] > 0 ? _0x107072 : this["products"];
    if (_0x47052e["length"] === 0) {
      this["status"] = "❌ ไม่มีสินค้าให้ export", this["statusLevel"] = "error";
      return;
    }
    this["exporting"] = !![], this["exportTotal"] = _0x47052e["length"], this["exportProgress"] = 0, this["status"] = "กำลังแปลงรูป " + this["exportTotal"] + " สินค้าเป็น base64...", this["statusLevel"] = "info";
    const _0x53545d = [];
    for (const _0x51e7c7 of _0x47052e) {
      this["exportProgress"]++, this["status"] = "กำลังแปลงรูป " + this["exportProgress"] + "/" + this["exportTotal"] + "...";
      const _0x1e2a65 = _0x51e7c7["selectedImages"] && _0x51e7c7["selectedImages"]["length"] > 0 ? _0x51e7c7["selectedImages"]["slice"](0, 3) : _0x51e7c7["imageUrl"] ? [_0x51e7c7["imageUrl"]] : [], _0x5ec483 = await normalizeImageList(_0x1e2a65);
      _0x53545d["push"]({ "productId": _0x51e7c7["productId"], "productName": _0x51e7c7["name"], "price": _0x51e7c7["price"] ? "฿" + _0x51e7c7["price"] : "-", "stock": _0x51e7c7["stock"] || "-", "imageUrl": _0x1e2a65[0] || "", "productImages": _0x5ec483 });
    }
    const _0x393135 = (/* @__PURE__ */ new Date())["toISOString"]()["slice"](0, 10), _0x2dc7ef = "showcase-" + _0x393135 + ".json", _0x466408 = new Blob([JSON["stringify"](wrapExport(_0x53545d), null, 2)], { "type": "application/json" }), _0xe295c2 = URL["createObjectURL"](_0x466408), _0x1ac22f = document["createElement"]("a");
    _0x1ac22f["href"] = _0xe295c2, _0x1ac22f["download"] = _0x2dc7ef, _0x1ac22f["click"](), URL["revokeObjectURL"](_0xe295c2), this["exporting"] = ![], this["status"] = "✓ Export สำเร็จ " + _0x53545d["length"] + " สินค้า → " + _0x2dc7ef, this["statusLevel"] = "success";
  }
  ["_openImportPicker"]() {
    !this["_fileInput"] && (this["_fileInput"] = document["createElement"]("input"), this["_fileInput"]["type"] = "file", this["_fileInput"]["accept"] = ".json,application/json", this["_fileInput"]["addEventListener"]("change", (_0x9525fc) => {
      var _a2;
      const _0x24a923 = _0x9525fc["target"], _0x221cf6 = (_a2 = _0x24a923["files"]) == null ? void 0 : _a2[0];
      if (_0x221cf6) this["_importProducts"](_0x221cf6);
      _0x24a923["value"] = "";
    })), this["_fileInput"]["click"]();
  }
  async ["_importProducts"](_0x340479) {
    try {
      const _0x33a7ae = await _0x340479["text"](), _0x39c2ea = unwrapImport(JSON["parse"](_0x33a7ae)), _0x18e7c1 = _0x39c2ea["map"]((_0x4a6a20) => {
        const _0x46bd83 = String(_0x4a6a20["price"] || "")["replace"](/[฿$\s]/g, ""), _0x1d013c = Array["isArray"](_0x4a6a20["productImages"]) ? _0x4a6a20["productImages"] : [], _0x35c461 = _0x1d013c["map"]((_0x582343) => String(_0x582343 || ""))["filter"](Boolean)["slice"](0, 3);
        if (_0x35c461["length"] === 0) {
          const _0x5a0e07 = String(_0x4a6a20["productImage"] || _0x4a6a20["imageUrl"] || "");
          if (_0x5a0e07) _0x35c461["push"](_0x5a0e07);
        }
        return { "productId": String(_0x4a6a20["productId"] || _0x4a6a20["id"] || Date["now"]() + Math["random"]()), "name": String(_0x4a6a20["productName"] || _0x4a6a20["name"] || "Untitled"), "price": _0x46bd83, "stock": String(_0x4a6a20["stock"] || ""), "imageUrl": _0x35c461[0] || "", "selected": ![], "allImages": _0x35c461["length"] > 0 ? _0x35c461 : void 0, "selectedImages": _0x35c461["length"] > 0 ? _0x35c461 : void 0 };
      });
      this["products"] = _0x18e7c1, this["_saveProducts"](), this["status"] = "✓ Import สำเร็จ " + _0x18e7c1["length"] + " สินค้าจาก " + _0x340479["name"], this["statusLevel"] = "success";
    } catch (_0x1b007c) {
      this["status"] = "❌ Import ล้มเหลว: " + (_0x1b007c instanceof Error ? _0x1b007c["message"] : _0x1b007c), this["statusLevel"] = "error";
    }
  }
  async ["_addToAuto"]() {
    var _a2;
    const _0x12c7c7 = this["products"]["filter"]((_0x1df269) => _0x1df269["selected"]);
    if (_0x12c7c7["length"] === 0) {
      this["status"] = "กรุณาเลือกสินค้าก่อน", this["statusLevel"] = "error";
      return;
    }
    this["exporting"] = !![], this["exportTotal"] = _0x12c7c7["reduce"]((_0x59a30b, _0x4bc66b) => _0x59a30b + (_0x4bc66b["selectedImages"] && _0x4bc66b["selectedImages"]["length"] > 0 ? _0x4bc66b["selectedImages"]["length"] : _0x4bc66b["imageUrl"] ? 1 : 0), 0), this["exportProgress"] = 0, this["status"] = "กำลังเตรียมรูป " + this["exportTotal"] + " ใบ...", this["statusLevel"] = "info";
    const _0x858b1 = [];
    for (const _0x377710 of _0x12c7c7) {
      const _0x41bd5f = _0x377710["selectedImages"] && _0x377710["selectedImages"]["length"] > 0 ? _0x377710["selectedImages"] : _0x377710["imageUrl"] ? [_0x377710["imageUrl"]] : [], _0x3b6cd9 = await normalizeImageList(_0x41bd5f, () => {
        this["exportProgress"]++, this["status"] = "กำลังเตรียมรูป " + this["exportProgress"] + "/" + this["exportTotal"] + "...";
      });
      _0x858b1["push"]({ "id": _0x377710["productId"] || String(Date["now"]() + Math["random"]()), "name": _0x377710["name"], "productId": _0x377710["productId"], "productImages": _0x3b6cd9, "customSpeech": "", "hashtags": "", "basketName": _0x377710["productId"] || "" });
    }
    this["exporting"] = ![];
    try {
      const _0x43fb0a = await chrome["storage"]["local"]["get"](AUTO_PRODUCTS_KEY), _0x24e28d = Array["isArray"](_0x43fb0a[AUTO_PRODUCTS_KEY]) ? _0x43fb0a[AUTO_PRODUCTS_KEY] : [], _0x32d7fd = /* @__PURE__ */ new Map();
      for (const _0x41419a of _0x24e28d) {
        if (_0x41419a["productId"]) _0x32d7fd["set"](_0x41419a["productId"], _0x41419a);
      }
      let _0x284660 = 0, _0x1ea0a0 = 0;
      for (const _0x129a56 of _0x858b1) {
        const _0x53a3cc = _0x129a56["productId"];
        if (!_0x53a3cc) {
          _0x32d7fd["set"](String(Date["now"]() + Math["random"]()), _0x129a56), _0x284660++;
          continue;
        }
        const _0x1293f1 = _0x32d7fd["get"](_0x53a3cc);
        if (_0x1293f1) {
          const _0x48cb98 = { ..._0x1293f1, "basketName": _0x1293f1["basketName"] || _0x129a56["basketName"], "name": _0x1293f1["name"] || _0x129a56["name"], "productImages": ((_a2 = _0x1293f1["productImages"]) == null ? void 0 : _a2["length"]) ? _0x1293f1["productImages"] : _0x129a56["productImages"] };
          JSON["stringify"](_0x48cb98) !== JSON["stringify"](_0x1293f1) && (_0x32d7fd["set"](_0x53a3cc, _0x48cb98), _0x1ea0a0++);
        } else _0x32d7fd["set"](_0x53a3cc, _0x129a56), _0x284660++;
      }
      const _0x4977bd = Array["from"](_0x32d7fd["values"]());
      await chrome["storage"]["local"]["set"]({ [AUTO_PRODUCTS_KEY]: _0x4977bd });
      if (_0x284660 > 0 && _0x1ea0a0 > 0) this["status"] = "เพิ่ม " + _0x284660 + " + อัปเดต " + _0x1ea0a0 + " สินค้าไปที่ Auto";
      else {
        if (_0x284660 > 0) this["status"] = "เพิ่ม " + _0x284660 + " สินค้าไปที่ Auto แล้ว";
        else _0x1ea0a0 > 0 ? this["status"] = "อัปเดต " + _0x1ea0a0 + " สินค้าที่มีอยู่แล้ว" : this["status"] = "สินค้าที่เลือกมีอยู่แล้ว (ไม่มีอะไรต้องเปลี่ยน)";
      }
      this["statusLevel"] = "success", log$5["info"]("Added " + _0x284660 + ", updated " + _0x1ea0a0 + " products to Auto mode");
    } catch (_0x29a245) {
      this["status"] = "เพิ่มสินค้าไม่สำเร็จ: " + _0x29a245, this["statusLevel"] = "error";
    }
  }
  ["_toggleSelect"](_0x147875) {
    this["products"] = this["products"]["map"]((_0x5b152b) => _0x5b152b["productId"] === _0x147875 ? { ..._0x5b152b, "selected": !_0x5b152b["selected"] } : _0x5b152b);
  }
  ["_openPicker"](_0x166738) {
    var _a2;
    const _0x385ad9 = this["products"]["find"]((_0x5012d0) => _0x5012d0["productId"] === _0x166738);
    if (!_0x385ad9) return;
    const _0x3df483 = ((_a2 = _0x385ad9["allImages"]) == null ? void 0 : _a2["length"]) ? _0x385ad9["allImages"] : _0x385ad9["imageUrl"] ? [_0x385ad9["imageUrl"]] : [];
    if (_0x3df483["length"] === 0) return;
    this["pickerProductId"] = _0x166738;
  }
  ["_onPickerSave"](_0x42af86) {
    const _0x534eb6 = this["pickerProductId"];
    if (!_0x534eb6) return;
    const _0x1a9ffd = _0x42af86["detail"]["images"];
    this["products"] = this["products"]["map"]((_0x416080) => _0x416080["productId"] === _0x534eb6 ? { ..._0x416080, "selectedImages": _0x1a9ffd, "selected": !![] } : _0x416080), this["_saveProducts"](), this["pickerProductId"] = null, this["status"] = "✓ เลือก " + _0x1a9ffd["length"] + " รูปสำหรับสินค้าแล้ว", this["statusLevel"] = "success";
  }
  ["_onPickerCancel"]() {
    this["pickerProductId"] = null;
  }
  ["_selectAll"]() {
    this["products"] = this["products"]["filter"]((_0xf2103e) => this["_matchesSearch"](_0xf2103e))["map"]((_0x1ccf72) => ({ ..._0x1ccf72, "selected": !![] }))["concat"](this["products"]["filter"]((_0x3a7e7c) => !this["_matchesSearch"](_0x3a7e7c)));
  }
  ["_deselectAll"]() {
    this["products"] = this["products"]["map"]((_0x2e6ddd) => ({ ..._0x2e6ddd, "selected": ![] }));
  }
  ["_clearAll"]() {
    if (this["products"]["length"] === 0) return;
    const _0x4d5ef9 = confirm("ล้างสินค้าทั้งหมด " + this["products"]["length"] + " รายการ? (จะลบออกจาก cache ด้วย)");
    if (!_0x4d5ef9) return;
    this["products"] = [], this["search"] = "", this["_saveProducts"](), this["status"] = "✓ ล้างสินค้าแล้ว", this["statusLevel"] = "success";
  }
  ["_matchesSearch"](_0x5cbd3c) {
    if (!this["search"]["trim"]()) return !![];
    const _0x38593b = this["search"]["toLowerCase"]();
    return _0x5cbd3c["name"]["toLowerCase"]()["includes"](_0x38593b) || _0x5cbd3c["productId"]["toLowerCase"]()["includes"](_0x38593b);
  }
  get ["_filtered"]() {
    return this["products"]["filter"]((_0x3ee693) => this["_matchesSearch"](_0x3ee693));
  }
  get ["_selectedCount"]() {
    return this["products"]["filter"]((_0x1a4561) => _0x1a4561["selected"])["length"];
  }
  ["render"]() {
    return b`
      <div class="source-tabs">
        <button class="source-tab active">🛒 ดึงจาก TikTok</button>
        <button class="source-tab soon" disabled title="เร็วๆ นี้">🟠 ดึงจาก Shopee <span class="soon-badge">Soon</span></button>
      </div>
      ${this["_renderTikTok"]()}
    `;
  }
  ["_renderTikTok"]() {
    const _0x251a7e = this["_filtered"], _0x5bfeed = this["_selectedCount"], _0x2b8c8f = this["progressTotal"] > 0 ? Math["round"](this["progressPage"] / this["progressTotal"] * 100) : 0;
    return b`
      <!-- Instructions (collapsible) -->
      <div class="help-box">
        <div class="help-header" @click=${() => {
      this["showHelp"] = !this["showHelp"];
    }}>
          <span>📦 โหลดสินค้าจาก TikTok Showcase</span>
          <span class="help-toggle">${this["showHelp"] ? "▼" : "▶"}</span>
        </div>
        ${this["showHelp"] ? b`
          <div class="help-body">
            <div class="help-title">ขั้นตอนการใช้งาน:</div>
            <div class="help-step">1️⃣ Login <a href="https://www.tiktok.com/tiktokstudio" target="_blank">TikTok Studio</a> (ครั้งแรกครั้งเดียว)</div>
            <div class="help-step">2️⃣ กลับมาที่นี่ กด <strong>ดึงสินค้า</strong> (ระบบดึงผ่าน API อัตโนมัติ)</div>
            <div class="help-step">3️⃣ <strong>คลิกรูปบนการ์ดสินค้า</strong> → เลือกรูปที่อยากใช้ 1 รูป</div>
            <div class="help-step">4️⃣ ติ๊ก checkbox สินค้าที่เลือก แล้วกด <strong>เพิ่มไปที่ Auto</strong></div>
          </div>
        ` : ""}
      </div>

      <!-- Toolbar -->
      <div class="toolbar">
        <agx-button
          variant="primary"
          size="sm"
          ?disabled=${this["loading"] || this["exporting"]}
          @click=${this["_fetchProducts"]}
        >
          ${this["loading"] ? b`<span class="spinner"></span>` : ""}
          ดึงสินค้า
        </agx-button>

        <agx-button
          variant="success"
          size="sm"
          ?disabled=${_0x5bfeed === 0 || this["exporting"]}
          @click=${this["_addToAuto"]}
        >
          เพิ่มไปที่ Auto (${_0x5bfeed})
        </agx-button>

        <span class="count-badge">${this["products"]["length"]} สินค้า</span>
      </div>

      <!-- Export / Import row -->
      ${this["products"]["length"] > 0 || !this["loading"] ? b`
        <div class="toolbar">
          <agx-button
            variant="secondary"
            size="sm"
            ?disabled=${this["products"]["length"] === 0 || this["exporting"]}
            @click=${this["_exportProducts"]}
          >
            ${this["exporting"] ? b`<span class="spinner"></span>` : ""}
            💾 Export JSON${_0x5bfeed > 0 ? " (" + _0x5bfeed + ")" : this["products"]["length"] > 0 ? " (" + this["products"]["length"] + ")" : ""}
          </agx-button>

          <agx-button
            variant="secondary"
            size="sm"
            ?disabled=${this["loading"] || this["exporting"]}
            @click=${this["_openImportPicker"]}
          >
            📂 นำเข้าจากไฟล์
          </agx-button>

          <agx-button
            variant="secondary"
            size="sm"
            ?disabled=${this["products"]["length"] === 0 || this["loading"] || this["exporting"]}
            @click=${this["_clearAll"]}
          >
            🗑 ล้างสินค้า
          </agx-button>
        </div>
      ` : ""}

      <!-- Export progress -->
      ${this["exporting"] && this["exportTotal"] > 0 ? b`
        <div class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${Math["round"](this["exportProgress"] / this["exportTotal"] * 100)}%"></div>
          </div>
          <div class="progress-text">แปลงรูป ${this["exportProgress"]}/${this["exportTotal"]}</div>
        </div>
      ` : ""}

      <!-- Progress bar (during fetch) -->
      ${this["loading"] && this["progressTotal"] > 0 ? b`
        <div class="progress-wrap">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${_0x2b8c8f}%"></div>
          </div>
          <div class="progress-text">หน้า ${this["progressPage"]}/${this["progressTotal"]}</div>
        </div>
      ` : ""}

      <!-- Search -->
      ${this["products"]["length"] > 0 ? b`
        <div class="search-row">
          <agx-input
            placeholder="ค้นหาสินค้า..."
            .value=${this["search"]}
            @input=${(_0x5931be) => {
      this["search"] = _0x5931be["detail"]["value"];
    }}
          ></agx-input>
        </div>
        <div class="select-links">
          <span @click=${this["_selectAll"]}>เลือกทั้งหมด</span>
          <span @click=${this["_deselectAll"]}>ยกเลิกทั้งหมด</span>
        </div>
      ` : ""}

      <!-- Status -->
      ${this["status"] ? b`
        <div class="status ${this["statusLevel"]}">${this["status"]}</div>
      ` : ""}

      <!-- Product list -->
      ${_0x251a7e["length"] > 0 ? b`
          <div class="product-list">
            ${_0x251a7e["map"]((_0xefa68f) => this["_renderCard"](_0xefa68f))}
          </div>
        ` : b`
          <div class="empty">
            <div class="empty-icon">📦</div>
            ${this["products"]["length"] === 0 ? b`กด <strong>ดึงสินค้า</strong> เพื่อโหลดสินค้าจาก TikTok Affiliate` : "ไม่พบสินค้าที่ค้นหา"}
          </div>
        `}

      ${this["_renderPicker"]()}
    `;
  }
  ["_renderPicker"]() {
    var _a2;
    if (!this["pickerProductId"]) return "";
    const _0x18e623 = this["products"]["find"]((_0xc594a3) => _0xc594a3["productId"] === this["pickerProductId"]);
    if (!_0x18e623) return "";
    const _0x2bb9d2 = ((_a2 = _0x18e623["allImages"]) == null ? void 0 : _a2["length"]) ? _0x18e623["allImages"] : _0x18e623["imageUrl"] ? [_0x18e623["imageUrl"]] : [];
    return b`
      <agx-shop-image-picker
        .productName=${_0x18e623["name"]}
        .images=${_0x2bb9d2}
        .initialSelected=${_0x18e623["selectedImages"] ?? []}
        @images-selected=${this["_onPickerSave"]}
        @picker-cancel=${this["_onPickerCancel"]}
      ></agx-shop-image-picker>
    `;
  }
  ["_renderCard"](_0x2e3167) {
    var _a2, _b, _c;
    const _0x346ce4 = ((_a2 = _0x2e3167["allImages"]) == null ? void 0 : _a2["length"]) ?? (_0x2e3167["imageUrl"] ? 1 : 0), _0x59a8e9 = ((_b = _0x2e3167["selectedImages"]) == null ? void 0 : _b["length"]) ?? 0, _0x20f70b = _0x346ce4 > 1, _0x52d37e = ((_c = _0x2e3167["selectedImages"]) == null ? void 0 : _c[0]) || _0x2e3167["imageUrl"];
    return b`
      <div class="product-card ${_0x2e3167["selected"] ? "selected" : ""}">
        <input
          type="checkbox"
          class="product-checkbox"
          .checked=${_0x2e3167["selected"]}
          @click=${(_0x11a9c2) => _0x11a9c2["stopPropagation"]()}
          @change=${() => this["_toggleSelect"](_0x2e3167["productId"])}
        />

        <div
          class="product-img-wrap"
          style="position:relative;cursor:${_0x20f70b ? "pointer" : "default"}"
          @click=${(_0x3f8a96) => {
      _0x3f8a96["stopPropagation"]();
      if (_0x20f70b) this["_openPicker"](_0x2e3167["productId"]);
    }}
          title=${_0x20f70b ? "คลิกเพื่อเลือกรูป" : ""}
        >
          ${_0x52d37e ? b`<img class="product-img" src=${_0x52d37e} alt="" loading="lazy" />` : b`<div class="product-img-placeholder">📷</div>`}
          ${_0x20f70b ? b`
            <div style="position:absolute;bottom:-2px;right:-2px;background:var(--agx-accent,#4A8DFF);color:#fff;font-size:9px;padding:1px 4px;border-radius:4px;font-weight:600">
              ${_0x59a8e9 > 0 ? "✓" : "📷" + _0x346ce4}
            </div>
          ` : ""}
        </div>

        <div class="product-info" @click=${() => this["_toggleSelect"](_0x2e3167["productId"])} style="cursor:pointer">
          <div class="product-name">${_0x2e3167["name"]}</div>
          <div class="product-meta">
            ${_0x2e3167["price"] ? b`<strong style="color:#fbbf24">฿${_0x2e3167["price"]}</strong>` : ""}
            ${_0x2e3167["commissionRate"] ? b` · <span style="color:#4ade80">💰 ${_0x2e3167["commissionRate"]}%${_0x2e3167["commission"] ? " (" + _0x2e3167["commission"] + ")" : ""}</span>` : ""}
          </div>
          <div class="product-meta">
            📦 สต็อก ${_0x2e3167["stock"] || "-"}
            ${_0x2e3167["category"] ? b` · ${_0x2e3167["category"]}` : ""}
          </div>
          ${_0x2e3167["shopName"] ? b`<div class="product-meta">🏪 ${_0x2e3167["shopName"]}</div>` : ""}
        </div>
      </div>
    `;
  }
};
AgxShopMode["styles"] = i$3`
    :host {
      display: block;
      padding: 0 0 80px;
      font-family: 'Bai Jamjuree', sans-serif;
    }

    .source-tabs {
      display: flex; gap: 4px; margin-bottom: 12px;
      background: var(--agx-bg-deep, #000); border-radius: 10px; padding: 3px;
    }
    .source-tab {
      flex: 1; padding: 8px 6px; border: none; border-radius: 8px;
      background: transparent; color: var(--agx-text-muted, #64748b);
      font: inherit; font-size: 12px; font-weight: 600; cursor: pointer;
      transition: all .15s; display: flex; align-items: center; justify-content: center; gap: 5px;
    }
    .source-tab:hover:not(.soon) { color: var(--agx-text-secondary, #94a3b8); background: rgba(255,255,255,0.04); }
    .source-tab.active { background: var(--agx-accent, #4A8DFF); color: #fff; box-shadow: 0 2px 10px rgba(47,107,255,0.3); }
    .source-tab.active.shopee { background: #ee4d2d; box-shadow: 0 2px 10px rgba(238,77,45,0.3); }
    .source-tab.soon { opacity: 0.45; cursor: not-allowed; }
    .soon-badge { font-size: 8px; font-weight: 700; padding: 1px 4px; border-radius: 3px; background: var(--agx-warning, #f59e0b); color: #000; letter-spacing: 0.3px; }

    .toolbar {
      display: flex;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }

    .search-row {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
    }

    .search-row agx-input {
      flex: 1;
    }

    .status {
      font-size: 11px;
      padding: 4px 8px;
      border-radius: 6px;
      margin-bottom: 8px;
      background: rgba(255,255,255,0.05);
      color: var(--agx-text-muted, #64748b);
    }
    .status.error { color: #f87171; background: rgba(248,113,113,0.1); }
    .status.success { color: #4ade80; background: rgba(74,222,128,0.1); }

    .product-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .product-card {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      padding: 8px 10px;
      cursor: pointer;
      transition: background 150ms;
    }
    .product-card:hover { background: rgba(255,255,255,0.07); }
    .product-card.selected { border-color: var(--agx-accent, #4A8DFF); background: rgba(74,141,255,0.08); }

    .product-checkbox {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      accent-color: var(--agx-accent, #4A8DFF);
      cursor: pointer;
    }

    .product-img {
      width: 44px;
      height: 44px;
      object-fit: cover;
      border-radius: 6px;
      flex-shrink: 0;
      background: rgba(255,255,255,0.05);
    }

    .product-img-placeholder {
      width: 44px;
      height: 44px;
      border-radius: 6px;
      background: rgba(255,255,255,0.08);
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .product-info {
      flex: 1;
      min-width: 0;
    }

    .product-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--agx-text-primary, #f0f4f8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .product-meta {
      font-size: 11px;
      color: var(--agx-text-muted, #64748b);
      margin-top: 2px;
    }

    .empty {
      text-align: center;
      padding: 40px 20px;
      color: var(--agx-text-muted, #64748b);
      font-size: 13px;
    }
    .empty-icon { font-size: 36px; margin-bottom: 8px; }

    .bottom-bar {
      position: sticky;
      bottom: 0;
      background: var(--agx-bg-base, #101420);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 10px 0 6px;
      display: flex;
      gap: 8px;
    }

    .select-links {
      display: flex;
      gap: 10px;
      margin-bottom: 4px;
      font-size: 11px;
    }

    .select-links span {
      color: var(--agx-accent, #4A8DFF);
      cursor: pointer;
      text-decoration: underline;
    }

    .count-badge {
      font-size: 11px;
      color: var(--agx-text-muted, #64748b);
      margin-left: auto;
      align-self: center;
    }

    .spinner {
      width: 14px; height: 14px;
      border: 2px solid rgba(74,141,255,0.3);
      border-top-color: var(--agx-accent, #4A8DFF);
      border-radius: 50%;
      animation: spin 600ms linear infinite;
      display: inline-block;
      vertical-align: middle;
      margin-right: 4px;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .help-box {
      background: rgba(74,141,255,0.06);
      border: 1px solid rgba(74,141,255,0.15);
      border-radius: 8px;
      margin-bottom: 12px;
      overflow: hidden;
    }
    .help-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      color: var(--agx-accent, #4A8DFF);
    }
    .help-toggle { font-size: 10px; opacity: 0.7; }
    .help-body {
      padding: 0 12px 10px;
      font-size: 11px;
      line-height: 1.7;
      color: var(--agx-text-muted, #94a3b8);
    }
    .help-title { font-weight: 600; color: #cbd5e1; margin-bottom: 4px; }
    .help-step { padding-left: 4px; }
    .help-body a { color: var(--agx-accent, #4A8DFF); }
    .help-body strong { color: #e2e8f0; }

    .progress-wrap {
      margin: 8px 0;
    }
    .progress-bar {
      height: 6px;
      background: rgba(255,255,255,0.08);
      border-radius: 3px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #2F6BFF, #4A8DFF);
      transition: width 200ms ease;
    }
    .progress-text {
      font-size: 10px;
      color: var(--agx-text-muted, #94a3b8);
      text-align: center;
      margin-top: 4px;
    }
  `, __decorateClass$6([r()], AgxShopMode["prototype"], "source", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "products", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "loading", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "search", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "status", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "statusLevel", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "progressPage", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "progressTotal", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "showHelp", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "exportProgress", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "exportTotal", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "exporting", 2), __decorateClass$6([r()], AgxShopMode["prototype"], "pickerProductId", 2), AgxShopMode = __decorateClass$6([t$1("agx-shop-mode")], AgxShopMode);
const log$4 = createLogger("YouTubeUpload"), AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth", AUTH_SCOPES = ["https://www.googleapis.com/auth/youtube.upload", "https://www.googleapis.com/auth/userinfo.email", "openid"], RESUMABLE_INIT_URL = "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status", USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo", CLIENT_ID_KEY = "agx_youtube_client_id", TOKEN_KEY = "agx_youtube_token";
function getYouTubeRedirectUri() {
  try {
    return chrome["identity"]["getRedirectURL"]();
  } catch {
    return "";
  }
}
async function getYouTubeClientId() {
  try {
    const _0x31acca = await chrome["storage"]["local"]["get"]([CLIENT_ID_KEY]);
    return String(_0x31acca[CLIENT_ID_KEY] || "")["trim"]();
  } catch {
    return "";
  }
}
async function setYouTubeClientId(_0x3cd6dc) {
  const _0x2c1639 = (_0x3cd6dc || "")["trim"]();
  try {
    if (_0x2c1639) await chrome["storage"]["local"]["set"]({ [CLIENT_ID_KEY]: _0x2c1639 });
    else await chrome["storage"]["local"]["remove"]([CLIENT_ID_KEY]);
    await chrome["storage"]["local"]["remove"]([TOKEN_KEY]);
  } catch {
  }
}
async function readCachedToken() {
  try {
    const _0x3f65f8 = await chrome["storage"]["local"]["get"]([TOKEN_KEY]), _0x55138f = _0x3f65f8[TOKEN_KEY];
    if (_0x55138f && _0x55138f["token"] && typeof _0x55138f["expiresAt"] === "number" && _0x55138f["expiresAt"] > Date["now"]() + 6e4) return _0x55138f;
  } catch {
  }
  return null;
}
async function writeCachedToken(_0x448936) {
  try {
    if (_0x448936) await chrome["storage"]["local"]["set"]({ [TOKEN_KEY]: _0x448936 });
    else await chrome["storage"]["local"]["remove"]([TOKEN_KEY]);
  } catch {
  }
}
async function runWebAuthFlow(_0x5e95b8, _0x5ed798) {
  const _0x475289 = getYouTubeRedirectUri();
  if (!_0x475289) return log$4["warn"]("no redirect URI — chrome.identity unavailable"), null;
  const _0x1f87ba = AUTH_ENDPOINT + "?client_id=" + encodeURIComponent(_0x5e95b8) + "&response_type=token&redirect_uri=" + encodeURIComponent(_0x475289) + "&scope=" + encodeURIComponent(AUTH_SCOPES["join"](" ")) + "&prompt=" + (_0x5ed798 ? "consent" : "none"), _0xe70ac6 = await new Promise((_0x4842d3) => {
    try {
      chrome["identity"]["launchWebAuthFlow"]({ "url": _0x1f87ba, "interactive": _0x5ed798 }, (_0x556cab) => {
        var _a2;
        if (chrome["runtime"]["lastError"] || !_0x556cab) {
          if (_0x5ed798) log$4["warn"]("launchWebAuthFlow: " + (((_a2 = chrome["runtime"]["lastError"]) == null ? void 0 : _a2["message"]) || "no response"));
          _0x4842d3(null);
          return;
        }
        _0x4842d3(_0x556cab);
      });
    } catch (_0x5c63da) {
      log$4["warn"]("launchWebAuthFlow threw", _0x5c63da), _0x4842d3(null);
    }
  });
  if (!_0xe70ac6) return null;
  const _0xf2f991 = _0xe70ac6["includes"]("#") ? _0xe70ac6["slice"](_0xe70ac6["indexOf"]("#") + 1) : "", _0x53dfe5 = _0xe70ac6["includes"]("?") ? _0xe70ac6["slice"](_0xe70ac6["indexOf"]("?") + 1)["split"]("#")[0] : "", _0x3f6865 = new URLSearchParams(_0xf2f991 || _0x53dfe5), _0x323ec5 = _0x3f6865["get"]("access_token");
  if (!_0x323ec5) {
    const _0x368efa = _0x3f6865["get"]("error") || new URLSearchParams(_0x53dfe5)["get"]("error");
    if (_0x5ed798) log$4["warn"]("no access_token in redirect (" + (_0x368efa || "unknown") + ")");
    return null;
  }
  const _0x1680b1 = Number(_0x3f6865["get"]("expires_in") || "3600"), _0x55d37d = { "token": _0x323ec5, "expiresAt": Date["now"]() + Math["max"](60, _0x1680b1 - 60) * 1e3 };
  try {
    const _0x20115d = await fetch(USERINFO_URL, { "headers": { "Authorization": "Bearer " + _0x323ec5 } });
    if (_0x20115d["ok"]) _0x55d37d["email"] = (await _0x20115d["json"]())["email"] || void 0;
  } catch {
  }
  return await writeCachedToken(_0x55d37d), _0x323ec5;
}
async function getYouTubeToken(_0x47a7f0) {
  const _0x4391f3 = await readCachedToken();
  if (_0x4391f3) return _0x4391f3["token"];
  const _0x5c397f = await getYouTubeClientId();
  if (!_0x5c397f) {
    if (_0x47a7f0) log$4["warn"]("no OAuth client_id configured");
    return null;
  }
  return runWebAuthFlow(_0x5c397f, _0x47a7f0);
}
async function clearYouTubeToken(_0x30c826) {
  await writeCachedToken(null);
}
async function getConnectedAccountEmail() {
  const _0x31e9a4 = await readCachedToken();
  if (_0x31e9a4 == null ? void 0 : _0x31e9a4["email"]) return _0x31e9a4["email"];
  const _0x1553d2 = (_0x31e9a4 == null ? void 0 : _0x31e9a4["token"]) || await getYouTubeToken(![]);
  if (!_0x1553d2) return null;
  try {
    const _0x5617a6 = await fetch(USERINFO_URL, { "headers": { "Authorization": "Bearer " + _0x1553d2 } });
    if (!_0x5617a6["ok"]) return null;
    const _0x42a281 = await _0x5617a6["json"]();
    return _0x42a281["email"] || null;
  } catch {
    return null;
  }
}
function readableYouTubeError(_0x2e6594, _0x3eb02d) {
  var _a2, _b, _c, _d;
  let _0x2e1504 = _0x3eb02d;
  try {
    const _0x195124 = JSON["parse"](_0x3eb02d);
    _0x2e1504 = ((_a2 = _0x195124["error"]) == null ? void 0 : _a2["message"]) || _0x3eb02d;
    const _0x3daea5 = (_d = (_c = (_b = _0x195124["error"]) == null ? void 0 : _b["errors"]) == null ? void 0 : _c[0]) == null ? void 0 : _d["reason"];
    if (_0x3daea5 === "quotaExceeded" || _0x3daea5 === "dailyLimitExceeded") return "YouTube API quota เต็มสำหรับวันนี้ — ลองใหม่พรุ่งนี้ หรือขอเพิ่ม quota";
    if (_0x3daea5 === "youtubeSignupRequired") return "บัญชี Google นี้ยังไม่มี YouTube channel — สร้าง channel ก่อน";
    if (_0x3daea5 === "forbidden" || _0x2e6594 === 403) return "YouTube ปฏิเสธ (403): " + _0x2e1504 + " — เช็ค scope/สิทธิ์/quota";
  } catch {
  }
  if (_0x2e6594 === 401) return "token หมดอายุหรือไม่ถูกต้อง — เชื่อมบัญชีใหม่";
  return "YouTube upload ล้มเหลว (HTTP " + _0x2e6594 + "): " + _0x2e1504["slice"](0, 200);
}
async function getTokenOrThrow() {
  let _0x54f9d1 = await getYouTubeToken(![]);
  if (!_0x54f9d1) _0x54f9d1 = await getYouTubeToken(!![]);
  if (!_0x54f9d1) {
    const _0x32004a = !!await getYouTubeClientId();
    throw new Error(_0x32004a ? "ยังไม่ได้เชื่อมบัญชี YouTube (OAuth ไม่สำเร็จ)" : 'ยังไม่ได้ตั้งค่า OAuth Client ID — ไปที่ "ตั้งค่า OAuth Client ID" ก่อน');
  }
  return _0x54f9d1;
}
function putWithProgress(_0x427da8, _0xc53ac7, _0x32dc82) {
  return new Promise((_0x3b7d04, _0x4c3f15) => {
    const _0x5f06aa = new XMLHttpRequest();
    _0x5f06aa["open"]("PUT", _0x427da8, !![]), _0x5f06aa["setRequestHeader"]("Content-Type", _0xc53ac7["type"] || "video/mp4"), _0x5f06aa["upload"]["onprogress"] = (_0x1499cb) => {
      if (_0x1499cb["lengthComputable"] && _0x32dc82) _0x32dc82(Math["round"](_0x1499cb["loaded"] / _0x1499cb["total"] * 100));
    }, _0x5f06aa["onload"] = () => _0x3b7d04({ "status": _0x5f06aa["status"], "body": _0x5f06aa["responseText"] || "" }), _0x5f06aa["onerror"] = () => _0x4c3f15(new Error("network error during upload PUT")), _0x5f06aa["ontimeout"] = () => _0x4c3f15(new Error("upload PUT timed out")), _0x5f06aa["timeout"] = 10 * 60 * 1e3, _0x5f06aa["send"](_0xc53ac7);
  });
}
async function uploadShort(_0x516b4a, _0x9bcfb8) {
  if (!_0x516b4a || _0x516b4a["size"] === 0) throw new Error("ไฟล์วิดีโอว่างเปล่า");
  const _0x49f7fd = { "privacyStatus": _0x9bcfb8["publishAt"] ? "private" : _0x9bcfb8["privacyStatus"], "selfDeclaredMadeForKids": ![] };
  if (_0x9bcfb8["publishAt"]) _0x49f7fd["publishAt"] = _0x9bcfb8["publishAt"];
  const _0x11a12a = { "snippet": { "title": _0x9bcfb8["title"]["slice"](0, 100), "description": _0x9bcfb8["description"]["slice"](0, 5e3), "tags": (_0x9bcfb8["tags"] || [])["filter"](Boolean)["slice"](0, 30), "categoryId": _0x9bcfb8["categoryId"] || "22" }, "status": _0x49f7fd }, _0x5cd048 = async (_0x46f0c1) => {
    const _0x38f652 = await fetch(RESUMABLE_INIT_URL, { "method": "POST", "headers": { "Authorization": "Bearer " + _0x46f0c1, "Content-Type": "application/json; charset=UTF-8", "X-Upload-Content-Type": _0x516b4a["type"] || "video/mp4", "X-Upload-Content-Length": String(_0x516b4a["size"]) }, "body": JSON["stringify"](_0x11a12a) });
    if (!_0x38f652["ok"]) {
      const _0x1fc29a = await _0x38f652["text"]()["catch"](() => "");
      return { "status": _0x38f652["status"], "body": _0x1fc29a };
    }
    const _0xbed259 = _0x38f652["headers"]["get"]("Location") || _0x38f652["headers"]["get"]("location");
    if (!_0xbed259) return { "status": _0x38f652["status"], "body": "no Location header from resumable-init" };
    const _0x57fc4b = await putWithProgress(_0xbed259, _0x516b4a, _0x9bcfb8["onProgress"]);
    if (_0x57fc4b["status"] < 200 || _0x57fc4b["status"] >= 300) return { "status": _0x57fc4b["status"], "body": _0x57fc4b["body"] };
    let _0x56e194;
    try {
      _0x56e194 = JSON["parse"](_0x57fc4b["body"])["id"];
    } catch {
    }
    return { "status": _0x57fc4b["status"], "body": _0x57fc4b["body"], "videoId": _0x56e194 };
  };
  let _0x4005d3 = await getTokenOrThrow(), _0x554993 = await _0x5cd048(_0x4005d3);
  if (_0x554993["status"] === 401) {
    log$4["info"]("401 — refreshing token and retrying once"), await clearYouTubeToken(), _0x4005d3 = await getYouTubeToken(!![]) || "";
    if (!_0x4005d3) throw new Error("token หมดอายุ — เชื่อมบัญชีใหม่แล้วลองอีกครั้ง");
    _0x554993 = await _0x5cd048(_0x4005d3);
  }
  if (_0x554993["status"] < 200 || _0x554993["status"] >= 300) throw new Error(readableYouTubeError(_0x554993["status"], _0x554993["body"]));
  if (!_0x554993["videoId"]) throw new Error("อัปโหลดสำเร็จแต่ไม่ได้รับ video id กลับมา (ลองเช็คใน YouTube Studio)");
  return { "videoId": _0x554993["videoId"] };
}
var __defProp$5 = Object["defineProperty"], __getOwnPropDesc$5 = Object["getOwnPropertyDescriptor"], __decorateClass$5 = (_0x326463, _0x16e564, _0x2cd659, _0x321c62) => {
  var _0x10f82c = _0x321c62 > 1 ? void 0 : _0x321c62 ? __getOwnPropDesc$5(_0x16e564, _0x2cd659) : _0x16e564;
  for (var _0x2799f4 = _0x326463["length"] - 1, _0x48d87a; _0x2799f4 >= 0; _0x2799f4--) if (_0x48d87a = _0x326463[_0x2799f4]) _0x10f82c = (_0x321c62 ? _0x48d87a(_0x16e564, _0x2cd659, _0x10f82c) : _0x48d87a(_0x10f82c)) || _0x10f82c;
  if (_0x321c62 && _0x10f82c) __defProp$5(_0x16e564, _0x2cd659, _0x10f82c);
  return _0x10f82c;
};
const STORAGE_KEY$3 = "agx_youtube_batch", DISCLOSURE$1 = "หมายเหตุ: ลิงก์ในคำอธิบายเป็นลิงก์พันธมิตร (affiliate) — ทางช่องอาจได้รับค่าตอบแทนจากการสั่งซื้อ";
function newId$3(_0x311e10) {
  return _0x311e10 + "_" + Date["now"]() + "_" + Math["random"]()["toString"](36)["slice"](2, 8);
}
function toLocalYMD$2(_0x408a7f) {
  return _0x408a7f["getFullYear"]() + "-" + String(_0x408a7f["getMonth"]() + 1)["padStart"](2, "0") + "-" + String(_0x408a7f["getDate"]())["padStart"](2, "0");
}
function sleep$1(_0x25b6da) {
  return new Promise((_0x47b88b) => setTimeout(_0x47b88b, _0x25b6da));
}
let AgxYouTubeBatch = class extends i {
  constructor() {
    super(...arguments), this["groups"] = [], this["expandedId"] = null, this["uploadOrder"] = "linear", this["privacy"] = "private", this["scheduleEnabled"] = ![], this["scheduleDate"] = toLocalYMD$2(/* @__PURE__ */ new Date()), this["scheduleHour"] = String((/* @__PURE__ */ new Date())["getHours"]())["padStart"](2, "0"), this["scheduleMinute"] = "00", this["scheduleInterval"] = 30, this["setDelayTime"] = 5, this["running"] = ![], this["accountEmail"] = null, this["connecting"] = ![], this["curIdx"] = 0, this["curPct"] = 0, this["logEntries"] = [], this["clientId"] = "", this["clientIdInput"] = "", this["showSetup"] = ![], this["copied"] = ![], this["_fileMap"] = /* @__PURE__ */ new Map();
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), void this["_restore"](), void this["_loadClientId"](), void this["_refreshAccount"]();
  }
  async ["_loadClientId"]() {
    this["clientId"] = await getYouTubeClientId(), this["clientIdInput"] = this["clientId"];
    if (!this["clientId"]) this["showSetup"] = !![];
  }
  async ["_saveClientId"]() {
    const _0x32255d = this["clientIdInput"]["trim"]();
    await setYouTubeClientId(_0x32255d), this["clientId"] = await getYouTubeClientId(), this["accountEmail"] = null, this["_addLog"](_0x32255d ? "success" : "info", _0x32255d ? '✓ บันทึก OAuth Client ID แล้ว — กด "เชื่อมบัญชี YouTube" ได้เลย' : "ลบ OAuth Client ID แล้ว");
  }
  async ["_copyRedirectUri"]() {
    try {
      await navigator["clipboard"]["writeText"](getYouTubeRedirectUri()), this["copied"] = !![], setTimeout(() => {
        this["copied"] = ![];
      }, 1500);
    } catch {
    }
  }
  async ["_restore"]() {
    try {
      const _0x3916e8 = await chrome["storage"]["local"]["get"]([STORAGE_KEY$3]), _0x981244 = _0x3916e8[STORAGE_KEY$3];
      _0x981244 && (this["groups"] = (_0x981244["groups"] ?? [])["map"]((_0x48f681) => ({ ..._0x48f681, "clips": [] })), this["uploadOrder"] = _0x981244["uploadOrder"] === "roundrobin" ? "roundrobin" : "linear", this["privacy"] = _0x981244["privacy"] === "public" || _0x981244["privacy"] === "unlisted" ? _0x981244["privacy"] : "private", this["scheduleEnabled"] = !!_0x981244["scheduleEnabled"], this["scheduleDate"] = _0x981244["scheduleDate"] ?? this["scheduleDate"], this["scheduleHour"] = _0x981244["scheduleHour"] ?? this["scheduleHour"], this["scheduleMinute"] = _0x981244["scheduleMinute"] ?? this["scheduleMinute"], this["scheduleInterval"] = Number(_0x981244["scheduleInterval"]) || 30, this["setDelayTime"] = Number(_0x981244["setDelayTime"]) || 5);
    } catch {
    }
  }
  ["_persist"]() {
    chrome["storage"]["local"]["set"]({ [STORAGE_KEY$3]: { "groups": this["groups"]["map"]((_0x56c47c) => ({ ..._0x56c47c, "clips": [] })), "uploadOrder": this["uploadOrder"], "privacy": this["privacy"], "scheduleEnabled": this["scheduleEnabled"], "scheduleDate": this["scheduleDate"], "scheduleHour": this["scheduleHour"], "scheduleMinute": this["scheduleMinute"], "scheduleInterval": this["scheduleInterval"], "setDelayTime": this["setDelayTime"] } })["catch"](() => {
    });
  }
  async ["_refreshAccount"]() {
    this["accountEmail"] = await getConnectedAccountEmail();
  }
  ["_addLog"](_0x55ed3c, _0x3d4e6f) {
    this["logEntries"] = [...this["logEntries"], { "level": _0x55ed3c, "message": _0x3d4e6f, "timestamp": Date["now"]() }];
  }
  async ["_connect"]() {
    if (!this["clientId"]) {
      this["showSetup"] = !![], this["_addLog"]("warn", '⚠ ต้องตั้งค่า OAuth Client ID ก่อน (ดูหัวข้อ "ตั้งค่า OAuth Client ID")');
      return;
    }
    this["connecting"] = !![];
    try {
      const _0xaab692 = await getYouTubeToken(!![]);
      if (!_0xaab692) {
        this["_addLog"]("error", "❌ เชื่อมบัญชี YouTube ไม่สำเร็จ — OAuth ถูกยกเลิก หรือ Client ID / Redirect URI ใน Google Cloud ไม่ตรง");
        return;
      }
      await this["_refreshAccount"](), this["_addLog"]("success", "✓ เชื่อมบัญชีแล้ว" + (this["accountEmail"] ? ": " + this["accountEmail"] : ""));
    } finally {
      this["connecting"] = ![];
    }
  }
  async ["_disconnect"]() {
    await clearYouTubeToken(), this["accountEmail"] = null, this["_addLog"]("info", "ตัดการเชื่อมบัญชีแล้ว");
  }
  ["_importJson"]() {
    const _0x5b1a69 = document["createElement"]("input");
    _0x5b1a69["type"] = "file", _0x5b1a69["accept"] = "application/json,.json", _0x5b1a69["onchange"] = async (_0x5dcb2b) => {
      var _a2;
      const _0x1bf4d9 = (_a2 = _0x5dcb2b["target"]["files"]) == null ? void 0 : _a2[0];
      if (!_0x1bf4d9) return;
      try {
        const _0x3ec993 = unwrapImport(JSON["parse"](await _0x1bf4d9["text"]()));
        this["_mergeProducts"](_0x3ec993), this["_addLog"]("success", "📂 นำเข้า " + _0x3ec993["length"] + " สินค้าจาก JSON");
      } catch (_0x7a81d9) {
        this["_addLog"]("error", "อ่าน JSON ไม่สำเร็จ: " + _0x7a81d9);
      }
    }, _0x5b1a69["click"]();
  }
  async ["_importFromAuto"]() {
    try {
      const _0x4184fa = await chrome["storage"]["local"]["get"](["agx_auto_products"]), _0x55becb = _0x4184fa["agx_auto_products"];
      if (!Array["isArray"](_0x55becb) || _0x55becb["length"] === 0) {
        this["_addLog"]("warn", "ไม่พบสินค้าใน Auto mode");
        return;
      }
      this["_mergeProducts"](_0x55becb), this["_addLog"]("success", "🛍 นำเข้า " + _0x55becb["length"] + " สินค้าจาก Auto mode");
    } catch (_0x5bb9bf) {
      this["_addLog"]("error", "อ่านสินค้า Auto ไม่สำเร็จ: " + _0x5bb9bf);
    }
  }
  ["_mergeProducts"](_0x754e7a) {
    const _0x24465e = new Set(this["groups"]["map"]((_0x5f581f) => _0x5f581f["productId"])["filter"](Boolean)), _0x87c4b6 = [];
    for (const _0x3b2cfb of _0x754e7a) {
      const _0x21421b = _0x3b2cfb, _0x2f7594 = String(_0x21421b["productId"] || _0x21421b["product_id"] || _0x21421b["basketName"] || "")["trim"]() || void 0, _0x37a031 = String(_0x21421b["name"] || _0x21421b["title"] || _0x21421b["productName"] || "")["trim"]() || "(ไม่มีชื่อ)";
      if (_0x2f7594 && _0x24465e["has"](_0x2f7594)) continue;
      const _0x1d77f1 = (() => {
        const _0x2db6c6 = _0x21421b["productImages"];
        if (Array["isArray"](_0x2db6c6) && _0x2db6c6[0]) return String(_0x2db6c6[0])["trim"]() || void 0;
        return String(_0x21421b["imageUrl"] || _0x21421b["cover"] || "")["trim"]() || void 0;
      })();
      _0x87c4b6["push"]({ "id": newId$3("grp"), "productId": _0x2f7594, "productName": _0x37a031, "imageUrl": _0x1d77f1, "caption": String(_0x21421b["caption"] || "") || void 0, "defaultHashtags": typeof _0x21421b["hashtags"] === "string" ? _0x21421b["hashtags"] : void 0, "affiliateLink": typeof _0x21421b["affiliateLink"] === "string" ? _0x21421b["affiliateLink"] : "", "clips": [] });
      if (_0x2f7594) _0x24465e["add"](_0x2f7594);
    }
    this["groups"] = [...this["groups"], ..._0x87c4b6];
    if (_0x87c4b6["length"] > 0 && this["expandedId"] === null) this["expandedId"] = _0x87c4b6[0]["id"];
    this["_persist"]();
  }
  ["_addProduct"]() {
    const _0x183caf = newId$3("grp");
    this["groups"] = [...this["groups"], { "id": _0x183caf, "productName": "สินค้าใหม่", "affiliateLink": "", "clips": [] }], this["expandedId"] = _0x183caf, this["_persist"]();
  }
  ["_removeProduct"](_0x37d37d) {
    const _0x17637d = this["groups"]["find"]((_0x27e98e) => _0x27e98e["id"] === _0x37d37d);
    if (!_0x17637d) return;
    if (_0x17637d["clips"]["length"] > 0 && !confirm('ลบสินค้า "' + _0x17637d["productName"] + '" และคลิป ' + _0x17637d["clips"]["length"] + " คลิป?")) return;
    for (const _0xe4dfbc of _0x17637d["clips"]) this["_fileMap"]["delete"](_0xe4dfbc["id"]);
    this["groups"] = this["groups"]["filter"]((_0x1f448e) => _0x1f448e["id"] !== _0x37d37d);
    if (this["expandedId"] === _0x37d37d) this["expandedId"] = null;
    this["_persist"]();
  }
  ["_clearAll"]() {
    if (this["groups"]["length"] === 0 || !confirm("ลบสินค้าทั้งหมด " + this["groups"]["length"] + " รายการ?")) return;
    this["_fileMap"]["clear"](), this["groups"] = [], this["expandedId"] = null, this["_persist"]();
  }
  ["_updateProduct"](_0xcbb342, _0x5a8366) {
    this["groups"] = this["groups"]["map"]((_0x186429) => _0x186429["id"] === _0xcbb342 ? { ..._0x186429, ..._0x5a8366 } : _0x186429), this["_persist"]();
  }
  ["_toggle"](_0x44212d) {
    this["expandedId"] = this["expandedId"] === _0x44212d ? null : _0x44212d;
  }
  ["_pickClips"](_0x4a8529, _0x4a728f) {
    const _0x190fc8 = _0x4a728f["target"], _0x24fb89 = _0x190fc8["files"];
    if (!_0x24fb89 || _0x24fb89["length"] === 0) return;
    const _0x3e0e9c = [];
    for (const _0x4d4699 of Array["from"](_0x24fb89)) {
      const _0x5cce4a = newId$3("clip");
      this["_fileMap"]["set"](_0x5cce4a, _0x4d4699), _0x3e0e9c["push"]({ "id": _0x5cce4a, "videoName": _0x4d4699["name"], "videoSize": _0x4d4699["size"] });
    }
    const _0x68ddcc = this["groups"]["find"]((_0x290d6f) => _0x290d6f["id"] === _0x4a8529);
    if (_0x68ddcc) this["_updateProduct"](_0x4a8529, { "clips": [..._0x68ddcc["clips"], ..._0x3e0e9c] });
    _0x190fc8["value"] = "";
  }
  ["_removeClip"](_0x141762, _0xf84bb0) {
    const _0x18cb51 = this["groups"]["find"]((_0x19d599) => _0x19d599["id"] === _0x141762);
    if (!_0x18cb51) return;
    this["_fileMap"]["delete"](_0xf84bb0), this["_updateProduct"](_0x141762, { "clips": _0x18cb51["clips"]["filter"]((_0x5e2020) => _0x5e2020["id"] !== _0xf84bb0) });
  }
  ["_ordered"]() {
    const _0x559b3a = this["groups"]["map"]((_0x590d55) => ({ "g": _0x590d55, "cs": _0x590d55["clips"]["filter"]((_0x39a44c) => this["_fileMap"]["has"](_0x39a44c["id"])) }))["filter"]((_0x503dfc) => _0x503dfc["cs"]["length"] > 0), _0x2b71c7 = [];
    if (this["uploadOrder"] === "linear") {
      for (const { g: _0x1e5102, cs: _0x2c2814 } of _0x559b3a) for (const _0x2f8b5f of _0x2c2814) _0x2b71c7["push"]({ "g": _0x1e5102, "c": _0x2f8b5f });
      return _0x2b71c7;
    }
    const _0x3d2797 = _0x559b3a["reduce"]((_0x3b043e, _0x3170e1) => Math["max"](_0x3b043e, _0x3170e1["cs"]["length"]), 0);
    for (let _0x52f012 = 0; _0x52f012 < _0x3d2797; _0x52f012++) for (const { g: _0x30d740, cs: _0x440769 } of _0x559b3a) if (_0x52f012 < _0x440769["length"]) _0x2b71c7["push"]({ "g": _0x30d740, "c": _0x440769[_0x52f012] });
    return _0x2b71c7;
  }
  ["_readyCount"]() {
    let _0x1641d0 = 0;
    for (const _0x5dca70 of this["groups"]) for (const _0x11db02 of _0x5dca70["clips"]) if (this["_fileMap"]["has"](_0x11db02["id"])) _0x1641d0++;
    return _0x1641d0;
  }
  ["_publishAtForIndex"](_0xa9d0c2) {
    if (!this["scheduleEnabled"]) return void 0;
    const _0x56471f = new Date(this["scheduleDate"]);
    return _0x56471f["setHours"](Number(this["scheduleHour"] || "09"), Number(this["scheduleMinute"] || "00"), 0, 0), new Date(_0x56471f["getTime"]() + _0xa9d0c2 * (Number(this["scheduleInterval"]) || 30) * 6e4)["toISOString"]();
  }
  ["_stop"]() {
    this["running"] = ![], this["_addLog"]("warn", "🛑 หยุด — จะหยุดหลังคลิปปัจจุบันเสร็จ");
  }
  async ["_start"]() {
    if (this["running"]) return;
    if (!this["accountEmail"]) {
      this["_addLog"]("warn", "⚠ ต้องเชื่อมบัญชี YouTube ก่อน");
      return;
    }
    const _0x3f75a3 = this["_ordered"]();
    if (_0x3f75a3["length"] === 0) {
      this["_addLog"]("warn", "ยังไม่มีคลิปที่พร้อมโพส (เลือกไฟล์วิดีโอในแต่ละสินค้า)");
      return;
    }
    this["_persist"](), this["running"] = !![], this["logEntries"] = [], this["curIdx"] = 0, this["curPct"] = 0, this["_addLog"]("info", "▶ เริ่มโพส " + _0x3f75a3["length"] + " คลิปขึ้น YouTube (" + (this["uploadOrder"] === "linear" ? "ตามลำดับ" : "วนตามสินค้า") + ")" + (this["scheduleEnabled"] ? " · ตั้งเวลาเริ่ม " + this["scheduleDate"] + " " + this["scheduleHour"] + ":" + this["scheduleMinute"] + " ห่างกัน " + this["scheduleInterval"] + " นาที" : " · privacy=" + this["privacy"]));
    let _0x23c684 = 0, _0x47e8e9 = 0;
    for (let _0x1308a5 = 0; _0x1308a5 < _0x3f75a3["length"]; _0x1308a5++) {
      if (!this["running"]) {
        this["_addLog"]("warn", "หยุดที่คลิป " + (_0x1308a5 + 1) + "/" + _0x3f75a3["length"]);
        break;
      }
      const { g: _0x226082, c: _0x3c93fa } = _0x3f75a3[_0x1308a5], _0x531f32 = this["_fileMap"]["get"](_0x3c93fa["id"]);
      this["curIdx"] = _0x1308a5, this["curPct"] = 0;
      if (!_0x531f32) {
        this["_addLog"]("error", "[" + (_0x1308a5 + 1) + "/" + _0x3f75a3["length"] + '] "' + _0x226082["productName"] + '" → ไฟล์หาย'), _0x47e8e9++;
        continue;
      }
      const _0x490c07 = (_0x226082["productName"] || "คลิป")["trim"]() + " #Shorts", _0x27c832 = (_0x3c93fa["caption"] || _0x226082["caption"] || "")["trim"](), _0x33148c = (_0x3c93fa["hashtags"] || _0x226082["defaultHashtags"] || "")["trim"](), _0x5ceaae = [(_0x226082["affiliateLink"] || "")["trim"](), _0x27c832, _0x33148c, DISCLOSURE$1]["filter"](Boolean)["join"]("\n\n"), _0x924472 = this["_publishAtForIndex"](_0x1308a5), _0x59a905 = _0x33148c["split"](/[\s,]+/)["map"]((_0x173c56) => _0x173c56["replace"](/^#+/, ""))["filter"](Boolean);
      this["_addLog"]("info", "📤 [" + (_0x1308a5 + 1) + "/" + _0x3f75a3["length"] + '] "' + _0x226082["productName"] + '" → ' + _0x3c93fa["videoName"] + " (" + (_0x3c93fa["videoSize"] / 1024 / 1024)["toFixed"](1) + " MB)" + (_0x924472 ? " · เผยแพร่ " + new Date(_0x924472)["toLocaleString"]("th-TH") : "") + "...");
      try {
        const { videoId: _0x208f9a } = await uploadShort(_0x531f32, { "title": _0x490c07, "description": _0x5ceaae, "privacyStatus": this["privacy"], "publishAt": _0x924472, "tags": _0x59a905, "onProgress": (_0x18392a) => {
          this["curPct"] = _0x18392a;
        } });
        this["curPct"] = 100, this["_addLog"]("success", "✓ [" + (_0x1308a5 + 1) + "/" + _0x3f75a3["length"] + "] โพสต์สำเร็จ — https://www.youtube.com/watch?v=" + _0x208f9a), _0x23c684++;
      } catch (_0x1fc8ea) {
        this["_addLog"]("error", "❌ [" + (_0x1308a5 + 1) + "/" + _0x3f75a3["length"] + "] " + (_0x1fc8ea instanceof Error ? _0x1fc8ea["message"] : String(_0x1fc8ea))), _0x47e8e9++;
      }
      if (_0x1308a5 < _0x3f75a3["length"] - 1 && this["running"]) await sleep$1(Math["max"](1, this["setDelayTime"]) * 1e3);
    }
    this["running"] = ![], this["_addLog"](_0x47e8e9 === 0 ? "success" : "warn", "เสร็จสิ้น — สำเร็จ " + _0x23c684 + ", ล้มเหลว " + _0x47e8e9);
  }
  ["render"]() {
    const _0x4e8c95 = this["_readyCount"](), _0x247f01 = getYouTubeRedirectUri();
    return b`
      <div class="setup-toggle" @click=${() => {
      this["showSetup"] = !this["showSetup"];
    }}>
        ${this["showSetup"] ? "▼" : "▶"} 🔧 ตั้งค่า OAuth Client ID ${this["clientId"] ? b`<span class="ok-text">(ตั้งค่าแล้ว ✓)</span>` : b`<span style="color:#f0a">(ยังไม่ได้ตั้งค่า — จำเป็นต้องตั้งก่อนใช้งาน)</span>`}
      </div>
      ${this["showSetup"] ? b`
        <div class="setup-box">
          ใส่ OAuth Client ID ของ Google Cloud project ของคุณเอง (ครั้งเดียว) — extension จะใช้บัญชี YouTube ผ่าน project นี้:
          <ol>
            <li>ไปที่ <code>console.cloud.google.com</code> → สร้าง project → เปิดใช้ "YouTube Data API v3"</li>
            <li>"OAuth consent screen" → User type = External → เพิ่ม scope <code>.../auth/youtube.upload</code> → เพิ่มอีเมลตัวเองเป็น "Test user"</li>
            <li>"Credentials" → Create credentials → OAuth client ID → Application type = <strong>เว็บแอปพลิเคชัน (Web application)</strong></li>
            <li>ในช่อง "Authorized redirect URIs" ใส่ URI นี้ (กดคัดลอก):
              <div class="uri-box">
                <span class="uri">${_0x247f01 || "(ไม่พบ — ต้องเปิดในหน้า extension)"}</span>
                <button class="small-btn" @click=${this["_copyRedirectUri"]}>${this["copied"] ? "✓ คัดลอกแล้ว" : "คัดลอก"}</button>
              </div>
            </li>
            <li>กด Create → คัดลอก "Client ID" (ลงท้าย <code>.apps.googleusercontent.com</code>) มาวางด้านล่าง</li>
          </ol>
          <div class="row"><agx-input label="OAuth Client ID" placeholder="xxxx.apps.googleusercontent.com" .value=${this["clientIdInput"]} @input=${(_0x31397a) => {
      this["clientIdInput"] = _0x31397a["detail"]["value"];
    }}></agx-input></div>
          <div style="display:flex;gap:6px;margin-top:4px">
            <button class="small-btn" @click=${this["_saveClientId"]}>💾 บันทึก Client ID</button>
            ${this["clientId"] ? b`<button class="small-btn danger" @click=${() => {
      this["clientIdInput"] = "", void this["_saveClientId"]();
    }}>ลบ</button>` : ""}
          </div>
        </div>
      ` : ""}

      <div class="acct ${this["accountEmail"] ? "ok" : ""}">
        <span>${this["accountEmail"] ? "🔗 เชื่อมบัญชีแล้ว: " + this["accountEmail"] : this["clientId"] ? "🔒 ยังไม่ได้เชื่อมบัญชี YouTube" : "⚙️ ตั้งค่า OAuth Client ID ก่อน (ด้านบน)"}</span>
        ${this["accountEmail"] ? b`<button class="small-btn danger" @click=${this["_disconnect"]}>ตัดการเชื่อม</button>` : b`<button class="small-btn" ?disabled=${this["connecting"] || !this["clientId"]} @click=${this["_connect"]}>${this["connecting"] ? "กำลังเชื่อม..." : "🔑 เชื่อมบัญชี YouTube"}</button>`}
      </div>

      <div class="toolbar">
        <button class="tb-btn" @click=${this["_importJson"]}>📂 อ่าน JSON</button>
        <button class="tb-btn" @click=${this["_importFromAuto"]}>🛍 จาก Auto mode</button>
        <button class="tb-btn" @click=${this["_addProduct"]}>+ เพิ่มสินค้า</button>
        ${this["groups"]["length"] > 0 ? b`<button class="tb-btn danger" @click=${this["_clearAll"]}>🗑 ล้างทั้งหมด</button>` : ""}
      </div>

      ${this["groups"]["length"] === 0 ? b`<div class="hint" style="margin-bottom:10px">ยังไม่มีสินค้า — กด "🛍 จาก Auto mode" หรือ "📂 อ่าน JSON" หรือ "+ เพิ่มสินค้า"</div>` : ""}

      ${this["groups"]["map"]((_0xf6ab90) => b`
        <div class="pcard">
          <div class="pcard-head" @click=${() => this["_toggle"](_0xf6ab90["id"])}>
            <span>${this["expandedId"] === _0xf6ab90["id"] ? "▼" : "▶"}</span>
            <span class="name">${_0xf6ab90["productName"] || "(ไม่มีชื่อ)"}</span>
            <span class="count">${_0xf6ab90["clips"]["filter"]((_0x4f9d9f) => this["_fileMap"]["has"](_0x4f9d9f["id"]))["length"]}/${_0xf6ab90["clips"]["length"]} คลิปพร้อม</span>
            <span class="x small-btn danger" @click=${(_0x490ca8) => {
      _0x490ca8["stopPropagation"](), this["_removeProduct"](_0xf6ab90["id"]);
    }}>ลบ</span>
          </div>
          ${this["expandedId"] === _0xf6ab90["id"] ? b`
            <div class="pcard-body">
              <div class="row"><agx-input label="🎬 ชื่อสินค้า (= ชื่อคลิป, เติม #Shorts)" .value=${_0xf6ab90["productName"]} @input=${(_0x235379) => this["_updateProduct"](_0xf6ab90["id"], { "productName": _0x235379["detail"]["value"] })}></agx-input></div>
              <div class="row"><agx-input label="🔗 ลิงก์ affiliate (ใส่บนสุดของคำอธิบาย)" .value=${_0xf6ab90["affiliateLink"] || ""} @input=${(_0x1c8836) => this["_updateProduct"](_0xf6ab90["id"], { "affiliateLink": _0x1c8836["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">📝 คำอธิบาย (caption — ใช้กับทุกคลิปของสินค้านี้)</div>
                <textarea rows="2" .value=${_0xf6ab90["caption"] || ""} @input=${(_0x4674be) => this["_updateProduct"](_0xf6ab90["id"], { "caption": _0x4674be["target"]["value"] })}></textarea>
              </div>
              <div class="row"><agx-input label="#️⃣ แฮชแท็ก (คั่นด้วยช่องว่าง)" .value=${_0xf6ab90["defaultHashtags"] || ""} @input=${(_0x2da730) => this["_updateProduct"](_0xf6ab90["id"], { "defaultHashtags": _0x2da730["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">🎞 คลิปวิดีโอ (.mp4 แนวตั้ง — เลือกได้หลายไฟล์)</div>
                <input type="file" accept="video/*" multiple @change=${(_0x30f246) => this["_pickClips"](_0xf6ab90["id"], _0x30f246)} />
                ${_0xf6ab90["clips"]["map"]((_0x23de37) => b`<div class="clip">${this["_fileMap"]["has"](_0x23de37["id"]) ? "✅" : "⚠️"} ${_0x23de37["videoName"]} (${(_0x23de37["videoSize"] / 1024 / 1024)["toFixed"](1)} MB) <span class="x" @click=${() => this["_removeClip"](_0xf6ab90["id"], _0x23de37["id"])}>✕</span></div>`)}
                <div class="hint">${_0xf6ab90["clips"]["some"]((_0x724265) => !this["_fileMap"]["has"](_0x724265["id"])) ? "⚠️ คลิปที่ ⚠️ ยังไม่มีไฟล์ (โหลดแผงใหม่ → ต้องเลือกไฟล์อีกครั้ง)" : ""}</div>
              </div>
            </div>
          ` : ""}
        </div>
      `)}

      <agx-drawer label="⚙️ ตั้งค่าการโพส YouTube" open>
        <div class="settings-grid">
          <agx-select label="ลำดับคลิป" .value=${this["uploadOrder"]} .options=${[{ "id": "linear", "label": "ตามลำดับ (สินค้า 1 จบ → สินค้า 2)" }, { "id": "roundrobin", "label": "วนตามสินค้า (P1c1, P2c1, ...)" }]} @change=${(_0x4306b6) => {
      this["uploadOrder"] = _0x4306b6["detail"]["value"] === "roundrobin" ? "roundrobin" : "linear", this["_persist"]();
    }}></agx-select>
          <agx-select label="👁️ Privacy" .value=${this["privacy"]} .options=${[{ "id": "private", "label": "🔒 ส่วนตัว (แนะนำ)" }, { "id": "unlisted", "label": "🔗 ไม่แสดงในรายการ" }, { "id": "public", "label": "🌐 สาธารณะ" }]} @change=${(_0x3c7ac9) => {
      this["privacy"] = _0x3c7ac9["detail"]["value"] === "public" || _0x3c7ac9["detail"]["value"] === "unlisted" ? _0x3c7ac9["detail"]["value"] : "private", this["_persist"]();
    }}></agx-select>
        </div>
        <label style="display:flex;align-items:center;gap:6px;margin:8px 0;cursor:pointer;font-size:12px">
          <input type="checkbox" .checked=${this["scheduleEnabled"]} @change=${(_0xfafb91) => {
      this["scheduleEnabled"] = _0xfafb91["target"]["checked"], this["_persist"]();
    }} />
          ⏰ ตั้งเวลาเผยแพร่ (publishAt) — อัปแบบส่วนตัวแล้วเผยแพร่อัตโนมัติตามเวลา, ห่างกันต่อคลิป
        </label>
        ${this["scheduleEnabled"] ? b`
          <div class="settings-grid">
            <agx-input label="วันที่เริ่ม" type="date" .value=${this["scheduleDate"]} @input=${(_0x1265d8) => {
      this["scheduleDate"] = _0x1265d8["detail"]["value"], this["_persist"]();
    }}></agx-input>
            <div style="display:flex;gap:6px">
              <agx-select label="ชม." .value=${this["scheduleHour"]} .options=${Array["from"]({ "length": 24 }, (_0x1cf423, _0x11741a) => ({ "id": String(_0x11741a)["padStart"](2, "0"), "label": String(_0x11741a)["padStart"](2, "0") }))} @change=${(_0x4a206d) => {
      this["scheduleHour"] = _0x4a206d["detail"]["value"], this["_persist"]();
    }}></agx-select>
              <agx-select label="นาที" .value=${this["scheduleMinute"]} .options=${["00", "15", "30", "45"]["map"]((_0x232aa1) => ({ "id": _0x232aa1, "label": _0x232aa1 }))} @change=${(_0x5372d2) => {
      this["scheduleMinute"] = _0x5372d2["detail"]["value"], this["_persist"]();
    }}></agx-select>
            </div>
            <agx-input label="ห่างกันต่อคลิป (นาที)" type="number" .value=${String(this["scheduleInterval"])} @input=${(_0x1feb6e) => {
      this["scheduleInterval"] = Math["max"](0, Number(_0x1feb6e["detail"]["value"]) || 0), this["_persist"]();
    }}></agx-input>
            <div></div>
          </div>
        ` : ""}
        <div class="row" style="margin-top:8px"><agx-input label="หน่วงระหว่างคลิป (วินาที — กัน API rate-limit)" type="number" .value=${String(this["setDelayTime"])} @input=${(_0x39668c) => {
      this["setDelayTime"] = Math["max"](1, Number(_0x39668c["detail"]["value"]) || 1), this["_persist"]();
    }}></agx-input></div>
      </agx-drawer>

      ${this["running"] ? b`<div class="progress-wrap"><div class="progress-bar" style="width:${this["curPct"]}%"></div></div><div class="hint">คลิป ${this["curIdx"] + 1} — ${this["curPct"]}%</div>` : ""}

      <div style="margin-top:10px">
        ${this["running"] ? b`<agx-button variant="danger" size="lg" full @click=${this["_stop"]}>🛑 หยุด</agx-button>` : b`<agx-button variant="primary" size="lg" full ?disabled=${_0x4e8c95 === 0 || !this["accountEmail"]} @click=${this["_start"]}>📤 เริ่มโพส YouTube (${_0x4e8c95} คลิป)</agx-button>`}
        ${!this["accountEmail"] ? b`<div class="hint">ต้องเชื่อมบัญชี YouTube ก่อน</div>` : ""}
      </div>

      ${this["logEntries"]["length"] > 0 ? b`<div style="margin-top:10px"><agx-log .entries=${this["logEntries"]}></agx-log></div>` : ""}
    `;
  }
};
AgxYouTubeBatch["styles"] = i$3`
    :host { display: block; color: var(--agx-text, #e4e6eb); font-size: 13px; }
    .toolbar { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
    .tb-btn { padding: 6px 10px; font-size: 12px; cursor: pointer; background: rgba(74,141,255,0.1); border: 1px solid rgba(74,141,255,0.4); color: #4A8DFF; border-radius: 6px; }
    .tb-btn:hover { background: rgba(74,141,255,0.2); }
    .tb-btn.danger { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4); color: #ef4444; }
    .acct { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 6px 8px; border-radius: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px; font-size: 12px; }
    .acct.ok { border-color: rgba(74,200,120,0.4); }
    .small-btn { padding: 3px 8px; font-size: 11px; cursor: pointer; border-radius: 5px; background: rgba(74,141,255,0.12); border: 1px solid rgba(74,141,255,0.4); color: #6aa9ff; }
    .small-btn.danger { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.4); color: #ef6b6b; }
    .setup-note { font-size: 10px; color: var(--agx-text-muted, #889); background: rgba(255,200,0,0.06); border: 1px solid rgba(255,200,0,0.25); border-radius: 6px; padding: 6px 8px; margin-bottom: 10px; }
    .setup-toggle { font-size: 11px; cursor: pointer; color: #6aa9ff; user-select: none; padding: 4px 0; }
    .setup-box { border: 1px solid rgba(255,200,0,0.25); background: rgba(255,200,0,0.05); border-radius: 6px; padding: 8px 10px; margin-bottom: 10px; font-size: 11px; line-height: 1.5; }
    .setup-box ol { margin: 4px 0 6px; padding-left: 18px; }
    .setup-box ol li { margin-bottom: 2px; }
    .setup-box code { background: rgba(0,0,0,0.3); padding: 0 3px; border-radius: 3px; word-break: break-all; }
    .uri-box { display: flex; gap: 6px; align-items: center; margin: 4px 0; }
    .uri-box .uri { flex: 1; background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.12); border-radius: 5px; padding: 4px 6px; font-size: 10px; word-break: break-all; color: #cdd; }
    .ok-text { color: #6ad08c; }
    .pcard { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; background: rgba(255,255,255,0.03); }
    .pcard-head { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .pcard-head .name { font-weight: 600; flex: 1; }
    .pcard-head .count { font-size: 11px; color: var(--agx-text-muted, #889); }
    .pcard-body { margin-top: 8px; }
    .row { margin-bottom: 7px; }
    .label { font-size: 11px; color: var(--agx-text-secondary, #aab); margin-bottom: 3px; }
    .hint { font-size: 10px; color: var(--agx-text-muted, #889); margin-top: 2px; }
    .clip { display: flex; align-items: center; gap: 6px; font-size: 11px; padding: 3px 0; }
    .clip .x { cursor: pointer; color: #ef6b6b; }
    input[type="file"] { font-size: 11px; color: inherit; }
    textarea { width: 100%; box-sizing: border-box; resize: vertical; min-height: 44px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: inherit; font: inherit; padding: 5px 7px; }
    .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .progress-wrap { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; margin-top: 6px; }
    .progress-bar { height: 100%; background: linear-gradient(90deg, #4A8DFF, #a747ff); transition: width .2s; }
  `, __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "groups", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "expandedId", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "uploadOrder", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "privacy", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "scheduleEnabled", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "scheduleDate", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "scheduleHour", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "scheduleMinute", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "scheduleInterval", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "setDelayTime", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "running", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "accountEmail", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "connecting", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "curIdx", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "curPct", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "logEntries", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "clientId", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "clientIdInput", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "showSetup", 2), __decorateClass$5([r()], AgxYouTubeBatch["prototype"], "copied", 2), AgxYouTubeBatch = __decorateClass$5([t$1("agx-youtube-batch")], AgxYouTubeBatch);
const log$3 = createLogger("FacebookPost"), GRAPH = "https://graph.facebook.com/v22.0", GRAPH_VIDEO = "https://graph-video.facebook.com/v22.0", CREDS_KEY = "agx_fb_creds";
async function getFbCreds() {
  try {
    const _0x2227ca = await chrome["storage"]["local"]["get"]([CREDS_KEY]), _0x4c25cd = _0x2227ca[CREDS_KEY];
    if (_0x4c25cd && typeof _0x4c25cd["pageId"] === "string" && typeof _0x4c25cd["accessToken"] === "string" && _0x4c25cd["pageId"]["trim"]() && _0x4c25cd["accessToken"]["trim"]()) return { "pageId": _0x4c25cd["pageId"]["trim"](), "accessToken": _0x4c25cd["accessToken"]["trim"]() };
  } catch {
  }
  return null;
}
async function setFbCreds(_0x4c8a57, _0x42163c) {
  const _0x1c06a1 = (_0x4c8a57 || "")["trim"](), _0x1acbf1 = (_0x42163c || "")["trim"]();
  try {
    if (_0x1c06a1 && _0x1acbf1) await chrome["storage"]["local"]["set"]({ [CREDS_KEY]: { "pageId": _0x1c06a1, "accessToken": _0x1acbf1 } });
    else await chrome["storage"]["local"]["remove"]([CREDS_KEY]);
  } catch {
  }
}
function readableFbError(_0x168dd3, _0x20adb3) {
  let _0x872ab5;
  try {
    _0x872ab5 = JSON["parse"](_0x20adb3)["error"];
  } catch {
  }
  const _0x2d4a78 = (_0x872ab5 == null ? void 0 : _0x872ab5["message"]) || _0x20adb3["slice"](0, 200) || "unknown", _0x465b0b = _0x872ab5 == null ? void 0 : _0x872ab5["code"];
  if ((_0x872ab5 == null ? void 0 : _0x872ab5["type"]) === "OAuthException" || _0x465b0b === 190 || _0x465b0b === 102 || _0x465b0b === 463 || _0x465b0b === 467) return "Page Access Token หมดอายุหรือไม่ถูกต้อง — ขอ token ใหม่จาก Graph API Explorer แล้วกรอกใหม่ (" + _0x2d4a78 + ")";
  if (_0x465b0b === 200 || _0x465b0b === 10 || _0x465b0b === 3) return 'token นี้ไม่มีสิทธิ์โพสต์ — ต้องมี permission "pages_manage_posts" (และ "publish_video" ถ้าโพสต์วิดีโอ): ' + _0x2d4a78;
  if (_0x465b0b === 4 || _0x465b0b === 17 || _0x465b0b === 32 || _0x465b0b === 613 || _0x465b0b === 80001) return "เรียก Facebook API ถี่เกินไป (rate limit) — รอสักพักแล้วลองใหม่";
  if (_0x465b0b === 100) return "ค่าที่ส่งไม่ถูกต้อง: " + _0x2d4a78;
  return "Facebook ปฏิเสธ" + (_0x168dd3 ? " (HTTP " + _0x168dd3 + ")" : "") + ": " + _0x2d4a78;
}
async function fbFetchJson(_0xed0de9, _0x3334cd) {
  let _0x174f1d;
  try {
    _0x174f1d = await fetch(_0xed0de9, _0x3334cd);
  } catch (_0x5f0b80) {
    throw new Error("เชื่อมต่อ Facebook ไม่ได้ (network): " + (_0x5f0b80 instanceof Error ? _0x5f0b80["message"] : String(_0x5f0b80)));
  }
  const _0x27dfe3 = await _0x174f1d["text"]()["catch"](() => "");
  let _0x3888f5 = {};
  try {
    _0x3888f5 = JSON["parse"](_0x27dfe3);
  } catch {
  }
  if (!_0x174f1d["ok"] || _0x3888f5["error"]) throw new Error(readableFbError(_0x174f1d["status"], _0x27dfe3));
  return _0x3888f5;
}
function postMultipartWithProgress(_0x1422b0, _0x4dafb3, _0x36e2b3) {
  return new Promise((_0x5ac5a9, _0x4ad91c) => {
    const _0x25f674 = new XMLHttpRequest();
    _0x25f674["open"]("POST", _0x1422b0, !![]), _0x25f674["upload"]["onprogress"] = (_0x51cecd) => {
      if (_0x51cecd["lengthComputable"] && _0x36e2b3) _0x36e2b3(Math["round"](_0x51cecd["loaded"] / _0x51cecd["total"] * 100));
    }, _0x25f674["onload"] = () => {
      const _0x288919 = _0x25f674["responseText"] || "";
      let _0x1ff319 = {};
      try {
        _0x1ff319 = JSON["parse"](_0x288919);
      } catch {
      }
      if (_0x25f674["status"] >= 200 && _0x25f674["status"] < 300 && !_0x1ff319["error"]) {
        _0x5ac5a9(_0x1ff319);
        return;
      }
      _0x4ad91c(new Error(readableFbError(_0x25f674["status"], _0x288919)));
    }, _0x25f674["onerror"] = () => _0x4ad91c(new Error("network error during Facebook upload")), _0x25f674["ontimeout"] = () => _0x4ad91c(new Error("Facebook upload timed out")), _0x25f674["timeout"] = 12 * 60 * 1e3, _0x25f674["send"](_0x4dafb3);
  });
}
async function getPageInfo() {
  const _0x15a788 = await getFbCreds();
  if (!_0x15a788) return null;
  try {
    const _0x42acb8 = await fbFetchJson(GRAPH + "/" + encodeURIComponent(_0x15a788["pageId"]) + "?fields=id,name&access_token=" + encodeURIComponent(_0x15a788["accessToken"])), _0x4f006c = String(_0x42acb8["id"] ?? _0x15a788["pageId"]), _0x26c7a2 = String(_0x42acb8["name"] ?? "");
    return { "id": _0x4f006c, "name": _0x26c7a2 || _0x4f006c };
  } catch {
    return null;
  }
}
async function postToPage(_0x516d89) {
  const _0x56a20a = await getFbCreds();
  if (!_0x56a20a) throw new Error('ยังไม่ได้ตั้งค่า Facebook Page (Page ID + Access Token) — ไปที่ "ตั้งค่า Facebook Page" ก่อน');
  const { pageId: _0x24b85b, accessToken: _0x5c37d9 } = _0x56a20a, _0x16955e = !!(_0x516d89["publishAt"] && _0x516d89["publishAt"] > 0), _0x57b8d0 = (_0x516d89["message"] || "")["slice"](0, 6e4), _0x18c7b3 = (_0x5ca562) => {
    _0x16955e && (_0x5ca562("published", "false"), _0x5ca562("scheduled_publish_time", String(Math["floor"](_0x516d89["publishAt"]))));
  };
  if (_0x516d89["kind"] === "video") {
    if (!_0x516d89["file"] || _0x516d89["file"]["size"] === 0) throw new Error("ไฟล์วิดีโอว่างเปล่า");
    const _0x1a8640 = new FormData();
    _0x1a8640["append"]("source", _0x516d89["file"], _0x516d89["file"]["name"] || "video.mp4");
    if (_0x57b8d0) _0x1a8640["append"]("description", _0x57b8d0);
    _0x1a8640["append"]("access_token", _0x5c37d9), _0x18c7b3((_0x7f034f, _0x3a89c2) => _0x1a8640["append"](_0x7f034f, _0x3a89c2));
    const _0x43ad22 = await postMultipartWithProgress(GRAPH_VIDEO + "/" + encodeURIComponent(_0x24b85b) + "/videos", _0x1a8640, _0x516d89["onProgress"]), _0x320f6e = String(_0x43ad22["id"] ?? "");
    if (!_0x320f6e) throw new Error("อัปโหลดวิดีโอสำเร็จแต่ไม่ได้รับ id กลับมา (เช็คในเพจ)");
    return log$3["info"]("video posted: " + _0x320f6e), { "postId": _0x320f6e, "permalink": "https://www.facebook.com/" + _0x320f6e };
  }
  if (_0x516d89["kind"] === "photo") {
    if (_0x516d89["file"] && _0x516d89["file"]["size"] > 0) {
      const _0x214cbe = new FormData();
      _0x214cbe["append"]("source", _0x516d89["file"], _0x516d89["file"]["name"] || "photo.jpg");
      if (_0x57b8d0) _0x214cbe["append"]("message", _0x57b8d0);
      _0x214cbe["append"]("access_token", _0x5c37d9), _0x18c7b3((_0x15cb56, _0x590de6) => _0x214cbe["append"](_0x15cb56, _0x590de6));
      const _0x3bbaaf = await postMultipartWithProgress(GRAPH + "/" + encodeURIComponent(_0x24b85b) + "/photos", _0x214cbe, _0x516d89["onProgress"]), _0x5b5f84 = String(_0x3bbaaf["post_id"] ?? _0x3bbaaf["id"] ?? "");
      if (!_0x5b5f84) throw new Error("โพสต์รูปสำเร็จแต่ไม่ได้รับ id กลับมา (เช็คในเพจ)");
      return log$3["info"]("photo posted: " + _0x5b5f84), { "postId": _0x5b5f84, "permalink": "https://www.facebook.com/" + _0x5b5f84 };
    }
    const _0x4cab8e = (_0x516d89["imageUrl"] || "")["trim"]();
    if (!_0x4cab8e) throw new Error("ไม่มีไฟล์รูปหรือ URL รูป");
    const _0x2afa7c = new URLSearchParams();
    _0x2afa7c["set"]("url", _0x4cab8e);
    if (_0x57b8d0) _0x2afa7c["set"]("message", _0x57b8d0);
    _0x2afa7c["set"]("access_token", _0x5c37d9), _0x18c7b3((_0x1f10e1, _0x3a8718) => _0x2afa7c["set"](_0x1f10e1, _0x3a8718));
    const _0xd3647 = await fbFetchJson(GRAPH + "/" + encodeURIComponent(_0x24b85b) + "/photos", { "method": "POST", "headers": { "Content-Type": "application/x-www-form-urlencoded" }, "body": _0x2afa7c["toString"]() }), _0x414ac7 = String(_0xd3647["post_id"] ?? _0xd3647["id"] ?? "");
    if (!_0x414ac7) throw new Error("โพสต์รูปสำเร็จแต่ไม่ได้รับ id กลับมา (เช็คในเพจ)");
    return log$3["info"]("photo (url) posted: " + _0x414ac7), { "postId": _0x414ac7, "permalink": "https://www.facebook.com/" + _0x414ac7 };
  }
  const _0x3ffab0 = new URLSearchParams();
  if (_0x57b8d0) _0x3ffab0["set"]("message", _0x57b8d0);
  const _0x15cd61 = (_0x516d89["link"] || "")["trim"]();
  if (_0x15cd61) _0x3ffab0["set"]("link", _0x15cd61);
  if (!_0x57b8d0 && !_0x15cd61) throw new Error("โพสต์ข้อความเปล่าไม่ได้ — ต้องมีข้อความหรือลิงก์");
  _0x3ffab0["set"]("access_token", _0x5c37d9), _0x18c7b3((_0x39e1d9, _0x265c53) => _0x3ffab0["set"](_0x39e1d9, _0x265c53));
  const _0xadfd5d = await fbFetchJson(GRAPH + "/" + encodeURIComponent(_0x24b85b) + "/feed", { "method": "POST", "headers": { "Content-Type": "application/x-www-form-urlencoded" }, "body": _0x3ffab0["toString"]() }), _0x373851 = String(_0xadfd5d["id"] ?? "");
  if (!_0x373851) throw new Error("โพสต์สำเร็จแต่ไม่ได้รับ id กลับมา (เช็คในเพจ)");
  return log$3["info"]("feed post: " + _0x373851), { "postId": _0x373851, "permalink": "https://www.facebook.com/" + _0x373851 };
}
var __defProp$4 = Object["defineProperty"], __getOwnPropDesc$4 = Object["getOwnPropertyDescriptor"], __decorateClass$4 = (_0x2b41c6, _0x4100d9, _0x4f6d66, _0x3aa6b2) => {
  var _0x44fb39 = _0x3aa6b2 > 1 ? void 0 : _0x3aa6b2 ? __getOwnPropDesc$4(_0x4100d9, _0x4f6d66) : _0x4100d9;
  for (var _0xae4110 = _0x2b41c6["length"] - 1, _0x2f4b17; _0xae4110 >= 0; _0xae4110--) if (_0x2f4b17 = _0x2b41c6[_0xae4110]) _0x44fb39 = (_0x3aa6b2 ? _0x2f4b17(_0x4100d9, _0x4f6d66, _0x44fb39) : _0x2f4b17(_0x44fb39)) || _0x44fb39;
  if (_0x3aa6b2 && _0x44fb39) __defProp$4(_0x4100d9, _0x4f6d66, _0x44fb39);
  return _0x44fb39;
};
const STORAGE_KEY$2 = "agx_facebook_batch", DISCLOSURE = "หมายเหตุ: โพสต์นี้มีลิงก์พันธมิตร (affiliate) — ทางเพจอาจได้รับค่าตอบแทนจากการสั่งซื้อ";
function newId$2(_0x59f8e4) {
  return _0x59f8e4 + "_" + Date["now"]() + "_" + Math["random"]()["toString"](36)["slice"](2, 8);
}
function toLocalYMD$1(_0xf30313) {
  return _0xf30313["getFullYear"]() + "-" + String(_0xf30313["getMonth"]() + 1)["padStart"](2, "0") + "-" + String(_0xf30313["getDate"]())["padStart"](2, "0");
}
function sleep(_0x3a0b76) {
  return new Promise((_0xc72d04) => setTimeout(_0xc72d04, _0x3a0b76));
}
let AgxFacebookBatch = class extends i {
  constructor() {
    super(...arguments), this["groups"] = [], this["expandedId"] = null, this["uploadOrder"] = "linear", this["scheduleEnabled"] = ![], this["scheduleDate"] = toLocalYMD$1(/* @__PURE__ */ new Date()), this["scheduleHour"] = String((/* @__PURE__ */ new Date())["getHours"]())["padStart"](2, "0"), this["scheduleMinute"] = "00", this["scheduleInterval"] = 30, this["setDelayTime"] = 5, this["running"] = ![], this["curIdx"] = 0, this["curPct"] = 0, this["logEntries"] = [], this["pageName"] = null, this["hasCreds"] = ![], this["pageIdInput"] = "", this["tokenInput"] = "", this["showSetup"] = ![], this["checking"] = ![], this["_fileMap"] = /* @__PURE__ */ new Map();
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), void this["_restore"](), void this["_loadCreds"]();
  }
  async ["_loadCreds"]() {
    const _0x752077 = await getFbCreds();
    this["hasCreds"] = !!_0x752077;
    _0x752077 && (this["pageIdInput"] = _0x752077["pageId"], this["pageName"] = await getPageInfo()["then"]((_0x5f1db9) => (_0x5f1db9 == null ? void 0 : _0x5f1db9["name"]) ?? null));
    if (!this["hasCreds"]) this["showSetup"] = !![];
  }
  async ["_saveCreds"]() {
    const _0x4f11cc = this["pageIdInput"]["trim"](), _0x1e8cf9 = this["tokenInput"]["trim"]();
    if (!_0x4f11cc || !_0x1e8cf9) {
      this["_addLog"]("error", "กรอกทั้ง Page ID และ Page Access Token");
      return;
    }
    await setFbCreds(_0x4f11cc, _0x1e8cf9), this["hasCreds"] = !!await getFbCreds(), this["tokenInput"] = "";
    const _0x156193 = await getPageInfo();
    this["pageName"] = (_0x156193 == null ? void 0 : _0x156193["name"]) ?? null, this["_addLog"](_0x156193 ? "success" : "error", _0x156193 ? "✓ เชื่อม Facebook Page แล้ว: " + _0x156193["name"] : "❌ token/Page ID ไม่ถูกต้อง หรือ token ไม่มีสิทธิ์ — เช็คอีกครั้ง");
  }
  async ["_clearCreds"]() {
    await setFbCreds("", ""), this["hasCreds"] = ![], this["pageName"] = null, this["pageIdInput"] = "", this["tokenInput"] = "", this["showSetup"] = !![], this["_addLog"]("info", "ลบ Page ID / token แล้ว");
  }
  async ["_recheck"]() {
    if (!this["hasCreds"]) return;
    this["checking"] = !![];
    try {
      const _0x5c5af0 = await getPageInfo();
      this["pageName"] = (_0x5c5af0 == null ? void 0 : _0x5c5af0["name"]) ?? null, this["_addLog"](_0x5c5af0 ? "info" : "error", _0x5c5af0 ? "เพจ: " + _0x5c5af0["name"] : "token ใช้ไม่ได้ — ขอ token ใหม่");
    } finally {
      this["checking"] = ![];
    }
  }
  async ["_restore"]() {
    try {
      const _0x2b61ee = await chrome["storage"]["local"]["get"]([STORAGE_KEY$2]), _0x4e5770 = _0x2b61ee[STORAGE_KEY$2];
      _0x4e5770 && (this["groups"] = (_0x4e5770["groups"] ?? [])["map"]((_0x48f1ce) => ({ ..._0x48f1ce, "clips": [] })), this["uploadOrder"] = _0x4e5770["uploadOrder"] === "roundrobin" ? "roundrobin" : "linear", this["scheduleEnabled"] = !!_0x4e5770["scheduleEnabled"], this["scheduleDate"] = _0x4e5770["scheduleDate"] ?? this["scheduleDate"], this["scheduleHour"] = _0x4e5770["scheduleHour"] ?? this["scheduleHour"], this["scheduleMinute"] = _0x4e5770["scheduleMinute"] ?? this["scheduleMinute"], this["scheduleInterval"] = Number(_0x4e5770["scheduleInterval"]) || 30, this["setDelayTime"] = Number(_0x4e5770["setDelayTime"]) || 5);
    } catch {
    }
  }
  ["_persist"]() {
    chrome["storage"]["local"]["set"]({ [STORAGE_KEY$2]: { "groups": this["groups"]["map"]((_0x53db5b) => ({ ..._0x53db5b, "clips": [] })), "uploadOrder": this["uploadOrder"], "scheduleEnabled": this["scheduleEnabled"], "scheduleDate": this["scheduleDate"], "scheduleHour": this["scheduleHour"], "scheduleMinute": this["scheduleMinute"], "scheduleInterval": this["scheduleInterval"], "setDelayTime": this["setDelayTime"] } })["catch"](() => {
    });
  }
  ["_addLog"](_0x31c940, _0x1a8fd6) {
    this["logEntries"] = [...this["logEntries"], { "level": _0x31c940, "message": _0x1a8fd6, "timestamp": Date["now"]() }];
  }
  ["_importJson"]() {
    const _0x5c91d4 = document["createElement"]("input");
    _0x5c91d4["type"] = "file", _0x5c91d4["accept"] = "application/json,.json", _0x5c91d4["onchange"] = async (_0x21896a) => {
      var _a2;
      const _0x2b3d84 = (_a2 = _0x21896a["target"]["files"]) == null ? void 0 : _a2[0];
      if (!_0x2b3d84) return;
      try {
        const _0x2e0894 = unwrapImport(JSON["parse"](await _0x2b3d84["text"]()));
        this["_mergeProducts"](_0x2e0894), this["_addLog"]("success", "📂 นำเข้า " + _0x2e0894["length"] + " สินค้าจาก JSON");
      } catch (_0x219f66) {
        this["_addLog"]("error", "อ่าน JSON ไม่สำเร็จ: " + _0x219f66);
      }
    }, _0x5c91d4["click"]();
  }
  async ["_importFromAuto"]() {
    try {
      const _0x2b3c2d = await chrome["storage"]["local"]["get"](["agx_auto_products"]), _0x4c5e81 = _0x2b3c2d["agx_auto_products"];
      if (!Array["isArray"](_0x4c5e81) || _0x4c5e81["length"] === 0) {
        this["_addLog"]("warn", "ไม่พบสินค้าใน Auto mode");
        return;
      }
      this["_mergeProducts"](_0x4c5e81), this["_addLog"]("success", "🛍 นำเข้า " + _0x4c5e81["length"] + " สินค้าจาก Auto mode");
    } catch (_0x47911e) {
      this["_addLog"]("error", "อ่านสินค้า Auto ไม่สำเร็จ: " + _0x47911e);
    }
  }
  ["_mergeProducts"](_0x2b160c) {
    const _0x2016d7 = new Set(this["groups"]["map"]((_0xe193a8) => _0xe193a8["productId"])["filter"](Boolean)), _0x4f0b69 = [];
    for (const _0x125568 of _0x2b160c) {
      const _0x3fe0ed = _0x125568, _0x414b28 = String(_0x3fe0ed["productId"] || _0x3fe0ed["product_id"] || "")["trim"]() || void 0, _0x49f458 = String(_0x3fe0ed["name"] || _0x3fe0ed["title"] || _0x3fe0ed["productName"] || "")["trim"]() || "(ไม่มีชื่อ)";
      if (_0x414b28 && _0x2016d7["has"](_0x414b28)) continue;
      const _0x223af5 = (() => {
        const _0x402d3d = _0x3fe0ed["productImages"];
        if (Array["isArray"](_0x402d3d) && _0x402d3d[0]) return String(_0x402d3d[0])["trim"]() || void 0;
        return String(_0x3fe0ed["imageUrl"] || _0x3fe0ed["cover"] || "")["trim"]() || void 0;
      })(), _0x2b9134 = String(_0x3fe0ed["customCaptionOverride"] || _0x3fe0ed["caption"] || "")["trim"]() || void 0;
      _0x4f0b69["push"]({ "id": newId$2("grp"), "productId": _0x414b28, "productName": _0x49f458, "imageUrl": _0x223af5, "caption": _0x2b9134, "defaultHashtags": typeof _0x3fe0ed["hashtags"] === "string" && _0x3fe0ed["hashtags"]["trim"]() ? _0x3fe0ed["hashtags"] : void 0, "affiliateLink": typeof _0x3fe0ed["affiliateLink"] === "string" ? _0x3fe0ed["affiliateLink"] : "", "clips": [] });
      if (_0x414b28) _0x2016d7["add"](_0x414b28);
    }
    this["groups"] = [...this["groups"], ..._0x4f0b69];
    if (_0x4f0b69["length"] > 0 && this["expandedId"] === null) this["expandedId"] = _0x4f0b69[0]["id"];
    this["_persist"]();
  }
  ["_addProduct"]() {
    const _0x1a3f7d = newId$2("grp");
    this["groups"] = [...this["groups"], { "id": _0x1a3f7d, "productName": "สินค้าใหม่", "affiliateLink": "", "clips": [] }], this["expandedId"] = _0x1a3f7d, this["_persist"]();
  }
  ["_removeProduct"](_0x11bb48) {
    const _0x522ead = this["groups"]["find"]((_0x5513f8) => _0x5513f8["id"] === _0x11bb48);
    if (!_0x522ead) return;
    if (_0x522ead["clips"]["length"] > 0 && !confirm('ลบสินค้า "' + _0x522ead["productName"] + '" และไฟล์ ' + _0x522ead["clips"]["length"] + " ไฟล์?")) return;
    for (const _0x39d8b0 of _0x522ead["clips"]) this["_fileMap"]["delete"](_0x39d8b0["id"]);
    this["groups"] = this["groups"]["filter"]((_0x925350) => _0x925350["id"] !== _0x11bb48);
    if (this["expandedId"] === _0x11bb48) this["expandedId"] = null;
    this["_persist"]();
  }
  ["_clearAll"]() {
    if (this["groups"]["length"] === 0 || !confirm("ลบสินค้าทั้งหมด " + this["groups"]["length"] + " รายการ?")) return;
    this["_fileMap"]["clear"](), this["groups"] = [], this["expandedId"] = null, this["_persist"]();
  }
  ["_updateProduct"](_0x4beee5, _0x4e58b1) {
    this["groups"] = this["groups"]["map"]((_0x236d95) => _0x236d95["id"] === _0x4beee5 ? { ..._0x236d95, ..._0x4e58b1 } : _0x236d95), this["_persist"]();
  }
  ["_toggle"](_0x2f3066) {
    this["expandedId"] = this["expandedId"] === _0x2f3066 ? null : _0x2f3066;
  }
  ["_pickFiles"](_0x5b7e82, _0x5b94d6) {
    const _0x2c54ad = _0x5b94d6["target"], _0x5dfbb2 = _0x2c54ad["files"];
    if (!_0x5dfbb2 || _0x5dfbb2["length"] === 0) return;
    const _0x328265 = [];
    for (const _0x54c7eb of Array["from"](_0x5dfbb2)) {
      const _0x386d11 = newId$2("file");
      this["_fileMap"]["set"](_0x386d11, _0x54c7eb), _0x328265["push"]({ "id": _0x386d11, "videoName": _0x54c7eb["name"], "videoSize": _0x54c7eb["size"] });
    }
    const _0x5a7dc6 = this["groups"]["find"]((_0x53eb98) => _0x53eb98["id"] === _0x5b7e82);
    if (_0x5a7dc6) this["_updateProduct"](_0x5b7e82, { "clips": [..._0x5a7dc6["clips"], ..._0x328265] });
    _0x2c54ad["value"] = "";
  }
  ["_removeFile"](_0x41dee5, _0x3cd392) {
    const _0x338e0b = this["groups"]["find"]((_0x4faab1) => _0x4faab1["id"] === _0x41dee5);
    if (!_0x338e0b) return;
    this["_fileMap"]["delete"](_0x3cd392), this["_updateProduct"](_0x41dee5, { "clips": _0x338e0b["clips"]["filter"]((_0x2d5790) => _0x2d5790["id"] !== _0x3cd392) });
  }
  ["_ordered"]() {
    const _0x13aeb6 = this["groups"]["map"]((_0x57620d) => ({ "g": _0x57620d, "cs": _0x57620d["clips"]["filter"]((_0x42452e) => this["_fileMap"]["has"](_0x42452e["id"])) })), _0x5e7b90 = [], _0x89b30 = (_0x24e8ef, _0x39e0a6) => {
      if (_0x39e0a6["length"] > 0) {
        for (const _0x6af09a of _0x39e0a6) _0x5e7b90["push"]({ "g": _0x24e8ef, "c": _0x6af09a });
      } else {
        if ((_0x24e8ef["affiliateLink"] || _0x24e8ef["caption"] || "")["trim"]()) _0x5e7b90["push"]({ "g": _0x24e8ef, "c": null });
      }
    };
    if (this["uploadOrder"] === "linear") {
      for (const { g: _0x26d4e2, cs: _0x38ac4b } of _0x13aeb6) _0x89b30(_0x26d4e2, _0x38ac4b);
      return _0x5e7b90;
    }
    const _0x3a08de = Math["max"](1, ..._0x13aeb6["map"]((_0x326a5f) => _0x326a5f["cs"]["length"] || 1));
    for (let _0x36afd2 = 0; _0x36afd2 < _0x3a08de; _0x36afd2++) for (const { g: _0x1c054e, cs: _0x248932 } of _0x13aeb6) {
      if (_0x248932["length"] > 0) {
        if (_0x36afd2 < _0x248932["length"]) _0x5e7b90["push"]({ "g": _0x1c054e, "c": _0x248932[_0x36afd2] });
      } else {
        if (_0x36afd2 === 0 && (_0x1c054e["affiliateLink"] || _0x1c054e["caption"] || "")["trim"]()) _0x5e7b90["push"]({ "g": _0x1c054e, "c": null });
      }
    }
    return _0x5e7b90;
  }
  ["_readyCount"]() {
    return this["_ordered"]()["length"];
  }
  ["_publishAtForIndex"](_0x4df504) {
    if (!this["scheduleEnabled"]) return void 0;
    const _0x114e37 = new Date(this["scheduleDate"]);
    return _0x114e37["setHours"](Number(this["scheduleHour"] || "09"), Number(this["scheduleMinute"] || "00"), 0, 0), Math["floor"]((_0x114e37["getTime"]() + _0x4df504 * (Number(this["scheduleInterval"]) || 30) * 6e4) / 1e3);
  }
  ["_stop"]() {
    this["running"] = ![], this["_addLog"]("warn", "🛑 หยุด — จะหยุดหลังโพสต์ปัจจุบันเสร็จ");
  }
  async ["_start"]() {
    if (this["running"]) return;
    if (!this["pageName"]) {
      this["showSetup"] = !![], this["_addLog"]("warn", "⚠ ต้องตั้งค่า Facebook Page (Page ID + Access Token) ก่อน");
      return;
    }
    const _0x1a787b = this["_ordered"]();
    if (_0x1a787b["length"] === 0) {
      this["_addLog"]("warn", "ยังไม่มีรายการที่พร้อมโพส (เลือกไฟล์รูป/วิดีโอ หรือใส่ลิงก์ affiliate ในสินค้า)");
      return;
    }
    if (this["scheduleEnabled"]) {
      const _0x11afe8 = this["_publishAtForIndex"](0) ?? 0;
      if (_0x11afe8 * 1e3 < Date["now"]() + 11 * 6e4) this["_addLog"]("warn", "⚠ เวลาที่ตั้งต้องเป็นอย่างน้อย ~10 นาทีจากตอนนี้ — Facebook อาจปฏิเสธโพสต์แรก ปรับเวลาให้ไกลขึ้น");
    }
    this["_persist"](), this["running"] = !![], this["logEntries"] = [], this["curIdx"] = 0, this["curPct"] = 0, this["_addLog"]("info", "▶ เริ่มโพส " + _0x1a787b["length"] + ' รายการขึ้น Facebook Page "' + this["pageName"] + '" (' + (this["uploadOrder"] === "linear" ? "ตามลำดับ" : "วนตามสินค้า") + ")" + (this["scheduleEnabled"] ? " · ตั้งเวลาเริ่ม " + this["scheduleDate"] + " " + this["scheduleHour"] + ":" + this["scheduleMinute"] + " ห่างกัน " + this["scheduleInterval"] + " นาที" : ""));
    let _0xf0b716 = 0, _0x149c86 = 0;
    for (let _0x27150e = 0; _0x27150e < _0x1a787b["length"]; _0x27150e++) {
      if (!this["running"]) {
        this["_addLog"]("warn", "หยุดที่รายการ " + (_0x27150e + 1) + "/" + _0x1a787b["length"]);
        break;
      }
      const { g: _0x340002, c: _0x1fb28f } = _0x1a787b[_0x27150e];
      this["curIdx"] = _0x27150e, this["curPct"] = 0;
      const _0x5ea92c = ((_0x1fb28f == null ? void 0 : _0x1fb28f["caption"]) || _0x340002["caption"] || _0x340002["productName"] || "")["trim"](), _0x5e486d = ((_0x1fb28f == null ? void 0 : _0x1fb28f["hashtags"]) || _0x340002["defaultHashtags"] || "")["trim"](), _0x3d6f07 = (_0x340002["affiliateLink"] || "")["trim"](), _0x1d03ca = [_0x5ea92c, _0x3d6f07, _0x5e486d, DISCLOSURE]["filter"](Boolean)["join"]("\n\n"), _0x3b5310 = this["_publishAtForIndex"](_0x27150e);
      let _0xa1b814, _0x123dd7, _0x1a4457;
      if (_0x1fb28f) {
        _0x123dd7 = this["_fileMap"]["get"](_0x1fb28f["id"]);
        if (!_0x123dd7) {
          this["_addLog"]("error", "[" + (_0x27150e + 1) + "/" + _0x1a787b["length"] + '] "' + _0x340002["productName"] + '" → ไฟล์หาย (เลือกไฟล์ใหม่)'), _0x149c86++;
          continue;
        }
        if (_0x123dd7["type"]["startsWith"]("video/")) _0xa1b814 = "video";
        else {
          if (_0x123dd7["type"]["startsWith"]("image/")) _0xa1b814 = "photo";
          else {
            this["_addLog"]("error", "[" + (_0x27150e + 1) + "/" + _0x1a787b["length"] + '] "' + _0x340002["productName"] + '" → ' + _0x123dd7["name"] + " ไม่ใช่ไฟล์รูปหรือวิดีโอ"), _0x149c86++;
            continue;
          }
        }
      } else _0xa1b814 = "link", _0x1a4457 = _0x3d6f07 || void 0;
      const _0x3e1665 = _0xa1b814 === "video" ? "วิดีโอ " + _0x123dd7["name"] : _0xa1b814 === "photo" ? "รูป " + _0x123dd7["name"] : "โพสต์ลิงก์";
      this["_addLog"]("info", "📤 [" + (_0x27150e + 1) + "/" + _0x1a787b["length"] + '] "' + _0x340002["productName"] + '" → ' + _0x3e1665 + (_0x3b5310 ? " · ตั้งเวลา " + new Date(_0x3b5310 * 1e3)["toLocaleString"]("th-TH") : "") + "...");
      try {
        const { permalink: _0xbf6111 } = await postToPage({ "kind": _0xa1b814, "file": _0x123dd7, "link": _0x1a4457, "message": _0x1d03ca, "publishAt": _0x3b5310, "onProgress": (_0x1062bd) => {
          this["curPct"] = _0x1062bd;
        } });
        this["curPct"] = 100, this["_addLog"]("success", "✓ [" + (_0x27150e + 1) + "/" + _0x1a787b["length"] + "] โพสต์สำเร็จ — " + _0xbf6111), _0xf0b716++;
      } catch (_0x581a62) {
        this["_addLog"]("error", "❌ [" + (_0x27150e + 1) + "/" + _0x1a787b["length"] + "] " + (_0x581a62 instanceof Error ? _0x581a62["message"] : String(_0x581a62))), _0x149c86++;
      }
      if (_0x27150e < _0x1a787b["length"] - 1 && this["running"]) await sleep(Math["max"](1, this["setDelayTime"]) * 1e3);
    }
    this["running"] = ![], this["_addLog"](_0x149c86 === 0 ? "success" : "warn", "เสร็จสิ้น — สำเร็จ " + _0xf0b716 + ", ล้มเหลว " + _0x149c86);
  }
  ["render"]() {
    const _0x5e782f = this["_readyCount"]();
    return b`
      <div class="setup-toggle" @click=${() => {
      this["showSetup"] = !this["showSetup"];
    }}>
        ${this["showSetup"] ? "▼" : "▶"} 🔧 ตั้งค่า Facebook Page (Page ID + Access Token)
        ${this["hasCreds"] ? b`<span class="ok-text">(ตั้งค่าแล้ว ✓)</span>` : b`<span style="color:#f0a">(ยังไม่ได้ตั้งค่า — จำเป็น)</span>`}
      </div>
      ${this["showSetup"] ? b`
        <div class="setup-box">
          ใส่ Page ID + Page Access Token ของเพจ Facebook ของคุณเอง (ครั้งเดียว) — extension จะโพสต์ขึ้นเพจนี้ผ่าน Graph API:
          <ol>
            <li>เป็นแอดมินเพจที่ต้องการโพสต์</li>
            <li>ไปที่ <code>developers.facebook.com</code> → สร้าง App (โหมด Development ก็พอ ไม่ต้องส่ง App Review เพราะใช้กับเพจตัวเอง)</li>
            <li>เปิด <strong>Graph API Explorer</strong> → เลือก App ของตัวเอง → "Add Permissions": <code>pages_show_list</code>, <code>pages_manage_posts</code>, <code>pages_read_engagement</code>, <code>publish_video</code> → "Generate Access Token"</li>
            <li>(แนะนำ) แลก token เป็น long-lived ก่อน เพื่อให้ Page token ไม่หมดอายุ — แล้วเรียก <code>GET /me/accounts</code> → คัดลอก <strong>id</strong> (= Page ID) และ <strong>access_token</strong> ของเพจ มาวางด้านล่าง</li>
          </ol>
          <div class="warn">⚠ รองรับเฉพาะ Facebook <strong>Page</strong> — โพสต์ขึ้นโปรไฟล์ส่วนตัว/กลุ่ม ผ่าน API ไม่ได้ (Meta ปิดไว้). อีกทางคือใช้ "Facebook Affiliate Partnerships" ในแอป Facebook (tag สินค้าในโพสต์ได้เลย — ทำด้วยมือในแอป)</div>
          <div class="setup-grid">
            <agx-input label="Page ID" placeholder="เช่น 1234567890" .value=${this["pageIdInput"]}
              @input=${(_0x5e22f1) => {
      this["pageIdInput"] = _0x5e22f1["detail"]["value"];
    }}></agx-input>
            <agx-input label="Page Access Token" type="password" placeholder=${this["hasCreds"] ? "•••••••• (บันทึกไว้แล้ว — กรอกใหม่เพื่อเปลี่ยน)" : "EAAB..."} .value=${this["tokenInput"]}
              @input=${(_0xe3e869) => {
      this["tokenInput"] = _0xe3e869["detail"]["value"];
    }}></agx-input>
          </div>
          <div style="display:flex;gap:6px;margin-top:4px">
            <button class="small-btn" @click=${this["_saveCreds"]}>💾 บันทึก</button>
            ${this["hasCreds"] ? b`<button class="small-btn danger" @click=${this["_clearCreds"]}>ลบ</button>` : ""}
          </div>
        </div>
      ` : ""}

      <div class="acct ${this["pageName"] ? "ok" : ""}">
        <span>${this["pageName"] ? "📘 เชื่อมแล้ว: " + this["pageName"] : this["hasCreds"] ? "⚠ token อาจใช้ไม่ได้ — กดตรวจสอบ" : "⚙️ ตั้งค่า Page ID / Access Token ก่อน (ด้านบน)"}</span>
        ${this["hasCreds"] ? b`<button class="small-btn" ?disabled=${this["checking"]} @click=${this["_recheck"]}>${this["checking"] ? "กำลังตรวจ..." : "ตรวจสอบ"}</button>` : ""}
      </div>

      <div class="toolbar">
        <button class="tb-btn" @click=${this["_importJson"]}>📂 อ่าน JSON</button>
        <button class="tb-btn" @click=${this["_importFromAuto"]}>🛍 จาก Auto mode</button>
        <button class="tb-btn" @click=${this["_addProduct"]}>+ เพิ่มสินค้า</button>
        ${this["groups"]["length"] > 0 ? b`<button class="tb-btn danger" @click=${this["_clearAll"]}>🗑 ล้างทั้งหมด</button>` : ""}
      </div>

      ${this["groups"]["length"] === 0 ? b`<div class="hint" style="margin-bottom:10px">ยังไม่มีสินค้า — กด "🛍 จาก Auto mode" หรือ "📂 อ่าน JSON" หรือ "+ เพิ่มสินค้า"</div>` : ""}

      ${this["groups"]["map"]((_0x5104df) => b`
        <div class="pcard">
          <div class="pcard-head" @click=${() => this["_toggle"](_0x5104df["id"])}>
            <span>${this["expandedId"] === _0x5104df["id"] ? "▼" : "▶"}</span>
            <span class="name">${_0x5104df["productName"] || "(ไม่มีชื่อ)"}</span>
            <span class="count">${_0x5104df["clips"]["filter"]((_0x53fa7c) => this["_fileMap"]["has"](_0x53fa7c["id"]))["length"]}/${_0x5104df["clips"]["length"]} ไฟล์</span>
            <span class="x small-btn danger" @click=${(_0x25d2f1) => {
      _0x25d2f1["stopPropagation"](), this["_removeProduct"](_0x5104df["id"]);
    }}>ลบ</span>
          </div>
          ${this["expandedId"] === _0x5104df["id"] ? b`
            <div class="pcard-body">
              <div class="row"><agx-input label="🏷 ชื่อสินค้า" .value=${_0x5104df["productName"]} @input=${(_0x32f649) => this["_updateProduct"](_0x5104df["id"], { "productName": _0x32f649["detail"]["value"] })}></agx-input></div>
              <div class="row"><agx-input label="🔗 ลิงก์ affiliate (Shopee — ใส่ในโพสต์)" .value=${_0x5104df["affiliateLink"] || ""} @input=${(_0x5153b9) => this["_updateProduct"](_0x5104df["id"], { "affiliateLink": _0x5153b9["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">📝 แคปชั่นโพสต์ (ใช้กับทุกไฟล์ของสินค้านี้ — ว่าง = ใช้ชื่อสินค้า)</div>
                <textarea rows="2" .value=${_0x5104df["caption"] || ""} @input=${(_0x4cc21c) => this["_updateProduct"](_0x5104df["id"], { "caption": _0x4cc21c["target"]["value"] })}></textarea>
              </div>
              <div class="row"><agx-input label="#️⃣ แฮชแท็ก (คั่นด้วยช่องว่าง)" .value=${_0x5104df["defaultHashtags"] || ""} @input=${(_0x5571e0) => this["_updateProduct"](_0x5104df["id"], { "defaultHashtags": _0x5571e0["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">🎞 ไฟล์รูป/วิดีโอ — เลือกได้หลายไฟล์ (1 ไฟล์ = 1 โพสต์)</div>
                <input type="file" accept="video/*,image/*" multiple @change=${(_0x8b5b4b) => this["_pickFiles"](_0x5104df["id"], _0x8b5b4b)} />
                ${_0x5104df["clips"]["map"]((_0xb0605c) => b`<div class="clip">${this["_fileMap"]["has"](_0xb0605c["id"]) ? "✅" : "⚠️"} ${_0xb0605c["videoName"]} (${(_0xb0605c["videoSize"] / 1024 / 1024)["toFixed"](1)} MB) <span class="x" @click=${() => this["_removeFile"](_0x5104df["id"], _0xb0605c["id"])}>✕</span></div>`)}
                <div class="hint">${_0x5104df["clips"]["some"]((_0xad54e) => !this["_fileMap"]["has"](_0xad54e["id"])) ? "⚠️ ไฟล์ที่ ⚠️ ยังไม่ได้โหลด (โหลดแผงใหม่ → ต้องเลือกไฟล์อีกครั้ง)" : _0x5104df["clips"]["length"] === 0 ? "ไม่เลือกไฟล์ก็ได้ — ถ้ามีลิงก์ affiliate จะโพสต์เป็นโพสต์ลิงก์" : ""}</div>
              </div>
            </div>
          ` : ""}
        </div>
      `)}

      <agx-drawer label="⚙️ ตั้งค่าการโพส Facebook" open>
        <agx-select label="ลำดับการโพส" .value=${this["uploadOrder"]} .options=${[{ "id": "linear", "label": "ตามลำดับ (สินค้า 1 จบ → สินค้า 2)" }, { "id": "roundrobin", "label": "วนตามสินค้า (P1f1, P2f1, ...)" }]} @change=${(_0x57abfa) => {
      this["uploadOrder"] = _0x57abfa["detail"]["value"] === "roundrobin" ? "roundrobin" : "linear", this["_persist"]();
    }}></agx-select>
        <label style="display:flex;align-items:center;gap:6px;margin:8px 0;cursor:pointer;font-size:12px">
          <input type="checkbox" .checked=${this["scheduleEnabled"]} @change=${(_0x669c0) => {
      this["scheduleEnabled"] = _0x669c0["target"]["checked"], this["_persist"]();
    }} />
          ⏰ ตั้งเวลาโพสต์ (Facebook scheduled post) — ห่างกันต่อโพสต์ · เวลาต้องอย่างน้อย ~10 นาที–30 วันจากตอนนี้
        </label>
        ${this["scheduleEnabled"] ? b`
          <div class="settings-grid">
            <agx-input label="วันที่เริ่ม" type="date" .value=${this["scheduleDate"]} @input=${(_0x5babd6) => {
      this["scheduleDate"] = _0x5babd6["detail"]["value"], this["_persist"]();
    }}></agx-input>
            <div style="display:flex;gap:6px">
              <agx-select label="ชม." .value=${this["scheduleHour"]} .options=${Array["from"]({ "length": 24 }, (_0x3591ae, _0x228cb5) => ({ "id": String(_0x228cb5)["padStart"](2, "0"), "label": String(_0x228cb5)["padStart"](2, "0") }))} @change=${(_0x306a83) => {
      this["scheduleHour"] = _0x306a83["detail"]["value"], this["_persist"]();
    }}></agx-select>
              <agx-select label="นาที" .value=${this["scheduleMinute"]} .options=${["00", "15", "30", "45"]["map"]((_0x46e6a2) => ({ "id": _0x46e6a2, "label": _0x46e6a2 }))} @change=${(_0x14793c) => {
      this["scheduleMinute"] = _0x14793c["detail"]["value"], this["_persist"]();
    }}></agx-select>
            </div>
            <agx-input label="ห่างกันต่อโพสต์ (นาที)" type="number" .value=${String(this["scheduleInterval"])} @input=${(_0x23ff74) => {
      this["scheduleInterval"] = Math["max"](0, Number(_0x23ff74["detail"]["value"]) || 0), this["_persist"]();
    }}></agx-input>
            <div></div>
          </div>
        ` : ""}
        <div class="row" style="margin-top:8px"><agx-input label="หน่วงระหว่างโพสต์ (วินาที — กัน API rate-limit)" type="number" .value=${String(this["setDelayTime"])} @input=${(_0x322423) => {
      this["setDelayTime"] = Math["max"](1, Number(_0x322423["detail"]["value"]) || 1), this["_persist"]();
    }}></agx-input></div>
      </agx-drawer>

      ${this["running"] ? b`<div class="progress-wrap"><div class="progress-bar" style="width:${this["curPct"]}%"></div></div><div class="hint">รายการ ${this["curIdx"] + 1} — ${this["curPct"]}%</div>` : ""}

      <div style="margin-top:10px">
        ${this["running"] ? b`<agx-button variant="danger" size="lg" full @click=${this["_stop"]}>🛑 หยุด</agx-button>` : b`<agx-button variant="primary" size="lg" full ?disabled=${_0x5e782f === 0 || !this["pageName"]} @click=${this["_start"]}>📤 เริ่มโพส Facebook (${_0x5e782f} รายการ)</agx-button>`}
        ${!this["pageName"] ? b`<div class="hint">ต้องตั้งค่า Facebook Page ก่อน</div>` : ""}
      </div>

      ${this["logEntries"]["length"] > 0 ? b`<div style="margin-top:10px"><agx-log .entries=${this["logEntries"]}></agx-log></div>` : ""}
    `;
  }
};
AgxFacebookBatch["styles"] = i$3`
    :host { display: block; color: var(--agx-text, #e4e6eb); font-size: 13px; }
    .toolbar { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
    .tb-btn { padding: 6px 10px; font-size: 12px; cursor: pointer; background: rgba(74,141,255,0.1); border: 1px solid rgba(74,141,255,0.4); color: #4A8DFF; border-radius: 6px; }
    .tb-btn:hover { background: rgba(74,141,255,0.2); }
    .tb-btn.danger { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4); color: #ef4444; }
    .acct { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 6px 8px; border-radius: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px; font-size: 12px; }
    .acct.ok { border-color: rgba(74,200,120,0.4); }
    .small-btn { padding: 3px 8px; font-size: 11px; cursor: pointer; border-radius: 5px; background: rgba(74,141,255,0.12); border: 1px solid rgba(74,141,255,0.4); color: #6aa9ff; }
    .small-btn.danger { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.4); color: #ef6b6b; }
    .setup-toggle { font-size: 11px; cursor: pointer; color: #6aa9ff; user-select: none; padding: 4px 0; }
    .setup-box { border: 1px solid rgba(66,103,178,0.3); background: rgba(66,103,178,0.06); border-radius: 6px; padding: 8px 10px; margin-bottom: 10px; font-size: 11px; line-height: 1.55; }
    .setup-box ol { margin: 4px 0 6px; padding-left: 18px; }
    .setup-box ol li { margin-bottom: 3px; }
    .setup-box code { background: rgba(0,0,0,0.3); padding: 0 3px; border-radius: 3px; word-break: break-all; }
    .setup-box .warn { color: #f0b950; }
    .setup-grid { display: grid; gap: 6px; margin: 6px 0; }
    .ok-text { color: #6ad08c; }
    .pcard { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; background: rgba(255,255,255,0.03); }
    .pcard-head { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .pcard-head .name { font-weight: 600; flex: 1; }
    .pcard-head .count { font-size: 11px; color: var(--agx-text-muted, #889); }
    .pcard-body { margin-top: 8px; }
    .row { margin-bottom: 7px; }
    .label { font-size: 11px; color: var(--agx-text-secondary, #aab); margin-bottom: 3px; }
    .hint { font-size: 10px; color: var(--agx-text-muted, #889); margin-top: 2px; }
    .clip { display: flex; align-items: center; gap: 6px; font-size: 11px; padding: 3px 0; }
    .clip .x { cursor: pointer; color: #ef6b6b; }
    input[type="file"] { font-size: 11px; color: inherit; }
    textarea { width: 100%; box-sizing: border-box; resize: vertical; min-height: 44px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: inherit; font: inherit; padding: 5px 7px; }
    .settings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .progress-wrap { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; margin-top: 6px; }
    .progress-bar { height: 100%; background: linear-gradient(90deg, #4267B2, #5b8def); transition: width .2s; }
  `, __decorateClass$4([r()], AgxFacebookBatch["prototype"], "groups", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "expandedId", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "uploadOrder", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "scheduleEnabled", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "scheduleDate", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "scheduleHour", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "scheduleMinute", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "scheduleInterval", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "setDelayTime", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "running", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "curIdx", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "curPct", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "logEntries", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "pageName", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "hasCreds", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "pageIdInput", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "tokenInput", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "showSetup", 2), __decorateClass$4([r()], AgxFacebookBatch["prototype"], "checking", 2), AgxFacebookBatch = __decorateClass$4([t$1("agx-facebook-batch")], AgxFacebookBatch);
const log$2 = createLogger("MobileBridge");
const COMPANION_PORT = 41789;
const BASE = "http://127.0.0.1:" + COMPANION_PORT, WS_URL = "ws://127.0.0.1:" + COMPANION_PORT;
async function pingCompanion(_0x3a21e4 = 1500) {
  try {
    const _0x5890be = new AbortController(), _0x5212a4 = setTimeout(() => _0x5890be["abort"](), _0x3a21e4), _0x45b0d4 = await fetch(BASE + "/ping", { "signal": _0x5890be["signal"] });
    clearTimeout(_0x5212a4);
    if (!_0x45b0d4["ok"]) return { "ok": ![] };
    const _0x164dfc = await _0x45b0d4["json"]();
    return { "ok": !!_0x164dfc["ok"], "version": _0x164dfc["version"], "devices": Array["isArray"](_0x164dfc["devices"]) ? _0x164dfc["devices"] : [] };
  } catch {
    return { "ok": ![] };
  }
}
function utf8ToBase64(_0x2e4030) {
  return btoa(Array["from"](new TextEncoder()["encode"](_0x2e4030), (_0x2665fe) => String["fromCharCode"](_0x2665fe))["join"](""));
}
async function sendClipToCompanion(_0x264225, _0xe989a7) {
  let _0x5c72cd;
  try {
    _0x5c72cd = await fetch(BASE + "/clip", { "method": "POST", "headers": { "Content-Type": _0x264225["type"] || "video/mp4", "X-Clip-Meta": utf8ToBase64(JSON["stringify"](_0xe989a7)), "X-Clip-Filename": encodeURIComponent(_0x264225["name"] || _0xe989a7["id"] + ".mp4") }, "body": _0x264225 });
  } catch (_0x5426f5) {
    throw new Error('เชื่อมต่อโปรแกรม Companion ไม่ได้ — เปิดโปรแกรม "AutoGenX Mobile Companion" ก่อน (' + (_0x5426f5 instanceof Error ? _0x5426f5["message"] : String(_0x5426f5)) + ")");
  }
  const _0x5b5705 = await _0x5c72cd["text"]()["catch"](() => "");
  let _0x5c2ac3 = {};
  try {
    _0x5c2ac3 = JSON["parse"](_0x5b5705);
  } catch {
  }
  if (!_0x5c72cd["ok"] || _0x5c2ac3["error"] || !_0x5c2ac3["accepted"]) throw new Error(_0x5c2ac3["error"] || "Companion ปฏิเสธคลิป (HTTP " + _0x5c72cd["status"] + ")");
  return { "accepted": !![], "id": _0x5c2ac3["id"] || _0xe989a7["id"] };
}
function connectCompanionWs(_0x2f633e, _0x2b6d8a) {
  try {
    const _0x285140 = new WebSocket(WS_URL);
    return _0x285140["onmessage"] = (_0xfb6a29) => {
      try {
        _0x2f633e(JSON["parse"](String(_0xfb6a29["data"])));
      } catch {
      }
    }, _0x285140["onerror"] = () => {
    }, _0x285140["onclose"] = () => {
      _0x2b6d8a == null ? void 0 : _0x2b6d8a();
    }, _0x285140;
  } catch (_0x226a43) {
    return log$2["warn"]("WS open failed", _0x226a43), null;
  }
}
var __defProp$3 = Object["defineProperty"], __getOwnPropDesc$3 = Object["getOwnPropertyDescriptor"], __decorateClass$3 = (_0x338548, _0x1dc2f7, _0x213c60, _0x36bd66) => {
  var _0x1ec0b6 = _0x36bd66 > 1 ? void 0 : _0x36bd66 ? __getOwnPropDesc$3(_0x1dc2f7, _0x213c60) : _0x1dc2f7;
  for (var _0x48c3e8 = _0x338548["length"] - 1, _0x54325c; _0x48c3e8 >= 0; _0x48c3e8--) if (_0x54325c = _0x338548[_0x48c3e8]) _0x1ec0b6 = (_0x36bd66 ? _0x54325c(_0x1dc2f7, _0x213c60, _0x1ec0b6) : _0x54325c(_0x1ec0b6)) || _0x1ec0b6;
  if (_0x36bd66 && _0x1ec0b6) __defProp$3(_0x1dc2f7, _0x213c60, _0x1ec0b6);
  return _0x1ec0b6;
};
const STORAGE_KEY$1 = "agx_mobile_batch", PLATFORM_OPTS = [{ "id": "tiktok", "label": "TikTok (แอปมือถือ)" }, { "id": "instagram", "label": "Instagram Reels" }, { "id": "facebook", "label": "Facebook Reels" }, { "id": "shopee_video", "label": "Shopee Video" }, { "id": "lemon8", "label": "Lemon8" }, { "id": "youtube", "label": "YouTube (แอปมือถือ)" }], platformLabel = (_0x5a6bc8) => {
  var _a2;
  return ((_a2 = PLATFORM_OPTS["find"]((_0x2ee832) => _0x2ee832["id"] === _0x5a6bc8)) == null ? void 0 : _a2["label"]) ?? _0x5a6bc8;
};
function newId$1(_0xf7e2af) {
  return _0xf7e2af + "_" + Date["now"]() + "_" + Math["random"]()["toString"](36)["slice"](2, 8);
}
let AgxMobileBatch = class extends i {
  constructor() {
    super(...arguments), this["groups"] = [], this["expandedId"] = null, this["uploadOrder"] = "linear", this["targetPlatform"] = "tiktok", this["running"] = ![], this["curIdx"] = 0, this["curPct"] = 0, this["logEntries"] = [], this["companionOk"] = ![], this["companionVersion"] = "", this["devices"] = [], this["pinging"] = ![], this["_fileMap"] = /* @__PURE__ */ new Map(), this["_ws"] = null;
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), void this["_restore"](), void this["_ping"]();
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_closeWs"]();
  }
  async ["_ping"]() {
    this["pinging"] = !![];
    try {
      const _0x2e357f = await pingCompanion();
      this["companionOk"] = _0x2e357f["ok"], this["companionVersion"] = _0x2e357f["version"] || "", this["devices"] = _0x2e357f["devices"] || [];
      if (_0x2e357f["ok"]) this["_openWs"]();
    } finally {
      this["pinging"] = ![];
    }
  }
  ["_openWs"]() {
    if (this["_ws"] && (this["_ws"]["readyState"] === WebSocket["OPEN"] || this["_ws"]["readyState"] === WebSocket["CONNECTING"])) return;
    this["_ws"] = connectCompanionWs((_0x194889) => this["_onWsMsg"](_0x194889), () => {
      this["_ws"] = null;
    });
  }
  ["_closeWs"]() {
    var _a2;
    try {
      (_a2 = this["_ws"]) == null ? void 0 : _a2["close"]();
    } catch {
    }
    this["_ws"] = null;
  }
  ["_onWsMsg"](_0x2baff1) {
    if (_0x2baff1["type"] === "devices") {
      this["devices"] = _0x2baff1["list"];
      return;
    }
    if (_0x2baff1["type"] === "hello") {
      this["companionOk"] = !![], this["companionVersion"] = _0x2baff1["version"];
      return;
    }
    if (_0x2baff1["type"] === "progress") {
      this["curPct"] = typeof _0x2baff1["pct"] === "number" ? _0x2baff1["pct"] : this["curPct"], this["_addLog"]("info", "… " + _0x2baff1["id"] + ": " + _0x2baff1["state"] + (_0x2baff1["note"] ? " — " + _0x2baff1["note"] : ""));
      return;
    }
    if (_0x2baff1["type"] === "done") {
      this["curPct"] = 100, this["_addLog"]("success", "✓ โพสต์เสร็จ — " + (_0x2baff1["permalink"] || _0x2baff1["id"]));
      return;
    }
    if (_0x2baff1["type"] === "error") {
      this["_addLog"]("error", "❌ " + _0x2baff1["id"] + ": " + _0x2baff1["msg"]);
      return;
    }
  }
  async ["_restore"]() {
    try {
      const _0x1a9506 = await chrome["storage"]["local"]["get"]([STORAGE_KEY$1]), _0x19cf4d = _0x1a9506[STORAGE_KEY$1];
      if (_0x19cf4d) {
        this["groups"] = (_0x19cf4d["groups"] ?? [])["map"]((_0x3eccff) => ({ ..._0x3eccff, "clips": [] })), this["uploadOrder"] = _0x19cf4d["uploadOrder"] === "roundrobin" ? "roundrobin" : "linear";
        if (_0x19cf4d["targetPlatform"] && PLATFORM_OPTS["some"]((_0x3f96b3) => _0x3f96b3["id"] === _0x19cf4d["targetPlatform"])) this["targetPlatform"] = _0x19cf4d["targetPlatform"];
      }
    } catch {
    }
  }
  ["_persist"]() {
    chrome["storage"]["local"]["set"]({ [STORAGE_KEY$1]: { "groups": this["groups"]["map"]((_0x2e5065) => ({ ..._0x2e5065, "clips": [] })), "uploadOrder": this["uploadOrder"], "targetPlatform": this["targetPlatform"] } })["catch"](() => {
    });
  }
  ["_addLog"](_0x2d83c9, _0x3bd8eb) {
    this["logEntries"] = [...this["logEntries"], { "level": _0x2d83c9, "message": _0x3bd8eb, "timestamp": Date["now"]() }];
  }
  ["_importJson"]() {
    const _0x36edd9 = document["createElement"]("input");
    _0x36edd9["type"] = "file", _0x36edd9["accept"] = "application/json,.json", _0x36edd9["onchange"] = async (_0x260323) => {
      var _a2;
      const _0x32fc68 = (_a2 = _0x260323["target"]["files"]) == null ? void 0 : _a2[0];
      if (!_0x32fc68) return;
      try {
        const _0x22c653 = unwrapImport(JSON["parse"](await _0x32fc68["text"]()));
        this["_mergeProducts"](_0x22c653), this["_addLog"]("success", "📂 นำเข้า " + _0x22c653["length"] + " สินค้าจาก JSON");
      } catch (_0x1bc004) {
        this["_addLog"]("error", "อ่าน JSON ไม่สำเร็จ: " + _0x1bc004);
      }
    }, _0x36edd9["click"]();
  }
  async ["_importFromAuto"]() {
    try {
      const _0x4d132f = await chrome["storage"]["local"]["get"](["agx_auto_products"]), _0x1516f8 = _0x4d132f["agx_auto_products"];
      if (!Array["isArray"](_0x1516f8) || _0x1516f8["length"] === 0) {
        this["_addLog"]("warn", "ไม่พบสินค้าใน Auto mode");
        return;
      }
      this["_mergeProducts"](_0x1516f8), this["_addLog"]("success", "🛍 นำเข้า " + _0x1516f8["length"] + " สินค้าจาก Auto mode");
    } catch (_0x32804b) {
      this["_addLog"]("error", "อ่านสินค้า Auto ไม่สำเร็จ: " + _0x32804b);
    }
  }
  ["_mergeProducts"](_0x1c4d97) {
    const _0x5625f1 = new Set(this["groups"]["map"]((_0x199f09) => _0x199f09["productId"])["filter"](Boolean)), _0x5752ed = [];
    for (const _0x2fee0e of _0x1c4d97) {
      const _0x392dc2 = _0x2fee0e, _0x45abdd = String(_0x392dc2["productId"] || _0x392dc2["product_id"] || "")["trim"]() || void 0, _0xd0705a = String(_0x392dc2["name"] || _0x392dc2["title"] || _0x392dc2["productName"] || "")["trim"]() || "(ไม่มีชื่อ)";
      if (_0x45abdd && _0x5625f1["has"](_0x45abdd)) continue;
      const _0x163887 = (() => {
        const _0x1cd288 = _0x392dc2["productImages"];
        if (Array["isArray"](_0x1cd288) && _0x1cd288[0]) return String(_0x1cd288[0])["trim"]() || void 0;
        return String(_0x392dc2["imageUrl"] || _0x392dc2["cover"] || "")["trim"]() || void 0;
      })(), _0x5206cf = String(_0x392dc2["customCaptionOverride"] || _0x392dc2["caption"] || "")["trim"]() || void 0;
      _0x5752ed["push"]({ "id": newId$1("grp"), "productId": _0x45abdd, "productName": _0xd0705a, "imageUrl": _0x163887, "caption": _0x5206cf, "defaultHashtags": typeof _0x392dc2["hashtags"] === "string" && _0x392dc2["hashtags"]["trim"]() ? _0x392dc2["hashtags"] : void 0, "affiliateLink": typeof _0x392dc2["affiliateLink"] === "string" ? _0x392dc2["affiliateLink"] : "", "clips": [] });
      if (_0x45abdd) _0x5625f1["add"](_0x45abdd);
    }
    this["groups"] = [...this["groups"], ..._0x5752ed];
    if (_0x5752ed["length"] > 0 && this["expandedId"] === null) this["expandedId"] = _0x5752ed[0]["id"];
    this["_persist"]();
  }
  ["_addProduct"]() {
    const _0x108997 = newId$1("grp");
    this["groups"] = [...this["groups"], { "id": _0x108997, "productName": "สินค้าใหม่", "affiliateLink": "", "clips": [] }], this["expandedId"] = _0x108997, this["_persist"]();
  }
  ["_removeProduct"](_0x5586d8) {
    const _0x3170af = this["groups"]["find"]((_0x5a0fcd) => _0x5a0fcd["id"] === _0x5586d8);
    if (!_0x3170af) return;
    if (_0x3170af["clips"]["length"] > 0 && !confirm('ลบสินค้า "' + _0x3170af["productName"] + '" และคลิป ' + _0x3170af["clips"]["length"] + " คลิป?")) return;
    for (const _0x577557 of _0x3170af["clips"]) this["_fileMap"]["delete"](_0x577557["id"]);
    this["groups"] = this["groups"]["filter"]((_0xa0856) => _0xa0856["id"] !== _0x5586d8);
    if (this["expandedId"] === _0x5586d8) this["expandedId"] = null;
    this["_persist"]();
  }
  ["_clearAll"]() {
    if (this["groups"]["length"] === 0 || !confirm("ลบสินค้าทั้งหมด " + this["groups"]["length"] + " รายการ?")) return;
    this["_fileMap"]["clear"](), this["groups"] = [], this["expandedId"] = null, this["_persist"]();
  }
  ["_updateProduct"](_0x3043b4, _0x11442a) {
    this["groups"] = this["groups"]["map"]((_0x43dcdd) => _0x43dcdd["id"] === _0x3043b4 ? { ..._0x43dcdd, ..._0x11442a } : _0x43dcdd), this["_persist"]();
  }
  ["_toggle"](_0x4dc04d) {
    this["expandedId"] = this["expandedId"] === _0x4dc04d ? null : _0x4dc04d;
  }
  ["_pickClips"](_0x51c15d, _0x5acbd5) {
    const _0x577168 = _0x5acbd5["target"], _0x29eb76 = _0x577168["files"];
    if (!_0x29eb76 || _0x29eb76["length"] === 0) return;
    const _0x21d33e = [];
    for (const _0xed0c22 of Array["from"](_0x29eb76)) {
      const _0x4396ce = newId$1("clip");
      this["_fileMap"]["set"](_0x4396ce, _0xed0c22), _0x21d33e["push"]({ "id": _0x4396ce, "videoName": _0xed0c22["name"], "videoSize": _0xed0c22["size"] });
    }
    const _0x4fd6a9 = this["groups"]["find"]((_0x4c9501) => _0x4c9501["id"] === _0x51c15d);
    if (_0x4fd6a9) this["_updateProduct"](_0x51c15d, { "clips": [..._0x4fd6a9["clips"], ..._0x21d33e] });
    _0x577168["value"] = "";
  }
  ["_removeClip"](_0x2cfc95, _0x2fcf55) {
    const _0x5a2934 = this["groups"]["find"]((_0x7d9511) => _0x7d9511["id"] === _0x2cfc95);
    if (!_0x5a2934) return;
    this["_fileMap"]["delete"](_0x2fcf55), this["_updateProduct"](_0x2cfc95, { "clips": _0x5a2934["clips"]["filter"]((_0x17f851) => _0x17f851["id"] !== _0x2fcf55) });
  }
  ["_ordered"]() {
    const _0xe20975 = this["groups"]["map"]((_0x31e5c0) => ({ "g": _0x31e5c0, "cs": _0x31e5c0["clips"]["filter"]((_0x311224) => this["_fileMap"]["has"](_0x311224["id"])) }))["filter"]((_0x15dd32) => _0x15dd32["cs"]["length"] > 0), _0x3a2f4b = [];
    if (this["uploadOrder"] === "linear") {
      for (const { g: _0x4a4eb8, cs: _0x511923 } of _0xe20975) for (const _0x51935c of _0x511923) _0x3a2f4b["push"]({ "g": _0x4a4eb8, "c": _0x51935c });
      return _0x3a2f4b;
    }
    const _0x1f3d89 = _0xe20975["reduce"]((_0x4a8b42, _0x2442a4) => Math["max"](_0x4a8b42, _0x2442a4["cs"]["length"]), 0);
    for (let _0x3ee845 = 0; _0x3ee845 < _0x1f3d89; _0x3ee845++) for (const { g: _0x38776d, cs: _0x4ff6bc } of _0xe20975) if (_0x3ee845 < _0x4ff6bc["length"]) _0x3a2f4b["push"]({ "g": _0x38776d, "c": _0x4ff6bc[_0x3ee845] });
    return _0x3a2f4b;
  }
  ["_readyCount"]() {
    let _0x4f61e4 = 0;
    for (const _0x52d5c4 of this["groups"]) for (const _0x25d74e of _0x52d5c4["clips"]) if (this["_fileMap"]["has"](_0x25d74e["id"])) _0x4f61e4++;
    return _0x4f61e4;
  }
  ["_stop"]() {
    this["running"] = ![], this["_addLog"]("warn", "🛑 หยุดส่ง — คลิปที่ส่งไปแล้วยังอยู่ในคิวของ companion");
  }
  async ["_start"]() {
    if (this["running"]) return;
    await this["_ping"]();
    if (!this["companionOk"]) {
      this["_addLog"]("warn", '⚠ ยังไม่ได้เปิดโปรแกรม "AutoGenX Mobile Companion" — เปิดโปรแกรมแล้วกด "ตรวจสอบ"');
      return;
    }
    if (this["devices"]["filter"]((_0x218f94) => _0x218f94["state"] === "device")["length"] === 0) {
      this["_addLog"]("warn", '⚠ ยังไม่พบมือถือที่พร้อม — เสียบมือถือ + เปิด USB debugging แล้วกด "ตรวจสอบ"');
      return;
    }
    const _0x3a2ec1 = this["_ordered"]();
    if (_0x3a2ec1["length"] === 0) {
      this["_addLog"]("warn", "ยังไม่มีคลิปที่พร้อมส่ง (เลือกไฟล์วิดีโอในแต่ละสินค้า)");
      return;
    }
    this["_persist"](), this["running"] = !![], this["logEntries"] = [], this["curIdx"] = 0, this["curPct"] = 0, this["_openWs"](), this["_addLog"]("info", "▶ ส่ง " + _0x3a2ec1["length"] + " คลิปไป AutoGenX Mobile Companion — ปลายทาง: " + platformLabel(this["targetPlatform"]) + " (" + (this["uploadOrder"] === "linear" ? "ตามลำดับ" : "วนตามสินค้า") + ")");
    let _0x3dc9ff = 0;
    for (let _0x35750f = 0; _0x35750f < _0x3a2ec1["length"]; _0x35750f++) {
      if (!this["running"]) {
        this["_addLog"]("warn", "หยุดที่คลิป " + (_0x35750f + 1) + "/" + _0x3a2ec1["length"]);
        break;
      }
      const { g: _0x3210cc, c: _0x1c6f0f } = _0x3a2ec1[_0x35750f], _0x76451e = this["_fileMap"]["get"](_0x1c6f0f["id"]);
      this["curIdx"] = _0x35750f, this["curPct"] = 0;
      if (!_0x76451e) {
        this["_addLog"]("error", "[" + (_0x35750f + 1) + "/" + _0x3a2ec1["length"] + '] "' + _0x3210cc["productName"] + '" → ไฟล์หาย (เลือกใหม่)');
        continue;
      }
      const _0xb18c27 = { "id": _0x1c6f0f["id"], "productName": _0x3210cc["productName"] || "คลิป", "caption": (_0x1c6f0f["caption"] || _0x3210cc["caption"] || "")["trim"](), "hashtags": (_0x1c6f0f["hashtags"] || _0x3210cc["defaultHashtags"] || "")["trim"](), "affLink": (_0x3210cc["affiliateLink"] || "")["trim"](), "platform": this["targetPlatform"] };
      this["_addLog"]("info", "📤 [" + (_0x35750f + 1) + "/" + _0x3a2ec1["length"] + '] ส่ง "' + _0x3210cc["productName"] + '" → ' + _0x1c6f0f["videoName"] + " (" + (_0x1c6f0f["videoSize"] / 1024 / 1024)["toFixed"](1) + " MB)...");
      try {
        await sendClipToCompanion(_0x76451e, _0xb18c27), this["_addLog"]("success", "✓ [" + (_0x35750f + 1) + "/" + _0x3a2ec1["length"] + "] ส่งให้ companion แล้ว — รอ companion ขับแอป" + (platformLabel(this["targetPlatform"])["startsWith"]("TikTok") ? " TikTok" : "")), _0x3dc9ff++;
      } catch (_0x4b569e) {
        this["_addLog"]("error", "❌ [" + (_0x35750f + 1) + "/" + _0x3a2ec1["length"] + "] " + (_0x4b569e instanceof Error ? _0x4b569e["message"] : String(_0x4b569e)));
      }
    }
    this["running"] = ![], this["_addLog"]("info", "ส่งครบ " + _0x3dc9ff + "/" + _0x3a2ec1["length"] + " คลิปไป companion — ติดตามสถานะการโพสต์ในหน้าต่างโปรแกรม Companion (หรือด้านล่างนี้ถ้า companion รายงานกลับมา)");
  }
  ["render"]() {
    const _0x4ebf05 = this["_readyCount"](), _0x490a22 = this["devices"]["filter"]((_0xea8be1) => _0xea8be1["state"] === "device"), _0x5b2902 = this["devices"]["filter"]((_0x4d3752) => _0x4d3752["state"] === "unauthorized");
    return b`
      <div class="note">
        แท็บนี้ส่งคลิปไปให้โปรแกรม <strong>"AutoGenX Mobile Companion"</strong> (โปรแกรมแยกบน PC) ที่ต่อมือถือจริงผ่าน USB/Wi-Fi (ADB) แล้วขับแอปมือถือโพสต์ให้ — extension เองโพสต์ไม่ได้.
        ${this["companionOk"] ? "" : b` <a href="https://www.autogention.com/dl" target="_blank">ดาวน์โหลด/วิธีติดตั้ง Companion</a>`}
      </div>

      <div class="acct ${this["companionOk"] ? "ok" : "bad"}">
        <span>
          ${this["companionOk"] ? "🔌 เชื่อมต่อ Companion แล้ว" + (this["companionVersion"] ? " v" + this["companionVersion"] : "") + " · " + (_0x490a22["length"] ? "📱 " + _0x490a22["length"] + " เครื่องพร้อม (" + _0x490a22["map"]((_0x17a3a3) => _0x17a3a3["model"] || _0x17a3a3["serial"])["join"](", ") + ")" : _0x5b2902["length"] ? "⚠ มีมือถือแต่ยังไม่อนุญาต USB debugging (กดอนุญาตในมือถือ)" : "ยังไม่พบมือถือ — เสียบ + เปิด USB debugging") : '⚠ ยังไม่ได้เปิดโปรแกรม "AutoGenX Mobile Companion"'}
        </span>
        <button class="small-btn" ?disabled=${this["pinging"]} @click=${this["_ping"]}>${this["pinging"] ? "กำลังตรวจ..." : "ตรวจสอบ"}</button>
      </div>

      <div class="toolbar">
        <button class="tb-btn" @click=${this["_importJson"]}>📂 อ่าน JSON</button>
        <button class="tb-btn" @click=${this["_importFromAuto"]}>🛍 จาก Auto mode</button>
        <button class="tb-btn" @click=${this["_addProduct"]}>+ เพิ่มสินค้า</button>
        ${this["groups"]["length"] > 0 ? b`<button class="tb-btn danger" @click=${this["_clearAll"]}>🗑 ล้างทั้งหมด</button>` : ""}
      </div>

      ${this["groups"]["length"] === 0 ? b`<div class="hint" style="margin-bottom:10px">ยังไม่มีสินค้า — กด "🛍 จาก Auto mode" หรือ "📂 อ่าน JSON" หรือ "+ เพิ่มสินค้า"</div>` : ""}

      ${this["groups"]["map"]((_0x140eb7) => b`
        <div class="pcard">
          <div class="pcard-head" @click=${() => this["_toggle"](_0x140eb7["id"])}>
            <span>${this["expandedId"] === _0x140eb7["id"] ? "▼" : "▶"}</span>
            <span class="name">${_0x140eb7["productName"] || "(ไม่มีชื่อ)"}</span>
            <span class="count">${_0x140eb7["clips"]["filter"]((_0x40a7ba) => this["_fileMap"]["has"](_0x40a7ba["id"]))["length"]}/${_0x140eb7["clips"]["length"]} คลิปพร้อม</span>
            <span class="x small-btn danger" @click=${(_0xf52129) => {
      _0xf52129["stopPropagation"](), this["_removeProduct"](_0x140eb7["id"]);
    }}>ลบ</span>
          </div>
          ${this["expandedId"] === _0x140eb7["id"] ? b`
            <div class="pcard-body">
              <div class="row"><agx-input label="🏷 ชื่อสินค้า" .value=${_0x140eb7["productName"]} @input=${(_0x259558) => this["_updateProduct"](_0x140eb7["id"], { "productName": _0x259558["detail"]["value"] })}></agx-input></div>
              <div class="row"><agx-input label="🔗 ลิงก์ affiliate (จะใส่ในแคปชั่น/คอมเมนต์ตามที่แอปรองรับ)" .value=${_0x140eb7["affiliateLink"] || ""} @input=${(_0xc341c0) => this["_updateProduct"](_0x140eb7["id"], { "affiliateLink": _0xc341c0["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">📝 แคปชั่น (ใช้กับทุกคลิปของสินค้านี้)</div>
                <textarea rows="2" .value=${_0x140eb7["caption"] || ""} @input=${(_0x148299) => this["_updateProduct"](_0x140eb7["id"], { "caption": _0x148299["target"]["value"] })}></textarea>
              </div>
              <div class="row"><agx-input label="#️⃣ แฮชแท็ก (คั่นด้วยช่องว่าง)" .value=${_0x140eb7["defaultHashtags"] || ""} @input=${(_0x2059ff) => this["_updateProduct"](_0x140eb7["id"], { "defaultHashtags": _0x2059ff["detail"]["value"] })}></agx-input></div>
              <div class="row">
                <div class="label">🎞 คลิปวิดีโอ — เลือกได้หลายไฟล์ (1 ไฟล์ = 1 โพสต์)</div>
                <input type="file" accept="video/*" multiple @change=${(_0xed58c8) => this["_pickClips"](_0x140eb7["id"], _0xed58c8)} />
                ${_0x140eb7["clips"]["map"]((_0x5a1917) => b`<div class="clip">${this["_fileMap"]["has"](_0x5a1917["id"]) ? "✅" : "⚠️"} ${_0x5a1917["videoName"]} (${(_0x5a1917["videoSize"] / 1024 / 1024)["toFixed"](1)} MB) <span class="x" @click=${() => this["_removeClip"](_0x140eb7["id"], _0x5a1917["id"])}>✕</span></div>`)}
                <div class="hint">${_0x140eb7["clips"]["some"]((_0x1763ed) => !this["_fileMap"]["has"](_0x1763ed["id"])) ? "⚠️ คลิปที่ ⚠️ ยังไม่ได้โหลด (โหลดแผงใหม่ → ต้องเลือกไฟล์อีกครั้ง)" : ""}</div>
              </div>
            </div>
          ` : ""}
        </div>
      `)}

      <agx-drawer label="⚙️ ตั้งค่าการส่ง" open>
        <div class="row"><agx-select label="📱 ปลายทาง (แอปมือถือ)" .value=${this["targetPlatform"]} .options=${PLATFORM_OPTS} @change=${(_0x2c3581) => {
      const _0x3dae69 = _0x2c3581["detail"]["value"];
      PLATFORM_OPTS["some"]((_0x5293a5) => _0x5293a5["id"] === _0x3dae69) && (this["targetPlatform"] = _0x3dae69, this["_persist"]());
    }}></agx-select></div>
        <div class="row"><agx-select label="ลำดับคลิป" .value=${this["uploadOrder"]} .options=${[{ "id": "linear", "label": "ตามลำดับ (สินค้า 1 จบ → สินค้า 2)" }, { "id": "roundrobin", "label": "วนตามสินค้า (P1c1, P2c1, ...)" }]} @change=${(_0x2c8767) => {
      this["uploadOrder"] = _0x2c8767["detail"]["value"] === "roundrobin" ? "roundrobin" : "linear", this["_persist"]();
    }}></agx-select></div>
        <div class="hint">การตั้งเวลาโพสต์/หน่วงระหว่างโพสต์ ตั้งในโปรแกรม Companion (ฝั่งที่คุมมือถือ)</div>
      </agx-drawer>

      ${this["running"] ? b`<div class="progress-wrap"><div class="progress-bar" style="width:${this["curPct"]}%"></div></div><div class="hint">คลิป ${this["curIdx"] + 1} — ${this["curPct"]}%</div>` : ""}

      <div style="margin-top:10px">
        ${this["running"] ? b`<agx-button variant="danger" size="lg" full @click=${this["_stop"]}>🛑 หยุดส่ง</agx-button>` : b`<agx-button variant="primary" size="lg" full ?disabled=${_0x4ebf05 === 0 || !this["companionOk"]} @click=${this["_start"]}>📱 ส่งไป Companion (${_0x4ebf05} คลิป)</agx-button>`}
        ${!this["companionOk"] ? b`<div class="hint">ต้องเปิดโปรแกรม "AutoGenX Mobile Companion" ก่อน</div>` : ""}
      </div>

      ${this["logEntries"]["length"] > 0 ? b`<div style="margin-top:10px"><agx-log .entries=${this["logEntries"]}></agx-log></div>` : ""}
    `;
  }
};
AgxMobileBatch["styles"] = i$3`
    :host { display: block; color: var(--agx-text, #e4e6eb); font-size: 13px; }
    .toolbar { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
    .tb-btn { padding: 6px 10px; font-size: 12px; cursor: pointer; background: rgba(74,141,255,0.1); border: 1px solid rgba(74,141,255,0.4); color: #4A8DFF; border-radius: 6px; }
    .tb-btn:hover { background: rgba(74,141,255,0.2); }
    .tb-btn.danger { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4); color: #ef4444; }
    .acct { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px 10px; border-radius: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); margin-bottom: 10px; font-size: 12px; }
    .acct.ok { border-color: rgba(74,200,120,0.4); }
    .acct.bad { border-color: rgba(245,158,11,0.4); }
    .small-btn { padding: 3px 8px; font-size: 11px; cursor: pointer; border-radius: 5px; background: rgba(74,141,255,0.12); border: 1px solid rgba(74,141,255,0.4); color: #6aa9ff; }
    .small-btn.danger { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.4); color: #ef6b6b; }
    .note { font-size: 10px; color: var(--agx-text-muted, #889); background: rgba(255,200,0,0.06); border: 1px solid rgba(255,200,0,0.22); border-radius: 6px; padding: 6px 8px; margin-bottom: 10px; line-height: 1.5; }
    .pcard { border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; background: rgba(255,255,255,0.03); }
    .pcard-head { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .pcard-head .name { font-weight: 600; flex: 1; }
    .pcard-head .count { font-size: 11px; color: var(--agx-text-muted, #889); }
    .pcard-body { margin-top: 8px; }
    .row { margin-bottom: 7px; }
    .label { font-size: 11px; color: var(--agx-text-secondary, #aab); margin-bottom: 3px; }
    .hint { font-size: 10px; color: var(--agx-text-muted, #889); margin-top: 2px; }
    .clip { display: flex; align-items: center; gap: 6px; font-size: 11px; padding: 3px 0; }
    .clip .x { cursor: pointer; color: #ef6b6b; }
    input[type="file"] { font-size: 11px; color: inherit; }
    textarea { width: 100%; box-sizing: border-box; resize: vertical; min-height: 44px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 6px; color: inherit; font: inherit; padding: 5px 7px; }
    .progress-wrap { height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1); overflow: hidden; margin-top: 6px; }
    .progress-bar { height: 100%; background: linear-gradient(90deg, #22c55e, #4ade80); transition: width .2s; }
    a { color: #6aa9ff; }
  `, __decorateClass$3([r()], AgxMobileBatch["prototype"], "groups", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "expandedId", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "uploadOrder", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "targetPlatform", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "running", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "curIdx", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "curPct", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "logEntries", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "companionOk", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "companionVersion", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "devices", 2), __decorateClass$3([r()], AgxMobileBatch["prototype"], "pinging", 2), AgxMobileBatch = __decorateClass$3([t$1("agx-mobile-batch")], AgxMobileBatch);
var __defProp$2 = Object["defineProperty"], __getOwnPropDesc$2 = Object["getOwnPropertyDescriptor"], __decorateClass$2 = (_0x1f7da2, _0x38d42c, _0x39a8b1, _0xfb87cd) => {
  var _0x10f803 = _0xfb87cd > 1 ? void 0 : _0xfb87cd ? __getOwnPropDesc$2(_0x38d42c, _0x39a8b1) : _0x38d42c;
  for (var _0x130993 = _0x1f7da2["length"] - 1, _0x47a62d; _0x130993 >= 0; _0x130993--) if (_0x47a62d = _0x1f7da2[_0x130993]) _0x10f803 = (_0xfb87cd ? _0x47a62d(_0x38d42c, _0x39a8b1, _0x10f803) : _0x47a62d(_0x10f803)) || _0x10f803;
  if (_0xfb87cd && _0x10f803) __defProp$2(_0x38d42c, _0x39a8b1, _0x10f803);
  return _0x10f803;
};
const log$1 = createLogger("PostMode");
function toLocalYMD(_0x537762) {
  const _0x153348 = _0x537762["getFullYear"](), _0x15c462 = String(_0x537762["getMonth"]() + 1)["padStart"](2, "0"), _0x239faf = String(_0x537762["getDate"]())["padStart"](2, "0");
  return _0x153348 + "-" + _0x15c462 + "-" + _0x239faf;
}
function newId(_0x247d11) {
  return _0x247d11 + "_" + Date["now"]() + "_" + Math["random"]()["toString"](36)["slice"](2, 8);
}
let AgxPostMode = class extends i {
  constructor() {
    super(...arguments), this["groups"] = [], this["expandedId"] = null, this["postType"] = "draft", this["scheduleDate"] = toLocalYMD(/* @__PURE__ */ new Date()), this["scheduleHour"] = String((/* @__PURE__ */ new Date())["getHours"]())["padStart"](2, "0"), this["scheduleMinute"] = (() => {
      const _0x7f4ba6 = (/* @__PURE__ */ new Date())["getMinutes"](), _0x25bf5 = Math["ceil"](_0x7f4ba6 / 5) * 5;
      return String(_0x25bf5 >= 60 ? 55 : _0x25bf5)["padStart"](2, "0");
    })(), this["scheduleInterval"] = 30, this["setDelayTime"] = 5, this["noBasket"] = ![], this["notAiGenerated"] = ![], this["captionGender"] = "", this["uploadOrder"] = "linear", this["platformTab"] = "tiktok", this["running"] = ![], this["logEntries"] = [], this["_fileMap"] = /* @__PURE__ */ new Map();
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["_loadGroups"](), this["_loadSettings"](), this["_messageListener"] = (_0x396ad8, _0x93eadd, _0x401f28) => {
      const _0x5d37e9 = _0x396ad8["type"];
      if (_0x5d37e9 === "PIPELINE_LOG") {
        const _0x11c7f2 = _0x396ad8["payload"];
        this["_addLog"](_0x11c7f2["level"] || "info", _0x11c7f2["message"] || "");
      } else {
        if (_0x5d37e9 === "PIPELINE_ERROR") {
          const _0x2bc44f = _0x396ad8["payload"];
          this["_addLog"]("error", _0x2bc44f["error"] || "Pipeline error"), this["running"] = ![];
        } else {
          if (_0x5d37e9 === "PIPELINE_DONE") this["_addLog"]("success", "โพสทุกคลิปเสร็จ ✓"), this["running"] = ![];
          else {
            if (_0x5d37e9 === "POST_CLIP_FETCH") {
              const _0x5a875b = String(_0x396ad8["clipId"] || ""), _0x356f58 = this["_fileMap"]["get"](_0x5a875b);
              if (!_0x356f58) return _0x401f28({ "success": ![], "error": "file not found in panel" }), ![];
              return this["_fileToDataUrl"](_0x356f58)["then"]((_0x3837cb) => _0x401f28({ "success": !![], "dataUrl": _0x3837cb }))["catch"]((_0xe68a5f) => _0x401f28({ "success": ![], "error": String(_0xe68a5f) })), !![];
            }
          }
        }
      }
      return void 0;
    }, chrome["runtime"]["onMessage"]["addListener"](this["_messageListener"]);
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"]();
    if (this["_messageListener"]) chrome["runtime"]["onMessage"]["removeListener"](this["_messageListener"]);
  }
  ["_addLog"](_0x9c9cf4, _0x2e8130) {
    this["logEntries"] = [...this["logEntries"], { "level": _0x9c9cf4, "message": _0x2e8130, "timestamp": Date["now"]() }];
  }
  async ["_loadGroups"]() {
    try {
      const _0x324782 = await chrome["storage"]["local"]["get"]([AgxPostMode["GROUPS_KEY"]]), _0x4e5ebf = _0x324782[AgxPostMode["GROUPS_KEY"]];
      Array["isArray"](_0x4e5ebf) && (this["groups"] = _0x4e5ebf, log$1["info"]("Loaded " + this["groups"]["length"] + " product groups (files need re-pick)"));
    } catch (_0x2780b2) {
      log$1["error"]("loadGroups fail", _0x2780b2);
    }
  }
  ["_saveGroups"]() {
    chrome["storage"]["local"]["set"]({ [AgxPostMode["GROUPS_KEY"]]: this["groups"] })["catch"]((_0x5dfdf9) => log$1["error"]("saveGroups", _0x5dfdf9));
  }
  async ["_loadSettings"]() {
    try {
      const _0x444d72 = await chrome["storage"]["local"]["get"]([AgxPostMode["SETTINGS_KEY"]]), _0x36562f = _0x444d72[AgxPostMode["SETTINGS_KEY"]];
      if (!_0x36562f) return;
      for (const _0x44b8ae of AgxPostMode["PERSIST_SETTINGS"]) {
        if (_0x36562f[_0x44b8ae] !== void 0) this[_0x44b8ae] = _0x36562f[_0x44b8ae];
      }
      if (this["platformTab"] !== "tiktok") this["platformTab"] = "tiktok";
    } catch (_0x52340a) {
      log$1["error"]("loadSettings", _0x52340a);
    }
  }
  ["_saveSettings"]() {
    const _0x240816 = {};
    for (const _0x3be792 of AgxPostMode["PERSIST_SETTINGS"]) {
      _0x240816[_0x3be792] = this[_0x3be792];
    }
    chrome["storage"]["local"]["set"]({ [AgxPostMode["SETTINGS_KEY"]]: _0x240816 })["catch"]((_0x4fd0ae) => log$1["error"]("saveSettings", _0x4fd0ae));
  }
  ["updated"](_0x1f137f) {
    if (_0x1f137f["has"]("groups")) this["_saveGroups"]();
    for (const _0x2cb490 of AgxPostMode["PERSIST_SETTINGS"]) {
      if (_0x1f137f["has"](_0x2cb490)) {
        this["_saveSettings"]();
        break;
      }
    }
  }
  ["_importJson"]() {
    const _0x188f26 = document["createElement"]("input");
    _0x188f26["type"] = "file", _0x188f26["accept"] = "application/json,.json", _0x188f26["onchange"] = async (_0x57f6b2) => {
      var _a2;
      const _0x15df56 = (_a2 = _0x57f6b2["target"]["files"]) == null ? void 0 : _a2[0];
      if (!_0x15df56) return;
      try {
        const _0x4b8c5f = await _0x15df56["text"](), _0xaeecb2 = JSON["parse"](_0x4b8c5f), _0x366d53 = unwrapImport(_0xaeecb2);
        this["_mergeProductsFromImport"](_0x366d53), this["_addLog"]("success", "📂 นำเข้า " + _0x366d53["length"] + " สินค้าจาก JSON");
      } catch (_0xf79fff) {
        this["_addLog"]("error", "อ่านไฟล์ JSON ไม่สำเร็จ: " + _0xf79fff);
      }
    }, _0x188f26["click"]();
  }
  async ["_importFromAuto"]() {
    try {
      const _0x3013f6 = await chrome["storage"]["local"]["get"](["agx_auto_products"]), _0x56e851 = _0x3013f6["agx_auto_products"];
      if (!Array["isArray"](_0x56e851) || _0x56e851["length"] === 0) {
        this["_addLog"]("warn", "ไม่พบสินค้าใน Auto mode");
        return;
      }
      this["_mergeProductsFromImport"](_0x56e851), this["_addLog"]("success", "🛍 นำเข้า " + _0x56e851["length"] + " สินค้าจาก Auto mode");
    } catch (_0x204cdb) {
      this["_addLog"]("error", "อ่านสินค้า Auto ไม่สำเร็จ: " + _0x204cdb);
    }
  }
  ["_mergeProductsFromImport"](_0x269338) {
    const _0x6badba = new Set(this["groups"]["map"]((_0x878863) => _0x878863["productId"])["filter"](Boolean)), _0x438064 = [];
    for (const _0x33319b of _0x269338) {
      const _0x26ddcf = _0x33319b, _0x4135d5 = String(_0x26ddcf["productId"] || _0x26ddcf["product_id"] || "")["trim"](), _0x5be7e6 = String(_0x26ddcf["basketName"] || "")["trim"](), _0x21b465 = _0x4135d5 || (/^\d{6,}$/["test"](_0x5be7e6) ? _0x5be7e6 : "") || void 0, _0x166b0c = _0x5be7e6 && _0x5be7e6 !== _0x21b465 ? _0x5be7e6["slice"](0, 30) : void 0, _0x563329 = String(_0x26ddcf["name"] || _0x26ddcf["title"] || _0x26ddcf["productName"] || "")["trim"]() || "(ไม่มีชื่อ)";
      if (_0x21b465 && _0x6badba["has"](_0x21b465)) continue;
      const _0x4e612f = (() => {
        const _0x186861 = _0x26ddcf["productImages"];
        if (Array["isArray"](_0x186861) && _0x186861["length"] > 0) {
          const _0x53b046 = String(_0x186861[0] || "")["trim"]();
          if (_0x53b046) return _0x53b046;
        }
        return String(_0x26ddcf["imageUrl"] || _0x26ddcf["cover"] || "")["trim"]() || void 0;
      })(), _0x3c8c9d = String(_0x26ddcf["customCaptionOverride"] || _0x26ddcf["caption"] || "")["trim"]() || void 0;
      _0x438064["push"]({ "id": newId("grp"), "productId": _0x21b465, "productName": _0x563329, "basketName": _0x166b0c, "imageUrl": _0x4e612f, "caption": _0x3c8c9d, "defaultHashtags": typeof _0x26ddcf["hashtags"] === "string" && _0x26ddcf["hashtags"]["trim"]() ? _0x26ddcf["hashtags"] : void 0, "affiliateLink": typeof _0x26ddcf["affiliateLink"] === "string" && _0x26ddcf["affiliateLink"]["trim"]() ? _0x26ddcf["affiliateLink"] : void 0, "clips": [] });
      if (_0x21b465) _0x6badba["add"](_0x21b465);
    }
    this["groups"] = [...this["groups"], ..._0x438064], _0x438064["length"] > 0 && this["expandedId"] === null && (this["expandedId"] = _0x438064[0]["id"]);
  }
  ["_distributeGroupField"](_0x824da1, _0x5f4eab, _0x1f3594) {
    const _0x3e8cc6 = this["groups"]["find"]((_0x49d382) => _0x49d382["id"] === _0x824da1);
    if (!_0x3e8cc6) return;
    const _0x232a7a = this["groups"]["length"] - 1;
    if (_0x232a7a <= 0) {
      this["_addLog"]("warn", "มีสินค้าแค่รายการเดียว — ไม่มีอะไรให้กระจาย");
      return;
    }
    const _0x363174 = ((_0x5f4eab === "defaultHashtags" ? _0x3e8cc6["defaultHashtags"] : _0x3e8cc6["basketName"]) || "")["trim"]();
    if (!confirm('กระจาย "' + _0x1f3594 + '" = ' + (_0x363174 || "(ว่าง)") + "\nไปยังสินค้าอีก " + _0x232a7a + " รายการ? (เขียนทับค่าเดิมของแต่ละสินค้า)")) return;
    this["groups"] = this["groups"]["map"]((_0x2af032) => _0x2af032["id"] === _0x824da1 ? _0x2af032 : { ..._0x2af032, [_0x5f4eab]: _0x363174 || void 0 }), this["_addLog"]("success", '✓ กระจาย "' + _0x1f3594 + '" = ' + (_0x363174 || "(ว่าง)") + " → สินค้าทั้งหมด " + this["groups"]["length"] + " รายการ");
  }
  ["_addProduct"]() {
    const _0x530c5 = newId("grp");
    this["groups"] = [...this["groups"], { "id": _0x530c5, "productName": "สินค้าใหม่", "clips": [] }], this["expandedId"] = _0x530c5;
  }
  ["_removeProduct"](_0x1c6892) {
    const _0x36a217 = this["groups"]["find"]((_0x52bcaf) => _0x52bcaf["id"] === _0x1c6892);
    if (!_0x36a217) return;
    if (_0x36a217["clips"]["length"] > 0 && !confirm('ลบสินค้า "' + _0x36a217["productName"] + '" และคลิป ' + _0x36a217["clips"]["length"] + " คลิป?")) return;
    for (const _0xc6995d of _0x36a217["clips"]) this["_fileMap"]["delete"](_0xc6995d["id"]);
    this["groups"] = this["groups"]["filter"]((_0x3a47fd) => _0x3a47fd["id"] !== _0x1c6892);
    if (this["expandedId"] === _0x1c6892) this["expandedId"] = null;
  }
  ["_clearAll"]() {
    if (this["groups"]["length"] === 0) return;
    if (!confirm("ลบสินค้าทั้งหมด " + this["groups"]["length"] + " รายการ?")) return;
    this["_fileMap"]["clear"](), this["groups"] = [], this["expandedId"] = null;
  }
  ["_updateProduct"](_0x18835e, _0x4249d1) {
    this["groups"] = this["groups"]["map"]((_0x4528ce) => _0x4528ce["id"] === _0x18835e ? { ..._0x4528ce, ..._0x4249d1 } : _0x4528ce);
  }
  ["_toggleProduct"](_0x38c545) {
    this["expandedId"] = this["expandedId"] === _0x38c545 ? null : _0x38c545;
  }
  ["_pickClips"](_0x17adff, _0x2bcda7) {
    const _0x1869e4 = _0x2bcda7["target"], _0x203ef1 = _0x1869e4["files"];
    if (!_0x203ef1 || _0x203ef1["length"] === 0) return;
    const _0x303288 = [];
    for (const _0x1af8b3 of Array["from"](_0x203ef1)) {
      const _0x242ee7 = newId("clip");
      this["_fileMap"]["set"](_0x242ee7, _0x1af8b3), _0x303288["push"]({ "id": _0x242ee7, "videoName": _0x1af8b3["name"], "videoSize": _0x1af8b3["size"] });
    }
    const _0x3f6746 = this["groups"]["find"]((_0x50df98) => _0x50df98["id"] === _0x17adff);
    _0x3f6746 && this["_updateProduct"](_0x17adff, { "clips": [..._0x3f6746["clips"], ..._0x303288] }), _0x1869e4["value"] = "";
  }
  ["_removeClip"](_0xeb9ad6, _0x32f378) {
    const _0x47882e = this["groups"]["find"]((_0x49f77b) => _0x49f77b["id"] === _0xeb9ad6);
    if (!_0x47882e) return;
    this["_fileMap"]["delete"](_0x32f378), this["_updateProduct"](_0xeb9ad6, { "clips": _0x47882e["clips"]["filter"]((_0x3b1aa1) => _0x3b1aa1["id"] !== _0x32f378) });
  }
  ["_buildOrderedClips"]() {
    const _0x5972f3 = this["groups"]["map"]((_0x22f1fb) => ({ "g": _0x22f1fb, "clips": _0x22f1fb["clips"]["filter"]((_0x300957) => this["_fileMap"]["has"](_0x300957["id"])) }))["filter"]((_0x24b8e3) => _0x24b8e3["clips"]["length"] > 0);
    if (this["uploadOrder"] === "linear") {
      const _0x1902fc = [];
      for (const { g: _0x1783a8, clips: _0x31226f } of _0x5972f3) {
        for (const _0x12e917 of _0x31226f) _0x1902fc["push"]({ "groupRef": _0x1783a8, "clip": _0x12e917 });
      }
      return _0x1902fc;
    }
    const _0x2e592f = [], _0x1b5e91 = _0x5972f3["reduce"]((_0x3ac399, _0x4bc1a8) => Math["max"](_0x3ac399, _0x4bc1a8["clips"]["length"]), 0);
    for (let _0x55358b = 0; _0x55358b < _0x1b5e91; _0x55358b++) {
      for (const { g: _0x53f88f, clips: _0x28dea0 } of _0x5972f3) {
        if (_0x55358b < _0x28dea0["length"]) _0x2e592f["push"]({ "groupRef": _0x53f88f, "clip": _0x28dea0[_0x55358b] });
      }
    }
    return _0x2e592f;
  }
  ["_totalReadyClips"]() {
    let _0x1d6540 = 0;
    for (const _0x2a9839 of this["groups"]) {
      for (const _0x5f12d2 of _0x2a9839["clips"]) if (this["_fileMap"]["has"](_0x5f12d2["id"])) _0x1d6540++;
    }
    return _0x1d6540;
  }
  async ["_fileToDataUrl"](_0x48527a) {
    return new Promise((_0x5e1914, _0x446d46) => {
      const _0x4fa446 = new FileReader();
      _0x4fa446["onload"] = () => _0x5e1914(_0x4fa446["result"]), _0x4fa446["onerror"] = () => _0x446d46(_0x4fa446["error"]), _0x4fa446["readAsDataURL"](_0x48527a);
    });
  }
  async ["_start"]() {
    const _0x5b51db = this["_buildOrderedClips"]();
    if (_0x5b51db["length"] === 0) {
      this["_addLog"]("warn", "ยังไม่มีคลิปที่พร้อมโพส (เลือกไฟล์วิดีโอในแต่ละสินค้า)");
      return;
    }
    this["running"] = !![], this["logEntries"] = [], this["_addLog"]("info", "▶ เริ่มโพส " + _0x5b51db["length"] + " คลิป (" + (this["uploadOrder"] === "linear" ? "ตามลำดับ" : "วนตามสินค้า") + ")");
    const _0x1cb77a = _0x5b51db["map"](({ groupRef: _0x2966e3, clip: _0x5ac8ce }) => ({ "id": _0x5ac8ce["id"], "videoName": _0x5ac8ce["videoName"], "videoSize": _0x5ac8ce["videoSize"], "caption": _0x5ac8ce["caption"] || _0x2966e3["caption"] || "", "hashtags": _0x5ac8ce["hashtags"] || _0x2966e3["defaultHashtags"] || "", "basketName": (_0x2966e3["productId"] || _0x2966e3["basketName"] || "")["trim"](), "basketLabel": (_0x2966e3["basketName"] || "")["trim"]() || void 0, "productName": _0x2966e3["productName"] || "" }));
    for (let _0x91c505 = 0; _0x91c505 < _0x1cb77a["length"]; _0x91c505++) {
      const _0x2775f2 = _0x1cb77a[_0x91c505];
      this["_addLog"]("info", "📁 [" + (_0x91c505 + 1) + "/" + _0x1cb77a["length"] + '] "' + _0x5b51db[_0x91c505]["groupRef"]["productName"] + '" → ' + _0x2775f2["videoName"] + " (" + (_0x2775f2["videoSize"] / 1024 / 1024)["toFixed"](1) + " MB) — รอ background fetch");
    }
    const _0x56e163 = { "postType": this["postType"], "scheduleDate": this["scheduleDate"], "scheduleHour": this["scheduleHour"], "scheduleMinute": this["scheduleMinute"], "scheduleInterval": this["scheduleInterval"], "setDelayTime": this["setDelayTime"], "noBasket": this["noBasket"], "notAiGenerated": this["notAiGenerated"], "captionGender": this["captionGender"] || void 0, "uploadOrder": this["uploadOrder"] };
    this["dispatchEvent"](new CustomEvent("post-start", { "detail": { "clips": _0x1cb77a, "settings": _0x56e163 }, "bubbles": !![], "composed": !![] }));
  }
  ["_stop"]() {
    chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_STOP" })["catch"](() => {
    }), this["dispatchEvent"](new CustomEvent("post-stop", { "bubbles": !![], "composed": !![] })), this["running"] = ![];
  }
  ["render"]() {
    return b`
      <div class="platform-tabs">
        <button class="platform-tab active">📮 TikTok</button>
        <button class="platform-tab soon" disabled title="เร็วๆ นี้">📘 FB <span class="soon-badge">Soon</span></button>
        <button class="platform-tab soon" disabled title="เร็วๆ นี้">📱 มือถือ <span class="soon-badge">Soon</span></button>
        <button class="platform-tab soon" disabled title="เร็วๆ นี้">📺 YT <span class="soon-badge">Soon</span></button>
      </div>
      ${this["_renderTikTok"]()}
    `;
  }
  ["_renderTikTok"]() {
    const _0xa0ba66 = this["_totalReadyClips"](), _0xffce4a = this["groups"]["length"], _0x5321ae = this["_buildOrderedClips"]();
    return b`
      <div class="toolbar">
        <button class="toolbar-btn" @click=${this["_importJson"]}>📂 อ่านไฟล์ JSON</button>
        <button class="toolbar-btn" @click=${this["_importFromAuto"]}>🛍 จาก Auto mode</button>
        <button class="toolbar-btn" @click=${this["_addProduct"]}>+ เพิ่มสินค้า</button>
        ${this["groups"]["length"] > 0 ? b`
          <button class="toolbar-btn danger" @click=${this["_clearAll"]}>🗑 ล้างทั้งหมด</button>
        ` : ""}
      </div>

      ${_0xffce4a > 0 ? b`
        <div class="summary">
          📦 ${_0xffce4a} สินค้า · 🎬 ${_0xa0ba66} คลิปพร้อมโพส
          ${_0xa0ba66 > 0 ? b` · ลำดับ: <strong>${this["uploadOrder"] === "linear" ? "ตามลำดับ" : "วนตามสินค้า"}</strong>` : ""}
        </div>
      ` : ""}

      <agx-drawer label="📦 สินค้าและคลิป (${_0xffce4a})" open>
        ${this["groups"]["map"]((_0x62db5c) => this["_renderGroup"](_0x62db5c))}
        ${this["groups"]["length"] === 0 ? b`
          <div class="hint">ยังไม่มีสินค้า — กด "📂 อ่านไฟล์ JSON" หรือ "🛍 จาก Auto mode" หรือ "+ เพิ่มสินค้า"</div>
        ` : ""}
      </agx-drawer>

      <agx-drawer label="⚙️ ตั้งค่าการโพส" open>
        <div class="hint">ลำดับการอัพโหลด:</div>
        <div class="radio-group">
          <label>
            <input type="radio" name="uploadOrder" .checked=${this["uploadOrder"] === "linear"}
              @change=${() => {
      this["uploadOrder"] = "linear";
    }} />
            อัพคลิปตามลำดับ
          </label>
          <label>
            <input type="radio" name="uploadOrder" .checked=${this["uploadOrder"] === "roundrobin"}
              @change=${() => {
      this["uploadOrder"] = "roundrobin";
    }} />
            วนตามสินค้า
          </label>
        </div>

        <agx-select
          label="📅 รูปแบบการโพส"
          .value=${this["postType"]}
          .options=${[{ "id": "draft", "label": "บันทึกแบบร่าง" }, { "id": "now", "label": "โพสเลย" }, { "id": "schedule", "label": "ตั้งเวลา (ล่วงหน้า)" }]}
          @change=${(_0x341116) => {
      this["postType"] = _0x341116["detail"]["value"];
    }}
        ></agx-select>

        ${this["postType"] === "schedule" ? b`
          <div class="date-row">
            <agx-input label="📅 วันที่โพส" type="date" .value=${this["scheduleDate"]}
              @input=${(_0x3f646f) => {
      this["scheduleDate"] = _0x3f646f["detail"]["value"];
    }}></agx-input>
            <button class="quick-btn" @click=${() => {
      this["scheduleDate"] = toLocalYMD(/* @__PURE__ */ new Date());
    }}>วันนี้</button>
            <button class="quick-btn" @click=${() => {
      const _0x30bbc6 = /* @__PURE__ */ new Date();
      _0x30bbc6["setDate"](_0x30bbc6["getDate"]() + 1), this["scheduleDate"] = toLocalYMD(_0x30bbc6);
    }}>พรุ่งนี้</button>
          </div>
          <div class="settings-row">
            <agx-select label="⏰ ชั่วโมง" .value=${this["scheduleHour"]}
              .options=${Array["from"]({ "length": 24 }, (_0x37974c, _0x70576b) => {
      const _0x5b9da9 = String(_0x70576b)["padStart"](2, "0");
      return { "id": _0x5b9da9, "label": _0x5b9da9 };
    })}
              @change=${(_0x4dfff9) => {
      this["scheduleHour"] = _0x4dfff9["detail"]["value"];
    }}></agx-select>
            <agx-select label="นาที" .value=${this["scheduleMinute"]}
              .options=${[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]["map"]((_0xa628f0) => {
      const _0x35a933 = String(_0xa628f0)["padStart"](2, "0");
      return { "id": _0x35a933, "label": _0x35a933 };
    })}
              @change=${(_0x22e1bf) => {
      this["scheduleMinute"] = _0x22e1bf["detail"]["value"];
    }}></agx-select>
          </div>
          <agx-select label="⏳ ห่างกันต่อคลิป" .value=${String(this["scheduleInterval"])}
            .options=${[{ "id": "5", "label": "5 นาที" }, { "id": "10", "label": "10 นาที" }, { "id": "15", "label": "15 นาที" }, { "id": "30", "label": "30 นาที" }, { "id": "60", "label": "1 ชั่วโมง" }, { "id": "120", "label": "2 ชั่วโมง" }, { "id": "180", "label": "3 ชั่วโมง" }, { "id": "360", "label": "6 ชั่วโมง" }]}
            @change=${(_0x2e4826) => {
      this["scheduleInterval"] = Number(_0x2e4826["detail"]["value"]) || 30;
    }}></agx-select>
          ${_0x5321ae["length"] > 0 ? b`
            <div class="hint">
              คลิปแรก: ${this["_fmtScheduleAt"](0)} · คลิปสุดท้าย: ${this["_fmtScheduleAt"](_0x5321ae["length"] - 1)}
            </div>
          ` : ""}
        ` : ""}

        <agx-select label="⏱ ดีเลย์ระหว่างคลิป" .value=${String(this["setDelayTime"])}
          .options=${[{ "id": "3", "label": "3 วินาที" }, { "id": "5", "label": "5 วินาที" }, { "id": "10", "label": "10 วินาที" }, { "id": "30", "label": "30 วินาที" }, { "id": "60", "label": "1 นาที" }, { "id": "300", "label": "5 นาที" }, { "id": "600", "label": "10 นาที" }, { "id": "900", "label": "15 นาที" }, { "id": "1800", "label": "30 นาที" }, { "id": "3600", "label": "1 ชั่วโมง" }]}
          @change=${(_0x1b4617) => {
      this["setDelayTime"] = Number(_0x1b4617["detail"]["value"]) || 5;
    }}></agx-select>

        <label class="checkbox-row">
          <input type="checkbox" .checked=${this["noBasket"]}
            @change=${(_0x482722) => {
      this["noBasket"] = _0x482722["target"]["checked"];
    }} />
          🧺 ไม่ปักตระกร้า (ข้าม basket pin ทุกคลิป)
        </label>

        <label class="checkbox-row">
          <input type="checkbox" .checked=${this["notAiGenerated"]}
            @change=${(_0x1edef3) => {
      this["notAiGenerated"] = _0x1edef3["target"]["checked"];
    }} />
          🤖 ไม่ใช่ AI-generated content (ข้ามขั้นตอนกดเปิด "AI-generated content" ตอนโพส)
        </label>

        <agx-select label="🗣️ เพศผู้พูดในแคปชั่น (เฉพาะตอนให้ AI คิดแคปชั่นให้)"
          .value=${this["captionGender"]}
          .options=${[{ "id": "", "label": "ไม่ระบุ (โทนเดิม)" }, { "id": "female", "label": "ผู้หญิง — ค่ะ/นะคะ/จ้า" }, { "id": "male", "label": "ผู้ชาย — ครับ/นะครับ/ผม" }, { "id": "neutral", "label": "กลาง ๆ — ไม่เจาะจงเพศ" }]}
          @change=${(_0x3fef9d) => {
      const _0x4a96cc = _0x3fef9d["detail"]["value"];
      this["captionGender"] = _0x4a96cc === "female" || _0x4a96cc === "male" || _0x4a96cc === "neutral" ? _0x4a96cc : "";
    }}
        ></agx-select>
        <div class="hint">ใช้เมื่อช่อง Caption ว่าง แล้วระบบให้ AI คิดให้ — กำหนดคำลงท้ายให้ตรงเพศผู้พูดในคลิป</div>
      </agx-drawer>

      ${this["running"] ? b`<agx-button variant="danger" size="lg" full @click=${this["_stop"]}>🛑 หยุด</agx-button>` : b`<agx-button variant="primary" size="lg" full
            ?disabled=${_0xa0ba66 === 0}
            @click=${this["_start"]}>📮 เริ่มโพส (${_0xa0ba66} คลิป)</agx-button>`}

      ${this["logEntries"]["length"] > 0 ? b`
        <div style="margin-top:12px">
          <agx-log .entries=${this["logEntries"]}></agx-log>
        </div>
      ` : ""}
    `;
  }
  ["_fmtScheduleAt"](_0x25e2f4) {
    if (this["postType"] !== "schedule" || !this["scheduleDate"]) return "";
    const _0x351521 = new Date(this["scheduleDate"]);
    _0x351521["setHours"](Number(this["scheduleHour"] || "09")), _0x351521["setMinutes"](Number(this["scheduleMinute"] || "00")), _0x351521["setSeconds"](0), _0x351521["setMilliseconds"](0);
    const _0xb47eed = Number(this["scheduleInterval"]) || 30, _0x2db988 = _0x351521["getTime"]() + _0x25e2f4 * _0xb47eed * 6e4;
    return new Date(_0x2db988)["toLocaleString"]("th-TH", { "hour": "2-digit", "minute": "2-digit", "day": "2-digit", "month": "2-digit" });
  }
  ["_renderGroup"](_0x43b62b) {
    var _a2;
    const _0x6fc52b = this["expandedId"] === _0x43b62b["id"], _0x173a4d = _0x43b62b["clips"]["filter"]((_0x515e5e) => this["_fileMap"]["has"](_0x515e5e["id"]))["length"], _0x24b690 = !this["noBasket"] && !_0x43b62b["productId"] && !((_a2 = _0x43b62b["basketName"]) == null ? void 0 : _a2["trim"]());
    return b`
      <div class="product-card ${_0x6fc52b ? "" : "collapsed"}">
        <div class="product-header" @click=${() => this["_toggleProduct"](_0x43b62b["id"])}>
          ${_0x43b62b["imageUrl"] ? b`<img class="product-thumb" src=${_0x43b62b["imageUrl"]} alt=${_0x43b62b["productName"]} loading="lazy" />` : b`<div class="product-thumb-placeholder">📦</div>`}
          <div class="product-info">
            <div class="product-title">${_0x43b62b["productName"] || "(ไม่มีชื่อ)"}</div>
            <div class="product-sub">
              ${_0x173a4d}/${_0x43b62b["clips"]["length"]} คลิปพร้อม
              ${_0x43b62b["productId"] ? b` · ID: <code>${_0x43b62b["productId"]["slice"](0, 14)}${_0x43b62b["productId"]["length"] > 14 ? "…" : ""}</code>` : ""}
              ${_0x24b690 ? b` · <span class="basket-warn">⚠ ไม่มี Product ID / ชื่อตระกร้า — pin ไม่ได้</span>` : ""}
            </div>
          </div>
          <div class="product-actions">
            <button class="icon-btn danger" title="ลบสินค้า"
              @click=${(_0x4d9b4c) => {
      _0x4d9b4c["stopPropagation"](), this["_removeProduct"](_0x43b62b["id"]);
    }}>🗑</button>
            <span style="font-size:14px;width:16px;text-align:center">${_0x6fc52b ? "▼" : "▶"}</span>
          </div>
        </div>
        ${_0x6fc52b ? b`
          <div class="product-body">
            <label class="clip-section-header">
              <span class="icon">🎬</span>
              <span>${_0x43b62b["clips"]["length"] === 0 ? "เลือกคลิปวิดีโอ (เลือกได้หลายไฟล์)" : "คลิป " + _0x43b62b["clips"]["length"] + " ไฟล์ — คลิกเพื่อเพิ่มอีก"}</span>
              <input type="file" accept="video/*" multiple style="display:none"
                @change=${(_0x5a3b3c) => this["_pickClips"](_0x43b62b["id"], _0x5a3b3c)} />
            </label>
            ${_0x43b62b["clips"]["map"]((_0x3eb1a5) => this["_renderClipRow"](_0x43b62b["id"], _0x3eb1a5))}

            <agx-input label="🛒 ชื่อสินค้า (สำหรับแสดง — ใช้เป็นชื่อตระกร้าด้วยถ้าไม่กรอกช่องด้านล่าง)" .value=${_0x43b62b["productName"]}
              @input=${(_0x49d8d5) => this["_updateProduct"](_0x43b62b["id"], { "productName": _0x49d8d5["detail"]["value"] })}></agx-input>
            <agx-input label="🛍 Product ID (TikTok)" .value=${_0x43b62b["productId"] || ""}
              placeholder="(เช่น 17347...)"
              @input=${(_0x23fe68) => this["_updateProduct"](_0x43b62b["id"], { "productId": _0x23fe68["detail"]["value"] || void 0 })}></agx-input>
            <div class="field-with-dist">
              <agx-input label="🧺 ชื่อตระกร้า / คำค้นสินค้า (สำรองถ้าไม่มี Product ID — ≤30 ตัว)"
                .value=${_0x43b62b["basketName"] || ""}
                @input=${(_0x1134bc) => this["_updateProduct"](_0x43b62b["id"], { "basketName": (_0x1134bc["detail"]["value"] || "")["slice"](0, 30) || void 0 })}></agx-input>
              <button class="dist-btn" type="button" title="คัดลอกชื่อตระกร้านี้ไปยังสินค้าทุกรายการ"
                @click=${() => this["_distributeGroupField"](_0x43b62b["id"], "basketName", "ชื่อตระกร้า")}>⤵ ทุกสินค้า</button>
            </div>
            <agx-input label="📝 Caption" type="textarea" .rows=${2}
              .value=${_0x43b62b["caption"] || ""}
              @input=${(_0x2a1c21) => this["_updateProduct"](_0x43b62b["id"], { "caption": _0x2a1c21["detail"]["value"] || void 0 })}></agx-input>
            <div class="field-with-dist">
              <agx-input label="# Hashtags" placeholder="แยกด้วย , หรือเว้นวรรค"
                .value=${_0x43b62b["defaultHashtags"] || ""}
                @input=${(_0x4f5707) => this["_updateProduct"](_0x43b62b["id"], { "defaultHashtags": _0x4f5707["detail"]["value"] || void 0 })}></agx-input>
              <button class="dist-btn" type="button" title="คัดลอกแฮชแท็กชุดนี้ไปยังสินค้าทุกรายการ"
                @click=${() => this["_distributeGroupField"](_0x43b62b["id"], "defaultHashtags", "แฮชแท็ก")}>⤵ ทุกสินค้า</button>
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }
  ["_renderClipRow"](_0x38be3c, _0x57a724) {
    const _0x4a6737 = this["_fileMap"]["has"](_0x57a724["id"]);
    return b`
      <div class="clip-row">
        <span>${_0x4a6737 ? "🎬" : "⚠"}</span>
        <span class="name">${_0x57a724["videoName"]}</span>
        <span class="size">${(_0x57a724["videoSize"] / 1024 / 1024)["toFixed"](1)} MB</span>
        ${!_0x4a6737 ? b`<span style="color:#f59e0b;font-size:10px">(re-pick)</span>` : ""}
        <button class="remove-btn" @click=${() => this["_removeClip"](_0x38be3c, _0x57a724["id"])}>✕</button>
      </div>
    `;
  }
};
AgxPostMode["styles"] = i$3`
    :host { display: block; padding: 10px; color: var(--agx-text, #e4e6eb); font-size: 13px; }
    .platform-tabs {
      display: flex; gap: 4px; margin-bottom: 12px;
      background: var(--agx-bg-deep, #000); border-radius: 10px; padding: 3px;
    }
    .platform-tab {
      flex: 1; padding: 8px 6px; border: none; border-radius: 8px;
      background: transparent; color: var(--agx-text-muted, #64748b);
      font: inherit; font-size: 12px; font-weight: 600; cursor: pointer;
      transition: all .15s; display: flex; align-items: center; justify-content: center; gap: 5px;
    }
    .platform-tab:hover:not(.soon) { color: var(--agx-text-secondary, #94a3b8); background: rgba(255,255,255,0.04); }
    .platform-tab.active { background: var(--agx-accent, #4A8DFF); color: #fff; box-shadow: 0 2px 10px rgba(47,107,255,0.3); }
    .platform-tab.active.fb { background: #4267B2; box-shadow: 0 2px 10px rgba(66,103,178,0.3); }
    .platform-tab.active.mob { background: #16a34a; box-shadow: 0 2px 10px rgba(22,163,74,0.3); }
    .platform-tab.soon { opacity: 0.45; cursor: not-allowed; }
    .soon-badge {
      font-size: 8px; font-weight: 700; padding: 1px 4px; border-radius: 3px;
      background: var(--agx-warning, #f59e0b); color: #000; letter-spacing: 0.3px;
    }
    .toolbar {
      display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;
    }
    .toolbar-btn {
      padding: 6px 10px; font-size: 12px; cursor: pointer;
      background: rgba(74,141,255,0.1); border: 1px solid rgba(74,141,255,0.4);
      color: #4A8DFF; border-radius: 6px;
    }
    .toolbar-btn:hover { background: rgba(74,141,255,0.2); }
    .toolbar-btn.danger { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.4); color: #ef4444; }
    .product-card {
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      background: rgba(255,255,255,0.03);
    }
    .product-card.collapsed { padding: 6px 10px; }
    .product-header {
      display: flex; align-items: center; gap: 8px;
      cursor: pointer; font-size: 12px;
    }
    .product-thumb {
      width: 44px; height: 44px; border-radius: 6px;
      object-fit: cover; flex-shrink: 0;
      background: rgba(255,255,255,0.05);
    }
    .product-thumb-placeholder {
      width: 44px; height: 44px; border-radius: 6px;
      background: rgba(255,255,255,0.05); flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; opacity: 0.4;
    }
    .product-info { flex: 1; min-width: 0; }
    .product-title {
      font-weight: 700; color: var(--agx-accent, #4A8DFF);
      overflow: hidden; text-overflow: ellipsis; display: -webkit-box;
      -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    }
    .product-sub { font-size: 11px; color: var(--agx-text-muted, #888); margin-top: 2px; }
    .product-actions { display: flex; gap: 4px; flex-shrink: 0; align-items: center; }
    .icon-btn {
      width: 28px; height: 28px; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; border: 1px solid transparent;
      background: transparent; font-size: 14px;
    }
    .icon-btn:hover { background: rgba(255,255,255,0.05); }
    .icon-btn.danger {
      color: #ef4444;
      border-color: rgba(239,68,68,0.4);
      background: rgba(239,68,68,0.1);
    }
    .icon-btn.danger:hover { background: rgba(239,68,68,0.2); }
    .product-body { margin-top: 10px; display: flex; flex-direction: column; gap: 8px; }
    .clip-row {
      display: flex; gap: 6px; align-items: center;
      padding: 6px 8px; background: rgba(0,0,0,0.2); border-radius: 6px;
      font-size: 11px;
    }
    .clip-row .name { flex: 1; word-break: break-all; }
    .clip-row .size { color: var(--agx-text-muted, #888); white-space: nowrap; }
    .file-picker-btn {
      padding: 6px 10px; background: var(--agx-accent, #4A8DFF); color: #fff;
      border: none; border-radius: 6px; font-size: 12px; cursor: pointer;
    }
    .clip-section-header {
      display: flex; align-items: center; justify-content: center;
      gap: 8px;
      padding: 16px 14px; cursor: pointer;
      background: linear-gradient(135deg, rgba(74,141,255,0.18), rgba(74,141,255,0.08));
      border: 2px dashed rgba(74,141,255,0.6);
      color: #4A8DFF; border-radius: 10px;
      font-size: 15px; font-weight: 700;
      text-align: center;
      transition: all 0.15s;
    }
    .clip-section-header:hover {
      background: linear-gradient(135deg, rgba(74,141,255,0.3), rgba(74,141,255,0.15));
      border-color: rgba(74,141,255,0.9);
      transform: translateY(-1px);
    }
    .clip-section-header .icon { font-size: 22px; }
    .remove-btn {
      background: rgba(239,68,68,0.15); color: #ef4444;
      border: 1px solid rgba(239,68,68,0.4);
      padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;
    }
    .add-product-btn {
      width: 100%; padding: 10px;
      background: rgba(74,141,255,0.1); border: 1px dashed rgba(74,141,255,0.4);
      color: #4A8DFF; border-radius: 8px; cursor: pointer; font-size: 13px;
      margin-bottom: 12px;
    }
    .add-product-btn:hover { background: rgba(74,141,255,0.2); }
    .field-with-dist { display: flex; align-items: flex-end; gap: 6px; }
    .field-with-dist > agx-input { flex: 1; }
    .dist-btn {
      flex-shrink: 0; padding: 5px 8px; font-size: 10px; font-weight: 600; white-space: nowrap;
      cursor: pointer; border-radius: 5px;
      background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.45); color: #4ade80;
    }
    .dist-btn:hover { background: rgba(34,197,94,0.24); border-color: rgba(34,197,94,0.7); }
    .settings-row { display: flex; gap: 8px; margin-top: 8px; }
    .settings-row > * { flex: 1; }
    .checkbox-row {
      display: flex; align-items: center; gap: 6px;
      font-size: 12px; cursor: pointer; margin-top: 8px;
    }
    .checkbox-row input[type="checkbox"] {
      width: 14px; height: 14px; cursor: pointer;
      accent-color: var(--agx-accent, #2F6BFF);
    }
    .date-row { display: flex; gap: 6px; align-items: flex-end; margin-top: 8px; }
    .date-row > :first-child { flex: 1; }
    .quick-btn {
      padding: 6px 10px; font-size: 12px; border-radius: 6px;
      border: 1px solid rgba(74,141,255,0.4);
      background: rgba(74,141,255,0.15); color: #4A8DFF; cursor: pointer;
    }
    .radio-group {
      display: flex; gap: 12px; margin-top: 8px;
      padding: 8px; background: rgba(0,0,0,0.2); border-radius: 6px;
    }
    .radio-group label {
      display: flex; align-items: center; gap: 6px; cursor: pointer;
      font-size: 12px;
    }
    .hint {
      font-size: 11px; color: var(--agx-text-muted, #888);
      margin: 4px 0 6px; line-height: 1.4;
    }
    .basket-warn { color: #f59e0b; }
    .summary {
      padding: 8px 10px; background: rgba(74,141,255,0.08);
      border: 1px solid rgba(74,141,255,0.3); border-radius: 6px;
      font-size: 12px; margin-bottom: 10px;
    }
  `, AgxPostMode["GROUPS_KEY"] = "agx_post_groups", AgxPostMode["SETTINGS_KEY"] = "agx_post_settings", AgxPostMode["PERSIST_SETTINGS"] = ["postType", "scheduleDate", "scheduleHour", "scheduleMinute", "scheduleInterval", "setDelayTime", "noBasket", "notAiGenerated", "captionGender", "uploadOrder", "platformTab"], __decorateClass$2([r()], AgxPostMode["prototype"], "groups", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "expandedId", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "postType", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "scheduleDate", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "scheduleHour", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "scheduleMinute", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "scheduleInterval", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "setDelayTime", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "noBasket", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "notAiGenerated", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "captionGender", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "uploadOrder", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "platformTab", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "running", 2), __decorateClass$2([r()], AgxPostMode["prototype"], "logEntries", 2), AgxPostMode = __decorateClass$2([t$1("agx-post-mode")], AgxPostMode);
var __defProp$1 = Object["defineProperty"], __getOwnPropDesc$1 = Object["getOwnPropertyDescriptor"], __decorateClass$1 = (_0x1276b1, _0x39daa8, _0x551a65, _0x28a5d3) => {
  var _0x3ba373 = _0x28a5d3 > 1 ? void 0 : _0x28a5d3 ? __getOwnPropDesc$1(_0x39daa8, _0x551a65) : _0x39daa8;
  for (var _0x4cf53d = _0x1276b1["length"] - 1, _0x675c7d; _0x4cf53d >= 0; _0x4cf53d--) if (_0x675c7d = _0x1276b1[_0x4cf53d]) _0x3ba373 = (_0x28a5d3 ? _0x675c7d(_0x39daa8, _0x551a65, _0x3ba373) : _0x675c7d(_0x3ba373)) || _0x3ba373;
  if (_0x28a5d3 && _0x3ba373) __defProp$1(_0x39daa8, _0x551a65, _0x3ba373);
  return _0x3ba373;
};
let AgxGlobalLog = class extends i {
  constructor() {
    super(...arguments), this["entries"] = [], this["expanded"] = !![], this["autoScroll"] = !![], this["_listener"] = null, this["_toggleExpand"] = () => {
      this["expanded"] = !this["expanded"];
    }, this["_copyAll"] = () => {
      const _0x5b69ce = this["entries"]["map"]((_0x53f2fe) => "[" + this["_fmt"](_0x53f2fe["timestamp"]) + "] [" + _0x53f2fe["level"] + "] " + _0x53f2fe["message"])["join"]("\n");
      navigator["clipboard"]["writeText"](_0x5b69ce)["catch"](() => {
      });
    }, this["_clear"] = () => {
      if (this["entries"]["length"] === 0) return;
      if (!confirm("ล้าง log " + this["entries"]["length"] + " รายการ?")) return;
      this["entries"] = [], this["_persist"]();
    };
  }
  ["connectedCallback"]() {
    super["connectedCallback"](), this["_loadPersisted"](), this["_listener"] = (_0x1b76e3) => {
      const _0x5d5316 = _0x1b76e3["type"];
      if (_0x5d5316 === "PIPELINE_LOG") {
        const _0x1e9c45 = _0x1b76e3["payload"], _0x3f4de0 = _0x1e9c45["message"] || "";
        if (shouldDropInRelease(_0x3f4de0)) return;
        this["_addEntry"]({ "level": _0x1e9c45["level"] || "info", "message": _0x3f4de0, "timestamp": Date["now"]() }, _0x1e9c45["replace"] === !![]);
      } else {
        if (_0x5d5316 === "PIPELINE_ERROR") {
          const _0x9c7517 = _0x1b76e3["payload"];
          this["_addEntry"]({ "level": "error", "message": _0x9c7517["error"] || "Pipeline error", "timestamp": Date["now"]() });
        } else _0x5d5316 === "PIPELINE_DONE" && this["_addEntry"]({ "level": "success", "message": "Pipeline เสร็จสิ้น", "timestamp": Date["now"]() });
      }
    }, chrome["runtime"]["onMessage"]["addListener"](this["_listener"]);
  }
  ["disconnectedCallback"]() {
    super["disconnectedCallback"](), this["_listener"] && (chrome["runtime"]["onMessage"]["removeListener"](this["_listener"]), this["_listener"] = null);
  }
  async ["_loadPersisted"]() {
    try {
      const _0x491c23 = await chrome["storage"]["local"]["get"]([AgxGlobalLog["STORAGE_KEY"]]), _0x28f0d3 = _0x491c23[AgxGlobalLog["STORAGE_KEY"]];
      if (Array["isArray"](_0x28f0d3)) this["entries"] = _0x28f0d3["slice"](-AgxGlobalLog["MAX_ENTRIES"]);
    } catch {
    }
  }
  ["_persist"]() {
    chrome["storage"]["local"]["set"]({ [AgxGlobalLog["STORAGE_KEY"]]: this["entries"]["slice"](-AgxGlobalLog["MAX_ENTRIES"]) })["catch"](() => {
    });
  }
  ["_addEntry"](_0x586dbd, _0x9fca51 = ![]) {
    if (_0x9fca51 && this["entries"]["length"] > 0) {
      const _0x93a8a4 = [...this["entries"]];
      _0x93a8a4[_0x93a8a4["length"] - 1] = _0x586dbd, this["entries"] = _0x93a8a4;
    } else this["entries"] = [...this["entries"], _0x586dbd]["slice"](-AgxGlobalLog["MAX_ENTRIES"]);
    this["_persist"]();
  }
  get ["errorCount"]() {
    return this["entries"]["filter"]((_0x2dcb95) => _0x2dcb95["level"] === "error")["length"];
  }
  get ["hasActivity"]() {
    const _0x1b0fdf = this["entries"][this["entries"]["length"] - 1];
    return _0x1b0fdf ? Date["now"]() - _0x1b0fdf["timestamp"] < 3e3 : ![];
  }
  ["render"]() {
    const _0x51e223 = this["entries"]["length"], _0x462b21 = this["errorCount"], _0x373cd8 = _0x462b21 > 0 ? "error" : this["hasActivity"] ? "active" : "";
    return b`
      <div class="header" @click=${this["_toggleExpand"]}>
        <span class="title">
          <span class="dot ${_0x373cd8}"></span>
          📋 Log
          <span class="count">${_0x51e223}</span>
          ${_0x462b21 > 0 ? b`<span class="error-badge">${_0x462b21} err</span>` : ""}
        </span>
        <div class="actions" @click=${(_0x190cc6) => _0x190cc6["stopPropagation"]()}>
          <button class="action-btn" @click=${this["_copyAll"]} title="คัดลอกทั้งหมด">📋</button>
          <button class="action-btn" @click=${this["_clear"]} title="ล้าง">🗑</button>
        </div>
        <span class="chevron">${this["expanded"] ? "▼" : "▲"}</span>
      </div>

      ${this["expanded"] ? b`
        <div class="body" id="logBody">
          ${_0x51e223 === 0 ? b`<div class="empty">ยังไม่มีข้อมูล — เริ่มใช้งานเพื่อดู log</div>` : this["entries"]["map"]((_0x5d673c) => b`
                <div class="entry">
                  <span class="time">${this["_fmt"](_0x5d673c["timestamp"])}</span>
                  <span class="msg ${_0x5d673c["level"]}">${_0x5d673c["message"]}</span>
                </div>
              `)}
        </div>
      ` : ""}
    `;
  }
  ["updated"]() {
    var _a2;
    if (this["expanded"] && this["autoScroll"]) {
      const _0x3c7495 = (_a2 = this["shadowRoot"]) == null ? void 0 : _a2["getElementById"]("logBody");
      if (_0x3c7495) _0x3c7495["scrollTop"] = _0x3c7495["scrollHeight"];
    }
  }
  ["_fmt"](_0x58e9ae) {
    const _0x525dab = new Date(_0x58e9ae);
    return _0x525dab["toLocaleTimeString"]("th-TH", { "hour": "2-digit", "minute": "2-digit", "second": "2-digit", "hour12": ![] });
  }
};
AgxGlobalLog["STORAGE_KEY"] = "agx_global_log", AgxGlobalLog["MAX_ENTRIES"] = 500, AgxGlobalLog["styles"] = i$3`
    :host {
      display: block;
      position: sticky;
      bottom: 0;
      background: var(--agx-bg-base, #101420);
      border-top: 1px solid var(--agx-border-subtle);
      z-index: 100;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      cursor: pointer;
      user-select: none;
      background: var(--agx-bg-card);
    }

    .header:hover { background: var(--agx-bg-hover); }

    .title {
      font-size: 11px;
      font-weight: 600;
      color: var(--agx-text-secondary);
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--agx-text-muted);
    }
    .dot.active {
      background: #22c55e;
      animation: pulse 1.2s ease infinite;
    }
    .dot.error { background: var(--agx-danger); }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .count {
      font-size: 10px;
      color: var(--agx-text-muted);
      font-family: var(--agx-font-mono);
    }
    .error-badge {
      background: var(--agx-danger);
      color: #fff;
      padding: 1px 6px;
      border-radius: 8px;
      font-size: 10px;
      font-weight: 700;
    }

    .actions {
      display: flex;
      gap: 2px;
    }
    .action-btn {
      padding: 2px 6px;
      background: transparent;
      border: none;
      color: var(--agx-text-muted);
      font-size: 11px;
      cursor: pointer;
      border-radius: 3px;
    }
    .action-btn:hover {
      background: var(--agx-bg-surface);
      color: var(--agx-text-primary);
    }

    .chevron {
      font-size: 10px;
      color: var(--agx-text-muted);
      margin-left: 4px;
    }

    .body {
      background: var(--agx-bg-deep, #000);
      max-height: 220px;
      overflow-y: auto;
      padding: 6px 10px;
      font-family: var(--agx-font-mono, monospace);
      font-size: 11px;
      line-height: 1.5;
    }

    .empty {
      text-align: center;
      color: var(--agx-text-muted);
      padding: 20px;
      font-family: var(--agx-font-thai);
      font-size: 11px;
    }

    .entry { display: flex; gap: 6px; padding: 1px 0; }
    .time { color: var(--agx-text-muted); flex-shrink: 0; font-size: 10px; }
    .msg { word-break: break-word; flex: 1; }
    .msg.info { color: var(--agx-text-secondary); }
    .msg.warn { color: #f59e0b; }
    .msg.error { color: var(--agx-danger); }
    .msg.success { color: #22c55e; }
  `, __decorateClass$1([r()], AgxGlobalLog["prototype"], "entries", 2), __decorateClass$1([r()], AgxGlobalLog["prototype"], "expanded", 2), __decorateClass$1([r()], AgxGlobalLog["prototype"], "autoScroll", 2), AgxGlobalLog = __decorateClass$1([t$1("agx-global-log")], AgxGlobalLog);
const log = createLogger("StoreSync"), STORAGE_KEY = "agx_panel_state";
let debounceTimer = null;
async function loadFromStorage() {
  try {
    const _0x37ecdc = await chrome["storage"]["local"]["get"](STORAGE_KEY);
    if (_0x37ecdc[STORAGE_KEY]) {
      const _0x230366 = _0x37ecdc[STORAGE_KEY];
      if (_0x230366["settings"]) {
        const _0x3d5564 = createDefaultSettings();
        _0x230366["settings"] = { ..._0x3d5564, ..._0x230366["settings"], "gemini": { ..._0x3d5564["gemini"], ..._0x230366["settings"]["gemini"] ?? {} }, "openai": { ..._0x3d5564["openai"], ..._0x230366["settings"]["openai"] ?? {} } };
      }
      store["setState"](_0x230366), log["info"]("State loaded from storage");
    }
  } catch (_0x89a227) {
    log["warn"]("Failed to load state from storage", _0x89a227);
  }
}
function startSyncToStorage() {
  return store["subscribe"](() => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const _0x3decb1 = store["getState"](), _0x426fb7 = { "settings": _0x3decb1["settings"], "licenseValid": _0x3decb1["licenseValid"], "activeMode": _0x3decb1["activeMode"] };
      chrome["storage"]["local"]["set"]({ [STORAGE_KEY]: _0x426fb7 })["catch"]((_0xfd7891) => {
        log["warn"]("Failed to save state to storage", _0xfd7891);
      });
    }, 500);
  });
}
var __defProp = Object["defineProperty"], __getOwnPropDesc = Object["getOwnPropertyDescriptor"], __decorateClass = (_0x66e0c0, _0x2e4302, _0x21e463, _0x5efda3) => {
  var _0x45504a = _0x5efda3 > 1 ? void 0 : _0x5efda3 ? __getOwnPropDesc(_0x2e4302, _0x21e463) : _0x2e4302;
  for (var _0x55e761 = _0x66e0c0["length"] - 1, _0x575ca7; _0x55e761 >= 0; _0x55e761--) if (_0x575ca7 = _0x66e0c0[_0x55e761]) _0x45504a = (_0x5efda3 ? _0x575ca7(_0x2e4302, _0x21e463, _0x45504a) : _0x575ca7(_0x45504a)) || _0x45504a;
  if (_0x5efda3 && _0x45504a) __defProp(_0x2e4302, _0x21e463, _0x45504a);
  return _0x45504a;
};
let AgxApp = class extends i {
  constructor() {
    super(...arguments), this["activeMode"] = "auto", this["uiLang"] = "th", this["ready"] = ![], this["licenseValid"] = ![], this["settingsOpen"] = ![], this["pipelineRunning"] = ![], this["debugOpen"] = ![], this["updateInfo"] = null;
  }
  async ["connectedCallback"]() {
    super["connectedCallback"](), await loadFromStorage();
    const _0x46ce84 = store["getState"]();
    this["uiLang"] = _0x46ce84["settings"]["language"], await initI18n(this["uiLang"]), startSyncToStorage(), this["activeMode"] = _0x46ce84["activeMode"];
    try {
      const _0x2aa9fc = await chrome["storage"]["local"]["get"](["licenseKey"]), _0x727f08 = !!_0x2aa9fc["licenseKey"];
      this["licenseValid"] = _0x727f08, store["setState"]({ "licenseValid": _0x727f08 });
    } catch {
      this["licenseValid"] = ![], store["setState"]({ "licenseValid": ![] });
    }
    store["subscribe"](() => {
      const _0x296bce = store["getState"]();
      this["activeMode"] = _0x296bce["activeMode"], this["licenseValid"] = _0x296bce["licenseValid"], this["settingsOpen"] = _0x296bce["settingsOpen"];
    });
    if (DEV["ENABLE_DEBUG_PANEL"]) {
      const _0x5c2f4b = () => {
        const _0xc4ddd5 = (window["location"]["hash"] || "")["replace"](/^#\/?/, "")["toLowerCase"]();
        this["debugOpen"] = _0xc4ddd5 === "debug";
      };
      _0x5c2f4b(), window["addEventListener"]("hashchange", _0x5c2f4b);
    }
    this["licenseValid"] && void this["_maybeShowUpdatePopup"](), chrome["runtime"]["onMessage"]["addListener"]((_0x2fc0a9) => {
      var _a2;
      if (_0x2fc0a9["type"] === "PIPELINE_ERROR") {
        const _0x22cfea = ((_a2 = _0x2fc0a9["payload"]) == null ? void 0 : _a2["error"]) || "Unknown error";
        alert(_0x22cfea), this["pipelineRunning"] = ![];
      } else {
        if (_0x2fc0a9["type"] === "PIPELINE_DONE") this["pipelineRunning"] = ![];
        else {
          if (_0x2fc0a9["type"] === "LICENSE_INVALID") {
            const _0x231741 = _0x2fc0a9["payload"];
            alert("🔑 " + (_0x231741["message"] || "License ไม่ถูกต้อง") + " — กรุณา Activate ใหม่"), this["pipelineRunning"] = ![], this["licenseValid"] = ![], store["setState"]({ "licenseValid": ![] });
          }
        }
      }
    }), this["ready"] = !![];
  }
  ["render"]() {
    if (!this["ready"]) return b`<div class="loading"><span class="spinner"></span> กำลังโหลด...</div>`;
    if (!this["licenseValid"]) return b`
        <agx-license
          @license-activated=${this["_onLicenseActivated"]}
        ></agx-license>
      `;
    if (this["debugOpen"]) return b`<agx-debug-panel></agx-debug-panel>`;
    if (this["settingsOpen"]) return b`
        <agx-settings
          @close-settings=${this["_onCloseSettings"]}
          @settings-saved=${this["_onSettingsSaved"]}
          @license-deactivated=${this["_onLicenseDeactivated"]}
        ></agx-settings>
      `;
    return b`
      <agx-header
        .lang=${this["uiLang"]}
        .locked=${this["pipelineRunning"]}
        @lang-change=${this["_onLangChange"]}
        @open-settings=${this["_onOpenSettings"]}
      ></agx-header>

      <agx-mode-bar
        .active=${this["activeMode"]}
        .lang=${this["uiLang"]}
        .locked=${this["pipelineRunning"]}
        @mode-change=${this["_onModeChange"]}
      ></agx-mode-bar>

      <div class="content">
        <div class="mode-content" key=${this["activeMode"]}>
          ${this["_renderMode"]()}
        </div>
      </div>

      <agx-footer></agx-footer>

      ${this["updateInfo"] ? b`
        <agx-update-popup
          .latest=${this["updateInfo"]}
          .current=${APP_FULL_LABEL}
          @popup-dismissed=${this["_onUpdatePopupDismissed"]}
        ></agx-update-popup>
      ` : ""}
    `;
  }
  ["_renderMode"]() {
    switch (this["activeMode"]) {
      case "auto":
        return b`<agx-auto-mode @auto-start=${this["_onAutoStart"]} @auto-stop=${this["_onAutoStop"]}></agx-auto-mode>`;
      case "creator":
        return b`<agx-creator-mode
          @creator-podcast-start=${this["_onCreatorStart"]}
          @creator-podcast-stop=${this["_onCreatorStop"]}
          @creator-story-start=${this["_onCreatorStart"]}
          @creator-story-stop=${this["_onCreatorStop"]}
        ></agx-creator-mode>`;
      case "shop":
        return b`<agx-shop-mode></agx-shop-mode>`;
      case "post":
        return b`<agx-post-mode
          @post-start=${this["_onPostStart"]}
          @post-stop=${this["_onPostStop"]}
        ></agx-post-mode>`;
      default: {
        const _0x54f2db = { "post": { "icon": "📮", "title": t("post.title"), "subtitle": "Phase 4 — Coming soon" } }, _0x4ffa36 = _0x54f2db[this["activeMode"]] ?? { "icon": "❓", "title": "?", "subtitle": "" };
        return b`
          <div class="placeholder">
            <div class="placeholder-icon">${_0x4ffa36["icon"]}</div>
            <div class="placeholder-title">${_0x4ffa36["title"]}</div>
            <div class="placeholder-subtitle">${_0x4ffa36["subtitle"]}</div>
          </div>
        `;
      }
    }
  }
  async ["_maybeShowUpdatePopup"]() {
    var _a2;
    try {
      const _0x1b71d5 = await chrome["storage"]["local"]["get"]([AgxApp["UPDATE_STORAGE_KEY"]]), _0x3400cd = _0x1b71d5[AgxApp["UPDATE_STORAGE_KEY"]] || {}, _0x23f76e = Date["now"](), _0x391d8a = !_0x3400cd["lastCheckedAt"] || _0x23f76e - _0x3400cd["lastCheckedAt"] > AgxApp["UPDATE_CHECK_INTERVAL_MS"];
      let _0x4b37cd = _0x3400cd["cachedLatest"] ?? null;
      if (_0x391d8a) try {
        const _0x54d0c8 = await chrome["runtime"]["sendMessage"]({ "type": "VERSION_CHECK" });
        (_0x54d0c8 == null ? void 0 : _0x54d0c8["ok"]) && ((_a2 = _0x54d0c8["info"]) == null ? void 0 : _a2["latest"]) ? (_0x4b37cd = _0x54d0c8["info"]["latest"], await chrome["storage"]["local"]["set"]({ [AgxApp["UPDATE_STORAGE_KEY"]]: { ..._0x3400cd, "lastCheckedAt": _0x23f76e, "cachedLatest": _0x4b37cd } })) : await chrome["storage"]["local"]["set"]({ [AgxApp["UPDATE_STORAGE_KEY"]]: { ..._0x3400cd, "lastCheckedAt": _0x23f76e } });
      } catch {
      }
      if (!(_0x4b37cd == null ? void 0 : _0x4b37cd["fullLabel"])) return;
      const _0x2beb26 = APP_FULL_LABEL["trim"](), _0x297374 = _0x4b37cd["fullLabel"]["trim"]();
      if (_0x2beb26 === _0x297374) return;
      if (_0x3400cd["dismissedVersion"] === _0x297374) return;
      this["updateInfo"] = _0x4b37cd;
    } catch (_0x59a811) {
    }
  }
  async ["_onUpdatePopupDismissed"](_0x39f1fa) {
    const { version: _0x499c1f } = _0x39f1fa["detail"] || {};
    this["updateInfo"] = null;
    try {
      const _0x5a0c54 = await chrome["storage"]["local"]["get"]([AgxApp["UPDATE_STORAGE_KEY"]]), _0x3eee66 = _0x5a0c54[AgxApp["UPDATE_STORAGE_KEY"]] || {};
      await chrome["storage"]["local"]["set"]({ [AgxApp["UPDATE_STORAGE_KEY"]]: { ..._0x3eee66, "dismissedVersion": _0x499c1f } });
    } catch (_0x32f62e) {
    }
  }
  async ["_onAutoStart"](_0x50169b) {
    const _0x2f296b = _0x50169b["detail"];
    this["pipelineRunning"] = !![];
    try {
      const { products: _0x1abc9b, ..._0x5d1340 } = _0x2f296b ?? {};
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_START", "payload": { "mode": "auto", "config": _0x5d1340, "productsFromStorage": !![] } });
    } catch (_0x4367ff) {
      this["pipelineRunning"] = ![];
    }
  }
  async ["_onAutoStop"]() {
    this["pipelineRunning"] = ![];
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_STOP" });
    } catch (_0x2dab07) {
    }
  }
  async ["_onPostStart"](_0x56c96e) {
    const _0x1aab2e = _0x56c96e["detail"];
    this["pipelineRunning"] = !![];
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_START", "payload": { "mode": "post", "config": _0x1aab2e } });
    } catch (_0x84e321) {
      this["pipelineRunning"] = ![];
    }
  }
  async ["_onPostStop"]() {
    this["pipelineRunning"] = ![];
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_STOP" });
    } catch (_0xd5a012) {
    }
  }
  async ["_onCreatorStart"](_0x3a7b78) {
    const _0x5eb690 = _0x3a7b78["detail"], _0x5450e9 = _0x3a7b78["type"] === "creator-podcast-start" ? "podcast" : "story";
    this["pipelineRunning"] = !![];
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_START", "payload": { "mode": "creator", "subMode": _0x5450e9, "config": _0x5eb690 } });
    } catch (_0x2e1374) {
      this["pipelineRunning"] = ![];
    }
  }
  async ["_onCreatorStop"]() {
    this["pipelineRunning"] = ![];
    try {
      await chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_STOP" });
    } catch (_0x5b989b) {
    }
  }
  async ["_checkLicense"]() {
    try {
      const _0x301777 = await chrome["runtime"]["sendMessage"]({ "type": "LICENSE_VERIFY", "payload": {} });
      (_0x301777 == null ? void 0 : _0x301777["valid"]) ? (this["licenseValid"] = !![], store["setState"]({ "licenseValid": !![] })) : (this["licenseValid"] = ![], store["setState"]({ "licenseValid": ![] }));
    } catch {
      this["licenseValid"] = ![], store["setState"]({ "licenseValid": ![] });
    }
  }
  ["_onLicenseActivated"]() {
    this["licenseValid"] = !![], store["setState"]({ "licenseValid": !![] });
  }
  ["_onLicenseDeactivated"]() {
    this["licenseValid"] = ![], this["settingsOpen"] = ![], store["setState"]({ "licenseValid": ![], "settingsOpen": ![] });
  }
  ["_onOpenSettings"]() {
    if (this["pipelineRunning"]) {
      alert("กำลังทำงาน — กด Stop ก่อนเปิด Settings (ป้องกัน config เปลี่ยนกลางคัน)");
      return;
    }
    this["settingsOpen"] = !![], store["setState"]({ "settingsOpen": !![] });
  }
  ["_onCloseSettings"]() {
    this["settingsOpen"] = ![], store["setState"]({ "settingsOpen": ![] });
  }
  ["_onSettingsSaved"]() {
  }
  ["_onModeChange"](_0x4c43dc) {
    if (this["pipelineRunning"]) {
      alert("กำลังทำงานอยู่ — กด Stop ก่อนสลับโหมด (ป้องกัน log หาย)");
      return;
    }
    this["activeMode"] = _0x4c43dc["detail"]["mode"], store["setState"]({ "activeMode": this["activeMode"] });
  }
  async ["_onLangChange"](_0x2e30c7) {
    this["uiLang"] = _0x2e30c7["detail"]["lang"], await initI18n(this["uiLang"]), store["updateSettings"]({ "language": this["uiLang"] }), this["requestUpdate"]();
  }
};
AgxApp["styles"] = i$3`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-width: 400px;
      margin: 0 auto;
      background: var(--agx-bg-base, #101420);
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: 0 10px 40px;  /* เพิ่ม padding-bottom กันปุ่มสุดท้ายถูก scroll edge ครอบ */
    }

    .mode-content {
      animation: slideUp 200ms ease;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
    }

    .placeholder-icon { font-size: 40px; margin-bottom: 12px; }
    .placeholder-title {
      font-size: 16px; font-weight: 600;
      color: var(--agx-text-primary, #f0f4f8); margin-bottom: 4px;
    }
    .placeholder-subtitle { font-size: 12px; color: var(--agx-text-muted, #64748b); }

    .loading {
      display: flex; align-items: center; justify-content: center;
      height: 100vh; color: var(--agx-accent, #4A8DFF); font-size: 14px;
      gap: 8px;
    }

    .spinner {
      width: 16px; height: 16px;
      border: 2px solid rgba(47, 107, 255,0.3);
      border-top-color: var(--agx-accent);
      border-radius: 50%;
      animation: spin 600ms linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
  `, AgxApp["UPDATE_STORAGE_KEY"] = "agx_update_popup_state", AgxApp["UPDATE_CHECK_INTERVAL_MS"] = 6 * 60 * 60 * 1e3, __decorateClass([r()], AgxApp["prototype"], "activeMode", 2), __decorateClass([r()], AgxApp["prototype"], "uiLang", 2), __decorateClass([r()], AgxApp["prototype"], "ready", 2), __decorateClass([r()], AgxApp["prototype"], "licenseValid", 2), __decorateClass([r()], AgxApp["prototype"], "settingsOpen", 2), __decorateClass([r()], AgxApp["prototype"], "pipelineRunning", 2), __decorateClass([r()], AgxApp["prototype"], "debugOpen", 2), __decorateClass([r()], AgxApp["prototype"], "updateInfo", 2), AgxApp = __decorateClass([t$1("agx-app")], AgxApp);
const app = document["createElement"]("agx-app");
document["getElementById"]("app")["appendChild"](app);
const globalToast = document["createElement"]("agx-toast");
document["body"]["appendChild"](globalToast);
