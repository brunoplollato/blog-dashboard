"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar = require('../assets/images/avatar.png');
const useOutsideClick_1 = __importDefault(require("../hooks/useOutsideClick"));
const DropDown_1 = __importDefault(require("./DropDown"));
const react_1 = require("react");
function UserMenu() {
    const [isActive, setActive] = (0, react_1.useState)(false);
    const menuEl = (0, react_1.useRef)(null);
    const handleDropDown = () => {
        setActive((prev) => !prev);
    };
    (0, useOutsideClick_1.default)(menuEl, () => {
        if (isActive)
            setActive(false);
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", onClick: handleDropDown, ref: menuEl, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 bg-indigo-200 rounded-full p-1 cursor-pointer w-28", children: [(0, jsx_runtime_1.jsx)("div", { className: "rounded-full w-8 h-8", children: (0, jsx_runtime_1.jsx)("img", { src: avatar, alt: "user avatar", className: "border border-indigo-500 rounded-full" }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-indigo-800 font-semibold text-xs", children: "Victoria" })] }), (0, jsx_runtime_1.jsx)(DropDown_1.default, { isActive: isActive })] }));
}
exports.default = UserMenu;
