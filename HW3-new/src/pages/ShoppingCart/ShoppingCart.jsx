import styled from 'styled-components'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import Container from '../../styles/Container.jsx'
import ShoppingCartProduct from '../../components/Content/ShoppingCartProduct'

const StyledShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;
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

const LinkedText = styled.a`
  color: #8a33fd;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const StyledTableHeaderBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom:70px ;
  background-color: #3c4242;
`

const StyledTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #FFF;
  text-align: center;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  padding-top:26px;
  padding-bottom:26px;
`
const StyledTableRightSide = styled.div`
  display: flex;
  gap: 120px;
`
const StyledCartItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ShoppingCart = ({shoppingCartItems}) => {
  
  const shoppingCartItemsList = shoppingCartItems.map(item => {
    const {name, image, price, color, brand, article} = item;
    return <ShoppingCartProduct 
    key={article}
    name={name}
    image={image}
    price={price}
    color={color}
    brand={brand}
    article={article}
    />
  })

  console.log(shoppingCartItems);
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
                Already registered? <LinkedText>Please login here</LinkedText>
              </span>
            </StyledNotificationBlock>
          </StyledShoppingCartHeader>
        </Container>

        <StyledTableHeaderBg>
          <Container>
            <StyledTableHeader>
              <span>Product Details</span>
              <StyledTableRightSide>
              <span>Price</span>
              <span>shipping</span>
              <span>subtotal</span>
              <span>action</span>
              </StyledTableRightSide>
            </StyledTableHeader>
          </Container>
        </StyledTableHeaderBg>

        <Container>
          <StyledCartItemsBlock>
            
          {shoppingCartItemsList}
          </StyledCartItemsBlock>
        </Container>
          
        <Container>
          <h2>Discount Codes</h2>
        </Container>
      </StyledShoppingCart>
    </>
  )
}

export default ShoppingCart
