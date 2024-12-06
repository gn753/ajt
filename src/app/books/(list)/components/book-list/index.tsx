import BookCard from "@/app/books/(list)/components/book-card";
import { BookResponse } from "@/types/books";

const BookList = ({ list }: { list: BookResponse[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.length > 0 ? (
        list.map((book) => <BookCard key={book.id} {...book} />)
      ) : (
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default BookList;
