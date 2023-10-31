import styled from "styled-components"

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
const SvgIcon = styled.svg`
  pointer-events: none;
`

const ModalClose = ({onClick}) => {
  return (
    <CloseButton onClick={onClick}>
      <SvgIcon xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M18 4L4 18M18 18L4 4.00001" stroke="#3C4242" strokeWidth="1.5" strokeLinecap="round" />
      </SvgIcon>
    </CloseButton>
  )
}

export default ModalClose