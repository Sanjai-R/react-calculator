import React from "react";

function Button({ onClick, children, extraClass }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 sm:px-6 grid place-items-center sm:py-3 bg-blue-700 text-white sm:text-lg sm:w-24 md:w-32 rounded-md shadow-md ${extraClass}`}
    >
      <p>{children}</p>
    </button>
  );
}

export default Button;
