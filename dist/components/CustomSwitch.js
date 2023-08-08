"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_switch_1 = __importDefault(require("react-switch"));
function CustomSwitch({ handleChange, checked, labelFor, labelText, hasLabel, name, id, isRequired, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: labelFor, className: `${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`, children: labelText }), (0, jsx_runtime_1.jsx)(react_switch_1.default, { onChange: handleChange, name: name, id: id, checked: checked, onColor: "#22C55E", required: isRequired })] }));
}
exports.default = CustomSwitch;
