import * as React from "react";
import { useRef } from "react";

export default function Input({ type, name, placeholder }) {
  const inputRef = useRef(null);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border-2 border-[#cccccc] border-solid p-4 rounded-lg text-lg focus:border-[#007bff] focus:outline-none"
      ref={inputRef}
    />
  );
}
