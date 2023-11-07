import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  font-family: 'Causten', sans-serif;
  font-weight: 700;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  cursor: pointer;

    border-radius: ${({ $buttonType }) => {
    switch ($buttonType) {
      case 'circleButton':
        return '50px'
      default:
        return '8px'
    }
  }};

  min-width: ${({ $size }) => {
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
      case 'xs':
        return '0'
      case 's':
        return '10px'
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
        return theme.colorStyles.activeColor
      case 'secondaryButton':
      case 'standartButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.lightColor
      case 'contentButton':
      case 'circleButton':
        return theme.colorStyles.shadowColor
      default:
        return theme.colorStyles.activeColor
    }
  }};

  color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
        return theme.colorStyles.lightColor
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return theme.colorStyles.activeColor
      case 'contentButton':
      case 'circleButton':
      case 'standartButton':
        return theme.colorStyles.primaryColor
      default:
        return theme.colorStyles.lightColor
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
        return `1px solid ${theme.colorStyles.lightColor}`
      case 'standartButton':
        return `1px solid transparent`
      case 'contentButton':
      case 'circleButton':
        return `1px solid ${theme.colorStyles.shadowColor}`
      default:
        return `1px solid ${theme.colorStyles.activeColor}`
    }
  }};

  &:hover {
   svg {
    & path {
      fill: ${({ theme }) => theme.colorStyles.hoverColor};
      stroke: ${({ theme }) => theme.colorStyles.hoverColor};
  }
  }

    color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'contentButton':
      case 'circleButton':
        return theme.colorStyles.hoverColor
      case 'standartButton':
      default:
        return theme.colorStyles.lightColor
    }
  }};

    background-color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'primaryButton':
      case 'standartButton':
        return theme.colorStyles.hoverColor
      case 'contentButton':
      case 'circleButton':
        return theme.colorStyles.shadowColor
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
      case 'standartButton':
        return `1px solid transparent`
      case 'secondaryButton':
        return `1px solid ${theme.colorStyles.primaryColor}`
      case 'textButton':
      case 'elevatedButton':
        return `1px solid ${theme.colorStyles.offColor}`
      case 'contentButton':
      case 'circleButton':
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
    svg {
    & path {
      fill: ${({ theme }) => theme.colorStyles.hoverColor};
      stroke: ${({ theme }) => theme.colorStyles.hoverColor};
  }
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
      default:
        return theme.colorStyles.disabledColor
    }
  }};

      color: ${({ $buttonType, theme }) => {
    switch ($buttonType) {
      case 'standartButton':
        return theme.colorStyles.lightColor
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