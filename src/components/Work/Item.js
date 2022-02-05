import React from "react";

function Item({ image, title }) {
    return (
        <div className="work__card">
            <img src={image} className="work__img" alt="web design" />
            <h3 className="work__title">{title}</h3>
            <a href="#" className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
        </div>
    );
}

export default Item;
