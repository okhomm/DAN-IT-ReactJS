import PropTypes from "prop-types";
import CategoryItem from '../CategoryItem';
import {StyledCategoryList, StyledProductImage, StyledProductLink} from './CategoryListStyles';

const CategoryList = ({ data }) => {
  const categoryItems = data.map(({ name, image }, index) => (
    <CategoryItem key={index}>
      <StyledProductImage src={image} alt={name} />
      <StyledProductLink href="/">{name}</StyledProductLink>
    </CategoryItem>
  ))
  
  return <StyledCategoryList>{categoryItems}</StyledCategoryList>
};

CategoryList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default CategoryList;
