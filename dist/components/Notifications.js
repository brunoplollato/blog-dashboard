"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
function Notifications() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative cursor-pointer", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-lime-400 h-4 w-4 rounded-full flex items-center justify-center text-xs text-center text-indigo-900 absolute bottom-4 left-2", children: "3" }), (0, jsx_runtime_1.jsx)(fi_1.FiInbox, { className: "h-5 w-5 text-indigo-900" })] }));
}
exports.default = Notifications;
