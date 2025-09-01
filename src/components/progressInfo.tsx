import React from "react";
import { Book, Key, Star, User, UserRound } from "lucide-react";

const CardsInfo = [
  {
    icon: <User />,
    updates: "5000+",
    heading: "Students Enrolled",
  },
    {
      icon: <Book />,
      updates: "150+",
      heading: "Courses Available",
    },
    {
      icon: <UserRound />,
      updates: "100+",
      heading: "Expert Instructors",
    },
    {
      icon: <Star />,
      updates: "4.8",
      heading: "Average Rating",
    },
];

const ProgressInfo = () => {
  return (
    <div className="bg-[#FAFAFA] max-w-full h-65 flex items-center justify-around">
      {CardsInfo.map((item, idx) => (
        <div key={idx}>
          <div className="flex flex-col gap-2 items-center">
            <span className="bg-[#E7EEFA] w-12 h-12  rounded-full flex items-center justify-center">
            
              <span className=" m text-blue-600"> {item.icon}</span>
            </span>
            <h2 className="font-bold text-3xl">{item.updates}</h2>
            <p className="text-gray-400">{item.heading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressInfo;
