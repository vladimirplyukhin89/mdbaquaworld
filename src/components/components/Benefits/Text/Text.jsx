import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";

import { list } from "./data";

import "./Text.css";
export const Text = () => {
  return (
    <MDBRow>
      <MDBCol>
        <ul className="benefits__list">
          {list.map((item, i) => (
            <li key={i}>
              <p className="fs-4 text-white">
                <MDBIcon fas icon="check-circle" className="benefits__icon" />
                {item}
              </p>
            </li>
          ))}
        </ul>
      </MDBCol>
    </MDBRow>
  );
};
