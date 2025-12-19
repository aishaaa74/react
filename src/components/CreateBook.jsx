// src/components/CreateBook.jsx
import React, { useState } from "react";
import "../Form.css";

export default function CreateBook({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover_url, setCover_url] = useState("");
  const [read_url, setRead_url] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !read_url) return;

    onAdd({ title, author, description, cover_url, read_url });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Добавить новую книгу</h2>

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
          <button type="submit" className="btn-primary">Добавить книгу</button>
          <button type="button" onClick={onCancel} className="btn-cancel">Отмена</button>
        </div>
      </form>
    </div>
  );
}