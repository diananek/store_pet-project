import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const [lang, setLang] = useState("ru");
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer__logo" />
      <nav className="footer__nav">
        <NavLink to="/" className="footer__link footer__nav-item">
          Избранное
        </NavLink>
        <NavLink to="/" className="footer__link footer__nav-item">
          Корзина
        </NavLink>
        <NavLink to="/" className="footer__link footer__nav-item">
          Контакты
        </NavLink>
      </nav>
      <div className="footer__add-info add-info">
        <NavLink to="/" className="footer__link add-info__link">
          Условия сервиса
        </NavLink>
        <ul className="footer__lang-select">
          <li
            className={`footer__lang${
              lang === "ru" ? " footer__lang_active" : ""
            }`}
            onClick={() => setLang("ru")}
          >
            Рус
          </li>
          <li
            className={`footer__lang${
              lang === "eng" ? " footer__lang_active" : ""
            }`}
            onClick={() => setLang("eng")}
          >
            Eng
          </li>
        </ul>
      </div>
      <ul className="footer__social">
        <li className="footer__social-item">
          <a
            href="https://vk.com/neoflex_ru"
            className="footer__social-link"
            target="_blank"
          >
            <img src="./assets/social/VK.svg" alt="VK" />
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://t.me/neoflexcareers"
            className="footer__social-link"
            target="_blank"
          >
            <img src="./assets/social/Telegram.svg" alt="Telegram" />
          </a>
        </li>
        <li className="footer__social-item">
          <a
            href="https://wa.me/79213456789"
            className="footer__social-link"
            target="_blank"
          >
            <img src="./assets/social/Whatsapp.svg" alt="Whatsapp" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
