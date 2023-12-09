import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 100%;
  padding-top: 100px;
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

export const ItemsTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLabel = styled.label`
  margin-right: 15px;
  font-family: 'Causten', sans-serif;
  font-size: 18px;
`

export const StyledSelect = styled.select`
  font-family: 'Causten', sans-serif;
  font-size: 16px;
  border-radius: 5px;

  padding: 5px;
`