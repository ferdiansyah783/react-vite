import React, { useState, useEffect } from "react";
import { BsCart, BsCart4, BsCartCheck, BsCartX } from "react-icons/bs";
import CustomCard from "../../../components/CustomCard";
import clsx from "clsx";
import CustomPagination from "../../../components/CustomPagination";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import productApi from "../../../api/productApi";
import authApi from "../../../api/authApi";
import { queryBuild } from "../../../utils/queryBuilder";
import CustomDropdown from "../../../components/CustomDropdown";

const DashboardProduct = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [totalOfProducts, setTotalOfProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({
    _page: 1,
    _limit: 2,
    _sort: "",
    q: "",
  });

  const queryBuilder = queryBuild(query);

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/signin");

    authApi.setHeader();

    productApi
      .getProducts(queryBuilder)
      .then((result) => {
        if (result.status !== 200) return;

        setTotalOfProducts(result?.headers["x-total-count"]);
        setProducts(result?.data?.data);
      })
      .catch((error) => console.log(error));
  }, [queryBuilder]);

  const setCurrentPage = (value) => {
    setQuery({ ...query, _page: value });
  };

  const handlePrev = () => {
    setQuery({ ...query, _page: query._page - 1 });
  };

  const handleNext = () => {
    setQuery({ ...query, _page: query._page + 1 });
  };

  const cardMenu = [
    {
      logo: <BsCart4 />,
      title: "Products",
      value: totalOfProducts,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 drop-shadow rounded-md overflow-hidden mb-7 lg:mb-5 2xl:mb-7">
        {cardMenu.map((value, index) => (
          <CustomCard
            key={index}
            logo={value.logo}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
      <div className="w-full space-y-5 md:space-y-0 md:flex justify-between items-center py-3 md:py-0 mb-2 md:mb-5">
        <ul className="flex space-x-3 font-bold text-[#595959] md:space-x-5">
          {["Products", "Ordered", "Completed", "Canceled"].map(
            (value, index) => (
              <li
                key={index}
                className={clsx(activeNav === index && "text-indigo-500")}
              >
                <button onClick={() => setActiveNav(index)}>
                  <p className="lg:text-sm 2xl:text-base">{value}</p>
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
        <div className="flex justify-end md:justify-start flex-wrap space-y-3 md:space-y-0 items-center space-x-3">
          <label className="flex items-center space-x-2 w-full md:w-96 lg:w-72 2xl:w-96 border-2 py-2 lg:py-1 2xl:py-2 px-3 rounded-md">
            <span className="text-xl text-indigo-500">
              <AiOutlineSearch />
            </span>
            <input
              className="w-full outline-none lg:placeholder:text-sm 2xl:placeholder:text-base"
              type="search"
              name="search"
              placeholder="Search"
              onChange={(e) =>
                setQuery({ ...query, _page: 1, q: e.target.value })
              }
            />
          </label>
          <CustomDropdown
            className={
              "text-indigo-500 font-bold bg-white hover:text-indigo-600 text-sm lg:text-xs 2xl:text-sm px-4 py-2.5 lg:py-2 2xl:py-2.5 text-center inline-flex items-center"
            }
            title={"Sort"}
          >
            <ul className="py-2 text-sm text-gray-700">
              {["name", "stock", "price"].map((value, index) => (
                <li key={index}>
                  <button
                    onClick={() => setQuery({ ...query, _sort: value })}
                    className="w-full text-start px-4 py-2 hover:bg-gray-100"
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </CustomDropdown>
          <CustomDropdown
            className={
              "text-white font-bold bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm lg:text-xs 2xl:text-sm px-4 py-2.5 lg:py-2 xl:py-2.5 text-center inline-flex items-center"
            }
            title={"Limit"}
          >
            <ul className="py-2 text-sm text-gray-700">
              {[2, 5, 10].map((value, index) => (
                <li key={index}>
                  <button
                    onClick={() => setQuery({ ...query, _limit: value })}
                    className="w-full text-start px-4 py-2 hover:bg-gray-100"
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </CustomDropdown>
        </div>
      </div>
      <div className="w-full border overflow-x-auto rounded-xl">
        <table className="w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-[#595959]">
              <th
                scope="col"
                className="px-6 py-4 lg:py-3 2xl:py-4 text-left text-xs uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 lg:py-3 2xl:py-4 text-left text-xs uppercase tracking-wider"
              >
                Stock
              </th>
              <th
                scope="col"
                className="px-6 py-4 lg:py-3 2xl:py-4 text-left text-xs uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-4 lg:py-3 2xl:py-4 text-left text-xs uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 lg:py-3 2xl:py-4 text-left text-xs uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length < 1 ? (
              <tr>
                <td className="py-6 text-end w-[55%] text-xl text-gray-600">
                  Product not found
                </td>
              </tr>
            ) : (
              products.map((value, index) => (
                <tr key={index} className="text-[#595959] lg:text-sm 2xl:text-base">
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-xs truncate">{value.name}</td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-xs truncate">{value.stock}</td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-sm truncate">{value.price}</td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-md truncate">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Ordered
                    </span>
                  </td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-sm truncate flex space-x-5">
                    <span className="text-lg text-indigo-500">
                      <FiEdit />
                    </span>
                    <span className="text-xl text-red-600">
                      <IoMdRemoveCircleOutline />
                    </span>
                  </td>
                </tr>
              ))
            )}
            {products.length > 0 && (
              <tr className="relative">
                <td className="py-7 lg:py-6 2xl:py-7">
                  <CustomPagination
                    count={totalOfProducts}
                    page={query._page}
                    limit={query._limit}
                    setCurrentPage={setCurrentPage}
                    setNextPage={handleNext}
                    setPrevPage={handlePrev}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProduct;
