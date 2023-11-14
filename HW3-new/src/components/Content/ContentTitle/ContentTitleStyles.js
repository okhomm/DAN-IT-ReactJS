import styled from 'styled-components'

export const StyledTitle = styled.h2`
  position: relative;
  padding-left: 26px;
  color: #3c4242;
  font-family: 'Core Sans C', sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.68px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 30px;
    border-radius: 10px;
    background-color: #8a33fd;
  }
`;