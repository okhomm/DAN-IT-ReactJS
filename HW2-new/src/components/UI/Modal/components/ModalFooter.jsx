import styled from "styled-components"
import Button from "../../Button"

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 64px;
`

const ModalFooter = (props) => {
  const {firstText, secondaryText, firstClick, secondaryClick} = props
  return (
    <Footer>
      {firstText && <Button type="button" classNames="button-footer" onClick={firstClick}>{firstText}</Button>}
      {secondaryText && <Button type="button" classNames="button-footer" onClick={secondaryClick}>{secondaryText}</Button>}
    </Footer>
  )
}

export default ModalFooter