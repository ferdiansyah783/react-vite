import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import productApi from "../../../api/productApi";
import totalProductCanceledIcon from "../../../assets/images/Product_canceled.svg";
import totalProductCompletedIcon from "../../../assets/images/Product_complete.svg";
import totalProductOrderedIcon from "../../../assets/images/Product_ordered.svg";
import totalProductIcon from "../../../assets/images/Total_product.svg";
import CustomCard from "../../../components/CustomCard";
import CustomDropdown from "../../../components/CustomDropdown";
import CustomPagination from "../../../components/CustomPagination";
import CustomSearch from "../../../components/CustomSearch";
import { queryBuild } from "../../../utils/queryBuilder";

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

  const navigate = useNavigate(null);

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

  const handleSearch = (e) => {
    setQuery({ ...query, _page: 1, q: e.target.value });
  };

  const cardMenu = [
    {
      logo: totalProductIcon,
      title: "Products",
      value: totalOfProducts,
    },
    {
      logo: totalProductOrderedIcon,
      title: "Ordered",
      value: "1,500,00",
    },
    {
      logo: totalProductCompletedIcon,
      title: "Completed",
      value: "300,00",
    },
    {
      logo: totalProductCanceledIcon,
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
      <div className="w-full space-y-5 md:space-y-0 md:flex justify-between items-center py-3 md:py-0 mb-2 md:mb-5 lg:mb-3">
        <CustomDropdown
          className={
            "text-indigo-500 hover:text-indigo-600 px-1 font-semibold text-xl lg:text-base 2xl:text-lg text-center inline-flex items-center"
          }
          title={"Product"}
        />
        <div className="flex justify-end md:justify-start flex-wrap space-y-3 md:space-y-0 items-center space-x-3">
          <CustomSearch
            width={"w-full md:w-[310px] lg:w-72 2xl:w-[450px]"}
            setQuery={handleSearch}
          />
          <CustomDropdown
            className={
              "text-indigo-500 font-bold bg-white drop-shadow rounded-lg hover:text-indigo-600 text-sm lg:text-xs 2xl:text-sm px-5 py-2.5 lg:py-2 2xl:py-3 text-center inline-flex items-center"
            }
            title={"Sort by"}
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
              "text-indigo-500 font-bold bg-white drop-shadow rounded-lg hover:text-indigo-600 text-sm lg:text-xs 2xl:text-sm px-5 py-2.5 lg:py-2 2xl:py-3 text-center inline-flex items-center"
            }
            title={"Limit per"}
          >
            <ul className="py-2 text-sm text-gray-700">
              {[2, 5, 10].map((value, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setQuery({ ...query, _limit: value, _page: 1 })
                    }
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              products.map((value, index) => (
                <tr
                  key={index}
                  className="text-[#595959] lg:text-sm 2xl:text-base"
                >
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-xs truncate">
                    {value.name}
                  </td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-xs truncate">
                    {value.stock}
                  </td>
                  <td className="px-6 py-3 lg:py-2 2xl:py-3 max-w-sm truncate">
                    <b>Rp.</b>
                    {value.price}
                  </td>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProduct;
