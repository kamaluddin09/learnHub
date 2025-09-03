import React from "react";
import CourseCardWrapper from "../UI/CoursesCardWrapper";

const FeaturedCoursesHome = () => {
  return (
    <div className=" ">
      <div className="text-center my-12 px-4 pt-24 flex-col items-center  justify-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900">
          Featured Courses
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Discover our most popular courses, carefully selected by our education
          experts
        </p>

        <div className="">
          <CourseCardWrapper />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoursesHome;
