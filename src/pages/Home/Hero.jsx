import React from 'react';
import bgShapeSmall from '../../assets/bgShapeSmall.png';
import bgShapeLarge from '../../assets/bgShapeLarge.png';
import heroImage from '../../assets/heroImage.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[814px] border-b-2 border-color-one relative">
      <div className="wrapper">
        <div className="w-full relative pt-[112px]">
          <div className="flex flex-col items-center laptop:items-start static laptop:absolute w-full ">
            <h1 className="text-7xl xl:text-8xl font-title w-fit flex flex-col z-20">
              <span className="textShadow text-white capitalize">
                find & hire
              </span>
              <span className="textShadow text-color-one">
                Top 3% of experts
              </span>
              <span className="textShadow text-green-400">on jobi.</span>
            </h1>
            <p className="text-white mt-12 mb-9 font-body text-[22px] z-20">
              We delivered blazing fast & striking work solutions
            </p>
            <div className="bg-white rounded-lg h-[100px] laptop:w-[69.5%] w-full z-20 flex items-center">
              <div className="flex w-full ml-10 space-x-10">
                <div className="flex flex-col w-full self-center space-y-4 ">
                  <label htmlFor="search">What are you looking for?</label>
                  <input
                    aria-label="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="UI Designer"
                  />
                </div>
                <div className="flex flex-col w-full self-center space-y-4">
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
            <p className="text-white mt-4">
              Populer: Design, Art, Business, Video Editing
            </p>

            <div className="hidden laptop:block absolute -right-0">
              <img
                className="relative z-10 w-[606px] h-[785px]"
                src={heroImage}
                alt=""
              />
              <img
                className="absolute w-[596px] h-[731px] -top-8 right-12 -z-20"
                src={bgShapeLarge}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0" src={bgShapeSmall} alt="" />
    </div>
  );
};

export default Hero;
