import styled from 'styled-components'

export const StyledShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 300px;
    left: 0;
    right: 0;
    height: 76px;
    background-color: #3c4242;
    z-index: -999;
  }
`;

export const StyledShoppingCartHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledNotificationBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 50px 0;
  color: #807d7e;
  font-family: 'Causten', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
`;

export const StyledLinkedText = styled.a`
  color: #8a33fd;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCartItemsTable = styled.table`
  position: relative;
  width: 100%;
  border: 0;

  & th {
    color: #fff;
    text-align: center;
    font-family: 'Causten', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    padding: 0 30px;

    &:first-child {
      text-align: left;
      padding: 0;
      padding-right: 260px;
    }
  }
`;

export const TableHeaderRowBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  height: 76px;
`;

export const TableBottomBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  background-color: #f6f6f6;
`;

export const StyledUnionTableBottomBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const StyledDiscountCodesBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  & h6 {
    color: #3c4242;
    font-family: 'Causten', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & span {
    padding-top: 10px;
    color: #807d7e;
    font-family: 'Causten', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 38px;
`;

export const StyledInput = styled.input`
  width: 214px;
  height: 43px;
  border: 1px solid #ccc;
  border-radius: 12px 0 0 12px;
  color: #807d7e;
  font-family: 'Causten', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
`;

export const StyledButton = styled.button`
  padding: 12px 32px;
  background-color: #8a33fd;
  color: #fff;
  font-family: 'Causten', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  border-radius: 0 12px 12px 0;
  cursor: pointer;

  &:hover {
    background-color: #6620c1;
  }
`;

export const StyledTotalInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  min-width: 465px;
`;

export const StyledTotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #3c4242;
  font-family: 'Causten', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.44px;
  border-bottom: 1px solid #bebcbd;
  padding-bottom: 50px;
  padding: 40px 90px 50px 90px;

  & h6 {
    margin-top: 25px;
    color: #3c4242;
    font-family: 'Causten', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
  }
`;

export const StyledTotalText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledTotalCost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledCostButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const StyledEmptyList = styled.div`
display: flex;
align-items: center;
justify-content: center;
  padding-top: 120px;
  padding-bottom: 50px;
  color: #ccc;
  font-family: 'Core Sans C', sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.5px;
  letter-spacing: 0.56px;
`;