// import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { closeModal } from "../../redux/modal/modal.actions";
import {
  selectModalHidden,
  selectModalContent,
} from "../../redux/modal/modal.selectors";

// JS Rendering CSS
import {
  ModalContainer,
  ModalContentBox,
  ModalHeader,
  ModalContent,
  ModalClose,
} from "./ModalStyles";

/**
 * Modal - default modal takes modal condition and modal content from state.
 * @param {boolean} modalCondition - condition to show modal.
 * @param {object} modalContent - contains header and content strings.
 * @param {boolean} test - since it is quite complicated perform testing on portals,
 * if test property is passed to component -> markdown will be returned, else portal.
 */

const Modal = ({ modalCondition, modalContent, closeModal, test }) => {
  const { header, content } = modalContent;

  const markdown = (
    <ModalContainer
      data-test="modal"
      onClick={closeModal}
      hidden={modalCondition}
    >
      <ModalContentBox onClick={(e) => e.stopPropagation()}>
        <ModalHeader data-test="modal-header">{header}</ModalHeader>
        <ModalClose data-test="modal-close" onClick={closeModal}>
          &#10006;
        </ModalClose>
        <ModalContent data-test="modal-content">{content}</ModalContent>
      </ModalContentBox>
    </ModalContainer>
  );

  return test
    ? markdown
    : ReactDOM.createPortal(markdown, document.querySelector("#modal"));
};

const mapStateToProps = createStructuredSelector({
  modalCondition: selectModalHidden,
  modalContent: selectModalContent,
});

export default connect(mapStateToProps, { closeModal })(Modal);
