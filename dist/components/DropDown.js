"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
const MenuItem_1 = __importDefault(require("./MenuItem"));
const useAuth_1 = __importDefault(require("../hooks/useAuth"));
function DropDown({ isActive }) {
    const { logoutUser } = (0, useAuth_1.default)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isActive && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute right-0 top-11 bg-white w-56 py-2 gap-3 flex flex-col rounded-md border border-slate-300 drop-shadow-md", children: [(0, jsx_runtime_1.jsx)("ul", { className: "px-6 py-1 gap-3 flex flex-col", children: (0, jsx_runtime_1.jsx)(MenuItem_1.default, { icon: (0, jsx_runtime_1.jsx)(fi_1.FiUser, { className: "h-4 w-4" }), text: "My profile", to: "/profile", customClass: "text-sm gap-2" }) }), (0, jsx_runtime_1.jsxs)("ul", { className: "px-6 py-3 gap-3 flex flex-col border-t", children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, { icon: (0, jsx_runtime_1.jsx)(fi_1.FiSettings, { className: "h-4 w-4" }), text: "Account settings", to: "/account", customClass: "text-sm gap-2" }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: "", onClick: logoutUser, children: (0, jsx_runtime_1.jsxs)("div", { className: `flex items-center text-sm gap-2`, children: [(0, jsx_runtime_1.jsx)(fi_1.FiLogOut, { className: "h-4 w-4" }), (0, jsx_runtime_1.jsx)("p", { children: "Logout" })] }) })] })] })) }));
}
exports.default = DropDown;
