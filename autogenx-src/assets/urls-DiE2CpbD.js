const FLOW_HOME_URL = "https://labs.google/fx/tools/flow";
const TIKTOK_UPLOAD_URL = "https://www.tiktok.com/tiktokstudio/upload";
const TIKTOK_STUDIO_URL = "https://www.tiktok.com/tiktokstudio";
function isFlowProjectUrl(_0xedf001) {
  if (!_0xedf001) return ![];
  return /\/fx(?:\/[a-z]{2})?\/tools\/flow\/project\/[^/?#]+/i["test"](_0xedf001);
}
function isFlowEditUrl(_0x3b0519) {
  if (!_0x3b0519) return ![];
  return /\/fx(?:\/[a-z]{2})?\/tools\/flow\/project\/[^/?#]+\/edit/i["test"](_0x3b0519);
}
function isFlowHomeUrl(_0x55f486) {
  if (!_0x55f486) return ![];
  return /labs\.google\/fx(?:\/[a-z]{2})?\/tools\/flow\/?(?:\?|$)/i["test"](_0x55f486);
}
function extractFlowProjectId(_0x3c2681) {
  if (!_0x3c2681) return null;
  const _0x49d0d8 = _0x3c2681["match"](/\/fx(?:\/[a-z]{2})?\/tools\/flow\/project\/([0-9a-f-]{8,})/i);
  return _0x49d0d8 ? _0x49d0d8[1] : null;
}
function buildFlowProjectUrl(_0x3772ed, _0x4d6634 = "en") {
  const _0x5659d5 = _0x4d6634 === "en" || !_0x4d6634 ? "" : "/" + _0x4d6634;
  return "https://labs.google/fx" + _0x5659d5 + "/tools/flow/project/" + _0x3772ed;
}
function isStrictFlowProjectUrl(_0x1cc8bd, _0x4fd22c) {
  const _0x166171 = _0x4fd22c["replace"](/[.*+?^${}()|[\]\\]/g, "\\$&"), _0x527af7 = new RegExp("/fx(?:/[a-z]{2})?/tools/flow/project/" + _0x166171 + "/?(?:\\?|#|$)", "i");
  return _0x527af7["test"](_0x1cc8bd);
}
function isStrictFlowSceneUrl(_0x57dab0, _0x885746) {
  const _0x271838 = _0x885746["replace"](/[.*+?^${}()|[\]\\]/g, "\\$&"), _0x17737b = new RegExp("/fx(?:/[a-z]{2})?/tools/flow/project/" + _0x271838 + "/scene(?:/|\\?|#|$)", "i");
  return _0x17737b["test"](_0x57dab0);
}
function getFlowLocale(_0x3135ae) {
  if (!_0x3135ae) return "en";
  const _0x480bd5 = _0x3135ae["match"](/labs\.google\/fx\/([a-z]{2})\/tools\/flow/i);
  return _0x480bd5 ? _0x480bd5[1]["toLowerCase"]() : "en";
}
function isTikTokUploadUrl(_0x430e89) {
  if (!_0x430e89) return ![];
  return /tiktok\.com\/tiktokstudio\/upload/i["test"](_0x430e89);
}
const GUARD_FLOW_PROJECT = { "name": "Flow Project", "predicate": isFlowProjectUrl, "recoveryUrl": FLOW_HOME_URL, "postNavWaitMs": 5e3, "ensureFlowProject": !![] };
const GUARD_TIKTOK_UPLOAD = { "name": "TikTok Upload", "predicate": isTikTokUploadUrl, "recoveryUrl": TIKTOK_UPLOAD_URL, "postNavWaitMs": 3e3 };
export {
  FLOW_HOME_URL as F,
  GUARD_FLOW_PROJECT as G,
  TIKTOK_STUDIO_URL as T,
  isFlowEditUrl as a,
  isStrictFlowSceneUrl as b,
  isStrictFlowProjectUrl as c,
  isFlowHomeUrl as d,
  extractFlowProjectId as e,
  buildFlowProjectUrl as f,
  getFlowLocale as g,
  GUARD_TIKTOK_UPLOAD as h,
  isFlowProjectUrl as i
};
