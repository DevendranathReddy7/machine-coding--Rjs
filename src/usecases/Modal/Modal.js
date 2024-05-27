import React from "react";
import "./Modal.css";
const Modal = ({ isOpen, closeModal }) => {
  return (
    isOpen && (
      <div className="modal__container">
        <button onClick={closeModal}>&times;</button>
        <p className="modalPara">I am Modal</p>
        <div onClick={closeModal}> </div>
      </div>
    )
  );
};
export default Modal;
