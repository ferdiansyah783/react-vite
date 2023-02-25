import React from "react";
import { AiOutlineDollarCircle, AiOutlineTransaction } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";
import CustomCard from "../../../components/CustomCard";

const DashboardMain = () => {
  const cardMenu = [
    {
      logo: <AiOutlineDollarCircle />,
      title: "Total Profite",
      value: "2,500,00",
    },
    {
      logo: <AiOutlineTransaction />,
      title: "Total Expenses",
      value: "1,500,00",
    },
    {
      logo: <HiOutlineUserGroup />,
      title: "Total Member",
      value: "300,00",
    },
    {
      logo: <TbShoppingCart />,
      title: "Total Product",
      value: "530,00",
    },
  ];

  return (
    <div className="w-full h-full font-poppins">
      <div className="grid grid-cols-4 gap-5 drop-shadow rounded-md overflow-hidden">
        {cardMenu.map((value, index) => (
          <CustomCard
            key={index}
            logo={value.logo}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardMain;
