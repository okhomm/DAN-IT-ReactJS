import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  font-family: 'Causten', sans-serif;
  font-weight: 700;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  cursor: pointer;
  text-transform: uppercase;

    border-radius: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'circleButton':
      case 'favoriteButton':
        return '50px'
      default:
        return '8px'
    }
  }};

  min-width: ${({ $size }) => {
    switch ($size) {
      case 's':
        return '44px'
      case 'm':
        return '192px'
      case 'l':
        return '250px'
      default:
        return '44px'

    }
  }};

    padding: ${({ $size }) => {
    switch ($size) {
      case 'xs':
        return '0'
      case 's':
        return '10px'
      case 'm':
        return '16px 46px'
      case 'l':
        return '16px'
      default:
        return '10px'
    }
  }};

  font-size: ${({ $size }) => {
    switch ($size) {
      case 's':
        return '14px'
      case 'm':
        return '16px'
      case 'l':
        return '24px'
      default:
        return '14px'
    }
  }};

  box-shadow: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'elevatedButton':
        return '0px 3px 4px 0px rgba(0, 0, 0, 0.10)'
      default:
        return 'none'
    }
  }};

  background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'favoriteButton':
        return theme.colorStyles.activeColor
      case 'secondaryButton':
      case 'standartButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.lightColor
      case 'contentButton':
      case 'socialButton':
      case 'circleButton':
        return theme.colorStyles.shadowColor
      default:
        return theme.colorStyles.activeColor
    }
  }};

  color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'standartButton':
        return theme.colorStyles.lightColor
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.activeColor
      case 'contentButton':
      case 'socialButton':
      case 'circleButton':
        return theme.colorStyles.primaryColor
      default:
        return theme.colorStyles.lightColor
    }
  }};

  border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'favoriteButton':
        return `1px solid ${theme.colorStyles.activeColor}`
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.primaryColor}`
      case 'textButton':
        return `1px solid transparent`
      case 'elevatedButton':
        return `1px solid ${theme.colorStyles.lightColor}`
      case 'standartButton':
        return `1px solid transparent`
      case 'contentButton':
      case 'socialButton':
        return `1px solid ${theme.colorStyles.shadowColor}`
      case 'circleButton':
      case 'favoriteButton':
        return 'none'
      default:
        return `1px solid ${theme.colorStyles.activeColor}`
    }
  }};

  svg {
    & path {
      fill: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'favoriteButton':
        return theme.colorStyles.lightColor
      default:
        return theme.colorStyles.secondaryColor
    }
  }};
         
      stroke: ${({ $buttonType, theme }) => {
  switch ($buttonType) {
    case 'favoriteButton':
      return theme.colorStyles.lightColor
    case 'socialButton':
      return 'none'
    default:
      return theme.colorStyles.secondaryColor
  }
      }};
  }
  
  }

 
  

  &:hover {
     svg {
    & path {
      fill: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      // case 'circleButton':
      // case 'favoriteButton':
        // return 'red'
      default:
        return theme.colorStyles.hoverColor
    }
  }};
         
      stroke: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      // case 'circleButton':
      // case 'favoriteButton':
        // return 'red'
      case 'socialButton':
        return 'none'
      default:
        return theme.colorStyles.hoverColor
    }
  }};
  }
  }

    color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'contentButton':
      case 'socialButton':
      case 'circleButton':
      case 'favoriteButton':
      case 'secondaryButton':
        return theme.colorStyles.hoverColor
      case 'standartButton':
      default:
        return theme.colorStyles.lightColor
    }
  }};

    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return theme.colorStyles.hoverColor
      case 'contentButton':
      case 'socialButton':
        return 'theme.colorStyles.shadowColor'
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.offColor
      case 'favoriteButton':
      case 'circleButton':
        return 'none'
      case 'standartButton':
        return theme.colorStyles.activeColor
      default:
        return theme.colorStyles.hoverColor
    }
  }};

    border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'standartButton':
      case 'circleButton':
      case 'favoriteButton':
      case 'socialButton':
        return `1px solid transparent`
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.primaryColor}`
      case 'textButton':
      case 'elevatedButton':
        return `1px solid ${theme.colorStyles.offColor}`
      case 'contentButton':
      default:
        return `1px solid ${theme.colorStyles.hoverColor}`
    }
  }};

    box-shadow: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'textButton':
      case 'elevatedButton':
        return '0px 3px 4px 0px rgba(0, 0, 0, 0.10)'
      default:
        return 'none'
    }
  }};
  }

  &:focus {
    /* svg {
    & path {
      fill: ${({ theme }) => theme.colorStyles.hoverColor};
      stroke: ${({ theme }) => theme.colorStyles.hoverColor};
  } */
  }
    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'standartButton':
        return theme.colorStyles.hoverColor
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.offColor
      case 'circleButton':
      case 'favoriteButton':
        return 'none'
      default:
        return theme.colorStyles.disabledColor
    }
  }};

    /* color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'standartButton':
        return theme.colorStyles.lightColor
      case 'circleButton':
      case 'favoriteButton':
        return 'none'
      default:
        return theme.colorStyles.hoverColor
    }
  }}; */

    box-shadow: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'textButton':
        return 'none'
      case 'elevatedButton':
        return '0px 3px 4px 0px rgba(0, 0, 0, 0.10)'
      case 'circleButton':
      case 'favoriteButton':
      default:
        return 'none'
    }
  }};

    border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.activeColor}`
      case 'circleButton':
      case 'favoriteButton':
      default:
        return `1px solid transparent`
    }
  }};
  

  &:disabled {
    color: ${({ theme }) => theme.colorStyles.secondaryColor};
    border: 1px solid transparent;
    cursor: auto;
    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'secondaryButton':
      case 'elevatedButton':
        return theme.colorStyles.disabledColor
      case 'textButton':
        return theme.colorStyles.LightColor
      default:
        return theme.colorStyles.secondaryColor
    }
  }};

    box-shadow: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'elevatedButton':
        return '0px 3px 4px 0px rgba(0, 0, 0, 0.10)'
      default:
        return 'none'
    }
  }};
  }
`