import React from 'react';
import { useEffect } from 'react';

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
          <li>
            <a className="hover:underline " href="">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Pricing
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Error 404
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:underline " href="">
              Contact us
            </a>
          </li>
          <div className="absolute left-4 top-[-10px] w-4 h-4 border-t-2 border-r-2 border-b-0 border-l-2 border-white transform rotate-45 bg-white"></div>
        </ul>
      )}
    </>
  );
}

export default SubMenu;
