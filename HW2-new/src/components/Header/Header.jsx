import TopMenu from './TopMenu'
import SearchBar from './SearchBar'
import ButtonsBlock from './ButtonsBlock'
import BannerSlider from './BannerSlider'
import Container from '../../styles/Container'
import { StyledHeader, TopMenuBlock } from './HeaderStyles'
import Logo from '../../assets/svg/logo.svg?react'

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
}

export default Header
