import { StyledFooterMenu } from './FooterMenuStyled'

const FooterMenu = () => {
  return (
    <StyledFooterMenu>
      <div>
        <h6>Need Help</h6>
        <ul>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Track Order</a>
          </li>
          <li>
            <a href="/">Returns & Refunds</a>
          </li>
          <li>
            <a href="/">FAQ's</a>
          </li>
        </ul>
      </div>

      <div>
        <h6>Company</h6>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">euphoria Blog</a>
          </li>
          <li>
            <a href="/">euphoriastan</a>
          </li>
          <li>
            <a href="/">Collaboration</a>
          </li>
          <li>
            <a href="/">Media</a>
          </li>
        </ul>
      </div>

      <div>
        <h6>More Info</h6>
        <ul>
          <li>
            <a href="/">Term and Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Shipping Policy</a>
          </li>
          <li>
            <a href="/">Sitemap</a>
          </li>
        </ul>
      </div>

      <div>
        <h6>Location</h6>
        <ul>
          <li>
            <a href="/">support@euphoria.in</a>
          </li>
          <li>
            <a href="/">Eklingpura Chouraha, Ahmedabad Main Road</a>
          </li>
          <li>
            <a href="/">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a>
          </li>
        </ul>
      </div>
    </StyledFooterMenu>
  )
};

export default FooterMenu;