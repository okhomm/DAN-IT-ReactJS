import Button from '../../UI/Button/Button';
import ArrowLeft from '../../../assets/svg/arrow-left.svg?react';
import ArrowRight from '../../../assets/svg/arrow-right.svg?react';
import CarouselIndicator from '../../../assets/svg/carousel-indicator.svg?react';
import Container from '../../../styles/Container';

import {
  StyledBannerSlider,
  StyledBannerText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledCarouselIndicator,
} from './BannerSliderStyles';

const BannerSlider = () => {
  return (
    <StyledBannerSlider>
      <Container>
        <StyledArrowLeft>
          <ArrowLeft />
        </StyledArrowLeft>
        
        <StyledBannerText>
          <h5>T-shirt / Tops</h5>
          <h1>Summer Value Pack</h1>
          <h4>cool / colorful / comfy</h4>
          <Button $buttonType="primaryButton" $size="l">
            Shop Now
          </Button>
        </StyledBannerText>

        <StyledArrowRight>
          <ArrowRight />
        </StyledArrowRight>

        <StyledCarouselIndicator>
          <CarouselIndicator />
        </StyledCarouselIndicator>
      </Container>
    </StyledBannerSlider>
  )
};

export default BannerSlider;