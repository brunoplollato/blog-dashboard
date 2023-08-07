import { FiMail, FiLock, FiUser } from 'react-icons/fi';

const loginFields = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
    icon: <FiMail className="h-5 w-5 text-gray-500" />,
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
    icon: <FiLock className="h-5 w-5 text-gray-500" />,
  },
];

const signupFields = [
  {
    labelText: 'Username',
    labelFor: 'username',
    id: 'username',
    name: 'username',
    type: 'text',
    autoComplete: 'username',
    isRequired: true,
    placeholder: 'Username',
    icon: <FiUser className="h-5 w-5 text-gray-500" />,
  },
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address',
    icon: <FiMail className="h-5 w-5 text-gray-500" />,
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password',
    icon: <FiLock className="h-5 w-5 text-gray-500" />,
  },
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm-password',
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password',
    icon: <FiLock className="h-5 w-5 text-gray-500" />,
  },
];

export { loginFields, signupFields };
