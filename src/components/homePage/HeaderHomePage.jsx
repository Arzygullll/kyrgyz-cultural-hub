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
                  <h2>Духовная культура Кыргызстана</h2>
                  <p>
                    Эпос "Манас" - величайший эпический труд кыргызского народа,
                    рассказывающий о подвигах легендарного героя Манаса и его
                    последователей, отражая исторические и культурные ценности.
                    Этот эпос, исполняемый акынами на праздниках и церемониях,
                    символизирует единство и национальную гордость кыргызов.
                  </p>
                </div>
                <div class="back">
                  <p>
                    Литература Кыргызстана богата как устными, так и письменными
                    традициями, включая эпические произведения, народные сказки
                    и легенды. Современная кыргызская литература, представленная
                    такими авторами, как Чингиз Айтматов, продолжает развиваться
                    и отражать как традиционные, так и современные темы.
                  </p>
                </div>
              </div>
            </div>

            <div class="card1">
              <div class="content1">
                <div class="front1">
                  <h2>Традиции</h2>
                  <p>
                    Традиции Кыргызстана включают богатый комплекс обрядов и
                    обычаев, связанных с жизнью кочевого народа. Праздники,
                    такие как Нооруз, свадьбы и ритуалы, связанные с пастушеским
                    образом жизни, играют важную роль в сохранении культурного
                    наследия и передаче его следующим поколениям.
                  </p>
                </div>
                <div class="back1">
                  <p>
                    Одной из значимых традиций является гостеприимство, где
                    каждый гость рассматривается как посланник судьбы и
                    принимается с большим уважением. Культурные традиции
                    включают также ремесла, такие как изготовление юрт, вышивка
                    и ковроткачество, отражающие национальные особенности и
                    искусство кыргызского народа.
                  </p>
                </div>
              </div>
            </div>

            <div class="card2">
              <div class="content2">
                <div class="front2">
                  <h2>Кыргызская кухня</h2>
                  <p>
                    Кыргызская кухня отражает богатство культурных влияний и
                    природные ресурсы региона. Основу её составляют мясные
                    блюда, такие как шашлык и манты, а также молочные продукты,
                    включая кумыс и каймак. Традиционные напитки, такие как чай
                    с молоком и разнообразные травяные настойки, играют важную
                    роль в кыргызской культуре и гостеприимстве.
                  </p>
                </div>
                <div class="back2">
                  <p>
                    Особое место в кыргызской кухне занимают блюда из баранины,
                    говядины и конины, которые готовятся с использованием
                    различных специй и трав. Традиционные напитки, такие как
                    кымыз (кисломолочный напиток из кобыльего молока) и чай,
                    также являются неотъемлемой частью кыргызского
                    гостеприимства и кулинарного наследия.
                  </p>
                </div>
              </div>
            </div>

            <div class="card3">
              <div class="content3">
                <div class="front3">
                  <h2>Национальная одежда</h2>
                  <p>
                    Традиционная одежда кыргызского народа отражает его
                    культурные и исторические традиции. Одним из наиболее
                    известных элементов является широко используемая
                    национальная головной убор - калпак, который имеет глубокие
                    символические значения и различные вариации в зависимости от
                    региона.
                  </p>
                </div>
                <div class="back3">
                  <p>
                    Кыргызские женщины традиционно носят яркие и украшенные
                    вышивкой платья и халаты, а мужчины предпочитают плотные
                    шерстяные одежды, подходящие для кочевого образа жизни.
                    Традиционная одежда важна не только как выражение
                    национальной идентичности, но и как символ уважения к
                    культурным традициям Кыргызстана.
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
