import { BookResponse } from "@/types/books";

export const updateBook = async (
  id: string,
  updatedData: Partial<BookResponse>
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update book");
  }

  return res.json();
};
