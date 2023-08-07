"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dropzone_1 = require("react-dropzone");
const fi_1 = require("react-icons/fi");
const FileUpload = ({ config, handleReset, imagePreview }) => {
    const { getRootProps, getInputProps } = (0, react_dropzone_1.useDropzone)(config);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-4 relative", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-md font-bold mb-2", children: "Cover" }), imagePreview ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: "absolute -right-2 top-6 text-white focus:outline-none rounded-full bg-red-500 p-1", onClick: handleReset, children: (0, jsx_runtime_1.jsx)(fi_1.FiX, {}) }), (0, jsx_runtime_1.jsx)("img", { src: imagePreview, alt: "Uploaded", style: previewStyle })] })) : ((0, jsx_runtime_1.jsxs)("div", { ...getRootProps(), style: dropzoneStyle, children: [(0, jsx_runtime_1.jsx)("input", { ...getInputProps() }), (0, jsx_runtime_1.jsx)(fi_1.FiUploadCloud, { className: "text-purple-600 h-20 w-20" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-lg font-bold text-slate-700", children: ["Drop your image here, or", (0, jsx_runtime_1.jsx)("span", { className: "text-purple-500", children: " browse" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-slate-400", children: "PNG, JPG, and GIF files are allowed - 5mb" })] }))] }));
};
const dropzoneStyle = {
    width: '100%',
    height: '200px',
    border: '2px dashed #ddd',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
};
const previewStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    margin: '10px 0',
};
exports.default = FileUpload;
