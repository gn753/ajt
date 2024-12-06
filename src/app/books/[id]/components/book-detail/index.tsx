"use client";

import { deleteBook } from "@/actions/delete-book";
import { BookResponse } from "@/types/books";
import { useRouter } from "next/navigation";

const BookDetail = ({ ...book }: BookResponse) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/books/${book.id}/edit`); // 수정 페이지로 이동
  };

  const handleDelete = async () => {
    try {
      await deleteBook(parseInt(String(book.id), 10));
      alert("책이 성공적으로 삭제되었습니다.");
      router.push("/books"); // 삭제 후 목록 페이지로 이동
    } catch (error) {
      console.error(error);
      alert("책 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
      <p className="text-lg text-gray-600 mb-2">저자: {book.author}</p>
      <p className="text-lg text-gray-600 mb-2">
        출판 연도: {book.published_year}
      </p>
      <p className="text-lg text-gray-600 mb-2">장르: {book.genre}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">요약</h2>
      <p className="text-gray-700">{book.summary}</p>
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        수정하기
      </button>
      <button
        onClick={() => {
          if (confirm("정말 삭제하시겠습니까?")) {
            handleDelete();
            alert("삭제되었습니다.");
          }
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        삭제하기
      </button>
    </div>
  );
};

export default BookDetail;
