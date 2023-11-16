import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import FavoriteProducts from '../../pages/FavoriteProducts/FavoriteProducts'
import ShoppingCart from '../../pages/ShoppingCart'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const Content = ({
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
        element={
          <ShoppingCart
            shoppingCartItems={shoppingCartItems}
            removeFromShoppingCart={removeFromShoppingCart}
            openModalDelete={openModalDelete}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

Content.propTypes = {
  openModalCart: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  isItemInFavorites: PropTypes.func.isRequired,
  favoriteItems: PropTypes.array.isRequired,
  shoppingCartItems: PropTypes.array.isRequired,
  removeFromShoppingCart: PropTypes.func.isRequired,
  openModalDelete: PropTypes.func.isRequired
}

export default Content
