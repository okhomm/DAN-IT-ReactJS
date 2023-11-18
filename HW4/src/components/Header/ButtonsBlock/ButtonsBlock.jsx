import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectFavoritesItems, selectShoppingCartItems } from '../../../store/selectors';

import Button from '../../Button'
import Favorite from '../../../assets/svg/heart.svg?react'
import Cart from '../../../assets/svg/cart.svg?react'
import {
  StyledButtonsBlock,
  FavoriteItemsIndicator,
  CartItemsIndicator,
} from './ButtonsBlockStyled'

const ButtonsBlock = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const determineFavoriteIcon =
    currentPath === '/favorite' ? 'hoverButton' : 'contentButton'
  const determineCartIcon =
    currentPath === '/cart' ? 'hoverButton' : 'contentButton'

    const favoritesItems = useSelector(selectFavoritesItems);
    const shoppingCartItems = useSelector(selectShoppingCartItems);
  

  return (
    <StyledButtonsBlock>
      <Link to="/favorite">
        <Button $buttonType={determineFavoriteIcon} $size="s">
          <Favorite />
        </Button>
      </Link>
      {favoritesItems.length > 0 && (
        <FavoriteItemsIndicator>{favoritesItems.length}</FavoriteItemsIndicator>
      )}
      <Link to="/cart">
        <Button $buttonType={determineCartIcon} $size="s">
          <Cart />
        </Button>
      </Link>
      {shoppingCartItems.length > 0 && (
        <CartItemsIndicator>{shoppingCartItems.length}</CartItemsIndicator>
      )}
    </StyledButtonsBlock>
  )
}

export default ButtonsBlock
