"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const formFields_1 = require("../constants/formFields");
const FormAction_1 = __importDefault(require("./FormAction"));
const Input_1 = __importDefault(require("./Input"));
const useAuth_1 = __importDefault(require("../hooks/useAuth"));
const fields = formFields_1.signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));
function Signup() {
    const [signupState, setSignupState] = (0, react_1.useState)(fieldsState);
    const { registerUser } = (0, useAuth_1.default)();
    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState);
        createAccount();
    };
    //handle Signup API Integration here
    const createAccount = async () => {
        const signupFields = {
            name: signupState['username'],
            email: signupState['email-address'],
            password: signupState['password'],
            confirmPassword: signupState['confirm-password'],
        };
        await registerUser(signupFields);
    };
    return ((0, jsx_runtime_1.jsx)("form", { className: "space-y-6", onSubmit: handleSubmit, children: (0, jsx_runtime_1.jsxs)("div", { className: "w-72", children: [fields.map((field) => ((0, jsx_runtime_1.jsx)(Input_1.default, { handleChange: handleChange, value: signupState[field.id], labelText: field.labelText, labelFor: field.labelFor, id: field.id, name: field.name, type: field.type, isRequired: field.isRequired, placeholder: field.placeholder, icon: field.icon }, field.id))), (0, jsx_runtime_1.jsx)(FormAction_1.default, { handleSubmit: handleSubmit, icon: "", text: "Sign up", color: "indigo", name: "Local" })] }) }));
}
exports.default = Signup;
