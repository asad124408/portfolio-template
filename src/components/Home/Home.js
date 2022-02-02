import React from "react";
import "./Home.css";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container app__container grid">
                <div className="home__data">
                    <span className="home__greeting">Hello, I'm</span>
                    <h1 className="home__name">ASAD</h1>
                    <h3 className="home__profession">Web Developer</h3>

                    <div className="home__buttons">
                        <a
                            download="#"
                            className="button button__ghost"
                            href="#"
                        >
                            DOWNLOAD CV
                        </a>
                        <a className="button" href="#about">
                            ABOUT ME
                        </a>
                    </div>
                </div>
                <div className="home__handle">
                    <img
                        src="assets/img/me.jpg"
                        alt="my image"
                        className="home__img"
                    />
                </div>
                <div className="home__social">
                    <a href="#" className="home__social__link">
                        <i className="bx bxl-facebook-circle"></i>
                        <i className="bx bxl-linkedin-square"></i>{" "}
                    </a>
                </div>
                <a href="#about" className="home__scroll">
                    <i className="bx bx-mouse home__scroll__icon"></i>
                    <span className="home__scroll__name">SCROLL DOWN</span>
                </a>
            </div>
        </section>
    );
}

export default Home;
