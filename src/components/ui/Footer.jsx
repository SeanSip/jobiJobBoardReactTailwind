import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import footerBgShape from '../../assets/footerBgShape.png';
import { FaPinterestP, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
              <li className=" ">
                <Link to="" onClick={handleScrollToTop}>
                  Take the tour
                </Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Live chat</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Self-service</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Mobile</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Collaberation</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Reviews</Link>
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
                <Link to="/about-us">About us</Link>
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
                <Link onClick={handleScrollToTop}>Terms of use</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Terms & conditions</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Privacy</Link>
              </li>
              <li>
                <Link onClick={handleScrollToTop}>Cookie policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-8 xl:col-span-3 xl:px-0 sm:px-20 mx-auto md:mx-0 w-full">
            <h4 className="text-lg font-body mb-4">Newsletter</h4>
            <p>Join & get important news regularly</p>
            <div className="flex mt-6 mb-2 relative">
              <input
                className="py-2 px-3 rounded-l-md border-2 bg-black/10 focus:outline-none focus:border-black/50 w-full h-[60px]"
                type="text"
                placeholder="Enter your email"
              />
              <div className="bg-black/10 px-[50px] relative rounded-r-md">
                <button className="focus:outline-none focus:bg-indigo-600 absolute right-3 bottom-[17.5px] my-0 py-0 px-0 bg-gray-200 rounded-none border-none h-fit">
                  <span className="bg-black hover:bg-color-one hover:text-black border-2 border-transparent hover:border-black rounded-md py-2 px-4 text-white">
                    Send
                  </span>
                </button>
              </div>
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
              to="https://seansipus.com"
              className="text-gray-500 mr-1 text-lg border-4 border-transparent hover:border-color-one rounded-full p-1 hover:scale-125 transition-all ease-in-out duration-300 focus:scale-125 hover:bg-color-background hover:text-color-one focus:border-color-one focus:outline-none focus:bg-color-background focus:text-color-one"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://seansipus.com"
              className="text-gray-500 mr-1 text-lg border-4 border-transparent hover:border-color-one rounded-full p-1 hover:scale-125 transition-all ease-in-out duration-300 focus:scale-125 hover:bg-color-background hover:text-color-one focus:border-color-one focus:outline-none focus:bg-color-background focus:text-color-one"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://seansipus.com"
              className="text-gray-500 text-lg border-4 border-transparent hover:border-color-one rounded-full p-1 hover:scale-125 transition-all ease-in-out duration-300 focus:scale-125 hover:bg-color-background hover:text-color-one focus:border-color-one focus:outline-none focus:bg-color-background focus:text-color-one"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
