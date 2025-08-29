import React from "react";

import { BookText, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const cardsDetail = [
  {
    title: "Total Courses",
    number: 12,
    updates: "+2 this month",
    icon: <BookText />,
    linkTo: "/instructor/courses",
  },
  {
    title: "Total students",
    number: 1200,
    updates: "+112 this month",
    icon: <Users />,
    linkTo: "/instructor/students",
  },
  {
    title: "Total earning",
    number: 1500,
    updates: "455 this month",
    icon: <DollarSign />,
    linkTo: "/instructor/earnings",
  },
  {
    title: "average rating",
    number: 4.5,
    updates: `based on ${476} students`,
    icon: <Users />,
    linkTo: "/instructor/settings",
  },
];
const DashboardSection = () => {
  return (
    
      <div className=" ">
        <div className="p-6 ">
          {/* overview */}
          <div>
            <h2 className="text-3xl font-bold pb-1">Dashboard Overview</h2>
            <p className="text-gray-500">
              Welcome back! Here's what's happening with your courses.
            </p>
          </div>
          <div className=" flex gap-4">
            {cardsDetail.map((Item, idx) => (
              <Link to={Item.linkTo}>
                <div
                  key={idx}
                  className="bg-white shadow-sm rounded-xl p-4 mt-5 flex items-center justify-between w-55 h-30 "
                >
                  {/* Left side (text + number) */}
                  <div>
                    <p className="text-gray-500 text-sm font-medium">
                      {Item.title}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {Item.number}
                    </h2>
                    <p className="text-[9px] text-green-600"> {Item.updates}</p>
                  </div>

                  {/* Right side (icon box) */}
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {/* <BookText className="text-blue-600 w-6 h-6" /> */}
                    {Item.icon}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
  );
};

export default DashboardSection;
