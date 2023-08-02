import { useState } from 'react';
import { signupFields } from '../constants/formFields';
import FormAction from './FormAction';
import Input from './Input';
import useAuth from '../hooks/useAuth';

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const { registerUser } = useAuth();

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    const signupFields = {
      name: signupState['username'],
      email: signupState['email-address'],
      password: signupState['password'],
      confirmPassword: signupState['confirm-password'],
    };
    await registerUser(signupFields);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
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
          color="green"
          name="Local"
        />
      </div>
    </form>
  );
}
