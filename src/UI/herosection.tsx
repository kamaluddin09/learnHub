import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-green-50 text-center pb-20 md:pt-20 md:px-10 lg:px-20">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1 text-xs sm:text-sm text-gray-700 shadow-sm mb-6">
        <span>🚀</span>
        <span className="truncate">Over 5000 students learning with us</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-6xl font-extrabold text-gray-900 leading-snug md:leading-tight mb-4">
        Unlock Your Potential with{" "}
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Expert-Led Courses
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 px-2">
        Learn from industry experts and transform your career with our
        comprehensive online courses. Start your learning journey today.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition text-sm sm:text-base"
        >
          Explore Courses →
        </button>

        <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 shadow-sm hover:shadow transition text-sm sm:text-base">
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
