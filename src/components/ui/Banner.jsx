import React from 'react';
import bgShapeSmall from '../../assets/bgShapeSmall.png';

function Banner() {
  return (
    <section className="relative">
      {/* Bottom Left Graphic */}
      <img
        className="absolute bottom-0 left-0"
        src={bgShapeSmall}
        alt="Striped patterned garphic"
      />
      {/* Banner Content Container */}
      <div className="wrapper pb-[114px]">
        {/* Title */}
        <h1 className="text-white text-[64px] text-center">Job Listing</h1>
        {/* Sub-title */}
        <p className="text-white text-center text-[22px] mt-5">
          We delivered blazing fast & striking work soludtion
        </p>

        <div className="bg-white rounded-lg h-[100px] laptop:w-[69.5%] w-full z-20 flex items-center mx-auto mt-10">
          <div className="flex w-full ml-10 space-x-10">
            <div className="flex flex-col w-full self-center space-y-4 ">
              <label htmlFor="search">What are you looking for?</label>
              <input
                aria-label="search"
                type="search"
                name="search"
                id="search"
                placeholder="Example: UI Designer"
              />
            </div>
            <div className="flex flex-col w-full self-center space-y-4">
              {/* IMPORTANT Return here and add a drop down menu */}
              <p>Category</p>
              <p>Web Design</p>
            </div>
          </div>
          <div className="h-full ml-auto">
            <button className="h-full rounded-l-none rounded-r-lg w-[190px]">
              search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
