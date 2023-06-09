import React from 'react';
import defaultLogo from '../../assets/jobiWithText.png';

const JobCards = ({ job, onClick }) => {
  const logoDisplay = job.logo === 'null' ? defaultLogo : job.logo;

  return (
    <div
      onClick={() => onClick(job)}
      className="w-full md:max-w-full max-w-[500px] h-full bg-white border-[1px] border-[#EBEBEB] px-9 py-10 mx-auto hover:bg-color-jobCardBg hover:border-[#4C7B68] flex flex-col rounded-[10px] justify-between cursor-pointer shadow-lg overflow-hidden break-words"
    >
      {/* Company Logo & Company Name */}

      <img
        className="max-w-[3.5rem] w-full h-auto aspect-square bg-cover rounded-sm "
        src={logoDisplay}
        alt={`Company logo for ${job.company}`}
      />

      <h1 className="text-3xl mt-6">{job.company}</h1>
      {/* Company Hours */}
      <p className="text-color-apple-light bg-[#fa11000e] w-fit px-[10px] py-1 rounded-[3px] mt-14">
        {job.hours}
      </p>
      {/* Company Job Title */}
      <h2 className="font-body text-2xl mt-4">{job.jobTitle}</h2>
      {/* Company Pay */}
      <div className="flex items-center mt-4">
        <p>{`$${job.min}`}</p>
        <p>-</p>
        <p>{`$${job.max}`}</p>
        <p className="ml-1 text-gray-600">{`/ ${job.salary}`}</p>
      </div>
      {/* Company Skills  */}
      {job.skills && job.skills.length > 0 && (
        <div className="flex flex-wrap mt-4">
          {job.skills.slice(0, 3).map(skill => (
            <span
              key={skill.value}
              className="text-sm font-body text-gray-600 bg-color-one/50 p-1 rounded-md mr-2 mb-2"
            >
              {skill.label}
            </span>
          ))}
        </div>
      )}
      {/* Company Location and Button Container */}
      <div className="flex justify-between mt-16 lg:flex-row flex-col space-y-3 lg:space-y-0">
        {/* Company Location */}
        <div className="flex items-center flex-wrap capitalize">
          <p>{job.country}</p>
          <p>, </p>
          <p className="ml-[2px]"> {job.city}</p>
        </div>
        {/* Apply Button */}
        <button className="uppercase bg-[#31795A] text-white h-fit py-1 px-5 ml-0 lg:ml-2">
          apply
        </button>
      </div>
    </div>
  );
};

export default JobCards;
