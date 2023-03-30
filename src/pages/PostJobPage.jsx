import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import bgShapeSmall from '../assets/bgShapeSmall.png';
import Dropdown from '../components/ui/Dropdown';
import { skills } from '../components/skills/Skills';

const ref = collection(db, 'jobs');

const PostJobPage = () => {
  const randomNumber = Math.trunc(Math.random() * 50 + 1); // For random image generator

  const [formError, setFormError] = useState(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    company: '',
    hours: '',
    country: '',
    city: '',
    state: '',
    address: '',
    logo: `https://picsum.photos/50?random=${randomNumber}`,
    min: '$',
    max: '$',
    role: '',
    salary: '',
    description: '',
    category: '',
    skills: [],
    experience: '',
    qualifications: '',
    industry: '',
  });

  // const errors = [{ hours, salary }];

  // Dropdown Menu Options
  const hoursOptions = ['Full-Time', 'Part-Time', 'Contract'];
  const salaryOptions = ['Month', 'Week', 'Hour'];
  const skillOptions = skills;

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;
    setJobDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!jobDetails.hours || !jobDetails.salary) {
      setFormError('Required, please select an option');
      return;
    }
    try {
      await addDoc(ref, jobDetails);
      console.log('Success! Job added!');
      // Form fields reset
      setJobDetails({
        company: '',
        country: '',
        city: '',
        state: '',
        address: '',
        logo: `https://picsum.photos/50?random=${randomNumber}`,
        min: '',
        max: '',
        role: '',
        hours: '',
        salary: '',
        description: '',
        category: '',
        skills: [],
        experience: '',
        qualifications: '',
        industry: '',
      });
      setSuccessfulSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostAnotherJob = () => {
    setSuccessfulSubmit(false);
    setFormError(false);
  };

  // Required error for onSubmit for form to prevent custom dropdown field values being empty
  const required = fieldName => {
    return (
      <div className={formError ? 'relative' : 'hidden'}>
        <h3
          className={`${
            jobDetails[fieldName]
              ? 'hidden'
              : 'absolute bg-red-500 text-white px-2 rounded-md rounded-t-none w-full -top-[4px]'
          }`}
        >
          {`Please select an option for ${fieldName}`}
        </h3>
      </div>
    );
  };

  if (successfulSubmit) {
    return (
      <div className="bg-[#F0F5F3] pb-[190px] pt-[305px]">
        <div className=" wrapper">
          <div className="bg-white rounded-lg py-40 px-16 text-center">
            <h2 className="text-3xl font-body">Success!</h2>
            <div className="flex justify-center gap-x-5 mt-4 ">
              <Link to="/">
                <p className="text-color-gray hover:text-blue-500 underline capitalize">
                  home
                </p>
              </Link>
              <Link to="/job-listing">
                <p className="text-color-gray hover:text-blue-500 underline capitalize">
                  jobs
                </p>
              </Link>
            </div>
            <button
              onClick={handlePostAnotherJob}
              className="mt-6 px-6 py-3 bg-color-one rounded-md text-black"
            >
              Post Another Job?
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <header>
        {/* Banner Section */}
        <div className="relative">
          <img
            className="absolute bottom-0 left-0"
            src={bgShapeSmall}
            alt="Striped patterned garphic"
          />
          <h1 className="text-white font-title text-[64px] text-center">
            Post Job
          </h1>
          <div className="flex justify-center pb-[82px]">
            <p className="text-white text-center capitalize">
              Create an account & start posting or hiring talents
            </p>
          </div>
        </div>
      </header>
      <div className="bg-[#F0F5F3] py-44">
        <div className="wrapper">
          <form
            className="bg-white rounded-2xl py-14 px-16"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-body">Job Details</h2>
            <div className="flex flex-col space-y-10 pt-7">
              <label className="jobPostLabel flex flex-col">
                Company*
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="company"
                  value={jobDetails.company}
                />
              </label>
              <label className="jobPostLabel flex flex-col">
                Logo*
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="logo"
                  value={jobDetails.logo}
                />
              </label>

              <label className="jobPostLabel flex flex-col">
                role
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  onChange={handleInputChange}
                  type="text"
                  name="role"
                  value={jobDetails.role}
                />
              </label>

              {/* Description Text Area */}
              <label htmlFor="textarea" className="jobPostLabel ">
                Job Description*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="textarea"
                  id="textarea"
                  type="text"
                  rows={12}
                  placeholder="Write some details about the job..."
                  value={jobDetails.description}
                ></textarea>
              </label>

              {/* Pay Category */}

              {/* Job Type Dropdown  */}
              <div>
                <Dropdown
                  value={jobDetails.hours}
                  onChange={value =>
                    setJobDetails(prevState => ({ ...prevState, hours: value }))
                  }
                  options={hoursOptions}
                  selectedOption={jobDetails.hours}
                  name={jobDetails.hours}
                  label="Hours*"
                />
                <div>{required('hours')}</div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-6 lg:gap-y-0 gap-y-10">
                {/* Salary Dropdown */}
                <div className="w-full">
                  <Dropdown
                    value={jobDetails.salary}
                    onChange={value =>
                      setJobDetails(prevState => ({
                        ...prevState,
                        salary: value,
                      }))
                    }
                    options={salaryOptions}
                    selectedOption={jobDetails.salary}
                    name={jobDetails.salary}
                    label="Salary*"
                  />
                  <div>{required('salary')}</div>
                </div>

                {/* Min/Max Container */}
                <div className="flex justify-evenly gap-x-6">
                  {/* Min $ input */}
                  <label className="jobPostLabel flex flex-col w-full">
                    Min
                    <input
                      required
                      className="border-2 rounded-md h-14 pl-4 mt-2"
                      onChange={handleInputChange}
                      type="text"
                      name="min"
                      value={jobDetails.min}
                      placeholder={'$'}
                      pattern="[0-9]*"
                      title="Please enter a valid number"
                    />
                  </label>
                  {/* Max $ input */}
                  <label className="jobPostLabel flex flex-col w-full">
                    Max
                    <input
                      required
                      className="border-2 rounded-md h-14 pl-4 mt-2"
                      onChange={handleInputChange}
                      type="text"
                      name="max"
                      value={jobDetails.max}
                      placeholder={'$'}
                      pattern="[0-9]*"
                      title="Please enter a valid number"
                    />
                  </label>
                </div>
              </div>

              {/* Location Category */}

              {/* Address */}
              <label className="jobPostLabel flex flex-col w-full">
                Address*
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="address"
                  value={jobDetails.address}
                />
              </label>
              {/* Country, City, State/ Province Container */}
              <div className="flex gap-x-6">
                {/* Country */}
                <label className="jobPostLabel flex flex-col w-full">
                  Country*
                  <input
                    required
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="country"
                    value={jobDetails.country}
                  />
                </label>
                {/* City */}
                <label className="jobPostLabel flex flex-col w-full">
                  City*
                  <input
                    required
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="city"
                    value={jobDetails.city}
                  />
                </label>
                {/* Province/State */}
                <label className="jobPostLabel flex flex-col w-full">
                  State/ Province
                  <input
                    required
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="state"
                    value={jobDetails.state}
                  />
                </label>
              </div>
              <label>
                <button className="bg-color-one w-fit" type="submit">
                  Submit
                </button>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJobPage;
