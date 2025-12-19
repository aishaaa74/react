import React, { createContext, useEffect, useState } from "react";
import BookList from "./components/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";
import CreateBook from "./components/CreateBook.jsx";
import EditBook from "./components/EditBook.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Registration from "./components/Registration.jsx";
import Profile from "./components/Profile.jsx";
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




const [currentUser, setCurrentUser] = useState(null);
const [authMode, setAuthMode] = useState("list");

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


useEffect(() => {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    setCurrentUser(JSON.parse(savedUser));
  }
}, []);

//функция для входа
const login = (userData) => {
  setCurrentUser(userData);
  localStorage.setItem("currentUser", JSON.stringify(userData));
  setAuthMode("list");
}

//создания пользователя
const register = (userData) => {
  setCurrentUser(userData);
  localStorage.setItem("currentUser", JSON.stringify(userData));
  setAuthMode("list");
}
//выход
const logout = () => {
  setCurrentUser(null);
  localStorage.removeItem("currentUser");
  setAuthMode("list");
}

return (
  <>
    <Header
      currentUser={currentUser}
      onLogin={() => setAuthMode("login")}
      onRegister={() => setAuthMode("registration")}
      onProfile={() => setAuthMode("profile")}
      onLogout={logout}
    />

    <main className="container">
      {authMode === "login" && (
        <Login onLogin={login} onSwitch={() => setAuthMode("registration")} />
      )}
      {authMode === "registration" && (
        <Registration onRegister={register} onSwitch={() => setAuthMode("login")} />
      )}
      {authMode === "profile" && currentUser && (
        <Profile user={currentUser} onBack={() => setAuthMode("list")} />
      )}


      {authMode === "list" && (
        <>
          <header className="head1">
            <h1>Библиотека шедевров</h1>
            <p>Выберите книгу и погрузитесь в чтение</p>
          </header>

          {mode === "create" && (
            <CreateBook onAdd={addBook} onCancel={() => setMode("list")} />
          )}

          {mode === "edit" && selectedBook && (
            <EditBook book={selectedBook} onUpdate={updateBook} onCancel={() => setMode("list")} />
          )}

          {mode === "list" && !selectedBook && (
            <>
              <div style={{ textAlign: "right", marginBottom: "2rem" }}>
                <button
                  onClick={() => setMode("create")}
                  // стили кнопки
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
              onEdit={() => setMode("edit")}
              onDelete={() => deleteBook(selectedBook.id)}
            />
          )}
        </>
      )}
    </main>

    <Footer />
  </>
);
 
  
}