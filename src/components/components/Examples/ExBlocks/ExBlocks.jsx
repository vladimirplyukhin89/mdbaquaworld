import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBCol } from "mdb-react-ui-kit";

import "./ExBlocks.css";

export const ExBlocks = ({ example }) => {
  return (
    <MDBContainer className="blocks">
      <MDBRow className="blocks__direction">
        <MDBCol md={6} lg={6}>
          <div className="blocks__list">
            <h4 className="blocks__subtitle">{example.title}</h4>
            {example.steps.map((step, i) => (
              <p key={i} className="blocks__text">
                <MDBIcon icon={step.icon} className="blocks__icon" />
                {step.text}
              </p>
            ))}
          </div>
        </MDBCol>
        <MDBCol md={6} lg={6}>
          <img src={example.image} alt={example.title} className="w-100" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
