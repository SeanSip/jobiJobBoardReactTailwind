import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Skills = ({ jobDetails, setJobDetails }) => {
  const handleOptionSelect = selectedOption => {
    setJobDetails(prevState => ({ ...prevState, skills: selectedOption }));
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        isMulti
        defaultValue={jobDetails.skills}
        onChange={handleOptionSelect}
        options={options}
      />
    </div>
  );
};

export default Skills;
