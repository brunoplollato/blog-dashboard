import { PropsWithChildren, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  if (!user) {
    return navigate('/');
  }

  return children;
}
