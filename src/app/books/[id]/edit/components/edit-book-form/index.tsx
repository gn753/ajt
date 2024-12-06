"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EditBookInput from "@/app/books/[id]/edit/components/edit-book-input";
import EditBookSelect from "@/app/books/[id]/edit/components/edit-book-select";
import { updateBook } from "@/actions/update-book";
import { BookResponse } from "@/types/books";

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

const EditBookForm = ({ book }: { book: BookResponse }) => {
  const router = useRouter();

  const [formData, setFormData] = useState<Partial<BookResponse>>({
    title: book.title,
    author: book.author,
    published_year: book.published_year,
    genre: book.genre,
    summary: book.summary,
  });

  const handleChange = (name: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateBook(book.id.toString(), formData);
      alert("책 정보가 성공적으로 수정되었습니다.");
      router.push(`/books/${book.id}`); // 수정 후 상세 페이지로 이동
      router.refresh(); // 서버 컴포넌트 데이터 새로고침
    } catch (error) {
      console.error(error);
      alert("책 수정에 실패했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <EditBookInput
        label="책 제목"
        name="title"
        value={formData.title || ""}
        onChange={(value) => handleChange("title", value)}
      />
      <EditBookInput
        label="저자"
        name="author"
        value={formData.author || ""}
        onChange={(value) => handleChange("author", value)}
      />
      <EditBookInput
        label="출판 연도"
        name="published_year"
        value={formData.published_year || ""}
        onChange={(value) => handleChange("published_year", parseInt(value))}
        type="number"
      />
      <EditBookSelect
        label="장르"
        name="genre"
        options={GENRES}
        value={formData.genre || ""}
        onChange={(value) => handleChange("genre", value)}
      />
      <EditBookInput
        label="요약"
        name="summary"
        value={formData.summary || ""}
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

export default EditBookForm;
