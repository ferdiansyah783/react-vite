import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Route, Routes } from "react-router-dom";
import DashboardMain from "./DashboardMain";
import DashboardMember from "./DashboardMember";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route exact path="/" element={<DashboardMain />} />
          <Route path="/member" element={<DashboardMember />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
