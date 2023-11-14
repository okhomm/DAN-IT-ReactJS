import SmallArrowLeft from '../../../assets/svg/small-arrow-left .svg?react'
import {
  StyledBreadCrumbs,
  StyledBreadCrumbsElement,
  StyledBreadCrumbsSeparator,
  StyledBreadCrumbsElementLink,
} from './BreadCrumbsStyles'

const BreadCrumbs = ({ pageName }) => {
  return (
    <StyledBreadCrumbs>
      <StyledBreadCrumbsElementLink to="/">Home</StyledBreadCrumbsElementLink>
      <StyledBreadCrumbsElement>
        <StyledBreadCrumbsSeparator>
          <SmallArrowLeft />
        </StyledBreadCrumbsSeparator>
        {pageName}
      </StyledBreadCrumbsElement>
    </StyledBreadCrumbs>
  )
}

export default BreadCrumbs
