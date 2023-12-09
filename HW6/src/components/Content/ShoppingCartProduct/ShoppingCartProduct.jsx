import React from 'react'
import PropTypes from 'prop-types'
import useModalDeleteHandler from '../../../hooks/useModalDeleteHandler'
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
}) => {

  const openModalDelete = useModalDeleteHandler()

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

ShoppingCartProduct.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  brand: PropTypes.string,
  article: PropTypes.string,
}

ShoppingCartProduct.defaultProps = {
  name: 'Product name',
  image: 'Product image',
  price: 0,
  color: 'Product color',
  brand: 'Product brand',
  article: 'Product article',
}

export default ShoppingCartProduct
