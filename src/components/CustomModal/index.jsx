import React from "react";
import { CgDanger } from "react-icons/cg";

const CustomModal = ({ setIsOpenLogout, action, title }) => {
  return (
    <div className="w-full h-screen fixed z-50 font-poppins bg-black bg-opacity-20">
      <div className="w-full h-full relative">
        <div className="w-1/4 h-auto flex flex-col items-center space-y-7 px-3 py-7 absolute left-[37.5%] top-1/3 bg-white rounded-xl">
          <CgDanger className="text-5xl text-gray-500" />
          <h1 className="text-lg text-center text-gray-500">
            {title}
          </h1>
          <div className="space-x-5">
            <button onClick={action} className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl">
              Yes i'm sure
            </button>
            <button
              onClick={() => setIsOpenLogout((prev) => !prev)}
              className="px-5 py-3 text-gray-500 hover:bg-gray-50 border border-gray-300 rounded-xl"
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
