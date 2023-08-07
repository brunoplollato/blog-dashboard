import { toast } from 'react-toastify';
import { axiosPrivate } from '../utils/axios';

export default function usePost() {
  const endpoint = 'api/posts';

  const createPost = async (data: Post) => {
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
      .then((res: any) => {
        toast.success(res.message);
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message);
        return err;
      });
  };

  const getPosts = async (params: { pageIndex: number; pageSize: number }) => {
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

  const getPostById = async (id: string) => {
    return await axiosPrivate
      .get(`${endpoint}/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const updatePost = async (id: string, data: Post) => {
    return await axiosPrivate
      .put(`${endpoint}/${id}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const publishPost = async (id: string) => {
    return await axiosPrivate
      .post(`${endpoint}/publish/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const deletePost = async (id: string) => {
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
