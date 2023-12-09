import styled from 'styled-components';

export const StyledProductItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledProductTitle = styled.h6`
  font-family: 'Causten', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledProductImage = styled.img`
  width: 100%;
  height: 370px;
  border-radius: 12px;
  cursor: pointer;
`;

export const StyledProductBrand = styled.span`
  font-family: 'Causten', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledCartBox = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledBrandLink = styled.a`
  text-decoration: none;
  color: #807d7e;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledProductTitleLink = styled.a`
  color: #3c4242;
  font-family: 'Causten', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;

  &:hover {
    color: #6620c1;
    text-decoration: underline;
  }
`;

export const StyledButtonText = styled.span`
  padding-left: 10px;
  padding-right: 10px;
`;

export const FavoriteButtonBox = styled.div`
  position: absolute;
  top: 26px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;