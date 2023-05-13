import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";

import "./Footer.css";

export const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted" id="footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className=" pt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 footer__links">
              <h6 className="text-uppercase fw-bold mb-4">Карта сайта</h6>
              <p className="footer__links">
                <a href="#technology" className="footer__links-link">
                  Технологии
                </a>
              </p>
              <p className="footer__links">
                <a href="#types" className="footer__links-link">
                  Вариант конструкций
                </a>
              </p>
              <p className="footer__links">
                <a href="#geography" className="footer__links-link">
                  География
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="4"
              xl="3"
              className="mx-auto mb-4 px-0 footer__links">
              <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
              <p className="footer__links">
                <a
                  href="mailto:info@aquaworld63.ru"
                  className="footer__links-link">
                  info@aquaworld63.ru
                </a>
              </p>
              <p className="footer__links">
                <MDBIcon
                  fas
                  icon="phone"
                  className="mx-2 mr-0 footer__navigation-icon"
                  width="40"
                />
                <a href="tel:+995551117551" className="footer__links-link">
                  +995 551-117-551
                </a>
              </p>
              <p className="footer__links">
                <MDBIcon
                  fas
                  icon="mobile"
                  className="mx-2 mr-0 footer__navigation-icon"
                  width="40"
                />
                <a href="tel:+79171033310" className="footer__links-link">
                  +7 (917) 103-33-10
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="2"
              xl="2"
              className="mx-auto px-0 mb-4 footer__links">
              <h6 className="text-uppercase fw-bold mb-4 text-center">
                Мы в соцсетях:
              </h6>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://instagram.com/akvamir_samara"
                  className="mx-2 social-icon"
                  target="_blank">
                  <MDBIcon
                    fab
                    icon="instagram"
                    className="mx-2 social-icon__icon instagram"
                    width="40"
                  />
                </a>

                <a
                  href="https://vk.com/akvamir_samara"
                  className="mx-2 social-icon"
                  target="_blank">
                  <MDBIcon
                    fab
                    icon="vk"
                    className="mx-2 social-icon__icon vk"
                    width="40"
                  />
                </a>

                <a
                  href="https://www.facebook.com/%D0%90%D0%BA%D0%B2%D0%B0%D0%9C%D0%B8%D1%80-112015134044970/"
                  className="mx-2 social-icon"
                  target="_blank">
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="mx-2 social-icon__icon facebook-f"
                    width="80"
                  />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <MDBContainer fluid className="footer__rights">
        <div className="text-center p-4">
          © 2023 Все права защищены:
          <br />
          <a className="text-reset fw-bold" href="#header">
            ООО "Компания АкваМир"
          </a>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
};