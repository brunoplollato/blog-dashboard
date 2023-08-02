import { createContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { access_token } = JSON.parse(localStorage.getItem('tokens'));
    if (!!access_token?.length) {
      const { payload } = jwt_decode(access_token);
      setUser(payload);
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      <UserDispatchContext.Provider value={{ setUser, setLoading }}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
