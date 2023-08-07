import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import useAuth from '../hooks/useAuth';

const fields = signupFields as LoginFields;
let fieldsState: Record<string, string> = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState<any>(fieldsState);
  const { registerUser } = useAuth();

  const handleChange = (e: any) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    const signupFields = {
      name: signupState['username'] as string,
      email: signupState['email-address'] as string,
      password: signupState['password'] as string,
      confirmPassword: signupState['confirm-password'] as string,
    };
    await registerUser(signupFields);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="w-72">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            icon={field.icon}
          />
        ))}
        <FormAction
          handleSubmit={handleSubmit}
          icon=""
          text="Sign up"
          color="indigo"
          name="Local"
        />
      </div>
    </form>
  );
}
