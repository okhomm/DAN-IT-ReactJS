import { useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Modal from './components/Modal/Modal'
import ModalImage from './components/Modal/ModalImage'
import ModalText from './components/Modal/ModalText'
import {
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalClose,
} from './components/Modal/components'

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpenImage, setModalOpenImage] = useState(false)
  const [modalOpenText, setModalOpenText] = useState(false)

  const closeModalHandler = () => {
    setModalOpen(false)
  }

  const closeModalTextHandler = () => {
    setModalOpenText(false)
  }

  const closeModalImageHandler = () => {
    setModalOpenImage(false)
  }

  return (
    <PageWrapper>
      <ButtonBlock>
        <Button type="button" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Button type="button" onClick={() => setModalOpenImage(true)}>
          Open Modal Image
        </Button>
        <Button type="button" onClick={() => setModalOpenText(true)}>
          Open Modal Text
        </Button>
      </ButtonBlock>

      {modalOpen && (
        <Modal>
          <ModalWrapper closeModal={closeModalHandler}>
            <ModalHeader>Default Modal</ModalHeader>
            <ModalBody>Text in default Modal</ModalBody>
            <ModalFooter firstText="Close" firstClick={closeModalHandler} />
          </ModalWrapper>
        </Modal>
      )}

      {modalOpenText && (
        <ModalText>
          <ModalWrapper closeModal={closeModalTextHandler}>
            <ModalClose onClick={closeModalTextHandler} />
            <ModalHeader>Add Product “NAME”</ModalHeader>
            <ModalBody>Description for you product</ModalBody>
            <ModalFooter
              firstText="Add to favorite"
              firstClick={closeModalTextHandler}
            />
          </ModalWrapper>
        </ModalText>
      )}

      {modalOpenImage && (
        <ModalImage>
          <ModalWrapper closeModal={closeModalImageHandler}>
            <ModalClose onClick={closeModalImageHandler} />
            <img
              src="https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="product-image"
            />
            <ModalHeader>Product Delete!</ModalHeader>
            <ModalBody>
              By clicking the “Yes, Delete” button, PRODUCT NAME will be
              deleted.
            </ModalBody>
            <ModalFooter
              firstText="No, cancel"
              firstClick={closeModalImageHandler}
              secondaryText="Yes, delete"
              secondaryClick={closeModalImageHandler}
            />
          </ModalWrapper>
        </ModalImage>
      )}
    </PageWrapper>
  )
}

export default App
