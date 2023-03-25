import React from 'react';

const Dropdown = ({ options, dropDownOpen, handleInputChange }) => {
  return (
    <div className="dropdown">
      {options.map(option => (
        <h3
          key={option.value}
          className={`dropdown-option ${dropDownOpen ? 'open' : ''}`}
          onClick={() =>
            handleInputChange({
              target: { name: 'hours', value: option.value },
            })
          }
        >
          {option.label}
        </h3>
      ))}
    </div>
  );
};

export default Dropdown;
