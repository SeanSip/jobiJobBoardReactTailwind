import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Dropdown = props => {
  const {
    value,
    onChange,
    options,
    selectedOption,
    name,
    label,
    tabIndex,
    className,
    placeholder,
    labelStyles,
  } = props;

  const handleOptionSelect = optionValue => {
    onChange(optionValue);
  };

  return (
    <Menu as="div" className="flex flex-col relative">
      <label
        className={`jobPostLabel ${labelStyles}`}
        onChange={onChange}
        name={name}
        value={value}
      >
        {label}
      </label>
      <Menu.Button
        className={`${className}  max-w-full flex  items-center cursor-pointer px-4 rounded-md h-14 border-black/10 border-2 mt-2 hover:bg-transparent focus:bg-transparent hover:text-black focus:text-black focus:removeTextShadow hover:removeTextShadow`}
        tabIndex={tabIndex}
      >
        <span
          className={`${
            selectedOption ? '' : 'text-black/50 '
          } font-body text-base inline-block overflow-hidden whitespace-nowrap overflow-ellipsis `}
        >
          {selectedOption || placeholder}
        </span>
        <ChevronDownIcon className="h-5 w-5 ml-1" />
      </Menu.Button>
      {/* Menu Items */}
      <Menu.Items className="absolute z-10 left-0 w-full bg-white rounded-b-md shadow-lg top-[80px] border-2 max-h-64 overflow-auto">
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
  );
};

export default Dropdown;
