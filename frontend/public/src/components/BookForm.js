import React, { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, author, year: Number(year) });
    setTitle(""); setAuthor(""); setYear("");
  };

  return (
    <form onSubmit={submit} className="form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Title" />
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
      <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" />
      <button>Add Book</button>
    </form>
  );
}
