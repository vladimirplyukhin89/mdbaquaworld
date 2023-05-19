import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBCol } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import "./ExFrames.css";

export const ExFrames = ({ example }) => {
  const { t } = useTranslation();
  const { title, steps, image } = example;

  return (
    <MDBContainer className="frames">
      <MDBRow className="frames__direction">
        <MDBCol md={6} lg={6} className="frames__wrapper">
          <div className="frames__list">
            <h4 className="frames__subtitle">{t(title)}</h4>
            {steps.map(({ text, icon }, i) => (
              <p key={i} className="frames__text">
                <MDBIcon icon={icon} className="frames__icon" />
                {t(text)}
              </p>
            ))}
          </div>
        </MDBCol>
        <MDBCol md={6} lg={6}>
          <img src={image} alt={t(title)} className="w-100" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
