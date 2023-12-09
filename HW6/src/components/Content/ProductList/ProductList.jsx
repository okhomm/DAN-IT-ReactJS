import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../../store/selectors'
import ProductItemGrid from '../ProductItemGrid'
import ProductItemList from '../ProductItemList'
import { useView } from '../../../contexts/ViewContext'

const StyledWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 100px;
`
const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
`
const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ProductList = () => {
  const products = useSelector(selectProducts)
  const { view } = useView()

  const getProductComponent = (product, index) => {
    const { name, brand, price, article, image, ...rest } = product

    if (view === 'grid') {
      return (
        <ProductItemGrid
          key={index}
          img={image}
          price={price}
          name={name}
          brand={brand}
          article={article}
        />
      )
    }

    if (view === 'list') {
      return (
        <ProductItemList
          key={index}
          img={image}
          price={price}
          name={name}
          brand={brand}
          article={article}
        />
      )
    }

    return null
  }

  const productItems = products.map((product, index) =>
    getProductComponent(product, index)
  )

  return (
    <StyledWrapper>
      {view === 'grid' ? (
        <StyledProductGrid>{productItems}</StyledProductGrid>
      ) : (
        <StyledProductList>{productItems}</StyledProductList>
      )}
    </StyledWrapper>
  )
}

export default ProductList
