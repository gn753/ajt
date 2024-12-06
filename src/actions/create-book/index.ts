import { BookRequest } from "@/types/books";

export const createBook = async (newBook: BookRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBook),
  });

  if (!res.ok) {
    throw new Error("Failed to create book");
  }

  return res.json();
};
