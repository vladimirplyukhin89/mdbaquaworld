import React, { useState, useContext } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRipple,
  MDBCheckbox,
  MDBTextArea,
  MDBCol
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { modalContext } from "../../../context";
import { formPath, POST } from "../../../constants/index";

import videoWebm from "./video/form.webm";
import videoMp4 from "./video/form.mp4";

import "./Form.css";

export const Form = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    tel: "",
    message: ""
  });
  const { t } = useTranslation();
  const { toggleShow } = useContext(modalContext);

  const onChange = e => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    let response = await fetch(formPath, {
      method: POST,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValue)
    });

    if (response.ok) {
      let result = await response.json();
      console.log(result);
      toggleShow();
    } else {
      let error = await response.json();
      console.error(error);
      // ? В будущем заменить на модельное окно с ошибкой
      alert("К сожалению, ошибка при отправки формы. Попробуйте позже");
    }

    setFormValue({ name: "", email: "", tel: "", message: "" });
  };

  return (
    <div className="form" id="form">
      <video className="form__background" playsInline autoPlay muted loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
      <div className="form-overlay"></div>

      <MDBContainer fluid className="form__container">
        <div className="form__block">
          <form
            onSubmit={handleSubmit}
            action={formPath}
            method={POST}
            className="w-75 m-auto form-outline form-white">
            <MDBInput
              className="mb-4"
              type="text"
              name="name"
              id="form3Example1"
              value={formValue.name}
              onChange={onChange}
              label={t("name")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBInput
              className="mb-4"
              type="email"
              name="email"
              id="form1Example2"
              value={formValue.email}
              onChange={onChange}
              label={t("email")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />
            <MDBInput
              className="mb-4"
              type="tel"
              name="tel"
              id="form1Example3"
              value={formValue.tel}
              onChange={onChange}
              label={t("phone")}
              required
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBTextArea
              className="mb-4 textarea-lg"
              id="form4Example4"
              value={formValue.message}
              onChange={onChange}
              rows={6}
              label={t("message")}
              name="message"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            />

            <MDBCheckbox
              className="d-flex justify-content-start"
              id="form4Example4"
              label={t("check")}
              name="checkbox"
              required
              defaultChecked
              style={{ color: "rgb(255, 255, 255)" }}
            />

            <MDBCol className="mb-4 text-white">
              {/* <small>
                {t("policy")} <br />
                <a className="text-dark" target="_blank" href="./Rights.pdf">
                  {t("policy2")}{" "}
                </a>
                {t("policy3")}
              </small> */}
            </MDBCol>

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
