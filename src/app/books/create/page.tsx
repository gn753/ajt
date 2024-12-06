import React from "react";
import CreateBookForm from "@/app/books/create/components/create-book-form";
export default function CreateBookPage() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">새 책 추가</h1>
      <CreateBookForm />
    </div>
  );
}
