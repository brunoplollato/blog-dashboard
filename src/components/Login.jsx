import { useState } from 'react';
import { loginFields } from '../constants/formFields';
import FormAction from './FormAction';
import FormExtra from './FormExtra';
import Input from './Input';
import { FiGithub } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ''));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser, loginUserProvider, error } = useAuth();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const provider = e.nativeEvent.submitter.name;
    authenticateUser(provider);
  };

  //Handle Login API Integration here
  const authenticateUser = async (provider) => {
    try {
      if (provider === 'Local') {
        const loginFields = {
          email: loginState['email-address'],
          password: loginState['password'],
        };
        await loginUser(loginFields);
      } else {
        await loginUserProvider(provider.toLowerCase());
      }
      setIsLoading(false);
    } catch (error) {
      console.log('🚀 ~ file: Login.jsx:44 ~ authenticateUser ~ error:', error);
      console.group();
      console.log(
        '%c🔥 Error fetching data from API:',
        'color: red; font-weight: bold;'
      );
      console.log(
        '%c🔥 An error occurred while fetching data. See details below:',
        'color: red;'
      );
      console.log(`🔥 ${error}`);
      console.groupEnd();
      setIsLoading(false);
    }
  };

  return (
    <form className="pace-y-6" onSubmit={handleSubmit}>
      <div className="w-72">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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
      </div>

      <FormExtra />
      <FormAction
        handleSubmit={handleSubmit}
        text="Login"
        color="indigo"
        name="Local"
        disabled={isLoading}
      />
      <FormAction
        handleSubmit={handleSubmit}
        icon={<FiGithub className="h-5 w-5 text-white mr-2" />}
        text="GitHub"
        color="gray"
        name="GitHub"
        disabled={isLoading}
      />
      <FormAction
        handleSubmit={handleSubmit}
        icon={<FaGoogle className="h-5 w-5 text-white mr-2" />}
        text="Google"
        color="red"
        name="Google"
        disabled={isLoading}
      />
    </form>
  );
}
