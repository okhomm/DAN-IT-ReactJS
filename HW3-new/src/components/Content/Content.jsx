import PropTypes from "prop-types";
import styled from 'styled-components';
import ContentTitle from './ContentTitle';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import TopBrands from './TopBrands';
import Flex from '../../styles/Flex';
import Container from '../../styles/Container';

const StyledMain = styled.main`
  width: 100%;
  padding: 100px;
  padding-bottom: 0;
`;

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
      <figure key={index}>
        <img src={image} />
      </figure>
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
          <h2>Top Brands Deal</h2>
          <p>
            Up To <span>60%</span> off on brands
          </p>
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
