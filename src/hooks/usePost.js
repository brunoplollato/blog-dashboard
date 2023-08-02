import { useState } from 'react';
import { axiosPrivate } from '../utils/axios';

export default function usePost() {
  const [error, setError] = useState(null);

  const createPost = async (data) => {
    console.log('🚀 ~ file: usePost.js:8 ~ createPost ~ data:', data);
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
    const endpoint = 'api/posts';
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
        console.log('🚀 ~ file: usePost.js:32 ~ .then ~ res:', res);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  return {
    createPost,
    error,
  };
}
