import React, { useState } from "react";
import "./Service.css";

function Service() {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [thirdModal, setThirdModal] = useState(false);
    const handleOpenModal = (e, index) => {
        e.preventDefault();
        if (index === 0) setFirstModal(true);
        else if (index === 1) setSecondModal(true);
        else if (index === 2) setThirdModal(true);
    };
    const handleCloseModal = (e, index) => {
        e.preventDefault();
        if (index === 0) setFirstModal(false);
        else if (index === 1) setSecondModal(false);
        else if (index === 2) setThirdModal(false);
    };
    return (
        <section className="services section">
            <span className="section__subtitle">Services</span>
            <h2 className="section__title">Offered Services</h2>

            <div className="services__container app__container grid">
                <div className="services__card">
                    <h3 className="services__title">Web Design</h3>
                    <span
                        className="services__button"
                        onClick={(e) => handleOpenModal(e, 0)}
                    >
                        SEE MORE{" "}
                        <i className="bx bx-right-arrow-alt service__icon"></i>
                    </span>
                    {firstModal && (
                        <div className="services__modal">
                            <div className="services__modal__content">
                                <i
                                    className="bx bx-x services__modal__close"
                                    onClick={(e) => handleCloseModal(e, 0)}
                                ></i>
                                <h3 className="services__modal__title">
                                    Web Design
                                </h3>
                                <p className="services__modal__description">
                                    Quality designs of website to clients and
                                    companies with 4 years of experience.
                                </p>
                                <ul className="services__modal__list">
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            I design Web Interfaces.
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Appearance, layout, and content of a
                                            website is maintained properly
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            All single page, static, dynamic
                                            website design with fully responsive
                                            UI.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__card">
                    <h3 className="services__title">Web Development</h3>
                    <span
                        className="services__button"
                        onClick={(e) => handleOpenModal(e, 1)}
                    >
                        SEE MORE{" "}
                        <i className="bx bx-right-arrow-alt service__icon"></i>
                    </span>
                    {secondModal && (
                        <div className="services__modal">
                            <div className="services__modal__content">
                                <i
                                    className="bx bx-x services__modal__close"
                                    onClick={(e) => handleCloseModal(e, 1)}
                                ></i>
                                <h3 className="services__modal__title">
                                    Web Development
                                </h3>
                                <p className="services__modal__description">
                                    Create the technical features for a
                                    website's look. Develop the site layout and
                                    integrae graphics, applications and other
                                    contents.
                                </p>
                                <ul className="services__modal__list">
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Develop website according to the
                                            design supplied.
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Both backend and frontend
                                            development and integration.
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Clean code and testing of
                                            application and interfaces.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="services__card">
                    <h3 className="services__title">App Development</h3>
                    <span
                        className="services__button"
                        onClick={(e) => handleOpenModal(e, 2)}
                    >
                        SEE MORE{" "}
                        <i className="bx bx-right-arrow-alt service__icon"></i>
                    </span>
                    {thirdModal && (
                        <div className="services__modal">
                            <div className="services__modal__content">
                                <i
                                    className="bx bx-x services__modal__close"
                                    onClick={(e) => handleCloseModal(e, 2)}
                                ></i>
                                <h3 className="services__modal__title">
                                    App Development
                                </h3>
                                <p className="services__modal__description">
                                    Mobile app development with implementation
                                    of backend services with API and testing of
                                    application.
                                </p>
                                <ul className="services__modal__list">
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Mobile App development with React.
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Gorgeous Design and user friendly.
                                        </p>
                                    </li>
                                    <li className="services__modal__item">
                                        <i className="bx bx-check services__modal__icon"></i>
                                        <p className="services__modal__info">
                                            Easy customization and testing.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Service;
