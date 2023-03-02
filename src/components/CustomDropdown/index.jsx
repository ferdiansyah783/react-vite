import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

const CustomDropdown = ({ className, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        className={clsx(className)}
        type="button"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {title}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="z-50 absolute -left-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          {children}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
