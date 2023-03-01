import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit, FiUser, FiUserCheck } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { RiShieldUserLine } from "react-icons/ri";
import CustomCard from "../../../components/CustomCard";
import CustomDropdown from "../../../components/CustomDropdown";
import CustomPagination from "../../../components/CustomPagination";
import userApi from "../../../api/userApi";
import authApi from "../../../api/authApi";

const DashboardMember = () => {
  const [totalOfMembers, setTotalOfMembers] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/signin");

    authApi.setHeader();

    userApi
      .getUsers()
      .then((result) => {
        if (result.status !== 200) return;

        setTotalOfMembers(result?.data?.count);
      })
      .catch((error) => console.log(error));
  }, []);

  const cardMenu = [
    {
      logo: <RiShieldUserLine />,
      title: "Members",
      value: totalOfMembers,
    },
    {
      logo: <FiUserCheck />,
      title: "Gold",
      value: "1,500,00",
    },
    {
      logo: <FiUser />,
      title: "Silver",
      value: "300,00",
    },
  ];

  return (
    <div className="w-full h-full font-poppins">
      <div className="grid grid-cols-1 gap-5 drop-shadow rounded-md overflow-hidden mb-10 md:grid-cols-4">
        {cardMenu.map((value, index) => (
          <CustomCard
            key={index}
            logo={value.logo}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
      <div>
        <div className="flex items-center space-x-5 mb-5">
          <label className="flex items-center space-x-2 border-2 py-2 px-3 w-[30%] rounded-md">
            <span className="text-xl text-indigo-500">
              <AiOutlineSearch />
            </span>
            <input
              className="w-full outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </label>
          <div className="flex space-x-3">
            <CustomDropdown
              className={
                "text-indigo-500 font-bold bg-white hover:text-indigo-600 text-sm px-4 py-2.5 text-center inline-flex items-center"
              }
            />
            <CustomDropdown
              className={
                "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              }
            />
          </div>
        </div>
        <div className="w-full border overflow-hidden rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-[#595959]">
                <th
                  scope="col"
                  className="px-6 py-4 w-[30%] text-left text-xs uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 w-[25%] text-left text-xs uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="text-[#595959]">
                <td className="px-6 py-3 whitespace-nowrap">
                  Muhammad Ferdiansyah
                </td>
                <td className="px-6 py-3 whitespace-nowrap">ferdi@gmail.com</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">Admin</td>
                <td className="px-6 py-3 whitespace-nowrap flex space-x-5">
                  <span className="text-lg text-indigo-500">
                    <FiEdit />
                  </span>
                  <span className="text-xl text-red-600">
                    <IoMdRemoveCircleOutline />
                  </span>
                </td>
              </tr>
              <tr className="text-[#595959]">
                <td className="px-6 py-3 whitespace-nowrap">
                  Anangsyah Amirul Hakim
                </td>
                <td className="px-6 py-3 whitespace-nowrap">anang@gmail.com</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">User</td>
                <td className="px-6 py-3 whitespace-nowrap flex space-x-5">
                  <span className="text-lg text-indigo-500">
                    <FiEdit />
                  </span>
                  <span className="text-xl text-red-600">
                    <IoMdRemoveCircleOutline />
                  </span>
                </td>
              </tr>
              <tr className="text-[#595959]">
                <td className="px-6 py-3 whitespace-nowrap">
                  Muhammad Ferdiansyah
                </td>
                <td className="px-6 py-3 whitespace-nowrap">CEO</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">Admin</td>
                <td className="px-6 py-3 whitespace-nowrap flex space-x-5">
                  <span className="text-lg text-indigo-500">
                    <FiEdit />
                  </span>
                  <span className="text-xl text-red-600">
                    <IoMdRemoveCircleOutline />
                  </span>
                </td>
              </tr>
              <tr className="text-[#595959]">
                <td className="px-6 py-3 whitespace-nowrap">
                  Anangsyah Amirul Hakim
                </td>
                <td className="px-6 py-3 whitespace-nowrap">CTO</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">User</td>
                <td className="px-6 py-3 whitespace-nowrap flex space-x-5">
                  <span className="text-lg text-indigo-500">
                    <FiEdit />
                  </span>
                  <span className="text-xl text-red-600">
                    <IoMdRemoveCircleOutline />
                  </span>
                </td>
              </tr>
              <tr className="text-[#595959]">
                <td className="px-6 py-3 whitespace-nowrap">
                  Anangsyah Amirul Hakim
                </td>
                <td className="px-6 py-3 whitespace-nowrap">CTO</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactive
                  </span>
                </td>
                <td className="px-6 py-3 whitespace-nowrap">User</td>
                <td className="px-6 py-3 whitespace-nowrap flex space-x-5">
                  <span className="text-lg text-indigo-500">
                    <FiEdit />
                  </span>
                  <span className="text-xl text-red-600">
                    <IoMdRemoveCircleOutline />
                  </span>
                </td>
              </tr>
              <tr className="relative">
                <td className="py-5 pl-5">
                  <p className="text-[#595959] font-semibold">
                    showing 1 to 10 of 50 results
                  </p>
                </td>
                <td className="py-5 -mt-2 absolute right-5">
                  <CustomPagination />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardMember;
