import React from "react";
import EditBookForm from "@/app/books/[id]/edit/components/edit-book-form";
import Title from "@/components/Title";

async function fetchBookById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }

  return res.json();
}

export default async function EditBookPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await fetchBookById(params.id);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <Title title="책 정보 수정" />
      <EditBookForm book={book} /> {/* 수정 폼 컴포넌트 */}
    </div>
  );
}
