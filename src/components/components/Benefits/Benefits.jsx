import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import { Layout } from "../Layout/Layout";
import { Text } from "./Text/Text";
import { BenefitsImages } from "./BenefitsImages/BenefitsImages";

import "./Benefits.css";

export const Benefits = () => {
  return (
    <MDBContainer fluid className="px-0">
      <section className="benefits">
        <Layout>
          <h2 className="benefits__title">Преимущества наших станций</h2>
          <Text />
        </Layout>
        <BenefitsImages />
      </section>
    </MDBContainer>
  );
};
