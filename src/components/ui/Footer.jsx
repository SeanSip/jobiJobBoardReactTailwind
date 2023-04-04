import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import footerBgShape from '../../assets/footerBgShape.png';
import { FaPinterestP, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className=" text-black mx-auto wrapper">
        <div className="wrapper flex pt-[100px] pb-[70px] justify-between flex-col lg:flex-row border-b-[1px]">
          <div className="space-y-3 self-center lg:self-start lg:text-left text-center">
            <h1 className="text-4xl sm:text-5xl font-title ">
              Most complete job portal.
            </h1>
            <p className="text-[#979797] font-body">
              Sign up and start finding your job or talents
            </p>
          </div>
          <div className="self-center gap-x-5 gap-y-5 lg:mt-0 mt-10 flex flex-wrap justify-center">
            <button className="rounded-md bg-transparent border-[1.5px] border-[#244034]">
              Looking for job?
            </button>
            <button className="rounded-md">Post a job</button>
          </div>
        </div>
        {/* Main Footer Grid */}
        <div className="md:grid flex sm:flex-row flex-col flex-wrap justify-between grid-cols-4 md:grid-cols-4 xl:grid-cols-11 sm:gap-4 gap-8 py-8 ">
          {/* Logo */}
          <div className="col-span-1 xl:col-span-2 flex-col flex justify-between mb-8 sm:mb-0">
            <div className="flex">
              <img
                className="h-fit self-center w-12"
                src={logo}
                alt="logo for jobi featuring two circles overlapping one another"
              />
              <h2 className=" ml-3 font-logo text-black text-4xl">jobi</h2>
            </div>
            <img
              className="w-12 hidden md:block"
              src={footerBgShape}
              alt="square shape pattern graphic with striped design"
            />
          </div>

          {/* Products */}
          <div className="col-span-1 xl:col-span-2">
            <h4 className="text-lg font-body mb-4 ">Products</h4>
            <ul className="flex flex-col leading-10 font-body text-base text-black/50">
              <li className="">
                <Link>Take the tour</Link>
              </li>
              <li>
                <Link>Live chat</Link>
              </li>
              <li>
                <Link>Self-service</Link>
              </li>
              <li>
                <Link>Mobile</Link>
              </li>
              <li>
                <Link>Collaberation</Link>
              </li>
              <li>
                <Link>Reviews</Link>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div className="col-span-1 xl:col-span-2">
            <h4 className="text-lg font-body mb-4">Links</h4>
            <ul className="leading-10 font-body text-base text-black/50">
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>About us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="col-span-1 xl:col-span-2">
            <h4 className="text-lg font-body mb-4">Legal</h4>
            <ul className="leading-10 font-body text-base text-black/50">
              <li>
                <Link>Terms of use</Link>
              </li>
              <li>
                <Link>Terms & conditions</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Cookie policy</Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-8 xl:col-span-3 xl:px-0 sm:px-20 mx-auto md:mx-0 w-full">
            <h4 className="text-lg font-body mb-4">Newsletter</h4>
            <p>Join & get important news regularly</p>
            <div className="flex mt-6 mb-2 relative">
              <input
                className="py-2 px-3 rounded-l-md border-2 bg-black/10 focus:outline-none focus:border-black/50 w-full h-[60px] mr-24"
                type="text"
                placeholder="Enter your email"
              />
              <button className="rounded-md bg-black text-white hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 absolute right-3 top-0 bottom-0 my-2 px-5">
                Send
                <div className="bg-black/10 h-[60px] w-[95px] inset-0 -top-[10px] -left-[3.8px] absolute rounded-r-md"></div>
              </button>
            </div>
            <p className="text-[#979797] text-sm">
              We only send intersting and relevant emails.
            </p>
          </div>
        </div>
        {/* Sub Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-y-2">
          {/* Privacy and Terms */}
          <div>
            <Link className="text-gray-500 mr-4">Privacy &amp; Terms</Link>
            <Link className="text-gray-500">Contact Us</Link>
          </div>
          {/* Jobi Inc. */}
          <div className="text-gray-500">Copyright &copy;2022 Jobi Inc.</div>
          {/* Social Media Icons */}
          <div className="flex ">
            <Link
              // IMPORTANT Change text color of hover text later to a custom color
              className="text-gray-500 hover:text-green-500 mr-4 text-lg"
            >
              <FaFacebookF />
            </Link>
            <Link className="text-gray-500 hover:text-green-500 mr-4 text-lg">
              <FaInstagram />
            </Link>
            <Link className="text-gray-500 hover:text-green-500 text-lg">
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
