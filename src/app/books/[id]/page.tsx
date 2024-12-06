import { getBook } from "@/actions/get-book";
import BookDetail from "@/app/books/[id]/components/book-detail";
import { BookResponse } from "@/types/books";
import React from "react";

// 서버에서 책 데이터를 가져오는 함수

const BookDetailPage = async ({ params }: { params: { id: string } }) => {
  const book: BookResponse = await getBook(params.id);

  return <BookDetail {...book} />;
};

export default BookDetailPage;
