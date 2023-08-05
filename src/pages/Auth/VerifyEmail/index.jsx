import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import EmailVerified from '../../../components/EmailVerified';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

export default function EmailVerify() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { verifyUser } = useAuth();

  useEffect(() => {
    const sendVerification = async () => {
      await verifyUser(id);
      navigate('/dashboard');
    };

    sendVerification();
  }, []);

  return (
    <div className="bg-login flex items-center justify-center w-full">
      <div className="flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md">
        <Header
          heading="Email Verified"
          paragraph="You can now enjoy "
          linkName="full access!"
          linkUrl="/"
        />
        <EmailVerified />
      </div>
    </div>
  );
}
