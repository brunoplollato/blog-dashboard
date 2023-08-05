import { toast } from 'react-toastify';
import { axiosPrivate } from '../utils/axios';

export default function usePost() {
  const endpoint = 'api/posts';

  const createPost = async (data) => {
    const {
      title,
      slug,
      content,
      categories,
      tags,
      authorId,
      published,
      cover,
    } = data;
    return await axiosPrivate
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
        toast.success(res.message);
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message);
        return err;
      });
  };

  const getPosts = async (params) => {
    return await axiosPrivate
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
    return await axiosPrivate
      .get(`${endpoint}/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const updatePost = async (id, data) => {
    return await axiosPrivate
      .put(`${endpoint}/${id}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const publishPost = async (id) => {
    return await axiosPrivate
      .post(`${endpoint}/publish/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const deletePost = async (id) => {
    return await axiosPrivate
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
