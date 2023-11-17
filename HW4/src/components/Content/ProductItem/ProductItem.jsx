import PropTypes from 'prop-types'

import useModalCartHandler from '../../../hooks/useModalCartHandler'

import Button from '../../Button'
import Heart from '../../../assets/svg/heart.svg?react'
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
} from './ProductItemStyles'

const ProductItem = ({
  img,
  name,
  brand,
  price,
  article,
  addToFavorite,
  isItemInFavorites,
}) => {
  const favoriteIcon = isItemInFavorites(article)
    ? 'favoriteButton'
    : 'circleButton'

  const modalCartHandler = useModalCartHandler();


  return (
    <StyledProductItem>
      <FavoriteButtonBox>
        <Button
          $buttonType={favoriteIcon}
          $size="s"
          onClick={() => addToFavorite(article)}
        >
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

ProductItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  article: PropTypes.string,
  addToFavorite: PropTypes.func.isRequired,
  isItemInFavorites: PropTypes.func.isRequired,
}

ProductItem.defaultProps = {
  img: 'Product image',
  name: 'Product name',
  brand: 'Product brand',
  price: 0,
  article: 'Product article',
}

export default ProductItem
