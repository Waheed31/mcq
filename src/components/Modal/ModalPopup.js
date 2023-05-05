import React, { useState } from "react";
import "./Modal.css";

const ModalPopup = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className="btn-modal"></button>
    </>
  );
};

export default ModalPopup;
