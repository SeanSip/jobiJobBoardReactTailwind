import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/logo.png';
import category from '../assets/Category.png';
import shape from '../assets/shape.png';
import SubMenu from './SubMenu';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [stopScroll, setStopScroll] = useState(false);

  // State for open sub menu on hover for the drop down menu on the li elements
  const [isOpen, setIsOpen] = useState(false);

  const [mobileNavSubMenu, setMobileNavSubMenu] = useState(false);
  const handleMobileSubMenu = () => setMobileNavSubMenu(!mobileNavSubMenu);

  const [mobileNav, setOpenMobileNav] = useState(false);
  const handleClick = () => {
    setOpenMobileNav(!mobileNav);
    // setStopScroll(!stopScroll);
  };

  useEffect(() => {
    if (stopScroll) {
      document.body.classList.add('mobileNavOpen');
    } else {
      document.body.classList.remove('mobileNavOpen');
    }

    window.addEventListener('resize', e => {
      if (e.target.innerWidth >= 1124 && stopScroll === true) {
        document.body.classList.remove('mobileNavOpen');
        setOpenMobileNav(false);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [stopScroll]);

  useEffect(() => {
    if (mobileNav) {
      setStopScroll(true);
    } else {
      setStopScroll(false);
    }
  }, [mobileNav]);

  return (
    // Navbar Container
    <div
      onMouseLeave={() => setIsOpen(false)} // Closes sub menu if cursor leaves nav section
      className="w-screen h-[100px] z-50 fixed top-0 pb-1 bg-[#244034]"
    >
      <div
        className={
          !mobileNav
            ? 'navWrapper flex justify-between items-center w-full h-full'
            : 'navWrapper flex justify-between items-center w-full h-full bg-[#244034] z-50'
        }
      >
        <div className="flex items-center ">
          <img className="w-8 h-fit self-center sm:w-12" src={logo} alt="" />
          <h1 className="text-2xl ml-3 font-logo text-white sm:text-4xl">
            jobi
          </h1>
          <ul className="hidden capitalize items-center text-white laptop:flex ">
            <li>
              <button className="bg-white/10 flex text-color-one capitalize xl:ml-10 xl:mr-16">
                <img
                  className="w-3 h-fit self-center mr-2"
                  src={category}
                  alt=""
                />
                category
              </button>
            </li>
            <li className="pb-2 border-b-transparent hover:border-color-one border-b-2 transition-all ease-linear duration-100 cursor-pointer hover:text-color-one">
              home
            </li>
            <li className="pb-2 border-b-transparent hover:border-color-one border-b-2 transition-all ease-linear duration-100 cursor-pointer hover:text-color-one">
              job
            </li>
            <li className="pb-2 border-b-transparent hover:border-color-one border-b-2 transition-all ease-linear duration-100 cursor-pointer hover:text-color-one">
              explore
            </li>
            <li className="pb-2 border-b-transparent hover:border-color-one border-b-2 transition-all ease-linear duration-100 cursor-pointer hover:text-color-one">
              contact
            </li>
            <li
              className={
                !isOpen
                  ? 'pb-2 border-b-transparent hover:border-color-one border-b-2 transition-all ease-linear duration-100 cursor-pointer hover:text-color-one'
                  : 'text-color-one border-b-2 pb-2 border-b-transparent transition-all ease-linear duration-100 cursor-pointer'
              }
              onClick={() => setIsOpen(prev => !prev)}
            >
              pages
              <SubMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </li>
          </ul>
        </div>
        <img
          className="mt-[0px] h-20"
          src={shape}
          alt="A graphic design of a squiqgly line shape "
        />
        <div className="hidden laptop:flex pr-4">
          <ul className="flex mr-4">
            <li className="text-white after:content-['|'] after:ml-4 after:font-thin after:text-sm">
              post job
            </li>
            <li className="text-color-one">login</li>
          </ul>
          <button>Hire Top Talents</button>
        </div>

        <div
          className="laptop:hidden cursor-pointer z-50"
          onClick={handleClick}
        >
          {!mobileNav ? (
            <Bars3Icon className="w-8 h-8 text-color-one" />
          ) : (
            <XMarkIcon className="w-8 h-8 text-color-one" />
          )}
        </div>
      </div>
      {/* <div className=""> IMPORTANT  remove later*/}
      <ul
        className={
          !mobileNav
            ? 'hidden'
            : 'absolute right-0 top-0 bg-slate-800      w-full h-screen phone:px-10 px-4 py-[100px] flex flex-col items-start text-white overflow-auto -z-10'
        }
      >
        <div className="w-full border-2 my-10 flex flex-col mx-auto flex-wrap">
          <ul className="my-0 pb-4 flex">
            <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              post job
            </li>
            <li className="text-color-one hover:text-white hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
              log in
            </li>
          </ul>

          <button className="w-full max-w-xl">Hire Top Talents</button>
        </div>
        <li>
          <button className="bg-white/10 flex text-color-one capitalize">
            <img className="w-3 h-fit self-center mr-2" src={category} alt="" />
            category
          </button>
        </li>
        <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
          home
        </li>
        <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
          job
        </li>
        <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
          explore
        </li>
        <li className="hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full">
          contact
        </li>
        <li
          className={
            !mobileNavSubMenu
              ? 'hover:text-color-one hover:cursor-pointer border-b-2 border-white/20 hover:border-b-2 hover:border-color-one w-full'
              : 'text-color-one cursor-pointer w-full'
          }
          onClick={handleMobileSubMenu}
        >
          page
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
                : 'block relative capitalize bg-white/10 text-sm mt-4 rounded-lg'
            }
          >
            <li
              className={
                mobileNavSubMenu
                  ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer rounded-t-lg'
                  : 'text-white'
              }
            >
              about us
            </li>
            <li
              className={
                mobileNavSubMenu
                  ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer '
                  : 'text-white'
              }
            >
              pricing
            </li>
            <li
              className={
                mobileNavSubMenu
                  ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer '
                  : 'text-white'
              }
            >
              error 404
            </li>
            <li
              className={
                mobileNavSubMenu
                  ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one cursor-pointer '
                  : 'text-white'
              }
            >
              blog
            </li>
            <li
              className={
                mobileNavSubMenu
                  ? ' text-white hover:text-black hover:bg-color-one/50 hover:border-color-one w-full cursor-pointer rounded-b-lg'
                  : 'text-white'
              }
            >
              contact us
            </li>
          </ul>
        </li>
      </ul>
    </div>
    // </div> IMPORTANT remove later
  );
};

export default Navbar;