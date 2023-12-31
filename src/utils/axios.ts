import axios from 'axios';
import { BASE_URL } from '../environments';
import { useNavigate } from 'react-router-dom';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

axiosPrivate.interceptors.request.use(
  async (config) => {
    const { access_token } = JSON.parse(
      localStorage.getItem('tokens') as string
    );
    config.headers = {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    } as any;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refresh_token } = JSON.parse(
        localStorage.getItem('tokens') as string
      );
      const { data } = await axiosInstance.post(
        `${BASE_URL}/auth/refresh-token`,
        {
          data: {
            refreshToken: refresh_token,
          },
        }
      );
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${data.accessToken}`;
      localStorage.setItem(
        'tokens',
        JSON.stringify({
          access_token: data.data.accessToken,
          refresh_token: data.data.refreshToken,
        })
      );
      return axiosPrivate(originalRequest);
    }
    if (error.response.status !== 200 && error.response.status !== 401)
      return Promise.reject(error.response.data);

    const navigate = useNavigate();
    navigate('/');
    return Promise.reject(error.response.data.message);
  }
);
