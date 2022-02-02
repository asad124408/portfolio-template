import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about__section" id="about">
            <span className="section__subtitle">Introduction</span>
            <h2 className="section__title">About Me</h2>

            <div className="about__container app__container grid">
                <img
                    src="assets/img/me.jpg"
                    alt="about"
                    className="about__img"
                />

                <div className="about__data">
                    <div className="about__info">
                        <div className="about__box">
                            <i className="bx bx-award"></i>
                            <h3 className="about__title">Experience</h3>
                            <span className="about__subtitle">
                                4+ Years Working
                            </span>
                        </div>
                        <div className="about__box">
                            <i className="bx bx-briefcase-alt"></i>
                            <h3 className="about__title">Completed</h3>
                            <span className="about__subtitle">8+ Projects</span>
                        </div>
                        <div className="about__box">
                            <i className="bx bx-support about__icon"></i>
                            <h3 className="about__title">Support</h3>
                            <span className="about__subtitle">Any Time</span>
                        </div>
                    </div>
                </div>

                <p className="about__description">
                    I'm a professional Web Developer and Software Engineer over
                    4 years of experience. I mostly work with React, Redux and
                    Tailwind CSS. But also have a ton of experience in working
                    with Firebase, Javascript, .Net Core, Bootstrap, HTML5/CSS3.
                    For any kinds of information and questions, feel free to
                    knock me.
                </p>
                <a className="about__button" href="#contact">
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default About;
