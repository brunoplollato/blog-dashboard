"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useAuth_1 = __importDefault(require("../hooks/useAuth"));
const image = require('../assets/images/party-hat.png');
function EmailVerified() {
    const { registerUser } = (0, useAuth_1.default)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: (0, jsx_runtime_1.jsx)("div", { className: "w-72 flex justify-center", children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: "Email Verified", className: "h-32 w-auto rotate-[25deg]" }) }) }));
}
exports.default = EmailVerified;
