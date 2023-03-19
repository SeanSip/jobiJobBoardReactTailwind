import React from 'react';

const JobCards = ({ job }) => {
  return (
    <div className="w-full h-full bg-white border-[1px] border-[#EBEBEB] px-9 py-10 mx-auto hover:bg-color-jobCardBg hover:border-[#4C7B68] flex flex-col rounded-[10px] justify-between">
      {/* Company Logo */}
      <img
        className="w-fit"
        src={job.logo}
        alt={`Company logo for ${job.company}`}
      />
      {/* Company Hours */}
      <p className="text-[#FF5757] bg-[#FA0F0014] w-fit px-[10px] py-1 rounded-[3px] mt-14">
        {job.hours}
      </p>
      {/* Company Role */}
      <h2 className="font-body text-2xl mt-4">{job.role}</h2>
      {/* Company Pay */}
      <p className="mt-4">{job.pay}</p>
      {/* Company Location and Button Container */}
      <div className="flex justify-between mt-16 md:flex-row flex-col space-y-3 md:space-y-0">
        {/* Company Location */}
        <p>{job.location}</p>
        {/* Apply Button */}
        <button className="uppercase bg-[#31795A] text-white h-fit py-1 px-5 ml-0 md:ml-2">
          apply
        </button>
      </div>
    </div>
  );
};

export default JobCards;
