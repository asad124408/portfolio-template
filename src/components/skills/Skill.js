import React from "react";
import "./Skill.css";

function Skill() {
  return (
    <section className="skills__section" id="skills">
      <span className="section__subtitle">My Expertise</span>
      <h2 className="section__title">My Experience</h2>
      <div className="skills__container app__container grid">
        <div className="skills__content">
          <div className="skills__bar">
            <h2 className="skills__title">Frontend</h2>
            <div className="bar">
              <div className="info">
                <span>HTML5</span>
              </div>
              <div className="progress__line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>CSS3</span>
              </div>
              <div className="progress__line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>React</span>
              </div>
              <div className="progress__line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Javascript</span>
              </div>
              <div className="progress__line js">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>Tailwind CSS</span>
              </div>
              <div className="progress__line tailwind">
                <span></span>
              </div>
            </div>
          </div>

          <div className="skills__bar">
            <h2 className="skills__title">Backend</h2>
            <div className="bar">
              <div className="info">
                <span>.Net Core</span>
              </div>
              <div className="progress__line core">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>.Net MVC</span>
              </div>
              <div className="progress__line mvc">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <span>NodeJs</span>
              </div>
              <div className="progress__line node">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
