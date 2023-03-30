import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardMain from "./DashboardMain";
import DashboardMember from "./DashboardMember";
import DashboardProduct from "./DashboardProduct";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route exact path="/" element={<DashboardMain />} />
          <Route path="/member" element={<DashboardMember />} />
          <Route path="/product" element={<DashboardProduct />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
