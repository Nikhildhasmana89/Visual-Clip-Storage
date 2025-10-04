import React from "react";

function Button({
  children,
  type = "button",
  bgColour = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-5 py-2 rounded-full font-semibold shadow-md transition duration-300 hover:scale-105 transform ${bgColour} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
