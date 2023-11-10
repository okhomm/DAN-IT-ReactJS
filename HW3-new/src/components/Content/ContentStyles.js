import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  padding: 100px;
  padding-bottom: 0;
`;

export const StyledTopBrandsTitle = styled.h2`
    text-align: center;
    font-family: 'Core Sans C', sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`;

export const StyledTopBrandsText = styled.p`
    padding-top: 25px;
    padding-bottom: 68px;
    text-align: center;
    font-family: 'Causten', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const StyledTopBrandsSelectedText = styled.span`
    color: #fbd103;
    font-family: 'Causten', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TopBransImageBox = styled.figure`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    width: 178px;
    height: 86px;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;

    &:last-child {
    margin-right: 0;
  }
`;