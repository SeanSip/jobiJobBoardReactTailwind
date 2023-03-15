import React from 'react';
import bgDarkShapeSmall from '../../assets/bgDarkShapeSmall.png';
import categoryTitleShape from '../../assets/categoryTitleShape.png';
import iconPencil from '../../assets/iconPencil.png';
import iconCode from '../../assets/iconCode.png';
import iconPhone from '../../assets/iconPhone.png';
import iconEditing from '../../assets/iconEditing.png';
import iconMarketing from '../../assets/iconMarketing.png';
import iconAccounting from '../../assets/iconAccounting.png';

const JobCategory = () => {
  return (
    <section className="w-screen h-fit py-36 bg-[#F2F9D8] relative">
      {/* Section Screen Wrapper */}
      <div className="wrapper">
        {/* Section Title and Right Side Text Container */}
        <div className="flex xl:flex-row flex-col justify-between items-center space-y-10">
          {/* Section Title Text Container */}
          <div className="flex flex-col relative">
            <h2 className="">
              Most Demanding
              <span className="block"> Categories.</span>
            </h2>
            <img
              src={categoryTitleShape}
              alt=""
              className="absolute -right-28 -top-9"
            />
          </div>
          {/* Right Side Text Container */}
          <div className="flex flex-col space-y-7">
            <p className="max-w-[556px] font-body text-xl">
              Together with useful notifications, collaborationinsights, and
              improvement tip lorem etc.
            </p>
            <a href="">Explore all fields</a>
          </div>
        </div>
        {/* Bottom Cards Container */}
        <div className="grid xl:grid-cols-6 mt-20 gap-8 grid-cols-3">
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconPencil} alt="" />
            <p>UI/UX Design</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconCode} alt="" />
            <p>Development</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconMarketing} alt="" />
            <p>Marketing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconPhone} alt="" />
            <p>Telemarketing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconEditing} alt="" />
            <p>Editing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconAccounting} alt="" />
            <p>Accounting</p>
            <p>12k+ Jobs</p>
          </div>
        </div>
      </div>
      <img
        src={bgDarkShapeSmall}
        className="absolute bottom-0 right-0"
        alt="Small background graphic design of a box shape filled with diagonal lines"
      />
    </section>
  );
};

export default JobCategory;
