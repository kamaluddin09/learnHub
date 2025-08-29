// dummyCourses.ts
import {type CourseCardProps } from "../components/CourseCard";

export const dummyCourses: CourseCardProps[] = [
  {
    id: "1",
    title: "React for Beginners",
    instructor: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    thumbnail: "https://shethink.in/wp-content/uploads/2021/07/react.js-img-1536x864.png",
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviewCount: 1200,
    duration: "12h 30m",
    studentCount: 3400,
    level: "Beginner",
    category: "Web Development",
    isEnrolled: false,
  },
  {
    id: "2",
    title: "Advanced Node.js Masterclass",
    instructor: {
      name: "Jane Smith",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    thumbnail: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=500&fm=webp",
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviewCount: 980,
    duration: "18h 10m",
    studentCount: 2200,
    level: "Advanced",
    category: "Backend Development",
    isEnrolled: false,
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    instructor: {
      name: "Alex Brown",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    thumbnail: "https://www.jainuniversity.ac.in/uploads/blog/UI_and_UX_Design.webp",
    price: 19.99,
    originalPrice: 49.99,
    rating: 4.3,
    reviewCount: 540,
    duration: "8h 45m",
    studentCount: 1500,
    level: "Intermediate",
    category: "Design",
    isEnrolled: true, // Example: already purchased
  },
  
];
