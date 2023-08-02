import { axiosPrivate } from '../utils/axios';

function useRefreshToken() {
  const refresh = async () => {
    const res = await axiosPrivate.post('/auth/refresh-token', {
      body: {},
    });
    console.log('🚀 ~ file: useRefreshToken.js:8 ~ refresh ~ res:', res);
    return res;
  };
  return refresh;
}

export default useRefreshToken;
