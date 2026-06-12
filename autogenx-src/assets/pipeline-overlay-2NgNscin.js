import { P as PIPELINE_STATE_STORAGE_KEY, s as shouldDropInRelease } from "./pipeline-log-C2ZJNMjJ.js";
const HOST_ID = "agx-pipeline-overlay-host", MAX_LOG = 8, HIDE_DELAY_MS = 2e3, BLOCK_LABELS = { "UPLOAD_AND_CONFIG": "Upload & Config", "GEN_IMAGE": "Generate Image", "GEN_VIDEO": "Generate Video", "SAVE_CLIP": "Save Clip", "POST_TIKTOK": "Post to TikTok" };
let state = { "visible": ![], "minimized": ![], "pipelineState": "idle", "blockStates": /* @__PURE__ */ new Map(), "totalBlocks": 5, "currentBlockName": "", "productIndex": 0, "totalProducts": 0, "countdownRemaining": 0, "countdownLabel": "", "log": [] }, shadow = null, hideTimer = null;
const STYLE = "\n  :host { all: initial; }\n  .root {\n    position: fixed; inset: 0;\n    z-index: 2147483647;\n    pointer-events: auto;\n    background: rgba(8, 12, 24, 0.6);\n    display: flex; align-items: center; justify-content: center;\n    font-family: 'Segoe UI', 'Sukhumvit Set', system-ui, sans-serif;\n    color: #e4e6eb;\n    animation: fadein 0.25s ease;\n  }\n  .root.hidden { display: none; }\n  .root.minimized {\n    position: fixed; inset: auto;\n    bottom: 16px; right: 16px;\n    background: transparent;\n    backdrop-filter: none;\n    pointer-events: none;\n    align-items: flex-end; justify-content: flex-end;\n  }\n  @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }\n  .card {\n    width: min(260px, 86vw);\n    background: linear-gradient(160deg, #1a1f2e 0%, #131826 100%);\n    border: 1px solid rgba(74, 141, 255, 0.4);\n    border-radius: 12px;\n    padding: 14px 16px 12px;\n    box-shadow: 0 20px 60px rgba(0,0,0,0.6);\n    display: flex; flex-direction: column; gap: 10px;\n    pointer-events: auto;\n  }\n  .root.minimized .card { display: none; }\n  .header {\n    display: flex; align-items: center; justify-content: space-between;\n    border-bottom: 1px solid rgba(255,255,255,0.08);\n    padding-bottom: 10px;\n  }\n  .title { font-size: 13px; font-weight: 700; color: #4A8DFF; }\n  .brand-logo-row {\n    display: flex;\n    justify-content: center;\n    padding: 2px 0 2px;\n  }\n  .brand-logo {\n    height: 104px;\n    max-height: 18vmin;\n    width: auto;\n    object-fit: contain;\n    filter: drop-shadow(0 5px 18px rgba(74, 141, 255, 0.45));\n  }\n  .actions { display: flex; gap: 6px; }\n  .icon-btn {\n    width: 28px; height: 28px;\n    border: none; border-radius: 6px;\n    background: rgba(255,255,255,0.06);\n    color: #e4e6eb; cursor: pointer; font-size: 14px;\n    display: flex; align-items: center; justify-content: center;\n  }\n  .icon-btn:hover { background: rgba(255,255,255,0.12); }\n\n  .progress-section { display: flex; flex-direction: column; gap: 6px; }\n  .progress-section.hidden { display: none; }\n  .progress-bar-bg {\n    width: 100%; height: 12px;\n    background: rgba(255,255,255,0.08);\n    border-radius: 6px; overflow: hidden;\n  }\n  .progress-bar-fill {\n    height: 100%;\n    background: linear-gradient(90deg, #4A8DFF 0%, #6FA8FF 100%);\n    transition: width 0.4s ease;\n    border-radius: 6px;\n  }\n  .progress-meta {\n    display: flex; justify-content: space-between;\n    font-size: 12px; color: #b8bcc4;\n  }\n  .progress-meta strong { color: #e4e6eb; }\n\n  .countdown {\n    text-align: center;\n    padding: 18px 0;\n    background: rgba(74, 141, 255, 0.08);\n    border-radius: 10px;\n  }\n  .countdown.hidden { display: none; }\n  .countdown-num {\n    font-size: 64px; font-weight: 800;\n    line-height: 1;\n    color: #4A8DFF;\n    font-variant-numeric: tabular-nums;\n    text-shadow: 0 4px 16px rgba(74,141,255,0.5);\n  }\n  .countdown-label {\n    margin-top: 8px;\n    font-size: 13px; color: #b8bcc4;\n  }\n\n  .footer { display: flex; gap: 8px; }\n  .stop-btn {\n    flex: 1;\n    padding: 10px;\n    border: none; border-radius: 8px;\n    background: linear-gradient(180deg, #ff3b3b, #d92626);\n    color: #fff; font-weight: 700; font-size: 14px;\n    cursor: pointer;\n    transition: transform 0.1s;\n  }\n  .stop-btn:hover { transform: translateY(-1px); }\n  .stop-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }\n\n  /* Mini bar (minimized mode) */\n  .mini-bar {\n    display: none;\n    pointer-events: auto;\n    background: linear-gradient(160deg, #1a1f2e, #131826);\n    border: 1px solid rgba(74,141,255,0.5);\n    border-radius: 24px;\n    padding: 8px 14px;\n    box-shadow: 0 8px 24px rgba(0,0,0,0.5);\n    cursor: pointer;\n    display: flex; align-items: center; gap: 10px;\n    font-size: 12px;\n    max-width: 320px;\n  }\n  .root.minimized .mini-bar { display: flex; }\n  .root:not(.minimized) .mini-bar { display: none; }\n  .mini-dot {\n    width: 8px; height: 8px; border-radius: 50%;\n    background: #4A8DFF;\n    animation: pulse 1.5s ease infinite;\n  }\n  @keyframes pulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.4; }\n  }\n  .mini-text { color: #e4e6eb; flex: 1; min-width: 0;\n    overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n  .mini-num { color: #4A8DFF; font-weight: 700; font-variant-numeric: tabular-nums; }\n";
function ensureHost() {
  var _a, _b, _c, _d;
  if (shadow) return shadow;
  let _0x29d3d2 = document["getElementById"](HOST_ID);
  if (_0x29d3d2 && _0x29d3d2["shadowRoot"]) return shadow = _0x29d3d2["shadowRoot"], shadow;
  !_0x29d3d2 && (_0x29d3d2 = document["createElement"]("div"), _0x29d3d2["id"] = HOST_ID, document["documentElement"]["appendChild"](_0x29d3d2));
  shadow = _0x29d3d2["attachShadow"]({ "mode": "closed" });
  const _0x20e4dd = chrome["runtime"]["getURL"]("images/logo.png");
  return shadow["innerHTML"] = "\n    <style>" + STYLE + '</style>\n    <div class="root hidden" data-root>\n      <div class="card">\n        <div class="brand-logo-row">\n          <img class="brand-logo" src="' + _0x20e4dd + '" alt="AutoGenX" />\n        </div>\n        <div class="header">\n          <div class="title">⚡ AutoGenX กำลังทำงาน</div>\n          <div class="actions">\n            <button class="icon-btn" data-min title="ย่อ">_</button>\n            <button class="icon-btn" data-close title="ปิด">×</button>\n          </div>\n        </div>\n        <div class="progress-section hidden" data-progress-section>\n          <div class="progress-bar-bg">\n            <div class="progress-bar-fill" data-progress-fill style="width:0%"></div>\n          </div>\n          <div class="progress-meta">\n            <span data-progress-step></span>\n            <strong data-progress-pct>0%</strong>\n          </div>\n        </div>\n        <div class="countdown hidden" data-countdown>\n          <div class="countdown-num" data-countdown-num>0</div>\n          <div class="countdown-label" data-countdown-label></div>\n        </div>\n        <div class="footer">\n          <button class="stop-btn" data-stop>🛑 หยุด pipeline</button>\n        </div>\n      </div>\n      <div class="mini-bar" data-minibar>\n        <div class="mini-dot"></div>\n        <div class="mini-text" data-mini-text>กำลังทำงาน</div>\n        <div class="mini-num" data-mini-num></div>\n      </div>\n    </div>\n  ', (_a = shadow["querySelector"]("[data-min]")) == null ? void 0 : _a["addEventListener"]("click", () => {
    state["minimized"] = !![], render();
  }), (_b = shadow["querySelector"]("[data-close]")) == null ? void 0 : _b["addEventListener"]("click", () => {
    hideOverlay();
  }), (_c = shadow["querySelector"]("[data-minibar]")) == null ? void 0 : _c["addEventListener"]("click", () => {
    state["minimized"] = ![], render();
  }), (_d = shadow["querySelector"]("[data-stop]")) == null ? void 0 : _d["addEventListener"]("click", () => {
    chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_STOP" })["catch"](() => {
    });
    const _0x59b27e = shadow["querySelector"]("[data-stop]");
    _0x59b27e && (_0x59b27e["disabled"] = !![], _0x59b27e["textContent"] = "⏳ กำลังหยุด...");
  }), shadow;
}
function showOverlay() {
  hideTimer && (clearTimeout(hideTimer), hideTimer = null), state["visible"] = !![], state["minimized"] = ![], render();
}
function hideOverlay() {
  state["visible"] = ![], render();
}
function scheduleHide() {
  if (hideTimer) clearTimeout(hideTimer);
  hideTimer = window["setTimeout"](() => {
    hideOverlay();
  }, HIDE_DELAY_MS);
}
function computeProgressPct() {
  if (state["totalBlocks"] === 0) return 0;
  let _0x3d77a7 = 0, _0x5baa62 = 0;
  for (const _0x341a4e of state["blockStates"]["values"]()) {
    if (_0x341a4e === "success" || _0x341a4e === "skipped") _0x3d77a7++;
    else {
      if (_0x341a4e === "running") _0x5baa62++;
    }
  }
  return Math["min"](100, Math["round"]((_0x3d77a7 + _0x5baa62 * 0.5) / state["totalBlocks"] * 100));
}
function render() {
  const _0x4069dc = ensureHost(), _0xd35f87 = _0x4069dc["querySelector"]("[data-root]");
  if (!_0xd35f87) return;
  _0xd35f87["classList"]["toggle"]("hidden", !state["visible"]), _0xd35f87["classList"]["toggle"]("minimized", state["minimized"]);
  const _0x1215df = _0x4069dc["querySelector"]("[data-progress-section]"), _0x275264 = state["blockStates"]["size"] > 0;
  if (_0x1215df) {
    _0x1215df["classList"]["toggle"]("hidden", !_0x275264);
    if (_0x275264) {
      const _0x24a16b = computeProgressPct(), _0x4d9810 = _0x4069dc["querySelector"]("[data-progress-fill]");
      if (_0x4d9810) _0x4d9810["style"]["width"] = _0x24a16b + "%";
      const _0x442767 = _0x4069dc["querySelector"]("[data-progress-pct]");
      if (_0x442767) _0x442767["textContent"] = _0x24a16b + "%";
      const _0x5342e0 = _0x4069dc["querySelector"]("[data-progress-step]");
      if (_0x5342e0) {
        const _0x32bd56 = [];
        if (state["currentBlockName"]) _0x32bd56["push"](state["currentBlockName"]);
        if (state["totalProducts"] > 0) _0x32bd56["push"]("สินค้า " + (state["productIndex"] + 1) + "/" + state["totalProducts"]);
        _0x5342e0["textContent"] = _0x32bd56["join"](" · ") || "—";
      }
    }
  }
  const _0xa4979d = _0x4069dc["querySelector"]("[data-countdown]");
  if (_0xa4979d) {
    _0xa4979d["classList"]["toggle"]("hidden", state["countdownRemaining"] <= 0);
    if (state["countdownRemaining"] > 0) {
      const _0x4dcd12 = _0x4069dc["querySelector"]("[data-countdown-num]");
      if (_0x4dcd12) _0x4dcd12["textContent"] = String(state["countdownRemaining"]);
      const _0x51504c = _0x4069dc["querySelector"]("[data-countdown-label]");
      if (_0x51504c) _0x51504c["textContent"] = state["countdownLabel"] || "รอ...";
    }
  }
  const _0x46d905 = _0x4069dc["querySelector"]("[data-mini-text]");
  _0x46d905 && (_0x46d905["textContent"] = state["currentBlockName"] || state["countdownLabel"] || "AutoGenX กำลังทำงาน");
  const _0x285c77 = _0x4069dc["querySelector"]("[data-mini-num]");
  _0x285c77 && (_0x285c77["textContent"] = state["countdownRemaining"] > 0 ? state["countdownRemaining"] + "s" : "");
  if (state["pipelineState"] === "running") {
    const _0x2c24cf = _0x4069dc["querySelector"]("[data-stop]");
    _0x2c24cf && _0x2c24cf["disabled"] && (_0x2c24cf["disabled"] = ![], _0x2c24cf["textContent"] = "🛑 หยุด pipeline");
  }
}
function pushLog(_0x2662fa, _0x2157ad, _0x96a631) {
  if (_0x96a631 && state["log"]["length"] > 0) state["log"][state["log"]["length"] - 1] = { "level": _0x2662fa, "message": _0x2157ad };
  else {
    state["log"]["push"]({ "level": _0x2662fa, "message": _0x2157ad });
    if (state["log"]["length"] > MAX_LOG) state["log"]["shift"]();
  }
}
function handleMessage(_0xd47657) {
  const _0xc42519 = _0xd47657["type"], _0x463d42 = _0xd47657["payload"] || {};
  switch (_0xc42519) {
    case "PIPELINE_STATE": {
      const _0x1189f0 = _0x463d42["state"];
      state["pipelineState"] = _0x1189f0;
      if (_0x1189f0 === "running") {
        state["blockStates"] = /* @__PURE__ */ new Map(), state["log"] = [], state["countdownRemaining"] = 0, state["currentBlockName"] = "";
        if (typeof _0x463d42["totalBlocks"] === "number") state["totalBlocks"] = _0x463d42["totalBlocks"];
        showOverlay();
      } else scheduleHide();
      render();
      break;
    }
    case "PIPELINE_COUNTDOWN": {
      state["countdownRemaining"] = Number(_0x463d42["remaining"]) || 0, state["countdownLabel"] = String(_0x463d42["label"] || "");
      if (!state["visible"] && state["pipelineState"] === "running") showOverlay();
      render();
      break;
    }
    case "PIPELINE_BLOCK_PROGRESS": {
      const _0x20497a = String(_0x463d42["blockId"] || ""), _0x26517f = _0x463d42["status"];
      if (_0x20497a) {
        state["blockStates"]["set"](_0x20497a, _0x26517f);
        _0x26517f === "running" && (state["currentBlockName"] = BLOCK_LABELS[_0x20497a] || _0x20497a);
        if (typeof _0x463d42["totalProducts"] === "number") state["totalProducts"] = _0x463d42["totalProducts"];
        if (typeof _0x463d42["productIndex"] === "number") state["productIndex"] = _0x463d42["productIndex"];
        if (!state["visible"]) showOverlay();
        render();
      }
      break;
    }
    case "PIPELINE_PROGRESS": {
      if (typeof _0x463d42["current"] === "number") state["productIndex"] = _0x463d42["current"] - 1;
      if (typeof _0x463d42["total"] === "number") state["totalProducts"] = _0x463d42["total"];
      if (!state["visible"] && state["pipelineState"] === "running") showOverlay();
      render();
      break;
    }
    case "PIPELINE_LOG": {
      const _0x406bab = String(_0x463d42["level"] || "info"), _0x56f36d = String(_0x463d42["message"] || ""), _0x593745 = _0x463d42["replace"] === !![];
      if (!_0x56f36d) break;
      if (shouldDropInRelease(_0x56f36d)) break;
      pushLog(_0x406bab, _0x56f36d, _0x593745);
      if (!state["visible"] && state["pipelineState"] === "running") showOverlay();
      render();
      break;
    }
    case "PIPELINE_DONE":
    case "PIPELINE_ERROR": {
      state["pipelineState"] === "running" && (state["pipelineState"] = _0xc42519 === "PIPELINE_DONE" ? "done" : "error", scheduleHide(), render());
      break;
    }
  }
}
let installed = ![];
function installOverlay() {
  var _a, _b, _c, _d;
  if (installed) return;
  installed = !![];
  try {
    ensureHost();
  } catch {
  }
  try {
    typeof ((_b = (_a = chrome["storage"]) == null ? void 0 : _a["session"]) == null ? void 0 : _b["get"]) === "function" && chrome["storage"]["session"]["get"](PIPELINE_STATE_STORAGE_KEY)["then"]((_0x2219d7) => {
      const _0x130e5a = _0x2219d7[PIPELINE_STATE_STORAGE_KEY];
      _0x130e5a === "running" && (state["pipelineState"] = "running", showOverlay(), render());
    })["catch"](() => {
    }), typeof ((_d = (_c = chrome["storage"]) == null ? void 0 : _c["onChanged"]) == null ? void 0 : _d["addListener"]) === "function" && chrome["storage"]["onChanged"]["addListener"]((_0x400329, _0x54f685) => {
      if (_0x54f685 !== "session") return;
      const _0x5c7ca1 = _0x400329[PIPELINE_STATE_STORAGE_KEY];
      if (!_0x5c7ca1) return;
      const _0x34b2dc = _0x5c7ca1["newValue"];
      _0x34b2dc === "running" && !state["visible"] && (state["pipelineState"] = "running", showOverlay(), render());
    });
  } catch {
  }
  try {
    chrome["runtime"]["onMessage"]["addListener"]((_0x243849) => {
      try {
        handleMessage(_0x243849);
      } catch {
      }
      return ![];
    });
  } catch {
  }
}
export {
  installOverlay as i
};
