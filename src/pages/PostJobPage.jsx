import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import bgShapeSmall from '../assets/bgShapeSmall.png';
import { Menu } from '@headlessui/react';

const ref = collection(db, 'jobs');

const PostJobPage = () => {
  const randomNumber = Math.trunc(Math.random() * 50 + 1); // For random image generator

  const [formError, setFormError] = useState(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    company: '',
    hours: '',
    location: '',
    logo: `https://picsum.photos/50?random=${randomNumber}`,
    pay: '',
    role: '',
  });

  const handleOptionSelect = optionValue => {
    setJobDetails(prevState => ({ ...prevState, hours: optionValue }));
  };

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;
    setJobDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!jobDetails.hours) {
      setFormError('Required, please select an option');
      return;
    }
    try {
      await addDoc(ref, jobDetails);
      console.log('Success! Job added!');
      // Form fields reset
      setJobDetails({
        company: '',
        hours: '',
        location: '',
        logo: `https://picsum.photos/50?random=${randomNumber}`,
        pay: '',
        role: '',
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
              <Menu as="div" className="jobPostLabel flex flex-col relative">
                <div className="flex gap-x-2">
                  hours*
                  <div
                    className={
                      formError
                        ? 'absoulte bg-red-500/30 px-2 rounded-md'
                        : 'hidden'
                    }
                  >
                    <h3 className="">Please select an option</h3>
                  </div>
                </div>
                <div
                  onChange={handleInputChange}
                  name="hours"
                  value={jobDetails.hours}
                >
                  <Menu.Button className="flex justify-between items-center w-full cursor-pointer px-4 rounded-md h-14 border-black/10 mt-4">
                    <div>{jobDetails.hours ? jobDetails.hours : ''}</div>
                    <ChevronDownIcon className="h-5 w-5" />
                  </Menu.Button>
                  {/* Menu Items */}
                  <Menu.Items className="absolute z-10 left-0 w-full bg-white rounded-b-md shadow-lg top-[91.5px] border-2 border-t-0 ">
                    <Menu.Item
                      as="div"
                      className=""
                      onClick={() => handleOptionSelect('Full-time')}
                    >
                      {({ close, active }) => (
                        <div
                          className={`${
                            active
                              ? 'cursor-pointer px-3 py-2 bg-color-one '
                              : 'px-3 py-2'
                          }`}
                          onClick={close}
                        >
                          Full-time
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item
                      as="div"
                      className=""
                      onClick={() => handleOptionSelect('Part-time')}
                    >
                      {({ close, active }) => (
                        <div
                          className={`${
                            active
                              ? 'cursor-pointer px-3 py-2 bg-color-one '
                              : 'px-3 py-2'
                          }`}
                          onClick={close}
                        >
                          Part-time
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Menu>
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
              <label className="jobPostLabel flex flex-col">
                pay
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="pay"
                  value={jobDetails.pay}
                />
              </label>
              <label className="jobPostLabel flex flex-col">
                location
                <input
                  required
                  className="border-2 rounded-md h-14 pl-4 mt-2"
                  onChange={handleInputChange}
                  type="text"
                  name="location"
                  value={jobDetails.location}
                />
              </label>
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