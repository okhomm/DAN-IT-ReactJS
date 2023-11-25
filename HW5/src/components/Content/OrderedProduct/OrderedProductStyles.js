import styled from 'styled-components'

export const StyledOrderedProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #edeef2;
  padding-top: 16px;
  margin-top: 16px;
`;

export const StyledLeftBlock = styled.div`
  display: flex;
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
`;

export const StyledProductImageBox = styled.div`
  width: 63px;
  height: 63px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;

  & img {
    width: 63px;
  }
`;

export const StyledProductText = styled.span`
  color: #3c4242;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const StyledProductTextSelected = styled.span`
  color: #807d7e;
`;

export const StyledRightBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPriceText = styled.span`
  color: #807d7e;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.28px;
`;