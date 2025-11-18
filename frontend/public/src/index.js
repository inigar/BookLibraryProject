const express = require("express");
const app = express();

app.use(express.json());

// temporary in-memory data
let books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// POST add new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = req.body.title;
  book.author = req.body.author;

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

// PORT for LOCAL + RENDER deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
