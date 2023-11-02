import styled from 'styled-components'

export const ItemList = styled.ul`
  list-style: none;

  & li {
    display: inline-block;
    padding-right: 40px;
  }

  & li:last-child {
    padding-right: 0;
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colorStyles.secondaryColor};

    font-family: Causten;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & a:hover {
    color: ${({ theme }) => theme.colorStyles.primaryColor};
  }
`