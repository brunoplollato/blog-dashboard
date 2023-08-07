import { axiosPrivate } from '../utils/axios';

function useRefreshToken() {
  const refresh = async () => {
    const res = await axiosPrivate.post('/auth/refresh-token', {
      body: {},
    });
    return res;
  };
  return refresh;
}

export default useRefreshToken;
