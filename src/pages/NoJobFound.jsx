import React from 'react';
import { Link } from 'react-router-dom';
import Error404 from '../assets/vecteezy404Error.jpg';
import next from '../assets/next.png';

const NoJobFound = () => {
  return (
    <section className="bg-white py-[120px]">
      <div className="wrapper flex xl:flex-row flex-col items-center justify-between">
        <img
          className="xl:w-7/12 w-fit"
          src={Error404}
          alt="Graphic design of 404 with a magnifying lense making up the 0 in between the other numbers. Credit goes to: gstudioimagen @ https://www.vecteezy.com/members/gstudioimagen"
        />
        <div className="w-fit xl:w-[39%] flex flex-col space-y-12 text-center xl:text-left">
          <h1 className="flex flex-col capitalize text-[100px] leading-tight text-[#31795A]">
            404 <span className="text-black text-[82px] ">Oh-no...</span>
          </h1>
          <p className="text-2xl ">
            No job listing found... Maybe the job post was deleted, or you
            copypasta the wrong link?
          </p>
          <p className="text-8xl mx-auto">🍝</p>
          <p className="text-xl mx-auto">Mmm... pasta...</p>
          <Link
            role="button"
            aria-label="Go back to job listing"
            to="/job-listing"
            className="uppercase flex items-center justify-between max-w-xl w-full bg-color-one mx-auto p-4 rounded-full hover:bg-color-secondary hover:text-white hover:textShadow focus:bg-color-secondary focus:text-white focus:textShadow"
          >
            Go back
            <img src={next} alt="Arrow graphic pointing towards the right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoJobFound;
