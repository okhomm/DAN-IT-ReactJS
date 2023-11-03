import ProductItem from '../ProductItem'
import styled from 'styled-components'

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 70px;
  padding-bottom: 100px;
`

const ProductList = ({ data }) => {

  const productsGrid = data.map((product, index) => {
    const { name, price, image, ...rest } = product // Деструктивізація об'єкта
    return <ProductItem key={index} img={image} price={price} name={name} />
  })

  return <StyledProductList>{productsGrid}</StyledProductList>
}

export default ProductList
