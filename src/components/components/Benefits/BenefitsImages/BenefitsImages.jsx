import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardSubTitle,
  MDBBtn
} from "mdb-react-ui-kit";

import { images } from "../img/index";

import "./BenefitsImages.css";

export const BenefitsImages = () => {
  return (
    <MDBRow className="mt-5">
      {images.map((item, i) => (
        <MDBCol key={i} md="6" lg="3" className="mb-4">
          <MDBCard className="benefits-images">
            <div className="mt-3">
              <img src={item.img} alt={item.alt} className="benefits__img" />
            </div>
            <MDBCardBody className="benefits__text">
              <MDBCardSubTitle>{item.text}</MDBCardSubTitle>
            </MDBCardBody>
            <MDBBtn className="mb-3 ">Подробнее</MDBBtn>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
};
