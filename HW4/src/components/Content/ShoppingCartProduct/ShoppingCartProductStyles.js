import styled from 'styled-components'
import Delete from '../../../assets/svg/delete-icon.svg?react'

export const StyledShoppingCartProduct = styled.tr`
  td {
    position: relative;
    border-bottom: 1px solid #bebcbd;
    padding: 50px 0;
    text-align: center;
    vertical-align: middle;
  }
  &:last-child {
    td {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;

export const StyledProductInfoBox = styled.div`
  display: flex;
`;

export const StyledImageBox = styled.div`
  width: 105px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 20px;

  & img {
    width: 105px;
  }
`;

export const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: self-start;

  & h5 {
    color: #3c4242;
    font-family: 'Causten', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.36px;
    padding-bottom: 10px;
  }

  & span {
    color: #807d7e;
    font-family: 'Causten', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledShoppingInfo = styled.span`
  color: #3c4242;
  font-family: 'Causten', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const StyledShoppingInfoSelected = styled.span`
  color: #bebcbd;
  font-family: 'Causten', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const StyledDeleteIcon = styled(Delete)`
  cursor: pointer;
`;