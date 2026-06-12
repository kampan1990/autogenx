const DEV = { "ENABLE_DEBUG_PANEL": ![], "SKIP_LICENSE": ![], "FORCE_AI_FALLBACK": ![], "SKIP_SERVER_PROMPT": ![], "SKIP_NEW_PROJECT_PER_PRODUCT": ![], "SKIP_UPLOAD": ![], "SKIP_GEN_IMAGE": ![], "SKIP_GEN_VIDEO": ![], "STOP_AFTER_VIDEO_PROMPT": ![], "TEST_EXTEND_CLICK_ONLY": ![], "STOP_AFTER_EXTEND_CLICK": ![], "SKIP_SCENE_1_GEN": ![], "TEST_DOWNLOAD_ONLY": ![], "TEST_SCENEBUILDER_ATTACH_ONLY": ![], "TEST_SCENEBUILDER_DOWNLOAD_ONLY": ![], "STOP_BEFORE_TIKTOK_CAPTION": ![], "SKIP_TIKTOK_POST": ![], "SKIP_SAVE_CLIP": ![], "SKIP_BASKET_PIN": ![], "TEST_BASKET_PIN_ONLY": ![], "TEST_SCHEDULE_ONLY": ![], "FORCE_CHUNKED_TRANSFER": ![], "SOFT_RETRY_FAKE_WRONG_PAGE": ![], "SKIP_AI_LABEL_TOGGLE": ![], "SKIP_HUMAN_DELAYS": ![], "VERBOSE_LOGS": ![], "SHOW_PROMPT_IN_LOG": ![] };
function activeDevFlags() {
  return Object["entries"](DEV)["filter"](([, _0x32b54c]) => _0x32b54c === !![])["map"](([_0x2a9775]) => _0x2a9775);
}
const IS_RELEASE = !![], OVERLAY_TAB_URLS = ["https://labs.google/*", "https://labs.google.com/*", "https://aitestkitchen.withgoogle.com/*", "https://www.tiktok.com/*"], RELEASE_BLACKLIST_PATTERNS = [/^\s*🔬\s/, /^\s*🔍\s/, /^\s*👆\s/, /^\s*[1-9]️⃣\s/, /^\s*🧪\s/, /\[(?:VIDEO_DIRECTOR_|IMAGE_COPY_|SCENE_BLUEPRINT_|VIDEO_DIRECTOR_EXTEND_)/, /\bvia\s+(store-hit|fetch-fallback|store-miss)/, /\bvia\s+MAIN(\s|:)/, /^result:\s*\{/, /aria-disabled=/, /radio\.checked=/, /onCreated\s+fired/, /filter\s+(PASS|SKIP)/, /tile=fe_id/, /chunk\s+\d+\/\d+/i, /\bdataUrl\s+(len|size)=/];
function shouldDropInRelease(_0xc44154) {
  if (!IS_RELEASE) return ![];
  for (const _0x4cc7a2 of RELEASE_BLACKLIST_PATTERNS) {
    if (_0x4cc7a2["test"](_0xc44154)) return !![];
  }
  return ![];
}
const PIPELINE_STATE_STORAGE_KEY = "agx_pipeline_state";
function broadcastPipelineEvent(_0x5e41d6, _0x160ead) {
  var _a;
  chrome["runtime"]["sendMessage"]({ "type": _0x5e41d6, "payload": _0x160ead })["catch"](() => {
  }), chrome["tabs"]["query"]({ "url": OVERLAY_TAB_URLS }, (_0x31fdef) => {
    for (const _0x2a293e of _0x31fdef) {
      _0x2a293e["id"] !== void 0 && chrome["tabs"]["sendMessage"](_0x2a293e["id"], { "type": _0x5e41d6, "payload": _0x160ead })["catch"](() => {
      });
    }
  });
  if (_0x5e41d6 === "PIPELINE_STATE" && typeof ((_a = chrome["storage"]) == null ? void 0 : _a["session"]) !== "undefined") {
    const _0x4fc799 = _0x160ead;
    chrome["storage"]["session"]["set"]({ [PIPELINE_STATE_STORAGE_KEY]: (_0x4fc799 == null ? void 0 : _0x4fc799["state"]) || "idle" })["catch"](() => {
    });
  }
}
function sendPipelineLog(_0x4e4683, _0x2d1231, _0x31fb3c = ![]) {
  if (shouldDropInRelease(_0x2d1231)) return;
  broadcastPipelineEvent("PIPELINE_LOG", { "level": _0x4e4683, "message": _0x2d1231, "replace": _0x31fb3c });
}
function hardKillPipeline(_0x1291ac, _0x24561a) {
  broadcastPipelineEvent("PIPELINE_STATE", { "state": "stopped", "mode": _0x1291ac }), broadcastPipelineEvent("PIPELINE_LOG", { "level": "warn", "message": "🛑 Hard kill — reload tabs ทั้งหมด" });
  const _0x34eb8e = (_0x515510) => {
    chrome["tabs"]["reload"](_0x515510)["catch"](() => {
    });
  };
  if (_0x24561a !== null) _0x34eb8e(_0x24561a);
  chrome["tabs"]["query"]({ "url": OVERLAY_TAB_URLS }, (_0x2766aa) => {
    for (const _0x4b242a of _0x2766aa) {
      if (_0x4b242a["id"] !== void 0 && _0x4b242a["id"] !== _0x24561a) _0x34eb8e(_0x4b242a["id"]);
    }
  });
}
export {
  DEV as D,
  PIPELINE_STATE_STORAGE_KEY as P,
  sendPipelineLog as a,
  broadcastPipelineEvent as b,
  activeDevFlags as c,
  hardKillPipeline as h,
  shouldDropInRelease as s
};
