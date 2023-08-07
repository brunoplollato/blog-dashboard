"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const formFields_1 = require("../constants/formFields");
const FormAction_1 = __importDefault(require("./FormAction"));
const FormExtra_1 = __importDefault(require("./FormExtra"));
const Input_1 = __importDefault(require("./Input"));
const fi_1 = require("react-icons/fi");
const fa_1 = require("react-icons/fa");
const useAuth_1 = __importDefault(require("../hooks/useAuth"));
const fields = formFields_1.loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));
function Login() {
    const [loginState, setLoginState] = (0, react_1.useState)(fieldsState);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const { loginUser, loginUserProvider, error } = (0, useAuth_1.default)();
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const provider = e.nativeEvent.submitter.name;
        authenticateUser(provider);
    };
    //Handle Login API Integration here
    const authenticateUser = async (provider) => {
        try {
            if (provider === 'Local') {
                const loginFields = {
                    email: loginState['email-address'],
                    password: loginState['password'],
                };
                await loginUser(loginFields);
            }
            else {
                await loginUserProvider(provider.toLowerCase());
            }
            setIsLoading(false);
        }
        catch (error) {
            console.log('🚀 ~ file: Login.jsx:44 ~ authenticateUser ~ error:', error);
            console.group();
            console.log('%c🔥 Error fetching data from API:', 'color: red; font-weight: bold;');
            console.log('%c🔥 An error occurred while fetching data. See details below:', 'color: red;');
            console.log(`🔥 ${error}`);
            console.groupEnd();
            setIsLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { className: "pace-y-6", onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-72", children: fields.map((field) => ((0, jsx_runtime_1.jsx)(Input_1.default, { handleChange: handleChange, value: loginState[field.id], labelText: field.labelText, labelFor: field.labelFor, id: field.id, name: field.name, type: field.type, isRequired: field.isRequired, placeholder: field.placeholder, icon: field.icon }, field.id))) }), (0, jsx_runtime_1.jsx)(FormExtra_1.default, {}), (0, jsx_runtime_1.jsx)(FormAction_1.default, { handleSubmit: handleSubmit, text: "Login", color: "indigo", name: "Local", disabled: isLoading }), (0, jsx_runtime_1.jsx)(FormAction_1.default, { handleSubmit: handleSubmit, icon: (0, jsx_runtime_1.jsx)(fi_1.FiGithub, { className: "h-5 w-5 text-white mr-2" }), text: "GitHub", color: "gray", name: "GitHub", disabled: isLoading }), (0, jsx_runtime_1.jsx)(FormAction_1.default, { handleSubmit: handleSubmit, icon: (0, jsx_runtime_1.jsx)(fa_1.FaGoogle, { className: "h-5 w-5 text-white mr-2" }), text: "Google", color: "red", name: "Google", disabled: isLoading })] }));
}
exports.default = Login;
