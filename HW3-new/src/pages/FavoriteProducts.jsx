import styled from 'styled-components'
import ContentSecondaryTitle from '../components/Content/ContentSecondaryTitle/ContentSecondaryTitle.jsx'
import Container from '../styles/Container.jsx'
import BreadCrumbs from '../components/Content/BreadCrumbs/BreadCrumbs.jsx'
import FavoriteProduct from '../components/Content/FavoriteProduct/FavoriteProduct.jsx'

const StyledFavoriteProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 23px;
  padding-bottom: 100px;
`
const StyledFavoriteContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`
const StyledFavoriteContentWrapper = styled.div`
  padding-top: 52px;
`

const FavoriteProducts = () => {
  return (
    <Container>
      <StyledFavoriteProducts>
        <BreadCrumbs/>
        <StyledFavoriteContentWrapper>
          <ContentSecondaryTitle>Wishlist</ContentSecondaryTitle>
          <StyledFavoriteContent>
            <FavoriteProduct/>
            <FavoriteProduct/>
            <FavoriteProduct/>
            <FavoriteProduct/>
          </StyledFavoriteContent>
        </StyledFavoriteContentWrapper>
      </StyledFavoriteProducts>
    </Container>
  )
}

export default FavoriteProducts
