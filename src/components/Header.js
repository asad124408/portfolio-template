import React from "react";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav app__container">
        <a href="#" className="nav__logo">
          Portfolio
        </a>

        <div className="nav__menu">
          <ul className="nav__ul">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="bx bx-home-alt"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
