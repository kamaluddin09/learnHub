import { useEffect, useState } from "react";
import CourseCard, { type CourseCardProps } from "../components/CourseCard";
import { dummyCourses } from "./dummyCourses";

const CourseCardWrapper = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setCourses(dummyCourses);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <p className="p-6">Loading courses...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export default CourseCardWrapper;
