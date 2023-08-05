import { signupFields } from '../constants/formFields';
import useAuth from '../hooks/useAuth';
import image from '../assets/images/party-hat.png';

export default function EmailVerified() {
  const { registerUser } = useAuth();

  return (
    <div className="space-y-6">
      <div className="w-72 flex justify-center">
        <img
          src={image}
          alt="Email Verified"
          className="h-32 w-auto rotate-[25deg]"
        />
      </div>
    </div>
  );
}
