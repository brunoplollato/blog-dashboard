import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ListItem({ icon, text, to, customClass = '', isSelected, children }) {
  const [isActive, setActive] = useState(false);
  return (
    <li
      onClick={() => setActive((prev) => !prev)}
      className={`cursor-pointer list-item ${
        isSelected ? 'bg-purple-700' : ''
      }`}
      text={text}
    >
      {children && (
        <>
          <div className={`flex items-center ${customClass}`}>
            {icon}
            <p>{text}</p>
            <div className="ml-auto list-item-arrow">
              {!isActive ? (
                <FiChevronRight className="h-4 w-4 text-white" />
              ) : (
                <FiChevronDown className="h-4 w-4 text-white" />
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

export default ListItem;
