import React from "react";

const CustomCard = ({ logo, title, value }) => {
  return (
    <div className="h-28 lg:h-24 2xl:h-28 relative bg-white rounded-md font-poppins">
      <div className="w-full h-full flex p-3 2xl:p-4 space-x-5 lg:space-x-3 2xl:space-x-4">
        <div className="w-1/4 lg:w-[35%] 2xl:w-1/4 h-full flex justify-center items-center bg-[#4F46E533] rounded-xl">
          <img src={logo} alt="icon" className="w-12 lg:w-8 h-12 lg:h-8" />
        </div>
        <div className="space-y-5 md:space-y-4">
          <h2 className="text-xl md:text-lg lg:text-base 2xl:text-lg text-[#00000080]">{title}</h2>
          <h1 className="text-2xl lg:text-base 2xl:text-xl font-extrabold">{value}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
