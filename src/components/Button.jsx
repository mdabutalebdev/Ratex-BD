import React from "react";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#5caf90]   text-white font-medium   px-5 py-2  ${className}`}
    >
      {children}
    </button>
  );
}
