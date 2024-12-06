import React from "react";
import "./globals.css"; // Tailwind CSS 초기화 파일
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Manager",
  description: "A simple app to manage your books",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col">
        {/* 헤더 */}
        <header className="bg-blue-500 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">📚 Book Manager</h1>
            <nav className="space-x-4">
              <a href="/books" className="hover:underline">
                책 목록
              </a>
              <a href="/add-book" className="hover:underline">
                책 추가
              </a>
            </nav>
          </div>
        </header>

        {/* 콘텐츠 */}
        <main className="container mx-auto px-4 py-6 flex-1">{children}</main>

        {/* 푸터 */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 Book Manager. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
