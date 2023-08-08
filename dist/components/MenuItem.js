"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fi_1 = require("react-icons/fi");
const react_router_dom_1 = require("react-router-dom");
function MenuItem({ icon, text, to, customClass = '', isSelected, children, }) {
    const [isActive, setActive] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("li", { onClick: () => setActive((prev) => !prev), title: text, children: [children && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: `flex items-center ${customClass}`, children: [icon, (0, jsx_runtime_1.jsx)("p", { children: text }), (0, jsx_runtime_1.jsx)("div", { className: "ml-auto list-item-arrow", children: !isActive ? ((0, jsx_runtime_1.jsx)(fi_1.FiChevronRight, { className: "h-4 w-4 text-indigo-700" })) : ((0, jsx_runtime_1.jsx)(fi_1.FiChevronDown, { className: "h-4 w-4 text-indigo-700" })) })] }), isActive && children] })), !children && ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: `flex items-center ${customClass}`, to: to, children: [icon, (0, jsx_runtime_1.jsx)("p", { className: "list-item", children: text })] }))] }));
}
exports.default = MenuItem;
