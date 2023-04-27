import React from 'react';
import { Link } from 'react-router-dom';
import portraitOne from '../../assets/portraitOne.webp';
import portraitTwo from '../../assets/portraitTwo.webp';
import portraitThree from '../../assets/portraitThree.webp';
import smallPortraitOne from '../../assets/smallPortraitOne.webp';
import smallPortraitTwo from '../../assets/smallPortraitTwo.webp';
import smallPortraitThree from '../../assets/smallPortraitThree.webp';
import smallPortraitFour from '../../assets/smallPortraitFour.webp';
import bgDarkShapeSmall from '../../assets/bgDarkShapeSmall.png';
import backgroundDots from '../../assets/backgroundDots.png';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid';

import check from '../../assets/check.png';

const ExpertsSection = () => {
  return (
    <section className="bg-white pt-[191px] pb-[152px] overflow-hidden">
      <div className="flex xl:flex-row flex-col-reverse items-center xl:items-start wrapper ">
        {/* Left side container */}
        <div className="w-[632.3px] h-[610px] -mt-24 experImg:-mt-6 sm:mt-14 xl:mr-[103px] mr-0 xl:mt-0 scale-50 experImg:scale-75 sm:scale-100">
          {/* Top Image and search bar container */}
          <div className="flex flex-row relative">
            <img
              className="w-[321px] h-[197px] bg-cover"
              src={portraitOne}
              alt=""
            />
            <div className="bg-white shadow-2xl absolute left-[230px] top-[60px] w-[261px] rounded-md">
              <div className="flex">
                <p className=" py-[24px] pl-6 ">Designer, Brand, Logo</p>
                <div className="absolute -right-[90px] top-[1px] bg-red-500 p-[24px] rounded-md shadow-2xl">
                  <MagnifyingGlassIcon className="flex items-center w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <img
              className="pl-8"
              src={backgroundDots}
              alt="Background grid of dot shapes"
            />
          </div>
          {/* Bottom container */}
          <div className="flex pt-8 gap-x-8 relative">
            <img className=" h-fit" src={portraitTwo} alt="" />
            <img src={portraitThree} alt="" />
            <div className="bg-white flex h-fit absolute right-[24px] top-3 shadow-2xl p-3 rounded-md">
              <div className="p-6 h-fit bg-[#FFE5E5] rounded-full relative">
                <img className="w-4 h-4 absolute inset-4" src={check} alt="" />
              </div>
              <div className="flex flex-col pl-4">
                <p className="text-sm">Payment</p>
                <p className="text-lg">Escrow System</p>
              </div>
            </div>
          </div>
          {/* Last container */}
          <div className="flex relative">
            <div className="flex flex-col bg-white px-6 pb-3 pt-3 rounded-xl shadow-2xl absolute -top-[73px] -left-[8px]">
              <p className="text-center mb-2">18k + candidates</p>
              <div className="flex mr-4">
                <img
                  src={smallPortraitOne}
                  alt="Small rounded portrait image of Jobi applicant"
                  className="w-[74px] bg-white p-2 bg-contain rounded-full -mr-6"
                />
                <img
                  src={smallPortraitTwo}
                  alt="Small rounded portrait image of Jobi applicant"
                  className="w-[74px] bg-white p-2 bg-contain rounded-full -mr-6"
                />
                <img
                  src={smallPortraitThree}
                  alt="Small rounded portrait image of Jobi applicant"
                  className="w-[74px] bg-white p-2 bg-contain rounded-full -mr-6"
                />
                <img
                  src={smallPortraitFour}
                  alt="Small rounded portrait image of Jobi applicant"
                  className="w-[74px] bg-white p-2 bg-contain rounded-full -mr-6"
                />
                <div className="flex items-center justify-center w-[74px] bg-white p-2 bg-contain rounded-full -mr-6">
                  <div className="bg-[#E2EEF1] rounded-full p-4">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute right-16 w-10 h-10"
              src={bgDarkShapeSmall}
              alt=""
            />
          </div>
        </div>

        {/* Right side container */}
        <div className="flex flex-col w-fit max-w-[516px] phone:items-start items-center">
          <h2 className="text-center sm:text-left">
            Get over 50.000+ talented experts in jobi.
          </h2>
          <p className="mt-[32px] w-10/12">
            A full hybrid workforce management tools are yours to use, as well
            as access to our top 1% of talent.
          </p>
          <div className="flex flex-col mt-[28px] space-y-5">
            <div className="flex space-x-6">
              <img
                className="h-fit self-center"
                src={check}
                alt="Checkmark icon graphic"
              />
              <p> Seamless searching</p>
            </div>
            <div className="flex space-x-6">
              <img
                className="h-fit self-center"
                src={check}
                alt="Checkmark icon graphic"
              />
              <p>Get top 3% experts for your project</p>
            </div>
            <div className="flex space-x-6">
              <img
                className="h-fit self-center"
                src={check}
                alt="Checkmark icon graphic"
              />
              <p>Protected payments system</p>
            </div>
          </div>
          <Link
            to="/post-job"
            aria-label="link to post job page"
            role="button"
            className="linkButton"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
