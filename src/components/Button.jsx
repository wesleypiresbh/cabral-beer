// src/components/Button.jsx

'use client';

export default function Button({ children, onClick, variant = "primary" }) {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold focus:outline-none transition transform hover:scale-105 shadow-md";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}

