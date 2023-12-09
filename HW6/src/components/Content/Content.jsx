import React from 'react'
import AppRoutes from '../../routes'
import Header from '../Header'
import Footer from '../Footer/Footer'
import ModalAddToCart from '../Modal/ModalAddToCart'

const Content = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
      <ModalAddToCart />
    </>
  )
}

export default Content
