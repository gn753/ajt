"use client";

import React, { useState } from "react";
import FilterBar from "@/app/books/(list)/components/filter-bar";
import Pagination from "@/components/Pagination";
import BookList from "@/app/books/(list)/components/book-list";
import { BookResponse } from "@/types/books";
import Title from "@/components/Title";

const itemsPerPage = 10;

const BooksClient = ({ books }: { books: BookResponse[] }) => {
  const [filter, setFilter] = useState<{ title: string; author: string }>({
    title: "",
    author: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링 핸들러
  const handleFilter = (newFilter: { title: string; author: string }) => {
    setFilter(newFilter);
    setCurrentPage(1); // 필터 변경 시 첫 페이지로 이동
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filter.author.toLowerCase())
  );

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const displayedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Title title="책 목록" />
      <FilterBar onFilter={handleFilter} />
      <BookList list={displayedBooks} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BooksClient;
