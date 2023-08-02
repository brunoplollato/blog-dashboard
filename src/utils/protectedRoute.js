import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
