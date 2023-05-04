import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { FaLink, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import ReactQuill from 'react-quill';
import { doc, deleteDoc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config.jsx';

import Banner from '../components/ui/Banner';
import defaultLogo from '../assets/jobiWithText.png';
import NoJobFound from './NoJobFound.jsx';

const deleteJob = async jobId => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await deleteDoc(jobRef);
  } catch (error) {
    console.log(error);
  }
};

const fetchJob = async (jobId, setJob) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    const jobDoc = await getDoc(jobRef);
    if (jobDoc.exists()) {
      setJob({ ...jobDoc.data(), id: jobDoc.id });
    }
  } catch (error) {
    console.log(error);
  }
};

const JobDetailsPage = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const yesButtonRef = useRef();
  const noButtonRef = useRef();
  const modalRef = useRef();
  const modalContentRef = useRef();
  const location = useLocation();
  const { id: jobId } = useParams();
  const [job, setJob] = useState(location.state);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDownInput = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      if (e.target === yesButtonRef.current) {
        noButtonRef.current.focus();
      } else {
        yesButtonRef.current.focus();
      }
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current.focus();
    }

    const handleMouseDown = e => {
      if (!modalContentRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      modalRef.current.addEventListener('mousedown', handleMouseDown);
    }

    if (!job) {
      fetchJob(jobId, setJob);
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('mousedown', handleMouseDown);
      }
    };
  }, [isModalOpen, jobId]);

  if (!job) {
    return <NoJobFound />;
  }
  const logoDisplay = job.logo === 'null' ? defaultLogo : job.logo;

  const yearlyTotal = () => {
    if (job.hours === 'Contract' || job.hours === 'Part-time') {
      return (
        <div className="flex items-center">
          <p>{`$${job.min}-$${job.max}`}</p>
          <p className="ml-1 text-color-gray">{`/ ${job.salary}`}</p>
        </div>
      );
    } else {
      if (job.salary === 'Month') {
        const min = Math.floor((job.min * 12) / 1000);
        const max = Math.floor((job.max * 12) / 1000);
        return (
          <div className="flex items-center">
            <p>{`${min}k-${max}k`}</p>
            <p className="ml-1 text-color-gray">/year</p>
          </div>
        );
      } else if (job.salary === 'Week') {
        const min = Math.floor((job.min * 52) / 1000);
        const max = Math.floor((job.max * 52) / 1000);
        return (
          <div className="flex items-center">
            <p>{`${min}k-${max}k`}</p>
            <p className="ml-1 text-color-gray">/year</p>
          </div>
        );
      } else if (job.salary === 'Hour') {
        const min = Math.floor((job.min * 40 * 50) / 1000);
        const max = Math.floor((job.max * 40 * 50) / 1000);
        return (
          <div className="flex items-center">
            <p>{`${min}k-${max}k`}</p>
            <p className="ml-1 text-color-gray">/year</p>
          </div>
        );
      }
    }
  };

  const quillModules = {
    toolbar: false,
    clipboard: { matchVisual: false },
  };

  // Timestamp
  const datePostedOn = () => {
    const timestampData = job.postedOn;
    const timestamp = Timestamp.fromMillis(
      timestampData.seconds * 1000 + timestampData.nanoseconds / 1000000
    );
    const date = timestamp.toDate();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = date.toLocaleDateString(undefined, options);

    return dateString;
  };

  if (!job) {
    return (
      <>
        <Banner title={'Job Details'} />
        <div className="bg-white w-full h-screen flex justify-center items-center">
          <div className="text-7xl font-body">Loading ...</div>
        </div>
      </>
    );
  }
  return (
    <>
      <Banner title={'Job Details'} />
      <div className="bg-white relative ">
        {isModalOpen && (
          <modal
            ref={modalRef}
            tabIndex={-1}
            onKeyDown={handleKeyDownInput}
            className=" fixed bg-black/30 z-50 w-full h-screen flex items-center justify-center top-0 backdrop-blur-lg "
          >
            <div
              ref={modalContentRef}
              className="flex flex-col items-center bg-white px-4 py-10 rounded-xl w-fit mx-4"
            >
              <p className="text-2xl text-center">
                Do you really want to delete this job?
              </p>
              <div className="flex mt-8 gap-x-4">
                <button
                  ref={yesButtonRef}
                  className="w-fit hover:bg-red-500 focus:bg-red-500"
                  onClick={() => deleteJob(job.id) && closeModal()}
                >
                  Yes
                </button>
                <button
                  ref={noButtonRef}
                  className="w-fit"
                  onClick={closeModal}
                >
                  No
                </button>
              </div>
            </div>
          </modal>
        )}
        <div className="wrapper py-[100px]">
          <Link
            className="text-xl font-button mb-4 sm:mb-20 text-color-gray flex items-center gap-x-1 w-fit underline hover:text-blue-600/70"
            to="/job-listing"
          >
            <ChevronLeftIcon className="w-5 mt-1" alt="back icon" />
            back
          </Link>
          <div className="flex justify-evenly lg:gap-x-16 gap-x-8 flex-col-reverse md:flex-row ">
            {/* Main job post content */}
            <div className="flex flex-col overflow-hidden break-words">
              {/* Posted By Container */}
              <div className="flex flex-wrap mb-4 md:mt-0 mt-4">
                <p className="text-color-gray">{`${datePostedOn()} by`}</p>
                <p className="ml-1">{job.company}</p>
              </div>
              <h1 className="text-4xl font-body mb-5">{job.jobTitle}</h1>
              <ul className="flex gap-x-2 mb-12 flex-wrap md:flex-nowrap gap-y-2">
                <li className="border-[1px] border-color-title px-3 py-1 rounded-md flex items-center text-[#244034] cursor-pointer hover:bg-color-one">
                  <FaFacebookF className="w-2 mr-2" />
                  Facebook
                </li>
                <li className="border-[1px] border-color-title px-3 py-1 rounded-md flex items-center text-[#244034] cursor-pointer hover:bg-color-one">
                  <FaTwitter className="w-3 mr-2" />
                  Twitter
                </li>
                <li className="border-[1px] border-color-title px-3 py-1 rounded-md flex items-center text-[#244034] cursor-pointer hover:bg-color-one">
                  <FaLink className="w-3 mr-2" />
                  Copy
                </li>
              </ul>
              <div className="flex flex-col gap-y-14 ">
                {/* Job Description */}
                <ReactQuill
                  value={job.jobDescription}
                  readOnly={true}
                  modules={quillModules}
                  className="no-border"
                  suppressContentEditableWarning={true}
                  dangerouslySetInnerHTML={{
                    __html: job.jobDescription,
                  }}
                />

                <button className="w-fit bg-color-button-green text-white rounded-md px-7 self-center sm:self-start">
                  Apply for this position
                </button>
              </div>
            </div>

            {/* Side card content */}
            <aside className="flex flex-col w-full md:max-w-[340px] md:min-w-[340px] bg-color-bg-gray rounded-lg px-6 pb-11 pt-9 h-fit shadow-md static md:sticky top-0 md:top-40">
              <div className="flex flex-col items-center">
                <img
                  className="w-20 rounded-full mb-4"
                  src={logoDisplay}
                  alt={`Company logo for ${job.company}`}
                />
                <h3 className="mb-6 text-xl text-center">{job.company}</h3>
                <a
                  target="_blank"
                  href={job.companyLink}
                  className="w-fit bg-color-button-green text-white rounded-full py-[2px] px-4 mb-11 hover:bg-color-secondary hover:textShadow focus:bg-color-secondary focus:textShadow"
                >
                  View website
                </a>
              </div>

              {/* Salary, Experience, Location, Job Type, Date, and Category Container */}
              <div className="flex flex-col gap-y-10 py-7 border-t-2">
                {/* Salary and Experience Container */}
                <div className="flex justify-evenly gap-x-6 gap-y-10 flex-col phone:flex-row">
                  {/* Salary*/}
                  <label className="flex-1 min-w-fit">
                    Salary
                    <p className="flex items-center mt-1">{yearlyTotal()}</p>
                  </label>
                  {/* Experience */}
                  <label className="flex-1">
                    Experience
                    <p className="mt-1">{job.experience}</p>
                  </label>
                </div>

                {/* Location and Job Type Container */}
                <div className="flex justify-evenly gap-x-6 gap-y-10 flex-col phone:flex-row">
                  {/* Company Location */}
                  <label className="flex-1">
                    Location
                    <div className="flex mt-1 capitalize">
                      <p>{job.country}</p>
                      <p>, </p>
                      <p className="ml-[2px]"> {job.city}</p>
                    </div>
                  </label>
                  {/* Job Type */}
                  <label className="flex-1">
                    Job Type
                    <p className="mt-1">{job.hours}</p>
                  </label>
                </div>
                {/* Job Category */}

                {/* Date and Category Container */}
                <div className="flex justify-evenly gap-x-6 gap-y-10 flex-col phone:flex-row">
                  {/* Date */}
                  <label className="flex-1">
                    Date
                    <p className="mt-1">{datePostedOn()}</p>
                  </label>
                  {/* Category */}
                  <label className="flex-1">
                    Category
                    <p className="mt-1">{job.category}</p>
                  </label>
                </div>
              </div>

              {/* Skills Container*/}
              <div>
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
              <button className="text-color-title mt-8">Apply Now</button>
            </aside>
          </div>
          {/* Delete Job Button */}
          {/* IMPORTANT TODO Make user auth so that the delete button is only visible when logged in */}
          <div className="mt-10 flex flex-col items-center sm:items-start">
            <p className="italic text-sm text-center">
              *Work in progress, implementing user auth, please don't delete
              jobs.*
            </p>
            <button
              className="bg-red-500 text-white textShadow rounded-md mt-2 w-fit"
              onClick={openModal}
            >
              delete job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
