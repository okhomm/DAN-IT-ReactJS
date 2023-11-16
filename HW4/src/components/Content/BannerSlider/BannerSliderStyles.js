import styled from "styled-components";
import slide1 from '../../../assets/img/slide-1.jpg';

export const StyledBannerSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-image: url(${slide1});
  background-size:cover;
`;

export const StyledBannerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 130px 700px 130px 87px;
  color: #ffffff;
  font-family: 'Core Sans C', sans-serif;
  font-style: normal;  
`;

export const StyledBannerTitle = styled.h1`
font-size: 78px;
font-weight: 800;
line-height: 93.622px;
letter-spacing: 0.315px;
`;

export const StyledBannerSubtitle = styled.h5`
font-size: 32px;
font-weight: 500;
line-height: 37.771px;
letter-spacing: 0.157px;
text-transform: capitalize;
`;

export const StyledBannerDescription = styled.h4`
font-size: 32px;
font-weight: 500;
line-height: 47.214px;
letter-spacing: 0.315px;
`;

export const StyledArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: -42px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const StyledArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: -42px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const StyledCarouselIndicator = styled.div`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;