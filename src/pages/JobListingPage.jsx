import React, { useState, useEffect } from 'react';
import JobsCard from '../components/jobListings/JobCards';
// import data from '../data.json';
import Banner from '../components/ui/Banner';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config.jsx';

const ref = collection(db, 'jobs');

const fetchJobs = async setJobs => {
  try {
    const req = await getDocs(ref);
    console.log(req);
    const jobsTemp = req.docs.map(job => ({ ...job.data(), id: job.id }));
    console.log(jobsTemp);
    setJobs(jobsTemp);
    console.log(jobsTemp);
  } catch (error) {
    console.log(error);
  }
};

function JobListingPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // fetchJobs(data); // IMPORTANT Remove later, this was the dummy data
    fetchJobs(setJobs); // This is the current data from firebase
  }, [setJobs]); // IMPORTANT remove later Make an empty array so that we only call the fetchJobs function on the first initial load, we don't want to call the function on every change, just the first one.

  return (
    <section>
      {/* Banner Component Import */}
      <Banner />
      {/* Job Listings Container */}
      <div className="bg-white">
        {/* Job Listings Wrapper Container */}
        <div className="wrapper">
          {/* Card Layout Container */}
          <div
            className={
              jobs.length === 0
                ? 'grid grid-cols-1 text-center py-10'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-x-6 md:gap-x-11 gap-y-6 md:gap-y-10 pt-7 w-full mx-auto'
            }
          >
            {jobs.length === 0 ? (
              <p className="text-4xl w-full m-10">
                Hang in there, the jobs are coming . . .
              </p>
            ) : (
              jobs.map(job => <JobsCard job={job} key={job.id} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListingPage;
