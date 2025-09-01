// import React from "react";
import Header from "../components/Navbar";
import HeroSection from "../UI/herosection";
import ProgressInfo from "../components/progressInfo";
import FeaturedCoursesHome from "../components/featuredCoursesHome";
const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ProgressInfo />
      </div>
      <div className=" h-32">
        <FeaturedCoursesHome/>
      </div>
    </div>
  );
};

export default Home;
