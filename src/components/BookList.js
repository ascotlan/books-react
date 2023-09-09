import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return <article className="book-list">{renderedBooks}</article>;
}

export default BookList;
