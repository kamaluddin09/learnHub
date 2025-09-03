// import React from "react";
import Header from "../components/Navbar";
import HeroSection from "../UI/herosection";
import ProgressInfo from "../components/progressInfo";
import FeaturedCoursesHome from "../components/featuredCoursesHome";
import Courses from "./Courses";
import { Navigate, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PopularCatogries from "../components/PopularCatogries";
import LearningCON from "../components/LearningCON";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" pt-20 ">
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ProgressInfo />
      </div>
      <div className="flex flex-col items-center  justify-center pb-9">
        <FeaturedCoursesHome />
        <button
          onClick={() => navigate("/courses")}
          className=" cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm hover:shadow-md hover:bg-gray-50 transition"
        >
          View All Courses
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div>
        <PopularCatogries/>
      </div>
      <div>
        <LearningCON/>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
