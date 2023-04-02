import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// Page Imports
import Dropdown from '../components/ui/Dropdown';
import Skills from '../components/skills/Skills';
import Banner from '../components/ui/Banner';

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
    min: '',
    max: '',
    jobTitle: '',
    salary: '',
    // textarea: '',
    // responsibilities: '',
    // requiredSkills: '',
    // benefits: '',
    // overview: '',
    category: '',
    skills: [],
    experience: '',
    qualifications: '',
    industry: '',
    companyLink: '',
    jobDescription: '',
  });

  // const errors = [{ hours, salary }];

  // Dropdown Menu Options
  const hoursOptions = ['Full-time', 'Part-time', 'Contract'];
  const salaryOptions = ['Month', 'Week', 'Hour'];

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
      await addDoc(ref, jobDetails, job);
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
        jobTitle: '',
        hours: '',
        salary: '',
        // textarea: '',
        // responsibilities: '',
        // requiredSkills: '',
        // benefits: '',
        // overview: '',
        category: '',
        skills: [],
        experience: '',
        qualifications: '',
        industry: '',
        companyLink: '',
        jobDescription: '',
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

  const job = { ...jobDetails, jobDescription: jobDetails.textareaPlainText };

  useEffect(() => {
    const plainText = document.createElement('div');
    plainText.innerHTML = jobDetails.textarea;
    setJobDetails(prevState => ({
      ...prevState,
      textareaPlainText: plainText.textContent || plainText.innerText || '',
    }));
  }, [jobDetails.textarea]);

  const reactQuillModules = {
    toolbar: [
      [{ header: ['1', '2', '3', '4', '5', '6'] }],
      ['bold', 'italic', 'underline', 'strike', 'code', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      ['link'],
    ],
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
        <Banner
          title={'Post Job'}
          subTitle={'Start posting & hiring talents'}
        />
      </header>
      <div className="bg-[#F0F5F3] py-44">
        <div className="wrapper">
          <form
            className="bg-white rounded-2xl py-14 px-16"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-body">Job Details</h2>
            <div className="flex flex-col space-y-10 pt-7">
              <div className="flex lg:flex-row flex-col gap-x-6 lg:gap-y-0 gap-y-10">
                <label className="jobPostLabel flex flex-col w-full">
                  Company Name*
                  <input
                    required
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="company"
                    value={jobDetails.company}
                    placeholder="Ex: Jobi"
                  />
                </label>
                <label className="jobPostLabel flex flex-col w-full">
                  Company Link*
                  <input
                    required
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="companyLink"
                    value={jobDetails.companyLink}
                    placeholder="https://"
                  />
                </label>
              </div>
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
                Job Title*
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  onChange={handleInputChange}
                  type="text"
                  name="jobTitle"
                  value={jobDetails.jobTitle}
                />
              </label>

              {/* Job Description */}
              <label className="jobPostLabel" htmlFor="jobDescription">
                Job Description*
              </label>

              <ReactQuill
                id="jobDescription"
                type="text"
                required
                className="h-72 pb-10 mt-2"
                name="jobDescription"
                value={jobDetails.jobDescription}
                onChange={value =>
                  setJobDetails(prevState => ({
                    ...prevState,
                    jobDescription: value,
                  }))
                }
                modules={reactQuillModules}
              />

              {/* Overview Text Area */}
              {/* <label htmlFor="overview" className="jobPostLabel">
                Job Overview*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="overview"
                  id="overview"
                  type="text"
                  rows={5}
                  placeholder="Write an overview about the job..."
                  value={jobDetails.overview}
                ></textarea>
              </label> */}

              {/* Description Text Area */}
              {/* <label htmlFor="textarea" className="jobPostLabel">
                Job Description*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="textarea"
                  id="textarea"
                  type="text"
                  rows={12}
                  placeholder="Write some details about the job..."
                  value={jobDetails.textarea}
                ></textarea>
              </label> */}

              {/* Responsibilities Text Area */}
              {/* TODO Make it so that when user types in a responsibility, it gets saved as an li */}
              {/* <label htmlFor="responsibilities" className="jobPostLabel">
                Job Responsibilities*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="responsibilities"
                  id="responsibilities"
                  type="text"
                  rows={5}
                  placeholder="Write some responsibilities for the job..."
                  value={jobDetails.responsibilities}
                ></textarea>
              </label> */}

              {/* Required Skills  */}
              {/* <label htmlFor="requiredSkills" className="jobPostLabel">
                Required Skills*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="requiredSkills"
                  id="requiredSkills"
                  type="text"
                  rows={5}
                  placeholder="What skills are right for the job..."
                  value={jobDetails.requiredSkills}
                ></textarea>
              </label> */}

              {/* Benefits Text Area */}
              {/* <label htmlFor="benefits" className="jobPostLabel">
                Job Benefits*
                <textarea
                  className="w-full rounded-md p-4 mt-2"
                  onChange={handleInputChange}
                  name="benefits"
                  id="benefits"
                  type="text"
                  rows={5}
                  placeholder="Write some benefits for the job..."
                  value={jobDetails.benefits}
                ></textarea>
              </label> */}

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
                      placeholder="$"
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
                      placeholder="$"
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
              {/* Skills */}
              <Skills jobDetails={jobDetails} setJobDetails={setJobDetails} />

              {/* Submit Button */}
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
