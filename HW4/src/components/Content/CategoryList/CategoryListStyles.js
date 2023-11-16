import styled from "styled-components";

export const StyledCategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding-top: 70px;
  padding-bottom: 100px;
`;

export const StyledProductImage = styled.img`
    margin-bottom: 16px;
    cursor: pointer;
`;

export const StyledProductLink = styled.a`
  display: inline-block;
    color: #2a2f2f;
    font-family: 'Causten', sans-serif;
    font-size: 17.875px;
    font-style: normal;
    font-weight: 700;
    line-height: 27.93px;
    letter-spacing: -0.715px;
    margin-bottom: 15px;
    text-decoration: none;

    & a:hover {
    color: #6620c1;
    text-decoration: underline;
  }
`;