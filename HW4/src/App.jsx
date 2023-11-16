import { useEffect, useState } from 'react'
import fetchData from './helpers/fetchData'

import { useDispatch } from 'react-redux'
import {
  actionFetchProducts,
  actionFetchCategoriesForMen,
  actionFetchCategoriesForWomen,
  actionFetchTopBrands,
} from './store/actions'

import ModalCart from './components/Modal/ModalCart'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import Theme from './styles/Theme'
import Flex from './styles/Flex'
import { PageWrapper } from './AppStyles'

const App = () => {
  const [openModalCart, setOpenModalCart] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [productInfoForModalCart, setProductInfoForModalCart] = useState({})
  const [productInfoForModalDelete, setProductInfoForModalDelete] = useState({})
  const [addToCartArticle, setAddToCartArticle] = useState(null)
  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavoriteItems = localStorage.getItem('favoriteItems')
    return storedFavoriteItems ? JSON.parse(storedFavoriteItems) : []
  })
  const [shoppingCartItems, setShoppingCartItems] = useState(() => {
    const storedShoppingCartItems = localStorage.getItem('shoppingCartItems')
    return storedShoppingCartItems ? JSON.parse(storedShoppingCartItems) : []
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchProducts())
    dispatch(actionFetchCategoriesForMen())
    dispatch(actionFetchCategoriesForWomen())
    dispatch(actionFetchTopBrands())
  }, [])

  useEffect(() => {
    const saveDataToLocalStorage = () => {
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      localStorage.setItem(
        'shoppingCartItems',
        JSON.stringify(shoppingCartItems)
      )
    }
    saveDataToLocalStorage()
  }, [favoriteItems, shoppingCartItems])

  const modalCartHandler = (img, name, price, article) => {
    setOpenModalCart(!openModalCart)
    showProductInModalCart(img, name, price)
    setAddToCartArticle(article)
  }

  const modalDeleteHandler = (image, name, price, article) => {
    setOpenModalDelete(!openModalDelete)
    setProductInfoForModalDelete({
      image,
      name,
      price,
      article,
    })
  }

  const deleteItemFromCartFromModal = (article) => {
    removeItemFromShoppingCartHandler(article)
    setOpenModalDelete(!openModalDelete)
  }

  const addItemToShoppingCartHandler = () => {
    const isAlreadyAdded = shoppingCartItems.some(
      (item) => item.article === addToCartArticle
    )
    if (!isAlreadyAdded) {
      const selectedItem = productList.find(
        (item) => item.article === addToCartArticle
      )
      if (selectedItem) {
        setShoppingCartItems((prevState) => [...prevState, selectedItem])
      }
    }
    modalCartHandler()
  }

  const removeItemFromShoppingCartHandler = (article) => {
    const updatedShoppingCartItems = shoppingCartItems.filter(
      (item) => item.article !== article
    )
    setShoppingCartItems(updatedShoppingCartItems)
  }

  const addProductToFavorite = (article) => {
    const isAlreadyAdded = favoriteItems.some(
      (item) => item.article === article
    )
    if (isAlreadyAdded) {
      const updatedFavoriteItems = favoriteItems.filter(
        (item) => item.article !== article
      )
      setFavoriteItems(updatedFavoriteItems)
    } else {
      const selectedItem = productList.find((item) => item.article === article)
      if (selectedItem) {
        setFavoriteItems((prevState) => [...prevState, selectedItem])
      }
    }
  }

  const isItemInFavorites = (article) => {
    return favoriteItems.some((item) => item.article === article)
  }

  const showProductInModalCart = (img, name, price) => {
    setProductInfoForModalCart({
      img,
      name,
      price,
    })
  }

  const {
    img: productImage,
    name: productName,
    price: productPrice,
  } = productInfoForModalCart

  return (
    <>
      <Theme>
        <Flex $direction="column" $justify="center" $align="center">
          <PageWrapper>
            <Header
              favoriteItems={favoriteItems}
              shoppingCartItems={shoppingCartItems}
            />

            <Content
              openModalCart={modalCartHandler}
              openModalDelete={modalDeleteHandler}
              addToFavorite={addProductToFavorite}
              isItemInFavorites={isItemInFavorites}
              favoriteItems={favoriteItems}
              shoppingCartItems={shoppingCartItems}
              removeFromShoppingCart={removeItemFromShoppingCartHandler}
            />
            <Footer />
          </PageWrapper>
        </Flex>

        {openModalCart && (
          <ModalCart
            title="Add this product to your cart?"
            text={`${productName} - $${productPrice}`}
            image={productImage}
            firstButtonText="YES, ADD"
            firstButtonClick={addItemToShoppingCartHandler}
            secondButtonText="NO, CANCEL"
            secondButtonClick={modalCartHandler}
            closeModal={modalCartHandler}
          />
        )}

        {openModalDelete && (
          <ModalCart
            title="Product Delete!"
            text={`${productInfoForModalDelete.name} - $${productInfoForModalDelete.price}`}
            image={productInfoForModalDelete.image}
            firstButtonText="NO, CANCEL"
            firstButtonClick={modalDeleteHandler}
            secondButtonText="YES, DELETE"
            secondButtonClick={() =>
              deleteItemFromCartFromModal(productInfoForModalDelete.article)
            }
            closeModal={modalDeleteHandler}
          />
        )}
      </Theme>
    </>
  )
}

export default App
