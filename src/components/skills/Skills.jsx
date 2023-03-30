import React, { useState } from 'react';
import Select from 'react-select';
// import { FaUser, FaEnvelope } from 'react-icons/fa';

const options = [
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Java', label: 'Java' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Objective-C', label: 'Objective-C' },
  { value: 'C#', label: 'C#' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Perl', label: 'Perl' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Go', label: 'Go' },
  { value: 'Rust', label: 'Rust' },
  { value: 'TensorFlow', label: 'TensorFlow' },
  { value: 'PyTorch', label: 'PyTorch' },
  { value: 'C++', label: 'C++' },
  { value: 'C', label: 'C' },
  { value: 'Assembly', label: 'Assembly' },
  { value: 'Linux', label: 'Linux' },
  { value: 'Windows', label: 'Windows' },
  { value: 'macOS', label: 'macOS' },
  { value: 'Android', label: 'Android' },
  { value: 'iOS', label: 'iOS' },
  { value: 'Unity', label: 'Unity' },
  { value: 'Unreal Engine', label: 'Unreal Engine' },
];

const customStyles = {
  control: provided => ({
    ...provided,
    borderRadius: 5,
    marginTop: 8,
    padding: 8,
    borderColor: '#ccc',
    '&:hover': {
      borderColor: '#ccc',
    },
    cursor: 'pointer',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#f0f0f0'
      : state.isFocused
      ? '#D2F34C'
      : '#fff',
    color: '#333',
    '&:hover': {
      backgroundColor: state.isSelected ? '#f0f0f0' : '#D2F34C',
      color: '#333',
      cursor: 'pointer',
    },
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,

    border: '1px solid #ccc',
    borderRadius: 5,
    marginTop: '0px',
    zIndex: 2,
    cursor: 'pointer',
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: '#D2F34C',
    borderRadius: '4px',
    padding: '2px 0px 2px 2px',
    marginRight: '4px',
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: '#333',
  }),
  multiValueRemove: provided => ({
    ...provided,
    color: '#999',
    '&:hover': {
      color: '#666',
    },
  }),
};

// const MultiValue = ({ data, removeProps }) => (
//   <div className="react-select__multi-value">
//     {data.value === 'UI/UX' && (
//       <FaUser className="react-select__multi-value-icon" />
//     )}
//     {data.value === 'Firebase' && (
//       <FaEnvelope className="react-select__multi-value-icon" />
//     )}
//     <span className="react-select__multi-value-label">{data.label}</span>
//     <span {...removeProps} className="react-select__multi-value-remove">
//       &times;
//     </span>
//   </div>
// );

const Skills = ({ jobDetails, setJobDetails }) => {
  const handleOptionSelect = selectedOption => {
    setJobDetails(prevState => ({ ...prevState, skills: selectedOption }));
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <label className="jobPostLabel">
      Skills
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        isMulti
        defaultValue={jobDetails.skills}
        onChange={handleOptionSelect}
        options={options}
        styles={customStyles}
        // components={{ MultiValue }}
      />
    </label>
  );
};

export default Skills;
