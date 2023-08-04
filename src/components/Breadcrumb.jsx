import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="my-2">
      <ul className="flex">
        {items.map(({ text, link }, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`
                text-gray-700 text-sm bg-white border border-r-0 border-l-0 border-slate-300 px-2 py-1 drop-shadow-sm font-bold
                ${index === 0 ? 'border-l pl-4 rounded-l-md' : 'border-r'}
              `}
            >
              {index < items.length - 1 && (
                <Link to={'/dashboard'} className="text-indigo-600">
                  {text}
                </Link>
              )}
              {index === items.length - 1 && text}
            </span>
            {index < items.length - 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-300 bg-white border-t border-b border-slate-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                height={30}
                width={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 0l7 12-7 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-300 border-t border-b border-slate-300 -ml-1"
                fill="white"
                viewBox="31.219 1.466 18.992 23"
                stroke="currentColor"
                height={32}
                width={31}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M 31.219 1.466 L 43.211 1.496 L 50.211 12.966 L 43.211 24.436 L 31.219 24.466"
                />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
