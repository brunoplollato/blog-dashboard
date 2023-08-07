"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function DebouncedInput({ value: initialValue, onChange, debounce = 500, customClass, placeholder, ...props }) {
    const [value, setValue] = (0, react_1.useState)(initialValue);
    const fixedInputClass = `rounded-md appearance-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm
  }`;
    const classes = `${fixedInputClass} ${customClass && customClass}`;
    (0, react_1.useEffect)(() => {
        setValue(initialValue);
    }, [initialValue]);
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-col relative mb-4", children: (0, jsx_runtime_1.jsx)("input", { ...props, value: value, onChange: (e) => setValue(e.target.value), className: classes, placeholder: placeholder }) }));
}
exports.default = DebouncedInput;
