import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import "./ExInfo.css";

export const ExInfo = ({ title, text, subtext, handle }) => {
  return (
    <>
      <h3 className="exinfo__subtitle">{title}</h3>
      <p className="exinfo__text">{text}</p>
      <p className="exinfo__text">{subtext}</p>
      <div className="exinfo__btns">
        <MDBBtn className="exinfo__btns_left">Оставить заявку</MDBBtn>
        <MDBBtn color="secondary" onClick={handle}>
          Показать варианты
        </MDBBtn>
      </div>
    </>
  );
};
