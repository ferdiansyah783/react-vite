import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const CustomChart = ({ chartData }) => {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2023",
            },
            legend: {
              display: false,
            },
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default CustomChart;
