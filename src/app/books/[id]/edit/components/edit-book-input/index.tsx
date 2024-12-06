import React from "react";

type EditBookInputProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: "text" | "number" | "textarea";
};

const EditBookInput: React.FC<EditBookInputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      )}
    </div>
  );
};

export default EditBookInput;
