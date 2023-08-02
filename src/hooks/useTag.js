import { useState } from 'react';
import { axiosPrivate } from '../utils/axios';

export default function useTag() {
  const [error, setError] = useState(null);

  const createTag = async (data) => {
    const { name } = data;
    const endpoint = 'api/tags';
    return await axiosPrivate
      .post(endpoint, {
        name,
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const getTags = async () => {
    const endpoint = 'api/tags';
    return await axiosPrivate.get(endpoint).catch((err) => {
      setError(err.response.data);
    });
  };

  return {
    createTag,
    getTags,
    error,
  };
}
