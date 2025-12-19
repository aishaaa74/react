import React, { useState } from "react";
import "../Form.css"; 

export default function Login({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email, name: email.split("@")[0] }); // имя из email
    } else {
      alert("Заполните поля!");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Вход</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input type="email" placeholder="Email *" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Пароль *" value={password} onChange={e => setPassword(e.target.value)} required />
        <div className="form-buttons">
          <button type="submit" className="btn-primary">Войти</button>
        </div>
      </form>
      <p style={{textAlign: "center", marginTop: "1rem"}}>
        Нет аккаунта? <button type="button" onClick={onSwitch} style={{background: "none", border: "none", color: "#7c3aed", textDecoration: "underline", cursor: "pointer"}}>Зарегистрироваться</button>
      </p>
    </div>
  );
}