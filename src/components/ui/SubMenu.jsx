import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SubMenu({ isOpen, setIsOpen }) {
  const subMenuRef = React.useRef(null);

  // useEffect hook that sets isOpen state to false when mousedown click outside of sub menu
  useEffect(() => {
    const clickOutside = e => {
      if (subMenuRef.current && !subMenuRef.current.contains(e.target))
        setIsOpen(false);
    };

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [subMenuRef]);

  return (
    <>
      {isOpen && (
        <ul
          ref={subMenuRef}
          // onMouseLeave={() => setIsOpen(false)}
          className="absolute space-y-1 w-fit mt-4 bg-white text-black py-4 pl-7 pr-12 rounded-md "
        >
          <li className="hover:underline ">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:underline ">Pricing</li>
          <li className="hover:underline ">Error 404</li>
          <li className="hover:underline ">Blog</li>
          <li className="hover:underline ">Contact us</li>
          <div className="absolute left-4 top-[-10px] w-4 h-4 border-t-2 border-r-2 border-b-0 border-l-2 border-white transform rotate-45 bg-white"></div>
        </ul>
      )}
    </>
  );
}

export default SubMenu;
