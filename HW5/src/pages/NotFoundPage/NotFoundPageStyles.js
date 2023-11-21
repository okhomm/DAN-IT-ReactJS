import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const StyledErrorText = styled.span`
  color: #ccc;
  font-family: 'Causten', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const Styled404Text = styled.span`
  color: #ccc;
  font-family: 'Causten', sans-serif;
  font-size: 104px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledButtonLink = styled(Link)`
  text-decoration: none;
`;