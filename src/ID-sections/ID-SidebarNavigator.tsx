import React from "react";
import {
  ChartLine,
  BookText,
  Plus,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: <ChartLine />, label: "Dashboard", path: "/instructor/dashboard" },
  { icon: <BookText />, label: "My Courses", path: "/instructor/courses" },
  { icon: <Plus />, label: "Create Course", path: "/instructor/create-course" },
  { icon: <Users />, label: "Students", path: "/instructor/students" },
  { icon: <DollarSign />, label: "Earnings", path: "/instructor/earnings" },
  { icon: <Settings />, label: "Settings", path: "/instructor/settings" },
];

const SidebarNavigator = () => {
  return (
    <aside className="h-dvh w-60  shadow">
      <nav className="flex  justify-center pt-5">
        <ul>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-6 px-10 py-4 text-gray-600 
                   ${isActive ? "bg-[#667EEA] text-white rounded-2xl" : ""}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarNavigator;
