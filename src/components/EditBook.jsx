// src/components/EditBook.jsx
import React, { useState } from "react";
import "../Form.css";

export default function EditBook({ book, onUpdate, onCancel }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description || "");
  const [cover_url, setCover_url] = useState(book.cover_url || "");
  const [read_url, setRead_url] = useState(book.read_url);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...book, title, author, description, cover_url, read_url });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Редактировать книгу</h2>

      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          placeholder="Название книги *"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Автор *"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <textarea
          placeholder="Краткое описание (необязательно)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />

        <input
          type="url"
          placeholder="Ссылка на обложку (URL изображения, необязательно)"
          value={cover_url}
          onChange={(e) => setCover_url(e.target.value)}
        />

        <input
          type="url"
          placeholder="Ссылка на полный текст книги *"
          value={read_url}
          onChange={(e) => setRead_url(e.target.value)}
          required
        />

        <div className="form-buttons">
          <button type="submit" className="btn-primary">Сохранить изменения</button>
          <button type="button" onClick={onCancel} className="btn-cancel">Отмена</button>
        </div>
      </form>
    </div>
  );
}