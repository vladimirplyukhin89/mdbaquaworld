import React, { createContext, useState } from "react";

import { Modal } from "../UI/Modal";

export const modalContext = createContext({
  // openModal: () => {},
  // closeModal: () => {}
  toggleShow: () => {}
});

export const ModalContextProvider = ({ children }) => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <modalContext.Provider value={{ basicModal, setBasicModal, toggleShow }}>
      {basicModal && <Modal />}
      {children}
    </modalContext.Provider>
  );
};
