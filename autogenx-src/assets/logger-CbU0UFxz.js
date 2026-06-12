var LogLevel = ((_0x46fa9e) => {
  return _0x46fa9e[_0x46fa9e["DEBUG"] = 0] = "DEBUG", _0x46fa9e[_0x46fa9e["INFO"] = 1] = "INFO", _0x46fa9e[_0x46fa9e["WARN"] = 2] = "WARN", _0x46fa9e[_0x46fa9e["ERROR"] = 3] = "ERROR", _0x46fa9e;
})(LogLevel || {});
const LEVEL_LABELS = { [0]: "DEBUG", [1]: "INFO", [2]: "WARN", [3]: "ERROR" };
let globalLevel = !![] ? 3 + 1 : 0;
const RING_BUFFER_SIZE = 300, ringBuffer = [];
function pushBuffer(_0x149d55, _0xf4b375, _0xd33faf, _0x35a874) {
  let _0x556beb;
  if (_0x35a874 !== void 0) {
    try {
      _0x556beb = JSON["stringify"](_0x35a874);
    } catch {
      _0x556beb = String(_0x35a874);
    }
    if (_0x556beb["length"] > 800) _0x556beb = _0x556beb["slice"](0, 800) + "…";
  }
  ringBuffer["push"]({ "ts": Date["now"](), "level": LEVEL_LABELS[_0x149d55], "tag": _0xf4b375, "msg": _0xd33faf, "data": _0x556beb });
  if (ringBuffer["length"] > RING_BUFFER_SIZE) ringBuffer["shift"]();
}
function getLoggerBuffer() {
  return ringBuffer["slice"]();
}
class Logger {
  constructor(_0x30198d) {
    this["tag"] = _0x30198d;
  }
  ["debug"](_0x52f722, _0x5374f9) {
    this["log"](0, _0x52f722, _0x5374f9);
  }
  ["info"](_0x362e47, _0x398bd1) {
    this["log"](1, _0x362e47, _0x398bd1);
  }
  ["warn"](_0x3045f8, _0x348890) {
    this["log"](2, _0x3045f8, _0x348890);
  }
  ["error"](_0x4fc9c6, _0x3d571a) {
    this["log"](3, _0x4fc9c6, _0x3d571a);
  }
  ["log"](_0x3cde4d, _0x2d8c91, _0x485988) {
    pushBuffer(_0x3cde4d, this["tag"], _0x2d8c91, _0x485988);
    if (_0x3cde4d < globalLevel) return;
    const _0x10d626 = LEVEL_LABELS[_0x3cde4d];
    "%c[" + _0x10d626 + "][" + this["tag"] + "]";
  }
}
function createLogger(_0x14d94e) {
  return new Logger(_0x14d94e);
}
export {
  createLogger as c,
  getLoggerBuffer as g
};
