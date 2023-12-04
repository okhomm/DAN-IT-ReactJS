import styled from "styled-components";

export const StyledFooterMenu = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 78px;
`;

export const StyledMenuSectionTitle = styled.h6`
margin-bottom: 15px;
color: #f6f6f6;
font-family: 'Causten', sans-serif;
font-size: 28.579px;
font-style: normal;
font-weight: 700;
line-height: 216.9%;

`;

export const StyledMenuItemsList = styled.ul`
list-style: none;
`;

export const StyledMenuLink = styled.a`
color: #f6f6f6;
font-family: 'Causten', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 216.9%;
text-decoration: none;

&:hover {
      text-decoration: underline;
    }
`;
