import PropTypes from "prop-types";
import ProductItem from '../ProductItem';
import styled from 'styled-components';

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 36px;
  padding-top: 70px;
  padding-bottom: 100px;
`;


const ProductList = (props) => {
  const { data, openModalCart, addToFavorite, isItemInFavorites } = props;
  const productsGrid = data.map((product, index) => {
    const { name, brand, price, article, image, ...rest } =
      product;
    return (
      <ProductItem
        key={index}
        img={image}
        price={price}
        name={name}
        brand={brand}
        article={article}
        openModalCart={openModalCart}
        addToFavorite={addToFavorite}
        isItemInFavorites={isItemInFavorites}
      />
    )
  });
  return <StyledProductList>{productsGrid}</StyledProductList>
}

ProductList.propTypes = {
  data: PropTypes.array.isRequired,
  openModalCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  isItemInFavorites: PropTypes.func.isRequired,
};

export default ProductList;
