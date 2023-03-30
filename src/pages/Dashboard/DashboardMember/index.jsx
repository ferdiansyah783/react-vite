import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import userApi from "../../../api/userApi";
import totalGoldMemberIcon from "../../../assets/images/Total_gold_member.svg";
import totalMemberIcon from "../../../assets/images/Total_member.svg";
import totalSilverMemberIcon from "../../../assets/images/Total_silver_member.svg";
import CustomCard from "../../../components/CustomCard";
import CustomDropdown from "../../../components/CustomDropdown";
import CustomPagination from "../../../components/CustomPagination";
import CustomSearch from "../../../components/CustomSearch";
import { queryBuild } from "../../../utils/queryBuilder";

const DashboardMember = () => {
  const [totalOfMembers, setTotalOfMembers] = useState(0);
  const [members, setMembers] = useState([]);
  const [query, setQuery] = useState({
    _page: 1,
    _limit: 2,
    _sort: "",
    q: "",
  });

  const navigate = useNavigate(null);

  const queryBuilder = queryBuild(query);

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/admin");

    authApi.setHeader();

    userApi
      .getUsers(queryBuilder)
      .then((result) => {
        if (result.status !== 200) return;

        setMembers(result?.data?.data);
        setTotalOfMembers(result?.headers["x-total-count"]);
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
      logo: totalMemberIcon,
      title: "Members",
      value: totalOfMembers,
    },
    {
      logo: totalGoldMemberIcon,
      title: "Gold",
      value: "1,500,00",
    },
    {
      logo: totalSilverMemberIcon,
      title: "Silver",
      value: "300,00",
    },
  ];

  return (
    <div className="w-full h-full font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 drop-shadow rounded-md overflow-hidden mb-10 lg:mb-5 2xl:mb-8">
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
        <div className="flex justify-end md:justify-start flex-wrap space-y-3 md:space-y-0 items-center space-x-5 mb-5">
          <CustomSearch
            width={"w-full md:w-[61%] lg:w-[40%] 2xl:w-[30%]"}
            setQuery={handleSearch}
          />
          <div className="flex space-x-3">
            <CustomDropdown
              className={
                "text-indigo-500 font-bold bg-white drop-shadow rounded-lg hover:text-indigo-600 text-sm lg:text-xs 2xl:text-sm px-5 py-2.5 lg:py-2 2xl:py-3 text-center inline-flex items-center"
              }
              title={"Sort by"}
            >
              <ul className="py-2 text-sm text-gray-700">
                {["name", "email"].map((value, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setQuery({ ...query, _sort: value });
                      }}
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-[#595959]">
                <th
                  scope="col"
                  className="px-6 py-4 lg:py-3 2xl:py-4 w-[30%] text-left text-xs uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 lg:py-3 2xl:py-4 w-[25%] text-left text-xs uppercase tracking-wider"
                >
                  Email
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
                  Role
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
              {members.length < 1 ? (
                <tr className="relative w-full">
                  <td className="py-10 text-xl text-gray-600">
                    <p className="absolute left-[30%] lg:left-[40%] top-7">
                      Member not found
                    </p>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                members.map((value, index) => (
                  <tr
                    key={index}
                    className="text-[#595959] lg:text-sm 2xl:text-base"
                  >
                    <td className="px-6 py-3 lg:py-2 2xl:py-3 whitespace-nowrap">
                      {value.name}
                    </td>
                    <td className="px-6 py-3 lg:py-2 2xl:py-3 whitespace-nowrap">
                      {value.email}
                    </td>
                    <td className="px-6 py-3 lg:py-2 2xl:py-3 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-3 lg:py-2 2xl:py-3 whitespace-nowrap">
                      {value.role}
                    </td>
                    <td className="px-6 py-3 lg:py-2 2xl:py-3 whitespace-nowrap flex space-x-5">
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
              {members.length > 0 && (
                <tr className="relative">
                  <td className="py-7 lg:py-6 2xl:py-7">
                    <CustomPagination
                      count={totalOfMembers}
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
    </div>
  );
};

export default DashboardMember;
