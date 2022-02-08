import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Testimonial() {
  return (
    <section className="testimonial section">
      <span className="section__subtitle">Clients review</span>
      <h2 className="section__title">Testimonial</h2>
      <div className="testimonial__container app__container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1.3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="testimonial__card">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/pp.png"}
              className="testimonial__img"
              alt="client img"
            />
            <h3 className="testimonial__name">Jhon Doe 1</h3>
            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              perspiciatis deleniti reiciendis! Consequuntur quaerat obcaecati
              vitae aspernatur, eos ratione? Iste, magni? Delectus iste quo
              vitae reiciendis rerum nulla modi dicta.
            </p>
          </SwiperSlide>
          <SwiperSlide className="testimonial__card">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/pp.png"}
              className="testimonial__img"
              alt="client img"
            />
            <h3 className="testimonial__name">Jhon Doe 2</h3>
            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              perspiciatis deleniti reiciendis! Consequuntur quaerat obcaecati
              vitae aspernatur, eos ratione? Iste, magni? Delectus iste quo
              vitae reiciendis rerum nulla modi dicta.
            </p>
          </SwiperSlide>
          <SwiperSlide className="testimonial__card">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/pp.png"}
              className="testimonial__img"
              alt="client img"
            />
            <h3 className="testimonial__name">Jhon Doe 3</h3>
            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              perspiciatis deleniti reiciendis! Consequuntur quaerat obcaecati
              vitae aspernatur, eos ratione? Iste, magni? Delectus iste quo
              vitae reiciendis rerum nulla modi dicta.
            </p>
          </SwiperSlide>
          <SwiperSlide className="testimonial__card">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/pp.png"}
              className="testimonial__img"
              alt="client img"
            />
            <h3 className="testimonial__name">Jhon Doe 4</h3>
            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              perspiciatis deleniti reiciendis! Consequuntur quaerat obcaecati
              vitae aspernatur, eos ratione? Iste, magni? Delectus iste quo
              vitae reiciendis rerum nulla modi dicta.
            </p>
          </SwiperSlide>
          <SwiperSlide className="testimonial__card">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/pp.png"}
              className="testimonial__img"
              alt="client img"
            />
            <h3 className="testimonial__name">Jhon Doe 5</h3>
            <p className="testimonial__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              perspiciatis deleniti reiciendis! Consequuntur quaerat obcaecati
              vitae aspernatur, eos ratione? Iste, magni? Delectus iste quo
              vitae reiciendis rerum nulla modi dicta.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
