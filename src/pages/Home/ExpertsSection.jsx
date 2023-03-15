import React from 'react';
import expertSectionGraphic from '../../assets/expertSectionGraphic.png';
import check from '../../assets/check.png';

const ExpertsSection = () => {
  return (
    <section className="bg-white pt-[191px] pb-[152px]">
      <div className="flex xl:flex-row flex-col-reverse items-center xl:items-start wrapper">
        <img
          className="h-[646px] w-fit xl:mr-[103px] mr-0 xl:mt-0 mt-16 hidden sm:block"
          src={expertSectionGraphic}
          alt=""
        />
        <div className="flex flex-col w-fit max-w-[516px]">
          <h2 className="">Get over 50.000+ talented experts in jobi.</h2>
          <p className="mt-[32px] w-10/12">
            A full hybrid workforce management tools are yours to use, as well
            as access to our top 1% of talent.
          </p>
          <div className="flex flex-col mt-[28px] space-y-5">
            <div className="flex space-x-6">
              <img className="h-fit self-center" src={check} alt="" />
              <p> Seamless searching</p>
            </div>
            <div className="flex space-x-6">
              <img className="h-fit self-center" src={check} alt="" />
              <p>Get top 3% experts for your project</p>
            </div>
            <div className="flex space-x-6">
              <img className="h-fit self-center" src={check} alt="" />
              <p>Protected payments system</p>
            </div>
          </div>
          <button className="w-fit px-10 mt-10">Post Job</button>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
