import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import { images } from "../img/index";

import "./BenefitsImages.css";

export const BenefitsImages = () => {
  return (
    <MDBRow className="mt-5">
      {images.map((item, i) => (
        <MDBCol key={i} md="6" lg="3" className="mb-4">
          <div className="mb-3 benefits-images">
            <img src={item.img} alt={item.alt} className="mb-2 benefits__img" />
            <p className="fw-bolder text-center benefits__text">{item.text}</p>
          </div>
        </MDBCol>
      ))}
    </MDBRow>
  );
};
