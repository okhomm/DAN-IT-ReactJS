import FooterMenu from './FooterMenu'
import SocialIcons from './SocialIcons'
import Container from '../../styles/Container'
import {
  FooterWrapper,
  StyledFooterContent,
  StyledCopyright,
} from './FooterStyled'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledFooterContent>
          <FooterMenu />
          <SocialIcons />
          <StyledCopyright>
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </StyledCopyright>
        </StyledFooterContent>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
