import styled from 'styled-components'

export const StyledFavoriteProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #edeef2;
  padding-bottom: 30px;
  padding-top: 50px;
`;

export const StyledProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 36px;
`;

export const StyledProductImage = styled.img`
  max-width: 100px;
  min-width: 100px;
`;

export const StyledProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  max-width: 250px;
  min-width: 250px;
  margin-right: 161px;
  gap: 12px;
  color: #3c4242;
  font-family: Causten;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const StyledProductSelectedText = styled.span`
  color: #807d7e;
`;

export const StyledProductPrice = styled.span`
  margin-right: 50px;
  min-width: 90px;
  max-width: 90px;
  color: #807d7e;
  font-family: Causten;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const StyledProductDeleteIconBox = styled.figure`
  cursor: pointer;
  svg:hover path {
    stroke: red;
  }
`;