import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import Login from '../../components/Login';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate('/dashboard/posts');
  });

  return (
    <div className="p-12 rounded-xl bg-white">
      <Header
        heading="Login"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}
