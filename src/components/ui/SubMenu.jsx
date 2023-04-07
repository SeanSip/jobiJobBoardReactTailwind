import React from 'react';
import { Link } from 'react-router-dom';

function SubMenu({ isOpen, handlePagesBlur, handlePagesFocus }) {
  const subMenuRef = React.useRef(null);

  return (
    <>
      {isOpen && (
        <ul
          ref={subMenuRef}
          onBlur={handlePagesBlur}
          onFocus={handlePagesFocus}
          className="absolute font-body space-y-3 w-48 mt-6 bg-white text-black py-6 -ml-5 pl-8 pr-16 rounded-md after:contents-[''] after:bg-transparent after:w-full after:h-10 after:absolute after:-top-10 after:left-0"
        >
          <li className="hover:underline">
            <Link to="/about-us">About us</Link>
          </li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline ">
            <Link to="/404">Error 404</Link>
          </li>
          <li className="hover:underline cursor-pointer">Blog</li>
          <li className="hover:underline cursor-pointer">Contact us</li>
          <div className="absolute left-8 top-[-18px] w-4 h-4 border-t-2 border-r-2 border-b-0 border-l-2 border-white transform rotate-45 bg-white"></div>
        </ul>
      )}
    </>
  );
}

export default React.memo(SubMenu);
