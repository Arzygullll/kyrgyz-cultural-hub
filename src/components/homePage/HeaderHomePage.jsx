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
          <h1>Кыргызстан</h1>
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
                  <a href="">Ущелье Алтын-Арашан</a>
                </div>
              </div>
            </li>
            <li>
              <div class="tour-item">
                <img src={require("../homePage/assets/son-kul.jpg")} />
                <div class="tour-details">
                  <a href="">Озеро Сон-Куль</a>
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
                  <a href="">Озеро Кель Суу</a>
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
                  <a href="">Озеро Ала-Куль</a>
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
                  <a href="">Ущелье Ала-Арча</a>
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
                  <a href="">Ущелье Джеты-Огуз</a>
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
                  <a href="">Караван-сарай Таш-Рабат</a>
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
                  <a href="">Башня Бурана</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Секция highlight-tag */}
      <section className="highlight-tag">
        <div className="highlight-content">
          <h2>Исследуйте наши этноколлекции</h2>
          <p>
            Погрузитесь в мир уникальных этноколлекций, где каждый предмет
            рассказывает свою историю. Откройте для себя богатство традиций и
            ремесел Кыргызстана в наших коллекциях украшений, сумок и многого
            другого.
          </p>
          <a href="/etnocollection" className="highlight-link">
            Подробнее
          </a>
        </div>
      </section>
      {/*  */}
      <section className="section4">
        <div className="bbb">
          <div className="body">
            {/* card start */}

            <div class="card">
              <div class="content">
                <div class="front">
                  <h2>Ала-Арча</h2>
                  <p>
                    Природный парк Ала-Арча расположен в 17 км от черты города,
                    на высоте 4 860 м и занимает площадь более 17 087, 2 га.
                  </p>
                </div>
                <div class="back">
                  <p>
                    Растительный мир парка необычайно богат: 600 видов растений
                    и 70 разновидностей деревьев и кустарников,
                  </p>
                </div>
              </div>
            </div>

            <div class="card1">
              <div class="content1">
                <div class="front1">
                  <h2>Боо́мское уще́лье</h2>
                  <p>
                    Живописное Боомское ущелье расположено в среднем течении
                    реки Чу на границе раздела хребтов Киргизского Ала-Тоо и
                    Кунгей Ала-Тоо.
                  </p>
                </div>
                <div class="back1">
                  <p>
                    Через Боомское ущелье проходит железнодорожная ветка (1948
                    год, 180 км), соединяющая Бишкек и Балыкчи (в советское
                    время Фрунзе и Рыбачье)
                  </p>
                </div>
              </div>
            </div>

            <div class="card2">
              <div class="content2">
                <div class="front2">
                  <h2>Ущелье Бир-Булак</h2>
                  <p>
                    Ущелье Бир-Булак (Малиновое) находится в 45 километрах от
                    города.
                  </p>
                </div>
                <div class="back2">
                  <p>
                    Дорога лежит через лечебно-оздоровительный курорт в селе
                    Таш-Добо, к нему примыкает село Бир-Булак,
                  </p>
                </div>
              </div>
            </div>

            <div class="card3">
              <div class="content3">
                <div class="front3">
                  <h2>Шамши</h2>
                  <p>
                    Шамши – это одно из красивых ущелий Кыргызстана, склоны гор
                    покрыты живописными арчовыми и еловыми лесами.
                  </p>
                </div>
                <div class="back3">
                  <p>
                    Ущелье хранит и тайны прошлых эпох: здесь была найдена маска
                    из чистого золота (4-5 вв), которая, по мнению старейшин
                    села,
                  </p>
                </div>
              </div>
            </div>
            {/* card finish */}
          </div>
        </div>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HeaderHomePage;
