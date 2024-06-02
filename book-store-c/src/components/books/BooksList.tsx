import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook:Book = {
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
    pubDate: "string"
  }

function BooksList() {
  return (
    <BooksStyle>
        <BookItem book={dummyBook} />
    </BooksStyle>
  );
}

const BooksStyle = styled.div``;

export default BooksList;
