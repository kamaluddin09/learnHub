import React from "react";
import {
  Bell,
  ChartLine,
  BookText,
  Plus,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import KamalImg from "../assets/images/kamal.jpg";
// import KamalImg from "../assets/images/kamal.jpg";

const DashboardNavbar = () => {
  return (
    <nav className=" flex justify-between px-9 py-4  mb-[.5px] shadow">
      <div className=" flex items-center  gap-9 flex-1">
        <div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            NextSkill
          </span>
        </div>
        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
    
      <div className="flex justify-center items-center gap-5">
        <div>
          <Bell className="cursor-pointer" />
        </div>
        <div>
          <div className=" ">
            <img
              src={KamalImg}
              alt="avtar"
              className="w-[50px] h-[50px] rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
