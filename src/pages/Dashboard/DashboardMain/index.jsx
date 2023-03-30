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
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DashboardMain = () => {
  const [totalOfMembers, setTotalOfMembers] = useState(0);
  const [totalOfProducts, setTotalOfProducts] = useState(0);

  const navigate = useNavigate(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) return navigate("/admin");

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

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "",
    ],
    datasets: [
      {
        label: "Sales",
        fill: "start",
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea);
        },
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 2,
        data: [10, 30, 40, 50, 70, 80, 70, 50, 40, 30, 60, 90, 70],
      },
    ],
  };

  const chartOptions = {
    title: {
      display: true,
      text: "Sales",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4, // set the line tension here
      },
    },
    
  };

  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient.addColorStop(0, "#4F46E500");
      gradient.addColorStop(1, "#4F46E5");
    }

    return gradient;
  }

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
      <div className="bg-white p-10 drop-shadow rounded-xl hidden md:block">
        <h1 className="font-bold text-xl 2xl:text-2xl">Product Data Sold</h1>
        <div className="h-[300px] 2xl:h-[500px]">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
