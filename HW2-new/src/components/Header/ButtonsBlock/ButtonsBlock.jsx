import Button from '../../UI/Button/Button';
import Favorite from '../../../assets/svg/heart.svg?react';
import Cart from '../../../assets/svg/cart.svg?react';
import {
  StyledButtonsBlock,
  FavoriteItemsIndicator,
  CartItemsIndicator,
} from './ButtonsBlockStyled';

const ButtonsBlock = ({ favoriteItems, shoppingCartItems }) => {
  return (
    <StyledButtonsBlock>
      <Button $buttonType="contentButton" $size="s">
        <Favorite />
      </Button>
      {favoriteItems.length > 0 && (
        <FavoriteItemsIndicator>{favoriteItems.length}</FavoriteItemsIndicator>
      )}
      <Button $buttonType="contentButton" $size="s">
        <Cart />
      </Button>
      {shoppingCartItems.length > 0 && (
        <CartItemsIndicator>{shoppingCartItems.length}</CartItemsIndicator>
      )}
    </StyledButtonsBlock>
  )
};

export default ButtonsBlock;
