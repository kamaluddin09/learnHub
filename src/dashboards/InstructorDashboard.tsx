// import React from "react";
import DashboardNavbar from "../Layout/DashboardNavbar";
import SidebarNavigator from "../ID-sections/ID-SidebarNavigator";
import { Outlet } from "react-router-dom";
const InstructorDashboard = () => {
  return (
    <div className="">
      <div>
        <DashboardNavbar />
      </div>
      <div className="flex gap-x-16 bg-[#F9FAFB] max-w-screen">
        <div className="bg-white">
          <SidebarNavigator />
        </div>
        <div className=" w-full">
              <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
