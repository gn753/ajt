import sql from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 책 데이터를 조회하는 쿼리
    const books = await sql`SELECT * FROM books`;

    // 응답 반환
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    // 요청 본문에서 데이터 추출
    const { title, author, publishedYear, genre, summary } = await req.json();

    // 유효성 검사
    if (!title || !author || !publishedYear) {
      return NextResponse.json(
        { error: "Title, author, and publishedYear are required." },
        { status: 400 }
      );
    }

    // 데이터베이스에 데이터 삽입
    const result = await sql`
      INSERT INTO books (title, author, published_year, genre, summary)
      VALUES (${title}, ${author}, ${publishedYear}, ${genre}, ${summary})
      RETURNING *
    `;

    // 삽입된 데이터 반환
    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Error inserting book:", error);
    return NextResponse.json(
      { error: "Failed to insert book." },
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
