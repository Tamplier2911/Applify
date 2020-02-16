// import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { closeModal } from "../../redux/modal/modal.actions";
import {
  selectModalHidden,
  selectModalContent
} from "../../redux/modal/modal.selectors";

// JS Rendering CSS
import {
  ModalContainer,
  ModalContentBox,
  ModalHeader,
  ModalContent,
  ModalClose
} from "./ModalStyles";

const Modal = ({ modalCondition, modalContent, closeModal }) => {
  const { header, content } = modalContent;

  return ReactDOM.createPortal(
    <ModalContainer onClick={closeModal} hidden={modalCondition}>
      <ModalContentBox onClick={e => e.stopPropagation()}>
        <ModalHeader>{header}</ModalHeader>
        <ModalClose onClick={closeModal}>&#10006;</ModalClose>
        <ModalContent>{content}</ModalContent>
      </ModalContentBox>
    </ModalContainer>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = createStructuredSelector({
  modalCondition: selectModalHidden,
  modalContent: selectModalContent
});

export default connect(mapStateToProps, { closeModal })(Modal);
