import { useEffect, useState } from 'react'
import fetchData from './helpers/fetchData'
import ModalCart from './components/Modal/ModalCart'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import Theme from './styles/Theme'
import Flex from './styles/Flex'
import { PageWrapper } from './AppStyles'

const App = () => {
  const [categoriesForMen, setCategoriesForMen] = useState([])
  const [categoriesForWomen, setCategoriesForWomen] = useState([])
  const [topBrands, setTopBrands] = useState([])
  const [productList, setProductList] = useState([])
  const [openModalCart, setOpenModalCart] = useState(false)
  const [productInfoForModalCart, setProductInfoForModalCart] = useState({})
  const [addToCartArticle, setAddToCartArticle] = useState(null)

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavoriteItems = localStorage.getItem('favoriteItems')
    return storedFavoriteItems ? JSON.parse(storedFavoriteItems) : []
  })
  const [shoppingCartItems, setShoppingCartItems] = useState(() => {
    const storedShoppingCartItems = localStorage.getItem('shoppingCartItems')
    return storedShoppingCartItems ? JSON.parse(storedShoppingCartItems) : []
  })

  useEffect(() => {
    fetchData('data-categories-men.json', setCategoriesForMen)
  }, [])

  useEffect(() => {
    fetchData('data-categories-women.json', setCategoriesForWomen)
  }, [])

  useEffect(() => {
    fetchData('top-brands.json', setTopBrands)
  }, [])

  useEffect(() => {
    fetchData('data.json', setProductList)
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

//TODO: Привести увесь документ до однакового синтаксису
//TODO: Розробити сторінку 404
//TODO: Підсвічування кнопки сторінки, на якій зараз перебуває користувач
//TODO: Притиснути футер до нижньої частини сторінки
//TODO: Виправити колір кнопки на слайдері головної сторінки


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
              categoriesForMen={categoriesForMen}
              categoriesForWomen={categoriesForWomen}
              topBrands={topBrands}
              productList={productList}
              openModalCart={modalCartHandler}
              addToFavorite={addProductToFavorite}
              isItemInFavorites={isItemInFavorites}
            />
            <Footer />
          </PageWrapper>
        </Flex>

        {openModalCart && (
          <ModalCart
            title="Add this product to your cart?"
            text={`${productName} - $${productPrice}`}
            image={productImage}
            firstButtonText="Yes, add"
            firstButtonClick={addItemToShoppingCartHandler}
            secondButtonText="No, cancel"
            secondButtonClick={modalCartHandler}
            closeModal={modalCartHandler}
          />
        )}
      </Theme>
    </>
  )
}

export default App
