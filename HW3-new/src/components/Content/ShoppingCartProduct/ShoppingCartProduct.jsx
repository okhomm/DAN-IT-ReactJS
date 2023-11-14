import {
  StyledShoppingCartProduct,
  StyledProductInfoBox,
  StyledImageBox,
  StyledTextBox,
  StyledShoppingInfo,
  StyledShoppingInfoSelected,
  StyledDeleteIcon,
} from './ShoppingCartProductStyles'

const ShoppingCartProduct = ({
  name,
  image,
  price,
  color,
  brand,
  article,
  openModalDelete,
}) => {
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
          <StyledDeleteIcon
            onClick={() => openModalDelete(image, name, price, article)}
          />
        </StyledShoppingInfo>
      </td>
    </StyledShoppingCartProduct>
  )
}

export default ShoppingCartProduct
