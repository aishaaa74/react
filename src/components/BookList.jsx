import React from "react";
import "./BookList.css";

export default function BookList({ books, onSelect }) {
  return (
    <div className="book-grid">
      {books.map(book => (
        <div key={book.id} className="book-card" onClick={() => onSelect(book)}>
          <div className="book-cover">
            {book.cover_url ? (
              <img 
                src={book.cover_url} 
                alt={book.title}
                className="real-cover"
              />
            ) : (
           <div className="mock-cover"></div>
            )}
            <h3>{book.title}</h3>
          </div>
          <div className="book-info">
            <h4>{book.author}</h4>
            <p>{book.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}