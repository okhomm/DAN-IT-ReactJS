import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import FavoriteProducts from '../../pages/FavoriteProducts/FavoriteProducts'
import ShoppingCart from '../../pages/ShoppingCart'
import NotFoundPage from '../../pages/NotFoundPage'

const Content = ({
  categoriesForMen,
  categoriesForWomen,
  topBrands,
  productList,
  openModalCart,
  addToFavorite,
  isItemInFavorites,
  favoriteItems,
  shoppingCartItems,
  removeFromShoppingCart,
  openModalDelete,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            categoriesForMen={categoriesForMen}
            categoriesForWomen={categoriesForWomen}
            topBrands={topBrands}
            productList={productList}
            openModalCart={openModalCart}
            addToFavorite={addToFavorite}
            isItemInFavorites={isItemInFavorites}
          />
        }
      />
      <Route
        path="/favorite"
        element={
          <FavoriteProducts
            favoriteItems={favoriteItems}
            addToFavorite={addToFavorite}
            shoppingCartItems={shoppingCartItems}
            openModalCart={openModalCart}
          />
        }
      />
      <Route
        path="/cart"
        element={<ShoppingCart shoppingCartItems={shoppingCartItems} removeFromShoppingCart={removeFromShoppingCart} openModalDelete={openModalDelete} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

Content.propTypes = {
  categoriesForMen: PropTypes.array.isRequired,
  categoriesForWomen: PropTypes.array.isRequired,
  topBrands: PropTypes.array.isRequired,
  productList: PropTypes.array.isRequired,
  openModalCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  isItemInFavorites: PropTypes.func.isRequired,
}

export default Content
