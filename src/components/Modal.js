import React from "react";
import Button from "./Button";

const Modal = ({ children, closeModal, show, onClick }) => {
  const showHideModal = show
    ? "modal-container display-block"
    : "modal-container display-none";
  return (
    <div className={showHideModal}>
      <section className="modal1 col-lg-3 col-md-7 col-xs-10">
        <div className="title-container">
          <div className="modal-title">Birthday Boy</div>
          <div style={{ display: "flex", flex: 1 }} />
          <div className="cancelIcon" onClick={closeModal}>
            <i className="fas fa-window-close"></i>
          </div>
        </div>
        {children}
        <div className="btn-container">
          <Button
            onClick={onClick}
            iconName="check-circle"
            color="springgreen"
            btnName="Submit"
          />
        </div>
      </section>
    </div>
  );
};

export default Modal;
