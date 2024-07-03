import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <h1 className="title">Контакты</h1>
      <p>
        Добро пожаловать на страницу контактов Kyrgyz Culture Hub! Свяжитесь с
        нами, используя любую из приведенных ниже контактных информации:
      </p>

      <div className="section">
        <h2 className="sectionTitle">Email</h2>
        <p>info@kyrgyzculturehub.com</p>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Телефон</h2>
        <p>+996 123 456 789</p>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Адрес</h2>
        <p>г. Бишкек, ул. Советская, 123</p>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Социальные сети</h2>
        <p>
          <a
            href="https://facebook.com/kyrgyzculturehub"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/kyrgyzculturehub"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/kyrgyzculturehub"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Twitter
          </a>
        </p>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Форма обратной связи</h2>
        <form>
          <div className="formGroup">
            <label className="label">Имя:</label>
            <input type="text" name="name" required className="input" />
          </div>
          <div className="formGroup">
            <label className="label">Email:</label>
            <input type="email" name="email" required className="input" />
          </div>
          <div className="formGroup">
            <label className="label">Сообщение:</label>
            <textarea name="message" required className="textarea"></textarea>
          </div>
          <button type="submit" className="button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
