"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BookInput from "@/components/book-input";
import BookSelect from "@/components/book-select";
import { createBook } from "@/actions/create-book";
import { BookRequest } from "@/types/books";

const GENRES = [
  "소설",
  "시",
  "역사",
  "철학",
  "과학",
  "판타지",
  "추리",
  "자기계발",
];

const CreateBookForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<BookRequest>({
    title: "",
    author: "",
    published_year: new Date().getFullYear(),
    genre: "",
    summary: "",
  });

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createBook(formData);
      alert("책이 성공적으로 추가되었습니다.");
      router.push("/books"); // 책 목록 페이지로 이동
    } catch (error) {
      console.error(error);
      alert("책 추가에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <BookInput
        label="책 제목"
        name="title"
        value={formData.title}
        onChange={(value) => handleChange("title", value)}
      />
      <BookInput
        label="저자"
        name="author"
        value={formData.author}
        onChange={(value) => handleChange("author", value)}
      />
      <BookInput
        label="출판 연도"
        name="published_year"
        value={formData.published_year}
        onChange={(value) => handleChange("published_year", parseInt(value))}
        type="number"
      />
      <BookSelect
        label="장르"
        name="genre"
        options={GENRES}
        value={formData.genre}
        onChange={(value) => handleChange("genre", value)}
      />
      <BookInput
        label="요약"
        name="summary"
        value={formData.summary}
        onChange={(value) => handleChange("summary", value)}
        type="textarea"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        저장하기
      </button>
    </form>
  );
};

export default CreateBookForm;
