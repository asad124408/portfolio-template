import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <section className="footer">
            <div className="footer__container app__container">
                <h1 className="footer__title">Portfolio</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#work" className="footer__link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">
                            Testimonials
                        </a>
                    </li>
                </ul>
                <ul className="footer__social">
                    <a href="#" className="footer__social__link">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="footer__social__link">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="footer__social__link">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </ul>
                <span className="footer__copy">
                    &#169; Asad. All rights reserved.
                </span>
            </div>
        </section>
    );
}

export default Footer;
