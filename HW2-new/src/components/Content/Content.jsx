
import styled from 'styled-components'
import ContentTitle from './ContentTitle'
import CategoryList from './CategoryList'
import TopBrands from './TopBrands/TopBrands'
import Flex from '../../styles/Flex'
import ProductList from './ProductList'

const StyledMain = styled.main`
  width: 100%;
  padding: 100px;
`

const Content = ({
  categoriesForMen,
  categoriesForWonen,
  topBrands,
  productList,
}) => {


  const topBransImages = topBrands.map(({ image }, index) => {
    return (
      <figure key={index}>
        <img src={image} />
      </figure>
    )
  })

  return (
    <StyledMain>
      <ContentTitle>Categories For Men</ContentTitle>
      <CategoryList data={categoriesForMen} />
      <ContentTitle>Categories For Women</ContentTitle>
      <CategoryList data={categoriesForWonen} />
      <TopBrands>
        <h2>Top Brands Deal</h2>
        <p>
          Up To <span>60%</span> off on brands
        </p>
        <Flex $justify="center" $align="center">
          {topBransImages}
        </Flex>
      </TopBrands>
      <ContentTitle>In The Limelight</ContentTitle>
      <ProductList data={productList} />
    </StyledMain>
  )
}

export default Content
