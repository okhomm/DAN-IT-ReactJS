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

export default ProductItem
