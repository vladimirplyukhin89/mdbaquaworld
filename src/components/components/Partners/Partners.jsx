import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import { images } from "./img/index";

import "./Partners.css";

export const Partners = () => {
  return (
    <MDBContainer fluid>
      <MDBRow className="my-4">
        <MDBCol
          sm={6}
          className="d-flex justify-content-center align-items-center">
          <div>
            <p className="fw-bolder partners__title">
              Нам доверяют десятки ведущих мировых лидеров:
            </p>
          </div>
        </MDBCol>

        <MDBCol sm={6}>
          <div className="mx-0 partners__slider">
            <div className="slider-track">
              {images.map((obj, i) => {
                return (
                  <ul className="slide" key={i}>
                    <li>
                      <img src={obj.img} alt={obj.alt} />
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
