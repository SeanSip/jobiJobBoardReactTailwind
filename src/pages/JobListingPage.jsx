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
import SalarySlider from '../components/jobListings/SalarySlider.jsx';
import countryOptions from '../components/dropdownOptions/countryOptionsArray.jsx';
// Icon imports
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/solid';
// Image imports
import jobi from '../assets/jobiWithText.png';
import countryOptionsArray from '../components/dropdownOptions/countryOptionsArray.jsx';

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
  const [selectedCountryOption, setSelectedCountryOption] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [minSalary, setMinSalary] = useState(0);

  // Variable declarations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const navigate = useNavigate();
  const pageNumbers = [1];

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedHoursOption('');
    setSelectedLocation('');
    setSelectedCountryOption('');
    setMinSalary(0);
  };

  const filteredJobs = jobs.filter(job => {
    const selectedHours = selectedHoursOption.split('(')[0].trim();
    const selectedCountry = selectedCountryOption
      ? selectedCountryOption.split('(')[0].trim()
      : null;
    return (
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
      (selectedHours === 'All' ||
        !selectedHours ||
        job.hours === selectedHours) &&
      (!selectedLocation ||
        (job.country &&
          job.country.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (job.city &&
          job.city.toLowerCase().includes(selectedLocation.toLowerCase())) ||
        (job.state &&
          job.state.toLowerCase().includes(selectedLocation.toLowerCase()))) &&
      (!selectedCountry ||
        (job.country &&
          job.country.toLowerCase() === selectedCountry.toLowerCase())) &&
      job.min >= minSalary
    );
  });

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

  // Job type total jobs count
  let fullTimeCount = 0;
  let partTimeCount = 0;
  let contractCount = 0;
  // Job for each loop function
  jobs.forEach(function (job) {
    if (job.hours === 'Full-time') {
      fullTimeCount++;
    } else if (job.hours === 'Part-time') {
      partTimeCount++;
    } else if (job.hours === 'Contract') {
      contractCount++;
    }
  });
  // Job type options with count
  const hoursOptions = [
    `All (${jobs.length})`,
    `Full-time (${fullTimeCount})`,
    `Part-time (${partTimeCount})`,
    `Contract (${contractCount})`,
  ];

  const countryDropDownWithJobCount = () => {
    // Country options array import and reassigned variable name
    const countryOptionArray = countryOptionsArray;
    // Sort country array list alphabetically
    countryOptionArray.sort((a, b) => a.localeCompare(b));
    // Initialize country counts
    const countryCounts = {};
    //Country counter for each funcion
    jobs.forEach(function (job) {
      if (countryCounts[job.country]) {
        countryCounts[job.country]++;
      } else {
        countryCounts[job.country] = 1;
      }
    });
    //Country options map function
    const countryOptions = Object.keys(countryCounts).map(function (country) {
      return `${country} (${countryCounts[country]})`;
    });

    return countryOptions;
  };

  return (
    <section>
      {/* Banner Component Import */}
      <Banner
        title={'Job Listings'} // h1
        subTitle={'Find your dream job, the jobi way!'} // h2
      />
      {/* Job Listings Container */}
      <div className="bg-white pb-[162px]">
        {/* Job Listings Wrapper Container */}
        <div className="wrapper">
          {/* Filter By */}
          <div className="lg pt-[101px] pb-[120px]">
            <div className="bg-color-bg-gray rounded-lg capitalize flex flex-col justify-between items-center">
              <div
                className="flex justify-between w-full cursor-pointer p-6"
                onClick={() => setShowFilter(!showFilter)}
              >
                <h3>filter by</h3>
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
                } transition-all ease-in-out duration-300 flex justify-evenly items-center gap-x-6 px-6 flex-col md:flex-row gap-y-10`}
              >
                <label
                  className={`${
                    showFilter ? 'block' : 'hidden'
                  } w-full flex-1 flex flex-col jobPostLabel`}
                >
                  Job title or company
                  <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search by keyword"
                    onChange={e => setSearchQuery(e.target.value)}
                    tabIndex={showFilter ? 0 : -1}
                    className="mt-2 p-[14px] border-2 rounded-md"
                  />
                </label>
                <div
                  className={`${
                    showFilter ? 'block' : 'hidden'
                  } w-full flex-1 flex flex-col jobPostLabel`}
                >
                  <Dropdown
                    value={selectedCountryOption}
                    onChange={value => {
                      setSelectedCountryOption(value);
                      setCurrentPage(1);
                    }}
                    options={countryDropDownWithJobCount()}
                    selectedOption={selectedCountryOption}
                    name="Country"
                    placeholder="Select Country"
                    label="Country"
                    tabIndex={showFilter ? 0 : -1}
                    className="bg-white hover:bg-white focus:bg-white justify-between"
                  />
                </div>
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
                    placeholder="Select job type"
                    label="Job Type"
                    tabIndex={showFilter ? 0 : -1}
                    className="bg-white hover:bg-white focus:bg-white justify-between"
                  />
                </div>
              </div>
              <SalarySlider
                minSalary={minSalary}
                setMinSalary={setMinSalary}
                step={5}
                max={10000}
                inputStyles=""
                numberSpanStyles=""
                label="Min Salary"
                containerStyles={`${
                  showFilter ? 'block' : 'hidden'
                } flex flex-col h-full w-full flex-1 px-6 pb-6`}
              />
              <div className="flex justify-start w-full">
                <button
                  className={`${
                    showFilter ? 'block' : 'hidden'
                  }  w-fit rounded-none rounded-bl-lg rounded-tr-lg`}
                  onClick={resetFilters}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
          {/* Card Layout Container */}
          {/* TODO This will be the total jobs list */}
          <p>Total of {filteredJobs.length} jobs found</p>
          {/* TODO This will be the page out of page list */}
          <p>
            page {currentPage} of {pageNumbers.length}
          </p>
          {filteredJobs.length === 0 && (
            <div className="text-center font-body flex flex-col justify-center items-center">
              <span className=" text-4xl">Sorry</span>
              <p className="text-xl mt-4">
                No job listings found matching your search criteria. Please try
                adjusting your filters or search keywords
              </p>
              <img
                className="w-1/2"
                src={jobi}
                alt="Jobi company logo with the name written on top of the logo"
              />
            </div>
          )}
          <div
            className={
              jobs.length === 0
                ? 'grid grid-cols-1 text-center py-10'
                : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 sm:gap-x-6 md:gap-x-11 gap-y-6 md:gap-y-10 pt-7 w-full mx-auto'
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
              aria-label="Previous Page"
            >
              <ChevronLeftIcon className="w-6 h-6 p-0" aria-hidden="true" />
              <span className="sr-only">Previous</span>
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
              aria-label="Next Page"
            >
              <ChevronRightIcon className="w-6 h-6 p-0" aria-hidden="true" />
              <span className="sr-only">Next Page</span>
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
