export interface BookResponse {
  id: number;
  title: string;
  author: string;
  published_year: number;
  genre: string;
  summary: string;
}
export type BookRequest = Omit<BookResponse, "id">;
