import React from "react";
// import CourseCard from "../UI/CourseCard";
import { Search } from "lucide-react";
import CourseCardWrapper from "../UI/CoursesCardWrapper";

const Courses = () => {
  return (
    <div className="mt-20 flex flex-col items-center  justify-center">
      <section className="py-16 bg-[#E8FAF2] w-full ">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center mb-8">
            Explore Our Courses
          </h1>
          <p className="text-cent er text-lg mb-12">
            Discover thousands of expert-led courses to advance your career
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for courses..."
              className=" w-xl border-0 rounded  bg-white pl-12 pr-2.5 h-14 text-lg bg-background border-input-border focus:border-primary"
            />
          </div>
        </div>
      </section>
      {/* course cards section  */}
      {/* <div className="dlex flex-wrap justify-center gap-6 mt-10 max-w-7xl mx-auto px-4"> */}
       <CourseCardWrapper />
    </div>
  );
};

export default Courses;
