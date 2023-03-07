import React from "react";

const CustomCard = ({ logo, title, value }) => {
  return (
    <div className="h-36 lg:h-[115px] 2xl:h-28 relative bg-white rounded-md font-poppins">
      <div className="w-full h-full flex p-5 lg:p-3 2xl:p-4 space-x-5">
        <div className="w-[25%] h-full flex justify-center items-center bg-[#4F46E533] rounded-xl">
          <img src={logo} alt="icon" className="w-14 h-14" />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg text-[#00000080]">{title}</h2>
          <h1 className="text-2xl font-extrabold">{value}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
