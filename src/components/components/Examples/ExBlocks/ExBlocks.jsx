import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBCol } from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import "./ExBlocks.css";

export const ExBlocks = ({ example }) => {
  const { t } = useTranslation();
  const { title, steps, image } = example;

  return (
    <MDBContainer className="blocks">
      <MDBRow className="blocks__direction">
        <MDBCol md={6} lg={6} className="blocks__wrapper">
          <div className="blocks__list">
            <h4 className="blocks__subtitle">{t(title)}</h4>
            {steps.map(({ text, icon }, i) => (
              <p key={i} className="blocks__text">
                <MDBIcon icon={icon} className="blocks__icon" />
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
