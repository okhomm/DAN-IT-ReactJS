import PropTypes from "prop-types";
import TopMenu from './TopMenu';
import SearchBar from './SearchBar';
import ButtonsBlock from './ButtonsBlock';
import BannerSlider from './BannerSlider';
import Logo from '../../assets/svg/logo.svg?react';
import Container from '../../styles/Container';
import { StyledHeader, TopMenuBlock } from './HeaderStyles';

const Header = ({ favoriteItems, shoppingCartItems }) => {
  return (
    <StyledHeader>
      <Container>
        <TopMenuBlock>
          <a href="/">
            <Logo />
          </a>
          <TopMenu />
          <SearchBar />
          <ButtonsBlock
            favoriteItems={favoriteItems}
            shoppingCartItems={shoppingCartItems}
          />
        </TopMenuBlock>
      </Container>

      <BannerSlider />
    </StyledHeader>
  )
};

Header.propTypes = {
  favoriteItems: PropTypes.array.isRequired,
  shoppingCartItems: PropTypes.array.isRequired,
};

export default Header;
