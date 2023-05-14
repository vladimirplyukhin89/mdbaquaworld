import React from "react";

import blob from "./img/blob.webp";

import "./Thesis.css";

export const Thesis = ({ text }) => {
  return (
    <div className="d-flex align-items-center justify-content-between bg-primary thesis">
      <p className="thesis__text">{text}</p>

      <img
        src={blob}
        alt="Blob"
        width="50px"
        height="65px"
        className="thesis__icon"
      />
    </div>
  );
};
