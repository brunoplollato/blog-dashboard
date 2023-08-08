import jwt_decode from 'jwt-decode';
import { useState, useContext } from 'react';
import { axiosInstance } from '../utils/axios';
import { UserDispatchContext } from '../contexts/UserContext';
import { toast } from 'react-toastify';

export default function useAuth() {
  const [error, setError] = useState(null);
  const { setUser, setLoading } = useContext(UserDispatchContext);
  //login user
  const loginUser = async (data: User) => {
    setLoading(true);
    const { email, password } = data;

    const endpoint = 'auth/login';
    return axiosInstance
      .post(endpoint, {
        email,
        password,
      })
      .then(async ({ data }) => {
        const { payload }: any = jwt_decode(data.data.accessToken);
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
  const loginUserProvider = async (provider: string) => {
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
  const registerUser = async (data: User) => {
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
        toast.info('A verification email has been sent');
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setError(err.response.data);
        setLoading(false);
      });
  };

  const verifyUser = async (token: string) => {
    setLoading(true);
    const endpoint = `auth/verify-email?token=${token}`;
    return await axiosInstance
      .get(endpoint)
      .then(({ data }) => {
        setUser(data.data);
        localStorage.setItem(
          'tokens',
          JSON.stringify({
            access_token: data.data.accessToken,
            refresh_token: data.data.refreshToken,
          })
        );
        toast.success('Email verified');
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setError(err.response.data);
        setLoading(false);
      });
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.setItem(
      'tokens',
      JSON.stringify({
        access_token: '',
        refresh_token: '',
      })
    );
  };

  return {
    loginUser,
    loginUserProvider,
    verifyUser,
    logoutUser,
    registerUser,
    error,
  };
}
