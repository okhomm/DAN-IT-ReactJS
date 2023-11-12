import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import FavoriteProducts from '../../pages/FavoriteProducts'
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
      <Route path="/favorite" element={<FavoriteProducts />}></Route>
      <Route path="/cart" element={<ShoppingCart />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
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
