"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const creatable_1 = __importDefault(require("react-select/creatable"));
const CustomSelect = ({ options, isLoading, handleCreate, onChange, value, name, id, labelFor, hasLabel, labelText, error, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col mb-4", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: labelFor, className: `${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`, children: labelText }), (0, jsx_runtime_1.jsx)(creatable_1.default, { isMulti: true, name: name, id: id, isDisabled: isLoading, isLoading: isLoading, onChange: onChange, onCreateOption: handleCreate, options: options, value: value, styles: {
                    control: (baseStyles) => ({
                        ...baseStyles,
                        borderRadius: '6px',
                        borderColor: error && '#ef4444',
                    }),
                } }), error && (0, jsx_runtime_1.jsx)("span", { className: "text-xs mt-1 text-red-500", children: error })] }));
};
exports.default = CustomSelect;
