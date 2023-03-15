import React from 'react';
import logo from '../assets/logo.png';
import footerBgShape from '../assets/footerBgShape.png';
import { FaPinterestP, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className=" text-black mx-auto wrapper">
        <div className="flex border-b-[1px] pt-[100px] pb-[70px] justify-between">
          <div className="space-y-3">
            <h1 className="text-5xl font-title">Most complete job portal.</h1>
            <p className="text-[#979797] font-body">
              Sign up and start finding your job or talents
            </p>
          </div>
          <div className="space-x-5 self-center">
            <button className="rounded-md bg-transparent border-[1.5px] border-[#244034]">
              Looking for job?
            </button>
            <button className="rounded-md">Post a job</button>
          </div>
        </div>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-11 gap-4 py-8">
          {/* Logo */}
          <div className="col-span-2 flex-col flex justify-between">
            <div className="flex">
              <img
                className="w-8 h-fit self-center sm:w-12"
                src={logo}
                alt=""
              />
              <h2 className="text-2xl ml-3 font-logo text-black sm:text-4xl">
                jobi
              </h2>
            </div>
            <img className="w-12" src={footerBgShape} alt="" />
          </div>

          {/* Products */}
          <div className="col-span-2">
            <h4 className="text-lg font-body mb-4 ">Products</h4>
            <ul className="flex flex-col leading-10 font-body text-base text-black/50">
              <li className="">
                <a href="#">Take the tour</a>
              </li>
              <li>
                <a href="#">Live chat</a>
              </li>
              <li>
                <a href="#">Self-service</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
              <li>
                <a href="#">Collaberation</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div className="col-span-2">
            <h4 className="text-lg font-body mb-4">Links</h4>
            <ul className="leading-10 font-body text-base text-black/50">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="col-span-2">
            <h4 className="text-lg font-body mb-4">Legal</h4>
            <ul className="leading-10 font-body text-base text-black/50">
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-3 ">
            <h4 className="text-lg font-body mb-4">Newsletter</h4>
            <p>Join & get important news regularly</p>
            <div className="flex mt-6 mb-2 relative">
              <input
                className="py-2 px-3 rounded-md border-2 bg-black/10 focus:outline-none focus:border-black/50 w-full h-[60px]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="rounded-md bg-black text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 absolute right-3 top-0 bottom-0 my-2 px-5">
                Send
              </button>
            </div>
            <p className="text-[#979797] text-sm">
              We only send intersting and relevant emails.
            </p>
          </div>
        </div>
        {/* Sub Footer */}
        <div className="flex items-center justify-between py-4">
          {/* Privacy and Terms */}
          <div>
            <a href="#" className="text-gray-500 mr-4">
              Privacy &amp; Terms
            </a>
            <a href="#" className="text-gray-500">
              Contact Us
            </a>
          </div>
          {/* Jobi Inc. */}
          <div className="text-gray-500">Copyright &copy;2022 Jobi Inc.</div>
          {/* Social Media Icons */}
          <div className="flex ">
            <a
              href="#"
              // IMPORTANT Change text color of hover text later to a custom color
              className="text-gray-500 hover:text-green-500 mr-4 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-500 mr-4 text-lg"
            >
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500 text-lg">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
