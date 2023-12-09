import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionAddToFavorite,
  actionRemoveFromFavorite,
} from '../../../store/actions'
import useModalCartHandler from '../../../hooks/useModalCartHandler'
import { selectFavoritesItems } from '../../../store/selectors'
import styled from 'styled-components'
import Button from '../../Button'
import Heart from '../../../assets/svg/heart.svg?react'

const StyledProductItemList = styled.div`
  display: flex;
  align-items: center;
`

const StyledProductImageBox = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 40px;
  /* margin: 0 36px; */
`

const StyledProductImage = styled.img`
  max-width: 250px;
  min-width: 250px;
`

const StyledProductInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 75%;
`
const StyledProductName = styled.h4`
  font-family: 'Core Sans C', sans-serif;
  font-size: 34px;
  color: #3c4242;
  margin-bottom: 10px;
`
const StyledProductInfoText = styled.span`
  font-family: 'Core Sans C', sans-serif;
  font-size: 18px;
  color: #3c4242;
  margin-bottom: 8px;
`
const StyledProductDescription = styled.span`
  font-family: 'Core Sans C', sans-serif;
  font-size: 14px;
  color: #3c4242;
  margin-top: 15px;
  line-height: 24px;
  letter-spacing: 0.68px;
`
const StyledProductPrice = styled.span`
  margin: 20px 0;
  color: #807d7e;
  font-family: 'Causten', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`

const FavoriteButtonBox = styled.div`
  position: absolute;
  top: 26px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
        <Button $buttonType={favoriteIcon} $size="s" 
        onClick={addToFavorite}
        >
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

export default ProductItemList
