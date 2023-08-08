"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
function Searchbar() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(fi_1.FiSearch, { className: "h-5 w-5 text-white absolute inset-y-1/4 left-4" }), (0, jsx_runtime_1.jsx)("input", { className: "bg-transparent border border-slate-400 rounded-3xl border-radius-10 h-10 w-96 px-10", type: "search", placeholder: "Search", name: "search" })] }));
}
exports.default = Searchbar;
