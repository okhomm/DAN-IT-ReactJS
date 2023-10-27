import styled from "styled-components"

const MainModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  padding: 56px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const ModalBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`



const ModalWrapper = ({children, closeModal}) => {

const closeModalForomBg = (e) => {
  e.preventDefault()
  if(e.target.classList.contains('modal-bg'))
  closeModal()
}

  return (
    <ModalBg className="modal-bg" onClick={closeModalForomBg}>
      <MainModalWrapper>
        {children}
      </MainModalWrapper>
    </ModalBg>
  )
}

export default ModalWrapper