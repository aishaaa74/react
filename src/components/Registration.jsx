import React, { useState } from "react";
import "../Form.css"

export default function Registration({ onRegister, onSwitch}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            onRegister({ name, email });
        } else {
            alert("Заполни все поля");
        }
    };


    return (
        <div className="form-container">
            <h2 className="form-title">Регистрация</h2>
            <form onSubmit={handleSubmit} className="book-form">
                <input type="text"
                 placeholder="Имя * "
                 value={name}
                 onChange={e => setName(e.target.value)} required />
                 <input type="text"
                 placeholder="Email "
                 value={email}
                 onChange={e => setEmail(e.target.value)} required />
                 <input type="text"
                 placeholder="Пароль *"
                 value={password}
                 onChange={e => setPassword(e.target.value)} required />
                 <div className="form-buttons">
                    <button type="submit" className="btn-primary">Зарегистрироваться</button>
                 </div>
            </form>
            <p style={{textAlign: "center", marginTop: "1rem"}}>
                Уже есть аккаунт? <button type="button" onClick={onSwitch} style={{background: "none", border: "none", color: "#7c3aed", textDecoration: "underline", cursor: "pointer"}}>
                    Войти</button> </p>
        </div>
    )
}