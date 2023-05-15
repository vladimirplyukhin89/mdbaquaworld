import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

import { VariantsCarousel } from "./VariantsCarousel";
import { VariantsInfo } from "./VariantsInfo";

// import "./Variants.css";

export const Types = () => {
  return (
    <MDBContainer fluid className="variants">
      <h2 className="variants__title">Варианты исполнения</h2>
      {/* <MDBContainer>

      </MDBContainer> */}
      <MDBRow>
        <MDBCol sm={12} md={6}>
          {/* <VariantsInfo /> */}
        </MDBCol>
      </MDBRow>
      <MDBCol sm={12} md={6}>
        {/* <VariantsCarousel /> */}
      </MDBCol>
      {/* <MDBRow></MDBRow> */}
    </MDBContainer>
  );
};
