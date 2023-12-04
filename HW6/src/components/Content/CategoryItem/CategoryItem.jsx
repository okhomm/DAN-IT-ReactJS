import { StyledCategoryItem, StyledArrowRightLong } from './CategoryItemStyles'
import ArrowRightLong from '../../../assets/svg/arrow-right-long.svg?react'

const CategoryItem = ({ children }) => {
  return (
    <StyledCategoryItem>
      {children}
      <StyledArrowRightLong>
        <ArrowRightLong />
      </StyledArrowRightLong>
    </StyledCategoryItem>
  )
}

export default CategoryItem
