import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import Container from '../../styles/Container'
import Button from '../../components/Button'
import ShoppingCartProduct from '../../components/Content/ShoppingCartProduct'
import {selectShoppingCartItems} from '../../store/selectors'
import {
  StyledShoppingCart,
  StyledShoppingCartHeader,
  StyledNotificationBlock,
  StyledLinkedText,
  StyledCartItemsTable,
  TableHeaderRowBox,
  TableBottomBg,
  StyledUnionTableBottomBlock,
  StyledDiscountCodesBlock,
  StyledInputContainer,
  StyledInput,
  StyledButton,
  StyledTotalInfoBlock,
  StyledTotalInfo,
  StyledTotalText,
  StyledTotalCost,
  StyledCostButtonBox,
  StyledEmptyList,
} from './ShoppingCartStyles'

const ShoppingCart = ({
  removeFromShoppingCart,
}) => {
  const shoppingCartItems = useSelector(selectShoppingCartItems)

  const shoppingCartItemsList = shoppingCartItems.map((item) => {
    const { name, image, price, color, brand, article } = item
    return (
      <ShoppingCartProduct
        key={article}
        name={name}
        image={image}
        price={price}
        color={color}
        brand={brand}
        article={article}
        removeFromShoppingCart={removeFromShoppingCart}
        // openModalDelete={openModalDelete}
      />
    )
  })

  const totalPrice = parseFloat(
    shoppingCartItems
      .map((item) => parseFloat(item.price))
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2)
  )

  return (
    <>
      <StyledShoppingCart>
        <Container>
          <StyledShoppingCartHeader>
            <BreadCrumbs pageName="Add To Cart" />
            <StyledNotificationBlock>
              <span>
                Please fill in the fields below and click place order to
                complete your purchase!
              </span>
              <span>
                Already registered?{' '}
                <StyledLinkedText>Please login here</StyledLinkedText>
              </span>
            </StyledNotificationBlock>
          </StyledShoppingCartHeader>
        </Container>

        <Container>
          <StyledCartItemsTable>
            <thead>
              <tr>
                <th>Product Details</th>
                <th>
                  <TableHeaderRowBox>Price</TableHeaderRowBox>
                </th>
                <th>
                  <TableHeaderRowBox>shipping</TableHeaderRowBox>
                </th>
                <th>
                  <TableHeaderRowBox>subtotal</TableHeaderRowBox>
                </th>
                <th>
                  <TableHeaderRowBox>action</TableHeaderRowBox>
                </th>
              </tr>
            </thead>
            <tbody>
              {shoppingCartItems.length > 0 ? (
                shoppingCartItemsList
              ) : (
                <tr>
                  <td colSpan="5">
                    <StyledEmptyList>No products</StyledEmptyList>
                  </td>
                </tr>
              )}
            </tbody>
          </StyledCartItemsTable>
        </Container>

        <TableBottomBg>
          <Container>
            <StyledUnionTableBottomBlock>
              <StyledDiscountCodesBlock>
                <h6>Discount Codes</h6>
                <span>Enter your coupon code if you have one</span>
                <StyledInputContainer>
                  <StyledInput type="text" />
                  <StyledButton>Apply Coupon</StyledButton>
                </StyledInputContainer>
                <Button $buttonType="standartButton" $size="m">
                  Continue Shopping
                </Button>
              </StyledDiscountCodesBlock>
              <StyledTotalInfoBlock>
                <StyledTotalInfo>
                  <StyledTotalText>
                    <span>Sub Total</span>
                    <span>Shipping</span>
                    <h6>Sub Total</h6>
                  </StyledTotalText>
                  <StyledTotalCost>
                    <span>${totalPrice}</span>
                    <span>FREE</span>
                    <h6>${totalPrice}</h6>
                  </StyledTotalCost>
                </StyledTotalInfo>
                <StyledCostButtonBox>
                  <Button $buttonType="primaryButton" $size="m">
                    Proceed To Checkout
                  </Button>
                </StyledCostButtonBox>
              </StyledTotalInfoBlock>
            </StyledUnionTableBottomBlock>
          </Container>
        </TableBottomBg>
      </StyledShoppingCart>
    </>
  )
}

ShoppingCart.propTypes = {
  removeFromShoppingCart: PropTypes.func.isRequired,
}

export default ShoppingCart
