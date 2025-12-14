// BookDetail.jsx
import React from "react";
import "./BookDetail.css";

export default function BookDetail({ book, onBack, onEdit, onDelete }) {
  return (
    <div className="modal" onClick={onBack}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onBack}>×</button>

        <div className="detail-cover">
          {book.cover_url ? (
            <img src={book.cover_url} alt={book.title} className="detail-real-cover" />
          ) : (
            <div className="mock-big-cover">{book.title[0]}</div>
          )}
        </div>

        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>

        <div style={{ marginTop: "3rem", textAlign: "center", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={book.read_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "1.3rem",
              textDecoration: "underline"
            }}
          >
            Читать полностью →
          </a>

          <button
            onClick={onEdit}
            style={{
              padding: "0.8rem 1.8rem",
              background: "#a78bfa",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "1.1rem",
              cursor: "pointer"
            }}
          >
            Редактировать
          </button>

          <button
            onClick={onDelete}
            style={{
              padding: "0.8rem 1.8rem",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "1.1rem",
              cursor: "pointer"
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}