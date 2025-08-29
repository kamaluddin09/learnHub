// src/pages/RegisterFormPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../API/LoginSignupApi";
import { useMutation } from "@tanstack/react-query";
import GoogleAut from "./googleAut";
// ✅ Zod schema for validation
const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  expertise: z.string().optional(),
  portfolio: z.string().optional(),
  learningGoals: z.string().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterFormPage: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();

  //  React Hook Form + Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  //  React Query Mutation with Axios
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/login");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });

  // Handle Submit
  const onSubmit = (data: RegisterFormData) => {
    const payload: Record<string, any> = {
      name: data.name,
      email: data.email,
      password: data.password,
      role,
    };

    if (role === "instructor") {
      payload.expertise = data.expertise;
      payload.portfolio = data.portfolio;
    } else if (role === "student") {
      payload.learningGoals = data.learningGoals;
    }

    mutation.mutate(payload);
  };

  return (
    <main className="flex-col min-h-screen px-4  inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4 border border-gray-200"
      >
        <div>
          <button
            onClick={() => navigate("/register")}
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          {role === "instructor"
            ? "Register as an Instructor"
            : "Register as a Student"}
        </h1>

        {/* Common Fields */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Role-specific Fields */}
        {role === "instructor" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">
                Expertise / Skills
              </label>
              <input
                type="text"
                {...register("expertise")}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Web Development, Design"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium mb-1">
                Portfolio Link
              </label>
              <input
                type="url"
                {...register("portfolio")}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://"
              />
              {errors.portfolio && (
                <p className="text-red-500 text-sm">
                  {errors.portfolio.message}
                </p>
              )}
            </div> */}
          </>
        )}

        {role === "student" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Learning Goals
            </label>
            <textarea
              {...register("learningGoals")}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="What do you want to learn?"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all ${
            mutation.isPending && "opacity-70 cursor-not-allowed"
          }`}
        >
          {mutation.isPending ? "Creating account..." : "Create Account"}
        </button>

        <div>
          <GoogleAut />
        </div>
      </form>
    </main>
  );
};

export default RegisterFormPage;
