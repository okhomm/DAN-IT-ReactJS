import styled from "styled-components";

export const StyledButton = styled.button`
  /* min-width: 192px; */
  min-width: ${({$size}) => {
    switch ($size) {
      case 's':
        return '44px'
      case 'l':
        return '250px'
      default: 
        return '44px'

    }
  }};

    padding: ${({ $size }) => {
    switch ($size) {
      case 's':
        return '12px'
      case 'l': 
        return '16px'
      default:
        return '12px'
    }
  }};
  /* padding: 16px 45px; */
  text-align: center;
  font-family: 'Poppins', sans-serif;
  /* font-size: 16px; */
  font-size: ${({$size}) => {
    switch ($size) {
      case 's':
        return '14px'
      case 'l':
        return '24px'
      default:
        return '14px'
    }
  }};
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;

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
        return theme.colorStyles.activeColor
      case 'secondaryButton':
        return theme.colorStyles.LightColor
      case 'textButton':
        return theme.colorStyles.LightColor
      case 'elevatedButton':
        return theme.colorStyles.LightColor
      default:
        return theme.colorStyles.activeColor
    }
  }};

  color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return theme.colorStyles.LightColor
      case 'secondaryButton':
        return theme.colorStyles.activeColor
      case 'textButton':
        return theme.colorStyles.activeColor
      case 'elevatedButton':
        return theme.colorStyles.activeColor
      default:
        return theme.colorStyles.LightColor
    }
  }};

  border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return `1px solid ${theme.colorStyles.activeColor}`
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.primaryColor}`
      case 'textButton':
        return `1px solid transparent`
      case 'elevatedButton':
        return `1px solid ${theme.colorStyles.LightColor}`
      default:
        return `1px solid ${theme.colorStyles.activeColor}`
    }
  }};

  &:hover {
    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return theme.colorStyles.hoverColor
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.offColor
      default:
        return theme.colorStyles.hoverColor
    }
  }};

    border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return `1px solid ${theme.colorStyles.hoverColor}`
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.primaryColor}`
      case 'elevatedButton':
        return `1px solid ${theme.colorStyles.offColor}`
      default:
        return theme.colorStyles.hoverColor
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
    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return theme.colorStyles.hoverColor
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.offColor
      default:
        return theme.colorStyles.hoverColor
    }
  }};

    box-shadow: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'textButton':
        return 'none'
      case 'elevatedButton':
        return '0px 3px 4px 0px rgba(0, 0, 0, 0.10)'
      default:
        return 'none'
    }
  }};

    border: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.activeColor}`
      default:
        return `1px solid none`
    }
  }};
  }

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