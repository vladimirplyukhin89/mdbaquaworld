import React from "react";

import "./CardItem.css";

export const CardItem = ({ img, alt, text, arrow }) => {
  return (
    <div className="technologies__card">
      <div className="technologies__wrapper">
        <img src={img} alt={alt} className="mx-auto technologies__icon" />
        <p className="py-0 technologies__text">{text}</p>
      </div>
      <div className="technologies__arrow">
        <img src={arrow} alt="" />
      </div>
    </div>
  );
};
