import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav app__container">
        <a href="#" className="nav__logo">
          Portfolio
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active__link">
                <i className="bx bx-home-alt"></i>
                <label className="nav__text">Home</label>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
                <label className="nav__text">About</label>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
                <label className="nav__text">Skills</label>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
                <label className="nav__text">Work</label>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
                <label className="nav__text">Contact</label>
              </a>
            </li>
          </ul>
        </div>
        <i className="bx bx-moon change__theme" id="theme__button"></i>
      </nav>
    </header>
  );
}

export default Header;
