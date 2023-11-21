import Container from '../../../styles/Container'
import Button from '../../Button'
import ArrowLeft from '../../../assets/svg/arrow-left.svg?react'
import ArrowRight from '../../../assets/svg/arrow-right.svg?react'
import CarouselIndicator from '../../../assets/svg/carousel-indicator.svg?react'

import {
  StyledBannerSlider,
  StyledBannerText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledCarouselIndicator,
  StyledBannerSubtitle,
  StyledBannerTitle,
  StyledBannerDescription,
} from './BannerSliderStyles'

const BannerSlider = () => {
  return (
    <StyledBannerSlider>
      <Container>
        <StyledArrowLeft>
          <ArrowLeft />
        </StyledArrowLeft>

        <StyledBannerText>
          <StyledBannerSubtitle>T-shirt / Tops</StyledBannerSubtitle>
          <StyledBannerTitle>Summer Value Pack</StyledBannerTitle>
          <StyledBannerDescription>
            cool / colorful / comfy
          </StyledBannerDescription>
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
}

export default BannerSlider
