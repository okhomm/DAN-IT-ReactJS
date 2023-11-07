import Container from '../../styles/Container'
import FooterMenu from './FooterMenu'
import SocialIcons from './SocialIcons'
import { FooterWraper, StyledFooterContent } from './FooterStyled'

const Footer = () => {
  return (
    <FooterWraper>
      <Container>
        <StyledFooterContent>
          <FooterMenu />
          <SocialIcons />
          <span>
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </span>
        </StyledFooterContent>
      </Container>
    </FooterWraper>
  )
}

export default Footer
