import React, { useState } from "react";
import BookList from "./components/BookList.jsx";
import BookDetail from "./components/BookDetail.jsx";
import "./index.css";

export default function App() {
  const [selectedBook, setSelectedBook] = useState(null);

 const books = [
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
];

  return (
    <div className="container">
      <header>
        <h1>Библиотека шедевров</h1>
        <p>Выберите книгу и погрузитесь в чтение</p>
      </header>

      {selectedBook ? (
        <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />
      ) : (
        <BookList books={books} onSelect={setSelectedBook} />
      )}
    </div>
  );
}