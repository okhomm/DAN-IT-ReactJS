import { useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import ModalBasic from './components/Modal/ModalBasic'
import ModalImage from './components/Modal/ModalImage'
import ModalText from './components/Modal/ModalText'

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
  const [openBasicModal, setOpenBasicModal] = useState(false)
  const [OpenModalImage, setOpenModalImage] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)

  const closeBasicModalHandler = () => {
    setOpenBasicModal(false)
  }

  const closeModalTextHandler = () => {
    setOpenTextModal(false)
  }

  const closeModalImageHandler = () => {
    setOpenModalImage(false)
  }

  return (
    <PageWrapper>
      <ButtonBlock>
        <Button type="button" onClick={() => setOpenBasicModal(true)}>
          Open Basic Modal
        </Button>
        <Button type="button" onClick={() => setOpenModalImage(true)}>
          Open Modal Image
        </Button>
        <Button type="button" onClick={() => setOpenTextModal(true)}>
          Open Modal Text
        </Button>
      </ButtonBlock>

      {openBasicModal && (
        <ModalBasic
          title="Basic modal"
          text="Text in basic modal"
          buttonText="Close"
          buttonClick={closeBasicModalHandler}
          closeModal={closeBasicModalHandler}
        />
      )}

      {openTextModal && (
        <ModalText
          title="Add Product “NAME”"
          text="Description for you product"
          buttonText="Add to favorite"
          buttonClick={closeModalTextHandler}
          closeModal={closeModalTextHandler}
        />
      )}

      {OpenModalImage && (
        <ModalImage
          title="Product Delete!"
          text="By clicking the “Yes, Delete” button, PRODUCT NAME will be
              deleted."
          image="https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          firstButtonText="No, cancel"
          firstButtonClick={closeModalImageHandler}
          secondButtonText="Yes, delete"
          secondButtonClick={closeModalImageHandler}
          closeModal={closeModalImageHandler}
        />
      )}
    </PageWrapper>
  )
}

export default App
