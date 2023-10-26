import {useState} from 'react'
import styled from "styled-components"
import Button from "./components/Button"
import Modal from "./components/Modal"

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
  const [isModalImageOpen, setModalImageOpen] = useState(false)
  const [isModalTextOpen, setModalTextOpen] = useState(false)

  const modalHandler = (e) => {
    e.preventDefault(); 

    if (e.target.classList.contains('first-button')) {
      setModalImageOpen(true)
    }
    if (e.target.classList.contains('second-button')) {
      setModalTextOpen(true) 
    }
    if (e.target.classList.contains('close-btn') || e.target.classList.contains('modal-bg')) {
      setModalImageOpen(false)
      setModalTextOpen(false) 
    }
  }

  return (
    <PageWrapper>
      <ButtonBlock>
        <Button type="button" classNames="first-button" onClick={(e) => modalHandler(e)}>Open first modal</Button>
        <Button type="button" classNames="second-button" onClick={(e) => modalHandler(e)}>Open second modal</Button>
      </ButtonBlock>

      {isModalImageOpen && (
        <Modal 
          img="https://images.pexels.com/photos/63690/pexels-photo-63690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          title="Product Delete!"
          text="By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
          firstBtnText="No, cansel"
          secondBtnText="Yes, delete"
          firstBtnOnClick={() => console.log('This is first modal button #1')}
          secondBtnOnClick={() => console.log('This is second modal button #2')}
          modalHandler={(e) => modalHandler(e)}
      />
      )}

      {isModalTextOpen && (
        <Modal 
          title="Add Product “NAME”"
          text="Description for you product"
          firstBtnText="Add to favorite"
          firstBtnOnClick={() => console.log('This is second modal button #1')}
          modalHandler={(e) => modalHandler(e)}
      />
      )}
    </PageWrapper>
  )
}

export default App