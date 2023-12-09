import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ViewProvider } from './contexts/ViewContext'
import store from './store'
import App from './App'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ViewProvider>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </ViewProvider>
)
