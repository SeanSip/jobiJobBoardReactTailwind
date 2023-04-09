import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
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
    <section className="w-screen h-fit py-36 bg-[#F2F9D8] relative overflow-hidden">
      {/* Section Screen Wrapper */}
      <div className="wrapper">
        {/* Section Title and Right Side Text Container */}
        <div className="flex xl:flex-row flex-col justify-between items-center space-y-10">
          {/* Section Title Text Container */}
          <div className="xl:w-[40rem] phone:w-[30rem] w-fit relative">
            <h2 className="text-center xl:text-left w-fit">
              Most Demanding Categories.
            </h2>
            <img
              src={categoryTitleShape}
              alt="Gaphic of three black lines bursting outwards from the top-right corner of this sections heading text"
              className="absolute right-2 xl:right-5 -top-6 xl:-top-10 xl:w-fit w-16 hidden phone:block"
            />
          </div>
          {/* Right Side Text Container */}
          <div className="flex flex-col space-y-7">
            <p className="max-w-[556px] font-body text-xl phone:text-left text-center">
              Together with useful notifications, collaborationinsights, and
              improvement tip lorem etc.
            </p>

            <Link className="w-fit relative flex items-center phone:mx-0 mx-auto font-body hover:text-color-hover after:content-[''] after:absolute after:w-full after:h-[0.1rem] after:bg-black after:-bottom-1 after:hover:bg-color-hover">
              Explore all fields
              <ChevronRightIcon className="w-4 h-5 relative top-[0.10rem]" />
            </Link>
          </div>
        </div>
        {/* Bottom Cards Container */}
        <div className="grid xl:grid-cols-6 mt-20 gap-3 phone:gap-8 md:grid-cols-3 phone:grid-cols-2 grid-cols-1">
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconPencil} alt="Pencil icon graphic" />
            <p>UI/UX Design</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img
              className="w-6"
              src={iconCode}
              alt="Code symbol icon graphic"
            />
            <p>Development</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img
              className="w-6"
              src={iconMarketing}
              alt="Briefcase icon grpahic"
            />
            <p>Marketing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img className="w-6" src={iconPhone} alt="Phone icon graphic" />
            <p>Telemarketing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img
              className="w-6"
              src={iconEditing}
              alt="Slider knobs icon gaphic"
            />
            <p>Editing</p>
            <p>12k+ Jobs</p>
          </div>
          <div className="card flex flex-col justify-center items-center gap-y-10">
            <img
              className="w-6"
              src={iconAccounting}
              alt="Bank building icon graphic"
            />
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
