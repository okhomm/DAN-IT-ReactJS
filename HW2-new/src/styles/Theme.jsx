import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`

@font-face {
  font-family: 'Causten';
  src: url('/src/assets/fonts/Causten/CaustenRegular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Causten';
  src: url('/src/assets/fonts/Causten/CaustenMedium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Causten';
  src: url('/src/assets/fonts/Causten/CaustenSemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Causten';
  src: url('/src/assets/fonts/Causten/CaustenSemiBold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Core Sans C';
  src: url('/src/assets/fonts/CoreSansC/CoreSansC-55Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Core Sans C';
  src: url('/src/assets/fonts/CoreSansC/CoreSansC-65Bold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Core Sans C';
  src: url('/src/assets/fonts/CoreSansC/CoreSansC-85Heavy.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url('/src/assets/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}


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
