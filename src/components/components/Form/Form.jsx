import React, { useContext } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRipple,
  MDBCheckbox,
  MDBTextArea
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
    <div className="form">
      <video className="form__background" playsInline autoPlay muted loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
      <div className="form-overlay"></div>

      <MDBContainer fluid className="form__container">
        <div className="form__block">
          <form
            id="form"
            onSubmit={handleSubmit}
            className="w-75 m-auto form-outline form-white">
            <MDBInput
              className="mb-4"
              type="text"
              id="form3Example1"
              label={t("name")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBInput
              className="mb-4"
              type="email"
              id="form1Example2"
              label={t("email")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />
            <MDBInput
              className="mb-4"
              type="tel"
              id="form1Example3"
              label={t("phone")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBTextArea
              wrapperClass="mb-4 textarea-lg"
              id="form4Example4"
              rows={6}
              label={t("message")}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBCheckbox
              wrapperClass="d-flex justify-content-start mb-4 text-white"
              id="form4Example4"
              label={t("label")}
              required
              defaultChecked
            />

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
