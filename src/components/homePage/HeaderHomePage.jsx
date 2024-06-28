import React, { useEffect } from "react";
import videoBg from "../homePage/assets/videoplay.mp4";
import "../homePage/HeaderHomePage.css";
import Footer from "./Footer";

const HeaderHomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxContainer = document.querySelector(".highlight-tag");
      parallaxContainer.style.backgroundPositionY = `${-scrollTop * 0.5}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div className="main">
        <div className="overlay"></div>
        <video className="background-video" src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>

      {/* Секция с популярными достопримечательностями Кыргызстана */}
      <section className="tab-tours">
        <div className="theme-overlay"></div>
        <div className="tour-list">
          <h2>Популярные достопримечательности Кыргызстана</h2>
          <ul>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/altyn-arashan.jpg")}
                  alt="Ущелье Алтын-Арашан"
                />
                <div class="tour-details">
                  <a href="#">Ущелье Алтын-Арашан</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img src={require("../homePage/assets/son-kul.jpg")} />
                <div class="tour-details">
                  <a href="#">Озеро Сон-Куль</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/kel-su.jpg")}
                  alt="Озеро Кель Суу"
                />
                <div class="tour-details">
                  <a href="#">Озеро Кель Суу</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/ala-kul.jpg")}
                  alt="Озеро Ала-Куль"
                />
                <div class="tour-details">
                  <a href="#">Озеро Ала-Куль</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/ala-archa.jpg")}
                  alt="Ущелье Ала-Арча"
                />
                <div class="tour-details">
                  <a href="#">Ущелье Ала-Арча</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/jety-oguz.jpg")}
                  alt="Ущелье Джеты-Огуз"
                />
                <div class="tour-details">
                  <a href="#">Ущелье Джеты-Огуз</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/tash-rabat.jpg")}
                  alt="Караван-сарай Таш-Рабат"
                />
                <div class="tour-details">
                  <a href="#">Караван-сарай Таш-Рабат</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img
                  src={require("../homePage/assets/burana.jpg")}
                  alt="Башня Бурана"
                />
                <div class="tour-details">
                  <a href="#">Башня Бурана</a>
                  <span>Читать далее</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Секция highlight-tag */}
      <section className="highlight-tag">
        <div className="highlight-content">
          <h2>Заголовок раздела</h2>
          <p>Описание раздела или другая информация.</p>
          <a href="#" className="highlight-link">
            Подробнее
          </a>
        </div>
      </section>
      {/*  */}
      <section className="section4"></section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HeaderHomePage;
