import styled from 'styled-components'

export const StyledCheckOutFormContainer = styled.div`
  border-bottom: 1px solid #EDEEF2;
  margin-bottom: 100px;
`;

export const StyledFirstFormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 382px);
  grid-template-rows: repeat(3, auto);
  gap: 30px;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const StyledMiddleFormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 30px;

  & label {
    width: 100%;
  }
`;

export const StyledLastFormSection = styled.div`
  display: flex;
  flex-direction: column;

  & label:first-child {
    padding-bottom: 44px;
  }

  & label:last-child {
    padding-top: 22px;
    padding-bottom: 33px;
    color: #3c4242;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;