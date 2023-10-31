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
  colorsStyles: {
    primaryColor: '#3C4242',
    secondaryColor: '#807D7E',
    shadowColor: '#F6F6F6',
    LightColor: '#FFFFFF',
    activeColor: '#8A33FD',
  },

  buttonColors: {
    primaryButtonEnabled: '#8A33FD',
    primaryButtonHover: '#6620C1',
    primaryButtonFocused: '#6620C1',
    primaryButtonDisabled: '#EAEAEA',

    secondaryButtonEnabled: '#FFFFFF',
    secondaryButtonHover: '#FAF8FC',
    secondaryButtonFocused: '#FAF8FC',
    secondaryButtonDisabled: '#EAEAEA',

    textButtonEnabled: '#FFFFFF',
    textButtonHover: '#FAF8FC',
    textButtonFocused: '#FAF8FC',
    textButtonDisabled: '#FFFFFF',

    elevatedButtonEnabled: '#FFFFFF',
    elevatedButtonHover: '#FAF8FC',
    elevatedButtonFocused: '#FAF8FC',
    elevatedButtonDisabled: '#EAEAEA',
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
