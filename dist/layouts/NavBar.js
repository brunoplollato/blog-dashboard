"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Logo_1 = __importDefault(require("../components/Logo"));
const Notifications_1 = __importDefault(require("../components/Notifications"));
const UserMenu_1 = __importDefault(require("../components/UserMenu"));
function NavBar() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between bg-white z-50 w-full px-5 min-h-[60px] drop-shadow-md", children: [(0, jsx_runtime_1.jsx)(Logo_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4", children: [(0, jsx_runtime_1.jsx)(Notifications_1.default, {}), (0, jsx_runtime_1.jsx)(UserMenu_1.default, {})] })] }));
}
exports.default = NavBar;
