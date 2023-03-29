import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Dropdown = props => {
  const { value, onChange, options, selectedOption, name, label } = props;

  const handleOptionSelect = optionValue => {
    onChange(optionValue);
  };

  return (
    <div>
      <Menu as="div" className="jobPostLabel flex flex-col relative">
        <div onChange={onChange} name={name} value={value}>
          {label}
        </div>
        <Menu.Button className="flex justify-between items-center w-full cursor-pointer px-4 rounded-md h-14 border-black/10 mt-2 hover:bg-transparent">
          <span>{selectedOption}</span>
          <ChevronDownIcon className="h-5 w-5" />
        </Menu.Button>
        {/* Menu Items */}
        <Menu.Items className="absolute z-10 left-0 w-full bg-white rounded-b-md shadow-lg top-[80px] border-2">
          {options.map(option => (
            <Menu.Item
              key={option}
              as="div"
              className=""
              onClick={() => handleOptionSelect(option)}
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
                  {option}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Dropdown;
