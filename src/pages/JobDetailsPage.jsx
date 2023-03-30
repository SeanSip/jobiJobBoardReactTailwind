import React from 'react';
import { useLocation } from 'react-router-dom';

const JobDetailsPage = props => {
  const location = useLocation();
  const job = location.state;

  if (!job) {
    return (
      <div className="bg-white w-full h-screen flex justify-center items-center">
        <div className="text-7xl font-body">Loading ...</div>
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="wrapper flex flex-col  items-center">
        <div className="flex flex-col">
          <h1>{job.company}</h1>
          <p>{job.textarea}</p>
          <p>{job.hours}</p>
          <p>{job.country}</p>
          <p>{job.city}</p>
          <p>{job.state}</p>
          <p>{job.address}</p>
          <img
            className="w-fit"
            src={job.logo}
            alt={`Company logo for ${job.company}`}
          />
          <p>{job.min}</p>
          <p>{job.max}</p>
          <p>{job.role}</p>
          <p>{job.salary}</p>
          <p>{job.category}</p>
          {job.skills && job.skills.length > 0 && (
            <div className="flex flex-wrap mt-4">
              {job.skills.map(skill => (
                <span
                  key={skill.value}
                  className="text-sm text-gray-600 bg-gray-200 p-1 rounded-md mr-2 mb-2"
                >
                  {skill.label}
                </span>
              ))}
            </div>
          )}
          <p>{job.experience}</p>
          <p>{job.qualifications}</p>
          <p>{job.industry}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
