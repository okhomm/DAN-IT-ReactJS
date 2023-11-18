import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import ShoppingCart from '../../pages/ShoppingCart'
import FavoriteProducts from '../../pages/FavoriteProducts/FavoriteProducts'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorite" element={<FavoriteProducts />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Content
