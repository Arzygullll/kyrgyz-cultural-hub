import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "./assets/логотип444.png";
import logoJan from "./assets/logoBejan.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo-container">
          <img
            src={logo}
            alt="Kyrgyz Cultural Hub Logo"

            className="footer-logo"
          />
          <div className="x">x</div>
          <img src={logoJan} alt="Bejan" className="footer-logojan" />
        </div>

        <div className="footer-info">
          <p className="footer-tagline">
            "Сохраняя традиции, создавая будущее"
          </p>
          <p className="footer-description">
            Kyrgyz Cultural Hub - это место, где культура и история Кыргызстана

            оживают. Присоединяйтесь к нам и узнайте больше о нашем богатом
            наследии.
          </p>
        </div>
        <div className="footer-contact">
          <p>
            <strong>Адрес:</strong> Бишкек, ул. Манаса, 45
          </p>
          <p>
            <strong>Телефон:</strong> +996 123 456 789
          </p>
          <p>

            <strong>Email:</strong> info@kyrgyzculturalhub.kg

          </p>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-link">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="social-link">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
