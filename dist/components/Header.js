"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const logo = require('../assets/images/logo.svg');
function Header({ heading, paragraph, linkName, linkUrl = '#', }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("img", { alt: "", className: "h-14 w-14", src: logo }) }), (0, jsx_runtime_1.jsx)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: heading }), (0, jsx_runtime_1.jsxs)("p", { className: "text-center text-sm text-gray-600 mt-5", children: [paragraph, ' ', (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: linkUrl, className: "font-medium text-indigo-600 hover:text-indigo-500", children: linkName })] })] }));
}
exports.default = Header;
