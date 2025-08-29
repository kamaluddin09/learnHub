// login types
export type LoginResponce = {
    
  email: string;
  password: string;
};

export type registerresponce = {
  
}

export type createCourse = {
  
}

// types.ts (or inside your component file)
export interface Lesson {
  title: string;
  video: File | null;
  resources: File[];
}

export interface CourseFormData {
  title: string;
  category: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  price: string;
  thumbnail: File | null;
  lessons: Lesson[];
}
