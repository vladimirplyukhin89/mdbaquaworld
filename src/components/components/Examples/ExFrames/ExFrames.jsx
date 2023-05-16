import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBCol } from "mdb-react-ui-kit";

import "./ExFrames.css";

export const ExFrames = ({ example }) => {
  return (
    <MDBContainer className="frames">
      <MDBRow>
        <MDBCol md={6} lg={6}>
          <div className="frames__list">
            <h4 className="frames__subtitle">{example.title}</h4>
            {example.steps.map((step, i) => (
              <p key={i} className="frames__text">
                <MDBIcon icon={step.icon} className="frames__icon" />
                {step.text}
              </p>
            ))}
          </div>
        </MDBCol>
        <MDBCol md={6} lg={6}>
          {example.image}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
