import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import "./Countries.css";

export const Countries = () => {
  return (
    <MDBContainer fluid className="countries py-5" id="geography">
      <MDBCol className="pt-3 mb-2 text-center">
        <h3 className="fw-bolder fs-2">География наших объектов</h3>
        <p className="fw-bolder fs-4 mx-5 pt-4 text-white">
          Наши системы очистки воды успешно эксплуатируются в различных
          компаниях на территории России, Грузии и Алжира
        </p>
      </MDBCol>

      <MDBRow className=" d-flex justify-content-around align-items-center countries__cards">
        <MDBCol md="4" className="mx-2 my-4 countries__drop">
          <div className="countries__icon countries__icon-1"></div>
          <p className="text-center pt-5 fw-bolder fs-5">Россия</p>
        </MDBCol>

        <MDBCol md="4" className="mx-2 my-4 countries__drop">
          <div className="countries__icon countries__icon-2"></div>
          <p className="text-center pt-5 fw-bolder fs-5 ">Алжир</p>
        </MDBCol>

        <MDBCol md="4" className="mx-2 my-4 countries__drop">
          <div className="countries__icon countries__icon-3"></div>
          <p className="text-center pt-5 fw-bolder fs-5">Грузия</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
