import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

import "./Loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <MDBSpinner color="primary">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
};
