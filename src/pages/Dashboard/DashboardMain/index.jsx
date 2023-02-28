import React, { useState } from "react";
import { AiOutlineDollarCircle, AiOutlineTransaction } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";
import CustomCard from "../../../components/CustomCard";
import CustomChart from "../../../components/CustomChart";

const DashboardMain = () => {
  const data = [
    {
      id: 1,
      year: 2018,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2019,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2021,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2022,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2023,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

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
      <div className="grid grid-cols-4 gap-5 drop-shadow rounded-md overflow-hidden mb-10">
        {cardMenu.map((value, index) => (
          <CustomCard
            key={index}
            logo={value.logo}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* <CustomChart chartData={chartData} /> */}
        {/* <CustomChart chartData={chartData} /> */}
      </div>
    </div>
  );
};

export default DashboardMain;
