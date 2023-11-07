import sendRequest from './helpers/sendRequest'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer/Footer'
import Flex from './styles/Flex'
import Theme from './styles/Theme'
import { PageWrapper } from './AppStyles'

const App = () => {
  const [categoriesForMen, setCategoriesForMen] = useState([])
  const [categoriesForWonen, setCategoriesForWomen] = useState([])
  const [topBrands, setTopBrands] = useState([])
  const [productList, setProductList] = useState([])

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
          />
          <Footer />
        </PageWrapper>
      </Flex>
    </Theme>
  )
}

export default App
