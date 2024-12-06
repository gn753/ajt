import Link from "next/link";
import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  published_year: number;
  genre: string;
  summary: string;
}

const BookCard = ({ ...book }: Book) => {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="border rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-xs text-gray-500">{book.published_year}</p>
        <p className="text-sm text-gray-700 mt-2">{book.genre}</p>
        <p className="text-sm text-gray-600 mt-2 truncate">{book.summary}</p>
      </div>
    </Link>
  );
};

export default BookCard;
