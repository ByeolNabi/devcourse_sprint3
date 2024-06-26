import { Pagination } from "../models/pagination.model";
import { Book } from "../models/book.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get("/books", { params: params });

    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalcount: 0,
        currentPage: 1,
      },
    };
  }
};
