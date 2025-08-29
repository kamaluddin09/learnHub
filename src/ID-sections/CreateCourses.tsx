import type React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createCourse } from "../API/InstructorApi";
import { Loader2 } from "lucide-react";

// ------------------- Schemas -------------------
const basicInfoSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  category: z.string().nonempty("Category is required"),
  level: z.string().nonempty("Level is required"),
});

const uploadSchema = z.object({
  thumbnail: z
    .any()
    .refine((files) => files && files.length === 1, "Thumbnail is required"),
  video: z.any().optional(),
  document: z.any().optional(),
});

const courseSchema = z.object({
  basicInfo: basicInfoSchema,
  upload: uploadSchema,
});

type CourseType = z.infer<typeof courseSchema>;

// ------------------- Main Component -------------------
const CreateCourseWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Single RHF form (entire wizard)
  const form = useForm<CourseType>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      basicInfo: {
        title: "",
        description: "",
        price: 0,
        category: "",
        level: "",
      },
      upload: {
        thumbnail: undefined,
        video: undefined,
        document: undefined,
      },
    },
    mode: "onChange",
  });

  // Mutation
  const mutation = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      alert("✅ Course created successfully!");
    },
    onError: (error: any) => {
      alert("❌ Error creating course: " + error.message);
    },
  });

  // Handle Next
  const handleNext = async () => {
    let stepValid = false;

    if (currentStep === 1) {
      stepValid = await form.trigger("basicInfo");
    }
    if (currentStep === 2) {
      stepValid = await form.trigger("upload");
    }

    if (stepValid) setCurrentStep((prev) => prev + 1);
  };

  // Handle Back
  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Final Publish
  const handlePublish = async () => {
    const isValid = await form.trigger(); // validate all fields
    if (!isValid) return;

    const values = form.getValues();

    const formDataToSend = new FormData();
    formDataToSend.append("title", values.basicInfo.title);
    formDataToSend.append("description", values.basicInfo.description);
    formDataToSend.append("price", values.basicInfo.price.toString());
    formDataToSend.append("category", values.basicInfo.category);
    formDataToSend.append("level", values.basicInfo.level);

    if (values.upload.thumbnail?.[0])
      formDataToSend.append("thumbnail", values.upload.thumbnail[0]);
    if (values.upload.video?.[0])
      formDataToSend.append("video", values.upload.video[0]);
    if (values.upload.document?.[0])
      formDataToSend.append("document", values.upload.document[0]);

    mutation.mutate(formDataToSend);
  };

  // ------------------- Step Renderer -------------------
  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Basic Info
        return (
          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium">Course Title</label>
              <input
                {...form.register("basicInfo.title")}
                placeholder="Enter your course title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {form.formState.errors.basicInfo?.title && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.basicInfo.title.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                {...form.register("basicInfo.description")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
              />
              {form.formState.errors.basicInfo?.description && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.basicInfo.description.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              {/* <select
                  {...form.register("basicInfo.category")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="">Select category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Design">Design</option>
                </select> */}
              <input
                {...form.register("basicInfo.category")}
                placeholder="Web Development"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
              {form.formState.errors.basicInfo?.category && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.basicInfo.category.message}
                </p>
              )}
            </div>
            {/* Price + Level */}
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                 {...form.register("basicInfo.price")} 
                 placeholder="50$"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                 />
              </div>
              <div>
                <label className="block text-sm font-medium">Level</label>
                <select
                  {...form.register("basicInfo.level")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                {form.formState.errors.basicInfo?.level && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.basicInfo.level.message}
                  </p>
                )}
              </div>
            </div>

            {/* Price (hidden) */}
            <input
              type="number"
              {...form.register("basicInfo.price", { valueAsNumber: true })}
              defaultValue={99}
              className="hidden"
            />
          </div>
        );

      case 2: // Uploads
        return (
          <div className="space-y-6">
            {/* Thumbnail */}
            <div>
              <label className="block">Thumbnail</label>
              <input
                type="file"
                accept="image/*"
                {...form.register("upload.thumbnail")}
              />
              {form.formState.errors.upload?.thumbnail &&
                typeof form.formState.errors.upload.thumbnail.message ===
                  "string" && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.upload.thumbnail.message}
                  </p>
                )}
            </div>

            {/* Video */}
            <div>
              <label className="block">Course Video</label>
              <input
                type="file"
                accept="video/*"
                {...form.register("upload.video")}
              />
            </div>

            {/* Document */}
            <div>
              <label className="block">Course Document</label>
              <input
                type="file"
                accept=".pdf,.doc,.ppt"
                {...form.register("upload.document")}
              />
            </div>
          </div>
        );

      case 3: // Preview
        const values = form.getValues();
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preview</h3>
            <div className="bg-gray-50 p-4 rounded-md space-y-2">
              <p>
                <strong>Title:</strong> {values.basicInfo.title}
              </p>
              <p>
                <strong>Description:</strong> {values.basicInfo.description}
              </p>
              <p>
                <strong>Price:</strong> ${values.basicInfo.price}
              </p>
              <p>
                <strong>Category:</strong> {values.basicInfo.category}
              </p>
              <p>
                <strong>Level:</strong> {values.basicInfo.level}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-7">
      <h2 className="text-3xl font-bold pb-1">Add new course</h2>
      <p className="text-gray-500">
        Share your knowledge with students worldwide.
      </p>

      <div className="max-w-[500px] mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {renderStepContent()}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md"
          >
            Back
          </button>

          {currentStep === 3 ? (
            <button
              onClick={handlePublish}
              disabled={mutation.isPending}
              className="px-6 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
            >
              {mutation.isPending ? (
                <Loader2 className="animate-spin w-4 h-4" />
              ) : (
                "Publish"
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCourseWizard;
