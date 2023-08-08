"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_quill_1 = __importDefault(require("react-quill"));
const fi_1 = require("react-icons/fi");
require("react-quill/dist/quill.snow.css");
const Input_1 = __importDefault(require("../../../../components/Input"));
const CustomSelect_1 = __importDefault(require("../../../../components/CustomSelect"));
const axios_1 = require("../../../../utils/axios");
const environments_1 = require("../../../../environments");
const FormAction_1 = __importDefault(require("../../../../components/FormAction"));
const CustomSwitch_1 = __importDefault(require("../../../../components/CustomSwitch"));
const UserContext_1 = require("../../../../contexts/UserContext");
const richText_1 = require("../../../../constants/richText");
const FileUpload_1 = __importDefault(require("../../../../components/FileUpload"));
const usePost_1 = __importDefault(require("../../../../hooks/usePost"));
const useCategory_1 = __importDefault(require("../../../../hooks/useCategory"));
const useTag_1 = __importDefault(require("../../../../hooks/useTag"));
const react_router_dom_1 = require("react-router-dom");
const Breadcrumb_1 = __importDefault(require("../../../../components/Breadcrumb"));
function NewPost() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, react_1.useContext)(UserContext_1.UserContext);
    const { createPost } = (0, usePost_1.default)();
    const { getCategories } = (0, useCategory_1.default)();
    const { getTags } = (0, useTag_1.default)();
    const [errors, setErrors] = (0, react_1.useState)({});
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [options, setOptions] = (0, react_1.useState)({
        categories: [],
        tags: [],
    });
    const [post, setPost] = (0, react_1.useState)({
        title: '',
        slug: '',
        content: '',
        categories: [],
        tags: [],
        published: false,
        cover: '',
    });
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const [categoriesResponse, tagsResponse] = await Promise.all([
                    getCategories(),
                    getTags(),
                ]);
                const categoriesOptions = categoriesResponse === null || categoriesResponse === void 0 ? void 0 : categoriesResponse.data.map(({ id, name }) => ({
                    value: id,
                    label: name,
                }));
                const tagsOptions = tagsResponse === null || tagsResponse === void 0 ? void 0 : tagsResponse.data.map(({ id, name }) => ({
                    value: id,
                    label: name,
                }));
                setOptions({
                    categories: categoriesOptions,
                    tags: tagsOptions,
                });
            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const validateFields = () => {
        const requiredFields = ['title', 'slug', 'content', 'categories', 'tags'];
        const newErrors = {};
        requiredFields.forEach((field) => {
            if (!post[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setPost((prev) => ({
            ...prev,
            [id]: value,
        }));
        // Clear the error for the input field being edited
        setErrors((prev) => ({
            ...prev,
            [id]: '',
        }));
    };
    const handleContentChange = (e) => {
        setPost((prev) => ({
            ...prev,
            content: e,
        }));
    };
    const handleCreate = async (inputValue, type) => {
        setIsLoading(true);
        try {
            const { data } = await axios_1.axiosPrivate.post(`${environments_1.BASE_URL}/api/${type}`, {
                data: { name: inputValue },
            });
            const newOption = {
                label: inputValue,
                value: data.data.id,
            };
            setOptions((prevOptions) => ({
                ...prevOptions,
                [type]: [...prevOptions[type], newOption],
            }));
            setPost((prevPost) => ({
                ...prevPost,
                [type]: [...prevPost[type], newOption],
            }));
        }
        catch (error) {
            console.log('Error creating new option:', error);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleSwitchChange = (e) => {
        setPost((prev) => ({
            ...prev,
            published: !prev.published,
        }));
    };
    const handleChange = (newValue, type) => {
        setPost((prev) => ({
            ...prev,
            [type]: newValue,
        }));
        // Clear the error for the input field being edited
        setErrors((prev) => ({
            ...prev,
            [type]: '',
        }));
    };
    const handleSubmit = async () => {
        const isValid = validateFields();
        if (isValid) {
            setIsLoading(true);
            const body = {
                title: post.title,
                slug: post.slug,
                content: post.content,
                categories: post.categories.map(({ value }) => value),
                tags: post.tags.map(({ value }) => value),
                authorId: user.id,
                published: post.published,
                cover: post.cover,
            };
            const res = await createPost(body);
            setIsLoading(false);
            return res.status && navigate('/dashboard/posts');
        }
        setIsLoading(false);
    };
    const onDrop = (0, react_1.useCallback)((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setPost((prev) => ({
                    ...prev,
                    cover: reader.result,
                }));
            };
            reader.readAsDataURL(acceptedFiles[0]);
        }
    }, []);
    const handleReset = () => {
        setPost((prev) => ({
            ...prev,
            cover: '',
        }));
    };
    const config = {
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.svg'],
        },
        maxFiles: 1,
        maxSize: 5000000,
        onDrop,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col p-5 bg-gray-300", children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.default, { items: [
                    { text: 'home', link: '/dashboard' },
                    { text: 'posts', link: '/dashboard/posts' },
                    { text: 'new post', link: '' },
                ] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl font-bold mb-5 flex", children: "New Post" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-5 w-3/4", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white border rounded-md p-4 border-slate-300 drop-shadow-sm", children: [(0, jsx_runtime_1.jsx)(Input_1.default, { hasLabel: true, handleChange: handleInputChange, value: post.title, labelText: "Title", labelFor: "title", id: "title", name: "title", type: "text", isRequired: true, placeholder: "Post title", error: errors.title }, "title"), (0, jsx_runtime_1.jsx)(react_quill_1.default, { theme: "snow", modules: richText_1.modules, formats: richText_1.formats, value: post.content, onChange: handleContentChange, className: "mt-8" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-5 w-1/4", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-md p-4 border border-slate-300 drop-shadow-sm", children: [(0, jsx_runtime_1.jsx)(FileUpload_1.default, { config: config, handleReset: handleReset, imagePreview: post.cover }), (0, jsx_runtime_1.jsx)(Input_1.default, { hasLabel: true, handleChange: handleInputChange, value: post.slug, labelText: "Slug", labelFor: "slug", id: "slug", name: "slug", type: "text", isRequired: true, placeholder: "Slug", error: errors.slug }, "slug"), (0, jsx_runtime_1.jsx)(CustomSelect_1.default, { options: options.categories, handleCreate: (inputValue) => handleCreate(inputValue, 'categories'), onChange: (newValue) => handleChange(newValue, 'categories'), value: post.categories, isLoading: isLoading, labelFor: "categories", labelText: "Categories", hasLabel: true, name: "categories", id: "categories", error: errors.categories }), (0, jsx_runtime_1.jsx)(CustomSelect_1.default, { options: options.tags, handleCreate: (inputValue) => handleCreate(inputValue, 'tags'), onChange: (newValue) => handleChange(newValue, 'tags'), value: post.tags, isLoading: isLoading, labelFor: "tags", labelText: "Tags", hasLabel: true, name: "tags", id: "tags", error: errors.tags }), (0, jsx_runtime_1.jsx)(CustomSwitch_1.default, { hasLabel: true, handleChange: handleSwitchChange, checked: post.published, labelText: "Public?", labelFor: "published", id: "published", name: "published", isRequired: true }), (0, jsx_runtime_1.jsx)(FormAction_1.default, { handleSubmit: handleSubmit, action: "button", icon: (0, jsx_runtime_1.jsx)(fi_1.FiSave, { className: "h-5 w-5 text-white" }), text: "Publish", color: "purple", name: "Publish", disabled: false })] }) })] })] }));
}
exports.default = NewPost;
