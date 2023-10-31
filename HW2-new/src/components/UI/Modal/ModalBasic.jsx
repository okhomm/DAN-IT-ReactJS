import { Modal, ModalWrapper, ModalBody, ModalFooter } from './components/index'
import { TitleInModal, TextInModal } from './components/ModalDefaultStyles'

const ModalBasic = (props) => {
  const { title, text, buttonText, buttonClick, closeModal } = props
  return (
    <>
      <ModalWrapper closeModal={closeModal}>
        <Modal>
          <ModalBody>
            <TitleInModal>{title}</TitleInModal>
            <TextInModal>{text}</TextInModal>
          </ModalBody>
          <ModalFooter firstText={buttonText} firstClick={buttonClick} />
        </Modal>
      </ModalWrapper>
    </>
  )
}

export default ModalBasic
