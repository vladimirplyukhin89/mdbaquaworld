import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

import "./ExInfo.css";

export const ExInfo = () => {
  return (
    <>
      <h3 className="exinfo__subtitle">Блочные системы</h3>
      <p className="exinfo__text">
        Наш многолетний опыт и применяемые технологии позволяют эффективно
        решать задачи водоподготовки любой сложности.
      </p>
      <p className="exinfo__text">
        Наш инженерный состав, учитывая все тонкости и особенности, подберет
        вариант исполнения, подходящий именно вашей компании.
      </p>
      <div className="exinfo__btns">
        <MDBBtn className="exinfo__btns_left">Оставить заявку</MDBBtn>
        <MDBBtn color="secondary">Показать варианты</MDBBtn>
      </div>
    </>
  );
};
