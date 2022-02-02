import React from "react";
import "./Service.css";

function Service() {
  return (
    <section className="services section">
      <span className="section__subtitle">Services</span>
      <h2 className="section__title">Offered Services</h2>

      <div className="services__container app__container grid">
        <div className="services__card">
          <h3 className="services__title"></h3>
          <span className="services__button">
            SEE MORE <i className="bx bx-right-arrow-alt"></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Service;
