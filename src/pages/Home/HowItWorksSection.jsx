import React from 'react';
import howItWorksTextGraphic from '../../assets/howItWorksTextGraphic.png';
import howItWorksIcon1 from '../../assets/howItWorksIcon1.png';
import howItWorksIcon2 from '../../assets/howItWorksIcon2.png';
import howItWorksIcon3 from '../../assets/howItWorksIcon3.png';
import shape from '../../assets/shape.png';
import arrowGraphic from '../../assets/arrowGraphic.png';
import bgShapeSmall from '../../assets/bgShapeSmall.png';

function HowItWorksSection() {
  return (
    <section className="pt-[110px] pb-[129px] relative">
      {/* Top left background graphic */}
      <img
        className="absolute top-0 w-20 h-12"
        src={bgShapeSmall}
        alt="Striped patterned garphic"
      />
      <div className="flex flex-col items-center wrapper">
        <div className="flex w-fit relative mb-24">
          <h2 className="text-white">How it works?</h2>
          <img
            className="absolute right-0 top-0 -mr-24 -mt-12 hidden sm:block"
            src={howItWorksTextGraphic}
            alt="Gaphic of three yellow lines bursting outwards from the top-right corner of the heading text"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center">
            <img
              className="mb-[30px]"
              src={howItWorksIcon1}
              alt="Circular icon graphic of a person emoji"
            />
            <h3 className="text-white text-xl capitalize text-center">
              create account
            </h3>
            <p className="text-[#81B197] text-center w-full max-w-[312px] mt-4">
              It’s very easy to open an account and start your journey.
            </p>
          </div>
          <img
            className="h-fit mt-0 lg:mt-5 rotate-90 lg:rotate-0 w-24 self-center lg:self-start lg:w-fit lg:py-0 py-16 translate-x-2 lg:translate-x-0"
            src={arrowGraphic}
            alt="Garphic of a dotted arrow pointing to the next element"
          />
          <div className="flex flex-col items-center">
            <img
              className="mb-[30px]"
              src={howItWorksIcon2}
              alt="Circular icon graphic of a cartoon piece of paper with lines representing the text"
            />
            <h3 className="text-white text-xl capitalize text-center">
              Complete your profile
            </h3>
            <p className="text-[#81B197] text-center w-full max-w-[312px] mt-4">
              Complete your profile with all the info to get attention of
              client.
            </p>
          </div>
          <img
            className="h-fit mt-0 lg:mt-5 rotate-90 lg:rotate-0 w-24 self-center lg:self-start lg:w-fit lg:py-0 py-16 translate-x-2 lg:translate-x-0"
            src={arrowGraphic}
            alt="Garphic of a dotted arrow pointing to the next element"
          />
          <div className="flex flex-col items-center">
            <img
              className="mb-[30px]"
              src={howItWorksIcon3}
              alt="Circular icon graphic of cartoon pencil"
            />
            <h3 className="text-white text-xl capitalize text-center">
              Apply to job or hire
            </h3>
            <p className="text-[#81B197] text-center w-full max-w-[312px] mt-4">
              Apply & get your preferable jobs with all the requirements and get
              it.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom right background graphic */}
      <img
        className="absolute bottom-4 right-4 w-16 h-16 xl:w-fit xl:h-fit"
        src={shape}
        alt="A graphic design of a squiqgly line shape"
      />
    </section>
  );
}

export default HowItWorksSection;
