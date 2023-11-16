import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledBreadCrumbs = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledBreadCrumbsElement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3C4242;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledBreadCrumbsElementLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #807d7e;
  font-family: Causten;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledBreadCrumbsSeparator = styled.div`
  margin-right: 15px;
`;