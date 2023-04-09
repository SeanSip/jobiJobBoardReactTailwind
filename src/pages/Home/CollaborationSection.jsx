import React from 'react';
import collaborationGraphic from '../../assets/collaborationGraphic.png';
import next from '../../assets/next.png';

function CollaborationSection() {
  return (
    <section className="bg-white pb-[152px]">
      {/* Wrapper Container */}
      <div className="wrapper">
        <div className="flex items-center justify-between flex-col-reverse xl:flex-row gap-y-20 xl:gap-y-0">
          {/* Left Side Image */}
          <img
            src={collaborationGraphic}
            alt="Gaphic of the Jobi logo and text surrounded by many other circles containting company logo's that Jobi collaborates with"
          />
          {/* Right Side Context Container */}
          <div className="flex flex-col items-center md:items-start">
            <p className="uppercase text-color-gray mb-[18px]">top brand</p>
            <h2 className="flex flex-col text-5xl mb-11 sm:text-6xl w-fit md:w-[30rem] text-center md:text-left">
              Collaboration with Top Brands.
            </h2>
            <p className="flex flex-col text-2xl mb-12 max-w-[34rem] text-color-lightest-text">
              We collaborate with a number of top tier companies on imagining
              the future of work, have a look.
            </p>
            <button className="collaborationBtn font-body flex">
              learn more
              <img
                className="ml-2 w-5 h-fit self-center"
                src={next}
                alt="Arrow graphic pointing to the right"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollaborationSection;
