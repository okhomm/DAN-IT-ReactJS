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
        onClick={() => console.log('Work')}
      >
        Add to cart
      </Button>
    </StyledFavoriteProduct>
  )
}

export default FavoriteProduct
