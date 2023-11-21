import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  position: relative;
`;

export const StyledSearchBarInput = styled.input`
min-width: 268px;
padding: 12px 20px 12px 52px;
background-color: ${({ theme }) => theme.colorStyles.shadowColor};
border-radius: 8px;
border: none;
color: #807d7e;
font-family: 'Causten', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
box-sizing: border-box;
border: 1px solid transparent;

& input:focus {
border: 1px solid ${({ theme }) => theme.colorStyles.hoverColor};
}
`;

export const StyledSearchIconBox = styled.div`
  position: absolute;
  top: 12px;
  left: 20px;
`;