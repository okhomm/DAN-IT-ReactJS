import sendRequest from '../../helpers/sendRequest'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ContentTitle from './ContentTitle'
import CategoryList from './CategoryList'

const StyledMain = styled.main`
  width: 100%;
  padding: 100px;
`

const Content = () => {
  const [categoriesForMen, setCategoriesForMen] = useState([])
  const [categoriesForWonen, setCategoriesForWomen] = useState([])

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
  
  return (
    <StyledMain>
      <ContentTitle>Categories For Men</ContentTitle>
      <CategoryList data={categoriesForMen} />

      <ContentTitle>Categories For Women</ContentTitle>
      <CategoryList data={categoriesForWonen} />
    </StyledMain>
  )
}

export default Content
