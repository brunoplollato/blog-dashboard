"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupFields = exports.loginFields = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const fi_1 = require("react-icons/fi");
const loginFields = [
    {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiMail, { className: "h-5 w-5 text-gray-500" }),
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiLock, { className: "h-5 w-5 text-gray-500" }),
    },
];
exports.loginFields = loginFields;
const signupFields = [
    {
        labelText: 'Username',
        labelFor: 'username',
        id: 'username',
        name: 'username',
        type: 'text',
        autoComplete: 'username',
        isRequired: true,
        placeholder: 'Username',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiUser, { className: "h-5 w-5 text-gray-500" }),
    },
    {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiMail, { className: "h-5 w-5 text-gray-500" }),
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiLock, { className: "h-5 w-5 text-gray-500" }),
    },
    {
        labelText: 'Confirm Password',
        labelFor: 'confirm-password',
        id: 'confirm-password',
        name: 'confirm-password',
        type: 'password',
        autoComplete: 'confirm-password',
        isRequired: true,
        placeholder: 'Confirm Password',
        icon: (0, jsx_runtime_1.jsx)(fi_1.FiLock, { className: "h-5 w-5 text-gray-500" }),
    },
];
exports.signupFields = signupFields;
