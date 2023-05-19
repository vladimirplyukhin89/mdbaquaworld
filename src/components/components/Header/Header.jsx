import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import logo from "./img/logo.webp";
import "./Header.css";

export const Header = () => {
  const [showBasic, setShowBasic] = React.useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="mb-3" id="header">
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} alt="Logo" width={120} loading="lazy" />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="header__navigation"
            onClick={() => setShowBasic(!showBasic)}>
            {!showBasic ? (
              <MDBIcon fas icon="bars" />
            ) : (
              <MDBIcon fas icon="times" className="header__navigation-icon" />
            )}
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 header__links">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  href="#technologies"
                  scrolling="smooth"
                  className="mx-3 header__link">
                  {t("technology")}
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#examples" className="mx-3 header__link">
                  {t("design")}
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#geography" className="mx-3 header__link">
                  {t("geography")}
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href="#footer" className="mx-3 header__link">
                  {t("contact")}
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBDropdown>
              <MDBDropdownToggle tag="a" className="nav-link" role="button">
                {t("lg")}
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link onClick={() => changeLanguage("en")}>
                  {t("en")}
                </MDBDropdownItem>
                <MDBDropdownItem link> {t("fr")}</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => changeLanguage("ru")}>
                  {t("ru")}
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

            <MDBNavbarItem className="header__contacts">
              <MDBNavbarLink
                href="tel:+78463103422"
                className="px-2 py-1 header__link">
                <MDBIcon fas icon="phone" className="mx-2" width="40" />
                +7 (846) 310-34-22
              </MDBNavbarLink>

              <MDBNavbarLink
                href="tel:+79171033310"
                className="px-2 py-1 header__link">
                <MDBIcon fas icon="mobile" className="mx-2" width="40" />
                +7 (917) 10-333-10
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};
