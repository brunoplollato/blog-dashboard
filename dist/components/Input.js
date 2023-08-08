"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fi_1 = require("react-icons/fi");
function Input({ handleChange, value, labelText, labelFor, id, name, type, isRequired = false, placeholder, customClass, icon, hasLabel = false, error, debounce = 0, ...props }) {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const fixedInputClass = `rounded-md appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`;
    const classes = `${fixedInputClass} ${customClass && customClass} ${icon ? 'pl-10' : 'pl-2'}`;
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col relative mb-4", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: labelFor, className: `${!hasLabel ? 'sr-only' : ''} text-md font-bold mb-2`, children: labelText }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { onChange: handleChange, value: value, id: id, name: name, type: showPassword ? 'text' : type, required: isRequired, className: classes, placeholder: placeholder, autoComplete: "off" }), icon && ((0, jsx_runtime_1.jsx)("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3", children: icon })), type === 'password' && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: "absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none", onClick: togglePasswordVisibility, children: showPassword ? (0, jsx_runtime_1.jsx)(fi_1.FiEyeOff, {}) : (0, jsx_runtime_1.jsx)(fi_1.FiEye, {}) }))] }), error && (0, jsx_runtime_1.jsx)("span", { className: "text-xs mt-1 text-red-500", children: error })] }));
}
exports.default = Input;
