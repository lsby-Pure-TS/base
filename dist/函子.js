"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.函子 = void 0;
const ____1 = require("./\u7C7B\u578B\u4EE3\u8868");
exports.函子 = Symbol();
var map = (f) => (a) => {
    return a[____1.类型代表].map(f)(a);
};
exports.map = map;
//# sourceMappingURL=%E5%87%BD%E5%AD%90.js.map