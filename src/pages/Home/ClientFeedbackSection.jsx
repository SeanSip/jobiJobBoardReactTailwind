import React from 'react';
import back from '../../assets/back.png';
import next from '../../assets/next.png';
import googleLogo from '../../assets/googleLogo.png';
import shipBobLogo from '../../assets/shipBobLogo.png';
import dribbleLogo from '../../assets/dribbleLogo.png';
import slackLogo from '../../assets/slackLogo.png';
import vineLogo from '../../assets/vineLogo.png';
import airBnbLogo from '../../assets/airBnbLogo.png';
import fourStarRating from '../../assets/fourStarRating.png';
import fiveStarRating from '../../assets/fiveStarRating.png';
import shipBobLogoDark from '../../assets/shipBobLogoDark.png';
import mondayLogoDark from '../../assets/mondayLogoDark.png';

function ClientFeedbackSection() {
  return (
    <section className="bg-white pb-[180px]">
      <div className="wrapper border-b-2">
        <div className="flex items-center justify-between flex-col xl:flex-row xl:space-y-0 space-y-20">
          <div className="w-fit relative">
            <h2 className="flex flex-col">
              Trusted by leading
              <span>startups.</span>
            </h2>
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
        {/* Card #1 */}
        <div className="grid grid-cols-1 mt-20 xl:grid-cols-2 w-full sm:w-10/12 lg:w-7/12 xl:w-full xl:space-x-10 space-x-0 space-y-10 xl:space-y-0 mx-auto mb-36">
          <div className="flex flex-col">
            <div className="clientCard self-center flex flex-col justify-between">
              <img className="w-fit" src={mondayLogoDark} alt="" />
              <h3 className="text-4xl">
                “Seattle opera simplifies Performance planning with deski
                eSignature.”
              </h3>
              <p>Rashed kabir, Lead Designer</p>
              <div className="contents-[''] w-full h-[1px] bg-black mx-auto"></div>
              <div className="flex justify-between">
                <h4 className="text-xl">4.5 Excellent</h4>
                <img
                  className="h-fit self-center"
                  src={fourStarRating}
                  alt="Four out of Five stars rating icon graphic"
                />
              </div>
            </div>
          </div>
          {/* Card #2 */}
          <div className="flex flex-col">
            <div className="clientCard self-center flex flex-col justify-between">
              <img className="w-fit" src={shipBobLogoDark} alt="" />
              <h3 className="text-4xl">
                “How DocuSign CLM helps Celonis scale its global business.”
              </h3>
              <p>Mark Joge, Marketing Chief</p>
              <div className="contents-[''] w-full h-[1px] bg-black mx-auto"></div>
              <div className="flex justify-between">
                <h4 className="text-xl">4.8 Awesome</h4>
                <img
                  className="h-fit self-center"
                  src={fiveStarRating}
                  alt="Five out of Five stars rating icon graphic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Logo Container */}
        <div className="grid grid-cols-6 gap-x-10 mb-[104px]">
          <img className="h-fit self-center" src={googleLogo} alt="" />
          <img className="h-fit self-center" src={shipBobLogo} alt="" />
          <img className="h-fit self-center" src={dribbleLogo} alt="" />
          <img className="h-fit self-center" src={slackLogo} alt="" />
          <img className="h-fit self-center" src={vineLogo} alt="" />
          <img className="h-fit self-center" src={airBnbLogo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ClientFeedbackSection;
