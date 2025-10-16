import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className={`
            absolute left-4 top-2 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            peer-focus:top-2 peer-focus:text-gray-700 peer-focus:text-sm
          `}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        placeholder=" "
        className={`
  block w-full px-4 pt-5 pb-2 text-gray-900 bg-white border border-gray-300 rounded-md
  appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
  peer ${className} ${
          error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
        }
`}
        {...props}
      />
    </div>
  );
});

export default Input;
