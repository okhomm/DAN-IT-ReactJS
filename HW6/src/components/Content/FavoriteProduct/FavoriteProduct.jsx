import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavoritesItems } from '../../../store/selectors.js'
import {
  actionAddToFavorite,
  actionRemoveFromFavorite,
} from '../../../store/actions.js'
import useModalCartHandler from '../../../hooks/useModalCartHandler.js'
import Button from '../../Button'
import {
  StyledFavoriteProduct,
  StyledProductImageBox,
  StyledProductImage,
  StyledProductInfoBox,
  StyledProductSelectedText,
  StyledProductPrice,
  StyledProductDeleteIconBox,
} from './FavoriteProductStyles'
import Delete from '../../../assets/svg/close.svg?react'

const FavoriteProduct = ({ name, price, img, color, article }) => {
  const dispatch = useDispatch()
  const favoritesItems = useSelector(selectFavoritesItems)
  const modalCartHandler = useModalCartHandler()

  const isItemInFavorites = (article) => {
    return favoritesItems.some((item) => item.article === article)
  }

  const addToFavorite = () => {
    if (isItemInFavorites(article)) {
      dispatch(actionRemoveFromFavorite(article))
    } else {
      dispatch(actionAddToFavorite({ img, name, brand, price, article }))
    }
  }

  return (
    <StyledFavoriteProduct>
      <StyledProductDeleteIconBox onClick={() => addToFavorite(article)}>
        <Delete />
      </StyledProductDeleteIconBox>
      <StyledProductImageBox>
        <StyledProductImage src={img} alt={name} />
      </StyledProductImageBox>

      <StyledProductInfoBox>
        <span>{name}</span>
        <span>
          Color : <StyledProductSelectedText>{color}</StyledProductSelectedText>
        </span>
      </StyledProductInfoBox>
      <StyledProductPrice>{`$${price}`}</StyledProductPrice>
      <Button
        $buttonType="primaryButton"
        $size="m"
        onClick={() => modalCartHandler(img, name, price, article)}
      >
        Add to cart
      </Button>
    </StyledFavoriteProduct>
  )
}

FavoriteProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  color: PropTypes.string,
  article: PropTypes.string,
}

FavoriteProduct.defaultProps = {
  mane: 'Product name',
  price: 0,
  image: 'Product image',
  color: 'Product color',
  article: 'Product article',
}

export default FavoriteProduct
