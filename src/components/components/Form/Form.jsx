import React, { useContext } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRipple,
  MDBCheckbox
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { modalContext } from "../../../context";

import videoWebm from "./video/form.webm";
import videoMp4 from "./video/form.mp4";

import "./Form.css";

export const Form = () => {
  const { t } = useTranslation();
  const { toggleShow } = useContext(modalContext);

  const handleSubmit = event => {
    event.preventDefault();
    toggleShow();
  };

  return (
    <div className="position-relative">
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          zIndex: -2
        }}
        playsInline
        autoPlay
        muted
        loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
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

      <MDBContainer
        fluid
        className="m-0 p-0"
        style={{ height: "100vh", width: "100%" }}>
        <div className="form">
          <form
            id="form"
            onSubmit={handleSubmit}
            className="w-50 pt-5 form-outline form-white">
            <MDBInput
              className="mb-4"
              type="text"
              id="form3Example1"
              label={t("name")}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBInput
              className="mb-4"
              type="email"
              id="form1Example2"
              label={t("email")}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />
            <MDBInput
              className="mb-4"
              type="phone"
              id="form1Example3"
              label={t("phone")}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBInput
              wrapperClass="mb-4 textarea-lg"
              textarea="true"
              id="form4Example4"
              rows={6}
              label={t("message")}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            {/* <MDBCheckbox
              wrapperClass="d-flex justify-content-start mb-4"
              id="form4Example4"
              label="Я согласен"
              defaultChecked
            /> */}

            <div className="form__button">
              <MDBRipple className="mb-4">
                <MDBBtn type="submit">{t("send")}</MDBBtn>
              </MDBRipple>
            </div>
          </form>
        </div>
      </MDBContainer>
    </div>
  );
};
