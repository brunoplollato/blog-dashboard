"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function FormExtra() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsx)("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "remember-me", className: "ml-1 block text-xs text-gray-900 cursor-pointer", children: "Remember me" })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-xs", children: (0, jsx_runtime_1.jsx)("a", { href: "#", className: "text-xs text-indigo-600 hover:text-indigo-500", children: "Forgot your password?" }) })] }));
}
exports.default = FormExtra;
