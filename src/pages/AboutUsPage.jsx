import React, { useState } from 'react';
import bgShapeSmall from '../assets/bgShapeSmall.png';
import ExpertsSection from './Home/ExpertsSection';
import HowItWorksSection from './Home/HowItWorksSection';
import ClientFeedbackSection from './Home/ClientFeedbackSection';
import videoButton from '../assets/videoButton.png';
import Banner from '../components/ui/Banner';

function AboutUsPage() {
  // Button and Text Objects in useState for Right Side About Us Content
  const [buttonObjects, setButtonObjects] = useState([
    {
      id: 1,
      isPlusButton: true,
      heading: 'Who are we?',
      text: 'Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.',
    },
    {
      id: 2,
      isPlusButton: true,
      heading: `what's our goal`,
      text: 'Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.',
    },
    {
      id: 3,
      isPlusButton: true,
      heading: 'Our vision',
      text: 'Our founders Dustin Moskovitz and Justin lorem Rosenstein met while leading Engineering teams at Facebook quesi.',
    },
  ]);

  // Function for onClick event listener attached to the +/- button
  const handleClick = id => {
    setButtonObjects(prevState =>
      prevState.map(buttonObject =>
        buttonObject.id === id
          ? { ...buttonObject, isPlusButton: !buttonObject.isPlusButton }
          : { ...buttonObject, isPlusButton: true }
      )
    );
  };

  return (
    <>
      <header>
        {/* Banner Section */}
        <Banner title={'About us'} />
      </header>
      <section className="bg-white pt-[133px]">
        {/* Heading Text Left Container and About Us Right Content Container */}
        <div className="flex wrapper h-[500px] phone:h-[450px] xl:h-[355px] flex-col xl:flex-row justify-end relative">
          {/* Left Side Section Heading Text */}
          <div className="absolute xl:static top-0 left-0 right-0 flex flex-row xl:flex-col items-start mx-auto flex-wrap gap-x-3 xl:justify-start justify-center">
            <h2 className="xl:w-[500px] w-fit xl:text-left text-center phone:text-5xl text-4xl">
              We’ve been helping customer globally.
            </h2>
          </div>
          {/* Right Side About Us Content Container */}
          <div className="xl:w-4/12 w-10/12 mx-auto flex flex-col xl:mt-0 mt-54">
            {/* Individual Container for Each About Us Heading & Text  */}
            {buttonObjects.map(({ id, isPlusButton, heading, text }) => (
              <div
                key={id}
                className="flex flex-col border-b-2 first-of-type:pt-0 py-5 relative"
              >
                {/* Heading and +/- Button Container */}
                <div className="flex flex-row ">
                  <h3 className="flex-1 text-start text-xl sm:text-2xl">
                    {heading}
                  </h3>
                  <button
                    className="p-0 bg-transparent hover:bg-transparent flex-1 text-end border-0 focus:bg-transparent focus:text-black focus:outline-offset-8 hover:text-black hover:removeTextShadow"
                    onClick={() => handleClick(id)}
                  >
                    {isPlusButton ? '+' : '-'}
                  </button>
                </div>
                <p
                  className={
                    isPlusButton
                      ? ' translate-y-[0%] overflow-hidden delay-100 top-[5%] transition-all text-color-gray text-base sm:text-xl h-0 opacity-0 duration-300'
                      : ' bottom-[0%] transition-all duration-700 delay-100 pt-[20px] pb-[25px] text-color-gray text-base sm:text-xl opacity-100'
                  }
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Video Play Container */}
        <div className="wrapper">
          <div className="bg-[#D9D9D9] rounded-[20px] h-[200px] phone:h-[340px] sm:h-[540px] max-w-[1170px] mx-auto mb-[72px] relative xl:mt-10 mt-40 ">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* TODO Put an actual video in here at some point? Or a gif when you press play? */}
              <img
                className=""
                src={videoButton}
                alt="Play button graphic with a hollow black triangle play symbol and a yellow circular background"
              />
            </div>
          </div>
        </div>
        {/* Bottom Heading Container */}
        <div className="wrapper flex flex-col md:flex-row border-b-2 pb-10 justify-center md:justify-between flex-wrap gap-x-10 gap-y-10">
          {/* Heading and Text Container*/}
          <div className="flex flex-col items-center">
            <h3 className="font-title text-5xl sm:text-[70px]">7million</h3>
            <p className="text-xl">Completed Jobs</p>
          </div>
          {/* Heading and Text Container*/}
          <div className="flex flex-col items-center">
            <h3 className="font-title text-5xl sm:text-[70px]">30K+</h3>
            <p className="text-xl">Worldwide Client</p>
          </div>
          {/* Heading and Text Container*/}
          <div className="flex flex-col items-center">
            <h3 className="font-title text-5xl sm:text-[70px]">13billion</h3>
            <p className="text-xl">Dollar Payout</p>
          </div>
        </div>
        {/* Rest of About us Section Content */}
        <ExpertsSection />
        <ClientFeedbackSection />
        {/* Wrapper Container */}
        <div className="bg-color-body">
          <HowItWorksSection />
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
