// src/pages/RegisterFormPage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RegisterFormPage: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const navigate = useNavigate();

  // Local state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [extraField1, setExtraField1] = useState("");
  const [extraField2, setExtraField2] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Prepare the payload
    const payload: Record<string, any> = {
      name,
      email,
      password,
      role,
    };

    // Optional: you can include role-specific fields if your backend ever uses them
    if (role === "instructor") {
      payload.expertise = extraField1;
      payload.portfolio = extraField2;
    } else if (role === "student") {
      payload.learningGoals = extraField1;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/registeruser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      alert("Registration successful!");
      navigate("/"); // Redirect after success
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-6">
        {role === "instructor"
          ? "Register as an Instructor"
          : "Register as a Student"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4 border border-gray-200"
      >
        {/* Common Fields */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Create a password"
            required
          />
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
                value={extraField1}
                onChange={(e) => setExtraField1(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g. Web Development, Design"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Portfolio Link
              </label>
              <input
                type="url"
                value={extraField2}
                onChange={(e) => setExtraField2(e.target.value)}
                className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="https://"
              />
            </div>
          </>
        )}

        {role === "student" && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Learning Goals
            </label>
            <textarea
              value={extraField1}
              onChange={(e) => setExtraField1(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="What do you want to learn?"
            />
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all ${
            loading && "opacity-70 cursor-not-allowed"
          }`}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </main>
  );
};

export default RegisterFormPage;
