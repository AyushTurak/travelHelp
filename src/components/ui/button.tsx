// src/components/ui/button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};
