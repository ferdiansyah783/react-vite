import { Layout } from "antd";
import React, { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [activeSide, setActiveSide] = useState(window.location.pathname)

  const navigate = useNavigate()

  const handleSide = (link) => {
    setActiveSide(link)
    navigate(link)
  }

  const { Sider, Header, Content } = Layout;

  const sideMenu = [
    {
      logo: <AiOutlineBarChart />,
      value: "Get Started",
      link: "/dashboard",
    },
    {
      logo: <HiOutlineUserCircle />,
      value: "Manage Member",
      link: "/dashboard/member",
    },
    {
      logo: <BsCart4 />,
      value: "Manage Product",
      link: "/dashboard/product",
    },
  ];

  return (
    <Layout className="h-screen font-poppins">
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
              <button onClick={() => handleSide(value.link)} className={clsx("py-3 px-3 w-full flex items-center space-x-3 rounded-lg", activeSide === value.link ? "active bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:bg-opacity-5")}>
                <span className="text-xl">
                  {value.logo}
                </span>
                <span>{value.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white", height: 80 }}>
          <div className="h-full flex items-center">
            <div className="mt-5 space-y-1">
              <h1 className="text-2xl font-semibold font-varela">
                Welcome John<span className="text-3xl">&#x270B;</span>
              </h1>
              <p className="text-base font-poppins text-[#595959]">
                Here's what's hapening in your workpace
              </p>
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
