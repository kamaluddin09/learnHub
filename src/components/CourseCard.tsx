import { Link } from "react-router-dom";
import { Clock, Users, Star, BookOpen } from "lucide-react";

export interface CourseCardProps {
  id: string;
  title: string;
  instructor: {
    name: string;
    avatar?: string;
  };
  thumbnail: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  studentCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  isEnrolled?: boolean;
}

const CourseCard = ({
  id,
  title,
  instructor,
  thumbnail,
  price,
  originalPrice,
  rating,
  reviewCount,
  duration,
  studentCount,
  level,
  category,
  isEnrolled = false,
}: CourseCardProps) => {
  return (
    <div className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border rounded-t-lg hover:border-primary/20 bg-card">
      {/* Thumbnail + Tags */}
      <div className="p-0">
        <Link to={`/course/${id}`} className="block">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 left-4 bg-gray-400 w-25 border-0 rounded-full ">
              <h3>{level}</h3>
            </div>
            <div className="absolute top-3 right-3">
              <h3 className="bg-background/80 backdrop-blur-sm">{category}</h3>
            </div>
          </div>
        </Link>
      </div>

      {/* Body */}
      <div className="p-4">
        <Link to={`/course/${id}`}>
          <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 mb-3">
          <div className="h-6 w-6">
            <img src={instructor.avatar} alt={instructor.name} />
          </div>
          <span className="text-sm text-muted-foreground">{instructor.name}</span>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-medium">{rating}</span>
            <span>({reviewCount})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{studentCount.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">${price}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 pt-0">
        {isEnrolled ? (
          <button className="w-full border px-4 py-2 rounded-md">
            <Link to={`/course/${id}/learn`}>
              <BookOpen className="mr-2 h-4 w-4 inline" />
              Continue Learning
            </Link>
          </button>
        ) : (
          <button className="w-full bg-primary text-white px-4 py-2 rounded-md">
            <Link to={`/course/${id}`}>Enroll Now</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
