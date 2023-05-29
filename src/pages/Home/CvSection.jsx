import React from 'react';
import circleSmall from '../../assets/circleSmall.png';
import circleLarge from '../../assets/circleLarge.png';
import imageShapeLeft from '../../assets/imageShapeLeft.png';
import imageShapeRight from '../../assets/imageShapeRight.png';
import cvButtonShape from '../../assets/cvButtonShape.png';
import cvPerson from '../../assets/cvPerson.webp';

function CvSection() {
  return (
    <section className="bg-white pt-[180px]">
      {/* Cv Main Container */}
      <div className="wrapper bg-color-background h-[540px] relative">
        {/* Circle Image Left */}
        <img
          className="absolute left-0 top-0"
          src={circleSmall}
          alt="Circle graphic for background"
        />
        {/* Circle Image Right */}
        <img
          className="absolute right-0 bottom-0"
          src={circleLarge}
          alt="Circle graphic for background"
        />
        {/* Left Image and Right Content Container */}
        <div className="flex h-full">
          {/* Left Image Container */}
          <div className="laptop:w-full">
            <div className="w-[449px] h-[457px] relative top-[3.05rem] left-[50px] xl:left-[100px] laptop:block hidden">
              <img
                src={cvPerson}
                alt="Image of a person pointing to their side"
              />
              <img
                className="absolute left-4 top-20"
                src={imageShapeLeft}
                alt="Graphic design for background of two lines expanding outwards to the left"
              />
              <img
                className="absolute right-4 top-10"
                src={imageShapeRight}
                alt="Graphic design for background of three lines expanding outwards to the right"
              />
            </div>
          </div>
          {/* Right Side Content Container */}
          <div className="w-full self-center mb-5">
            <h2 className="text-white flex flex-col laptop:text-left text-center">
              Get your
              <span className="text-color-one">
                Matched Jobs <span className="text-white">in a</span>
              </span>
              few minutes.
            </h2>
            <p className="text-color-gray text-xl w-6/12 laptop:w-8/12 mt-6 laptop:text-left text-center mx-auto laptop:mx-0">
              Find your dream job & earn from world leading brands. Upload your
              CV now.
            </p>
            <button className="flex gap-x-4 rounded-md py-3 text-lg font-button mt-12 mx-auto laptop:mx-0">
              <img
                className="self-center w-5 mt-1"
                src={cvButtonShape}
                alt="Arrow pointing upwards into a rectangle shape icon for uploading content"
              />
              Upload your CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CvSection;
