import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionFetchProducts,
  actionFetchCategoriesForMen,
  actionFetchCategoriesForWomen,
  actionFetchTopBrands,
  actionRemoveFromShoppingCart,
  actionOpenModalDelete,
} from './store/actions'
import {
  selectSelectedItemArticle,
  selectOpenModalCart,
  selectOpenModalDelete,
  selectProductInfoForModalCart,
} from './store/selectors'
import ModalCart from './components/Modal/ModalCart'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import useModalCartHandler from './hooks/useModalCartHandler'
import useModalDeleteHandler from './hooks/useModalDeleteHandler'
import useAddItemToShoppingCartHandler from './hooks/useAddItemToShoppingCart'
import Theme from './styles/Theme'
import Flex from './styles/Flex'
import { PageWrapper } from './AppStyles'

const App = () => {
  const dispatch = useDispatch()
  const openModalCart = useSelector(selectOpenModalCart)
  const openModalDelete = useSelector(selectOpenModalDelete)
  const itemInfoForModalCart = useSelector(selectProductInfoForModalCart)
  const itemForRemoveFromShoppingCart = useSelector(selectSelectedItemArticle)

  const modalCartHandler = useModalCartHandler()
  const modalDeleteHandler = useModalDeleteHandler()
  const addToShoppingCartHandler = useAddItemToShoppingCartHandler()

  useEffect(() => {
    dispatch(actionFetchProducts())
    dispatch(actionFetchCategoriesForMen())
    dispatch(actionFetchCategoriesForWomen())
    dispatch(actionFetchTopBrands())
  }, [])

  const removeItemFromShoppingCartHandler = () => {
    const article = itemForRemoveFromShoppingCart.article
    dispatch(actionRemoveFromShoppingCart(article))
    dispatch(actionOpenModalDelete())
  }

  return (
    <>
      <Theme>
        <Flex $direction="column" $justify="center" $align="center">
          <PageWrapper>
            <Header />

            <Content
              openModalDelete={modalDeleteHandler}
              removeFromShoppingCart={removeItemFromShoppingCartHandler}
            />
            <Footer />
          </PageWrapper>
        </Flex>

        {openModalCart && (
          <ModalCart
            title="Add this product to your cart?"
            text={`${itemInfoForModalCart.name} - $${itemInfoForModalCart.productPrice}`}
            image={itemInfoForModalCart.img}
            firstButtonText="YES, ADD"
            firstButtonClick={addToShoppingCartHandler}
            secondButtonText="NO, CANCEL"
            secondButtonClick={modalCartHandler}
            closeModal={modalCartHandler}
          />
        )}

        {openModalDelete && (
          <ModalCart
            title="Product Delete!"
            text={`${itemInfoForModalCart.name} - $${itemInfoForModalCart.price}`}
            image={itemInfoForModalCart.image}
            firstButtonText="NO, CANCEL"
            firstButtonClick={modalDeleteHandler}
            secondButtonText="YES, DELETE"
            secondButtonClick={() => removeItemFromShoppingCartHandler()}
            closeModal={modalDeleteHandler}
          />
        )}
      </Theme>
    </>
  )
}

export default App
