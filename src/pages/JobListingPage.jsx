import React, { useState, useEffect } from 'react';
import JobsIncomming from '../components/jobListings/JobCards';
import data from '../data.json';
import Banner from '../components/ui/Banner';

function JobListingPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <section>
      {/* Banner Component Import */}
      <Banner />
      {/* Job Listings Container */}
      <div className="bg-white">
        {/* Job Listings Wrapper Container */}
        <div className="wrapper">
          {/* Card Layout Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-x-6 md:gap-x-11 gap-y-6 md:gap-y-10 pt-7 w-full mx-auto">
            {jobs.length === 0 ? (
              <p>Job listings are incomming...</p>
            ) : (
              jobs.map(job => <JobsIncomming job={job} key={job.id} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListingPage;
