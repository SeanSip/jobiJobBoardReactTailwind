import React from 'react';

const SalarySlider = ({
  minSalary,
  setMinSalary,
  step,
  max,
  inputStyles,
  label,
  containerStyles,
  numberSpanStyles,
}) => {
  const handleSliderChange = event => {
    setMinSalary(event.target.value);
  };

  return (
    <div className={containerStyles}>
      <label className="jobPostLabel" htmlFor="salarySlider">
        {label}
      </label>
      <input
        type="range"
        id="salarySlider"
        min="0"
        max={max}
        step={step}
        value={minSalary}
        onChange={handleSliderChange}
        className={inputStyles}
        style={{ '--thumb-percent': (minSalary / max) * 100 + '%' }}
      />
      <span className={numberSpanStyles}>{minSalary}</span>
    </div>
  );
};

export default SalarySlider;
