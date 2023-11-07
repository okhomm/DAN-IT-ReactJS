import sendRequest from './helpers/sendRequest'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import Flex from './styles/Flex'
import Theme from './styles/Theme'
import ModalCart from './components/UI/Modal/ModalCart'
import { PageWrapper } from './AppStyles'

const App = () => {
  const [categoriesForMen, setCategoriesForMen] = useState([])
  const [categoriesForWonen, setCategoriesForWomen] = useState([])
  const [topBrands, setTopBrands] = useState([])
  const [productList, setProductList] = useState([])
  const [openModalCart, setOpenModalCart] = useState(false)
  const [productInfoForModalCart, setProductInfoForModalCart] = useState({})

  const fetchData = (url, setData) => {
    sendRequest(url)
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

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

  const modalCartHandler = (img, name, price, article) => {
    setOpenModalCart(!openModalCart)
    showProductInModalCart(img, name, price)
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
    <Theme>
      <Flex $direction="column" $justify="center" $align="center">
        <PageWrapper>
          <Header />
          <Content
            categoriesForMen={categoriesForMen}
            categoriesForWonen={categoriesForWonen}
            topBrands={topBrands}
            productList={productList}
            openModalCart={modalCartHandler}
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
          firstButtonClick={modalCartHandler}
          secondButtonText="No, cancel"
          secondButtonClick={modalCartHandler}
          closeModal={modalCartHandler}
        />
      )}
    </Theme>
  )
}

export default App
