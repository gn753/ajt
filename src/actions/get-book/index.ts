export const getBook = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`,
    {
      cache: "no-store", // 항상 최신 데이터를 가져옵니다.
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }
  return res.json();
};
