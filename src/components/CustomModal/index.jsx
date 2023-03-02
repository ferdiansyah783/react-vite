import React from "react";
import { CgDanger } from "react-icons/cg";

const CustomModal = ({ setIsOpenLogout, action, title }) => {
  return (
    <div className="w-full h-screen fixed z-50 font-poppins bg-black bg-opacity-20">
      <div className="w-full h-full relative">
        <div className="w-3/4 h-auto flex flex-col items-center space-y-5 px-4 py-5 absolute left-[12.5%] top-[20%] bg-white rounded-xl md:w-1/4 md:left-[37.5%] md:space-y-7 md:px-3 md:py-7 md:top-1/3">
          <CgDanger className="text-4xl text-gray-500 md:text-5xl" />
          <h1 className="text-md text-center text-gray-500 md:text-lg">
            {title}
          </h1>
          <div className="space-x-5">
            <button onClick={action} className="px-3 py-2.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-xl md:px-5 md:py-3 md:text-base">
              Yes i'm sure
            </button>
            <button
              onClick={() => setIsOpenLogout((prev) => !prev)}
              className="px-3 py-2.5 text-sm text-gray-500 hover:bg-gray-50 border border-gray-300 rounded-xl md:px-5 md:py-3 md:text-base"
            >
              No cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
