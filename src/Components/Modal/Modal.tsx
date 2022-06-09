import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <div className="Modal-backdrop" />
      <div className="Modal-wrapper">
        <div className="Modal-styledModal">
          <div className="Modal-header">
            <div className="Modal-header-text">{headerText}</div>
            <div className="Modal-header-close" onClick={hide}>
              {"✖"}
            </div>
          </div>
          <div className="Modal-content">{modalContent}</div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
