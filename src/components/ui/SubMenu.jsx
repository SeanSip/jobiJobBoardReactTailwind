import React from 'react';
import { Link } from 'react-router-dom';

function SubMenu({ isOpen }) {
  const subMenuRef = React.useRef(null);

  return (
    <>
      {isOpen && (
        <ul
          ref={subMenuRef}
          className="absolute space-y-1 w-fit mt-4 bg-white text-black py-4 pl-7 pr-12 rounded-md after:contents-[''] after:bg-transparent after:w-full after:h-10 after:absolute after:-top-10 after:left-0"
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

export default React.memo(SubMenu);
