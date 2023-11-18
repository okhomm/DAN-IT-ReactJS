import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import FavoriteProducts from '../../pages/FavoriteProducts/FavoriteProducts'
import ShoppingCart from '../../pages/ShoppingCart'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const Content = ({
  removeFromShoppingCart,
  openModalDelete,
}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/favorite"
        element={<FavoriteProducts
           />}
      />
      <Route
        path="/cart"
        element={
          <ShoppingCart
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
  removeFromShoppingCart: PropTypes.func.isRequired,
  openModalDelete: PropTypes.func.isRequired,
}

export default Content
