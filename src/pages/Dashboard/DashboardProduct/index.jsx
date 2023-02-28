import React, { useState } from "react";
import { BsCart, BsCart4, BsCartCheck, BsCartX } from "react-icons/bs";
import CustomCard from "../../../components/CustomCard";
import clsx from "clsx";
import CustomPagination from "../../../components/CustomPagination";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

const DashboardProduct = () => {
  const [activeNav, setActiveNav] = useState(0);

  const cardMenu = [
    {
      logo: <BsCart4 />,
      title: "Products",
      value: "2,500,00",
    },
    {
      logo: <BsCart />,
      title: "Ordered",
      value: "1,500,00",
    },
    {
      logo: <BsCartCheck />,
      title: "Completed",
      value: "300,00",
    },
    {
      logo: <BsCartX />,
      title: "Canceled",
      value: "120,00",
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
      <div className="w-full mb-5">
        <ul className="flex space-x-5 font-bold text-[#595959]">
          {["All Products", "Ordered", "Completed", "Canceled"].map(
            (value, index) => (
              <li
                key={index}
                className={clsx(activeNav === index && "text-indigo-500")}
              >
                <button onClick={() => setActiveNav(index)}>
                  <p>{value}</p>
                  <div
                    className={clsx(
                      "h-[2px] transition duration-300 ease-in-out scale-x-0 rounded-full",
                      activeNav === index && "bg-indigo-500 scale-x-100"
                    )}
                  ></div>
                </button>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="w-full border overflow-hidden rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-[#595959]">
              <th
                scope="col"
                className="px-6 py-4 w-[20%] text-left text-xs uppercase tracking-wider"
              >
                Seller
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-xs uppercase tracking-wider"
              >
                Price
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
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="text-[#595959]">
              <td className="px-6 py-3 whitespace-nowrap">
                Muhammad Ali
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Lorem ipsum dlear
              </td>
              <td className="px-6 py-3 whitespace-nowrap">11</td>
              <td className="px-6 py-3 whitespace-nowrap">89,000,00</td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Ordered
                </span>
              </td>
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
                Jane doe
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Doler amet ipsum
              </td>
              <td className="px-6 py-3 whitespace-nowrap">45</td>
              <td className="px-6 py-3 whitespace-nowrap">12,000,00</td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Canceled
                </span>
              </td>
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
                John Doe
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Lorem ipsum dlear
              </td>
              <td className="px-6 py-3 whitespace-nowrap">15</td>
              <td className="px-6 py-3 whitespace-nowrap">34.434,00</td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Completed
                </span>
              </td>
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
                Sebastian
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Doler amet ipsum
              </td>
              <td className="px-6 py-3 whitespace-nowrap">65</td>
              <td className="px-6 py-3 whitespace-nowrap">56,000,00</td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Canceled
                </span>
              </td>
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
                Jack walson
              </td>
              <td className="px-6 py-3 whitespace-nowrap">
                Doler amet ipsum
              </td>
              <td className="px-6 py-3 whitespace-nowrap">45</td>
              <td className="px-6 py-3 whitespace-nowrap">36,000,00</td>
              <td className="px-6 py-3 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Canceled
                </span>
              </td>
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
  );
};

export default DashboardProduct;
