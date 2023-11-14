import styled from 'styled-components'
import Delete from '../../../assets/svg/delete-icon.svg?react'

const StyledShoppingCartProduct = styled.tr`
  td {
    position: relative;
    border-bottom: 1px solid #bebcbd;
    padding: 50px 0;
    text-align: center;
    vertical-align: middle;
  }
  &:last-child {
    td {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`

const StyledProductInfoBox = styled.div`
  display: flex;
`

const StyledImageBox = styled.div`
  width: 105px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 20px;

  & img {
    width: 105px;
  }
`

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: self-start;

  & h5 {
    color: #3c4242;
    font-family: Causten;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.36px;
    padding-bottom: 10px;
  }

  & span {
    color: #807d7e;
    font-family: Causten;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`

const StyledShoppingInfo = styled.span`
  color: #3c4242;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const StyledShoppingInfoSelected = styled.span`
  color: #bebcbd;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`

const StyledDeleteIcon = styled(Delete)`
  cursor: pointer;
`


const ShoppingCartProduct = ({ name, image, price, color, brand, article, removeFromShoppingCart, openModalDelete }) => {
  return (
    <StyledShoppingCartProduct>
      <td>
        <StyledProductInfoBox>
          <StyledImageBox>
            <img src={image} alt={name} />
          </StyledImageBox>
          <StyledTextBox>
            <h5>{name}</h5>
            <span>{`color: ${color}`}</span>
            <span>{`brand: ${brand}`}</span>
          </StyledTextBox>
          <span></span>
        </StyledProductInfoBox>
      </td>
      <td>
        <StyledShoppingInfo>{`$${price}`}</StyledShoppingInfo>
      </td>
      <td>
        <StyledShoppingInfoSelected>Free</StyledShoppingInfoSelected>
      </td>
      <td>
        <StyledShoppingInfo>{`$${price}`}</StyledShoppingInfo>
      </td>
      <td>
        <StyledShoppingInfo>
          <StyledDeleteIcon onClick={() => openModalDelete(image, name, price, article)} />
        </StyledShoppingInfo>
      </td>
    </StyledShoppingCartProduct>
  )
}

export default ShoppingCartProduct
