import React from "react";
import HeroSection from "../UI/herosection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="min-h-lvh w-full bg-blue-100">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
