import React from "react";
import "./Header.css";
import Scrollspy from "react-scrollspy";

function Header(props) {
    return (
        <header className="header" id="header">
            <nav className="nav app__container">
                <a href="#" className="nav__logo">
                    Portfolio
                </a>

                <div className="nav__menu">
                    <Scrollspy
                        items={["home", "about", "skills", "work", "contact"]}
                        className="nav__list"
                        currentClassName="active__link"
                    >
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="bx bx-home-alt"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="bx bx-user"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="bx bx-book"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link">
                                <i className="bx bx-briefcase-alt-2"></i>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="bx bx-message-square-detail"></i>
                            </a>
                        </li>
                    </Scrollspy>
                </div>
                <i
                    className={
                        props.theme === "dark"
                            ? "bx bx-moon change__theme"
                            : "bx bx-sun change__theme"
                    }
                    id="theme__button"
                    onClick={() => props.switchTheme()}
                ></i>
            </nav>
        </header>
    );
}

export default Header;
