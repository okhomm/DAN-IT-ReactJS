import styled from "styled-components";

export const StyledProductItemList = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProductImageBox = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 40px;
`;

export const StyledProductImage = styled.img`
  max-width: 250px;
  min-width: 250px;
`;

export const StyledProductInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 75%;
`;

export const StyledProductName = styled.h4`
  font-family: 'Core Sans C', sans-serif;
  font-size: 34px;
  color: #3c4242;
  margin-bottom: 10px;
`;

export const StyledProductInfoText = styled.span`
  font-family: 'Core Sans C', sans-serif;
  font-size: 18px;
  color: #3c4242;
  margin-bottom: 8px;
`;

export const StyledProductDescription = styled.span`
  font-family: 'Core Sans C', sans-serif;
  font-size: 14px;
  color: #3c4242;
  margin-top: 15px;
  line-height: 24px;
  letter-spacing: 0.68px;
`;

export const StyledProductPrice = styled.span`
  margin: 20px 0;
  color: #807d7e;
  font-family: 'Causten', sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
`;

export const FavoriteButtonBox = styled.div`
  position: absolute;
  top: 26px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;