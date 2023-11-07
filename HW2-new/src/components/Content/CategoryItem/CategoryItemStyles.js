import styled from "styled-components";

export const StyledCategoryItem = styled.div`
  position: relative;

  & img {
    margin-bottom: 16px;
    cursor: pointer;
  }

  & a {
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
  }

  & a:hover {
    color: #6620c1;
    text-decoration: underline;
  }

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
`

export const StyledArrowRightLong = styled.div`
  position: absolute;
  right: 0;
  bottom: 12px;
  cursor: pointer;
`