import jwt_decode from 'jwt-decode';
import { useState, useContext } from 'react';
import { axiosInstance } from '../utils/axios';
import { UserDispatchContext } from '../contexts/UserContext';

export default function useAuth() {
  const [error, setError] = useState(null);
  const { setUser, setLoading } = useContext(UserDispatchContext);
  //login user
  const loginUser = async (data) => {
    setLoading(true);
    const { email, password } = data;

    const endpoint = 'auth/login';
    return axiosInstance
      .post(endpoint, {
        email,
        password,
      })
      .then(async ({ data }) => {
        const { payload } = jwt_decode(data.data.accessToken);
        setUser(payload);
        localStorage.setItem(
          'tokens',
          JSON.stringify({
            access_token: data.data.accessToken,
            refresh_token: data.data.refreshToken,
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(false);
      });
  };
  //login user using google or github
  const loginUserProvider = async (provider) => {
    setLoading(true);
    const endpoint = `auth/${provider}`;
    return axiosInstance
      .get(endpoint)
      .then(async ({ data }) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(false);
      });
  };
  //register user
  const registerUser = async (data) => {
    setLoading(true);
    const { name, email, password, confirmPassword } = data;
    const endpoint = 'auth/register';
    return axiosInstance
      .post(endpoint, {
        name,
        email,
        password,
        confirmPassword,
      })
      .then(async ({ data }) => {
        setUser(data.data);
        localStorage.setItem(
          'tokens',
          JSON.stringify({
            access_token: data.data.accessToken,
            refresh_token: data.data.refreshToken,
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setLoading(false);
      });
  };

  return {
    loginUser,
    loginUserProvider,
    registerUser,
    error,
  };
}