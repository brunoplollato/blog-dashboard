import Header from '../../components/Header';
import Signup from '../../components/Signup';

export default function SignupPage() {
  return (
    <div className="p-12 rounded-xl bg-white">
      <Header
        heading="Signup"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </div>
  );
}
