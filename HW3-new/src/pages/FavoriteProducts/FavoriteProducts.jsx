import ContentSecondaryTitle from '../../components/Content/ContentSecondaryTitle'
import Container from '../../styles/Container'
import BreadCrumbs from '../../components/Content/BreadCrumbs'
import FavoriteProduct from '../../components/Content/FavoriteProduct'
import {
  StyledFavoriteProducts,
  StyledFavoriteContent,
  StyledFavoriteContentWrapper,
  StyledEmptyList,
} from './FavoriteProductsStyles.js'

const FavoriteProducts = (props) => {
  const { favoriteItems, addToFavorite, shoppingCartItems, openModalCart } = props
  const favoriteProductsList = favoriteItems.map((item) => {
    const { name, price, image, article, color } = item
    return (
      <FavoriteProduct
        name={name}
        price={price}
        image={image}
        key={article}
        color={color}
        addToFavorite={addToFavorite}
        article={article}
        shoppingCartItems={shoppingCartItems}
        openModalCart={openModalCart}
      />
    )
  })

  return (
    <Container>
      <StyledFavoriteProducts>
        <BreadCrumbs />
        <StyledFavoriteContentWrapper>
          <ContentSecondaryTitle>Wishlist</ContentSecondaryTitle>
          <StyledFavoriteContent>
            {favoriteItems.length > 0 ? (
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
