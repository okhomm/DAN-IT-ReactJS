import styled from "styled-components";

export const StyledCategoryItem = styled.div`
  position: relative;  

  &::before {
    content: 'Explore Now!';
    position: absolute;
    left: 0;
    bottom: 0;
    color: #7f7f7f;
    font-family: 'Causten', sans-serif;
    font-size: 13.407px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.536px;
  }
`;

export const StyledArrowRightLong = styled.div`
  position: absolute;
  right: 0;
  bottom: 12px;
  cursor: pointer;
`;