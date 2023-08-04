import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import Signup from '../../../components/Signup';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export default function SignupPage() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate('/dashboard/posts');
  });

  return (
    <div className="bg-login flex items-center justify-center w-full">
      <div className="flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md">
        <Header
          heading="Signup"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Signup />
      </div>
    </div>
  );
}
