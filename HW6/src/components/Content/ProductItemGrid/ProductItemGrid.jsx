import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionAddToFavorite,
  actionRemoveFromFavorite,
} from '../../../store/actions'
import { selectFavoritesItems } from '../../../store/selectors'
import useModalCartHandler from '../../../hooks/useModalCartHandler'

import Button from '../../Button'
import {
  StyledProductItem,
  StyledCartBox,
  StyledBrandLink,
  StyledProductTitleLink,
  StyledButtonText,
  FavoriteButtonBox,
  StyledProductTitle,
  StyledProductImage,
  StyledProductBrand,
} from './ProductItemGridStyles'
import Heart from '../../../assets/svg/heart.svg?react'

const ProductItemGrid = ({ img, name, brand, price, article }) => {
  const dispatch = useDispatch()
  const modalCartHandler = useModalCartHandler()
  const favoritesItems = useSelector(selectFavoritesItems)

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

  const favoriteIcon = isItemInFavorites(article)
    ? 'favoriteButton'
    : 'circleButton'

  return (
    <StyledProductItem>
      <FavoriteButtonBox>
        <Button $buttonType={favoriteIcon} $size="s" onClick={addToFavorite}>
          <Heart />
        </Button>
      </FavoriteButtonBox>

      <StyledProductImage src={img} alt={name} />

      <StyledCartBox>
        <div>
          <StyledProductTitleLink href="">
            <StyledProductTitle>{name}</StyledProductTitle>
          </StyledProductTitleLink>
          <StyledBrandLink href="/">
            <StyledProductBrand>{`${brand}'s Brand`}</StyledProductBrand>
          </StyledBrandLink>
        </div>

        <Button
          $buttonType="contentButton"
          $size="s"
          onClick={() => modalCartHandler(img, name, price, article)}
        >
          <StyledButtonText>{`$${price}`}</StyledButtonText>
        </Button>
      </StyledCartBox>
    </StyledProductItem>
  )
}

ProductItemGrid.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  article: PropTypes.string,
}

ProductItemGrid.defaultProps = {
  img: 'Product image',
  name: 'Product name',
  brand: 'Product brand',
  price: 0,
  article: 'Product article',
}

export default ProductItemGrid
