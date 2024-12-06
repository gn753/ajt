import React from "react";

interface EditBookSelectProps {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const BookSelect = ({
  label,
  name,
  value,
  options,
  onChange,
}: EditBookSelectProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-lg"
      >
        <option value="" disabled>
          선택하세요
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookSelect;
