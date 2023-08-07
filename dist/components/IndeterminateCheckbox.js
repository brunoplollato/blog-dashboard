"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function IndeterminateCheckbox({ indeterminate, className = '', ...rest }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (typeof indeterminate === 'boolean' && ref.current) {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);
    return ((0, jsx_runtime_1.jsx)("input", { type: "checkbox", ref: ref, className: className + ' cursor-pointer', ...rest }));
}
exports.default = IndeterminateCheckbox;
