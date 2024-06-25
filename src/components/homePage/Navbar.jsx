import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Kyrgyz Cultural Hub</Link>
        </div>
        <nav className="navigation">
          <ul>
            {/* <li>
              <Link to="/">Главная</Link>
            </li> */}
            <li>
              <Link to="/activities">Чем заняться</Link>
            </li>
            <li>
              <Link to="/places">Куда поехать</Link>
            </li>
            <li>
              <Link to="/knowledge">Что нужно знать</Link>
            </li>
            <li>
              <Link to="/news">Новости и события</Link>
            </li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/about">О проекте</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-links">
          <Link to="/login">Войти</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
