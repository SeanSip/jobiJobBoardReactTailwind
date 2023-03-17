import React from 'react';
import collaborationGraphic from '../../assets/collaborationGraphic.png';
import next from '../../assets/next.png';

function CollaborationSection() {
  return (
    <section className="bg-white pb-[152px]">
      {/* Wrapper Container */}
      <div className="wrapper">
        <div className="flex items-center justify-evenly flex-col-reverse xl:flex-row gap-y-20 xl:gap-y-0">
          {/* Left Side Image */}
          <img
            src={collaborationGraphic}
            alt="Gaphic of the Jobi logo surrounded by many other light colored circles"
          />
          {/* Right Side Context Container */}
          <div className="flex flex-col">
            <p className="uppercase text-color-gray mb-[18px]">top brand</p>
            <h2 className="flex flex-col text-6xl mb-11">
              Collaboration with
              <span>Top Brands.</span>
            </h2>
            <p className="flex flex-col text-2xl mb-12">
              <span>We collaborate with a number of top tier</span>{' '}
              <span>companies on imagining the future of work,</span> have a
              look.
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
