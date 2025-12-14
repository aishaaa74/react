import React  from "react";

export default function Header(){
    return (
        <header className="site-header">
            <div className="container header-content">
                <div className="logo">
                    <h2>LB</h2>
                </div>
                <nav className="menu">
                    <a href="#">Главное</a>
                </nav>
            </div>
        </header>
    );
}