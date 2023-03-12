import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className=" text-black mx-auto wrapper">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-5 gap-4 py-8">
          {/* Logo */}
          <div className="col-span-1 flex h-fit">
            <img className="w-8 h-fit self-center sm:w-12" src={logo} alt="" />
            <h1 className="text-2xl ml-3 font-logo text-black sm:text-4xl">
              jobi
            </h1>
          </div>
          {/* Products */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul>
              <li>
                <a href="#">Product 1</a>
              </li>
              <li>
                <a href="#">Product 2</a>
              </li>
              <li>
                <a href="#">Product 3</a>
              </li>
              <li>
                <a href="#">Product 4</a>
              </li>
              <li>
                <a href="#">Product 5</a>
              </li>
              <li>
                <a href="#">Product 6</a>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="">
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
              <li>
                <a href="#">Link 6</a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul>
              <li>
                <a href="#">Legal 1</a>
              </li>
              <li>
                <a href="#">Legal 2</a>
              </li>
              <li>
                <a href="#">Legal 3</a>
              </li>
              <li>
                <a href="#">Legal 4</a>
              </li>
              <li>
                <a href="#">Legal 5</a>
              </li>
              <li>
                <a href="#">Legal 6</a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <div className="flex">
              <input
                className="py-2 px-3 rounded-md border-2 border-gray-300 mr-2 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your email"
              />
              <button className="py-2 px-4 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Send
              </button>
            </div>
            <ul>
              <li>
                <a href="#">Subscribe</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Sub Footer */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          {/* Privacy and Terms */}
          <div>
            <a href="#" className="text-gray-500 hover:text-white mr-4">
              Privacy &amp; Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Contact Us
            </a>
          </div>
          {/* Jobi Inc. */}
          <div className="text-gray-500">Copyright &copy;2022 Jobi Inc.</div>
          {/* Social Media Icons */}
          <div>
            <a href="#" className="text-gray-500 hover:text-white mr-4"></a>
            <a href="#" className="text-gray-500 hover:text-white mr-4"></a>
            <a href="#" className="text-gray-500 hover:text-white"></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
