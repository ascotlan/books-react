import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>
  ));
  return <article className="book-list">{renderedBooks}</article>;
}

export default BookList;
