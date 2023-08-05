import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function MenuItem({ icon, text, to, customClass = '', isSelected, children }) {
  const [isActive, setActive] = useState(false);
  return (
    <li onClick={() => setActive((prev) => !prev)} text={text}>
      {children && (
        <>
          <div className={`flex items-center ${customClass}`}>
            {icon}
            <p>{text}</p>
            <div className="ml-auto list-item-arrow">
              {!isActive ? (
                <FiChevronRight className="h-4 w-4 text-indigo-700" />
              ) : (
                <FiChevronDown className="h-4 w-4 text-indigo-700" />
              )}
            </div>
          </div>
          {isActive && children}
        </>
      )}
      {!children && (
        <Link className={`flex items-center ${customClass}`} to={to}>
          {icon}
          <p className="list-item">{text}</p>
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
