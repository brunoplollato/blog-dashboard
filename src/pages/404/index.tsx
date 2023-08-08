import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen text-center bg-gray-100">
      <div className="max-w-md px-8 py-16 bg-white rounded-lg shadow-md">
        <h1 className="text-8xl font-bold mb-4 text-indigo-900">404</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="text-indigo-600 hover:underline hover:text-indigo-800 flex items-center justify-center"
        >
          <FiArrowLeft />
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
