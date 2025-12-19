import React from "react";
import "../Form.css"


export default function Profile({ user, onBack}) {
    return (
        <div className="form-container">
        <h2 className="form-title">Мой профиль</h2>
        <div style={{textAlign: "center", color: "#e2e8f0", fontSize: "1.2rem"}}>
        <p> <strong>Имя:</strong>{user.name}</p>
        <p><strong>Email:</strong>{user.email}</p>
        <p style={{ marginTop: "2rem"}}>Здесь можно показать добавленные книги, историю заказов и т.д </p>
        </div>
        <div className="form-buttons">
            <button onClick={onBack} className="btn-primary">Назад</button>        

        </div>
        </div>
    );
}