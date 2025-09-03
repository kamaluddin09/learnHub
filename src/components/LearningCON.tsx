import React from 'react';

const LearningCON = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Learning?
      </h2>
      <p className="text-lg md:text-xl mb-6">
        Join millions of learners and start building the skills you need to succeed
      </p>
      <button className="bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
        Get Started Today
        <span className="text-lg">→</span>
      </button>
    </div>
  );
};

export default LearningCON;
