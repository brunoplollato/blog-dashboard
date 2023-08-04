import { useContext, useEffect } from 'react';
import Header from '../../../components/Header';
import Login from '../../../components/Login';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate('/dashboard/posts');
  });

  return (
    <div className="bg-login flex items-center justify-center w-full">
      <div className="flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md">
        <Header
          heading="Login"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login />
      </div>
    </div>
  );
}
