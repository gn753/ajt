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

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 요청에서 ID 추출
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    // 데이터베이스에서 책 삭제
    const result = await sql`
      DELETE FROM books WHERE id = ${id} RETURNING *
    `;

    // 삭제된 데이터 확인
    if (result.length === 0) {
      return NextResponse.json({ error: "Book not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Book deleted successfully.", deletedBook: result[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting book:", error);
    return NextResponse.json(
      { error: "Failed to delete book." },
      { status: 500 }
    );
  }
}
