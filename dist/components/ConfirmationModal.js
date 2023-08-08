"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ConfirmationModal = ({ text, onClose, onConfirm, error }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-md drop-shadow-md", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-md mb-4", children: text }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center gap-5", children: [(0, jsx_runtime_1.jsx)("button", { className: "group relative h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-5 w-32", onClick: onClose, children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { className: `group relative h-10 flex items-center justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 mt-5 w-32 ${error
                                ? 'focus:ring-red-500 bg-red-500 hover:bg-red-700'
                                : 'focus:ring-green-500 bg-green-500 hover:bg-green-700'}`, onClick: onConfirm, children: "Confirm" })] })] }) }));
};
exports.default = ConfirmationModal;
