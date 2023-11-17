import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { selectFavoritesItems } from '../../../store/selectors.js'
import {
  actionAddToFavorite,
  actionRemoveFromFavorite,
} from '../../../store/actions.js'

import Delete from '../../../assets/svg/close.svg?react'
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

const FavoriteProduct = ({ name, price, img, color, article }) => {
  const favoritesItems = useSelector(selectFavoritesItems)

  const dispatch = useDispatch()

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
        <StyledProductImage src={img} alt="" />
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
        // onClick={() => openModalCart(image, name, price, article)}
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
  price: 0,
  image: 'Product image',
  color: 'Product color',
  article: 'Product article',
}

export default FavoriteProduct
