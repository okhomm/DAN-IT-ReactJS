import Button from '../../UI/Button/Button'
import Favorite from '../../../assets/svg/heart.svg?react'
import Cart from '../../../assets/svg/cart.svg?react'
import {
  StyledButtonsBlock,
  FavoriteItemsIndicator,
  CartItemsIndicator,
} from './ButtonsBlockStyled'

const ButtonsBlock = () => {
  return (
    <StyledButtonsBlock>
      <Button $buttonType="contentButton" $size="s">
        <Favorite />
      </Button>
      <FavoriteItemsIndicator>8</FavoriteItemsIndicator>
      <Button $buttonType="contentButton" $size="s">
        <Cart />
      </Button>
      <CartItemsIndicator>10</CartItemsIndicator>
    </StyledButtonsBlock>
  )
}

export default ButtonsBlock
