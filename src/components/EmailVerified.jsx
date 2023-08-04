import { signupFields } from '../constants/formFields';
import useAuth from '../hooks/useAuth';

export default function EmailVerified() {
  const { registerUser } = useAuth();

  return (
    <div className="space-y-6">
      <div className="w-72 flex justify-center">
        <img src="../assets/images/party-hat.png" alt="Email Verified" />
      </div>
    </div>
  );
}
