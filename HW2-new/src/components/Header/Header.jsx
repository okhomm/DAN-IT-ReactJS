import TopMenu from './TopMenu'
import SearchBar from './SearchBar'
import ButtonsBlock from './ButtonsBlock'
import BannerSlider from './BannerSlider'
import { StyledHeader, TopMenuBlock } from './HeaderStyles'
import Logo from '../../assets/svg/logo.svg?react'

const Header = () => {
  return (
    <StyledHeader>
      <TopMenuBlock>
        <a href="/">
          <Logo />
        </a>
        <TopMenu />
        <SearchBar />
        <ButtonsBlock />
      </TopMenuBlock>
      <BannerSlider />
    </StyledHeader>
  )
}

export default Header
