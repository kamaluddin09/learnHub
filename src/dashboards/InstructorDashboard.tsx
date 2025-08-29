// import React from "react";
import DashboardNavbar from "../Layout/DashboardNavbar";
import SidebarNavigator from "../UI/ID-SidebarNavigator";
import { Outlet } from "react-router-dom";
const InstructorDashboard = () => {
  return (
    <div className="">
      <div>
        <DashboardNavbar />
      </div>
      <div className="flex bg-[#F9FAFB] min-w-screen border">
        <div className="bg-white">
          <SidebarNavigator />
        </div>
        <div className=" ">
              <Outlet />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
