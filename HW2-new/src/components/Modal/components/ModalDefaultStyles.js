import styled from "styled-components";

export const TextInModal = styled.p`
  padding-top: 20px;
  padding-bottom: 64px;
  color: #7f7f7f;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleInModal = styled.h4`
  margin-bottom: 35px;
  font-family: 'Inter', sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #191919;
`;

export const MainModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
  top: calc(50% - 260px);
  left: calc(50% - 260px);
  padding: 56px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;