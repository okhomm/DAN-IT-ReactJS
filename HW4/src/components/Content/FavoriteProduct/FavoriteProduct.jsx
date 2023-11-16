import PropTypes from 'prop-types'
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

const FavoriteProduct = ({
  name,
  price,
  image,
  color,
  addToFavorite,
  article,
  openModalCart,
}) => {
  return (
    <StyledFavoriteProduct>
      <StyledProductDeleteIconBox onClick={() => addToFavorite(article)}>
        <Delete />
      </StyledProductDeleteIconBox>
      <StyledProductImageBox>
        <StyledProductImage src={image} alt="" />
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
        onClick={() => openModalCart(image, name, price, article)}
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
  addToFavorite: PropTypes.func.isRequired,
  article: PropTypes.string,
  openModalCart: PropTypes.func.isRequired,
}

FavoriteProduct.defaultProps = {
  price: 0,
  image: 'Product image',
  color: 'Product color',
  article: 'Product article',
}

export default FavoriteProduct
