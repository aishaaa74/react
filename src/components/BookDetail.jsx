import React from "react";
import "./BookDetail.css";

export default function BookDetail({ book, onBack }) {
  return (
    <div className="modal" onClick={onBack}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onBack}>×</button>
        
        <div className="detail-cover">
          {book.cover_url ? (
              <img src={book.cover_url} alt={book.title} className="detail-real-cover" />
             ) : (
           book.title[0]
             )}
        </div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        <p>{book.description}</p>
        <div className="mt-8">
        <a 
         href={book.read_url}
         target="_blank"
         rel="noopener noreferrer"
          style={{color:"white"}}>
            Читать полностью
        </a>
        </div>
      </div>
    </div>
  );
}
