import styled from 'styled-components'

const StyledShoppingCartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
  border-top: 1px solid #BEBCBD;

  &:first-child {
    border: none;
  }
`

const StyledShoppingCartProductImageBox = styled.div`
  width: 105px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 20px;

`

const StyledShoppingCartProductImageUnionBlock = styled.div`
  display: flex;
  align-items: start;
  /* /* min-width: 450px; */
  /* margin-right: 15px; */
`

const StyledShoppingCartProductInfoUnionBlock = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 130px; */
  padding-right: 24px;
  max-width: 604px;
`

const StyledShoppingCartProductImage = styled.img`
  width: 105px;
`

const StyledShoppingCartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledShoppingCartProductName = styled.span`
color: #3C4242;
font-family: Causten;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.36px;
padding-bottom: 10px;
`
const StyledShoppingCartProductAttributes = styled.span`
color: #807D7E;
font-family: Causten;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-bottom: 5px;

&:first-letter {
  text-transform: uppercase;
}
`

const StyledShoppingCartProductTableText = styled.span`
color: #3C4242;
font-family: Causten;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;

&:first-child {
    margin-right: 124px;
    
  }

&:nth-child(2) {
  margin-right: 152px;
}

&:nth-child(3) {
  margin-right: 158px;
}
`


const ShoppingCartProduct = ({ name, image, price, color, brand, article }) => {
  return (
    <StyledShoppingCartProduct>
      <StyledShoppingCartProductImageUnionBlock>
      <StyledShoppingCartProductImageBox>
        <StyledShoppingCartProductImage src={image} alt={name} />
      </StyledShoppingCartProductImageBox>
      <StyledShoppingCartProductInfo>
        <StyledShoppingCartProductName>{name}</StyledShoppingCartProductName>
        <StyledShoppingCartProductAttributes>{`color: ${color}`}</StyledShoppingCartProductAttributes>
        <StyledShoppingCartProductAttributes>{`brand: ${brand}`}</StyledShoppingCartProductAttributes>
      </StyledShoppingCartProductInfo>
      </StyledShoppingCartProductImageUnionBlock>
      
      <StyledShoppingCartProductInfoUnionBlock>
      <StyledShoppingCartProductTableText>{`$${price}`}</StyledShoppingCartProductTableText>
      <StyledShoppingCartProductTableText>FREE</StyledShoppingCartProductTableText>
      <StyledShoppingCartProductTableText>{`$${price}`}</StyledShoppingCartProductTableText>
      <StyledShoppingCartProductTableText>ac</StyledShoppingCartProductTableText>
      </StyledShoppingCartProductInfoUnionBlock>
    </StyledShoppingCartProduct>
  )
}

export default ShoppingCartProduct
