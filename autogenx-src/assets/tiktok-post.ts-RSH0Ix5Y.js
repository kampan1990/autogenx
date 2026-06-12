import { g as getLoggerBuffer, c as createLogger } from "./logger-CbU0UFxz.js";
import { D as DEV } from "./pipeline-log-C2ZJNMjJ.js";
import { i as installOverlay } from "./pipeline-overlay-2NgNscin.js";
try {
  installOverlay();
} catch (_0x2b0767) {
}
const log = createLogger("TikTokPost"), DRAFT_RECOVERY_DISCARD_HINTS = ["discard", "start over", "reset", "clear", "ทิ้ง", "เริ่มใหม่", "ล้าง"], SAVE_DRAFT_HINTS = ["save draft", "save as draft", "save to drafts", "บันทึกฉบับร่าง", "บันทึกแบบร่าง"], POST_NOW_HINTS = ["post", "publish", "โพสต์", "เผยแพร่"];
!globalThis["__agxTiktokPostInstalled"] && (globalThis["__agxTiktokPostInstalled"] = !![], installMessageListener(), log["info"]("TikTok post content script ready"));
const chunkSessions = /* @__PURE__ */ new Map(), completedChunks = /* @__PURE__ */ new Map();
function installMessageListener() {
  chrome["runtime"]["onMessage"]["addListener"]((_0x298d88, _0x224a29, _0x5c2b4d) => {
    var _a;
    const _0x317415 = _0x298d88 == null ? void 0 : _0x298d88["type"];
    if (_0x317415 === "TIKTOK_POST" && ((_a = _0x298d88 == null ? void 0 : _0x298d88["payload"]) == null ? void 0 : _a["action"]) === "ping") return _0x5c2b4d({ "ready": !![] }), ![];
    if (_0x317415 === "LOG_BUFFER_COLLECT") return _0x5c2b4d({ "source": "tiktok-post", "buffer": getLoggerBuffer() }), ![];
    if (_0x317415 === "CHUNK_INIT") {
      const _0x5cf401 = _0x298d88["payload"];
      return chunkSessions["set"](_0x5cf401["key"], { "chunks": new Array(_0x5cf401["totalChunks"]), "totalChunks": _0x5cf401["totalChunks"], "totalSize": _0x5cf401["totalSize"], "received": 0 }), log["info"]("CHUNK_INIT " + _0x5cf401["key"] + " — " + _0x5cf401["totalChunks"] + " chunks, " + (_0x5cf401["totalSize"] / 1024 / 1024)["toFixed"](1) + " MB"), _0x5c2b4d({ "ok": !![] }), ![];
    }
    if (_0x317415 === "CHUNK_PUSH") {
      const _0x215fa4 = _0x298d88["payload"], _0x50f2e0 = chunkSessions["get"](_0x215fa4["key"]);
      return _0x50f2e0 && (_0x50f2e0["chunks"][_0x215fa4["index"]] = _0x215fa4["data"], _0x50f2e0["received"]++), _0x5c2b4d({ "ok": !!_0x50f2e0 }), ![];
    }
    if (_0x317415 === "CHUNK_DONE") {
      const _0x24efb3 = _0x298d88["payload"], _0x1c1901 = chunkSessions["get"](_0x24efb3["key"]);
      if (_0x1c1901) {
        const _0x38bb26 = _0x1c1901["chunks"]["join"]("");
        completedChunks["set"](_0x24efb3["key"], _0x38bb26), chunkSessions["delete"](_0x24efb3["key"]), log["info"]("CHUNK_DONE " + _0x24efb3["key"] + " assembled: " + (_0x38bb26["length"] / 1024 / 1024)["toFixed"](1) + " MB"), _0x5c2b4d({ "ok": !![], "size": _0x38bb26["length"] });
      } else _0x5c2b4d({ "ok": ![], "err": "no session" });
      return ![];
    }
    if (_0x317415 === "TIKTOK_UPLOAD_VIDEO") {
      tiktokDoneSent = ![];
      const _0x413dcd = { ..._0x298d88["payload"] };
      if (typeof _0x413dcd["videoUrl"] === "string" && _0x413dcd["videoUrl"]["startsWith"]("chunked:")) {
        const _0x3f40a5 = _0x413dcd["videoUrl"]["slice"]("chunked:"["length"]), _0x2bacf6 = completedChunks["get"](_0x3f40a5);
        if (_0x2bacf6) _0x413dcd["videoUrl"] = _0x2bacf6, completedChunks["delete"](_0x3f40a5), log["info"]("Resolved chunked:" + _0x3f40a5 + " → " + (_0x2bacf6["length"] / 1024 / 1024)["toFixed"](1) + " MB dataUrl");
        else return log["error"]("chunked:" + _0x3f40a5 + " — ไม่เจอ assembled data"), sendTiktokDone({ "success": ![], "error": "chunked video " + _0x3f40a5 + " not assembled" }), _0x5c2b4d({ "started": ![] }), ![];
      }
      return handleUpload(_0x413dcd)["then"]((_0x43cfbc) => {
        sendTiktokDone(_0x43cfbc);
      })["catch"]((_0x5e2ff3) => {
        log["error"]("Upload failed", _0x5e2ff3), sendTiktokDone({ "success": ![], "error": String(_0x5e2ff3) });
      }), _0x5c2b4d({ "started": !![] }), ![];
    }
    return ![];
  });
}
async function handleUpload(_0x116ce7) {
  const { videoUrl: _0x18d770, caption: _0xa5d735, hashtags: _0x88b269, postType: _0x1ee8b8, scheduleTime: _0x21d6b4, noBasket: _0x33d56f, notAiGenerated: _0x3a4d00, basketName: _0x87f926, basketLabel: _0x26dbd3, productName: _0x36bcac } = _0x116ce7;
  log["info"]("Starting upload: postType=" + _0x1ee8b8), sendPipelineLog("info", "โพสต์ TikTok (" + (_0x1ee8b8 === "draft" ? "บันทึกแบบร่าง" : _0x1ee8b8 === "now" ? "โพสเลย" : "ตั้งเวลา") + ")...");
  if (DEV["TEST_BASKET_PIN_ONLY"]) {
    sendPipelineLog("warn", "🚧 [DEV.TEST_BASKET_PIN_ONLY] ข้าม upload/caption/AI label/post → เรียก pinBasket ตรงๆ");
    if (!_0x87f926) return sendPipelineLog("warn", "⚠ ไม่มี basketName ในข้อมูลสินค้า — ข้าม"), { "success": !![] };
    sendPipelineLog("info", '🛒 ปักตระกร้า "' + _0x87f926 + '"...');
    try {
      await pinBasket(_0x87f926, _0x36bcac, _0x26dbd3);
    } catch (_0x5dfe32) {
      sendPipelineLog("warn", "⚠ pinBasket error: " + _0x5dfe32);
    }
    return { "success": !![] };
  }
  if (DEV["TEST_SCHEDULE_ONLY"]) {
    sendPipelineLog("warn", "🚧 [DEV.TEST_SCHEDULE_ONLY] ข้าม upload/caption/AI label/pin → setScheduleTime + submit");
    if (!_0x21d6b4) return sendPipelineLog("warn", "⚠ ไม่มี scheduleTime — ข้าม"), { "success": !![] };
    try {
      await setScheduleTime(_0x21d6b4), await sleep(800), sendPipelineLog("info", "👆 click submit (data-e2e=post_video_button)");
      const _0x145a56 = await clickBySelectorInMainWorld('button[data-e2e="post_video_button"]');
      sendPipelineLog("info", "   result: " + JSON["stringify"](_0x145a56)), await sleep(2e3);
    } catch (_0x51e934) {
      sendPipelineLog("warn", "⚠ schedule+submit error: " + _0x51e934);
    }
    return { "success": !![] };
  }
  await waitForPageReady(2e4), await handleDraftRecovery(), sendPipelineLog("info", "อัปโหลดวิดีโอไปยัง TikTok...");
  const _0x259402 = await uploadVideoFile(_0x18d770);
  if (!_0x259402) return { "success": ![], "error": "Video upload failed" };
  await waitForUploadComplete(12e4);
  if (DEV["STOP_BEFORE_TIKTOK_CAPTION"]) return sendPipelineLog("warn", "🧪 [STOP_BEFORE_TIKTOK_CAPTION] upload สำเร็จ — หยุดก่อน fill caption (verify TikTok upload UI)"), sendTiktokDone({ "success": !![] }), { "success": !![] };
  sendPipelineLog("info", "กำลังเขียน Caption..."), await fillCaption(_0xa5d735, _0x88b269);
  if (DEV["SKIP_BASKET_PIN"]) sendPipelineLog("warn", "🚧 [DEV.SKIP_BASKET_PIN] ข้ามการปักตระกร้า");
  else {
    if (!_0x33d56f && _0x87f926) {
      sendPipelineLog("info", '🛒 ปักตระกร้า "' + _0x87f926 + '"...');
      try {
        await pinBasket(_0x87f926, _0x36bcac, _0x26dbd3);
      } catch (_0x1f6318) {
        log["warn"]("pinBasket failed: " + _0x1f6318), sendPipelineLog("warn", "⚠ ปักตระกร้าไม่สำเร็จ — post ต่อ");
      }
    } else _0x33d56f && sendPipelineLog("info", "ℹ ไม่ปักตระกร้า (ตั้งค่าไว้)");
  }
  if (DEV["SKIP_AI_LABEL_TOGGLE"]) sendPipelineLog("warn", "🚧 [DEV.SKIP_AI_LABEL_TOGGLE] ข้าม AI-generated content toggle");
  else _0x3a4d00 ? sendPipelineLog("info", "ℹ ไม่ใช่ AI-generated content (ตั้งค่าไว้) — ข้ามขั้นตอนกดเปิด AI label") : await enableAILabel(2e4);
  const _0x137186 = await submitPost(_0x1ee8b8, _0x21d6b4);
  if (!_0x137186) return { "success": ![], "error": "Failed to submit post" };
  return log["info"]("Post submitted successfully"), { "success": !![] };
}
async function waitForPageReady(_0x16fbf4) {
  const _0x2c684f = Date["now"]() + _0x16fbf4;
  while (Date["now"]() < _0x2c684f) {
    if (document["querySelector"]('input[type="file"]')) return;
    await sleep(500);
  }
  log["warn"]("Page ready timeout — proceeding");
}
const RECOVERY_CONTEXT_HINTS = ["wasn't saved", "wasnt saved", "were editing", "continue editing", "ยังไม่ได้บันทึก", "แก้ไขต่อ", "ของเก่า"];
async function handleDraftRecovery() {
  sendPipelineLog("info", "🔍 ตรวจ draft recovery banner...");
  try {
    await Promise["race"]([sleep(800), new Promise((_0x5a0a2e) => requestAnimationFrame(() => _0x5a0a2e()))]);
    const _0x1232fd = (document["body"]["textContent"] || "")["toLowerCase"](), _0x1e6d20 = RECOVERY_CONTEXT_HINTS["some"]((_0x396956) => _0x1232fd["includes"](_0x396956));
    if (!_0x1e6d20) {
      sendPipelineLog("info", "ℹ ไม่มี recovery banner — ผ่าน", !![]);
      return;
    }
    const _0x5604dd = findDiscardInRecoveryContext();
    if (!_0x5604dd) {
      sendPipelineLog("warn", "⚠ มี banner แต่หาปุ่ม Discard ไม่เจอ — ข้าม (TikTok อาจรับ upload ได้อยู่)", !![]);
      return;
    }
    const _0x206bcb = (_0x5604dd["textContent"] || "")["toLowerCase"]()["trim"]();
    sendPipelineLog("info", '🗑 click Discard: "' + _0x206bcb + '"', !![]), log["info"]('Discarding draft: "' + _0x206bcb + '"'), _0x5604dd["click"](), await sleep(500), sendPipelineLog("info", "✓ Discard สำเร็จ — ไปต่อ", !![]);
  } catch (_0x11b9a5) {
    log["warn"]("handleDraftRecovery error: " + _0x11b9a5), sendPipelineLog("warn", "⚠ ตรวจ recovery banner ผิดพลาด — ข้าม: " + _0x11b9a5, !![]);
  }
}
function findDiscardInRecoveryContext() {
  const _0x11bbe5 = document["querySelectorAll"]('button, [role="button"], .TUXButton-label, .TUXButton');
  for (const _0x4f7c19 of _0x11bbe5) {
    const _0xfaa5d = (_0x4f7c19["textContent"] || "")["toLowerCase"]()["trim"]();
    if (!_0xfaa5d || _0xfaa5d["length"] > 30) continue;
    if (!DRAFT_RECOVERY_DISCARD_HINTS["some"]((_0x4f7882) => _0xfaa5d === _0x4f7882 || _0xfaa5d["includes"](_0x4f7882))) continue;
    if (!isInRecoveryContext(_0x4f7c19)) continue;
    return _0x4f7c19["closest"]('button, [role="button"]') || _0x4f7c19;
  }
  return null;
}
function isInRecoveryContext(_0x1dfd9a) {
  let _0x266e75 = _0x1dfd9a["parentElement"];
  for (let _0x2c462a = 0; _0x2c462a < 8 && _0x266e75; _0x2c462a++, _0x266e75 = _0x266e75["parentElement"]) {
    const _0x507b18 = (_0x266e75["textContent"] || "")["toLowerCase"]();
    if (RECOVERY_CONTEXT_HINTS["some"]((_0x5980d8) => _0x507b18["includes"](_0x5980d8))) return !![];
  }
  return ![];
}
async function uploadVideoFile(_0x3bc35f) {
  const _0x27b2e8 = await waitForElement('input[type="file"][accept*="video"], input[type="file"]', 15e3);
  if (!_0x27b2e8) return log["error"]("File input not found"), ![];
  try {
    const _0xb748d8 = await urlToFile(_0x3bc35f), _0x151718 = new DataTransfer();
    return _0x151718["items"]["add"](_0xb748d8), _0x27b2e8["files"] = _0x151718["files"], _0x27b2e8["dispatchEvent"](new Event("change", { "bubbles": !![] })), _0x27b2e8["dispatchEvent"](new Event("input", { "bubbles": !![] })), log["info"]("File set on input: " + _0xb748d8["name"] + " (" + (_0xb748d8["size"] / 1024 / 1024)["toFixed"](1) + " MB)"), !![];
  } catch (_0x5c5d88) {
    return log["error"]("Failed to set file: " + _0x5c5d88), ![];
  }
}
async function urlToFile(_0x49ed37) {
  var _a;
  if (_0x49ed37["startsWith"]("data:")) {
    const [_0x392ab9, _0x45c362] = _0x49ed37["split"](",", 2), _0x50beeb = ((_a = _0x392ab9["match"](/:(.*?);/)) == null ? void 0 : _a[1]) || "video/mp4", _0x19326c = atob(_0x45c362), _0x108cbe = new Uint8Array(_0x19326c["length"]);
    for (let _0x137b10 = 0; _0x137b10 < _0x19326c["length"]; _0x137b10++) _0x108cbe[_0x137b10] = _0x19326c["charCodeAt"](_0x137b10);
    return new File([_0x108cbe["buffer"]], "video.mp4", { "type": _0x50beeb });
  }
  const _0x1bd855 = await fetch(_0x49ed37);
  if (!_0x1bd855["ok"]) throw new Error("Fetch failed: " + _0x1bd855["status"]);
  const _0x16ffb1 = await _0x1bd855["blob"]();
  return new File([_0x16ffb1], "video.mp4", { "type": _0x16ffb1["type"] || "video/mp4" });
}
async function waitForUploadComplete(_0x3ad5bf) {
  const _0x5b7cf8 = Date["now"]() + _0x3ad5bf;
  let _0x40f59b = 0;
  while (Date["now"]() < _0x5b7cf8) {
    const _0x5b04ec = findButtonByText(SAVE_DRAFT_HINTS), _0x5cb812 = findButtonByText(POST_NOW_HINTS);
    if (_0x5b04ec && !_0x5b04ec["disabled"] || _0x5cb812 && !_0x5cb812["disabled"]) {
      log["info"]("Upload complete — action buttons enabled"), await sleep(1500);
      return;
    }
    const _0x46c93e = Math["ceil"]((_0x5b7cf8 - Date["now"]()) / 1e3);
    Date["now"]() - _0x40f59b >= 5e3 && (sendPipelineLog("info", "⏳ รอ upload เสร็จ... " + _0x46c93e + " วิ", _0x40f59b > 0), _0x40f59b = Date["now"]()), await sleep(1500);
  }
  log["warn"]("Upload wait timed out — proceeding anyway");
}
async function fillCaption(_0xd12f43, _0x4fb8b9) {
  const _0x446080 = await waitForElement('div[contenteditable="true"]', 1e4);
  if (!_0x446080) {
    log["warn"]("Caption editor not found");
    return;
  }
  _0x446080["focus"](), await sleep(400), document["execCommand"]("selectAll", ![]), document["execCommand"]("delete", ![]), await sleep(200), await typeHumanlike(_0x446080, _0xd12f43), log["info"]("Caption typed (" + _0xd12f43["length"] + " chars)");
  for (let _0x3a8e34 = 0; _0x3a8e34 < _0x4fb8b9["length"]; _0x3a8e34++) {
    const _0xfc8cee = _0x4fb8b9[_0x3a8e34]["replace"](/^#+/, "");
    if (!_0xfc8cee) continue;
    const _0x1015c7 = 2e3 + Math["floor"](Math["random"]() * 1e3);
    sendPipelineLog("info", "⏸ คิดก่อนพิมพ์ #" + _0xfc8cee + "... (" + (_0x1015c7 / 1e3)["toFixed"](1) + "s)"), await sleep(_0x1015c7), sendPipelineLog("info", "⌨ พิมพ์ #" + _0xfc8cee), await typeHashtag(_0x446080, _0xfc8cee), log["info"]("Hashtag typed: #" + _0xfc8cee);
  }
  await sleep(500), log["info"]("fillCaption done — " + _0xd12f43["length"] + " caption chars + " + _0x4fb8b9["length"] + " hashtags");
}
async function typeHashtag(_0xb0ad4f, _0x1b87d3) {
  _0xb0ad4f["focus"](), moveCursorToEnd(_0xb0ad4f), await sleep(200), document["execCommand"]("insertText", ![], " "), await sleep(150);
  const _0x38828e = document["getElementById"]("web-creation-caption-hashtag-button") || document["querySelector"]('button[aria-label="Hashtag"], button[aria-label*="hashtag" i]');
  if (!_0x38828e) {
    log["warn"]('Hashtag button not found — falling back to text "#"'), document["execCommand"]("insertText", ![], "#" + _0x1b87d3), await sleep(300);
    return;
  }
  _0x38828e["click"](), await sleep(700), _0xb0ad4f["focus"](), document["execCommand"]("insertText", ![], _0x1b87d3), await sleep(300);
  const _0x10e9a9 = await findHashtagDropdownItem(_0x1b87d3, 8, 500);
  _0x10e9a9 ? (clickWithMouseEvents(_0x10e9a9), log["info"]('Clicked hashtag dropdown for "' + _0x1b87d3 + '"'), await sleep(500)) : (log["warn"]('Hashtag dropdown for "' + _0x1b87d3 + '" not found — sending Escape'), _0xb0ad4f["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![], "cancelable": !![] })), await sleep(200), _0xb0ad4f["focus"](), moveCursorToEnd(_0xb0ad4f), document["execCommand"]("insertText", ![], " "));
}
async function findHashtagDropdownItem(_0x249702, _0x2ac9b5, _0x527025) {
  const _0x4d1e51 = _0x249702["toLowerCase"]();
  for (let _0x2d02f0 = 0; _0x2d02f0 < _0x2ac9b5; _0x2d02f0++) {
    const _0x2ac9c7 = ['div.hashtag-suggestion-item.focused[role="option"]', 'div.hashtag-suggestion-item[role="option"]', '[role="option"]'];
    for (const _0xd2faf4 of _0x2ac9c7) {
      const _0x1c8032 = document["querySelectorAll"](_0xd2faf4);
      for (const _0x11db40 of _0x1c8032) {
        const _0x222225 = (_0x11db40["textContent"] || "")["toLowerCase"]();
        if (_0x222225["includes"](_0x4d1e51)) return _0x11db40;
      }
    }
    await sleep(_0x527025);
  }
  return null;
}
function clickWithMouseEvents(_0x3be63e) {
  const _0x56ac6f = _0x3be63e["getBoundingClientRect"](), _0xd33115 = _0x56ac6f["left"] + _0x56ac6f["width"] / 2, _0x365922 = _0x56ac6f["top"] + _0x56ac6f["height"] / 2, _0x26b801 = { "bubbles": !![], "cancelable": !![], "clientX": _0xd33115, "clientY": _0x365922, "button": 0 };
  _0x3be63e["dispatchEvent"](new MouseEvent("mousedown", _0x26b801)), _0x3be63e["dispatchEvent"](new MouseEvent("mouseup", _0x26b801)), _0x3be63e["dispatchEvent"](new MouseEvent("click", _0x26b801));
}
async function typeHumanlike(_0x4b4709, _0x13bba8) {
  let _0xd8969c = 0;
  while (_0xd8969c < _0x13bba8["length"]) {
    const _0x24f5fd = 2 + Math["floor"](Math["random"]() * 3), _0x2ab6e7 = _0x13bba8["slice"](_0xd8969c, _0xd8969c + _0x24f5fd);
    if (document["activeElement"] !== _0x4b4709) _0x4b4709["focus"]();
    moveCursorToEnd(_0x4b4709), document["execCommand"]("insertText", ![], _0x2ab6e7), _0xd8969c += _0x24f5fd, await sleep(80 + Math["floor"](Math["random"]() * 140));
  }
}
function moveCursorToEnd(_0x2e138d) {
  try {
    if (!document["contains"](_0x2e138d)) return;
    const _0x220f7b = document["createRange"]();
    _0x220f7b["selectNodeContents"](_0x2e138d), _0x220f7b["collapse"](![]);
    const _0x105a34 = window["getSelection"]();
    _0x105a34 && (_0x105a34["removeAllRanges"](), _0x105a34["addRange"](_0x220f7b));
  } catch {
  }
}
async function enableAILabel(_0x551920) {
  const _0x105582 = Date["now"]() + _0x551920;
  sendPipelineLog("info", '🔍 หา "Show more" สำหรับ advanced settings...');
  const _0x134ecb = await waitForElement('[data-e2e="advanced_settings_container"]', 8e3);
  if (!_0x134ecb) {
    sendPipelineLog("warn", "ℹ ไม่เจอ advanced_settings_container — ข้าม AI toggle"), log["warn"]("advanced_settings_container not found");
    return;
  }
  if (_0x134ecb["className"]["includes"]("collapsed")) {
    const _0x38ccc5 = _0x134ecb["querySelector"](".more-btn") || _0x134ecb;
    sendPipelineLog("info", "👆 click Show more..."), _0x38ccc5["click"](), await sleep(800);
  } else log["info"]("advanced_settings already expanded");
  sendPipelineLog("info", "🔍 หา AI-generated content toggle...");
  const _0x3575e8 = Math["min"](_0x105582, Date["now"]() + 5e3);
  let _0x143bf9 = null;
  while (Date["now"]() < _0x3575e8) {
    _0x143bf9 = document["querySelector"]('[data-e2e="aigc_container"]');
    if (_0x143bf9) break;
    await sleep(300);
  }
  if (!_0x143bf9) {
    sendPipelineLog("warn", "ℹ ไม่เจอ aigc_container — ข้าม AI toggle"), log["warn"]("aigc_container not found");
    return;
  }
  const _0x442dd1 = _0x143bf9["querySelector"]('input[role="switch"], [role="switch"], [aria-checked]');
  if (!_0x442dd1) {
    sendPipelineLog("warn", "ℹ ไม่เจอ switch input ใน aigc_container");
    return;
  }
  const _0x2b3cc2 = _0x442dd1["getAttribute"]("aria-checked") === "true" || _0x442dd1["checked"];
  if (_0x2b3cc2) {
    sendPipelineLog("info", "✓ AI-generated content เปิดอยู่แล้ว"), log["info"]("AI label already on");
    return;
  }
  const _0x3a7f3e = _0x442dd1["closest"]('.Switch__root, .Switch__content, [data-layout="switch-root"]') || _0x442dd1;
  sendPipelineLog("info", "👆 toggle AI-generated content → ON"), _0x3a7f3e["click"](), await sleep(1e3), log["info"]("AI label enabled");
}
async function submitPost(_0x1bb8ac, _0x24c2de) {
  await sleep(1e3);
  _0x1bb8ac === "schedule" && _0x24c2de && (await setScheduleTime(_0x24c2de), await sleep(800));
  if (_0x1bb8ac === "draft") {
    sendPipelineLog("info", "🔍 หา Save Draft button...");
    const _0x3d5e24 = findButtonByText(SAVE_DRAFT_HINTS);
    if (!_0x3d5e24) return sendPipelineLog("warn", "❌ ไม่เจอ Save Draft button"), log["warn"]("Save draft button not found"), ![];
    sendPipelineLog("info", '✓ เจอ button: "' + (_0x3d5e24["textContent"] || "")["trim"]()["slice"](0, 30) + '"'), sendPipelineLog("info", "📤 ส่ง TIKTOK_DONE → background (ก่อน click กัน navigation race)..."), sendTiktokDone({ "success": !![] }), sendPipelineLog("info", "👆 click Save Draft..."), _0x3d5e24["click"](), sendPipelineLog("info", "⏳ รอ 1.5 วิ ให้ modal ปรากฏ..."), await sleep(1500), sendPipelineLog("info", '🔍 หา "Save anyway" modal (max 3 วิ)...');
    const _0x16c134 = await findSaveAnywayButton(3e3);
    return _0x16c134 ? (sendPipelineLog("info", '✓ เจอ modal button: "' + (_0x16c134["textContent"] || "")["trim"]()["slice"](0, 30) + '" → click'), _0x16c134["click"]()) : sendPipelineLog("info", "ℹ ไม่เจอ modal — save ตรงๆ ไม่ต้อง confirm"), sendPipelineLog("info", "บันทึกแบบร่างสำเร็จ ✓"), !![];
  }
  const _0x3fc659 = document["querySelector"]('button[data-e2e="post_video_button"]');
  if (_0x3fc659) {
    const _0x4a8a15 = _0x1bb8ac === "schedule" ? "กำลังตั้งเวลาโพสต์..." : "กำลังโพสต์...";
    sendPipelineLog("info", _0x4a8a15 + ' (button text: "' + (_0x3fc659["textContent"] || "")["trim"]() + '")');
    const _0x433b00 = await clickBySelectorInMainWorld('button[data-e2e="post_video_button"]');
    sendPipelineLog("info", "   click: " + JSON["stringify"](_0x433b00)), await sleep(2500);
    const _0x3da4f7 = await findSaveAnywayButton(3e3);
    _0x3da4f7 && (sendPipelineLog("info", '⚠ Modal "Save anyway" → click'), _0x3da4f7["click"](), await sleep(1e3));
    let _0x225f14 = ![];
    for (let _0x22ecac = 1; _0x22ecac <= 2; _0x22ecac++) {
      await sleep(3e3);
      const _0x17bde4 = findContinuePostButtonNow();
      if (_0x17bde4) {
        sendPipelineLog("info", '⚠ Dialog "Continue to post?" → กด "Post now" (รอบ ' + _0x22ecac + ") ✓");
        const _0x4d3ad1 = "continue-post-" + Date["now"]();
        _0x17bde4["setAttribute"]("data-agx-click", _0x4d3ad1), await clickBySelectorInMainWorld('[data-agx-click="' + _0x4d3ad1 + '"]'), await sleep(1e3), _0x225f14 = !![];
        break;
      }
      sendPipelineLog("info", '   ตรวจ Dialog "Continue to post?" รอบ ' + _0x22ecac + "/2 — ไม่เจอ");
    }
    return !_0x225f14 && sendPipelineLog("info", 'ℹ ไม่เจอ Dialog "Continue to post?" — ผ่าน'), sendPipelineLog("info", "โพสต์สำเร็จ ✓"), log["info"]("Sending TIKTOK_DONE after final " + _0x1bb8ac + " click"), sendTiktokDone({ "success": !![] }), !![];
  }
  return log["warn"]("Post button not found"), ![];
}
async function findSaveAnywayButton(_0x276db0) {
  const _0x1b6535 = ["save anyway", "บันทึกต่อไป", "บันทึกอยู่ดี", "ยืนยัน", "confirm"], _0x124916 = Date["now"]() + _0x276db0;
  while (Date["now"]() < _0x124916) {
    const _0x3b5a55 = document["querySelectorAll"]('.TUXButton-label, button, [role="button"]');
    for (const _0x3bcf78 of _0x3b5a55) {
      const _0x2f2a64 = (_0x3bcf78["textContent"] || "")["toLowerCase"]()["trim"]();
      if (_0x1b6535["some"]((_0x36d236) => _0x2f2a64 === _0x36d236 || _0x2f2a64["includes"](_0x36d236))) {
        const _0x4540fa = _0x3bcf78["closest"]('button, [role="button"]') || _0x3bcf78;
        return log["info"]('Found confirm button: "' + _0x2f2a64 + '"'), _0x4540fa;
      }
    }
    await sleep(500);
  }
  return null;
}
function findContinuePostButtonNow() {
  const _0x4b1138 = ["post now", "โพสต์เลย", "โพสเลย", "โพสต์ทันที"], _0x52ce75 = document["querySelectorAll"]('[role="dialog"], [aria-modal="true"], .TUXModal, .TUXDialog');
  for (const _0x188185 of _0x52ce75) {
    const _0x79d01b = (_0x188185["textContent"] || "")["toLowerCase"]();
    if (!_0x79d01b["includes"]("continue to post") && !_0x79d01b["includes"]("still checking") && !_0x79d01b["includes"]("ตรวจสอบ") && !_0x79d01b["includes"]("โพสต์ต่อ")) continue;
    const _0x48d5f6 = _0x188185["querySelectorAll"]('button, [role="button"]');
    for (const _0x2593e0 of _0x48d5f6) {
      const _0x3f76ee = (_0x2593e0["textContent"] || "")["toLowerCase"]()["trim"]();
      if (_0x4b1138["some"]((_0x2d821b) => _0x3f76ee === _0x2d821b || _0x3f76ee["includes"](_0x2d821b))) {
        const _0x43839c = _0x2593e0["closest"]('button, [role="button"]') || _0x2593e0;
        return log["info"]('Found "Continue to post?" → "Post now" button: "' + _0x3f76ee + '"'), _0x43839c;
      }
    }
  }
  return null;
}
async function setScheduleTime(_0x484338) {
  const _0x2e6a0a = new Date(_0x484338), _0x5b364f = _0x2e6a0a["getFullYear"](), _0x375b35 = String(_0x2e6a0a["getMonth"]() + 1)["padStart"](2, "0"), _0x2b2504 = String(_0x2e6a0a["getDate"]())["padStart"](2, "0"), _0x38e00b = String(_0x2e6a0a["getHours"]())["padStart"](2, "0"), _0x36bc9b = String(_0x2e6a0a["getMinutes"]())["padStart"](2, "0"), _0x286cef = _0x5b364f + "-" + _0x375b35 + "-" + _0x2b2504, _0x42d790 = _0x38e00b + ":" + _0x36bc9b;
  sendPipelineLog("info", "📅 ตั้งเวลา target: " + _0x286cef + " " + _0x42d790);
  const _0x465a4d = await clickRadioInMainWorld('input[type="radio"][name="postSchedule"][value="schedule"]');
  sendPipelineLog("info", "   1️⃣ click Schedule radio: " + JSON["stringify"](_0x465a4d)), await sleep(1500);
  const _0x365458 = findReadonlyInputByPattern(/^\d{4}-\d{2}-\d{2}$/);
  if (!_0x365458) sendPipelineLog("warn", "   ℹ ไม่เจอ date input (readonly YYYY-MM-DD)");
  else {
    if (_0x365458["value"] === _0x286cef) sendPipelineLog("info", "   2️⃣ date ตรงอยู่แล้ว (" + _0x365458["value"] + ") — ข้าม");
    else {
      sendPipelineLog("info", "   2️⃣ date ปัจจุบัน " + _0x365458["value"] + " → " + _0x286cef + " → click เปิด calendar"), _0x365458["setAttribute"]("data-agx-click", "schedule-date"), await clickBySelectorInMainWorld('[data-agx-click="schedule-date"]'), _0x365458["removeAttribute"]("data-agx-click"), await sleep(1200);
      const _0x4d19df = await pickCalendarDate(_0x2e6a0a);
      sendPipelineLog("info", "   ✓ click วันในปฏิทิน: " + (_0x4d19df ? "สำเร็จ" : "ไม่สำเร็จ")), await sleep(600);
    }
  }
  const _0x33e5c6 = findReadonlyInputByPattern(/^\d{2}:\d{2}$/);
  if (!_0x33e5c6) sendPipelineLog("warn", "   ℹ ไม่เจอ time input (readonly HH:MM)");
  else {
    if (_0x33e5c6["value"] === _0x42d790) sendPipelineLog("info", "   3️⃣ time ตรงอยู่แล้ว (" + _0x33e5c6["value"] + ") — ข้าม");
    else {
      sendPipelineLog("info", "   3️⃣ time ปัจจุบัน " + _0x33e5c6["value"] + " → " + _0x42d790 + " → click เปิด dropdown"), _0x33e5c6["setAttribute"]("data-agx-click", "schedule-time"), await clickBySelectorInMainWorld('[data-agx-click="schedule-time"]'), _0x33e5c6["removeAttribute"]("data-agx-click"), await sleep(1e3);
      const _0x2400bc = await pickTimeHourMinute(_0x38e00b, _0x36bc9b);
      sendPipelineLog("info", "   ✓ เลือก " + _0x38e00b + ":" + _0x36bc9b + ": " + (_0x2400bc ? "สำเร็จ" : "ไม่สำเร็จ")), await sleep(600);
    }
  }
  document["body"]["dispatchEvent"](new MouseEvent("mousedown", { "bubbles": !![] })), document["body"]["dispatchEvent"](new MouseEvent("mouseup", { "bubbles": !![] })), document["body"]["dispatchEvent"](new MouseEvent("click", { "bubbles": !![] })), await sleep(500);
}
function findReadonlyInputByPattern(_0x53af22) {
  const _0x1fc755 = document["querySelectorAll"]('input.TUXTextInputCore-input[readonly], input[readonly][type="text"]');
  for (const _0x275093 of _0x1fc755) {
    if (_0x53af22["test"](_0x275093["value"])) return _0x275093;
  }
  return null;
}
async function pickCalendarDate(_0x3ee999) {
  const _0x46f7b9 = _0x3ee999["getFullYear"](), _0x1e3eec = _0x3ee999["getMonth"](), _0x1afbf8 = _0x3ee999["getDate"]();
  let _0x349472 = null;
  for (let _0x50f88f = 0; _0x50f88f < 15 && !_0x349472; _0x50f88f++) {
    _0x349472 = document["querySelector"](".calendar-wrapper");
    if (!_0x349472) await sleep(200);
  }
  if (!_0x349472) return sendPipelineLog("warn", "     ℹ ไม่เจอ .calendar-wrapper"), ![];
  for (let _0x5a06ae = 0; _0x5a06ae < 24; _0x5a06ae++) {
    const _0x501669 = _0x349472["querySelector"](".month-title"), _0x433c48 = _0x349472["querySelector"](".year-title"), _0x40fc3e = monthNameToIndex(((_0x501669 == null ? void 0 : _0x501669["textContent"]) || "")["trim"]()), _0x3ee2ce = parseInt(((_0x433c48 == null ? void 0 : _0x433c48["textContent"]) || "")["trim"](), 10);
    if (_0x40fc3e < 0 || !_0x3ee2ce) {
      sendPipelineLog("warn", '     ℹ parse header ไม่ได้: "' + (_0x501669 == null ? void 0 : _0x501669["textContent"]) + '" / "' + (_0x433c48 == null ? void 0 : _0x433c48["textContent"]) + '"');
      break;
    }
    if (_0x3ee2ce === _0x46f7b9 && _0x40fc3e === _0x1e3eec) break;
    const _0x593924 = _0x3ee2ce < _0x46f7b9 || _0x3ee2ce === _0x46f7b9 && _0x40fc3e < _0x1e3eec, _0x485ec2 = _0x349472["querySelectorAll"](".month-header-wrapper .arrow"), _0x357693 = _0x593924 ? _0x485ec2[1] : _0x485ec2[0];
    if (!_0x357693) {
      sendPipelineLog("warn", "     ℹ ไม่เจอลูกศร " + (_0x593924 ? "next" : "prev"));
      break;
    }
    _0x357693["setAttribute"]("data-agx-click", "cal-arrow-" + _0x5a06ae), await clickBySelectorInMainWorld('[data-agx-click="cal-arrow-' + _0x5a06ae + '"]'), _0x357693["removeAttribute"]("data-agx-click"), await sleep(400);
  }
  const _0x5431b5 = Array["from"](_0x349472["querySelectorAll"](".day")), _0x2a1691 = _0x5431b5["find"]((_0x1794bd) => {
    const _0x245a3b = (_0x1794bd["textContent"] || "")["trim"]();
    if (_0x245a3b !== String(_0x1afbf8)) return ![];
    return _0x1794bd["classList"]["contains"]("valid") || _0x1794bd["classList"]["contains"]("selected");
  });
  if (!_0x2a1691) return sendPipelineLog("warn", "     ℹ ไม่เจอวัน " + _0x1afbf8 + " (valid) ใน popup"), ![];
  return _0x2a1691["setAttribute"]("data-agx-click", "cal-day"), await clickBySelectorInMainWorld('[data-agx-click="cal-day"]'), _0x2a1691["removeAttribute"]("data-agx-click"), !![];
}
function monthNameToIndex(_0xb64060) {
  const _0x509f94 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], _0x52d0e6 = _0xb64060["toLowerCase"]();
  for (let _0x2379ea = 0; _0x2379ea < 12; _0x2379ea++) {
    if (_0x52d0e6 === _0x509f94[_0x2379ea] || _0x52d0e6 === _0x509f94[_0x2379ea]["slice"](0, 3)) return _0x2379ea;
  }
  return -1;
}
async function pickTimeHourMinute(_0x5513d3, _0x34f831) {
  let _0x158b4a = null;
  for (let _0x1cf9f6 = 0; _0x1cf9f6 < 15 && !_0x158b4a; _0x1cf9f6++) {
    _0x158b4a = document["querySelector"](".tiktok-timepicker-time-picker-container");
    if (!_0x158b4a) await sleep(200);
  }
  if (!_0x158b4a) return sendPipelineLog("warn", "     ℹ ไม่เจอ .tiktok-timepicker-time-picker-container"), ![];
  const _0x3c32e3 = await scrollAndClickTimeItem(_0x158b4a, "tiktok-timepicker-left", _0x5513d3, "tp-hour");
  if (!_0x3c32e3) sendPipelineLog("warn", "     ℹ ไม่เจอชั่วโมง " + _0x5513d3);
  await sleep(300);
  const _0x2e7971 = await scrollAndClickTimeItem(_0x158b4a, "tiktok-timepicker-right", _0x34f831, "tp-min");
  if (!_0x2e7971) sendPipelineLog("warn", "     ℹ ไม่เจอนาที " + _0x34f831);
  return _0x3c32e3;
}
async function scrollAndClickTimeItem(_0x5d7711, _0x1abbdd, _0x5bd41f, _0x1f9850) {
  const _0xd5ce5a = Array["from"](_0x5d7711["querySelectorAll"](".tiktok-timepicker-option-text." + _0x1abbdd))["find"]((_0x3b89f8) => (_0x3b89f8["textContent"] || "")["trim"]() === _0x5bd41f);
  if (!_0xd5ce5a) return ![];
  return _0xd5ce5a["setAttribute"]("data-agx-click", _0x1f9850), await nativeClickInMainWorld('[data-agx-click="' + _0x1f9850 + '"]'), _0xd5ce5a["removeAttribute"]("data-agx-click"), await sleep(300), !![];
}
async function pinBasket(_0x5a0877, _0x1a9c13, _0x367604) {
  await tryDismissDiscardModal(), sendPipelineLog("info", "🔍 ปักตระกร้า: คลิก Add (Plus)...");
  const _0x19228c = await clickButtonRobust(() => waitForAddProductButton(5e3), "Add", "Add (Plus)", { "verify": () => {
    var _a;
    if (document["querySelector"]('input[placeholder="Search products"]')) return !![];
    if (document["querySelector"]('input.TUXTextInputCore-input[placeholder*="Search"]')) return !![];
    const _0x3450f4 = document["querySelectorAll"](".TUXButton-label");
    for (const _0x4efc06 of _0x3450f4) {
      if (((_a = _0x4efc06["textContent"]) == null ? void 0 : _a["trim"]()) === "Next") return !![];
    }
    return ![];
  }, "maxRetries": 2 });
  if (!_0x19228c) {
    sendPipelineLog("warn", "ℹ ปักตระกร้า: Add fail — ข้าม");
    return;
  }
  await tryDismissDiscardModal();
  const _0x484eab = await ensureAddLinkTypeIsProducts();
  !_0x484eab && sendPipelineLog("warn", "⚠ ตั้งประเภทลิงก์ Products ไม่สำเร็จ — ลองดำเนินการต่อ");
  const _0x536e9c = await clickButtonRobust(() => waitForTuxButtonByLabel("Next", 5e3), "Next", "Next (step 1)", { "verify": () => {
    const _0x5b8fac = document["querySelector"]('input[placeholder="Search products"]') || document["querySelector"]('input.TUXTextInputCore-input[placeholder*="Search"]');
    if (!_0x5b8fac) return ![];
    const _0x3fa92f = _0x5b8fac["getBoundingClientRect"]();
    return _0x3fa92f["width"] > 0 && _0x3fa92f["height"] > 0;
  }, "maxRetries": 2 });
  if (!_0x536e9c) {
    sendPipelineLog("warn", "ℹ ปักตระกร้า: Next step 1 fail — ข้าม");
    return;
  }
  const _0x41a44f = Date["now"]() + 5e3;
  while (Date["now"]() < _0x41a44f) {
    const _0x26c0af = document["querySelectorAll"]("tr.product-tb-row");
    if (_0x26c0af["length"] > 0) {
      log["info"]("[basket] Product table loaded (" + _0x26c0af["length"] + " rows)");
      break;
    }
    await sleep(200);
  }
  const _0x4d3da0 = await ensureShowcaseProductsTab();
  !_0x4d3da0 && sendPipelineLog("warn", "⚠ คลิก tab Showcase products ไม่สำเร็จ — ลองดำเนินการต่อ");
  sendPipelineLog("info", "🔍 ค้นหา Product ID: " + _0x5a0877);
  const _0x5eae19 = await waitForElement('input[placeholder="Search products"], input.TUXTextInputCore-input[placeholder*="Search"]', 5e3);
  if (!_0x5eae19) {
    sendPipelineLog("warn", "ℹ ไม่เจอช่อง Search products");
    return;
  }
  _0x5eae19["focus"](), await sleep(200), setReactInputValue(_0x5eae19, _0x5a0877), await sleep(500), _0x5eae19["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Enter", "code": "Enter", "bubbles": !![] })), _0x5eae19["dispatchEvent"](new KeyboardEvent("keyup", { "key": "Enter", "code": "Enter", "bubbles": !![] })), await sleep(2500);
  const _0x2d1909 = await waitForElement('input[type="radio"].TUXRadioStandalone-input', 5e3);
  if (!_0x2d1909) {
    sendPipelineLog("warn", 'ℹ หาสินค้า ID "' + _0x5a0877 + '" ไม่เจอ');
    return;
  }
  const _0x39ad88 = await clickRadioInMainWorld('input[type="radio"].TUXRadioStandalone-input');
  sendPipelineLog("info", "👆 click radio ผ่าน MAIN: " + JSON["stringify"](_0x39ad88)), await sleep(500);
  !_0x2d1909["checked"] && (sendPipelineLog("warn", "⚠ Radio ยัง uncheck → fallback selectTuxRadio"), await selectTuxRadio(_0x2d1909));
  const _0x481dfa = await clickButtonRobust(async () => {
    !_0x2d1909["checked"] && (sendPipelineLog("warn", "ℹ Radio กลายเป็น uncheck → redo select"), await selectTuxRadio(_0x2d1909, !![]), await sleep(600));
    const _0x45b0be = await waitForTuxButtonByLabel("Next", 5e3);
    if (!_0x45b0be) return await selectTuxRadio(_0x2d1909, !![]), await waitForTuxButtonByLabel("Next", 3e3);
    return _0x45b0be;
  }, "Next", "Next (step 2)", { "verify": () => {
    const _0x31ec15 = !document["querySelector"]('input[placeholder="Search products"]'), _0x38fb98 = !!Array["from"](document["querySelectorAll"]("input.TUXTextInputCore-input"))["find"]((_0x5887d6) => {
      var _a;
      if ((_a = _0x5887d6["placeholder"]) == null ? void 0 : _a["includes"]("Search")) return ![];
      const _0x27acc3 = _0x5887d6["getBoundingClientRect"]();
      return _0x27acc3["width"] > 0 && _0x27acc3["height"] > 0;
    });
    return _0x31ec15 || _0x38fb98;
  }, "maxRetries": 2, "verifyTimeout": 6e3, "tryByTextFirst": !![] });
  if (!_0x481dfa) {
    sendPipelineLog("warn", "ℹ ปักตระกร้า: Next step 2 fail — ข้าม");
    return;
  }
  await sleep(800);
  const _0x2bfa8f = await waitForElement('input.TUXTextInputCore-input[aria-describedby$="_description"]', 5e3);
  if (!_0x2bfa8f) {
    sendPipelineLog("warn", "ℹ ไม่เจอช่อง product name");
    return;
  }
  const _0xcd6ff3 = (_0x367604 || "")["trim"](), _0x471107 = _0xcd6ff3 || _0x1a9c13 || _0x5a0877;
  _0xcd6ff3 && sendPipelineLog("info", '🏷 ใช้ "ชื่อตระกร้า" ที่กรอก: "' + _0xcd6ff3 + '"');
  const _0x404672 = sanitizeTikTokProductName(_0x471107);
  _0x404672 !== _0x471107["trim"]() && sendPipelineLog("info", '🧹 ล้างตัวอักษรพิเศษออก: "' + _0x471107 + '" → "' + _0x404672 + '"');
  const _0x3dfa9d = await trimProductNameTo30(_0x404672);
  sendPipelineLog("info", '✂ ชื่อสินค้า 30 ตัวอักษร: "' + _0x3dfa9d + '"'), _0x2bfa8f["focus"](), await sleep(200), setReactInputValue(_0x2bfa8f, ""), await sleep(100), setReactInputValue(_0x2bfa8f, _0x3dfa9d), await sleep(500);
  const _0x13597c = await clickButtonRobust(() => waitForTuxButtonByLabel("Add", 3e3), "Add", "Add (final)", { "verify": () => {
    const _0x34a82f = document["querySelector"]('input.TUXTextInputCore-input[aria-describedby$="_description"]');
    return !_0x34a82f;
  }, "maxRetries": 2 });
  if (!_0x13597c) {
    sendPipelineLog("warn", '⚠ ปักตระกร้า "' + _0x5a0877 + '": final Add fail — modal ยังเปิด');
    return;
  }
  sendPipelineLog("info", '✓ ปักตระกร้า "' + _0x5a0877 + '" สำเร็จ');
}
async function tryDismissDiscardModal() {
  var _a;
  const _0x285a50 = document["querySelectorAll"]('[role="dialog"]');
  for (const _0x5de95d of _0x285a50) {
    const _0xfc6a57 = (_0x5de95d["textContent"] || "")["toLowerCase"]();
    if (!_0xfc6a57["includes"]("discard this post") && !_0xfc6a57["includes"]("discarded permanently")) continue;
    const _0x51556b = _0x5de95d["querySelectorAll"](".TUXButton-label");
    for (const _0x36d838 of _0x51556b) {
      if (((_a = _0x36d838["textContent"]) == null ? void 0 : _a["trim"]()) !== "Discard") continue;
      const _0xee56cf = _0x36d838["closest"]("button.TUXButton, button");
      if (!_0xee56cf) continue;
      const _0x4e7fbc = _0xee56cf["getBoundingClientRect"]();
      if (_0x4e7fbc["width"] === 0 || _0x4e7fbc["height"] === 0) continue;
      return sendPipelineLog("info", '🗑 เจอ modal "Discard this post?" → click Discard'), fireRealClick(_0xee56cf), await sleep(800), !![];
    }
  }
  return ![];
}
function fireRealClick(_0x213c97) {
  var _a, _b;
  try {
    (_a = _0x213c97["click"]) == null ? void 0 : _a.call(_0x213c97);
  } catch {
  }
  try {
    (_b = _0x213c97["focus"]) == null ? void 0 : _b.call(_0x213c97);
    const _0x516b52 = { "key": "Enter", "code": "Enter", "bubbles": !![], "cancelable": !![] };
    _0x213c97["dispatchEvent"](new KeyboardEvent("keydown", _0x516b52)), _0x213c97["dispatchEvent"](new KeyboardEvent("keyup", _0x516b52));
  } catch {
  }
  const _0x21d1ed = _0x213c97["getBoundingClientRect"](), _0x1e4139 = _0x21d1ed["left"] + _0x21d1ed["width"] / 2, _0x5240de = _0x21d1ed["top"] + _0x21d1ed["height"] / 2, _0x396415 = { "bubbles": !![], "cancelable": !![], "clientX": _0x1e4139, "clientY": _0x5240de, "button": 0, "view": window };
  try {
    _0x213c97["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x396415, "pointerType": "mouse", "pointerId": 1 })), _0x213c97["dispatchEvent"](new MouseEvent("mousedown", _0x396415)), _0x213c97["dispatchEvent"](new PointerEvent("pointerup", { ..._0x396415, "pointerType": "mouse", "pointerId": 1 })), _0x213c97["dispatchEvent"](new MouseEvent("mouseup", _0x396415)), _0x213c97["dispatchEvent"](new MouseEvent("click", _0x396415));
  } catch {
  }
  try {
    let _0x33fdba = _0x213c97;
    for (let _0xe823 = 0; _0xe823 < 10 && _0x33fdba; _0xe823++, _0x33fdba = _0x33fdba["parentElement"]) {
      const _0x57b2ef = Object["keys"](_0x33fdba)["find"]((_0x3e77a1) => _0x3e77a1["startsWith"]("__reactProps$"));
      if (!_0x57b2ef) continue;
      const _0x1f6895 = _0x33fdba[_0x57b2ef];
      if (!_0x1f6895) continue;
      const _0x2cc934 = [_0x1f6895["onClick"], _0x1f6895["onPointerDown"], _0x1f6895["onMouseDown"], _0x1f6895["onPointerUp"], _0x1f6895["onMouseUp"]]["filter"]((_0x35ec68) => typeof _0x35ec68 === "function");
      if (_0x2cc934["length"] === 0) continue;
      const _0x55a50d = { "type": "click", "target": _0x213c97, "currentTarget": _0x33fdba, "bubbles": !![], "cancelable": !![], "defaultPrevented": ![], "preventDefault": () => {
      }, "stopPropagation": () => {
      }, "isDefaultPrevented": () => ![], "isPropagationStopped": () => ![], "nativeEvent": new MouseEvent("click", _0x396415), "clientX": _0x1e4139, "clientY": _0x5240de };
      for (const _0x547bed of _0x2cc934) {
        try {
          _0x547bed(_0x55a50d);
        } catch {
        }
      }
      return;
    }
  } catch {
  }
}
async function waitForAddProductButton(_0x5a87ca) {
  const _0x5dcace = Date["now"]() + _0x5a87ca;
  while (Date["now"]() < _0x5dcace) {
    const _0x66d71 = document["querySelectorAll"]('button[role="button"], button.Button__root');
    for (const _0x2c2107 of _0x66d71) {
      const _0x44b83c = _0x2c2107["getBoundingClientRect"]();
      if (_0x44b83c["width"] === 0 || _0x44b83c["height"] === 0) continue;
      const _0x4d7ce0 = _0x2c2107["querySelector"]('[data-icon="Plus"], [data-testid="Plus"]');
      if (!_0x4d7ce0) continue;
      const _0x59c873 = (_0x2c2107["textContent"] || "")["trim"]();
      if (_0x59c873 === "Add") return _0x2c2107;
    }
    await sleep(400);
  }
  return null;
}
async function waitForTuxButtonByLabel(_0x51d3e7, _0x59342b) {
  var _a;
  const _0x21e439 = Date["now"]() + _0x59342b;
  while (Date["now"]() < _0x21e439) {
    const _0x46d28f = document["querySelectorAll"](".TUXButton-label");
    for (const _0x162131 of _0x46d28f) {
      if (((_a = _0x162131["textContent"]) == null ? void 0 : _a["trim"]()) !== _0x51d3e7) continue;
      const _0x203456 = _0x162131["closest"]("button.TUXButton, button");
      if (!_0x203456) continue;
      const _0x1fe9ce = _0x203456["getBoundingClientRect"]();
      if (_0x1fe9ce["width"] === 0 || _0x1fe9ce["height"] === 0) continue;
      if (_0x203456["getAttribute"]("aria-disabled") === "true" || _0x203456["disabled"]) continue;
      return _0x203456;
    }
    await sleep(300);
  }
  return null;
}
async function clickButtonInMainWorld(_0x11e4be, _0x1ff46f = "lastEnabled") {
  try {
    const _0x5de5b3 = await chrome["runtime"]["sendMessage"]({ "type": "TIKTOK_MAIN_WORLD_CLICK", "payload": { "mode": "buttonByText", "buttonText": _0x11e4be, "which": _0x1ff46f } });
    if (!(_0x5de5b3 == null ? void 0 : _0x5de5b3["success"])) return { "clicked": ![], "reason": (_0x5de5b3 == null ? void 0 : _0x5de5b3["error"]) || "bg error" };
    return _0x5de5b3["result"] || { "clicked": ![], "reason": "no result" };
  } catch (_0x2692c6) {
    return { "clicked": ![], "reason": String(_0x2692c6) };
  }
}
async function clickBySelectorInMainWorld(_0x13de0f) {
  try {
    const _0x44e2db = await chrome["runtime"]["sendMessage"]({ "type": "TIKTOK_MAIN_WORLD_CLICK", "payload": { "mode": "selector", "selector": _0x13de0f } });
    if (!(_0x44e2db == null ? void 0 : _0x44e2db["success"])) return { "clicked": ![], "reason": (_0x44e2db == null ? void 0 : _0x44e2db["error"]) || "bg error" };
    return _0x44e2db["result"] || { "clicked": ![], "reason": "no result" };
  } catch (_0x2cafbd) {
    return { "clicked": ![], "reason": String(_0x2cafbd) };
  }
}
async function ensureAddLinkTypeIsProducts() {
  var _a, _b;
  const _0x181c4d = ["products", "product", "ผลิตภัณฑ์", "สินค้า"];
  let _0x552f86 = null;
  const _0x2a034f = Date["now"]() + 2e3;
  while (Date["now"]() < _0x2a034f) {
    const _0x2143e9 = document["querySelectorAll"]('[role="dialog"]');
    for (const _0x303ac1 of _0x2143e9) {
      const _0x2380ba = _0x303ac1["querySelector"]('button[role="combobox"][aria-haspopup="listbox"]');
      if (_0x2380ba) {
        _0x552f86 = _0x2380ba;
        break;
      }
    }
    if (_0x552f86) break;
    await sleep(150);
  }
  if (!_0x552f86) return log["info"]("[basket] No combobox in dialog — default Products account"), !![];
  const _0x2e63ee = _0x552f86["querySelector"](".select-option-label"), _0x3f6240 = ((_0x2e63ee == null ? void 0 : _0x2e63ee["textContent"]) || "")["trim"]();
  log["info"]('[basket] Combobox current: "' + _0x3f6240 + '"');
  const _0x27cb2d = _0x181c4d["some"]((_0x296ab1) => _0x3f6240["toLowerCase"]()["includes"](_0x296ab1));
  if (_0x27cb2d) return log["info"]("[basket] Combobox = Products already"), !![];
  sendPipelineLog("info", "🔘 ตั้งประเภทเป็น Products...");
  const _0x46fe5e = "agx-combobox-" + Date["now"]();
  _0x552f86["setAttribute"]("data-agx-click", _0x46fe5e);
  const _0x39612e = await nativeClickInMainWorld('[data-agx-click="' + _0x46fe5e + '"]');
  _0x552f86["removeAttribute"]("data-agx-click"), log["info"]("[basket] Combobox click: " + JSON["stringify"](_0x39612e));
  let _0x18832b = null;
  const _0x4315e4 = Date["now"]() + 3e3;
  while (Date["now"]() < _0x4315e4) {
    const _0x53a30d = document["querySelectorAll"]('li[role="option"]');
    for (const _0x4e5e8e of _0x53a30d) {
      const _0x389028 = (((_a = _0x4e5e8e["querySelector"](".select-option-label")) == null ? void 0 : _a["textContent"]) || "")["trim"]();
      if (_0x181c4d["some"]((_0x54be23) => _0x389028["toLowerCase"]()["includes"](_0x54be23))) {
        _0x18832b = _0x4e5e8e;
        break;
      }
    }
    if (_0x18832b) break;
    await sleep(150);
  }
  if (!_0x18832b) return sendPipelineLog("warn", "⚠ ไม่พบตัวเลือก Products ใน dropdown"), ![];
  const _0x508ee1 = "agx-option-" + Date["now"]();
  _0x18832b["setAttribute"]("data-agx-click", _0x508ee1);
  const _0x16a5c5 = await nativeClickInMainWorld('li[data-agx-click="' + _0x508ee1 + '"]');
  _0x18832b["removeAttribute"]("data-agx-click"), log["info"]("[basket] Option click: " + JSON["stringify"](_0x16a5c5)), await sleep(400);
  const _0x16f7ae = (((_b = _0x552f86["querySelector"](".select-option-label")) == null ? void 0 : _b["textContent"]) || "")["trim"](), _0x13408d = _0x181c4d["some"]((_0x1451c5) => _0x16f7ae["toLowerCase"]()["includes"](_0x1451c5));
  if (!_0x13408d) sendPipelineLog("warn", '⚠ ตั้ง Products ไม่สำเร็จ (label = "' + _0x16f7ae + '")');
  return _0x13408d;
}
async function ensureShowcaseProductsTab() {
  var _a, _b, _c, _d;
  const _0x4d3c6b = ["showcase products", "showcase", "โชว์เคส", "สินค้าโชว์เคส"];
  let _0x576f32 = [];
  const _0x554f70 = Date["now"]() + 3e3;
  while (Date["now"]() < _0x554f70) {
    const _0x4ca588 = document["querySelectorAll"]('[role="dialog"]');
    for (const _0x104c9a of _0x4ca588) {
      const _0xf0824c = Array["from"](_0x104c9a["querySelectorAll"]("button.TUXTabBar-itemTitle"));
      if (_0xf0824c["length"] > 0) {
        _0x576f32 = _0xf0824c;
        break;
      }
    }
    if (_0x576f32["length"] > 0) break;
    await sleep(150);
  }
  if (_0x576f32["length"] === 0) return log["info"]("[basket] No tab bar — simple account"), !![];
  let _0x343a6e = null;
  for (const _0x2e76ea of _0x576f32) {
    const _0x3465d1 = (_0x2e76ea["textContent"] || "")["trim"]()["toLowerCase"]();
    if (_0x4d3c6b["some"]((_0x3f4d0e) => _0x3465d1["includes"](_0x3f4d0e))) {
      _0x343a6e = _0x2e76ea;
      break;
    }
  }
  if (!_0x343a6e) return log["info"]("[basket] No Showcase tab in tab bar"), !![];
  const _0x3f204c = _0x343a6e["classList"]["contains"]("TUXTabBar-itemTitle--active") || _0x343a6e["hasAttribute"]("data-active");
  if (_0x3f204c) return log["info"]("[basket] Showcase tab already active"), !![];
  const _0x12de0f = (((_a = document["querySelector"]("tr.product-tb-row .product-name")) == null ? void 0 : _a["textContent"]) || ((_b = document["querySelector"]("tr.product-tb-row td")) == null ? void 0 : _b["textContent"]) || "")["trim"]();
  sendPipelineLog("info", "🛒 สลับไปแท็บ Showcase products..."), log["info"]('[basket] Click Showcase tab (first row before: "' + _0x12de0f["slice"](0, 30) + '...")');
  const _0x5bd8b2 = "agx-tab-" + Date["now"]();
  _0x343a6e["setAttribute"]("data-agx-click", _0x5bd8b2);
  const _0x19da5d = await nativeClickInMainWorld('button[data-agx-click="' + _0x5bd8b2 + '"]');
  _0x343a6e["removeAttribute"]("data-agx-click"), log["info"]("[basket] Tab click: " + JSON["stringify"](_0x19da5d));
  const _0x56ea62 = Date["now"]() + 2e3;
  let _0x2bb980 = ![];
  while (Date["now"]() < _0x56ea62) {
    const _0x2b798b = _0x343a6e["classList"]["contains"]("TUXTabBar-itemTitle--active") || _0x343a6e["hasAttribute"]("data-active");
    if (_0x2b798b) {
      _0x2bb980 = !![];
      break;
    }
    await sleep(150);
  }
  if (!_0x2bb980) return sendPipelineLog("warn", "⚠ สลับ Showcase tab ไม่สำเร็จ"), ![];
  log["info"]("[basket] Showcase active class updated — wait for table re-render");
  const _0x58fb0f = Date["now"]() + 6e3;
  while (Date["now"]() < _0x58fb0f) {
    const _0xa7f22 = (((_c = document["querySelector"]("tr.product-tb-row .product-name")) == null ? void 0 : _c["textContent"]) || ((_d = document["querySelector"]("tr.product-tb-row td")) == null ? void 0 : _d["textContent"]) || "")["trim"]();
    if (_0xa7f22 && _0xa7f22 !== _0x12de0f) return log["info"]('[basket] Table re-rendered (first row: "' + _0xa7f22["slice"](0, 40) + '...")'), await sleep(300), !![];
    await sleep(150);
  }
  return log["warn"]("[basket] Table content unchanged after 6s — proceeding anyway"), !![];
}
async function nativeClickInMainWorld(_0x4d43db) {
  try {
    const _0x4ff3ff = await chrome["runtime"]["sendMessage"]({ "type": "TIKTOK_MAIN_WORLD_CLICK", "payload": { "mode": "nativeClick", "selector": _0x4d43db } });
    if (!(_0x4ff3ff == null ? void 0 : _0x4ff3ff["success"])) return { "clicked": ![], "reason": (_0x4ff3ff == null ? void 0 : _0x4ff3ff["error"]) || "bg error" };
    return _0x4ff3ff["result"] || { "clicked": ![], "reason": "no result" };
  } catch (_0x544cc7) {
    return { "clicked": ![], "reason": String(_0x544cc7) };
  }
}
async function clickButtonRobust(_0xc9cef9, _0x504b73, _0x5bdf55, _0x495e4e = {}) {
  const { verify: _0x344c0f, maxRetries = 2, waitBetweenRetries = 1500, verifyTimeout = 4e3, which = "lastEnabled", tryByTextFirst = ![] } = _0x495e4e, _0x50731d = async () => {
    if (!_0x344c0f) return await sleep(800), !![];
    const _0x2a37db = Date["now"]() + verifyTimeout;
    while (Date["now"]() < _0x2a37db) {
      try {
        if (await Promise["resolve"](_0x344c0f())) return !![];
      } catch {
      }
      await sleep(300);
    }
    return ![];
  }, _0x128183 = () => {
    if (!_0x344c0f) return !![];
    try {
      const _0x415efe = _0x344c0f();
      return _0x415efe === !![];
    } catch {
      return ![];
    }
  }, _0x27a47f = tryByTextFirst ? ["B", "A", "C", "D"] : ["A", "B", "C", "D"];
  for (let _0x2892b1 = 0; _0x2892b1 <= maxRetries; _0x2892b1++) {
    _0x2892b1 > 0 && (sendPipelineLog("info", '↻ "' + _0x5bdf55 + '" รอบ ' + (_0x2892b1 + 1) + "/" + (maxRetries + 1)), await sleep(waitBetweenRetries));
    const _0x1fd1fa = await _0xc9cef9();
    if (!_0x1fd1fa) {
      sendPipelineLog("warn", 'ℹ "' + _0x5bdf55 + '" ไม่เจอปุ่ม (รอบ ' + (_0x2892b1 + 1) + ")");
      continue;
    }
    for (const _0x22c7c2 of _0x27a47f) {
      if (_0x22c7c2 === "A") {
        const _0x39de2b = "agx-" + Date["now"]() + "-" + Math["random"]()["toString"](36)["slice"](2, 8);
        _0x1fd1fa["setAttribute"]("data-agx-click", _0x39de2b);
        const _0x58f95c = await clickBySelectorInMainWorld('[data-agx-click="' + _0x39de2b + '"]');
        _0x1fd1fa["removeAttribute"]("data-agx-click");
        if (_0x58f95c["clicked"]) {
          sendPipelineLog("info", '👆 "' + _0x5bdf55 + '" Path A ✓ (DOM)');
          if (await _0x50731d()) return !![];
          sendPipelineLog("info", "   ⚠ verify fail หลัง Path A");
        } else sendPipelineLog("info", '↻ "' + _0x5bdf55 + '" Path A fail (' + _0x58f95c["reason"] + ")");
      } else {
        if (_0x22c7c2 === "B") {
          if (!_0x504b73) continue;
          const _0x396d7b = await clickButtonInMainWorld(_0x504b73, which);
          if (_0x396d7b["clicked"]) {
            sendPipelineLog("info", '👆 "' + _0x5bdf55 + '" Path B ✓ (DOM)');
            if (await _0x50731d()) return !![];
            sendPipelineLog("info", "   ⚠ verify fail หลัง Path B");
          } else sendPipelineLog("info", '↻ "' + _0x5bdf55 + '" Path B fail (' + _0x396d7b["reason"] + ")");
        } else {
          if (_0x22c7c2 === "C") try {
            _0x1fd1fa["click"](), sendPipelineLog("info", '👆 "' + _0x5bdf55 + '" Path C (isolated) — best-effort');
            if (await _0x50731d()) return !![];
            sendPipelineLog("info", "   ⚠ verify fail หลัง Path C");
          } catch (_0x14f8f0) {
            sendPipelineLog("warn", "   Path C error: " + _0x14f8f0);
          }
          else {
            if (_0x22c7c2 === "D") {
              sendPipelineLog("info", '🔧 "' + _0x5bdf55 + '" Path D: clickAndWaitForAdvance (React fiber + 6 strategies)');
              const _0x5ef994 = await clickAndWaitForAdvance(_0x1fd1fa, _0x128183, verifyTimeout);
              if (_0x5ef994) return sendPipelineLog("info", '👆 "' + _0x5bdf55 + '" Path D ✓'), !![];
              sendPipelineLog("info", "   ⚠ Path D ก็ไม่ผ่าน");
            }
          }
        }
      }
    }
  }
  return sendPipelineLog("warn", '❌ "' + _0x5bdf55 + '" ทั้ง ' + (maxRetries + 1) + " รอบ × " + _0x27a47f["length"] + " path ยังไม่สำเร็จ"), ![];
}
async function clickRadioInMainWorld(_0x49c919) {
  try {
    const _0x5ef59d = await chrome["runtime"]["sendMessage"]({ "type": "TIKTOK_MAIN_WORLD_CLICK", "payload": { "mode": "radioInput", "selector": _0x49c919 } });
    if (!(_0x5ef59d == null ? void 0 : _0x5ef59d["success"])) return { "clicked": ![], "reason": (_0x5ef59d == null ? void 0 : _0x5ef59d["error"]) || "bg error" };
    return _0x5ef59d["result"] || { "clicked": ![], "reason": "no result" };
  } catch (_0x2ee3d4) {
    return { "clicked": ![], "reason": String(_0x2ee3d4) };
  }
}
async function clickAndWaitForAdvance(_0xbf2c00, _0xe494aa, _0x4d0380) {
  var _a, _b;
  const _0x5b995b = Date["now"]() + _0x4d0380, _0x153fc7 = _0xbf2c00["getBoundingClientRect"](), _0x57aa94 = _0x153fc7["left"] + _0x153fc7["width"] / 2, _0x4b3ec4 = _0x153fc7["top"] + _0x153fc7["height"] / 2, _0x741841 = { "bubbles": !![], "cancelable": !![], "clientX": _0x57aa94, "clientY": _0x4b3ec4, "button": 0, "view": window }, _0x376928 = async (_0x493600) => {
    const _0x594f4d = Math["min"](Date["now"]() + 1200, _0x5b995b);
    while (Date["now"]() < _0x594f4d) {
      if (_0xe494aa()) return sendPipelineLog("info", "✓ modal เปลี่ยนหน้าสำเร็จ (วิธี: " + _0x493600 + ")"), !![];
      await sleep(150);
    }
    return ![];
  };
  try {
    _0xbf2c00["scrollIntoView"]({ "block": "center", "behavior": "auto" });
  } catch {
  }
  await sleep(100);
  try {
    _0xbf2c00["dispatchEvent"](new MouseEvent("mousedown", { "bubbles": !![] })), _0xbf2c00["dispatchEvent"](new MouseEvent("mouseup", { "bubbles": !![] })), _0xbf2c00["dispatchEvent"](new MouseEvent("click", { "bubbles": !![] }));
  } catch {
  }
  if (await _0x376928("V1 mouse sequence")) return !![];
  if (Date["now"]() >= _0x5b995b) return _0xe494aa();
  try {
    (_a = _0xbf2c00["click"]) == null ? void 0 : _a.call(_0xbf2c00);
  } catch {
  }
  if (await _0x376928("native click")) return !![];
  if (Date["now"]() >= _0x5b995b) return _0xe494aa();
  const _0x9aa19d = _0xbf2c00["querySelector"](".TUXButton-label") || _0xbf2c00["querySelector"](".TUXButton-content") || _0xbf2c00["firstElementChild"];
  if (_0x9aa19d) {
    try {
      (_b = _0x9aa19d["click"]) == null ? void 0 : _b.call(_0x9aa19d);
    } catch {
    }
    const _0x4fac8d = _0x9aa19d["getBoundingClientRect"](), _0x130ca1 = { "bubbles": !![], "cancelable": !![], "clientX": _0x4fac8d["left"] + _0x4fac8d["width"] / 2, "clientY": _0x4fac8d["top"] + _0x4fac8d["height"] / 2, "button": 0, "view": window };
    try {
      _0x9aa19d["dispatchEvent"](new MouseEvent("mousedown", _0x130ca1)), _0x9aa19d["dispatchEvent"](new MouseEvent("mouseup", _0x130ca1)), _0x9aa19d["dispatchEvent"](new MouseEvent("click", _0x130ca1));
    } catch {
    }
    if (await _0x376928("คลิก inner label")) return !![];
    if (Date["now"]() >= _0x5b995b) return _0xe494aa();
  }
  try {
    const _0x384d44 = Object["keys"](_0xbf2c00)["filter"]((_0x5c2f48) => _0x5c2f48["startsWith"]("__"));
    sendPipelineLog("info", "🔍 keys บน button: " + (_0x384d44["slice"](0, 6)["join"](",") || "(none)"));
  } catch {
  }
  let _0x63e0b3 = 0;
  try {
    let _0x26fdee = _0xbf2c00;
    for (let _0x15ecc0 = 0; _0x15ecc0 < 10 && _0x26fdee; _0x15ecc0++, _0x26fdee = _0x26fdee["parentElement"]) {
      const _0x325f3b = _0x26fdee, _0x4aaac6 = Object["keys"](_0x325f3b)["find"]((_0x21c5bf) => _0x21c5bf["startsWith"]("__reactProps")), _0x906872 = Object["keys"](_0x325f3b)["find"]((_0x4a17f6) => _0x4a17f6["startsWith"]("__reactFiber"));
      let _0x1970c3;
      if (_0x4aaac6) _0x1970c3 = _0x325f3b[_0x4aaac6];
      if (!_0x1970c3 && _0x906872) {
        const _0x4b4351 = _0x325f3b[_0x906872];
        _0x1970c3 = _0x4b4351 == null ? void 0 : _0x4b4351["memoizedProps"];
      }
      if (!_0x1970c3) continue;
      const _0x535444 = [_0x1970c3["onClick"], _0x1970c3["onPointerDown"], _0x1970c3["onMouseDown"], _0x1970c3["onPointerUp"], _0x1970c3["onMouseUp"], _0x1970c3["onTap"], _0x1970c3["onPress"]]["filter"]((_0x3f6561) => typeof _0x3f6561 === "function");
      if (_0x535444["length"] === 0) continue;
      _0x63e0b3 = _0x535444["length"], sendPipelineLog("info", "🔍 เจอ React handlers (" + _0x535444["length"] + ") บน " + _0x26fdee["tagName"] + "." + (_0x26fdee["className"] || "")["split"](" ")[0] + " (depth=" + _0x15ecc0 + ", via=" + (_0x4aaac6 ? "props" : "fiber") + ")");
      const _0x33542a = { "type": "click", "target": _0xbf2c00, "currentTarget": _0x26fdee, "bubbles": !![], "cancelable": !![], "defaultPrevented": ![], "preventDefault": () => {
      }, "stopPropagation": () => {
      }, "isDefaultPrevented": () => ![], "isPropagationStopped": () => ![], "nativeEvent": new MouseEvent("click", _0x741841), "clientX": _0x57aa94, "clientY": _0x4b3ec4 };
      for (const _0x29f652 of _0x535444) {
        try {
          _0x29f652(_0x33542a);
        } catch {
        }
      }
      break;
    }
  } catch {
  }
  if (await _0x376928("React fiber ขึ้นบน")) return !![];
  if (Date["now"]() >= _0x5b995b) return _0xe494aa();
  let _0x5a636a = 0;
  try {
    const _0xaec68a = [_0xbf2c00, ...Array["from"](_0xbf2c00["querySelectorAll"]("*"))];
    for (const _0x4f11ce of _0xaec68a) {
      const _0x2b1bb9 = _0x4f11ce, _0x2e1585 = Object["keys"](_0x2b1bb9)["find"]((_0xddfe74) => _0xddfe74["startsWith"]("__reactProps")), _0xd56c5b = Object["keys"](_0x2b1bb9)["find"]((_0xc9bc27) => _0xc9bc27["startsWith"]("__reactFiber"));
      let _0x468e73;
      if (_0x2e1585) _0x468e73 = _0x2b1bb9[_0x2e1585];
      if (!_0x468e73 && _0xd56c5b) {
        const _0x4b6e47 = _0x2b1bb9[_0xd56c5b];
        _0x468e73 = _0x4b6e47 == null ? void 0 : _0x4b6e47["memoizedProps"];
      }
      const _0x3046b9 = _0x468e73 == null ? void 0 : _0x468e73["onClick"];
      if (typeof _0x3046b9 !== "function") continue;
      _0x5a636a++;
      const _0x5805c5 = { "type": "click", "target": _0x4f11ce, "currentTarget": _0x4f11ce, "bubbles": !![], "cancelable": !![], "defaultPrevented": ![], "preventDefault": () => {
      }, "stopPropagation": () => {
      }, "isDefaultPrevented": () => ![], "isPropagationStopped": () => ![], "nativeEvent": new MouseEvent("click", _0x741841), "clientX": _0x57aa94, "clientY": _0x4b3ec4 };
      try {
        _0x3046b9(_0x5805c5);
      } catch {
      }
    }
  } catch {
  }
  if (await _0x376928("React fiber ลงล่าง")) return !![];
  sendPipelineLog("info", "🔍 React handlers: up=" + _0x63e0b3 + ", down=" + _0x5a636a + " — ถ้า 0 แสดงว่าหาไม่เจอ");
  try {
    const _0x121570 = document["elementFromPoint"](_0x57aa94, _0x4b3ec4);
    if (_0x121570 && _0x121570 !== _0xbf2c00 && !_0xbf2c00["contains"](_0x121570)) {
      sendPipelineLog("warn", "⚠ มี overlay บัง Next: " + _0x121570["tagName"] + "." + (_0x121570["className"] || "")["split"](" ")[0] + " → ปิด pointer-events");
      const _0xf991d8 = _0x121570["style"]["pointerEvents"];
      _0x121570["style"]["pointerEvents"] = "none", await sleep(50);
      const _0x256af2 = document["elementFromPoint"](_0x57aa94, _0x4b3ec4);
      sendPipelineLog("info", "🔍 หลังปิด overlay, target: " + (_0x256af2 == null ? void 0 : _0x256af2["tagName"]) + "." + (((_0x256af2 == null ? void 0 : _0x256af2["className"]) || "")["split"](" ")[0] || ""));
      const _0x3063bf = _0x256af2 && _0xbf2c00["contains"](_0x256af2) ? _0x256af2 : _0xbf2c00;
      _0x3063bf["dispatchEvent"](new MouseEvent("mousedown", { "bubbles": !![], "cancelable": !![], "view": window, "clientX": _0x57aa94, "clientY": _0x4b3ec4 })), _0x3063bf["dispatchEvent"](new MouseEvent("mouseup", { "bubbles": !![], "cancelable": !![], "view": window, "clientX": _0x57aa94, "clientY": _0x4b3ec4 })), _0x3063bf["dispatchEvent"](new MouseEvent("click", { "bubbles": !![], "cancelable": !![], "view": window, "clientX": _0x57aa94, "clientY": _0x4b3ec4 })), await sleep(300), _0x121570["style"]["pointerEvents"] = _0xf991d8;
    }
  } catch {
  }
  if (await _0x376928("ปิด overlay pointer-events")) return !![];
  while (Date["now"]() < _0x5b995b) {
    if (_0xe494aa()) return !![];
    await sleep(200);
  }
  return _0xe494aa();
}
async function selectTuxRadio(_0x5a3e14, _0x406da2 = ![]) {
  var _a, _b;
  const _0x53a6c1 = _0x5a3e14["closest"](".TUXRadioStandalone") || _0x5a3e14["closest"]("label") || _0x5a3e14["parentElement"];
  sendPipelineLog("info", "👆 select radio (wrapper=" + (_0x53a6c1 == null ? void 0 : _0x53a6c1["tagName"]) + "." + (((_a = _0x53a6c1 == null ? void 0 : _0x53a6c1["className"]) == null ? void 0 : _a["split"](" ")[0]) || "") + ", checked=" + _0x5a3e14["checked"] + ")");
  try {
    _0x5a3e14["dispatchEvent"](new MouseEvent("click", { "bubbles": !![], "cancelable": !![], "view": window }));
  } catch {
  }
  await sleep(250);
  if (!_0x5a3e14["checked"]) {
    try {
      _0x5a3e14["click"]();
    } catch {
    }
    await sleep(250);
  }
  !_0x5a3e14["checked"] && _0x53a6c1 && (fireRealClick(_0x53a6c1), await sleep(250));
  if (!_0x5a3e14["checked"]) {
    const _0x5b7aab = (_b = Object["getOwnPropertyDescriptor"](HTMLInputElement["prototype"], "checked")) == null ? void 0 : _b["set"];
    _0x5b7aab == null ? void 0 : _0x5b7aab["call"](_0x5a3e14, !![]), _0x5a3e14["dispatchEvent"](new Event("input", { "bubbles": !![] })), _0x5a3e14["dispatchEvent"](new Event("change", { "bubbles": !![] })), await sleep(250);
  }
  try {
    let _0x5a4fda = _0x5a3e14;
    for (let _0x4f5610 = 0; _0x4f5610 < 10 && _0x5a4fda; _0x4f5610++, _0x5a4fda = _0x5a4fda["parentElement"]) {
      const _0x1d9db9 = Object["keys"](_0x5a4fda)["find"]((_0x3277ba) => _0x3277ba["startsWith"]("__reactProps$"));
      if (!_0x1d9db9) continue;
      const _0x11b4c5 = _0x5a4fda[_0x1d9db9];
      if (!_0x11b4c5) continue;
      const _0x4dd6d0 = [_0x11b4c5["onChange"], _0x11b4c5["onClick"]]["filter"]((_0x4070f3) => typeof _0x4070f3 === "function");
      if (_0x4dd6d0["length"] === 0) continue;
      const _0x3da6d9 = { "type": "change", "target": _0x5a3e14, "currentTarget": _0x5a4fda, "bubbles": !![], "cancelable": !![], "defaultPrevented": ![], "preventDefault": () => {
      }, "stopPropagation": () => {
      }, "isDefaultPrevented": () => ![], "isPropagationStopped": () => ![], "nativeEvent": new Event("change", { "bubbles": !![] }) };
      for (const _0x42b5a of _0x4dd6d0) {
        try {
          _0x42b5a(_0x3da6d9);
        } catch {
        }
      }
      break;
    }
  } catch {
  }
  if (_0x406da2) {
    try {
      _0x5a3e14["scrollIntoView"]({ "block": "center", "behavior": "auto" });
    } catch {
    }
    await sleep(150);
    const _0x2b2083 = _0x5a3e14["closest"]("tr") || _0x5a3e14["closest"]('[role="row"]') || (_0x53a6c1 == null ? void 0 : _0x53a6c1["parentElement"]) || null;
    if (_0x2b2083) fireRealClick(_0x2b2083);
    await sleep(300);
  }
  await sleep(500);
}
function setReactInputValue(_0x5e8905, _0x419d4e) {
  var _a;
  const _0x175bce = (_a = Object["getOwnPropertyDescriptor"](HTMLInputElement["prototype"], "value")) == null ? void 0 : _a["set"];
  _0x175bce ? _0x175bce["call"](_0x5e8905, _0x419d4e) : _0x5e8905["value"] = _0x419d4e, _0x5e8905["dispatchEvent"](new Event("input", { "bubbles": !![] })), _0x5e8905["dispatchEvent"](new Event("change", { "bubbles": !![] }));
}
function sanitizeTikTokProductName(_0x25afef) {
  if (!_0x25afef) return "";
  return _0x25afef["replace"](/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "")["replace"](/[<>"'\\&|~^`]/g, "")["replace"](/[\u200B-\u200F\u202A-\u202E\u2060-\u2064\uFEFF]/g, "")["replace"](/[\x00-\x1F\x7F]/g, "")["replace"](/\s+/g, " ")["trim"]();
}
async function trimProductNameTo30(_0x1aaa22) {
  if (_0x1aaa22["length"] <= 30) return _0x1aaa22;
  try {
    const _0x6c94ea = await chrome["runtime"]["sendMessage"]({ "type": "AI_TRIM_NAME_30", "payload": { "name": _0x1aaa22 } });
    if ((_0x6c94ea == null ? void 0 : _0x6c94ea["success"]) && _0x6c94ea["trimmed"] && _0x6c94ea["trimmed"]["length"] <= 30) return _0x6c94ea["trimmed"];
  } catch (_0x633fa9) {
    log["warn"]("AI trim failed: " + _0x633fa9);
  }
  return _0x1aaa22["slice"](0, 30)["trim"]();
}
function findButtonByText(_0x2904fa) {
  const _0x3f1987 = document["querySelectorAll"]("button");
  for (const _0x38cedb of _0x3f1987) {
    const _0x4257b5 = (_0x38cedb["textContent"] || "")["toLowerCase"]()["trim"]();
    if (_0x2904fa["some"]((_0xfa2286) => _0x4257b5["includes"](_0xfa2286))) return _0x38cedb;
  }
  return null;
}
async function waitForElement(_0x47503e, _0x53ece8) {
  const _0x4f5821 = Date["now"]() + _0x53ece8;
  while (Date["now"]() < _0x4f5821) {
    const _0x2c5678 = document["querySelector"](_0x47503e);
    if (_0x2c5678) return _0x2c5678;
    await sleep(500);
  }
  return null;
}
let tiktokDoneSent = ![];
function sendTiktokDone(_0x1ea797) {
  if (tiktokDoneSent) return;
  tiktokDoneSent = !![], safeSendMessage({ "type": "TIKTOK_DONE", "payload": _0x1ea797 });
}
function sendPipelineLog(_0x55fc34, _0x38d7a8, _0x464f21 = ![]) {
  safeSendMessage({ "type": "PIPELINE_LOG", "payload": { "level": _0x55fc34, "message": _0x38d7a8, "replace": _0x464f21 } });
}
function safeSendMessage(_0x5ccbd3) {
  var _a;
  try {
    if (!((_a = chrome == null ? void 0 : chrome["runtime"]) == null ? void 0 : _a["id"])) return;
    chrome["runtime"]["sendMessage"](_0x5ccbd3)["catch"](() => {
    });
  } catch {
  }
}
function sleep(_0x38117a) {
  return new Promise((_0x57af84) => setTimeout(_0x57af84, _0x38117a));
}
