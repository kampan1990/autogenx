import { g as getLoggerBuffer, c as createLogger } from "./logger-CbU0UFxz.js";
import { D as DEV } from "./pipeline-log-C2ZJNMjJ.js";
import { g as getFlowLocale, i as isFlowProjectUrl, a as isFlowEditUrl, b as isStrictFlowSceneUrl, c as isStrictFlowProjectUrl, e as extractFlowProjectId, d as isFlowHomeUrl, f as buildFlowProjectUrl } from "./urls-DiE2CpbD.js";
import { i as installOverlay } from "./pipeline-overlay-2NgNscin.js";
const FLOW_SELECTORS = { "promptInput": ['[data-slate-editor="true"]', '.public-DraftEditor-content[contenteditable="true"]', 'div[contenteditable="true"][role="textbox"]', 'textarea[placeholder*="Describe"]', 'textarea[placeholder*="create"]', 'textarea[class*="prompt"]'] };
const FLOW_LABELS = { "CREATE_WITH_FLOW": ["Create with Flow"], "NEW_PROJECT": ["New project", "โปรเจ็กต์ใหม่"], "UPLOAD_IMAGE": ["Upload image", "อัปโหลดรูปภาพ"], "ADD_MEDIA": ["Add Media", "เพิ่มสื่อ"], "GENERATE": ["Generate", "สร้าง"], "EXTEND": ["Extend", "ขยาย"], "FULL_VIDEO": ["Full Video", "วิดีโอเวอร์ชันเต็ม"], "DOWNLOAD": ["Download", "ดาวน์โหลด"], "DONE": ["Done", "ปิด"] };
const FLOW_MENU_ITEMS = { "ADD_TO_PROMPT": ["add to prompt", "เพิ่มไปยังพรอมต์"], "ADD_TO_SCENE": ["add to scene", "เพิ่มไปยังฉาก"] };
const FLOW_TOAST = { "DOWNLOADING_EXTENDED": ["Downloading your extended video", "กำลังดาวน์โหลดวิดีโอแบบขยายเวลา"], "DOWNLOAD_COMPLETE": ["Download complete", "การดาวน์โหลดเสร็จสมบูรณ์"] };
try {
  installOverlay();
} catch (_0x11202c) {
}
const log = createLogger("FlowContent"), FLOW_NAV_HOME = "https://labs.google/fx/tools/flow", POLL_INTERVAL = 500, MAX_WAIT_MS = 3e4;
let isReady = ![], stopRequested = ![], localeBlocked = ![];
(function checkFlowLocale() {
  try {
    const _0x422667 = getFlowLocale(window["location"]["href"]);
    _0x422667 !== "en" && (localeBlocked = !![], document["body"] ? showLocaleSwitchDialog(_0x422667) : document["addEventListener"]("DOMContentLoaded", () => showLocaleSwitchDialog(_0x422667)));
  } catch (_0x1dc386) {
  }
})();
function showLocaleSwitchDialog(_0x521b26) {
  var _a, _b, _c;
  if (document["getElementById"]("agx-locale-dialog")) return;
  const _0x4e3247 = document["createElement"]("div");
  _0x4e3247["id"] = "agx-locale-dialog", _0x4e3247["innerHTML"] = `
    <style>
      #agx-locale-dialog {
        position: fixed; inset: 0; z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Sarabun', sans-serif;
        animation: agxFadeIn 200ms ease-out;
      }
      @keyframes agxFadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes agxSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      .agx-ld-backdrop {
        position: absolute; inset: 0;
        background: rgba(0, 0, 0, 0.75);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .agx-ld-modal {
        position: relative; max-width: 540px; margin: 12vh auto; padding: 36px 36px 32px;
        background: linear-gradient(155deg, #1f1f23 0%, #18181c 100%);
        color: #e8e8ec; border-radius: 18px;
        box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.06) inset;
        animation: agxSlideUp 240ms cubic-bezier(.2,.9,.3,1.1);
      }
      .agx-ld-icon {
        width: 64px; height: 64px; margin: 0 auto 16px;
        display: flex; align-items: center; justify-content: center;
        font-size: 36px;
        background: linear-gradient(135deg, rgba(255, 167, 40, 0.2), rgba(255, 100, 100, 0.2));
        border-radius: 50%;
        border: 1px solid rgba(255, 167, 40, 0.4);
      }
      .agx-ld-title {
        margin: 0 0 14px; font-size: 22px; font-weight: 700;
        text-align: center; color: #ffffff; letter-spacing: -0.3px;
      }
      .agx-ld-detected {
        text-align: center; margin: 0 0 20px; font-size: 13px; color: #999;
      }
      .agx-ld-detected strong {
        background: rgba(255, 167, 40, 0.16); color: #ffb84d;
        padding: 2px 8px; border-radius: 4px; font-family: ui-monospace, SF Mono, monospace;
        font-weight: 600;
      }
      .agx-ld-body {
        margin: 0 0 18px; font-size: 14px; line-height: 1.65; color: #c8c8cc;
      }
      .agx-ld-steps {
        margin: 0 0 24px; padding: 16px 18px 16px 36px;
        background: rgba(255, 255, 255, 0.04); border-radius: 10px;
        border-left: 3px solid #4A8DFF;
      }
      .agx-ld-steps li {
        margin: 6px 0; font-size: 14px; line-height: 1.6; color: #d8d8dc;
      }
      .agx-ld-steps li strong { color: #6aa9ff; }
      .agx-ld-actions {
        display: flex; gap: 10px; flex-wrap: wrap;
      }
      .agx-ld-btn {
        flex: 1; min-width: 140px;
        padding: 12px 18px; border: none; border-radius: 10px;
        font-size: 14px; font-weight: 600; cursor: pointer;
        transition: transform 0.12s, box-shadow 0.12s, background 0.12s;
        font-family: inherit;
      }
      .agx-ld-btn-primary {
        background: linear-gradient(135deg, #4A8DFF, #A747FF);
        color: #ffffff;
        box-shadow: 0 6px 20px rgba(74, 141, 255, 0.35);
      }
      .agx-ld-btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 28px rgba(74, 141, 255, 0.5);
      }
      .agx-ld-btn-close {
        background: rgba(255, 255, 255, 0.06);
        color: #aaaaae;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
      }
      .agx-ld-btn-close:hover {
        background: rgba(255, 255, 255, 0.12);
        color: #ffffff;
      }
      .agx-ld-note {
        margin-top: 16px; padding-top: 14px;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        font-size: 12px; color: #888; text-align: center; line-height: 1.5;
      }
    </style>
    <div class="agx-ld-backdrop"></div>
    <div class="agx-ld-modal" role="dialog" aria-labelledby="agx-ld-title">
      <div class="agx-ld-icon">⚠</div>
      <h2 class="agx-ld-title" id="agx-ld-title">กรุณาเปลี่ยนภาษาบัญชี Google เป็น English</h2>
      <p class="agx-ld-detected">ภาษาที่ตรวจพบ: <strong>` + _0x521b26["toUpperCase"]() + '</strong></p>\n      <p class="agx-ld-body">\n        AutoGenX รองรับ Flow <strong>เฉพาะภาษาอังกฤษ</strong> เพื่อความเสถียรของระบบ.\n        Pipeline จะถูก block จนกว่าคุณจะเปลี่ยนภาษา\n      </p>\n      <ol class="agx-ld-steps">\n        <li>คลิกปุ่ม <strong>"เปิดหน้าตั้งค่าภาษา"</strong> ด้านล่าง</li>\n        <li>เลือก <strong>English (United States)</strong></li>\n        <li>กลับมา <strong>refresh หน้านี้</strong> (Ctrl+R / F5)</li>\n      </ol>\n      <div class="agx-ld-actions">\n        <button class="agx-ld-btn agx-ld-btn-primary" id="agx-ld-open">🌐 เปิดหน้าตั้งค่าภาษา</button>\n        <button class="agx-ld-btn agx-ld-btn-close" id="agx-ld-close">× ปิด (Pipeline จะใช้งานไม่ได้)</button>\n      </div>\n      <p class="agx-ld-note">หลังเปลี่ยนภาษา → ต้อง refresh หน้านี้ Dialog จะหายไปเอง</p>\n    </div>\n  ', document["body"]["appendChild"](_0x4e3247), (_a = _0x4e3247["querySelector"]("#agx-ld-open")) == null ? void 0 : _a["addEventListener"]("click", () => {
    window["open"]("https://myaccount.google.com/language", "_blank");
  }), (_b = _0x4e3247["querySelector"]("#agx-ld-close")) == null ? void 0 : _b["addEventListener"]("click", () => {
    _0x4e3247["remove"]();
  }), (_c = _0x4e3247["querySelector"](".agx-ld-backdrop")) == null ? void 0 : _c["addEventListener"]("click", () => {
    _0x4e3247["remove"]();
  });
}
async function ensureProjectPage() {
  const _0x1d72b5 = window["location"]["href"];
  if (isFlowProjectUrl(_0x1d72b5)) return log["info"]("Already on project page"), !![];
  if (isFlowHomeUrl(_0x1d72b5)) {
    const _0x203b1a = findButtonByText(FLOW_LABELS["CREATE_WITH_FLOW"]);
    if (_0x203b1a) {
      log["info"]('Found "Create with Flow" button, clicking...'), simulateClick(_0x203b1a), await sleep(2e3);
      if (window["location"]["hostname"]["includes"]("accounts.google")) return log["warn"]("Redirected to Google login — user not logged in"), chrome["runtime"]["sendMessage"]({ "type": "FLOW_NOT_LOGGED_IN", "payload": { "url": window["location"]["href"] } }), ![];
      await sleep(1e3);
    }
    log["info"]("Looking for New project button...");
    const _0x57a12e = await clickNewProject();
    if (_0x57a12e) return waitForFlowProjectUrl(MAX_WAIT_MS);
    return log["warn"]("Could not find New project button"), ![];
  }
  if (window["location"]["hostname"]["includes"]("accounts.google")) return log["warn"]("On Google login page — user not logged in"), chrome["runtime"]["sendMessage"]({ "type": "FLOW_NOT_LOGGED_IN", "payload": { "url": window["location"]["href"] } }), ![];
  return log["info"]("Not on flow page, navigating..."), window["location"]["href"] = FLOW_NAV_HOME, ![];
}
async function clickNewProject() {
  for (let _0x1aca7 = 0; _0x1aca7 < 20; _0x1aca7++) {
    const _0x200f4d = findButtonByText(FLOW_LABELS["NEW_PROJECT"]);
    if (_0x200f4d) return log["info"]('Found "New project" button, clicking...'), simulateClick(_0x200f4d), !![];
    await sleep(POLL_INTERVAL);
  }
  return ![];
}
function findButtonByText(_0xb8efe5) {
  var _a, _b;
  const _0x5eddb0 = Array["isArray"](_0xb8efe5) ? _0xb8efe5 : [_0xb8efe5], _0x3bd3b6 = document["querySelectorAll"]("button");
  for (const _0x7e88a5 of _0x3bd3b6) {
    const _0x40c72d = ((_a = _0x7e88a5["textContent"]) == null ? void 0 : _a["trim"]()) ?? "";
    if (_0x5eddb0["some"]((_0x10bc29) => _0x40c72d["includes"](_0x10bc29))) return _0x7e88a5;
  }
  const _0x59fbe5 = document["querySelectorAll"]('[role="button"], a, div[tabindex]');
  for (const _0x41c006 of _0x59fbe5) {
    const _0x48833b = ((_b = _0x41c006["textContent"]) == null ? void 0 : _b["trim"]()) ?? "";
    if (_0x5eddb0["some"]((_0x1958cd) => _0x48833b["includes"](_0x1958cd))) return _0x41c006;
  }
  return null;
}
function findButtonByLabel(_0x1aabda) {
  var _a;
  const _0x4b054c = Array["isArray"](_0x1aabda) ? _0x1aabda : [_0x1aabda];
  for (const _0x55cfbe of _0x4b054c) {
    const _0x195a8d = document["querySelector"]('button[aria-label="' + _0x55cfbe + '"]');
    if (_0x195a8d) return _0x195a8d;
  }
  const _0x3026b1 = document["querySelectorAll"]("button");
  for (const _0x52b97b of _0x3026b1) {
    const _0x41d258 = _0x52b97b["querySelectorAll"]("span");
    for (const _0x12431d of _0x41d258) {
      const _0x4cf51e = ((_a = _0x12431d["textContent"]) == null ? void 0 : _a["trim"]()) ?? "";
      if (_0x4b054c["some"]((_0x203dc6) => _0x4cf51e === _0x203dc6)) return _0x52b97b;
    }
  }
  return null;
}
function findInToast(_0x3a018b) {
  const _0x51aef6 = document["querySelectorAll"]("[data-sonner-toast]");
  for (const _0x352149 of _0x51aef6) {
    const _0x48c73a = _0x352149["querySelector"](_0x3a018b);
    if (_0x48c73a) return _0x48c73a;
  }
  return null;
}
function simulateClick(_0x37030d) {
  const _0x39d589 = _0x37030d["getBoundingClientRect"](), _0x70acf0 = _0x39d589["width"] * 0.2, _0x4dd265 = _0x39d589["height"] * 0.2, _0x3d99e6 = _0x39d589["left"] + _0x70acf0 + Math["random"]() * (_0x39d589["width"] - _0x70acf0 * 2), _0xafd19b = _0x39d589["top"] + _0x4dd265 + Math["random"]() * (_0x39d589["height"] - _0x4dd265 * 2);
  fireClickAt(_0x37030d, _0x3d99e6, _0xafd19b);
}
function fireClickAt(_0x2e7468, _0x2b5166, _0x4e348c) {
  const _0x52b9c6 = _0x2b5166 + window["screenX"], _0x387fd7 = _0x4e348c + window["screenY"], _0xbd4a39 = () => ({ "bubbles": !![], "cancelable": !![], "clientX": _0x2b5166, "clientY": _0x4e348c, "screenX": _0x52b9c6, "screenY": _0x387fd7, "button": 0, "buttons": 0, "movementX": Math["floor"](Math["random"]() * 5) - 2, "movementY": Math["floor"](Math["random"]() * 5) - 2, "view": window }), _0x3ab462 = () => ({ ..._0xbd4a39(), "pointerId": 1, "pointerType": "mouse", "isPrimary": !![], "pressure": 0, "width": 1, "height": 1 });
  _0x2e7468["dispatchEvent"](new PointerEvent("pointerover", _0x3ab462())), _0x2e7468["dispatchEvent"](new MouseEvent("mouseover", _0xbd4a39())), _0x2e7468["dispatchEvent"](new PointerEvent("pointermove", _0x3ab462())), _0x2e7468["dispatchEvent"](new MouseEvent("mousemove", _0xbd4a39())), _0x2e7468["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x3ab462(), "pressure": 0.5, "buttons": 1 })), _0x2e7468["dispatchEvent"](new MouseEvent("mousedown", { ..._0xbd4a39(), "buttons": 1 })), _0x2e7468["dispatchEvent"](new PointerEvent("pointerup", _0x3ab462())), _0x2e7468["dispatchEvent"](new MouseEvent("mouseup", _0xbd4a39())), _0x2e7468["dispatchEvent"](new MouseEvent("click", _0xbd4a39()));
}
function fireRightClickAt(_0x361ebf, _0x563fb1, _0x285a1c) {
  const _0x42255b = _0x563fb1 + window["screenX"], _0xb30b97 = _0x285a1c + window["screenY"], _0x366d36 = () => ({ "bubbles": !![], "cancelable": !![], "clientX": _0x563fb1, "clientY": _0x285a1c, "screenX": _0x42255b, "screenY": _0xb30b97, "button": 2, "buttons": 2, "movementX": Math["floor"](Math["random"]() * 5) - 2, "movementY": Math["floor"](Math["random"]() * 5) - 2, "view": window }), _0x514f1e = () => ({ ..._0x366d36(), "pointerId": 1, "pointerType": "mouse", "isPrimary": !![], "pressure": 0, "width": 1, "height": 1 });
  _0x361ebf["dispatchEvent"](new PointerEvent("pointerover", _0x514f1e())), _0x361ebf["dispatchEvent"](new MouseEvent("mouseover", _0x366d36())), _0x361ebf["dispatchEvent"](new PointerEvent("pointermove", _0x514f1e())), _0x361ebf["dispatchEvent"](new MouseEvent("mousemove", _0x366d36())), _0x361ebf["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x514f1e(), "pressure": 0.5, "buttons": 2 })), _0x361ebf["dispatchEvent"](new MouseEvent("mousedown", { ..._0x366d36(), "buttons": 2 })), _0x361ebf["dispatchEvent"](new PointerEvent("pointerup", _0x514f1e())), _0x361ebf["dispatchEvent"](new MouseEvent("mouseup", _0x366d36())), _0x361ebf["dispatchEvent"](new MouseEvent("contextmenu", _0x366d36()));
}
function jitterSleep(_0x5a4993, _0x495962) {
  const _0x32b73c = _0x5a4993 + Math["random"]() * (_0x495962 - _0x5a4993);
  return new Promise((_0x4e81ca) => setTimeout(_0x4e81ca, _0x32b73c));
}
async function fireApproachTrail(_0x4e9792, _0x386a8f) {
  const _0x253551 = _0x4e9792 + (Math["random"]() - 0.5) * 100, _0x2b6420 = _0x386a8f + (Math["random"]() - 0.5) * 70, _0x35a86f = 3 + Math["floor"](Math["random"]() * 3);
  for (let _0x2fadf7 = 1; _0x2fadf7 <= _0x35a86f; _0x2fadf7++) {
    const _0x1a99d7 = _0x2fadf7 / _0x35a86f, _0x7dcdb7 = _0x253551 + (_0x4e9792 - _0x253551) * _0x1a99d7 + (Math["random"]() - 0.5) * 3, _0x348e80 = _0x2b6420 + (_0x386a8f - _0x2b6420) * _0x1a99d7 + (Math["random"]() - 0.5) * 3, _0x2dcd3d = { "bubbles": !![], "clientX": _0x7dcdb7, "clientY": _0x348e80, "screenX": _0x7dcdb7 + window["screenX"], "screenY": _0x348e80 + window["screenY"], "pointerId": 1, "pointerType": "mouse", "isPrimary": !![], "buttons": 0, "pressure": 0, "view": window };
    document["dispatchEvent"](new PointerEvent("pointermove", _0x2dcd3d)), document["dispatchEvent"](new MouseEvent("mousemove", { ..._0x2dcd3d, "movementX": 2, "movementY": 1 })), await sleep(15 + Math["random"]() * 25);
  }
}
async function humanClick(_0x4b6175) {
  await jitterSleep(1e3, 3e3);
  const _0x1895ca = _0x4b6175["getBoundingClientRect"](), _0xf3f058 = _0x1895ca["width"] * 0.2, _0x541143 = _0x1895ca["height"] * 0.2, _0xcf8e73 = _0x1895ca["left"] + _0xf3f058 + Math["random"]() * (_0x1895ca["width"] - _0xf3f058 * 2), _0x420fdd = _0x1895ca["top"] + _0x541143 + Math["random"]() * (_0x1895ca["height"] - _0x541143 * 2);
  await fireApproachTrail(_0xcf8e73, _0x420fdd), fireClickAt(_0x4b6175, _0xcf8e73, _0x420fdd);
}
function waitForElement(_0x4455bd, _0x4d91d7 = MAX_WAIT_MS) {
  return new Promise((_0x4e62c8) => {
    const _0x43580f = document["querySelector"](_0x4455bd);
    if (_0x43580f) return _0x4e62c8(_0x43580f);
    const _0x2ddae1 = Date["now"](), _0x28807f = setInterval(() => {
      const _0x3efc6d = document["querySelector"](_0x4455bd);
      if (_0x3efc6d) clearInterval(_0x28807f), _0x4e62c8(_0x3efc6d);
      else Date["now"]() - _0x2ddae1 > _0x4d91d7 && (clearInterval(_0x28807f), _0x4e62c8(null));
    }, POLL_INTERVAL);
  });
}
async function waitForFirst(_0x518ec4, _0x4e7efe, _0x556524 = 1e4, _0x2b6914 = 200) {
  const _0x2c78d7 = Date["now"]();
  while (Date["now"]() - _0x2c78d7 < _0x556524) {
    for (const _0x1400c4 of _0x518ec4) {
      const _0x51f4f8 = document["querySelector"](_0x1400c4);
      if (_0x51f4f8 && _0x51f4f8["offsetParent"] !== null) return log["debug"]("[" + _0x4e7efe + "] matched in " + (Date["now"]() - _0x2c78d7) + "ms: " + _0x1400c4), _0x51f4f8;
    }
    await sleep(_0x2b6914);
  }
  const _0x170526 = _0x518ec4["map"]((_0x329ccc) => document["querySelector"](_0x329ccc))["find"](Boolean);
  return _0x170526 ? log["error"]("[" + _0x4e7efe + "] element exists but hidden — Flow window may be too small or panel collapsed") : log["error"]("[" + _0x4e7efe + "] timeout " + _0x556524 + "ms — none of " + _0x518ec4["length"] + " selectors matched (Flow may still be loading)"), null;
}
function waitForFlowProjectUrl(_0x593b62 = MAX_WAIT_MS) {
  return new Promise((_0x3e2508) => {
    if (isFlowProjectUrl(window["location"]["href"])) return _0x3e2508(!![]);
    const _0x23dd1c = Date["now"](), _0x101e3c = setInterval(() => {
      if (isFlowProjectUrl(window["location"]["href"])) clearInterval(_0x101e3c), _0x3e2508(!![]);
      else Date["now"]() - _0x23dd1c > _0x593b62 && (clearInterval(_0x101e3c), _0x3e2508(![]));
    }, POLL_INTERVAL);
  });
}
function patchFileInputPersistence() {
  const _0x1e4b38 = 3e3, _0x12455e = new MutationObserver((_0x289490) => {
    for (const _0x90df31 of _0x289490) {
      for (const _0x332777 of _0x90df31["addedNodes"]) {
        if (_0x332777 instanceof HTMLInputElement && _0x332777["type"] === "file") {
          log["debug"]("Patching file input persistence");
          const _0x2b66bb = _0x332777["remove"]["bind"](_0x332777);
          _0x332777["remove"] = function() {
            setTimeout(_0x2b66bb, _0x1e4b38);
          };
          const _0x161a95 = _0x332777["parentNode"];
          if (_0x161a95) {
            const _0x499adf = _0x161a95["removeChild"]["bind"](_0x161a95);
            _0x161a95["removeChild"] = function(_0x40cd53) {
              if (_0x40cd53 === _0x332777) return setTimeout(() => _0x499adf(_0x40cd53), _0x1e4b38), _0x40cd53;
              return _0x499adf(_0x40cd53);
            };
          }
        }
      }
    }
  });
  _0x12455e["observe"](document["body"], { "childList": !![], "subtree": !![] });
}
function patchUploadImageDivs() {
  let _0x1e22c4 = ![];
  const _0x55601e = /* @__PURE__ */ new Set(), _0x19ce51 = () => {
    var _a;
    _0x1e22c4 = ![];
    for (const _0x345d9c of _0x55601e) {
      const _0x111d4f = [];
      if (_0x345d9c instanceof HTMLElement && _0x345d9c["tagName"] === "DIV") _0x111d4f["push"](_0x345d9c);
      _0x345d9c instanceof Element && _0x345d9c["querySelectorAll"]("div")["forEach"]((_0x462530) => _0x111d4f["push"](_0x462530));
      for (const _0x49025f of _0x111d4f) {
        if (_0x49025f["dataset"]["agxProxied"]) continue;
        const _0x17c86c = ((_a = _0x49025f["textContent"]) == null ? void 0 : _a["trim"]()) ?? "";
        FLOW_LABELS["UPLOAD_IMAGE"]["some"]((_0x30a789) => _0x17c86c === _0x30a789) && (_0x49025f["dataset"]["agxProxied"] = "1", createUploadProxy(_0x49025f));
      }
    }
    _0x55601e["clear"]();
  }, _0x3e87e7 = new MutationObserver((_0x356496) => {
    for (const _0x5a7dfa of _0x356496) {
      for (const _0x2f72d7 of _0x5a7dfa["addedNodes"]) {
        if (_0x2f72d7 instanceof Element) _0x55601e["add"](_0x2f72d7);
      }
    }
    !_0x1e22c4 && _0x55601e["size"] > 0 && (_0x1e22c4 = !![], setTimeout(_0x19ce51, 200));
  });
  _0x3e87e7["observe"](document["body"], { "childList": !![], "subtree": !![] });
}
function createUploadProxy(_0x5385b5) {
  const _0x1b583e = document["createElement"]("button");
  _0x1b583e["textContent"] = FLOW_LABELS["UPLOAD_IMAGE"][0], _0x1b583e["style"]["cssText"] = "position:fixed;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;", _0x1b583e["addEventListener"]("click", () => simulateClick(_0x5385b5)), document["body"]["appendChild"](_0x1b583e), log["debug"]("Created upload proxy button");
}
let noticeDialogObserverInstalled = ![];
function tryClickIAgree() {
  var _a;
  const _0x4c1173 = document["querySelectorAll"]('[role="dialog"][data-state="open"]');
  for (const _0x3e1a1d of _0x4c1173) {
    const _0x4bc922 = _0x3e1a1d["querySelectorAll"]("button");
    for (const _0x3147dc of _0x4bc922) {
      const _0x17b2d1 = ((_a = _0x3147dc["textContent"]) == null ? void 0 : _a["trim"]()) || "";
      if (_0x17b2d1 === "I agree" || _0x17b2d1["toLowerCase"]() === "i agree") return log["info"]('Notice dialog detected — clicking "I agree"'), simulateClick(_0x3147dc), !![];
    }
  }
  return ![];
}
async function dismissNoticeDialog() {
  tryClickIAgree() && await sleep(500);
}
async function dismissChangelogDialog() {
  const _0x575cb5 = document["querySelector"]('[role="dialog"]');
  if (!_0x575cb5) return ![];
  const _0x9253a2 = _0x575cb5["querySelector"]('a[href*="changelogs"]') !== null || _0x575cb5["querySelector"]('iframe[src*="changelogs"]') !== null;
  if (!_0x9253a2) return ![];
  const _0x44a9b5 = document["querySelector"]('div[data-state="open"][aria-hidden="true"]');
  _0x44a9b5 ? (log["info"]("Changelog dialog detected — clicking backdrop to dismiss"), simulateClick(_0x44a9b5)) : (log["info"]("Changelog dialog detected — sending Escape to dismiss"), document["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![], "cancelable": !![] })));
  for (let _0x2f09cc = 0; _0x2f09cc < 5; _0x2f09cc++) {
    await sleep(200);
    if (!document["querySelector"]('[role="dialog"] a[href*="changelogs"]') && !document["querySelector"]('[role="dialog"] iframe[src*="changelogs"]')) return log["info"]("Changelog dialog dismissed"), !![];
  }
  return log["warn"]("Changelog dialog still present after dismiss attempt"), !![];
}
function isAgentTabOpen() {
  return document["querySelector"]('[role="separator"][aria-label="Resize agent panel"]') !== null;
}
async function ensureAgentOff() {
  await dismissChangelogDialog();
  isAgentTabOpen() && (await dismissAgentSessionPanel(), isAgentTabOpen() && log["warn"]("ensureAgentOff: agent tab still open after dismissAgentSessionPanel"));
  const _0x2a8f3f = await disableAgentMode();
  _0x2a8f3f["toggleFound"] && _0x2a8f3f["finalPressed"] === "true" && log["warn"]("ensureAgentOff: Agent toggle still ON after disable attempt");
}
async function dismissAgentSessionPanel() {
  var _a, _b;
  const _0xa47f9f = 200, _0x3ae6ce = 15, _0x4bc491 = Date["now"]();
  for (let _0x5e8c3c = 0; _0x5e8c3c < _0x3ae6ce; _0x5e8c3c++) {
    let _0x138c77 = null;
    const _0x257616 = document["querySelectorAll"]("button");
    for (const _0x4de1af of _0x257616) {
      const _0x569f04 = _0x4de1af["querySelector"]("i.google-symbols");
      if (((_a = _0x569f04 == null ? void 0 : _0x569f04["textContent"]) == null ? void 0 : _a["trim"]()) !== "edit_square") continue;
      const _0x3b55ff = Array["from"](_0x4de1af["querySelectorAll"]("span"))["find"]((_0x516041) => {
        var _a2;
        return ((_a2 = _0x516041["textContent"]) == null ? void 0 : _a2["trim"]()) === "New session";
      });
      if (_0x3b55ff) {
        _0x138c77 = _0x4de1af;
        break;
      }
    }
    if (_0x138c77) {
      const _0x5b4871 = _0x138c77["parentElement"];
      if (_0x5b4871) {
        const _0x4de587 = _0x5b4871["querySelectorAll"]("button");
        for (const _0x9d952f of _0x4de587) {
          const _0x340c1a = _0x9d952f["querySelector"]("i.google-symbols");
          if (((_b = _0x340c1a == null ? void 0 : _0x340c1a["textContent"]) == null ? void 0 : _b["trim"]()) !== "close") continue;
          log["info"]("Agent session panel detected — clicking Close"), simulateClick(_0x9d952f);
          let _0x13fa00 = ![];
          for (let _0x80d642 = 0; _0x80d642 < 8; _0x80d642++) {
            await sleep(200);
            if (!isAgentTabOpen()) {
              _0x13fa00 = !![];
              break;
            }
          }
          return _0x13fa00 ? log["info"]("Agent session panel closed (tab gone)") : log["warn"]("Agent session panel Close clicked but tab still present"), { "panelFound": !![], "closeClicked": !![], "pollIterations": _0x5e8c3c + 1, "elapsedMs": Date["now"]() - _0x4bc491 };
        }
      }
      return log["warn"]("Agent session panel header found but Close sibling missing"), { "panelFound": !![], "closeClicked": ![], "pollIterations": _0x5e8c3c + 1, "elapsedMs": Date["now"]() - _0x4bc491 };
    }
    await sleep(_0xa47f9f);
  }
  return { "panelFound": ![], "closeClicked": ![], "pollIterations": _0x3ae6ce, "elapsedMs": Date["now"]() - _0x4bc491 };
}
function findAgentToggle() {
  const _0x4cc078 = document["querySelectorAll"]("button[aria-pressed]");
  for (const _0x2fa7be of _0x4cc078) {
    const _0x516a96 = _0x2fa7be["querySelector"]("span.content"), _0x4881b6 = ((_0x516a96 == null ? void 0 : _0x516a96["textContent"]) ?? _0x2fa7be["textContent"] ?? "")["trim"]();
    if (_0x4881b6 === "Agent") return _0x2fa7be;
  }
  return null;
}
async function disableAgentMode() {
  const _0x1b78fc = 200, _0x1ccb94 = 15, _0x119ccf = Date["now"](), _0x24d42a = (_0x2b5525) => {
    if (!_0x2b5525) return null;
    const _0x4f751e = _0x2b5525["getAttribute"]("aria-pressed");
    return _0x4f751e === "true" || _0x4f751e === "false" ? _0x4f751e : null;
  };
  for (let _0x14059d = 0; _0x14059d < _0x1ccb94; _0x14059d++) {
    const _0x23cf6c = findAgentToggle();
    if (_0x23cf6c) {
      const _0x3801b0 = _0x24d42a(_0x23cf6c);
      if (_0x3801b0 === "false") return log["info"]("Agent mode already OFF"), { "toggleFound": !![], "initialPressed": _0x3801b0, "clickedOnce": ![], "clickedTwice": ![], "finalPressed": "false", "pollIterations": _0x14059d + 1, "elapsedMs": Date["now"]() - _0x119ccf };
      log["info"]("Agent mode is ON — clicking to disable"), simulateClick(_0x23cf6c), await sleep(300);
      let _0xc1fdab = ![], _0x21e096 = _0x24d42a(findAgentToggle());
      if (_0x21e096 === "true") {
        log["warn"]("Agent toggle did not flip after click — retrying once");
        const _0x107ba8 = findAgentToggle();
        if (_0x107ba8) simulateClick(_0x107ba8);
        _0xc1fdab = !![], await sleep(300), _0x21e096 = _0x24d42a(findAgentToggle());
      }
      return { "toggleFound": !![], "initialPressed": _0x3801b0, "clickedOnce": !![], "clickedTwice": _0xc1fdab, "finalPressed": _0x21e096, "pollIterations": _0x14059d + 1, "elapsedMs": Date["now"]() - _0x119ccf };
    }
    await sleep(_0x1b78fc);
  }
  return log["info"]("Agent toggle not found — likely older Flow build, skipping"), { "toggleFound": ![], "initialPressed": null, "clickedOnce": ![], "clickedTwice": ![], "finalPressed": null, "pollIterations": _0x1ccb94, "elapsedMs": Date["now"]() - _0x119ccf };
}
function installNoticeDialogObserver() {
  if (noticeDialogObserverInstalled) return;
  noticeDialogObserverInstalled = !![], tryClickIAgree();
  const _0x357fc9 = 500;
  let _0x3d2d66 = 0, _0x564d20 = null;
  const _0x3557ff = () => {
    _0x564d20 = null, _0x3d2d66 = Date["now"](), tryClickIAgree();
  }, _0x1ed9f0 = new MutationObserver(() => {
    if (_0x564d20 != null) return;
    const _0x410287 = Date["now"]() - _0x3d2d66;
    _0x410287 >= _0x357fc9 ? _0x3557ff() : _0x564d20 = setTimeout(_0x3557ff, _0x357fc9 - _0x410287);
  });
  _0x1ed9f0["observe"](document["body"], { "childList": !![], "subtree": !![] }), log["info"]("Notice dialog auto-dismiss observer installed (throttled 500ms)");
}
async function uploadImageToFlow(_0x592ad4, _0x136ae9 = 2e4, _0x218f50 = "รอ Flow upload") {
  let _0x5a7e69 = document["querySelector"]('input[type="file"][accept*="image"]');
  if (!_0x5a7e69) {
    const _0x3495f7 = findButtonByLabel(FLOW_LABELS["ADD_MEDIA"]) || findButtonByText(FLOW_LABELS["UPLOAD_IMAGE"]) || findButtonByText(FLOW_LABELS["ADD_MEDIA"]);
    _0x3495f7 && (simulateClick(_0x3495f7), await sleep(500)), _0x5a7e69 = await waitForElement('input[type="file"]', 5e3);
  }
  if (!_0x5a7e69) return log["error"]("Could not find file input"), ![];
  let _0x5e4ca6;
  try {
    _0x5e4ca6 = dataUrlToBlob(_0x592ad4);
  } catch (_0x400dce) {
    return log["error"]("dataUrlToBlob failed — dataUrl ไม่ถูก format (len=" + _0x592ad4["length"] + ", head=" + _0x592ad4["slice"](0, 50) + "): " + _0x400dce), ![];
  }
  const _0x19ce01 = new File([_0x5e4ca6], "product-" + Date["now"]() + ".png", { "type": _0x5e4ca6["type"] }), _0x4047d = new DataTransfer();
  _0x4047d["items"]["add"](_0x19ce01), _0x5a7e69["files"] = _0x4047d["files"], _0x5a7e69["dispatchEvent"](new Event("change", { "bubbles": !![] })), _0x5a7e69["dispatchEvent"](new Event("input", { "bubbles": !![] }));
  const _0x1357fa = Math["max"](1, Math["ceil"](_0x136ae9 / 1e3));
  log["info"]("File dispatched — countdown " + _0x1357fa + "s for Flow upload...");
  for (let _0x1acbcb = _0x1357fa; _0x1acbcb > 0; _0x1acbcb--) {
    if (stopRequested) return relayOverlayCountdown(0, _0x1357fa, _0x218f50), !![];
    chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": "⏳ " + _0x218f50 + ": " + _0x1acbcb + " วิ", "replace": _0x1acbcb < _0x1357fa } })["catch"](() => {
    }), relayOverlayCountdown(_0x1acbcb, _0x1357fa, _0x218f50), await sleep(1e3);
  }
  return relayOverlayCountdown(0, _0x1357fa, _0x218f50), log["info"]("Upload wait done"), !![];
}
function dataUrlToBlob(_0x3df257) {
  var _a;
  const _0x48e9c1 = _0x3df257["indexOf"](",");
  if (_0x48e9c1 < 0) throw new Error("Invalid data URL: no comma separator");
  const _0x1e82ea = _0x3df257["slice"](0, _0x48e9c1);
  let _0x8e8d1e = _0x3df257["slice"](_0x48e9c1 + 1);
  const _0x340f20 = ((_a = _0x1e82ea["match"](/:(.*?);/)) == null ? void 0 : _a[1]) || "image/png";
  _0x8e8d1e = _0x8e8d1e["replace"](/\s/g, "")["replace"](/-/g, "+")["replace"](/_/g, "/");
  const _0x27fa35 = (4 - _0x8e8d1e["length"] % 4) % 4;
  if (_0x27fa35 > 0) _0x8e8d1e += "="["repeat"](_0x27fa35);
  let _0x5e9565;
  try {
    _0x5e9565 = atob(_0x8e8d1e);
  } catch (_0x50e3b1) {
    throw new Error("dataUrlToBlob: atob failed (len=" + _0x8e8d1e["length"] + ", first=" + _0x8e8d1e["slice"](0, 20) + "...): " + _0x50e3b1);
  }
  const _0xd2c254 = new Uint8Array(_0x5e9565["length"]);
  for (let _0x3370a7 = 0; _0x3370a7 < _0x5e9565["length"]; _0x3370a7++) {
    _0xd2c254[_0x3370a7] = _0x5e9565["charCodeAt"](_0x3370a7);
  }
  return new Blob([_0xd2c254], { "type": _0x340f20 });
}
const ASPECT_TRIGGER_IDS = { "16:9": "LANDSCAPE", "4:3": "LANDSCAPE_4_3", "1:1": "SQUARE", "3:4": "PORTRAIT_3_4", "9:16": "PORTRAIT" }, MODE_TRIGGER_IDS = { "image": "IMAGE", "video": "VIDEO" }, IMAGE_MODEL_LABELS = { "nano-banana-pro": "Nano Banana Pro", "nano-banana-2": "Nano Banana 2" }, VIDEO_MODEL_LABELS = { "omni-flash": "Omni Flash", "veo-3.1-lite": "Veo 3.1 - Lite", "veo-3.1-fast": "Veo 3.1 - Fast", "veo-3.1-quality": "Veo 3.1 - Quality", "veo-3.1-lite-lp": "Veo 3.1 - Lite [Lower Priority]" };
function matchesVideoModel(_0x2ab4b6, _0x1ded35) {
  const _0xeec67c = _0x2ab4b6["toLowerCase"](), _0x3dd5d9 = /\b(lower|low)\s+priority/i["test"](_0x2ab4b6), _0x5d0000 = /\blite\b/i["test"](_0xeec67c), _0x255226 = /\bfast\b/i["test"](_0xeec67c), _0x2dda22 = /\bquality\b/i["test"](_0xeec67c), _0x5a3ceb = /\bomni\b/i["test"](_0xeec67c);
  switch (_0x1ded35) {
    case "omni-flash":
      return _0x5a3ceb;
    case "veo-3.1-lite":
      return _0x5d0000 && !_0x3dd5d9;
    case "veo-3.1-lite-lp":
      return _0x5d0000 && _0x3dd5d9;
    case "veo-3.1-fast":
      return _0x255226 && !_0x3dd5d9;
    case "veo-3.1-quality":
      return _0x2dda22;
    default:
      return ![];
  }
}
function isVideoModelTrigger(_0x23ab09) {
  if (/\bVeo\b/i["test"](_0x23ab09)) return !![];
  if (/\bOmni\b/i["test"](_0x23ab09)) return !![];
  return ![];
}
function findConfigButton() {
  var _a;
  const _0x527882 = document["querySelectorAll"]('button[aria-haspopup="menu"]');
  for (const _0x300404 of _0x527882) {
    const _0x5092c9 = _0x300404["querySelector"]("i.google-symbols, i.material-icons");
    if ((_a = _0x5092c9 == null ? void 0 : _0x5092c9["textContent"]) == null ? void 0 : _a["startsWith"]("crop_")) return _0x300404;
  }
  return null;
}
async function clickMenuTab(_0x3879c7) {
  const _0x3eb65d = document["querySelectorAll"]('[role="tab"]');
  for (const _0x3cc68 of _0x3eb65d) {
    const _0xd074fb = _0x3cc68["id"] || "";
    if (_0xd074fb["endsWith"]("-trigger-" + _0x3879c7)) {
      if (_0x3cc68["getAttribute"]("aria-selected") === "true") return log["info"]("Tab " + _0x3879c7 + " already selected"), !![];
      return await humanClick(_0x3cc68), log["info"]("Clicked tab " + _0x3879c7), !![];
    }
  }
  return log["warn"]("Tab " + _0x3879c7 + " not found in menu"), ![];
}
async function selectVideoModel(_0x265e98, _0x136448) {
  const _0x4fd059 = VIDEO_MODEL_LABELS[_0x136448];
  if (!_0x4fd059) return ![];
  const _0x5bbbeb = (_0x3dd2b5) => {
    const _0x49a906 = _0x3dd2b5["cloneNode"](!![]);
    return _0x49a906["querySelectorAll"]("i")["forEach"]((_0x48ed9a) => _0x48ed9a["remove"]()), (_0x49a906["textContent"] || "")["replace"](/\s+/g, " ")["trim"]();
  }, _0x59b0d0 = _0x265e98["querySelectorAll"]('button[aria-haspopup="menu"]');
  let _0xf9e025 = null, _0x5f4351 = "";
  for (const _0x32af36 of _0x59b0d0) {
    const _0x5336b1 = _0x5bbbeb(_0x32af36);
    if (isVideoModelTrigger(_0x5336b1)) {
      _0xf9e025 = _0x32af36, _0x5f4351 = _0x5336b1;
      break;
    }
  }
  if (!_0xf9e025) return log["warn"]("Video model submenu trigger not found"), ![];
  if (matchesVideoModel(_0x5f4351, _0x136448)) return log["info"]("Video model already set to " + _0x4fd059), !![];
  const _0x2bf482 = _0xf9e025["getBoundingClientRect"](), _0x111202 = { "bubbles": !![], "cancelable": !![], "clientX": _0x2bf482["left"] + _0x2bf482["width"] / 2, "clientY": _0x2bf482["top"] + _0x2bf482["height"] / 2, "button": 0, "view": window };
  _0xf9e025["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x111202, "pointerType": "mouse", "pointerId": 1 })), _0xf9e025["dispatchEvent"](new MouseEvent("mousedown", _0x111202)), await sleep(50), _0xf9e025["dispatchEvent"](new PointerEvent("pointerup", { ..._0x111202, "pointerType": "mouse", "pointerId": 1 })), _0xf9e025["dispatchEvent"](new MouseEvent("mouseup", _0x111202)), _0xf9e025["dispatchEvent"](new MouseEvent("click", _0x111202)), await sleep(1e3);
  const _0x15c696 = document["querySelectorAll"]('[role="menu"][data-state="open"]');
  let _0xce2b8d = null;
  for (const _0x46b479 of _0x15c696) {
    if (_0x46b479 === _0x265e98) continue;
    _0xce2b8d = _0x46b479;
    break;
  }
  if (!_0xce2b8d) return log["warn"]("Video model submenu did not open"), ![];
  const _0x4869af = _0xce2b8d["querySelectorAll"]('[role="menuitem"], button');
  for (const _0x2f5428 of _0x4869af) {
    const _0x127ed1 = _0x5bbbeb(_0x2f5428);
    if (matchesVideoModel(_0x127ed1, _0x136448)) return simulateClick(_0x2f5428), log["info"]("Selected video model: " + _0x127ed1 + " (matched " + _0x136448 + ")"), await sleep(1e3), !![];
  }
  return log["warn"]('Video model "' + _0x4fd059 + '" not found in submenu (modelId=' + _0x136448 + ")"), document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(300), ![];
}
async function verifySelectedVideoModel(_0x578c1b) {
  const _0x415d55 = findConfigButton();
  if (!_0x415d55) return log["warn"]("verifyVideoModel: config button not found — cannot verify"), ![];
  const _0x2cff4c = _0x415d55["cloneNode"](!![]);
  _0x2cff4c["querySelectorAll"]("i")["forEach"]((_0xf0b0ec) => _0xf0b0ec["remove"]());
  const _0x3f3c78 = (_0x2cff4c["textContent"] || "")["replace"](/\s+/g, " ")["trim"]();
  if (matchesVideoModel(_0x3f3c78, _0x578c1b)) return log["info"]('verifyVideoModel: confirmed "' + _0x3f3c78 + '" matches ' + _0x578c1b), !![];
  for (const _0x5a5984 of Object["keys"](VIDEO_MODEL_LABELS)) {
    if (_0x5a5984 === _0x578c1b) continue;
    if (matchesVideoModel(_0x3f3c78, _0x5a5984)) return log["error"]('verifyVideoModel: MISMATCH — button "' + _0x3f3c78 + '" looks like ' + _0x5a5984 + " but expected " + _0x578c1b), ![];
  }
  return log["info"]('verifyVideoModel: button "' + _0x3f3c78 + '" carries no model token — trusting prior selection of ' + _0x578c1b), !![];
}
async function selectVideoDurationTab(_0x327734) {
  if (![4, 6, 8, 10]["includes"](_0x327734)) return ![];
  const _0x52e3a3 = _0x327734 + "s", _0x49a0fe = document["querySelectorAll"]('[role="tab"]');
  for (const _0x34b4d2 of _0x49a0fe) {
    if ((_0x34b4d2["textContent"] || "")["trim"]() !== _0x52e3a3) continue;
    if (_0x34b4d2["getAttribute"]("aria-selected") === "true") return log["info"]("Duration tab " + _0x52e3a3 + " already selected"), !![];
    return simulateClick(_0x34b4d2), await sleep(400), log["info"]("Duration tab → " + _0x52e3a3), !![];
  }
  return log["warn"]('Duration tab "' + _0x52e3a3 + '" not found (Omni Flash menu open?)'), ![];
}
function findVisibleElementWithText(_0x1503c6) {
  var _a;
  const _0x304793 = document["querySelectorAll"]("*");
  for (const _0x59dbf1 of _0x304793) {
    if (!((_a = _0x59dbf1["textContent"]) == null ? void 0 : _a["includes"](_0x1503c6))) continue;
    const _0x1b332c = _0x59dbf1["getBoundingClientRect"]();
    if (_0x1b332c["width"] === 0 || _0x1b332c["height"] === 0) continue;
    if (_0x59dbf1["textContent"]["trim"]()["length"] > _0x1503c6["length"] * 4) continue;
    return _0x59dbf1;
  }
  return null;
}
async function waitForAnyText(_0x3be46e, _0x31e488) {
  const _0x1d5703 = Date["now"]();
  while (Date["now"]() - _0x1d5703 < _0x31e488) {
    if (stopRequested) return null;
    for (const _0x1bc5ff of _0x3be46e) {
      const _0x697de0 = findVisibleElementWithText(_0x1bc5ff);
      if (_0x697de0) return _0x697de0;
    }
    await sleep(500);
  }
  return null;
}
function findButtonByIconAndText(_0x52406e, _0x5826db) {
  var _a;
  const _0x10052e = Array["isArray"](_0x5826db) ? _0x5826db : [_0x5826db], _0x3d38df = document["querySelectorAll"]("button");
  for (const _0x457d79 of _0x3d38df) {
    const _0x4912e1 = _0x457d79["getBoundingClientRect"]();
    if (_0x4912e1["width"] === 0 || _0x4912e1["height"] === 0) continue;
    const _0x5438d1 = _0x457d79["querySelector"]("i");
    if (((_a = _0x5438d1 == null ? void 0 : _0x5438d1["textContent"]) == null ? void 0 : _a["trim"]()) !== _0x52406e) continue;
    const _0x5f2588 = _0x457d79["textContent"] ?? "";
    if (!_0x10052e["some"]((_0x5a78cb) => _0x5f2588["includes"](_0x5a78cb))) continue;
    return _0x457d79;
  }
  return null;
}
function findDownloadDropdownButton() {
  var _a, _b;
  const _0x2d1adb = document["querySelectorAll"]('button[aria-haspopup="menu"]');
  for (const _0x1c84c1 of _0x2d1adb) {
    const _0x23c538 = _0x1c84c1["getBoundingClientRect"]();
    if (_0x23c538["width"] === 0 || _0x23c538["height"] === 0) continue;
    const _0x38af06 = _0x1c84c1["querySelector"]("i");
    if (((_a = _0x38af06 == null ? void 0 : _0x38af06["textContent"]) == null ? void 0 : _a["trim"]()) !== "download") continue;
    return _0x1c84c1;
  }
  const _0x4f78e7 = document["querySelectorAll"]("button");
  for (const _0x4a199e of _0x4f78e7) {
    const _0x3c08ca = _0x4a199e["getBoundingClientRect"]();
    if (_0x3c08ca["width"] === 0 || _0x3c08ca["height"] === 0) continue;
    const _0x1ce7cb = _0x4a199e["querySelector"]("i");
    if (((_b = _0x1ce7cb == null ? void 0 : _0x1ce7cb["textContent"]) == null ? void 0 : _b["trim"]()) !== "download") continue;
    const _0x5a2d57 = Array["from"](_0x4a199e["querySelectorAll"]("span"))["find"]((_0xe5e3d) => {
      var _a2;
      const _0x2f55b6 = ((_a2 = _0xe5e3d["textContent"]) == null ? void 0 : _a2["trim"]()) ?? "";
      return FLOW_LABELS["DOWNLOAD"]["some"]((_0x15a14d) => _0x2f55b6 === _0x15a14d);
    });
    if (_0x5a2d57) return _0x4a199e;
  }
  return null;
}
async function downloadExtendedFullVideo(_0x5ac4b8 = 5 * 6e4) {
  log["info"]("Looking for Download button...");
  const _0x409c54 = findDownloadDropdownButton();
  if (!_0x409c54) return { "success": ![], "error": "Download button not found" };
  const _0x279941 = _0x409c54["getBoundingClientRect"]();
  log["info"]("Found Download button (haspopup=" + _0x409c54["getAttribute"]("aria-haspopup") + ", " + _0x279941["width"] + "x" + _0x279941["height"] + ")"), await humanClick(_0x409c54), await jitterSleep(800, 1500), log["info"]("Looking for Full Video menu item...");
  const _0x268c8d = await (async () => {
    const _0x41c9de = Date["now"]();
    while (Date["now"]() - _0x41c9de < 5e3) {
      const _0x401fab = document["querySelector"]('[role="menu"][data-state="open"]');
      if (_0x401fab) {
        const _0x376584 = _0x401fab["querySelectorAll"]('[role="menuitem"]');
        for (const _0x402498 of _0x376584) {
          const _0x4dd181 = _0x402498["textContent"] ?? "";
          if (FLOW_LABELS["FULL_VIDEO"]["some"]((_0x3bd489) => _0x4dd181["includes"](_0x3bd489))) return _0x402498;
        }
      }
      await sleep(200);
    }
    return null;
  })();
  if (!_0x268c8d) return { "success": ![], "error": "Full Video menu item not found" };
  _0x268c8d["getAttribute"]("aria-expanded") !== "true" && (log["info"]("Hovering Full Video to expand submenu..."), _0x268c8d["dispatchEvent"](new PointerEvent("pointerenter", { "bubbles": !![], "pointerType": "mouse", "pointerId": 1 })), _0x268c8d["dispatchEvent"](new MouseEvent("mouseover", { "bubbles": !![] })), await sleep(500), _0x268c8d["getAttribute"]("aria-expanded") !== "true" && (await humanClick(_0x268c8d), await sleep(500)));
  log["info"]("Looking for 720p button in submenu...");
  const _0x5e9668 = await (async () => {
    const _0x324e64 = Date["now"]();
    while (Date["now"]() - _0x324e64 < 3e3) {
      const _0xb2cd91 = document["querySelectorAll"]('[role="menu"][data-state="open"]');
      for (const _0x53f462 of _0xb2cd91) {
        const _0x7a0c8 = _0x53f462["querySelectorAll"]('button[role="menuitem"]');
        for (const _0x24714a of _0x7a0c8) {
          const _0x464495 = _0x24714a["textContent"] || "";
          if (_0x464495["includes"]("720p") || _0x464495["includes"]("Original") && _0x464495["includes"]("Size")) return _0x24714a;
        }
      }
      await sleep(200);
    }
    return null;
  })();
  if (!_0x5e9668) return { "success": ![], "error": "720p Original Size button not found in submenu" };
  await humanClick(_0x5e9668), log["info"]("Clicked 720p Original Size — download initiated"), await sleep(800);
  const _0x36524c = await waitForAnyText(FLOW_TOAST["DOWNLOADING_EXTENDED"], 1e4);
  if (!_0x36524c) log["warn"]('Did not see "Downloading..." toast — may already be in progress (silent download)');
  else log["info"]("Download in progress...");
  const _0x16b27b = await waitForAnyText(FLOW_TOAST["DOWNLOAD_COMPLETE"], 3e4);
  !_0x16b27b ? log["warn"]('Did not see "Download complete!" within 30s — likely Flow changed UI; treating as success (background captures blob)') : log["info"]("Download complete!");
  const _0x5ae8c1 = await (async () => {
    const _0x3a48b9 = Date["now"]();
    while (Date["now"]() - _0x3a48b9 < 5e3) {
      const _0x1b8699 = findInToast("button");
      if (_0x1b8699) {
        const _0x50c1ad = _0x1b8699["getBoundingClientRect"]();
        if (_0x50c1ad["width"] > 0 && _0x50c1ad["height"] > 0) return _0x1b8699;
      }
      await sleep(200);
    }
    return null;
  })();
  _0x5ae8c1 ? (await humanClick(_0x5ae8c1), log["info"]("Clicked Dismiss (toast button)"), await jitterSleep(400, 800)) : log["warn"]("Dismiss button (toast) not found after 5s — proceeding to Done");
  const _0x1c2a9e = findButtonByIconAndText("check", FLOW_LABELS["DONE"]);
  return _0x1c2a9e ? (await humanClick(_0x1c2a9e), log["info"]("Clicked Done button"), await jitterSleep(600, 1200)) : log["warn"]("Done button not found — download finished but dialog may remain open"), { "success": !![] };
}
function findExtendButton() {
  var _a, _b;
  const _0x45234c = document["querySelectorAll"]("i");
  for (const _0xaa8313 of _0x45234c) {
    if (((_a = _0xaa8313["textContent"]) == null ? void 0 : _a["trim"]()) !== "keyboard_double_arrow_right") continue;
    let _0x4f62a7 = _0xaa8313;
    for (let _0x4eeebe = 0; _0x4eeebe < 6 && _0x4f62a7; _0x4eeebe++) {
      const _0x1f787b = ((_b = _0x4f62a7["textContent"]) == null ? void 0 : _b["trim"]()) || "";
      if (FLOW_LABELS["EXTEND"]["some"]((_0x5896a0) => _0x1f787b === _0x5896a0 || _0x1f787b["startsWith"](_0x5896a0))) {
        const _0x1cc47e = _0x4f62a7["getBoundingClientRect"]();
        if (_0x1cc47e["width"] > 0 && _0x1cc47e["height"] > 0) return _0x4f62a7;
      }
      _0x4f62a7 = _0x4f62a7["parentElement"];
    }
  }
  return null;
}
async function selectExtendDialogModel(_0x24d103) {
  var _a;
  const _0x4cf7d4 = VIDEO_MODEL_LABELS[_0x24d103];
  if (!_0x4cf7d4) return ![];
  const _0x4d5dfe = document["querySelectorAll"]('button[aria-haspopup="menu"]');
  let _0x25b05c = null;
  for (const _0xfbb68e of _0x4d5dfe) {
    if (!isVideoModelTrigger(_0xfbb68e["textContent"] || "")) continue;
    const _0x58e5b4 = _0xfbb68e["getBoundingClientRect"]();
    if (_0x58e5b4["width"] === 0 || _0x58e5b4["height"] === 0) continue;
    _0x25b05c = _0xfbb68e;
    break;
  }
  if (!_0x25b05c) return log["warn"]("Extend dialog: video model picker button not found"), ![];
  if (_0x25b05c["textContent"] && matchesVideoModel(_0x25b05c["textContent"], _0x24d103)) return log["info"]("Extend model already set to " + _0x4cf7d4), !![];
  await humanClick(_0x25b05c), await sleep(900);
  const _0x464320 = document["querySelectorAll"]('[role="menu"][data-state="open"]'), _0xd2c56e = _0x464320["length"] > 0 ? _0x464320[_0x464320["length"] - 1] : null;
  if (!_0xd2c56e) return log["warn"]("Extend model submenu did not open"), ![];
  const _0x587716 = _0xd2c56e["querySelectorAll"]('[role="menuitem"], button');
  for (const _0x1a6654 of _0x587716) {
    const _0x48b9a7 = ((_a = _0x1a6654["textContent"]) == null ? void 0 : _a["trim"]()) || "";
    if (matchesVideoModel(_0x48b9a7, _0x24d103)) return simulateClick(_0x1a6654), log["info"]("Extend model selected: " + _0x48b9a7 + " (matched " + _0x24d103 + ")"), await sleep(1e3), !![];
  }
  return log["warn"]('Extend model "' + _0x4cf7d4 + '" not found in submenu (modelId=' + _0x24d103 + ")"), ![];
}
async function ensureFlowConfig(_0x39af85, _0x45c731, _0x2b9698, _0x293f3c, _0x5de7b8, _0x24c3d7, _0x2dc8d1) {
  const _0x42aa4b = findConfigButton();
  if (!_0x42aa4b) return log["warn"]("Config button not found — skipping config verification"), !![];
  await humanClick(_0x42aa4b), await sleep(500);
  const _0x47e7a9 = await waitForElement('[role="menu"][data-state="open"]', 3e3);
  if (!_0x47e7a9) return log["error"]("Config menu did not open"), ![];
  const _0x25022a = MODE_TRIGGER_IDS[_0x39af85];
  _0x25022a && (await clickMenuTab(_0x25022a), await sleep(1e3));
  if (_0x39af85 === "video") {
    const _0x5b2d37 = _0x24c3d7 ? "VIDEO_REFERENCES" : "VIDEO_FRAMES", _0x23ea5e = await clickMenuTab(_0x5b2d37);
    if (_0x23ea5e) await sleep(800);
    else log["warn"](_0x5b2d37 + " sub-tab not found");
  }
  const _0xc290f0 = ASPECT_TRIGGER_IDS[_0x45c731];
  _0xc290f0 && (await clickMenuTab(_0xc290f0), await sleep(1e3));
  const _0x1d4920 = String(_0x2b9698);
  await clickMenuTab(_0x1d4920), await sleep(1e3);
  let _0x1d764e = _0x5de7b8;
  if (_0x39af85 === "image" && _0x293f3c) await selectImageModel(_0x47e7a9, _0x293f3c);
  else {
    if (_0x39af85 === "video" && _0x5de7b8) {
      let _0x41effd;
      switch (_0x5de7b8) {
        case "omni-flash":
          _0x41effd = ["omni-flash", "veo-3.1-lite-lp", "veo-3.1-lite"];
          break;
        case "veo-3.1-lite-lp":
          _0x41effd = ["veo-3.1-lite-lp", "veo-3.1-lite"];
          break;
        default:
          _0x41effd = [_0x5de7b8];
      }
      for (const _0x20dae0 of _0x41effd) {
        const _0x1af7be = await selectVideoModel(_0x47e7a9, _0x20dae0);
        if (_0x1af7be) {
          _0x1d764e = _0x20dae0;
          _0x20dae0 !== _0x5de7b8 && log["warn"]('Video model fallback: "' + _0x5de7b8 + '" not available → using "' + _0x20dae0 + '"');
          break;
        }
        log["warn"]('Video model "' + _0x20dae0 + '" not available — trying next fallback');
      }
    }
  }
  if (_0x39af85 === "video" && _0x1d764e === "omni-flash") {
    const _0x68f306 = _0x2dc8d1 && [4, 6, 8, 10]["includes"](_0x2dc8d1) ? _0x2dc8d1 : 8, _0x166072 = await selectVideoDurationTab(_0x68f306);
    if (!_0x166072) log["warn"]("Duration tab " + _0x68f306 + "s not selected");
  }
  document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(500);
  document["querySelector"]('[role="menu"][data-state="open"]') && (document["body"]["click"](), await sleep(300));
  if (_0x39af85 === "video" && _0x1d764e) {
    await sleep(300);
    const _0x52915f = await verifySelectedVideoModel(_0x1d764e);
    if (!_0x52915f) return log["error"]("ensureFlowConfig: video model verification FAILED — aborting (expected " + _0x1d764e + ", user picked " + _0x5de7b8 + "). Flow UI อาจไม่มีรุ่นนี้ให้เลือก"), ![];
  }
  return log["info"]("Flow config set: mode=" + _0x39af85 + ", aspect=" + _0x45c731 + ", count=" + _0x2b9698 + ", videoModel=" + (_0x1d764e ?? "n/a")), !![];
}
async function selectImageModel(_0x2b5907, _0x13a258) {
  var _a, _b, _c;
  const _0xfe00e0 = IMAGE_MODEL_LABELS[_0x13a258];
  if (!_0xfe00e0) return;
  const _0x26f1ff = _0x2b5907["querySelectorAll"]('button[aria-haspopup="menu"]');
  let _0x2d2370 = null;
  for (const _0x4552c7 of _0x26f1ff) {
    const _0x27ee6b = ((_a = _0x4552c7["textContent"]) == null ? void 0 : _a["trim"]()) || "";
    if (_0x27ee6b["includes"]("Nano Banana")) {
      _0x2d2370 = _0x4552c7;
      break;
    }
  }
  if (!_0x2d2370) {
    log["warn"]("Model submenu trigger not found");
    return;
  }
  if ((_b = _0x2d2370["textContent"]) == null ? void 0 : _b["includes"](_0xfe00e0)) {
    log["info"]("Model already set to " + _0xfe00e0);
    return;
  }
  const _0x4fda4d = _0x2d2370["getBoundingClientRect"](), _0x30ca00 = { "bubbles": !![], "cancelable": !![], "clientX": _0x4fda4d["left"] + _0x4fda4d["width"] / 2, "clientY": _0x4fda4d["top"] + _0x4fda4d["height"] / 2, "button": 0, "view": window };
  _0x2d2370["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x30ca00, "pointerType": "mouse", "pointerId": 1 })), _0x2d2370["dispatchEvent"](new MouseEvent("mousedown", _0x30ca00)), await sleep(50), _0x2d2370["dispatchEvent"](new PointerEvent("pointerup", { ..._0x30ca00, "pointerType": "mouse", "pointerId": 1 })), _0x2d2370["dispatchEvent"](new MouseEvent("mouseup", _0x30ca00)), _0x2d2370["dispatchEvent"](new MouseEvent("click", _0x30ca00)), await sleep(1e3);
  const _0x2e539a = document["querySelectorAll"]('[role="menu"][data-state="open"]');
  let _0xe0b7ee = null;
  for (const _0x1292c3 of _0x2e539a) {
    if (_0x1292c3 === _0x2b5907) continue;
    _0xe0b7ee = _0x1292c3;
    break;
  }
  if (!_0xe0b7ee) {
    log["warn"]("Model submenu did not open");
    return;
  }
  const _0x246506 = _0xe0b7ee["querySelectorAll"]('[role="menuitem"], button');
  for (const _0x3c9048 of _0x246506) {
    const _0x3f1292 = ((_c = _0x3c9048["textContent"]) == null ? void 0 : _c["trim"]()) || "";
    if (_0x3f1292["includes"](_0xfe00e0)) {
      simulateClick(_0x3c9048), log["info"]("Selected model: " + _0xfe00e0), await sleep(1e3);
      return;
    }
  }
  log["warn"]('Model "' + _0xfe00e0 + '" not found in submenu');
}
async function waitForImagesLoaded(_0x32155f = 2e4) {
  const _0x3512bf = Date["now"]();
  while (Date["now"]() - _0x3512bf < _0x32155f) {
    const _0x56b2a8 = document["querySelectorAll"]("img");
    let _0x5b6df8 = 0;
    for (const _0x1bc9bd of _0x56b2a8) {
      if (!_0x1bc9bd["src"]) continue;
      if (!_0x1bc9bd["complete"] || _0x1bc9bd["naturalWidth"] === 0) _0x5b6df8++;
    }
    if (_0x5b6df8 === 0) {
      log["info"]("All images loaded");
      return;
    }
    await sleep(500);
  }
  log["warn"]("waitForImagesLoaded: timeout (" + _0x32155f + "ms)");
}
async function attachUploadsToPrompt(_0x168071) {
  const _0x49bdff = findButtonByIcon("drive_folder_upload");
  _0x49bdff && (await humanClick(_0x49bdff), log["info"]("Switched to Uploaded tab"), await sleep(1e3));
  const _0x305ccf = /* @__PURE__ */ new Set();
  let _0x5783ac = 0;
  for (let _0x9031f8 = 0; _0x9031f8 < _0x168071; _0x9031f8++) {
    const _0x59f6ef = findFreshTile(_0x305ccf);
    if (!_0x59f6ef) return log["error"]("No more tiles available (attached " + _0x5783ac + "/" + _0x168071 + ")"), _0x5783ac > 0;
    const _0x47b869 = _0x59f6ef["getAttribute"]("data-tile-id") || "";
    log["info"]("[" + (_0x9031f8 + 1) + "/" + _0x168071 + "] Right-clicking tile " + _0x47b869["slice"](0, 20) + "...");
    let _0x306787 = await rightClickAddToPrompt(_0x59f6ef);
    if (!_0x306787) {
      log["warn"]("First attempt failed, retrying after 1s..."), await sleep(1e3);
      const _0x36ecbe = findFreshTile(_0x305ccf);
      if (_0x36ecbe) _0x306787 = await rightClickAddToPrompt(_0x36ecbe);
    }
    if (!_0x306787) return log["error"]("Failed to add tile " + (_0x9031f8 + 1) + " after retry"), _0x5783ac > 0;
    _0x305ccf["add"](_0x47b869), _0x5783ac++, await sleep(1200);
  }
  return log["info"]("Attached " + _0x5783ac + " images to prompt"), _0x5783ac > 0;
}
async function attachLatestGeneratedImage() {
  const _0x33a452 = findButtonByIcon("image");
  _0x33a452 && (await humanClick(_0x33a452), log["info"]("Switched to Images tab"), await jitterSleep(900, 1600));
  await waitForImagesLoaded(15e3);
  const _0x27ee02 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  let _0x370a7d = null, _0x5844a4 = null;
  for (const _0x165ded of _0x27ee02) {
    if (_0x165ded["closest"]('[role="dialog"][data-state="open"]')) continue;
    if (_0x165ded["closest"]('[role="menu"][data-state="open"]')) continue;
    const _0x213c5f = _0x165ded["querySelectorAll"]("[data-tile-id]");
    for (const _0x13cf6e of _0x213c5f) {
      const _0x3d3f67 = _0x13cf6e["querySelector"]("img");
      if (!_0x3d3f67 || !_0x3d3f67["complete"] || _0x3d3f67["naturalWidth"] === 0) continue;
      if (_0x3d3f67["alt"] !== "Generated image" && !_0x3d3f67["src"]["includes"]("getMediaUrlRedirect")) continue;
      _0x370a7d = _0x13cf6e, _0x5844a4 = _0x3d3f67;
      break;
    }
    if (_0x370a7d) break;
  }
  if (!_0x370a7d || !_0x5844a4) return { "success": ![], "error": "No generated image tile found" };
  const _0x3f8ac2 = await rightClickAddToPrompt(_0x370a7d);
  if (!_0x3f8ac2) return { "success": ![], "error": "Failed to add image to prompt" };
  return { "success": !![], "imageUrl": _0x5844a4["src"] };
}
async function attachImageByUrl(_0xeb873c) {
  if (!_0xeb873c) return { "success": ![], "error": "No URL provided" };
  const _0x15133d = findButtonByIcon("image");
  _0x15133d && (await humanClick(_0x15133d), await jitterSleep(900, 1600));
  await waitForImagesLoaded(15e3);
  const _0x134166 = (() => {
    try {
      const _0x387a0f = new URL(_0xeb873c), _0x2aceeb = _0x387a0f["searchParams"]["get"]("mediaKey");
      if (_0x2aceeb) return "mediaKey=" + _0x2aceeb;
      const _0x29fa5c = _0x387a0f["pathname"]["split"]("/")["filter"](Boolean);
      return _0x29fa5c[_0x29fa5c["length"] - 1] || _0xeb873c;
    } catch {
      return _0xeb873c;
    }
  })(), _0x1bc268 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  let _0xd62833 = null;
  for (const _0x2d6926 of _0x1bc268) {
    if (_0x2d6926["closest"]('[role="dialog"][data-state="open"]')) continue;
    if (_0x2d6926["closest"]('[role="menu"][data-state="open"]')) continue;
    const _0x4d0113 = _0x2d6926["querySelectorAll"]("[data-tile-id]");
    for (const _0x10c825 of _0x4d0113) {
      const _0x4a2795 = _0x10c825["querySelector"]("img");
      if (!_0x4a2795) continue;
      if (_0x4a2795["src"]["includes"](_0x134166)) {
        _0xd62833 = _0x10c825;
        break;
      }
    }
    if (_0xd62833) break;
  }
  if (!_0xd62833) return { "success": ![], "error": 'Tile not found for URL needle "' + _0x134166["slice"](0, 40) + '"' };
  _0xd62833["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(400);
  const _0x521083 = await rightClickAddToPrompt(_0xd62833);
  if (!_0x521083) return { "success": ![], "error": "Failed to add image to prompt" };
  return { "success": !![] };
}
async function attachImageByPosition(_0x558928) {
  const _0x16840d = findButtonByIcon("image");
  _0x16840d && (await humanClick(_0x16840d), await jitterSleep(900, 1600));
  await waitForImagesLoaded(15e3);
  let _0x2e0b3e = [];
  const _0x55d7d5 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  log["info"]("[attachByPosition] scanning " + _0x55d7d5["length"] + " virtuoso lists, requesting position=" + _0x558928);
  for (const _0x5a864d of _0x55d7d5) {
    if (_0x5a864d["closest"]('[role="dialog"][data-state="open"]')) {
      log["info"]("[attachByPosition] skip list inside open dialog");
      continue;
    }
    if (_0x5a864d["closest"]('[role="menu"][data-state="open"]')) {
      log["info"]("[attachByPosition] skip list inside open menu");
      continue;
    }
    if (_0x5a864d["closest"]('[data-testid="prompt-area"]') || _0x5a864d["closest"]("[contenteditable]") || _0x5a864d["closest"]("form")) {
      log["info"]("[attachByPosition] skip list inside prompt/form area");
      continue;
    }
    const _0x3b8215 = _0x5a864d["querySelectorAll"]("[data-tile-id]");
    for (const _0x1c49e8 of _0x3b8215) {
      const _0x485c97 = _0x1c49e8["querySelector"]("img");
      if (!_0x485c97 || !_0x485c97["complete"] || _0x485c97["naturalWidth"] === 0) continue;
      if (_0x485c97["alt"] !== "Generated image") continue;
      _0x2e0b3e["push"](_0x1c49e8);
    }
  }
  const _0x28555d = /* @__PURE__ */ new Set(), _0x5c4070 = [];
  for (const _0x284330 of _0x2e0b3e) {
    const _0x359aab = _0x284330["getAttribute"]("data-tile-id") || "";
    if (!_0x359aab || _0x28555d["has"](_0x359aab)) continue;
    _0x28555d["add"](_0x359aab), _0x5c4070["push"](_0x284330);
  }
  _0x2e0b3e = _0x5c4070, _0x2e0b3e["sort"]((_0x9f0afd, _0x283c67) => {
    const _0x3d39ca = _0x9f0afd["getBoundingClientRect"](), _0x5d1b4e = _0x283c67["getBoundingClientRect"]();
    return _0x3d39ca["top"] - _0x5d1b4e["top"];
  }), log["info"]("[attachByPosition] found " + _0x2e0b3e["length"] + " candidates (visual order):"), _0x2e0b3e["forEach"]((_0x475131, _0x2b7b30) => {
    const _0x3fdaf5 = _0x475131["getAttribute"]("data-tile-id") || "", _0x4ec0c0 = _0x475131["querySelector"]("img"), _0x47df7a = (_0x4ec0c0 == null ? void 0 : _0x4ec0c0["alt"]) || "", _0x3f70d8 = Math["round"](_0x475131["getBoundingClientRect"]()["top"]), _0x2d1c72 = ((_0x4ec0c0 == null ? void 0 : _0x4ec0c0["src"]) || "")["slice"](0, 60);
    log["info"]("  [" + _0x2b7b30 + "] top=" + _0x3f70d8 + "px tile=" + _0x3fdaf5["slice"](0, 18) + '... alt="' + _0x47df7a + '" src=' + _0x2d1c72);
  });
  if (_0x558928 < 0 || _0x558928 >= _0x2e0b3e["length"]) return { "success": ![], "error": "Position " + _0x558928 + " out of range (only " + _0x2e0b3e["length"] + " generated images visible)" };
  const _0x32c445 = _0x2e0b3e[_0x558928], _0x1e7a1b = _0x32c445["getAttribute"]("data-tile-id") || "";
  log["info"]("[attachByPosition] picking [" + _0x558928 + "] tile=" + _0x1e7a1b["slice"](0, 18) + "..."), _0x32c445["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(400);
  const _0x49f819 = await rightClickAddToPrompt(_0x32c445);
  if (!_0x49f819) return { "success": ![], "error": "Failed to add image to prompt" };
  return { "success": !![] };
}
async function attachImageByTileId(_0x3d6678) {
  if (!_0x3d6678) return { "success": ![], "error": "No tileId provided" };
  const _0x237f4a = findButtonByIcon("image");
  _0x237f4a && (await humanClick(_0x237f4a), await jitterSleep(900, 1600));
  await waitForImagesLoaded(15e3);
  const _0x302292 = document["querySelector"]('[data-tile-id="' + CSS["escape"](_0x3d6678) + '"]');
  if (!_0x302292) return { "success": ![], "error": "Tile not found: " + _0x3d6678["slice"](0, 30) };
  _0x302292["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(400);
  const _0x2977b3 = await rightClickAddToPrompt(_0x302292);
  if (!_0x2977b3) return { "success": ![], "error": "Failed to add image to prompt" };
  return { "success": !![] };
}
function stableUrlNeedle(_0x36aacc) {
  if (!_0x36aacc) return null;
  try {
    const _0x1eb408 = new URL(_0x36aacc), _0x6087e6 = _0x1eb408["searchParams"]["get"]("mediaKey");
    if (_0x6087e6) return "mediaKey=" + _0x6087e6;
    const _0x581ac0 = _0x1eb408["pathname"]["split"]("/")["filter"](Boolean);
    return _0x581ac0[_0x581ac0["length"] - 1] || null;
  } catch {
    return _0x36aacc["length"] > 12 ? _0x36aacc : null;
  }
}
function findTileInActiveTab(_0x542223, _0x54422d) {
  if (_0x542223) {
    const _0x512ca6 = document["querySelector"]('[data-tile-id="' + CSS["escape"](_0x542223) + '"]');
    if (_0x512ca6) return _0x512ca6;
  }
  const _0xbc4751 = _0x54422d ? stableUrlNeedle(_0x54422d) : null;
  if (_0xbc4751) {
    const _0x5d7952 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
    for (const _0x58b8d7 of _0x5d7952) {
      if (_0x58b8d7["closest"]('[role="dialog"][data-state="open"]') || _0x58b8d7["closest"]('[role="menu"][data-state="open"]')) continue;
      for (const _0x27e4d5 of _0x58b8d7["querySelectorAll"]("[data-tile-id]")) {
        const _0x4292e2 = _0x27e4d5["querySelector"]("img");
        if (_0x4292e2 && _0x4292e2["src"]["includes"](_0xbc4751)) return _0x27e4d5;
      }
    }
  }
  return null;
}
async function attachRefForIngredients(_0x3215b4) {
  var _a;
  const _0x956f01 = async (_0x5e5434) => {
    const _0x380987 = findButtonByIcon(_0x5e5434);
    return _0x380987 && (await humanClick(_0x380987), await jitterSleep(700, 1300)), await waitForImagesLoaded(12e3), findTileInActiveTab(_0x3215b4["tileId"], _0x3215b4["url"]);
  }, _0x5df47d = _0x3215b4["source"] === "uploaded" ? ["drive_folder_upload", "image"] : ["image", "drive_folder_upload"];
  let _0x4f4ac5 = null;
  for (const _0x1b4144 of _0x5df47d) {
    _0x4f4ac5 = await _0x956f01(_0x1b4144);
    if (_0x4f4ac5) break;
  }
  if (!_0x4f4ac5) return log["warn"]("attachRefForIngredients — tile not found (id=" + (((_a = _0x3215b4["tileId"]) == null ? void 0 : _a["slice"](0, 12)) ?? "-") + " url=" + (_0x3215b4["url"] ? "…" : "-") + ")"), ![];
  _0x4f4ac5["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(400);
  const _0xd94313 = await rightClickAddToPrompt(_0x4f4ac5);
  if (!_0xd94313) return log["warn"]("attachRefForIngredients — rightClickAddToPrompt failed"), ![];
  return await sleep(1e3), !![];
}
async function downloadLatestClip(_0x4ce439) {
  var _a, _b, _c;
  const _0x2788ef = findButtonByIcon("videocam");
  _0x2788ef && (await humanClick(_0x2788ef), log["info"]("Switched to Videos tab"), await jitterSleep(900, 1600));
  const _0x95df7a = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  let _0x22655c = null, _0x1f8ba4 = null;
  for (const _0x588f7d of _0x95df7a) {
    if (_0x588f7d["closest"]('[role="dialog"][data-state="open"]')) continue;
    if (_0x588f7d["closest"]('[role="menu"][data-state="open"]')) continue;
    const _0x7b0a87 = _0x588f7d["querySelectorAll"]("[data-tile-id]");
    for (const _0x4cab1c of _0x7b0a87) {
      const _0x10876f = _0x4cab1c["querySelector"]("video");
      if (!_0x10876f || !_0x10876f["src"]) continue;
      _0x22655c = _0x4cab1c, _0x1f8ba4 = _0x10876f;
      break;
    }
    if (_0x22655c) break;
  }
  if (!_0x22655c || !_0x1f8ba4) return { "success": ![], "error": "No video tile found" };
  const _0x54b3ce = document["querySelector"]('[role="menu"][data-state="open"]');
  _0x54b3ce && (document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(300));
  _0x22655c["scrollIntoView"]({ "block": "center", "inline": "center", "behavior": "instant" }), await sleep(400), log["info"]("Right-clicking video tile..."), await jitterSleep(800, 1500);
  const _0x175076 = _0x1f8ba4["getBoundingClientRect"](), _0x4dffe3 = _0x175076["width"] * 0.3, _0x33a2a1 = _0x175076["height"] * 0.3, _0x5478e5 = _0x175076["left"] + _0x4dffe3 + Math["random"]() * (_0x175076["width"] - _0x4dffe3 * 2), _0x5dcffd = _0x175076["top"] + _0x33a2a1 + Math["random"]() * (_0x175076["height"] - _0x33a2a1 * 2);
  log["info"]("Click at (" + _0x5478e5["toFixed"](0) + ", " + _0x5dcffd["toFixed"](0) + ") — video rect " + _0x175076["width"]["toFixed"](0) + "×" + _0x175076["height"]["toFixed"](0) + " at (" + _0x175076["left"]["toFixed"](0) + ", " + _0x175076["top"]["toFixed"](0) + ")"), await fireApproachTrail(_0x5478e5, _0x5dcffd), fireRightClickAt(_0x1f8ba4, _0x5478e5, _0x5dcffd);
  const _0x594782 = await waitForElement('[role="menu"][data-state="open"]', 2e3);
  if (!_0x594782) return { "success": ![], "error": "Context menu did not open" };
  const _0x2ad50 = _0x594782["querySelectorAll"]('[role="menuitem"]');
  let _0x4c805a = null;
  for (const _0x9f3778 of _0x2ad50) {
    if ((_a = _0x9f3778["textContent"]) == null ? void 0 : _a["toLowerCase"]()["includes"]("download")) {
      _0x4c805a = _0x9f3778;
      break;
    }
  }
  if (!_0x4c805a) return document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": '"Download" item not found in context menu' };
  log["info"]("Hovering Download → opening quality submenu...");
  const _0x506557 = _0x4c805a["getBoundingClientRect"](), _0x361035 = _0x506557["left"] + _0x506557["width"] / 2, _0x4ee2ce = _0x506557["top"] + _0x506557["height"] / 2, _0xa21f2b = { "bubbles": !![], "cancelable": !![], "clientX": _0x361035, "clientY": _0x4ee2ce, "pointerId": 1, "pointerType": "mouse" }, _0x20b66d = { "bubbles": !![], "cancelable": !![], "clientX": _0x361035, "clientY": _0x4ee2ce };
  _0x4c805a["dispatchEvent"](new PointerEvent("pointerover", _0xa21f2b)), _0x4c805a["dispatchEvent"](new PointerEvent("pointerenter", { ..._0xa21f2b, "bubbles": ![] })), _0x4c805a["dispatchEvent"](new MouseEvent("mouseover", _0x20b66d)), _0x4c805a["dispatchEvent"](new MouseEvent("mouseenter", { ..._0x20b66d, "bubbles": ![] })), await sleep(300), _0x4c805a["dispatchEvent"](new PointerEvent("pointermove", _0xa21f2b)), await sleep(600);
  const _0x466846 = _0x4ce439["toLowerCase"]();
  let _0x183092 = null;
  for (let _0x3e5e9c = 0; _0x3e5e9c < 15; _0x3e5e9c++) {
    const _0x4efb34 = document["querySelectorAll"]('[role="menu"][data-state="open"]');
    for (const _0x2df862 of _0x4efb34) {
      const _0x525428 = _0x2df862["querySelectorAll"]('[role="menuitem"]');
      for (const _0x1056be of _0x525428) {
        if ((_b = _0x1056be["textContent"]) == null ? void 0 : _b["toLowerCase"]()["includes"](_0x466846)) {
          _0x183092 = _0x1056be;
          break;
        }
      }
      if (_0x183092) break;
    }
    if (_0x183092) break;
    await sleep(200);
  }
  if (!_0x183092) {
    log["info"]("Hover did not open submenu — trying click..."), await humanClick(_0x4c805a), await sleep(500);
    const _0x1fa57a = document["querySelectorAll"]('[role="menu"][data-state="open"]');
    for (const _0x3bcadb of _0x1fa57a) {
      const _0x2ba70d = _0x3bcadb["querySelectorAll"]('[role="menuitem"]');
      for (const _0xd5466b of _0x2ba70d) {
        if ((_c = _0xd5466b["textContent"]) == null ? void 0 : _c["toLowerCase"]()["includes"](_0x466846)) {
          _0x183092 = _0xd5466b;
          break;
        }
      }
      if (_0x183092) break;
    }
  }
  if (!_0x183092) return log["error"]('Quality "' + _0x466846 + '" not found in submenu. Available: ' + Array["from"](document["querySelectorAll"]('[role="menuitem"]'))["map"]((_0x507a9b) => {
    var _a2;
    return (_a2 = _0x507a9b["textContent"]) == null ? void 0 : _a2["trim"]();
  })["join"](" | ")), document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": 'Quality "' + _0x466846 + '" not found in submenu' };
  await humanClick(_0x183092), log["info"]("Clicked " + _0x4ce439 + " — waiting for download to start...");
  const _0x5e2aba = 10 + Math["floor"](Math["random"]() * 11);
  return await pipelineCountdown(_0x5e2aba, "รอ download เริ่ม"), { "success": !![] };
}
async function findLatestVideoUrl() {
  if (isOnExtendPage()) {
    log["info"]("Already on extend page → finding video element on current page"), await sleep(500);
    const _0x3f03a9 = document["querySelectorAll"]("video");
    for (const _0x4b997a of _0x3f03a9) {
      const _0xac357e = _0x4b997a["src"] || "";
      if (_0xac357e["includes"]("getMediaUrlRedirect") || _0xac357e["includes"]("/fx/api/trpc/media")) return log["info"]("findLatestVideoUrl (extend page): " + _0xac357e["slice"](0, 80)), { "success": !![], "videoUrl": _0xac357e };
    }
    return { "success": ![], "error": "Video element not found on current extend page" };
  }
  const _0x5b6977 = findButtonByIcon("videocam");
  _0x5b6977 && (await humanClick(_0x5b6977), log["info"]("Switched to Videos tab"), await jitterSleep(900, 1600));
  const _0x2bf373 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  let _0x51706a = null;
  for (const _0x1ccec2 of _0x2bf373) {
    if (_0x1ccec2["closest"]('[role="dialog"][data-state="open"]')) continue;
    if (_0x1ccec2["closest"]('[role="menu"][data-state="open"]')) continue;
    const _0x49c05b = _0x1ccec2["querySelectorAll"]("[data-tile-id]");
    for (const _0x2199e9 of _0x49c05b) {
      const _0x482648 = _0x2199e9["querySelector"]("video");
      if (!_0x482648 || !_0x482648["src"]) continue;
      _0x51706a = _0x482648;
      break;
    }
    if (_0x51706a) break;
  }
  if (!_0x51706a) return { "success": ![], "error": "No video tile found in Videos tab" };
  log["info"]("Left-clicking video center → entering extend page..."), await humanClick(_0x51706a), await jitterSleep(1500, 2500);
  const _0x46ccb2 = Date["now"]() + 1e4;
  let _0x3503ac = ![];
  while (Date["now"]() < _0x46ccb2) {
    const _0x8395c = findButtonByIcon("arrow_back");
    if (_0x8395c) {
      _0x3503ac = !![];
      break;
    }
    await sleep(300);
  }
  if (!_0x3503ac) return { "success": ![], "error": "Extend page did not load (no arrow_back button)" };
  log["info"]("Extend page loaded (arrow_back visible)"), await sleep(500);
  const _0x59c7b3 = document["querySelectorAll"]("video");
  for (const _0x168338 of _0x59c7b3) {
    const _0x5393c5 = _0x168338["src"] || "";
    if (_0x5393c5["includes"]("getMediaUrlRedirect") || _0x5393c5["includes"]("/fx/api/trpc/media")) return log["info"]("findLatestVideoUrl: " + _0x5393c5["slice"](0, 100) + "..."), { "success": !![], "videoUrl": _0x5393c5 };
  }
  return { "success": ![], "error": "Video element not found on extend page" };
}
async function pipelineCountdown(_0x3adcbc, _0x32299b) {
  for (let _0x3ae0ec = _0x3adcbc; _0x3ae0ec >= 0; _0x3ae0ec--) {
    const _0x356f25 = "⏳ " + _0x32299b + ": " + _0x3ae0ec + " วิ";
    chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": _0x356f25, "replace": _0x3ae0ec < _0x3adcbc } })["catch"](() => {
    }), relayOverlayCountdown(_0x3ae0ec, _0x3adcbc, _0x32299b);
    if (_0x3ae0ec === 0) break;
    await sleep(1e3);
  }
}
function relayOverlayCountdown(_0x2a3395, _0x4164fc, _0x37f96c) {
  chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_COUNTDOWN_RELAY", "payload": { "remaining": _0x2a3395, "total": _0x4164fc, "label": _0x37f96c } })["catch"](() => {
  });
}
async function addLatestVideoToScene(_0x243de6, _0x1f3f71 = "auto") {
  var _a, _b, _c;
  const _0x4df210 = findButtonByIcon("videocam");
  _0x4df210 && (await humanClick(_0x4df210), log["info"]("Switched to Videos tab"), await jitterSleep(900, 1600));
  let _0x124fc9 = null, _0x1651a0 = null;
  if (_0x243de6) {
    const _0x1a3461 = document["querySelectorAll"]('[data-tile-id="' + CSS["escape"](_0x243de6) + '"]');
    log["info"]("[addToScene] tile-id " + _0x243de6["slice"](0, 18) + " has " + _0x1a3461["length"] + " matches in DOM");
    for (const _0x4961d9 of _0x1a3461) {
      const _0x4a373e = _0x4961d9["closest"]('[data-testid="virtuoso-item-list"]');
      if (!_0x4a373e) continue;
      if (_0x4a373e["closest"]('[role="dialog"][data-state="open"]')) continue;
      if (_0x4a373e["closest"]('[role="menu"][data-state="open"]')) continue;
      if (_0x4a373e["closest"]('[data-testid="prompt-area"]')) continue;
      if (_0x4a373e["closest"]("[contenteditable]")) continue;
      if (_0x4a373e["closest"]("form")) continue;
      const _0x151675 = _0x4961d9["querySelector"]("video");
      if (!_0x151675 || !_0x151675["src"]) continue;
      _0x124fc9 = _0x4961d9, _0x1651a0 = _0x151675, log["info"]("[addToScene] picked tile in virtuoso list (rect.top=" + Math["round"](_0x4961d9["getBoundingClientRect"]()["top"]) + ")");
      break;
    }
    if (!_0x124fc9 || !_0x1651a0) return { "success": ![], "error": "Video tile not found in virtuoso list: " + _0x243de6["slice"](0, 30) + " (" + _0x1a3461["length"] + " matches but none in valid container)" };
    _0x124fc9["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(400);
  } else {
    const _0x5e44ec = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
    for (const _0x1f7e63 of _0x5e44ec) {
      if (_0x1f7e63["closest"]('[role="dialog"][data-state="open"]')) continue;
      if (_0x1f7e63["closest"]('[role="menu"][data-state="open"]')) continue;
      const _0x148a72 = _0x1f7e63["querySelectorAll"]("[data-tile-id]");
      for (const _0x127837 of _0x148a72) {
        const _0xb58a61 = _0x127837["querySelector"]("video");
        if (!_0xb58a61 || !_0xb58a61["src"]) continue;
        _0x124fc9 = _0x127837, _0x1651a0 = _0xb58a61;
        break;
      }
      if (_0x124fc9) break;
    }
    if (!_0x124fc9 || !_0x1651a0) return { "success": ![], "error": "No video tile found" };
  }
  const _0x40072b = document["querySelector"]('[role="menu"][data-state="open"]');
  _0x40072b && (document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(300));
  await jitterSleep(800, 2e3);
  const _0x440259 = _0x1651a0["getBoundingClientRect"](), _0x373040 = _0x440259["width"] * 0.2, _0x29c417 = _0x440259["height"] * 0.2, _0x5e8d6d = _0x440259["left"] + _0x373040 + Math["random"]() * (_0x440259["width"] - _0x373040 * 2), _0xe998dc = _0x440259["top"] + _0x29c417 + Math["random"]() * (_0x440259["height"] - _0x29c417 * 2);
  await fireApproachTrail(_0x5e8d6d, _0xe998dc), fireRightClickAt(_0x1651a0, _0x5e8d6d, _0xe998dc);
  const _0x2a1131 = await waitForElement('[role="menu"][data-state="open"]', 2500);
  if (!_0x2a1131) return { "success": ![], "error": "Context menu did not open after right-click" };
  let _0x5e3e1e = null;
  const _0xb37f06 = _0x2a1131["querySelectorAll"]('[role="menuitem"]');
  for (const _0x4c2dce of _0xb37f06) {
    const _0x1d1d92 = ((_a = _0x4c2dce["textContent"]) == null ? void 0 : _a["toLowerCase"]()) ?? "";
    if (FLOW_MENU_ITEMS["ADD_TO_SCENE"]["some"]((_0x3a00fe) => _0x1d1d92["includes"](_0x3a00fe["toLowerCase"]()))) {
      _0x5e3e1e = _0x4c2dce;
      break;
    }
  }
  if (!_0x5e3e1e) return document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": '"Add to scene" menuitem not found in context menu' };
  await humanClick(_0x5e3e1e), log["info"]('[addToScene] clicked "Add to scene" → waiting submenu');
  let _0x3ec386 = null;
  const _0x3bb02c = Date["now"]() + 3e3;
  while (Date["now"]() < _0x3bb02c) {
    const _0x3575af = document["querySelectorAll"]('[role="menu"][data-state="open"]');
    for (const _0x3eefe6 of _0x3575af) {
      if (_0x3eefe6 === _0x2a1131) continue;
      const _0x92f26b = _0x3eefe6["querySelectorAll"]('button[role="menuitem"]');
      let _0x5bca80 = ![];
      for (const _0x1d4523 of _0x92f26b) {
        if (/Create\s*Scene/i["test"](_0x1d4523["textContent"] || "")) {
          _0x5bca80 = !![];
          break;
        }
      }
      if (_0x5bca80) {
        _0x3ec386 = _0x3eefe6;
        break;
      }
    }
    if (_0x3ec386) break;
    await sleep(80);
  }
  if (!_0x3ec386) return document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": "Submenu (Create Scene + scenes) did not open" };
  const _0x4554e8 = Array["from"](_0x3ec386["querySelectorAll"]('button[role="menuitem"]'));
  let _0x600eac = -1;
  for (let _0x4251d9 = 0; _0x4251d9 < _0x4554e8["length"]; _0x4251d9++) {
    if (/Create\s*Scene/i["test"](_0x4554e8[_0x4251d9]["textContent"] || "")) {
      _0x600eac = _0x4251d9;
      break;
    }
  }
  if (_0x600eac < 0) return document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": '"Create Scene" not found in submenu' };
  let _0x2d3afb = null, _0x545a1f = "";
  if (_0x1f3f71 === "create") _0x2d3afb = _0x4554e8[_0x600eac], _0x545a1f = "Create Scene";
  else {
    if (_0x1f3f71 === "append") {
      _0x2d3afb = _0x4554e8[_0x600eac + 1] ?? null;
      if (!_0x2d3afb) return document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), { "success": ![], "error": "append mode: ไม่มี option ต่อจาก Create Scene (submenu มี " + _0x4554e8["length"] + " ตัว) — ยังไม่มี scene เก่าใน storyboard?" };
      _0x545a1f = ((_b = _0x2d3afb["textContent"]) == null ? void 0 : _b["trim"]()) ?? "(unnamed)";
    } else _0x4554e8["length"] > _0x600eac + 1 ? (_0x2d3afb = _0x4554e8[_0x600eac + 1], _0x545a1f = ((_c = _0x2d3afb["textContent"]) == null ? void 0 : _c["trim"]()) ?? "(unnamed)") : (_0x2d3afb = _0x4554e8[_0x600eac], _0x545a1f = "Create Scene");
  }
  await humanClick(_0x2d3afb), log["info"]('[addToScene] picked "' + _0x545a1f + '" (mode=' + _0x1f3f71 + ")"), await jitterSleep(400, 900);
  document["querySelector"]('[role="menu"][data-state="open"]') && (document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(200));
  const _0x4cc0fa = ["You added this Video to your scene successfully", "added this Video to your scene", "added to your scene", "เพิ่มไปยังฉาก", "เพิ่มเข้า scene"], _0x21befd = () => {
    const _0xdde5f9 = document["querySelectorAll"]("div");
    for (const _0x2391e7 of _0xdde5f9) {
      const _0x56311a = (_0x2391e7["textContent"] || "")["trim"]();
      if (!_0x56311a) continue;
      for (const _0x70bf97 of _0x4cc0fa) {
        if (_0x56311a["includes"](_0x70bf97)) return _0x2391e7;
      }
    }
    return null;
  }, _0x538744 = 3e3, _0x28a6b1 = 3e4, _0x3a8db2 = Date["now"]();
  let _0x446597 = ![], _0x93e865 = 0;
  while (Date["now"]() - _0x3a8db2 < _0x28a6b1) {
    _0x93e865++;
    if (_0x21befd()) {
      _0x446597 = !![];
      const _0x49f2c0 = Math["round"]((Date["now"]() - _0x3a8db2) / 1e3);
      log["info"]('[addToScene] saw "added to scene successfully" toast (' + _0x49f2c0 + "s, poll " + _0x93e865 + "×)");
      break;
    }
    const _0x543e21 = Math["ceil"]((_0x28a6b1 - (Date["now"]() - _0x3a8db2)) / 1e3);
    log["info"]("[addToScene] poll #" + _0x93e865 + " — ยังไม่เจอ success toast (เหลือ " + _0x543e21 + "s)"), await sleep(_0x538744);
  }
  !_0x446597 && log["warn"]("[addToScene] success toast ไม่ขึ้นใน " + _0x28a6b1 / 1e3 + "s — proceed ต่อแต่อาจมีปัญหา");
  const _0x6d5534 = await clickDismissIfPresent(3e3);
  if (_0x6d5534) log["info"]("Dismissed post-add dialog/toast");
  return { "success": !![], "selectedSceneText": _0x545a1f, "sawSuccessToast": _0x446597 };
}
async function extendLatestClip(_0x35df3e, _0x49af64, _0x33b920 = 0, _0x515f40 = 1) {
  const _0x30756b = isOnExtendPage();
  if (_0x33b920 === 0) {
    if (_0x515f40 >= 2 && _0x30756b) log["info"]("Scene " + (_0x515f40 + 1) + ": already on extend page (Scene 3+ chain) → skip video click");
    else {
      const _0x13180e = findButtonByIcon("videocam");
      _0x13180e && (await humanClick(_0x13180e), await jitterSleep(900, 1600));
      const _0x186170 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
      let _0x229a6b = null;
      for (const _0x2001ea of _0x186170) {
        if (_0x2001ea["closest"]('[role="dialog"][data-state="open"]')) continue;
        if (_0x2001ea["closest"]('[role="menu"][data-state="open"]')) continue;
        const _0x3b9288 = _0x2001ea["querySelectorAll"]("[data-tile-id]");
        for (const _0x26b41c of _0x3b9288) {
          const _0x3103ba = _0x26b41c["querySelector"]("video");
          if (!_0x3103ba || !_0x3103ba["src"]) continue;
          _0x229a6b = _0x3103ba;
          break;
        }
        if (_0x229a6b) break;
      }
      if (!_0x229a6b) return { "success": ![], "error": "No video tile found for extend" };
      log["info"]("Left-clicking video center to enter extend menu..."), await humanClick(_0x229a6b), await jitterSleep(1500, 2500);
      if (DEV["STOP_AFTER_EXTEND_CLICK"]) return log["info"]("STOP_AFTER_EXTEND_CLICK — halting after entering extend menu (verify manually in Flow)"), { "success": !![] };
    }
  } else {
    if (_0x30756b) log["info"]("Retry " + _0x33b920 + ": still on extend page → skip click (URL=" + window["location"]["pathname"]["slice"](0, 60) + ")");
    else {
      log["info"]("Retry " + _0x33b920 + ": not on extend page → trying Extend button as fallback");
      const _0x25fb68 = findExtendButton();
      if (!_0x25fb68) return { "success": ![], "error": "Retry " + _0x33b920 + ": not on extend page and no Extend button — Flow drifted" };
      await humanClick(_0x25fb68), await jitterSleep(1500, 2500);
    }
  }
  if (_0x49af64) {
    const _0x46e6f8 = await selectExtendDialogModel(_0x49af64);
    if (!_0x46e6f8) log["warn"]("Could not force model to " + _0x49af64 + " in extend dialog — continuing anyway");
    await jitterSleep(400, 800);
  }
  await jitterSleep(800, 1500);
  if (_0x35df3e) {
    const _0x46c490 = await setPrompt(_0x35df3e);
    if (!_0x46c490) log["warn"]("extendLatestClip: could not set prompt — proceeding anyway");
    await sleep(500);
  }
  const _0x433a17 = await clickGenerate();
  if (!_0x433a17) return { "success": ![], "error": "Failed to click Generate for extend" };
  const _0x5afda5 = await waitForGenerationResult(27e4);
  if (!_0x5afda5["success"]) return { "success": ![], "error": _0x5afda5["error"] || "Extend generation failed" };
  return log["info"]("Extend clip done"), { "success": !![] };
}
async function downloadFromSceneBuilder() {
  var _a;
  const _0x2cc795 = /\/fx(?:\/[a-z]{2})?\/tools\/flow\/project\/[^/?#]+\/scene(?:\/|\?|#|$)/i["test"](window["location"]["href"]);
  if (!_0x2cc795) {
    const _0x3544e6 = findButtonByIcon("play_movies");
    if (!_0x3544e6) return { "success": ![], "error": "Scenebuilder button not found" };
    await humanClick(_0x3544e6), log["info"]("Opened SceneBuilder"), await sleep(2500);
  } else log["info"]("Already on /scene/ — skipping play_movies click");
  let _0x5c14c6 = null;
  const _0x3b55a9 = Date["now"]() + 15e3;
  while (Date["now"]() < _0x3b55a9) {
    _0x5c14c6 = findButtonByIcon("download");
    if (_0x5c14c6) break;
    await sleep(500);
  }
  if (!_0x5c14c6) return { "success": ![], "error": "Download button not found in SceneBuilder" };
  await humanClick(_0x5c14c6), log["info"]("Clicked Download — waiting for export...");
  const _0x2b29c4 = 6e5, _0x3cdb2f = _0x2b29c4 / 1e3, _0x4f89cf = "รอ Flow export คลิป";
  let _0x37539f = null;
  const _0x4f9cc9 = Date["now"](), _0x1406a1 = _0x4f9cc9 + _0x2b29c4;
  let _0x4b1337 = 0, _0x316a1d = 0;
  while (Date["now"]() < _0x1406a1 && !stopRequested) {
    const _0x1e11d2 = document["querySelectorAll"]('a[target="_blank"]');
    for (const _0x30ab06 of _0x1e11d2) {
      const _0x313d16 = ((_a = _0x30ab06["textContent"]) == null ? void 0 : _a["trim"]()) ?? "";
      if (FLOW_LABELS["DOWNLOAD"]["some"]((_0x2c09bb) => _0x313d16 === _0x2c09bb)) {
        _0x37539f = _0x30ab06;
        break;
      }
    }
    if (_0x37539f) break;
    const _0x65474a = Date["now"](), _0x560a98 = Math["floor"]((_0x65474a - _0x4f9cc9) / 1e3), _0x19f055 = Math["max"](0, Math["ceil"]((_0x1406a1 - _0x65474a) / 1e3));
    _0x65474a - _0x316a1d >= 1e3 && (relayOverlayCountdown(_0x19f055, _0x3cdb2f, _0x4f89cf), _0x316a1d = _0x65474a), _0x65474a - _0x4b1337 >= 1e4 && (chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": "⏳ " + _0x4f89cf + "... (ผ่านไป " + _0x560a98 + "s / รอเหลือ ~" + _0x19f055 + "s)", "replace": !![] } })["catch"](() => {
    }), _0x4b1337 = _0x65474a), await sleep(1e3);
  }
  relayOverlayCountdown(0, _0x3cdb2f, _0x4f89cf);
  if (!_0x37539f) return { "success": ![], "error": "รอ link Download ไม่เจอภายใน 10 นาที — Flow export อาจใช้เวลานานเกินคาด ลองใหม่" };
  _0x37539f["click"](), log["info"]("Clicked <a>Download — chrome.downloads listener (background) จะดักผ่าน MAIN world patch"), await sleep(800);
  const _0x2322cb = await clickDismissIfPresent(5e3);
  if (_0x2322cb) log["info"]("Dismissed SceneBuilder export dialog");
  else log["warn"]("No Dismiss button found — proceeding");
  return { "success": !![] };
}
async function clickDismissIfPresent(_0x3d2373) {
  var _a, _b;
  const _0x493ccb = Date["now"]();
  while (Date["now"]() - _0x493ccb < _0x3d2373) {
    const _0x436aa1 = findToastCloseButton();
    if (_0x436aa1) {
      const _0x2c643e = _0x436aa1["getBoundingClientRect"]();
      if (_0x2c643e["width"] > 0 && _0x2c643e["height"] > 0) return simulateClick(_0x436aa1), await sleep(300), !![];
    }
    const _0x4a0bc9 = document["querySelectorAll"]('[role="dialog"][data-state="open"]');
    for (const _0x1e9a47 of _0x4a0bc9) {
      const _0x1e19f4 = _0x1e9a47["querySelectorAll"]("button");
      for (const _0x485416 of _0x1e19f4) {
        const _0x5642d4 = ((_a = _0x485416["textContent"]) == null ? void 0 : _a["trim"]()) ?? "", _0x3564db = _0x485416["querySelector"]("i"), _0x17b963 = ((_b = _0x3564db == null ? void 0 : _0x3564db["textContent"]) == null ? void 0 : _b["trim"]()) === "check";
        if (_0x17b963) continue;
        if (_0x5642d4["toLowerCase"]() === "dismiss" || _0x5642d4 === "ปิด") return simulateClick(_0x485416), await sleep(300), !![];
      }
    }
    await sleep(200);
  }
  return ![];
}
function findToastCloseButton() {
  var _a, _b;
  const _0x1bd457 = document["querySelectorAll"]("[data-sonner-toast]");
  for (const _0x3aa183 of _0x1bd457) {
    const _0x36df5c = _0x3aa183["querySelector"]("button[data-close-button]");
    if (_0x36df5c) return _0x36df5c;
    const _0x1dc1f7 = _0x3aa183["querySelectorAll"]("button[aria-label]");
    for (const _0x21991e of _0x1dc1f7) {
      const _0x26bab7 = ((_a = _0x21991e["getAttribute"]("aria-label")) == null ? void 0 : _a["toLowerCase"]()) ?? "";
      if (_0x26bab7["includes"]("close") || _0x26bab7["includes"]("dismiss") || _0x26bab7["includes"]("ปิด")) return _0x21991e;
    }
    const _0x42a434 = _0x3aa183["querySelectorAll"]("button");
    for (const _0x261062 of _0x42a434) {
      const _0x4f75e9 = ((_b = _0x261062["textContent"]) == null ? void 0 : _b["trim"]()["toLowerCase"]()) ?? "";
      if (_0x4f75e9 === "dismiss" || _0x4f75e9 === "ปิด") return _0x261062;
    }
  }
  return null;
}
function findFreshTile(_0x348105) {
  const _0x351e6a = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
  for (const _0xaea12 of _0x351e6a) {
    if (_0xaea12["closest"]('[role="dialog"][data-state="open"]')) continue;
    if (_0xaea12["closest"]('[role="menu"][data-state="open"]')) continue;
    const _0x36ff7b = _0xaea12["querySelectorAll"]("[data-tile-id]");
    for (const _0x4285a2 of _0x36ff7b) {
      const _0x1fa8ce = _0x4285a2["getAttribute"]("data-tile-id");
      if (!_0x1fa8ce || _0x348105["has"](_0x1fa8ce)) continue;
      const _0x1efda0 = _0x4285a2["querySelector"]("img");
      if (!_0x1efda0 || !_0x1efda0["complete"] || _0x1efda0["naturalWidth"] === 0) continue;
      return _0x4285a2;
    }
  }
  return null;
}
function findButtonByIcon(_0x3c89ba) {
  var _a;
  const _0x5b6ff5 = document["querySelectorAll"]("button");
  for (const _0x58523a of _0x5b6ff5) {
    const _0x23be22 = _0x58523a["querySelector"]("i");
    if (((_a = _0x23be22 == null ? void 0 : _0x23be22["textContent"]) == null ? void 0 : _a["trim"]()) === _0x3c89ba) return _0x58523a;
  }
  return null;
}
function isOnExtendPage() {
  return isFlowEditUrl(window["location"]["href"]);
}
async function rightClickAddToPrompt(_0x49d297) {
  const _0x225833 = _0x49d297["querySelector"]("img");
  if (!_0x225833 || !_0x225833["complete"] || _0x225833["naturalWidth"] === 0) return log["error"]("Tile has no loaded img"), ![];
  return rightClickMenuItem(_0x225833, FLOW_MENU_ITEMS["ADD_TO_PROMPT"]);
}
async function rightClickMenuItem(_0x687265, _0x47aae2) {
  var _a;
  const _0x40ae4a = document["querySelector"]('[role="menu"][data-state="open"]');
  _0x40ae4a && (document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(300));
  await jitterSleep(800, 2e3);
  const _0x30c5e0 = _0x687265["getBoundingClientRect"](), _0x53dc26 = _0x30c5e0["width"] * 0.2, _0x4ea7db = _0x30c5e0["height"] * 0.2, _0x446593 = _0x30c5e0["left"] + _0x53dc26 + Math["random"]() * (_0x30c5e0["width"] - _0x53dc26 * 2), _0x21f0c8 = _0x30c5e0["top"] + _0x4ea7db + Math["random"]() * (_0x30c5e0["height"] - _0x4ea7db * 2);
  await fireApproachTrail(_0x446593, _0x21f0c8), fireRightClickAt(_0x687265, _0x446593, _0x21f0c8);
  const _0x3d612b = await waitForElement('[role="menu"][data-state="open"]', 2e3);
  if (!_0x3d612b) return log["error"]("Context menu did not open after right-click"), ![];
  const _0x730aff = Array["isArray"](_0x47aae2) ? _0x47aae2 : [_0x47aae2], _0x27f386 = _0x3d612b["querySelectorAll"]('[role="menuitem"]');
  let _0x554525 = null;
  for (const _0x5ec44d of _0x27f386) {
    const _0x3a21c7 = ((_a = _0x5ec44d["textContent"]) == null ? void 0 : _a["toLowerCase"]()) ?? "";
    if (_0x730aff["some"]((_0x6b44cd) => _0x3a21c7["includes"](_0x6b44cd["toLowerCase"]()))) {
      _0x554525 = _0x5ec44d;
      break;
    }
  }
  if (!_0x554525) return log["error"]('menuitem "' + _0x730aff["join"]("|") + '" not found'), document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), ![];
  return await humanClick(_0x554525), log["info"]("Clicked menuitem: " + _0x730aff[0]), await jitterSleep(400, 900), document["querySelector"]('[role="menu"][data-state="open"]') && (document["body"]["dispatchEvent"](new KeyboardEvent("keydown", { "key": "Escape", "bubbles": !![] })), await sleep(200)), !![];
}
async function setPrompt(_0x4b3f07) {
  const _0x3d78b6 = await waitForFirst(FLOW_SELECTORS["promptInput"], "promptInput");
  if (!_0x3d78b6) return ![];
  if (_0x3d78b6["matches"]('[data-slate-editor="true"]')) return typeIntoSlate(_0x3d78b6, _0x4b3f07);
  if (_0x3d78b6["matches"](".public-DraftEditor-content")) return typeIntoDraft(_0x3d78b6, _0x4b3f07);
  if (_0x3d78b6["tagName"] === "TEXTAREA") {
    const _0xdf3bfb = _0x3d78b6;
    return _0xdf3bfb["focus"](), _0xdf3bfb["value"] = _0x4b3f07, _0xdf3bfb["dispatchEvent"](new Event("input", { "bubbles": !![] })), _0xdf3bfb["dispatchEvent"](new Event("change", { "bubbles": !![] })), log["info"]("Prompt set via textarea"), !![];
  }
  return _0x3d78b6["focus"](), _0x3d78b6["textContent"] = _0x4b3f07, _0x3d78b6["dispatchEvent"](new InputEvent("input", { "bubbles": !![], "inputType": "insertText", "data": _0x4b3f07 })), log["info"]("Prompt set via generic contenteditable"), !![];
}
async function typeIntoSlate(_0x4fd726, _0x109bae) {
  var _a, _b;
  _0x4fd726["focus"](), await sleep(100);
  const _0x46aed0 = window["getSelection"](), _0x352480 = document["createRange"]();
  _0x352480["selectNodeContents"](_0x4fd726), _0x46aed0 == null ? void 0 : _0x46aed0["removeAllRanges"](), _0x46aed0 == null ? void 0 : _0x46aed0["addRange"](_0x352480), await sleep(50);
  _0x4fd726["textContent"] && _0x4fd726["textContent"]["trim"]()["length"] > 0 && (_0x4fd726["dispatchEvent"](new InputEvent("beforeinput", { "bubbles": !![], "cancelable": !![], "inputType": "deleteContentBackward" })), _0x4fd726["dispatchEvent"](new InputEvent("input", { "bubbles": !![], "cancelable": !![], "inputType": "deleteContentBackward" })), await sleep(100));
  const _0x199ba8 = (_0x325850) => _0x325850["replace"](/\s+/g, "");
  try {
    const _0x3c720f = new DataTransfer();
    _0x3c720f["setData"]("text/plain", _0x109bae), _0x4fd726["dispatchEvent"](new ClipboardEvent("paste", { "bubbles": !![], "cancelable": !![], "clipboardData": _0x3c720f })), await sleep(400);
    const _0x5185ee = ((_a = _0x4fd726["textContent"]) == null ? void 0 : _a["trim"]()) || "", _0x19626c = _0x199ba8(_0x109bae)["slice"](0, Math["min"](30, _0x109bae["length"]));
    if (_0x199ba8(_0x5185ee)["includes"](_0x19626c)) return log["info"]("Prompt set via paste (" + _0x5185ee["length"] + " chars) — settling 3s"), await sleepUnlessStop(3e3), !![];
    log["warn"]("Paste did not stick — falling back to char-by-char InputEvent");
  } catch (_0x5c8da8) {
    log["warn"]("Paste attempt failed: " + _0x5c8da8);
  }
  _0x4fd726["focus"](), await sleep(50);
  for (const _0x5d5e4 of _0x109bae) {
    if (stopRequested) return ![];
    _0x5d5e4 === "\n" ? (_0x4fd726["dispatchEvent"](new InputEvent("beforeinput", { "bubbles": !![], "cancelable": !![], "inputType": "insertLineBreak" })), _0x4fd726["dispatchEvent"](new InputEvent("input", { "bubbles": !![], "cancelable": !![], "inputType": "insertLineBreak" }))) : (_0x4fd726["dispatchEvent"](new InputEvent("beforeinput", { "bubbles": !![], "cancelable": !![], "inputType": "insertText", "data": _0x5d5e4 })), _0x4fd726["dispatchEvent"](new InputEvent("input", { "bubbles": !![], "cancelable": !![], "inputType": "insertText", "data": _0x5d5e4 }))), await sleep(15);
  }
  log["info"]("Typed " + _0x109bae["length"] + " chars into Slate (char-by-char) — settling 4s"), await sleepUnlessStop(4e3);
  const _0x491939 = ((_b = _0x4fd726["textContent"]) == null ? void 0 : _b["trim"]()) || "", _0x49a494 = _0x199ba8(_0x109bae)["slice"](0, Math["min"](30, _0x109bae["length"]));
  if (_0x199ba8(_0x491939)["includes"](_0x49a494)) return log["info"]("Prompt verified (" + _0x491939["length"] + " chars, normalized match)"), !![];
  return log["error"]('Slate typing failed — textContent="' + _0x491939["slice"](0, 50) + '" (expected starts with "' + _0x49a494["slice"](0, 30) + '")'), ![];
}
async function typeIntoDraft(_0x4cbb5b, _0xe73f7a) {
  var _a;
  _0x4cbb5b["focus"](), await sleep(100), document["execCommand"]("selectAll", ![]), document["execCommand"]("delete", ![]), await sleep(50);
  for (const _0x1adba4 of _0xe73f7a) {
    document["execCommand"]("insertText", ![], _0x1adba4), await sleep(10);
  }
  log["info"]("Typed " + _0xe73f7a["length"] + " chars into Draft — settling 4s"), await sleepUnlessStop(4e3);
  const _0x35e4f2 = ((_a = _0x4cbb5b["textContent"]) == null ? void 0 : _a["trim"]()) || "";
  if (_0x35e4f2["includes"](_0xe73f7a["slice"](0, Math["min"](20, _0xe73f7a["length"])))) return log["info"]("Prompt verified (" + _0x35e4f2["length"] + " chars)"), !![];
  return log["error"]("Draft typing failed"), ![];
}
async function clickGenerate() {
  var _a;
  const _0x57b34d = isOnExtendPage();
  preGenTileIds = snapshotTileIds(), log["info"]("Pre-generate tile snapshot: " + preGenTileIds["size"] + " tiles" + (_0x57b34d ? " (extend mode — URL has /edit/)" : ""));
  const _0x55a6fd = Date["now"]() + 8e3;
  let _0x49ea0a = null;
  while (Date["now"]() < _0x55a6fd) {
    if (stopRequested) return ![];
    const _0x117e2f = document["querySelectorAll"]("button");
    for (const _0x391206 of _0x117e2f) {
      if (_0x391206["disabled"] || _0x391206["getAttribute"]("aria-disabled") === "true") continue;
      const _0x3cad8b = _0x391206["querySelector"]("i");
      if (((_a = _0x3cad8b == null ? void 0 : _0x3cad8b["textContent"]) == null ? void 0 : _a["trim"]()) === "arrow_forward") {
        _0x49ea0a = _0x391206;
        break;
      }
    }
    if (_0x49ea0a) break;
    await sleep(300);
  }
  if (!_0x49ea0a) {
    const _0x523d77 = findButtonByText(FLOW_LABELS["GENERATE"]);
    if (_0x523d77 && !_0x523d77["disabled"]) _0x49ea0a = _0x523d77, log["info"]("Using text-fallback Create button");
    else return log["error"]("Could not find enabled generate button (arrow_forward icon) after 8s"), ![];
  }
  const _0xd021c = 2;
  let _0x32d639 = ![];
  for (let _0x41355d = 1; _0x41355d <= _0xd021c; _0x41355d++) {
    if (stopRequested) return ![];
    const _0xe88e35 = "CDP click " + _0x41355d + "/" + _0xd021c;
    log["info"]("Click attempt: " + _0xe88e35 + (_0x57b34d ? " (extend mode)" : ""));
    const _0x496ee3 = await clickViaDebugger(_0x49ea0a, "Create (" + _0xe88e35 + ")");
    if (_0x496ee3) {
      _0x32d639 = !![];
      break;
    }
    log["warn"](_0xe88e35 + ": dispatch failed"), await sleep(1e3);
  }
  if (!_0x32d639) return log["error"]("CDP click failed to dispatch after all attempts"), chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "warn", "message": '⚠ คลิก Create ไม่สำเร็จ — เช็ค: ปิด DevTools (F12) บน Flow tab / allow "Debug other tabs" permission' } })["catch"](() => {
  }), ![];
  if (!_0x57b34d) {
    const _0x2a532d = Date["now"]();
    while (Date["now"]() - _0x2a532d < 5e3) {
      if (stopRequested) return !![];
      await sleep(500);
      const _0x1f5c5f = snapshotTileIds();
      for (const _0x4b27bb of _0x1f5c5f) {
        if (!preGenTileIds["has"](_0x4b27bb)) return log["info"]("✓ New tile appeared after " + (Date["now"]() - _0x2a532d) + "ms — generation in progress"), !![];
      }
    }
    log["info"]("No new tile in 5s — Flow may still be processing, will rely on waitForGenerationResult timeout");
  } else log["info"]("✓ Clicked Create (extend mode) — caller will wait for result");
  return !![];
}
async function clickViaDebugger(_0x4ec175, _0x267b36) {
  const _0x50359a = document["getElementById"]("agx-pipeline-overlay-host"), _0x31b548 = (_0x50359a == null ? void 0 : _0x50359a["style"]["display"]) ?? "";
  if (_0x50359a) _0x50359a["style"]["display"] = "none";
  const _0x3b5cdc = "agx-" + Date["now"]();
  _0x4ec175["setAttribute"]("data-agx-click-target", _0x3b5cdc);
  try {
    _0x4ec175["scrollIntoView"]({ "block": "center", "inline": "center" }), await sleep(400);
    const _0x28194f = _0x4ec175["getBoundingClientRect"]();
    if (_0x28194f["width"] === 0 || _0x28194f["height"] === 0) return log["error"]("clickViaDebugger: " + _0x267b36 + " has zero size"), ![];
    log["info"]("clickViaDebugger " + _0x267b36 + ": pre-attach rect=(" + Math["round"](_0x28194f["left"]) + "," + Math["round"](_0x28194f["top"]) + ") viewport=" + window["innerWidth"] + "x" + window["innerHeight"]);
    const _0x1bbd5e = Math["round"](_0x28194f["left"] + _0x28194f["width"] / 2), _0x15b51f = Math["round"](_0x28194f["top"] + _0x28194f["height"] / 2);
    try {
      const _0x175f70 = await chrome["runtime"]["sendMessage"]({ "type": "FLOW_DEBUGGER_CLICK", "payload": { "selector": '[data-agx-click-target="' + _0x3b5cdc + '"]', "x": _0x1bbd5e, "y": _0x15b51f } });
      if (_0x175f70 == null ? void 0 : _0x175f70["success"]) return log["info"]("Clicked " + _0x267b36 + " via CDP at (" + _0x175f70["x"] + "," + _0x175f70["y"] + ")"), !![];
      return log["error"]("CDP click failed: " + (_0x175f70 == null ? void 0 : _0x175f70["error"])), ![];
    } catch (_0x208b78) {
      return log["error"]("CDP click message failed: " + _0x208b78), ![];
    }
  } finally {
    _0x4ec175["removeAttribute"]("data-agx-click-target");
    if (_0x50359a) _0x50359a["style"]["display"] = _0x31b548;
  }
}
chrome["runtime"]["onMessage"]["addListener"]((_0x4fd1d4, _0x2f6744, _0x25f540) => {
  return handleMessage(_0x4fd1d4, _0x25f540), !![];
});
async function handleMessage(_0x97e3ad, _0x2e1cb3) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
  log["info"]("Received message", { "type": _0x97e3ad["type"] });
  if (localeBlocked && _0x97e3ad["type"] !== "FLOW_STOP" && _0x97e3ad["type"] !== "FLOW_RESET_STOP") {
    _0x2e1cb3({ "success": ![], "error": "wrong_locale", "message": "Flow ใช้ภาษาที่ไม่ใช่ English — กรุณาเปลี่ยนภาษา Google account ที่ myaccount.google.com/language แล้ว refresh หน้า Flow" });
    return;
  }
  switch (_0x97e3ad["type"]) {
    case "FLOW_PING": {
      _0x2e1cb3({ "ready": isReady });
      return;
    }
    case "FLOW_CHECK_DOWNLOAD_STATE": {
      const _0x5343b9 = Array["from"](document["querySelectorAll"]("div, span, p"))["some"]((_0x598097) => {
        const _0x65cd18 = (_0x598097["textContent"] || "")["toLowerCase"]();
        return _0x65cd18["includes"]("downloading") && _0x65cd18["includes"]("extended video");
      });
      _0x2e1cb3({ "downloading": _0x5343b9 });
      return;
    }
    case "LOG_BUFFER_COLLECT": {
      _0x2e1cb3({ "source": "flow-content", "buffer": getLoggerBuffer() });
      return;
    }
    case "FLOW_FIND_LATEST_VIDEO_URL": {
      findLatestVideoUrl()["then"]((_0x23ed6c) => _0x2e1cb3(_0x23ed6c));
      return;
    }
    case "FLOW_FETCH_VIDEO_AS_DATA_URL": {
      (async () => {
        var _a2;
        try {
          const _0x414eb2 = String(((_a2 = _0x97e3ad["payload"]) == null ? void 0 : _a2["url"]) || "");
          if (!_0x414eb2) {
            _0x2e1cb3({ "success": ![], "error": "No URL" });
            return;
          }
          const _0x18a350 = await fetch(_0x414eb2);
          if (!_0x18a350["ok"]) {
            _0x2e1cb3({ "success": ![], "error": "HTTP " + _0x18a350["status"] });
            return;
          }
          const _0x3864fb = await _0x18a350["arrayBuffer"]();
          if (_0x3864fb["byteLength"] === 0) {
            _0x2e1cb3({ "success": ![], "error": "empty response" });
            return;
          }
          const _0x3acf7e = new Uint8Array(_0x3864fb);
          let _0x43e07d = "";
          const _0x25a30b = 32768;
          for (let _0xc4c813 = 0; _0xc4c813 < _0x3acf7e["byteLength"]; _0xc4c813 += _0x25a30b) {
            _0x43e07d += String["fromCharCode"]["apply"](null, Array["from"](_0x3acf7e["subarray"](_0xc4c813, _0xc4c813 + _0x25a30b)));
          }
          const _0x40357b = "data:video/mp4;base64," + btoa(_0x43e07d);
          _0x2e1cb3({ "success": !![], "dataUrl": _0x40357b, "sizeBytes": _0x3acf7e["byteLength"] });
        } catch (_0x370853) {
          _0x2e1cb3({ "success": ![], "error": String(_0x370853) });
        }
      })();
      return;
    }
    case "FLOW_LEAVE_EXTEND": {
      (async () => {
        try {
          if (!isOnExtendPage()) {
            _0x2e1cb3({ "success": !![], "skipped": !![], "reason": "not on extend page" });
            return;
          }
          const _0x7fdaac = findButtonByIcon("arrow_back");
          if (!_0x7fdaac) {
            _0x2e1cb3({ "success": ![], "error": "arrow_back button not found" });
            return;
          }
          await humanClick(_0x7fdaac), await jitterSleep(800, 1400);
          const _0x47f2cc = !isOnExtendPage();
          log["info"]("Click Back: leftExtend=" + _0x47f2cc + ", url=" + window["location"]["pathname"]["slice"](0, 80)), _0x2e1cb3({ "success": !![], "leftExtend": _0x47f2cc });
        } catch (_0x32f33b) {
          _0x2e1cb3({ "success": ![], "error": String(_0x32f33b) });
        }
      })();
      return;
    }
    case "FLOW_SWITCH_TO_ALL_MEDIA": {
      const _0xe732f3 = findButtonByIcon("drive_folder_upload");
      _0xe732f3 ? humanClick(_0xe732f3)["then"](() => {
        log["info"]("Switched to Uploaded tab"), _0x2e1cb3({ "success": !![] });
      }) : (log["warn"]("Uploaded tab button not found — skipping switch"), _0x2e1cb3({ "success": ![], "error": "Uploaded tab not found" }));
      return;
    }
    case "FLOW_STOP": {
      stopRequested = !![], log["warn"]("FLOW_STOP received — stop flag set"), _0x2e1cb3({ "success": !![] });
      return;
    }
    case "FLOW_RESET_STOP": {
      stopRequested = ![], _0x2e1cb3({ "success": !![] });
      return;
    }
    case "FLOW_ENSURE_PROJECT": {
      const _0x380b7a = await ensureProjectPage();
      await dismissNoticeDialog();
      _0x380b7a && await ensureAgentOff();
      _0x2e1cb3({ "success": _0x380b7a });
      break;
    }
    case "FLOW_ENSURE_AGENT_OFF": {
      await ensureAgentOff(), _0x2e1cb3({ "success": !![] });
      break;
    }
    case "FLOW_DEBUG_DISABLE_AGENT": {
      const _0x100220 = await dismissAgentSessionPanel(), _0x2b274b = await disableAgentMode(), _0x37c715 = _0x2b274b["finalPressed"] === "false" || _0x2b274b["finalPressed"] === null;
      _0x2e1cb3({ "success": _0x37c715, "panel": _0x100220, "toggle": _0x2b274b });
      break;
    }
    case "FLOW_GET_PROJECT_ID": {
      const _0x5bc9f4 = window["location"]["href"], _0x47e591 = extractFlowProjectId(_0x5bc9f4), _0x4ba95a = getFlowLocale(_0x5bc9f4);
      _0x2e1cb3({ "success": !!_0x47e591, "projectId": _0x47e591, "locale": _0x4ba95a, "url": _0x5bc9f4 });
      break;
    }
    case "FLOW_VERIFY_PROJECT_URL": {
      const _0x512a4c = ((_a = _0x97e3ad["payload"]) == null ? void 0 : _a["projectId"]) || "", _0x4e319a = ((_b = _0x97e3ad["payload"]) == null ? void 0 : _b["mode"]) || "project", _0x16a0bf = ((_c = _0x97e3ad["payload"]) == null ? void 0 : _c["navigate"]) !== ![];
      if (!_0x512a4c) {
        _0x2e1cb3({ "ok": ![], "error": "no_project_id" });
        break;
      }
      const _0x2102c2 = window["location"]["href"], _0x40da3f = getFlowLocale(_0x2102c2), _0x522e63 = _0x4e319a === "scene" ? isStrictFlowSceneUrl(_0x2102c2, _0x512a4c) : isStrictFlowProjectUrl(_0x2102c2, _0x512a4c);
      if (_0x522e63) {
        _0x2e1cb3({ "ok": !![], "currentUrl": _0x2102c2, "mode": _0x4e319a });
        break;
      }
      const _0x520044 = buildFlowProjectUrl(_0x512a4c, _0x40da3f);
      log["warn"]("URL gate mismatch (mode=" + _0x4e319a + "): " + _0x2102c2 + " → expected " + _0x520044 + (_0x4e319a === "scene" ? "/scene/" : ""));
      _0x16a0bf && _0x4e319a === "project" ? (window["location"]["href"] = _0x520044, _0x2e1cb3({ "ok": ![], "recovered": !![], "currentUrl": _0x2102c2, "target": _0x520044, "mode": _0x4e319a })) : _0x2e1cb3({ "ok": ![], "recovered": ![], "currentUrl": _0x2102c2, "target": _0x520044, "mode": _0x4e319a });
      break;
    }
    case "FLOW_CLICK_SCENEBUILDER": {
      const _0x2e8526 = document["querySelectorAll"]("i.google-symbols");
      let _0x25d1b3 = null;
      for (const _0x59931f of _0x2e8526) {
        if (((_d = _0x59931f["textContent"]) == null ? void 0 : _d["trim"]()) === "play_movies") {
          _0x25d1b3 = _0x59931f;
          break;
        }
      }
      if (!_0x25d1b3) {
        _0x2e1cb3({ "success": ![], "error": "play_movies icon not found" });
        break;
      }
      const _0x2f3113 = _0x25d1b3["closest"]("button");
      if (!_0x2f3113) {
        _0x2e1cb3({ "success": ![], "error": "play_movies icon has no parent button" });
        break;
      }
      simulateClick(_0x2f3113), log["info"]("Clicked Scenebuilder button (play_movies)"), _0x2e1cb3({ "success": !![] });
      break;
    }
    case "FLOW_UPLOAD_IMAGE": {
      const _0x524d75 = (_e = _0x97e3ad["payload"]) == null ? void 0 : _e["imageDataUrl"];
      if (!_0x524d75) {
        _0x2e1cb3({ "success": ![], "error": "No image data" });
        return;
      }
      const _0x5d9a86 = await uploadImageToFlow(_0x524d75);
      _0x2e1cb3({ "success": _0x5d9a86 });
      break;
    }
    case "FLOW_UPLOAD_IMAGES": {
      const _0x57f453 = (_f = _0x97e3ad["payload"]) == null ? void 0 : _f["images"], _0x542677 = ((_g = _0x97e3ad["payload"]) == null ? void 0 : _g["uploadWaitMs"]) || 2e4;
      if (!_0x57f453 || _0x57f453["length"] === 0) {
        _0x2e1cb3({ "success": ![], "error": "No images provided" });
        return;
      }
      await dismissNoticeDialog();
      let _0x2e8776 = 0;
      const _0x54f59f = [];
      for (const _0x349cbf of _0x57f453) {
        log["info"]("[Upload " + (_0x2e8776 + 1) + "/" + _0x57f453["length"] + "] Starting (wait " + _0x542677 + "ms)...");
        const _0x5286d5 = "รออัพโหลดรูป " + (_0x2e8776 + 1) + "/" + _0x57f453["length"], _0x42c05a = snapshotTileIds(), _0x73b0fb = await uploadImageToFlow(_0x349cbf, _0x542677, _0x5286d5);
        if (!_0x73b0fb) {
          log["error"]("[Upload " + (_0x2e8776 + 1) + "/" + _0x57f453["length"] + "] FAILED"), _0x2e1cb3({ "success": ![], "error": "Failed to upload image " + (_0x2e8776 + 1), "uploaded": _0x2e8776, "tiles": _0x54f59f });
          return;
        }
        const _0xde6fd5 = await captureNewUploadedTile(_0x42c05a);
        _0x54f59f["push"]({ "index": _0x2e8776, "tileId": _0xde6fd5["tileId"], "url": _0xde6fd5["url"] }), log["info"]("[Upload " + (_0x2e8776 + 1) + "/" + _0x57f453["length"] + "] Done ✓ tile=" + (((_h = _0xde6fd5["tileId"]) == null ? void 0 : _h["slice"](0, 12)) ?? "(none)") + " url=" + (_0xde6fd5["url"] ? _0xde6fd5["url"]["slice"](0, 40) + "..." : "(none)")), _0x2e8776++;
      }
      await waitForImagesLoaded(), log["info"]("All " + _0x2e8776 + "/" + _0x57f453["length"] + " images uploaded and confirmed"), _0x2e1cb3({ "success": !![], "uploaded": _0x2e8776, "tiles": _0x54f59f });
      break;
    }
    case "FLOW_ENSURE_CONFIG": {
      const _0xd63c80 = _0x97e3ad["payload"], _0x2c93a1 = await ensureFlowConfig(_0xd63c80["mode"], _0xd63c80["aspectRatio"], _0xd63c80["count"], _0xd63c80["imageModel"], _0xd63c80["videoModel"], _0xd63c80["ingredientMode"], _0xd63c80["videoDuration"]);
      _0x2e1cb3({ "success": _0x2c93a1 });
      break;
    }
    case "FLOW_ATTACH_UPLOADS": {
      const _0x1ceb45 = ((_i = _0x97e3ad["payload"]) == null ? void 0 : _i["count"]) || 1, _0xaca102 = await attachUploadsToPrompt(_0x1ceb45);
      _0x2e1cb3({ "success": _0xaca102 });
      break;
    }
    case "FLOW_ATTACH_LATEST_IMAGE": {
      const _0x30e63d = await attachLatestGeneratedImage();
      _0x2e1cb3(_0x30e63d);
      break;
    }
    case "FLOW_ATTACH_IMAGE_BY_URL": {
      const _0x20c4a2 = ((_j = _0x97e3ad["payload"]) == null ? void 0 : _j["url"]) || "", _0x4cc6f7 = await attachImageByUrl(_0x20c4a2);
      _0x2e1cb3(_0x4cc6f7);
      break;
    }
    case "FLOW_ATTACH_IMAGE_BY_TILE_ID": {
      const _0x5b3758 = ((_k = _0x97e3ad["payload"]) == null ? void 0 : _k["tileId"]) || "", _0x399a65 = await attachImageByTileId(_0x5b3758);
      _0x2e1cb3(_0x399a65);
      break;
    }
    case "FLOW_ATTACH_INGREDIENT_REFS": {
      const _0x1ce1d7 = ((_l = _0x97e3ad["payload"]) == null ? void 0 : _l["refs"]) || [];
      if (_0x1ce1d7["length"] === 0) {
        _0x2e1cb3({ "success": ![], "attached": 0, "total": 0, "error": "no refs" });
        break;
      }
      let _0xece216 = 0;
      for (const _0x482efc of _0x1ce1d7) {
        const _0x5afbe9 = await attachRefForIngredients(_0x482efc);
        if (_0x5afbe9) _0xece216++;
      }
      log["info"]("FLOW_ATTACH_INGREDIENT_REFS — attached " + _0xece216 + "/" + _0x1ce1d7["length"]), _0x2e1cb3({ "success": _0xece216 > 0, "attached": _0xece216, "total": _0x1ce1d7["length"] });
      break;
    }
    case "FLOW_ATTACH_IMAGE_BY_POSITION": {
      const _0x23b536 = ((_m = _0x97e3ad["payload"]) == null ? void 0 : _m["position"]) ?? -1, _0x2b2b0d = await attachImageByPosition(_0x23b536);
      _0x2e1cb3(_0x2b2b0d);
      break;
    }
    case "FLOW_ADD_CLIP_TO_SCENE": {
      const _0x51d49e = ((_n = _0x97e3ad["payload"]) == null ? void 0 : _n["tileId"]) || void 0, _0x2ed045 = ((_o = _0x97e3ad["payload"]) == null ? void 0 : _o["sceneMode"]) || "auto", _0x508aaf = await addLatestVideoToScene(_0x51d49e, _0x2ed045);
      _0x2e1cb3(_0x508aaf);
      break;
    }
    case "FLOW_DOWNLOAD_CLIP": {
      const _0x3e996 = ((_p = _0x97e3ad["payload"]) == null ? void 0 : _p["quality"]) || "720p", _0x1155cb = await downloadLatestClip(_0x3e996);
      _0x2e1cb3(_0x1155cb);
      break;
    }
    case "FLOW_DOWNLOAD_SCENEBUILDER": {
      const _0x48cc89 = await downloadFromSceneBuilder();
      _0x2e1cb3(_0x48cc89);
      break;
    }
    case "FLOW_EXTEND_CLIP": {
      const _0x5e94f = (_q = _0x97e3ad["payload"]) == null ? void 0 : _q["prompt"], _0x5cd1cf = (_r = _0x97e3ad["payload"]) == null ? void 0 : _r["videoModel"], _0xd57242 = ((_s = _0x97e3ad["payload"]) == null ? void 0 : _s["retryAttempt"]) ?? 0, _0x3bbe13 = ((_t = _0x97e3ad["payload"]) == null ? void 0 : _t["sceneIndex"]) ?? 1, _0x1e6f9f = await extendLatestClip(_0x5e94f || "", _0x5cd1cf, _0xd57242, _0x3bbe13);
      _0x2e1cb3(_0x1e6f9f);
      break;
    }
    case "FLOW_OPEN_LATEST_VIDEO_EDIT": {
      try {
        const _0x356485 = window["location"]["href"], _0x368cd9 = isFlowEditUrl(_0x356485), _0x175e42 = /\/project\/[^/?#]+\/scene/i["test"](_0x356485);
        if (_0x368cd9 || _0x175e42) {
          log["info"]("FLOW_OPEN_LATEST_VIDEO_EDIT: already on " + (_0x175e42 ? "/scene/" : "/edit/") + " — skip navigation"), _0x2e1cb3({ "success": !![], "beforeUrl": _0x356485["slice"](0, 80), "afterUrl": _0x356485["slice"](0, 80), "arrivedEditPage": !![], "skipped": !![], "currentPage": _0x175e42 ? "scene" : "edit" });
          break;
        }
        const _0xb5a7c8 = findButtonByIcon("videocam");
        _0xb5a7c8 && (await humanClick(_0xb5a7c8), await jitterSleep(900, 1600));
        const _0x514a47 = () => {
          var _a2;
          const _0x597601 = document["querySelectorAll"]('[data-testid="virtuoso-item-list"]');
          for (const _0x4c8fe7 of _0x597601) {
            if (_0x4c8fe7["closest"]('[role="dialog"][data-state="open"]')) continue;
            if (_0x4c8fe7["closest"]('[role="menu"][data-state="open"]')) continue;
            const _0x5c0496 = _0x4c8fe7["querySelectorAll"]("[data-tile-id]");
            for (const _0x2d3535 of _0x5c0496) {
              const _0x755982 = _0x2d3535["querySelector"]("video");
              if (_0x755982 && _0x755982["src"]) return { "tile": _0x2d3535, "video": _0x755982, "retryBtn": null, "isError": ![] };
              const _0xe1db57 = Array["from"](_0x2d3535["querySelectorAll"]("i"))["some"]((_0x28b509) => {
                var _a3;
                return ((_a3 = _0x28b509["textContent"]) == null ? void 0 : _a3["trim"]()) === "warning";
              });
              if (_0xe1db57) {
                let _0x413c91 = null;
                for (const _0x19daf2 of _0x2d3535["querySelectorAll"]("button")) {
                  const _0x16c514 = _0x19daf2["querySelector"]("i");
                  if (((_a2 = _0x16c514 == null ? void 0 : _0x16c514["textContent"]) == null ? void 0 : _a2["trim"]()) === "refresh") {
                    _0x413c91 = _0x19daf2;
                    break;
                  }
                }
                return { "tile": _0x2d3535, "video": null, "retryBtn": _0x413c91, "isError": !![] };
              }
            }
          }
          return { "tile": null, "video": null, "retryBtn": null, "isError": ![] };
        };
        let _0x474b04 = _0x514a47();
        if (_0x474b04["isError"] && _0x474b04["retryBtn"]) {
          log["warn"]('FLOW_OPEN_LATEST_VIDEO_EDIT: error tile detected ("Failed/Something went wrong") — clicking Retry'), await humanClick(_0x474b04["retryBtn"]), await jitterSleep(1500, 2500);
          const _0x3335b7 = Date["now"]() + 12e4;
          while (Date["now"]() < _0x3335b7) {
            const _0x4fd438 = _0x514a47();
            if (_0x4fd438["video"] && _0x4fd438["video"]["src"]) {
              _0x474b04 = _0x4fd438, log["info"]("FLOW_OPEN_LATEST_VIDEO_EDIT: video appeared after Retry");
              break;
            }
            if (_0x4fd438["isError"]) {
              await sleep(2500);
              continue;
            }
            await sleep(2500);
          }
          if (!_0x474b04["video"]) {
            _0x2e1cb3({ "success": ![], "error": "Scene 1 tile error: Retry clicked แต่ video ไม่โผล่ใน 120s (Flow media loading fail)", "beforeUrl": _0x356485["slice"](0, 80), "afterUrl": window["location"]["href"]["slice"](0, 80), "hadErrorTile": !![] });
            break;
          }
        }
        if (!_0x474b04["video"]) {
          _0x2e1cb3({ "success": ![], "error": _0x474b04["isError"] ? "Scene 1 tile error: ไม่มีปุ่ม Retry" : "no video tile with src found in virtuoso lists (อาจไม่ได้อยู่ project page)", "beforeUrl": _0x356485["slice"](0, 80), "afterUrl": window["location"]["href"]["slice"](0, 80), "hadErrorTile": _0x474b04["isError"] });
          break;
        }
        log["info"]("FLOW_OPEN_LATEST_VIDEO_EDIT: clicking video center to navigate /edit/"), await humanClick(_0x474b04["video"]), await jitterSleep(1500, 2500);
        let _0x477b0f = ![];
        const _0xdc5204 = Date["now"]() + 8e3;
        while (Date["now"]() < _0xdc5204) {
          if (isFlowEditUrl(window["location"]["href"])) {
            _0x477b0f = !![];
            break;
          }
          await sleep(300);
        }
        _0x2e1cb3({ "success": _0x477b0f, "beforeUrl": _0x356485["slice"](0, 80), "afterUrl": window["location"]["href"]["slice"](0, 80), "arrivedEditPage": _0x477b0f, "error": _0x477b0f ? void 0 : "URL ไม่เปลี่ยนเป็น /edit/ ภายใน 8s — Flow อาจไม่ได้คลิก tile" });
      } catch (_0x5493ab) {
        _0x2e1cb3({ "success": ![], "error": String(_0x5493ab) });
      }
      break;
    }
    case "FLOW_OPEN_LATEST_SCENE": {
      const _0x1856ae = window["location"]["href"];
      try {
        if (/\/project\/[^/?#]+\/scene/i["test"](_0x1856ae)) {
          log["info"]("FLOW_OPEN_LATEST_SCENE: already on /scene/ — skip"), _0x2e1cb3({ "success": !![], "skipped": !![], "currentPage": "scene", "beforeUrl": _0x1856ae["slice"](0, 80), "afterUrl": _0x1856ae["slice"](0, 80), "arrivedScenePage": !![] });
          break;
        }
        let _0x1cef14 = null;
        const _0x8083e3 = document["querySelectorAll"]("button");
        for (const _0x1237e3 of _0x8083e3) {
          const _0xd1c683 = _0x1237e3["getBoundingClientRect"]();
          if (_0xd1c683["width"] === 0 || _0xd1c683["height"] === 0) continue;
          const _0x1edd6d = _0x1237e3["querySelector"]("i.google-symbols");
          if (((_u = _0x1edd6d == null ? void 0 : _0x1edd6d["textContent"]) == null ? void 0 : _u["trim"]()) !== "movie") continue;
          const _0x502481 = (_0x1237e3["textContent"] || "")["trim"]();
          if (/view\s*scenes/i["test"](_0x502481)) {
            _0x1cef14 = _0x1237e3;
            break;
          }
        }
        if (!_0x1cef14) {
          _0x2e1cb3({ "success": ![], "error": '"View scenes" button not found (icon=movie + label "View scenes")' });
          break;
        }
        await humanClick(_0x1cef14), log["info"]('FLOW_OPEN_LATEST_SCENE: clicked "View scenes" — waiting tile list'), await jitterSleep(600, 1200);
        let _0x11fb79 = null, _0x53d343 = null;
        const _0x33a581 = Date["now"]() + 4e3;
        while (Date["now"]() < _0x33a581) {
          const _0x1cfea4 = document["querySelectorAll"]("[data-tile-id]");
          for (const _0x309c6b of _0x1cfea4) {
            const _0x410218 = _0x309c6b["querySelector"]('a[href*="/scene/"]');
            if (_0x410218) {
              const _0x2a2138 = _0x309c6b["getBoundingClientRect"]();
              if (_0x2a2138["width"] === 0 || _0x2a2138["height"] === 0) continue;
              _0x11fb79 = _0x309c6b, _0x53d343 = _0x410218;
              break;
            }
          }
          if (_0x11fb79 && _0x53d343) break;
          await sleep(80);
        }
        if (!_0x11fb79 || !_0x53d343) {
          _0x2e1cb3({ "success": ![], "error": 'No scene tile (<a href="/scene/...">) found after click View scenes' });
          break;
        }
        const _0x4f2ada = _0x11fb79["getAttribute"]("data-tile-id") || "", _0x3ddccc = _0x53d343["href"];
        _0x53d343["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(200), await humanClick(_0x53d343), log["info"]("FLOW_OPEN_LATEST_SCENE: clicked tile " + _0x4f2ada["slice"](0, 18) + "... → " + _0x3ddccc);
        const _0x1d3c34 = Date["now"]() + 1e4;
        let _0x1b3719 = ![];
        while (Date["now"]() < _0x1d3c34) {
          if (/\/project\/[^/?#]+\/scene/i["test"](window["location"]["href"])) {
            _0x1b3719 = !![];
            break;
          }
          await sleep(150);
        }
        if (_0x1b3719) await sleep(800);
        _0x2e1cb3({ "success": _0x1b3719, "beforeUrl": _0x1856ae["slice"](0, 80), "afterUrl": window["location"]["href"]["slice"](0, 80), "arrivedScenePage": _0x1b3719, "tileId": _0x4f2ada, "targetHref": _0x3ddccc, "error": _0x1b3719 ? void 0 : "URL ไม่เปลี่ยนเป็น /scene/ ภายใน 10s — Flow อาจไม่ได้คลิก tile" });
      } catch (_0x5c0635) {
        _0x2e1cb3({ "success": ![], "error": String(_0x5c0635) });
      }
      break;
    }
    case "FLOW_DOWNLOAD_SCENE_DIRECT": {
      const _0x3b7301 = ((_v = _0x97e3ad["payload"]) == null ? void 0 : _v["timeoutMs"]) ?? 3 * 6e4, _0x55d8e0 = ((_w = _0x97e3ad["payload"]) == null ? void 0 : _w["maxClickAttempts"]) ?? 3, _0x187e22 = ((_x = _0x97e3ad["payload"]) == null ? void 0 : _x["exportingWaitMs"]) ?? 1e4, _0x888b21 = () => {
        var _a2;
        const _0x548f51 = Array["from"](document["querySelectorAll"]("button"));
        for (const _0x32dcee of _0x548f51) {
          if (_0x32dcee["getAttribute"]("aria-haspopup") === "menu") continue;
          const _0x31d826 = _0x32dcee["getBoundingClientRect"]();
          if (_0x31d826["width"] === 0 || _0x31d826["height"] === 0) continue;
          const _0x2eaa3a = _0x32dcee["querySelector"]("i");
          if (((_a2 = _0x2eaa3a == null ? void 0 : _0x2eaa3a["textContent"]) == null ? void 0 : _a2["trim"]()) !== "download") continue;
          const _0x484338 = Array["from"](_0x32dcee["querySelectorAll"]("span"))["some"]((_0x2494e8) => {
            var _a3, _b2;
            return (((_a3 = _0x2494e8["textContent"]) == null ? void 0 : _a3["trim"]()) || "") === "Download" || (((_b2 = _0x2494e8["textContent"]) == null ? void 0 : _b2["trim"]()) || "") === "ดาวน์โหลด";
          });
          if (!_0x484338) continue;
          return _0x32dcee;
        }
        return null;
      }, _0x1e83c5 = (_0x3872b3) => {
        const _0x2d2503 = document["querySelectorAll"]("div");
        for (const _0x1c5aa0 of _0x2d2503) {
          const _0x47c8a2 = (_0x1c5aa0["textContent"] || "")["trim"]();
          for (const _0x74eb89 of _0x3872b3) {
            if (_0x47c8a2 === _0x74eb89 || _0x47c8a2["includes"](_0x74eb89)) return _0x1c5aa0;
          }
        }
        return null;
      }, _0xc64a16 = ["Exporting your scene", "กำลัง Export", "กำลังส่งออก"], _0x3789cc = ["Scene exported successfully", "Export สำเร็จ", "s สำเร็จ"], _0x305edd = Date["now"]();
      let _0x319475 = ![], _0x28964d = ![], _0x591767 = 0;
      while (_0x591767 < _0x55d8e0 && !_0x319475 && !_0x28964d) {
        _0x591767++;
        const _0x484a7b = _0x888b21();
        if (!_0x484a7b) {
          if (_0x591767 === 1) {
            _0x2e1cb3({ "success": ![], "error": 'Download button not found (looked for <i>download</i> + sr-only "Download")', "clickAttempts": _0x591767 });
            return;
          }
          log["warn"]("Download button vanished on retry " + _0x591767), await sleep(1e3);
          continue;
        }
        _0x484a7b["scrollIntoView"]({ "block": "center", "behavior": "instant" }), await sleep(150), simulateClick(_0x484a7b), log["info"]("Direct download button clicked (attempt " + _0x591767 + "/" + _0x55d8e0 + ")");
        const _0x1ace67 = Date["now"]();
        while (Date["now"]() - _0x1ace67 < _0x187e22) {
          if (_0x1e83c5(_0x3789cc)) {
            _0x28964d = !![], log["info"]('Download completed extremely fast — saw "exported" after attempt ' + _0x591767);
            break;
          }
          if (_0x1e83c5(_0xc64a16)) {
            _0x319475 = !![], log["info"]('Saw "Exporting your scene…" after attempt ' + _0x591767);
            break;
          }
          await sleep(300);
        }
        !_0x319475 && !_0x28964d && _0x591767 < _0x55d8e0 && log["warn"]('No "Exporting" after ' + _0x187e22 / 1e3 + "s — re-clicking download (attempt " + (_0x591767 + 1) + "/" + _0x55d8e0 + ")");
      }
      if (!_0x319475 && !_0x28964d) {
        _0x2e1cb3({ "success": ![], "error": 'ไม่เจอ "Exporting your scene…" หลังคลิก ' + _0x591767 + " ครั้ง × " + _0x187e22 / 1e3 + "s — Download button อาจไม่ตอบสนอง", "clickAttempts": _0x591767, "sawExporting": ![], "sawComplete": ![] });
        break;
      }
      let _0x9bd2b6 = _0x28964d;
      if (!_0x9bd2b6) {
        const _0xab02c3 = Date["now"]();
        while (Date["now"]() - _0xab02c3 < _0x3b7301) {
          if (_0x1e83c5(_0x3789cc)) {
            _0x9bd2b6 = !![];
            break;
          }
          await sleep(500);
        }
      }
      const _0x3e6e56 = Date["now"]() - _0x305edd;
      _0x9bd2b6 ? (log["info"]("Download complete (clickAttempts=" + _0x591767 + ", totalMs=" + _0x3e6e56 + ")"), _0x2e1cb3({ "success": !![], "sawExporting": _0x319475, "sawComplete": _0x9bd2b6, "clickAttempts": _0x591767, "totalMs": _0x3e6e56 })) : _0x2e1cb3({ "success": ![], "error": "timeout " + _0x3b7301 + 'ms — ไม่เจอ "Scene exported successfully!" (sawExporting=' + _0x319475 + ", clickAttempts=" + _0x591767 + ")", "sawExporting": _0x319475, "sawComplete": _0x9bd2b6, "clickAttempts": _0x591767, "totalMs": _0x3e6e56 });
      break;
    }
    case "FLOW_DOWNLOAD_EXTENDED_VIDEO": {
      const _0xdced1b = ((_y = _0x97e3ad["payload"]) == null ? void 0 : _y["timeoutMs"]) ?? 5 * 6e4, _0x1410cd = await downloadExtendedFullVideo(_0xdced1b);
      _0x2e1cb3(_0x1410cd);
      break;
    }
    case "FLOW_CLICK_DONE": {
      const _0x23fe10 = findButtonByIconAndText("check", FLOW_LABELS["DONE"]);
      if (_0x23fe10) {
        try {
          _0x23fe10["click"]();
        } catch {
        }
        log["info"]("Clicked Done button (post-TikTok)"), _0x2e1cb3({ "success": !![] });
      } else log["info"]("Done button not found — อาจไม่มี dialog ค้าง"), _0x2e1cb3({ "success": ![], "reason": "not-found" });
      break;
    }
    case "FLOW_SET_PROMPT": {
      const _0xe86eab = (_z = _0x97e3ad["payload"]) == null ? void 0 : _z["prompt"];
      if (!_0xe86eab) {
        _0x2e1cb3({ "success": ![], "error": "No prompt" });
        return;
      }
      const _0x439941 = await setPrompt(_0xe86eab);
      _0x2e1cb3({ "success": _0x439941 });
      break;
    }
    case "FLOW_GENERATE": {
      const _0x39e751 = await clickGenerate();
      _0x2e1cb3({ "success": _0x39e751 });
      break;
    }
    case "FLOW_WAIT_RESULT": {
      const _0x193686 = ((_A = _0x97e3ad["payload"]) == null ? void 0 : _A["timeout"]) || 18e4, _0x29d384 = await waitForGenerationResult(_0x193686);
      _0x2e1cb3(_0x29d384);
      break;
    }
    case "FLOW_RELOAD": {
      _0x2e1cb3({ "success": !![] }), setTimeout(() => window["location"]["reload"](), 300);
      break;
    }
    case "FLOW_NAVIGATE_HOME": {
      const _0x427c5d = isFlowHomeUrl(window["location"]["href"]);
      _0x2e1cb3({ "success": !![], "alreadyHome": _0x427c5d });
      !_0x427c5d && setTimeout(() => {
        window["location"]["href"] = FLOW_NAV_HOME;
      }, 300);
      break;
    }
    case "FLOW_NEW_PROJECT": {
      if (isFlowProjectUrl(window["location"]["href"])) {
        _0x2e1cb3({ "success": !![], "navigated": ![] });
        break;
      }
      const _0x3750d3 = await clickNewProject();
      _0x2e1cb3({ "success": _0x3750d3, "navigated": _0x3750d3 });
      break;
    }
    case "FLOW_HAS_FAILED_TILE": {
      const _0x40818b = /* @__PURE__ */ new Set();
      let _0x3c4cfd = ![];
      for (const _0x2ec34d of document["querySelectorAll"]("[data-tile-id]")) {
        const _0x338dba = _0x2ec34d["getAttribute"]("data-tile-id") || "";
        if (!_0x338dba || _0x40818b["has"](_0x338dba)) continue;
        _0x40818b["add"](_0x338dba);
        if (isUnusualActivityTile(_0x2ec34d)) {
          _0x3c4cfd = !![];
          break;
        }
      }
      _0x2e1cb3({ "found": _0x3c4cfd });
      break;
    }
    case "FLOW_STATUS": {
      _0x2e1cb3({ "ready": isReady, "url": window["location"]["href"], "onProject": isFlowProjectUrl(window["location"]["href"]) });
      break;
    }
    case "FLOW_EXTEND_OPEN_ADD_MENU": {
      const _0x1dc684 = document["querySelector"]('button[data-add-button="true"]');
      if (!_0x1dc684) {
        _0x2e1cb3({ "success": ![], "error": 'Add Clip button (data-add-button="true") not found' });
        break;
      }
      _0x1dc684["scrollIntoView"]({ "block": "center", "inline": "end", "behavior": "auto" }), await sleep(150), simulateClick(_0x1dc684), await sleep(350);
      const _0x4b84a4 = _0x1dc684["getAttribute"]("aria-expanded") === "true" || !!document["querySelector"]('[role="menu"][data-state="open"]') || document["querySelectorAll"]('button[role="menuitem"]')["length"] > 0;
      _0x2e1cb3({ "success": _0x4b84a4, "ariaExpanded": _0x1dc684["getAttribute"]("aria-expanded"), "menuItemsCount": document["querySelectorAll"]('button[role="menuitem"]')["length"] });
      break;
    }
    case "FLOW_EXTEND_PICK_MENU_OPTION": {
      const _0x228102 = ((_B = _0x97e3ad["payload"]) == null ? void 0 : _B["match"]) || "Extend", _0x550b31 = Array["from"](document["querySelectorAll"]('button[role="menuitem"]'));
      if (_0x550b31["length"] === 0) {
        _0x2e1cb3({ "success": ![], "error": "no menuitem found — menu may not be open" });
        break;
      }
      const _0xb8c79d = _0x550b31["find"]((_0x40e702) => (_0x40e702["textContent"] || "")["toLowerCase"]()["includes"](_0x228102["toLowerCase"]()));
      if (!_0xb8c79d) {
        _0x2e1cb3({ "success": ![], "error": 'no menu option containing "' + _0x228102 + '"', "available": _0x550b31["map"]((_0x4e45d5) => {
          var _a2;
          return (_a2 = _0x4e45d5["textContent"]) == null ? void 0 : _a2["trim"]()["slice"](0, 80);
        }) });
        break;
      }
      simulateClick(_0xb8c79d), _0x2e1cb3({ "success": !![], "picked": (_C = _0xb8c79d["textContent"]) == null ? void 0 : _C["trim"]()["slice"](0, 80) });
      break;
    }
    case "FLOW_TIMELINE_SCROLL_END": {
      const _0x29e455 = document["querySelector"]('button[data-add-button="true"]');
      _0x29e455 && _0x29e455["scrollIntoView"]({ "inline": "end", "block": "nearest", "behavior": "auto" });
      const _0x93ebf9 = [...document["querySelectorAll"]('[data-virtuoso-scroller="true"]'), ...document["querySelectorAll"]('[data-timeline="true"]')];
      if (_0x93ebf9["length"] === 0 && _0x29e455) {
        let _0x12404c = _0x29e455["parentElement"];
        while (_0x12404c) {
          const _0x31be2c = getComputedStyle(_0x12404c)["overflowX"];
          if ((_0x31be2c === "auto" || _0x31be2c === "scroll") && _0x12404c["scrollWidth"] > _0x12404c["clientWidth"]) {
            _0x93ebf9["push"](_0x12404c);
            break;
          }
          _0x12404c = _0x12404c["parentElement"];
        }
      }
      for (const _0x537175 of _0x93ebf9) {
        const _0x3f3b90 = Math["max"](0, _0x537175["scrollWidth"] - _0x537175["clientWidth"]);
        _0x537175["scrollTo"]({ "left": _0x3f3b90, "top": _0x537175["scrollTop"], "behavior": "auto" });
      }
      await new Promise((_0x183de6) => requestAnimationFrame(() => _0x183de6()));
      for (const _0xe6e53c of _0x93ebf9) {
        const _0x5c22bf = Math["max"](0, _0xe6e53c["scrollWidth"] - _0xe6e53c["clientWidth"]);
        _0x5c22bf > 0 && _0xe6e53c["scrollLeft"] === 0 && _0xe6e53c["dispatchEvent"](new WheelEvent("wheel", { "bubbles": !![], "cancelable": !![], "deltaX": _0x5c22bf, "deltaY": 0, "deltaMode": 0 }));
      }
      await new Promise((_0x24f218) => requestAnimationFrame(() => _0x24f218()));
      _0x29e455 && _0x29e455["scrollIntoView"]({ "inline": "end", "block": "nearest", "behavior": "auto" });
      const _0x5ad234 = _0x93ebf9["map"]((_0x392029) => ({ "scrollLeft": _0x392029["scrollLeft"], "scrollWidth": _0x392029["scrollWidth"], "clientWidth": _0x392029["clientWidth"] })), _0x55a909 = !!(_0x29e455 && _0x29e455["getBoundingClientRect"]()["right"] <= window["innerWidth"]);
      _0x2e1cb3({ "success": !![], "count": _0x93ebf9["length"], "results": _0x5ad234, "addBtnVisible": _0x55a909 });
      break;
    }
    case "FLOW_TRIM_CLIP_BY_PX": {
      const _0x629bcf = ((_D = _0x97e3ad["payload"]) == null ? void 0 : _D["clipIndex"]) ?? -2, _0x13fefb = (_E = _0x97e3ad["payload"]) == null ? void 0 : _E["dx"], _0x51e117 = !!((_F = _0x97e3ad["payload"]) == null ? void 0 : _F["useCdp"]);
      if (typeof _0x13fefb !== "number") {
        _0x2e1cb3({ "success": ![], "error": "dx (number) required" });
        break;
      }
      const _0x4856ed = Array["from"](document["querySelectorAll"]("[data-clip-id]"));
      if (_0x4856ed["length"] === 0) {
        _0x2e1cb3({ "success": ![], "error": "no clip cards found ([data-clip-id] missing — selector outdated?)" });
        break;
      }
      const _0x2ad8c4 = _0x629bcf < 0 ? _0x4856ed["length"] + _0x629bcf : _0x629bcf, _0x185b99 = _0x4856ed[_0x2ad8c4];
      if (!_0x185b99) {
        _0x2e1cb3({ "success": ![], "error": "clipIndex " + _0x629bcf + " (resolved " + _0x2ad8c4 + ") out of range (total " + _0x4856ed["length"] + ")" });
        break;
      }
      const _0xb79d64 = _0x185b99["getBoundingClientRect"](), _0x34f57d = Math["round"](_0xb79d64["right"] - 3), _0x58f625 = Math["round"](_0xb79d64["top"] + _0xb79d64["height"] / 2), _0x3d126d = _0x34f57d + _0x13fefb, _0x1174fe = _0x58f625;
      if (_0x51e117) {
        const _0x1ecb73 = document["getElementById"]("agx-pipeline-overlay-host"), _0x53d0da = (_0x1ecb73 == null ? void 0 : _0x1ecb73["style"]["display"]) ?? "";
        if (_0x1ecb73) _0x1ecb73["style"]["display"] = "none";
        let _0x431a91 = null;
        try {
          _0x431a91 = await chrome["runtime"]["sendMessage"]({ "type": "FLOW_DEBUGGER_DRAG", "payload": { "startX": _0x34f57d, "startY": _0x58f625, "endX": _0x3d126d, "endY": _0x1174fe, "steps": 12 } });
        } finally {
          if (_0x1ecb73) {
            if (_0x53d0da) _0x1ecb73["style"]["display"] = _0x53d0da;
            else _0x1ecb73["style"]["removeProperty"]("display");
          }
        }
        _0x2e1cb3({ "success": !!(_0x431a91 == null ? void 0 : _0x431a91["success"]), "method": "cdp", "clipsTotal": _0x4856ed["length"], "clipIndexResolved": _0x2ad8c4, "clipId": _0x185b99["getAttribute"]("data-clip-id"), "clipRect": { "left": Math["round"](_0xb79d64["left"]), "right": Math["round"](_0xb79d64["right"]), "width": Math["round"](_0xb79d64["width"]) }, "startX": _0x34f57d, "startY": _0x58f625, "endX": _0x3d126d, "endY": _0x1174fe, "cdpError": _0x431a91 == null ? void 0 : _0x431a91["error"] });
      } else {
        const _0x4bb3e6 = document["getElementById"]("agx-pipeline-overlay-host"), _0x54ece1 = (_0x4bb3e6 == null ? void 0 : _0x4bb3e6["style"]["display"]) ?? "";
        if (_0x4bb3e6) _0x4bb3e6["style"]["display"] = "none";
        try {
          const _0x229aab = document["elementFromPoint"](_0x34f57d, _0x58f625), _0x416213 = _0x229aab || _0x185b99, _0x4abd96 = (_0x158e94, _0x2aa030, _0x2dd4b5) => ({ "bubbles": !![], "cancelable": !![], "pointerId": 1, "pointerType": "mouse", "clientX": _0x158e94, "clientY": _0x2aa030, "screenX": _0x158e94 + window["screenX"], "screenY": _0x2aa030 + window["screenY"], "button": 0, "buttons": _0x2dd4b5, "isPrimary": !![], "width": 1, "height": 1, "pressure": _0x2dd4b5 ? 0.5 : 0 });
          _0x416213["dispatchEvent"](new PointerEvent("pointerover", _0x4abd96(_0x34f57d, _0x58f625, 0))), _0x416213["dispatchEvent"](new PointerEvent("pointerenter", _0x4abd96(_0x34f57d, _0x58f625, 0))), _0x416213["dispatchEvent"](new PointerEvent("pointermove", _0x4abd96(_0x34f57d, _0x58f625, 0))), await sleep(60), _0x416213["dispatchEvent"](new PointerEvent("pointerdown", _0x4abd96(_0x34f57d, _0x58f625, 1))), _0x416213["dispatchEvent"](new MouseEvent("mousedown", { ..._0x4abd96(_0x34f57d, _0x58f625, 1), "button": 0 })), await sleep(80);
          const _0x8259e3 = 12;
          for (let _0x512827 = 1; _0x512827 <= _0x8259e3; _0x512827++) {
            const _0x1762f4 = _0x512827 / _0x8259e3, _0x3ae3a6 = 1 - Math["pow"](1 - _0x1762f4, 2), _0x29b2c1 = Math["round"](_0x34f57d + (_0x3d126d - _0x34f57d) * _0x3ae3a6), _0x213d24 = Math["round"](_0x58f625 + (_0x1174fe - _0x58f625) * _0x3ae3a6);
            document["dispatchEvent"](new PointerEvent("pointermove", _0x4abd96(_0x29b2c1, _0x213d24, 1))), document["dispatchEvent"](new MouseEvent("mousemove", { ..._0x4abd96(_0x29b2c1, _0x213d24, 1), "button": 0 })), await sleep(25);
          }
          await sleep(60), document["dispatchEvent"](new PointerEvent("pointerup", _0x4abd96(_0x3d126d, _0x1174fe, 0))), document["dispatchEvent"](new MouseEvent("mouseup", { ..._0x4abd96(_0x3d126d, _0x1174fe, 0), "button": 0 })), _0x416213["dispatchEvent"](new PointerEvent("pointerleave", _0x4abd96(_0x3d126d, _0x1174fe, 0))), await sleep(200);
          const _0x51eebf = _0x185b99["getBoundingClientRect"](), _0x32a8dd = Math["round"](_0x51eebf["width"] - _0xb79d64["width"]);
          _0x2e1cb3({ "success": !![], "method": "synthetic", "clipsTotal": _0x4856ed["length"], "clipIndexResolved": _0x2ad8c4, "clipId": _0x185b99["getAttribute"]("data-clip-id"), "clipRect": { "left": Math["round"](_0xb79d64["left"]), "right": Math["round"](_0xb79d64["right"]), "width": Math["round"](_0xb79d64["width"]) }, "rectAfter": { "width": Math["round"](_0x51eebf["width"]), "widthDelta": _0x32a8dd }, "startX": _0x34f57d, "startY": _0x58f625, "endX": _0x3d126d, "endY": _0x1174fe, "handleEl": _0x229aab ? _0x229aab["tagName"] + "." + (((_G = _0x229aab["className"]) == null ? void 0 : _G["toString"]()["slice"](0, 30)) || "") : "none" });
        } finally {
          if (_0x4bb3e6) {
            if (_0x54ece1) _0x4bb3e6["style"]["display"] = _0x54ece1;
            else _0x4bb3e6["style"]["removeProperty"]("display");
          }
        }
      }
      break;
    }
    case "FLOW_SELECT_VIDEO_MODEL": {
      const _0x411fee = (_0x8f0575) => {
        const _0x209f01 = _0x8f0575["cloneNode"](!![]);
        return _0x209f01["querySelectorAll"]("i")["forEach"]((_0x2ef5b0) => _0x2ef5b0["remove"]()), (_0x209f01["textContent"] || "")["replace"](/\s+/g, " ")["trim"]();
      }, _0x1cbef9 = ((_H = _0x97e3ad["payload"]) == null ? void 0 : _H["modelId"]) || "", _0x1641d8 = VIDEO_MODEL_LABELS[_0x1cbef9];
      if (!_0x1641d8) {
        _0x2e1cb3({ "success": ![], "error": "unknown modelId: " + _0x1cbef9 });
        break;
      }
      const _0x3403c1 = document["querySelectorAll"]('button[aria-haspopup="menu"]');
      let _0x2b0dfb = null, _0x3a9bcf = "";
      for (const _0x1dda66 of _0x3403c1) {
        const _0x34c059 = _0x411fee(_0x1dda66);
        if (!isVideoModelTrigger(_0x34c059)) continue;
        const _0x5d4a7b = _0x1dda66["getBoundingClientRect"]();
        if (_0x5d4a7b["width"] === 0 || _0x5d4a7b["height"] === 0) continue;
        _0x2b0dfb = _0x1dda66, _0x3a9bcf = _0x34c059;
        break;
      }
      if (!_0x2b0dfb) {
        _0x2e1cb3({ "success": ![], "error": "video model trigger not found (no visible Veo/Omni button)" });
        break;
      }
      if (matchesVideoModel(_0x3a9bcf, _0x1cbef9)) {
        _0x2e1cb3({ "success": !![], "alreadySelected": !![], "current": _0x3a9bcf, "target": _0x1641d8 });
        break;
      }
      simulateClick(_0x2b0dfb), await sleep(700);
      const _0x53938c = document["querySelectorAll"]('[role="menu"][data-state="open"]'), _0x9356e4 = _0x53938c["length"] > 0 ? _0x53938c[_0x53938c["length"] - 1] : null;
      if (!_0x9356e4) {
        _0x2e1cb3({ "success": ![], "error": "submenu did not open after clicking trigger" });
        break;
      }
      const _0x2ab538 = _0x9356e4["querySelectorAll"]('[role="menuitem"], button'), _0x3a7a23 = [];
      let _0xbcf565 = null, _0x3ba544 = "";
      for (const _0x121eb0 of _0x2ab538) {
        const _0xd85d56 = _0x411fee(_0x121eb0);
        if (_0xd85d56 && !_0x3a7a23["includes"](_0xd85d56)) _0x3a7a23["push"](_0xd85d56["slice"](0, 60));
        !_0xbcf565 && matchesVideoModel(_0xd85d56, _0x1cbef9) && (_0xbcf565 = _0x121eb0, _0x3ba544 = _0xd85d56);
      }
      if (!_0xbcf565) {
        _0x2e1cb3({ "success": ![], "error": 'no menuitem matches "' + _0x1641d8 + '"', "available": _0x3a7a23 });
        break;
      }
      simulateClick(_0xbcf565), await sleep(600), _0x2e1cb3({ "success": !![], "previous": _0x3a9bcf, "target": _0x1641d8, "pickedText": _0x3ba544["slice"](0, 80) });
      break;
    }
    case "FLOW_SELECT_VIDEO_DURATION": {
      const _0x11f260 = ((_I = _0x97e3ad["payload"]) == null ? void 0 : _I["seconds"]) || 0;
      if (![4, 6, 8, 10]["includes"](_0x11f260)) {
        _0x2e1cb3({ "success": ![], "error": "invalid seconds " + _0x11f260 + " (must be 4/6/8/10)" });
        break;
      }
      const _0x5d138e = _0x11f260 + "s", _0x232d64 = document["querySelectorAll"]('[role="tab"]');
      let _0x14b5fb = null;
      const _0x481810 = [];
      for (const _0x127227 of _0x232d64) {
        const _0x5bb8cf = (_0x127227["textContent"] || "")["trim"]();
        if (_0x5bb8cf) _0x481810["push"](_0x5bb8cf);
        if (_0x5bb8cf === _0x5d138e) {
          _0x14b5fb = _0x127227;
          break;
        }
      }
      if (!_0x14b5fb) {
        _0x2e1cb3({ "success": ![], "error": 'no duration tab "' + _0x5d138e + '" — ต้องเลือก Omni Flash ก่อน', "available": _0x481810 });
        break;
      }
      const _0x2ccc0f = _0x14b5fb["getAttribute"]("aria-selected") === "true";
      if (_0x2ccc0f) {
        _0x2e1cb3({ "success": !![], "alreadySelected": !![], "duration": _0x5d138e });
        break;
      }
      simulateClick(_0x14b5fb), await sleep(300), _0x2e1cb3({ "success": _0x14b5fb["getAttribute"]("aria-selected") === "true" || !![], "duration": _0x5d138e });
      break;
    }
    case "FLOW_WAIT_CLIP_READY": {
      const _0x17ce5d = ((_J = _0x97e3ad["payload"]) == null ? void 0 : _J["clipIndex"]) ?? -1, _0x11e029 = ((_K = _0x97e3ad["payload"]) == null ? void 0 : _K["timeoutMs"]) ?? 3e5, _0x5636fe = 2500, _0x186951 = 1, _0x568cca = Date["now"]() + _0x11e029;
      let _0x5ea82d = -1, _0x4b7e6b = -1, _0x5ab0cd = "";
      while (Date["now"]() < _0x568cca) {
        const _0x40c995 = Array["from"](document["querySelectorAll"]("[data-clip-id]"));
        if (_0x40c995["length"] === 0) {
          await sleep(_0x5636fe);
          continue;
        }
        const _0x463b70 = _0x17ce5d < 0 ? _0x40c995["length"] + _0x17ce5d : _0x17ce5d, _0x5f16a7 = _0x40c995[_0x463b70];
        if (!_0x5f16a7) {
          _0x2e1cb3({ "success": ![], "error": "clipIndex " + _0x17ce5d + " (resolved " + _0x463b70 + ") out of range (total " + _0x40c995["length"] + ")" });
          break;
        }
        _0x4b7e6b = _0x463b70, _0x5ab0cd = _0x5f16a7["getAttribute"]("data-clip-id") || "";
        const _0x4beb1e = _0x5f16a7["querySelectorAll"]("img")["length"];
        _0x5ea82d = _0x4beb1e;
        if (_0x4beb1e >= _0x186951) {
          _0x2e1cb3({ "success": !![], "ready": !![], "clipIndexResolved": _0x463b70, "clipId": _0x5ab0cd, "imgCount": _0x4beb1e, "elapsedMs": _0x11e029 - (_0x568cca - Date["now"]()) });
          break;
        }
        await sleep(_0x5636fe);
      }
      Date["now"]() >= _0x568cca && _0x2e1cb3({ "success": ![], "error": "timeout " + _0x11e029 + "ms — clip[" + _0x4b7e6b + "] id=" + _0x5ab0cd + " ยังมี " + _0x5ea82d + " imgs (<" + _0x186951 + ")", "imgCount": _0x5ea82d, "clipIndexResolved": _0x4b7e6b, "clipId": _0x5ab0cd });
      break;
    }
    case "FLOW_WAIT_NEW_CLIP_READY": {
      const _0x432f49 = ((_L = _0x97e3ad["payload"]) == null ? void 0 : _L["previousCount"]) ?? -1, _0xfc0ee3 = ((_M = _0x97e3ad["payload"]) == null ? void 0 : _M["timeoutMs"]) ?? 3e5, _0x8c9ab4 = ((_N = _0x97e3ad["payload"]) == null ? void 0 : _N["minFrames"]) ?? 1, _0x3153e2 = ((_O = _0x97e3ad["payload"]) == null ? void 0 : _O["pollMs"]) ?? 2500;
      if (typeof _0x432f49 !== "number" || _0x432f49 < 0) {
        _0x2e1cb3({ "success": ![], "error": "previousCount required (≥0)" });
        break;
      }
      const _0x3818da = Date["now"]() + _0xfc0ee3;
      let _0x29bdff = "waitAppear", _0x322ce9 = -1, _0x59a392 = -1, _0x5fb043 = "", _0xfdf55f = 0;
      while (Date["now"]() < _0x3818da) {
        const _0x360cb7 = Array["from"](document["querySelectorAll"]("[data-clip-id]")), _0x5102a5 = _0x360cb7["length"];
        _0x322ce9 = _0x5102a5;
        if (_0x29bdff === "waitFrames" && _0x5102a5 <= _0x432f49) {
          _0x2e1cb3({ "success": ![], "phase": "disappeared", "error": "clip หายไป (count " + _0x5102a5 + " ≤ previousCount " + _0x432f49 + ") — Flow gen น่าจะ fail", "previousCount": _0x432f49, "currentCount": _0x5102a5 });
          break;
        }
        _0x29bdff === "waitAppear" && _0x5102a5 > _0x432f49 && (_0x29bdff = "waitFrames", _0xfdf55f = Date["now"]());
        if (_0x29bdff === "waitFrames") {
          const _0xac274a = _0x360cb7[_0x360cb7["length"] - 1];
          _0x5fb043 = _0xac274a["getAttribute"]("data-clip-id") || "";
          const _0x2b2c3c = _0xac274a["querySelectorAll"]("img")["length"];
          _0x59a392 = _0x2b2c3c;
          if (_0x2b2c3c >= _0x8c9ab4) {
            _0x2e1cb3({ "success": !![], "ready": !![], "previousCount": _0x432f49, "currentCount": _0x5102a5, "clipId": _0x5fb043, "imgCount": _0x2b2c3c, "appearedAfterMs": _0xfdf55f - (_0x3818da - _0xfc0ee3), "framesAfterMs": Date["now"]() - _0xfdf55f });
            break;
          }
        }
        await sleep(_0x3153e2);
      }
      Date["now"]() >= _0x3818da && _0x2e1cb3({ "success": ![], "phase": _0x29bdff, "error": _0x29bdff === "waitAppear" ? "timeout " + _0xfc0ee3 + "ms — clip ใหม่ไม่ปรากฏ (count ยังเป็น " + _0x322ce9 + ")" : "timeout " + _0xfc0ee3 + "ms — clip ปรากฏแต่ frames ไม่ครบ (" + _0x59a392 + "/" + _0x8c9ab4 + ")", "previousCount": _0x432f49, "currentCount": _0x322ce9, "clipId": _0x5fb043, "imgCount": _0x59a392 });
      break;
    }
    case "FLOW_LIST_CLIPS": {
      const _0x2d718e = Array["from"](document["querySelectorAll"]("[data-clip-id]")), _0x7a6333 = _0x2d718e["map"]((_0x36f11e, _0x3effef) => ({ "idx": _0x3effef, "clipId": _0x36f11e["getAttribute"]("data-clip-id") || "", "widthPx": Math["round"](_0x36f11e["getBoundingClientRect"]()["width"]) }));
      _0x2e1cb3({ "success": !![], "count": _0x2d718e["length"], "clips": _0x7a6333 });
      break;
    }
    case "FLOW_CHECK_GEN_FAILED": {
      const _0x815580 = document["querySelectorAll"]('[id^="history-step-fe_id_"]');
      let _0x2ff85b = "", _0x38ea1e = "";
      for (const _0x712601 of _0x815580) {
        const _0x3c4ae2 = _0x712601["querySelectorAll"]("i.google-symbols");
        let _0x152b4c = ![];
        for (const _0x47c0fb of _0x3c4ae2) {
          if ((_0x47c0fb["textContent"] || "")["trim"]() === "warning") {
            _0x152b4c = !![];
            break;
          }
        }
        if (!_0x152b4c) continue;
        const _0x403937 = _0x712601["textContent"] || "";
        if (/\bFailed\b/i["test"](_0x403937)) {
          _0x2ff85b = _0x712601["id"];
          const _0x422b48 = _0x712601["querySelector"]("p");
          _0x38ea1e = ((_0x422b48 == null ? void 0 : _0x422b48["textContent"]) || "")["trim"]()["slice"](0, 200);
          break;
        }
      }
      _0x2e1cb3({ "success": !![], "failed": !!_0x2ff85b, "stepId": _0x2ff85b, "reason": _0x38ea1e, "totalCards": _0x815580["length"] });
      break;
    }
    case "FLOW_DELETE_FAILED_STEP": {
      const _0x3506cf = ((_P = _0x97e3ad["payload"]) == null ? void 0 : _P["clipIndex"]) ?? -1, _0x20a7f0 = Array["from"](document["querySelectorAll"]("[data-clip-id]"));
      if (_0x20a7f0["length"] === 0) {
        _0x2e1cb3({ "success": ![], "error": "no clip cards found ([data-clip-id])" });
        break;
      }
      const _0x5d743a = _0x3506cf < 0 ? _0x20a7f0["length"] + _0x3506cf : _0x3506cf, _0x365955 = _0x20a7f0[_0x5d743a];
      if (!_0x365955) {
        _0x2e1cb3({ "success": ![], "error": "clipIndex " + _0x3506cf + " (resolved " + _0x5d743a + ") out of range (total " + _0x20a7f0["length"] + ")" });
        break;
      }
      _0x365955["scrollIntoView"]({ "block": "center", "inline": "center", "behavior": "auto" }), await sleep(200);
      const _0x1305ab = _0x365955["getBoundingClientRect"](), _0x350a7a = Math["round"](_0x1305ab["left"] + _0x1305ab["width"] / 2), _0x91b621 = Math["round"](_0x1305ab["top"] + _0x1305ab["height"] / 2), _0x2f3b55 = document["getElementById"]("agx-pipeline-overlay-host"), _0x3af01a = (_0x2f3b55 == null ? void 0 : _0x2f3b55["style"]["display"]) ?? "";
      if (_0x2f3b55) _0x2f3b55["style"]["display"] = "none";
      try {
        const _0x36fe56 = { "bubbles": !![], "cancelable": !![], "view": window, "button": 2, "buttons": 2, "clientX": _0x350a7a, "clientY": _0x91b621, "screenX": _0x350a7a + window["screenX"], "screenY": _0x91b621 + window["screenY"] }, _0x4d11d3 = document["elementFromPoint"](_0x350a7a, _0x91b621), _0x1a0193 = _0x4d11d3 || _0x365955;
        _0x1a0193["dispatchEvent"](new PointerEvent("pointerdown", { ..._0x36fe56, "pointerId": 1, "pointerType": "mouse", "isPrimary": !![] })), _0x1a0193["dispatchEvent"](new MouseEvent("mousedown", _0x36fe56)), _0x1a0193["dispatchEvent"](new MouseEvent("contextmenu", _0x36fe56)), _0x1a0193["dispatchEvent"](new MouseEvent("mouseup", _0x36fe56)), _0x1a0193["dispatchEvent"](new PointerEvent("pointerup", { ..._0x36fe56, "pointerId": 1, "pointerType": "mouse", "isPrimary": !![] }));
        const _0x422a27 = Date["now"]() + 2e3;
        let _0x44d5bf = null;
        while (Date["now"]() < _0x422a27) {
          _0x44d5bf = document["querySelector"]('[data-context-menu-content="true"][data-state="open"]');
          if (_0x44d5bf) break;
          await sleep(50);
        }
        if (!_0x44d5bf) {
          _0x2e1cb3({ "success": ![], "error": 'context menu did not open (selector [data-context-menu-content="true"][data-state="open"])', "clipIndexResolved": _0x5d743a });
          return;
        }
        const _0x4cdae7 = _0x44d5bf["querySelectorAll"]('button[role="menuitem"]');
        let _0x893399 = null;
        for (const _0x38d302 of _0x4cdae7) {
          if (_0x38d302["hasAttribute"]("data-disabled")) continue;
          if (_0x38d302["getAttribute"]("aria-disabled") === "true") continue;
          const _0x37e559 = _0x38d302["querySelector"]("i"), _0x26c4d2 = ((_0x37e559 == null ? void 0 : _0x37e559["textContent"]) || "")["trim"](), _0x37b432 = _0x38d302["cloneNode"](!![]);
          _0x37b432["querySelectorAll"]("i")["forEach"]((_0x2c1257) => _0x2c1257["remove"]());
          const _0x58dbea = (_0x37b432["textContent"] || "")["trim"]();
          if (_0x26c4d2 === "delete" && /\bDelete\b/i["test"](_0x58dbea)) {
            _0x893399 = _0x38d302;
            break;
          }
        }
        if (!_0x893399) {
          _0x2e1cb3({ "success": ![], "error": "Delete menuitem not found in context menu", "clipIndexResolved": _0x5d743a });
          return;
        }
        simulateClick(_0x893399), await sleep(500), _0x2e1cb3({ "success": !![], "method": "contextmenu-delete", "clipsTotal": _0x20a7f0["length"], "clipIndexResolved": _0x5d743a, "clipId": _0x365955["getAttribute"]("data-clip-id") });
      } finally {
        if (_0x2f3b55) {
          if (_0x3af01a) _0x2f3b55["style"]["display"] = _0x3af01a;
          else _0x2f3b55["style"]["removeProperty"]("display");
        }
      }
      break;
    }
    case "FLOW_CLICK_CLIP": {
      const _0x1daabc = ((_Q = _0x97e3ad["payload"]) == null ? void 0 : _Q["clipIndex"]) ?? -1, _0x4ad7f5 = !!((_R = _0x97e3ad["payload"]) == null ? void 0 : _R["useCdp"]), _0x48b41d = Array["from"](document["querySelectorAll"]("[data-clip-id]"));
      if (_0x48b41d["length"] === 0) {
        _0x2e1cb3({ "success": ![], "error": "no clip cards found ([data-clip-id])" });
        break;
      }
      const _0x39859c = _0x1daabc < 0 ? _0x48b41d["length"] + _0x1daabc : _0x1daabc, _0x41ec78 = _0x48b41d[_0x39859c];
      if (!_0x41ec78) {
        _0x2e1cb3({ "success": ![], "error": "clipIndex " + _0x1daabc + " (resolved " + _0x39859c + ") out of range (total " + _0x48b41d["length"] + ")" });
        break;
      }
      _0x41ec78["scrollIntoView"]({ "block": "center", "inline": "center", "behavior": "auto" }), await sleep(200);
      const _0x22087d = _0x41ec78["getBoundingClientRect"](), _0x42de04 = Math["round"](_0x22087d["left"] + _0x22087d["width"] / 2), _0x321e35 = Math["round"](_0x22087d["top"] + _0x22087d["height"] / 2);
      if (_0x4ad7f5) {
        const _0xe82295 = _0x41ec78["getAttribute"]("data-clip-id") || "", _0x4e58de = _0xe82295 ? '[data-clip-id="' + CSS["escape"](_0xe82295) + '"]' : void 0, _0x4c6e61 = document["getElementById"]("agx-pipeline-overlay-host"), _0x378109 = (_0x4c6e61 == null ? void 0 : _0x4c6e61["style"]["display"]) ?? "";
        if (_0x4c6e61) _0x4c6e61["style"]["display"] = "none";
        let _0xf16645 = null;
        try {
          _0xf16645 = await chrome["runtime"]["sendMessage"]({ "type": "FLOW_DEBUGGER_CLICK", "payload": { "selector": _0x4e58de, "x": _0x42de04, "y": _0x321e35 } });
        } finally {
          if (_0x4c6e61) {
            if (_0x378109) _0x4c6e61["style"]["display"] = _0x378109;
            else _0x4c6e61["style"]["removeProperty"]("display");
          }
        }
        _0x2e1cb3({ "success": !!(_0xf16645 == null ? void 0 : _0xf16645["success"]), "method": "cdp", "clipsTotal": _0x48b41d["length"], "clipIndexResolved": _0x39859c, "clipId": _0xe82295, "clickedAt": (_0xf16645 == null ? void 0 : _0xf16645["success"]) ? { "x": _0xf16645["x"], "y": _0xf16645["y"] } : { "x": _0x42de04, "y": _0x321e35 }, "cdpError": _0xf16645 == null ? void 0 : _0xf16645["error"] });
      } else simulateClick(_0x41ec78), _0x2e1cb3({ "success": !![], "method": "synthetic", "clipsTotal": _0x48b41d["length"], "clipIndexResolved": _0x39859c, "clipId": _0x41ec78["getAttribute"]("data-clip-id"), "clickedAt": { "x": _0x42de04, "y": _0x321e35 } });
      break;
    }
    case "FLOW_EXTEND_TYPE_PROMPT": {
      const _0x5748c8 = ((_S = _0x97e3ad["payload"]) == null ? void 0 : _S["text"]) || "";
      if (!_0x5748c8) {
        _0x2e1cb3({ "success": ![], "error": "text required" });
        break;
      }
      const _0x20aebd = (_0x230371) => {
        if (_0x230371["offsetParent"] === null) return ![];
        const _0x1ef999 = _0x230371["getBoundingClientRect"]();
        return _0x1ef999["width"] > 0 && _0x1ef999["height"] > 0;
      }, _0x27e340 = '[data-slate-editor="true"], div[contenteditable="true"][role="textbox"], textarea', _0xcae494 = document["querySelector"]('[role="dialog"][data-state="open"]');
      let _0x30c5ce = null;
      if (_0xcae494) {
        const _0x1972de = _0xcae494["querySelector"](_0x27e340);
        if (_0x1972de && _0x20aebd(_0x1972de)) _0x30c5ce = _0x1972de;
      }
      if (!_0x30c5ce) {
        const _0x11f033 = Array["from"](document["querySelectorAll"](_0x27e340));
        _0x30c5ce = _0x11f033["find"](_0x20aebd) || null;
      }
      if (!_0x30c5ce) {
        _0x2e1cb3({ "success": ![], "error": "no visible prompt editor found (dialog + document checked)" });
        break;
      }
      let _0x5a667c = ![];
      if (_0x30c5ce["matches"]('[data-slate-editor="true"]')) _0x5a667c = await typeIntoSlate(_0x30c5ce, _0x5748c8);
      else _0x30c5ce["tagName"] === "TEXTAREA" ? (_0x30c5ce["focus"](), _0x30c5ce["value"] = _0x5748c8, _0x30c5ce["dispatchEvent"](new Event("input", { "bubbles": !![] })), _0x30c5ce["dispatchEvent"](new Event("change", { "bubbles": !![] })), _0x5a667c = !![]) : (_0x30c5ce["focus"](), _0x30c5ce["textContent"] = _0x5748c8, _0x30c5ce["dispatchEvent"](new InputEvent("input", { "bubbles": !![], "inputType": "insertText", "data": _0x5748c8 })), _0x5a667c = !![]);
      _0x2e1cb3({ "success": _0x5a667c, "editorTag": _0x30c5ce["tagName"], "editorIsSlate": _0x30c5ce["matches"]('[data-slate-editor="true"]'), "currentText": (_T = _0x30c5ce["textContent"]) == null ? void 0 : _T["trim"]()["slice"](0, 80) });
      break;
    }
    case "FLOW_EXTEND_CLICK_CREATE": {
      const _0x15530e = (_0x3156c6) => {
        if (_0x3156c6["offsetParent"] === null) return ![];
        const _0x1bae86 = _0x3156c6["getBoundingClientRect"]();
        return _0x1bae86["width"] > 0 && _0x1bae86["height"] > 0;
      }, _0x26e2ba = () => {
        var _a2;
        const _0x2590ed = document["querySelector"]('[role="dialog"][data-state="open"]'), _0x57162a = _0x2590ed || document, _0x5e0777 = _0x57162a["querySelectorAll"]("button");
        for (const _0x5ee337 of _0x5e0777) {
          if (_0x5ee337["disabled"] || _0x5ee337["getAttribute"]("aria-disabled") === "true") continue;
          const _0x20d9d0 = _0x5ee337["querySelector"]("i");
          if (((_a2 = _0x20d9d0 == null ? void 0 : _0x20d9d0["textContent"]) == null ? void 0 : _a2["trim"]()) !== "arrow_forward") continue;
          if (!_0x15530e(_0x5ee337)) continue;
          return _0x5ee337;
        }
        return null;
      }, _0x57e374 = Date["now"]() + 5e3;
      let _0x383835 = null;
      while (Date["now"]() < _0x57e374) {
        _0x383835 = _0x26e2ba();
        if (_0x383835) break;
        await sleep(250);
      }
      if (!_0x383835) {
        _0x2e1cb3({ "success": ![], "error": "no enabled Create (arrow_forward) button found after 5s — ลอง type prompt ก่อน" });
        break;
      }
      const _0xf611bd = "cdp-create-" + Date["now"]();
      _0x383835["setAttribute"]("data-agx-cdp-marker", _0xf611bd);
      const _0x404ea7 = '[data-agx-cdp-marker="' + _0xf611bd + '"]', _0xb3877d = _0x383835["getBoundingClientRect"](), _0x181b24 = Math["round"](_0xb3877d["left"] + _0xb3877d["width"] / 2), _0x194164 = Math["round"](_0xb3877d["top"] + _0xb3877d["height"] / 2), _0x14ea1e = document["getElementById"]("agx-pipeline-overlay-host"), _0x30bfa1 = (_0x14ea1e == null ? void 0 : _0x14ea1e["style"]["display"]) ?? "", _0x27cbde = !!_0x14ea1e;
      _0x14ea1e && (_0x14ea1e["style"]["display"] = "none", log["info"]("[FLOW_EXTEND_CLICK_CREATE] hide overlay ก่อน CDP click"));
      let _0x2ac561 = null;
      try {
        _0x2ac561 = await chrome["runtime"]["sendMessage"]({ "type": "FLOW_DEBUGGER_CLICK", "payload": { "selector": _0x404ea7, "x": _0x181b24, "y": _0x194164 } });
      } finally {
        if (_0x14ea1e) {
          if (_0x30bfa1) _0x14ea1e["style"]["display"] = _0x30bfa1;
          else _0x14ea1e["style"]["removeProperty"]("display");
          log["info"]("[FLOW_EXTEND_CLICK_CREATE] restore overlay");
        }
        _0x383835["removeAttribute"]("data-agx-cdp-marker");
      }
      _0x2e1cb3({ "success": !!(_0x2ac561 == null ? void 0 : _0x2ac561["success"]), "clickedAt": (_0x2ac561 == null ? void 0 : _0x2ac561["success"]) ? { "x": _0x2ac561["x"], "y": _0x2ac561["y"] } : { "x": _0x181b24, "y": _0x194164 }, "coordsRemeasured": !!((_0x2ac561 == null ? void 0 : _0x2ac561["success"]) && (_0x2ac561["x"] !== _0x181b24 || _0x2ac561["y"] !== _0x194164)), "overlayWasHidden": _0x27cbde, "cdpError": _0x2ac561 == null ? void 0 : _0x2ac561["error"] });
      break;
    }
    default:
      _0x2e1cb3({ "error": "Unknown message type: " + _0x97e3ad["type"] });
  }
}
const SAFETY_TIMEOUT = 10 * 6e4;
let preGenTileIds = /* @__PURE__ */ new Set();
function snapshotTileIds() {
  const _0x20d241 = /* @__PURE__ */ new Set();
  return document["querySelectorAll"]("[data-tile-id]")["forEach"]((_0x1fdbae) => {
    const _0x1f9572 = _0x1fdbae["getAttribute"]("data-tile-id");
    if (_0x1f9572) _0x20d241["add"](_0x1f9572);
  }), _0x20d241;
}
async function captureNewUploadedTile(_0x3cd916) {
  for (let _0x2c1a70 = 0; _0x2c1a70 < 8; _0x2c1a70++) {
    let _0x53bf83 = null;
    for (const _0x376a77 of Array["from"](document["querySelectorAll"]("[data-tile-id]"))) {
      const _0x509bc8 = _0x376a77["getAttribute"]("data-tile-id");
      if (_0x509bc8 && !_0x3cd916["has"](_0x509bc8)) {
        _0x53bf83 = _0x509bc8;
        break;
      }
    }
    if (_0x53bf83) {
      let _0x106043 = null;
      const _0x35c7d2 = document["querySelector"]('[data-tile-id="' + CSS["escape"](_0x53bf83) + '"] img');
      if ((_0x35c7d2 == null ? void 0 : _0x35c7d2["src"]) && /^(https?:|blob:)/["test"](_0x35c7d2["src"])) _0x106043 = _0x35c7d2["src"];
      return { "tileId": _0x53bf83, "url": _0x106043 };
    }
    if (_0x2c1a70 < 7) await sleep(500);
  }
  return log["warn"]("captureNewUploadedTile — no new data-tile-id appeared after upload (will rely on FLOW_ATTACH_LATEST_IMAGE fallback later)"), { "tileId": null, "url": null };
}
async function waitForNewTileId(_0x63b497, _0x148d7c) {
  const _0x12ae7b = Date["now"]() + _0x148d7c, _0x127470 = Math["ceil"](_0x148d7c / 1e3);
  let _0x4daadf = 0, _0x4fc0c5 = 0, _0x109da7 = ![];
  try {
    while (Date["now"]() < _0x12ae7b) {
      for (const _0x47b0ee of document["querySelectorAll"]("[data-tile-id]")) {
        const _0x20dc5c = _0x47b0ee["getAttribute"]("data-tile-id") || "";
        if (!_0x20dc5c || _0x63b497["has"](_0x20dc5c)) continue;
        if (getTileMediaUrl(_0x47b0ee) !== null) continue;
        if (isUnusualActivityTile(_0x47b0ee)) continue;
        return _0x20dc5c;
      }
      const _0x47d2b9 = Date["now"](), _0x296166 = Math["max"](0, Math["ceil"]((_0x12ae7b - _0x47d2b9) / 1e3));
      _0x47d2b9 - _0x4fc0c5 >= 1e3 && (relayOverlayCountdown(_0x296166, _0x127470, "รอ Veo สร้างคลิป"), _0x4fc0c5 = _0x47d2b9), _0x47d2b9 - _0x4daadf >= 1e4 && (chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": "⏳ รอ Veo สร้างคลิป... (timeout เหลือ ~" + _0x296166 + "s)", "replace": _0x109da7 } })["catch"](() => {
      }), _0x4daadf = _0x47d2b9, _0x109da7 = !![]), await sleep(500);
    }
    return null;
  } finally {
    relayOverlayCountdown(0, _0x127470, "รอ Veo สร้างคลิป");
  }
}
async function waitForGenerationResult(_0x3ad8ce) {
  log["info"]("Waiting for generation result (tiles before: " + preGenTileIds["size"] + ")");
  const _0x51a45e = Date["now"](), _0x413cd9 = _0x3ad8ce ?? SAFETY_TIMEOUT, _0x4ea637 = Math["min"](5 * 6e4, Math["max"](6e4, Math["floor"](_0x413cd9 * 0.8)));
  log["info"]("waitForNewTileId timeout: " + _0x4ea637 + "ms");
  const _0x33bcfc = await waitForNewTileId(preGenTileIds, _0x4ea637);
  if (!_0x33bcfc) return { "success": ![], "error": "no_new_tile" };
  log["info"]("Target tile appeared: " + _0x33bcfc["slice"](0, 20) + " — waiting for media..."), chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": "⏳ คลิปกำลังประมวลผล รอ media...", "replace": !![] } })["catch"](() => {
  });
  let _0x4cddb5 = 0, _0x5a068d = "", _0x8cb8c9 = Date["now"](), _0xfff8b5 = 0;
  const _0x4832d1 = Math["ceil"](SAFETY_TIMEOUT / 1e3);
  try {
    while (Date["now"]() - _0x51a45e < SAFETY_TIMEOUT) {
      if (stopRequested) return log["warn"]("Stop requested — aborting wait"), { "success": ![], "error": "stopped_by_user" };
      const _0x1da69b = Date["now"](), _0x2bb2da = Math["floor"]((_0x1da69b - _0x51a45e) / 1e3), _0x140723 = Math["max"](0, Math["ceil"]((SAFETY_TIMEOUT - (_0x1da69b - _0x51a45e)) / 1e3));
      _0x1da69b - _0xfff8b5 >= 1e3 && (relayOverlayCountdown(_0x140723, _0x4832d1, "คลิปกำลังประมวลผล"), _0xfff8b5 = _0x1da69b);
      _0x1da69b - _0x8cb8c9 >= 1e4 && (chrome["runtime"]["sendMessage"]({ "type": "PIPELINE_LOG", "payload": { "level": "info", "message": "⏳ คลิปกำลังประมวลผล... (ผ่านไป " + _0x2bb2da + "s, timeout เหลือ ~" + _0x140723 + "s)", "replace": !![] } })["catch"](() => {
      }), _0x8cb8c9 = _0x1da69b);
      const _0x11a41b = document["querySelector"]('[data-tile-id="' + _0x33bcfc + '"]');
      if (_0x11a41b && isUnusualActivityTile(_0x11a41b)) {
        const _0x3da21b = extractTileErrorMessage(_0x11a41b);
        return log["warn"]("Generation failed tile detected — text=" + ((_0x3da21b == null ? void 0 : _0x3da21b["slice"](0, 80)) || "<empty>")), { "success": ![], "error": "generation_failed", "errorText": _0x3da21b };
      }
      if (_0x11a41b) {
        const _0x4fc2ae = getTileMediaUrl(_0x11a41b);
        if (_0x4fc2ae) {
          if (_0x4cddb5 === 0) _0x4cddb5 = Date["now"](), _0x5a068d = _0x4fc2ae, log["info"]("Media detected on target tile, verifying stability...");
          else {
            if (Date["now"]() - _0x4cddb5 >= 3e3) return log["info"]("Generation result confirmed: " + _0x4fc2ae["slice"](0, 60) + " (tile=" + _0x33bcfc["slice"](0, 20) + ")"), { "success": !![], "imageUrl": _0x5a068d, "tileId": _0x33bcfc };
          }
        } else _0x4cddb5 > 0 && (_0x4cddb5 = 0, _0x5a068d = "");
      }
      await sleepUnlessStop(3e3);
    }
    return { "success": ![], "error": "Safety timeout (10 min) reached" };
  } finally {
    relayOverlayCountdown(0, _0x4832d1, "คลิปกำลังประมวลผล");
  }
}
function extractTileErrorMessage(_0x50032a) {
  const _0x3f0b41 = [], _0x2f3289 = document["createTreeWalker"](_0x50032a, NodeFilter["SHOW_TEXT"], { "acceptNode"(_0x37b6c7) {
    var _a;
    let _0x53076d = _0x37b6c7["parentElement"];
    while (_0x53076d && _0x53076d !== _0x50032a) {
      const _0x553937 = (_a = _0x53076d["tagName"]) == null ? void 0 : _a["toLowerCase"]();
      if (_0x553937 === "button" || _0x553937 === "a" || _0x553937 === "i") return NodeFilter["FILTER_REJECT"];
      _0x53076d = _0x53076d["parentElement"];
    }
    return NodeFilter["FILTER_ACCEPT"];
  } });
  let _0x24ae34;
  while (_0x24ae34 = _0x2f3289["nextNode"]()) {
    const _0x3d93c1 = (_0x24ae34["textContent"] || "")["trim"]();
    if (_0x3d93c1["length"] >= 8) _0x3f0b41["push"](_0x3d93c1);
  }
  if (_0x3f0b41["length"] === 0) return void 0;
  return _0x3f0b41["sort"]((_0x31922b, _0x2b15b4) => _0x2b15b4["length"] - _0x31922b["length"]), _0x3f0b41[0]["slice"](0, 300);
}
function isUnusualActivityTile(_0x5b0531) {
  var _a, _b;
  const _0x191f58 = ((_a = _0x5b0531["textContent"]) == null ? void 0 : _a["toLowerCase"]()) || "";
  if (_0x191f58["includes"]("unusual activity") || _0x191f58["includes"]("we noticed")) return !![];
  if (!_0x191f58["includes"]("failed")) return ![];
  const _0x455a1a = findButtonInTile(_0x5b0531, "Reuse Prompt");
  if (!_0x455a1a) return ![];
  let _0x4d305f = _0x455a1a["parentElement"];
  while (_0x4d305f && _0x4d305f !== _0x5b0531) {
    if (((_b = _0x4d305f["style"]) == null ? void 0 : _b["opacity"]) === "0") return ![];
    _0x4d305f = _0x4d305f["parentElement"];
  }
  return !![];
}
function findButtonInTile(_0x4985bf, _0x3133b7) {
  var _a;
  const _0x314903 = _0x4985bf["querySelectorAll"]("button");
  for (const _0x13997e of _0x314903) {
    const _0x1e0546 = _0x13997e["querySelectorAll"]("span");
    for (const _0x4eb94b of _0x1e0546) {
      if (((_a = _0x4eb94b["textContent"]) == null ? void 0 : _a["trim"]()) === _0x3133b7) return _0x13997e;
    }
  }
  return null;
}
function getTileMediaUrl(_0x490d95) {
  const _0x130bff = _0x490d95["querySelector"]("img");
  if ((_0x130bff == null ? void 0 : _0x130bff["src"]) && _0x130bff["complete"] && _0x130bff["naturalWidth"] > 100) {
    const _0x1ce7bf = _0x130bff["src"]["includes"]("getMediaUrlRedirect") || _0x130bff["src"]["includes"]("/fx/api/") || _0x130bff["src"]["startsWith"]("blob:") || _0x130bff["alt"] === "Generated image";
    if (_0x1ce7bf) return _0x130bff["src"];
  }
  const _0x291be4 = _0x490d95["querySelector"]('img[alt="Video thumbnail"]');
  if ((_0x291be4 == null ? void 0 : _0x291be4["src"]) && _0x291be4["complete"] && _0x291be4["naturalWidth"] > 0) {
    const _0x364c07 = _0x490d95["querySelector"]("video");
    if (_0x364c07 == null ? void 0 : _0x364c07["src"]) return _0x364c07["src"];
  }
  return null;
}
function sleep(_0x514764) {
  return new Promise((_0x14ed24) => setTimeout(_0x14ed24, _0x514764));
}
async function sleepUnlessStop(_0x5135bb) {
  const _0x138d92 = Date["now"]() + _0x5135bb;
  while (Date["now"]() < _0x138d92 && !stopRequested) {
    await sleep(Math["min"](200, _0x138d92 - Date["now"]()));
  }
}
async function init() {
  if (window["location"]["hostname"]["includes"]("accounts.google")) {
    const _0x45fa14 = document["referrer"] || "";
    _0x45fa14["includes"]("labs.google") && (log["warn"]("Redirected to Google login from Flow"), chrome["runtime"]["sendMessage"]({ "type": "FLOW_NOT_LOGGED_IN", "payload": { "url": window["location"]["href"] } }));
    return;
  }
  log["info"]("Flow content script loaded", { "url": window["location"]["href"] }), patchFileInputPersistence(), patchUploadImageDivs(), installNoticeDialogObserver(), isReady = !![], chrome["runtime"]["sendMessage"]({ "type": "FLOW_CONTENT_READY", "payload": { "url": window["location"]["href"] } });
}
document["readyState"] === "loading" ? document["addEventListener"]("DOMContentLoaded", init) : init();
