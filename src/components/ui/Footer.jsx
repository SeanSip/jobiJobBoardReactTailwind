import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import footerBgShape from '../../assets/footerBgShape.png';
import { FaPinterestP, FaInstagram, FaFacebookF } from 'react-icons/fa';

import ModalPopUp from './ModalPopUp';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = event => {
    event.preventDefault();
    const emailInput = document.querySelector('#email');
    const emailError = document.querySelector('#emailErrorMessage');
    if (emailInput.checkValidity()) {
      setShowModal(true);
      emailInput.value = '';
      emailInput.placeholder = 'Enter email';
      emailError.style.display = 'none';
    } else {
      emailError.style.display = 'block';
      emailError.textContent = 'Please enter a valid email address';
      setTimeout(() => {
        emailError.style.display = 'none';
      }, 5000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className=" bg-white">
      {/* Modal Component */}
      <ModalPopUp
        tabIndex={-1}
        show={showModal}
        onClose={handleCloseModal}
        buttons={[
          {
            text: 'Okay',
            className: 'w-fit',
            onClick: handleCloseModal,
          },
        ]}
      >
        <p className="text-2xl text-center">
          Thank you subscribing to our newsletter!
        </p>
        <p className="text-xs text-center mt-2">
          * The newsletter is just for presentation purposes, you will not
          recieve any emails
        </p>
      </ModalPopUp>
      <div className=" text-black mx-auto wrapper">
        <div className="wrapper flex pt-[100px] pb-[70px] justify-between flex-col lg:flex-row border-b-[1px]">
          <div className="space-y-3 self-center lg:self-start lg:text-left text-center">
            <h2 className="text-4xl sm:text-5xl font-title ">
              Most complete job portal.
            </h2>
            <p className="text-color-apple-light font-body">
              Sign up and start finding your job or talents
            </p>
          </div>
          <div className="self-center gap-x-5 gap-y-5 lg:mt-0 mt-10 flex flex-wrap justify-center items-center">
            <Link
              to="/job-listing"
              className="rounded-md bg-transparent border-[1.5px] border-[#244034] py-[10.5px] px-4 hover:bg-color-secondary hover:text-white hover:textShadow hover:border-transparent focus:bg-color-secondary focus:text-white focus:textShadow focus:border-transparent "
            >
              Looking for a job?
            </Link>
            <Link
              to="/post-job"
              className="rounded-md py-3 px-7 bg-color-one hover:bg-color-secondary hover:text-white hover:textShadow focus:bg-color-secondary focus:text-white focus:textShadow"
            >
              Post a Job
            </Link>
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
            <h3 className="text-lg font-body mb-4 ">Products</h3>
            <ul className="flex flex-col leading-10 font-body text-base text-color-apple-light">
              <li>
                <Link onClick={handleScrollToTop}>Take the tour</Link>
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
            <h3 className="text-lg font-body mb-4">Links</h3>
            <ul className="leading-10 font-body text-base text-color-apple-light">
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
            <h3 className="text-lg font-body mb-4">Legal</h3>
            <ul className="leading-10 font-body text-base text-color-apple-light">
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
          <div className="col-span-8 xl:col-span-3 xl:px-0 sm:px-20 mx-auto md:mx-0 w-full ">
            <h3 className="text-lg font-body mb-4">Newsletter</h3>
            <p>Join & get important news regularly</p>
            <form action="" className="flex mt-6 mb-2 relative ">
              <label htmlFor="email" className="visuallyHidden">
                Email:
              </label>
              <span
                id="emailErrorMessage"
                className=" text-red-500 absolute -top-[18.5px] left-1"
              ></span>
              <input
                name="email"
                id="email"
                aria-label="email"
                aria-required="true"
                className="py-2 px-3 rounded-l-md border-2 bg-black/10 focus:outline-none focus:border-black/50 w-full h-[60px] "
                type="email"
                placeholder="Enter your email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <div className="bg-black/10 px-[50px] relative rounded-r-md">
                <button
                  onClick={handleButtonClick}
                  className="focus:outline-none focus:bg-indigo-600 absolute right-3 bottom-[17.5px] my-0 py-0 px-0 bg-gray-200 rounded-none border-none h-fit"
                >
                  <span className="bg-black rounded-md py-3 px-5 text-white hover:bg-color-secondary">
                    Send
                  </span>
                </button>
              </div>
            </form>

            <p className="text-color-apple-light text-sm">
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
              <FaFacebookF aria-hidden="true" />
              <span className="sr-only">Facebook logo</span>
            </Link>

            <Link
              to="https://seansipus.com"
              className="text-gray-500 mr-1 text-lg border-4 border-transparent hover:border-color-one rounded-full p-1 hover:scale-125 transition-all ease-in-out duration-300 focus:scale-125 hover:bg-color-background hover:text-color-one focus:border-color-one focus:outline-none focus:bg-color-background focus:text-color-one"
            >
              <FaInstagram aria-hidden="true" />
              <span className="sr-only">Instagram logo</span>
            </Link>

            <Link
              to="https://seansipus.com"
              className="text-gray-500 text-lg border-4 border-transparent hover:border-color-one rounded-full p-1 hover:scale-125 transition-all ease-in-out duration-300 focus:scale-125 hover:bg-color-background hover:text-color-one focus:border-color-one focus:outline-none focus:bg-color-background focus:text-color-one"
            >
              <FaPinterestP aria-hidden="true" />
              <span className="sr-only">Pinterest logo</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
