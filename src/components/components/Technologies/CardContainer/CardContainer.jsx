import React from "react";

import { CardItem } from "./CardItem/CardItem";

import "./CardContainer.css";

export const CardContainer = ({ images, text }) => {
  return (
    <>
      <p className="text-center mb-4 fs-4 fw-bolder cardContainer__title">
        {text}
      </p>

      <ul className="px-0 technologies__container">
        {images.map((item, i) => {
          return (
            <li key={i} className="mb-4">
              <CardItem {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
