import clsx from "clsx";
import React, { useState } from "react";
import { BsChevronDown, BsSearch, BsCart3 } from "react-icons/bs";
import { motion } from "framer-motion";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillAmazonSquare, AiOutlineHeart } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

const MainLayout = () => {
  const [isVisibleTipe, setIsVisibleTipe] = useState(false);
  const [isVisibleColour, setIsVisibleColour] = useState(false);
  const [isVisibleSize, setIsVisibleSize] = useState(false);

  return (
    <div className="w-full h-screen flex bg-white font-poppins">
      <nav className="w-[290px] h-full border-r">
        <div className="h-24 flex justify-center items-center border-b space-x-1">
          <span className="text-4xl text-indigo-600">
            <AiFillAmazonSquare />
          </span>
          <h1 className="text-2xl text-gray-600">
            front<b className="text-black">store</b>
          </h1>
        </div>
        <div className="px-5 pt-3">
          <h2 className="font-bold">Category</h2>
          <div className="px-5 py-2 text-sm text-gray-500">
            <ul>
              {[
                "T-shirt",
                "Sweter",
                "Dress",
                "Swimsuit",
                "Jacket",
                "Stuff and Accessories",
              ].map((value, index) => (
                <li
                  key={index}
                  className={clsx(
                    "py-1.5",
                    value === "Dress" ? "text-indigo-500 font-semibold" : ""
                  )}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-5 py-2">
          <div className="h-[1px] w-full bg-stone-300" />
        </div>
        <div className="px-5 py-2">
          <h2 className="font-bold mb-3">Filter by:</h2>
          <div
            onClick={() => setIsVisibleTipe((prev) => !prev)}
            className="flex items-center justify-between cursor-pointer my-1"
          >
            <h2 className="font-semibold">Tipe</h2>
            <span
              className={clsx(
                "transition duration-300 ease-in-out",
                isVisibleTipe ? "rotate-180" : ""
              )}
            >
              <BsChevronDown />
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            <motion.ul
              initial={{ height: "0" }}
              animate={{
                height: isVisibleTipe ? "100%" : "0",
                marginBottom: isVisibleTipe ? "18px" : "0",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              }}
              className={clsx(
                "space-y-3 text-sm text-gray-700 overflow-y-hidden"
              )}
            >
              {["Basic", "Pattern", "Hoodie", "Zipper", "Oversize"].map(
                (value, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <input
                        id={value}
                        type="checkbox"
                        value=""
                        className="w-[14px] h-[14px] accent-indigo-500"
                      />
                      <label
                        htmlFor={value}
                        className="ml-2 text-sm font-medium text-gray-500"
                      >
                        {value}
                      </label>
                    </div>
                  </li>
                )
              )}
            </motion.ul>
          </div>
          <div
            onClick={() => setIsVisibleColour((prev) => !prev)}
            className="flex items-center justify-between cursor-pointer my-1"
          >
            <h2 className="font-semibold">Colour</h2>
            <span
              className={clsx(
                "transition duration-300 ease-in-out",
                isVisibleColour ? "rotate-180" : ""
              )}
            >
              <BsChevronDown />
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            <motion.ul
              initial={{ height: "0" }}
              animate={{
                height: isVisibleColour ? "100%" : "0",
                marginBottom: isVisibleColour ? "18px" : "0",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              }}
              className={clsx(
                "space-y-3 text-sm text-gray-700 overflow-y-hidden"
              )}
            >
              {["Black", "Red", "Brown", "Multicolour", "Grey", "Blue"].map(
                (value, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <input
                        id={value}
                        type="checkbox"
                        value=""
                        className="w-[14px] h-[14px] accent-indigo-500"
                      />
                      <label
                        htmlFor={value}
                        className="ml-2 text-sm font-medium text-gray-500"
                      >
                        {value}
                      </label>
                    </div>
                  </li>
                )
              )}
            </motion.ul>
          </div>
          <div
            onClick={() => setIsVisibleSize((prev) => !prev)}
            className="flex items-center justify-between cursor-pointer my-1"
          >
            <h2 className="font-semibold">Size</h2>
            <span
              className={clsx(
                "transition duration-300 ease-in-out",
                isVisibleSize ? "rotate-180" : ""
              )}
            >
              <BsChevronDown />
            </span>
          </div>
          <div className="divide-y divide-gray-100">
            <motion.ul
              initial={{ height: "0" }}
              animate={{
                height: isVisibleSize ? "100%" : "0",
                marginBottom: isVisibleSize ? "18px" : "0",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                },
              }}
              className={clsx(
                "space-y-3 text-sm text-gray-700 overflow-y-hidden"
              )}
            >
              {["S", "M", "L", "XL", "XXL", "Other"].map((value, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <input
                      id={value}
                      type="checkbox"
                      value=""
                      className="w-[14px] h-[14px] accent-indigo-500"
                    />
                    <label
                      htmlFor={value}
                      className="ml-2 text-sm font-medium text-gray-500"
                    >
                      {value}
                    </label>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="px-3 flex items-center justify-evenly mt-5">
          <button className="py-2 px-8 bg-indigo-700 text-white rounded-lg">
            Apply
          </button>
          <button className="px-3 py-2.5 border border-stone-300 rounded-lg text-stone-400 text-xl hover:bg-red-600 hover:text-white hover:border-transparent">
            <RiDeleteBinLine />
          </button>
        </div>
      </nav>
      <div className="w-full h-full">
        <header className="w-full flex items-center justify-between border-b max-h-24 py-[25.5px] px-6">
          <div className="flex items-center bg-gray-100 max-w-md py-1 pl-4 rounded-lg">
            <span className="text-gray-600">
              <BsSearch />
            </span>
            <input
              className="placeholder:italic placeholder:text-gray-400 placeholder:text-sm bg-transparent block w-[448px] rounded-md py-2 pl-3 pr-3 focus:outline-none sm:text-sm"
              placeholder="Search among 100+ products"
              type="search"
              name="search"
            />
          </div>
          <div className="flex space-x-5">
            <div className="flex items-center text-stone-400 space-x-3">
              <span>ENG</span>
              <span className="text-2xl">
                <MdLanguage />
              </span>
            </div>
            <button className="flex items-center space-x-2 bg-indigo-600 bg-opacity-20 text-indigo-700 px-4 py-2.5 rounded-lg">
              <span className="text-sm font-semibold">Wishlist</span>
              <span className="text-xl">
                <AiOutlineHeart />
              </span>
            </button>
            <button className="flex items-center space-x-2 bg-indigo-600 bg-opacity-20 text-indigo-700 px-4 py-2.5 rounded-lg">
              <span className="text-sm font-semibold">Your Cart</span>
              <span className="text-xl">
                <BsCart3 />
              </span>
            </button>
            <img
              className="rounded-full w-8 md:w-12 lg:w-10 2xl:w-[40px] h-8 md:h-12 lg:h-10 2xl:h-[40px]"
              src="https://source.unsplash.com/360x360?people"
              alt="people"
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default MainLayout;
