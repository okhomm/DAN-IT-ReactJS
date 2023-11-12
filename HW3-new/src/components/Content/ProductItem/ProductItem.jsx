import PropTypes from 'prop-types'
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
  openModalCart,
  addToFavorite,
  isItemInFavorites,
}) => {
  const favoriteIcon = isItemInFavorites(article)
    ? 'favoriteButton'
    : 'circleButton'

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
          onClick={() => openModalCart(img, name, price, article)}
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
  openModalCart: PropTypes.func.isRequired,
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
