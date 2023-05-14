import React from "react";

import "./ListItem.css";

// Если потребуется поменять, то добавить в ListContainer
export const ListItem = ({ img, alt, text }) => {
  return (
    <>
      <div className="list">
        <img src={img} alt={alt} className="list__img" />
        <p className="list__text">{text}</p>
      </div>
    </>
  );
};
