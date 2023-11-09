import styled from 'styled-components';

export const StyledTopBrands = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 78px;
  padding-top: 44px;
  padding-bottom: 60px;
  border-radius: 12px;
  border: 1.069px solid var(--Dark-Grey---Fashion, #323232);
  background-color: #3c4242;
  color: #fff;

  & h2 {
    text-align: center;
    font-family: 'Core Sans C', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  & p {
    padding-top: 25px;
    padding-bottom: 68px;
    text-align: center;
    font-family: 'Causten', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & span {
    color: #fbd103;
    font-family: 'Causten', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  & figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    width: 178px;
    height: 86px;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;
  }

  & figure:last-child {
    margin-right: 0;
  }
`;