import PropTypes from "prop-types";
import styled from 'styled-components';
import CategoryItem from '../CategoryItem';

const StyledCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding-top: 70px;
  padding-bottom: 100px;
`;

const CategoryList = ({ data }) => {
  const categoryItems = data.map(({ name, image }, index) => (
    <CategoryItem key={index}>
      <img src={image} alt={name} />
      <a href="/">{name}</a>
    </CategoryItem>
  ))

  return <StyledCategoryList>{categoryItems}</StyledCategoryList>
};

CategoryList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default CategoryList;
