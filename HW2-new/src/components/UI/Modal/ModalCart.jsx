import styled from 'styled-components';
import { TitleInModal, TextInModal } from './components/ModalDefaultStyles';
import {
  Modal,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalClose,
  ModalHeader,
} from './components/index';

const Image = styled.img`
  height: 140px;
`;

const ModalCart = ({
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
        </ModalHeader>
        <ModalBody>
          <TitleInModal>{title}</TitleInModal>
          {image && <Image src={image} alt="product-image" />}
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
};

export default ModalCart;
