import sql from "@/lib/db"; // db.ts에서 Neon 설정을 가져옵니다.
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);

  try {
    // 데이터베이스에서 책 정보 가져오기
    const book = await sql`
      SELECT * FROM books WHERE id = ${id} LIMIT 1;
    `;

    if (book.length === 0) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json(book[0]);
  } catch (error) {
    console.error("Failed to fetch book:", error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const updatedData = await request.json();

  try {
    const result = await sql`
      UPDATE books
      SET title = ${updatedData.title},
          author = ${updatedData.author},
          published_year = ${updatedData.published_year},
          genre = ${updatedData.genre},
          summary = ${updatedData.summary}
      WHERE id = ${id};
    `;

    if (result.count === 0) {
      return NextResponse.json({ error: "Book not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Book updated successfully" });
  } catch (error) {
    console.error("Failed to update book:", error);
    return NextResponse.json(
      { error: "Failed to update book" },
      { status: 500 }
    );
  }
}
