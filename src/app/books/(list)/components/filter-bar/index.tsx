import React, { useState } from "react";

interface FilterProps {
  onFilter: (filter: { title: string; author: string }) => void;
}

const FilterBar = ({ onFilter }: FilterProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleFilter = () => {
    onFilter({ title, author });
  };

  return (
    <div className="flex space-x-4 mb-4">
      <input
        type="text"
        placeholder="책 제목 검색"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <input
        type="text"
        placeholder="저자 검색"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        검색
      </button>
    </div>
  );
};

export default FilterBar;
