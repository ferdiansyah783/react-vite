import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { BsFilterLeft, BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import product1 from "../../assets/images/products/product1.jpg";
import product2 from "../../assets/images/products/product2.jpg";
import product3 from "../../assets/images/products/product3.jpg";
import product4 from "../../assets/images/products/product4.jpg";

const Main = () => {
  const products = [
    {
      image: product1,
      category: "NEW",
      title: "Line-Pattern Zipper Sweatshirt",
      price: "200",
    },
    {
      image: product2,
      category: "NEW",
      title: "Line-Pattern Zipper Sweatshirt",
      price: "200",
    },
    {
      image: product3,
      category: "NEW",
      title: "Line-Pattern Zipper Sweatshirt",
      price: "200",
    },
    {
      image: product4,
      category: "NEW",
      title: "Line-Pattern Zipper Sweatshirt",
      price: "200",
    },
  ];

  return (
    <div>
      <MainLayout>
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ml-2"
                >
                  Projects
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2">
                  Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dress</h1>
          <label className="flex items-center bg-gray-100 px-3 rounded-lg">
            <input
              className="placeholder:text-gray-400 placeholder:text-sm bg-transparent block w-72 rounded-md py-2 pl-3 pr-3 focus:outline-none sm:text-sm"
              placeholder="Sort by: Most Popular"
              type="text"
              name="sort"
            />
            <span className="text-gray-600 text-2xl">
              <BsFilterLeft />
            </span>
          </label>
        </div>
        <div className="flex gap-x-3 mt-4 mb-10">
          {["Oversize", "Multicolor", "XXL"].map((value, index) => (
            <div
              key={index}
              id="toast-default"
              className="flex items-center w-full max-w-[150px] p-2 text-gray-400/50 bg-slate-200/20 rounded-lg"
              role="alert"
            >
              <div className="ml-3 text-sm font-normal">{value}</div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-500 rounded-lg p-1.5 inline-flex h-8 w-8"
                data-dismiss-target="#toast-default"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-8">
          {products.map((value, index) => (
            <div key={index} className="relative bg-white border border-stone-200 rounded-3xl overflow-hidden">
              <span className="bg-indigo-600 bg-opacity-20 text-indigo-700 font-bold px-4 py-1 rounded-md absolute left-5 top-5">
                {value.category}
              </span>
              <span className="text-3xl text-gray-400 absolute right-5 top-5">
                <AiOutlineHeart />
              </span>
              <div>
                <img
                  className="w-full max-h-96 object-cover object-center"
                  src={value.image}
                />
              </div>
              <div className="p-5">
                <h1 className="font-bold text-xl text-gray-600 py-6">
                  {value.title}
                </h1>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400/80">Price:</p>
                    <p className="font-bold text-2xl">${value.price}</p>
                  </div>
                  <span className="text-3xl bg-indigo-700 rounded-lg text-stone-50 p-2.5">
                    <BsCart3 />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainLayout>
    </div>
  );
};

export default Main;
