import sendRequest from './sendRequest'

const fetchData = (url, setData) => {
  sendRequest(url)
    .then((data) => {
      setData(data)
    })
    .catch((error) => {
      console.log('Error:', error)
    })
}

export default fetchData
