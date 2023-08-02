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
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  const getPosts = async () => {
    return await axiosPrivate
      .get(endpoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };

  return {
    createPost,
    getPosts,
  };
}
