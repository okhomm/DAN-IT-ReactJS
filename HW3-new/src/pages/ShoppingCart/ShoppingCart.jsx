import styled from 'styled-components'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import Container from '../../styles/Container'
import Button from '../../components/Button'
import ShoppingCartProduct from '../../components/Content/ShoppingCartProduct'

const StyledShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;

  &::before {
    content: '';
    position: absolute;
    top: 300px;
    left: 0;
    right: 0;
    height: 76px;
    background-color: #3c4242;
    z-index: -999;
  }
`

const StyledShoppingCartHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledNotificationBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 50px 0;
  color: #807d7e;
  font-family: Causten;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`

const StyledLinkedText = styled.a`
  color: #8a33fd;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledCartItemsTable = styled.table`
  position: relative;
  width: 100%;
  border: 0;

  & th {
    color: #fff;
    text-align: center;
    font-family: Causten;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    padding: 0 30px;

    &:first-child {
      text-align: left;
      padding: 0;
      padding-right: 260px;
    }
  }
`

const TableHeaderRowBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  height: 76px;
`

const TableBottomBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  background-color: #f6f6f6;
`

const StyledUnionTableBottomBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  /* padding: 30px 100px 50px 100px; */
`

const StyledDiscountCodesBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  /* padding-left: 100px; */

  & h6 {
    color: #3c4242;
    font-family: Causten;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & span {
    padding-top: 10px;
    color: #807d7e;
    font-family: Causten;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 38px;
`

const StyledInput = styled.input`
  width: 214px;
  height: 43px;
  border: 1px solid #ccc;
  border-radius: 12px 0 0 12px;
  color: #807d7e;
  font-family: Causten;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
`

const StyledButton = styled.button`
  padding: 12px 32px;
  background-color: #8a33fd;
  color: #fff;
  font-family: Causten;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  border-radius: 0 12px 12px 0;
  cursor: pointer;

  &:hover {
    background-color: #6620c1;
  }
`

const StyledTotalInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  min-width: 465px;
  /*  */
`

const StyledTotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  color: #3c4242;
  font-family: Causten;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.44px;
  border-bottom: 1px solid #bebcbd;
  padding-bottom: 50px;
  padding: 40px 90px 50px 90px;
  /* min-width: 284px; */

  & h6 {
    margin-top: 25px;
    color: #3c4242;
    font-family: Causten;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
  }
`

const StyledTotalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const StyledTotalCost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const StyledCostButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

const StyledEmptyList = styled.div`
display: flex;
align-items: center;
justify-content: center;
  padding-top: 120px;
  padding-bottom: 50px;
  color: #ccc;
  font-family: 'Core Sans C', sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.56px;
`

const ShoppingCart = ({ shoppingCartItems, removeFromShoppingCart, openModalDelete}) => {
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
        openModalDelete={openModalDelete}
      />
    )
  })

  const totalPrice = parseFloat(
    shoppingCartItems
      .map((item) => parseFloat(item.price))
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2)
  );

  return (
    <>
      <StyledShoppingCart>
        <Container>
          <StyledShoppingCartHeader>
            <BreadCrumbs />
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
              <tr><td colSpan="5"><StyledEmptyList>No products</StyledEmptyList></td></tr>
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

export default ShoppingCart
