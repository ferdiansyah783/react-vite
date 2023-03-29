import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardSidebar = ({ isOpenSidebar }) => {
  const [activeSide, setActiveSide] = useState(window.location.pathname);

  const navigate = useNavigate(null);

  const handleSide = (link) => {
    setActiveSide(link);
    navigate(link);
  };

  const sideMenu = [
    {
      logo: <AiOutlineBarChart />,
      value: "Get started",
      link: "/backstore",
    },
    {
      logo: <HiOutlineUserCircle />,
      value: "Members",
      link: "/backstore/member",
    },
    {
      logo: <BsCart4 />,
      value: "Products",
      link: "/backstore/product",
    },
  ];

  return (
    <nav
      className={clsx(
        "border-r drop-shadow fixed lg:relative w-[60%] md:w-[40%] lg:w-[20%] 2xl:w-[14%] h-screen bg-white z-10 transition-all duration-300 ease-in-out",
        isOpenSidebar === true ? "-left-0" : "-left-60 md:-left-80 lg:-left-0"
      )}
    >
      <div className="px-5 py-7 hidden lg:flex justify-center items-center space-x-3">
        <h1 className="text-2xl lg:text-xl 2xl:text-2xl font-extrabold text-[#141414]">
          Dashboard
        </h1>
      </div>
      <ul className="space-y-1 pt-24 md:pt-28 lg:pt-0">
        {sideMenu.map((value, index) => (
          <li key={index} className="px-2">
            <motion.button
              onClick={() => handleSide(value.link)}
              className={clsx(
                "py-3 md:py-4 2xl:py-3 px-3 w-full flex items-center space-x-3 rounded-xl",
                activeSide === value.link
                  ? "active bg-indigo-600 text-white"
                  : "hover:bg-indigo-600 hover:bg-opacity-5"
              )}
            >
              <span className="text-lg md:text-2xl lg:text-lg 2xl:text-xl">
                {value.logo}
              </span>
              <span className="text-sm md:text-lg lg:text-sm 2xl:text-base">
                {value.value}
              </span>
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DashboardSidebar;
