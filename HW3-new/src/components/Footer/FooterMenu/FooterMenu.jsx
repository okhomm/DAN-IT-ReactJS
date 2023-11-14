import {
  StyledFooterMenu,
  StyledMenuSectionTitle,
  StyledMenuItemsList,
  StyledMenuLink,
} from './FooterMenuStyled'

const FooterMenu = () => {
  return (
    <StyledFooterMenu>
      <div>
        <StyledMenuSectionTitle>Need Help</StyledMenuSectionTitle>
        <StyledMenuItemsList>
          <li>
            <StyledMenuLink href="/">Contact Us</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Track Order</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Returns & Refunds</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">FAQ's</StyledMenuLink>
          </li>
        </StyledMenuItemsList>
      </div>

      <div>
        <StyledMenuSectionTitle>Company</StyledMenuSectionTitle>
        <StyledMenuItemsList>
          <li>
            <StyledMenuLink href="/">About Us</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">euphoria Blog</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">euphoriastan</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Collaboration</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Media</StyledMenuLink>
          </li>
        </StyledMenuItemsList>
      </div>

      <div>
        <StyledMenuSectionTitle>More Info</StyledMenuSectionTitle>
        <StyledMenuItemsList>
          <li>
            <StyledMenuLink href="/">Term and Conditions</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Privacy Policy</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Shipping Policy</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">Sitemap</StyledMenuLink>
          </li>
        </StyledMenuItemsList>
      </div>

      <div>
        <StyledMenuSectionTitle>Location</StyledMenuSectionTitle>
        <StyledMenuItemsList>
          <li>
            <StyledMenuLink href="/">support@euphoria.in</StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">
              Eklingpura Chouraha, Ahmedabad Main Road
            </StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink href="/">
              (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
            </StyledMenuLink>
          </li>
        </StyledMenuItemsList>
      </div>
    </StyledFooterMenu>
  )
}

export default FooterMenu
