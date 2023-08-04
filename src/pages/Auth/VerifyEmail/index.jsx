import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import EmailVerified from '../../../components/EmailVerified';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';

export default function EmailVerify() {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log('🚀 ~ file: index.jsx:9 ~ EmailVerify ~ id:', id);
  });

  return (
    <div className="bg-login flex items-center justify-center w-full">
      <div className="flex flex-col bg-white px-20 pt-10 pb-20 mt-10 rounded-xl drop-shadow-md">
        <Header
          heading="Email Verified"
          paragraph="You can now enjoy full "
          linkName="access!"
          linkUrl="/"
        />
        <EmailVerified />
      </div>
    </div>
  );
}
