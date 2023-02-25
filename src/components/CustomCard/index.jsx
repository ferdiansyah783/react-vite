import React from "react";

const CustomCard = ({logo, title, value}) => {
  return (
    <div className="h-36 relative bg-white rounded-md">
      <div className="flex p-5">
        <h1 className="text-base text-indigo-700 bg-indigo-400 bg-opacity-20 py-1 px-2 rounded-lg flex items-center">
          <span className="text-lg mr-1">{logo}</span>
          {title}
        </h1>
      </div>
      <h1 className="absolute bottom-5 left-6 text-2xl text-[#595959] font-semibold">
        {value}
      </h1>
    </div>
  );
};

export default CustomCard;
