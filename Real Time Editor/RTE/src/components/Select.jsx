import React from 'react';
import { Controller } from 'react-hook-form';

const Select = ({ name, control, options, label, rules = {}, className }) => {
  return (
    <div className="w-full mb-4">
      {label && <label htmlFor={name} className="block mb-1 pl-1">{label}</label>}
      
      <Controller
        name={name}
        control={control}
        rules={rules} // handle validation rules
        render={({ field, fieldState: { error } }) => (
          <>
            <select
              {...field}
              id={name}
              className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border w-full ${error ? 'border-red-500' : 'border-gray-200'} ${className}`}
            >
              <option value="">Select an option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
            {error && <p className="text-red-500 mt-1">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};

export default Select;
