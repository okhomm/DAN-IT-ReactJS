import FooterMenu from './FooterMenu';
import SocialIcons from './SocialIcons';
import Container from '../../styles/Container';
import { FooterWraper, StyledFooterContent, StyledCopyright } from './FooterStyled';

const Footer = () => {
  return (
    <FooterWraper>
      <Container>
        <StyledFooterContent>
          <FooterMenu />
          <SocialIcons />
          <StyledCopyright>
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </StyledCopyright>
        </StyledFooterContent>
      </Container>
    </FooterWraper>
  );
};

export default Footer;
