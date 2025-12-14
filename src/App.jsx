import React, { createContext, useState } from "react";
import BookList from "./components/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";
import CreateBook from "./components/CreateBook.jsx";
import EditBook from "./components/EditBook.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";


export default function App() {
 const [books, setBooks] = useState([
  {
    id: 1,
    title: "451° по Фаренгейту",
    author: "Рэй Брэдбери",
    description: "Мир, где книги запрещены, а пожарные их сжигают.",
    cover_url: "https://raybradbury.ru/pictures/articles/Ray_Bradbury-Fahrenheit_451-cover-full.jpg",
    read_url: "https://b-reading.com/page/451-gradus-po-farengejtu"  // Полный текст на B-Reading (бесплатно)
  },
  {
    id: 2,
    title: "Убить Пересмешника",
    author: "Харпер Ли",
    description: "Классическая проза",
    cover_url: "https://www.litres.ru/pub/c/cover/41249205.jpg",
    read_url: "https://biblioteka-online.org/book/ubit-peresmesnika?utm_referrer=https%3A%2F%2Fsearch.yahoo.com%2F"  // Полный текст на Kniga-Online (бесплатно)
  },
  {
    id: 3,
    title: "Цветы для Элджернона",
    author: "Дэниел Киз",
    description: "Трогательная история о цене интеллекта и человечности.",
    cover_url: "https://images.thenile.io/r1000/9781474605731.jpg",
    read_url: "https://litres.com/book/daniel-keyes/cvety-dlya-eldzhernona-145410/read/"  // Полный текст на Litres (бесплатно для ознакомления)
  },
  {
    id: 4,
    title: "1984",
    author: "Джордж Оруэлл",
    description: "Антиутопия о тотальном контроле и потере свободы.",
    cover_url: "https://retrobookcovers.com/wp-content/uploads/2019/03/orwell-1984-03.jpg",
    read_url: "https://royallib.com/book/oruell_dgordg/1984.html"  // Полный текст на RoyalLib (бесплатно)
  },
  {
    id: 5,
    title: "Смерть на Ниле",
    author: "Агата Кристи",
    description: "Детектив на фоне экзотического путешествия по Нилу.",
    cover_url: "https://cv4.litres.ru/pub/c/cover/122023.jpg",
    read_url: "https://libcat.ru/knigi/detektivy-i-trillery/klassicheskij-detektiv/407694-agata-kristi-smert-na-nile-prichuda-mertveca.html"  // Полный текст на LibCat (бесплатно)
  },
  {
    id: 6,
    title: "Смерть в Облаках",
    author: "Агата Кристи",
    description: "Убийство в самолёте — классика воздушного детектива.",
    cover_url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694843590i/99777612.jpg",
    read_url: "https://readli.net/smert-v-oblakah/"  // Полный текст на Readli (бесплатно)
  }
]);

const [selectedBook, setSelectedBook] = useState(null);
const [mode, setMode] = useState("list");

const addBook = (newBook) => {
  const bookWithId = { ...newBook, id: Date.now() };
  setBooks([...books, bookWithId]);
  setMode("list");
};


const updateBook = (updatedBook) => {
    setBooks(books.map(book => 
      book.id === updatedBook.id ? updatedBook : book
    ));
    setMode("list");
    setSelectedBook(null);
  };

const deleteBook = (id) => {
  setBooks(books.filter(book => book.id !== id));
  setSelectedBook(null);
  setMode("list");
};


  return (
    <> 
    <Header />

    <main className="container">
      <header>
        <h1>Библиотека шедевров</h1>
        <p>Выберите книгу и погрузитесь в чтение</p>
      </header>

      {mode === "create" && (
                <CreateBook onAdd = {addBook} onCancel={() => setMode("list")} />
      )}

      {mode === "edit" && selectedBook && (
                <EditBook book={selectedBook} onUpdate={updateBook} onCancel={() => setMode("list")} />
      )}

      {mode === "list" && !selectedBook && (
        <>
        <div style={{ textAlign: "right", marginBottom: "2rem" }}>
              <button
                onClick={() => setMode("create")}
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.2rem",
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(124, 58, 237, 0.4)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={e => e.target.style.transform = "translateY(-4px)"}
                onMouseOut={e => e.target.style.transform = "translateY(0)"}
              >
                ➕ Добавить новую книгу
              </button>
            </div>
            <BookList books={books} onSelect={setSelectedBook} />
            </>
      )}

     {selectedBook && mode === "list" && (
          <BookDetail
            book={selectedBook}
            onBack={() => setSelectedBook(null)}
            onEdit={() => setMode("edit")}  // ← переходим в режим редактирования
            onDelete={() => deleteBook(selectedBook.id)}  // ← сразу удаляем
          />
      )}
      

    </main>

    <Footer />
    </>
  );
}