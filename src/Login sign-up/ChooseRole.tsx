// src/pages/RegisterChoice.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, GraduationCap } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  selected: string;
  onSelect: (value: string) => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  value,
  selected,
  onSelect,
}) => {
  const isSelected = selected === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`flex flex-col items-start p-5 border rounded-lg w-full sm:w-80 text-left transition-all duration-200 
      ${isSelected ? "border-green-600 bg-green-50" : "border-gray-300 bg-white"} 
      hover:border-green-600 hover:bg-green-50`}
    >
      <div className="flex items-center gap-3">
        <div className="text-green-600">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      <div className="mt-4 ml-auto">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
          ${isSelected ? "border-green-600" : "border-gray-400"}`}
        >
          {isSelected && (
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          )}
        </div>
      </div>
    </button>
  );
};

const RegisterChoice: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!selectedRole) return;
    // Navigate to role-specific registration form
    navigate(`/register/${selectedRole}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Join as a Student or Instructor
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <RoleCard
          title="I'm a Student"
          description="I want to learn courses and track my progress."
          icon={<GraduationCap size={28} />}
          value="student"
          selected={selectedRole}
          onSelect={setSelectedRole}
        />
        <RoleCard
          title="I'm an Instructor"
          description="I want to create and sell courses."
          icon={<User size={28} />}
          value="instructor"
          selected={selectedRole}
          onSelect={setSelectedRole}
        />
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedRole}
        className={`px-6 py-3 rounded-lg text-white font-semibold transition-colors 
        ${selectedRole ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
      >
        {selectedRole
          ? `Join as a ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`
          : "Select a role to continue"}
      </button>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 hover:underline">
          Log In
        </a>
      </p>
    </main>
  );
};

export default RegisterChoice;
