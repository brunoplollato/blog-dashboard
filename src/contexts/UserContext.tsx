import { createContext, useEffect, useState, PropsWithChildren } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext<any>(undefined);
const UserDispatchContext = createContext<any>(undefined);

function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const { access_token } = JSON.parse(
      localStorage.getItem('tokens') || ''
    ) as Tokens;
    if (!!access_token?.length) {
      const { payload } = jwt_decode(access_token) as { payload: User };
      console.log(
        '🚀 ~ file: UserContext.tsx:18 ~ useEffect ~ payload:',
        payload
      );
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
