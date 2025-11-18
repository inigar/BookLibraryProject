import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./index.css";

const API = "http://localhost:8080/api/books";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = async (book) => {
    await fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(book)
    });
    fetchBooks();
  };

  const deleteBook = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchBooks();
  };

  return (
    <div className="container">
      <h1>📚 Book Library</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;
