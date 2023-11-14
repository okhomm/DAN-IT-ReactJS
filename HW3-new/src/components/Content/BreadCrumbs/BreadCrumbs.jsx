import PropTypes from 'prop-types'
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

BreadCrumbs.propTypes = {
  pageName: PropTypes.string,
}

BreadCrumbs.defaultProps = {
  pageName: 'Page name',
}

export default BreadCrumbs
