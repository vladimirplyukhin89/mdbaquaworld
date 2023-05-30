import React, { useContext, useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBSpinner
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";

import { modalContext } from "../../context/modalContext";

export const Modal = () => {
  const { basicModal, setBasicModal, toggleShow } = useContext(modalContext);
  const { t } = useTranslation();
  const [pause, setPause] = useState(true);

  const showModalContent = () => {
    setTimeout(() => {
      setPause(false);
    }, 1000);
  };

  useEffect(() => {
    showModalContent();
  }, [pause]);

  return (
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent className="mx-auto w-75">
          {pause ? (
            <MDBSpinner color="primary">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          ) : (
            <>
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
            </>
          )}
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
