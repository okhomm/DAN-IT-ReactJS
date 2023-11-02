import Button from '../../UI/Button/Button'
import styled from 'styled-components'
import Heart from '../../../assets/svg/heart.svg?react'
import Cart from '../../../assets/svg/cart.svg?react'

const StyledButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const ButtonsBlock = () => {
  return (
    <StyledButtonsBlock>
      <Button $buttonType="contentButton" $size="s">
        <Heart />
      </Button>
      <Button $buttonType="contentButton" $size="s">
        <Cart />
      </Button>
    </StyledButtonsBlock>
  )
}

export default ButtonsBlock
