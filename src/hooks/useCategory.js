import { useState } from 'react';
import { axiosPrivate } from '../utils/axios';

export default function useCategory() {
  const [error, setError] = useState(null);

  const createCategory = async (data) => {
    const { name } = data;
    const endpoint = 'api/categories';
    return await axiosPrivate
      .post(endpoint, {
        name,
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const getCategories = async () => {
    const endpoint = 'api/categories';
    return await axiosPrivate.get(endpoint).catch((err) => {
      setError(err.response.data);
    });
  };

  return {
    createCategory,
    getCategories,
    error,
  };
}
