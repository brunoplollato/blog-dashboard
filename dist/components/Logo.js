"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const logo = require('../assets/images/logo.svg');
function Logo() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4", children: [(0, jsx_runtime_1.jsx)("img", { src: logo, alt: "logo" }), (0, jsx_runtime_1.jsx)("p", { className: "text-indigo-700 font-bold text-xl uppercase", children: "Limitless" })] }));
}
exports.default = Logo;
