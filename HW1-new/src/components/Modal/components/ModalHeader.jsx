import styled from "styled-components"

const ModalTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #191919;
`

const ModalHeader = ({children}) => {
  return (
    <ModalTitle>{children}</ModalTitle>
  )
}

export default ModalHeader