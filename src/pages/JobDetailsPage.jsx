import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BackwardIcon } from '@heroicons/react/24/solid';

const JobDetailsPage = props => {
  const location = useLocation();
  const job = location.state;

  const yearlyTotal = () => {
    if (job.hours === 'Contract' || job.hours === 'Part-time') {
      return (
        <div className="flex items-center mt-4">
          <p>{`$${job.min}`}</p>
          <p>-</p>
          <p>{`$${job.max}`}</p>
          <p className="ml-1 text-color-gray">{`/ ${job.salary}`}</p>
        </div>
      );
    } else {
      if (job.salary === 'Month') {
        const min = Math.floor((job.min * 12) / 1000);
        const max = Math.floor((job.max * 12) / 1000);
        return <p>{`${min}k-${max}k/year`}</p>;
      } else if (job.salary === 'Week') {
        const min = Math.floor((job.min * 52) / 1000);
        const max = Math.floor((job.max * 52) / 1000);
        return <p>{`${min}k-${max}k/year`}</p>;
      } else if (job.salary === 'Hour') {
        const min = Math.floor((job.min * 40 * 50) / 1000);
        const max = Math.floor((job.max * 40 * 50) / 1000);
        return <p>{`${min}k-${max}k/year`}</p>;
      }
    }
  };

  if (!job) {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="text-7xl font-body">Loading ...</div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="wrapper flex flex-col py-[100px]">
        <Link
          className="text-xl font-button mb-20 text-color-gray flex items-center gap-x-1 w-fit underline hover:text-blue-600/70"
          to="/job-listing"
        >
          <BackwardIcon className="w-7" alt="back icon" />
          back
        </Link>
        <div className="flex justify-evenly gap-x-44">
          <div className="flex flex-col w-fit">
            {/* TODO Make the posted by a timestamp */}
            <p>{`posted by: ${job.company}`}</p>
            <h1>{job.role}</h1>
            <p>{job.overview}</p>
            <p>{job.textarea}</p>
            <p>{job.responsibilities}</p>
            <p>{job.requiredSkills}</p>
            <p>{job.benifits}</p>
            <button className="w-fit bg-color-button-green text-white rounded-md px-7 hover:bg-blue-600">
              Apply for this position
            </button>
          </div>
          <aside className="flex flex-col w-full max-w-[340px] min-w-[280px] bg-color-bg-gray rounded-lg px-6 pb-11 pt-9 h-fit shadow-md">
            <div className="flex flex-col items-center">
              <img
                className="w-20 rounded-full mb-4"
                src={job.logo}
                alt={`Company logo for ${job.company}`}
              />
              <h3 className="mb-6 text-xl">{job.company}</h3>
              <a
                target="_blank"
                href={job.companyLink}
                className="w-fit bg-color-button-green text-white rounded-full py-[2px] px-4 mb-11"
              >
                View website
              </a>
            </div>
            <div className="space-y-9 py-7 border-t-2">
              {/* Salary*/}
              <div className="mt-4">
                <p className="capitalize text-color-gray">salary</p>
                <p className="flex items-center mt-1">{yearlyTotal()}</p>
              </div>
              {/* Company Location */}
              <div>
                <p className="capitalize text-color-gray">location</p>
                <div className="flex mt-1">
                  <p>{job.country}</p>
                  <p>, </p>
                  <p className="ml-[2px]"> {job.city}</p>
                </div>
              </div>
              {/* Job Type */}
              <div>
                <p className="capitalize text-color-gray">job type</p>
                <p className="mt-1">{job.hours}</p>
              </div>
            </div>
            {/* Skills */}
            <div className="">
              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap mt-4">
                  {job.skills.map(skill => (
                    <span
                      key={skill.value}
                      className="text-xs font-body text-gray-600 bg-transparent px-3 py-1 rounded-full mr-2 mb-3 border-2"
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button className="text-color-title mt-8 ">Apply Now</button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;