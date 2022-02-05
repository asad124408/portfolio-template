import React from "react";
import "./Contact.css";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <span className="section__subtitle">Get In Touch</span>
            <h2 className="section__title">Contact Me</h2>
            <div className="contact__container app__container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Let's talk</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card__icon"></i>
                            <h3 className="contact__card__title">Email</h3>
                            <span className="contact__card__data">
                                asadullahsarkeriut@gmail.com
                            </span>
                            <a
                                href="#"
                                target="_blank"
                                className="contact__button"
                            >
                                Send me{" "}
                                <i className="bx bx-right-arrow-alt contact__button__icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card__icon"></i>
                            <h3 className="contact__card__title">Whatsapp</h3>
                            <span className="contact__card__data">
                                +800 1770872374
                            </span>
                            <a
                                href="#"
                                target="_blank"
                                className="contact__button"
                            >
                                Send me{" "}
                                <i className="bx bx-right-arrow-alt contact__button__icon"></i>
                            </a>
                        </div>
                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card__icon"></i>
                            <h3 className="contact__card__title">Messenger</h3>
                            <span className="contact__card__data">abc</span>
                            <a
                                href="#"
                                target="_blank"
                                className="contact__button"
                            >
                                Send me{" "}
                                <i className="bx bx-right-arrow-alt contact__button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Share about your project</h3>
                    <form action="" className="contact__form">
                        <div className="contact__form__control">
                            <label htmlFor="" className="contact__form__label">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="contact__form__input"
                            />
                        </div>
                        <div className="contact__form__control">
                            <label htmlFor="" className="contact__form__label">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="contact__form__input"
                            />
                        </div>
                        <div className="contact__form__control contact__form__area">
                            <label htmlFor="" className="contact__form__label">
                                Project
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                placeholder="Enter about your project"
                                className="contact__form__input"
                            ></textarea>
                        </div>
                        <button className="button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
