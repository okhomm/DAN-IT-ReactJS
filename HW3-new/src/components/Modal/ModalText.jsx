import PropTypes from "prop-types";
import { TitleInModal, TextInModal } from './components/ModalDefaultStyles';
import {
  Modal,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalHeader,
} from './components/index';

const ModalText = ({ title, text, buttonText, buttonClick, buttonText2, buttonClick2, closeModal }) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <Modal>
        <ModalHeader>
          <ModalClose onClick={closeModal} />
        </ModalHeader>
        <ModalBody>
          <TitleInModal>{title}</TitleInModal>
          <TextInModal>{text}</TextInModal>
        </ModalBody>
        <ModalFooter firstText={buttonText} firstClick={buttonClick} secondaryText={buttonText2} secondaryClick={buttonClick2} />
      </Modal>
    </ModalWrapper>
  )
};

ModalText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

ModalText.defaultProps = {
  title: 'Modal title',
  text: 'Modal text',
  buttonText: 'Button text',
};

export default ModalText;
