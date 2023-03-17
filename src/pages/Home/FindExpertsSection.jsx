import React from 'react';
import next from '../../assets/next.png';
import back from '../../assets/back.png';
import categoryTitleShape from '../../assets/categoryTitleShape.png';

function FindExpertsSection() {
  return (
    <section className="bg-white">
      <div className="wrapper pt-[223px] pb-[180px]">
        <div className="flex items-center justify-between flex-col xl:flex-row xl:space-y-0 space-y-20">
          <div className="w-fit relative">
            <h2 className="flex flex-col">
              Find the best talent
              <span>on jobi.</span>
            </h2>
            <img
              className="absolute -right-24 -top-12"
              src={categoryTitleShape}
              alt=""
            />
          </div>
          <div className="flex relative w-52 items-center">
            {/* Back Arrow */}
            <img
              className="absolute left-0 hover:cursor-pointer hover:bg-[#D2F34C] p-10 rounded-full"
              src={back}
              alt=""
            />

            {/* Forward Arrow */}
            <img
              className="absolute right-0 hover:cursor-pointer hover:bg-[#D2F34C] px-8 py-10 rounded-full"
              src={next}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-8 xl:grid-cols-4 xl:w-full w-fit space-x-10 xl:space-x-0 mx-auto">
          <div className="flex flex-col text-center">
            <div className="expertsCard self-center "></div>
            <h3 className="mt-12 text-xl">Julie Ake</h3>
            <p className="text-[#81B197]">Product Designer</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="expertsCard self-center"></div>
            <h3 className="mt-12 text-xl">Juan Marko</h3>
            <p className="text-[#81B197]">Javascript Developer</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="expertsCard self-center"></div>
            <h3 className="mt-12 text-xl">Elizabeth Foster</h3>
            <p className="text-[#81B197]">UI/UX Desinger</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="expertsCard self-center"></div>
            <h3 className="mt-12 text-xl">Rashed Ka</h3>
            <p className="text-[#81B197]">Marketing Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindExpertsSection;
