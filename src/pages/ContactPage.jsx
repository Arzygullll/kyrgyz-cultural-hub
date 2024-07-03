import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.content}>
        <h1 className={styles.title}>CONTACTS</h1>
        <div className={styles.contactInfo}>
          <p>KyrgyzCultureHub@mail.kg</p>

          <p>Телефоны и контакты по вопросам реализации и сотрудничество.</p>
        </div>
        <div className={styles.images}>
          <img
            src="https://i.pinimg.com/564x/33/a7/25/33a725cd164770eb17e9f3ea2c6963b3.jpg"
            alt="Картина 1"
          />
          <img
            src="https://i.pinimg.com/564x/cb/03/b1/cb03b1675ef0752e7ca958c40bf0ee01.jpg"
            alt="Картина 2"
          />
        </div>
        <div className={styles.socialLinks}>
          <a href="https://web.telegram.org/a/" className={styles.socialLink}>
            TELEGRAM
          </a>
          <a href="https://web.whatsapp.com/" className={styles.socialLink}>
            WHATSAPP
          </a>
          <a href="https://www.instagram.com/" className={styles.socialLink}>
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
