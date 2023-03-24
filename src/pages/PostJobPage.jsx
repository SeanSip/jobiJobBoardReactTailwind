import React, { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const ref = collection(db, 'jobs');

const PostJobPage = () => {
  const randomNumber = Math.trunc(Math.random() * 50 + 1);

  const [jobDetails, setJobDetails] = useState({
    company: '',
    hours: '',
    location: '',
    logo: `https://picsum.photos/50?random=${randomNumber}`,
    pay: '',
    role: '',
  });

  const handleInputChange = e => {
    e.persist();
    const { name, value } = e.target;
    setJobDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
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
    } catch (error) {
      console.log(error);
    }
  };

  console.log(randomNumber);
  console.log(jobDetails);

  return (
    <div className="bg-white">
      <div className=" wrapper">
        <h2>Job Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col p-10 space-y-10">
            <label>
              Company
              <input
                onChange={handleInputChange}
                type="text"
                name="company"
                value={jobDetails.company}
              />
            </label>
            <label>
              Logo
              <input
                onChange={handleInputChange}
                type="text"
                name="logo"
                value={jobDetails.logo}
              />
            </label>
            <label>
              hours
              <input
                onChange={handleInputChange}
                type="text"
                name="hours"
                value={jobDetails.hours}
              />
            </label>
            <label>
              role
              <input
                onChange={handleInputChange}
                type="text"
                name="role"
                value={jobDetails.role}
              />
            </label>
            <label>
              pay
              <input
                onChange={handleInputChange}
                type="text"
                name="pay"
                value={jobDetails.pay}
              />
            </label>
            <label>
              location
              <input
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
  );
};

export default PostJobPage;
