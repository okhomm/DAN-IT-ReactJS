import styled from 'styled-components'
import SmallArrowLeft from '../../../assets/svg/small-arrow-left .svg?react'

const StyledBreadCrumbs = styled.div`
  display: flex;
  gap: 15px;
`
const StyledBreadCrumbsElement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #807d7e;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const StyledBreadCrumbsSeparator = styled.div`
  margin-right: 15px;
`

const BreadCrumbs = () => {
  return (
    <StyledBreadCrumbs>
      <StyledBreadCrumbsElement>Home</StyledBreadCrumbsElement>
      <StyledBreadCrumbsElement>
        <StyledBreadCrumbsSeparator>
          <SmallArrowLeft />
        </StyledBreadCrumbsSeparator>
        Wishlist
      </StyledBreadCrumbsElement>
    </StyledBreadCrumbs>
  )
}

export default BreadCrumbs
