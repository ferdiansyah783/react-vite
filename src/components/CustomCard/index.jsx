import React from "react";

const CustomCard = ({logo, title, value}) => {
  return (
    <div className="h-36 lg:h-[115px] 2xl:h-36 relative bg-white rounded-md">
      <div className="flex p-5 lg:p-3 2xl:p-5">
        <h1 className="text-sm lg:text-xs 2xl:text-sm text-indigo-700 bg-indigo-400 bg-opacity-20 py-1 px-2 rounded-lg flex items-center">
          <span className="text-md lg:text-sm 2xl:text-md mr-1">{logo}</span>
          {title}
        </h1>
      </div>
      <h1 className="absolute bottom-5 lg:bottom-2 2xl:bottom-5 left-6 lg:left-4 2xl:left-6 text-xl lg:text-lg 2xl:text-xl text-[#595959] font-semibold">
        {value}
      </h1>
    </div>
  );
};

export default CustomCard;
