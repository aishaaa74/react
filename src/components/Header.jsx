import React  from "react";


export default function Header({ currentUser, onLogin, onRegister, onProfile, onLogout }){
    return (
        <header className="site-header">
            <div className="container header-content">
                <div className="logo">
                    <h2>LB</h2>
                </div>
                <nav className="menu">
                    <a href="#">Главное</a>
                </nav>

                <div className="auth-block">
                    {currentUser ? (
                        <>
                        <span className="greeting">
                            Привет, {currentUser.name || currentUser.email.split("@")}!
                        </span>
                        <button className="auth-button profile-btn" onClick={onProfile}>
                            Профиль
                            </button>
                        <button className="auth-button logout-btn" onClick={onLogout}>
                            Выйти
                            </button>
                        </>
                    ) : (
                        <>
                        <button className="auth-button login-btn" onClick={onLogin}>
                            Войти
                        </button>
                        <button className="auth-button register-btn" onClick={onRegister}>
                            Регистрация
                         </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}