import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../API/Api"; // axios instance (baseURL already set)
import { z } from "zod";

// Types
type CourseLevel = "beginner" | "intermediate" | "advanced";

interface CourseForm {
  title: string;
  description: string;
  category: string;
  level: CourseLevel;
  price: number;
  thumbnail: File | null;
  materials: File[];
}

const createCourseSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description is required"),
  price: z.number().min(1, "Price must be greater than 0"),
  category: z.string().nonempty("Category is required"),
  level: z.string().nonempty("Level is required"),

});

// Mutation (create course)
const createCourse = async (data: FormData) => {
  const response = await api.post("/courses/createCourse", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("created course include :", data);
  return response.data;
};

const MyCourses = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<CourseForm>({
    title: "",
    description: "",
    category: "",
    level: "beginner",
    price: 0,
    thumbnail: null,
    materials: [],
  });

  // React Query mutation
  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: createCourse,
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" ? Number(value) : value });
  };

  // Handle thumbnail
  const handleThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setForm({ ...form, thumbnail: e.target.files[0] });
    }
  };

  // Handle multiple materials (video/pdf)
  const handleMaterials = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, materials: Array.from(e.target.files) });
    }
  };

  // Submit form
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    formData.append("level", form.level);
    formData.append("price", String(form.price));
    if (form.thumbnail) formData.append("thumbnail", form.thumbnail);
    form.materials.forEach((file) => {
      if (file.type.includes("pdf")) {
        formData.append("document", file); // ✅ backend expects "document"
      } else if (file.type.includes("video")) {
        formData.append("video", file); // ✅ backend expects "video"
      }
    });

    mutate(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {step === 1 && "Step 1: Course Info"}
          {step === 2 && "Step 2: Upload Files"}
          {step === 3 && "Step 3: Preview"}
        </h2>

        {/* Step 1 */}
        <form action="">
          {step === 1 && (
            <div className="space-y-4">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Course Title"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Course Description"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category (e.g. Web Development)"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">
                  Course Thumbnail
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnail}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Course Videos </label>
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={handleMaterials}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Course pdfs </label>
                <input
                  type="file"
                  multiple
                  accept="application/pdf"
                  onChange={handleMaterials}
                  className="w-full border p-2 rounded-lg"
                />
              </div>
            </div>
          )}
        </form>

        {/* Step 3 Preview */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{form.title}</h3>
            <p>{form.description}</p>
            <p>
              <strong>Category:</strong> {form.category}
            </p>
            <p>
              <strong>Level:</strong> {form.level}
            </p>
            <p>
              <strong>Price:</strong> ${form.price}
            </p>
            {form.thumbnail && (
              <img
                src={URL.createObjectURL(form.thumbnail)}
                alt="Thumbnail"
                className="w-40 rounded-lg border"
              />
            )}
            {form.materials.length > 0 && (
              <ul className="list-disc list-inside">
                {form.materials.map((file, i) => (
                  <li key={i}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next!
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isPending}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>

        {/* Status Messages */}
        {isSuccess && (
          <p className="mt-4 text-green-600">✅ Course created successfully!</p>
        )}
        {isError && (
          <p className="mt-4 text-red-600">❌ Something went wrong!</p>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
