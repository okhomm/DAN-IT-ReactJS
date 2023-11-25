import CheckOutForm from '../../components/CheckOutForm'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import Container from '../../styles/Container'
import ContentTitle from '../../components/Content/ContentTitle'
import ContentSecondaryTitle from '../../components/Content/ContentSecondaryTitle'
import OrderedProduct from '../../components/Content/OrderedProduct/OrderedProduct'
import { useSelector } from 'react-redux'
import { selectShoppingCartItems } from '../../store/selectors'
import {
  StyledCheckOutForm,
  StyledContentBlock,
  StyledOrderSummary,
  StyledTitleBox,
  StyledOrderedProducts,
  StyledTotalFlexBox,
  StyledTotalFlexBoxNoBorder,
  StyledTotalSelectedText,
} from './CheckOutStyles'

const CheckOut = () => {
  const shoppingCartItems = useSelector(selectShoppingCartItems)
  const orderedItemsList = shoppingCartItems.map(
    ({ name, price, color, image, article }) => {
      return (
        <OrderedProduct
          key={article}
          name={name}
          price={price}
          color={color}
          image={image}
        />
      )
    }
  )

  const totalPrice = parseFloat(
    shoppingCartItems
      .map((item) => parseFloat(item.price))
      .reduce((acc, current) => acc + current, 0)
      .toFixed(2)
  )

  return (
    <Container>
      <StyledCheckOutForm>
        <BreadCrumbs pageName="Check Out" />
        <StyledTitleBox>
          <ContentTitle>Check Out</ContentTitle>
        </StyledTitleBox>

        <StyledContentBlock>
          <CheckOutForm />
          <StyledOrderSummary>
            <ContentSecondaryTitle>Order Summary</ContentSecondaryTitle>
            <StyledOrderedProducts>{orderedItemsList}</StyledOrderedProducts>
            <StyledTotalFlexBox>
              <span>
                Subtotal{' '}
                <StyledTotalSelectedText>
                  ( {shoppingCartItems.length} items )
                </StyledTotalSelectedText>
              </span>
              <span>${totalPrice}</span>
            </StyledTotalFlexBox>
            <StyledTotalFlexBoxNoBorder>
              <span>Savings</span>
              <span>$0</span>
            </StyledTotalFlexBoxNoBorder>
            <StyledTotalFlexBox>
              <span>Shipping</span>
              <span>$0</span>
            </StyledTotalFlexBox>
            <StyledTotalFlexBox>
              <span>Total</span>
              <span>${totalPrice}</span>
            </StyledTotalFlexBox>
          </StyledOrderSummary>
        </StyledContentBlock>
      </StyledCheckOutForm>
    </Container>
  )
}

export default CheckOut
