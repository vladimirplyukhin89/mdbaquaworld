import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import { Layout } from "../Layout";
import { ExCarousel } from "./ExCarousel";
import { ExInfo } from "./ExInfo/ExInfo";

import { carouselBlocks } from "./img";
import { carouselFrames } from "./img";

import "./Example.css";

export const Examples = () => {
  console.log(carouselFrames[0].src);
  return (
    <MDBContainer fluid className="examples">
      <h2 className="examples__title">Варианты исполнения</h2>{" "}
      <Layout>
        <MDBRow className="examples__blocks">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselBlocks} />
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo />
          </MDBCol>
        </MDBRow>

        <MDBRow className="examples__frames">
          <MDBCol sm={12} md={6}>
            <ExCarousel images={carouselFrames} />
          </MDBCol>
          <MDBCol sm={12} md={6}>
            <ExInfo />
          </MDBCol>
        </MDBRow>
      </Layout>
    </MDBContainer>
  );
};
