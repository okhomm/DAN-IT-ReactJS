import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, {createGlobalStyle} from "styled-components"
import App from './App'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
)
