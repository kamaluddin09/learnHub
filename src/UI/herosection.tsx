import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-blue-50 to-green-50 text-center pt-45 px-7 max-w-full  min-h-screen w-full bg-blue-100 ">
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-700 shadow-sm mb-6">
        <span>🚀</span>
        Over 5000 students learning with us
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        Unlock Your Potential with{" "}
        <span className=" block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          Expert-Led Courses
        </span>
      </h1>

      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8 ">
        Learn from industry experts and transform your career with our
        comprehensive online courses. Start your learning journey today.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/courses")}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition"
        >
          Explore Courses →
        </button>

        <button className="px-6 py-3 bg-white border border-gray-200 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-50 shadow-sm hover:shadow transition">
          <Play className="w-4 h-4" />
          Watch Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
