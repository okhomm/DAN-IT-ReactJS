import styled from 'styled-components'
import CategoryItem from '../CategoryItem'

const StyledCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 50px;
  padding-top: 70px;
  padding-bottom: 100px;
`

const CategoryList = ({ data }) => {

  const categoryItems = data.map(({ name, image }, index) => (
    <CategoryItem key={index}>
      <img src={image} alt={name} />
      <a href="/">{name}</a>
    </CategoryItem>
  ))

  return <StyledCategoryList>{categoryItems}</StyledCategoryList>
}

export default CategoryList