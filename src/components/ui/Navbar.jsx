import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import category from '../../assets/Category.png';
import shape from '../../assets/shape.png';
import SubMenu from './SubMenu';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  // Define State
  const [stopScroll, setStopScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNavSubMenu, setMobileNavSubMenu] = useState(false);
  const [mobileNav, setOpenMobileNav] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  // Handle click function call back hook for toggling the mobile nav
  const handleClick = useCallback(() => {
    setOpenMobileNav(prev => !prev);
    setStopScroll(prev => !prev);
    setMobileNavSubMenu(false);
  }, []);

  const handleMobileSubMenu = () => setMobileNavSubMenu(!mobileNavSubMenu);

  function handlePagesBlur() {
    // Sets a delay before closing the submenu
    setCloseTimer(
      setTimeout(() => {
        setIsOpen(false);
        setMobileNavSubMenu(false);
      }, 100)
    );
  }

  function handlePagesFocus() {
    // Cancels the close timer if it's running
    clearTimeout(closeTimer);
    setIsOpen(true);
    setMobileNavSubMenu(true);
  }

  useEffect(() => {
    if (stopScroll) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }

    const handleResize = () => {
      if (window.innerWidth >= 1124 && stopScroll) {
        document.body.classList.remove('overflowHidden');
        setOpenMobileNav(false);
        setMobileNavSubMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [stopScroll]);

  useEffect(() => {
    const pages = document.querySelectorAll('nav ul a:not(.pages)');
    const subPages = document.querySelectorAll('nav ul li ul:not(.pages) ');

    const handleClick = () => setOpenMobileNav(false);
    const handleKeyPress = () => setOpenMobileNav(false);

    if (mobileNav) {
      pages.forEach(li => {
        li.addEventListener('click', handleClick);
        li.addEventListener('keypress', handleKeyPress);
      });
      subPages.forEach(li => {
        li.addEventListener('click', handleClick);
        li.addEventListener('keypress', handleKeyPress);
      });
    }

    return () => {
      pages.forEach(li => {
        li.removeEventListener('click', handleClick);
        li.removeEventListener('keypress', handleKeyPress);
      });
      subPages.forEach(li => {
        li.removeEventListener('click', handleClick);
        li.removeEventListener('keypress', handleKeyPress);
      });

      if (mobileNav) {
        setStopScroll(false);
      }
    };
  }, [mobileNav, handleClick]);

  return (
    // Navbar Container
    <nav
      onMouseLeave={() => setIsOpen(false)} // Closes sub menu if cursor leaves nav section
      className="w-screen h-[50px] tablet:h-[100px] z-50 fixed top-0 pb-1 bg-[#244034]"
    >
      <div
        className={
          !mobileNav
            ? 'navWrapper flex justify-between items-center w-full h-full'
            : 'navWrapper flex justify-between items-center w-full h-full bg-[#244034] z-50'
        }
      >
        <div className="flex items-center ">
          <Link className="flex" to="/" onClick={handlePagesBlur}>
            <img
              className="w-6 sm:w-8 h-fit self-center xl:w-10 mr-2 xl:mr-3"
              src={logo}
              alt="Company logo"
            />
            <a className="text-3xl font-logo text-white xl:text-4xl">jobi</a>
          </Link>
          <ul className="hidden items-center text-white laptop:flex ">
            <li>
              <button className="bg-white/10 flex text-color-one capitalize ml-4 mr-6 xl:ml-10 xl:mr-16 py-1 xl:py-2 ">
                <img
                  className="w-2 xl:w-3 h-fit self-center mr-2"
                  src={category}
                  alt="Graphic of 4 small boxes stacked 2x2 ontop of one another"
                />
                category
              </button>
            </li>
            <Link to="/" onClick={handlePagesBlur}>
              <li className="navbarLi">Home</li>
            </Link>
            <Link to="/job-listing" onClick={handlePagesBlur}>
              <li className="navbarLi">Jobs</li>
            </Link>
            <li className="navbarLi">Explore</li>
            <li className="navbarLi">Contact</li>
            <li
              className={
                !isOpen
                  ? 'navbarLi pages'
                  : 'text-color-one border-b-2 pb-2 border-b-transparent transition-all ease-linear duration-100 p-3 pages'
              }
              onMouseEnter={() => setIsOpen(prev => !prev)}
              onMouseLeave={() => setIsOpen(prev => !prev)}
              tabIndex={0}
              onFocus={() => setIsOpen(true)}
            >
              Pages
              {isOpen && (
                <ul
                  onBlur={handlePagesBlur}
                  onFocus={handlePagesFocus}
                  className="absolute font-body space-y-3 w-48 mt-6 bg-white shadow-lg text-black py-6 -ml-5 pl-8 pr-16 rounded-md after:contents-[''] after:bg-transparent after:w-full after:h-10 after:absolute after:-top-10 after:left-0"
                >
                  <li className="hover:underline">
                    <Link onClick={handlePagesBlur} to="/about-us">
                      About us
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">Pricing</li>
                  <li className="hover:underline ">
                    <Link onClick={handlePagesBlur} to="/404">
                      Error 404
                    </Link>
                  </li>
                  <li className="hover:underline cursor-pointer">Blog</li>
                  <li className="hover:underline cursor-pointer">Contact us</li>
                  <div className="absolute left-8 top-[-18px] w-4 h-4 border-t-2 border-r-2 border-b-0 border-l-2 border-white transform rotate-45 bg-white"></div>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <img
          className="mt-[0px] h-9 tablet:h-20"
          src={shape}
          alt="A graphic design of a squiqgly line shape "
        />
        <div className="hidden laptop:flex pr-4 capitalize text-white">
          <ul className="flex mr-4">
            <Link to="/post-job">
              <li className=" navbarLi">post job</li>
            </Link>
            <div className="text-white/50 after:content-['|'] after:m-3 after:font-thin after:text-lg self-center"></div>
            <li className=" navbarLi">login</li>
          </ul>
          <button>Hire Top Talents</button>
        </div>

        <button
          className="laptop:hidden cursor-pointer z-50 bg-transparent p-1 hover:bg-transparent border-none focus:bg-transparent"
          onClick={handleClick}
        >
          {!mobileNav ? (
            <Bars3Icon className="w-8 h-8 text-color-one" />
          ) : (
            <XMarkIcon className="w-8 h-8 text-color-one" />
          )}
        </button>
      </div>
      {/* <div className=""> IMPORTANT  remove later*/}
      <ul
        className={
          !mobileNav
            ? 'hidden'
            : 'absolute right-0 top-0 bg-black/70 backdrop-blur-lg w-full h-screen phone:px-10 px-4 py-[100px] flex flex-col items-start text-white overflow-auto -z-10'
        }
      >
        <div className="w-full my-10 flex flex-col mx-auto flex-wrap items-center">
          <ul className="my-0 pb-4 flex w-full text-center flex-col">
            <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0">
              <Link to="/post-job" className="w-full">
                <li className="hover:text-color-one hover:cursor-pointer border-2 sm:border-r-[1px] border-white/20 hover:border-b-2 hover:border-color-one p-4">
                  post job
                </li>
              </Link>
              <li className="text-white hover:text-color-one hover:cursor-pointer border-2 border-white/20 hover:border-b-2 hover:border-color-one w-full p-4 sm:border-l-[1px]">
                log in
              </li>
            </div>
            <div className="flex mt-14 justify-center gap-x-4 sm:flex-row flex-col sm:space-y-0 space-y-6 items-center">
              <button className="w-fit">Hire Top Talents</button>
              <li>
                <button className="bg-white/10 flex text-color-one capitalize">
                  <img
                    className="w-3 h-fit self-center mr-2"
                    src={category}
                    alt="Four squares in a 2x2 grid"
                  />
                  category
                </button>
              </li>
            </div>
          </ul>
        </div>

        <ul className="w-full flex flex-col gap-y-6">
          <Link to="/">
            <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              home
            </li>
          </Link>
          <Link to="/job-listing">
            <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              jobs
            </li>
          </Link>
          <Link to="/">
            <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              explore
            </li>
          </Link>
          <Link to="/" className="">
            <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              contact
            </li>
          </Link>
          <li
            className={
              !mobileNavSubMenu
                ? 'hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full pages'
                : 'text-color-one cursor-pointer w-full pages'
            }
            tabIndex={0}
            onKeyDown={event => {
              if (event.key === ' ' || event.key === 'Enter') {
                handleMobileSubMenu();
              }
            }}
            onBlur={handlePagesBlur}
            onFocus={handlePagesFocus}
          >
            pages
            <div
              className={
                !mobileNavSubMenu
                  ? 'border-transparent'
                  : 'border-b-2 mt-2 border-color-one'
              }
            ></div>
            <ul
              className={
                !mobileNavSubMenu
                  ? 'hidden '
                  : 'block relative capitalize bg-white/10 text-sm mt-[1px] rounded-b-lg'
              }
            >
              <Link to="/about-us">
                <li
                  className={
                    mobileNavSubMenu
                      ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer py-1 px-4 pages'
                      : 'text-white pages'
                  }
                >
                  about us
                </li>
              </Link>

              <li
                className={
                  mobileNavSubMenu
                    ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer py-1 px-4 pages'
                    : 'text-white pages'
                }
              >
                pricing
              </li>
              <Link to="/404">
                <li
                  className={
                    mobileNavSubMenu
                      ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer py-1 px-4 pages'
                      : 'text-white pages'
                  }
                >
                  error 404
                </li>
              </Link>
              <li
                className={
                  mobileNavSubMenu
                    ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer py-1 px-4 pages'
                    : 'text-white pages'
                }
              >
                blog
              </li>
              <li
                className={
                  mobileNavSubMenu
                    ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one w-full cursor-pointer py-1 px-4 rounded-b-lg pages'
                    : 'text-white pages'
                }
              >
                contact us
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </nav>
    // </div> IMPORTANT remove later
  );
};

export default Navbar;
