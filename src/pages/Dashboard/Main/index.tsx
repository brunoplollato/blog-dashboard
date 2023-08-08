import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb';

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col p-5 bg-gray-300">
      <Breadcrumb
        items={[
          { text: 'home', link: '/dashboard' },
          { text: 'main', link: '' },
        ]}
      />
      <h2 className="text-xl font-bold mb-5">Dashboard</h2>
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-md w-full p-4 border border-slate-300 drop-shadow-sm">
          <p className="text-md">Welcome to the Dashboard</p>
          <p className="text-sm text-gray-500">
            We've prepare some links to get you started
          </p>
          <div className="flex flex-col mt-7">
            <p className="text-md">Get Started</p>
            <button
              className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
              type="button"
            >
              New post
            </button>
            <p className="text-md text-slate-500">
              or{' '}
              <Link className="text-purple-500" to="/dashboard/posts">
                go to posts page
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white border rounded-md w-1/2 p-4 border-slate-300 drop-shadow-sm">
            <p className="text-md">Welcome to the Dashboard</p>
            <p className="text-sm text-gray-500">
              We've prepare some links to get you started
            </p>
            <div className="flex flex-col mt-7">
              <p className="text-md">Get Started</p>
              <button
                className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
                type="button"
              >
                New post
              </button>
              <p className="text-md text-slate-500">
                or{' '}
                <Link className="text-purple-500" to="/dashboard/posts">
                  go to posts page
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-md w-1/2 p-4 border-slate-300 drop-shadow-sm">
            <p className="text-md">Welcome to the Dashboard</p>
            <p className="text-sm text-gray-500">
              We've prepare some links to get you started
            </p>
            <div className="flex flex-col mt-7">
              <p className="text-md">Get Started</p>
              <button
                className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
                type="button"
              >
                New post
              </button>
              <p className="text-md text-slate-500">
                or{' '}
                <Link className="text-purple-500" to="/dashboard/posts">
                  go to posts page
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-md w-1/2 p-4 border-slate-300 drop-shadow-sm">
            <p className="text-md">Welcome to the Dashboard</p>
            <p className="text-sm text-gray-500">
              We've prepare some links to get you started
            </p>
            <div className="flex flex-col mt-7">
              <p className="text-md">Get Started</p>
              <button
                className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
                type="button"
              >
                New post
              </button>
              <p className="text-md text-slate-500">
                or{' '}
                <Link className="text-purple-500" to="/dashboard/posts">
                  go to posts page
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-white border rounded-md w-1/2 p-4 border-slate-300 drop-shadow-sm">
            <p className="text-md">Welcome to the Dashboard</p>
            <p className="text-sm text-gray-500">
              We've prepare some links to get you started
            </p>
            <div className="flex flex-col mt-7">
              <p className="text-md">Get Started</p>
              <button
                className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
                type="button"
              >
                New post
              </button>
              <p className="text-md text-slate-500">
                or{' '}
                <Link className="text-purple-500" to="/dashboard/posts">
                  go to posts page
                </Link>
              </p>
            </div>
          </div>
          <div className="bg-white border rounded-md w-1/2 p-4 border-slate-300 drop-shadow-sm">
            <p className="text-md">Welcome to the Dashboard</p>
            <p className="text-sm text-gray-500">
              We've prepare some links to get you started
            </p>
            <div className="flex flex-col mt-7">
              <p className="text-md">Get Started</p>
              <button
                className="text-white bg-purple-700 hover:bg-purple-500 border border-purple-500 w-52 py-4 rounded-md my-3"
                type="button"
              >
                New post
              </button>
              <p className="text-md text-slate-500">
                or{' '}
                <Link className="text-purple-500" to="/dashboard/posts">
                  go to posts page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
