import TopMenu from './TopMenu';
import SearchBar from './SearchBar';
import Button from '../UI/Button/Button';
import BannerSlider from './BannerSlider';

// import Logo from '../../assets/svg/logo.svg';
import Logo from '../../assets/svg/logo.svg?react'

import Flex from '../../styles/Flex';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
`

const TopMenuBlock = styled.div`
  width: 100%;
  padding: 32px 102px;
`

const LogoImage = styled.img`
  margin-right: 88px;
`


const Header = (props) => {
  return (
    <StyledHeader>
      <TopMenuBlock>
        <Flex $align="center" $justify="space-between">
          <Logo />
          <TopMenu />
          <SearchBar />
          <Button $buttonType="primaryButton">
            Favorite
          </Button>
          <Button $buttonType="secondaryButton">
            Cart
          </Button>
        </Flex>
      </TopMenuBlock>
      <BannerSlider />
    </StyledHeader>
  )
}

export default Header
