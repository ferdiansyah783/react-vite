import clsx from "clsx";
import React from "react";

export default function CustomAlert({ isOpen, textColor, bgColor, title }) {
  return (
    <div
      className={clsx(
        "min-w-full flex justify-center px-4 py-6 absolute text-sm rounded-lg transition-all duration-200 ease-out",
        textColor, bgColor,
        isOpen === true ? "top-0" : "-top-20"
      )}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">alert!</span> {title}
      </div>
    </div>
  );
};

