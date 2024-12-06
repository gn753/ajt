import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-4">📚 Book Manager</h1>
      <p className="text-gray-600 mb-6">
        책을 관리하고, 추가하고, 검색할 수 있는 시스템입니다.
      </p>
      <div className="space-x-4">
        <Link
          href="/books"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          책 목록 보기
        </Link>
        <Link
          href="/books/create"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          책 추가하기
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
