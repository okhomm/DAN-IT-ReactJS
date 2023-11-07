import Button from '../../UI/Button/Button'
import Heart from '../../../assets/svg/heart.svg?react'
import {
  StyledProductItem,
  StyledCartBox,
  StyledBrandLink,
  StyledProductTitleLink,
  StyledButtonText,
  FavoriteButtonBox,
} from './ProductItemStyles'

const ProductItem = ({ img, name, brand, price }) => {
  return (
    <StyledProductItem>
      <FavoriteButtonBox>
        <Button $buttonType="circleButton" $size="s">
          <Heart />
        </Button>
      </FavoriteButtonBox>

      <img src={img} alt={name} />

      <StyledCartBox>
        <div>
          <StyledProductTitleLink href="">
            <h6>{name}</h6>
          </StyledProductTitleLink>
          <StyledBrandLink href="/">
            <span>{`${brand}'s Brand`}</span>
          </StyledBrandLink>
        </div>
        <Button $buttonType="contentButton" $size="s">
          <StyledButtonText>{`$${price}`}</StyledButtonText>
        </Button>
      </StyledCartBox>
    </StyledProductItem>
  )
}

export default ProductItem
