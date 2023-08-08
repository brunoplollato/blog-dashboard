"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_toastify_1 = require("react-toastify");
const axios_1 = require("../utils/axios");
function usePost() {
    const endpoint = 'api/posts';
    const createPost = async (data) => {
        const { title, slug, content, categories, tags, authorId, published, cover, } = data;
        return await axios_1.axiosPrivate
            .post(endpoint, {
            title,
            slug,
            content,
            categories,
            tags,
            authorId,
            published,
            cover,
        })
            .then((res) => {
            react_toastify_1.toast.success(res.message);
            return res.data;
        })
            .catch((err) => {
            react_toastify_1.toast.error(err.message);
            return err;
        });
    };
    const getPosts = async (params) => {
        return await axios_1.axiosPrivate
            .get(endpoint, {
            params,
        })
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            return err;
        });
    };
    const getPostById = async (id) => {
        return await axios_1.axiosPrivate
            .get(`${endpoint}/${id}`)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            return err;
        });
    };
    const updatePost = async (id, data) => {
        return await axios_1.axiosPrivate
            .put(`${endpoint}/${id}`, data)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            return err;
        });
    };
    const publishPost = async (id) => {
        return await axios_1.axiosPrivate
            .post(`${endpoint}/publish/${id}`)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            return err;
        });
    };
    const deletePost = async (id) => {
        return await axios_1.axiosPrivate
            .delete(`${endpoint}/${id}`)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            return err;
        });
    };
    return {
        createPost,
        getPostById,
        getPosts,
        publishPost,
        updatePost,
        deletePost,
    };
}
exports.default = usePost;
