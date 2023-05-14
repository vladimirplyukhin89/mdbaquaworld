import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { Text } from "./Text/Text";
import { BenefitsImages } from "./BenefitsImages/BenefitsImages";

import "./Benefits.css";

export const Benefits = () => {
  return (
    <MDBContainer fluid className="px-0">
      <section className="benefits">
        <h2 className="benefits__title">Преимущества наших станций</h2>
        <Text />
        <BenefitsImages />
      </section>
    </MDBContainer>
  );
};
