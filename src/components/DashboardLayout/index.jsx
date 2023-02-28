import { Layout } from "antd";
import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import CustomModal from "../CustomModal";
import OptionsMenu from "../OptionsMenu";
import authApi from "../../api/authApi";
import CustomAlert from "../CustomAlert";

const DashboardLayout = ({ children }) => {
  const [activeSide, setActiveSide] = useState(window.location.pathname);
  const [isOpenOption, setIsOpenOption] = useState(false);
  const [visibleOption, setVisibleOption] = useState(false);
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  const navigate = useNavigate();

  const handleSide = (link) => {
    setActiveSide(link);
    navigate(link);
  };

  const { Sider, Header, Content } = Layout;

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
        if (result !== 200) return;

        setIsOpenAlert(true);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout className="h-screen font-poppins">
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
      <Sider
        width={250}
        style={{ backgroundColor: "white" }}
        className="border-r drop-shadow"
      >
        <div className="py-7 px-5 flex items-center space-x-3">
          <RxDashboard className="text-2xl text-indigo-600" />
          <h1 className="text-2xl font-extrabold text-[#141414]">Dashboard</h1>
        </div>
        <ul className="space-y-1">
          {sideMenu.map((value, index) => (
            <li key={index} className="px-2">
              <button
                onClick={() => handleSide(value.link)}
                className={clsx(
                  "py-3 px-3 w-full flex items-center space-x-3 rounded-lg",
                  activeSide === value.link
                    ? "active bg-indigo-600 text-white"
                    : "hover:bg-indigo-600 hover:bg-opacity-5"
                )}
              >
                <span className="text-xl">{value.logo}</span>
                <span>{value.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white", height: 80 }}>
          <div className="h-full flex items-center justify-between">
            <div className="mt-5 space-y-1">
              <h1 className="text-2xl font-semibold font-varela">
                Welcome John<span className="text-3xl">&#x270B;</span>
              </h1>
              <p className="text-base font-poppins text-[#595959]">
                Here's what's hapening in your workpace
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-slate-100 rounded-full">
                <MdOutlineNotificationsActive className="text-2xl text-indigo-500" />
              </div>
              <img
                className="rounded-full w-10 h-10 cursor-pointer"
                src="https://source.unsplash.com/360x360?people"
                alt="people"
                onClick={() => {
                  setIsOpenOption((isOpenOption) => !isOpenOption);
                  setTimeout(() => {
                    setVisibleOption((prev) => !prev);
                  }, 300);
                }}
              />
            </div>
          </div>
        </Header>
        <Content style={{ backgroundColor: "white" }} className="px-12 py-7">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
