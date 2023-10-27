import styled from "styled-components"

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

const ModalBody = ({children}) => {
  return (
    <ModalText>{children}</ModalText>
  )
}

export default ModalBody