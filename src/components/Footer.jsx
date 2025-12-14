import React from "react";

export default function Footer(){
    return(
        <footer className="site-footer">
      <div className="container footer-content">  {/* Контейнер только для текста внутри */}
        <p>&copy; 2025 Библиотека шедевров. Все права защищены.</p>
        <p>Практический проект на React</p>
      </div>
    </footer>
    );
}