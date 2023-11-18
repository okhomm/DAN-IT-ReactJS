import { Link } from 'react-router-dom'
import TopMenu from './TopMenu'
import SearchBar from './SearchBar'
import ButtonsBlock from './ButtonsBlock'
import Logo from '../../assets/svg/logo.svg?react'
import Container from '../../styles/Container'
import { StyledHeader, TopMenuBlock } from './HeaderStyles'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <TopMenuBlock>
          <Link to="/">
            <Logo />
          </Link>
          <TopMenu />
          <SearchBar />
          <ButtonsBlock />
        </TopMenuBlock>
      </Container>
    </StyledHeader>
  )
}

export default Header
