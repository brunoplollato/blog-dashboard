"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Breadcrumb_1 = __importDefault(require("../../../components/Breadcrumb"));
function UserProfile() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col p-5 bg-gray-300", children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.default, { items: [
                    { text: 'home', link: '/dashboard' },
                    { text: 'user', link: '/user/profile' },
                    { text: 'profile', link: '' },
                ] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold mb-5 flex", children: "Profile" }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-5 w-full", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm", children: "user profile" }) }) })] }));
}
exports.default = UserProfile;
