// React imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/config.jsx';
// Component imports
import JobsCard from '../components/jobListings/JobCards';
import Banner from '../components/ui/Banner';
import JobDetailsPage from './JobDetailsPage';
import Dropdown from '../components/ui/Dropdown.jsx';
// Icon imports
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/solid';
import JobCards from '../components/jobListings/JobCards';

const ref = collection(db, 'jobs');

// Async await function for fetching job data from firebase
const fetchJobs = async (setJobs, setIsLoading) => {
  try {
    const req = await getDocs(ref);
    const jobsTemp = req.docs.map(job => ({ ...job.data(), id: job.id }));
    setJobs(jobsTemp);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
  }
};

function JobListingPage() {
  // State hooks
  const [selectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Handles current page in pagination
  const [cardsPerPage] = useState(12); // Handles how many total job cards can be displayed for each page
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHoursOption, setSelectedHoursOption] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  // Variable declarations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const navigate = useNavigate();
  const pageNumbers = [1];
  const filteredJobs = jobs.filter(
    job =>
      ((job.jobTitle &&
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.company &&
          job.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.country &&
          job.country.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.city &&
          job.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.state &&
          job.state.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (selectedHoursOption === 'All' ||
        !selectedHoursOption ||
        job.hours === selectedHoursOption) &&
      (!selectedLocation ||
        (job.country &&
          job.country.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (job.city &&
          job.city.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (job.state &&
          job.state.toLowerCase().includes(selectedLocation.toLowerCase())))
  );
  const currentCards = filteredJobs.slice(indexOfFirstCard, indexOfLastCard);
  const lastPage = Math.ceil(filteredJobs.length / cardsPerPage);

  // Pagination logic
  if (currentPage <= 3) {
    for (let i = 2; i <= Math.min(4, lastPage - 1); i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage >= lastPage - 2) {
    for (let i = Math.max(lastPage - 3, 2); i <= lastPage - 1; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pageNumbers.push(i);
    }
  }
  if (lastPage > 1) {
    pageNumbers.push(lastPage);
  }

  // Next and prev pagination functions
  const nextPage = () => {
    if (currentPage < lastPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > [1]) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  // Navigation function
  const handleJobClick = selectedJobCard => {
    navigate(`/job-listing/${selectedJobCard.id}`, { state: selectedJobCard });
  };

  // UseEffect hook calling the fetchJobs async function used to get data from firebase
  useEffect(() => {
    fetchJobs(setJobs, setIsLoading);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const hoursOptions = ['All', 'Full-time', 'Part-time', 'Contract'];

  // console.log(selectedLocation);
  // console.log(jobs.location);
  // console.log(jobs.company);
  console.log(JobCards);

  return (
    <section>
      {/* Banner Component Import */}
      <Banner
        title={'Job Listings'}
        subTitle={'Find your dream job, the jobi way!'}
      />
      {/* Job Listings Container */}
      <div className="bg-white pb-[162px]">
        {/* Job Listings Wrapper Container */}
        <div className="wrapper">
          {/* Filter By */}
          {/* TODO Convert this into an actual functional filter */}
          <div className="lg pt-[101px] pb-[120px]">
            <div className="bg-color-bg-gray rounded-lg capitalize flex flex-col justify-between items-center">
              <div
                className="flex justify-between w-full cursor-pointer p-6"
                onClick={() => setShowFilter(!showFilter)}
              >
                filter by
                <button
                  className="p-0 bg-transparent hover:bg-transparent hover:text-black focus:text-black"
                  onClick={() => setShowFilter(!showFilter)}
                  aria-label="Opens menu for filter options for job listings"
                  aria-expanded={showFilter}
                >
                  {showFilter ? (
                    <ChevronUpIcon className="w-7 bg-white rounded-full p-2" />
                  ) : (
                    <ChevronDownIcon className="w-7 bg-white rounded-full p-2" />
                  )}
                </button>
              </div>

              <div
                className={`${
                  showFilter
                    ? ' w-[95%] delay-150 transition-all ease-in duration-300'
                    : ' w-0'
                } contents-[''] bg-black/10 rounded-full h-[1px]`}
              ></div>
              <div
                className={`${
                  showFilter
                    ? 'h-fit py-10 opacity-100 w-full'
                    : 'h-0 opacity-0'
                } transition-all ease-in-out duration-300 flex justify-evenly items-center gap-x-10 px-6`}
              >
                <label
                  className={`${
                    showFilter ? 'block' : 'hidden'
                  } w-full flex-1 flex flex-col jobPostLabel`}
                >
                  Job title or company
                  <input
                    type="text"
                    placeholder="Search by keyword"
                    onChange={e => setSearchQuery(e.target.value)}
                    tabIndex={showFilter ? 0 : -1}
                    className="mt-2 p-4 border-2 rounded-md"
                  />
                </label>
                <label
                  className={`${
                    showFilter ? 'block' : 'hidden'
                  } w-full flex-1 flex flex-col jobPostLabel`}
                >
                  Country, State/province, city
                  <input
                    type="text"
                    value={selectedLocation}
                    onChange={e => setSelectedLocation(e.target.value)}
                    placeholder="Enter country, state/province, city"
                    tabIndex={showFilter ? 0 : -1}
                    className="mt-2 p-4 border-2 rounded-md"
                  />
                </label>
                <div
                  className={`${
                    showFilter ? 'block ' : 'hidden'
                  } w-full flex-1 `}
                >
                  <Dropdown
                    value={selectedHoursOption}
                    onChange={value => {
                      setSelectedHoursOption(value);
                      setCurrentPage(1);
                    }}
                    options={hoursOptions}
                    selectedOption={selectedHoursOption}
                    name="hours"
                    label="Hours"
                    tabIndex={showFilter ? 0 : -1}
                    className="bg-white hover:bg-white focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
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
              currentCards.map(job => (
                <JobsCard job={job} key={job.id} onClick={handleJobClick} />
              ))
            )}
          </div>

          {/* Pagination Container */}
          <div className="mt-20 flex justify-center sm:justify-start flex-wrap">
            {/* Back Button */}
            <button
              className="mr-4 hidden sm:block bg-transparent border-2 focus:textShadow px-2 hover:bg-color-one hover:text-black"
              onClick={prevPage}
            >
              <ChevronLeftIcon className="w-6 h-6 p-0" />
            </button>
            {/* Pagination Number Buttons */}
            {pageNumbers.map(number => {
              if (typeof number === 'number') {
                return (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={
                      number === currentPage
                        ? 'bg-color-secondary hover:text-white focus:text-white text-white hover:removeTextShadow z-0 rounded-full px-[17px] py-[1px]'
                        : number === 1
                        ? 'bg-transparent text-black firstPageStyle'
                        : number === lastPage
                        ? 'bg-transparent text-black lastPageStyle'
                        : 'bg-transparent hover:bg-color-one focus:bg-color-one text-black hover:text-black focus:text-black hover:removeTextShadow z-10 mx-0 sm:mx-2'
                    }
                  >
                    {number}
                  </button>
                );
              }
            })}
            {/* Forward Button */}
            <button
              className="ml-4 hidden sm:block bg-transparent border-2 focus:textShadow px-2 hover:bg-color-one hover:text-black"
              onClick={nextPage}
            >
              <ChevronRightIcon className="w-6 h-6 p-0" />
            </button>
          </div>
          {/* Mobile Pagination Buttons */}
          <div className="mt-6 w-full flex justify-center sm:hidden">
            {/* Mobile Back Button */}
            <button
              className="mr-4 bg-transparent border-2 focus:textShadow px-2 hover:bg-color-one hover:text-black"
              onClick={prevPage}
            >
              <ChevronLeftIcon className="w-6 h-6 p-0" />
            </button>
            {/* Mobile Forward Button */}
            <button
              className="ml-4 bg-transparent border-2 focus:textShadow px-2 hover:bg-color-one hover:text-black"
              onClick={nextPage}
            >
              <ChevronRightIcon className="w-6 h-6 p-0" />
            </button>
          </div>
        </div>
      </div>
      {/* Job Details Page Navigation Component*/}
      {selectedJob && <JobDetailsPage job={selectedJob} onDelete={deleteJob} />}
    </section>
  );
}

export default JobListingPage;
