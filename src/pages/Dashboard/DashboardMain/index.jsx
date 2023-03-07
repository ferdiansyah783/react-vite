import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../../api/authApi";
import productApi from "../../../api/productApi";
import userApi from "../../../api/userApi";
import totalExpensesIcon from "../../../assets/images/Total_expenses.svg";
import totalMemberIcon from "../../../assets/images/Total_member.svg";
import totalProductIcon from "../../../assets/images/Total_product.svg";
import totalProfiteIcon from "../../../assets/images/Total_profite.svg";
import CustomCard from "../../../components/CustomCard";

const DashboardMain = () => {
  const [totalOfMembers, setTotalOfMembers] = useState(0);
  const [totalOfProducts, setTotalOfProducts] = useState(0);

  const navigate = useNavigate(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/signin");

    authApi.setHeader();

    userApi
      .getUsers()
      .then((result) => {
        if (result.status !== 200) return;

        setTotalOfMembers(result?.headers["x-total-count"]);
      })
      .catch((error) => console.log(error));

    productApi
      .getProducts()
      .then((result) => {
        if (result.status !== 200) return;

        setTotalOfProducts(result?.headers["x-total-count"]);
      })
      .catch((error) => console.log(error));
  }, []);

  //   const data = [
  //     {
  //       id: 1,
  //       year: 2018,
  //       userGain: 80000,
  //       userLost: 823,
  //     },
  //     {
  //       id: 2,
  //       year: 2019,
  //       userGain: 45677,
  //       userLost: 345,
  //     },
  //     {
  //       id: 3,
  //       year: 2021,
  //       userGain: 78888,
  //       userLost: 555,
  //     },
  //     {
  //       id: 4,
  //       year: 2022,
  //       userGain: 90000,
  //       userLost: 4555,
  //     },
  //     {
  //       id: 5,
  //       year: 2023,
  //       userGain: 4300,
  //       userLost: 234,
  //     },
  //   ];

  //   const [chartData, setChartData] = useState({
  //     labels: data.map((data) => data.year),
  //     datasets: [
  //       {
  //         label: "Users Gained ",
  //         data: data.map((data) => data.userGain),
  //         backgroundColor: [
  //           "rgba(75,192,192,1)",
  //           "#ecf0f1",
  //           "#50AF95",
  //           "#f3ba2f",
  //           "#2a71d0",
  //         ],
  //         borderColor: "black",
  //         borderWidth: 2,
  //       },
  //     ],
  //   });

  const cardMenu = [
    {
      logo: totalProfiteIcon,
      title: "Total Profite",
      value: "Rp.2,500,00",
    },
    {
      logo: totalExpensesIcon,
      title: "Total Expenses",
      value: "Rp.1,500,00",
    },
    {
      logo: totalMemberIcon,
      title: "Total Members",
      value: totalOfMembers,
    },
    {
      logo: totalProductIcon,
      title: "Total Products",
      value: totalOfProducts,
    },
  ];

  return (
    <div className="w-full h-full font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 drop-shadow rounded-md overflow-hidden mb-10">
        {cardMenu.map((value, index) => (
          <CustomCard
            key={index}
            logo={value.logo}
            title={value.title}
            value={value.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* <CustomChart chartData={chartData} /> */}
        {/* <CustomChart chartData={chartData} /> */}
      </div>
    </div>
  );
};

export default DashboardMain;
