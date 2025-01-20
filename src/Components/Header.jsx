import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add">Nuevo Video</Link>
            </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;