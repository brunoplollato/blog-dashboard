"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PropagateLoader_1 = __importDefault(require("react-spinners/PropagateLoader"));
function FormAction({ handleSubmit, action = 'submit', text, color, icon, name, disabled, customClass, }) {
    const fixedClasses = `group relative w-full h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-${color}-700 hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 mt-5`;
    const classes = `${fixedClasses} ${customClass && customClass}`;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: action === 'submit' ? ((0, jsx_runtime_1.jsx)("button", { type: action, className: classes, onSubmit: handleSubmit, name: name, disabled: disabled, children: !disabled && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon, text] })) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("button", { type: action, className: classes, onClick: handleSubmit, name: name, disabled: disabled, children: !disabled ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon, text] })) : ((0, jsx_runtime_1.jsx)(PropagateLoader_1.default, { color: "rgba(255, 255, 255, .5)", loading: disabled, size: 10, cssOverride: {
                        top: '-4px',
                    }, "aria-label": "Loading Spinner", "data-testid": "loader" })) }) })) }));
}
exports.default = FormAction;
