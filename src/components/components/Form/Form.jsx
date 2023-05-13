import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";

import bgVideo from "./video/form.mp4";

export const Form = () => {
  return (
    <div className="position-relative">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2
        }}
        playsInline
        autoPlay
        muted
        loop>
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}></div>

      <MDBContainer fluid className="m-0 p-0 d-flex justify-content-center">
        <form className="w-50 my-5 form-outline form-white">
          <MDBInput
            className="mb-4"
            type="text"
            id="form3Example1"
            label="First name"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          <MDBInput
            className="mb-4"
            type="email"
            id="form1Example2"
            label="Email address"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />
          <MDBInput
            className="mb-4"
            type="phone"
            id="form1Example3"
            label="Phone"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          <MDBInput
            wrapperClass="mb-4 textarea-lg"
            textarea
            id="form4Example4"
            rows={6}
            label="Message"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
          />

          {/* <MDBCheckbox
        wrapperClass="d-flex justify-content-start mb-4"
        id="form4Example4"
        label="Я согласен"
        defaultChecked
      /> */}

          <MDBBtn type="submit" className="mb-4" block>
            Отправить
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
};