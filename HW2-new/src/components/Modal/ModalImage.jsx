import styled from 'styled-components'
import { TitleInModal, TextInModal } from './components/ModalDefaultStyles'
import {
  Modal,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalHeader,
} from './components/index'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 276px;
  height: 140px;
  margin-bottom: 85px;
`

const ModalImage = ({
  title,
  text,
  image,
  firstButtonText,
  firstButtonClick,
  secondButtonText,
  secondButtonClick,
  closeModal,
}) => {
  return (
    <ModalWrapper closeModal={closeModal}>
      <Modal>
        <ModalHeader>
          <ModalClose onClick={closeModal} />
          <Image src={image} alt="product-image" />
        </ModalHeader>
        <ModalBody>
          <TitleInModal>{title}</TitleInModal>
          <TextInModal>{text}</TextInModal>
        </ModalBody>
        <ModalFooter
          firstText={firstButtonText}
          firstClick={firstButtonClick}
          secondaryText={secondButtonText}
          secondaryClick={secondButtonClick}
        />
      </Modal>
    </ModalWrapper>
  )
}

export default ModalImage
