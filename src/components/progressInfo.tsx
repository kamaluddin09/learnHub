import React from "react";
import { Book, Star, User, UserRound } from "lucide-react";

const CardsInfo = [
  {
    icon: <User className="w-6 h-6 sm:w-7 sm:h-7" />,
    updates: "5000+",
    heading: "Students Enrolled",
  },
  {
    icon: <Book className="w-6 h-6 sm:w-7 sm:h-7" />,
    updates: "150+",
    heading: "Courses Available",
  },
  {
    icon: <UserRound className="w-6 h-6 sm:w-7 sm:h-7" />,
    updates: "100+",
    heading: "Expert Instructors",
  },
  {
    icon: <Star className="w-6 h-6 sm:w-7 sm:h-7" />,
    updates: "4.8",
    heading: "Average Rating",
  },
];

const ProgressInfo = () => {
  return (
    <div className="bg-[#FAFAFA] w-full py-10 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {CardsInfo.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 items-center text-center"
          >
            <div className="bg-[#E7EEFA] w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-blue-600">{item.icon}</span>
            </div>

            <h2 className="font-bold text-2xl sm:text-3xl">{item.updates}</h2>
            <p className="text-gray-500 text-sm sm:text-base">{item.heading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressInfo;
