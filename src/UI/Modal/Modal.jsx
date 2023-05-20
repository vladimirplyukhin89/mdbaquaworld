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

import { modalContext } from "../../components/context/modalContext";

export const Modal = () => {
  const { basicModal, setBasicModal, toggleShow } = useContext(modalContext);

  return (
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Спасибо</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>Форма отправлена успешно</MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Ok
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};
