import styled from 'styled-components'

export const StyledCheckOutForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: 100%;
`;

export const StyledContentBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
`;

export const StyledOrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 22px;
  width: 400px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05),
    -2px -2px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const StyledTitleBox = styled.div`
  padding-top: 54px;
`;

export const StyledOrderedProducts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTotalFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #edeef2;
  padding-top: 16px;
  margin-top: 16px;
  color: #3c4242;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
`;

export const StyledTotalFlexBoxNoBorder = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  padding-top: 16px;
  margin-top: 16px;
  color: #3c4242;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
`;

export const StyledTotalSelectedText = styled.span`
  color:#807D7E;
`;