import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCart4, BsChevronDown } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import CustomAlert from "../CustomAlert";
import CustomModal from "../CustomModal";
import OptionsMenu from "../OptionsMenu";

const DashboardLayout = ({ children }) => {
  const [activeSide, setActiveSide] = useState(window.location.pathname);
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [visibleOption, setVisibleOption] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const navigate = useNavigate();

  const handleSide = (link) => {
    setActiveSide(link);
    navigate(link);
  };

  const sideMenu = [
    {
      logo: <AiOutlineBarChart />,
      value: "Dashboard",
      link: "/dashboard",
    },
    {
      logo: <HiOutlineUserCircle />,
      value: "Members",
      link: "/dashboard/member",
    },
    {
      logo: <BsCart4 />,
      value: "Products",
      link: "/dashboard/product",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");

    authApi
      .logout()
      .then((result) => {
        if (result.status !== 204) return;

        setIsOpenAlert(true);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="h-screen w-full flex relative font-poppins">
      <CustomAlert
        isOpen={isOpenAlert}
        textColor={"text-green-800"}
        bgColor={"bg-green-50"}
        title={"log out successfully"}
      />
      {isOpenOption && (
        <OptionsMenu
          setIsOpen={setIsOpenOption}
          visibleOption={visibleOption}
          setVisibleOption={setVisibleOption}
          setIsOpenLogout={setIsOpenLogout}
        />
      )}
      {isOpenLogout && (
        <CustomModal
          title={"Are you sure want to log out from dashboard?"}
          setIsOpenLogout={setIsOpenLogout}
          action={handleLogout}
        />
      )}
      <nav
        className={clsx(
          "border-r drop-shadow fixed w-[60%] h-screen bg-white z-10 transition-all duration-300 ease-in-out md:relative md:w-[14%]",
          isOpenSidebar === true ? "-left-0" : "-left-60 md:-left-0"
        )}
      >
        <div className="px-5 py-7 hidden md:flex items-center space-x-3">
          <RxDashboard className="text-2xl text-indigo-600" />
          <h1 className="text-2xl font-extrabold text-[#141414]">Dashboard</h1>
        </div>
        <ul className="space-y-1 pt-20 md:pt-0">
          {sideMenu.map((value, index) => (
            <li key={index} className="px-2">
              <button
                onClick={() => handleSide(value.link)}
                className={clsx(
                  "py-2 px-3 w-full flex items-center space-x-3 rounded-lg md:py-3",
                  activeSide === value.link
                    ? "active bg-indigo-600 text-white"
                    : "hover:bg-indigo-600 hover:bg-opacity-5"
                )}
              >
                <span className="text-lg md:text-xl">{value.logo}</span>
                <span className="text-sm md:text-base">{value.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full md:w-[86%]">
        <header className="fixed z-10 w-full bg-white drop-shadow px-12 py-8 md:py-2 md:relative md:drop-shadow-none">
          <div className="w-full h-full relative flex items-center justify-between">
            <div className="absolute -left-8 space-y-1 md:relative md:left-0 md:top-0">
              <div className="flex items-center space-x-3 md:space-x-0">
                <button onClick={() => setIsOpenSidebar((prev) => !prev)}>
                  <RxHamburgerMenu className="text-2xl mt-1 md:hidden" />
                </button>
                <h1 className="text-lg font-semibold font-varela md:text-2xl">
                  Welcome Admin<span className="text-3xl">&#x270B;</span>
                </h1>
              </div>
              <p className="hidden text-base font-poppins text-[#595959] md:block">
                Here's what's hapening in your workpace
              </p>
            </div>
            <div className="absolute -right-7 flex items-center space-x-2 md:space-x-4 md:right-0 md:relative">
              <div className="p-2 bg-slate-100 rounded-full">
                <MdOutlineNotificationsActive className="text-md text-indigo-500 md:text-2xl" />
              </div>
              <button
              className="flex items-center space-x-1"
                onClick={() => {
                  setIsOpenOption((isOpenOption) => !isOpenOption);
                  setTimeout(() => {
                    setVisibleOption((prev) => !prev);
                  }, 200);
                }}
              >
                <img
                  className="rounded-full w-7 h-7 md:w-10 md:h-10 cursor-pointer"
                  src="https://source.unsplash.com/360x360?people"
                  alt="people"
                />
                <BsChevronDown className={clsx("text-sm md:text-base transition-all duration-300 ease-in-out", isOpenOption && "rotate-180")} />
              </button>
            </div>
          </div>
        </header>
        <main className="mt-20 px-5 py-5 bg-white md:mt-0 md:px-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
