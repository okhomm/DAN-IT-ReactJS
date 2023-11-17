import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  actionFetchProducts,
  actionFetchCategoriesForMen,
  actionFetchCategoriesForWomen,
  actionFetchTopBrands,
} from './store/actions'

import { selectOpenModalCart, selectProductInfoForModalCart } from './store/selectors'

import ModalCart from './components/Modal/ModalCart'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import useModalCartHandler from './hooks/useModalCartHandler'

import Theme from './styles/Theme'
import Flex from './styles/Flex'
import { PageWrapper } from './AppStyles'

const App = () => {
  
  const [addToCartArticle, setAddToCartArticle] = useState(null)

  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [productInfoForModalDelete, setProductInfoForModalDelete] = useState({})

  const [shoppingCartItems, setShoppingCartItems] = useState(() => {
    const storedShoppingCartItems = localStorage.getItem('shoppingCartItems')
    return storedShoppingCartItems ? JSON.parse(storedShoppingCartItems) : []
  })

  const dispatch = useDispatch()
  const OpenModalCart = useSelector(selectOpenModalCart)
  const itemInfoForModalCart = useSelector(selectProductInfoForModalCart);

  const {
    img: productImage,
    name: productName,
    price: productPrice,
  } = itemInfoForModalCart

  const modalCartHandler = useModalCartHandler();

  useEffect(() => {
    dispatch(actionFetchProducts())
    dispatch(actionFetchCategoriesForMen())
    dispatch(actionFetchCategoriesForWomen())
    dispatch(actionFetchTopBrands())
  }, [])

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

  return (
    <>
      <Theme>
        <Flex $direction="column" $justify="center" $align="center">
          <PageWrapper>
            <Header
              shoppingCartItems={shoppingCartItems}
            />

            <Content
              openModalDelete={modalDeleteHandler}
              shoppingCartItems={shoppingCartItems}
              removeFromShoppingCart={removeItemFromShoppingCartHandler}
            />
            <Footer />
          </PageWrapper>
        </Flex>

        {OpenModalCart && (
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
