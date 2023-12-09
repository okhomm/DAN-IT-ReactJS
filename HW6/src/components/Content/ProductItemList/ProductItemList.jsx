import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionAddToFavorite,
  actionRemoveFromFavorite,
} from '../../../store/actions'
import useModalCartHandler from '../../../hooks/useModalCartHandler'
import { selectFavoritesItems } from '../../../store/selectors'
import Button from '../../Button'
import Heart from '../../../assets/svg/heart.svg?react'
import {
  StyledProductItemList,
  StyledProductImageBox,
  StyledProductImage,
  StyledProductInfoBlock,
  StyledProductName,
  StyledProductInfoText,
  StyledProductDescription,
  StyledProductPrice,
  FavoriteButtonBox,
} from './ProductItemListStyles'

const ProductItemList = ({ img, name, brand, price, article }) => {
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
    <StyledProductItemList>
      <StyledProductImageBox>
        <StyledProductImage src={img} alt={name} />

        <FavoriteButtonBox>
          <Button $buttonType={favoriteIcon} $size="s" onClick={addToFavorite}>
            <Heart />
          </Button>
        </FavoriteButtonBox>
      </StyledProductImageBox>
      <StyledProductInfoBlock>
        <StyledProductName>{name}</StyledProductName>
        <StyledProductInfoText>Article: {article}</StyledProductInfoText>
        <StyledProductInfoText>Brand: {brand}</StyledProductInfoText>
        <StyledProductDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </StyledProductDescription>
        <StyledProductPrice>${price}</StyledProductPrice>
        <Button
          $buttonType="primaryButton"
          $size="m"
          onClick={() => modalCartHandler(img, name, price, article)}
        >
          Add to cart
        </Button>
      </StyledProductInfoBlock>
    </StyledProductItemList>
  )
}

ProductItemList.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  article: PropTypes.string,
}

ProductItemList.defaultProps = {
  img: 'Product image',
  name: 'Product name',
  brand: 'Product brand',
  price: 0,
  article: 'Product article',
}

export default ProductItemList
