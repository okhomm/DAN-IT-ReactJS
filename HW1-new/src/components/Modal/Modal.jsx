import styled from "styled-components"
import ModalWrapper from "./ModalWrapper"
import ModalHeader from "./ModalHeader"
import ModalFooter from "./ModalFooter"
import ModalClose from "./ModalClose"
import ModalBody from "./ModalBody"


const ModalTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #191919;
`

const ModalText = styled.p`
  padding-top: 32px;
  padding-bottom: 64px;
  color: #7F7F7F;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ModalImage = styled.div`
  width: 276px;
  height: 140px;
  margin-bottom: 85px;
  background-color: red;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Modal = (props) => {
  const {
      img, 
      title, 
      text, 
      firstBtnText, 
      firstBtnOnClick, 
      secondBtnText, 
      secondBtnOnClick,
      modalHandler
    } = props
    
  return (
  <ModalWrapper modalHandler={modalHandler}>
      <ModalHeader>
        <ModalClose onClick={(e) => modalHandler(e)}/>
      </ModalHeader>
      <ModalBody>
        {img ? <ModalImage><img src={img} alt=""/></ModalImage> : null}
        {title ? <ModalTitle>{title}</ModalTitle> : null}
        {text ? <ModalText>{text}</ModalText> : null}
      </ModalBody>
      <ModalFooter 
        firstText={firstBtnText} 
        secondaryText={secondBtnText} 
        firstClick={firstBtnOnClick} 
        secondaryClick={secondBtnOnClick}
      />
    </ModalWrapper>
  );
};

export default Modal;