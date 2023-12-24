"use client"
import { useState } from 'react';

const InputForm = ({ type, id, name, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative mt-2">
      <input
        className="w-full p-2 border rounded-md"
        type={type}
        id={id}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {!inputValue && isFocused && (
        <div className=" right-0 flex items-center pr-2">
          <span className="text-red-400 text-sm"> {label}  را وارد کنید</span>
        </div>
      )}
    </div>
  );
};

export default InputForm;

