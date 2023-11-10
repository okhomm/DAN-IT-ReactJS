import PropTypes from "prop-types";
import ContentTitle from './ContentTitle';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import TopBrands from './TopBrands';
import Flex from '../../styles/Flex';
import Container from '../../styles/Container';
import {
  StyledMain, 
  StyledTopBrandsTitle, 
  StyledTopBrandsText, 
  StyledTopBrandsSelectedText,
  TopBransImageBox
} from './ContentStyles';

const Content = ({
  categoriesForMen,
  categoriesForWomen,
  topBrands,
  productList,
  openModalCart,
  addToFavorite,
  isItemInFavorites,
}) => {
  const topBransImages = topBrands.map(({ image }, index) => {
    return (
      <TopBransImageBox key={index}>
        <img src={image} />
      </TopBransImageBox>
    )
  });

  return (
    <Container>
      <StyledMain>
        <ContentTitle>Categories For Men</ContentTitle>
        <CategoryList data={categoriesForMen} />
        <ContentTitle>Categories For Women</ContentTitle>
        <CategoryList data={categoriesForWomen} />
        <TopBrands>
          <StyledTopBrandsTitle>Top Brands Deal</StyledTopBrandsTitle>
          <StyledTopBrandsText>
            Up To <StyledTopBrandsSelectedText>60%</StyledTopBrandsSelectedText> off on brands
          </StyledTopBrandsText>
          <Flex $justify="center" $align="center">
            {topBransImages}
          </Flex>
        </TopBrands>
        <ContentTitle>In The Limelight</ContentTitle>
        <ProductList
          data={productList}
          openModalCart={openModalCart}
          addToFavorite={addToFavorite}
          isItemInFavorites={isItemInFavorites}
        />
      </StyledMain>
    </Container>
  )
}

Content.propTypes = {
  categoriesForMen: PropTypes.array.isRequired,
  categoriesForWomen: PropTypes.array.isRequired,
  topBrands: PropTypes.array.isRequired,
  productList: PropTypes.array.isRequired,
  openModalCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  isItemInFavorites: PropTypes.func.isRequired,
};

export default Content;
