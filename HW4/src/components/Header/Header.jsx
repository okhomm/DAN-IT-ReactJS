import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TopMenu from './TopMenu'
import SearchBar from './SearchBar'
import ButtonsBlock from './ButtonsBlock'
import Logo from '../../assets/svg/logo.svg?react'
import Container from '../../styles/Container'
import { StyledHeader, TopMenuBlock } from './HeaderStyles'

const Header = ({ shoppingCartItems }) => {
  return (
    <StyledHeader>
      <Container>
        <TopMenuBlock>
          <Link to="/">
            <Logo />
          </Link>
          <TopMenu />
          <SearchBar />
          <ButtonsBlock
            shoppingCartItems={shoppingCartItems}
          />
        </TopMenuBlock>
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  shoppingCartItems: PropTypes.array.isRequired,
}

export default Header
