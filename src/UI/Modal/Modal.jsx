import React, { useContext } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import { modalContext } from "../../context/modalContext";

export const Modal = () => {
  const { basicModal, setBasicModal, toggleShow } = useContext(modalContext);
  const { t } = useTranslation();

  return (
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent className="mx-auto w-75">
          <MDBModalHeader>
            <MDBModalTitle>{t("modal_title")}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>{t("modal_sibtitle")}</MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleShow}>
              {t("modal_close")}
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
