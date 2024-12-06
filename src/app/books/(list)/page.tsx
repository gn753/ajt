import React from "react";
import BooksClient from "@/app/books/(list)/components/booksClient";

async function fetchBooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
    cache: "no-store", // 항상 최신 데이터를 가져옵니다.
  });
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
}

const BooksPage = async () => {
  const books = await fetchBooks(); // 서버에서 데이터 가져오기
  return <BooksClient books={books} />;
};

export default BooksPage;
