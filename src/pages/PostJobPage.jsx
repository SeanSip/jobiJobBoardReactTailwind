import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// Page Imports
import Dropdown from '../components/ui/Dropdown';
import Skills from '../components/skills/Skills';
import Banner from '../components/ui/Banner';

// IMPORTANT TODO Add scroll to view of error on form submission

const PostJobPage = () => {
  const [formError, setFormError] = useState(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [cancelSubmit, setCancelSubmit] = useState(false);
  const [logoUrl, setLogoUrl] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [jobDetails, setJobDetails] = useState({
    company: '',
    hours: '',
    country: '',
    city: '',
    state: '',
    address: '',
    logo: `${logoUrl}`,
    min: '',
    max: '',
    jobTitle: '',
    salary: '',
    category: '',
    skills: [],
    experience: '',
    qualifications: '',
    industry: '',
    companyLink: '',
    jobDescription: '',
  });

  // Dropdown Menu Options for component import's custom props
  const hoursOptions = ['Full-time', 'Part-time', 'Contract'];
  const salaryOptions = ['Month', 'Week', 'Hour'];

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;
    // newValue to convert min and max from string to a number value
    const newValue = name === 'max' || name === 'min' ? Number(value) : value;
    setJobDetails(prevState => ({ ...prevState, [name]: newValue }));
  };

  const handleLogoChange = e => {
    setLogoFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const required = fieldName => {
      return !jobDetails[fieldName];
    };

    // Check if jobDescription field is empty
    if (!jobDetails.jobDescription.trim()) {
      setFormError(required);
      return;
    }
    // Check if hours and salary fields are selected
    const missingRequiredFields = [
      'jobTitle',
      'company',
      'companyLink',
      'hours',
      'salary',
      'min',
      'max',
      'address',
      'country',
      'city',
      'state',
    ].filter(required);

    if (missingRequiredFields.length) {
      setFormError(required);
      return;
    }

    let updatedJobDetails = { ...jobDetails };

    if (logoFile) {
      const storageRef = ref(storage, `logos/${logoFile.name}`);
      const uploadTask = uploadBytes(storageRef, logoFile);

      await uploadTask;

      const url = await getDownloadURL(storageRef);
      setLogoUrl(url);
      updatedJobDetails.logo = url;
    }

    // Save job details to Firestore
    try {
      await addDoc(collection(db, 'jobs'), updatedJobDetails);
      console.log('Success! Job added!');
      // Form fields reset
      setJobDetails({
        company: '',
        country: '',
        city: '',
        state: '',
        address: '',
        logo: '',
        min: '',
        max: '',
        jobTitle: '',
        hours: '',
        salary: '',
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

  const handleReset = () => {
    setJobDetails({
      company: '',
      country: '',
      city: '',
      state: '',
      address: '',
      logo: '',
      min: '',
      max: '',
      jobTitle: '',
      hours: '',
      salary: '',
      category: '',
      skills: [],
      experience: '',
      qualifications: '',
      industry: '',
      companyLink: '',
      jobDescription: '',
    });
    setCancelSubmit(true);
    setFormError(null);
  };

  const handlePostAnotherJob = () => {
    setSuccessfulSubmit(false);
    setCancelSubmit(false);
    setFormError(false);
  };

  const reactQuillModules = {
    toolbar: [
      [{ header: ['1', '2', '3', false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike', 'code', 'image'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      [({ list: 'ordered' }, { list: 'bullet' })],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ align: [] }],
      ['link'],
      ['clean'],
    ],
  };

  // Required error for onSubmit for form to prevent custom dropdown field values being empty
  const required = (fieldName, selectFor) => {
    return (
      <div className={`${!formError ? 'hidden' : 'relative'} `}>
        <h3
          className={`${
            jobDetails[fieldName]
              ? 'hidden'
              : 'absolute bg-red-500 text-white px-2 rounded-md rounded-t-none w-full -top-[4px] font-body text-sm'
          }`}
        >
          {`Please fill out field for ${selectFor}`}
        </h3>
      </div>
    );
  };

  if (successfulSubmit || cancelSubmit) {
    return (
      <div className="bg-[#F0F5F3] pb-[190px] pt-[305px]">
        <div className=" wrapper">
          <div className="bg-white rounded-lg py-40 px-16 text-center">
            <h2 className="text-3xl font-body">{`${
              successfulSubmit
                ? 'Success!'
                : cancelSubmit
                ? 'Job posting cancelled'
                : ''
            }`}</h2>

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
            className="bg-white rounded-2xl py-14 px-6 md:px-16"
            onSubmit={handleSubmit}
            onReset={handleReset}
          >
            <h2 className="text-3xl font-body">Job Details</h2>
            <div className="flex flex-col space-y-10 pt-7">
              <div className="flex lg:flex-row flex-col gap-x-6 lg:gap-y-0 gap-y-10">
                <label className="jobPostLabel flex flex-col w-full">
                  Company Name*
                  <input
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="company"
                    value={jobDetails.company}
                    placeholder="Ex: Jobi"
                  />
                  <div>{required('company', 'Company Name')}</div>
                </label>
                <label className="jobPostLabel flex flex-col w-full">
                  Company Link*
                  <input
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="companyLink"
                    value={jobDetails.companyLink}
                    placeholder="https://"
                  />
                  <div>{required('companyLink', 'Company Link')}</div>
                </label>
              </div>

              <label className="jobPostLabel flex flex-col w-full">
                Logo*
                <input
                  id="file-upload"
                  className="mt-2 customFile"
                  onChange={handleLogoChange}
                  type="file"
                  accept="image/*"
                  name="logo"
                />
                <div>{required('logo', 'Logo')}</div>
              </label>

              <label className="jobPostLabel flex flex-col">
                Job Title*
                <input
                  className="border-2 rounded-md h-14 pl-4 mt-2 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  onChange={handleInputChange}
                  type="text"
                  name="jobTitle"
                  value={jobDetails.jobTitle}
                />
                <div>{required('jobTitle', 'Job Title')}</div>
              </label>

              {/* Job Description */}
              <div>
                <label className="jobPostLabel" htmlFor="jobDescription">
                  Job Description*
                </label>

                <ReactQuill
                  id="jobDescription"
                  type="text"
                  className="text-area mt-2"
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
                <div>{required('jobDescription', 'job description')}</div>
              </div>

              {/* Pay Category */}

              {/* Job Type Dropdown  */}
              <div>
                <Dropdown
                  value={jobDetails.hours}
                  onChange={value =>
                    setJobDetails(prevState => ({
                      ...prevState,
                      hours: value,
                    }))
                  }
                  options={hoursOptions}
                  selectedOption={jobDetails.hours}
                  name={jobDetails.hours}
                  label="Hours*"
                />
                <div>{required('hours', 'Hours')}</div>
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
                  <div>{required('salary', 'Salary')}</div>
                </div>

                {/* Min/Max Container */}
                <div className="flex justify-evenly gap-x-6 gap-y-10 md:flex-row flex-col">
                  {/* Min $ input */}
                  <label className="jobPostLabel flex flex-col w-full">
                    Min*
                    <input
                      className="border-2 rounded-md h-14 pl-4 mt-2"
                      onChange={handleInputChange}
                      type="number"
                      name="min"
                      min="0"
                      step="25"
                      value={jobDetails.min}
                      placeholder="$"
                      pattern="[0-9]*"
                      title="Please enter a valid number"
                    />
                    <div>{required('min', 'Min $')}</div>
                  </label>
                  {/* Max $ input */}
                  <label className="jobPostLabel flex flex-col w-full">
                    Max*
                    <input
                      className="border-2 rounded-md h-14 pl-4 mt-2"
                      onChange={handleInputChange}
                      type="number"
                      name="max"
                      min="0"
                      step="25"
                      value={jobDetails.max}
                      placeholder="$"
                      pattern="[0-9]*"
                      title="Please enter a valid number"
                    />
                    <div>{required('max', 'Max $')}</div>
                  </label>
                </div>
              </div>

              {/* Location Category */}

              {/* Address */}
              <label className="jobPostLabel flex flex-col w-full">
                Address*
                <input
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="address"
                  value={jobDetails.address}
                />
                <div>{required('address', 'Address')}</div>
              </label>
              {/* Country, City, State/ Province Container */}
              <div className="flex gap-x-6 gap-y-10 md:flex-row flex-col">
                {/* Country */}
                <label className="jobPostLabel flex flex-col w-full">
                  Country*
                  <input
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="country"
                    value={jobDetails.country}
                  />
                  <div>{required('country', 'Country')}</div>
                </label>
                {/* City */}
                <label className="jobPostLabel flex flex-col w-full">
                  City*
                  <input
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="city"
                    value={jobDetails.city}
                  />
                  <div>{required('city', 'City')}</div>
                </label>
                {/* Province/State */}
                <label className="jobPostLabel flex flex-col w-full">
                  State/ Province*
                  <input
                    className="border-2 rounded-md h-14 pl-4 mt-2"
                    onChange={handleInputChange}
                    type="text"
                    name="state"
                    value={jobDetails.state}
                  />
                  <div>{required('state', 'Sate/Province')}</div>
                </label>
              </div>
              {/* Skills */}
              <Skills jobDetails={jobDetails} setJobDetails={setJobDetails} />

              {/* Submit Button */}
              <div className="flex gap-x-4 flex-wrap gap-y-10">
                <label className="w-fit">
                  <button className="w-fit secondaryButton" type="submit">
                    Submit
                  </button>
                </label>
                <label className="w-fit">
                  <button
                    className="bg-transparent rounded-md hover:bg-red-500 text-black hover:text-white border-[1px] border-black py-[7px] focus:bg-red-500"
                    type="reset"
                  >
                    Cancel
                  </button>
                </label>
                <div
                  className={`${
                    formError
                      ? 'self-center relative bg-red-500 text-white font-body px-2 py-[1px] rounded-md'
                      : 'hidden'
                  }`}
                >
                  Please fill in missing fields & press submit again
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJobPage;
