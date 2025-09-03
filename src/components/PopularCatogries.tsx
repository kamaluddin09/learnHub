import React from "react";

export const categories = [
  { id: 1, title: "Development", courses: 1200, icon: "💻" },
  { id: 2, title: "Design", courses: 800, icon: "🎨" },
  { id: 3, title: "Business", courses: 950, icon: "📊" },
  { id: 4, title: "Data Science", courses: 650, icon: "📈" },
  { id: 5, title: "Marketing", courses: 420, icon: "📱" },
  { id: 6, title: "Photography", courses: 380, icon: "📷" },
];
const PopularCatogries = () => {
  return (
    <div>
      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <p className="text-gray-500 mt-2">
          Choose from thousands of courses in these trending categories
        </p>
        {/* cards  */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 w-44 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.courses} courses</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularCatogries;
