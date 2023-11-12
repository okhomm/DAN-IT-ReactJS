import styled from 'styled-components'
import Delete from '../../../assets/svg/close.svg?react'
import ItemImage from '../../../assets/img/categories-for-women/01-hoodies-sweetshirt.png'
import Button from '../../Button'

const StyledFavoriteProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #EDEEF2;
  padding-bottom: 30px;
  padding-top: 50px;
`
const StyledProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 36px;
`

const StyledProductImage = styled.img`
  max-width: 100px;
`

const StyledProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-right: 161px;
  gap: 12px;
  color: #3c4242;
  font-family: Causten;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`

const StyledProductSelectedText = styled.span`
  color: #807d7e;
`

const StyledProductPrice = styled.span`
  margin-right: 50px;
  color: #807d7e;
  font-family: Causten;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`

const StyledProductDeleteIconBox = styled.figure`
  cursor: pointer;
  svg:hover path {
    stroke: red;
    
  }
`


const FavoriteProduct = () => {
  return (
    <StyledFavoriteProduct>
      <StyledProductDeleteIconBox>
        <Delete />
      </StyledProductDeleteIconBox>
      <StyledProductImageBox>
        <StyledProductImage src={ItemImage} alt="" />
      </StyledProductImageBox>

      <StyledProductInfoBox>
        <span>Blue Flower Print Crop Top</span>
        <span>
          Color : <StyledProductSelectedText>Yellow</StyledProductSelectedText>
        </span>
        <span>
          Quantity : <StyledProductSelectedText>1</StyledProductSelectedText>
        </span>
      </StyledProductInfoBox>
      <StyledProductPrice>$29.00</StyledProductPrice>
      <Button $buttonType="primaryButton" $size="m" onClick={()=>console.log('Work')}>
        Add to cart
      </Button>
    </StyledFavoriteProduct>
  )
}

export default FavoriteProduct
