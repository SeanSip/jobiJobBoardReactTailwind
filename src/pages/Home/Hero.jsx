import React from 'react';
import bgShapeSmall from '../../assets/bgShapeSmall.png';
import bgShapeLarge from '../../assets/bgShapeLarge.png';
import heroImage from '../../assets/heroImage.jpg';

const Hero = () => {
  return (
    <div className="w-full h-[814px] relative">
      <div className="wrapper">
        <div className="w-full relative pt-[112px]">
          <div className="flex flex-col items-center laptop:items-start laptop:static absolute w-full ">
            <h1 className="text-5xl phone:text-7xl xl:text-8xl font-title w-fit flex flex-col z-20 text-center sm:text-left">
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
            <div className="bg-white rounded-lg h-fit laptop:h-[100px] laptop:w-[69.5%] w-full z-20 flex items-center laptop:flex-row flex-col">
              <div className="flex flex-col phone:flex-row w-full ml-0 mobile:ml-10 space-x-0 mobile:space-x-10 laptop:flex-row">
                <div className="flex flex-col w-full self-center space-y-4 mobile:py-0 py-5 items-center">
                  <label htmlFor="search">What are you looking for?</label>
                  <input
                    aria-label="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="UI Designer"
                    className="text-center"
                  />
                </div>
                <div className="flex flex-col w-full self-center space-y-4 mobile:py-0 py-5 items-center">
                  <label htmlFor="category">Category</label>
                  <p>Web Design</p>
                </div>
              </div>
              <div className="h-full ml-auto laptop:w-fit w-full ">
                <button className="h-full rounded-l-none rounded-r-lg w-full laptop:w-[190px]">
                  search
                </button>
              </div>
            </div>
            <p className="text-white mt-4">
              Populer: Design, Art, Business, Video Editing
            </p>

            <div className="hidden laptop:block absolute -right-0">
              <img
                className="relative z-10 w-[606px] h-[785px] bg-cover"
                src={heroImage}
                alt="Person sitting down on floor working on their laptop"
              />
              <img
                className="absolute w-[596px] h-[731px] -top-8 right-12 -z-20"
                src={bgShapeLarge}
                alt="Striped patterned garphic"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0"
        src={bgShapeSmall}
        alt="Striped patterned garphic"
      />
    </div>
  );
};

export default Hero;
