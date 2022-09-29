"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = exports.单子 = void 0;
const ____1 = require("./\u7C7B\u578B\u4EE3\u8868");
exports.单子 = Symbol();
var bind = (a) => (f) => {
    return a[____1.类型代表].bind(a)(f);
};
exports.bind = bind;
//# sourceMappingURL=%E5%8D%95%E5%AD%90.js.map