import ProductItem from '../ProductItem'
import styled from 'styled-components'

import { selectProducts } from '../../../store/selectors'
import { useSelector } from 'react-redux'

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  padding-top: 70px;
  padding-bottom: 100px;
`

const ProductList = () => {
  const products = useSelector(selectProducts)

  const productsGrid = products.map((product, index) => {
    const { name, brand, price, article, image, ...rest } = product

    return (
      <ProductItem
        key={index}
        img={image}
        price={price}
        name={name}
        brand={brand}
        article={article}
      />
    )
  })
  return <StyledProductList>{productsGrid}</StyledProductList>
}

export default ProductList
