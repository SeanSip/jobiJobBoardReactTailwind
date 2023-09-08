import React from 'react';
import Banner from '../components/ui/Banner';
import popularBanner from '../assets/popularBanner.png';

function MembershipPage() {
  return (
    <>
      <Banner title={'Pricing'} subTitle={'Choose your membership'} />
      <div className="bg-white pt-[88px]">
        <h2 className="text-center">Simple Plan for All</h2>
        <div className="wrapper">
          <ul className="flex mx-auto justify-center items-center w-full pt-20 pb-16 flex-col lg:flex-row space-y-10 lg:space-y-0 ">
            <li className="pricingCard">
              <div className="flex justify-center flex-col items-center h-full">
                <h3>Standard</h3>
                <h4 className="mt-2 text-2xl flex relative font-title">
                  <span className="pt-2">$</span>
                  <span className="ml-[14px] text-7xl">0.</span>
                  <span className="ml-[3px] pt-2">00</span>
                </h4>
                <div className="my-14 space-y-4 flex justify-center items-center flex-col">
                  <p className="">1 Domain</p>
                  <p className="">1 Year Premium Support</p>
                  <p className="">3gb Hosting</p>
                </div>
                <button className="bg-[#31795a] focus:text-[#31795a] focus:outline-none text-white hover:removeTextShadow w-full focus:bg-[#bae800]">
                  Choose Plan
                </button>
              </div>
            </li>
            <li className="pricingCard mx-[30px] relative">
              <div className="flex absolute top-10 left-0">
                <img
                  className="drop-shadow-md"
                  src={popularBanner}
                  alt="flag graphic"
                />
                <p className="absolute text-xs mx-3 my-[7px]">POPULAR</p>
              </div>
              <div className="flex justify-center flex-col items-center h-full">
                <h3>Gold</h3>
                <h4 className="mt-2 text-2xl flex relative font-title">
                  <span className="pt-2">$</span>
                  <span className="ml-[14px] text-7xl">27.</span>
                  <span className="ml-[3px] pt-2">99</span>
                </h4>
                <div className="my-14 space-y-4 flex justify-center items-center flex-col">
                  <p className="">3 Domains</p>
                  <p className="">2 Years Premium Support</p>
                  <p className="">10gb Hosting</p>
                </div>
                <button className="bg-[#31795a] focus:text-[#31795a] focus:outline-none focus:bg-[#bae800] text-white hover:removeTextShadow w-full">
                  Choose Plan
                </button>
              </div>
            </li>
            <li className="pricingCard">
              <div className="flex justify-center flex-col items-center h-full">
                <h3>Diamond</h3>
                <h4 className="mt-2 text-2xl flex relative font-title">
                  <span className="pt-2">$</span>
                  <span className="ml-[14px] text-7xl">39.</span>
                  <span className="ml-[3px] pt-2">99</span>
                </h4>
                <div className="my-14 space-y-4 flex justify-center items-center flex-col">
                  <p className="">Unlimited Domains</p>
                  <p className="">3 Years Premium Support</p>
                  <p className="">Unlimited Hosting</p>
                </div>
                <button className="bg-[#31795a] focus:text-[#31795a] focus:outline-none focus:bg-[#bae800] text-white hover:removeTextShadow w-full">
                  Choose Plan
                </button>
              </div>
            </li>
          </ul>
          <p className="text-center pb-[167px]">
            Please choose a plan that best fits you
          </p>
        </div>
      </div>
    </>
  );
}

export default MembershipPage;
