import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      createBook(title);
      setTitle("");
    }
  };

  return (
    <article className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </article>
  );
}

export default BookCreate;
