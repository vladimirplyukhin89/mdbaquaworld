import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <MDBFooter className="text-center text-lg-start text-muted" id="footer">
      <MDBContainer fluid className="mt-5">
        <MDBRow className="pt-3 d-flex justify-content-center">
          <MDBCol md="4" lg="3" xl="3" className="px-2 mb-4 footer__links">
            <h6 className="text-uppercase fw-bold mb-4">{t("sitemap")}</h6>
            <p className="footer__links">
              <a href="#technology" className="footer__links-link">
                {t("technology")}
              </a>
            </p>
            <p className="footer__links">
              <a href="#types" className="footer__links-link">
                {t("design")}
              </a>
            </p>
            <p className="footer__links">
              <a href="#geography" className="footer__links-link">
                {t("geography")}
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="px-2 mb-4 footer__links">
            <h6 className="text-uppercase fw-bold mb-4">
              {t("contact_footer")}
            </h6>
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

          <MDBCol md="4" lg="2" xl="2" className="px-2 mb-4 footer__links">
            <h6 className="text-uppercase fw-bold mb-4 text-sm-left text-md-center">
              {t("social_networks")}
            </h6>
            <div className="d-flex justify-content-center align-items-center">
              <a
                href="https://instagram.com/akvamir_samara"
                className="mx-2 social-icon"
                target="_blank">
                <MDBIcon
                  fab
                  icon="instagram"
                  className="social-icon__icon instagram"
                  width="40"
                />
              </a>

              <a
                href="https://vk.com/akvamir_samara"
                className=" social-icon"
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
                className=" social-icon"
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

      <MDBContainer fluid className="footer__rights">
        <div className="text-center p-4">
          {t("rights")}
          <br />
          <a className="text-reset fw-bold" href="#header">
            {t("company")}
          </a>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
};
