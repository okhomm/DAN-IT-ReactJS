import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../Button'
import Favorite from '../../../assets/svg/heart.svg?react'
import Cart from '../../../assets/svg/cart.svg?react'
import {
  StyledButtonsBlock,
  FavoriteItemsIndicator,
  CartItemsIndicator,
} from './ButtonsBlockStyled'

const ButtonsBlock = ({ favoriteItems, shoppingCartItems }) => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  const determineFavoriteIcon =
    currentPath === '/favorite' ? 'hoverButton' : 'contentButton'
  const determineCartIcon =
    currentPath === '/cart' ? 'hoverButton' : 'contentButton'

  return (
    <StyledButtonsBlock>
      <Link to="/favorite">
        <Button $buttonType={determineFavoriteIcon} $size="s">
          <Favorite />
        </Button>
      </Link>
      {favoriteItems.length > 0 && (
        <FavoriteItemsIndicator>{favoriteItems.length}</FavoriteItemsIndicator>
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

ButtonsBlock.propTypes = {
  favoriteItems: PropTypes.array.isRequired,
  shoppingCartItems: PropTypes.array.isRequired,
}

export default ButtonsBlock
