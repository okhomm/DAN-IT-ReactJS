import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    margin: auto;
  }
`

const theme = {
  colorStyles: {
    primaryColor: '#3C4242',
    secondaryColor: '#807D7E',
    shadowColor: '#F6F6F6',
    LightColor: '#FFFFFF',
    activeColor: '#8A33FD',
    hoverColor: '#6620C1',
    disabledColor: '#EAEAEA',
    offColor: '#FAF8FC',
  },
}


const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {children}
    </ThemeProvider>
  )
}

export default Theme
