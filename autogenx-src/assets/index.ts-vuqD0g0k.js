var _a, _b;
import { c as createLogger, g as getLoggerBuffer } from "./logger-CbU0UFxz.js";
import { a as sendPipelineLog$1, D as DEV, b as broadcastPipelineEvent, h as hardKillPipeline, c as activeDevFlags } from "./pipeline-log-C2ZJNMjJ.js";
import { A as APP_FULL_LABEL, r as resolveRandomChoice, T as TEXT_POSITIONS, a as TEXT_COLORS, I as IMAGE_CAMERA_ANGLES, L as LIGHTING_TYPES, S as SCENE_TYPES, b as IMAGE_STYLES, i as invokeAI, g as generateDialogueSuggestion, c as getV1StyleVideoFromServer, d as getVideoFallbackFromServer, e as getProductCategoryHint, f as getVideoRequestFromServer, h as invokeAIWithRequest, j as applyVideoPostProcess, s as splitSpeechIntoScenes, k as syncDialogueIntoVideoPrompt, V as VIDEO_CAMERA_MOVEMENTS, l as inferPersonaGender, B as BLOCK_ORDER, P as PipelineState, m as IMAGE_STYLE_PREFIX_EN, n as VOICE_DESCRIPTIONS, o as STORY_CTAS, p as STORY_BODIES, q as STORY_HOOKS, D as DRAMA_MORALS, t as DRAMA_TURNINGS, u as DRAMA_CONFLICTS, v as DRAMA_SETUPS, w as getGeminiClient } from "./prompt-overlay-sync-DkM4NOLq.js";
import { G as GUARD_FLOW_PROJECT, h as GUARD_TIKTOK_UPLOAD } from "./urls-DiE2CpbD.js";
const scriptRel = "modulepreload", assetsURL = function(_0x330bd0) {
  return "/" + _0x330bd0;
}, seen = {};
const __vitePreload = function preload(_0xee1961, _0x27dc22, _0x559dc2) {
  let _0x5e5220 = Promise["resolve"]();
  if (_0x27dc22 && _0x27dc22["length"] > 0) {
    document["getElementsByTagName"]("link");
    const _0x27dc43 = document["querySelector"]("meta[property=csp-nonce]"), _0x3ea548 = (_0x27dc43 == null ? void 0 : _0x27dc43["nonce"]) || (_0x27dc43 == null ? void 0 : _0x27dc43["getAttribute"]("nonce"));
    _0x5e5220 = Promise["allSettled"](_0x27dc22["map"]((_0x331854) => {
      _0x331854 = assetsURL(_0x331854);
      if (_0x331854 in seen) return;
      seen[_0x331854] = !![];
      const _0x609272 = _0x331854["endsWith"](".css"), _0x887803 = _0x609272 ? '[rel="stylesheet"]' : "";
      {
        if (document["querySelector"]('link[href="' + _0x331854 + '"]' + _0x887803)) return;
      }
      const _0x4adf7d = document["createElement"]("link");
      _0x4adf7d["rel"] = _0x609272 ? "stylesheet" : scriptRel;
      !_0x609272 && (_0x4adf7d["as"] = "script");
      _0x4adf7d["crossOrigin"] = "", _0x4adf7d["href"] = _0x331854;
      _0x3ea548 && _0x4adf7d["setAttribute"]("nonce", _0x3ea548);
      document["head"]["appendChild"](_0x4adf7d);
      if (_0x609272) return new Promise((_0x70dc79, _0x4a2e36) => {
        _0x4adf7d["addEventListener"]("load", _0x70dc79), _0x4adf7d["addEventListener"]("error", () => _0x4a2e36(new Error("Unable to preload CSS for " + _0x331854)));
      });
    }));
  }
  function _0x2b62df(_0xdff33b) {
    const _0x45e06e = new Event("vite:preloadError", { "cancelable": !![] });
    _0x45e06e["payload"] = _0xdff33b, window["dispatchEvent"](_0x45e06e);
    if (!_0x45e06e["defaultPrevented"]) throw _0xdff33b;
  }
  return _0x5e5220["then"]((_0x2727b1) => {
    for (const _0x1f2e36 of _0x2727b1 || []) {
      if (_0x1f2e36["status"] !== "rejected") continue;
      _0x2b62df(_0x1f2e36["reason"]);
    }
    return _0xee1961()["catch"](_0x2b62df);
  });
};
const log$i = createLogger("MessageRouter");
class MessageRouter {
  constructor() {
    this["handlers"] = /* @__PURE__ */ new Map();
  }
  ["on"](_0x51280b, _0x23598c) {
    return this["handlers"]["set"](_0x51280b, _0x23598c), this;
  }
  async ["handle"](_0xc39f76, _0x6e5d43, _0x2692c2) {
    if (!(_0xc39f76 == null ? void 0 : _0xc39f76["type"])) return;
    const _0x503dd2 = this["handlers"]["get"](_0xc39f76["type"]);
    if (_0x503dd2) try {
      await _0x503dd2(_0xc39f76["payload"], _0x6e5d43, _0x2692c2);
    } catch (_0x515f5f) {
      log$i["error"]("Handler error for " + _0xc39f76["type"], _0x515f5f), _0x2692c2({ "error": String(_0x515f5f) });
    }
    else log$i["debug"]("No handler for message type: " + _0xc39f76["type"]);
  }
}
const log$h = createLogger("LicenseService"), API_URL$3 = "https://www.autogention.com/api/license/action", EXTENSION_TOKEN$3 = "agx_ext_2026_9Km2Vp4Rq7Ts1W";
async function callApi(_0x1a3265) {
  const _0x420120 = String(_0x1a3265["action"] || "unknown"), _0x2d3424 = Date["now"]();
  sendPipelineLog$1("info", "🔑 [License] เรียก API (" + _0x420120 + ")...");
  let _0x2691f8;
  try {
    _0x2691f8 = await fetch(API_URL$3, { "method": "POST", "headers": { "Content-Type": "application/json", "X-Extension-Token": EXTENSION_TOKEN$3 }, "body": JSON["stringify"](_0x1a3265) });
  } catch (_0x5ba58e) {
    const _0x4fb0bb = _0x5ba58e instanceof Error ? _0x5ba58e["message"] : "network error";
    sendPipelineLog$1("error", "❌ [License] เชื่อมต่อ server ไม่ได้ (" + _0x420120 + "): " + _0x4fb0bb);
    throw new Error("เชื่อมต่อ server ไม่ได้ (" + _0x4fb0bb + ")");
  }
  const _0x440660 = Date["now"]() - _0x2d3424, _0x216055 = _0x2691f8["headers"]["get"]("content-type") || "";
  if (_0x216055["includes"]("application/json")) return sendPipelineLog$1(_0x2691f8["ok"] ? "success" : "warn", (_0x2691f8["ok"] ? "✓" : "⚠") + " [License] " + _0x420120 + " (HTTP " + _0x2691f8["status"] + ", " + _0x440660 + "ms)"), _0x2691f8["json"]();
  if (!_0x2691f8["ok"]) {
    sendPipelineLog$1("error", "❌ [License] " + _0x420120 + " ล้มเหลว: HTTP " + _0x2691f8["status"] + " " + _0x2691f8["statusText"]);
    throw new Error("Server ตอบกลับ " + _0x2691f8["status"] + " " + _0x2691f8["statusText"]);
  }
  return sendPipelineLog$1("success", "✓ [License] " + _0x420120 + " (" + _0x440660 + "ms)"), _0x2691f8["json"]();
}
async function getDeviceId() {
  const _0x3fda49 = "agx_device_id", _0x3965af = await chrome["storage"]["local"]["get"]([_0x3fda49]);
  if (_0x3965af[_0x3fda49]) return _0x3965af[_0x3fda49];
  const _0x40ca14 = crypto["randomUUID"]();
  return await chrome["storage"]["local"]["set"]({ [_0x3fda49]: _0x40ca14 }), _0x40ca14;
}
async function verifyLicense(_0x4d2277) {
  const _0xdd33ab = await getDeviceId();
  log$h["info"]("Verifying license", { "key": _0x4d2277["slice"](0, 4) + "...", "deviceId": _0xdd33ab });
  const _0xadd874 = await callApi({ "action": "verify", "key": _0x4d2277, "deviceId": _0xdd33ab });
  return log$h["info"]("Verify result", { "valid": _0xadd874["valid"], "reason": _0xadd874["reason"] }), _0xadd874;
}
async function activateLicense(_0x4f056d, _0x215ed2) {
  const _0x3fe4c0 = await getDeviceId(), _0x4fb8a0 = _0x215ed2 || navigator["userAgent"] || "Unknown Device";
  log$h["info"]("Activating license", { "key": _0x4f056d["slice"](0, 4) + "...", "deviceName": _0x4fb8a0 });
  const _0x4738a8 = await callApi({ "action": "activate", "key": _0x4f056d, "deviceId": _0x3fe4c0, "deviceName": _0x4fb8a0 });
  return _0x4738a8["valid"] && (await chrome["storage"]["local"]["set"]({ "licenseKey": _0x4f056d, "licenseExpire": _0x4738a8["expireDate"] }), log$h["info"]("License activated", { "expireDate": _0x4738a8["expireDate"] })), _0x4738a8;
}
async function deactivateDevice(_0x37ca86, _0x22effc) {
  const _0x125062 = _0x22effc ?? await getDeviceId();
  log$h["info"]("Deactivating device", { "deviceId": _0x125062 });
  const _0x44e3e6 = await callApi({ "action": "deactivate", "key": _0x37ca86, "deviceId": _0x125062 });
  return (!_0x22effc || _0x22effc === await getDeviceId()) && (await chrome["storage"]["local"]["remove"](["licenseKey", "licenseExpire"]), log$h["info"]("Local license data cleared")), _0x44e3e6;
}
async function getSessions(_0x4c4a80) {
  return log$h["info"]("Fetching sessions"), callApi({ "action": "sessions", "key": _0x4c4a80 });
}
async function startSession(_0x4fe1ea) {
  const _0x3ad4af = await getDeviceId();
  log$h["info"]("start_session (pipeline gate)", { "key": _0x4fe1ea["slice"](0, 4) + "..." });
  const _0x8d056d = await callApi({ "action": "start_session", "key": _0x4fe1ea, "deviceId": _0x3ad4af });
  return log$h["info"]("start_session result", { "valid": _0x8d056d["valid"], "reason": _0x8d056d["reason"], "blocks": _0x8d056d["allowedBlocks"] }), _0x8d056d;
}
async function checkStoredLicense() {
  const _0x1352e6 = await chrome["storage"]["local"]["get"](["licenseKey"]);
  if (!_0x1352e6["licenseKey"]) return log$h["info"]("No stored license key"), null;
  try {
    return await verifyLicense(_0x1352e6["licenseKey"]);
  } catch (_0x4a2cea) {
    return log$h["error"]("License verification failed", _0x4a2cea), null;
  }
}
const log$g = createLogger("VersionService"), VERSION_URL = "https://www.autogention.com/dl/version.json", FETCH_TIMEOUT_MS = 8e3;
async function checkLatestVersion() {
  var _a2;
  const _0x4f9657 = APP_FULL_LABEL;
  try {
    const _0x1e3075 = new AbortController(), _0x26a43c = setTimeout(() => _0x1e3075["abort"](), FETCH_TIMEOUT_MS), _0x413ca6 = VERSION_URL + "?t=" + Date["now"](), _0x5e10b2 = await fetch(_0x413ca6, { "signal": _0x1e3075["signal"], "cache": "no-store" });
    clearTimeout(_0x26a43c);
    if (!_0x5e10b2["ok"]) return log$g["warn"]("Fetch failed: HTTP " + _0x5e10b2["status"]), { "ok": ![], "current": _0x4f9657, "error": "HTTP " + _0x5e10b2["status"] };
    const _0x1c8b7e = await _0x5e10b2["json"]();
    if (!((_a2 = _0x1c8b7e == null ? void 0 : _0x1c8b7e["latest"]) == null ? void 0 : _a2["fullLabel"])) return { "ok": ![], "current": _0x4f9657, "error": "Invalid version.json (missing latest.fullLabel)" };
    const _0x375076 = _0x1c8b7e["latest"]["fullLabel"]["trim"]() !== _0x4f9657["trim"]();
    return log$g["info"]('Version check: current="' + _0x4f9657 + '" latest="' + _0x1c8b7e["latest"]["fullLabel"] + '" outdated=' + _0x375076), { "ok": !![], "current": _0x4f9657, "info": _0x1c8b7e, "isOutdated": _0x375076, "fetchedAt": Date["now"]() };
  } catch (_0x2a6c94) {
    const _0xa9d650 = _0x2a6c94 instanceof Error ? _0x2a6c94["message"] : String(_0x2a6c94);
    return log$g["warn"]("Version check failed: " + _0xa9d650), { "ok": ![], "current": _0x4f9657, "error": _0xa9d650 };
  }
}
const TAB_URL_PATTERNS = ["https://labs.google/*", "https://labs.google.com/*", "https://aitestkitchen.withgoogle.com/*", "https://www.tiktok.com/*"];
async function collectContentScriptBuffers() {
  const _0x1db74c = [];
  try {
    const _0x45635a = await chrome["tabs"]["query"]({ "url": TAB_URL_PATTERNS });
    await Promise["all"](_0x45635a["map"](async (_0x528332) => {
      if (typeof _0x528332["id"] !== "number") return;
      try {
        const _0x4d9fe3 = await Promise["race"]([chrome["tabs"]["sendMessage"](_0x528332["id"], { "type": "LOG_BUFFER_COLLECT" }), new Promise((_0x3c1989) => setTimeout(() => _0x3c1989(null), 1500))]);
        _0x4d9fe3 && Array["isArray"](_0x4d9fe3["buffer"]) && _0x1db74c["push"]({ "source": _0x4d9fe3["source"] || "content", "tabUrl": _0x528332["url"], "buffer": _0x4d9fe3["buffer"] });
      } catch {
      }
    }));
  } catch {
  }
  return _0x1db74c;
}
const log$f = createLogger("LogReport"), ENDPOINT = "https://www.autogention.com/api/log-report", EXTENSION_TOKEN$2 = "agx_ext_2026_9Km2Vp4Rq7Ts1W", GLOBAL_LOG_KEY = "agx_global_log";
async function submitLogReport(_0x3a2663) {
  try {
    const _0x662e7e = await chrome["storage"]["local"]["get"]([GLOBAL_LOG_KEY, "licenseKey"]), _0x4aa855 = _0x662e7e[GLOBAL_LOG_KEY] || [], _0x548fd3 = _0x662e7e["licenseKey"] || "", _0x22e23e = _0x4aa855["slice"](-500)["map"]((_0x262b9b) => ({ "level": _0x262b9b["level"], "message": _0x262b9b["message"], "timestamp": _0x262b9b["timestamp"] })), _0x4f548f = [{ "source": "background", "buffer": getLoggerBuffer() }], _0x12cf2c = await collectContentScriptBuffers();
    _0x4f548f["push"](..._0x12cf2c);
    const _0x1dff5e = _0x4f548f["reduce"]((_0x469d28, _0x231339) => _0x469d28 + _0x231339["buffer"]["length"], 0);
    if (_0x22e23e["length"] === 0 && _0x1dff5e === 0) return { "ok": ![], "error": "ไม่มี log ให้ส่ง — ลองรัน pipeline ก่อน", "logCount": 0 };
    const _0x45b6b4 = { "licenseKey": _0x548fd3, "version": APP_FULL_LABEL, "userAgent": typeof navigator !== "undefined" ? navigator["userAgent"] : "", "note": (_0x3a2663 == null ? void 0 : _0x3a2663["trim"]()) || "", "logs": _0x22e23e, "console": _0x4f548f }, _0x5a9e35 = await fetch(ENDPOINT, { "method": "POST", "headers": { "Content-Type": "application/json", "X-Extension-Token": EXTENSION_TOKEN$2 }, "body": JSON["stringify"](_0x45b6b4) });
    if (!_0x5a9e35["ok"]) {
      const _0x59e995 = await _0x5a9e35["text"]()["catch"](() => "");
      return log$f["warn"]("Submit failed: HTTP " + _0x5a9e35["status"] + " " + _0x59e995["slice"](0, 100)), { "ok": ![], "error": "Server error: HTTP " + _0x5a9e35["status"], "logCount": _0x22e23e["length"] };
    }
    const _0x77f9 = await _0x5a9e35["json"]();
    if (!_0x77f9["ok"]) return { "ok": ![], "error": _0x77f9["reason"] || "unknown", "logCount": _0x22e23e["length"] };
    return log$f["info"]("Log report submitted: " + _0x77f9["reportId"] + " (" + _0x22e23e["length"] + " pipeline + " + _0x1dff5e + " console entries)"), { "ok": !![], "reportId": _0x77f9["reportId"], "logCount": _0x22e23e["length"] + _0x1dff5e };
  } catch (_0x30e680) {
    const _0x191514 = _0x30e680 instanceof Error ? _0x30e680["message"] : String(_0x30e680);
    return log$f["warn"]("Submit exception: " + _0x191514), { "ok": ![], "error": _0x191514 };
  }
}
function sleep$5(_0x58c131) {
  return new Promise((_0x55f556) => setTimeout(_0x55f556, _0x58c131));
}
async function waitForTabPredicate(_0x242e21, _0x1730ac, _0x144a63) {
  const _0x43672c = Date["now"]() + _0x144a63;
  while (Date["now"]() < _0x43672c) {
    try {
      const _0x36430f = await chrome["tabs"]["get"](_0x242e21);
      if (_0x36430f["status"] === "complete" && _0x1730ac(_0x36430f["url"])) return !![];
    } catch {
      return ![];
    }
    await sleep$5(500);
  }
  return ![];
}
const fakeFired = /* @__PURE__ */ new Set();
async function ensureTabUrl(_0x111cea, _0x5df5b2) {
  let _0x14c61b;
  try {
    const _0x28d744 = await chrome["tabs"]["get"](_0x111cea);
    _0x14c61b = _0x28d744["url"];
  } catch (_0x20aaed) {
    return sendPipelineLog$1("warn", "⚠ [" + _0x5df5b2["name"] + "] tab หาไม่เจอ: " + _0x20aaed), { "ok": ![], "recovered": ![] };
  }
  let _0x5491ca = ![];
  DEV["SOFT_RETRY_FAKE_WRONG_PAGE"] && !fakeFired["has"](_0x5df5b2["name"]) && (fakeFired["add"](_0x5df5b2["name"]), _0x5491ca = !![], sendPipelineLog$1("warn", "🧪 [" + _0x5df5b2["name"] + "] fake wrong-page (SOFT_RETRY_FAKE_WRONG_PAGE)"));
  if (!_0x5491ca && _0x5df5b2["predicate"](_0x14c61b)) return { "ok": !![], "recovered": ![], "finalUrl": _0x14c61b };
  sendPipelineLog$1("warn", "⚠ [" + _0x5df5b2["name"] + "] page drift (" + (_0x14c61b || "")["slice"](0, 60) + ") — recovering...");
  try {
    await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x111cea }, "func": () => {
      window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0x3c78d1) => {
        _0x3c78d1["stopImmediatePropagation"]();
      }, { "capture": !![] });
    } });
  } catch {
  }
  try {
    await chrome["tabs"]["update"](_0x111cea, { "active": !![], "url": _0x5df5b2["recoveryUrl"] });
  } catch (_0x571f18) {
    return sendPipelineLog$1("error", "❌ [" + _0x5df5b2["name"] + "] navigate fail: " + _0x571f18), { "ok": ![], "recovered": ![] };
  }
  const _0x189daa = await waitForTabPredicate(_0x111cea, () => !![], 1e4);
  !_0x189daa && sendPipelineLog$1("warn", "⚠ [" + _0x5df5b2["name"] + "] tab ไม่โหลดใน 10s");
  await sleep$5(_0x5df5b2["postNavWaitMs"]);
  if (_0x5df5b2["ensureFlowProject"]) try {
    await chrome["tabs"]["sendMessage"](_0x111cea, { "type": "FLOW_ENSURE_PROJECT" }), await sleep$5(3e3);
  } catch {
  }
  try {
    const _0x4f099a = await chrome["tabs"]["get"](_0x111cea), _0xdaa7ba = _0x4f099a["url"];
    if (_0x5df5b2["predicate"](_0xdaa7ba)) return sendPipelineLog$1("info", "✓ [" + _0x5df5b2["name"] + "] recovered → " + (_0xdaa7ba || "")["slice"](0, 60)), { "ok": !![], "recovered": !![], "finalUrl": _0xdaa7ba };
    return sendPipelineLog$1("error", "❌ [" + _0x5df5b2["name"] + "] recovery ล้มเหลว — still on " + (_0xdaa7ba || "")["slice"](0, 60)), { "ok": ![], "recovered": !![], "finalUrl": _0xdaa7ba };
  } catch (_0x5226ab) {
    return sendPipelineLog$1("error", "❌ [" + _0x5df5b2["name"] + "] re-probe fail: " + _0x5226ab), { "ok": ![], "recovered": !![] };
  }
}
const log$e = createLogger("Block:Upload");
async function toDataUrl(_0x35078f) {
  if (_0x35078f["startsWith"]("data:")) return _0x35078f;
  if (!/^https?:\/\//i["test"](_0x35078f)) throw new Error("Unsupported image source: " + _0x35078f["slice"](0, 60));
  const _0x2f1f35 = await fetch(_0x35078f);
  if (!_0x2f1f35["ok"]) throw new Error("fetch " + _0x2f1f35["status"] + " for " + _0x35078f["slice"](0, 80));
  const _0xcd37d3 = await _0x2f1f35["blob"](), _0x34eb0b = await _0xcd37d3["arrayBuffer"](), _0x2b8348 = new Uint8Array(_0x34eb0b);
  let _0x210f95 = "";
  const _0x37cdae = 32768;
  for (let _0x307e11 = 0; _0x307e11 < _0x2b8348["length"]; _0x307e11 += _0x37cdae) {
    _0x210f95 += String["fromCharCode"]["apply"](null, _0x2b8348["subarray"](_0x307e11, _0x307e11 + _0x37cdae));
  }
  const _0x36acfd = _0xcd37d3["type"] || "image/jpeg";
  return "data:" + _0x36acfd + ";base64," + btoa(_0x210f95);
}
async function execute$4(_0x2c8bce, _0x1adf13) {
  var _a2;
  const { flowTabId: _0x4ee2c8, product: _0x51e6f3, settings: _0x38534c } = _0x2c8bce;
  if (DEV["SKIP_UPLOAD"]) return sendPipelineLog$1("warn", "🚧 [DEV.SKIP_UPLOAD] ข้าม UPLOAD_AND_CONFIG — ใช้รูปที่ค้างใน Flow"), { "success": !![], "skipped": !![] };
  if (_0x51e6f3["productImages"]["length"] === 0) return { "success": ![], "error": "ไม่มีรูปสินค้า", "skipDownstream": !![] };
  const _0x247b63 = await ensureTabUrl(_0x4ee2c8, GUARD_FLOW_PROJECT);
  if (!_0x247b63["ok"]) return { "success": ![], "error": "Flow ไม่อยู่หน้า project (" + (_0x247b63["finalUrl"] || "unknown") + ")", "skipDownstream": !![] };
  log$e["info"]("Ensuring on Flow project page...");
  const _0x415556 = await chrome["tabs"]["sendMessage"](_0x4ee2c8, { "type": "FLOW_ENSURE_PROJECT" });
  if (_0x1adf13["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  if (!(_0x415556 == null ? void 0 : _0x415556["success"])) return { "success": ![], "error": "navigate ไปหน้า project ไม่สำเร็จ", "skipDownstream": !![] };
  log$e["info"]("Switching to All Media tab..."), await chrome["tabs"]["sendMessage"](_0x4ee2c8, { "type": "FLOW_SWITCH_TO_ALL_MEDIA" })["catch"](() => {
  });
  if (_0x1adf13["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x38681f = [..._0x51e6f3["productImages"]];
  if (_0x51e6f3["modelImage"]) _0x38681f["push"](_0x51e6f3["modelImage"]);
  const _0x4ad768 = [];
  for (let _0x1dc013 = 0; _0x1dc013 < _0x38681f["length"]; _0x1dc013++) {
    if (_0x1adf13["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
    const _0x514070 = _0x38681f[_0x1dc013];
    if (_0x514070["startsWith"]("data:")) {
      _0x4ad768["push"](_0x514070);
      continue;
    }
    try {
      log$e["info"]("Fetching image " + (_0x1dc013 + 1) + " from URL..."), _0x4ad768["push"](await toDataUrl(_0x514070));
    } catch (_0x28a7ab) {
      return { "success": ![], "error": "ดาวน์โหลดรูปที่ " + (_0x1dc013 + 1) + " ไม่สำเร็จ: " + (_0x28a7ab instanceof Error ? _0x28a7ab["message"] : String(_0x28a7ab)), "skipDownstream": !![] };
    }
  }
  log$e["info"]("Uploading " + _0x4ad768["length"] + " image(s) to Flow...");
  const _0xb3be87 = _0x38534c["slowUploadMode"] ? Math["max"](20, _0x38534c["customUploadWaitSec"] ?? 20) * 1e3 : 2e4, _0xfe1245 = await chrome["tabs"]["sendMessage"](_0x4ee2c8, { "type": "FLOW_UPLOAD_IMAGES", "payload": { "images": _0x4ad768, "uploadWaitMs": _0xb3be87 } });
  if (_0x1adf13["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  if (!(_0xfe1245 == null ? void 0 : _0xfe1245["success"])) return { "success": ![], "error": "Upload ล้มเหลว: " + ((_0xfe1245 == null ? void 0 : _0xfe1245["error"]) || "ไม่ทราบสาเหตุ"), "skipDownstream": !![] };
  const _0x47678d = _0xfe1245["tiles"] ?? [];
  if (_0x47678d["length"] > 0) {
    const _0x5d139a = _0x51e6f3["productImages"]["length"], _0x5826ea = _0x47678d["slice"](0, _0x5d139a)["map"]((_0x462a08) => ({ "tileId": _0x462a08["tileId"], "url": _0x462a08["url"] })), _0x5d1d55 = _0x51e6f3["modelImage"] && _0x47678d["length"] > _0x5d139a ? { "tileId": _0x47678d[_0x5d139a]["tileId"], "url": _0x47678d[_0x5d139a]["url"] } : null;
    _0x2c8bce["artifacts"]["uploadedImageTiles"] = { "product": _0x5826ea, "presenter": _0x5d1d55 }, log$e["info"]("Tracked uploaded tiles — product: " + (_0x5826ea["map"]((_0x598113) => {
      var _a3;
      return ((_a3 = _0x598113["tileId"]) == null ? void 0 : _a3["slice"](0, 12)) ?? "(url-only)";
    })["join"](", ") || "(none)") + (_0x5d1d55 ? " | presenter: " + (((_a2 = _0x5d1d55["tileId"]) == null ? void 0 : _a2["slice"](0, 12)) ?? "(url-only)") : ""));
  }
  return log$e["info"]("Upload complete: " + (_0xfe1245["uploaded"] || _0x4ad768["length"]) + " image(s)"), { "success": !![] };
}
const uploadAndConfigBlock = { "id": "UPLOAD_AND_CONFIG", "name": "อัพโหลด", "retries": 1, "execute": execute$4 };
const ERROR_PATTERNS = [{ "match": ["unusual activity", "we noticed"], "thai": "สร้างล้มเหลว" }, { "match": ["quota", "rate limit", "too many request"], "thai": "โควต้าใช้งาน Flow เต็ม — รอ 1-2 ชั่วโมงแล้วลองใหม่ หรือเปลี่ยนเป็นบัญชี Google ที่ยังเหลือโควต้า" }, { "match": ["content policy", "safety", "inappropriate", "policy violation"], "thai": "เนื้อหา prompt ขัดนโยบาย Flow — ปรับ prompt ให้สุภาพ ลดคำที่อาจสื่อความรุนแรง/เพศ/ตัวจริงคน แล้วลองใหม่" }, { "match": ["not signed in", "sign in", "login required", "authentication"], "thai": "บัญชี Google ของ Flow หลุด — เปิดแท็บ Flow แล้ว login ใหม่ก่อนรัน pipeline" }, { "match": ["network", "connection", "timeout", "timed out"], "thai": "Flow ตอบกลับช้า/network สะดุด — ระบบจะ retry อัตโนมัติ ถ้ายังไม่ได้ลอง refresh tab" }, { "match": ["try again", "temporary", "something went wrong"], "thai": "Flow แจ้ง error ชั่วคราว — ระบบจะ retry อัตโนมัติ" }, { "match": ["generation failed", "failed to generate", "failed"], "thai": "Flow gen ไม่สำเร็จ — กำลัง retry (ถ้าครบ 3 ครั้งจะหยุด)" }];
function translateFlowError(_0xd4fc6c) {
  if (!_0xd4fc6c || !_0xd4fc6c["trim"]()) return "Flow แจ้ง error — ไม่ทราบสาเหตุ (ไม่พบข้อความใน tile)";
  const _0x70a51d = _0xd4fc6c["toLowerCase"]();
  for (const _0x3fa2d7 of ERROR_PATTERNS) {
    if (_0x3fa2d7["match"]["some"]((_0x2ade9f) => _0x70a51d["includes"](_0x2ade9f))) return _0x3fa2d7["thai"];
  }
  const _0x4fb639 = _0xd4fc6c["trim"]()["slice"](0, 200);
  return "Flow แจ้ง: " + _0x4fb639;
}
const log$d = createLogger("AIService");
async function testGemini(_0x36989f) {
  if (!_0x36989f["apiKey"]) return { "success": ![], "error": "API Key ว่างเปล่า" };
  const _0x5817f7 = Date["now"]();
  try {
    const _0x3a5f65 = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=" + encodeURIComponent(_0x36989f["apiKey"]) + "&pageSize=1", { "method": "GET" }), _0xee555f = Date["now"]() - _0x5817f7;
    if (_0x3a5f65["ok"]) return { "success": !![], "latencyMs": _0xee555f };
    const _0x265195 = await _0x3a5f65["text"]()["catch"](() => ""), _0x3bee6f = parseErrorMessage(_0x265195) || "HTTP " + _0x3a5f65["status"];
    if (_0x3a5f65["status"] === 400 || _0x3a5f65["status"] === 401 || _0x3a5f65["status"] === 403) return { "success": ![], "error": "API Key ไม่ถูกต้อง (" + _0x3bee6f + ")", "latencyMs": _0xee555f };
    return { "success": ![], "error": _0x3bee6f, "latencyMs": _0xee555f };
  } catch (_0x49b2ca) {
    return { "success": ![], "error": "เชื่อมต่อไม่ได้: " + _0x49b2ca };
  }
}
async function testOpenAI(_0x4bd68c) {
  if (!_0x4bd68c["apiKey"]) return { "success": ![], "error": "API Key ว่างเปล่า" };
  const _0xa693fd = Date["now"]();
  try {
    const _0x5c99e3 = await fetch("https://api.openai.com/v1/models", { "method": "GET", "headers": { "Authorization": "Bearer " + _0x4bd68c["apiKey"] } }), _0x115c8b = Date["now"]() - _0xa693fd;
    if (_0x5c99e3["ok"]) return { "success": !![], "latencyMs": _0x115c8b };
    const _0x46aed4 = await _0x5c99e3["text"]()["catch"](() => ""), _0x331945 = parseErrorMessage(_0x46aed4) || "HTTP " + _0x5c99e3["status"];
    if (_0x5c99e3["status"] === 401) return { "success": ![], "error": "API Key ไม่ถูกต้อง (" + _0x331945 + ")", "latencyMs": _0x115c8b };
    if (_0x5c99e3["status"] === 429) return { "success": ![], "error": "เกินโควต้า/rate limit (" + _0x331945 + ")", "latencyMs": _0x115c8b };
    return { "success": ![], "error": _0x331945, "latencyMs": _0x115c8b };
  } catch (_0x18802e) {
    return { "success": ![], "error": "เชื่อมต่อไม่ได้: " + _0x18802e };
  }
}
function parseErrorMessage(_0x5b63d0) {
  var _a2, _b2;
  try {
    const _0x231aa4 = JSON["parse"](_0x5b63d0);
    return (((_a2 = _0x231aa4 == null ? void 0 : _0x231aa4["error"]) == null ? void 0 : _a2["message"]) || ((_b2 = _0x231aa4 == null ? void 0 : _0x231aa4["error"]) == null ? void 0 : _b2["status"]) || (_0x231aa4 == null ? void 0 : _0x231aa4["message"]) || "")["toString"]();
  } catch {
    return _0x5b63d0["slice"](0, 120);
  }
}
async function testProvider(_0x1865f3, _0x572639) {
  log$d["info"]("Testing " + _0x1865f3 + "...");
  switch (_0x1865f3) {
    case "gemini":
      return testGemini(_0x572639);
    case "openai":
      return testOpenAI(_0x572639);
    default:
      return { "success": ![], "error": "Unknown provider: " + _0x1865f3 };
  }
}
async function generateText(_0xa814ec) {
  try {
    switch (_0xa814ec["provider"]) {
      case "gemini":
        return await genGemini(_0xa814ec);
      case "openai":
        return await genOpenAI(_0xa814ec);
    }
  } catch (_0x39e417) {
    return { "success": ![], "error": String(_0x39e417) };
  }
}
async function genGemini(_0x25040d) {
  var _a2, _b2, _c, _d, _e;
  const _0x3b25aa = _0x25040d["model"] || "gemini-2.5-flash", _0x588c33 = "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(_0x3b25aa) + ":generateContent?key=" + encodeURIComponent(_0x25040d["apiKey"]), _0x23a7c3 = [...(_0x25040d["images"] ?? [])["map"]((_0x2d60aa) => ({ "inlineData": { "mimeType": _0x2d60aa["mimeType"], "data": _0x2d60aa["base64"] } })), { "text": _0x25040d["user"] }], _0x5998b1 = [..._0x25040d["system"] ? [{ "role": "user", "parts": [{ "text": "System: " + _0x25040d["system"] }] }] : [], { "role": "user", "parts": _0x23a7c3 }], _0x186589 = await fetch(_0x588c33, { "method": "POST", "headers": { "Content-Type": "application/json" }, "body": JSON["stringify"]({ "contents": _0x5998b1, "generationConfig": { "maxOutputTokens": _0x25040d["maxTokens"] ?? 1024, "temperature": _0x25040d["temperature"] ?? 0.7 } }) });
  if (!_0x186589["ok"]) return { "success": ![], "error": parseErrorMessage(await _0x186589["text"]()) || "HTTP " + _0x186589["status"] };
  const _0x46a0e9 = await _0x186589["json"](), _0x4a312c = ((_c = (_b2 = (_a2 = _0x46a0e9 == null ? void 0 : _0x46a0e9["candidates"]) == null ? void 0 : _a2[0]) == null ? void 0 : _b2["content"]) == null ? void 0 : _c["parts"]) ?? [], _0x2bf7f1 = _0x4a312c["filter"]((_0x21dfe9) => !_0x21dfe9["thought"] && typeof _0x21dfe9["text"] === "string")["map"]((_0x13ce44) => _0x13ce44["text"])["join"]("") || void 0, _0x5d45b7 = ((_e = (_d = _0x46a0e9 == null ? void 0 : _0x46a0e9["candidates"]) == null ? void 0 : _d[0]) == null ? void 0 : _e["finishReason"]) ?? "";
  return _0x5d45b7 === "MAX_TOKENS" && log$d["warn"]("genGemini: MAX_TOKENS hit — response may be truncated (got " + ((_0x2bf7f1 == null ? void 0 : _0x2bf7f1["length"]) ?? 0) + " chars)"), _0x2bf7f1 ? { "success": !![], "text": _0x2bf7f1 } : { "success": ![], "error": "empty response" };
}
async function genOpenAI(_0x7fa30e) {
  var _a2, _b2, _c, _d;
  const _0x5a1486 = _0x7fa30e["model"] || "gpt-4o-mini", _0x4c5c95 = ((_a2 = _0x7fa30e["images"]) == null ? void 0 : _a2["length"]) ? [..._0x7fa30e["images"]["map"]((_0x22c8c2) => ({ "type": "image_url", "image_url": { "url": "data:" + _0x22c8c2["mimeType"] + ";base64," + _0x22c8c2["base64"] } })), { "type": "text", "text": _0x7fa30e["user"] }] : _0x7fa30e["user"], _0x42cccd = await fetch("https://api.openai.com/v1/chat/completions", { "method": "POST", "headers": { "Content-Type": "application/json", "Authorization": "Bearer " + _0x7fa30e["apiKey"] }, "body": JSON["stringify"]({ "model": _0x5a1486, "messages": [..._0x7fa30e["system"] ? [{ "role": "system", "content": _0x7fa30e["system"] }] : [], { "role": "user", "content": _0x4c5c95 }], "max_tokens": _0x7fa30e["maxTokens"] ?? 1024, "temperature": _0x7fa30e["temperature"] ?? 0.7 }) });
  if (!_0x42cccd["ok"]) return { "success": ![], "error": parseErrorMessage(await _0x42cccd["text"]()) || "HTTP " + _0x42cccd["status"] };
  const _0x25f2d7 = await _0x42cccd["json"](), _0x1f319b = (_d = (_c = (_b2 = _0x25f2d7 == null ? void 0 : _0x25f2d7["choices"]) == null ? void 0 : _b2[0]) == null ? void 0 : _c["message"]) == null ? void 0 : _d["content"];
  return _0x1f319b ? { "success": !![], "text": _0x1f319b } : { "success": ![], "error": "empty response" };
}
const AI_ERROR_PATTERNS = [{ "match": ["high demand", "spikes in demand", "overloaded", "capacity"], "thai": "AI โมเดลกำลังโหลดสูง — รอ 1-2 นาทีแล้วลองใหม่ (มักหายเอง)" }, { "match": ["quota", "rate limit", "429", "too many request", "resource_exhausted"], "thai": "ใช้ AI เกินโควต้า — เปลี่ยน API key ใหม่ หรือรอ 1 ชม." }, { "match": ["safety", "blocked", "violation", "harm", "sexually", "hate", "recitation"], "thai": "AI ถูก safety filter บล็อก — ปรับ prompt ให้สุภาพ ลดคำเสี่ยง" }, { "match": ["api key", "apikey", "authentication", "401", "unauthorized", "invalid_api", "permission_denied"], "thai": "API key ผิดหรือหมดอายุ — เช็ค Settings → AI Provider" }, { "match": ["503", "service unavailable", "internal server", "500", "unavailable"], "thai": "เซิร์ฟเวอร์ AI ขัดข้องชั่วคราว — รอ 5 นาทีแล้วลองใหม่" }, { "match": ["network", "fetch failed", "econnreset", "enotfound", "failed to fetch"], "thai": "Network สะดุด — ตรวจอินเทอร์เน็ตหรือ VPN แล้วลองใหม่" }, { "match": ["timeout", "timed out", "deadline"], "thai": "AI ตอบช้าเกินเวลารอ — ลองใหม่ ถ้ายัง ตัด prompt ให้สั้นลง" }, { "match": ["context length", "context_length", "token limit", "too long", "maximum context"], "thai": "Prompt ยาวเกินขีดจำกัด AI — ลด details/scene count" }, { "match": ["parse", "invalid json", "unexpected token", "malformed"], "thai": "AI ส่ง JSON มาไม่ถูก — ระบบจะ retry อัตโนมัติ" }, { "match": ["model not found", "unknown model", "invalid_model", "no such model"], "thai": "ชื่อ model ไม่ถูกต้อง — เช็ค Settings → AI Model" }];
function translateAIError(_0xf935a5) {
  if (!_0xf935a5 || !_0xf935a5["trim"]()) return "AI ผิดพลาดโดยไม่ทราบสาเหตุ";
  const _0x25f218 = _0xf935a5["toLowerCase"]();
  for (const _0x557b4e of AI_ERROR_PATTERNS) {
    if (_0x557b4e["match"]["some"]((_0x4db9a1) => _0x25f218["includes"](_0x4db9a1))) return _0x557b4e["thai"];
  }
  return _0xf935a5["trim"]()["slice"](0, 200);
}
const PANEL_STATE_KEY = "agx_panel_state";
async function tryUserAIGenerate(_0x531100, _0x35083a, _0x2b8716 = "AI") {
  var _a2;
  if (DEV["FORCE_AI_FALLBACK"]) return sendPipelineLog$1("warn", "🚧 [DEV.FORCE_AI_FALLBACK] [" + _0x2b8716 + "] ข้าม AI — ใช้ fallback"), { "success": ![], "error": "DEV.FORCE_AI_FALLBACK is on" };
  const _0x54bcbb = await loadPanelSettings();
  if (!_0x54bcbb) return sendPipelineLog$1("notice", "ℹ [" + _0x2b8716 + "] ไม่ได้ตั้งค่า API — ใช้ของระบบแทน"), { "success": ![], "error": "No settings stored" };
  const _0x159627 = _0x54bcbb["aiProvider"] || "gemini", _0xa5ee08 = { "gemini": _0x54bcbb["gemini"] || { "apiKey": "" }, "openai": _0x54bcbb["openai"] || { "apiKey": "" } }, _0x3bbffb = (_0x5af778) => {
    var _a3, _b2;
    return !!((_b2 = (_a3 = _0xa5ee08[_0x5af778]) == null ? void 0 : _a3["apiKey"]) == null ? void 0 : _b2["trim"]());
  }, _0x462f13 = [_0x159627, ...["gemini", "openai"]["filter"]((_0x46b2ef) => _0x46b2ef !== _0x159627)]["filter"](_0x3bbffb);
  if (_0x462f13["length"] === 0) return sendPipelineLog$1("notice", "ℹ [" + _0x2b8716 + "] ไม่ได้ตั้งค่า API — ใช้ของระบบแทน"), { "success": ![], "error": "No API keys configured" };
  !_0x3bbffb(_0x159627) && sendPipelineLog$1("warn", "⚠ [" + _0x2b8716 + "] ยังไม่ได้ตั้ง " + _0x159627["toUpperCase"]() + " API key (หรือยังไม่ได้กด Save) — ใช้ " + _0x462f13[0]["toUpperCase"]() + " แทน");
  let _0x46d201 = { "success": ![], "error": "No providers tried" };
  for (const _0x145731 of _0x462f13) {
    const _0x58af66 = _0xa5ee08[_0x145731];
    sendPipelineLog$1("info", "🌐 [" + _0x2b8716 + "] เรียก AI (" + _0x145731 + ")...");
    const _0x4b46bb = Date["now"](), _0x106951 = await generateText({ "provider": _0x145731, "apiKey": _0x58af66["apiKey"]["trim"](), "model": _0x58af66["model"], "user": _0x531100, "system": _0x35083a }), _0x58a5b5 = Date["now"]() - _0x4b46bb;
    if (_0x106951["success"]) {
      const _0x3b8fb7 = ((_a2 = _0x106951["text"]) == null ? void 0 : _a2["length"]) ?? 0;
      return sendPipelineLog$1("success", "✓ [" + _0x2b8716 + "] AI สำเร็จ (" + _0x145731 + ", " + _0x58a5b5 + "ms, " + _0x3b8fb7 + " chars)"), _0x106951;
    }
    _0x46d201 = _0x106951, sendPipelineLog$1("warn", "⚠ [" + _0x2b8716 + "] " + _0x145731 + " ล้มเหลว (" + _0x58a5b5 + "ms): " + translateAIError(_0x106951["error"]));
  }
  return sendPipelineLog$1("error", "❌ [" + _0x2b8716 + "] AI ล้มเหลวทุก provider: " + translateAIError(_0x46d201["error"])), _0x46d201;
}
async function tryUserAIGenerateWithImages(_0x549507, _0x30cc94, _0x1a3edb, _0x5efec9 = "AI Vision") {
  var _a2;
  if (DEV["FORCE_AI_FALLBACK"]) return sendPipelineLog$1("warn", "🚧 [DEV.FORCE_AI_FALLBACK] [" + _0x5efec9 + "] ข้าม AI Vision — ใช้ fallback"), { "success": ![], "error": "DEV.FORCE_AI_FALLBACK is on" };
  const _0x3b10c7 = await loadPanelSettings();
  if (!_0x3b10c7) return sendPipelineLog$1("notice", "ℹ [" + _0x5efec9 + "] ไม่ได้ตั้งค่า API — ใช้ของระบบแทน"), { "success": ![], "error": "No settings stored" };
  const _0xb1c876 = _0x3b10c7["aiProvider"] || "gemini", _0x249d9d = { "gemini": _0x3b10c7["gemini"] || { "apiKey": "" }, "openai": _0x3b10c7["openai"] || { "apiKey": "" } }, _0x108da4 = (_0xb31dc8) => {
    var _a3, _b2;
    return !!((_b2 = (_a3 = _0x249d9d[_0xb31dc8]) == null ? void 0 : _a3["apiKey"]) == null ? void 0 : _b2["trim"]());
  }, _0x3aba7b = [_0xb1c876, ...["gemini", "openai"]["filter"]((_0x493b38) => _0x493b38 !== _0xb1c876)]["filter"](_0x108da4);
  if (_0x3aba7b["length"] === 0) return sendPipelineLog$1("notice", "ℹ [" + _0x5efec9 + "] ไม่ได้ตั้งค่า API — ใช้ของระบบแทน"), { "success": ![], "error": "No API keys configured" };
  !_0x108da4(_0xb1c876) && sendPipelineLog$1("warn", "⚠ [" + _0x5efec9 + "] ยังไม่ได้ตั้ง " + _0xb1c876["toUpperCase"]() + " API key (หรือยังไม่ได้กด Save) — ใช้ " + _0x3aba7b[0]["toUpperCase"]() + " แทน");
  let _0x109abd = { "success": ![], "error": "No providers tried" };
  for (const _0x4428da of _0x3aba7b) {
    const _0x343649 = _0x249d9d[_0x4428da];
    sendPipelineLog$1("info", "🌐 [" + _0x5efec9 + "] เรียก AI (" + _0x4428da + ") (" + _0x30cc94["length"] + " รูป)...");
    const _0x1a2291 = Date["now"](), _0x511510 = await generateText({ "provider": _0x4428da, "apiKey": _0x343649["apiKey"]["trim"](), "model": _0x343649["model"], "user": _0x549507, "system": _0x1a3edb, "images": _0x30cc94 }), _0x32d944 = Date["now"]() - _0x1a2291;
    if (_0x511510["success"]) {
      const _0x343b3f = ((_a2 = _0x511510["text"]) == null ? void 0 : _a2["length"]) ?? 0;
      return sendPipelineLog$1("success", "✓ [" + _0x5efec9 + "] AI สำเร็จ (" + _0x4428da + ", " + _0x32d944 + "ms, " + _0x343b3f + " chars)"), _0x511510;
    }
    _0x109abd = _0x511510, sendPipelineLog$1("warn", "⚠ [" + _0x5efec9 + "] " + _0x4428da + " ล้มเหลว (" + _0x32d944 + "ms): " + translateAIError(_0x511510["error"]));
  }
  return sendPipelineLog$1("error", "❌ [" + _0x5efec9 + "] AI ล้มเหลวทุก provider: " + translateAIError(_0x109abd["error"])), _0x109abd;
}
async function loadPanelSettings() {
  try {
    const _0x769172 = await chrome["storage"]["local"]["get"](PANEL_STATE_KEY), _0x40f80a = _0x769172[PANEL_STATE_KEY];
    return (_0x40f80a == null ? void 0 : _0x40f80a["settings"]) || null;
  } catch {
    return null;
  }
}
function pickRandom$2(_0x129a4f) {
  return _0x129a4f[Math["floor"](Math["random"]() * _0x129a4f["length"])];
}
function shuffleInPlace(_0x4cfd89) {
  for (let _0x4920aa = _0x4cfd89["length"] - 1; _0x4920aa > 0; _0x4920aa--) {
    const _0x194636 = Math["floor"](Math["random"]() * (_0x4920aa + 1));
    [_0x4cfd89[_0x4920aa], _0x4cfd89[_0x194636]] = [_0x4cfd89[_0x194636], _0x4cfd89[_0x4920aa]];
  }
  return _0x4cfd89;
}
const VOICE_VARIATIONS = { "adult_female": { "gender": "female", "descs": ["Thai woman in her late 20s, warm and friendly", "Thai female, late twenties, warm tone with friendly vibe", "Thai woman around 27-29, warm voice, approachable and friendly"] }, "adult_male": { "gender": "male", "descs": ["Thai man in his late 20s, confident and clear", "Thai male, late twenties, clear confident tone", "Thai man around 27-29, confident voice, articulate and clear"] }, "teen_female": { "gender": "female", "descs": ["young Thai woman, early 20s, bright and energetic", "young Thai female around 21-24, bright and lively tone", "Thai woman in her early twenties, energetic and cheerful"] }, "teen_male": { "gender": "male", "descs": ["young Thai man, early 20s, casual and lively", "young Thai male around 21-24, casual lively tone", "Thai man in his early twenties, casual and upbeat"] }, "elder_female": { "gender": "female", "descs": ["Thai woman in her 40s, warm and trustworthy", "Thai female around 40-45, mature warm voice, trustworthy", "Thai woman, forties, experienced warm tone, reliable"] }, "elder_male": { "gender": "male", "descs": ["Thai man in his 40s, deep voice, authoritative", "Thai male around 40-45, deep authoritative voice", "Thai man, forties, mature deep voice, commanding presence"] } };
const VIDEO_STYLE_VARIATIONS = { "ugc_review": ["UGC natural style. Person holds product toward camera, relaxed casual movement.", "Natural UGC review style. Subject shows product to camera with relaxed casual motion.", "Casual UGC style. Person casually presents product toward the camera, natural movement."], "usage_review": ["The presenter demonstrates the product in actual use, going through the steps clearly while explaining each one in plain terms.", "Hands-on demo: the presenter uses the product step by step and explains what they are doing as they go.", "The presenter shows the product in real use, walking through how it works in an easy-to-follow way."], "hands_only": ["Hands-only demo, no face shown — the hands use and operate the product while a voice-over reviews it, the shot focused on the product and its use.", "Close-up of hands using the product, the face never visible, with a voice-over review highlighting the real usage.", "Only the hands are seen operating the product, no face; the voice-over reviews while the product use is clearly shown."], "try_on": ["The presenter wears/tries on the product and reviews it, turning and moving so the fit and the real look are clear.", "Wearing the product, the presenter reviews it while moving naturally to show how it fits and looks.", "The presenter puts the product on and reviews it, with natural movement showing the fitting and the real-life look."], "professional": ["Clean professional framing. Person presents product confidently, steady camera.", "Professional presentation style. Subject shows product with confidence, camera held steady.", "Polished professional framing. Person confidently presents product with stable camera work."], "studio_podcast": ["Studio setting. Person seated, facing camera directly, minimal movement.", "Podcast studio setup. Subject sits facing camera, keeps movements minimal.", "Studio recording scene. Person seated, looking directly at camera, restrained motion."], "desk_talk": ["Desk setup. Person leans slightly forward, holding product up to show.", "At-desk framing. Subject leans forward a bit, holds product up for viewers.", "Desk scene. Person tilts forward slightly while presenting product upward."], "walk_talk": ["Walking naturally while holding product, casual handheld camera feel.", "Walking style. Subject holds product as they walk, casual handheld aesthetic.", "Walk-and-talk feel. Person walks naturally with product, handheld camera energy."], "white_studio": ["Clean white background. Person presents product with clear lighting.", "White backdrop studio. Subject shows product with bright even lighting.", "Minimal white background. Person presents product in clean clear light."], "cafe": ["Cafe background. Relaxed atmosphere, person holds product naturally.", "In a cafe. Relaxed vibe, subject holds product in natural pose.", "Cafe setting. Easy atmosphere, person naturally shows product to camera."], "outdoor": ["Outdoor natural setting. Person shows product in natural environment.", "Outdoors. Subject presents product within natural surroundings.", "Open outdoor scene. Person displays product in a natural environment."] };
const IMAGE_STYLE_VARIATIONS = { "luxury_studio": ["Luxury Studio style", "High-end studio photography style", "Premium studio aesthetic"], "premium_catalog": ["Premium Catalog style", "High-end catalog photography", "Premium product catalog aesthetic"], "clean_minimal": ["Clean Minimal style", "Minimalist clean aesthetic", "Clean minimalist photography style"], "cinematic_moody": ["Cinematic Moody style", "Moody cinematic aesthetic", "Cinematic dramatic moody style"], "soft_daylight": ["Soft Daylight style", "Soft natural daylight aesthetic", "Gentle daylight photography style"], "bright_airy": ["Bright and Airy style", "Bright airy aesthetic", "Airy and bright photography feel"], "high_contrast": ["High Contrast style", "Strong contrast aesthetic", "Bold high-contrast photography"], "dark_lux": ["Dark Luxury style", "Dark premium aesthetic", "Moody luxury dark photography style"], "marble_lux": ["Marble Luxury style", "Marble premium aesthetic", "Luxurious marble photography style"], "gold_accent": ["Gold Accent style", "Gold-accented aesthetic", "Warm gold accent photography style"], "lifestyle_real": ["Lifestyle Real style", "Real lifestyle aesthetic", "Natural lifestyle photography feel"], "ugc_natural": ["Natural UGC style", "UGC natural aesthetic", "Authentic UGC photography feel"], "pastel_soft": ["Pastel Soft style", "Soft pastel aesthetic", "Gentle pastel photography style"], "pop_color": ["Pop Color style", "Vibrant pop color aesthetic", "Bold pop-color photography"], "retro_film": ["Retro Film style", "Vintage film aesthetic", "Nostalgic retro film look"], "futuristic_tech": ["Futuristic Tech style", "Tech futuristic aesthetic", "Sci-fi tech photography style"], "nordic_home": ["Nordic Home style", "Scandinavian home aesthetic", "Nordic interior photography feel"], "macro_detail": ["Macro Detail style", "Close-up macro aesthetic", "Macro detail photography style"] };
const SCENE_VARIATIONS = { "from_image": ["the same background/environment as the reference image", "a setting matching the reference image background", "an environment identical to the reference image"], "studio": ["a photography studio", "a photo studio setup", "a professional studio setting"], "bedroom": ["a bedroom", "a bedroom interior", "a styled bedroom space"], "living_room": ["a modern living room", "a contemporary living room", "a stylish modern living space"], "kitchen": ["a kitchen", "a kitchen interior", "a well-designed kitchen space"], "bathroom": ["a bathroom", "a modern bathroom", "a clean bathroom interior"], "office": ["an office", "an office workspace", "a modern office interior"], "cafe": ["a cafe", "a cozy cafe interior", "a stylish cafe setting"], "restaurant": ["a restaurant", "a restaurant interior", "a well-lit restaurant setting"], "shop": ["a shop interior", "a retail shop space", "a boutique shop interior"], "market": ["a market", "a local market scene", "a bustling market setting"], "mall": ["a shopping mall", "a mall interior", "a modern shopping mall space"], "beach": ["a beach", "a sandy beach setting", "a sunny beach scene"], "garden": ["a garden", "a lush garden setting", "a flower-filled garden scene"], "park": ["a park", "a park setting", "a green park scene"], "street": ["a street", "a city street", "a street scene"], "rooftop": ["a rooftop", "a rooftop view", "a rooftop setting"], "gym": ["a gym", "a modern gym interior", "a fitness gym space"], "hotel": ["a hotel room", "a stylish hotel suite", "a well-appointed hotel room"], "countryside": ["a countryside setting", "a rural countryside scene", "a peaceful countryside"], "temple": ["a temple area", "a temple setting", "a serene temple scene"], "warehouse": ['a clearance-sale warehouse, large piles of the exact same product stacked neatly in bins and on shelves, handmade paper signs on the crates with short HANDWRITTEN THAI text such as "ลดล้างสต็อก" or "ลดราคา" (render the letters as real legible Thai script — not gibberish, not English), a few shoppers browsing and grabbing items', 'a department-store clearance stockroom, the same product piled in baskets and on racks, handmade Thai-language sale signs taped to the boxes such as "ลดล้างสต็อก" (legible real Thai characters), a lively crowd picking up items', 'an organized warehouse with shelves of goods, a big pile of the same item front and center, handmade signs handwritten in Thai such as "ลดล้างสต็อก" (real Thai script), busy shoppers in the background'] };
const LIGHTING_VARIATIONS = { "natural": ["natural indoor daylight streaming from nearby windows", "warm ambient daylight with soft window diffusion", "soft diffused daylight from a nearby window"], "softbox": ["soft studio softbox lighting", "softbox studio lighting, gentle and even", "studio softbox light, soft diffused quality"], "ring_light": ["ring light, even flat lighting", "ring-light lighting, flat and even", "even flat light from a ring light"], "high_key": ["high-key bright even lighting", "bright high-key lighting, minimal shadows", "high-key lighting setup, bright and even"], "golden_hour": ["warm golden hour sunlight", "golden hour light, warm and glowing", "warm sunlight during golden hour"], "window": ["soft natural window light from the side", "side window light, soft and natural", "soft daylight coming through a side window"], "cinematic": ["cinematic dramatic moody lighting", "moody cinematic lighting with drama", "dramatic cinematic light, moody atmosphere"], "neon": ["neon colorful ambient lighting", "ambient neon light, colorful glow", "colorful neon ambient lighting"], "daylight": ["bright outdoor daylight", "outdoor daylight, bright and clear", "natural bright daylight outdoors"], "candlelight": ["warm candlelight glow", "candlelight, warm glowing mood", "soft warm candlelight glow"], "backlight": ["backlight rim glow behind subject", "rim-light backlight behind the subject", "backlight creating rim glow on subject"], "night": ["dim night low-light atmosphere", "low-light nighttime mood", "night-time dim atmospheric light"] };
const CAMERA_VARIATIONS = { "closeup": ["Close-up shot", "Tight close-up framing", "Close-up composition"], "medium": ["Medium shot, full product visible", "Medium framing with full product in view", "Medium-distance shot showing the product fully"], "wide": ["Wide shot", "Wide-angle framing", "Wide composition"], "high": ["High angle shot looking down", "High-angle view from above", "Top-down high angle shot"], "low": ["Low angle shot looking up", "Low-angle view from below", "Low angle looking upward"] };
const SCRIPT_STYLE_VARIATIONS = { "normal": ["natural conversational delivery, relaxed and clear", "easygoing everyday tone, friendly and natural", "plain natural speaking style, calm and clear"], "cheeky": ["playful cheeky teasing tone, lightly provocative", "sassy mischievous delivery with a wink", "cheeky banter, playfully poking fun"], "raw": ["raw blunt unfiltered tone, gritty and direct", "rough honest street delivery, no sugarcoating", "gritty raw talk, candid and unpolished"], "posh": ["refined elegant tone, polished and graceful", "classy upscale delivery, articulate and poised", "genteel sophisticated speech, smooth and refined"], "hard_sell": ["high-energy hard-sell pitch, urgent and persuasive", "aggressive sales push, punchy and compelling", "fast urgent salesy delivery, driving to action"], "isan": ["warm Isan-Thai countryside vibe, casual rural friendliness", "down-to-earth northeastern Thai flavor, folksy and warm", "easygoing Isan local tone, homely and approachable"], "northern": ["gentle northern-Thai (Kham Mueang) lilt, soft and melodic", "soft Lanna northern dialect flavor, mellow and warm", "easy northern-Thai tone, soft-spoken and kind"], "cute": ["cute bubbly sweet tone, playful and adorable", "aegyo-style cutesy delivery, light and charming", "sweet bubbly chatter, soft and endearing"], "confident": ["confident assured tone, clear and self-assured", "bold confident delivery, decisive and strong", "self-assured persuasive voice, calm and commanding"], "haunting": ["eerie hushed haunting tone, mysterious and unsettling", "creepy whispery delivery, spine-tingling and dark", "ghostly haunting voice, low and ominous"], "fantasy": ["whimsical fairy-tale storytelling tone, wondrous and magical", "enchanting dreamy delivery like a storybook narrator", "magical wondrous voice, imaginative and lyrical"], "action": ["intense punchy action-movie tone, energetic and dramatic", "high-octane action delivery, fast and forceful", "adrenaline-charged voice, bold and explosive"], "festival": ["festive celebratory tone, upbeat and joyful", "party-vibe delivery, cheerful and lively", "holiday celebration energy, warm and exciting"], "resilient": ["inspiring resilient tone, heartfelt and motivating", "never-give-up uplifting delivery, sincere and strong", "gritty hopeful voice, warm and encouraging"], "romantic": ["soft romantic tone, warm and tender", "sweet affectionate delivery, gentle and loving", "dreamy romantic voice, intimate and warm"], "comedy_insult": ["comedic roasting tone, witty and cheekily savage", "playful insult-comedy delivery, sharp and funny", "sassy roast humor, teasing but lighthearted"], "peaceful": ["calm peaceful tone, soothing and serene", "tranquil gentle delivery, soft and relaxing", "serene mellow voice, slow and calming"], "exciting": ["hyped excited tone, fast and enthusiastic", "thrilled energetic delivery, buzzing with excitement", "pumped-up lively voice, eager and animated"], "whisper": ["hushed intimate near-whisper delivery, soft and close", "quiet whispery tone, gentle and secretive", "soft breathy whisper, intimate and tender"], "trembling_fear": ["trembling fearful tone, shaky and tense", "nervous frightened delivery, voice quivering with unease", "scared shaky voice, anxious and on-edge"] };
function resolveScriptStyleTone(_0x305b63) {
  const _0x374098 = SCRIPT_STYLE_VARIATIONS[_0x305b63 || ""] ?? SCRIPT_STYLE_VARIATIONS["normal"];
  return pickRandom$2(_0x374098);
}
const DEFAULT_FORBIDDEN_SPEECH_WORDS = ["ที่สุด", "อันดับ1", "หายขาด", "รักษา", "บำบัด", "ป้องกัน", "ยา", "ขาว", "ขาวไว", "ผอม", "ลดน้ำหนัก", "ลดความอ้วน", "ระเบิดไขมัน", "สลายไขมัน", "เห็นผลทันที", "เห็นผล100%", "การันตี", "รับประกัน", "ดีที่สุด", "หนึ่งเดียว", "เจ้าแรก", "ยอดนิยม", "มหัศจรรย์", "ปาฏิหาริย์", "ศักดิ์สิทธิ์", "รวย", "รวยเร็ว", "ปลดหนี้", "ลงทุน", "ผลตอบแทนสูง", "งานสบาย", "ฟรี", "แจกฟรี", "แลก", "การพนัน", "หวย", "ลอตเตอรี่", "18+", "เซ็กซ์", "อกฟู", "รูฟิต", "เพิ่มขนาด", "อึด", "ทน", "นาน", "ฆ่า", "ตาย", "เลือด", "สยอง", "ความรุนแรง", "แอดไลน์", "ทักแชท", "ลิงก์", "โอน", "บัญชี", "Lazada", "Shopee", "Facebook", "Line", "ก๊อป", "AAA", "มิลเลอร์", "ของปลอม", "ละเมิดลิขสิทธิ์"];
function parseForbiddenWords(_0x47ef0b) {
  if (!_0x47ef0b) return [];
  return _0x47ef0b["split"](/[,\n]/)["map"]((_0x2c9a96) => _0x2c9a96["trim"]())["filter"]((_0x2c1980) => _0x2c1980["length"] > 0);
}
function mergeForbiddenWords(_0x375ebb) {
  const _0x239b5b = parseForbiddenWords(_0x375ebb), _0x56b29d = /* @__PURE__ */ new Set(), _0x3060a0 = [];
  for (const _0x135f70 of [...DEFAULT_FORBIDDEN_SPEECH_WORDS, ..._0x239b5b]) {
    const _0x468b6b = _0x135f70["toLowerCase"]();
    !_0x56b29d["has"](_0x468b6b) && (_0x56b29d["add"](_0x468b6b), _0x3060a0["push"](_0x135f70));
  }
  return _0x3060a0;
}
const log$c = createLogger("PromptApi"), BUILD_TAG = "2026-04-30-r4-noclienttruncate", API_URL$2 = "https://www.autogention.com/api/prompt/image";
async function getImagePromptFromServer(_0x3f685c) {
  var _a2;
  if (DEV["SKIP_SERVER_PROMPT"]) return log$c["info"]("SKIP_SERVER_PROMPT = true → return null (no local fallback)"), null;
  const _0x4e66f0 = await chrome["storage"]["local"]["get"](["licenseKey", "agx_device_id"]), _0x17ea7f = _0x4e66f0["licenseKey"], _0xa3e235 = _0x4e66f0["agx_device_id"];
  if (!_0x17ea7f || !_0xa3e235) return log$c["warn"]("Missing licenseKey หรือ deviceId — ไม่สามารถเรียก server"), null;
  const { product: _0xe1f2b, settings: _0xb512f1, wantAdCopy: _0xe0f5e8, trimmedName: _0x2ee08a, adCopy: _0x44da87 } = _0x3f685c, _0x1bb507 = { "imageStyle": resolveRandomChoice(_0xb512f1["imageStyle"], IMAGE_STYLES) ?? "", "sceneType": resolveRandomChoice(_0xb512f1["sceneType"], SCENE_TYPES) ?? "", "customSceneDesc": _0xb512f1["customSceneDesc"] ?? "", "lighting": resolveRandomChoice(_0xb512f1["lighting"], LIGHTING_TYPES) ?? "", "imageCameraAngle": resolveRandomChoice(_0xb512f1["imageCameraAngle"], IMAGE_CAMERA_ANGLES) ?? "", "poseStyle": _0xb512f1["poseStyle"] ?? "none", "textColor": resolveRandomChoice(_0xb512f1["textColor"], TEXT_COLORS) ?? "white", "textPosition": resolveRandomChoice(_0xb512f1["textPosition"], TEXT_POSITIONS) ?? "bottom", "useImageAI": _0xb512f1["useImageAI"] !== ![] }, _0x29cf97 = { "imageStyle": resolveRandomChoice(_0xe1f2b["imageStyleOverride"] || void 0, IMAGE_STYLES) || null, "sceneType": resolveRandomChoice(_0xe1f2b["sceneTypeOverride"] || void 0, SCENE_TYPES) || null, "customSceneDesc": _0xe1f2b["customSceneDescOverride"] || null, "lighting": resolveRandomChoice(_0xe1f2b["lightingOverride"] || void 0, LIGHTING_TYPES) || null, "imageCameraAngle": resolveRandomChoice(_0xe1f2b["imageCameraAngleOverride"] || void 0, IMAGE_CAMERA_ANGLES) || null, "poseStyle": _0xe1f2b["poseStyleOverride"] || null, "textColor": resolveRandomChoice(_0xe1f2b["textColorOverride"] || void 0, TEXT_COLORS) || null, "textPosition": resolveRandomChoice(_0xe1f2b["textPositionOverride"] || void 0, TEXT_POSITIONS) || null }, _0x3303c5 = _0xb512f1["promptLanguage"] === "en" ? "en" : "th", _0x2d112a = { "key": _0x17ea7f, "deviceId": _0xa3e235, "wantAdCopy": _0xe0f5e8, "promptLanguage": _0x3303c5, "aiOutput": _0x2ee08a || _0x44da87 ? { "trimmedName": _0x2ee08a, "adCopy": _0x44da87 } : void 0, "product": { "name": _0xe1f2b["name"], "description": ((_a2 = _0xe1f2b["description"]) == null ? void 0 : _a2["trim"]()) || null, "showImageText": _0xe1f2b["showImageText"] === !![], "customImageText": _0xe1f2b["customImageText"] || null, "imageNegativeWords": _0xe1f2b["imageNegativeWords"] || null, "category": _0xe1f2b["category"] || null, "hasModelImage": !!_0xe1f2b["modelImage"], "hasProductImage": !!(_0xe1f2b["productImages"] && _0xe1f2b["productImages"]["length"] > 0), "overrides": _0x29cf97 }, "settings": _0x1bb507 };
  sendPipelineLog$1("info", "🌐 [PromptApi:" + BUILD_TAG + "] เรียก /image (template only)...");
  const _0x5e4d7a = Date["now"]();
  try {
    const _0x56af7c = await fetch(API_URL$2, { "method": "POST", "headers": { "Content-Type": "application/json" }, "body": JSON["stringify"](_0x2d112a) }), _0x527d56 = await _0x56af7c["text"]()["catch"](() => "");
    if (!_0x56af7c["ok"]) {
      let _0x5691ca = "";
      try {
        _0x5691ca = String(JSON["parse"](_0x527d56)["message"] || "");
      } catch {
      }
      return _0x5691ca === "missing_product_name" ? sendPipelineLog$1("error", '❌ สินค้านี้ยังไม่มีชื่อ — กรุณากรอก "ชื่อสินค้า" ก่อน หรือกดปุ่ม "Prepare" ให้ AI ตั้งชื่อให้ แล้วลองใหม่') : sendPipelineLog$1("warn", "⚠ [PromptApi] /image HTTP " + _0x56af7c["status"] + " — " + (_0x527d56["slice"](0, 100) || "(empty body)")), log$c["warn"]("Server returned non-2xx", { "status": _0x56af7c["status"], "body": _0x527d56["slice"](0, 300) }), null;
    }
    const _0x306a73 = _0x527d56["trim"]();
    if (!_0x306a73) return sendPipelineLog$1("warn", "⚠ [PromptApi] /image: server return body ว่าง (status 200) — น่าจะเป็น PHP fatal error หรือ Cloudflare ปิด origin"), log$c["warn"]("Empty 200 response — possible PHP fatal or Cloudflare issue"), null;
    if (!_0x306a73["startsWith"]("{") && !_0x306a73["startsWith"]("[")) {
      const _0x54ecac = _0x306a73["slice"](0, 80)["replace"](/\s+/g, " ");
      return sendPipelineLog$1("warn", '⚠ [PromptApi] /image: server return ไม่ใช่ JSON — "' + _0x54ecac + '..."'), log$c["warn"]("Non-JSON 200 response", { "preview": _0x306a73["slice"](0, 300) }), null;
    }
    let _0x2e53c5;
    try {
      _0x2e53c5 = JSON["parse"](_0x306a73);
    } catch (_0x276925) {
      return sendPipelineLog$1("warn", '⚠ [PromptApi] /image: parse JSON fail — "' + _0x306a73["slice"](0, 80) + '..."'), log$c["warn"]("JSON parse failed", { "error": _0x276925, "body": _0x306a73["slice"](0, 300) }), null;
    }
    if (!(_0x2e53c5 == null ? void 0 : _0x2e53c5["ok"])) return sendPipelineLog$1("warn", "⚠ [PromptApi] /image: " + ((_0x2e53c5 == null ? void 0 : _0x2e53c5["reason"]) || (_0x2e53c5 == null ? void 0 : _0x2e53c5["message"]) || "unknown")), null;
    const _0xb6eb20 = Date["now"]() - _0x5e4d7a;
    return sendPipelineLog$1("success", "✓ [PromptApi] /image (" + _0xb6eb20 + "ms)"), { "imagePrompt": _0x2e53c5["imagePrompt"], "trimmedName": _0x2e53c5["trimmedName"] ?? null, "adCopy": _0x2e53c5["adCopy"] ?? null, "meta": _0x2e53c5["meta"] };
  } catch (_0x5750b3) {
    const _0x19b071 = _0x5750b3 instanceof Error ? _0x5750b3["message"] : String(_0x5750b3);
    return sendPipelineLog$1("warn", "⚠ [PromptApi] /image fail: " + _0x19b071), log$c["warn"]("fetch failed", _0x5750b3), null;
  }
}
const log$b = createLogger("AutoBlueprint"), SPLIT_THRESHOLD$1 = 5;
function resolveSceneDescription(_0x51c473, _0x175d92) {
  var _a2, _b2;
  const _0x3aef52 = _0x51c473["sceneTypeOverride"] || _0x175d92["sceneType"] || "none";
  if (_0x3aef52 === "none") return "";
  if (_0x3aef52 === "custom") {
    const _0x1e2d8f = _0x51c473["sceneTypeOverride"] === "custom" && ((_a2 = _0x51c473["customSceneDescOverride"]) == null ? void 0 : _a2["trim"]()) ? _0x51c473["customSceneDescOverride"]["trim"]() : ((_b2 = _0x175d92["customSceneDesc"]) == null ? void 0 : _b2["trim"]()) || "";
    if (_0x1e2d8f) return _0x1e2d8f;
  }
  const _0x449876 = SCENE_VARIATIONS[_0x3aef52];
  if (_0x449876 && _0x449876["length"] > 0) return _0x449876[0];
  return "a photography studio";
}
async function generateAutoBlueprint(_0x599854, _0x1c2584) {
  const _0x5d603e = Math["max"](1, Math["min"](10, _0x1c2584["sceneCount"] || 1));
  log$b["info"]("Generating auto blueprint: " + _0x5d603e + ' scenes for "' + _0x599854["name"] + '"');
  if (_0x1c2584["useImageAI"] === ![]) return log$b["info"]("useImageAI = false → skip AI, use template fallback"), buildTemplateFallback(_0x599854, _0x1c2584, _0x5d603e);
  if (_0x5d603e > SPLIT_THRESHOLD$1) {
    const _0x86c59 = await generateSplitBlueprint$1(_0x599854, _0x1c2584, _0x5d603e);
    if (_0x86c59) return _0x86c59;
  }
  const _0x3940eb = await callAIForBlueprint(_0x599854, _0x1c2584, _0x5d603e, 0);
  if (_0x3940eb) return log$b["info"]("Blueprint ready: " + _0x3940eb["scenes"]["length"] + " scenes"), _0x3940eb;
  return log$b["warn"]("AI unavailable — using template fallback blueprint"), buildTemplateFallback(_0x599854, _0x1c2584, _0x5d603e);
}
async function generateSplitBlueprint$1(_0x5a76a2, _0x50ee23, _0x5cb01c) {
  const _0x14567b = Math["ceil"](_0x5cb01c / 2);
  log$b["info"]("Split blueprint: part1=" + _0x14567b + " scenes, part2=" + (_0x5cb01c - _0x14567b) + " scenes");
  const _0x3d1286 = await callAIForBlueprint(_0x5a76a2, _0x50ee23, _0x14567b, 0, _0x5cb01c);
  if (!_0x3d1286) return log$b["warn"]("Part 1 failed — trying single call"), null;
  const _0x430dfc = await callAIForBlueprint(_0x5a76a2, _0x50ee23, _0x5cb01c - _0x14567b, _0x14567b, _0x5cb01c, _0x3d1286);
  if (!_0x430dfc) return log$b["warn"]("Part 2 failed — using part 1 only (may be short)"), _0x3d1286;
  const _0x151cbc = { "scenes": [..._0x3d1286["scenes"], ..._0x430dfc["scenes"]["map"]((_0x386960, _0x16c197) => ({ ..._0x386960, "index": _0x14567b + _0x16c197 }))] };
  return log$b["info"]("Split blueprint merged: " + _0x151cbc["scenes"]["length"] + "/" + _0x5cb01c + " scenes"), _0x151cbc;
}
async function callAIForBlueprint(_0x301972, _0x308bd2, _0x4088bd, _0x4d53fa, _0x1b44f8, _0x324b95) {
  const _0x276a01 = SYSTEM_PROMPT, _0x2a9a79 = buildUserPrompt(_0x301972, _0x308bd2, _0x4088bd, _0x4d53fa, _0x1b44f8, _0x324b95);
  log$b["info"]("[Blueprint] SYSTEM PROMPT:\n" + _0x276a01), log$b["info"]("[Blueprint] USER PROMPT:\n" + _0x2a9a79);
  let _0x2e70aa = await tryUserAIGenerate(_0x2a9a79, _0x276a01, "Blueprint");
  log$b["info"]("[Blueprint] API response (success=" + _0x2e70aa["success"] + "):\n" + (_0x2e70aa["text"] ?? _0x2e70aa["error"] ?? "(empty)"));
  let _0x2323e9 = _0x2e70aa["success"] && _0x2e70aa["text"] ? tryParseAutoBlueprint(_0x2e70aa["text"], _0x4088bd, _0x4d53fa) : null;
  if (_0x2323e9) return _0x2323e9;
  if (_0x2e70aa["success"]) {
    log$b["warn"]("First response did not parse; retrying with strict instruction");
    const _0x2a133e = _0x2a9a79 + "\n\nIMPORTANT: Output STRICT JSON array only. No markdown. No prose. No code fences.";
    _0x2e70aa = await tryUserAIGenerate(_0x2a133e, _0x276a01, "Blueprint Retry"), log$b["info"]("[Blueprint] Retry response (success=" + _0x2e70aa["success"] + "):\n" + (_0x2e70aa["text"] ?? _0x2e70aa["error"] ?? "(empty)")), _0x2323e9 = _0x2e70aa["success"] && _0x2e70aa["text"] ? tryParseAutoBlueprint(_0x2e70aa["text"], _0x4088bd, _0x4d53fa) : null;
    if (_0x2323e9) return _0x2323e9;
  }
  return null;
}
const SYSTEM_PROMPT = ["You are an AI advertising director for short Thai product ads.", "Output ONLY a valid JSON array. No markdown, no code fences, no explanation.", "", "Each element is a scene object with these exact fields:", "- index: 0-based scene number", "- imageDesc: English. ONE sentence describing ACTION/POSE only — DO NOT describe subject appearance or product specs.", '  If model available: "The person/animal/character (matching the attached reference image) is [pose: standing/sitting], interacting naturally with the product (as shown in the attached reference) in a way appropriate to its physical size and use — held in hands for small handheld items, worn for wearables (clothing/shoes/bags/accessories), used or displayed alongside for larger items (appliances/furniture/equipment/vehicles), [brief action detail — facial expression, body language]."', '  CRITICAL — DO NOT default to "holding with both hands" or "lifting toward camera" for every product. Choose interaction based on the product reference: tiny items can be held; wearables should be worn (shoes on feet, clothing on body, bags on shoulder); large items should be used naturally or displayed beside the presenter. Forcing "hold" on a sofa or shoes looks unrealistic.', '  If no model: "The product (as shown in the attached reference) is displayed [arrangement: on a table/on a stand/in lifestyle context], [key visual detail — angle, surroundings]."', "  CRITICAL: Do NOT describe what the subject looks like (age/gender/ethnicity/species/color/hair/clothing) or what the product looks like (brand/color/size/packaging) — the reference images handle that. Only describe ACTION and POSE.", "  Do NOT mention style/lighting/camera — those are handled separately.", "- textOverlay: Thai text on screen, max 10 words, impactful marketing phrase including product name and key selling point", '- videoAction: English, ≤15 words, camera/character action for video generation, end with "talking"', "- dialogue: Thai only, 20-24 words, natural conversational sentence for 7-8 seconds. Minimum 20 words.", "", 'Scene roles: index 0 = hook (attention grab), last index = CTA (call to action, include "ทักแชท" or "สั่งเลย"), middle = body (product benefit).', "Do NOT use ? or ! in dialogue — use Thai particles instead (ไหม/หรอ/นะ/สิ/เลย).", "Respond ONLY with the JSON array. No other text."]["join"]("\n");
function buildUserPrompt(_0x365a66, _0xe2b198, _0x520b26, _0x389e29, _0x250b80, _0xe08ecc) {
  const _0x3e6b99 = _0x250b80 ?? _0x520b26, _0x424492 = _0xe2b198["sceneType"] || "none", _0x20b19b = _0xe2b198["poseStyle"] || "none", _0x590c2a = ["Product name: " + (_0x365a66["name"] || "Product"), "Product description: " + (_0x365a66["customSpeech"] || _0x365a66["name"] || ""), "Image style: " + (_0xe2b198["imageStyle"] || "clean_minimal"), "Mood: " + (_0xe2b198["scriptStyle"] || "friendly"), "Lighting: " + (_0xe2b198["lighting"] || "natural"), "Model type: " + (_0xe2b198["modelType"] || "female"), ..._0x424492 !== "none" ? ["Scene/background: " + _0x424492] : [], ..._0x20b19b !== "none" ? ["Pose: " + _0x20b19b] : [], "Camera angle: " + (_0xe2b198["imageCameraAngle"] || "medium"), "Has model reference image: " + (_0xe2b198["modelType"] ? "yes" : "no"), "Total scenes in full ad: " + _0x3e6b99];
  if (_0x389e29 === 0) _0x590c2a["push"]("Generate scenes " + _0x389e29 + " to " + (_0x389e29 + _0x520b26 - 1) + " (scenes " + _0x389e29 + "–" + (_0x389e29 + _0x520b26 - 1) + ")."), _0x3e6b99 > _0x520b26 && _0x590c2a["push"]("NOTE: This is PART 1 of " + _0x3e6b99 + " scenes. Scene " + (_0x389e29 + _0x520b26 - 1) + " is NOT the CTA — more scenes follow.");
  else {
    _0x590c2a["push"]("Generate scenes " + _0x389e29 + " to " + (_0x389e29 + _0x520b26 - 1) + " (PART 2)."), _0x590c2a["push"]("Scene " + (_0x389e29 + _0x520b26 - 1) + " is the FINAL CTA scene.");
    if (_0xe08ecc) {
      const _0x3a023 = _0xe08ecc["scenes"]["map"]((_0x254cdb) => "Scene " + _0x254cdb["index"] + ": " + _0x254cdb["dialogue"]["slice"](0, 50))["join"](" | ");
      _0x590c2a["push"]("Part 1 story so far: " + _0x3a023);
    }
  }
  return _0x590c2a["push"](""), _0x590c2a["push"]("Output a JSON array of exactly " + _0x520b26 + " scene objects."), _0x590c2a["join"]("\n");
}
function tryParseAutoBlueprint(_0x345d0a, _0x14b084, _0x308b6e) {
  try {
    const _0x26f7ef = _0x345d0a["replace"](/```json\s*/gi, "")["replace"](/```\s*$/g, "")["replace"](/^```/g, "")["trim"](), _0x4995dd = JSON["parse"](_0x26f7ef);
    if (!Array["isArray"](_0x4995dd) || _0x4995dd["length"] === 0) return null;
    const _0x28add7 = _0x4995dd["slice"](0, _0x14b084)["map"]((_0x1b7e1e, _0x481c59) => ({ "index": _0x308b6e + _0x481c59, "imageDesc": sanitize(String(_0x1b7e1e["imageDesc"] || _0x1b7e1e["image_desc"] || "")), "textOverlay": sanitize(String(_0x1b7e1e["textOverlay"] || _0x1b7e1e["text_overlay"] || "")), "videoAction": sanitize(String(_0x1b7e1e["videoAction"] || _0x1b7e1e["video_action"] || "")), "dialogue": sanitizeDialogue$1(String(_0x1b7e1e["dialogue"] || "")) }));
    if (_0x28add7["some"]((_0x4c51b8) => !_0x4c51b8["imageDesc"] && !_0x4c51b8["dialogue"])) return null;
    return { "scenes": _0x28add7 };
  } catch (_0x174caa) {
    return log$b["warn"]("JSON parse failed: " + _0x174caa), null;
  }
}
function buildTemplateFallback(_0x3049bc, _0x3cdfbb, _0x4039b6) {
  const _0x406044 = _0x3049bc["name"] || "Product", _0x29e436 = !!(_0x3049bc["modelImage"] || _0x3cdfbb["modelType"] && _0x3cdfbb["modelType"] !== "none"), _0x3f5d56 = _0x3cdfbb["poseStyle"] || "none", _0x5c3b09 = _0x3f5d56 !== "none" ? " is " + _0x3f5d56 + "," : "", _0x2453c2 = [];
  for (let _0x55f0a0 = 0; _0x55f0a0 < _0x4039b6; _0x55f0a0++) {
    const _0x15bcc8 = _0x55f0a0 === 0, _0x5df966 = _0x55f0a0 === _0x4039b6 - 1;
    let _0x4c24c5, _0x5957a4, _0x4dc348, _0x263a60;
    if (_0x15bcc8) _0x4c24c5 = _0x29e436 ? "The person/animal/character (matching the attached reference image)" + _0x5c3b09 + " interacting naturally with " + _0x406044 + " in a way appropriate to its size and use (held in hand for small items, worn for wearables, used or displayed alongside for larger items), engaging warmly with camera." : _0x406044 + " is displayed prominently on a clean surface, full product visible.", _0x5957a4 = _0x406044 + " มาแล้ว", _0x4dc348 = (_0x29e436 ? "Presenter introduces" : "Product") + " " + _0x406044 + " naturally according to its size and use, engaging with camera, talking", _0x263a60 = "วันนี้มาแนะนำ" + _0x406044 + "สินค้าคุณภาพที่ตอบโจทย์ทุกคน ใช้งานง่ายคุ้มค่าทุกบาทเลยนะ";
    else _0x5df966 ? (_0x4c24c5 = _0x29e436 ? "The person/animal/character (matching the attached reference image)" + _0x5c3b09 + " showcasing " + _0x406044 + " naturally as fits its physical size and intended use — held, worn, or displayed alongside — upbeat and confident." : _0x406044 + " is showcased with packaging visible, arranged to highlight value.", _0x5957a4 = _0x406044 + " ทักแชทสั่งได้เลย", _0x4dc348 = (_0x29e436 ? "Presenter showcases" : "Product") + " " + _0x406044 + " naturally according to its size, camera pulls back, talking", _0x263a60 = "อย่าพลาด" + _0x406044 + "สินค้าคุณภาพดีราคาคุ้มค่า สั่งได้เลยผ่านลิงก์ในโปรไฟล์ ส่งไวทั่วประเทศเลยนะ") : (_0x4c24c5 = _0x29e436 ? "The person/animal/character (matching the attached reference image)" + _0x5c3b09 + " demonstrating " + _0x406044 + " in actual use as appropriate to its size — wearing, operating, or pointing out key features, engaging with camera." : _0x406044 + " is shown in use, placed in a lifestyle context demonstrating its function.", _0x5957a4 = "ทำไมต้องเลือก " + _0x406044, _0x4dc348 = (_0x29e436 ? "Presenter demonstrates" : "Product") + " " + _0x406044 + " features in actual use, medium close-up, talking", _0x263a60 = _0x406044 + "ช่วยแก้ปัญหาได้จริงใช้งานง่ายคุ้มค่าทุกบาท วัสดุคุณภาพดีลูกค้าหลายคนบอกว่าประทับใจมากนะ");
    _0x2453c2["push"]({ "index": _0x55f0a0, "imageDesc": _0x4c24c5, "textOverlay": _0x5957a4, "videoAction": _0x4dc348, "dialogue": _0x263a60 });
  }
  return { "scenes": _0x2453c2 };
}
async function generateImageCopy(_0x7eb58c, _0x4239ae) {
  var _a2;
  const _0xbbb795 = _0x7eb58c["name"] || "Product", _0xefc7fb = (_0x7eb58c["productImages"] || [])["find"](Boolean), _0x4b4a53 = [];
  if (_0xefc7fb) {
    const _0x403046 = dataUrlToImagePart(_0xefc7fb);
    if (_0x403046) _0x4b4a53["push"]({ "base64": _0x403046["base64"], "mimeType": _0x403046["mimeType"] });
  }
  const _0x47ad0e = ((_a2 = _0x7eb58c["description"]) == null ? void 0 : _a2["trim"]()) || "", _0x1b2628 = { "productName": _0xbbb795, "wantAdCopy": _0x4239ae, ..._0x47ad0e ? { "productDescription": _0x47ad0e["slice"](0, 280) } : {} }, _0x51d638 = _0x47ad0e ? " (ข้อมูลเพิ่มเติม: " + _0x47ad0e["slice"](0, 200) + ")" : "", _0x2030f1 = _0x4239ae ? 'ดูรูปสินค้า + ชื่อสินค้าเต็ม "' + _0xbbb795 + '"' + _0x51d638 + " → คืน trimmedName (≤30 ตัวอักษร) + adCopy 2 บรรทัด (line1, line2 ≤20 ตัวอักษร/บรรทัด)" : 'ดูชื่อสินค้าเต็ม "' + _0xbbb795 + '"' + _0x51d638 + " → คืน trimmedName (≤30 ตัวอักษร) เท่านั้น (ไม่ต้อง adCopy)", _0x448a51 = await invokeAI({ "persona": "IMAGE_COPY_WRITER", "userPrompt": _0x2030f1, "context": _0x1b2628, "images": _0x4b4a53 });
  if (!_0x448a51) return log$b["warn"]("[ImageCopy] invokeAI returned null"), null;
  const _0x1553e8 = (_0x448a51["trimmedName"] || "")["trim"]()["slice"](0, 30);
  if (!_0x1553e8) return log$b["warn"]("[ImageCopy] trimmedName empty — fallback"), { "trimmedName": _0xbbb795["slice"](0, 30)["trim"]() };
  if (!_0x4239ae || !_0x448a51["adCopy"]) return log$b["info"]('[ImageCopy] trimmedName="' + _0x1553e8 + '" (no adCopy)'), { "trimmedName": _0x1553e8 };
  const _0x2e62e0 = (_0x448a51["adCopy"]["line1"] || "")["trim"]()["slice"](0, 20), _0x49a899 = (_0x448a51["adCopy"]["line2"] || "")["trim"]()["slice"](0, 20);
  if (!_0x2e62e0 || !_0x49a899) return log$b["warn"]("[ImageCopy] adCopy incomplete — returning trimmedName only"), { "trimmedName": _0x1553e8 };
  return log$b["info"]('[ImageCopy] trimmedName="' + _0x1553e8 + '" | adCopy=["' + _0x2e62e0 + '", "' + _0x49a899 + '"]'), { "trimmedName": _0x1553e8, "adCopy": { "line1": _0x2e62e0, "line2": _0x49a899 } };
}
async function prepareProductBlueprint(_0xc5777, _0x42e506) {
  var _a2, _b2;
  const _0x1f9016 = [];
  for (const _0xebac4d of (_0xc5777["productImages"] || [])["filter"](Boolean)["slice"](0, 3)) {
    const _0x54fb94 = dataUrlToImagePart(_0xebac4d);
    if (_0x54fb94) _0x1f9016["push"]({ "base64": _0x54fb94["base64"], "mimeType": _0x54fb94["mimeType"] });
  }
  if (_0xc5777["modelImage"]) {
    const _0x4a3445 = dataUrlToImagePart(_0xc5777["modelImage"]);
    if (_0x4a3445) _0x1f9016["push"]({ "base64": _0x4a3445["base64"], "mimeType": _0x4a3445["mimeType"] });
  }
  if (_0x1f9016["length"] === 0 && !((_a2 = _0xc5777["name"]) == null ? void 0 : _a2["trim"]()) && !((_b2 = _0xc5777["description"]) == null ? void 0 : _b2["trim"]())) return { "ok": ![], "error": "ต้องมีรูปสินค้า หรือชื่อ หรือรายละเอียดสินค้าอย่างน้อย 1 อย่างก่อนกด Prepare" };
  const _0x1c4661 = Math["max"](1, Math["min"](10, _0x42e506["sceneCount"] ?? 1)), _0x5e7bbb = _0xc5777["sceneTypeOverride"] && _0xc5777["sceneTypeOverride"] !== "" ? _0xc5777["sceneTypeOverride"] : _0x42e506["sceneType"] || "none";
  log$b["info"]("[Prepare] step 1 — blueprint copy (server) | sceneCount=" + _0x1c4661);
  const _0x25fed7 = await getVideoRequestFromServer({ "mode": "product-blueprint", "product": _0xc5777, "settings": _0x42e506 });
  if (!_0x25fed7) return { "ok": ![], "error": "Server (Prepare) ไม่ตอบ — เช็ค license / อินเทอร์เน็ต หรือลองใหม่ภายหลัง" };
  const _0x34da93 = await invokeAIWithRequest(_0x25fed7["request"], _0x1f9016, "PRODUCT_BLUEPRINT");
  if (!_0x34da93) return { "ok": ![], "error": "AI ไม่ตอบสนอง — เช็ค API key (Gemini/OpenAI) ในตั้งค่า หรือลองใหม่ภายหลัง" };
  const _0x406c1c = _0x34da93, _0x42127f = (_0x406c1c["productName"] || _0xc5777["name"] || "สินค้า")["toString"]()["trim"](), _0x147f23 = (_0x406c1c["basketName"] || "")["toString"]()["trim"]()["slice"](0, 30), _0x5bd26d = (_0x406c1c["imageText"] || "")["toString"]()["trim"](), _0x290c6a = (_0x406c1c["speech"] || "")["toString"]()["trim"](), _0x1cac9e = _0x1c4661 > 1 ? splitSpeechIntoScenes(_0x290c6a, _0x1c4661)["join"]("|||") : _0x290c6a, _0x2af443 = (_0x406c1c["caption"] || "")["toString"]()["trim"]()["slice"](0, 2200), _0x44299e = (_0x406c1c["hashtags"] || "")["toString"]()["trim"](), _0x442b4a = _0x5e7bbb === "custom" ? (_0x406c1c["sceneDesc"] || "")["toString"]()["trim"]() : "", _0x2e96fa = { ..._0xc5777, "name": _0x42127f, "customImageText": _0x5bd26d || _0xc5777["customImageText"], "showImageText": _0xc5777["showImageText"] === !![] };
  let _0x46c298 = "";
  try {
    const _0x3141d2 = await getImagePromptFromServer({ "product": _0x2e96fa, "settings": _0x42e506, "wantAdCopy": ![], "trimmedName": _0x42127f });
    if (_0x3141d2 == null ? void 0 : _0x3141d2["imagePrompt"]) _0x46c298 = _0x3141d2["imagePrompt"]["trim"]();
    else log$b["warn"]("[Prepare] step 2 — image template server returned null; customImagePromptOverride left empty (gen-image assembles at run time)");
  } catch (_0x59b8a8) {
    log$b["warn"]("[Prepare] step 2 — image template fetch failed", _0x59b8a8);
  }
  let _0xccfe3a = "";
  const _0x31943f = _0x1cac9e["trim"](), _0x379f05 = _0x31943f["length"] > 0, _0x495344 = _0x1c4661 > 1 ? "extend-multi" : _0x42e506["ingredientMode"] === !![] ? "ingredients" : "frames";
  try {
    if (_0x42e506["videoPromptStyle"] === "v1") {
      const _0x59ffbd = await getV1StyleVideoFromServer({ "mode": _0x495344, "product": _0x2e96fa, "settings": _0x42e506, "customSpeech": _0x31943f || void 0 });
      _0x59ffbd && _0x59ffbd["length"] ? (_0xccfe3a = _0x59ffbd["join"]("|||"), log$b["info"]("[Prepare] step 3 — V1-style short video prompt (" + _0x59ffbd["length"] + " scene)")) : log$b["warn"]("[Prepare] step 3 — V1-style server returned null; customVideoPromptOverride left empty");
    } else {
      const _0x4ee186 = await getVideoRequestFromServer({ "mode": _0x495344, "product": _0x2e96fa, "settings": { ..._0x42e506, "forceCustomSpeech": _0x379f05 }, "customSpeech": _0x379f05 && _0x495344 === "extend-multi" ? _0x31943f : void 0, "mustUseVoice": _0x379f05 && _0x495344 !== "extend-multi" ? _0x31943f : void 0 });
      if (_0x4ee186) {
        const _0x1480b7 = await invokeAIWithRequest(_0x4ee186["request"], _0x1f9016, "PRODUCT_BLUEPRINT_VIDEO"), _0x302799 = _0x1480b7 == null ? void 0 : _0x1480b7["veoPrompt"];
        if (_0x302799 && _0x302799["trim"]()) {
          _0xccfe3a = applyVideoPostProcess(_0x302799, _0x4ee186["postProcess"])["trim"]();
          if (_0x379f05) {
            const _0x5b1ab4 = syncDialogueIntoVideoPrompt(_0xccfe3a, _0x31943f);
            if (_0x5b1ab4["changed"]) _0xccfe3a = _0x5b1ab4["result"], log$b["info"]("[Prepare] step 3 — forced Veo dialogue to match blueprint speech" + (_0x5b1ab4["note"] ? " (" + _0x5b1ab4["note"] + ")" : ""));
            else _0x5b1ab4["note"] && !_0x5b1ab4["note"]["includes"]("ตรงกับ") && log$b["warn"]("[Prepare] step 3 — could not align Veo dialogue with speech: " + _0x5b1ab4["note"]);
          }
        } else log$b["warn"]("[Prepare] step 3 — video-request AI returned empty; customVideoPromptOverride left empty (gen-video generates at run time)");
      } else log$b["warn"]("[Prepare] step 3 — video-request server returned null; customVideoPromptOverride left empty");
    }
  } catch (_0x343c93) {
    log$b["warn"]("[Prepare] step 3 — video prompt fetch failed", _0x343c93);
  }
  return log$b["info"]('[Prepare] done — name="' + _0x42127f + '" basket="' + _0x147f23 + '" speechLen=' + _0x1cac9e["length"] + " caption=" + (_0x2af443["length"] > 0) + ' hashtags="' + _0x44299e + '" imagePromptLen=' + _0x46c298["length"] + " videoPromptLen=" + _0xccfe3a["length"] + " (videoMode=" + _0x495344 + ")"), { "ok": !![], "blueprint": { "productName": _0x42127f, "basketName": _0x147f23, "imageText": _0x5bd26d, "speech": _0x1cac9e, "caption": _0x2af443, "hashtags": _0x44299e, "sceneDesc": _0x442b4a, "imagePrompt": _0x46c298, "videoPrompt": _0xccfe3a } };
}
async function generateImageHeadline(_0x42e18b, _0x36d805) {
  const _0x454a27 = _0x36d805["find"](Boolean);
  if (!_0x454a27) return log$b["warn"]("generateImageHeadline: no product image, skipping"), null;
  const _0x5140d6 = [dataUrlToImagePart(_0x454a27)]["filter"](Boolean), _0xc522e4 = ["คุณเป็นนักเขียนคำโฆษณาสำหรับข้อความบนภาพสินค้า", "ชื่อสินค้าคือ " + _0x42e18b, "ให้ดูรูปสินค้าจริงก่อน แล้วเขียนข้อความโฆษณาบนภาพภาษาไทย", "ความยาว 12-14 คำเท่านั้น", "ต้องใช้จุดขายจากสิ่งที่เห็นในภาพจริงและชื่อสินค้า", "ห้ามเดาข้อมูลที่ไม่เห็น", "ห้ามใช้อีโมจิ", "ห้ามใส่เครื่องหมายคำพูด", "โทนกระชับ น่าซื้อ พรีเมียม อ่านแล้วเข้าใจทันที", "- ห้ามตอบอย่างอื่นนอกจาก format นี้เท่านั้น", "", "รูปแบบคำตอบ:", "Headline:::[คำโฆษณาที่คิด]"]["join"]("\n");
  log$b["info"]("[Headline] PROMPT:\n" + _0xc522e4);
  const _0x4d64ab = await tryUserAIGenerateWithImages(_0xc522e4, _0x5140d6, void 0, "Image Headline");
  log$b["info"]("[Headline] API response (success=" + _0x4d64ab["success"] + "):\n" + (_0x4d64ab["text"] ?? _0x4d64ab["error"] ?? "(empty)"));
  if (!_0x4d64ab["success"] || !_0x4d64ab["text"]) return null;
  const _0x3e92db = parseHeadlineResponse(_0x4d64ab["text"]);
  return log$b["info"]('[Headline] Parsed: "' + _0x3e92db + '"'), _0x3e92db;
}
async function softRetry(_0x3ca60e, _0x173b48) {
  const _0x15bd3d = _0x173b48["tries"] ?? 3, _0x133c12 = _0x173b48["delayMs"] ?? 2500, _0x4ec9b1 = _0x173b48["label"] ?? "AI";
  for (let _0x43b719 = 1; _0x43b719 <= _0x15bd3d; _0x43b719++) {
    const _0x2a4aa9 = await _0x3ca60e();
    if (_0x2a4aa9 != null) return _0x2a4aa9;
    _0x43b719 < _0x15bd3d && (log$b["warn"]("[softRetry:" + _0x4ec9b1 + "] attempt " + _0x43b719 + "/" + _0x15bd3d + " failed — retry in " + _0x133c12 + "ms"), sendPipelineLog$1("warn", "⚠ " + _0x4ec9b1 + " ครั้งที่ " + _0x43b719 + "/" + _0x15bd3d + " ไม่สำเร็จ — ลองใหม่ใน " + Math["round"](_0x133c12 / 1e3) + "s..."), await new Promise((_0x4616d4) => setTimeout(_0x4616d4, _0x133c12)));
  }
  return null;
}
async function generateVideoPrompt(_0x422983, _0x427aa4, _0x173147, _0x2cc0fb) {
  const _0x11f1d5 = _0x422983["name"], _0xe35a44 = _0x427aa4["videoStyle"] || "ugc_review", _0x41e524 = _0x427aa4["voiceType"] || "adult_female", _0x4068e8 = [], _0x1eab32 = [];
  if (_0x173147) {
    const _0x4d4011 = await fetchUrlAsImagePart(_0x173147);
    _0x4d4011 && (_0x4068e8["push"]({ "base64": _0x4d4011["base64"], "mimeType": _0x4d4011["mimeType"] }), _0x1eab32["push"]("generated frame"));
  }
  for (const _0x404fe3 of (_0x422983["productImages"] ?? [])["slice"](0, 2)) {
    const _0x5b5d09 = dataUrlToImagePart(_0x404fe3);
    _0x5b5d09 && (_0x4068e8["push"]({ "base64": _0x5b5d09["base64"], "mimeType": _0x5b5d09["mimeType"] }), _0x1eab32["push"]("product reference"));
  }
  if (_0x422983["modelImage"]) {
    const _0x15d9c4 = dataUrlToImagePart(_0x422983["modelImage"]);
    _0x15d9c4 && (_0x4068e8["push"]({ "base64": _0x15d9c4["base64"], "mimeType": _0x15d9c4["mimeType"] }), _0x1eab32["push"]("model reference"));
  }
  log$b["info"]('[VideoPrompt] product="' + _0x11f1d5 + '" style="' + _0xe35a44 + '" voice="' + _0x41e524 + '" images=[' + (_0x1eab32["join"](", ") || "none") + "]");
  if (_0x427aa4["videoPromptStyle"] === "v1") {
    const _0x228968 = _0x427aa4["ingredientMode"] === !![] ? "ingredients" : "frames";
    let _0x4dadc6 = (_0x2cc0fb || _0x422983["customSpeech"] || _0x427aa4["customSpeech"] || "")["trim"]();
    _0x4dadc6 === "" && (sendPipelineLog$1("info", "🗣 [V1] ยังไม่มีบทพูด — ให้ AI ช่วยคิดบทพูดก่อน..."), _0x4dadc6 = (await generateDialogueSuggestion(_0x422983, _0x427aa4) || "")["trim"]());
    const _0x464e37 = await getV1StyleVideoFromServer({ "mode": _0x228968, "product": _0x422983, "settings": _0x427aa4, "customSpeech": _0x4dadc6 || void 0 });
    if (_0x464e37 && _0x464e37[0]) return log$b["info"]("[VideoPrompt] V1-style short prompt (len=" + _0x464e37[0]["length"] + ")"), { "veoPrompt": _0x464e37[0] };
    sendPipelineLog$1("warn", "⚠ [V1] server ไม่ตอบ Prompt แบบ V1 — fallback ไป AI compose แบบ V2");
  }
  const _0x6c45c5 = (_0x2cc0fb || "")["trim"](), _0x427094 = _0x422983["forceCustomSpeech"] ?? _0x427aa4["forceCustomSpeech"] ?? ![], _0x5a7418 = _0x427094 === !![] && _0x6c45c5["length"] > 0, _0x19fd6c = _0x5a7418 ? void 0 : _0x6c45c5 || void 0, _0x8fe99d = _0x5a7418 ? _0x6c45c5 : void 0, _0x3179ba = (_0x422983["extraAIInstructionOverride"] || _0x427aa4["extraAIInstruction"] || "")["trim"]() || void 0, _0x1ece92 = _0x427aa4["ingredientMode"] === !![] ? "ingredients" : "frames", _0x20db49 = await softRetry(async () => {
    var _a2;
    const _0x555216 = await getVideoRequestFromServer({ "mode": _0x1ece92, "product": _0x422983, "settings": _0x427aa4, "hasGeneratedImage": !!_0x173147, "customSpeech": _0x19fd6c, "mustUseVoice": _0x8fe99d, "openingSpeech": ((_a2 = _0x427aa4["openingSpeech"]) == null ? void 0 : _a2["trim"]()) || void 0, "negativeSpeech": _0x427aa4["negativeSpeech"] || void 0, "extraAIInstruction": _0x3179ba });
    if (!_0x555216) return null;
    const _0x3c159d = await invokeAIWithRequest(_0x555216["request"], _0x4068e8, "VIDEO_" + _0x1ece92["toUpperCase"]());
    if (!_0x3c159d) return null;
    const _0x2d8d4d = _0x3c159d["veoPrompt"];
    if (!_0x2d8d4d || !_0x2d8d4d["trim"]()) return null;
    return applyVideoPostProcess(_0x2d8d4d, _0x555216["postProcess"])["trim"]();
  }, { "tries": 3, "delayMs": 2500, "label": "AI สร้าง Prompt วิดีโอ" });
  if (_0x20db49) return log$b["info"]("[VideoPrompt] veoPrompt length=" + _0x20db49["length"] + " (server-driven AI, mode=" + _0x1ece92 + ")"), { "veoPrompt": _0x20db49 };
  sendPipelineLog$1("warn", "⚠ AI สร้าง Prompt วิดีโอไม่สำเร็จ 3 ครั้ง — ใช้ fallback (template) ของ server แทน");
  const _0x3ca1f2 = await getVideoFallbackFromServer({ "mode": _0x1ece92, "product": _0x422983, "settings": _0x427aa4, "customSpeech": _0x6c45c5 || void 0 });
  if (_0x3ca1f2 && _0x3ca1f2[0]) return log$b["info"]("[VideoPrompt] using server fallback prompt (len=" + _0x3ca1f2[0]["length"] + ")"), { "veoPrompt": _0x3ca1f2[0], "fromFallback": !![] };
  return sendPipelineLog$1("warn", "⚠ Fallback ของ server ก็ไม่ตอบ — ใช้ template ในเครื่องเป็นทางสุดท้าย"), log$b["warn"]("[VideoPrompt] AI 3× + server fallback both failed — caller uses local last-resort template"), null;
}
async function generateExtendMultiScenePrompts(_0x5bc7c8, _0x4983f4, _0x37fd53) {
  const _0x4472a9 = _0x5bc7c8["name"], _0x1cf1fe = Math["max"](2, Math["min"](10, _0x4983f4["sceneCount"] || 2)), _0x91b1c8 = [], _0x3b2238 = [];
  for (const _0x53ef88 of (_0x5bc7c8["productImages"] ?? [])["slice"](0, 2)) {
    const _0xda3669 = dataUrlToImagePart(_0x53ef88);
    _0xda3669 && (_0x91b1c8["push"]({ "base64": _0xda3669["base64"], "mimeType": _0xda3669["mimeType"] }), _0x3b2238["push"]("product reference"));
  }
  if (_0x5bc7c8["modelImage"]) {
    const _0xebbd1d = dataUrlToImagePart(_0x5bc7c8["modelImage"]);
    _0xebbd1d && (_0x91b1c8["push"]({ "base64": _0xebbd1d["base64"], "mimeType": _0xebbd1d["mimeType"] }), _0x3b2238["push"]("model reference"));
  }
  log$b["info"]('[ExtendMulti] product="' + _0x4472a9 + '" N=' + _0x1cf1fe + " ingredientScene1=" + (_0x4983f4["ingredientMode"] === !![]) + " images=[" + (_0x3b2238["join"](", ") || "none") + "]");
  if (_0x4983f4["videoPromptStyle"] === "v1") {
    let _0x197c20 = (_0x37fd53 || _0x4983f4["customSpeech"] || _0x5bc7c8["customSpeech"] || "")["trim"]();
    _0x197c20 === "" && (sendPipelineLog$1("info", "🗣 [V1] ยังไม่มีบทพูด (" + _0x1cf1fe + " ฉาก) — ให้ AI ช่วยคิดบทพูดก่อน..."), _0x197c20 = (await generateDialogueSuggestion(_0x5bc7c8, _0x4983f4) || "")["trim"]());
    const _0x22b743 = await getV1StyleVideoFromServer({ "mode": "extend-multi", "product": _0x5bc7c8, "settings": _0x4983f4, "customSpeech": _0x197c20 || void 0 });
    if (_0x22b743 && _0x22b743["length"] >= 1) return log$b["info"]("[ExtendMulti] V1-style short prompts (" + _0x22b743["length"] + " scene)"), { "prompts": _0x22b743 };
    sendPipelineLog$1("warn", "⚠ [V1] server ไม่ตอบ Prompt แบบ V1 — fallback ไป AI compose แบบ V2");
  }
  const _0x33c486 = (_0x4983f4["customSpeech"] || "")["trim"](), _0x3a5a65 = _0x5bc7c8["forceCustomSpeech"] ?? _0x4983f4["forceCustomSpeech"] ?? ![], _0x1fdab1 = _0x3a5a65 === !![] && _0x33c486["length"] > 0, _0x4ba6ec = _0x1fdab1 ? _0x33c486 : _0x33c486 || void 0, _0x320cb = _0x1fdab1 ? void 0 : _0x37fd53 || void 0, _0x15e8c6 = (_0x5bc7c8["extraAIInstructionOverride"] || _0x4983f4["extraAIInstruction"] || "")["trim"]() || void 0, _0x6b827e = await softRetry(async () => {
    var _a2;
    const _0x4cf61e = await getVideoRequestFromServer({ "mode": "extend-multi", "product": _0x5bc7c8, "settings": _0x4983f4, "customSpeech": _0x4ba6ec, "mustUseVoice": _0x320cb, "openingSpeech": ((_a2 = _0x4983f4["openingSpeech"]) == null ? void 0 : _a2["trim"]()) || void 0, "negativeSpeech": _0x4983f4["negativeSpeech"] || void 0, "extraAIInstruction": _0x15e8c6 });
    if (!_0x4cf61e) return null;
    const _0x1d7b4a = await invokeAIWithRequest(_0x4cf61e["request"], _0x91b1c8, "VIDEO_EXTEND_MULTI");
    if (!_0x1d7b4a) return null;
    const _0x532123 = _0x1d7b4a["veoPrompt"];
    if (!_0x532123 || !_0x532123["trim"]()) return null;
    const _0x32da04 = _0x4cf61e["postProcess"]["splitBy"] ?? "|||", _0x9b3c9f = _0x4cf61e["postProcess"]["appendExtraInstruction"], _0x59e2d5 = _0x532123["split"](_0x32da04)["map"]((_0x7319bf) => _0x7319bf["trim"]())["filter"]((_0x52c925) => _0x52c925["length"] > 0);
    if (_0x59e2d5["length"] < 1) return null;
    const _0x19c602 = _0x4cf61e["postProcess"]["expectedSceneCount"] ?? _0x1cf1fe;
    if (_0x59e2d5["length"] !== _0x19c602) log$b["warn"]("[ExtendMulti] Got " + _0x59e2d5["length"] + " prompts, expected " + _0x19c602);
    return _0x9b3c9f ? _0x59e2d5["map"]((_0x54185e) => _0x54185e["trimEnd"]() + "\n" + _0x9b3c9f) : _0x59e2d5;
  }, { "tries": 3, "delayMs": 2500, "label": "AI สร้าง Prompt วิดีโอ Extend" });
  if (_0x6b827e && _0x6b827e["length"] >= 1) return log$b["info"]("[ExtendMulti] produced " + _0x6b827e["length"] + " prompts (server-driven AI)"), { "prompts": _0x6b827e };
  sendPipelineLog$1("warn", "⚠ AI สร้าง Prompt วิดีโอ Extend ไม่สำเร็จ 3 ครั้ง — ใช้ fallback (template) ของ server แทน");
  const _0x40a707 = (_0x33c486 || _0x37fd53 || "")["trim"]() || void 0, _0x529a63 = await getVideoFallbackFromServer({ "mode": "extend-multi", "product": _0x5bc7c8, "settings": _0x4983f4, "customSpeech": _0x40a707 });
  if (_0x529a63 && _0x529a63["length"] >= 1) return log$b["info"]("[ExtendMulti] using " + _0x529a63["length"] + " server fallback prompts"), { "prompts": _0x529a63, "fromFallback": !![] };
  return sendPipelineLog$1("error", "❌ AI และ fallback ของ server สร้าง Prompt วิดีโอ Extend ไม่ได้ทั้งคู่"), log$b["warn"]("[ExtendMulti] AI 3× + server fallback both failed"), null;
}
const VIDEO_BOILERPLATE = "The dialogue is spoken aloud as voice narration only — no on-screen text rendering, no subtitles, no captions, no written dialogue overlays, no watermarks. Pure cinematographic visual composition. Stable anatomy preserved. The product appears at its true real-world physical size, matching the proportions visible in the product reference image faithfully (do not exaggerate or shrink). The presenter interacts with the product naturally according to its physical size and intended use — held for small handheld items, worn for wearables, used or displayed alongside for larger items — never forced into a hold-with-both-hands pose when unnatural. LANGUAGE LOCK: spoken audio in Thai only — render product names phonetically as Thai.", REFERENCE_IMAGES_DIRECTIVE = "REFERENCE IMAGES: Treat the attached images as the authoritative source — subject appearance, product design, colors, and branding must match the references exactly.";
async function generateSceneBuilderFramesPrompts(_0x4bbebf, _0x80f036, _0xbf8862) {
  var _a2, _b2, _c, _d;
  const _0x29cb99 = _0x4bbebf["name"], _0x2ef8a6 = Math["max"](2, Math["min"](10, _0x80f036["sceneCount"] || 2)), _0x388f0c = _0x80f036["voiceType"] || "adult_female", _0x3dcc88 = !_0x80f036["promptLanguage"] || _0x80f036["promptLanguage"] === "th", _0x249672 = VOICE_VARIATIONS[_0x388f0c] ?? VOICE_VARIATIONS["adult_female"], _0x4c1d65 = pickRandom$2(_0x249672["descs"]), _0x7c3a16 = [], _0x247996 = [];
  for (const _0x44d44d of (_0x4bbebf["productImages"] ?? [])["slice"](0, 2)) {
    const _0x152f65 = dataUrlToImagePart(_0x44d44d);
    _0x152f65 && (_0x7c3a16["push"]({ "base64": _0x152f65["base64"], "mimeType": _0x152f65["mimeType"] }), _0x247996["push"]("product reference"));
  }
  if (_0x4bbebf["modelImage"]) {
    const _0x3d53f2 = dataUrlToImagePart(_0x4bbebf["modelImage"]);
    _0x3d53f2 && (_0x7c3a16["push"]({ "base64": _0x3d53f2["base64"], "mimeType": _0x3d53f2["mimeType"] }), _0x247996["push"]("model reference"));
  }
  log$b["info"]('[SceneBuilderFrames] product="' + _0x29cb99 + '" N=' + _0x2ef8a6 + " images=[" + (_0x247996["join"](", ") || "none") + "]");
  const _0x32b2f1 = ((_a2 = _0x80f036["openingSpeech"]) == null ? void 0 : _a2["trim"]()) || "", _0x52c3ef = ((_b2 = _0x80f036["customSpeech"]) == null ? void 0 : _b2["trim"]()) || "", _0x38ea9a = _0x80f036["forceCustomSpeech"] === !![] && _0x52c3ef["length"] > 0, _0x2ff7ac = _0x38ea9a ? _0x52c3ef["split"]("|||")["map"]((_0x18179a) => _0x18179a["trim"]())["filter"]((_0x5a74f5) => _0x5a74f5["length"] > 0) : [], _0x2a1a78 = _0x38ea9a ? "" : _0x52c3ef, _0x12a110 = _0x38ea9a && _0x2ff7ac["length"] === 1 ? _0x2ff7ac[0] : _0xbf8862 || "", _0x6f5127 = mergeForbiddenWords(_0x80f036["negativeSpeech"]), _0xdecb8 = _0x4bbebf["category"] && _0x4bbebf["category"] !== "auto" ? _0x4bbebf["category"] : void 0, _0x596441 = getProductCategoryHint(_0xdecb8), _0x4e1f37 = { "product": _0x29cb99, "sceneCount": _0x2ef8a6, "sceneBuilderFramesMode": !![], "voiceDescriptor": _0x4c1d65, "voiceGender": _0x249672["gender"], "aspectRatio": _0x80f036["aspectRatio"] || "9:16", "language": _0x3dcc88 ? "th" : "en", "scriptStyle": _0x80f036["scriptStyle"] || "normal", "scriptStyleTone": resolveScriptStyleTone(_0x80f036["scriptStyle"]), "referenceImages": _0x247996["length"] > 0 ? _0x247996 : void 0, "videoCameraMovement": _0x80f036["videoCameraMovement"], "sceneType": _0x80f036["sceneType"], "sceneDescription": resolveSceneDescription(_0x4bbebf, _0x80f036), "lighting": _0x80f036["lighting"], "poseStyle": _0x80f036["poseStyle"], "lipSync": _0x80f036["lipSync"] !== ![], ..._0xdecb8 ? { "productCategory": _0xdecb8 } : {}, ..._0x596441 ? { "productCategoryHint": _0x596441 } : {}, ..._0x32b2f1 ? { "openingSpeech": _0x32b2f1 } : {}, ..._0x2a1a78 ? { "customSpeech": _0x2a1a78 } : {}, ..._0x12a110 ? { "mustUseVoice": _0x12a110 } : {}, ..._0x2ff7ac["length"] > 1 ? { "forcedVoicesPerScene": _0x2ff7ac } : {}, "forbiddenWords": _0x6f5127, ...((_c = _0x80f036["extraAIInstruction"]) == null ? void 0 : _c["trim"]()) ? { "extraAIInstruction": _0x80f036["extraAIInstruction"]["trim"]() } : {} }, _0x3ed5c8 = await invokeAI({ "persona": "SCENEBUILDER_FRAMES_MULTI", "userPrompt": "ออกแบบ " + _0x2ef8a6 + ' ฉากต่อเนื่องสำหรับ Scene Builder + Frame Chaining ของสินค้า "' + _0x29cb99 + '". ส่ง JSON: scenes[' + _0x2ef8a6 + "] โดยแต่ละ scene มี role + frameDescription + motionDescription + dialogue (ตาม schema)", "context": _0x4e1f37, "images": _0x7c3a16 });
  if (!_0x3ed5c8) return log$b["warn"]("[SceneBuilderFrames] invokeAI returned null"), null;
  const _0x1f213c = _0x3ed5c8["scenes"];
  if (!Array["isArray"](_0x1f213c) || _0x1f213c["length"] < _0x2ef8a6) return log$b["warn"]("[SceneBuilderFrames] Got " + ((_0x1f213c == null ? void 0 : _0x1f213c["length"]) ?? 0) + " scenes, expected " + _0x2ef8a6), null;
  const _0x68f9b6 = _0x4bbebf["imageStyleOverride"] || _0x80f036["imageStyle"], _0x47abd4 = _0x4bbebf["sceneTypeOverride"] || _0x80f036["sceneType"], _0x43ec5e = _0x4bbebf["lightingOverride"] || _0x80f036["lighting"], _0x302c61 = _0x4bbebf["imageCameraAngleOverride"] || _0x80f036["imageCameraAngle"], _0xdee6a0 = _0x4bbebf["sceneTypeOverride"] === "custom" && ((_d = _0x4bbebf["customSceneDescOverride"]) == null ? void 0 : _d["trim"]()) ? _0x4bbebf["customSceneDescOverride"]["trim"]() : _0x80f036["customSceneDesc"], _0x31a6cc = _0x47abd4 === "custom" && (_0xdee6a0 == null ? void 0 : _0xdee6a0["trim"]()) ? _0xdee6a0["trim"]() : "", _0x12c40c = (_0x4bbebf["extraAIInstructionOverride"] || _0x80f036["extraAIInstruction"] || "")["trim"](), _0x3400e2 = pickRandom$2(IMAGE_STYLE_VARIATIONS[_0x68f9b6 || ""] ?? ["Natural lifestyle style"]), _0x22f273 = _0x31a6cc || pickRandom$2(SCENE_VARIATIONS[_0x47abd4 || ""] ?? ["a photography studio"]), _0x4b5ec5 = pickRandom$2(LIGHTING_VARIATIONS[_0x43ec5e || ""] ?? ["natural indoor light"]), _0x47fd06 = pickRandom$2(CAMERA_VARIATIONS[_0x302c61 || ""] ?? ["Medium shot, full product visible"]), _0x3bf37f = [], _0x383ad7 = [];
  for (let _0x415716 = 0; _0x415716 < _0x2ef8a6; _0x415716++) {
    const _0x3c89a4 = _0x1f213c[_0x415716], _0x2e9478 = _0x415716 === _0x2ef8a6 - 1, _0x37361d = [_0x3400e2 + ".", REFERENCE_IMAGES_DIRECTIVE, _0x3c89a4["frameDescription"]], _0x32829c = shuffleInPlace(["In " + _0x22f273 + ".", "Lighting is " + _0x4b5ec5 + ".", "Camera: " + _0x47fd06 + ".", "Keep product color, shape, and brand matching reference images. Full product clearly visible.", "If hands are visible in the frame, each hand shows exactly five natural fingers. Single product in a single seamless frame. Clean background free of watermarks or logos."]);
    _0x3bf37f["push"]([..._0x37361d, ..._0x32829c, "Purely visual composition — image contains no typography, labels, or graphic overlays."]["join"]("\n"));
    const _0x1a485d = _0x2e9478 ? "Closing scene starting from the first frame:" : "Animate naturally from the first frame to the end frame:", _0x5a0dfb = [_0x1a485d, _0x3c89a4["motionDescription"], 'Thai dialogue: "' + _0x3c89a4["dialogue"] + '"', VIDEO_BOILERPLATE];
    if (_0x12c40c) _0x5a0dfb["push"](_0x12c40c);
    _0x383ad7["push"](_0x5a0dfb["join"]("\n"));
  }
  return log$b["info"]("[SceneBuilderFrames] assembled " + _0x3bf37f["length"] + " image + " + _0x383ad7["length"] + " video prompts (extra=" + (_0x12c40c ? "yes" : "no") + ", customScene=" + (_0x31a6cc ? "yes" : "no") + ")"), { "images": _0x3bf37f, "videos": _0x383ad7 };
}
async function fetchUrlAsImagePart(_0x532e77) {
  try {
    const _0x137e60 = await fetch(_0x532e77), _0x3baec9 = await _0x137e60["blob"](), _0x3520c2 = await new Promise((_0x88a39c, _0x15632e) => {
      const _0x386876 = new FileReader();
      _0x386876["onloadend"] = () => {
        const _0x4d782b = _0x386876["result"];
        _0x88a39c(_0x4d782b["split"](",")[1] || "");
      }, _0x386876["onerror"] = () => _0x15632e(_0x386876["error"]), _0x386876["readAsDataURL"](_0x3baec9);
    });
    return { "mimeType": _0x3baec9["type"] || "image/jpeg", "base64": _0x3520c2 };
  } catch (_0x47d4c7) {
    return log$b["warn"]("fetchUrlAsImagePart failed: " + _0x47d4c7), null;
  }
}
function dataUrlToImagePart(_0x4b263a) {
  const _0x574114 = _0x4b263a["match"](/^data:([^;]+);base64,(.+)$/);
  if (!_0x574114) return null;
  return { "mimeType": _0x574114[1], "base64": _0x574114[2] };
}
function parseHeadlineResponse(_0x45b485) {
  const _0x2f5091 = _0x45b485["match"](/headline:::(.*)/i);
  if (!_0x2f5091) return null;
  const _0x1f3ae6 = _0x2f5091[1]["replace"](/["""„‟«»''‚‛]/g, "")["replace"](/[—–\-]/g, "")["replace"](/[.。,，!！?？;；:：[\]()]/g, "")["replace"](/[\u200B-\u200F\uFEFF]/g, "")["replace"](/\s+/g, " ")["trim"]();
  return _0x1f3ae6 || null;
}
function sanitize(_0x13f37b) {
  return _0x13f37b["trim"]()["replace"](/[.,!?;:]+$/, "");
}
function sanitizeDialogue$1(_0x46cd3a) {
  return _0x46cd3a["replace"](/[\u200B-\u200F\uFEFF]/g, "")["replace"](/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")["replace"](/[""„‟«»]/g, "")["replace"](/[''‚‛]/g, "'")["replace"](/…/g, "...")["replace"](/[—–]/g, "-")["replace"](/[?？!！]/g, "")["replace"](/\s+/g, " ")["trim"]();
}
async function generateTiktokCaption(_0x1b1952, _0x2de795) {
  const _0x53d5f8 = _0x2de795 === "male" ? '- ผู้พูด/พรีเซนเตอร์เป็น "ผู้ชาย" — ใช้สรรพนาม/คำลงท้ายเพศชาย เช่น ครับ, นะครับ, ผม — ห้ามใช้ ค่ะ/จ้า/นะคะ/ดิฉัน เด็ดขาด' : _0x2de795 === "female" ? '- ผู้พูด/พรีเซนเตอร์เป็น "ผู้หญิง" — ใช้คำลงท้ายเพศหญิง เช่น ค่ะ, นะคะ, จ้า — ห้ามใช้ ครับ/ผม เด็ดขาด' : _0x2de795 === "neutral" ? "- ไม่ระบุเพศผู้พูด — ใช้คำลงท้ายกลาง ๆ ไม่เจาะจงเพศ เช่น นะ, เลย, จ้ะ, กันเลย — เลี่ยง ค่ะ/นะคะ/ครับ/ผม/ดิฉัน" : "- ใช้คำลงท้าย ค่ะ/จ้า/นะคะ ให้เหมาะกับผู้พูด", _0x542b3e = ["คุณคือนักเขียน Copy โฆษณา TikTok Shop ระดับมืออาชีพ สำหรับสินค้า: " + _0x1b1952, "", "งาน: เขียน Caption + 5 Hashtags ที่ดึงดูดและเหมาะกับ TikTok ของคนไทย", "", "กฎ Caption:", '- ใช้ Hook ดึงดูดในประโยคแรก เช่น เปิดด้วย "เจอแล้ว!", "ใครที่...", "บอกเลย", "เห็นปุ๊บ..."', '- ปิดด้วย Call-to-Action นุ่มๆ เช่น "กดดูในตะกร้าได้เลย", "ทักแชทมาได้เลย", "ลองเลยนะ"', "- ความยาว 2-3 ประโยค รวม 25-40 คำ", "- โทนเหมือนเพื่อนแนะนำของให้ฟัง ไม่ใช่โฆษณาแข็งๆ", _0x53d5f8, "- ห้ามใส่ # หรือเครื่องหมาย hashtag ใน caption เด็ดขาด", "- ห้ามใช้ Emoji", "- ห้ามใช้คำ Over Claim เช่น: 100%, อันดับ1, ที่สุดในโลก, สุดยอด, ดีที่สุด, เจ้าแรก, การันตี, รับประกัน, ชัวร์", "", "กฎ Hashtags:", "- ต้อง 5 ตัว ไม่มากไม่น้อย", '- ต้องเกี่ยวข้องกับ "ประเภทสินค้า" จริงๆ ไม่ใช่ generic', "- ผสม: 2 ตัว = ประเภทสินค้า/หมวดหมู่, 2 ตัว = กลุ่มเป้าหมาย/ไลฟ์สไตล์, 1 ตัว = trending/tiktokshop", "- คั่นด้วย comma เช่น tag1, tag2, tag3, tag4, tag5", "- ห้ามใส่ # นำหน้าแต่ละ tag (ระบบใส่ให้เอง) — ห้ามใส่ ## เด็ดขาด", '- ห้ามมีช่องว่างในแต่ละ tag (เช่น "เสื้อดำ" ไม่ใช่ "เสื้อ ดำ")', "", "ห้ามมีข้อความอื่นนอกจากรูปแบบนี้:", "", "CAPTION::: [caption]", "HASHTAGS::: tag1, tag2, tag3, tag4, tag5"]["join"]("\n");
  log$b["info"]("[TiktokCaption] PROMPT:\n" + _0x542b3e);
  const _0xbdf45d = { "caption": _0x1b1952 + " คุณภาพดี พร้อมส่ง สนใจทักแชตได้เลย", "hashtags": ["รีวิวสินค้า", "สินค้าแนะนำ", "tiktokshop"], "usedAI": ![] }, _0x361324 = await tryUserAIGenerate(_0x542b3e, void 0, "TikTok Caption");
  log$b["info"]("[TiktokCaption] API response (success=" + _0x361324["success"] + "):\n" + (_0x361324["text"] ?? _0x361324["error"] ?? "(empty)"));
  if (!_0x361324["success"] || !_0x361324["text"]) return log$b["warn"]("[TiktokCaption] Using fallback caption + hashtags"), _0xbdf45d;
  const _0x4e3b7d = parseTiktokCaptionResponse(_0x361324["text"]);
  if (!_0x4e3b7d["caption"] || _0x4e3b7d["hashtags"]["length"] === 0) return log$b["warn"]("[TiktokCaption] Parse incomplete (caption=" + !!_0x4e3b7d["caption"] + ", hashtags=" + _0x4e3b7d["hashtags"]["length"] + ") — using fallback for missing part"), { "caption": _0x4e3b7d["caption"] || _0xbdf45d["caption"], "hashtags": _0x4e3b7d["hashtags"]["length"] > 0 ? _0x4e3b7d["hashtags"] : _0xbdf45d["hashtags"], "usedAI": !!_0x4e3b7d["caption"] };
  return log$b["info"]('[TiktokCaption] Parsed: caption="' + _0x4e3b7d["caption"] + '" tags=' + _0x4e3b7d["hashtags"]["join"](",")), { ..._0x4e3b7d, "usedAI": !![] };
}
function parseTiktokCaptionResponse(_0x35cf93) {
  const _0x341c8b = _0x35cf93["match"](/CAPTION:::\s*\[?([^\]\n]+?)\]?\s*(?=\n|HASHTAGS:::|$)/i), _0x10b336 = _0x35cf93["match"](/HASHTAGS:::\s*\[?([^\n]+)/i), _0x39f171 = ((_0x341c8b == null ? void 0 : _0x341c8b[1]) || "")["trim"](), _0xb53c57 = ((_0x10b336 == null ? void 0 : _0x10b336[1]) || "")["trim"]();
  return { "caption": _0x39f171, "hashtags": parseHashtagList(_0xb53c57) };
}
function parseHashtagList(_0x321524) {
  if (!_0x321524) return [];
  const _0x2bd5b2 = [..._0x321524["matchAll"](/#+\s*([^\s,#\n][^,#\n]*)/g)]["map"]((_0x4d6c12) => _0x4d6c12[1]["trim"]()["replace"](/\s+/g, ""))["filter"]((_0x4a5001) => _0x4a5001["length"] >= 2);
  if (_0x2bd5b2["length"] >= 3) return _0x2bd5b2["slice"](0, 10);
  const _0x1d2601 = [];
  for (const _0x355149 of _0x321524["split"](/[,\n]+/)) {
    const _0x5f5247 = _0x355149["replace"](/#/g, "")["trim"]()["replace"](/\s+/g, "");
    if (_0x5f5247["length"] >= 2) _0x1d2601["push"](_0x5f5247);
  }
  return (_0x1d2601["length"] > _0x2bd5b2["length"] ? _0x1d2601 : _0x2bd5b2)["slice"](0, 10);
}
const autoBlueprintService = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateAutoBlueprint,
  generateExtendMultiScenePrompts,
  generateImageCopy,
  generateImageHeadline,
  generateSceneBuilderFramesPrompts,
  generateTiktokCaption,
  generateVideoPrompt,
  parseHashtagList,
  prepareProductBlueprint
}, Symbol.toStringTag, { value: "Module" }));
const log$a = createLogger("Block:GenImage");
let lastProductId = null, attemptNo = 0;
async function execute$3(_0x44d931, _0xbc771c) {
  if (DEV["SKIP_GEN_IMAGE"]) return sendPipelineLog$1("warn", "🚧 [DEV.SKIP_GEN_IMAGE] ข้าม GEN_IMAGE — GEN_VIDEO จะใช้รูปล่าสุดที่ Flow"), { "success": !![], "skipped": !![] };
  return _0x44d931["product"]["id"] !== lastProductId && (lastProductId = _0x44d931["product"]["id"], attemptNo = 0), attemptNo++, executeReal$1(_0x44d931, _0xbc771c);
}
async function executeReal$1(_0x33e44e, _0x50337e) {
  var _a2, _b2, _c, _d, _e;
  const { flowTabId: _0x4ae46b, settings: _0x3419de, product: _0x443f63 } = _0x33e44e, _0x3b42f5 = await ensureTabUrl(_0x4ae46b, GUARD_FLOW_PROJECT);
  if (!_0x3b42f5["ok"]) return { "success": ![], "error": "Flow ไม่อยู่หน้า project (" + (_0x3b42f5["finalUrl"] || "unknown") + ")" };
  await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_ENSURE_AGENT_OFF" });
  const _0x226492 = _0x3419de["aspectRatio"] || "9:16", _0x2a4852 = _0x3419de["imageModel"], _0x65b308 = Math["min"](3, ((_a2 = _0x443f63["productImages"]) == null ? void 0 : _a2["filter"](Boolean)["length"]) ?? 0), _0x429a84 = _0x443f63["modelImage"] ? 1 : 0, _0x46cea6 = _0x65b308 + _0x429a84;
  let _0x3243c3;
  const _0x30c04d = (_b2 = _0x443f63["customImagePromptOverride"]) == null ? void 0 : _b2["trim"]();
  if (_0x33e44e["artifacts"]["cachedImagePrompt"]) _0x3243c3 = _0x33e44e["artifacts"]["cachedImagePrompt"], log$a["info"]("Using cached image prompt (retry): " + _0x3243c3["slice"](0, 80) + "...");
  else {
    if (_0x30c04d) _0x3243c3 = _0x30c04d, _0x33e44e["artifacts"]["cachedImagePrompt"] = _0x3243c3, _0x33e44e["artifacts"]["trimmedProductName"] = truncateAtWordBoundary(_0x443f63["name"], 30), _0x33e44e["artifacts"]["cachedImageHeadline"] = "", log$a["info"]("Using customImagePromptOverride (REPLACE — skip AI/server): " + _0x3243c3["slice"](0, 120) + "..."), sendPipelineLog$1("info", "🖼 ใช้ Prompt สร้างรูปกำหนดเอง (skip AI + template)");
    else {
      const _0x47d7f9 = _0x443f63["showImageText"] === !![], _0x4e6961 = _0x47d7f9 && !((_c = _0x443f63["customImageText"]) == null ? void 0 : _c["trim"]());
      let _0x440db4, _0x3f8fa1;
      if (_0x3419de["useImageAI"] !== ![]) {
        const _0x2be274 = (_d = _0x443f63["customImageText"]) == null ? void 0 : _d["trim"]();
        if (_0x2be274 && _0x47d7f9) _0x440db4 = truncateAtWordBoundary(_0x443f63["name"], 30), log$a["info"]('Using user custom text — skip AI; trimmedName="' + _0x440db4 + '"');
        else {
          log$a["info"]("Calling generateImageCopy (wantAdCopy=" + _0x4e6961 + ")...");
          const _0x14f44b = await generateImageCopy(_0x443f63, _0x4e6961);
          if (_0x14f44b) {
            _0x440db4 = _0x14f44b["trimmedName"];
            if (_0x4e6961 && _0x14f44b["adCopy"]) _0x3f8fa1 = _0x14f44b["adCopy"];
            log$a["info"]('AI returned trimmedName="' + _0x440db4 + '"' + (_0x3f8fa1 ? ", adCopy=2 lines" : ""));
          } else {
            _0x440db4 = truncateAtWordBoundary(_0x443f63["name"], 30), log$a["warn"]('generateImageCopy failed — fallback trimmedName="' + _0x440db4 + '"');
            const _0x325334 = _0x4e6961 ? '⚠ AI ไม่สามารถสร้างคำโฆษณาได้ — ใช้ชื่อสินค้าตัด "' + _0x440db4 + '" แทน (ไม่มี 2 บรรทัดโฆษณา)' : '⚠ AI ไม่สามารถตัดชื่อสินค้าได้ — ใช้ชื่อตัด "' + _0x440db4 + '" แทน';
            sendPipelineLog$1("warn", _0x325334);
          }
        }
      } else _0x440db4 = truncateAtWordBoundary(_0x443f63["name"], 30), log$a["info"]('useImageAI=false — skip AI; trimmedName="' + _0x440db4 + '"');
      if (_0x50337e["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
      const _0x585c6a = await getImagePromptFromServer({ "product": _0x443f63, "settings": _0x3419de, "wantAdCopy": _0x4e6961, "trimmedName": _0x440db4, "adCopy": _0x3f8fa1 });
      if (!_0x585c6a) return { "success": ![], "error": "ขอ prompt จาก server ไม่ได้ — ลองอีกครั้งภายหลัง หรือเช็คการเชื่อมต่อ", "skipDownstream": ![] };
      _0x3243c3 = _0x585c6a["imagePrompt"], _0x33e44e["artifacts"]["cachedImagePrompt"] = _0x3243c3, _0x33e44e["artifacts"]["trimmedProductName"] = _0x585c6a["trimmedName"] || _0x440db4 || truncateAtWordBoundary(_0x443f63["name"], 30);
      const _0x90af76 = [];
      if (_0x33e44e["artifacts"]["trimmedProductName"]) _0x90af76["push"](_0x33e44e["artifacts"]["trimmedProductName"]);
      if (_0x585c6a["adCopy"]) _0x90af76["push"](_0x585c6a["adCopy"]["line1"], _0x585c6a["adCopy"]["line2"]);
      _0x33e44e["artifacts"]["cachedImageHeadline"] = _0x90af76["join"](" / "), log$a["info"]("[server] Prompt assembled: " + _0x3243c3["slice"](0, 120) + "...");
    }
  }
  if (_0x50337e["aborted"]) return { "success": ![], "error": "Aborted" };
  if (attemptNo > 1) {
    log$a["info"]("Attempt " + attemptNo + " — refreshing Flow page first..."), await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_RELOAD" }), await sleep$4(2e3), log$a["info"]("Waiting for Flow content script to re-inject...");
    const _0x4d28d3 = await waitForFlowReady(_0x4ae46b, 3e4);
    if (!_0x4d28d3) return { "success": ![], "error": "Flow content script ไม่ตอบหลัง reload — refresh tab แล้วลองใหม่", "skipDownstream": !![] };
    log$a["info"]("Flow content script ready ✓"), await sleep$4(1500);
    if (_0x50337e["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  }
  log$a["info"]("Ensuring image mode config...");
  const _0x5c0957 = await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "image", "aspectRatio": _0x226492, "count": 1, "imageModel": _0x2a4852 } });
  if (!(_0x5c0957 == null ? void 0 : _0x5c0957["success"])) return { "success": ![], "error": "ตั้งค่า image config ไม่สำเร็จ", "skipDownstream": !![] };
  if (_0x50337e["aborted"]) return { "success": ![], "error": "Aborted" };
  log$a["info"]("Reference images: " + _0x65b308 + " product + " + _0x429a84 + " model = " + _0x46cea6);
  if (_0x46cea6 > 0) {
    log$a["info"]("Attaching " + _0x46cea6 + " reference image(s)...");
    const _0x525a2f = await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_ATTACH_UPLOADS", "payload": { "count": _0x46cea6 } });
    if (!(_0x525a2f == null ? void 0 : _0x525a2f["success"])) log$a["warn"]("Attach failed — continuing without ref");
  }
  if (_0x50337e["aborted"]) return { "success": ![], "error": "Aborted" };
  log$a["info"]("Setting prompt...");
  const _0x13b1af = await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x3243c3 } });
  if (!(_0x13b1af == null ? void 0 : _0x13b1af["success"])) return { "success": ![], "error": "พิมพ์ prompt ลง Slate ไม่สำเร็จ", "skipDownstream": !![] };
  log$a["info"]("Waiting 8s for Slate processing..."), await sleep$4(8e3);
  if (_0x50337e["aborted"]) return { "success": ![], "error": "Aborted" };
  log$a["info"]("Clicking Create...");
  const _0x326e36 = await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_GENERATE" });
  if (!(_0x326e36 == null ? void 0 : _0x326e36["success"])) return { "success": ![], "error": "คลิกปุ่ม Generate ไม่สำเร็จ", "skipDownstream": !![] };
  log$a["info"]("Waiting for image result...");
  const _0x5e945d = await chrome["tabs"]["sendMessage"](_0x4ae46b, { "type": "FLOW_WAIT_RESULT", "payload": {} });
  if (!(_0x5e945d == null ? void 0 : _0x5e945d["success"])) {
    const _0x1dc67a = (_0x5e945d == null ? void 0 : _0x5e945d["errorText"]) ? translateFlowError(_0x5e945d["errorText"]) : (_0x5e945d == null ? void 0 : _0x5e945d["error"]) || "รอผลลัพธ์รูปไม่สำเร็จ";
    return { "success": ![], "error": _0x1dc67a, "skipDownstream": !![] };
  }
  return log$a["info"]("Image done ✓ (tile=" + ((_e = _0x5e945d["tileId"]) == null ? void 0 : _e["slice"](0, 20)) + ")"), _0x33e44e["artifacts"]["generatedImageUrl"] = _0x5e945d["imageUrl"], _0x33e44e["artifacts"]["generatedImageTileId"] = _0x5e945d["tileId"], { "success": !![] };
}
function sleep$4(_0x1d8559) {
  return new Promise((_0x5cd5d6) => setTimeout(_0x5cd5d6, _0x1d8559));
}
function truncateAtWordBoundary(_0x403822, _0x57a94e) {
  const _0x445ceb = _0x403822["trim"]();
  if (_0x445ceb["length"] <= _0x57a94e) return _0x445ceb;
  const _0x380e28 = _0x445ceb["slice"](0, _0x57a94e), _0x55fb6d = _0x380e28["lastIndexOf"](" ");
  if (_0x55fb6d > 0) return _0x380e28["slice"](0, _0x55fb6d)["trim"]();
  return _0x380e28["trim"]();
}
async function waitForFlowReady(_0x17051d, _0xc4bd41) {
  const _0x1afda5 = Date["now"]() + _0xc4bd41;
  while (Date["now"]() < _0x1afda5) {
    try {
      const _0x39f223 = await chrome["tabs"]["sendMessage"](_0x17051d, { "type": "FLOW_PING" });
      if (_0x39f223 == null ? void 0 : _0x39f223["ready"]) return !![];
    } catch {
    }
    await sleep$4(1e3);
  }
  return ![];
}
const genImageBlock = { "id": "GEN_IMAGE", "name": "สร้างรูป", "retries": 0, "execute": execute$3 };
const log$9 = createLogger("Block:GenVideo");
function buildLocalFallbackPrompt(_0x37de85, _0x266098, _0x252e2b) {
  const _0x5f7a7e = pickRandom$2(VIDEO_STYLE_VARIATIONS[_0x252e2b["videoStyle"] || ""] ?? VIDEO_STYLE_VARIATIONS["ugc_review"]), _0x2bb449 = VOICE_VARIATIONS[_0x252e2b["voiceType"] || ""] ?? VOICE_VARIATIONS["adult_female"], _0x312a48 = pickRandom$2(_0x2bb449["descs"]), _0xb92c79 = _0x2bb449["gender"], _0x58d4f9 = !_0x252e2b["promptLanguage"] || _0x252e2b["promptLanguage"] === "th", _0xd4ad60 = "Subject action: choose the most natural and engaging product presentation action from the image", _0x451cbd = _0x37de85 !== null ? 'Speech in Thai: "' + _0x37de85 + '"' : _0x58d4f9 ? "Generate engaging Thai-language product advertisement speech, Hook and CTA style, 7-8 seconds. Speak entirely in Thai language; render product names and any technical terms phonetically as Thai." : "Generate engaging product advertisement speech, Hook and CTA style, 7-8 seconds.", _0x3b13db = _0x58d4f9 ? "LANGUAGE LOCK: All spoken audio is in Thai language only. Every word pronounced as Thai phonemes, including any product names or technical terms." : "", _0x909cd3 = [_0x5f7a7e, _0xd4ad60], _0x116b0a = shuffleInPlace(["Voice: " + _0x312a48 + ". Consistent " + _0xb92c79 + " voice throughout.", "Lip movement synced to audio. Animation limited to characters already present in the reference image.", "The dialogue is spoken aloud as voice narration only — no on-screen text rendering, no subtitles, no captions, no written dialogue overlays. Pure cinematographic visual composition.", "Stable anatomy maintained — preserve five fingers per hand, consistent body proportions, single seamless form.", "The product appears at its true real-world physical size, matching the proportions in the reference image with the human hand as the natural scale reference."]), _0x24a526 = [];
  if (_0x3b13db) _0x24a526["push"](_0x3b13db);
  return _0x24a526["push"](_0x451cbd), [..._0x909cd3, ..._0x116b0a, ..._0x24a526]["join"]("\n");
}
async function attachVideoReferenceImages(_0x9ce356, _0x241bb7, _0x5e23e8) {
  var _a2, _b2;
  if (_0x5e23e8) {
    const _0x4f11dc = [], _0x17ed2c = _0x9ce356["artifacts"];
    if (_0x17ed2c["generatedImageTileId"] || _0x17ed2c["generatedImageUrl"]) _0x4f11dc["push"]({ "tileId": _0x17ed2c["generatedImageTileId"] ?? null, "url": _0x17ed2c["generatedImageUrl"] ?? null, "source": "generated" });
    const _0x7fa318 = (_b2 = (_a2 = _0x17ed2c["uploadedImageTiles"]) == null ? void 0 : _a2["product"]) == null ? void 0 : _b2[0];
    if (_0x7fa318 && (_0x7fa318["tileId"] || _0x7fa318["url"])) _0x4f11dc["push"]({ "tileId": _0x7fa318["tileId"], "url": _0x7fa318["url"], "source": "uploaded" });
    const _0x33f910 = _0x4f11dc["slice"](0, 3);
    if (_0x33f910["length"] >= 1) {
      sendPipelineLog$1("info", "🧩 แนบรูปอ้างอิง (Ingredients): " + _0x33f910["map"]((_0x343371) => _0x343371["source"] === "generated" ? "รูปเจน (รูปที่ 1)" : "รูปสินค้า (รูปที่ 2)")["join"](" + ") + "...");
      const _0x2fad2b = await chrome["tabs"]["sendMessage"](_0x241bb7, { "type": "FLOW_ATTACH_INGREDIENT_REFS", "payload": { "refs": _0x33f910 } }), _0x15053c = (_0x2fad2b == null ? void 0 : _0x2fad2b["attached"]) ?? 0;
      if ((_0x2fad2b == null ? void 0 : _0x2fad2b["success"]) && _0x15053c >= 1) {
        if (_0x15053c < (_0x2fad2b["total"] ?? _0x33f910["length"])) sendPipelineLog$1("warn", "⚠ แนบรูปอ้างอิงได้ " + _0x15053c + "/" + _0x2fad2b["total"] + " (ที่เหลือหาไม่เจอ — อาจ tile-id stale)");
        return { "mode": "ingredients", "refsAttached": _0x15053c };
      }
      sendPipelineLog$1("warn", "⚠ แนบรูปอ้างอิงแบบ Ingredients ไม่สำเร็จ — ใช้รูปล่าสุดที่เจนแทน");
    }
  }
  const _0x46f5a4 = await chrome["tabs"]["sendMessage"](_0x241bb7, { "type": "FLOW_ATTACH_LATEST_IMAGE" });
  if (!(_0x46f5a4 == null ? void 0 : _0x46f5a4["success"])) log$9["warn"]("Attach image failed — continuing without");
  return { "mode": "latest", "refsAttached": (_0x46f5a4 == null ? void 0 : _0x46f5a4["success"]) ? 1 : 0 };
}
function buildIngredientImageMappingDirective(_0x3ab473) {
  return _0x3ab473 === "en" ? "IMPORTANT — provided reference images: image 1 = the desired scene/composition (the presenter holding the product); keep the presenter's face, hairstyle, outfit, and skin tone EXACTLY as in image 1. image 2 = a clean reference of the product itself; keep the product's color, label text, branding, shape, and design EXACTLY as in image 2. Do not mix these up." : "สำคัญมาก — รูปอ้างอิงที่แนบ: รูปที่ 1 = องค์ประกอบ/ฉากที่ต้องการ (พรีเซนเตอร์ถือสินค้า) — ยึดใบหน้า ทรงผม เสื้อผ้า และสีผิวของพรีเซนเตอร์ตามรูปที่ 1 เป๊ะ. รูปที่ 2 = สินค้าตัวจริงแบบชัด — ยึดสี ฉลาก แบรนด์ รูปทรง และดีไซน์ของสินค้าตามรูปที่ 2 เป๊ะ. ห้ามสลับบทบาทของสองรูปนี้.";
}
async function execute$2(_0x3616e4, _0x5135dc) {
  const { settings: _0x975eac } = _0x3616e4;
  if (DEV["SKIP_GEN_VIDEO"]) return sendPipelineLog$1("warn", "🚧 [DEV.SKIP_GEN_VIDEO] ข้าม GEN_VIDEO — POST_TIKTOK จะหาวิดีโอล่าสุดใน Flow เอง"), { "success": !![], "skipped": !![] };
  if (DEV["TEST_DOWNLOAD_ONLY"]) {
    sendPipelineLog$1("warn", "🧪 [TEST_DOWNLOAD_ONLY] ข้าม scene gen → Flow Download + fetch ทันที → ปล่อย POST_TIKTOK ต่อ");
    const _0x1ec0c9 = Math["max"](1, _0x3616e4["settings"]["sceneCount"] ?? 2), _0x133724 = Math["min"](10 * 6e4, _0x1ec0c9 * 12e4);
    sendPipelineLog$1("info", "   timeout: " + _0x133724 / 1e3 + "s (" + _0x1ec0c9 + " scenes × 120s)");
    const _0x56f09f = await captureAndFetchFlowDownload(_0x3616e4["flowTabId"], async () => {
      await chrome["tabs"]["sendMessage"](_0x3616e4["flowTabId"], { "type": "FLOW_DOWNLOAD_EXTENDED_VIDEO", "payload": { "timeoutMs": 5 * 6e4 } });
    }, _0x133724);
    if (_0x56f09f) {
      _0x3616e4["artifacts"]["combinedVideoDataUrl"] = _0x56f09f;
      const _0x38ab56 = (_0x56f09f["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
      sendPipelineLog$1("info", "✓ ดึงวิดีโอ Combined สำเร็จ ~" + _0x38ab56 + " MB"), log$9["info"]("Combined video data URL fetched, size=" + _0x38ab56 + "MB");
    } else sendPipelineLog$1("warn", "⚠ จับ+fetch blob ไม่ทัน — POST_TIKTOK จะลองวิธีสำรอง");
    return { "success": !![] };
  }
  if (DEV["TEST_EXTEND_CLICK_ONLY"]) {
    sendPipelineLog$1("warn", "🧪 [TEST_EXTEND_CLICK_ONLY] ข้าม Gemini + scene 1 — ทดสอบ extend click เท่านั้น");
    const _0x499a08 = await chrome["tabs"]["sendMessage"](_0x3616e4["flowTabId"], { "type": "FLOW_EXTEND_CLIP", "payload": { "prompt": "" } });
    if (!(_0x499a08 == null ? void 0 : _0x499a08["success"])) return sendPipelineLog$1("error", "❌ Extend click ล้มเหลว: " + ((_0x499a08 == null ? void 0 : _0x499a08["error"]) || "unknown")), { "success": ![], "error": (_0x499a08 == null ? void 0 : _0x499a08["error"]) || "extend click failed", "skipDownstream": !![] };
    return sendPipelineLog$1("info", "✓ คลิกเข้า extend menu สำเร็จ (verify ด้วยตาใน Flow tab)"), { "success": !![], "skipDownstream": !![] };
  }
  const _0x5ee759 = _0x975eac["assemblyMode"] === "extend" && (_0x975eac["sceneCount"] ?? 1) > 1;
  if (_0x5ee759) return executeExtendMultiScene(_0x3616e4, _0x5135dc);
  const _0x34af12 = (_0x975eac["sceneCount"] ?? 1) > 1 && _0x975eac["assemblyMode"] !== "extend";
  if (_0x34af12) return executeSceneBuilderMulti(_0x3616e4, _0x5135dc);
  return executeReal(_0x3616e4, _0x5135dc);
}
async function executeExtendMultiScene(_0x488723, _0x4c679f) {
  var _a2, _b2, _c, _d, _e, _f, _g;
  const { flowTabId: _0x579bea, settings: _0x25b040, product: _0x3d07ac } = _0x488723, _0x311a92 = _0x25b040["aspectRatio"] || "9:16", _0x186ad1 = _0x25b040["videoModel"], _0x4c5404 = Math["max"](2, Math["min"](10, _0x25b040["sceneCount"] ?? 2)), _0x1e149a = { ..._0x25b040, "voiceType": _0x3d07ac["voiceTypeOverride"] || _0x25b040["voiceType"], "videoStyle": _0x3d07ac["videoStyleOverride"] || _0x25b040["videoStyle"], "lipSync": _0x3d07ac["lipSyncOverride"] ?? _0x25b040["lipSync"], "sceneType": resolveRandomChoice(_0x3d07ac["sceneTypeOverride"] || _0x25b040["sceneType"], SCENE_TYPES), "lighting": resolveRandomChoice(_0x3d07ac["lightingOverride"] || _0x25b040["lighting"], LIGHTING_TYPES), "imageStyle": resolveRandomChoice(_0x3d07ac["imageStyleOverride"] || _0x25b040["imageStyle"], IMAGE_STYLES), "imageCameraAngle": resolveRandomChoice(_0x3d07ac["imageCameraAngleOverride"] || _0x25b040["imageCameraAngle"], IMAGE_CAMERA_ANGLES), "videoCameraMovement": resolveRandomChoice(_0x3d07ac["videoCameraMovementOverride"] || _0x25b040["videoCameraMovement"], VIDEO_CAMERA_MOVEMENTS), "textColor": resolveRandomChoice(_0x3d07ac["textColorOverride"] || _0x25b040["textColor"], TEXT_COLORS), "textPosition": resolveRandomChoice(_0x3d07ac["textPositionOverride"] || _0x25b040["textPosition"], TEXT_POSITIONS) };
  let _0x5bb3ec;
  const _0x5f220c = _0x488723["artifacts"]["cachedExtendPrompts"], _0x5e266a = (_a2 = _0x3d07ac["customVideoPromptOverride"]) == null ? void 0 : _a2["trim"]();
  if (_0x5f220c && _0x5f220c["length"] === _0x4c5404) _0x5bb3ec = _0x5f220c, log$9["info"]("Using cached extend prompts (" + _0x5bb3ec["length"] + ")");
  else {
    if (_0x5e266a) {
      _0x5bb3ec = _0x5e266a["split"]("|||")["map"]((_0x607f92) => _0x607f92["trim"]())["filter"]((_0x4e3532) => _0x4e3532["length"] > 0);
      if (_0x5bb3ec["length"] === 0) _0x5bb3ec = [_0x5e266a];
      _0x488723["artifacts"]["cachedExtendPrompts"] = _0x5bb3ec, log$9["info"]("Using customVideoPromptOverride for Extend (REPLACE — skip AI): " + _0x5bb3ec["length"] + " scene(s)"), sendPipelineLog$1("info", "🎬 ใช้ Prompt สร้างวิดีโอกำหนดเอง (" + _0x5bb3ec["length"] + " ฉาก, skip AI)"), _0x5bb3ec["length"] < _0x4c5404 && sendPipelineLog$1("warn", "⚠ Prompt กำหนดเองมี " + _0x5bb3ec["length"] + " ฉาก (ต้องการ " + _0x4c5404 + ") — คั่นด้วย ||| ให้ครบ");
    } else {
      const _0xd5dc04 = (_b2 = _0x3d07ac["customSpeech"]) == null ? void 0 : _b2["trim"]();
      log$9["info"]("Generating " + _0x4c5404 + "-scene extend prompts via Gemini..."), sendPipelineLog$1("info", "🤖 Gemini กำลังสร้าง " + _0x4c5404 + " scene prompts (Extend mode)...");
      const _0x574f96 = await generateExtendMultiScenePrompts(_0x3d07ac, _0x1e149a, _0xd5dc04 || void 0);
      if (!_0x574f96 || _0x574f96["prompts"]["length"] < 1) return { "success": ![], "error": "AI และ fallback ของ server สร้าง extend prompts ไม่ได้ทั้งคู่", "skipDownstream": !![] };
      _0x5bb3ec = _0x574f96["prompts"], _0x488723["artifacts"]["cachedExtendPrompts"] = _0x5bb3ec, _0x574f96["fromFallback"] && sendPipelineLog$1("info", "🎬 ใช้ " + _0x5bb3ec["length"] + " Prompt วิดีโอ Extend จาก fallback (template) ของ server"), _0x5bb3ec["length"] !== _0x4c5404 && sendPipelineLog$1("warn", "⚠ ได้ " + _0x5bb3ec["length"] + " prompts (ต้องการ " + _0x4c5404 + ") — ใช้เท่าที่ได้");
    }
  }
  if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x111a8e = _0x488723["artifacts"]["extendScenesProgress"] ?? 0;
  _0x111a8e > 0 && sendPipelineLog$1("info", "⏩ Resume จาก scene " + (_0x111a8e + 1) + "/" + _0x5bb3ec["length"] + " (ฉาก 1.." + _0x111a8e + " ทำเสร็จแล้ว)");
  if (_0x111a8e >= 1) log$9["info"]("Scene 1 already completed (from previous run) — skipping");
  else {
    if (DEV["SKIP_SCENE_1_GEN"]) sendPipelineLog$1("warn", "🧪 [SKIP_SCENE_1_GEN] ข้าม scene 1 Veo gen — ใช้วิดีโอใน Flow เป็นฐาน extend scene 2"), sendPipelineLog$1("info", "(scene 1 prompt ที่ได้จาก Gemini " + _0x5bb3ec[0]["length"] + " chars — ไม่ใช้)"), _0x488723["artifacts"]["extendScenesProgress"] = 1;
    else {
      sendPipelineLog$1("info", "▶ Scene 1/" + _0x5bb3ec["length"] + " กำลังสร้าง...");
      const _0x12ed64 = await chrome["tabs"]["sendMessage"](_0x579bea, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x311a92, "count": 1, "videoModel": _0x186ad1, "videoDuration": _0x25b040["videoDuration"], "ingredientMode": _0x1e149a["ingredientMode"] === !![] } });
      if (!(_0x12ed64 == null ? void 0 : _0x12ed64["success"])) return { "success": ![], "error": "ตั้งค่า scene 1 ไม่สำเร็จ", "skipDownstream": !![] };
      if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
      const _0x1266ff = await attachVideoReferenceImages(_0x488723, _0x579bea, _0x1e149a["ingredientMode"] === !![]);
      _0x1266ff["mode"] === "ingredients" && _0x1266ff["refsAttached"] >= 2 && (_0x5bb3ec[0] = buildIngredientImageMappingDirective(_0x1e149a["promptLanguage"]) + "\n" + _0x5bb3ec[0]);
      if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
      const _0x4001b1 = await chrome["tabs"]["sendMessage"](_0x579bea, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x5bb3ec[0] } });
      if (!(_0x4001b1 == null ? void 0 : _0x4001b1["success"])) return { "success": ![], "error": "พิมพ์ prompt scene 1 ไม่สำเร็จ", "skipDownstream": !![] };
      if (DEV["STOP_AFTER_VIDEO_PROMPT"]) return sendPipelineLog$1("warn", "🚧 [DEV.STOP_AFTER_VIDEO_PROMPT] หยุดหลังกรอก prompt scene 1 แล้ว"), { "success": !![], "skipDownstream": !![] };
      await sleep$3(3e3);
      if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
      const _0x1b9d63 = await chrome["tabs"]["sendMessage"](_0x579bea, { "type": "FLOW_GENERATE" });
      if (!(_0x1b9d63 == null ? void 0 : _0x1b9d63["success"])) return { "success": ![], "error": "คลิก Generate scene 1 ไม่สำเร็จ", "skipDownstream": !![] };
      const _0x304def = await chrome["tabs"]["sendMessage"](_0x579bea, { "type": "FLOW_WAIT_RESULT", "payload": {} });
      if (!(_0x304def == null ? void 0 : _0x304def["success"])) {
        const _0x20eebd = (_0x304def == null ? void 0 : _0x304def["errorText"]) ? translateFlowError(_0x304def["errorText"]) : (_0x304def == null ? void 0 : _0x304def["error"]) || "รอผลลัพธ์ scene 1 ไม่สำเร็จ";
        return { "success": ![], "error": "Scene 1 — " + _0x20eebd, "skipDownstream": !![] };
      }
      sendPipelineLog$1("info", "✓ Scene 1/" + _0x5bb3ec["length"] + " เสร็จ"), _0x488723["artifacts"]["extendScenesProgress"] = 1;
    }
  }
  const _0x25294b = Math["max"](1, _0x488723["artifacts"]["extendScenesProgress"] ?? 1);
  _0x25294b > 1 && log$9["info"]("Resume extend loop from scene " + (_0x25294b + 1));
  const _0x5b721e = 3, _0x4103e1 = 3e4, _0x366c0a = 3e3, _0x4b7a87 = 5 * 6e4, _0x1eac87 = 6e4, _0x53a272 = 18e4, _0x2035fe = 5e3, _0x705d12 = 18e4, _0x4d7cb6 = -100;
  let _0x4031cd = ![];
  const _0x556f47 = async (_0x184e88, _0x416cdc) => {
    try {
      return await chrome["tabs"]["sendMessage"](_0x579bea, { "type": _0x184e88, "payload": _0x416cdc });
    } catch (_0xda6113) {
      return log$9["error"]("[multi-extend] " + _0x184e88 + " throw: " + _0xda6113), null;
    }
  };
  if (_0x25294b === 1) {
    sendPipelineLog$1("info", "▶ เปิด clip ล่าสุดเข้าหน้า /edit/ ก่อนเริ่ม extend...");
    const _0x28d59c = await _0x556f47("FLOW_OPEN_LATEST_VIDEO_EDIT");
    if (!(_0x28d59c == null ? void 0 : _0x28d59c["success"]) || !_0x28d59c["arrivedEditPage"]) return { "success": ![], "error": "เปิด /edit/ ไม่สำเร็จ: " + ((_0x28d59c == null ? void 0 : _0x28d59c["error"]) || "unknown") + " (before=" + (_0x28d59c == null ? void 0 : _0x28d59c["beforeUrl"]) + " after=" + (_0x28d59c == null ? void 0 : _0x28d59c["afterUrl"]) + ")", "skipDownstream": !![] };
    if (_0x28d59c["skipped"]) {
      sendPipelineLog$1("info", "   ⏩ อยู่หน้า /" + _0x28d59c["currentPage"] + "/ อยู่แล้ว — skip navigation");
      if (_0x28d59c["currentPage"] === "scene") _0x4031cd = !![];
    } else sendPipelineLog$1("info", "   ✓ navigate ไป /edit/ สำเร็จ");
    await sleep$3(1500);
  }
  for (let _0x17aae7 = _0x25294b; _0x17aae7 < _0x5bb3ec["length"]; _0x17aae7++) {
    if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
    await sleep$3(2500);
    const _0x424dee = _0x5bb3ec[_0x17aae7];
    let _0x49b032 = ![], _0x5275c0 = "";
    for (let _0xa1f283 = 0; _0xa1f283 < _0x5b721e && !_0x49b032; _0xa1f283++) {
      if (_0x4c679f["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
      if (_0xa1f283 === 0) sendPipelineLog$1("info", "▶ Scene " + (_0x17aae7 + 1) + "/" + _0x5bb3ec["length"] + " กำลัง extend...");
      else {
        const _0x533129 = _0x4103e1 / 1e3, _0x1dac5e = "Scene " + (_0x17aae7 + 1) + " รอก่อน retry " + _0xa1f283 + "/" + (_0x5b721e - 1);
        for (let _0x55cd58 = _0x533129; _0x55cd58 > 0; _0x55cd58--) {
          if (_0x4c679f["aborted"]) return broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x533129, "label": _0x1dac5e }), { "success": ![], "error": "หยุดโดยผู้ใช้" };
          sendPipelineLog$1("warn", "⏳ Scene " + (_0x17aae7 + 1) + " รอ " + _0x55cd58 + "s ก่อน retry " + _0xa1f283 + "/" + (_0x5b721e - 1) + "...", _0x55cd58 < _0x533129), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x55cd58, "total": _0x533129, "label": _0x1dac5e }), await sleep$3(1e3);
        }
        broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x533129, "label": _0x1dac5e }), sendPipelineLog$1("info", "↻ Scene " + (_0x17aae7 + 1) + "/" + _0x5bb3ec["length"] + " retry attempt " + (_0xa1f283 + 1));
      }
      const _0x40d204 = await ensureTabUrl(_0x579bea, GUARD_FLOW_PROJECT);
      if (!_0x40d204["ok"]) {
        _0x5275c0 = "Flow ไม่อยู่หน้า project — extend ไม่ได้";
        continue;
      }
      try {
        const _0x20f69a = await chrome["tabs"]["get"](_0x579bea), _0x484aee = _0x20f69a["url"] || "", _0x325f03 = /\/project\/[^/?#]+\/scene/i["test"](_0x484aee);
        if (_0x325f03 && !_0x4031cd) _0x4031cd = !![], sendPipelineLog$1("info", "   ℹ ตรวจ URL: อยู่หน้า /scene/ แล้ว → จะ activate clip ล่าสุดก่อนเริ่ม (sync onScenePage)");
        else !_0x325f03 && _0x4031cd && (_0x4031cd = ![], sendPipelineLog$1("warn", "   ⚠ ตรวจ URL: ไม่ใช่ /scene/ แล้ว — reset onScenePage"));
      } catch (_0x37d8f6) {
        log$9["warn"]("[multi-extend] URL detect fail: " + _0x37d8f6);
      }
      const _0xf81dda = await _0x556f47("FLOW_LIST_CLIPS");
      if (!(_0xf81dda == null ? void 0 : _0xf81dda["success"])) {
        _0x5275c0 = "[6] FLOW_LIST_CLIPS fail (baseline)";
        continue;
      }
      const _0x9b7849 = _0xf81dda["count"];
      if (_0x9b7849 === 0) {
        _0x5275c0 = "baseline=0 — ไม่มี clip ใน Flow";
        break;
      }
      if (_0x4031cd) {
        const _0x495e26 = _0x9b7849 - 1, _0x2fb2d6 = await _0x556f47("FLOW_CLICK_CLIP", { "clipIndex": _0x495e26, "useCdp": ![] });
        if (!(_0x2fb2d6 == null ? void 0 : _0x2fb2d6["success"])) {
          _0x5275c0 = "activate clip[" + _0x495e26 + "] fail: " + (_0x2fb2d6 == null ? void 0 : _0x2fb2d6["error"]);
          continue;
        }
        await sleep$3(800);
      }
      const _0x494b3f = await _0x556f47("FLOW_EXTEND_OPEN_ADD_MENU");
      if (!(_0x494b3f == null ? void 0 : _0x494b3f["success"])) {
        _0x5275c0 = "[1] open Add menu fail: " + (_0x494b3f == null ? void 0 : _0x494b3f["error"]);
        continue;
      }
      const _0x545b47 = await _0x556f47("FLOW_EXTEND_PICK_MENU_OPTION", { "match": "Extend" });
      if (!(_0x545b47 == null ? void 0 : _0x545b47["success"])) {
        _0x5275c0 = "[2] pick option fail: " + (_0x545b47 == null ? void 0 : _0x545b47["error"]);
        continue;
      }
      const _0x4d0c71 = await _0x556f47("FLOW_EXTEND_TYPE_PROMPT", { "text": _0x424dee });
      if (!(_0x4d0c71 == null ? void 0 : _0x4d0c71["success"])) {
        _0x5275c0 = "[3] type prompt fail: " + (_0x4d0c71 == null ? void 0 : _0x4d0c71["error"]);
        continue;
      }
      const _0x1f9114 = await _0x556f47("FLOW_EXTEND_CLICK_CREATE");
      if (!(_0x1f9114 == null ? void 0 : _0x1f9114["success"])) {
        _0x5275c0 = "[4] Create fail: " + (_0x1f9114 == null ? void 0 : _0x1f9114["error"]);
        continue;
      }
      if (!_0x4031cd) {
        sendPipelineLog$1("info", "   ⏳ Poll URL ทุก " + _0x366c0a / 1e3 + "s รอเปลี่ยน /edit/→/scene/ (timeout " + _0x4b7a87 / 6e4 + " นาที)...");
        const _0xd68e64 = Date["now"]() + _0x4b7a87, _0x229cf1 = _0x4b7a87 / 1e3, _0x3dc4ec = "รอ Flow เปลี่ยนเป็น /scene/";
        let _0x1383b3 = ![], _0x195156 = 0;
        while (Date["now"]() < _0xd68e64) {
          if (_0x4c679f["aborted"]) return broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x229cf1, "label": _0x3dc4ec }), { "success": ![], "error": "หยุดโดยผู้ใช้" };
          _0x195156++;
          try {
            const _0x4a6b8d = await chrome["tabs"]["get"](_0x579bea), _0x12ff40 = _0x4a6b8d["url"] || "";
            if (/\/project\/[^/?#]+\/scene/i["test"](_0x12ff40)) {
              _0x1383b3 = !![];
              const _0x4445f7 = Math["round"]((_0x4b7a87 - (_0xd68e64 - Date["now"]())) / 1e3);
              sendPipelineLog$1("info", "   ✓ Flow เปลี่ยนเป็น /scene/ แล้ว (" + _0x4445f7 + "s, poll " + _0x195156 + "×)");
              break;
            }
          } catch (_0x5e2761) {
            log$9["warn"]("[multi-extend] poll URL failed: " + _0x5e2761);
          }
          const _0x37f8b3 = Math["max"](0, Math["ceil"]((_0xd68e64 - Date["now"]()) / 1e3));
          sendPipelineLog$1("info", "   ⏳ poll #" + _0x195156 + " — ยังเป็น /edit/ (เหลือ " + _0x37f8b3 + "s)", !![]), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x37f8b3, "total": _0x229cf1, "label": _0x3dc4ec }), await sleep$3(_0x366c0a);
        }
        broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x229cf1, "label": _0x3dc4ec });
        if (!_0x1383b3) {
          _0x5275c0 = "timeout " + _0x4b7a87 / 6e4 + " นาที — Flow ไม่เปลี่ยนเป็น /scene/";
          continue;
        }
        _0x4031cd = !![];
      } else await sleep$3(1500);
      sendPipelineLog$1("info", "   ⏳ รอ " + _0x1eac87 / 1e3 + "s ให้ Flow เริ่ม generate...");
      const _0x1afadb = Date["now"]() + _0x1eac87, _0x550d1c = _0x1eac87 / 1e3, _0x29fa92 = "รอ Flow เริ่ม generate";
      while (Date["now"]() < _0x1afadb) {
        if (_0x4c679f["aborted"]) return broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x550d1c, "label": _0x29fa92 }), { "success": ![], "error": "หยุดโดยผู้ใช้" };
        const _0x34c09a = Math["max"](0, Math["ceil"]((_0x1afadb - Date["now"]()) / 1e3));
        sendPipelineLog$1("info", "   ⏳ รอ Flow generate — เหลือ " + _0x34c09a + "s", !![]), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x34c09a, "total": _0x550d1c, "label": _0x29fa92 }), await sleep$3(1e3);
      }
      broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x550d1c, "label": _0x29fa92 });
      const _0x177a79 = await _0x556f47("FLOW_LIST_CLIPS");
      if (!(_0x177a79 == null ? void 0 : _0x177a79["success"])) {
        _0x5275c0 = "[6] FLOW_LIST_CLIPS fail (snapshot)";
        continue;
      }
      sendPipelineLog$1("info", "   [6] snapshot — EN=" + _0x177a79["count"] + " (baseline=" + _0x9b7849 + ")");
      if (_0x177a79["count"] <= _0x9b7849) {
        sendPipelineLog$1("warn", "⚠ [6] EN=" + _0x177a79["count"] + " ไม่เพิ่มจาก baseline=" + _0x9b7849 + " หลัง pre-wait " + _0x1eac87 / 1e3 + "s → Create ไม่ทำงาน → retry attempt"), _0x5275c0 = "EN ไม่เพิ่มหลัง Create (EN=" + _0x177a79["count"] + "=baseline=" + _0x9b7849 + ") — Flow ไม่สร้าง placeholder";
        continue;
      }
      const _0x32496d = _0x177a79["count"] - 1;
      if (_0x32496d >= 0) {
        const _0xbc7da9 = await _0x556f47("FLOW_CLICK_CLIP", { "clipIndex": _0x32496d, "useCdp": ![] });
        (_0xbc7da9 == null ? void 0 : _0xbc7da9["success"]) ? sendPipelineLog$1("info", "   [5] activate clip[" + _0x32496d + "] (EN-1) — เปิด side panel card") : sendPipelineLog$1("warn", "   ⚠ [5] activate EN-1 (idx=" + _0x32496d + ") fail: " + (_0xbc7da9 == null ? void 0 : _0xbc7da9["error"]) + " — ไป [10] ต่อ"), await sleep$3(500);
      }
      const _0x308b04 = Date["now"]() + _0x53a272, _0x2182e6 = _0x53a272 / 1e3, _0x2255a5 = "รอ clip ใหม่ + frames";
      let _0x3f1b89 = null, _0x5acc1c = ![], _0x5089ba = "";
      while (Date["now"]() < _0x308b04) {
        if (_0x4c679f["aborted"]) return broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x2182e6, "label": _0x2255a5 }), { "success": ![], "error": "หยุดโดยผู้ใช้" };
        const _0x1dea3f = _0x308b04 - Date["now"](), _0x44686a = Math["min"](_0x2035fe, _0x1dea3f), _0x436280 = await _0x556f47("FLOW_WAIT_NEW_CLIP_READY", { "previousCount": _0x9b7849, "timeoutMs": _0x44686a, "minFrames": 1, "pollMs": 1500 });
        if ((_0x436280 == null ? void 0 : _0x436280["success"]) && _0x436280["ready"]) {
          _0x3f1b89 = _0x436280;
          const _0x2eb691 = Math["round"]((_0x53a272 - (_0x308b04 - Date["now"]())) / 1e3);
          sendPipelineLog$1("info", "   ✓ [10] clip พร้อม (phase=" + _0x436280["phase"] + ", imgCount=" + _0x436280["imgCount"] + ", " + _0x2eb691 + "s)");
          break;
        }
        const _0x29aceb = await _0x556f47("FLOW_CHECK_GEN_FAILED");
        if ((_0x29aceb == null ? void 0 : _0x29aceb["success"]) && _0x29aceb["failed"]) {
          _0x5acc1c = !![], _0x5089ba = _0x29aceb["reason"] || "", sendPipelineLog$1("warn", "⚠ [10] ตรวจพบ Failed card (stepId=" + ((_c = _0x29aceb["stepId"]) == null ? void 0 : _c["slice"](0, 35)) + "...) — reason: " + _0x5089ba["slice"](0, 80));
          break;
        }
        const _0x117157 = Math["max"](0, Math["ceil"]((_0x308b04 - Date["now"]()) / 1e3));
        sendPipelineLog$1("info", "   ⏳ [10] รอ clip ใหม่ + frames — phase=" + ((_0x436280 == null ? void 0 : _0x436280["phase"]) ?? "?") + " (เหลือ " + _0x117157 + "s)", !![]), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x117157, "total": _0x2182e6, "label": _0x2255a5 });
      }
      broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x2182e6, "label": _0x2255a5 });
      if (_0x5acc1c) {
        const _0x303ba1 = await _0x556f47("FLOW_LIST_CLIPS"), _0x30f0e0 = (_0x303ba1 == null ? void 0 : _0x303ba1["success"]) ? _0x303ba1["count"] : -1, _0x3b5544 = _0x30f0e0 > 0 ? _0x30f0e0 - 1 : -1, _0x4ee24a = (_0x303ba1 == null ? void 0 : _0x303ba1["success"]) && ((_d = _0x303ba1["clips"][_0x3b5544]) == null ? void 0 : _d["clipId"]) || "?";
        sendPipelineLog$1("warn", "🗑 ลบ clip[EN-1] (idx=" + _0x3b5544 + ", id=" + _0x4ee24a["slice"](0, 30) + ") — right-click → context menu → Delete");
        const _0x427bb1 = await _0x556f47("FLOW_DELETE_FAILED_STEP", { "clipIndex": -1 });
        if (!(_0x427bb1 == null ? void 0 : _0x427bb1["success"])) {
          sendPipelineLog$1("error", "   ✗ ลบ clip[EN-1] ไม่สำเร็จ: " + ((_0x427bb1 == null ? void 0 : _0x427bb1["error"]) || "unknown")), _0x5275c0 = "ลบ clip[EN-1] ไม่สำเร็จ: " + ((_0x427bb1 == null ? void 0 : _0x427bb1["error"]) || "unknown");
          continue;
        }
        await sleep$3(800);
        const _0xd74c42 = await _0x556f47("FLOW_LIST_CLIPS"), _0x3a1604 = (_0xd74c42 == null ? void 0 : _0xd74c42["success"]) ? _0xd74c42["count"] : -1;
        sendPipelineLog$1("info", "   ✓ ลบสำเร็จ — clip[" + _0x427bb1["clipIndexResolved"] + "] id=" + (_0x427bb1["clipId"] || "")["slice"](0, 30) + " | EN " + _0x30f0e0 + "→" + _0x3a1604);
        _0x3a1604 === _0x30f0e0 && sendPipelineLog$1("warn", "   ⚠ EN ไม่ลดหลังลบ (" + _0x30f0e0 + "=" + _0x3a1604 + ") — อาจมี confirm dialog หรือลบไม่ถึง — proceed ต่อ");
        sendPipelineLog$1("info", "   ⏳ รอ " + _0x705d12 / 1e3 + "s ก่อน retry...");
        const _0x164419 = Date["now"]() + _0x705d12, _0x397a42 = _0x705d12 / 1e3, _0x38e14e = "รอ " + _0x397a42 + "s ก่อน retry (หลังลบ Failed)";
        while (Date["now"]() < _0x164419) {
          if (_0x4c679f["aborted"]) return broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x397a42, "label": _0x38e14e }), { "success": ![], "error": "หยุดโดยผู้ใช้" };
          const _0x2c6c7d = Math["max"](0, Math["ceil"]((_0x164419 - Date["now"]()) / 1e3));
          sendPipelineLog$1("warn", "   ⏳ recovery — เหลือ " + _0x2c6c7d + "s", !![]), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x2c6c7d, "total": _0x397a42, "label": _0x38e14e }), await sleep$3(1e3);
        }
        broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x397a42, "label": _0x38e14e }), sendPipelineLog$1("info", "↻ Scene " + (_0x17aae7 + 1) + " retry หลัง Failed-recovery — [6]→[5]→[1][2][3][4]→[10]"), _0x5275c0 = "Generation failed (recovered, retry attempt)";
        continue;
      }
      if (!_0x3f1b89 || !_0x3f1b89["ready"]) {
        _0x5275c0 = "[10] timeout " + _0x53a272 / 1e3 + "s — phase=" + (_0x3f1b89 == null ? void 0 : _0x3f1b89["phase"]);
        continue;
      }
      const _0xae8f7a = await _0x556f47("FLOW_LIST_CLIPS");
      if (!(_0xae8f7a == null ? void 0 : _0xae8f7a["success"])) {
        _0x5275c0 = "[6] refresh fail";
        continue;
      }
      const _0x1f2542 = _0xae8f7a["count"], _0x5cc615 = _0x1f2542 - 2;
      if (_0x5cc615 < 0) {
        _0x5275c0 = "trimIdx=EN-2=" + _0x5cc615 + " < 0 (EN=" + _0x1f2542 + ")";
        continue;
      }
      const _0x28aa83 = ((_e = _0xae8f7a["clips"][_0x5cc615]) == null ? void 0 : _e["clipId"]) || "", _0x1593e1 = await _0x556f47("FLOW_CLICK_CLIP", { "clipIndex": _0x5cc615, "useCdp": ![] });
      if (!(_0x1593e1 == null ? void 0 : _0x1593e1["success"])) {
        _0x5275c0 = "[5] click EN-2 fail: " + (_0x1593e1 == null ? void 0 : _0x1593e1["error"]);
        continue;
      }
      _0x1593e1["clipId"] && _0x1593e1["clipId"] !== _0x28aa83 && log$9["warn"]("[multi-extend] Scene " + (_0x17aae7 + 1) + ": [5] clicked clip-id mismatch — wanted=" + _0x28aa83["slice"](0, 20) + " got=" + _0x1593e1["clipId"]["slice"](0, 20));
      await sleep$3(800);
      const _0x593024 = await _0x556f47("FLOW_TRIM_CLIP_BY_PX", { "clipIndex": _0x5cc615, "dx": _0x4d7cb6, "useCdp": ![] });
      if (!(_0x593024 == null ? void 0 : _0x593024["success"])) {
        _0x5275c0 = "[9] trim fail: " + (_0x593024 == null ? void 0 : _0x593024["error"]);
        continue;
      }
      _0x593024["clipId"] && _0x593024["clipId"] !== _0x28aa83 && log$9["warn"]("[multi-extend] Scene " + (_0x17aae7 + 1) + ": [9] trim clip-id mismatch — wanted=" + _0x28aa83["slice"](0, 20) + " got=" + _0x593024["clipId"]["slice"](0, 20)), sendPipelineLog$1("info", "   ✓ Scene " + (_0x17aae7 + 1) + " extend สำเร็จ + trim Δ" + ((_f = _0x593024["rectAfter"]) == null ? void 0 : _f["widthDelta"]) + "px (clip " + _0x5cc615 + " → " + ((_g = _0x593024["rectAfter"]) == null ? void 0 : _g["width"]) + "px)"), _0x49b032 = !![];
    }
    if (!_0x49b032) return { "success": ![], "error": "Scene " + (_0x17aae7 + 1) + " failed after " + _0x5b721e + " attempts: " + _0x5275c0, "skipDownstream": !![] };
    sendPipelineLog$1("info", "✓ Scene " + (_0x17aae7 + 1) + "/" + _0x5bb3ec["length"] + " เสร็จ"), _0x488723["artifacts"]["extendScenesProgress"] = _0x17aae7 + 1;
  }
  sendPipelineLog$1("info", "✅ All " + _0x5bb3ec["length"] + " scenes generated");
  const _0x206116 = await ensureTabUrl(_0x579bea, GUARD_FLOW_PROJECT);
  if (!_0x206116["ok"]) return sendPipelineLog$1("warn", "⚠ Flow ไม่อยู่หน้า project — skip download"), { "success": !![] };
  sendPipelineLog$1("info", "▶ ดาวน์โหลด Full Video + fetch combined blob...");
  const _0x58e106 = Math["min"](10 * 6e4, _0x4c5404 * 12e4);
  sendPipelineLog$1("info", "   timeout: " + _0x58e106 / 1e3 + "s (" + _0x4c5404 + " scenes × 120s)");
  const _0x44e88d = await captureAndFetchFlowDownload(_0x579bea, async () => {
    await chrome["tabs"]["sendMessage"](_0x579bea, { "type": "FLOW_DOWNLOAD_SCENE_DIRECT", "payload": { "timeoutMs": 5 * 6e4 } });
  }, _0x58e106);
  if (_0x44e88d) {
    _0x488723["artifacts"]["combinedVideoDataUrl"] = _0x44e88d;
    const _0x39b37f = (_0x44e88d["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
    sendPipelineLog$1("info", "✓ Combined video fetched ~" + _0x39b37f + " MB (" + _0x4c5404 + " scenes รวม)");
  } else sendPipelineLog$1("warn", "⚠ Download Full Video ไม่สำเร็จ ภายใน " + _0x58e106 / 1e3 + "s — POST_TIKTOK จะใช้ fallback แทน");
  return { "success": !![] };
}
async function captureAndFetchFlowDownload(_0x406a57, _0x582064, _0x4b653d) {
  return await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x406a57 }, "world": "MAIN", "func": () => {
    const _0x4f9aa3 = window;
    if (_0x4f9aa3["__agxBlobPatched"]) return;
    _0x4f9aa3["__agxBlobPatched"] = !![], _0x4f9aa3["__agxBlobStore"] = /* @__PURE__ */ new Map();
    const _0x5717bf = URL["createObjectURL"], _0x161930 = URL["revokeObjectURL"];
    URL["createObjectURL"] = function(_0x11d172) {
      const _0xafb4eb = _0x5717bf["call"](URL, _0x11d172);
      return _0x11d172 instanceof Blob && (_0x11d172["type"]["startsWith"]("video/") || _0x11d172["size"] > 1e6) && _0x4f9aa3["__agxBlobStore"]["set"](_0xafb4eb, _0x11d172), _0xafb4eb;
    }, URL["revokeObjectURL"] = function(_0x29ae28) {
      if (_0x4f9aa3["__agxBlobStore"]["has"](_0x29ae28)) {
        setTimeout(() => {
          _0x161930["call"](URL, _0x29ae28), _0x4f9aa3["__agxBlobStore"]["delete"](_0x29ae28);
        }, 3e4);
        return;
      }
      _0x161930["call"](URL, _0x29ae28);
    };
  } }), new Promise((_0x19762b) => {
    let _0x34174c = ![], _0x40bdaa = ![];
    const _0x509954 = (_0x5eab81) => {
      if (_0x34174c) return;
      _0x34174c = !![], chrome["downloads"]["onCreated"]["removeListener"](_0x527264), clearTimeout(_0x20e9e9), _0x19762b(_0x5eab81);
    }, _0x527264 = async (_0xb67be0) => {
      log$9["info"]("[download] onCreated fired: id=" + _0xb67be0["id"] + ', name="' + (_0xb67be0["filename"] || "")["slice"](0, 40) + '", url="' + (_0xb67be0["finalUrl"] || _0xb67be0["url"] || "")["slice"](0, 80) + '"');
      if (_0x34174c || _0x40bdaa) {
        log$9["info"]("[download] skip — resolved=" + _0x34174c + ", fetching=" + _0x40bdaa);
        return;
      }
      const _0x5702b1 = _0xb67be0["finalUrl"] || _0xb67be0["url"] || "", _0x263d09 = _0xb67be0["filename"] || "", _0x524272 = /\.mp4(\?|$)/i["test"](_0x5702b1) || /\.mp4$/i["test"](_0x263d09) || /\.webm/i["test"](_0x5702b1), _0x374bed = _0x5702b1["startsWith"]("blob:"), _0x501fee = _0x5702b1["includes"]("labs.google") || _0x5702b1["includes"]("googleusercontent") || _0x5702b1["includes"]("aistudio.google");
      if (!_0x374bed && !_0x524272 && !_0x501fee) {
        log$9["info"]("[download] filter SKIP (isBlob=" + _0x374bed + ", isVideo=" + _0x524272 + ", isLikelyFlow=" + _0x501fee + ")");
        return;
      }
      log$9["info"]("[download] filter PASS — fetching via MAIN world..."), _0x40bdaa = !![];
      try {
        const [_0x52dcce] = await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x406a57 }, "world": "MAIN", "func": async (_0x8a033a) => {
          var _a2, _b2;
          try {
            const _0x3ef26a = window, _0x336d2d = ((_a2 = _0x3ef26a["__agxBlobStore"]) == null ? void 0 : _a2["size"]) ?? -1, _0x4c745f = _0x3ef26a["__agxBlobStore"] ? Array["from"](_0x3ef26a["__agxBlobStore"]["keys"]())["map"]((_0x406bdd) => _0x406bdd["slice"](0, 30))["join"](", ") : "(no store)", _0x56405f = (_b2 = _0x3ef26a["__agxBlobStore"]) == null ? void 0 : _b2["get"](_0x8a033a);
            if (_0x56405f) {
              const _0xa2631f = await _0x56405f["arrayBuffer"](), _0x39b52e = new Uint8Array(_0xa2631f);
              let _0x15619f = "";
              const _0x5c8aa6 = 32768;
              for (let _0xc487fe = 0; _0xc487fe < _0x39b52e["byteLength"]; _0xc487fe += _0x5c8aa6) {
                _0x15619f += String["fromCharCode"]["apply"](null, Array["from"](_0x39b52e["subarray"](_0xc487fe, _0xc487fe + _0x5c8aa6)));
              }
              return { "ok": !![], "data": "data:video/mp4;base64," + btoa(_0x15619f), "via": "store-hit (size=" + _0x56405f["size"] + ", type=" + _0x56405f["type"] + ")" };
            }
            const _0xcb03c0 = await fetch(_0x8a033a);
            if (!_0xcb03c0["ok"]) return { "ok": ![], "err": "store-miss + fetch HTTP " + _0xcb03c0["status"] + "; patched=" + _0x3ef26a["__agxBlobPatched"] + "; storeSize=" + _0x336d2d + "; keys=" + _0x4c745f };
            const _0x26ec9e = await _0xcb03c0["blob"]();
            if (!_0x26ec9e || _0x26ec9e["size"] === 0) return { "ok": ![], "err": "store-miss + empty blob; patched=" + _0x3ef26a["__agxBlobPatched"] + "; storeSize=" + _0x336d2d };
            const _0x5aa99f = await _0x26ec9e["arrayBuffer"](), _0x19317f = new Uint8Array(_0x5aa99f);
            let _0x145542 = "";
            const _0x4c3276 = 32768;
            for (let _0x1db040 = 0; _0x1db040 < _0x19317f["byteLength"]; _0x1db040 += _0x4c3276) {
              _0x145542 += String["fromCharCode"]["apply"](null, Array["from"](_0x19317f["subarray"](_0x1db040, _0x1db040 + _0x4c3276)));
            }
            return { "ok": !![], "data": "data:video/mp4;base64," + btoa(_0x145542), "via": "fetch-fallback (size=" + _0x26ec9e["size"] + ", type=" + _0x26ec9e["type"] + ", patched=" + _0x3ef26a["__agxBlobPatched"] + ", storeSize=" + _0x336d2d + ")" };
          } catch (_0x36c632) {
            return { "ok": ![], "err": String(_0x36c632) };
          }
        }, "args": [_0x5702b1] }), _0x463254 = _0x52dcce == null ? void 0 : _0x52dcce["result"];
        if ((_0x463254 == null ? void 0 : _0x463254["ok"]) && _0x463254["data"]) {
          const _0x478463 = (_0x463254["data"]["length"] * 3 / 4 / 1024 / 1024)["toFixed"](2);
          sendPipelineLog$1("info", "✓ ดึงวิดีโอสำเร็จ " + _0x478463 + " MB"), log$9["info"]("[download] fetch SUCCESS — " + _0x478463 + " MB via " + (_0x463254["via"] || "?")), _0x509954(_0x463254["data"]);
        } else log$9["warn"]('[download] fetch FAIL — err="' + ((_0x463254 == null ? void 0 : _0x463254["err"]) || "no result") + '" — รอ event ใหม่'), _0x40bdaa = ![];
      } catch (_0x29c526) {
        log$9["warn"]("[download] executeScript THROW — " + _0x29c526), _0x40bdaa = ![];
      }
    }, _0x110905 = 10 * 6e4, _0x1781fd = 3e4, _0x4eb27b = Date["now"]();
    let _0x20e9e9;
    const _0x209450 = (_0x537f08) => {
      _0x20e9e9 = setTimeout(async () => {
        if (_0x34174c) return;
        const _0x5cbbe2 = Date["now"]() - _0x4eb27b;
        if (_0x5cbbe2 >= _0x110905) {
          log$9["warn"]("[download] hard cap " + _0x110905 / 1e3 + "s reached — give up"), sendPipelineLog$1("warn", "⚠ รอเกิน " + Math["round"](_0x110905 / 6e4) + " นาที — ยกเลิกการดาวน์โหลด"), _0x509954(null);
          return;
        }
        let _0x3a9b03 = ![];
        try {
          const _0x26b939 = await chrome["tabs"]["sendMessage"](_0x406a57, { "type": "FLOW_CHECK_DOWNLOAD_STATE" });
          _0x3a9b03 = !!(_0x26b939 == null ? void 0 : _0x26b939["downloading"]);
        } catch (_0x537eab) {
          log$9["warn"]("[download] state check fail: " + _0x537eab);
        }
        if (!_0x3a9b03) {
          log$9["warn"]('[download] toast "Downloading your extended video." หาย — give up'), sendPipelineLog$1("warn", "⚠ Flow ไม่ได้กำลังโหลด — ยกเลิก"), _0x509954(null);
          return;
        }
        const _0x16d66d = _0x110905 - _0x5cbbe2, _0x45f829 = Math["min"](_0x1781fd, _0x16d66d);
        sendPipelineLog$1("info", "⏳ Flow ยังโหลด — รอเพิ่ม " + Math["round"](_0x45f829 / 1e3) + "s (รวม " + Math["round"]((_0x5cbbe2 + _0x45f829) / 1e3) + "s)"), _0x209450(_0x45f829);
      }, _0x537f08);
    };
    _0x209450(_0x4b653d), chrome["downloads"]["onCreated"]["addListener"](_0x527264), _0x582064()["catch"](() => {
    });
  });
}
async function executeSceneBuilderMulti(_0x2d4a40, _0x398179) {
  var _a2, _b2;
  const { flowTabId: _0x40891b, settings: _0x1c9886, product: _0x10b278 } = _0x2d4a40, _0x431f59 = Math["max"](2, Math["min"](10, _0x1c9886["sceneCount"] ?? 2)), _0x19b71d = _0x1c9886["aspectRatio"] || "9:16", _0x324aff = _0x1c9886["videoModel"], _0x1d98f6 = _0x1c9886["imageModel"];
  if (DEV["TEST_SCENEBUILDER_DOWNLOAD_ONLY"]) {
    sendPipelineLog$1("warn", "🧪 [TEST_SCENEBUILDER_DOWNLOAD_ONLY] Phase 3 only — open SceneBuilder + scan heap for video base64");
    const _0x3a4388 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_DOWNLOAD_SCENEBUILDER" });
    if (!(_0x3a4388 == null ? void 0 : _0x3a4388["success"])) return { "success": ![], "error": "SceneBuilder open/download fail: " + ((_0x3a4388 == null ? void 0 : _0x3a4388["error"]) || "unknown"), "skipDownstream": !![] };
    sendPipelineLog$1("info", "📡 กำลังหาวิดีโอใน Flow..."), log$9["info"]("Scanning Flow window tree for base64 video string...");
    const [_0x5d9d71] = await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x40891b }, "world": "MAIN", "func": () => {
      const _0x3e277 = "AAAAIGZ0eXBpc29t", _0x587d47 = 5e6, _0x5092b8 = /* @__PURE__ */ new WeakSet();
      let _0x4c7171 = 0, _0x4115d5 = null;
      function _0xa57a89(_0x50c7f5, _0x3277c8, _0x5a51eb) {
        if (_0x4115d5) return;
        if (_0x5a51eb > 15) return;
        if (!_0x50c7f5 || typeof _0x50c7f5 !== "object") return;
        if (_0x5092b8["has"](_0x50c7f5)) return;
        try {
          _0x5092b8["add"](_0x50c7f5);
        } catch {
          return;
        }
        let _0xa17e03 = [];
        try {
          _0xa17e03 = Object["keys"](_0x50c7f5);
        } catch {
          return;
        }
        for (const _0xd3b109 of _0xa17e03) {
          if (_0x4115d5) return;
          _0x4c7171++;
          let _0x517a14;
          try {
            _0x517a14 = _0x50c7f5[_0xd3b109];
          } catch {
            continue;
          }
          if (typeof _0x517a14 === "string") {
            if (_0x517a14["length"] >= _0x587d47 && _0x517a14["startsWith"](_0x3e277)) {
              _0x4115d5 = { "val": _0x517a14, "path": _0x3277c8 + "." + _0xd3b109 };
              return;
            }
          } else _0x517a14 && typeof _0x517a14 === "object" && _0xa57a89(_0x517a14, _0x3277c8 + "." + _0xd3b109, _0x5a51eb + 1);
        }
      }
      try {
        _0xa57a89(window, "window", 0);
        if (_0x4115d5 !== null) {
          const _0x5b1d02 = _0x4115d5;
          return { "ok": !![], "data": "data:video/mp4;base64," + _0x5b1d02["val"], "path": _0x5b1d02["path"], "size": _0x5b1d02["val"]["length"], "tried": _0x4c7171 };
        }
        return { "ok": ![], "err": "no large MP4 base64 string found (scanned " + _0x4c7171 + " props)", "tried": _0x4c7171 };
      } catch (_0x47b52e) {
        return { "ok": ![], "err": String(_0x47b52e), "tried": _0x4c7171 };
      }
    } }), _0x570485 = _0x5d9d71 == null ? void 0 : _0x5d9d71["result"];
    if ((_0x570485 == null ? void 0 : _0x570485["ok"]) && _0x570485["data"]) {
      _0x2d4a40["artifacts"]["combinedVideoDataUrl"] = _0x570485["data"];
      const _0x54c141 = ((_0x570485["size"] || 0) / 1024 / 1024)["toFixed"](1);
      sendPipelineLog$1("success", "🎯 เจอวิดีโอแล้ว ~" + _0x54c141 + " MB"), log$9["info"]("Found base64 video at " + _0x570485["path"] + " — " + _0x54c141 + " MB (scanned " + _0x570485["tried"] + " props)");
    } else sendPipelineLog$1("warn", "⚠ ไม่เจอวิดีโอใน Flow — " + ((_0x570485 == null ? void 0 : _0x570485["err"]) || "unknown")), log$9["warn"]("Heap scan ไม่เจอ video base64 — err: " + ((_0x570485 == null ? void 0 : _0x570485["err"]) || "unknown"));
    return { "success": !![] };
  }
  if (DEV["TEST_SCENEBUILDER_ATTACH_ONLY"]) {
    sendPipelineLog$1("warn", "🧪 [TEST_SCENEBUILDER_ATTACH_ONLY] Phase 2 last clip (Scene N) only — attach 1 frame + set prompt + STOP"), sendPipelineLog$1("info", "Settings: sceneCount=" + _0x431f59 + ", aspectRatio=" + _0x19b71d + ", videoModel=" + _0x324aff);
    const _0x3adf7d = _0x431f59 - 1;
    sendPipelineLog$1("info", "── 🎬 Test Last Clip " + (_0x3adf7d + 1) + "/" + _0x431f59 + " (Scene N) ──");
    const _0x28145c = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x19b71d, "count": 1, "videoModel": _0x324aff, "videoDuration": _0x1c9886["videoDuration"], "ingredientMode": ![] } });
    if (!(_0x28145c == null ? void 0 : _0x28145c["success"])) return { "success": ![], "error": "ตั้งค่า video config ไม่สำเร็จ", "skipDownstream": !![] };
    await jitterSleep(800, 1500);
    const _0x17f265 = _0x431f59 - 1 - _0x3adf7d, _0x5afd9a = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ATTACH_IMAGE_BY_POSITION", "payload": { "position": _0x17f265 } });
    if (!(_0x5afd9a == null ? void 0 : _0x5afd9a["success"])) return { "success": ![], "error": "Last Clip First Frame attach fail (position=" + _0x17f265 + "): " + (_0x5afd9a == null ? void 0 : _0x5afd9a["error"]), "skipDownstream": !![] };
    sendPipelineLog$1("info", "  ↳ First Frame = image " + (_0x3adf7d + 1) + "/" + _0x431f59 + " (position " + _0x17f265 + " from top — newest)"), sendPipelineLog$1("info", "  ↳ End Frame   = (none — last clip has First Frame only)"), await jitterSleep(800, 1500);
    const _0x401f11 = "TEST last clip (Scene " + (_0x3adf7d + 1) + "/" + _0x431f59 + "): First=position " + _0x17f265 + " only, no End Frame (closing scene). Do not generate.", _0x2a9262 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x401f11 } });
    if (!(_0x2a9262 == null ? void 0 : _0x2a9262["success"])) return { "success": ![], "error": "Last Clip set prompt fail", "skipDownstream": !![] };
    return sendPipelineLog$1("success", "✓ Last Clip " + (_0x3adf7d + 1) + " attached (1 frame) + prompt set — verify ใน Flow tab"), { "success": !![], "skipDownstream": !![] };
  }
  const _0x4d8df3 = await ensureTabUrl(_0x40891b, GUARD_FLOW_PROJECT);
  if (!_0x4d8df3["ok"]) return { "success": ![], "error": "Flow ไม่อยู่หน้า project (" + (_0x4d8df3["finalUrl"] || "unknown") + ")" };
  let _0x3f4be8, _0x53d2bd;
  const _0x49011c = _0x2d4a40["artifacts"]["cachedSceneBuilderPrompts"];
  if (_0x49011c && _0x49011c["images"]["length"] === _0x431f59 && _0x49011c["videos"]["length"] === _0x431f59) _0x3f4be8 = _0x49011c["images"], _0x53d2bd = _0x49011c["videos"], log$9["info"]("Using cached SceneBuilder prompts (N=" + _0x431f59 + ")");
  else {
    sendPipelineLog$1("info", "🤖 Gemini สร้าง " + _0x431f59 + " image + " + _0x431f59 + " video prompts (SceneBuilder Frames)...");
    const _0x14b0e0 = await generateSceneBuilderFramesPrompts(_0x10b278, _0x1c9886);
    if (!_0x14b0e0 || _0x14b0e0["images"]["length"] < _0x431f59 || _0x14b0e0["videos"]["length"] < _0x431f59) return { "success": ![], "error": "AI สร้าง SceneBuilder prompts ไม่สำเร็จ", "skipDownstream": !![] };
    _0x3f4be8 = _0x14b0e0["images"]["slice"](0, _0x431f59), _0x53d2bd = _0x14b0e0["videos"]["slice"](0, _0x431f59), _0x2d4a40["artifacts"]["cachedSceneBuilderPrompts"] = { "images": _0x3f4be8, "videos": _0x53d2bd };
  }
  if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x5c625d = _0x2d4a40["artifacts"]["sceneBuilderImages"] ? [..._0x2d4a40["artifacts"]["sceneBuilderImages"]] : [], _0x5b64d1 = _0x2d4a40["artifacts"]["sceneBuilderTileIds"] ? [..._0x2d4a40["artifacts"]["sceneBuilderTileIds"]] : [];
  _0x5c625d["length"] === 0 && _0x2d4a40["artifacts"]["generatedImageUrl"] && (_0x5c625d["push"](_0x2d4a40["artifacts"]["generatedImageUrl"]), _0x2d4a40["artifacts"]["generatedImageTileId"] && _0x5b64d1["push"](_0x2d4a40["artifacts"]["generatedImageTileId"]), _0x2d4a40["artifacts"]["sceneBuilderImages"] = _0x5c625d, _0x2d4a40["artifacts"]["sceneBuilderTileIds"] = _0x5b64d1);
  for (let _0x11174a = _0x5c625d["length"]; _0x11174a < _0x431f59; _0x11174a++) {
    if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
    sendPipelineLog$1("info", "🖼️ Gen image " + (_0x11174a + 1) + "/" + _0x431f59 + " (boundary keyframe)...");
    const _0x1f4556 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "image", "aspectRatio": _0x19b71d, "count": 1, "imageModel": _0x1d98f6 } });
    if (!(_0x1f4556 == null ? void 0 : _0x1f4556["success"])) return { "success": ![], "error": "Image config failed at scene " + (_0x11174a + 1), "skipDownstream": !![] };
    if (_0x11174a > 0) {
      const _0x463825 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ATTACH_IMAGE_BY_POSITION", "payload": { "position": 0 } });
      if (!(_0x463825 == null ? void 0 : _0x463825["success"])) return { "success": ![], "error": "Attach continuity ref failed at scene " + (_0x11174a + 1) + ": " + (_0x463825 == null ? void 0 : _0x463825["error"]), "skipDownstream": !![] };
      sendPipelineLog$1("info", "  ↳ ใช้ image " + _0x11174a + "/" + _0x431f59 + " (top of list) เป็น ref เดียว (continuity chain)");
    }
    await jitterSleep(800, 1500);
    const _0xe77758 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x3f4be8[_0x11174a] } });
    if (!(_0xe77758 == null ? void 0 : _0xe77758["success"])) return { "success": ![], "error": "Set image prompt failed at scene " + (_0x11174a + 1), "skipDownstream": !![] };
    await sleep$3(8e3);
    const _0x28347c = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_GENERATE" });
    if (!(_0x28347c == null ? void 0 : _0x28347c["success"])) return { "success": ![], "error": "กด Generate image scene " + (_0x11174a + 1) + " ไม่สำเร็จ", "skipDownstream": !![] };
    const _0x2a1eba = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (!(_0x2a1eba == null ? void 0 : _0x2a1eba["success"]) || !_0x2a1eba["imageUrl"]) {
      const _0x4ebc33 = (_0x2a1eba == null ? void 0 : _0x2a1eba["errorText"]) ? translateFlowError(_0x2a1eba["errorText"]) : (_0x2a1eba == null ? void 0 : _0x2a1eba["error"]) || "รอผลรูป scene " + (_0x11174a + 1) + " ไม่สำเร็จ";
      return { "success": ![], "error": "Scene " + (_0x11174a + 1) + " (รูป) — " + _0x4ebc33, "skipDownstream": !![] };
    }
    _0x5c625d["push"](_0x2a1eba["imageUrl"]);
    if (_0x2a1eba["tileId"]) _0x5b64d1["push"](_0x2a1eba["tileId"]);
    _0x2d4a40["artifacts"]["sceneBuilderImages"] = _0x5c625d, _0x2d4a40["artifacts"]["sceneBuilderTileIds"] = _0x5b64d1, sendPipelineLog$1("info", "✓ Image " + (_0x11174a + 1) + "/" + _0x431f59 + " done (tile=" + ((_a2 = _0x2a1eba["tileId"]) == null ? void 0 : _a2["slice"](0, 12)) + ")");
    if (_0x11174a < _0x431f59 - 1) {
      const _0x3258c6 = 8 + Math["random"]() * 12;
      await sleep$3(_0x3258c6 * 1e3);
    }
  }
  if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x33bb77 = _0x2d4a40["artifacts"]["sceneBuilderVideoProgress"] ?? 0;
  _0x33bb77 > 0 && sendPipelineLog$1("info", "⏩ Resume video gen จาก scene " + (_0x33bb77 + 1) + "/" + _0x431f59);
  for (let _0x33ba58 = _0x33bb77; _0x33ba58 < _0x431f59; _0x33ba58++) {
    if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
    sendPipelineLog$1("info", "🎬 Video clip " + (_0x33ba58 + 1) + "/" + _0x431f59 + "...");
    const _0x24539f = await ensureTabUrl(_0x40891b, GUARD_FLOW_PROJECT);
    if (!_0x24539f["ok"]) return { "success": ![], "error": "Flow ไม่อยู่ project ตอน scene " + (_0x33ba58 + 1) };
    const _0xfdb939 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x19b71d, "count": 1, "videoModel": _0x324aff, "videoDuration": _0x1c9886["videoDuration"], "ingredientMode": ![] } });
    if (!(_0xfdb939 == null ? void 0 : _0xfdb939["success"])) return { "success": ![], "error": "Video config failed at scene " + (_0x33ba58 + 1), "skipDownstream": !![] };
    const _0xa8d968 = _0x431f59 - 1 - _0x33ba58, _0x2146d8 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ATTACH_IMAGE_BY_POSITION", "payload": { "position": _0xa8d968 } });
    if (!(_0x2146d8 == null ? void 0 : _0x2146d8["success"])) return { "success": ![], "error": "Attach First Frame failed (position=" + _0xa8d968 + "): " + (_0x2146d8 == null ? void 0 : _0x2146d8["error"]), "skipDownstream": !![] };
    sendPipelineLog$1("info", "  ↳ First Frame = image " + (_0x33ba58 + 1) + "/" + _0x431f59 + " (position " + _0xa8d968 + " from top)"), await jitterSleep(800, 1500);
    if (_0x33ba58 < _0x431f59 - 1) {
      const _0x22b572 = _0x431f59 - 2 - _0x33ba58, _0x8a1fc3 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ATTACH_IMAGE_BY_POSITION", "payload": { "position": _0x22b572 } });
      if (!(_0x8a1fc3 == null ? void 0 : _0x8a1fc3["success"])) return { "success": ![], "error": "Attach End Frame failed (position=" + _0x22b572 + "): " + (_0x8a1fc3 == null ? void 0 : _0x8a1fc3["error"]), "skipDownstream": !![] };
      sendPipelineLog$1("info", "  ↳ End Frame = image " + (_0x33ba58 + 2) + "/" + _0x431f59 + " (position " + _0x22b572 + " from top)"), await jitterSleep(800, 1500);
    }
    const _0x3d59d5 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x53d2bd[_0x33ba58] } });
    if (!(_0x3d59d5 == null ? void 0 : _0x3d59d5["success"])) return { "success": ![], "error": "Set video prompt failed at scene " + (_0x33ba58 + 1), "skipDownstream": !![] };
    await sleep$3(8e3);
    if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
    const _0x46b60f = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_GENERATE" });
    if (!(_0x46b60f == null ? void 0 : _0x46b60f["success"])) return { "success": ![], "error": "กด Generate video scene " + (_0x33ba58 + 1) + " ไม่สำเร็จ", "skipDownstream": !![] };
    const _0x31abf8 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (!(_0x31abf8 == null ? void 0 : _0x31abf8["success"])) {
      const _0x8a1d0b = (_0x31abf8 == null ? void 0 : _0x31abf8["errorText"]) ? translateFlowError(_0x31abf8["errorText"]) : (_0x31abf8 == null ? void 0 : _0x31abf8["error"]) || "รอผลคลิป scene " + (_0x33ba58 + 1) + " ไม่สำเร็จ";
      return { "success": ![], "error": "Scene " + (_0x33ba58 + 1) + " (คลิป) — " + _0x8a1d0b };
    }
    const _0x249219 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_ADD_CLIP_TO_SCENE", "payload": { "tileId": _0x31abf8["tileId"] } });
    (_0x249219 == null ? void 0 : _0x249219["success"]) ? sendPipelineLog$1("info", "✓ Scene " + (_0x33ba58 + 1) + " → Storyboard (video tile=" + ((_b2 = _0x31abf8["tileId"]) == null ? void 0 : _b2["slice"](0, 12)) + ")") : sendPipelineLog$1("warn", "⚠ Add Scene " + (_0x33ba58 + 1) + " fail: " + (_0x249219 == null ? void 0 : _0x249219["error"]));
    _0x2d4a40["artifacts"]["sceneBuilderVideoProgress"] = _0x33ba58 + 1;
    if (_0x33ba58 < _0x431f59 - 1 && !_0x398179["aborted"]) {
      const _0x2c5f1a = 18 + Math["random"]() * 22;
      await sleep$3(_0x2c5f1a * 1e3);
    }
  }
  if (_0x398179["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  sendPipelineLog$1("info", "▶ เปิด Scene Builder + Download (export...)");
  const _0x159d15 = await chrome["tabs"]["sendMessage"](_0x40891b, { "type": "FLOW_DOWNLOAD_SCENEBUILDER" });
  if (!(_0x159d15 == null ? void 0 : _0x159d15["success"])) sendPipelineLog$1("warn", "⚠ SceneBuilder download fail: " + ((_0x159d15 == null ? void 0 : _0x159d15["error"]) || "unknown") + " — POST_TIKTOK จะลองวิธีสำรอง");
  else {
    if (_0x159d15["dataUrl"]) {
      _0x2d4a40["artifacts"]["combinedVideoDataUrl"] = _0x159d15["dataUrl"];
      const _0x4ef3fc = (_0x159d15["dataUrl"]["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
      sendPipelineLog$1("info", "✓ ดึงวิดีโอ Combined สำเร็จ ~" + _0x4ef3fc + " MB — POST_TIKTOK พร้อมอัพ"), log$9["info"]("Combined video fetched, size=" + _0x4ef3fc + "MB");
    } else sendPipelineLog$1("warn", "⚠ ดาวน์โหลดสำเร็จ แต่ดึงข้อมูลวิดีโอไม่ได้ — POST_TIKTOK จะลองวิธีสำรอง"), log$9["warn"]("Download succeeded but no dataUrl returned — POST_TIKTOK will fallback to FLOW_FIND_LATEST_VIDEO_URL");
  }
  return { "success": !![] };
}
async function jitterSleep(_0x36c3cd, _0x3978ee) {
  return sleep$3(_0x36c3cd + Math["random"]() * (_0x3978ee - _0x36c3cd));
}
async function executeReal(_0x5c763a, _0x462e5d) {
  var _a2, _b2;
  const { flowTabId: _0x4abdce, settings: _0x491dbe, product: _0x15c5fa } = _0x5c763a, _0x13e713 = await ensureTabUrl(_0x4abdce, GUARD_FLOW_PROJECT);
  if (!_0x13e713["ok"]) return { "success": ![], "error": "Flow ไม่อยู่หน้า project (" + (_0x13e713["finalUrl"] || "unknown") + ")" };
  await chrome["tabs"]["sendMessage"](_0x4abdce, { "type": "FLOW_ENSURE_AGENT_OFF" });
  const _0x58e432 = _0x491dbe["aspectRatio"] || "9:16", _0x5a874c = _0x491dbe["videoModel"], _0x5399fb = { ..._0x491dbe, "voiceType": _0x15c5fa["voiceTypeOverride"] || _0x491dbe["voiceType"], "videoStyle": _0x15c5fa["videoStyleOverride"] || _0x491dbe["videoStyle"], "lipSync": _0x15c5fa["lipSyncOverride"] ?? _0x491dbe["lipSync"], "sceneType": resolveRandomChoice(_0x15c5fa["sceneTypeOverride"] || _0x491dbe["sceneType"], SCENE_TYPES), "lighting": resolveRandomChoice(_0x15c5fa["lightingOverride"] || _0x491dbe["lighting"], LIGHTING_TYPES), "imageStyle": resolveRandomChoice(_0x15c5fa["imageStyleOverride"] || _0x491dbe["imageStyle"], IMAGE_STYLES), "imageCameraAngle": resolveRandomChoice(_0x15c5fa["imageCameraAngleOverride"] || _0x491dbe["imageCameraAngle"], IMAGE_CAMERA_ANGLES), "videoCameraMovement": resolveRandomChoice(_0x15c5fa["videoCameraMovementOverride"] || _0x491dbe["videoCameraMovement"], VIDEO_CAMERA_MOVEMENTS), "textColor": resolveRandomChoice(_0x15c5fa["textColorOverride"] || _0x491dbe["textColor"], TEXT_COLORS), "textPosition": resolveRandomChoice(_0x15c5fa["textPositionOverride"] || _0x491dbe["textPosition"], TEXT_POSITIONS) };
  let _0xf586b5;
  const _0x2e9292 = (_a2 = _0x15c5fa["customVideoPromptOverride"]) == null ? void 0 : _a2["trim"]();
  if (_0x5c763a["artifacts"]["cachedVideoPrompt"]) _0xf586b5 = _0x5c763a["artifacts"]["cachedVideoPrompt"], log$9["info"]("Using cached video prompt (retry)");
  else {
    if (_0x2e9292) _0xf586b5 = _0x2e9292, _0x5c763a["artifacts"]["cachedVideoPrompt"] = _0xf586b5, log$9["info"]("Using customVideoPromptOverride (REPLACE — skip AI): " + _0xf586b5["slice"](0, 120) + "..."), sendPipelineLog$1("info", "🎬 ใช้ Prompt สร้างวิดีโอกำหนดเอง (skip AI)");
    else {
      const _0x1413c3 = (_b2 = _0x15c5fa["customSpeech"]) == null ? void 0 : _b2["trim"](), _0x22dd0b = _0x5399fb["useVideoAI"] === ![];
      if (_0x22dd0b) log$9["info"]("useVideoAI = false → local fallback prompt (Veo generates speech from image)"), _0xf586b5 = buildLocalFallbackPrompt(null, null, _0x5399fb);
      else {
        log$9["info"]("Generating Veo prompt via Gemini" + (_0x1413c3 ? " (with customSpeech)" : "") + "...");
        const _0x484096 = await generateVideoPrompt(_0x15c5fa, _0x5399fb, _0x5c763a["artifacts"]["generatedImageUrl"], _0x1413c3 || void 0);
        if (_0x484096) {
          _0xf586b5 = _0x484096["veoPrompt"];
          if (_0x484096["fromFallback"]) sendPipelineLog$1("info", "🎬 ใช้ Prompt วิดีโอจาก fallback (template) ของ server");
          log$9["info"]("veoPrompt length=" + _0xf586b5["length"] + (_0x484096["fromFallback"] ? " (server fallback)" : " (AI)"));
        } else log$9["warn"]("[GenVideo] AI 3× + server fallback both failed — using local last-resort template"), sendPipelineLog$1("warn", "⚠ AI และ fallback ของ server ไม่ตอบทั้งคู่ — ใช้ template ในเครื่องเป็นทางสุดท้าย"), _0xf586b5 = buildLocalFallbackPrompt(_0x1413c3 || null, null, _0x5399fb);
      }
      _0x5c763a["artifacts"]["cachedVideoPrompt"] = _0xf586b5, log$9["info"]("Video prompt:\n" + _0xf586b5);
    }
  }
  if (_0x462e5d["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x17e68d = await chrome["tabs"]["sendMessage"](_0x4abdce, { "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x58e432, "count": 1, "videoModel": _0x5a874c, "videoDuration": _0x491dbe["videoDuration"], "ingredientMode": _0x5399fb["ingredientMode"] === !![] } });
  if (!(_0x17e68d == null ? void 0 : _0x17e68d["success"])) return { "success": ![], "error": "ตั้งค่า config ไม่สำเร็จ", "skipDownstream": !![] };
  if (_0x462e5d["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  log$9["info"]("Attaching reference image(s)...");
  const _0xed36e5 = await attachVideoReferenceImages(_0x5c763a, _0x4abdce, _0x5399fb["ingredientMode"] === !![]);
  _0xed36e5["mode"] === "ingredients" && _0xed36e5["refsAttached"] >= 2 && (_0xf586b5 = buildIngredientImageMappingDirective(_0x5399fb["promptLanguage"]) + "\n" + _0xf586b5);
  if (_0x462e5d["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  log$9["info"]("Setting video prompt...");
  const _0x4ffa65 = await chrome["tabs"]["sendMessage"](_0x4abdce, { "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0xf586b5 } });
  if (!(_0x4ffa65 == null ? void 0 : _0x4ffa65["success"])) return { "success": ![], "error": "พิมพ์ prompt ไม่สำเร็จ", "skipDownstream": !![] };
  if (DEV["STOP_AFTER_VIDEO_PROMPT"]) return sendPipelineLog$1("warn", "🚧 [DEV.STOP_AFTER_VIDEO_PROMPT] หยุดหลังกรอก prompt แล้ว — ไม่กด Create, ไม่ทำ downstream"), DEV["SHOW_PROMPT_IN_LOG"] ? sendPipelineLog$1("info", "📝 Prompt ที่กรอก (" + _0xf586b5["length"] + " chars):\n" + _0xf586b5) : sendPipelineLog$1("info", "📝 Prompt ที่กรอกมี " + _0xf586b5["length"] + " ตัวอักษร (ซ่อนเนื้อหา — เปิด SHOW_PROMPT_IN_LOG เพื่อดู)"), { "success": !![], "skipDownstream": !![] };
  await sleep$3(3e3);
  if (_0x462e5d["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  log$9["info"]("Clicking Create...");
  const _0x38dbb3 = await chrome["tabs"]["sendMessage"](_0x4abdce, { "type": "FLOW_GENERATE" });
  if (!(_0x38dbb3 == null ? void 0 : _0x38dbb3["success"])) return { "success": ![], "error": "คลิก Generate ไม่สำเร็จ", "skipDownstream": !![] };
  log$9["info"]("Waiting for video result...");
  const _0x2d4e84 = await chrome["tabs"]["sendMessage"](_0x4abdce, { "type": "FLOW_WAIT_RESULT", "payload": {} });
  if (!(_0x2d4e84 == null ? void 0 : _0x2d4e84["success"])) {
    const _0x1c9494 = (_0x2d4e84 == null ? void 0 : _0x2d4e84["errorText"]) ? translateFlowError(_0x2d4e84["errorText"]) : (_0x2d4e84 == null ? void 0 : _0x2d4e84["error"]) || "รอผลลัพธ์วิดีโอไม่สำเร็จ";
    return { "success": ![], "error": _0x1c9494, "skipDownstream": !![] };
  }
  return log$9["info"]("Video done ✓"), _0x5c763a["artifacts"]["generatedVideoUrl"] = _0x2d4e84["videoUrl"], { "success": !![] };
}
function sleep$3(_0xbafa10) {
  return new Promise((_0x69f047) => setTimeout(_0x69f047, _0xbafa10));
}
const genVideoBlock = { "id": "GEN_VIDEO", "name": "สร้างวิดีโอ", "retries": 0, "execute": execute$2 };
const genVideo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  captureAndFetchFlowDownload,
  genVideoBlock
}, Symbol.toStringTag, { value: "Module" }));
const log$8 = createLogger("Block:SaveClip");
async function execute$1(_0x1fed9b, _0x541b1e) {
  const { flowTabId: _0x124d10, settings: _0x3ca462 } = _0x1fed9b;
  if (DEV["SKIP_SAVE_CLIP"]) return sendPipelineLog$1("warn", "🚧 [DEV.SKIP_SAVE_CLIP] ข้าม SAVE_CLIP"), { "success": !![], "skipped": !![] };
  if (!_0x3ca462["saveClip"]) return log$8["info"]("SAVE_CLIP: ปิดอยู่ ข้ามไป"), { "success": !![], "skipped": !![] };
  if (_0x541b1e["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x3deace = await ensureTabUrl(_0x124d10, GUARD_FLOW_PROJECT);
  if (!_0x3deace["ok"]) return { "success": ![], "error": "Flow ไม่อยู่หน้า project (" + (_0x3deace["finalUrl"] || "unknown") + ")" };
  const _0x4b1e8e = _0x3ca462["clipQuality"] || "720p";
  log$8["info"]("Downloading clip at " + _0x4b1e8e + "...");
  const _0x31db16 = await chrome["tabs"]["sendMessage"](_0x124d10, { "type": "FLOW_DOWNLOAD_CLIP", "payload": { "quality": _0x4b1e8e } });
  if (!(_0x31db16 == null ? void 0 : _0x31db16["success"])) return { "success": ![], "error": (_0x31db16 == null ? void 0 : _0x31db16["error"]) || "Download failed" };
  return log$8["info"]("Clip download started ✓"), { "success": !![] };
}
const saveClipBlock = { "id": "SAVE_CLIP", "name": "บันทึกคลิป", "retries": 1, "execute": execute$1 };
const log$7 = createLogger("Block:PostTikTok"), TIKTOK_UPLOAD_URL$1 = "https://www.tiktok.com/tiktokstudio/upload", TIKTOK_DONE_TIMEOUT_MS$1 = 5 * 60 * 1e3, CONTENT_SCRIPT_READY_TIMEOUT_MS$1 = 2e4;
async function execute(_0x5e90cb, _0x54938b) {
  var _a2, _b2, _c, _d;
  if (DEV["SKIP_TIKTOK_POST"]) return sendPipelineLog("warn", "🚧 [DEV.SKIP_TIKTOK_POST] ข้าม POST_TIKTOK"), { "success": !![], "skipped": !![] };
  const { product: _0x2abfcc, settings: _0x2d1192 } = _0x5e90cb, _0x814ff3 = _0x2d1192["postType"] || "draft";
  if (DEV["TEST_BASKET_PIN_ONLY"]) {
    sendPipelineLog("warn", "🚧 [DEV.TEST_BASKET_PIN_ONLY] ข้าม fetch video/navigate — ส่ง basket pin ตรงไป tab ที่เปิดค้างอยู่");
    const _0xf0fc99 = ((_a2 = _0x2abfcc["productId"]) == null ? void 0 : _a2["trim"]()) || ((_b2 = _0x2abfcc["basketName"]) == null ? void 0 : _b2["trim"]()) || "";
    if (!_0xf0fc99) return sendPipelineLog("warn", "⚠ ไม่มี Product ID / ชื่อตะกร้า ในสินค้า — หยุด"), { "success": !![], "skipped": !![] };
    try {
      await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "TIKTOK_UPLOAD_VIDEO", "payload": { "videoUrl": "", "caption": "", "hashtags": [], "postType": _0x814ff3, "noBasket": ![], "basketName": _0xf0fc99, "productName": _0x2abfcc["name"] } });
    } catch (_0x4b2f29) {
      return { "success": ![], "error": "ส่ง TIKTOK_UPLOAD_VIDEO failed: " + _0x4b2f29 };
    }
    const _0x4e8d63 = await waitForTikTokDone$1(_0x5e90cb["flowTabId"], 2 * 60 * 1e3, _0x54938b);
    return _0x4e8d63;
  }
  if (DEV["TEST_SCHEDULE_ONLY"]) {
    sendPipelineLog("warn", "🚧 [DEV.TEST_SCHEDULE_ONLY] ข้ามทุกอย่าง — ส่ง setScheduleTime ตรงๆ");
    const _0x490721 = _0x2d1192["scheduleTime"];
    if (!_0x490721) return sendPipelineLog("warn", '⚠ ไม่มี scheduleTime — ตั้งประเภทการโพสเป็น "ตั้งเวลา" + กรอกวัน/ชั่วโมง/นาทีใน panel ก่อน'), { "success": !![], "skipped": !![] };
    try {
      await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "TIKTOK_UPLOAD_VIDEO", "payload": { "videoUrl": "", "caption": "", "hashtags": [], "postType": "schedule", "scheduleTime": _0x490721, "noBasket": !![], "basketName": "", "productName": _0x2abfcc["name"] } });
    } catch (_0x1c2dc1) {
      return { "success": ![], "error": "ส่ง TIKTOK_UPLOAD_VIDEO failed: " + _0x1c2dc1 };
    }
    const _0x11c7e5 = await waitForTikTokDone$1(_0x5e90cb["flowTabId"], 2 * 60 * 1e3, _0x54938b);
    return _0x11c7e5;
  }
  if (!_0x5e90cb["settings"]["autoPost"]) return log$7["info"]("Auto-post disabled — skipping"), { "success": !![], "skipped": !![] };
  let _0x75c201, _0x2be7c5;
  if (_0x5e90cb["artifacts"]["cachedTiktokCaption"] && _0x5e90cb["artifacts"]["cachedTiktokHashtags"]) _0x75c201 = _0x5e90cb["artifacts"]["cachedTiktokCaption"], _0x2be7c5 = _0x5e90cb["artifacts"]["cachedTiktokHashtags"], log$7["info"]('Using cached TikTok caption (retry): "' + _0x75c201["slice"](0, 60) + '..."');
  else {
    const _0x5e4daa = await buildCaptionAndHashtags$1(_0x2abfcc, _0x2d1192);
    _0x75c201 = _0x5e4daa["caption"], _0x2be7c5 = _0x5e4daa["hashtags"], _0x5e90cb["artifacts"]["cachedTiktokCaption"] = _0x75c201, _0x5e90cb["artifacts"]["cachedTiktokHashtags"] = _0x2be7c5;
  }
  log$7["info"]('Caption: "' + _0x75c201["slice"](0, 60) + '..." | Hashtags: ' + _0x2be7c5["join"](",")), sendPipelineLog("info", "📋 Caption " + _0x75c201["length"] + " chars | " + _0x2be7c5["length"] + " hashtags: " + (_0x2be7c5["length"] > 0 ? _0x2be7c5["map"]((_0x1b32ef) => "#" + _0x1b32ef)["join"](" ") : "(ว่าง)")), log$7["info"]("Posting to TikTok: postType=" + _0x814ff3);
  const _0x498eaf = () => 1 + Math["floor"](Math["random"]() * 10), _0x42fef3 = _0x5e90cb["artifacts"]["combinedVideoDataUrl"];
  let _0x554800 = _0x5e90cb["artifacts"]["combinedVideoUrl"] || _0x5e90cb["artifacts"]["generatedVideoUrl"];
  if (_0x42fef3) sendPipelineLog("info", "1️⃣ เตรียมวิดีโอสำเร็จ"), log$7["info"]("Using preFetchedDataUrl (combined, fetched before blob revoke)"), _0x554800 = _0x42fef3;
  else _0x5e90cb["artifacts"]["combinedVideoUrl"] && (sendPipelineLog("info", "1️⃣ เตรียมวิดีโอสำเร็จ"), log$7["info"]("Using combinedVideoUrl from artifacts (may be revoked)"));
  if (!_0x554800) {
    sendPipelineLog("info", "1️⃣ สลับไป Videos tab + คลิกคลิปล่าสุด...");
    try {
      const _0x4753c5 = await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "FLOW_FIND_LATEST_VIDEO_URL" });
      if (!(_0x4753c5 == null ? void 0 : _0x4753c5["success"]) || !_0x4753c5["videoUrl"]) return { "success": ![], "error": "หา video ล่าสุดไม่เจอ: " + ((_0x4753c5 == null ? void 0 : _0x4753c5["error"]) || "unknown") };
      _0x554800 = _0x4753c5["videoUrl"], sendPipelineLog("info", "2️⃣ ได้วิดีโอแล้ว"), log$7["info"]("Got latest video URL: " + _0x554800);
    } catch (_0x17e95f) {
      return { "success": ![], "error": "FLOW_FIND_LATEST_VIDEO_URL failed: " + _0x17e95f };
    }
  }
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  await pipelinePause(_0x498eaf(), _0x54938b, "รอก่อน fetch video");
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  let _0x35dcfc = _0x554800;
  if (_0x554800["startsWith"]("data:")) {
    const _0x11b51d = (_0x554800["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
    sendPipelineLog("info", "3️⃣ มีวิดีโอพร้อมอัพ ~" + _0x11b51d + " MB"), log$7["info"]("Already have data URL (skip fetch), size=" + _0x11b51d + "MB");
  } else {
    if (isFlowMediaUrl(_0x554800)) {
      sendPipelineLog("info", "3️⃣ กำลังบันทึกลง DataTransfer..."), log$7["info"]("[fetch-blob] starting fetch for DataTransfer base64; URL=" + _0x554800);
      try {
        _0x35dcfc = await fetchBlobAsDataUrl(_0x5e90cb["flowTabId"], _0x554800);
        const _0x43ed8c = (_0x35dcfc["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
        sendPipelineLog("info", "   บันทึกลง DataTransfer สำเร็จ ~" + _0x43ed8c + " MB ✓"), log$7["info"]("[fetch-blob] DataTransfer payload ready, size=" + _0x43ed8c + "MB");
      } catch (_0x7ff89f) {
        sendPipelineLog("error", "❌ fetch fail: " + _0x7ff89f);
        if (_0x5e90cb["artifacts"]["combinedVideoUrl"] && _0x554800 === _0x5e90cb["artifacts"]["combinedVideoUrl"]) {
          sendPipelineLog("warn", "↻ ลองวิธีสำรองหาวิดีโอใหม่..."), log$7["warn"]("combinedVideoUrl fetch fail — falling back to FLOW_FIND_LATEST_VIDEO_URL");
          try {
            const _0x139ead = await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "FLOW_FIND_LATEST_VIDEO_URL" });
            if ((_0x139ead == null ? void 0 : _0x139ead["success"]) && _0x139ead["videoUrl"]) {
              sendPipelineLog("info", "↻ ได้วิดีโอสำรองแล้ว"), log$7["info"]("fallback URL: " + _0x139ead["videoUrl"]), _0x35dcfc = await fetchBlobAsDataUrl(_0x5e90cb["flowTabId"], _0x139ead["videoUrl"]);
              const _0x8b1383 = (_0x35dcfc["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
              sendPipelineLog("info", "   บันทึกลง DataTransfer สำเร็จ (สำรอง) ~" + _0x8b1383 + " MB ✓");
            } else return { "success": ![], "error": "Fallback หา video ไม่เจอ: " + ((_0x139ead == null ? void 0 : _0x139ead["error"]) || "unknown") };
          } catch (_0x51a888) {
            return { "success": ![], "error": "Fallback fetch fail: " + _0x51a888 };
          }
        } else return { "success": ![], "error": "Cannot fetch Flow video: " + _0x7ff89f };
      }
    } else return { "success": ![], "error": "Unsupported video URL: " + _0x554800["slice"](0, 60) };
  }
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  try {
    const _0x20c857 = await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "FLOW_LEAVE_EXTEND" });
    if ((_0x20c857 == null ? void 0 : _0x20c857["success"]) && !_0x20c857["skipped"]) sendPipelineLog("info", "↩ คลิก Back ออกจาก extend page: " + (_0x20c857["leftExtend"] ? "✓" : "⚠ URL ยังไม่ขยับ"));
    else {
      if (_0x20c857 == null ? void 0 : _0x20c857["skipped"]) log$7["info"]("FLOW_LEAVE_EXTEND skipped: " + _0x20c857["reason"]);
      else (_0x20c857 == null ? void 0 : _0x20c857["error"]) && sendPipelineLog("warn", "⚠ FLOW_LEAVE_EXTEND: " + _0x20c857["error"]);
    }
  } catch (_0x4de0d8) {
    log$7["warn"]("FLOW_LEAVE_EXTEND failed: " + _0x4de0d8);
  }
  await pipelinePause(_0x498eaf(), _0x54938b, "รอก่อนเปิด TikTok");
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  sendPipelineLog("info", "4️⃣ เปิดหน้า TikTok Studio...");
  let _0x2d2d8b, _0xbc161e = ![];
  try {
    const _0x4f3d43 = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/*" });
    if (_0x4f3d43["length"] > 0 && _0x4f3d43[0]["id"] != null) {
      _0x2d2d8b = _0x4f3d43[0]["id"];
      const _0x2f13a1 = _0x4f3d43[0]["url"] || "", _0x35ddf2 = _0x2f13a1["includes"]("/tiktokstudio/upload");
      if (!_0x35ddf2) try {
        await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x2d2d8b }, "func": () => {
          window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0x5a2b1d) => {
            _0x5a2b1d["stopImmediatePropagation"]();
          }, { "capture": !![] });
        } });
      } catch (_0xf53eae) {
        log$7["warn"]("Cannot strip beforeunload: " + _0xf53eae);
      }
      await chrome["tabs"]["update"](_0x2d2d8b, { "active": !![], "url": TIKTOK_UPLOAD_URL$1 }), _0x4f3d43[0]["windowId"] != null && await chrome["windows"]["update"](_0x4f3d43[0]["windowId"], { "focused": !![] }), _0xbc161e = !_0x35ddf2, log$7["info"]("Reusing TikTok tab " + _0x2d2d8b + " (was at " + _0x2f13a1["slice"](0, 60) + ") → navigating to /upload");
    } else {
      const _0x40f077 = await chrome["tabs"]["create"]({ "url": TIKTOK_UPLOAD_URL$1, "active": !![] });
      if (!_0x40f077["id"]) throw new Error("Failed to create TikTok tab");
      _0x2d2d8b = _0x40f077["id"], _0x40f077["windowId"] != null && await chrome["windows"]["update"](_0x40f077["windowId"], { "focused": !![] }), _0xbc161e = !![], log$7["info"]("Opened new TikTok Studio tab: " + _0x2d2d8b);
    }
    _0xbc161e && (sendPipelineLog("info", "⏳ รอ TikTok โหลดหน้า /upload เสร็จ..."), await waitForTabLoad$1(_0x2d2d8b, "/tiktokstudio/upload", 2e4));
  } catch (_0x37e9cf) {
    return { "success": ![], "error": "Failed to open TikTok tab: " + _0x37e9cf };
  }
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x33ae51 = await waitForContentScript$1(_0x2d2d8b, CONTENT_SCRIPT_READY_TIMEOUT_MS$1);
  if (!_0x33ae51) {
    let _0x4e4ed4 = "";
    try {
      const _0x2c3e4d = await chrome["tabs"]["get"](_0x2d2d8b);
      _0x4e4ed4 = _0x2c3e4d["url"] || "";
    } catch {
    }
    const _0x299618 = _0x4e4ed4["includes"]("/tiktokstudio/upload"), _0x334725 = _0x299618 ? "TikTok content script ไม่ตอบ — refresh tab แล้วลองใหม่ (URL: " + _0x4e4ed4["slice"](0, 80) + ")" : "TikTok redirect ไปหน้าอื่น — กรุณา login TikTok Studio ก่อน (URL: " + (_0x4e4ed4["slice"](0, 80) || "unknown") + ")";
    return { "success": ![], "error": _0x334725 };
  }
  if (_0x54938b["aborted"]) return { "success": ![], "error": "หยุดโดยผู้ใช้" };
  const _0x34dab9 = await ensureTabUrl(_0x2d2d8b, GUARD_TIKTOK_UPLOAD);
  if (!_0x34dab9["ok"]) return { "success": ![], "error": "TikTok ไม่อยู่หน้า /upload (" + (_0x34dab9["finalUrl"] || "unknown") + ")" };
  const _0x3c1b13 = 20 * 1024 * 1024;
  let _0x3f8792 = _0x35dcfc;
  const _0x1e41c6 = _0x35dcfc["startsWith"]("data:") && (DEV["FORCE_CHUNKED_TRANSFER"] || _0x35dcfc["length"] > _0x3c1b13);
  if (_0x1e41c6) {
    const _0x20eed2 = (_0x35dcfc["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1), _0x5d0c4 = DEV["FORCE_CHUNKED_TRANSFER"] ? "[FORCE_CHUNKED]" : "ไฟล์ใหญ่";
    sendPipelineLog("info", "📦 " + _0x5d0c4 + " (~" + _0x20eed2 + " MB) — ส่งแบบ chunked");
    try {
      const _0x355d48 = await sendChunked(_0x2d2d8b, _0x35dcfc);
      _0x3f8792 = "chunked:" + _0x355d48, sendPipelineLog("info", "✓ ส่ง chunks ครบแล้ว → marker: chunked:" + _0x355d48["slice"](0, 12) + "...");
    } catch (_0x14cd1b) {
      return { "success": ![], "error": "Chunked transfer fail: " + _0x14cd1b };
    }
  }
  const _0x2bff6f = { "videoUrl": _0x3f8792, "caption": _0x75c201, "hashtags": _0x2be7c5, "postType": _0x814ff3, "scheduleTime": _0x2d1192["scheduleTime"], "noBasket": _0x2d1192["noBasket"] === !![], "basketName": ((_c = _0x2abfcc["productId"]) == null ? void 0 : _c["trim"]()) || ((_d = _0x2abfcc["basketName"]) == null ? void 0 : _d["trim"]()) || "", "basketLabel": (_0x2abfcc["basketName"] || "")["trim"]() || void 0, "productName": _0x5e90cb["artifacts"]["trimmedProductName"] || _0x2abfcc["name"] };
  try {
    await chrome["tabs"]["sendMessage"](_0x2d2d8b, { "type": "TIKTOK_UPLOAD_VIDEO", "payload": _0x2bff6f });
  } catch (_0x440b7f) {
    return { "success": ![], "error": "Failed to send upload message: " + _0x440b7f };
  }
  log$7["info"]("Waiting for TikTok upload to complete...");
  const _0xf30874 = await waitForTikTokDone$1(_0x2d2d8b, TIKTOK_DONE_TIMEOUT_MS$1, _0x54938b);
  try {
    sendPipelineLog("info", "🏠 navigate TikTok → /tiktokstudio (home)"), await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x2d2d8b }, "world": "MAIN", "func": () => {
      window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0xe59dd3) => {
        _0xe59dd3["stopImmediatePropagation"]();
      }, { "capture": !![] }), window["location"]["replace"]("https://www.tiktok.com/tiktokstudio");
    } });
  } catch (_0x277b90) {
    log$7["warn"]("Cannot navigate TikTok to home: " + _0x277b90);
  }
  try {
    sendPipelineLog("info", "↩️ กลับไปหน้า Flow..."), await chrome["tabs"]["update"](_0x5e90cb["flowTabId"], { "active": !![] });
    const _0x3b843d = await chrome["tabs"]["get"](_0x5e90cb["flowTabId"]);
    _0x3b843d["windowId"] != null && await chrome["windows"]["update"](_0x3b843d["windowId"], { "focused": !![] });
    await new Promise((_0x5caac6) => setTimeout(_0x5caac6, 800));
    try {
      const _0x29e15e = await chrome["tabs"]["sendMessage"](_0x5e90cb["flowTabId"], { "type": "FLOW_CLICK_DONE" });
      (_0x29e15e == null ? void 0 : _0x29e15e["success"]) && sendPipelineLog("info", "✓ ปิด dialog Flow (click Done)");
    } catch {
    }
  } catch (_0x25de0b) {
    log$7["warn"]("Cannot focus Flow tab back: " + _0x25de0b);
  }
  return _0xf30874["success"] ? (log$7["info"]("TikTok post completed"), { "success": !![] }) : { "success": ![], "error": _0xf30874["error"] || "TikTok post failed" };
}
async function buildCaptionAndHashtags$1(_0x545d59, _0x309a4d) {
  const _0x409540 = (_0x545d59["name"] || "สินค้า")["trim"](), _0xf98a78 = (_0x545d59["customCaptionOverride"] || "")["trim"](), _0x142960 = (_0xf98a78 || _0x545d59["customSpeech"] || _0x309a4d["customSpeech"] || "")["trim"](), _0x271c72 = parseHashtags$1(_0x545d59["hashtags"] || ""), _0x2de4d5 = !!(_0x545d59["basketName"] || _0x545d59["productId"] || "")["trim"]();
  if (_0xf98a78) {
    const _0x3488b0 = ["แคปชั่น"];
    if (_0x271c72["length"] > 0) _0x3488b0["push"]("แฮชแท็ก");
    if (_0x2de4d5) _0x3488b0["push"]("ชื่อตะกร้า");
    return sendPipelineLog("info", "📝 ใช้" + _0x3488b0["join"](" + ") + "ที่กำหนด — ข้ามการเรียก AI คิดแคปชั่น TikTok"), { "caption": _0xf98a78["slice"](0, 2200), "hashtags": _0x271c72 };
  }
  if (_0x142960 && _0x271c72["length"] > 0) return sendPipelineLog("info", "📝 ใช้ caption + hashtags ที่ผู้ใช้กำหนด — ข้ามการเรียก AI"), { "caption": _0x142960["slice"](0, 2200), "hashtags": _0x271c72 };
  const _0x3222f5 = inferPersonaGender(_0x545d59["modelTypeOverride"] || _0x309a4d["modelType"], _0x545d59["voiceTypeOverride"] || _0x309a4d["voiceType"]);
  sendPipelineLog("info", "🤖 AI สร้าง caption + hashtags... (ผู้พูด: " + (_0x3222f5 === "male" ? "ผู้ชาย" : _0x3222f5 === "female" ? "ผู้หญิง" : "กลาง ๆ ไม่ระบุเพศ") + ")");
  const _0x4ba185 = await generateTiktokCaption(_0x409540, _0x3222f5);
  sendPipelineLog("info", _0x4ba185["usedAI"] ? "✓ AI สร้างสำเร็จ" : "⚠ AI ล้มเหลว — ใช้ default");
  const _0x30b30c = (_0x142960 || _0x4ba185["caption"])["slice"](0, 2200), _0x1d22ec = [], _0x5da890 = /* @__PURE__ */ new Set();
  for (const _0x15032e of [..._0x271c72, ..._0x4ba185["hashtags"]]) {
    const _0x19bfec = _0x15032e["toLowerCase"]();
    if (_0x5da890["has"](_0x19bfec)) continue;
    _0x5da890["add"](_0x19bfec), _0x1d22ec["push"](_0x15032e);
    if (_0x1d22ec["length"] >= 8) break;
  }
  return { "caption": _0x30b30c, "hashtags": _0x1d22ec };
}
function parseHashtags$1(_0x2b029d) {
  return parseHashtagList(_0x2b029d);
}
async function waitForTabLoad$1(_0x4dbba4, _0x4d5c42, _0x2cc7ce) {
  return new Promise((_0x23d65f) => {
    const _0x38cb1e = setTimeout(() => {
      _0x436653(), log$7["warn"]("waitForTabLoad timeout — proceeding anyway"), _0x23d65f();
    }, _0x2cc7ce);
    function _0x1baae3(_0x2a3d57, _0x2e0411, _0x3177bf) {
      if (_0x2a3d57 !== _0x4dbba4) return;
      if (_0x2e0411["status"] !== "complete") return;
      if (!_0x3177bf["url"] || !_0x3177bf["url"]["includes"](_0x4d5c42)) return;
      log$7["info"]("waitForTabLoad: tab " + _0x4dbba4 + " loaded " + _0x3177bf["url"]["slice"](0, 80)), _0x436653(), _0x23d65f();
    }
    function _0x436653() {
      clearTimeout(_0x38cb1e), chrome["tabs"]["onUpdated"]["removeListener"](_0x1baae3);
    }
    chrome["tabs"]["onUpdated"]["addListener"](_0x1baae3), chrome["tabs"]["get"](_0x4dbba4)["then"]((_0x49358a) => {
      var _a2;
      _0x49358a["status"] === "complete" && ((_a2 = _0x49358a["url"]) == null ? void 0 : _a2["includes"](_0x4d5c42)) && (_0x436653(), _0x23d65f());
    })["catch"](() => {
    });
  });
}
async function waitForContentScript$1(_0x58bc24, _0x156360) {
  const _0x3abbc5 = Date["now"]() + _0x156360;
  while (Date["now"]() < _0x3abbc5) {
    try {
      const _0x2539b9 = await chrome["tabs"]["sendMessage"](_0x58bc24, { "type": "TIKTOK_POST", "payload": { "action": "ping" } });
      if (_0x2539b9 == null ? void 0 : _0x2539b9["ready"]) return !![];
    } catch {
    }
    await sleep$2(1e3);
  }
  return ![];
}
async function sendChunked(_0x122aba, _0x672160) {
  const _0x20e82e = 300 * 1024, _0x2a286c = "vid_" + Date["now"]() + "_" + Math["random"]()["toString"](36)["slice"](2, 8), _0x27fd6f = Math["ceil"](_0x672160["length"] / _0x20e82e), _0x32d0ea = _0x672160["length"];
  await chrome["tabs"]["sendMessage"](_0x122aba, { "type": "CHUNK_INIT", "payload": { "key": _0x2a286c, "totalChunks": _0x27fd6f, "totalSize": _0x32d0ea } });
  for (let _0x4ee611 = 0; _0x4ee611 < _0x27fd6f; _0x4ee611++) {
    const _0x6aac75 = _0x4ee611 * _0x20e82e, _0x144b62 = Math["min"](_0x6aac75 + _0x20e82e, _0x672160["length"]), _0x1a32b3 = _0x672160["slice"](_0x6aac75, _0x144b62);
    await chrome["tabs"]["sendMessage"](_0x122aba, { "type": "CHUNK_PUSH", "payload": { "key": _0x2a286c, "index": _0x4ee611, "data": _0x1a32b3 } });
    if (_0x4ee611 === 0 || _0x4ee611 === _0x27fd6f - 1 || _0x4ee611 % Math["max"](1, Math["floor"](_0x27fd6f / 10)) === 0) {
      const _0x34a5b1 = Math["round"]((_0x4ee611 + 1) / _0x27fd6f * 100);
      sendPipelineLog("info", "   📦 chunk " + (_0x4ee611 + 1) + "/" + _0x27fd6f + " (" + _0x34a5b1 + "%)", _0x4ee611 > 0);
    }
  }
  return await chrome["tabs"]["sendMessage"](_0x122aba, { "type": "CHUNK_DONE", "payload": { "key": _0x2a286c } }), _0x2a286c;
}
function isFlowMediaUrl(_0x333687) {
  return _0x333687["startsWith"]("blob:") || _0x333687["includes"]("labs.google.com/fx/") || _0x333687["includes"]("/fx/api/trpc/media") || _0x333687["includes"]("googleusercontent") || _0x333687["includes"]("lh3.google") || _0x333687["includes"]("aistudio.google") || /\.mp4(\?|$)/i["test"](_0x333687);
}
async function fetchBlobAsDataUrl(_0x89a226, _0x40fc43) {
  var _a2;
  if (!_0x40fc43["startsWith"]("blob:")) try {
    const _0x58cdf1 = await fetch(_0x40fc43);
    if (!_0x58cdf1["ok"]) throw new Error("HTTP " + _0x58cdf1["status"]);
    const _0x18f02f = await _0x58cdf1["arrayBuffer"]();
    if (_0x18f02f["byteLength"] === 0) throw new Error("empty response");
    const _0xd6cc4d = new Uint8Array(_0x18f02f);
    let _0x169494 = "";
    const _0x10f666 = 32768;
    for (let _0x282c26 = 0; _0x282c26 < _0xd6cc4d["byteLength"]; _0x282c26 += _0x10f666) {
      _0x169494 += String["fromCharCode"]["apply"](null, Array["from"](_0xd6cc4d["subarray"](_0x282c26, _0x282c26 + _0x10f666)));
    }
    return log$7["info"]("[fetchBlobAsDataUrl] Path A (background fetch) success: " + (_0x18f02f["byteLength"] / 1024 / 1024)["toFixed"](1) + " MB"), "data:video/mp4;base64," + btoa(_0x169494);
  } catch (_0x4f832b) {
    log$7["warn"]("[fetchBlobAsDataUrl] Path A fail (" + _0x4f832b + ") → trying Path B (content script)");
  }
  try {
    const _0x1d9bbf = await chrome["tabs"]["sendMessage"](_0x89a226, { "type": "FLOW_FETCH_VIDEO_AS_DATA_URL", "payload": { "url": _0x40fc43 } });
    if ((_0x1d9bbf == null ? void 0 : _0x1d9bbf["success"]) && _0x1d9bbf["dataUrl"]) return log$7["info"]("[fetchBlobAsDataUrl] Path B (content script fetch) success: " + ((_0x1d9bbf["sizeBytes"] ?? 0) / 1024 / 1024)["toFixed"](1) + " MB"), _0x1d9bbf["dataUrl"];
    log$7["warn"]("[fetchBlobAsDataUrl] Path B fail: " + ((_0x1d9bbf == null ? void 0 : _0x1d9bbf["error"]) || "no response") + " → trying Path C (executeScript)");
  } catch (_0x3a3e61) {
    log$7["warn"]("[fetchBlobAsDataUrl] Path B exception (" + _0x3a3e61 + ") → trying Path C");
  }
  const _0x496122 = await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x89a226 }, "func": async (_0x151de3) => {
    try {
      const _0x3ed2ae = await fetch(_0x151de3);
      if (!_0x3ed2ae["ok"]) return { "ok": ![], "err": "HTTP " + _0x3ed2ae["status"], "status": _0x3ed2ae["status"] };
      const _0x196c17 = await _0x3ed2ae["arrayBuffer"](), _0x2b6af8 = new Uint8Array(_0x196c17);
      if (_0x2b6af8["byteLength"] === 0) return { "ok": ![], "err": "empty response" };
      let _0x3d58ea = "";
      const _0x3deba3 = 32768;
      for (let _0x109eff = 0; _0x109eff < _0x2b6af8["byteLength"]; _0x109eff += _0x3deba3) {
        _0x3d58ea += String["fromCharCode"]["apply"](null, Array["from"](_0x2b6af8["subarray"](_0x109eff, _0x109eff + _0x3deba3)));
      }
      return { "ok": !![], "data": "data:video/mp4;base64," + btoa(_0x3d58ea) };
    } catch (_0x2cccd3) {
      return { "ok": ![], "err": String(_0x2cccd3) };
    }
  }, "args": [_0x40fc43] }), _0x3d11c8 = (_a2 = _0x496122 == null ? void 0 : _0x496122[0]) == null ? void 0 : _a2["result"];
  if (!_0x3d11c8) throw new Error("All paths failed (Path C: executeScript returned no result)");
  if (!_0x3d11c8["ok"]) throw new Error("fetch in Flow: " + _0x3d11c8["err"]);
  if (!_0x3d11c8["data"]["startsWith"]("data:")) throw new Error("data URL format invalid");
  return _0x3d11c8["data"];
}
function waitForTikTokDone$1(_0x27ccbf, _0x1e0439, _0xc6d870) {
  return new Promise((_0x207948) => {
    let _0x23f733 = ![];
    const _0x4bb581 = (_0x34d2c0, _0x3a2ed4) => {
      if (_0x23f733) return;
      _0x23f733 = !![], log$7["info"]("waitForTikTokDone resolved by: " + _0x3a2ed4), _0x28fd9b(), _0x207948(_0x34d2c0);
    }, _0x192985 = setTimeout(() => {
      _0x4bb581({ "success": ![], "error": "TikTok โพสต์เกินเวลา" }, "timeout");
    }, _0x1e0439);
    function _0xc1fa40(_0x15dae6) {
      if (_0x15dae6["type"] !== "TIKTOK_DONE") return;
      const _0x1719be = _0x15dae6["payload"];
      _0x4bb581({ "success": _0x1719be["success"] ?? ![], "error": _0x1719be["error"] }, "TIKTOK_DONE message");
    }
    function _0x1389f6(_0x42db00, _0x32768e) {
      if (_0x42db00 !== _0x27ccbf) return;
      if (!_0x32768e["url"]) return;
      if (_0x32768e["url"]["includes"]("/tiktokstudio/upload")) return;
      _0x4bb581({ "success": !![] }, "tab navigated to " + _0x32768e["url"]["slice"](0, 80));
    }
    function _0x3d3e54() {
      _0x4bb581({ "success": ![], "error": "หยุดโดยผู้ใช้" }, "abort");
    }
    function _0x28fd9b() {
      clearTimeout(_0x192985), chrome["runtime"]["onMessage"]["removeListener"](_0xc1fa40), chrome["tabs"]["onUpdated"]["removeListener"](_0x1389f6), _0xc6d870["removeEventListener"]("abort", _0x3d3e54);
    }
    chrome["runtime"]["onMessage"]["addListener"](_0xc1fa40), chrome["tabs"]["onUpdated"]["addListener"](_0x1389f6), _0xc6d870["addEventListener"]("abort", _0x3d3e54);
  });
}
function sendPipelineLog(_0x50e037, _0x82b131, _0x1e254e = ![]) {
  chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": _0x50e037, "message": _0x82b131, "replace": _0x1e254e } })["catch"](() => {
  });
}
async function pipelinePause(_0x5ae547, _0x51dee7, _0x30eaeb) {
  for (let _0x1564df = _0x5ae547; _0x1564df > 0 && !_0x51dee7["aborted"]; _0x1564df--) {
    sendPipelineLog("info", "⏸ " + _0x30eaeb + ": " + _0x1564df + " วิ...", _0x1564df < _0x5ae547), await sleep$2(1e3);
  }
}
function sleep$2(_0xc9f940) {
  return new Promise((_0x340792) => setTimeout(_0x340792, _0xc9f940));
}
const postTiktokBlock = { "id": "POST_TIKTOK", "name": "โพสต์ TikTok", "retries": 1, "execute": execute };
const postTiktok = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  postTiktokBlock,
  sendChunked
}, Symbol.toStringTag, { value: "Module" }));
const ALL_BLOCKS = [uploadAndConfigBlock, genImageBlock, genVideoBlock, saveClipBlock, postTiktokBlock], BLOCK_MAP = new Map(ALL_BLOCKS["map"]((_0x1026cb) => [_0x1026cb["id"], _0x1026cb]));
function resolveBlocks(_0x3fae58) {
  const _0x1ead0e = new Set(_0x3fae58);
  return BLOCK_ORDER["filter"]((_0xf434) => _0x1ead0e["has"](_0xf434))["map"]((_0x3aaecc) => BLOCK_MAP["get"](_0x3aaecc))["filter"](Boolean);
}
async function findFlowTab() {
  const _0x252e1f = await chrome["tabs"]["query"]({});
  return _0x252e1f["find"]((_0xf61e6b) => /labs\.google\/fx(?:\/[a-z]{2})?\/tools\/flow/i["test"](_0xf61e6b["url"] || ""));
}
const log$6 = createLogger("PipelineRunner"), STORAGE_KEY$1 = "agx_pipeline_state";
class PipelineRunner {
  constructor() {
    this["state"] = null, this["stopRequested"] = ![], this["currentAbortController"] = null, this["flowTabId"] = null;
  }
  async ["start"](_0x163458, _0x2a63f9, _0x5c57c2) {
    this["stopRequested"] = ![], this["flowTabId"] = _0x5c57c2, chrome["tabs"]["sendMessage"](_0x5c57c2, { "type": "FLOW_RESET_STOP" })["catch"](() => {
    });
    const _0x50b599 = _0x163458["settings"]["mode"] || "full";
    let _0x10da9c = _0x2a63f9;
    if (_0x50b599 === "imageOnly") _0x10da9c = _0x2a63f9["filter"]((_0x1bf847) => _0x1bf847 === "UPLOAD_AND_CONFIG" || _0x1bf847 === "GEN_IMAGE");
    else _0x50b599 === "videoOnly" && (_0x10da9c = _0x2a63f9["filter"]((_0x2fd347) => _0x2fd347 === "UPLOAD_AND_CONFIG" || _0x2fd347 === "GEN_VIDEO"));
    const _0x481e90 = resolveBlocks(_0x10da9c);
    if (_0x481e90["length"] === 0) {
      this["broadcast"]("error", "❌ ไม่มี block ที่อนุญาตสำหรับ license นี้"), this["sendDone"](![], "No allowed blocks");
      return;
    }
    const _0xb7a773 = _0x163458["settings"]["loopAllEnabled"] ? Math["max"](1, _0x163458["settings"]["loopAllCount"] ?? 1) : 1;
    this["state"] = { "id": crypto["randomUUID"](), "state": PipelineState["RUNNING"], "config": _0x163458, "allowedBlocks": _0x2a63f9, "currentLoop": 0, "totalLoops": _0xb7a773, "currentProductIndex": 0, "currentBlockIndex": 0, "startedAt": Date["now"]() }, await this["persistState"](), this["broadcast"]("info", "🚀 Pipeline: " + _0x163458["products"]["length"] + " สินค้า, " + _0x481e90["length"] + " blocks, " + _0xb7a773 + " loop(s)"), this["broadcast"]("info", "📋 Blocks: " + _0x481e90["map"]((_0x356ca7) => _0x356ca7["name"])["join"](" → ")), broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": "auto", "totalBlocks": _0x481e90["length"] });
    try {
      for (let _0x2607bb = 0; _0x2607bb < _0xb7a773; _0x2607bb++) {
        if (this["stopRequested"]) break;
        this["state"]["currentLoop"] = _0x2607bb;
        _0xb7a773 > 1 && this["broadcast"]("info", "--- Loop " + (_0x2607bb + 1) + "/" + _0xb7a773 + " ---");
        for (let _0x3dd25a = 0; _0x3dd25a < _0x163458["products"]["length"]; _0x3dd25a++) {
          if (this["stopRequested"]) break;
          this["state"]["currentProductIndex"] = _0x3dd25a;
          const _0x10c85f = _0x163458["products"][_0x3dd25a];
          this["broadcast"]("info", "📦 สินค้า " + (_0x3dd25a + 1) + "/" + _0x163458["products"]["length"] + ": " + (_0x10c85f["name"] || _0x10c85f["id"]));
          const _0x41f1a8 = DEV["SKIP_NEW_PROJECT_PER_PRODUCT"] || DEV["TEST_SCENEBUILDER_ATTACH_ONLY"] || DEV["TEST_SCENEBUILDER_DOWNLOAD_ONLY"] || DEV["SKIP_UPLOAD"];
          if (this["flowTabId"] && !_0x41f1a8) {
            this["broadcast"]("info", "🆕 สร้าง Flow project ใหม่สำหรับสินค้า " + (_0x3dd25a + 1) + "/" + _0x163458["products"]["length"] + ": " + (_0x10c85f["name"] || _0x10c85f["id"]) + "...");
            try {
              await chrome["tabs"]["update"](this["flowTabId"], { "url": "https://labs.google/fx/tools/flow" }), await this["waitFlowReady"](this["flowTabId"], 3e4), await chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": "FLOW_NEW_PROJECT" })["catch"](() => {
              }), await new Promise((_0x2b6089) => setTimeout(_0x2b6089, 8e3)), await this["waitFlowReady"](this["flowTabId"], 2e4), this["broadcast"]("info", "📂 เข้าหน้า Project ใหม่แล้ว");
            } catch (_0x14353f) {
              this["broadcast"]("warn", "⚠ สร้าง Project ใหม่ไม่สำเร็จ: " + _0x14353f + " — pipeline ยังต่อได้ แต่รูป/คลิปอาจรวมกับ project เดิม");
            }
          }
          if (_0x163458["settings"]["autoPost"] && _0x163458["settings"]["postType"] === "schedule" && _0x163458["settings"]["scheduleDate"]) {
            const _0x4a3ef6 = new Date(_0x163458["settings"]["scheduleDate"]);
            _0x4a3ef6["setHours"](Number(_0x163458["settings"]["scheduleHour"] || "09")), _0x4a3ef6["setMinutes"](Number(_0x163458["settings"]["scheduleMinute"] || "00")), _0x4a3ef6["setSeconds"](0), _0x4a3ef6["setMilliseconds"](0);
            const _0x26da35 = Number(_0x163458["settings"]["scheduleInterval"]) || 30, _0x1f7ba6 = _0x2607bb * _0x163458["products"]["length"] + _0x3dd25a, _0x162308 = _0x4a3ef6["getTime"]() + _0x1f7ba6 * _0x26da35 * 6e4;
            _0x163458["settings"]["scheduleTime"] = _0x162308, this["broadcast"]("info", "⏰ ตั้งเวลาโพส: " + new Date(_0x162308)["toLocaleString"]("th-TH") + " (คลิปที่ " + (_0x1f7ba6 + 1) + ", ห่าง " + _0x26da35 + " นาที)");
          }
          const _0x4f3d4c = { "product": _0x10c85f, "settings": _0x163458["settings"], "flowTabId": _0x5c57c2, "artifacts": {} };
          let _0x3c4ef2 = ![];
          for (let _0x2db15b = 0; _0x2db15b < _0x481e90["length"]; _0x2db15b++) {
            if (this["stopRequested"]) break;
            if (_0x3c4ef2) {
              this["broadcastBlockProgress"](_0x481e90[_0x2db15b]["id"], _0x10c85f["id"], _0x3dd25a, _0x163458["products"]["length"], _0x2607bb, _0xb7a773, "skipped"), this["broadcast"]("warn", "⏭ ข้าม " + _0x481e90[_0x2db15b]["name"]);
              continue;
            }
            this["state"]["currentBlockIndex"] = _0x2db15b, await this["persistState"]();
            const _0x3e51f9 = _0x481e90[_0x2db15b];
            this["broadcast"]("info", "▶ " + _0x3e51f9["name"] + "..."), this["broadcastBlockProgress"](_0x3e51f9["id"], _0x10c85f["id"], _0x3dd25a, _0x163458["products"]["length"], _0x2607bb, _0xb7a773, "running");
            const _0x58231c = await this["executeWithRetry"](_0x3e51f9, _0x4f3d4c);
            _0x58231c["success"] ? (this["broadcastBlockProgress"](_0x3e51f9["id"], _0x10c85f["id"], _0x3dd25a, _0x163458["products"]["length"], _0x2607bb, _0xb7a773, "success"), _0x58231c["skipped"] ? this["broadcast"]("info", "⏭ ข้าม " + _0x3e51f9["name"] + " (ไม่ได้ติ๊ก)") : this["broadcast"]("success", "✅ " + _0x3e51f9["name"] + " สำเร็จ")) : (this["broadcastBlockProgress"](_0x3e51f9["id"], _0x10c85f["id"], _0x3dd25a, _0x163458["products"]["length"], _0x2607bb, _0xb7a773, "failed"), this["broadcast"]("error", "❌ " + _0x3e51f9["name"] + " ล้มเหลว: " + _0x58231c["error"]), _0x3c4ef2 = !![], this["broadcast"]("warn", "⏭ ข้าม block ที่เหลือของสินค้านี้ → ไปสินค้าถัดไป"));
          }
          this["sendProgress"](_0x3dd25a + 1, _0x163458["products"]["length"], "Loop " + (_0x2607bb + 1));
          const _0x16d248 = _0x163458["settings"]["productDelay"] ?? 0;
          _0x16d248 > 0 && _0x3dd25a < _0x163458["products"]["length"] - 1 && !this["stopRequested"] && await this["countdownWait"](_0x16d248, "⏸ พักระหว่างชุดสินค้า");
        }
        if (_0x2607bb < _0xb7a773 - 1 && !this["stopRequested"]) {
          const _0xad1371 = _0x163458["settings"]["loopDelay"] || 60;
          await this["countdownWait"](_0xad1371, "⏳ รอก่อน loop " + (_0x2607bb + 2));
        }
      }
      this["stopRequested"] ? (this["state"]["state"] = PipelineState["STOPPED"], this["broadcast"]("warn", "🛑 Pipeline หยุดโดยผู้ใช้")) : (this["state"]["state"] = PipelineState["DONE"], this["broadcast"]("success", "🎉 Pipeline เสร็จสมบูรณ์"));
    } catch (_0x2d3ab8) {
      this["state"]["state"] = PipelineState["ERROR"], this["state"]["error"] = String(_0x2d3ab8), this["broadcast"]("error", "💥 Pipeline error: " + _0x2d3ab8);
    } finally {
      await this["persistState"]();
      const _0x366e18 = this["state"]["state"] === PipelineState["DONE"] ? "done" : this["state"]["state"] === PipelineState["STOPPED"] ? "stopped" : "error";
      broadcastPipelineEvent("PIPELINE_STATE", { "state": _0x366e18, "mode": "auto" }), this["sendDone"](this["state"]["state"] === PipelineState["DONE"]);
    }
  }
  ["stop"]() {
    var _a2;
    this["stopRequested"] = !![], (_a2 = this["currentAbortController"]) == null ? void 0 : _a2["abort"](), this["flowTabId"] && chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": "FLOW_STOP" })["catch"](() => {
    }), hardKillPipeline("auto", this["flowTabId"]);
  }
  async ["executeWithRetry"](_0x44dfbb, _0x422c87) {
    const _0x5a9768 = 3, _0x3d9859 = ["GEN_IMAGE", "GEN_VIDEO"], _0x58863a = _0x3d9859["includes"](_0x44dfbb["id"]), _0x2ed61b = _0x58863a ? 180 : 15, { loopEnabled: _0xbc6623, loopCount: _0x4f7105, loopDelay: _0xf5a152 } = _0x422c87["settings"], _0x3ed098 = _0xbc6623 && _0x58863a, _0x46060e = _0x3ed098 ? Math["max"](1, _0x4f7105 || _0x5a9768) : _0x5a9768, _0x1771ef = (_0x3ed098 ? Math["max"](1, _0xf5a152 || _0x2ed61b) : _0x2ed61b) * 1e3;
    for (let _0x2a4400 = 1; _0x2a4400 <= _0x46060e; _0x2a4400++) {
      if (this["stopRequested"]) return { "success": ![], "error": "Stopped by user" };
      if (_0x2a4400 > 1) {
        await this["countdownWait"](_0x1771ef / 1e3, "🔄 ลองใหม่ " + _0x44dfbb["name"] + " (" + _0x2a4400 + "/" + _0x46060e + ") — รอ");
        if (this["stopRequested"]) return { "success": ![], "error": "Stopped by user" };
        if (_0x44dfbb["id"] !== "POST_TIKTOK" && _0x422c87["flowTabId"]) {
          this["broadcast"]("info", "🔃 refresh Flow tab ก่อน retry...");
          try {
            await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x422c87["flowTabId"] }, "func": () => {
              window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0x338d67) => {
                _0x338d67["stopImmediatePropagation"]();
              }, { "capture": !![] });
            } })["catch"](() => {
            }), await chrome["tabs"]["reload"](_0x422c87["flowTabId"]);
            const _0x43f6ac = Date["now"]() + 45e3;
            while (Date["now"]() < _0x43f6ac) {
              try {
                const _0x361aba = await chrome["tabs"]["get"](_0x422c87["flowTabId"]);
                if (_0x361aba["status"] === "complete") break;
              } catch {
                break;
              }
              await new Promise((_0xc3a1dc) => setTimeout(_0xc3a1dc, 500));
            }
            await new Promise((_0x10758a) => setTimeout(_0x10758a, 8e3));
            const _0x764765 = Date["now"]() + 15e3;
            let _0x4a3b9e = ![];
            while (Date["now"]() < _0x764765) {
              try {
                const _0xd32472 = await chrome["tabs"]["sendMessage"](_0x422c87["flowTabId"], { "type": "FLOW_PING" });
                if (_0xd32472 == null ? void 0 : _0xd32472["ready"]) {
                  _0x4a3b9e = !![];
                  break;
                }
              } catch {
              }
              await new Promise((_0x36c4de) => setTimeout(_0x36c4de, 1e3));
            }
            if (_0x4a3b9e) {
              try {
                await chrome["tabs"]["sendMessage"](_0x422c87["flowTabId"], { "type": "FLOW_ENSURE_PROJECT" }), await new Promise((_0x8ff5ec) => setTimeout(_0x8ff5ec, 3e3));
              } catch {
              }
              broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": "auto", "totalBlocks": 5 });
            }
            this["broadcast"]("info", "✓ refresh เสร็จ → ลอง " + _0x44dfbb["name"] + " ใหม่");
          } catch (_0xb89f05) {
            this["broadcast"]("warn", "⚠ refresh fail: " + _0xb89f05 + " — ลอง block ต่อเลย");
          }
        }
      }
      const _0x4ea2ee = new AbortController();
      this["currentAbortController"] = _0x4ea2ee;
      try {
        const _0x3b7f5f = await _0x44dfbb["execute"](_0x422c87, _0x4ea2ee["signal"]);
        this["currentAbortController"] = null;
        if (_0x3b7f5f["success"]) return _0x3b7f5f;
        if (_0x2a4400 === _0x46060e) return _0x3b7f5f;
        this["broadcast"]("warn", "⚠ " + _0x44dfbb["name"] + " attempt " + _0x2a4400 + " fail: " + (_0x3b7f5f["error"] || "unknown"));
      } catch (_0x3c7cd1) {
        this["currentAbortController"] = null;
        if (_0x4ea2ee["signal"]["aborted"] && this["stopRequested"]) return { "success": ![], "error": "Stopped by user" };
        if (_0x2a4400 === _0x46060e) return { "success": ![], "error": _0x44dfbb["name"] + ": " + _0x3c7cd1, "skipDownstream": !![] };
        this["broadcast"]("warn", "⚠ " + _0x44dfbb["name"] + " attempt " + _0x2a4400 + " threw: " + _0x3c7cd1);
      }
    }
    return { "success": ![], "error": "Unexpected retry exhaustion", "skipDownstream": !![] };
  }
  ["broadcast"](_0x5edefd, _0x2cff83) {
    log$6["info"]("[Pipeline] " + _0x2cff83), broadcastPipelineEvent("PIPELINE_LOG", { "level": _0x5edefd, "message": _0x2cff83 });
  }
  ["sendProgress"](_0x10452e, _0x2e7f80, _0x306a59) {
    broadcastPipelineEvent("PIPELINE_PROGRESS", { "current": _0x10452e, "total": _0x2e7f80, "step": _0x306a59 });
  }
  ["broadcastBlockProgress"](_0xe2d0b, _0x3b16f5, _0x29ef79, _0xee0adf, _0x5020be, _0x3d0bb6, _0x4985be) {
    broadcastPipelineEvent("PIPELINE_BLOCK_PROGRESS", { "blockId": _0xe2d0b, "productId": _0x3b16f5, "productIndex": _0x29ef79, "totalProducts": _0xee0adf, "loop": _0x5020be, "totalLoops": _0x3d0bb6, "status": _0x4985be });
  }
  ["sendDone"](_0x3ed680, _0x2c88a0) {
    broadcastPipelineEvent(_0x3ed680 ? "PIPELINE_DONE" : "PIPELINE_ERROR", _0x3ed680 ? {} : { "error": _0x2c88a0 || "Pipeline failed" });
  }
  async ["persistState"]() {
    if (!this["state"]) return;
    try {
      await chrome["storage"]["local"]["set"]({ [STORAGE_KEY$1]: this["state"] });
    } catch (_0x6f0ecd) {
    }
  }
  static async ["loadPersistedState"]() {
    const _0x1d35a8 = await chrome["storage"]["local"]["get"]([STORAGE_KEY$1]);
    return _0x1d35a8[STORAGE_KEY$1] || null;
  }
  static async ["clearPersistedState"]() {
    await chrome["storage"]["local"]["remove"]([STORAGE_KEY$1]);
  }
  async ["waitFlowReady"](_0x12cd64, _0xaf67db) {
    const _0x18dd17 = Date["now"]() + Math["floor"](_0xaf67db * 0.6);
    while (Date["now"]() < _0x18dd17) {
      try {
        const _0x28c61e = await chrome["tabs"]["get"](_0x12cd64);
        if (_0x28c61e["status"] === "complete") break;
      } catch {
        break;
      }
      await new Promise((_0x39c101) => setTimeout(_0x39c101, 500));
    }
    await new Promise((_0x1b7279) => setTimeout(_0x1b7279, 3e3));
    const _0x1eabc4 = Date["now"]() + Math["floor"](_0xaf67db * 0.4);
    while (Date["now"]() < _0x1eabc4) {
      try {
        const _0x123ed8 = await chrome["tabs"]["sendMessage"](_0x12cd64, { "type": "FLOW_PING" });
        if (_0x123ed8 == null ? void 0 : _0x123ed8["ready"]) return !![];
      } catch {
      }
      await new Promise((_0x358b54) => setTimeout(_0x358b54, 1e3));
    }
    this["broadcast"]("info", "↻ Flow ยังไม่ตอบ — ลอง refresh tabs ก่อน...");
    const _0x4bea6b = await findFlowTab();
    if (_0x4bea6b == null ? void 0 : _0x4bea6b["id"]) {
      _0x4bea6b["id"] !== _0x12cd64 && (this["broadcast"]("info", "↻ Flow tab id เปลี่ยน: #" + _0x12cd64 + " → #" + _0x4bea6b["id"]), this["flowTabId"] = _0x4bea6b["id"], _0x12cd64 = _0x4bea6b["id"]);
      await new Promise((_0x26bedd) => setTimeout(_0x26bedd, 2e3));
      try {
        const _0x3c87cd = await chrome["tabs"]["sendMessage"](_0x12cd64, { "type": "FLOW_PING" });
        if (_0x3c87cd == null ? void 0 : _0x3c87cd["ready"]) return this["broadcast"]("info", "✓ Flow ready หลัง refresh tabs"), !![];
      } catch {
      }
    }
    return ![];
  }
  ["interruptibleSleep"](_0x350ed3) {
    return new Promise((_0x7ee156) => {
      const _0x4e4338 = setTimeout(_0x7ee156, _0x350ed3), _0x40b831 = setInterval(() => {
        this["stopRequested"] && (clearTimeout(_0x4e4338), clearInterval(_0x40b831), _0x7ee156());
      }, 500);
    });
  }
  async ["countdownWait"](_0xb8f9de, _0x30288f) {
    for (let _0x4b3942 = _0xb8f9de; _0x4b3942 > 0; _0x4b3942--) {
      if (this["stopRequested"]) {
        broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0xb8f9de, "label": _0x30288f });
        return;
      }
      broadcastPipelineEvent("PIPELINE_LOG", { "level": "info", "message": _0x30288f + " " + _0x4b3942 + "s...", "replace": _0x4b3942 < _0xb8f9de }), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x4b3942, "total": _0xb8f9de, "label": _0x30288f }), await new Promise((_0x455d56) => setTimeout(_0x455d56, 1e3));
    }
    broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0xb8f9de, "label": _0x30288f });
  }
}
const SCENE_ROLE_LABELS = { "hook": "Hook (เปิดเรื่อง)", "body": "Body (เนื้อเรื่อง)", "cta": "CTA (ปิดเรื่อง)", "setup": "Setup (ปูเรื่อง)", "conflict": "Conflict (ความขัดแย้ง)", "turning": "Turning Point (จุดพลิก)", "moral": "Moral (ข้อคิด)" }, HOOK_STYLE_TH = { "question": "เปิดด้วยการตั้งคำถามชวนคิด", "crisis": "เปิดด้วยปัญหา/วิกฤต", "shocking_fact": "เปิดด้วยข้อเท็จจริงน่าตกใจ", "action": "เปิดด้วยฉากแอคชั่นเร้าใจ", "mystery": "เปิดด้วยปริศนาชวนสงสัย", "custom": "เปิดเรื่องอย่างน่าสนใจ" }, BODY_STYLE_TH = { "intense": "เนื้อเรื่องดุดัน สู้ปัญหา", "comedy": "เนื้อเรื่องตลก กวนตีน", "emotional": "เนื้อเรื่องดราม่า อารมณ์สูง", "educational": "เนื้อเรื่องสอนความรู้", "adventure": "เนื้อเรื่องผจญภัย ลุ้นระทึก", "custom": "เนื้อเรื่องน่าสนใจ" }, CTA_STYLE_TH = { "sweet": "จบหวานๆ ชวนติดตาม", "twist": "จบหักมุมเซอร์ไพรส์", "troll": "จบกวนตีน แซวคนดู", "moral": "จบให้ข้อคิด", "cliffhanger": "จบลุ้น cliffhanger", "custom": "จบประทับใจ" };
const IMAGE_STYLE_TH = { "pixar_3d": "สไตล์ Pixar 3D Animation", "pixar_grumpy": "สไตล์ Pixar 3D โทนหงุดหงิด", "pixar_horror": "สไตล์ Pixar 3D โทนหลอน", "pixar_cheerful": "สไตล์ Pixar 3D โทนสดใส", "pixar_zen": "สไตล์ Pixar 3D โทนสงบ", "pixar_cinematic": "สไตล์ Pixar 3D ซีนีมาติก", "disney_3d": "สไตล์ Disney 3D Animation", "anime": "สไตล์อนิเมะญี่ปุ่น", "realistic": "สไตล์สมจริงเหมือนภาพยนตร์", "cartoon_2d": "สไตล์การ์ตูน 2D", "watercolor": "สไตล์สีน้ำ" };
const MOOD_TH = { "tough_love": "โทนดุดัน ตีแสกหน้า", "funny": "โทนตลก สนุกสนาน", "thrilling": "โทนตื่นเต้น ลุ้นระทึก", "horror": "โทนหลอน น่าขนลุก", "cute": "โทนน่ารัก อบอุ่น", "serious": "โทนจริงจัง", "sarcastic": "โทนแดกดัน", "aggressive": "โทนดุเดือด", "troll": "โทนกวนตีน", "scolding": "โทนบ่นจี้", "crude_18": "โทนหยาบดิบ 18+", "cartoon_cute": "โทนการ์ตูนน่ารัก", "soft_warm": "โทนนุ่มอบอุ่น เสียงกระซิบ", "energetic": "โทนสดใส มีพลัง", "mysterious": "โทนลึกลับ เสียงทุ้มลึก", "fast_energetic": "โทนเร็วและมีพลัง", "calm": "โทนผ่อนคลาย สงบ" };
const AUDIENCE_TH = { "general": "คนทั่วไป", "teens": "วัยรุ่น", "working": "วัยทำงาน", "housewives": "แม่บ้าน", "elderly": "ผู้สูงอายุ", "kids": "เด็ก" };
function deriveSceneRole(_0x33f173, _0x2f8efe, _0x3d7af7) {
  if (_0x33f173 === 0) return _0x3d7af7 ? "setup" : "hook";
  if (_0x33f173 === _0x2f8efe - 1) return _0x3d7af7 ? "moral" : "cta";
  if (_0x3d7af7) {
    const _0x5a3134 = (_0x33f173 - 1) / Math["max"](1, _0x2f8efe - 2);
    return _0x5a3134 < 0.5 ? "conflict" : "turning";
  }
  return "body";
}
function buildStoryScenePrompt(_0x44fdb5, _0xbe7a7e) {
  const _0x429dcd = _0x44fdb5["layout"]["sceneCount"], _0x33ff54 = _0x44fdb5["storyType"] === "drama", _0x87ba59 = deriveSceneRole(_0xbe7a7e, _0x429dcd, _0x33ff54), _0x42a8d6 = SCENE_ROLE_LABELS[_0x87ba59] || "Scene " + (_0xbe7a7e + 1), _0x4ed7f0 = [];
  _0x4ed7f0["push"]("สร้างฉากที่ " + (_0xbe7a7e + 1) + "/" + _0x429dcd + " — " + _0x42a8d6), _0x4ed7f0["push"]("หัวข้อเรื่อง: " + _0x44fdb5["topic"]);
  if (_0x44fdb5["details"]) _0x4ed7f0["push"]("รายละเอียด: " + _0x44fdb5["details"]);
  const _0x379975 = IMAGE_STYLE_TH[_0x44fdb5["style"]["image"]] || _0x44fdb5["style"]["image"], _0x37b885 = MOOD_TH[_0x44fdb5["style"]["mood"]] || _0x44fdb5["style"]["mood"], _0x2760c5 = AUDIENCE_TH[_0x44fdb5["style"]["audience"]] || _0x44fdb5["style"]["audience"];
  _0x4ed7f0["push"]("สไตล์ภาพ: " + _0x379975 + (_0x44fdb5["realisticMode"] ? " (โหมดสมจริง)" : "")), _0x4ed7f0["push"]("อารมณ์: " + _0x37b885 + " เหมาะกับ" + _0x2760c5);
  if (_0x44fdb5["structure"] && "hook" in _0x44fdb5["structure"]) {
    if (_0x87ba59 === "hook") _0x4ed7f0["push"]("การเปิดเรื่อง: " + (HOOK_STYLE_TH[_0x44fdb5["structure"]["hook"]] || ""));
    if (_0x87ba59 === "body") _0x4ed7f0["push"]("การเดินเรื่อง: " + (BODY_STYLE_TH[_0x44fdb5["structure"]["body"]] || ""));
    if (_0x87ba59 === "cta") _0x4ed7f0["push"]("การจบ: " + (CTA_STYLE_TH[_0x44fdb5["structure"]["cta"]] || ""));
  }
  if (_0x44fdb5["characters"] && _0x44fdb5["characters"]["length"] > 0) {
    const _0xdfbd4f = _0x44fdb5["characters"]["filter"]((_0x2175cd) => _0x2175cd["description"] || _0x2175cd["name"])["map"]((_0x28c3e7) => "" + (_0x28c3e7["name"] || "ตัวละคร") + (_0x28c3e7["description"] ? " (" + _0x28c3e7["description"] + ")" : ""))["join"](" และ ");
    if (_0xdfbd4f) _0x4ed7f0["push"]("ตัวละคร: " + _0xdfbd4f);
  }
  const _0x19a2d8 = _0x44fdb5["products"]["filter"]((_0x1b721f) => _0x1b721f["inScenes"] && _0x1b721f["name"]);
  if (_0x19a2d8["length"] > 0) {
    const _0xa5c91a = _0x19a2d8["map"]((_0x561295) => _0x561295["name"])["join"](", ");
    _0x4ed7f0["push"]("สินค้าที่ปรากฏในฉาก: " + _0xa5c91a);
  }
  const _0x3d1d10 = _0x44fdb5["voice"]["mode"] === "voiceover" ? "voiceover (บรรยาย)" : "lip-sync (ตัวละครพูด)";
  _0x4ed7f0["push"]("เสียง: " + _0x3d1d10);
  _0xbe7a7e === 0 && _0x44fdb5["cover"] && _0x44fdb5["cover"]["text"] && _0x4ed7f0["push"]('ใส่ข้อความปกบนภาพว่า "' + _0x44fdb5["cover"]["text"] + '"');
  _0xbe7a7e === _0x429dcd - 1 && _0x44fdb5["disclaimer"] && _0x4ed7f0["push"]("มีข้อจำกัดความรับผิดชอบที่มุม" + _0x44fdb5["disclaimer"]["position"]);
  _0x4ed7f0["push"]("กล้อง: ภาพระยะกลาง โฟกัสที่ตัวละครและบรรยากาศ"), _0x4ed7f0["push"]("คงสไตล์และตัวละครให้ตรงกันทุกฉาก single shot ความยาวฉากนี้ 8 วินาที");
  if (_0x44fdb5["noTextOverlay"] && _0xbe7a7e !== 0) _0x4ed7f0["push"]("No text, labels, or speech bubbles on this image.");
  else _0xbe7a7e !== 0 && _0x4ed7f0["push"]("No headline text or speech bubbles on this image.");
  return _0x4ed7f0["join"](" ");
}
function buildVideoScenePrompt(_0x5315f0, _0x294fbc, _0x54ddfb) {
  const _0x4fa6a2 = _0x5315f0["layout"]["sceneCount"], _0x5e4e20 = _0x5315f0["storyType"] === "drama", _0x119a29 = deriveSceneRole(_0x294fbc, _0x4fa6a2, _0x5e4e20), _0x2878c2 = [];
  _0x2878c2["push"]("วิดีโอฉากที่ " + (_0x294fbc + 1) + "/" + _0x4fa6a2 + " ความยาว 8 วินาที"), _0x2878c2["push"]("ให้ภาพจากเฟรมเริ่มต้นเคลื่อนไหวอย่างเป็นธรรมชาติ");
  const _0x2f73af = { "tough_love": "การเคลื่อนไหวหนักแน่น จริงจัง", "funny": "การเคลื่อนไหวเร็วสนุก มีจังหวะตลก", "thrilling": "การเคลื่อนไหวเร้าใจ ลุ้นระทึก", "horror": "การเคลื่อนไหวช้า หลอน", "cute": "การเคลื่อนไหวนุ่มนวล น่ารัก", "calm": "การเคลื่อนไหวช้า ผ่อนคลาย", "fast_energetic": "การเคลื่อนไหวเร็ว มีพลัง" }, _0xa4ec6d = _0x2f73af[_0x5315f0["style"]["mood"]];
  if (_0xa4ec6d) _0x2878c2["push"](_0xa4ec6d);
  if (_0x5315f0["voice"]["mode"] === "lip_sync") {
    _0x2878c2["push"]("ตัวละครขยับปากพูดสอดคล้องกับเสียงพากย์");
    if (_0x119a29 === "hook") _0x2878c2["push"]("บทพูด 8 วินาที: ประโยคเปิดดึงความสนใจเกี่ยวกับหัวข้อ");
    else _0x119a29 === "cta" || _0x119a29 === "moral" ? _0x2878c2["push"]("บทพูด 8 วินาที: สรุป/ชวนติดตาม/ให้ข้อคิด") : _0x2878c2["push"]("บทพูด 8 วินาที: ดำเนินเนื้อเรื่องต่อจากฉากก่อนหน้า");
  } else _0x2878c2["push"]("เสียงบรรยายภาษาไทย 8 วินาที สอดคล้องกับฉาก");
  _0x2878c2["push"]("กล้อง: เคลื่อนกล้องนุ่มนวล เช่น pan/slow dolly"), _0x2878c2["push"]("ห้ามสินค้าหรือตัวละครเปลี่ยนหน้าตา/รูปทรงจากภาพต้น"), _0x2878c2["push"]("เสียงบรรยากาศเบาๆ ประกอบ"), _0x2878c2["push"]("Audio-only dialogue, no on-screen text or speech bubbles.");
  const _0x211f92 = _0x54ddfb["slice"](0, 120);
  return _0x2878c2["push"]("บริบท: " + _0x211f92), _0x2878c2["join"](" ");
}
const log$5 = createLogger("SceneDialogue"), API_URL$1 = "https://www.autogention.com/api/dialogue/generate", EXTENSION_TOKEN$1 = "agx_ext_2026_9Km2Vp4Rq7Ts1W";
async function generateSceneDialogue(_0x1a656f) {
  const _0x1fab60 = await chrome["storage"]["local"]["get"](["licenseKey"]), _0x3b826b = _0x1fab60["licenseKey"] || "", _0x26dc64 = await getDeviceId(), _0x549042 = { "key": _0x3b826b, "deviceId": _0x26dc64, ..._0x1a656f };
  try {
    log$5["info"]("Requesting " + _0x1a656f["mode"] + " dialogue — scene " + (_0x1a656f["scene"]["index"] + 1) + "/" + _0x1a656f["scene"]["total"]);
    const _0x5a3e50 = await fetch(API_URL$1, { "method": "POST", "headers": { "Content-Type": "application/json", "X-Extension-Token": EXTENSION_TOKEN$1 }, "body": JSON["stringify"](_0x549042) }), _0x5404f2 = _0x5a3e50["headers"]["get"]("content-type") || "";
    if (!_0x5404f2["includes"]("application/json")) throw new Error("non-JSON response (status " + _0x5a3e50["status"] + ")");
    const _0x56262e = await _0x5a3e50["json"]();
    if (!_0x56262e["success"] || !_0x56262e["dialogue"]) throw new Error(_0x56262e["error"] || "API returned no dialogue");
    return log$5["info"]("Received dialogue (" + _0x56262e["dialogue"]["length"] + " chars)"), _0x56262e["dialogue"];
  } catch (_0x135c35) {
    log$5["warn"]("Central dialogue API failed: " + _0x135c35);
  }
  const _0x4c19ae = await tryUserAIWithDialogue(_0x1a656f);
  if (_0x4c19ae) return _0x4c19ae;
  return log$5["info"]("Using local template fallback"), buildFallbackDialogue(_0x1a656f);
}
async function tryUserAIWithDialogue(_0x543c37) {
  const { scene: _0x2784f5, context: _0x282cfb } = _0x543c37, _0x5be7 = _0x282cfb["language"] === "en" ? "en" : "th", _0x251fe7 = _0x5be7 === "en" ? "You are a concise scriptwriter creating short video dialogue in Thai script (but you may write in English if user asks). Return ONLY the dialogue line, no labels, no quotes." : "คุณเป็นนักเขียนบทวิดีโอสั้น สร้างบทพูดภาษาไทยกระชับ ตอบเฉพาะบทพูดล้วนๆ ห้ามใส่เครื่องหมายคำพูด ห้ามใส่ชื่อตัวละคร", _0x218668 = _0x2784f5["role"] || (_0x2784f5["index"] === 0 ? "hook" : _0x2784f5["index"] === _0x2784f5["total"] - 1 ? "cta" : "body"), _0x4eeb08 = _0x282cfb["details"] ? "\nDetails: " + _0x282cfb["details"] : "", _0x4e7f7e = _0x282cfb["details"] ? "\nรายละเอียด: " + _0x282cfb["details"] : "", _0x330848 = _0x282cfb["storyType"] ? "\nGenre: " + _0x282cfb["storyType"] : "", _0x49e9ee = _0x282cfb["storyType"] ? "\nแนวเรื่อง: " + _0x282cfb["storyType"] : "", _0x3a4753 = _0x282cfb["structureHint"] ? "\n" + _0x218668 + " style: " + _0x282cfb["structureHint"] : "", _0x4c657d = _0x282cfb["structureHint"] ? "\nรูปแบบ " + _0x218668 + ": " + _0x282cfb["structureHint"] : "", _0x1efd0d = _0x2784f5["index"] === 0 && _0x282cfb["openingSpeech"] ? '\nMUST start with: "' + _0x282cfb["openingSpeech"] + '"' : "", _0xf0894f = _0x2784f5["index"] === 0 && _0x282cfb["openingSpeech"] ? '\nบังคับ: ต้องเปิดด้วยคำว่า "' + _0x282cfb["openingSpeech"] + '"' : "", _0x1a83f8 = _0x282cfb["customSpeech"] ? '\nMUST include this phrase: "' + _0x282cfb["customSpeech"] + '"' : "", _0x5167b6 = _0x282cfb["customSpeech"] ? '\nบังคับ: ต้องสอดแทรกคำว่า "' + _0x282cfb["customSpeech"] + '" ในประโยค' : "", _0x4cca43 = _0x5be7 === "en" ? "Video scene " + (_0x2784f5["index"] + 1) + "/" + _0x2784f5["total"] + ", role: " + _0x218668 + ", " + _0x2784f5["durationSec"] + "s duration.\nTopic: " + (_0x282cfb["topic"] || "general") + _0x4eeb08 + _0x330848 + _0x3a4753 + "\nProduct: " + (_0x282cfb["productName"] || "—") + (_0x282cfb["mentionProduct"] ? " (must mention)" : "") + "\nStyle: " + (_0x282cfb["style"] || "—") + ", Mood: " + (_0x282cfb["mood"] || "—") + ", Audience: " + (_0x282cfb["audience"] || "general") + _0x1efd0d + _0x1a83f8 + "\nReturn ONE dialogue line of 20-24 Thai words (minimum 20 words) suited to this scene role — enough to fill 7-8 seconds of natural speech. No punctuation quotes." : "ฉากวิดีโอที่ " + (_0x2784f5["index"] + 1) + "/" + _0x2784f5["total"] + ", role: " + _0x218668 + ", ยาว " + _0x2784f5["durationSec"] + " วินาที\nหัวข้อ: " + (_0x282cfb["topic"] || "ทั่วไป") + _0x4e7f7e + _0x49e9ee + _0x4c657d + "\nสินค้า: " + (_0x282cfb["productName"] || "—") + (_0x282cfb["mentionProduct"] ? " (ต้องพูดถึง)" : "") + "\nสไตล์: " + (_0x282cfb["style"] || "—") + ", โทน: " + (_0x282cfb["mood"] || "—") + ", กลุ่มเป้าหมาย: " + (_0x282cfb["audience"] || "ทั่วไป") + _0xf0894f + _0x5167b6 + "\nตอบเฉพาะบทพูดไทย 1 ประโยค ยาว 20-24 คำ (อย่างน้อย 20 คำ พูดได้ 7-8 วินาที) เหมาะกับ role ของฉากนี้ ห้ามใส่เครื่องหมายคำพูด", _0x4ccc45 = await tryUserAIGenerate(_0x4cca43, _0x251fe7, "Scene Dialogue");
  if (_0x4ccc45["success"] && _0x4ccc45["text"]) {
    const _0x5c8c2d = _0x4ccc45["text"]["trim"]()["replace"](/^["'«»]+|["'«»]+$/g, "")["trim"]();
    return log$5["info"]("User AI dialogue (" + _0x5c8c2d["length"] + " chars)"), _0x5c8c2d;
  }
  return null;
}
function buildFallbackDialogue(_0x247b3d) {
  const { scene: _0x5225ec, context: _0x4515fe } = _0x247b3d, _0x38cbc0 = _0x5225ec["index"] === 0, _0xabcc47 = _0x5225ec["index"] === _0x5225ec["total"] - 1, _0x9ecb12 = _0x4515fe["topic"] || "เรื่องนี้", _0x2fcb40 = _0x4515fe["productName"], _0x10eeb5 = _0x4515fe["mentionProduct"] && _0x2fcb40;
  if (_0x4515fe["language"] === "en") {
    if (_0x38cbc0) return "Did you know about " + _0x9ecb12 + "? Let me tell you...";
    if (_0xabcc47) {
      if (_0x10eeb5) return _0x2fcb40 + " — available now, DM to order.";
      return "Follow for more like this.";
    }
    return "Let's continue about " + _0x9ecb12 + ".";
  }
  if (_0x38cbc0) return "รู้หรือเปล่าเรื่อง " + _0x9ecb12 + " ฟังทางนี้";
  if (_0xabcc47) {
    if (_0x10eeb5) return _0x2fcb40 + " พร้อมส่ง สนใจทักแชทได้เลย";
    return "กดติดตามไว้ รอดูตอนต่อไปนะ";
  }
  return "มาต่อกันเรื่อง " + _0x9ecb12;
}
function formatSceneImagePrompt(_0x1f5872, _0x14dd7c, _0x154f5f, _0x1e5331 = {}) {
  const _0x29df4a = _0x1f5872["scenes"][_0x14dd7c];
  if (!_0x29df4a) return "";
  const { noTextOverlay: _0x2eee4d, cover: _0x1b4039, disclaimer: _0x2f81b6, totalScenes: _0x2d508d } = _0x1e5331, _0x40ca26 = _0x14dd7c === 0, _0x1d89ee = _0x2d508d != null ? _0x14dd7c === _0x2d508d - 1 : ![], _0x51f245 = [], _0x42a76d = (_0x5ee4d5) => _0x5ee4d5["trim"]()["replace"](/[.,!?;:]+$/, ""), _0x46543f = _0x42a76d(_0x29df4a["sceneImageDesc"]), _0x491d3c = _0x42a76d(_0x29df4a["backgroundDesc"]);
  _0x51f245["push"](_0x154f5f + ". " + _0x46543f + ". Background: " + _0x491d3c + ". Medium close-up shot, subject fills the frame. Single frame, not a collage, not a storyboard, not multiple panels.");
  _0x1e5331["productsInScene"] && _0x1e5331["productsInScene"]["length"] > 0 && _0x51f245["push"]("Include these products visibly in the scene: " + _0x1e5331["productsInScene"]["join"](", ") + ".");
  _0x40ca26 && (_0x1b4039 == null ? void 0 : _0x1b4039["text"]) && _0x51f245["push"]('Include a text overlay on the image that reads: "' + _0x1b4039["text"] + '". Position: ' + _0x1b4039["position"] + ". Color: " + _0x1b4039["color"] + ".");
  if (_0x2eee4d) _0x51f245["push"]("No text, labels, overlays, or speech bubbles on this image.");
  else !_0x40ca26 && _0x51f245["push"]("No headline text, no speech bubbles. Scene-decorative text like shop signs or labels is OK.");
  if (_0x1d89ee && _0x2f81b6) {
    const _0x2318e8 = _0x2f81b6["text"] || "ผลลัพธ์อาจแตกต่างกัน";
    _0x51f245["push"]("Include a small disclaimer text at " + _0x2f81b6["position"] + ': "' + _0x2318e8 + '"');
  }
  const _0x4a4a6b = _0x1f5872["characters"]["map"]((_0x3bdbfc) => _0x3bdbfc["name"] + ": " + _0x3bdbfc["description"])["join"]("; ");
  return _0x4a4a6b && _0x51f245["push"]("\n[Character Reference: " + _0x4a4a6b + "]"), _0x51f245["join"](" ");
}
function formatSceneVideoPrompt(_0x40696b, _0xf98d81, _0x39c013, _0x18b16b, _0x4107e1 = {}) {
  const _0x1c1749 = _0x40696b["scenes"][_0xf98d81];
  if (!_0x1c1749) return "";
  const _0x42dede = sanitizeDialogue(_0x1c1749["dialogue"]), _0x4e4fe = _0x4107e1["voiceMode"] === "voiceover", _0x3030d5 = [];
  return _0x3030d5["push"](_0x1c1749["videoAction"] + "."), _0xf98d81 > 0 && _0x3030d5["push"]("Continue with same character appearance from the previous scene."), _0x4e4fe ? _0x3030d5["push"]("Narrator voiceover: " + _0x39c013 + ", consistent " + _0x18b16b + " voice throughout. Character lips remain natural and idle (off-screen narrator).") : _0x3030d5["push"]("Voice: " + _0x39c013 + ", consistent " + _0x18b16b + " voice throughout the entire clip, lip movement synced to audio. Maintain the same voice gender throughout."), _0x3030d5["push"]("Animation limited to characters already present in the reference image; preserve their original appearance."), _0x3030d5["push"]("Audio-only dialogue, no on-screen text or speech bubbles."), _0x3030d5["push"]("Stable anatomy: five fingers per hand, consistent body proportions."), _0x3030d5["push"](_0x4e4fe ? 'Narration in Thai: "' + _0x42dede + '"' : 'Speech in Thai: "' + _0x42dede + '"'), _0x3030d5["join"](" ");
}
function sanitizeDialogue(_0x4d1430) {
  return _0x4d1430["replace"](/[\u200B-\u200F\uFEFF]/g, "")["replace"](/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")["replace"](/[“”„‟«»]/g, "")["replace"](/[‘’‚‛]/g, "'")["replace"](/…/g, "...")["replace"](/[—–]/g, "-")["replace"](/([฀-๿])\s*[?？]\s*$/u, "$1 ไหม")["replace"](/([฀-๿])\s*[!！]\s*$/u, "$1 เลย")["replace"](/[?？!！]/g, " ")["replace"](/\s+/g, " ")["trim"]();
}
const log$4 = createLogger("StoryBlueprint"), API_URL = "https://www.autogention.com/api/story/instructions", EXTENSION_TOKEN = "agx_ext_2026_9Km2Vp4Rq7Ts1W", CACHE_KEY = "agx_story_instructions_cache", CACHE_TTL_MS = 24 * 60 * 60 * 1e3, SPLIT_THRESHOLD = 5;
async function prepareStoryBlueprint(_0x2b1d79) {
  let _0x3d1279;
  try {
    const _0x4e8abd = await generateStoryBlueprint(_0x2b1d79);
    if (!_0x4e8abd) return { "ok": ![], "phase": "blueprint", "error": "AI ไม่ตอบกลับ — เช็ค API key (Settings → AI Provider) หรือเชื่อมต่ออินเทอร์เน็ต" };
    _0x3d1279 = _0x4e8abd;
  } catch (_0x1fb0e2) {
    return { "ok": ![], "phase": "blueprint", "error": translateAIError(_0x1fb0e2 instanceof Error ? _0x1fb0e2["message"] : String(_0x1fb0e2)) };
  }
  const _0x9863ff = _0x2b1d79["layout"]["sceneCount"], _0x31bcb1 = _0x2b1d79["realisticMode"] ? IMAGE_STYLE_PREFIX_EN["realistic"] : IMAGE_STYLE_PREFIX_EN[_0x2b1d79["style"]["image"]] || "Cinematic photography style", _0x2d063d = _0x2b1d79["layout"]["aspectRatio"] === "9:16" ? "portrait 9:16" : _0x2b1d79["layout"]["aspectRatio"] === "16:9" ? "landscape 16:9" : "", _0x322b6f = _0x2d063d ? _0x31bcb1["replace"](/\bstyle\b/, _0x2d063d + " style") : _0x31bcb1, _0x2a050e = _0x2b1d79["products"]["filter"]((_0x35c80a) => _0x35c80a["inScenes"] && _0x35c80a["name"])["map"]((_0x1a60b5) => _0x1a60b5["name"]), _0x57ee53 = { "noTextOverlay": _0x2b1d79["noTextOverlay"], "cover": _0x2b1d79["cover"], "disclaimer": _0x2b1d79["disclaimer"], "totalScenes": _0x9863ff, "productsInScene": _0x2a050e }, _0x420528 = _0x2b1d79["voice"]["voice"], _0x55346b = VOICE_DESCRIPTIONS[_0x420528] || VOICE_DESCRIPTIONS["teen_female"], _0x387d2e = { "voiceMode": _0x2b1d79["voice"]["mode"], "totalScenes": _0x9863ff }, _0x297ef7 = [];
  for (let _0x126aba = 0; _0x126aba < _0x9863ff; _0x126aba++) {
    try {
      const _0x49f713 = formatSceneImagePrompt(_0x3d1279, _0x126aba, _0x322b6f, _0x57ee53), _0x47273b = formatSceneVideoPrompt(_0x3d1279, _0x126aba, _0x55346b["desc"], _0x55346b["gender"], _0x387d2e);
      _0x297ef7["push"]({ "imagePrompt": _0x49f713, "videoPrompt": _0x47273b });
    } catch (_0x16f391) {
      return { "ok": ![], "phase": "format", "error": "Scene " + (_0x126aba + 1) + ": " + (_0x16f391 instanceof Error ? _0x16f391["message"] : String(_0x16f391)) };
    }
  }
  return { "ok": !![], "blueprint": _0x3d1279, "scenes": _0x297ef7 };
}
async function generateStoryBlueprint(_0x2c9bfc) {
  log$4["info"]("Generating story blueprint...");
  let _0x50a1b0 = await fetchInstructionsWithCache(_0x2c9bfc);
  !_0x50a1b0 && (log$4["warn"]("Central API unreachable — using local fallback meta-prompt"), _0x50a1b0 = LOCAL_FALLBACK_INSTRUCTIONS);
  const _0x44db86 = _0x2c9bfc["layout"]["sceneCount"];
  if (_0x44db86 > SPLIT_THRESHOLD) return generateSplitBlueprint(_0x2c9bfc, _0x50a1b0, _0x44db86);
  const _0x2317fa = fillTemplate(_0x50a1b0["userPromptTemplate"], _0x2c9bfc), _0x383671 = await callUserAIForBlueprint(_0x50a1b0["systemPrompt"], _0x2317fa, _0x44db86);
  if (!_0x383671) return log$4["warn"]("User AI unavailable — runner will use Thai director-style fallback"), null;
  return log$4["info"]("Blueprint ready: " + _0x383671["characters"]["length"] + " chars, " + _0x383671["scenes"]["length"] + " scenes"), _0x383671;
}
async function generateSplitBlueprint(_0x393ff3, _0x4921d2, _0x39d48) {
  const _0x182d6e = Math["ceil"](_0x39d48 / 2);
  log$4["info"]("Split blueprint: part1=" + _0x182d6e + " scenes, part2=" + (_0x39d48 - _0x182d6e) + " scenes");
  const _0x551c21 = { ..._0x393ff3, "layout": { ..._0x393ff3["layout"], "sceneCount": _0x182d6e } }, _0x1987e3 = fillTemplate(_0x4921d2["userPromptTemplate"], _0x551c21) + ("\n\nNOTE: This is PART 1 of a " + _0x39d48 + "-scene story. Generate scenes 0–" + (_0x182d6e - 1) + " only. Last scene here is NOT the CTA — the story continues in part 2.");
  log$4["info"]("Calling AI for blueprint part 1...");
  const _0x5530fe = await callUserAIForBlueprint(_0x4921d2["systemPrompt"], _0x1987e3, _0x182d6e);
  if (!_0x5530fe) {
    log$4["warn"]("Part 1 blueprint failed — falling back to single call");
    const _0x56f39c = await callUserAIForBlueprint(_0x4921d2["systemPrompt"], fillTemplate(_0x4921d2["userPromptTemplate"], _0x393ff3), _0x39d48);
    return _0x56f39c;
  }
  const _0x298fdd = _0x5530fe["characters"]["map"]((_0x1da05f) => "- " + _0x1da05f["name"] + ": " + _0x1da05f["description"])["join"]("\n"), _0x566036 = _0x5530fe["scenes"]["map"]((_0x48d210) => "Scene " + _0x48d210["index"] + ": " + _0x48d210["dialogue"]["slice"](0, 60))["join"](" | "), _0x45ad6d = { ..._0x393ff3, "layout": { ..._0x393ff3["layout"], "sceneCount": _0x39d48 - _0x182d6e }, "characters": _0x5530fe["characters"]["map"]((_0x1b0603) => ({ "name": _0x1b0603["name"], "description": _0x1b0603["description"], "voice": "", "gender": "other" })) }, _0x4d13c7 = fillTemplate(_0x4921d2["userPromptTemplate"], _0x45ad6d) + ("\n\nNOTE: This is PART 2 of a " + _0x39d48 + "-scene story. Generate scenes " + _0x182d6e + "–" + (_0x39d48 - 1) + " only. Scene " + (_0x39d48 - 1) + " is the CTA (last scene). Use EXACTLY these characters (already established in part 1):\n" + _0x298fdd + "\nStory so far: " + _0x566036);
  log$4["info"]("Calling AI for blueprint part 2...");
  const _0x238137 = await callUserAIForBlueprint(_0x4921d2["systemPrompt"], _0x4d13c7, _0x39d48 - _0x182d6e);
  if (!_0x238137) return log$4["warn"]("Part 2 blueprint failed — using part 1 only (scenes will repeat)"), _0x5530fe;
  const _0x531dc4 = [..._0x5530fe["scenes"], ..._0x238137["scenes"]["map"]((_0x5b65b4, _0x4ce38a) => ({ ..._0x5b65b4, "index": _0x182d6e + _0x4ce38a }))], _0xe6408 = { "characters": _0x5530fe["characters"], "scenes": _0x531dc4 };
  return log$4["info"]("Split blueprint merged: " + _0xe6408["characters"]["length"] + " chars, " + _0xe6408["scenes"]["length"] + "/" + _0x39d48 + " scenes"), _0xe6408;
}
async function fetchInstructionsWithCache(_0x1b5516) {
  try {
    const _0x4cb316 = await chrome["storage"]["local"]["get"]([CACHE_KEY]), _0x3972df = _0x4cb316[CACHE_KEY];
    if (_0x3972df && Date["now"]() - _0x3972df["cachedAt"] < CACHE_TTL_MS) return log$4["info"]("Using cached story instructions"), _0x3972df["instructions"];
  } catch {
  }
  try {
    const _0x2dd3e0 = await chrome["storage"]["local"]["get"](["licenseKey"]), _0x3c9eb0 = _0x2dd3e0["licenseKey"] || "", _0x14f14c = await getDeviceId();
    log$4["info"]("Fetching story instructions from central API...");
    const _0x6732f6 = await fetch(API_URL, { "method": "POST", "headers": { "Content-Type": "application/json", "X-Extension-Token": EXTENSION_TOKEN }, "body": JSON["stringify"]({ "key": _0x3c9eb0, "deviceId": _0x14f14c, "scope": "story", "sceneCount": _0x1b5516["layout"]["sceneCount"], "language": _0x1b5516["voice"]["language"], "storyType": _0x1b5516["storyType"] }) }), _0x3fe263 = _0x6732f6["headers"]["get"]("content-type") || "";
    if (!_0x3fe263["includes"]("application/json")) throw new Error("non-JSON response (" + _0x6732f6["status"] + ")");
    const _0xf236c9 = await _0x6732f6["json"]();
    if (!_0xf236c9["success"] || !_0xf236c9["systemPrompt"] || !_0xf236c9["userPromptTemplate"]) throw new Error(_0xf236c9["error"] || "API returned invalid instructions");
    const _0x42428e = { "systemPrompt": _0xf236c9["systemPrompt"], "userPromptTemplate": _0xf236c9["userPromptTemplate"], "version": _0xf236c9["version"] };
    return await chrome["storage"]["local"]["set"]({ [CACHE_KEY]: { "cachedAt": Date["now"](), "instructions": _0x42428e } })["catch"](() => {
    }), log$4["info"]("Instructions fetched (version: " + (_0x42428e["version"] || "n/a") + ")"), _0x42428e;
  } catch (_0x474059) {
    return log$4["warn"]("Failed to fetch instructions: " + _0x474059), null;
  }
}
const LOCAL_FALLBACK_INSTRUCTIONS = { "systemPrompt": ["You are a short-video script designer. Output STRICT JSON only (no markdown, no prose).", "Design a short story for a video production pipeline. Each scene lasts 8 seconds.", "", "CHARACTER RULES:", "- If the user provides character specifications, use EXACTLY those names and visual descriptions. Do NOT rename or alter them.", '- If no characters are provided, invent 2-4 with FICTIONAL or ANTHROPOMORPHIZED names (e.g. "Broccoli Bob", "Wise Owl"). Never use real-sounding proper names.', "- character.description must be PURE VISUAL (physical appearance, clothing, color). Do NOT include emotional state or personality — those belong in the per-scene description.", "", "SCENE IMAGE RULES (sceneImageDesc):", '- Use PORTRAIT/DESCRIPTOR format: "CharacterName - visual appearance, pose, expression". Do NOT use narrative "CharacterName is doing X" sentences.', "- Only include characters that are VISIBLE in this frame. Do not mention absent characters.", "- Keep it one static frame — describe what the viewer sees in that moment, not a sequence.", "- Always assume MEDIUM CLOSE-UP framing (subject fills the frame, face and upper body visible). Do NOT describe wide shots or characters in a large environment.", '- Example good: "Broccoli Bob - standing defiantly with small fists raised, cape flowing, determined expression. Fatty Blob - pressing in from behind, angry."', '- Example bad: "Broccoli Bob is fighting Fatty Blob while flying through the stomach."', "", "VIDEO ACTION RULES (videoAction):", '- English action line ready for a video model. Short (≤20 words). End with "talking, <camera hint>".', '- Example: "Broccoli Bob stands defiantly, talking, camera focuses on him".', "", "DIALOGUE RULES:", "- Thai only, one natural sentence per scene, 20-24 words (minimum 20 words). Flow naturally across scenes as one narrative. Write enough words to fill 7-8 seconds of speech.", "", "Respond ONLY with the JSON. No markdown fences."]["join"]("\n"), "userPromptTemplate": `Design a {{sceneCount}}-scene Thai short-video story about: "{{topic}}".
{{#details}}Additional notes: {{details}}
{{/details}}Genre: {{storyType}}. Mood: {{mood}}. Target audience: {{audience}}. Visual style: {{style}}.
{{#characters}}Use EXACTLY these characters (do not rename or alter their appearance):
{{characters}}
{{/characters}}{{#structureHint}}Story structure guidance: {{structureHint}}
{{/structureHint}}{{#openingSpeech}}MANDATORY OPENING (scene 0 dialogue MUST start with this exact phrase): "{{openingSpeech}}"
{{/openingSpeech}}{{#customSpeech}}MANDATORY PHRASE (must appear verbatim in at least one scene's dialogue): "{{customSpeech}}"
{{/customSpeech}}{{#coverText}}NOTE: scene 0 will have a cover-text overlay reading "{{coverText}}". Frame the scene composition so this text has clear space at the top or center.
{{/coverText}}{{#disclaimerText}}NOTE: the LAST scene will have a disclaimer text "{{disclaimerText}}" overlaid at a corner. Leave that area uncluttered.
{{/disclaimerText}}Story arc: hook → body × (sceneCount-2) → cta.

Output JSON with this exact shape:
{
  "characters": [
    { "name": "CharacterName", "description": "Pure visual description (appearance, clothing, colors). No emotions or personality here." }
  ],
  "scenes": [
    {
      "index": 0,
      "role": "hook",
      "sceneImageDesc": "CharacterName - pose and expression in this frame (descriptor format, no narrative verbs like 'is looking', 'is doing')",
      "backgroundDesc": "English environment description",
      "videoAction": "CharacterName pose, talking, camera hint (≤20 words)",
      "dialogue": "Thai dialogue 20-24 words (minimum 20 words, fill 7-8 seconds of speech)",
      "activeCharacters": ["CharacterName"]
    }
  ]
}

Rules: exactly {{sceneCount}} scenes. First role = "hook", last = "cta", middle = "body". Output JSON only.` };
function fillTemplate(_0x328da8, _0x419fe7) {
  var _a2, _b2;
  const _0x1c1a3d = _0x419fe7["style"]["mood"] || "", _0x1a4edf = _0x419fe7["style"]["audience"] || "", _0x36b215 = _0x419fe7["style"]["image"] || "", _0x816558 = MOOD_TH[_0x1c1a3d] || _0x1c1a3d, _0x573db4 = AUDIENCE_TH[_0x1a4edf] || _0x1a4edf, _0x3a9952 = IMAGE_STYLE_TH[_0x36b215] || _0x36b215, _0x80158b = _0x419fe7, _0xac3e95 = { "topic": _0x419fe7["topic"] || "", "details": _0x419fe7["details"] || "", "storyType": _0x419fe7["storyType"] || "general", "mood": _0x816558, "moodKey": _0x1c1a3d, "audience": _0x573db4, "audienceKey": _0x1a4edf, "style": _0x3a9952, "styleKey": _0x36b215, "sceneCount": String(_0x419fe7["layout"]["sceneCount"]), "language": _0x419fe7["voice"]["language"] || "th", "voice": _0x419fe7["voice"]["voice"] || "teen_female", "customSpeech": _0x80158b["customSpeech"] || "", "openingSpeech": _0x80158b["openingSpeech"] || "", "coverText": ((_a2 = _0x419fe7["cover"]) == null ? void 0 : _a2["text"]) || "", "disclaimerText": ((_b2 = _0x419fe7["disclaimer"]) == null ? void 0 : _b2["text"]) || "" }, _0x2d0a57 = (_0x419fe7["characters"] || [])["filter"]((_0x3e5487) => _0x3e5487["name"] || _0x3e5487["description"]);
  _0x2d0a57["length"] > 0 && (_0xac3e95["characters"] = _0x2d0a57["map"]((_0x1cea00) => {
    const _0x1980fa = _0x1cea00;
    return "- " + (_0x1980fa["name"] || "Character") + ": " + (_0x1980fa["description"] || "");
  })["join"]("\n"));
  if (_0x419fe7["structure"]) {
    const _0x423911 = _0x419fe7["structure"];
    if ("hook" in _0x423911) {
      const _0x25ae6d = [];
      if (_0x423911["hook"]) _0x25ae6d["push"]("Hook style: " + _0x423911["hook"]);
      if (_0x423911["body"]) _0x25ae6d["push"]("Body style: " + _0x423911["body"]);
      if (_0x423911["cta"]) _0x25ae6d["push"]("CTA style: " + _0x423911["cta"]);
      _0xac3e95["structureHint"] = _0x25ae6d["join"](", ");
    } else "setup" in _0x423911 && (_0xac3e95["structureHint"] = "Drama arc — Setup: " + _0x423911["setup"] + ", Conflict: " + _0x423911["conflict"] + ", Turning: " + _0x423911["turning"] + ", Moral: " + _0x423911["moral"]);
  }
  let _0x5cb76b = _0x328da8;
  return _0x5cb76b = _0x5cb76b["replace"](/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (_0x1720c3, _0x450c82, _0x5de67e) => _0xac3e95[_0x450c82] ? _0x5de67e : ""), _0x5cb76b = _0x5cb76b["replace"](/\{\{(\w+)\}\}/g, (_0x12f037, _0x400bec) => _0xac3e95[_0x400bec] ?? ""), _0x5cb76b;
}
async function callUserAIForBlueprint(_0x38b6f7, _0x2ce756, _0x184975) {
  let _0x574bad = await tryUserAIGenerate(_0x2ce756, _0x38b6f7, "Story Blueprint"), _0x1a18fe = _0x574bad["success"] && _0x574bad["text"] ? tryParseBlueprint(_0x574bad["text"], _0x184975) : null;
  if (_0x1a18fe) return _0x1a18fe;
  if (_0x574bad["success"]) {
    log$4["warn"]("First response did not parse; retrying with stricter instruction");
    const _0x279895 = _0x2ce756 + "\n\nIMPORTANT: Output STRICT JSON only. No markdown. No prose. No code fences.";
    _0x574bad = await tryUserAIGenerate(_0x279895, _0x38b6f7, "Story Retry"), _0x1a18fe = _0x574bad["success"] && _0x574bad["text"] ? tryParseBlueprint(_0x574bad["text"], _0x184975) : null;
    if (_0x1a18fe) return _0x1a18fe;
  }
  return null;
}
function tryParseBlueprint(_0x576dc6, _0x5c0c12) {
  try {
    const _0x4f4500 = _0x576dc6["replace"](/```json\s*/gi, "")["replace"](/```\s*$/g, "")["replace"](/^```/g, "")["trim"](), _0xd63d0c = JSON["parse"](_0x4f4500);
    if (!_0xd63d0c || typeof _0xd63d0c !== "object") return null;
    if (!Array["isArray"](_0xd63d0c["characters"]) || !Array["isArray"](_0xd63d0c["scenes"])) return null;
    if (_0xd63d0c["scenes"]["length"] === 0) return null;
    const _0x2a762e = _0xd63d0c["scenes"]["slice"](0, _0x5c0c12)["map"]((_0x1ff2cb, _0x11fd22) => ({ "index": _0x11fd22, "role": _0x1ff2cb["role"] || inferRole(_0x11fd22, _0x5c0c12), "sceneImageDesc": String(_0x1ff2cb["sceneImageDesc"] || ""), "backgroundDesc": String(_0x1ff2cb["backgroundDesc"] || ""), "videoAction": String(_0x1ff2cb["videoAction"] || ""), "dialogue": String(_0x1ff2cb["dialogue"] || ""), "activeCharacters": Array["isArray"](_0x1ff2cb["activeCharacters"]) ? _0x1ff2cb["activeCharacters"]["map"](String) : [] })), _0x159bbd = _0xd63d0c["characters"]["map"]((_0x4faf81) => ({ "name": String(_0x4faf81["name"] || ""), "description": String(_0x4faf81["description"] || "") }))["filter"]((_0x29ef80) => _0x29ef80["name"]);
    if (_0x159bbd["length"] === 0 || _0x2a762e["length"] === 0) return null;
    return { "characters": _0x159bbd, "scenes": _0x2a762e };
  } catch (_0x22e725) {
    return log$4["warn"]("JSON parse failed: " + _0x22e725), null;
  }
}
function inferRole(_0xbe98e2, _0x56e4c5) {
  if (_0xbe98e2 === 0) return "hook";
  if (_0xbe98e2 === _0x56e4c5 - 1) return "cta";
  return "body";
}
const storyBlueprintService = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateStoryBlueprint,
  prepareStoryBlueprint
}, Symbol.toStringTag, { value: "Module" }));
function sceneRole(_0x2d00ee, _0x12a137, _0x477472) {
  if (_0x2d00ee === 0) return _0x477472 ? "setup" : "hook";
  if (_0x2d00ee === _0x12a137 - 1) return _0x477472 ? "moral" : "cta";
  if (_0x477472) return _0x2d00ee < _0x12a137 / 2 ? "conflict" : "turning";
  return "body";
}
function describeStructureForRole(_0xcd470a, _0x5c1467) {
  if (!_0xcd470a) return void 0;
  const _0x2cca9b = _0xcd470a, _0x5b9006 = { "question": "เปิดด้วยคำถามชวนคิด", "crisis": "เปิดด้วยปัญหา/วิกฤต", "shocking_fact": "เปิดด้วยข้อเท็จจริงน่าตกใจ", "action": "เปิดด้วยฉากแอคชั่นเร้าใจ", "mystery": "เปิดด้วยปริศนาชวนสงสัย" }, _0x1bd99d = { "intense": "เนื้อเรื่องดุดัน สู้ปัญหา", "comedy": "เนื้อเรื่องตลก กวนตีน", "emotional": "เนื้อเรื่องดราม่า อารมณ์สูง", "educational": "เนื้อเรื่องสอนความรู้", "adventure": "เนื้อเรื่องผจญภัย ลุ้นระทึก" }, _0x2c46e0 = { "sweet": "จบหวานๆ ชวนติดตาม", "twist": "จบหักมุมเซอร์ไพรส์", "troll": "จบกวนตีน แซวคนดู", "moral": "จบให้ข้อคิด", "cliffhanger": "จบลุ้น cliffhanger" };
  if (_0x5c1467 === "hook" && typeof _0x2cca9b["hook"] === "string") return _0x5b9006[_0x2cca9b["hook"]];
  if (_0x5c1467 === "body" && typeof _0x2cca9b["body"] === "string") return _0x1bd99d[_0x2cca9b["body"]];
  if (_0x5c1467 === "cta" && typeof _0x2cca9b["cta"] === "string") return _0x2c46e0[_0x2cca9b["cta"]];
  if (_0x5c1467 === "setup" && typeof _0x2cca9b["setup"] === "string") return "setup: " + _0x2cca9b["setup"];
  if (_0x5c1467 === "conflict" && typeof _0x2cca9b["conflict"] === "string") return "conflict: " + _0x2cca9b["conflict"];
  if (_0x5c1467 === "turning" && typeof _0x2cca9b["turning"] === "string") return "turning point: " + _0x2cca9b["turning"];
  if (_0x5c1467 === "moral" && typeof _0x2cca9b["moral"] === "string") return "moral: " + _0x2cca9b["moral"];
  return void 0;
}
const DEFAULT_STYLE_POOL = ["pixar_3d", "pixar_cheerful", "disney_3d", "anime", "realistic", "cartoon_2d"], DEFAULT_MOOD_POOL = ["tough_love", "funny", "thrilling", "cute", "serious", "energetic"], DEFAULT_AUDIENCE_POOL = ["general", "teens", "working", "housewives"];
function pickRandom$1(_0x30e922, _0x689f8a) {
  if (!_0x30e922 || _0x30e922["length"] === 0) return _0x689f8a;
  return _0x30e922[Math["floor"](Math["random"]() * _0x30e922["length"])];
}
function jitterSleepSec(_0x4b496e, _0x400405, _0x3f0314) {
  const _0x110cc5 = (_0x4b496e + Math["random"]() * (_0x400405 - _0x4b496e)) * 1e3;
  return new Promise((_0xbfc676) => {
    const _0x38ef02 = 200;
    let _0x45efac = 0;
    const _0x14c2b9 = () => {
      if ((_0x3f0314 == null ? void 0 : _0x3f0314()) || _0x45efac >= _0x110cc5) {
        _0xbfc676();
        return;
      }
      _0x45efac += _0x38ef02, setTimeout(_0x14c2b9, Math["min"](_0x38ef02, _0x110cc5 - _0x45efac + _0x38ef02));
    };
    _0x14c2b9();
  });
}
function applyRandomization(_0x226e0a) {
  var _a2, _b2, _c;
  const _0x444eab = _0x226e0a["style"]["random"], _0x5f1bfa = _0x444eab && (_0x444eab["style"] || _0x444eab["mood"] || _0x444eab["audience"]), _0x3bae3b = _0x226e0a["structure"] && _0x226e0a["structure"]["random"];
  if (!_0x5f1bfa && !_0x3bae3b) return _0x226e0a;
  const _0x2ce852 = _0x226e0a["style"]["pools"] || { "style": [], "mood": [], "audience": [] }, _0x54da20 = { ..._0x226e0a, "style": { ..._0x226e0a["style"] } };
  if (_0x444eab == null ? void 0 : _0x444eab["style"]) {
    const _0xa728fc = ((_a2 = _0x2ce852["style"]) == null ? void 0 : _a2["length"]) ? _0x2ce852["style"] : DEFAULT_STYLE_POOL;
    _0x54da20["style"]["image"] = pickRandom$1(_0xa728fc, _0x226e0a["style"]["image"]);
  }
  if (_0x444eab == null ? void 0 : _0x444eab["mood"]) {
    const _0x59d0be = ((_b2 = _0x2ce852["mood"]) == null ? void 0 : _b2["length"]) ? _0x2ce852["mood"] : DEFAULT_MOOD_POOL;
    _0x54da20["style"]["mood"] = pickRandom$1(_0x59d0be, _0x226e0a["style"]["mood"]);
  }
  if (_0x444eab == null ? void 0 : _0x444eab["audience"]) {
    const _0x26d11c = ((_c = _0x2ce852["audience"]) == null ? void 0 : _c["length"]) ? _0x2ce852["audience"] : DEFAULT_AUDIENCE_POOL;
    _0x54da20["style"]["audience"] = pickRandom$1(_0x26d11c, _0x226e0a["style"]["audience"]);
  }
  if (_0x3bae3b && _0x226e0a["structure"]) {
    const _0x2c0439 = _0x226e0a["structure"];
    if ("hook" in _0x2c0439) _0x54da20["structure"] = { "random": !![], "hook": pickRandom$1(STORY_HOOKS["map"]((_0x4c052a) => _0x4c052a["id"])["filter"]((_0x34e653) => _0x34e653 !== "custom"), String(_0x2c0439["hook"])), "body": pickRandom$1(STORY_BODIES["map"]((_0x1764f5) => _0x1764f5["id"])["filter"]((_0x33502e) => _0x33502e !== "custom"), String(_0x2c0439["body"])), "cta": pickRandom$1(STORY_CTAS["map"]((_0x2bb529) => _0x2bb529["id"])["filter"]((_0x309ad9) => _0x309ad9 !== "custom"), String(_0x2c0439["cta"])) };
    else "setup" in _0x2c0439 && (_0x54da20["structure"] = { "random": !![], "setup": pickRandom$1(DRAMA_SETUPS["map"]((_0x814270) => _0x814270["id"])["filter"]((_0x4dbac9) => _0x4dbac9 !== "custom"), String(_0x2c0439["setup"])), "conflict": pickRandom$1(DRAMA_CONFLICTS["map"]((_0x399ee9) => _0x399ee9["id"])["filter"]((_0x2fce52) => _0x2fce52 !== "custom"), String(_0x2c0439["conflict"])), "turning": pickRandom$1(DRAMA_TURNINGS["map"]((_0x504378) => _0x504378["id"])["filter"]((_0x5116d8) => _0x5116d8 !== "custom"), String(_0x2c0439["turning"])), "moral": pickRandom$1(DRAMA_MORALS["map"]((_0x1a9440) => _0x1a9440["id"])["filter"]((_0x186429) => _0x186429 !== "custom"), String(_0x2c0439["moral"])) });
  }
  return _0x54da20;
}
const log$3 = createLogger("CreatorStoryRunner"), STORAGE_KEY = "agx_creator_story_state";
class CreatorStoryRunner {
  constructor() {
    this["stopRequested"] = ![], this["flowTabId"] = null, this["state"] = null, this["blueprint"] = null, this["projectId"] = null;
  }
  async ["start"](_0x15241f, _0x32a3f9, _0x1f6a39 = 1) {
    var _a2;
    this["stopRequested"] = ![], this["flowTabId"] = _0x32a3f9, chrome["tabs"]["sendMessage"](_0x32a3f9, { "type": "FLOW_RESET_STOP" })["catch"](() => {
    });
    const _0x2182cb = _0x15241f["layout"]["sceneCount"], _0x5247f1 = _0x1f6a39 < 0 ? 9999 : Math["max"](1, _0x1f6a39);
    this["state"] = { "id": crypto["randomUUID"](), "loop": 0, "totalLoops": _0x5247f1, "sceneIndex": 0, "totalScenes": _0x2182cb, "startedAt": Date["now"]() }, await this["persist"](), this["broadcast"]("info", "🚀 Creator Story: " + _0x2182cb + " ฉาก × " + _0x5247f1 + " รอบ"), this["broadcast"]("info", "📝 หัวข้อ: " + _0x15241f["topic"]), broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": "creator" });
    if (DEV["TEST_SCENEBUILDER_DOWNLOAD_ONLY"]) {
      this["broadcast"]("warn", "🧪 [TEST_SCENEBUILDER_DOWNLOAD_ONLY] ข้าม upload/blueprint/scene gen — เทสแค่ click Scenebuilder + Download"), await this["captureProjectId"]();
      if (!this["projectId"]) {
        this["broadcast"]("error", "❌ ดึง Project ID ไม่ได้ — ต้องเปิดหน้า /project/{id} ใน Flow ก่อน"), broadcastPipelineEvent("PIPELINE_STATE", { "state": "error", "mode": "creator" }), this["sendDone"](![]);
        return;
      }
      const _0x4c6ffb = await this["sendToTab"]({ "type": "FLOW_OPEN_LATEST_SCENE" });
      if (!(_0x4c6ffb == null ? void 0 : _0x4c6ffb["success"])) {
        this["broadcast"]("error", "❌ เข้าหน้า /scene/ ไม่ได้: " + ((_0x4c6ffb == null ? void 0 : _0x4c6ffb["error"]) || "unknown")), broadcastPipelineEvent("PIPELINE_STATE", { "state": "error", "mode": "creator" }), this["sendDone"](![]);
        return;
      }
      this["broadcast"]("info", "▶ ทดสอบ Download (direct)...");
      const _0x5806bb = await this["sendToTab"]({ "type": "FLOW_DOWNLOAD_SCENE_DIRECT" });
      if (_0x5806bb == null ? void 0 : _0x5806bb["success"]) {
        const _0x1b3c35 = Math["round"]((_0x5806bb["totalMs"] || 0) / 1e3);
        this["broadcast"]("success", "✅ Download สำเร็จ (" + _0x1b3c35 + "s, click " + _0x5806bb["clickAttempts"] + "×)");
      } else this["broadcast"]("error", "❌ Download ล้มเหลว: " + ((_0x5806bb == null ? void 0 : _0x5806bb["error"]) || "unknown"));
      broadcastPipelineEvent("PIPELINE_STATE", { "state": "done", "mode": "creator" }), this["sendDone"]((_0x5806bb == null ? void 0 : _0x5806bb["success"]) ?? ![]);
      return;
    }
    await this["uploadReferences"](_0x15241f), await this["captureProjectId"]();
    if (_0x15241f["preparedScenes"] && _0x15241f["preparedScenes"]["length"] > 0) this["broadcast"]("info", "📝 ใช้ prompt จาก Prepare ที่ user แก้แล้ว (" + _0x15241f["preparedScenes"]["length"] + " ฉาก) — ข้าม Blueprint AI"), this["blueprint"] = null;
    else {
      this["broadcast"]("info", "▶ วาง Blueprint (ตัวละคร + เนื้อเรื่อง)...");
      try {
        this["blueprint"] = await generateStoryBlueprint(_0x15241f);
        if (this["blueprint"]) {
          const _0x44491c = this["blueprint"]["characters"]["map"]((_0xa5c30d) => _0xa5c30d["name"])["join"](", ");
          this["broadcast"]("success", "✅ Blueprint สำเร็จ: " + this["blueprint"]["characters"]["length"] + " ตัวละคร (" + _0x44491c + "), " + this["blueprint"]["scenes"]["length"] + " ฉาก");
          const _0x5d340a = this["blueprint"]["scenes"][0];
          (_0x5d340a == null ? void 0 : _0x5d340a["dialogue"]) && this["broadcast"]("info", '💬 ฉาก 1 dialogue: "' + _0x5d340a["dialogue"]["slice"](0, 60) + (_0x5d340a["dialogue"]["length"] > 60 ? "..." : "") + '"');
        } else this["broadcast"]("warn", "⚠ ไม่มี Blueprint (ไม่มี API key?) — จะใช้ Thai director-style template");
      } catch (_0x5c103c) {
        this["broadcast"]("warn", "⚠ Blueprint ล้มเหลว: " + _0x5c103c + " — ใช้ fallback"), this["blueprint"] = null;
      }
    }
    try {
      for (let _0x21b1b6 = 0; _0x21b1b6 < _0x5247f1; _0x21b1b6++) {
        if (this["stopRequested"]) break;
        this["state"]["loop"] = _0x21b1b6;
        _0x5247f1 > 1 && this["broadcast"]("info", "--- Loop " + (_0x21b1b6 + 1) + "/" + _0x5247f1 + " ---");
        const _0x5a8176 = _0x15241f["layout"]["randomSceneCount"] ? 2 + Math["floor"](Math["random"]() * 9) : _0x2182cb;
        _0x15241f["layout"]["randomSceneCount"] && this["broadcast"]("info", "🎲 สุ่มจำนวนฉาก: " + _0x5a8176 + " ฉาก");
        let _0x2bdb94 = _0x15241f;
        _0x21b1b6 > 0 && !_0x15241f["applyDetailsAllRounds"] && _0x15241f["details"] && (_0x2bdb94 = { ..._0x15241f, "details": "" });
        const _0x5d455f = ((_a2 = _0x15241f["loop"]) == null ? void 0 : _a2["topicsOnly"]) === !![], _0x2a8fee = { ..._0x5d455f ? _0x2bdb94 : applyRandomization(_0x2bdb94), "layout": { ..._0x2bdb94["layout"], "sceneCount": _0x5a8176 } };
        if (!_0x5d455f && _0x2a8fee !== _0x2bdb94) {
          this["broadcast"]("info", "🎲 สุ่ม: style=" + _0x2a8fee["style"]["image"] + ", mood=" + _0x2a8fee["style"]["mood"] + ", audience=" + _0x2a8fee["style"]["audience"]);
          const _0x35c0e9 = _0x2a8fee["structure"];
          if (_0x35c0e9 && _0x35c0e9["random"]) {
            const _0x6d8553 = "hook" in _0x35c0e9 ? "hook=" + _0x35c0e9["hook"] + ", body=" + _0x35c0e9["body"] + ", cta=" + _0x35c0e9["cta"] : "setup=" + _0x35c0e9["setup"] + ", conflict=" + _0x35c0e9["conflict"];
            this["broadcast"]("info", "🎲 สุ่ม structure: " + _0x6d8553);
          }
        }
        this["state"]["totalScenes"] = _0x5a8176;
        for (let _0xa6a3d7 = 0; _0xa6a3d7 < _0x5a8176; _0xa6a3d7++) {
          if (this["stopRequested"]) break;
          this["state"]["sceneIndex"] = _0xa6a3d7, await this["persist"](), this["broadcast"]("info", "📦 ฉาก " + (_0xa6a3d7 + 1) + "/" + _0x5a8176);
          const _0x1bf3f0 = await this["runSceneWithRetry"](_0x2a8fee, _0xa6a3d7);
          !_0x1bf3f0 ? this["broadcast"]("error", "❌ ฉาก " + (_0xa6a3d7 + 1) + " ล้มเหลว — ข้ามต่อ") : this["broadcast"]("success", "✅ ฉาก " + (_0xa6a3d7 + 1) + " สำเร็จ");
          this["sendProgress"](_0xa6a3d7 + 1, _0x5a8176, "Loop " + (_0x21b1b6 + 1));
          if (!this["stopRequested"] && _0xa6a3d7 < _0x5a8176 - 1) {
            const _0x196bb5 = 18 + Math["random"]() * 22;
            await this["countdownWait"](_0x196bb5, "⏳ พัก", "วิ ก่อนฉากถัดไป");
          }
        }
        if (!this["stopRequested"]) {
          this["broadcast"]("info", "▶ เข้าหน้า Scene Builder เพื่อ Download...");
          const _0x47f80e = await this["sendToTab"]({ "type": "FLOW_OPEN_LATEST_SCENE" });
          if (!(_0x47f80e == null ? void 0 : _0x47f80e["success"])) this["broadcast"]("warn", "❌ เข้า /scene/ ไม่ได้: " + ((_0x47f80e == null ? void 0 : _0x47f80e["error"]) || "unknown") + " — ข้าม Download");
          else {
            _0x47f80e["skipped"] ? this["broadcast"]("info", "   ⏩ อยู่ /scene/ แล้ว") : this["broadcast"]("info", "   ✓ navigate /scene/ สำเร็จ (tile=" + (_0x47f80e["tileId"] || "")["slice"](0, 18) + "...)");
            this["broadcast"]("info", "▶ กด Download (direct)...");
            const _0x495d6d = await this["sendToTab"]({ "type": "FLOW_DOWNLOAD_SCENE_DIRECT" });
            if (_0x495d6d == null ? void 0 : _0x495d6d["success"]) {
              const _0x212514 = Math["round"]((_0x495d6d["totalMs"] || 0) / 1e3);
              this["broadcast"]("success", "✅ Download สำเร็จ (" + _0x212514 + "s, click " + _0x495d6d["clickAttempts"] + "×)");
            } else this["broadcast"]("warn", "❌ Download ล้มเหลว: " + ((_0x495d6d == null ? void 0 : _0x495d6d["error"]) || "unknown"));
          }
          this["flowTabId"] && chrome["tabs"]["update"](this["flowTabId"], { "url": "https://labs.google/fx/tools/flow" })["catch"](() => {
          });
        }
        if (!this["stopRequested"] && _0x21b1b6 < _0x5247f1 - 1) {
          const _0x4fe931 = 60 + Math["random"]() * 60;
          await this["countdownWait"](_0x4fe931, "⏳ พัก", "วิ ก่อนเริ่มรอบใหม่");
        }
      }
      this["stopRequested"] ? this["broadcast"]("warn", "🛑 Pipeline หยุดโดยผู้ใช้") : this["broadcast"]("success", "🎉 Pipeline เสร็จสมบูรณ์");
    } catch (_0x2ae256) {
      this["broadcast"]("error", "💥 Pipeline error: " + _0x2ae256);
    } finally {
      const _0x16ad39 = this["stopRequested"] ? "stopped" : "done";
      broadcastPipelineEvent("PIPELINE_STATE", { "state": _0x16ad39, "mode": "creator" }), this["sendDone"](!this["stopRequested"]), await chrome["storage"]["local"]["remove"]([STORAGE_KEY])["catch"](() => {
      });
    }
  }
  ["stop"]() {
    this["stopRequested"] = !![], this["flowTabId"] && chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": "FLOW_STOP" })["catch"](() => {
    }), hardKillPipeline("creator", this["flowTabId"]);
  }
  async ["captureProjectId"]() {
    const _0x3c4ad2 = await this["sendToTab"]({ "type": "FLOW_GET_PROJECT_ID" });
    (_0x3c4ad2 == null ? void 0 : _0x3c4ad2["success"]) && _0x3c4ad2["projectId"] ? (this["projectId"] = _0x3c4ad2["projectId"], this["broadcast"]("info", "📌 Project ID: " + this["projectId"]["slice"](0, 8) + "... (locale=" + (_0x3c4ad2["locale"] || "en") + ")")) : this["broadcast"]("warn", "⚠ ไม่สามารถดึง Project ID — URL gate จะถูกข้าม");
  }
  async ["verifyProjectUrl"]() {
    if (!this["projectId"]) return !![];
    const _0x470e14 = await this["sendToTab"]({ "type": "FLOW_VERIFY_PROJECT_URL", "payload": { "projectId": this["projectId"], "mode": "project", "navigate": !![] } });
    if (_0x470e14 == null ? void 0 : _0x470e14["ok"]) return !![];
    if (_0x470e14 == null ? void 0 : _0x470e14["recovered"]) {
      this["broadcast"]("warn", "⚠ URL ผิดหน้า → กลับไป /project/" + this["projectId"]["slice"](0, 8) + "..."), await jitterSleepSec(4, 6, () => this["stopRequested"]);
      const _0x2c2bc9 = await this["sendToTab"]({ "type": "FLOW_VERIFY_PROJECT_URL", "payload": { "projectId": this["projectId"], "mode": "project", "navigate": ![] } });
      return (_0x2c2bc9 == null ? void 0 : _0x2c2bc9["ok"]) === !![];
    }
    return ![];
  }
  async ["ensureSceneBuilderPage"]() {
    if (!this["projectId"]) return !![];
    for (let _0x316862 = 1; _0x316862 <= 3; _0x316862++) {
      const _0x4da637 = await this["sendToTab"]({ "type": "FLOW_VERIFY_PROJECT_URL", "payload": { "projectId": this["projectId"], "mode": "scene", "navigate": ![] } });
      if (_0x4da637 == null ? void 0 : _0x4da637["ok"]) return !![];
      this["broadcast"]("warn", "⚠ ไม่อยู่หน้า /scene/ — กลับ /project/ + คลิก Scenebuilder (" + _0x316862 + "/3)"), await this["sendToTab"]({ "type": "FLOW_VERIFY_PROJECT_URL", "payload": { "projectId": this["projectId"], "mode": "project", "navigate": !![] } }), await jitterSleepSec(4, 6, () => this["stopRequested"]);
      if (this["stopRequested"]) return ![];
      const _0x1ff980 = await this["sendToTab"]({ "type": "FLOW_CLICK_SCENEBUILDER" });
      !(_0x1ff980 == null ? void 0 : _0x1ff980["success"]) && this["broadcast"]("warn", "⚠ ปุ่ม Scenebuilder หาไม่เจอ: " + ((_0x1ff980 == null ? void 0 : _0x1ff980["error"]) || "unknown"));
      await jitterSleepSec(4, 6, () => this["stopRequested"]);
      if (this["stopRequested"]) return ![];
    }
    return this["broadcast"]("error", "❌ เข้าหน้า /scene/ ไม่ได้หลังพยายาม 3 ครั้ง"), ![];
  }
  async ["uploadReferences"](_0x53231d) {
    if (!this["flowTabId"]) return;
    const _0x54d409 = [];
    if (_0x53231d["characters"]) for (const _0x566b80 of _0x53231d["characters"]) {
      const _0x5a3735 = _0x566b80["imageDataUrl"];
      if (_0x5a3735) _0x54d409["push"](_0x5a3735);
    }
    for (const _0x11a687 of _0x53231d["products"]) {
      if (_0x11a687["imageDataUrl"]) _0x54d409["push"](_0x11a687["imageDataUrl"]);
    }
    if (_0x54d409["length"] === 0) {
      this["broadcast"]("info", "📎 ไม่มีรูปอ้างอิง — ใช้ AI สร้างตัวละคร/ฉากเอง");
      return;
    }
    this["broadcast"]("info", "▶ Upload รูปอ้างอิง " + _0x54d409["length"] + " รูป...");
    const _0xb4a215 = await this["sendToTab"]({ "type": "FLOW_UPLOAD_IMAGES", "payload": { "images": _0x54d409 } });
    (_0xb4a215 == null ? void 0 : _0xb4a215["success"]) ? this["broadcast"]("success", "✅ Upload รูปอ้างอิง สำเร็จ") : this["broadcast"]("warn", "⚠ Upload รูปอ้างอิง ล้มเหลว — จะสร้างจากคำบรรยายอย่างเดียว");
  }
  async ["runImagePhase"](_0x4ebf57, _0x5d3755) {
    var _a2, _b2, _c;
    if (!this["flowTabId"]) return { "success": ![] };
    if (!await this["verifyProjectUrl"]()) return this["broadcast"]("error", "❌ ไม่สามารถกลับเข้าหน้า project ก่อนสร้างรูป"), { "success": ![] };
    await this["sendToTab"]({ "type": "FLOW_ENSURE_AGENT_OFF" });
    const _0x1c3af1 = await this["sendToTab"]({ "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "image", "aspectRatio": _0x4ebf57["layout"]["aspectRatio"], "count": 1, "imageModel": (_a2 = _0x4ebf57["models"]) == null ? void 0 : _a2["image"] } });
    if (!(_0x1c3af1 == null ? void 0 : _0x1c3af1["success"])) return { "success": ![] };
    const _0x1d0990 = this["countReferences"](_0x4ebf57);
    if (_0x1d0990 > 0) {
      const _0x54b818 = await this["sendToTab"]({ "type": "FLOW_ATTACH_UPLOADS", "payload": { "count": _0x1d0990 } });
      !(_0x54b818 == null ? void 0 : _0x54b818["success"]) && this["broadcast"]("warn", "⚠ Attach รูปอ้างอิง ล้มเหลว");
    }
    if (_0x5d3755 > 0) {
      const _0x4b193f = await this["sendToTab"]({ "type": "FLOW_ATTACH_LATEST_IMAGE" });
      (_0x4b193f == null ? void 0 : _0x4b193f["success"]) ? this["broadcast"]("info", "📌 ใช้ภาพฉากก่อนหน้าเป็น ref") : this["broadcast"]("warn", "⚠ Attach ภาพฉากก่อนหน้า ล้มเหลว: " + ((_0x4b193f == null ? void 0 : _0x4b193f["error"]) || "unknown"));
    }
    const _0x4f4c5b = _0x4ebf57["products"]["filter"]((_0x1c4d12) => _0x1c4d12["inScenes"] && _0x1c4d12["name"])["map"]((_0x4afcb0) => _0x4afcb0["name"]), _0x244af4 = { "noTextOverlay": _0x4ebf57["noTextOverlay"], "cover": _0x4ebf57["cover"], "disclaimer": _0x4ebf57["disclaimer"], "totalScenes": _0x4ebf57["layout"]["sceneCount"], "productsInScene": _0x4f4c5b }, _0x441e9f = _0x4ebf57["realisticMode"] ? IMAGE_STYLE_PREFIX_EN["realistic"] : IMAGE_STYLE_PREFIX_EN[_0x4ebf57["style"]["image"]] || "Cinematic photography style", _0xb3fd53 = _0x4ebf57["layout"]["aspectRatio"] === "9:16" ? "portrait 9:16" : _0x4ebf57["layout"]["aspectRatio"] === "16:9" ? "landscape 16:9" : "", _0x1d59f9 = _0xb3fd53 ? _0x441e9f["replace"](/\bstyle\b/, _0xb3fd53 + " style") : _0x441e9f, _0x294f75 = (_c = (_b2 = _0x4ebf57["preparedScenes"]) == null ? void 0 : _b2[_0x5d3755]) == null ? void 0 : _c["imagePrompt"], _0x37e3f1 = _0x294f75 ?? (this["blueprint"] ? formatSceneImagePrompt(this["blueprint"], _0x5d3755, _0x1d59f9, _0x244af4) : buildStoryScenePrompt(_0x4ebf57, _0x5d3755)), _0x4d5fe4 = _0x294f75 ? "PREP" : this["blueprint"] ? "BP" : "TH";
    log$3["info"]("Scene " + (_0x5d3755 + 1) + " image prompt [" + _0x4d5fe4 + "]: " + _0x37e3f1["slice"](0, 80) + "...");
    const _0x53db5d = await this["sendToTab"]({ "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x37e3f1 } });
    if (!(_0x53db5d == null ? void 0 : _0x53db5d["success"])) return { "success": ![] };
    await jitterSleepSec(5, 6, () => this["stopRequested"]);
    const _0x1764c4 = await this["sendToTab"]({ "type": "FLOW_GENERATE" });
    if (!(_0x1764c4 == null ? void 0 : _0x1764c4["success"])) return { "success": ![] };
    this["broadcast"]("info", "▶ Generate Image...");
    const _0x8c5b74 = await this["sendToTab"]({ "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (!(_0x8c5b74 == null ? void 0 : _0x8c5b74["success"])) {
      const _0x525209 = translateFlowError(_0x8c5b74 == null ? void 0 : _0x8c5b74["errorText"]);
      return this["broadcast"]("error", "❌ ขั้นตอนการสร้างรูปล้มเหลว เพราะ " + _0x525209), { "success": ![] };
    }
    return this["broadcast"]("success", "✅ Generate Image สำเร็จ"), { "success": !![], "imageUrl": _0x8c5b74["imageUrl"] };
  }
  async ["runVideoPhase"](_0x3fc6e6, _0x4c93c7) {
    var _a2, _b2, _c, _d;
    if (!this["flowTabId"]) return ![];
    if (!await this["verifyProjectUrl"]()) return this["broadcast"]("error", "❌ ไม่สามารถกลับเข้าหน้า project ก่อนสร้าง video"), ![];
    await this["sendToTab"]({ "type": "FLOW_ENSURE_AGENT_OFF" });
    const _0x3763ac = await this["sendToTab"]({ "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x3fc6e6["layout"]["aspectRatio"], "count": 1, "videoModel": (_a2 = _0x3fc6e6["models"]) == null ? void 0 : _a2["video"] } });
    if (!(_0x3763ac == null ? void 0 : _0x3763ac["success"])) return this["broadcast"]("warn", "⚠ สลับเป็น video mode ล้มเหลว"), ![];
    const _0x1c6909 = await this["sendToTab"]({ "type": "FLOW_ATTACH_LATEST_IMAGE" });
    if (!(_0x1c6909 == null ? void 0 : _0x1c6909["success"])) return this["broadcast"]("warn", "⚠ Attach ภาพ ล้มเหลว: " + ((_0x1c6909 == null ? void 0 : _0x1c6909["error"]) || "unknown")), ![];
    let _0x501c8a, _0x1a8f7d;
    ({ "noTextOverlay": _0x3fc6e6["noTextOverlay"], "cover": _0x3fc6e6["cover"], "disclaimer": _0x3fc6e6["disclaimer"], "totalScenes": _0x3fc6e6["layout"]["sceneCount"], "productsInScene": _0x3fc6e6["products"]["filter"]((_0x1d8b26) => _0x1d8b26["inScenes"] && _0x1d8b26["name"])["map"]((_0x5b01a2) => _0x5b01a2["name"]) });
    const _0x4398b0 = (_c = (_b2 = _0x3fc6e6["preparedScenes"]) == null ? void 0 : _b2[_0x4c93c7]) == null ? void 0 : _c["videoPrompt"];
    if (_0x4398b0) {
      _0x501c8a = _0x4398b0;
      const _0x1ea7ce = _0x4398b0["match"](/(?:Speech|Narration) in Thai:\s*"([^"]*)"\s*$/i);
      _0x1a8f7d = (_0x1ea7ce == null ? void 0 : _0x1ea7ce[1]) ?? "";
    } else {
      if (this["blueprint"]) {
        const _0x1a718d = _0x3fc6e6["voice"]["voice"], _0x47b597 = VOICE_DESCRIPTIONS[_0x1a718d] || VOICE_DESCRIPTIONS["teen_female"], _0xe10753 = { "voiceMode": _0x3fc6e6["voice"]["mode"] };
        _0x501c8a = formatSceneVideoPrompt(this["blueprint"], _0x4c93c7, _0x47b597["desc"], _0x47b597["gender"], _0xe10753), _0x1a8f7d = ((_d = this["blueprint"]["scenes"][_0x4c93c7]) == null ? void 0 : _d["dialogue"]) || "";
      } else {
        const _0x168281 = _0x3fc6e6["storyType"] === "drama", _0x16d217 = sceneRole(_0x4c93c7, _0x3fc6e6["layout"]["sceneCount"], _0x168281), _0x350ee4 = _0x3fc6e6["products"]["find"]((_0x4261f3) => _0x4261f3["mention"] && _0x4261f3["name"]), _0x27376e = buildStoryScenePrompt(_0x3fc6e6, _0x4c93c7), _0x4ccf6e = _0x3fc6e6, _0x84f507 = describeStructureForRole(_0x3fc6e6["structure"], _0x16d217), _0x177a61 = await generateSceneDialogue({ "mode": "story", "imageUrl": _0x1c6909["imageUrl"], "scene": { "index": _0x4c93c7, "total": _0x3fc6e6["layout"]["sceneCount"], "role": _0x16d217, "durationSec": 8 }, "context": { "topic": _0x3fc6e6["topic"], "details": _0x3fc6e6["details"], "storyType": _0x3fc6e6["storyType"], "structureHint": _0x84f507, "productName": _0x350ee4 == null ? void 0 : _0x350ee4["name"], "mentionProduct": !!_0x350ee4, "customSpeech": _0x4ccf6e["customSpeech"], "openingSpeech": _0x4ccf6e["openingSpeech"], "style": _0x3fc6e6["style"]["image"], "mood": _0x3fc6e6["style"]["mood"], "audience": _0x3fc6e6["style"]["audience"], "voice": _0x3fc6e6["voice"]["voice"], "language": _0x3fc6e6["voice"]["language"] === "en" ? "en" : "th" } }), _0x4fe4f3 = sanitizeDialogue(_0x177a61), _0x4f13ab = buildVideoScenePrompt(_0x3fc6e6, _0x4c93c7, _0x27376e);
        _0x501c8a = _0x4f13ab + ' บทพูด 8 วินาที: "' + _0x4fe4f3 + '"', _0x1a8f7d = _0x4fe4f3;
      }
    }
    this["broadcast"]("info", "💬 บทพูด: " + _0x1a8f7d["slice"](0, 60) + (_0x1a8f7d["length"] > 60 ? "..." : "")), log$3["info"]("Scene " + (_0x4c93c7 + 1) + " video prompt [" + (this["blueprint"] ? "BP" : "TH") + "]: " + _0x501c8a["slice"](0, 80) + "...");
    const _0x232d6d = await this["sendToTab"]({ "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x501c8a } });
    if (!(_0x232d6d == null ? void 0 : _0x232d6d["success"])) return !![];
    const _0xffe1b2 = await this["sendToTab"]({ "type": "FLOW_GENERATE" });
    if (!(_0xffe1b2 == null ? void 0 : _0xffe1b2["success"])) return !![];
    this["broadcast"]("info", "▶ Generate Video...");
    const _0x2c79f9 = await this["sendToTab"]({ "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (!(_0x2c79f9 == null ? void 0 : _0x2c79f9["success"])) {
      const _0x3fe848 = translateFlowError(_0x2c79f9 == null ? void 0 : _0x2c79f9["errorText"]);
      return this["broadcast"]("error", "❌ ขั้นตอนการสร้างวิดีโอล้มเหลว เพราะ " + _0x3fe848), ![];
    }
    this["broadcast"]("success", "✅ Generate Video สำเร็จ");
    const _0x34ab02 = _0x4c93c7 === 0 ? "create" : "append";
    this["broadcast"]("info", "🎬 เพิ่มคลิปเข้า Scene (mode=" + _0x34ab02 + ")...");
    const _0x330102 = await this["sendToTab"]({ "type": "FLOW_ADD_CLIP_TO_SCENE", "payload": { "sceneMode": _0x34ab02 } });
    if (_0x330102 == null ? void 0 : _0x330102["success"]) {
      const _0x5a8b8d = _0x330102["sawSuccessToast"] ? "" : " (⚠ ไม่เจอ success toast — อาจมีปัญหา)";
      this["broadcast"]("info", '   ✓ เพิ่มเข้า "' + (_0x330102["selectedSceneText"] || "?") + '"' + _0x5a8b8d);
    } else this["broadcast"]("warn", "⚠ เพิ่มคลิปเข้า Scene ล้มเหลว: " + ((_0x330102 == null ? void 0 : _0x330102["error"]) || "unknown"));
    return !![];
  }
  ["countReferences"](_0x339b0e) {
    let _0x3bd135 = 0;
    if (_0x339b0e["characters"]) for (const _0xa9809a of _0x339b0e["characters"]) {
      if (_0xa9809a["imageDataUrl"]) _0x3bd135++;
    }
    for (const _0x37152e of _0x339b0e["products"]) {
      if (_0x37152e["imageDataUrl"]) _0x3bd135++;
    }
    return _0x3bd135;
  }
  async ["sendToTab"](_0x4abd36) {
    if (!this["flowTabId"] || this["stopRequested"]) return null;
    return chrome["tabs"]["sendMessage"](this["flowTabId"], _0x4abd36)["catch"]((_0x338b61) => ({ "success": ![], "error": String(_0x338b61) }));
  }
  async ["runSceneWithRetry"](_0x367f7e, _0x33a656) {
    const _0x1adcb8 = 3;
    for (let _0x401329 = 0; _0x401329 <= _0x1adcb8; _0x401329++) {
      _0x401329 > 0 && (this["broadcast"]("warn", "⚠ Generate Image ล้มเหลว — reload (" + _0x401329 + "/" + _0x1adcb8 + ")"), await this["countdownWait"](180, "⏳ รอ", "วิ ก่อน refresh"), await this["sendToTab"]({ "type": "FLOW_RELOAD" }), await jitterSleepSec(10, 13, () => this["stopRequested"]), this["broadcast"]("info", "🔄 ลองใหม่ Generate Image (" + _0x401329 + "/" + _0x1adcb8 + ")..."));
      const _0x7f8a5 = await this["runImagePhase"](_0x367f7e, _0x33a656);
      if (_0x7f8a5["success"]) break;
      if (this["stopRequested"]) return ![];
      if (_0x401329 === _0x1adcb8) return this["broadcast"]("error", "💥 Generate Image ล้มเหลวครบ " + _0x1adcb8 + " ครั้ง — หยุดการทำงาน"), this["stopRequested"] = !![], ![];
    }
    for (let _0x3ed548 = 0; _0x3ed548 <= _0x1adcb8; _0x3ed548++) {
      _0x3ed548 > 0 && (this["broadcast"]("warn", "⚠ Generate Video ล้มเหลว — reload (" + _0x3ed548 + "/" + _0x1adcb8 + ")"), await this["countdownWait"](180, "⏳ รอ", "วิ ก่อน refresh"), await this["sendToTab"]({ "type": "FLOW_RELOAD" }), await jitterSleepSec(10, 13, () => this["stopRequested"]), this["broadcast"]("info", "🔄 ลองใหม่ Generate Video (" + _0x3ed548 + "/" + _0x1adcb8 + ")..."));
      const _0x300256 = await this["runVideoPhase"](_0x367f7e, _0x33a656);
      if (_0x300256) return !![];
      if (this["stopRequested"]) return ![];
      if (_0x3ed548 === _0x1adcb8) return this["broadcast"]("error", "💥 Generate Video ล้มเหลวครบ " + _0x1adcb8 + " ครั้ง — หยุดการทำงาน"), this["stopRequested"] = !![], ![];
    }
    return ![];
  }
  async ["countdownWait"](_0x4e14c5, _0x840f60, _0x2afd27) {
    const _0x5b946e = _0x4e14c5 * 1e3, _0x573733 = Date["now"]();
    let _0x30225e = !![];
    while (!this["stopRequested"]) {
      const _0x140b0d = Date["now"]() - _0x573733, _0x272f63 = Math["max"](0, Math["ceil"]((_0x5b946e - _0x140b0d) / 1e3)), _0x45bb29 = _0x840f60 + " " + _0x272f63 + _0x2afd27;
      broadcastPipelineEvent("PIPELINE_LOG", { "level": "info", "message": _0x45bb29, "replace": !_0x30225e }), broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x272f63, "total": _0x4e14c5, "label": "" + _0x840f60 + _0x2afd27 }), _0x30225e = ![];
      if (_0x140b0d >= _0x5b946e) break;
      await new Promise((_0x1d4af4) => setTimeout(_0x1d4af4, 2e3));
    }
    broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x4e14c5, "label": "" + _0x840f60 + _0x2afd27 });
  }
  ["broadcast"](_0x2a85e6, _0x27aad1) {
    log$3["info"]("[Creator] " + _0x27aad1), broadcastPipelineEvent("PIPELINE_LOG", { "level": _0x2a85e6, "message": _0x27aad1 });
  }
  ["sendProgress"](_0x571319, _0x5a4112, _0x5d77cf) {
    broadcastPipelineEvent("PIPELINE_PROGRESS", { "current": _0x571319, "total": _0x5a4112, "step": _0x5d77cf });
  }
  ["sendDone"](_0x5a0a84) {
    broadcastPipelineEvent(_0x5a0a84 ? "PIPELINE_DONE" : "PIPELINE_ERROR", _0x5a0a84 ? {} : { "error": "หยุดหรือเกิดข้อผิดพลาด" });
  }
  async ["persist"]() {
    if (this["state"]) await chrome["storage"]["local"]["set"]({ [STORAGE_KEY]: this["state"] });
  }
}
const VIDEO_STYLE_TH = { "studio_podcast": "สตูดิโอพอดคาสต์ มีไมค์หน้าโต๊ะ", "desk_talk": "นั่งโต๊ะคุยกัน", "walk_talk": "เดินคุยกัน", "ugc_review": "รีวิวสไตล์ผู้ใช้จริง ถ่ายด้วยมือถือ", "professional": "โฆษณาระดับมืออาชีพ", "cafe": "นั่งในคาเฟ่", "outdoor": "กลางแจ้ง", "white_studio": "สตูดิโอขาวคลีน", "horror": "บรรยากาศหลอน", "comedy": "สไตล์ตลก", "wisdom": "จริงจัง ให้ความรู้", "night_talk": "คุยดึก บรรยากาศผ่อนคลาย" }, SPEAKING_STYLE_TH = { "friendly": "เป็นกันเอง", "professional": "มืออาชีพ", "energetic": "กระตือรือร้น", "calm": "สุขุมสงบ", "motivational": "สร้างแรงบันดาลใจ", "mysterious": "ลึกลับ เสียงกระซิบ", "funny": "ตลก มีมุก", "educational": "จริงจังให้ความรู้", "dramatic": "ดราม่า ลุ้นระทึก", "isaan": "สำเนียงอีสาน", "northern": "คำเมือง เหนือ", "southern": "สำเนียงใต้", "crude": "หยาบดิบ", "cute": "น่ารัก มุ้งมิ้ง", "creepy": "หลอน", "debate": "สไตล์ดีเบต", "gossip": "นินทา คุยเล่น" };
function buildPodcastImagePrompt(_0x2879eb, _0x147789) {
  const _0x15fbb6 = _0x2879eb["layout"]["sceneCount"], _0x288019 = VIDEO_STYLE_TH[_0x2879eb["style"]["videoStyle"]] || _0x2879eb["style"]["videoStyle"], _0x28c208 = SPEAKING_STYLE_TH[_0x2879eb["style"]["speakingStyle"]] || _0x2879eb["style"]["speakingStyle"], _0x236ed9 = [];
  _0x236ed9["push"]("Podcast ฉากที่ " + (_0x147789 + 1) + "/" + _0x15fbb6), _0x236ed9["push"]("สไตล์: " + _0x288019), _0x236ed9["push"]("โทนการพูด: " + _0x28c208), _0x236ed9["push"]("หัวข้อ: " + (_0x2879eb["content"]["topic"] || "(ไม่ระบุ)"));
  const _0x405e9a = _0x2879eb["characters"][0], _0x56bfb5 = _0x2879eb["characters"][1];
  if (_0x405e9a && _0x405e9a["description"]) _0x236ed9["push"]("พิธีกรคนที่ 1: " + _0x405e9a["description"]);
  if (_0x56bfb5 && _0x56bfb5["description"]) _0x236ed9["push"]("พิธีกรคนที่ 2: " + _0x56bfb5["description"]);
  if (_0x2879eb["content"]["randomScene"]) _0x236ed9["push"]("ฉาก: สุ่มให้เข้ากับโทนรายการ");
  else _0x2879eb["content"]["sceneInput"] && _0x236ed9["push"]("ฉาก: " + _0x2879eb["content"]["sceneInput"]);
  _0x2879eb["product"] && _0x2879eb["product"]["asProp"] && _0x2879eb["product"]["name"] && _0x236ed9["push"]('มีสินค้า "' + _0x2879eb["product"]["name"] + '" วางบนโต๊ะเป็น prop');
  if (_0x147789 === 0 && _0x2879eb["imageText"]["text"] && !_0x2879eb["imageText"]["none"]) _0x236ed9["push"]('มีข้อความหน้าปกบนภาพว่า "' + _0x2879eb["imageText"]["text"] + '"');
  else _0x2879eb["imageText"]["none"] && _0x236ed9["push"]("ไม่มีข้อความใดๆ บนภาพ");
  return _0x236ed9["push"]("กล้อง: medium shot เห็นพิธีกรทั้งคู่"), _0x236ed9["push"]("คงลักษณะพิธีกรให้เหมือนกันทุกฉาก"), _0x236ed9["push"]("single image, no collage"), _0x2879eb["imageText"]["negative"] && _0x236ed9["push"]("ห้าม: " + _0x2879eb["imageText"]["negative"]), _0x236ed9["join"](" ");
}
function buildPodcastVideoPrompt(_0x2f783f, _0x192f01) {
  const _0x5be5c2 = _0x2f783f["layout"]["sceneCount"], _0x43e079 = VIDEO_STYLE_TH[_0x2f783f["style"]["videoStyle"]] || _0x2f783f["style"]["videoStyle"], _0x1e89fe = SPEAKING_STYLE_TH[_0x2f783f["style"]["speakingStyle"]] || _0x2f783f["style"]["speakingStyle"], _0x7beca2 = [];
  _0x7beca2["push"]("Podcast คลิปฉาก " + (_0x192f01 + 1) + "/" + _0x5be5c2 + " ความยาว 8 วินาที"), _0x7beca2["push"]("สไตล์: " + _0x43e079), _0x7beca2["push"]("โทน: " + _0x1e89fe);
  const _0x226425 = _0x192f01 === 0, _0x3748e8 = _0x192f01 === _0x5be5c2 - 1, _0x410aa0 = shouldMentionProductInScene(_0x2f783f, _0x192f01);
  if (_0x2f783f["content"]["useCustomScript"] && _0x2f783f["content"]["script"]) {
    const _0x18aecc = _0x2f783f["content"]["script"]["split"](/\s+/), _0x13d493 = Math["ceil"](_0x18aecc["length"] / _0x5be5c2), _0x78badc = _0x18aecc["slice"](_0x192f01 * _0x13d493, (_0x192f01 + 1) * _0x13d493)["join"](" ");
    _0x7beca2["push"]('บทพูด: "' + _0x78badc + '"');
  } else {
    if (_0x2f783f["content"]["quote"] && _0x226425) _0x7beca2["push"]('เปิดด้วยคำคม: "' + _0x2f783f["content"]["quote"] + '"'), _0x7beca2["push"]('แล้วเกริ่นหัวข้อ "' + _0x2f783f["content"]["topic"] + '"');
    else {
      if (_0x226425) _0x7beca2["push"]("เปิดด้วยคำถามหรือคำชวนคิดเรื่อง " + _0x2f783f["content"]["topic"]);
      else _0x3748e8 ? _0x7beca2["push"]("สรุปและชวนติดตามตอนถัดไป") : _0x7beca2["push"]("สนทนาต่อยอดเนื้อหาเกี่ยวกับ " + _0x2f783f["content"]["topic"]);
    }
  }
  return _0x410aa0 && _0x2f783f["product"] && _0x2f783f["product"]["name"] && _0x7beca2["push"]('มีการพูดถึงสินค้า "' + _0x2f783f["product"]["name"] + '" อย่างเป็นธรรมชาติ'), _0x7beca2["push"]("ตัวละครทั้งสองขยับปากพูดสลับกัน มีปฏิกิริยาเล็กๆ เช่นพยักหน้า หัวเราะ"), _0x7beca2["push"]("กล้อง: medium shot นิ่ง ไม่สั่น"), _0x7beca2["push"]("เสียงในสตูดิโอ ไม่มี background music เด่น"), _0x7beca2["join"](" ");
}
function shouldMentionProductInScene(_0x15efa0, _0x2e5031) {
  if (!_0x15efa0["product"] || !_0x15efa0["product"]["mention"]) return ![];
  const _0x1bc273 = _0x15efa0["layout"]["sceneCount"];
  switch (_0x15efa0["product"]["mentionTiming"]) {
    case "start":
      return _0x2e5031 === 0;
    case "middle":
      return _0x2e5031 === Math["floor"](_0x1bc273 / 2);
    case "end":
      return _0x2e5031 === _0x1bc273 - 1;
    default:
      return ![];
  }
}
const log$2 = createLogger("DownloadService");
async function downloadMediaUrl(_0x107365) {
  const { url: _0x5d6268, filenamePrefix = "agx", extension = "mp4" } = _0x107365;
  if (!_0x5d6268) return log$2["error"]("No URL provided"), null;
  const _0x13856d = /* @__PURE__ */ new Date(), _0x44fcf3 = _0x13856d["getFullYear"]()["toString"]() + String(_0x13856d["getMonth"]() + 1)["padStart"](2, "0") + String(_0x13856d["getDate"]())["padStart"](2, "0") + "-" + String(_0x13856d["getHours"]())["padStart"](2, "0") + String(_0x13856d["getMinutes"]())["padStart"](2, "0"), _0x3c0552 = Math["random"]()["toString"](36)["slice"](2, 8), _0xd835b3 = "agx/" + filenamePrefix + "-" + _0x44fcf3 + "-" + _0x3c0552 + "." + extension;
  try {
    const _0x470dc8 = await chrome["downloads"]["download"]({ "url": _0x5d6268, "filename": _0xd835b3, "saveAs": ![], "conflictAction": "uniquify" });
    return log$2["info"]("Download started: id=" + _0x470dc8 + ", file=" + _0xd835b3), _0x470dc8;
  } catch (_0x34abf1) {
    return log$2["error"]("Download failed: " + _0x34abf1), null;
  }
}
const log$1 = createLogger("CreatorPodcastRunner"), DEFAULT_VIDEO_STYLE_POOL = ["studio_podcast", "desk_talk", "ugc_review", "cafe", "professional"], DEFAULT_SPEAKING_STYLE_POOL = ["friendly", "professional", "energetic", "funny", "calm", "educational"];
function pickRandom(_0x32b1f1, _0xe21203) {
  if (!_0x32b1f1 || _0x32b1f1["length"] === 0) return _0xe21203;
  return _0x32b1f1[Math["floor"](Math["random"]() * _0x32b1f1["length"])];
}
function applyPodcastRandomization(_0x49aa70) {
  var _a2, _b2;
  const _0x19f546 = _0x49aa70["style"]["random"];
  if (!_0x19f546 || !_0x19f546["videoStyle"] && !_0x19f546["speakingStyle"]) return _0x49aa70;
  const _0x27763c = _0x49aa70["style"]["pools"] || { "videoStyle": [], "speakingStyle": [] }, _0x3337ed = { ..._0x49aa70, "style": { ..._0x49aa70["style"] } };
  if (_0x19f546["videoStyle"]) {
    const _0x9eb44 = ((_a2 = _0x27763c["videoStyle"]) == null ? void 0 : _a2["length"]) ? _0x27763c["videoStyle"] : DEFAULT_VIDEO_STYLE_POOL;
    _0x3337ed["style"]["videoStyle"] = pickRandom(_0x9eb44, _0x49aa70["style"]["videoStyle"]);
  }
  if (_0x19f546["speakingStyle"]) {
    const _0x36f37e = ((_b2 = _0x27763c["speakingStyle"]) == null ? void 0 : _b2["length"]) ? _0x27763c["speakingStyle"] : DEFAULT_SPEAKING_STYLE_POOL;
    _0x3337ed["style"]["speakingStyle"] = pickRandom(_0x36f37e, _0x49aa70["style"]["speakingStyle"]);
  }
  return _0x3337ed;
}
function shouldMentionProduct(_0x3fe251, _0x1f2fed) {
  if (!_0x3fe251["product"] || !_0x3fe251["product"]["mention"]) return ![];
  const _0xb855a5 = _0x3fe251["layout"]["sceneCount"];
  switch (_0x3fe251["product"]["mentionTiming"]) {
    case "start":
      return _0x1f2fed === 0;
    case "middle":
      return _0x1f2fed === Math["floor"](_0xb855a5 / 2);
    case "end":
      return _0x1f2fed === _0xb855a5 - 1;
    default:
      return ![];
  }
}
class CreatorPodcastRunner {
  constructor() {
    this["stopRequested"] = ![], this["flowTabId"] = null;
  }
  async ["start"](_0x4f0ead, _0x57be23, _0x2a9c7d = 1) {
    this["stopRequested"] = ![], this["flowTabId"] = _0x57be23, chrome["tabs"]["sendMessage"](_0x57be23, { "type": "FLOW_RESET_STOP" })["catch"](() => {
    });
    const _0x22fd0a = _0x4f0ead["layout"]["sceneCount"], _0xcdf2f2 = _0x2a9c7d < 0 ? 9999 : Math["max"](1, _0x2a9c7d);
    this["broadcast"]("info", "🎙️ Podcast: " + _0x22fd0a + " ฉาก × " + _0xcdf2f2 + " รอบ"), this["broadcast"]("info", "📝 หัวข้อ: " + (_0x4f0ead["content"]["topic"] || "(ไม่ระบุ)")), broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": "creator" }), await this["uploadReferences"](_0x4f0ead);
    try {
      for (let _0x1cc726 = 0; _0x1cc726 < _0xcdf2f2; _0x1cc726++) {
        if (this["stopRequested"]) break;
        if (_0xcdf2f2 > 1) this["broadcast"]("info", "--- รอบ " + (_0x1cc726 + 1) + "/" + _0xcdf2f2 + " ---");
        const _0x20fc3d = applyPodcastRandomization(_0x4f0ead);
        _0x20fc3d !== _0x4f0ead && this["broadcast"]("info", "🎲 สุ่ม: video=" + _0x20fc3d["style"]["videoStyle"] + ", speak=" + _0x20fc3d["style"]["speakingStyle"]);
        for (let _0x1da20c = 0; _0x1da20c < _0x22fd0a; _0x1da20c++) {
          if (this["stopRequested"]) break;
          this["broadcast"]("info", "🎞️ ฉาก " + (_0x1da20c + 1) + "/" + _0x22fd0a + "...");
          const _0x509985 = await this["runScene"](_0x20fc3d, _0x1da20c);
          if (_0x509985) this["broadcast"]("success", "✅ ฉาก " + (_0x1da20c + 1) + " เสร็จ");
          else this["broadcast"]("error", "❌ ฉาก " + (_0x1da20c + 1) + " ล้มเหลว");
          this["sendProgress"](_0x1da20c + 1, _0x22fd0a, "รอบ " + (_0x1cc726 + 1));
        }
      }
      if (this["stopRequested"]) this["broadcast"]("warn", "🛑 หยุดโดยผู้ใช้");
      else this["broadcast"]("success", "🎉 Podcast เสร็จสมบูรณ์");
    } catch (_0xaed311) {
      this["broadcast"]("error", "💥 Podcast error: " + _0xaed311);
    } finally {
      const _0x89eef3 = this["stopRequested"] ? "stopped" : "done";
      broadcastPipelineEvent("PIPELINE_STATE", { "state": _0x89eef3, "mode": "creator" }), this["sendDone"](!this["stopRequested"]);
    }
  }
  ["stop"]() {
    this["stopRequested"] = !![], this["flowTabId"] && chrome["tabs"]["sendMessage"](this["flowTabId"], { "type": "FLOW_STOP" })["catch"](() => {
    }), hardKillPipeline("creator", this["flowTabId"]);
  }
  async ["uploadReferences"](_0x4613c1) {
    const _0x5e8482 = [];
    for (const _0x3ab4f7 of _0x4613c1["characters"]) {
      if (_0x3ab4f7["imageDataUrl"]) _0x5e8482["push"](_0x3ab4f7["imageDataUrl"]);
    }
    _0x4613c1["product"] && _0x4613c1["product"]["image"] && _0x5e8482["push"](_0x4613c1["product"]["image"]);
    if (_0x5e8482["length"] === 0) {
      this["broadcast"]("info", "📎 ไม่มีรูปอ้างอิง");
      return;
    }
    this["broadcast"]("info", "📎 อัปโหลด " + _0x5e8482["length"] + " รูปอ้างอิง...");
    const _0x454cc5 = await this["sendToTab"]({ "type": "FLOW_UPLOAD_IMAGES", "payload": { "images": _0x5e8482 } });
    if (_0x454cc5 == null ? void 0 : _0x454cc5["success"]) this["broadcast"]("success", "✅ อัปโหลดรูปอ้างอิงเสร็จ");
    else this["broadcast"]("warn", "⚠ อัปโหลดรูปอ้างอิงไม่สำเร็จ");
  }
  ["countReferences"](_0x2f9760) {
    let _0x29d88a = 0;
    for (const _0x17cad2 of _0x2f9760["characters"]) if (_0x17cad2["imageDataUrl"]) _0x29d88a++;
    if (_0x2f9760["product"] && _0x2f9760["product"]["image"]) _0x29d88a++;
    return _0x29d88a;
  }
  async ["runScene"](_0x3ec7f0, _0x4c5253) {
    var _a2;
    if (!this["flowTabId"]) return ![];
    await this["sendToTab"]({ "type": "FLOW_ENSURE_AGENT_OFF" });
    const _0x481925 = await this["sendToTab"]({ "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "image", "aspectRatio": _0x3ec7f0["layout"]["aspectRatio"], "count": 1 } });
    if (!(_0x481925 == null ? void 0 : _0x481925["success"])) return ![];
    const _0x308eac = this["countReferences"](_0x3ec7f0);
    _0x308eac > 0 && await this["sendToTab"]({ "type": "FLOW_ATTACH_UPLOADS", "payload": { "count": _0x308eac } });
    const _0x27c4f0 = buildPodcastImagePrompt(_0x3ec7f0, _0x4c5253);
    log$1["info"]("Podcast scene " + (_0x4c5253 + 1) + " image prompt: " + _0x27c4f0["slice"](0, 80) + "...");
    const _0x49e476 = await this["sendToTab"]({ "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x27c4f0 } });
    if (!(_0x49e476 == null ? void 0 : _0x49e476["success"])) return ![];
    const _0xad5d06 = await this["sendToTab"]({ "type": "FLOW_GENERATE" });
    if (!(_0xad5d06 == null ? void 0 : _0xad5d06["success"])) return ![];
    this["broadcast"]("info", "  ⏳ ฉาก " + (_0x4c5253 + 1) + " — รอสร้างภาพ...");
    const _0x52b5ff = await this["sendToTab"]({ "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (!(_0x52b5ff == null ? void 0 : _0x52b5ff["success"])) return this["broadcast"]("error", "  ❌ ภาพฉาก " + (_0x4c5253 + 1) + " ล้มเหลว: " + ((_0x52b5ff == null ? void 0 : _0x52b5ff["error"]) || "")), ![];
    await this["sendToTab"]({ "type": "FLOW_ENSURE_AGENT_OFF" });
    const _0x42d34e = await this["sendToTab"]({ "type": "FLOW_ATTACH_LATEST_IMAGE" });
    if (!(_0x42d34e == null ? void 0 : _0x42d34e["success"])) return this["broadcast"]("warn", "  ⚠ attach ภาพไม่ได้ — ข้ามวิดีโอ"), !![];
    const _0x24f832 = await this["sendToTab"]({ "type": "FLOW_ENSURE_CONFIG", "payload": { "mode": "video", "aspectRatio": _0x3ec7f0["layout"]["aspectRatio"], "count": 1 } });
    if (!(_0x24f832 == null ? void 0 : _0x24f832["success"])) return !![];
    let _0xf3aacc = "";
    if (!_0x3ec7f0["content"]["useCustomScript"]) {
      const _0x44de08 = _0x3ec7f0["layout"]["sceneCount"], _0x56a391 = _0x4c5253 === 0 ? "hook" : _0x4c5253 === _0x44de08 - 1 ? "cta" : "body";
      _0xf3aacc = await generateSceneDialogue({ "mode": "podcast", "scene": { "index": _0x4c5253, "total": _0x44de08, "role": _0x56a391, "durationSec": 8 }, "context": { "topic": _0x3ec7f0["content"]["topic"], "productName": (_a2 = _0x3ec7f0["product"]) == null ? void 0 : _a2["name"], "mentionProduct": shouldMentionProduct(_0x3ec7f0, _0x4c5253), "style": _0x3ec7f0["style"]["videoStyle"], "mood": _0x3ec7f0["style"]["speakingStyle"], "language": "th" } }), this["broadcast"]("info", "  💬 บทพูด: " + _0xf3aacc["slice"](0, 60) + (_0xf3aacc["length"] > 60 ? "..." : ""));
    }
    const _0x226754 = buildPodcastVideoPrompt(_0x3ec7f0, _0x4c5253), _0x5597bf = _0xf3aacc ? _0x226754 + ' บทพูด 8 วินาที: "' + _0xf3aacc + '"' : _0x226754;
    log$1["info"]("Podcast scene " + (_0x4c5253 + 1) + " video prompt: " + _0x5597bf["slice"](0, 80) + "...");
    const _0x9a2da4 = await this["sendToTab"]({ "type": "FLOW_SET_PROMPT", "payload": { "prompt": _0x5597bf } });
    if (!(_0x9a2da4 == null ? void 0 : _0x9a2da4["success"])) return !![];
    const _0x40be85 = await this["sendToTab"]({ "type": "FLOW_GENERATE" });
    if (!(_0x40be85 == null ? void 0 : _0x40be85["success"])) return !![];
    this["broadcast"]("info", "  ⏳ ฉาก " + (_0x4c5253 + 1) + " — รอสร้างวิดีโอ...");
    const _0x233c39 = await this["sendToTab"]({ "type": "FLOW_WAIT_RESULT", "payload": {} });
    if (_0x233c39 == null ? void 0 : _0x233c39["success"]) {
      this["broadcast"]("success", "  ✅ วิดีโอฉาก " + (_0x4c5253 + 1) + " เสร็จ");
      if (_0x233c39["imageUrl"]) {
        const _0x3c9049 = await downloadMediaUrl({ "url": _0x233c39["imageUrl"], "filenamePrefix": "podcast-scene-" + (_0x4c5253 + 1), "extension": "mp4" });
        if (_0x3c9049 !== null) this["broadcast"]("info", "  ⬇ บันทึกวิดีโอไปที่ Downloads/agx/");
      }
    } else this["broadcast"]("warn", "  ⚠ วิดีโอฉาก " + (_0x4c5253 + 1) + " ล้มเหลว แต่ภาพเสร็จแล้ว");
    return !![];
  }
  async ["sendToTab"](_0x1538a9) {
    if (!this["flowTabId"] || this["stopRequested"]) return null;
    return chrome["tabs"]["sendMessage"](this["flowTabId"], _0x1538a9)["catch"]((_0x2828fc) => ({ "success": ![], "error": String(_0x2828fc) }));
  }
  ["broadcast"](_0x6f76d2, _0x4b6eeb) {
    log$1["info"]("[Podcast] " + _0x4b6eeb), broadcastPipelineEvent("PIPELINE_LOG", { "level": _0x6f76d2, "message": _0x4b6eeb });
  }
  ["sendProgress"](_0x253175, _0x1a3160, _0x47c540) {
    broadcastPipelineEvent("PIPELINE_PROGRESS", { "current": _0x253175, "total": _0x1a3160, "step": _0x47c540 });
  }
  ["sendDone"](_0x59353d) {
    broadcastPipelineEvent(_0x59353d ? "PIPELINE_DONE" : "PIPELINE_ERROR", _0x59353d ? {} : { "error": "หยุดหรือเกิดข้อผิดพลาด" });
  }
}
const TIKTOK_UPLOAD_URL = "https://www.tiktok.com/tiktokstudio/upload", TIKTOK_DONE_TIMEOUT_MS = 5 * 60 * 1e3, CONTENT_SCRIPT_READY_TIMEOUT_MS = 2e4;
function broadcast(_0x1100b3, _0x384c47) {
  broadcastPipelineEvent("PIPELINE_LOG", { "level": _0x1100b3, "message": _0x384c47 });
}
function sleep$1(_0x381371) {
  return new Promise((_0x582b07) => setTimeout(_0x582b07, _0x381371));
}
async function findOrOpenTikTokTab() {
  const _0x58c1b8 = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/*" }), _0x504fa6 = _0x58c1b8["find"]((_0x5980cd) => _0x5980cd["active"]) || _0x58c1b8[0];
  if (_0x504fa6 == null ? void 0 : _0x504fa6["id"]) {
    const _0x578743 = _0x504fa6["url"] || "";
    if (!_0x578743["includes"]("/tiktokstudio/upload")) {
      try {
        await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x504fa6["id"] }, "func": () => {
          window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0x5deaa4) => {
            _0x5deaa4["stopImmediatePropagation"]();
          }, { "capture": !![] });
        } });
      } catch {
      }
      await chrome["tabs"]["update"](_0x504fa6["id"], { "active": !![], "url": TIKTOK_UPLOAD_URL });
      if (_0x504fa6["windowId"] != null) await chrome["windows"]["update"](_0x504fa6["windowId"], { "focused": !![] });
      await waitForTabLoad(_0x504fa6["id"], "/tiktokstudio/upload", 2e4);
    } else await chrome["tabs"]["update"](_0x504fa6["id"], { "active": !![] });
    return _0x504fa6["id"];
  }
  const _0x508836 = await chrome["tabs"]["create"]({ "url": TIKTOK_UPLOAD_URL, "active": !![] });
  if (!_0x508836["id"]) throw new Error("Cannot create TikTok tab");
  if (_0x508836["windowId"] != null) await chrome["windows"]["update"](_0x508836["windowId"], { "focused": !![] });
  return await waitForTabLoad(_0x508836["id"], "/tiktokstudio/upload", 3e4), _0x508836["id"];
}
async function waitForTabLoad(_0x3f88c3, _0x3835a0, _0x210db4) {
  const _0x55056d = Date["now"]() + _0x210db4;
  while (Date["now"]() < _0x55056d) {
    try {
      const _0x49f11b = await chrome["tabs"]["get"](_0x3f88c3);
      if (_0x49f11b["status"] === "complete" && (_0x49f11b["url"] || "")["includes"](_0x3835a0)) return;
    } catch {
      return;
    }
    await sleep$1(500);
  }
}
async function waitForContentScript(_0x404c8d, _0x5a5ec5) {
  const _0x196545 = Date["now"]() + _0x5a5ec5;
  while (Date["now"]() < _0x196545) {
    try {
      const _0x75da38 = await chrome["tabs"]["sendMessage"](_0x404c8d, { "type": "TIKTOK_POST", "payload": { "action": "ping" } });
      if (_0x75da38 == null ? void 0 : _0x75da38["ready"]) return !![];
    } catch {
    }
    await sleep$1(500);
  }
  return ![];
}
async function waitForTikTokDone(_0x578060, _0x17a0bc) {
  return new Promise((_0x72c8cf) => {
    let _0x39c576 = ![];
    const _0x2407de = setTimeout(() => {
      if (_0x39c576) return;
      _0x39c576 = !![], chrome["runtime"]["onMessage"]["removeListener"](_0x1e64f9), _0x72c8cf({ "success": ![], "error": "หมดเวลารอ" });
    }, _0x17a0bc), _0x1e64f9 = (_0x1abf8f, _0x34a410) => {
      var _a2;
      if (_0x39c576) return;
      if ((_0x1abf8f == null ? void 0 : _0x1abf8f["type"]) !== "TIKTOK_DONE") return;
      if (((_a2 = _0x34a410["tab"]) == null ? void 0 : _a2["id"]) !== _0x578060) return;
      _0x39c576 = !![], clearTimeout(_0x2407de), chrome["runtime"]["onMessage"]["removeListener"](_0x1e64f9);
      const _0x3e7186 = _0x1abf8f["payload"];
      _0x72c8cf({ "success": !!(_0x3e7186 == null ? void 0 : _0x3e7186["success"]), "error": _0x3e7186 == null ? void 0 : _0x3e7186["error"] });
    };
    chrome["runtime"]["onMessage"]["addListener"](_0x1e64f9);
  });
}
function parseHashtags(_0x65d2ad) {
  return _0x65d2ad["split"](/[,\s]+/)["map"]((_0x2cac69) => _0x2cac69["trim"]()["replace"](/^#/, ""))["filter"]((_0xc9b8fa) => _0xc9b8fa["length"] > 0);
}
async function buildCaptionAndHashtags(_0x45eea5, _0x4aca21, _0x2e81c3, _0x10f286) {
  const _0x264065 = (_0x4aca21 || "")["trim"](), _0x5e64c8 = parseHashtags(_0x2e81c3 || ""), _0x1cfb64 = (_0x45eea5 || "สินค้า")["trim"]();
  if (_0x264065 && _0x5e64c8["length"] > 0) return broadcast("info", "📝 ใช้ caption + hashtags ที่ผู้ใช้กำหนด"), { "caption": _0x264065["slice"](0, 2200), "hashtags": _0x5e64c8 };
  broadcast("info", "🤖 AI สร้าง caption + hashtags..." + (_0x10f286 ? " (ผู้พูด: " + (_0x10f286 === "male" ? "ผู้ชาย" : _0x10f286 === "female" ? "ผู้หญิง" : "กลาง ๆ") + ")" : ""));
  const _0x2cf55e = await generateTiktokCaption(_0x1cfb64, _0x10f286);
  broadcast("info", _0x2cf55e["usedAI"] ? "✓ AI สร้างสำเร็จ" : "⚠ AI ล้มเหลว — ใช้ default");
  const _0x23fb13 = (_0x264065 || _0x2cf55e["caption"])["slice"](0, 2200), _0x4cfe8a = [], _0xe1c5b5 = /* @__PURE__ */ new Set();
  for (const _0x24572a of [..._0x5e64c8, ..._0x2cf55e["hashtags"]]) {
    const _0x6fa183 = _0x24572a["toLowerCase"]();
    if (_0xe1c5b5["has"](_0x6fa183)) continue;
    _0xe1c5b5["add"](_0x6fa183), _0x4cfe8a["push"](_0x24572a);
    if (_0x4cfe8a["length"] >= 8) break;
  }
  return { "caption": _0x23fb13, "hashtags": _0x4cfe8a };
}
function computeScheduleTime(_0x174898, _0x468899) {
  if (_0x174898["postType"] !== "schedule") return void 0;
  if (!_0x174898["scheduleDate"]) return void 0;
  const _0x5597ee = new Date(_0x174898["scheduleDate"]);
  _0x5597ee["setHours"](Number(_0x174898["scheduleHour"] || "09")), _0x5597ee["setMinutes"](Number(_0x174898["scheduleMinute"] || "00")), _0x5597ee["setSeconds"](0), _0x5597ee["setMilliseconds"](0);
  const _0x2cc7b8 = Number(_0x174898["scheduleInterval"]) || 30;
  return _0x5597ee["getTime"]() + _0x468899 * _0x2cc7b8 * 6e4;
}
class PostPipelineRunner {
  constructor() {
    this["stopRequested"] = ![];
  }
  ["requestStop"]() {
    this["stopRequested"] = !![], hardKillPipeline("post", null);
  }
  async ["start"](_0x334577) {
    var _a2;
    const { clips: _0x30a51f, settings: _0x2efe16 } = _0x334577;
    broadcast("info", "📮 Post Clip — " + _0x30a51f["length"] + " คลิป, ประเภท: " + _0x2efe16["postType"]), broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": "post" });
    let _0x3575fa;
    try {
      _0x3575fa = await findOrOpenTikTokTab(), broadcast("info", "✅ TikTok tab พร้อม (id=" + _0x3575fa + ")");
    } catch (_0x3c7e92) {
      broadcast("error", "เปิด TikTok tab ไม่ได้: " + _0x3c7e92), broadcastPipelineEvent("PIPELINE_ERROR", { "error": String(_0x3c7e92) }), broadcastPipelineEvent("PIPELINE_STATE", { "state": "error", "mode": "post" });
      return;
    }
    for (let _0x30ef09 = 0; _0x30ef09 < _0x30a51f["length"]; _0x30ef09++) {
      if (this["stopRequested"]) {
        broadcast("warn", "หยุดตามคำสั่ง user");
        break;
      }
      const _0x1e6ef0 = _0x30a51f[_0x30ef09];
      broadcast("info", "▶ คลิป " + (_0x30ef09 + 1) + "/" + _0x30a51f["length"] + ': "' + _0x1e6ef0["videoName"] + '"');
      if (_0x30ef09 > 0) try {
        const _0x4c0bd4 = await chrome["tabs"]["get"](_0x3575fa);
        if (!(_0x4c0bd4["url"] || "")["includes"]("/tiktokstudio/upload")) {
          broadcast("info", "🔄 navigate กลับ /upload สำหรับคลิปถัดไป...");
          try {
            await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x3575fa }, "func": () => {
              window["onbeforeunload"] = null, window["addEventListener"]("beforeunload", (_0x12cbd5) => {
                _0x12cbd5["stopImmediatePropagation"]();
              }, { "capture": !![] });
            } });
          } catch {
          }
          await chrome["tabs"]["update"](_0x3575fa, { "url": TIKTOK_UPLOAD_URL }), await waitForTabLoad(_0x3575fa, "/tiktokstudio/upload", 2e4), await sleep$1(1500);
        }
      } catch (_0x5ed063) {
        broadcast("warn", "⚠ ตรวจ URL ไม่สำเร็จ: " + _0x5ed063 + " — ลองต่อ");
      }
      const _0x10de39 = await waitForContentScript(_0x3575fa, CONTENT_SCRIPT_READY_TIMEOUT_MS);
      if (!_0x10de39) {
        broadcast("error", "TikTok content script ไม่พร้อม — ลอง refresh tab");
        break;
      }
      const _0x304cdf = computeScheduleTime(_0x2efe16, _0x30ef09);
      _0x304cdf && broadcast("info", "⏰ กำหนดเวลา: " + new Date(_0x304cdf)["toLocaleString"]("th-TH"));
      let _0x15a9f3 = _0x1e6ef0["videoDataUrl"] || "";
      if (!_0x15a9f3) {
        broadcast("info", "📥 ขอไฟล์จาก panel...");
        try {
          const _0x1d98d4 = await chrome["runtime"]["sendMessage"]({ "type": "POST_CLIP_FETCH", "clipId": _0x1e6ef0["id"] });
          if (!(_0x1d98d4 == null ? void 0 : _0x1d98d4["success"]) || !_0x1d98d4["dataUrl"]) {
            broadcast("error", 'ดึงไฟล์ "' + _0x1e6ef0["videoName"] + '" ไม่สำเร็จ: ' + ((_0x1d98d4 == null ? void 0 : _0x1d98d4["error"]) || "no response") + " — ข้าม");
            continue;
          }
          _0x15a9f3 = _0x1d98d4["dataUrl"], broadcast("info", "✓ ได้ไฟล์ " + (_0x15a9f3["length"] / 1024 / 1024)["toFixed"](1) + " MB");
        } catch (_0x19b091) {
          broadcast("error", "POST_CLIP_FETCH error: " + _0x19b091 + " — ข้าม");
          continue;
        }
      }
      const { caption: _0x5bb438, hashtags: _0x473b87 } = await buildCaptionAndHashtags(_0x1e6ef0["productName"] || _0x1e6ef0["videoName"], _0x1e6ef0["caption"] || "", _0x1e6ef0["hashtags"] || "", _0x2efe16["captionGender"]), _0x529100 = (_0x1e6ef0["basketName"] || "")["trim"](), _0x34e52a = { "videoUrl": _0x15a9f3, "caption": _0x5bb438, "hashtags": _0x473b87, "postType": _0x2efe16["postType"], "scheduleTime": _0x304cdf, "noBasket": _0x2efe16["noBasket"] || !_0x1e6ef0["basketName"], "notAiGenerated": !!_0x2efe16["notAiGenerated"], "basketName": _0x529100, "basketLabel": ((_a2 = _0x1e6ef0["basketLabel"]) == null ? void 0 : _a2["trim"]()) || void 0, "productName": _0x1e6ef0["productName"] || _0x1e6ef0["videoName"] };
      try {
        await chrome["tabs"]["sendMessage"](_0x3575fa, { "type": "TIKTOK_UPLOAD_VIDEO", "payload": _0x34e52a });
      } catch (_0xf7d970) {
        broadcast("error", "ส่ง TIKTOK_UPLOAD_VIDEO fail: " + _0xf7d970);
        continue;
      }
      const _0x476cca = await waitForTikTokDone(_0x3575fa, TIKTOK_DONE_TIMEOUT_MS);
      _0x476cca["success"] ? broadcast("success", "✅ คลิป " + (_0x30ef09 + 1) + " เสร็จ") : broadcast("error", "❌ คลิป " + (_0x30ef09 + 1) + " fail: " + (_0x476cca["error"] || "unknown"));
      if (_0x30ef09 < _0x30a51f["length"] - 1 && !this["stopRequested"]) {
        const _0x278eee = _0x2efe16["setDelayTime"] || 5;
        broadcast("info", "⏳ รอ " + _0x278eee + " วินาทีก่อนคลิปถัดไป...");
        for (let _0x3544d1 = _0x278eee; _0x3544d1 > 0 && !this["stopRequested"]; _0x3544d1--) {
          broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": _0x3544d1, "total": _0x278eee, "label": "รอก่อนคลิปถัดไป" }), await sleep$1(1e3);
        }
        broadcastPipelineEvent("PIPELINE_COUNTDOWN", { "remaining": 0, "total": _0x278eee, "label": "รอก่อนคลิปถัดไป" });
      }
    }
    this["stopRequested"] ? (broadcastPipelineEvent("PIPELINE_ERROR", { "error": "หยุดโดยผู้ใช้" }), broadcastPipelineEvent("PIPELINE_STATE", { "state": "stopped", "mode": "post" })) : (broadcastPipelineEvent("PIPELINE_DONE", {}), broadcastPipelineEvent("PIPELINE_STATE", { "state": "done", "mode": "post" }));
  }
}
const log = createLogger("ServiceWorker"), router = new MessageRouter();
let runner = null, creatorStoryRunner = null, creatorPodcastRunner = null, postRunner = null;
router["on"]("LICENSE_VERIFY", async (_0x9a3122, _0x3dd1fc, _0x1807e6) => {
  const _0x383eee = await checkStoredLicense();
  _0x1807e6(_0x383eee ?? { "valid": ![], "reason": "not_found" });
}), router["on"]("VERSION_CHECK", async (_0x3cd3e5, _0x4752f1, _0x43ec17) => {
  const _0x2c4732 = await checkLatestVersion();
  _0x43ec17(_0x2c4732);
}), router["on"]("LOG_REPORT_SEND", async (_0x2157a1, _0xcff6a5, _0x2c555b) => {
  const { note: _0x5da488 } = _0x2157a1 || {}, _0x487b3a = await submitLogReport(_0x5da488);
  _0x2c555b(_0x487b3a);
}), router["on"]("AI_TRIM_NAME_30", async (_0x8308c9, _0x5abbc8, _0x120ce0) => {
  const { name: _0x510061 } = _0x8308c9;
  if (!_0x510061 || _0x510061["length"] <= 30) {
    _0x120ce0({ "success": !![], "trimmed": _0x510061 || "" });
    return;
  }
  try {
    const _0x204acc = await getGeminiClient();
    if (!_0x204acc) {
      _0x120ce0({ "success": ![], "trimmed": _0x510061["slice"](0, 30)["trim"]() });
      return;
    }
    const { client: _0x448672, userModel: _0x3bac33 } = _0x204acc, _0x27895a = _0x3bac33 || "gemini-2.5-flash-lite", _0x24741f = await _0x448672["models"]["generateContent"]({ "model": _0x27895a, "contents": [{ "role": "user", "parts": [{ "text": "สรุปชื่อสินค้าให้เหลือไม่เกิน 30 ตัวอักษร โดยรักษาความหมายหลักของสินค้าไว้ (ชื่อแบรนด์ + ประเภทสินค้า) ตอบเฉพาะชื่อสั้นเท่านั้น ไม่ต้องอธิบาย ไม่ต้องใส่เครื่องหมายคำพูด.\n\nชื่อสินค้าเต็ม: " + _0x510061 }] }], "config": { "temperature": 0.3 } }), _0x535e21 = (_0x24741f["text"] || "")["trim"]()["replace"](/^["']|["']$/g, "")["slice"](0, 30);
    _0x120ce0({ "success": !!_0x535e21, "trimmed": _0x535e21 || _0x510061["slice"](0, 30)["trim"]() });
  } catch (_0x43e971) {
    _0x120ce0({ "success": ![], "trimmed": _0x510061["slice"](0, 30)["trim"]() });
  }
}), router["on"]("LICENSE_ACTIVATE", async (_0x570801, _0x3f8cdc, _0x1a9bb5) => {
  const { key: _0x47892a, deviceName: _0x31a824 } = _0x570801;
  try {
    const _0x56cc9e = await activateLicense(_0x47892a, _0x31a824);
    _0x1a9bb5(_0x56cc9e);
  } catch (_0x1198b9) {
    _0x1a9bb5({ "valid": ![], "reason": "error", "error": String(_0x1198b9) });
  }
}), router["on"]("LICENSE_DEACTIVATE", async (_0x53ffa9, _0x3c6ba6, _0x55100c) => {
  const { key: _0x2e970f, deviceId: _0x593e11 } = _0x53ffa9;
  try {
    const _0x4f9d47 = await deactivateDevice(_0x2e970f, _0x593e11);
    _0x55100c(_0x4f9d47);
  } catch (_0x5e6568) {
    _0x55100c({ "success": ![], "error": String(_0x5e6568) });
  }
}), router["on"]("LICENSE_SESSIONS", async (_0x493cf4, _0x463aea, _0x4810cf) => {
  const { key: _0x9b713b } = _0x493cf4;
  try {
    const _0x3d6e2b = await getSessions(_0x9b713b);
    _0x4810cf(_0x3d6e2b);
  } catch (_0x48caeb) {
    _0x4810cf({ "valid": ![], "error": String(_0x48caeb) });
  }
}), router["on"]("FLOW_FETCH_BLOB_URL", async (_0x57f825, _0x473f87, _0x4636ef) => {
  var _a2;
  const { url: _0x15200d } = _0x57f825, _0x2ea8bd = (_a2 = _0x473f87["tab"]) == null ? void 0 : _a2["id"];
  if (!_0x2ea8bd) {
    _0x4636ef({ "ok": ![], "err": "no tab id" });
    return;
  }
  if (!_0x15200d) {
    _0x4636ef({ "ok": ![], "err": "no url" });
    return;
  }
  try {
    const [_0x5f22fc] = await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x2ea8bd }, "world": "MAIN", "func": async (_0x746427) => {
      var _a3;
      try {
        const _0xbcd22e = window, _0x3ccc4f = (_a3 = _0xbcd22e["__agxBlobStore"]) == null ? void 0 : _a3["get"](_0x746427), _0x5cba05 = _0x3ccc4f || await (await fetch(_0x746427))["blob"]();
        if (!_0x5cba05 || _0x5cba05["size"] === 0) return { "ok": ![], "err": "empty blob" };
        const _0x13d8a1 = await _0x5cba05["arrayBuffer"](), _0x31a528 = new Uint8Array(_0x13d8a1);
        let _0x41d105 = "";
        const _0x3e5a63 = 32768;
        for (let _0x41da80 = 0; _0x41da80 < _0x31a528["byteLength"]; _0x41da80 += _0x3e5a63) {
          _0x41d105 += String["fromCharCode"]["apply"](null, Array["from"](_0x31a528["subarray"](_0x41da80, _0x41da80 + _0x3e5a63)));
        }
        return { "ok": !![], "dataUrl": "data:video/mp4;base64," + btoa(_0x41d105), "size": _0x5cba05["size"] };
      } catch (_0x5c2b8a) {
        return { "ok": ![], "err": String(_0x5c2b8a) };
      }
    }, "args": [_0x15200d] });
    _0x4636ef((_0x5f22fc == null ? void 0 : _0x5f22fc["result"]) ?? { "ok": ![], "err": "no result" });
  } catch (_0x2e3839) {
    _0x4636ef({ "ok": ![], "err": String(_0x2e3839) });
  }
}), router["on"]("FLOW_DEBUGGER_CLICK", async (_0x5c6b64, _0x1c9951, _0x5f379b) => {
  var _a2, _b2, _c, _d;
  const { selector: _0x40ec64, x: _0x5a5e1a, y: _0x495c0d } = _0x5c6b64, _0x19f1ba = (_a2 = _0x1c9951["tab"]) == null ? void 0 : _a2["id"];
  if (!_0x19f1ba) {
    _0x5f379b({ "success": ![], "error": "No tab id" });
    return;
  }
  const _0x16ab92 = { "tabId": _0x19f1ba };
  let _0x57e5c3 = ![];
  try {
    log["info"]("[CDP] attach tab=" + _0x19f1ba + " (selector=" + (_0x40ec64 == null ? void 0 : _0x40ec64["slice"](0, 40)) + ")"), await chrome["debugger"]["attach"](_0x16ab92, "1.3"), _0x57e5c3 = !![], await new Promise((_0x34c3cf) => setTimeout(_0x34c3cf, 250));
    const _0x2387cd = await chrome["debugger"]["sendCommand"](_0x16ab92, "Page.getLayoutMetrics"), _0x549320 = (_0x2387cd == null ? void 0 : _0x2387cd["cssVisualViewport"]) || (_0x2387cd == null ? void 0 : _0x2387cd["visualViewport"]);
    log["info"]("[CDP] viewport=" + (_0x549320 == null ? void 0 : _0x549320["clientWidth"]) + "x" + (_0x549320 == null ? void 0 : _0x549320["clientHeight"]) + " scale=" + (_0x549320 == null ? void 0 : _0x549320["scale"]));
    const _0x440f5a = (_0x496813) => new Promise((_0x3922e7) => setTimeout(_0x3922e7, _0x496813));
    let _0x247c8f = _0x5a5e1a ?? 0, _0xf28b30 = _0x495c0d ?? 0, _0x187966 = ![];
    if (_0x40ec64) {
      const _0x3a5e20 = await chrome["debugger"]["sendCommand"](_0x16ab92, "Runtime.evaluate", { "expression": "(() => {\n          const el = document.querySelector(" + JSON["stringify"](_0x40ec64) + ");\n          if (!el) return { ok: false, reason: 'selector-not-found' };\n          el.scrollIntoView({ block: 'center', inline: 'center' });\n          // give layout 1 frame to settle\n          return new Promise((resolve) => {\n            requestAnimationFrame(() => {\n              const r = el.getBoundingClientRect();\n              if (r.width === 0 || r.height === 0) {\n                resolve({ ok: false, reason: 'zero-size' });\n                return;\n              }\n              resolve({\n                ok: true,\n                x: r.left + r.width / 2,\n                y: r.top + r.height / 2,\n                rect: { left: r.left, top: r.top, right: r.right, bottom: r.bottom },\n                viewport: { w: window.innerWidth, h: window.innerHeight },\n              });\n            });\n          });\n        })()", "returnByValue": !![], "awaitPromise": !![] }), _0x2d1afe = (_b2 = _0x3a5e20 == null ? void 0 : _0x3a5e20["result"]) == null ? void 0 : _b2["value"];
      (_0x2d1afe == null ? void 0 : _0x2d1afe["ok"]) && typeof _0x2d1afe["x"] === "number" && typeof _0x2d1afe["y"] === "number" ? (_0x247c8f = Math["round"](_0x2d1afe["x"]), _0xf28b30 = Math["round"](_0x2d1afe["y"]), _0x187966 = !![], log["info"]("[CDP] fresh coords after attach: (" + _0x247c8f + "," + _0xf28b30 + ") rect=(" + Math["round"](_0x2d1afe["rect"]["left"]) + "," + Math["round"](_0x2d1afe["rect"]["top"]) + ") jsViewport=" + ((_c = _0x2d1afe["viewport"]) == null ? void 0 : _c["w"]) + "x" + ((_d = _0x2d1afe["viewport"]) == null ? void 0 : _d["h"]))) : log["warn"]("[CDP] could not re-measure (" + (_0x2d1afe == null ? void 0 : _0x2d1afe["reason"]) + ") — falling back to (" + _0x247c8f + "," + _0xf28b30 + ")");
    }
    if (typeof _0x247c8f !== "number" || typeof _0xf28b30 !== "number" || _0x247c8f === 0 && _0xf28b30 === 0 && !_0x187966) {
      _0x5f379b({ "success": ![], "error": "No valid coords" });
      return;
    }
    const _0x49cb51 = _0x247c8f - 60 + Math["random"]() * 30, _0x3ac588 = _0xf28b30 - 40 + Math["random"]() * 20;
    for (let _0x104577 = 0; _0x104577 <= 3; _0x104577++) {
      const _0x3d1cd4 = _0x104577 / 3, _0x26942c = Math["round"](_0x49cb51 + (_0x247c8f - _0x49cb51) * _0x3d1cd4), _0x1d49c8 = Math["round"](_0x3ac588 + (_0xf28b30 - _0x3ac588) * _0x3d1cd4);
      await chrome["debugger"]["sendCommand"](_0x16ab92, "Input.dispatchMouseEvent", { "type": "mouseMoved", "x": _0x26942c, "y": _0x1d49c8, "button": "none", "buttons": 0 }), await _0x440f5a(15);
    }
    const _0x27cc4b = 60 + Math["floor"](Math["random"]() * 80);
    await chrome["debugger"]["sendCommand"](_0x16ab92, "Input.dispatchMouseEvent", { "type": "mousePressed", "x": _0x247c8f, "y": _0xf28b30, "button": "left", "buttons": 1, "clickCount": 1, "force": 0.5 }), await _0x440f5a(_0x27cc4b), await chrome["debugger"]["sendCommand"](_0x16ab92, "Input.dispatchMouseEvent", { "type": "mouseReleased", "x": _0x247c8f, "y": _0xf28b30, "button": "left", "buttons": 0, "clickCount": 1, "force": 0 }), log["info"]("[CDP] dispatched click at (" + _0x247c8f + "," + _0xf28b30 + ") hold=" + _0x27cc4b + "ms freshCoords=" + _0x187966), _0x5f379b({ "success": !![], "viewport": _0x549320, "x": _0x247c8f, "y": _0xf28b30 });
  } catch (_0x5e70b9) {
    const _0x17b634 = String(_0x5e70b9);
    log["error"]("[CDP] click failed: " + _0x17b634);
    let _0x5abb28 = "";
    if (_0x17b634["includes"]("Another debugger is already attached")) _0x5abb28 = " (DevTools เปิดอยู่บน Flow tab — ปิด F12 ก่อน)";
    else (_0x17b634["includes"]("Cannot access") || _0x17b634["includes"]("cannot be attached")) && (_0x5abb28 = ' (Chrome block — ลอง reload extension + allow "Debug other tabs" permission)');
    _0x5f379b({ "success": ![], "error": _0x17b634 + _0x5abb28 });
  } finally {
    if (_0x57e5c3) try {
      await chrome["debugger"]["detach"](_0x16ab92);
    } catch {
    }
  }
}), router["on"]("FLOW_DEBUGGER_DRAG", async (_0x3705f6, _0x530a30, _0x3d35b2) => {
  var _a2;
  const { startX: _0x2a2bee, startY: _0xe74230, endX: _0x1cb732, endY: _0x4cd1c8, steps = 8 } = _0x3705f6, _0x28fea3 = (_a2 = _0x530a30["tab"]) == null ? void 0 : _a2["id"];
  if (!_0x28fea3) {
    _0x3d35b2({ "success": ![], "error": "No tab id" });
    return;
  }
  if (typeof _0x2a2bee !== "number" || typeof _0xe74230 !== "number" || typeof _0x1cb732 !== "number" || typeof _0x4cd1c8 !== "number") {
    _0x3d35b2({ "success": ![], "error": "startX/startY/endX/endY required" });
    return;
  }
  const _0x483049 = { "tabId": _0x28fea3 };
  let _0x210c9b = ![];
  try {
    log["info"]("[CDP] drag attach tab=" + _0x28fea3 + " (" + _0x2a2bee + "," + _0xe74230 + ") → (" + _0x1cb732 + "," + _0x4cd1c8 + ") steps=" + steps), await chrome["debugger"]["attach"](_0x483049, "1.3"), _0x210c9b = !![], await new Promise((_0x18dee6) => setTimeout(_0x18dee6, 200));
    const _0x891f64 = (_0x1be627) => new Promise((_0x3a42a5) => setTimeout(_0x3a42a5, _0x1be627)), _0x42eeb8 = _0x2a2bee - 40 + Math["random"]() * 20, _0x15aefc = _0xe74230 - 30 + Math["random"]() * 15;
    for (let _0x550193 = 0; _0x550193 <= 3; _0x550193++) {
      const _0x10ac62 = _0x550193 / 3, _0x3f5633 = Math["round"](_0x42eeb8 + (_0x2a2bee - _0x42eeb8) * _0x10ac62), _0x43d6d9 = Math["round"](_0x15aefc + (_0xe74230 - _0x15aefc) * _0x10ac62);
      await chrome["debugger"]["sendCommand"](_0x483049, "Input.dispatchMouseEvent", { "type": "mouseMoved", "x": _0x3f5633, "y": _0x43d6d9, "button": "none", "buttons": 0 }), await _0x891f64(20);
    }
    await chrome["debugger"]["sendCommand"](_0x483049, "Input.dispatchMouseEvent", { "type": "mousePressed", "x": _0x2a2bee, "y": _0xe74230, "button": "left", "buttons": 1, "clickCount": 1, "force": 0.5 }), await _0x891f64(80);
    for (let _0x51c8d4 = 1; _0x51c8d4 <= steps; _0x51c8d4++) {
      const _0x356ed5 = _0x51c8d4 / steps, _0x5cc012 = 1 - Math["pow"](1 - _0x356ed5, 2), _0x1b398c = Math["round"](_0x2a2bee + (_0x1cb732 - _0x2a2bee) * _0x5cc012), _0x4c36bd = Math["round"](_0xe74230 + (_0x4cd1c8 - _0xe74230) * _0x5cc012);
      await chrome["debugger"]["sendCommand"](_0x483049, "Input.dispatchMouseEvent", { "type": "mouseMoved", "x": _0x1b398c, "y": _0x4c36bd, "button": "left", "buttons": 1 }), await _0x891f64(25 + Math["random"]() * 20);
    }
    await _0x891f64(80), await chrome["debugger"]["sendCommand"](_0x483049, "Input.dispatchMouseEvent", { "type": "mouseReleased", "x": _0x1cb732, "y": _0x4cd1c8, "button": "left", "buttons": 0, "clickCount": 1, "force": 0 }), log["info"]("[CDP] drag complete (" + _0x2a2bee + "," + _0xe74230 + ") → (" + _0x1cb732 + "," + _0x4cd1c8 + ")"), _0x3d35b2({ "success": !![], "startX": _0x2a2bee, "startY": _0xe74230, "endX": _0x1cb732, "endY": _0x4cd1c8, "steps": steps });
  } catch (_0x56a62c) {
    const _0x2604b5 = String(_0x56a62c);
    log["error"]("[CDP] drag failed: " + _0x2604b5), _0x3d35b2({ "success": ![], "error": _0x2604b5 });
  } finally {
    if (_0x210c9b) try {
      await chrome["debugger"]["detach"](_0x483049);
    } catch {
    }
  }
}), router["on"]("TIKTOK_MAIN_WORLD_CLICK", async (_0xac55d2, _0x397489, _0x1f14b5) => {
  var _a2;
  const { mode: _0x4322b7, buttonText: _0x53d2c0, which: _0xcca568, selector: _0x16d6b7 } = _0xac55d2, _0x3c7332 = (_a2 = _0x397489["tab"]) == null ? void 0 : _a2["id"];
  if (!_0x3c7332) {
    _0x1f14b5({ "success": ![], "error": "No tab id" });
    return;
  }
  try {
    const [_0x123e55] = await chrome["scripting"]["executeScript"]({ "target": { "tabId": _0x3c7332 }, "world": "MAIN", "func": (_0x16ff1b, _0x3d7981, _0x1548c1, _0x51ebc0) => {
      try {
        let _0x2b3ff3 = null;
        if (_0x16ff1b === "selector") {
          _0x2b3ff3 = document["querySelector"](_0x51ebc0);
          if (!_0x2b3ff3) return { "clicked": ![], "reason": "selector-not-found" };
        } else {
          if (_0x16ff1b === "radioInput") {
            const _0xb8ed84 = document["querySelector"](_0x51ebc0);
            if (!_0xb8ed84) return { "clicked": ![], "reason": "radio-not-found" };
            return _0xb8ed84["dispatchEvent"](new MouseEvent("click", { "bubbles": !![], "cancelable": !![], "view": window })), { "clicked": !![], "checked": _0xb8ed84["checked"] };
          } else {
            if (_0x16ff1b === "nativeClick") {
              _0x2b3ff3 = document["querySelector"](_0x51ebc0);
              if (!_0x2b3ff3) return { "clicked": ![], "reason": "selector-not-found" };
              return _0x2b3ff3["click"](), { "clicked": !![] };
            } else {
              const _0x237fca = [...document["querySelectorAll"]("button")]["filter"]((_0x1534fa) => (_0x1534fa["textContent"] || "")["trim"]() === _0x3d7981);
              if (_0x237fca["length"] === 0) return { "clicked": ![], "reason": "not-found", "count": 0 };
              let _0x1793f2;
              if (_0x1548c1 === "first") _0x1793f2 = _0x237fca[0];
              else {
                if (_0x1548c1 === "lastEnabled") _0x1793f2 = [..._0x237fca]["reverse"]()["find"]((_0x6ee542) => _0x6ee542["getAttribute"]("aria-disabled") !== "true" && !_0x6ee542["disabled"]);
                else _0x1793f2 = _0x237fca[_0x237fca["length"] - 1];
              }
              if (!_0x1793f2) return { "clicked": ![], "reason": "no-enabled", "count": _0x237fca["length"] };
              const _0x53186b = _0x1793f2["getAttribute"]("aria-disabled") === "true" || _0x1793f2["disabled"];
              if (_0x53186b) return { "clicked": ![], "reason": "disabled", "count": _0x237fca["length"] };
              _0x2b3ff3 = _0x1793f2;
            }
          }
        }
        if (!_0x2b3ff3) return { "clicked": ![], "reason": "no-target" };
        return _0x2b3ff3["dispatchEvent"](new MouseEvent("mousedown", { "bubbles": !![] })), _0x2b3ff3["dispatchEvent"](new MouseEvent("mouseup", { "bubbles": !![] })), _0x2b3ff3["dispatchEvent"](new MouseEvent("click", { "bubbles": !![] })), { "clicked": !![] };
      } catch (_0x4b5b9f) {
        return { "clicked": ![], "reason": "main-world-throw: " + String(_0x4b5b9f)["slice"](0, 120) };
      }
    }, "args": [_0x4322b7 || "buttonByText", _0x53d2c0 || "", _0xcca568 || "lastEnabled", _0x16d6b7 || ""] }), _0x343cee = _0x123e55["error"];
    _0x123e55["result"] === void 0 && _0x343cee ? _0x1f14b5({ "success": ![], "error": "MAIN-world err: " + String(_0x343cee)["slice"](0, 120) }) : _0x1f14b5({ "success": !![], "result": _0x123e55["result"] });
  } catch (_0xc8af9a) {
    _0x1f14b5({ "success": ![], "error": String(_0xc8af9a) });
  }
});
const MOCK_BLOCKS_BY_MODE = { "auto": ["UPLOAD_AND_CONFIG", "GEN_IMAGE", "GEN_VIDEO", "POST_TIKTOK"], "story": ["UPLOAD_REFS", "SCENE_IMAGE", "SCENE_VIDEO", "DIALOGUE_AI", "DOWNLOAD"], "podcast": ["UPLOAD_CHARS", "SCENE_IMAGE", "SCENE_VIDEO", "DIALOGUE_AI", "DOWNLOAD"] };
async function prepareFlowSession(_0x2166c5, _0x5bae89 = "auto", _0x11a57d = ![]) {
  broadcastLog("info", "🎬 เตรียมพร้อมสร้างคลิป (" + _0x2166c5 + ")...");
  const _0x47b4cf = ["UPLOAD_AND_CONFIG", "GEN_IMAGE", "GEN_VIDEO", "SAVE_CLIP", "POST_TIKTOK"], _0xf8e42b = MOCK_BLOCKS_BY_MODE[_0x5bae89] || _0x47b4cf;
  let _0x32725b = _0x47b4cf;
  if (DEV["SKIP_LICENSE"]) broadcastLog("warn", "🔓 [DEV.SKIP_LICENSE] ข้ามการเช็ค License — Blocks: " + _0xf8e42b["join"](", "));
  else {
    const _0x25fbf1 = await chrome["storage"]["local"]["get"](["licenseKey"]), _0x3b13ab = _0x25fbf1["licenseKey"];
    if (!_0x3b13ab) return broadcastLog("error", "❌ ไม่พบ License Key — กรุณา Activate ก่อนเริ่ม pipeline"), chrome["runtime"]["sendMessage"]({ "type": "LICENSE_INVALID", "payload": { "reason": "no_key", "message": "ไม่พบ License Key — กรุณา Activate ก่อน" } })["catch"](() => {
    }), { "error": "LICENSE: ไม่พบ License Key — กรุณา Activate ก่อน" };
    try {
      const _0x1d215c = await startSession(_0x3b13ab);
      if (_0x1d215c["update_required"]) return broadcastLog("error", "❌ Extension เก่าเกินไป — กรุณาอัพเดตเป็นเวอร์ชันใหม่"), chrome["runtime"]["sendMessage"]({ "type": "LICENSE_INVALID", "payload": { "reason": "update_required", "message": "Extension เก่าเกินไป — อัพเดตก่อน" } })["catch"](() => {
      }), { "error": "LICENSE: Extension เก่าเกินไป — อัพเดตก่อน" };
      if (!_0x1d215c["valid"]) {
        const _0x4ef5d2 = _0x1d215c["reason"] === "expired" ? "License หมดอายุ" : _0x1d215c["reason"] === "max_sessions" ? "License ใช้กับเครื่องอื่นครบจำนวนแล้ว — deactivate เครื่องเก่าก่อน" : _0x1d215c["reason"] === "invalid" ? "License Key ไม่ถูกต้อง" : _0x1d215c["reason"] === "not_found" ? "ไม่พบ License Key นี้ในระบบ" : "License invalid (" + (_0x1d215c["reason"] || "unknown") + ")";
        return broadcastLog("error", "❌ " + _0x4ef5d2), chrome["runtime"]["sendMessage"]({ "type": "LICENSE_INVALID", "payload": { "reason": _0x1d215c["reason"] || "invalid", "message": _0x4ef5d2 } })["catch"](() => {
        }), { "error": "LICENSE: " + _0x4ef5d2 };
      }
      Array["isArray"](_0x1d215c["allowedBlocks"]) && _0x1d215c["allowedBlocks"]["length"] > 0 && (_0x32725b = _0x47b4cf["filter"]((_0x387175) => _0x1d215c["allowedBlocks"]["includes"](_0x387175)));
      const _0x19840c = _0x1d215c["expireDate"] ? "expires " + _0x1d215c["expireDate"] : "lifetime";
      broadcastLog("success", "🔑 License OK (" + _0x19840c + ") — Blocks: " + _0xf8e42b["join"](", "));
    } catch (_0x6c8acc) {
      const _0x1e08ab = _0x6c8acc instanceof Error ? _0x6c8acc["message"] : String(_0x6c8acc);
      return broadcastLog("error", "❌ ตรวจ License ไม่สำเร็จ: " + _0x1e08ab), chrome["runtime"]["sendMessage"]({ "type": "LICENSE_INVALID", "payload": { "reason": "api_error", "message": "ตรวจ License ไม่สำเร็จ: " + _0x1e08ab } })["catch"](() => {
      }), { "error": "LICENSE: " + _0x1e08ab };
    }
  }
  if (DEV["TEST_BASKET_PIN_ONLY"] || DEV["TEST_SCHEDULE_ONLY"]) {
    const _0x4e12c6 = DEV["TEST_BASKET_PIN_ONLY"] ? "TEST_BASKET_PIN_ONLY" : "TEST_SCHEDULE_ONLY";
    broadcastLog("warn", "🚧 [DEV." + _0x4e12c6 + "] ข้ามเปิด Flow — ใช้ TikTok tab ปัจจุบันที่เปิดค้างอยู่");
    const _0x39ee4d = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/*" }), _0x37d0bb = _0x39ee4d["find"]((_0x7b9f67) => _0x7b9f67["active"]) || _0x39ee4d[0];
    if (!(_0x37d0bb == null ? void 0 : _0x37d0bb["id"])) return broadcastLog("error", "❌ ไม่เจอ tab TikTok Studio ที่เปิดค้างอยู่ — เปิดหน้า TikTok upload ก่อน"), { "error": "No TikTok tab open" };
    return await chrome["tabs"]["update"](_0x37d0bb["id"], { "active": !![] }), broadcastLog("success", "✅ พบ TikTok tab (id=" + _0x37d0bb["id"] + ") — เริ่มเทสตรงๆ"), { "tabId": _0x37d0bb["id"], "allowedBlocks": _0x32725b };
  }
  const _0x5d7fc3 = "https://labs.google/fx/tools/flow";
  let _0x2122e1 = await findTabByUrl("labs.google/fx/tools/flow");
  !_0x2122e1 ? (broadcastLog("info", "🌐 กำลังเปิด Google Flow..."), _0x2122e1 = await chrome["tabs"]["create"]({ "url": _0x5d7fc3, "active": !![] })) : (broadcastLog("info", "✅ พบ Google Flow tab ที่เปิดอยู่"), await chrome["tabs"]["update"](_0x2122e1["id"], { "active": !![] }));
  if (!_0x2122e1["id"]) return { "error": "No tab ID" };
  let _0x1c7149 = _0x2122e1["id"], _0x1e555c = ![], _0x12a30d = ![], _0x44376a = ![];
  const _0x38eb70 = 3e3, _0x1b90e1 = 15, _0x2325f4 = 30, _0x366157 = 60, _0xa4bfe7 = Math["ceil"](_0x366157 / (_0x38eb70 / 1e3));
  broadcastLog("info", "⏳ รอ Flow โหลด... (timeout เหลือ ~" + _0x366157 + "s)");
  for (let _0x41619d = 0; _0x41619d < _0xa4bfe7; _0x41619d++) {
    await sleep(_0x38eb70);
    const _0x17e837 = (_0x41619d + 1) * (_0x38eb70 / 1e3), _0x40ba23 = _0x366157 - _0x17e837;
    try {
      const _0x543a8c = await chrome["tabs"]["sendMessage"](_0x1c7149, { "type": "FLOW_PING" });
      if (_0x543a8c == null ? void 0 : _0x543a8c["ready"]) {
        _0x1e555c = !![], broadcastLog("success", "✓ Flow พร้อมใช้งาน (" + _0x17e837 + "s)", !![]);
        break;
      }
    } catch {
      if (!_0x12a30d && _0x17e837 >= _0x1b90e1) {
        _0x12a30d = !![], broadcastLog("info", "↻ ลอง refresh tabs ก่อน (passive verify)...", !![]);
        const _0x26f9b7 = await findFlowTab();
        (_0x26f9b7 == null ? void 0 : _0x26f9b7["id"]) && _0x26f9b7["id"] !== _0x1c7149 && (broadcastLog("info", "↻ Flow tab id เปลี่ยน: #" + _0x1c7149 + " → #" + _0x26f9b7["id"]), _0x1c7149 = _0x26f9b7["id"]);
        continue;
      }
      if (!_0x44376a && _0x17e837 >= _0x2325f4) {
        _0x44376a = !![], broadcastLog("info", "🔄 Content script ไม่ตอบ " + _0x2325f4 + "s — กำลัง reload tab...", !![]), await chrome["tabs"]["reload"](_0x1c7149);
        continue;
      }
    }
    _0x40ba23 > 0 && broadcastLog("info", "⏳ รอ Flow โหลด... (ผ่านไป " + _0x17e837 + "s, timeout เหลือ ~" + _0x40ba23 + "s)", !![]);
  }
  if (!_0x1e555c) return broadcastLog("error", "❌ ไม่สามารถเชื่อมต่อ Flow ได้"), { "error": "Flow not connected" };
  const _0x7ce74c = DEV["TEST_SCENEBUILDER_DOWNLOAD_ONLY"] || DEV["SKIP_NEW_PROJECT_PER_PRODUCT"];
  if ((_0x5bae89 === "story" || _0x5bae89 === "podcast" || _0x11a57d) && !_0x7ce74c) try {
    const _0x313561 = await chrome["tabs"]["get"](_0x1c7149), _0x15fc94 = _0x313561["url"] || "", _0x48f138 = _0x15fc94["includes"]("/fx/tools/flow/project");
    _0x48f138 && (broadcastLog("info", "🏠 ไปหน้า Flow เพื่อสร้าง Project ใหม่..."), await chrome["tabs"]["update"](_0x1c7149, { "url": "https://labs.google/fx/tools/flow" }), await sleep(8e3)), broadcastLog("info", "➕ กด New project..."), await chrome["tabs"]["sendMessage"](_0x1c7149, { "type": "FLOW_NEW_PROJECT" }), await sleep(8e3), broadcastLog("info", "📂 เข้าหน้า Project ใหม่แล้ว");
  } catch (_0x284298) {
    broadcastLog("warn", "⚠ สร้าง Project ใหม่ไม่สำเร็จ: " + _0x284298);
  }
  else {
    if (_0x7ce74c) broadcastLog("warn", "🧪 [DEV] ข้ามการสร้าง Project ใหม่ — ใช้ URL ที่เปิดอยู่");
    else try {
      const _0x47fab5 = await chrome["tabs"]["get"](_0x1c7149);
      (_0x47fab5["url"] || "")["includes"]("/fx/tools/flow/project") && (broadcastLog("info", "🏠 ไปหน้า Flow home (เตรียมปุ่ม + New project)..."), await chrome["tabs"]["update"](_0x1c7149, { "url": "https://labs.google/fx/tools/flow" }), await sleep(5e3));
    } catch (_0x30e07e) {
      broadcastLog("warn", "⚠ ไปหน้า Flow home ไม่สำเร็จ: " + _0x30e07e);
    }
  }
  return broadcastLog("success", "✅ เตรียมพร้อมเสร็จ"), { "tabId": _0x1c7149, "allowedBlocks": _0x32725b };
}
router["on"]("PIPELINE_START", async (_0x115de8, _0x296265, _0x428acc) => {
  var _a2, _b2, _c;
  const { mode: _0x12e22b, subMode: _0x5ea057, config: _0x2f672d, productsFromStorage: _0x3534a2 } = _0x115de8;
  log["info"]("Pipeline start requested", { "mode": _0x12e22b, "subMode": _0x5ea057, "productsFromStorage": _0x3534a2 });
  if (_0x3534a2 && _0x12e22b === "auto") try {
    const _0x54b7e9 = await chrome["storage"]["local"]["get"](["agx_auto_products"]), _0x5be036 = _0x54b7e9["agx_auto_products"] ?? [];
    _0x2f672d["products"] = _0x5be036, log["info"]("Loaded " + _0x5be036["length"] + " products from storage");
  } catch (_0x845153) {
    log["error"]("Failed to read products from storage", _0x845153), _0x428acc({ "success": ![], "error": "อ่าน products จาก storage ไม่ได้" }), broadcastPipelineEvent("PIPELINE_STATE", { "state": "error", "mode": "auto" });
    return;
  }
  const _0x52aec0 = _0x12e22b === "creator" ? "creator" : _0x12e22b === "post" ? "post" : "auto";
  broadcastPipelineEvent("PIPELINE_STATE", { "state": "running", "mode": _0x52aec0, "totalBlocks": 5 });
  if (_0x12e22b === "post") {
    _0x428acc({ "success": !![] });
    try {
      postRunner = new PostPipelineRunner(), await postRunner["start"](_0x2f672d);
    } catch (_0x4b7782) {
      broadcastLog("error", "💥 Post pipeline crashed: " + _0x4b7782), chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_ERROR", "payload": { "error": String(_0x4b7782) } })["catch"](() => {
      });
    }
    return;
  }
  if (_0x12e22b !== "auto" && _0x12e22b !== "creator") {
    _0x428acc({ "success": ![], "error": "Unknown pipeline mode: " + _0x12e22b });
    return;
  }
  const _0x256f66 = _0x12e22b === "creator" ? "Creator " + (_0x5ea057 || "") : "Auto", _0x1a8e3b = _0x12e22b === "creator" ? _0x5ea057 === "podcast" ? "podcast" : "story" : "auto", _0x18acd0 = _0x2f672d, _0x46035d = _0x12e22b === "auto" && (((_a2 = _0x18acd0 == null ? void 0 : _0x18acd0["settings"]) == null ? void 0 : _a2["sceneCount"]) ?? 1) > 1 && ((_b2 = _0x18acd0 == null ? void 0 : _0x18acd0["settings"]) == null ? void 0 : _b2["assemblyMode"]) !== "extend", _0x36e254 = DEV["TEST_SCENEBUILDER_ATTACH_ONLY"] || DEV["TEST_SCENEBUILDER_DOWNLOAD_ONLY"], _0x41fcc0 = _0x46035d && !_0x36e254;
  if (_0x36e254) broadcastLog("warn", "🧪 [TEST_SCENEBUILDER_*] ข้าม New Project — ใช้หน้า Flow ปัจจุบัน");
  else _0x46035d && broadcastLog("info", "🎬 SceneBuilder mode — จะสร้าง New Project ก่อนเริ่ม");
  const _0x132caf = await prepareFlowSession(_0x256f66, _0x1a8e3b, _0x41fcc0);
  if (!_0x132caf["tabId"] || !_0x132caf["allowedBlocks"]) {
    _0x428acc({ "success": ![], "error": _0x132caf["error"] || "Prep failed" }), broadcastPipelineEvent("PIPELINE_STATE", { "state": "error", "mode": _0x52aec0 });
    return;
  }
  const _0x3820cb = _0x132caf["tabId"], _0xe2cd6f = _0x132caf["allowedBlocks"];
  _0x428acc({ "success": !![], "flowTabId": _0x3820cb });
  if (_0x12e22b === "creator") {
    const _0x2f2bdb = _0x2f672d, _0x40e042 = ((_c = _0x2f2bdb == null ? void 0 : _0x2f2bdb["loop"]) == null ? void 0 : _c["count"]) ?? 1;
    if (_0x5ea057 === "story") creatorStoryRunner = new CreatorStoryRunner(), creatorStoryRunner["start"](_0x2f2bdb, _0x3820cb, _0x40e042)["catch"]((_0x16c08d) => {
      broadcastLog("error", "💥 Creator Story crashed: " + _0x16c08d);
    });
    else _0x5ea057 === "podcast" ? (creatorPodcastRunner = new CreatorPodcastRunner(), creatorPodcastRunner["start"](_0x2f2bdb, _0x3820cb, _0x40e042)["catch"]((_0x4c4565) => {
      broadcastLog("error", "💥 Creator Podcast crashed: " + _0x4c4565);
    })) : broadcastLog("warn", '⚠ Creator sub-mode "' + _0x5ea057 + '" ยังไม่รองรับ');
    return;
  }
  runner = new PipelineRunner(), runner["start"](_0x2f672d, _0xe2cd6f, _0x3820cb)["catch"]((_0x502f6e) => {
    broadcastLog("error", "💥 Pipeline crashed: " + _0x502f6e);
  });
}), router["on"]("PREPARE_STORY_BLUEPRINT", async (_0x1e9d1d, _0xbe6d19, _0x54c91e) => {
  try {
    const _0x469867 = _0x1e9d1d["config"], { prepareStoryBlueprint: _0x30fdda } = await __vitePreload(async () => {
      const { prepareStoryBlueprint: _0x30fdda2 } = await Promise.resolve().then(() => storyBlueprintService);
      return { prepareStoryBlueprint: _0x30fdda2 };
    }, true ? void 0 : void 0), _0x140d81 = await _0x30fdda(_0x469867);
    _0x54c91e(_0x140d81);
  } catch (_0x2350d8) {
    _0x54c91e({ "ok": ![], "phase": "blueprint", "error": _0x2350d8 instanceof Error ? _0x2350d8["message"] : String(_0x2350d8) });
  }
}), router["on"]("PREPARE_PRODUCT_BLUEPRINT", async (_0x20165c, _0x29a4bd, _0x31c2bd) => {
  try {
    const { product: _0x44c103, settings: _0x45e752 } = _0x20165c, { prepareProductBlueprint: _0x36c3d0 } = await __vitePreload(async () => {
      const { prepareProductBlueprint: _0x36c3d02 } = await Promise.resolve().then(() => autoBlueprintService);
      return { prepareProductBlueprint: _0x36c3d02 };
    }, true ? void 0 : void 0), _0x2d4101 = await _0x36c3d0(_0x44c103, _0x45e752);
    _0x31c2bd(_0x2d4101);
  } catch (_0x169a3b) {
    _0x31c2bd({ "ok": ![], "error": _0x169a3b instanceof Error ? _0x169a3b["message"] : String(_0x169a3b) });
  }
}), router["on"]("PIPELINE_STOP", async (_0x30595b, _0x40a3f9, _0x5647ce) => {
  log["info"]("Pipeline stop requested"), runner && (runner["stop"](), runner = null), creatorStoryRunner && (creatorStoryRunner["stop"](), creatorStoryRunner = null), creatorPodcastRunner && (creatorPodcastRunner["stop"](), creatorPodcastRunner = null), postRunner && (postRunner["requestStop"](), postRunner = null), _0x5647ce({ "success": !![] });
}), router["on"]("FLOW_CONTENT_READY", async (_0x596ce1, _0x1fece6, _0x3d4f46) => {
  var _a2;
  log["info"]("Flow content script ready", { "url": _0x596ce1["url"], "tabId": (_a2 = _0x1fece6["tab"]) == null ? void 0 : _a2["id"] });
}), router["on"]("DEBUG_DOWNLOAD_AND_TIKTOK", async (_0x3b917a, _0x44cfc1, _0x5b094d) => {
  var _a2;
  const _0x213fe4 = async (_0x1af9e2, _0x27f1f2, _0x53baa1, _0x233954) => {
    const _0x16ba1c = Date["now"]() + _0x233954;
    while (Date["now"]() < _0x16ba1c) {
      try {
        const _0x998ebd = await chrome["tabs"]["sendMessage"](_0x1af9e2, { "type": _0x27f1f2, "payload": _0x53baa1 });
        if (_0x998ebd == null ? void 0 : _0x998ebd["ready"]) return !![];
      } catch {
      }
      await new Promise((_0x4c2ad2) => setTimeout(_0x4c2ad2, 1e3));
    }
    return ![];
  };
  try {
    const _0x1135f6 = await findTabByUrl("labs.google/fx/tools/flow");
    if (!(_0x1135f6 == null ? void 0 : _0x1135f6["id"])) {
      _0x5b094d({ "success": ![], "error": "no Flow tab — เปิด labs.google/fx/tools/flow ก่อน" });
      return;
    }
    const _0x146956 = _0x1135f6["id"];
    log["info"]("[DEBUG_PIPELINE] Flow tab=" + _0x146956 + ' url="' + (_0x1135f6["url"] || "")["slice"](0, 80) + '"'), broadcastLog("info", "🚀 [debug] Flow tab=" + _0x146956);
    const _0x69c920 = await _0x213fe4(_0x146956, "FLOW_PING", null, 1e4);
    if (!_0x69c920) {
      _0x5b094d({ "success": ![], "error": "Flow content script ไม่ตอบ — refresh Flow tab แล้วลองใหม่" });
      return;
    }
    broadcastLog("info", "✓ Flow content script พร้อม");
    let _0xb981b7 = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/upload*" }), _0x27e065 = (_a2 = _0xb981b7["find"]((_0x5d80b9) => _0x5d80b9["id"])) == null ? void 0 : _a2["id"];
    if (!_0x27e065) {
      _0xb981b7 = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/*" });
      const _0x48d68a = _0xb981b7[0];
      if (!(_0x48d68a == null ? void 0 : _0x48d68a["id"])) {
        _0x5b094d({ "success": ![], "error": "no TikTok tab — เปิด tiktok.com/tiktokstudio/upload + login ก่อน" });
        return;
      }
      _0x5b094d({ "success": ![], "error": "TikTok tab อยู่ที่ " + (_0x48d68a["url"] || "")["slice"](0, 60) + " — ไม่ใช่ /upload (อาจถูก redirect ไป login หรือ home) — login + ไป /upload ก่อน" });
      return;
    }
    const _0x24478a = await chrome["tabs"]["get"](_0x27e065);
    log["info"]("[DEBUG_PIPELINE] TikTok tab=" + _0x27e065 + ' url="' + (_0x24478a["url"] || "")["slice"](0, 80) + '" status=' + _0x24478a["status"]), broadcastLog("info", "📱 [debug] TikTok tab=" + _0x27e065 + " (" + _0x24478a["status"] + ")");
    _0x24478a["status"] !== "complete" && (broadcastLog("info", "⏳ รอ TikTok tab โหลดเสร็จ..."), await new Promise((_0x35698a) => setTimeout(_0x35698a, 3e3)));
    const _0x39d62c = await _0x213fe4(_0x27e065, "TIKTOK_POST", { "action": "ping" }, 15e3);
    if (!_0x39d62c) {
      _0x5b094d({ "success": ![], "error": "TikTok content script ไม่ตอบ (15s) — refresh TikTok tab + รอ login session เสร็จ + ลองใหม่" });
      return;
    }
    broadcastLog("info", "✓ TikTok content script พร้อม");
    const { captureAndFetchFlowDownload: _0x59dbc2 } = await __vitePreload(async () => {
      const { captureAndFetchFlowDownload: _0x59dbc22 } = await Promise.resolve().then(() => genVideo);
      return { captureAndFetchFlowDownload: _0x59dbc22 };
    }, true ? void 0 : void 0);
    broadcastLog("info", "💾 [debug] trigger Download (direct) + capture blob...");
    const _0x44c9cb = await _0x59dbc2(_0x146956, async () => {
      try {
        await chrome["tabs"]["sendMessage"](_0x146956, { "type": "FLOW_DOWNLOAD_SCENE_DIRECT", "payload": { "timeoutMs": 3 * 6e4 } });
      } catch (_0x447cc8) {
        log["error"]("[DEBUG_PIPELINE] FLOW_DOWNLOAD_SCENE_DIRECT throw: " + _0x447cc8);
      }
    }, 4 * 6e4);
    if (!_0x44c9cb) {
      _0x5b094d({ "success": ![], "error": "capture+fetch fail — ดู service worker console log" });
      return;
    }
    const _0x3629cb = (_0x44c9cb["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
    broadcastLog("success", "✓ [debug] capture สำเร็จ ~" + _0x3629cb + " MB");
    let _0xe96f72 = _0x44c9cb;
    const _0x479b02 = 20 * 1024 * 1024;
    if (_0x44c9cb["length"] > _0x479b02) {
      broadcastLog("info", "📦 [debug] ไฟล์ใหญ่ (" + _0x3629cb + " MB) — ส่ง chunked ไป TikTok");
      const { sendChunked: _0x3e994f } = await __vitePreload(async () => {
        const { sendChunked: _0x3e994f2 } = await Promise.resolve().then(() => postTiktok);
        return { sendChunked: _0x3e994f2 };
      }, true ? void 0 : void 0), _0x214201 = await _0x3e994f(_0x27e065, _0x44c9cb);
      _0xe96f72 = "chunked:" + _0x214201;
    }
    broadcastLog("info", "📤 [debug] ส่ง TIKTOK_UPLOAD_VIDEO (draft, no caption)..."), await chrome["tabs"]["update"](_0x27e065, { "active": !![] });
    try {
      await chrome["tabs"]["sendMessage"](_0x27e065, { "type": "TIKTOK_UPLOAD_VIDEO", "payload": { "videoUrl": _0xe96f72, "caption": "", "hashtags": [], "postType": "draft", "noBasket": !![], "notAiGenerated": ![], "basketName": "", "productName": "AutoGenX Debug" } });
    } catch (_0x17e45c) {
      _0x5b094d({ "success": ![], "error": "TIKTOK_UPLOAD_VIDEO sendMessage fail: " + _0x17e45c });
      return;
    }
    broadcastLog("success", "✓ [debug] upload triggered — ดู TikTok tab + drafts"), _0x5b094d({ "success": !![], "sizeMb": _0x3629cb });
  } catch (_0x568cd5) {
    log["error"]("[DEBUG_PIPELINE] " + _0x568cd5), _0x5b094d({ "success": ![], "error": String(_0x568cd5) });
  }
}), router["on"]("DEBUG_EXTEND_2_CLIPS_PIPELINE", async (_0x1c6940, _0x1d6b38, _0x190121) => {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j;
  const _0x44d93f = _0x1c6940 || {}, _0x5271bd = _0x44d93f["prompt"] || "continue the scene with the same character", _0x3c48fe = _0x44d93f["matchText"] || "Extend", _0x5d0c02 = typeof _0x44d93f["trimDx"] === "number" ? _0x44d93f["trimDx"] : -100, _0x53679e = _0x44d93f["outputMode"] || "download", _0x12cdbf = _0x44d93f["postCreateWaitMs"] ?? 1e4, _0x335ac0 = (_0x34c980) => new Promise((_0x33a60f) => setTimeout(_0x33a60f, _0x34c980)), _0x41af0a = async (_0x38668a, _0x1d8e47, _0x5c156e) => {
    try {
      return await chrome["tabs"]["sendMessage"](_0x38668a, { "type": _0x1d8e47, "payload": _0x5c156e });
    } catch (_0x30b53c) {
      return log["error"]("[pipeline] " + _0x1d8e47 + " throw: " + _0x30b53c), null;
    }
  }, _0x54ce90 = async (_0x598838, _0x1530e7) => {
    const _0x50da62 = await _0x41af0a(_0x598838, "FLOW_LIST_CLIPS");
    if (!(_0x50da62 == null ? void 0 : _0x50da62["success"])) return null;
    broadcastLog("info", "📋 " + _0x1530e7 + ": " + _0x50da62["count"] + " clip(s)");
    for (const _0x3da566 of _0x50da62["clips"]) {
      broadcastLog("info", "    [" + _0x3da566["idx"] + "] " + _0x3da566["clipId"]["slice"](0, 30) + "... (" + _0x3da566["widthPx"] + "px)");
    }
    return { "count": _0x50da62["count"], "clips": _0x50da62["clips"] };
  };
  try {
    const _0x25f0fd = await findTabByUrl("labs.google/fx/tools/flow");
    if (!(_0x25f0fd == null ? void 0 : _0x25f0fd["id"])) {
      _0x190121({ "success": ![], "error": "no Flow tab" });
      return;
    }
    const _0xa3c382 = _0x25f0fd["id"];
    broadcastLog("info", "🎬 ═══ START extend 2 clips pipeline ═══"), broadcastLog("info", "🔌 Flow tab=" + _0xa3c382 + " | ping...");
    const _0x32fe2c = await _0x41af0a(_0xa3c382, "FLOW_PING");
    if (!(_0x32fe2c == null ? void 0 : _0x32fe2c["ready"])) {
      _0x190121({ "success": ![], "error": "Flow content script ไม่ตอบ — refresh Flow tab" });
      return;
    }
    broadcastLog("info", "   ✓ Flow content script พร้อม"), broadcastLog("info", "─── [6a] baseline snapshot ───");
    const _0xa0d821 = await _0x54ce90(_0xa3c382, "baseline");
    if (!_0xa0d821) {
      _0x190121({ "success": ![], "error": "baseline FLOW_LIST_CLIPS fail" });
      return;
    }
    const _0x13e7ea = _0xa0d821["count"];
    broadcastLog("info", "─── [1] open Add menu ───");
    const _0x484056 = await _0x41af0a(_0xa3c382, "FLOW_EXTEND_OPEN_ADD_MENU");
    if (!(_0x484056 == null ? void 0 : _0x484056["success"])) {
      _0x190121({ "success": ![], "error": "[1] fail: " + ((_0x484056 == null ? void 0 : _0x484056["error"]) || "no response") });
      return;
    }
    broadcastLog("info", "   ✓ menu opened (" + _0x484056["menuItemsCount"] + " items)"), broadcastLog("info", '─── [2] pick option (match="' + _0x3c48fe + '") ───');
    const _0x2d048e = await _0x41af0a(_0xa3c382, "FLOW_EXTEND_PICK_MENU_OPTION", { "match": _0x3c48fe });
    if (!(_0x2d048e == null ? void 0 : _0x2d048e["success"])) {
      _0x190121({ "success": ![], "error": "[2] fail: " + ((_0x2d048e == null ? void 0 : _0x2d048e["error"]) || "no response") });
      return;
    }
    broadcastLog("info", '   ✓ picked: "' + _0x2d048e["picked"] + '"'), broadcastLog("info", "─── [3] type prompt (" + _0x5271bd["length"] + " chars) ───"), broadcastLog("info", '   "' + _0x5271bd["slice"](0, 60) + (_0x5271bd["length"] > 60 ? "..." : "") + '"');
    const _0x5f0c30 = await _0x41af0a(_0xa3c382, "FLOW_EXTEND_TYPE_PROMPT", { "text": _0x5271bd });
    if (!(_0x5f0c30 == null ? void 0 : _0x5f0c30["success"])) {
      _0x190121({ "success": ![], "error": "[3] fail: " + ((_0x5f0c30 == null ? void 0 : _0x5f0c30["error"]) || "no response") });
      return;
    }
    broadcastLog("info", "   ✓ typed into " + _0x5f0c30["editorTag"] + ' → now="' + (_0x5f0c30["currentText"] || "")["slice"](0, 40) + '..."'), broadcastLog("info", "─── [4] click Create ───");
    const _0x2f742b = await _0x41af0a(_0xa3c382, "FLOW_EXTEND_CLICK_CREATE");
    if (!(_0x2f742b == null ? void 0 : _0x2f742b["success"])) {
      _0x190121({ "success": ![], "error": "[4] fail: " + ((_0x2f742b == null ? void 0 : _0x2f742b["error"]) || "no response") });
      return;
    }
    broadcastLog("info", "   ✓ clicked at (" + ((_a2 = _0x2f742b["clickedAt"]) == null ? void 0 : _a2["x"]) + "," + ((_b2 = _0x2f742b["clickedAt"]) == null ? void 0 : _b2["y"]) + ") remeasured=" + _0x2f742b["coordsRemeasured"]), broadcastLog("info", "⏳ รอ " + Math["round"](_0x12cdbf / 1e3) + "s ให้ Flow เปลี่ยนหน้า /edit/ → /scene/..."), await _0x335ac0(_0x12cdbf), broadcastLog("info", "─── [6b] list clips (หลัง Create) ───");
    const _0x3300cd = await _0x54ce90(_0xa3c382, "หลัง [4]");
    if (!_0x3300cd) {
      _0x190121({ "success": ![], "error": "[6b] FLOW_LIST_CLIPS fail" });
      return;
    }
    let _0x4baf81 = _0x3300cd["count"];
    if (_0x4baf81 <= _0x13e7ea) {
      _0x190121({ "success": ![], "error": "[6b] EN=" + _0x4baf81 + " ≤ baseline=" + _0x13e7ea + " — Create อาจไม่สำเร็จ (clip ใหม่ไม่ปรากฏ)" });
      return;
    }
    broadcastLog("success", "   ✓ EN=" + _0x4baf81 + " (baseline=" + _0x13e7ea + ", +" + (_0x4baf81 - _0x13e7ea) + " clip)");
    const _0xcebc40 = _0x4baf81 - 1;
    broadcastLog("info", "─── [10] wait clip[" + _0xcebc40 + "] frames ───"), broadcastLog("info", "   target: clip[" + _0xcebc40 + "] (EN-1) | poll 2.5s | timeout 5min");
    const _0x1b29e9 = await _0x41af0a(_0xa3c382, "FLOW_WAIT_NEW_CLIP_READY", { "previousCount": _0x13e7ea, "timeoutMs": 5 * 6e4, "minFrames": 1 });
    if (!(_0x1b29e9 == null ? void 0 : _0x1b29e9["success"]) || !_0x1b29e9["ready"]) {
      _0x190121({ "success": ![], "error": "[10] wait fail: " + (_0x1b29e9 == null ? void 0 : _0x1b29e9["error"]) + " (phase=" + (_0x1b29e9 == null ? void 0 : _0x1b29e9["phase"]) + ")" });
      return;
    }
    broadcastLog("success", "   ✓ clip ready: id=" + (_0x1b29e9["clipId"] || "")["slice"](0, 30) + "... imgs=" + _0x1b29e9["imgCount"]), broadcastLog("info", "─── [6c] refresh clips (lock target index) ───");
    const _0x405b64 = await _0x54ce90(_0xa3c382, "หลัง [10]");
    if (!_0x405b64) {
      _0x190121({ "success": ![], "error": "[6c] FLOW_LIST_CLIPS fail" });
      return;
    }
    _0x4baf81 = _0x405b64["count"];
    const _0x3ceafb = _0x4baf81 - 2;
    if (_0x3ceafb < 0) {
      _0x190121({ "success": ![], "error": "[6c] targetIdx=EN-2=" + _0x3ceafb + " < 0 (EN=" + _0x4baf81 + ") — ต้องมีอย่างน้อย 2 clips" });
      return;
    }
    const _0x471fed = _0x405b64["clips"][_0x3ceafb];
    if (!_0x471fed) {
      _0x190121({ "success": ![], "error": "[6c] no clip at idx=" + _0x3ceafb + " (EN=" + _0x4baf81 + ")" });
      return;
    }
    broadcastLog("success", "   🎯 target = clip[" + _0x3ceafb + "] (EN-2 = clip ก่อนสุดท้าย) id=" + _0x471fed["clipId"]["slice"](0, 30) + "... (" + _0x471fed["widthPx"] + "px) — lock"), broadcastLog("info", "─── [5] click clip[" + _0x3ceafb + "] (EN-2) ───");
    const _0x1fb76c = await _0x41af0a(_0xa3c382, "FLOW_CLICK_CLIP", { "clipIndex": _0x3ceafb, "useCdp": ![] });
    if (!(_0x1fb76c == null ? void 0 : _0x1fb76c["success"])) {
      _0x190121({ "success": ![], "error": "[5] fail: " + (_0x1fb76c == null ? void 0 : _0x1fb76c["error"]) });
      return;
    }
    _0x1fb76c["clipId"] !== _0x471fed["clipId"] ? broadcastLog("warn", "   ⚠ clicked clip-id ไม่ตรง — wanted=" + _0x471fed["clipId"]["slice"](0, 20) + "... got=" + (_0x1fb76c["clipId"] || "")["slice"](0, 20) + "...") : broadcastLog("success", "   ✓ [" + _0x1fb76c["method"] + "] clicked clip[" + _0x1fb76c["clipIndexResolved"] + "] id=" + (_0x1fb76c["clipId"] || "")["slice"](0, 30) + "... at (" + ((_c = _0x1fb76c["clickedAt"]) == null ? void 0 : _c["x"]) + "," + ((_d = _0x1fb76c["clickedAt"]) == null ? void 0 : _d["y"]) + ")");
    await _0x335ac0(800), broadcastLog("info", "─── [9] trim clip[" + _0x3ceafb + "] (EN-2) dx=" + _0x5d0c02 + "px ───");
    const _0x2316b3 = await _0x41af0a(_0xa3c382, "FLOW_TRIM_CLIP_BY_PX", { "clipIndex": _0x3ceafb, "dx": _0x5d0c02, "useCdp": ![] });
    if (!(_0x2316b3 == null ? void 0 : _0x2316b3["success"])) {
      _0x190121({ "success": ![], "error": "[9] fail: " + (_0x2316b3 == null ? void 0 : _0x2316b3["error"]) });
      return;
    }
    _0x2316b3["clipId"] !== _0x471fed["clipId"] ? broadcastLog("warn", "   ⚠ trim clip-id ไม่ตรง — wanted=" + _0x471fed["clipId"]["slice"](0, 20) + "... got=" + (_0x2316b3["clipId"] || "")["slice"](0, 20) + "...") : broadcastLog("success", "   ✓ [" + _0x2316b3["method"] + "] trim clip[" + _0x2316b3["clipIndexResolved"] + "] id=" + (_0x2316b3["clipId"] || "")["slice"](0, 30) + "... | width " + ((_e = _0x2316b3["clipRect"]) == null ? void 0 : _e["width"]) + "→" + ((_f = _0x2316b3["rectAfter"]) == null ? void 0 : _f["width"]) + " (Δ" + ((_g = _0x2316b3["rectAfter"]) == null ? void 0 : _g["widthDelta"]) + "px) | drag (" + _0x2316b3["startX"] + "," + _0x2316b3["startY"] + ")→(" + _0x2316b3["endX"] + "," + _0x2316b3["endY"] + ")");
    if (_0x53679e === "download") {
      broadcastLog("info", "─── [7] download (direct) ───");
      const _0x164a85 = await _0x41af0a(_0xa3c382, "FLOW_DOWNLOAD_SCENE_DIRECT", { "timeoutMs": 3 * 6e4 });
      if (!(_0x164a85 == null ? void 0 : _0x164a85["success"])) {
        _0x190121({ "success": ![], "error": "[7] download fail: " + (_0x164a85 == null ? void 0 : _0x164a85["error"]) });
        return;
      }
      const _0x7656f4 = Math["round"]((_0x164a85["totalMs"] ?? 0) / 1e3);
      broadcastLog("success", "   ✓ exported " + _0x7656f4 + "s (saw exporting=" + _0x164a85["sawExporting"] + ", complete=" + _0x164a85["sawComplete"] + ")"), broadcastLog("success", "🎉 ═══ PIPELINE COMPLETE — เช็ค chrome://downloads/ ═══"), _0x190121({ "success": !![], "EN": _0x4baf81, "output": "download", "trimDelta": (_h = _0x2316b3["rectAfter"]) == null ? void 0 : _h["widthDelta"] });
    } else {
      broadcastLog("info", "─── [8] download + fetch + upload TikTok (draft) ───");
      const _0x20e70d = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/upload*" }), _0x2c9bbf = (_i = _0x20e70d["find"]((_0x56086d) => _0x56086d["id"])) == null ? void 0 : _i["id"];
      if (!_0x2c9bbf) {
        _0x190121({ "success": ![], "error": "[8] no TikTok upload tab — เปิด tiktok.com/tiktokstudio/upload ก่อน" });
        return;
      }
      broadcastLog("info", "   TikTok tab=" + _0x2c9bbf + " | ping...");
      const _0x249984 = await _0x41af0a(_0x2c9bbf, "TIKTOK_POST", { "action": "ping" });
      if (!(_0x249984 == null ? void 0 : _0x249984["ready"])) {
        _0x190121({ "success": ![], "error": "[8] TikTok content script ไม่ตอบ — refresh TikTok tab + login" });
        return;
      }
      broadcastLog("info", "   ✓ TikTok content script พร้อม");
      const { captureAndFetchFlowDownload: _0x3771aa } = await __vitePreload(async () => {
        const { captureAndFetchFlowDownload: _0x3771aa2 } = await Promise.resolve().then(() => genVideo);
        return { captureAndFetchFlowDownload: _0x3771aa2 };
      }, true ? void 0 : void 0);
      broadcastLog("info", "   💾 trigger Download (direct) + capture blob...");
      const _0x1b09fd = await _0x3771aa(_0xa3c382, async () => {
        try {
          await chrome["tabs"]["sendMessage"](_0xa3c382, { "type": "FLOW_DOWNLOAD_SCENE_DIRECT", "payload": { "timeoutMs": 3 * 6e4 } });
        } catch (_0x40e91a) {
          log["error"]("[pipeline] download throw: " + _0x40e91a);
        }
      }, 4 * 6e4);
      if (!_0x1b09fd) {
        _0x190121({ "success": ![], "error": "[8] capture+fetch fail" });
        return;
      }
      const _0x2575f6 = (_0x1b09fd["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
      broadcastLog("success", "   ✓ capture สำเร็จ ~" + _0x2575f6 + " MB");
      let _0x3fe97c = _0x1b09fd;
      if (_0x1b09fd["length"] > 20 * 1024 * 1024) {
        broadcastLog("info", "   📦 ไฟล์ใหญ่ (" + _0x2575f6 + " MB) — ส่ง chunked");
        const { sendChunked: _0x1b73f0 } = await __vitePreload(async () => {
          const { sendChunked: _0x1b73f02 } = await Promise.resolve().then(() => postTiktok);
          return { sendChunked: _0x1b73f02 };
        }, true ? void 0 : void 0), _0xf0c7d6 = await _0x1b73f0(_0x2c9bbf, _0x1b09fd);
        _0x3fe97c = "chunked:" + _0xf0c7d6;
      }
      broadcastLog("info", "   📤 ส่ง TIKTOK_UPLOAD_VIDEO (draft, no caption)..."), await chrome["tabs"]["update"](_0x2c9bbf, { "active": !![] });
      try {
        await chrome["tabs"]["sendMessage"](_0x2c9bbf, { "type": "TIKTOK_UPLOAD_VIDEO", "payload": { "videoUrl": _0x3fe97c, "caption": "", "hashtags": [], "postType": "draft", "noBasket": !![], "notAiGenerated": ![], "basketName": "", "productName": "AutoGenX Pipeline Test" } });
      } catch (_0x24f795) {
        _0x190121({ "success": ![], "error": "[8] TIKTOK_UPLOAD_VIDEO sendMessage fail: " + _0x24f795 });
        return;
      }
      broadcastLog("success", "🎉 ═══ PIPELINE COMPLETE — เช็ค TikTok drafts ═══"), _0x190121({ "success": !![], "EN": _0x4baf81, "output": "tiktok", "sizeMb": _0x2575f6, "trimDelta": (_j = _0x2316b3["rectAfter"]) == null ? void 0 : _j["widthDelta"] });
    }
  } catch (_0x3b8ac8) {
    log["error"]("[pipeline] " + _0x3b8ac8), _0x190121({ "success": ![], "error": String(_0x3b8ac8) });
  }
}), router["on"]("DEBUG_EXTEND_N_CLIPS_PIPELINE", async (_0x118ab7, _0x35054e, _0x1e5b37) => {
  var _a2, _b2, _c, _d, _e, _f;
  const _0x261d64 = _0x118ab7 || {}, _0x139a26 = Math["max"](2, Math["min"](10, _0x261d64["totalClips"] ?? 2)), _0x2d9b73 = _0x261d64["prompt"] || "continue the scene with the same character", _0x139c22 = _0x261d64["matchText"] || "Extend", _0x2a6815 = _0x261d64["outputMode"] || "download", _0x4109e3 = _0x261d64["postCreateWaitMs"] ?? 1e4, _0x19c13f = _0x261d64["maxRetries"] ?? 3, _0x129c16 = -100, _0xdd6f06 = (_0x358c95) => new Promise((_0x2209b1) => setTimeout(_0x2209b1, _0x358c95)), _0x51e122 = async (_0x3fc8ab, _0x770952, _0x7905b) => {
    try {
      return await chrome["tabs"]["sendMessage"](_0x3fc8ab, { "type": _0x770952, "payload": _0x7905b });
    } catch (_0x5e84d6) {
      return log["error"]("[N-pipeline] " + _0x770952 + " throw: " + _0x5e84d6), null;
    }
  }, _0x1e302e = async (_0x1ec18c, _0x2838b4) => {
    const _0x545248 = await _0x51e122(_0x1ec18c, "FLOW_LIST_CLIPS");
    if (!(_0x545248 == null ? void 0 : _0x545248["success"])) return null;
    broadcastLog("info", "📋 " + _0x2838b4 + ": " + _0x545248["count"] + " clip(s)");
    for (const _0x333dca of _0x545248["clips"]) {
      broadcastLog("info", "    [" + _0x333dca["idx"] + "] " + _0x333dca["clipId"]["slice"](0, 30) + "... (" + _0x333dca["widthPx"] + "px)");
    }
    return { "count": _0x545248["count"], "clips": _0x545248["clips"] };
  };
  try {
    const _0xa97fe5 = await findTabByUrl("labs.google/fx/tools/flow");
    if (!(_0xa97fe5 == null ? void 0 : _0xa97fe5["id"])) {
      _0x1e5b37({ "success": ![], "error": "no Flow tab" });
      return;
    }
    const _0x29ec2c = _0xa97fe5["id"];
    broadcastLog("info", "🎬 ═══ START extend " + _0x139a26 + " clips (" + (_0x139a26 - 1) + " iterations) ═══");
    const _0x1d714b = await _0x51e122(_0x29ec2c, "FLOW_PING");
    if (!(_0x1d714b == null ? void 0 : _0x1d714b["ready"])) {
      _0x1e5b37({ "success": ![], "error": "Flow content script ไม่ตอบ" });
      return;
    }
    broadcastLog("info", "─── baseline snapshot ───");
    const _0x57c66f = await _0x1e302e(_0x29ec2c, "baseline");
    if (!_0x57c66f) {
      _0x1e5b37({ "success": ![], "error": "baseline FLOW_LIST_CLIPS fail" });
      return;
    }
    let _0x403aeb = _0x57c66f["count"];
    for (let _0x12830b = 1; _0x12830b < _0x139a26; _0x12830b++) {
      const _0x375c36 = _0x12830b === 1;
      broadcastLog("info", "╔══════ Iteration " + _0x12830b + "/" + (_0x139a26 - 1) + " (สร้าง clip #" + (_0x12830b + 1) + ", total → " + (_0x12830b + 1) + ") ══════╗");
      let _0x20eac0 = ![], _0x5d8d56 = "";
      for (let _0x4c2c24 = 1; _0x4c2c24 <= _0x19c13f && !_0x20eac0; _0x4c2c24++) {
        if (_0x4c2c24 > 1) broadcastLog("warn", "↻ retry " + _0x4c2c24 + "/" + _0x19c13f + " — iteration " + _0x12830b);
        if (!_0x375c36) {
          const _0x5e1e1b = await _0x1e302e(_0x29ec2c, "pre-extend (iter " + _0x12830b + " attempt " + _0x4c2c24 + ")");
          if (!_0x5e1e1b) {
            _0x5d8d56 = "pre-extend list fail";
            continue;
          }
          const _0x59b71a = _0x5e1e1b["count"] - 1;
          broadcastLog("info", "─── [5] click clip[" + _0x59b71a + "] (activate latest) ───");
          const _0x32e639 = await _0x51e122(_0x29ec2c, "FLOW_CLICK_CLIP", { "clipIndex": _0x59b71a, "useCdp": ![] });
          if (!(_0x32e639 == null ? void 0 : _0x32e639["success"])) {
            _0x5d8d56 = "pre-[5] fail: " + (_0x32e639 == null ? void 0 : _0x32e639["error"]);
            continue;
          }
          broadcastLog("info", "   ✓ activated clip[" + _0x59b71a + "]"), await _0xdd6f06(800);
        }
        broadcastLog("info", "─── [1] open Add menu ───");
        const _0x177b50 = await _0x51e122(_0x29ec2c, "FLOW_EXTEND_OPEN_ADD_MENU");
        if (!(_0x177b50 == null ? void 0 : _0x177b50["success"])) {
          _0x5d8d56 = "[1] fail: " + (_0x177b50 == null ? void 0 : _0x177b50["error"]);
          continue;
        }
        broadcastLog("info", "   ✓ menu opened (" + _0x177b50["menuItemsCount"] + " items)"), broadcastLog("info", '─── [2] pick option "' + _0x139c22 + '" ───');
        const _0xe97f61 = await _0x51e122(_0x29ec2c, "FLOW_EXTEND_PICK_MENU_OPTION", { "match": _0x139c22 });
        if (!(_0xe97f61 == null ? void 0 : _0xe97f61["success"])) {
          _0x5d8d56 = "[2] fail: " + (_0xe97f61 == null ? void 0 : _0xe97f61["error"]);
          continue;
        }
        broadcastLog("info", '   ✓ picked: "' + _0xe97f61["picked"] + '"'), broadcastLog("info", "─── [3] type prompt (" + _0x2d9b73["length"] + " chars) ───");
        const _0x45dbd4 = await _0x51e122(_0x29ec2c, "FLOW_EXTEND_TYPE_PROMPT", { "text": _0x2d9b73 });
        if (!(_0x45dbd4 == null ? void 0 : _0x45dbd4["success"])) {
          _0x5d8d56 = "[3] fail: " + (_0x45dbd4 == null ? void 0 : _0x45dbd4["error"]);
          continue;
        }
        broadcastLog("info", "─── [4] click Create ───");
        const _0x315005 = await _0x51e122(_0x29ec2c, "FLOW_EXTEND_CLICK_CREATE");
        if (!(_0x315005 == null ? void 0 : _0x315005["success"])) {
          _0x5d8d56 = "[4] fail: " + (_0x315005 == null ? void 0 : _0x315005["error"]);
          continue;
        }
        broadcastLog("info", "   ✓ clicked at (" + ((_a2 = _0x315005["clickedAt"]) == null ? void 0 : _a2["x"]) + "," + ((_b2 = _0x315005["clickedAt"]) == null ? void 0 : _b2["y"]) + ")");
        _0x375c36 ? (broadcastLog("info", "⏳ รอ " + Math["round"](_0x4109e3 / 1e3) + "s ให้ Flow เปลี่ยน /edit/→/scene/..."), await _0xdd6f06(_0x4109e3)) : await _0xdd6f06(1500);
        broadcastLog("info", "─── [6] list clips (หลัง Create) ───");
        const _0xf7ce5b = await _0x1e302e(_0x29ec2c, "หลัง [4]");
        if (!_0xf7ce5b) {
          _0x5d8d56 = "[6] list fail";
          continue;
        }
        if (_0xf7ce5b["count"] <= _0x403aeb) {
          _0x5d8d56 = "[6] EN=" + _0xf7ce5b["count"] + " ≤ baseline=" + _0x403aeb + " — Create ไม่สร้าง clip", broadcastLog("warn", "   ⚠ " + _0x5d8d56);
          continue;
        }
        broadcastLog("success", "   ✓ EN=" + _0xf7ce5b["count"] + " (baseline=" + _0x403aeb + ", +" + (_0xf7ce5b["count"] - _0x403aeb) + ")");
        const _0x30c5a7 = _0xf7ce5b["count"] - 1;
        broadcastLog("info", "─── [10] wait clip[" + _0x30c5a7 + "] frames (timeout 5min) ───");
        const _0x2a3bba = await _0x51e122(_0x29ec2c, "FLOW_WAIT_NEW_CLIP_READY", { "previousCount": _0x403aeb, "timeoutMs": 5 * 6e4, "minFrames": 1 });
        if (!(_0x2a3bba == null ? void 0 : _0x2a3bba["success"]) || !_0x2a3bba["ready"]) {
          _0x5d8d56 = "[10] wait fail: " + (_0x2a3bba == null ? void 0 : _0x2a3bba["error"]) + " (phase=" + (_0x2a3bba == null ? void 0 : _0x2a3bba["phase"]) + ")", broadcastLog("warn", "   ⚠ " + _0x5d8d56);
          continue;
        }
        broadcastLog("success", "   ✓ clip ready: id=" + (_0x2a3bba["clipId"] || "")["slice"](0, 30) + "... imgs=" + _0x2a3bba["imgCount"]), broadcastLog("info", "─── [6] refresh + lock target index ───");
        const _0x2cef4f = await _0x1e302e(_0x29ec2c, "หลัง [10]");
        if (!_0x2cef4f) {
          _0x5d8d56 = "[6] refresh fail";
          continue;
        }
        const _0x225db9 = _0x2cef4f["count"], _0xd95cba = _0x225db9 - 2;
        if (_0xd95cba < 0) {
          _0x5d8d56 = "[6] targetIdx=" + _0xd95cba + " < 0 (EN=" + _0x225db9 + ")";
          continue;
        }
        const _0x474c5b = _0x2cef4f["clips"][_0xd95cba];
        if (!_0x474c5b) {
          _0x5d8d56 = "[6] no clip at idx=" + _0xd95cba;
          continue;
        }
        broadcastLog("success", "   🎯 target = clip[" + _0xd95cba + "] (EN-2) id=" + _0x474c5b["clipId"]["slice"](0, 30) + "... (" + _0x474c5b["widthPx"] + "px)"), broadcastLog("info", "─── [5] click clip[" + _0xd95cba + "] (EN-2) ───");
        const _0x434f18 = await _0x51e122(_0x29ec2c, "FLOW_CLICK_CLIP", { "clipIndex": _0xd95cba, "useCdp": ![] });
        if (!(_0x434f18 == null ? void 0 : _0x434f18["success"])) {
          _0x5d8d56 = "[5] fail: " + (_0x434f18 == null ? void 0 : _0x434f18["error"]);
          continue;
        }
        _0x434f18["clipId"] !== _0x474c5b["clipId"] ? broadcastLog("warn", "   ⚠ clicked clip-id ไม่ตรง — wanted=" + _0x474c5b["clipId"]["slice"](0, 20) + "... got=" + (_0x434f18["clipId"] || "")["slice"](0, 20) + "...") : broadcastLog("success", "   ✓ [" + _0x434f18["method"] + "] clicked clip[" + _0xd95cba + "]");
        await _0xdd6f06(800), broadcastLog("info", "─── [9] trim clip[" + _0xd95cba + "] (EN-2) dx=" + _0x129c16 + "px ───");
        const _0x52848f = await _0x51e122(_0x29ec2c, "FLOW_TRIM_CLIP_BY_PX", { "clipIndex": _0xd95cba, "dx": _0x129c16, "useCdp": ![] });
        if (!(_0x52848f == null ? void 0 : _0x52848f["success"])) {
          _0x5d8d56 = "[9] fail: " + (_0x52848f == null ? void 0 : _0x52848f["error"]);
          continue;
        }
        _0x52848f["clipId"] !== _0x474c5b["clipId"] ? broadcastLog("warn", "   ⚠ trim clip-id ไม่ตรง — wanted=" + _0x474c5b["clipId"]["slice"](0, 20) + "... got=" + (_0x52848f["clipId"] || "")["slice"](0, 20) + "...") : broadcastLog("success", "   ✓ [" + _0x52848f["method"] + "] width " + ((_c = _0x52848f["clipRect"]) == null ? void 0 : _c["width"]) + "→" + ((_d = _0x52848f["rectAfter"]) == null ? void 0 : _d["width"]) + " (Δ" + ((_e = _0x52848f["rectAfter"]) == null ? void 0 : _e["widthDelta"]) + "px)"), _0x403aeb = _0x225db9, _0x20eac0 = !![], broadcastLog("success", "╚══════ Iteration " + _0x12830b + " สำเร็จ — clip count = " + _0x225db9 + " ══════╝");
      }
      if (!_0x20eac0) {
        _0x1e5b37({ "success": ![], "error": "Iteration " + _0x12830b + "/" + (_0x139a26 - 1) + " fail หลัง " + _0x19c13f + " retries: " + _0x5d8d56 });
        return;
      }
    }
    if (_0x2a6815 === "download") {
      broadcastLog("info", "─── [7] download (direct) ───");
      const _0x467da3 = await _0x51e122(_0x29ec2c, "FLOW_DOWNLOAD_SCENE_DIRECT", { "timeoutMs": 5 * 6e4 });
      if (!(_0x467da3 == null ? void 0 : _0x467da3["success"])) {
        _0x1e5b37({ "success": ![], "error": "[7] download fail: " + (_0x467da3 == null ? void 0 : _0x467da3["error"]) });
        return;
      }
      const _0x4aee8e = Math["round"]((_0x467da3["totalMs"] ?? 0) / 1e3);
      broadcastLog("success", "   ✓ exported " + _0x4aee8e + "s (complete=" + _0x467da3["sawComplete"] + ")"), broadcastLog("success", "🎉 ═══ PIPELINE COMPLETE — " + _0x139a26 + " clips → เช็ค chrome://downloads/ ═══"), _0x1e5b37({ "success": !![], "totalClips": _0x139a26, "output": "download" });
    } else {
      broadcastLog("info", "─── [8] download + fetch + upload TikTok (draft) ───");
      const _0x81775a = await chrome["tabs"]["query"]({ "url": "https://www.tiktok.com/tiktokstudio/upload*" }), _0x8c06e9 = (_f = _0x81775a["find"]((_0x3b8f21) => _0x3b8f21["id"])) == null ? void 0 : _f["id"];
      if (!_0x8c06e9) {
        _0x1e5b37({ "success": ![], "error": "[8] no TikTok upload tab" });
        return;
      }
      const _0x29297f = await _0x51e122(_0x8c06e9, "TIKTOK_POST", { "action": "ping" });
      if (!(_0x29297f == null ? void 0 : _0x29297f["ready"])) {
        _0x1e5b37({ "success": ![], "error": "[8] TikTok content script ไม่ตอบ" });
        return;
      }
      const { captureAndFetchFlowDownload: _0x11d27e } = await __vitePreload(async () => {
        const { captureAndFetchFlowDownload: _0x11d27e2 } = await Promise.resolve().then(() => genVideo);
        return { captureAndFetchFlowDownload: _0x11d27e2 };
      }, true ? void 0 : void 0), _0x50d0e6 = await _0x11d27e(_0x29ec2c, async () => {
        try {
          await chrome["tabs"]["sendMessage"](_0x29ec2c, { "type": "FLOW_DOWNLOAD_SCENE_DIRECT", "payload": { "timeoutMs": 5 * 6e4 } });
        } catch (_0x5df13e) {
          log["error"]("download throw: " + _0x5df13e);
        }
      }, 6 * 6e4);
      if (!_0x50d0e6) {
        _0x1e5b37({ "success": ![], "error": "[8] capture+fetch fail" });
        return;
      }
      const _0x3f3ac0 = (_0x50d0e6["length"] * 3 / 4 / 1024 / 1024)["toFixed"](1);
      broadcastLog("success", "   ✓ capture ~" + _0x3f3ac0 + " MB");
      let _0x562af4 = _0x50d0e6;
      if (_0x50d0e6["length"] > 20 * 1024 * 1024) {
        const { sendChunked: _0x39116e } = await __vitePreload(async () => {
          const { sendChunked: _0x39116e2 } = await Promise.resolve().then(() => postTiktok);
          return { sendChunked: _0x39116e2 };
        }, true ? void 0 : void 0), _0x4bc3b2 = await _0x39116e(_0x8c06e9, _0x50d0e6);
        _0x562af4 = "chunked:" + _0x4bc3b2;
      }
      await chrome["tabs"]["update"](_0x8c06e9, { "active": !![] });
      try {
        await chrome["tabs"]["sendMessage"](_0x8c06e9, { "type": "TIKTOK_UPLOAD_VIDEO", "payload": { "videoUrl": _0x562af4, "caption": "", "hashtags": [], "postType": "draft", "noBasket": !![], "notAiGenerated": ![], "basketName": "", "productName": "AutoGenX Pipeline " + _0x139a26 + "-clips" } });
      } catch (_0x5a14d5) {
        _0x1e5b37({ "success": ![], "error": "[8] TIKTOK_UPLOAD_VIDEO sendMessage fail: " + _0x5a14d5 });
        return;
      }
      broadcastLog("success", "🎉 ═══ PIPELINE COMPLETE — " + _0x139a26 + " clips → เช็ค TikTok drafts ═══"), _0x1e5b37({ "success": !![], "totalClips": _0x139a26, "output": "tiktok", "sizeMb": _0x3f3ac0 });
    }
  } catch (_0x17422c) {
    log["error"]("[N-pipeline] " + _0x17422c), _0x1e5b37({ "success": ![], "error": String(_0x17422c) });
  }
}), router["on"]("FLOW_NOT_LOGGED_IN", async (_0x2e7349, _0x5f0114, _0x514ed1) => {
  log["warn"]("Flow: user not logged in"), broadcastLog("error", "❌ กรุณา Login Google Flow ก่อนใช้งาน — ไปที่ labs.google/fx/tools/flow แล้ว Login ด้วย Google Account"), chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_ERROR", "payload": { "error": "กรุณา Login Google Flow ก่อนใช้งาน" } })["catch"](() => {
  });
});
function broadcastLog(_0x5abecd, _0x5bb24d, _0x30b73d = ![]) {
  log["info"]("[Pipeline] " + _0x5bb24d), sendPipelineLog$1(_0x5abecd, _0x5bb24d, _0x30b73d);
}
async function findTabByUrl(_0x4e115d) {
  const _0x5318da = await chrome["tabs"]["query"]({});
  return _0x5318da["find"]((_0x43bbb3) => {
    var _a2;
    return (_a2 = _0x43bbb3["url"]) == null ? void 0 : _a2["includes"](_0x4e115d);
  });
}
function sleep(_0x37aade) {
  return new Promise((_0x4eaa95) => setTimeout(_0x4eaa95, _0x37aade));
}
const AFFILIATE_API_URL = "https://shop.tiktok.com/api/v1/streamer_desktop/showcase_product/list", AFFILIATE_PAGE_SIZE = 100, AFFILIATE_PAGE_DELAY_MS = 500;
function mapAffiliateProduct(_0x99a9ec) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const _0x4861de = ((_b2 = (_a2 = _0x99a9ec["cover"]) == null ? void 0 : _a2["url_list"]) == null ? void 0 : _b2[0]) || ((_e = (_d = (_c = _0x99a9ec["images"]) == null ? void 0 : _c[0]) == null ? void 0 : _d["url_list"]) == null ? void 0 : _e[0]) || "", _0x1de40d = (_0x99a9ec["images"] ?? [])["map"]((_0x2c1855) => {
    var _a3;
    return (_a3 = _0x2c1855["url_list"]) == null ? void 0 : _a3[0];
  })["filter"]((_0xef90db) => typeof _0xef90db === "string" && _0xef90db["length"] > 0), _0x599bb7 = _0x1de40d["length"] > 0 ? _0x1de40d : _0x4861de ? [_0x4861de] : [], _0x14e6c1 = ((_f = _0x99a9ec["affiliate_info"]) == null ? void 0 : _f["commission_rate"]) ?? 0, _0x2ffaaf = (_0x14e6c1 / 1e3)["toFixed"](1), _0x3e5ea2 = ((_g = _0x99a9ec["category_info"]) == null ? void 0 : _g["name"]) ?? "", _0x516a4e = ((_j = (_i = (_h = _0x99a9ec["category_info"]) == null ? void 0 : _h["option_children"]) == null ? void 0 : _i[0]) == null ? void 0 : _j["name"]) ?? "", _0x4620d8 = [_0x3e5ea2, _0x516a4e]["filter"](Boolean)["join"](" > "), _0x5a94ed = (_0x99a9ec["format_available_price"] ?? "")["replace"](/[฿$\s]/g, "");
  return { "productId": _0x99a9ec["product_id"] ?? "", "name": _0x99a9ec["title"] ?? "", "price": _0x5a94ed, "stock": String(_0x99a9ec["stock_num"] ?? 0), "imageUrl": _0x4861de, "allImages": _0x599bb7, "commissionRate": _0x2ffaaf, "commission": ((_k = _0x99a9ec["affiliate_info"]) == null ? void 0 : _k["est_commission_expense"]) ?? "", "category": _0x4620d8, "shopName": ((_l = _0x99a9ec["seller_info"]) == null ? void 0 : _l["shop_name"]) ?? "", "selected": ![] };
}
async function fetchAffiliateProducts() {
  var _a2;
  const _0x129324 = [], _0x2a450d = /* @__PURE__ */ new Set();
  let _0x1565dd = 0, _0x282564 = 0;
  while (!![]) {
    _0x282564++, chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_PROGRESS", "payload": { "page": _0x282564, "total": 0, "count": _0x129324["length"] } })["catch"](() => {
    });
    const _0x289ba2 = AFFILIATE_API_URL + "?offset=" + _0x1565dd + "&count=" + AFFILIATE_PAGE_SIZE, _0x32a278 = await fetch(_0x289ba2, { "credentials": "include" });
    if (!_0x32a278["ok"]) {
      if (_0x32a278["status"] === 401 || _0x32a278["status"] === 403) throw new Error("กรุณา login TikTok (www.tiktok.com/tiktokstudio) ก่อนดึงสินค้า");
      throw new Error("HTTP " + _0x32a278["status"] + " — ดึงสินค้าไม่สำเร็จ");
    }
    const _0x5034eb = await _0x32a278["json"]();
    if (_0x5034eb["code"] !== 0) throw new Error(_0x5034eb["message"] || "API error code=" + _0x5034eb["code"]);
    const _0x11d292 = ((_a2 = _0x5034eb["data"]) == null ? void 0 : _a2["products"]) ?? [];
    log["info"]("page=" + _0x282564 + " offset=" + _0x1565dd + " got=" + _0x11d292["length"]);
    for (const _0x564dda of _0x11d292) {
      const _0x1322b6 = _0x564dda["product_id"] ?? "";
      if (!_0x1322b6 || _0x2a450d["has"](_0x1322b6)) continue;
      _0x2a450d["add"](_0x1322b6), _0x129324["push"](mapAffiliateProduct(_0x564dda));
    }
    if (_0x11d292["length"] < AFFILIATE_PAGE_SIZE) break;
    _0x1565dd += AFFILIATE_PAGE_SIZE, await sleep(AFFILIATE_PAGE_DELAY_MS);
  }
  return log["info"]("Fetched " + _0x129324["length"] + " product(s) across " + _0x282564 + " page(s)"), _0x129324;
}
router["on"]("SHOWCASE_FETCH", async (_0x21b5eb, _0x311cd9, _0x281dc4) => {
  log["info"]("SHOWCASE_FETCH requested"), broadcastLog("info", "📡 เริ่มดึงสินค้าจาก TikTok Affiliate API...");
  try {
    const _0x1233bd = await fetchAffiliateProducts();
    broadcastLog("info", "✓ ดึงสำเร็จ " + _0x1233bd["length"] + " สินค้า"), chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_RESULT", "payload": { "products": _0x1233bd } })["catch"](() => {
    }), _0x281dc4({ "success": !![] });
  } catch (_0x57c784) {
    const _0x57c490 = _0x57c784 instanceof Error ? _0x57c784["message"] : String(_0x57c784);
    broadcastLog("error", "❌ " + _0x57c490), chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_RESULT", "payload": { "products": [], "error": _0x57c490 } })["catch"](() => {
    }), _0x281dc4({ "success": ![], "error": _0x57c490 });
  }
}), router["on"]("SHOWCASE_PROGRESS", async (_0x27e047, _0x1bcee4, _0x4c6bea) => {
  chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_PROGRESS", "payload": _0x27e047 })["catch"](() => {
  });
}), router["on"]("SHOWCASE_RESULT", async (_0x2905bc, _0x530a52, _0x5de007) => {
  chrome["runtime"]["sendMessage"]({ "type": "SHOWCASE_RESULT", "payload": _0x2905bc })["catch"](() => {
  });
}), router["on"]("PIPELINE_COUNTDOWN_RELAY", async (_0x30162a, _0x21cf16, _0x5c8ea5) => {
  broadcastPipelineEvent("PIPELINE_COUNTDOWN", _0x30162a);
}), router["on"]("AI_TEST_CONNECTION", async (_0x2c6129, _0x16c928, _0x272a23) => {
  const { provider: _0x74d185, settings: _0x3b77c9 } = _0x2c6129;
  try {
    const _0x2e80c9 = _0x3b77c9[_0x74d185];
    if (!(_0x2e80c9 == null ? void 0 : _0x2e80c9["apiKey"])) {
      _0x272a23({ "success": ![], "error": "API Key ว่างเปล่า" });
      return;
    }
    const _0x356324 = await testProvider(_0x74d185, { "apiKey": _0x2e80c9["apiKey"], "model": _0x2e80c9["model"] });
    _0x272a23(_0x356324["success"] ? { "success": !![], "latencyMs": _0x356324["latencyMs"] } : { "success": ![], "error": _0x356324["error"] || "Test failed" });
  } catch (_0x31b88a) {
    _0x272a23({ "success": ![], "error": String(_0x31b88a) });
  }
}), router["on"]("CLEAR_CACHE", async (_0x1592b8, _0x234daa, _0xc8397e) => {
  try {
    await chrome["browsingData"]["remove"]({ "origins": ["https://labs.google.com"] }, { "cache": !![], "cookies": !![] }), log["info"]("Cache cleared"), _0xc8397e({ "success": !![] });
  } catch (_0x543ed7) {
    _0xc8397e({ "success": ![], "error": String(_0x543ed7) });
  }
}), router["on"]("RESET_BOT", async (_0x36bf5a, _0x4b59ab, _0x52e351) => {
  const _0x51ffc2 = _0x36bf5a || {};
  log["info"]("Reset requested", _0x51ffc2);
  try {
    runner && (runner["stop"](), runner = null);
    creatorStoryRunner && (creatorStoryRunner["stop"](), creatorStoryRunner = null);
    creatorPodcastRunner && (creatorPodcastRunner["stop"](), creatorPodcastRunner = null);
    const _0x2dbecc = await chrome["storage"]["local"]["get"](null), _0x3efc12 = {};
    if (_0x51ffc2["keepLicense"]) {
      if (_0x2dbecc["licenseKey"]) _0x3efc12["licenseKey"] = _0x2dbecc["licenseKey"];
      if (_0x2dbecc["licenseExpire"]) _0x3efc12["licenseExpire"] = _0x2dbecc["licenseExpire"];
      if (_0x2dbecc["agx_device_id"]) _0x3efc12["agx_device_id"] = _0x2dbecc["agx_device_id"];
    }
    if (_0x51ffc2["keepSettings"]) {
      if (_0x2dbecc["agx_panel_state"]) _0x3efc12["agx_panel_state"] = _0x2dbecc["agx_panel_state"];
    }
    !_0x51ffc2["keepLicense"] && _0x2dbecc["agx_device_id"] && (_0x3efc12["agx_device_id"] = _0x2dbecc["agx_device_id"]);
    await chrome["storage"]["local"]["clear"]();
    Object["keys"](_0x3efc12)["length"] > 0 && await chrome["storage"]["local"]["set"](_0x3efc12);
    await chrome["storage"]["sync"]["clear"]()["catch"](() => {
    });
    const _0x39bc51 = await chrome["tabs"]["query"]({ "url": ["https://labs.google/*", "https://labs.google.com/*"] });
    let _0x26dbd5 = 0;
    for (const _0x348f39 of _0x39bc51) {
      if (_0x348f39["id"]) try {
        await chrome["tabs"]["reload"](_0x348f39["id"]), _0x26dbd5++;
      } catch {
      }
    }
    if (_0x26dbd5 > 0) log["info"]("Reloaded " + _0x26dbd5 + " Flow tab(s)");
    chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "success", "message": "🔄 รีเซ็ตเสร็จสิ้น (Flow " + _0x26dbd5 + " แท็บถูก reload)" } })["catch"](() => {
    }), log["info"]("Reset complete", { "preservedKeys": Object["keys"](_0x3efc12), "flowTabsReloaded": _0x26dbd5 }), _0x52e351({ "success": !![], "preserved": Object["keys"](_0x3efc12), "flowTabsReloaded": _0x26dbd5 }), setTimeout(() => {
      log["info"]("Triggering chrome.runtime.reload()..."), chrome["runtime"]["reload"]();
    }, 800);
  } catch (_0x4b732f) {
    log["error"]("Reset failed", _0x4b732f), _0x52e351({ "success": ![], "error": String(_0x4b732f) });
  }
}), chrome["runtime"]["onInstalled"]["addListener"]((_0x266df9) => {
  log["info"]("Extension installed", { "reason": _0x266df9["reason"] }), _0x266df9["reason"] === "install" && chrome["sidePanel"]["setOptions"]({ "enabled": !![] });
}), chrome["action"]["onClicked"]["addListener"](async (_0x100b81) => {
  _0x100b81["id"] && await chrome["sidePanel"]["open"]({ "tabId": _0x100b81["id"] });
}), chrome["runtime"]["onMessage"]["addListener"]((_0x2f89cb, _0x314083, _0x4a4768) => {
  return router["handle"](_0x2f89cb, _0x314083, _0x4a4768), !![];
}), log["info"]("AutoGenX v2 service worker started");
typeof ((_b = (_a = chrome["storage"]) == null ? void 0 : _a["session"]) == null ? void 0 : _b["setAccessLevel"]) === "function" && chrome["storage"]["session"]["setAccessLevel"]({ "accessLevel": "TRUSTED_AND_UNTRUSTED_CONTEXTS" })["catch"]((_0x3d94fe) => log["warn"]("storage.session setAccessLevel failed:", _0x3d94fe));
const _isRelease = !![];
if (!_isRelease) {
  const _activeFlags = activeDevFlags();
  _activeFlags["length"] > 0 && (log["warn"]("⚠ DEV flags ON: " + _activeFlags["join"](", ")), setTimeout(() => {
    sendPipelineLog$1("warn", "🚧 DEV flags ON: " + _activeFlags["join"](", ") + " (แก้ที่ src/shared/constants/dev-flags.ts)");
  }, 2e3));
}
