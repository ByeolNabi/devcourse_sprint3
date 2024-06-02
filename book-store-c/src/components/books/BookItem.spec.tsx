import React from "react";
import { render } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";

const dummyBook = {
  id: 20,
  title: "string",
  img: 3000,
  category_id: 3000,
  form: "string",
  isbn: "string",
  summary: "string",
  detail: "string",
  author: "string",
  pages: 3000,
  contents: "string",
  price: 3000,
  likes: 3000,
  pubDate: "string",
};

describe("BookItem", () => {
  it("렌더 여부", () => {
    const { getByText, getByAltText   } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvider>
    );
    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText("3,000원")).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByText(dummyBook.title)).toBeInTheDocument();
  });
});
