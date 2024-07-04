import React, { useState, useEffect } from "react";
import "./EtnoCollectionPage.css";
import etno_1 from "../components/homePage/assets/hello1.jpeg";
import etno_2 from "../components/homePage/assets/hello2.jpeg";
import etno_3 from "../components/homePage/assets/hello3.jpeg";
import etno_4 from "../components/homePage/assets/hello4.jpeg";
import etno_5 from "../components/homePage/assets/hello5.jpeg";

const EtnoCollectionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [etno_1, etno_2, etno_3, etno_4, etno_5];

  // Функция для переключения на следующий слайд
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Функция для переключения на предыдущий слайд
  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  // Эффект для автоматического переключения слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Интервал в миллисекундах (например, 3000ms = 3 секунды)

    return () => clearInterval(interval); // Чистка интервала при размонтировании компонента
  }, [currentIndex]); // Зависимость от currentIndex для переключения при изменении

  const images1 = [
    {
      src: "https://i.pinimg.com/736x/bd/d4/3b/bdd43b6cd91cd760bc8aaba19ab641b8.jpg",
      title: "Image 1",
    },
    {
      src: "https://i.pinimg.com/736x/3b/a7/d2/3ba7d2b0e4e528dc938695d7d60f1e07.jpg",
      title: "Image 2",
    },
    {
      src: "https://i.pinimg.com/564x/c7/1f/9e/c71f9efaaa9982e26549ab9ffcee3c58.jpg",
      title: "Image 3",
    },
    {
      src: "https://i.pinimg.com/474x/d3/e1/8b/d3e18baee65612bbc550e374d016fe3c.jpg",
      title: "Image 4",
    },
  ];
  const images2 = [
    {
      src: "https://i.pinimg.com/736x/f4/ac/bd/f4acbd03d17707646e35e3b77c80f891.jpg",
      title: "Image 5",
    },
    {
      src: "https://i.pinimg.com/564x/c2/26/24/c226245cc7f494c3e6a9fb8fe5389201.jpg",
      title: "Image 6",
    },
    {
      src: "https://i.pinimg.com/564x/8a/41/e3/8a41e3e91f34af4586a5df025b5365bd.jpg",
      title: "Image 7",
    },
    {
      src: "https://i.pinimg.com/474x/a8/a1/0a/a8a10a6f936492f03d1dd7120767595f.jpg",
      title: "Image 8",
    },
  ];

  return (
    <div className="etno">
      <section className="gallery-section">
        {images1.map((images1, index) => (
          <div
            key={index}
            className="image-container"
            data-title={images1.title}
          >
            <p>EtnoCollection2024</p>
            <img src={images1.src} alt={images1.title} className="image" />
          </div>
        ))}
      </section>

      <h2>Откройте для себя уникальные этнические товары и искусство</h2>
      <div className="slider-container">
        <div className="slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? "slide active" : "slide"}
              style={{
                backgroundImage: `url(${image})`,
                transform: `translateX(${-100 * currentIndex}%)`,
              }}
            ></div>
          ))}
        </div>
        <button className="slider-button prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="slider-button next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <h4>
        Добро пожаловать в нашу секцию этнических коллекций, где вы можете
        познакомиться с уникальными изделиями, отражающими богатую культуру и
        традиции Кыргызстана. Здесь вы найдете множество удивительных предметов,
        созданных мастерами, которые передают свои знания и умения из поколения
        в поколение.
        <br /> Ассортимент нашей этнической коллекции включает: <br /> Ювелирные
        изделия: украшения ручной работы из серебра и других материалов,
        украшенные традиционными киргизскими орнаментами и камнями. Эти изделия
        прекрасно дополнят ваш образ и подчеркнут вашу индивидуальность.
        <br /> Сумки и аксессуары:
        <br /> сумки, пояса, головные уборы и другие аксессуары, изготовленные
        из натуральных материалов и украшенные национальной вышивкой. Каждый
        предмет выполнен с любовью и вниманием к деталям. <br /> Текстиль и
        одежда:
        <br />
        традиционная одежда, ковры, одеяла и другие текстильные изделия, которые
        отличаются высоким качеством и оригинальным дизайном. Они станут
        прекрасным дополнением к вашему дому или гардеробу.
      </h4>
      <section className="gallery-section">
        {images2.map((images2, index) => (
          <div
            key={index}
            className="image-container"
            data-title={images2.title}
          >
            <p>EtnoCollection2024</p>
            <img src={images2.src} alt={images2.title} className="image" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default EtnoCollectionPage;
