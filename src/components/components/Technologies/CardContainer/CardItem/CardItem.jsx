import React from "react";

import "./CardItem.css";

export const CardItem = ({ img, alt, text }) => {
  return (
    <div className="technologies__card">
      <div>
        <img src={img} alt={alt} className="technologies__icon" />
        {/* <p className="technologies__arrow">{arrow}</p> */}
      </div>
      <p className="py-0 technologies__text">{text}</p>
      {/* <p className="technologies__arrow">{arrow}</p> */}
    </div>
  );
};
