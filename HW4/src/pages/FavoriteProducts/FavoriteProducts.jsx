import { useSelector } from 'react-redux'
import { selectFavoritesItems } from '../../store/selectors.js'
import ContentSecondaryTitle from '../../components/Content/ContentSecondaryTitle'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import FavoriteProduct from '../../components/Content/FavoriteProduct'
import Container from '../../styles/Container'

import {
  StyledFavoriteProducts,
  StyledFavoriteContent,
  StyledFavoriteContentWrapper,
  StyledEmptyList,
} from './FavoriteProductsStyles.js'

const FavoriteProducts = () => {
  const favoritesItems = useSelector(selectFavoritesItems)

  const favoriteProductsList = favoritesItems.map((item) => {
    const { name, price, img, article, color } = item
    return (
      <FavoriteProduct
        name={name}
        price={price}
        img={img}
        key={article}
        color={color}
        article={article}
      />
    )
  })

  return (
    <Container>
      <StyledFavoriteProducts>
        <BreadCrumbs pageName="Wishlist" />
        <StyledFavoriteContentWrapper>
          <ContentSecondaryTitle>Wishlist</ContentSecondaryTitle>
          <StyledFavoriteContent>
            {favoritesItems.length > 0 ? (
              favoriteProductsList
            ) : (
              <StyledEmptyList>No products</StyledEmptyList>
            )}
          </StyledFavoriteContent>
        </StyledFavoriteContentWrapper>
      </StyledFavoriteProducts>
    </Container>
  )
}

export default FavoriteProducts
