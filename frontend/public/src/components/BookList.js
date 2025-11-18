export default function BookList({ books, onDelete }) {
  return (
    <ul className="list">
      {books.map(b => (
        <li key={b.id} className="item">
          <h3>{b.title}</h3>
          <p>{b.author} • {b.year}</p>
          <button onClick={() => onDelete(b.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
