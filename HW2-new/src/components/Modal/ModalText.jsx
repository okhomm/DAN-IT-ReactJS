import { TitleInModal, TextInModal } from './components/ModalDefaultStyles'
import {
  Modal,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalHeader,
} from './components/index'

const ModalText = ({ title, text, buttonText, buttonClick, closeModal }) => {
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
        <ModalFooter firstText={buttonText} firstClick={buttonClick} />
      </Modal>
    </ModalWrapper>
  )
}

export default ModalText
