import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCategoriesForMen,
  selectCategoriesForWomen,
  selectTopBrands,
} from '../store/selectors'
import {
  actionFetchProducts,
  actionFetchTopBrands,
  actionFetchCategoriesForMen,
  actionFetchCategoriesForWomen,
} from '../store/actions'
import Flex from '../styles/Flex'
import ContentTitle from '../components/Content/ContentTitle'
import BannerSlider from '../components/Content/BannerSlider'
import CategoryList from '../components/Content/CategoryList'
import ProductList from '../components/Content/ProductList'
import TopBrands from '../components/Content/TopBrands'
import ModalAddToCart from '../components/Modal/ModalAddToCart'
import Container from '../styles/Container'
import {
  StyledMain,
  StyledTopBrandsTitle,
  StyledTopBrandsText,
  StyledTopBrandsSelectedText,
  TopBransImageBox,
} from '../components/Content/ContentStyles'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchProducts())
    dispatch(actionFetchTopBrands())
    dispatch(actionFetchCategoriesForMen())
    dispatch(actionFetchCategoriesForWomen())
  }, [])

  const topBrands = useSelector(selectTopBrands)
  const categoriesForMen = useSelector(selectCategoriesForMen)
  const categoriesForWomen = useSelector(selectCategoriesForWomen)

  const topBransImages = topBrands.map(({ image }, index) => {
    return (
      <TopBransImageBox key={index}>
        <img src={image} />
      </TopBransImageBox>
    )
  })

  return (
    <>
      <BannerSlider />
      <Container>
        <StyledMain>
          <ContentTitle>Categories For Men</ContentTitle>
          <CategoryList data={categoriesForMen} />
          <ContentTitle>Categories For Women</ContentTitle>
          <CategoryList data={categoriesForWomen} />
          <TopBrands>
            <StyledTopBrandsTitle>Top Brands Deal</StyledTopBrandsTitle>
            <StyledTopBrandsText>
              Up To{' '}
              <StyledTopBrandsSelectedText>60%</StyledTopBrandsSelectedText> off
              on brands
            </StyledTopBrandsText>
            <Flex $justify="center" $align="center">
              {topBransImages}
            </Flex>
          </TopBrands>
          <ContentTitle>In The Limelight</ContentTitle>
          <ProductList />
        </StyledMain>
      </Container>
      <ModalAddToCart />
    </>
  )
}

export default HomePage
