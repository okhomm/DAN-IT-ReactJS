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
      case 'favoriteButton':
        return '50%'
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
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'primaryButton':
    case 'favoriteButton':
      return colorStyles.activeColor || 'defaultColorValue';
    case 'secondaryButton':
    case 'standartButton':
    case 'textButton':
    case 'elevatedButton':
      return colorStyles.lightColor || 'defaultColorValue';
    case 'contentButton':
    case 'socialButton':
    case 'circleButton':
      return colorStyles.shadowColor || 'defaultColorValue';
    default:
      return colorStyles.activeColor || 'defaultColorValue';
  }
}};

color: ${({ $buttonType, theme }) => {
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'primaryButton':
      return colorStyles.lightColor || 'defaultColorValue';
    case 'secondaryButton':
    case 'textButton':
    case 'elevatedButton':
      return colorStyles.activeColor || 'defaultColorValue';
    case 'contentButton':
    case 'socialButton':
    case 'circleButton':
    case 'standartButton':
      return colorStyles.primaryColor || 'defaultColorValue';
    default:
      return colorStyles.lightColor || 'defaultColorValue';
  }
}};

border: ${({ $buttonType, theme }) => {
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'primaryButton':
      return `1px solid ${colorStyles.activeColor || 'defaultBorderColor'}`;
    case 'secondaryButton':
      return `1px solid ${colorStyles.primaryColor || 'defaultBorderColor'}`;
    case 'elevatedButton':
      return `1px solid ${colorStyles.lightColor || 'defaultBorderColor'}`;
    case 'contentButton':
    case 'socialButton':
      return `1px solid ${colorStyles.shadowColor || 'defaultBorderColor'}`;
    case 'textButton':
    case 'standartButton':
      return `1px solid #BEBCBD`;
    case 'circleButton':
    case 'favoriteButton':
      return `1px solid transparent`;
    default:
      return `1px solid ${colorStyles.activeColor || 'defaultBorderColor'}`;
  }
}};


  svg {
    & path {
      fill: ${({ $buttonType, theme }) => {
    const colorStyles = theme.colorStyles || {};
    switch ($buttonType) {
      case 'favoriteButton':
        return colorStyles.lightColor || 'defaultFillColor';
      case 'hoverButton':
        return colorStyles.lightColor || 'defaultFillColor';
      default:
        return colorStyles.secondaryColor || 'defaultFillColor';
    }
  }};
         
      stroke: ${({ $buttonType, theme }) => {
    const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'favoriteButton':
      return colorStyles.lightColor || 'defaultStrokeColor';
    case 'hoverButton':
      return colorStyles.lightColor || 'defaultStrokeColor';
    case 'socialButton':
      return 'none';
    default:
      return colorStyles.secondaryColor || 'defaultStrokeColor';
    }
  }}
  }
};

  &:hover {
    svg {
  & path {
    fill: ${({ $buttonType, theme }) => {
      const colorStyles = theme.colorStyles || {};
      switch ($buttonType) {
        default:
          return colorStyles.hoverColor || 'defaultFillColor';
      }
    }};
         
    stroke: ${({ $buttonType, theme }) => {
      const colorStyles = theme.colorStyles || {};
      switch ($buttonType) {
        case 'socialButton':
          return 'none';
        default:
          return colorStyles.hoverColor || 'defaultStrokeColor';
      }
    }};
  }
}

color: ${({ $buttonType, theme }) => {
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'contentButton':
    case 'socialButton':
    case 'circleButton':
    case 'favoriteButton':
    case 'secondaryButton':
      return colorStyles.hoverColor || 'defaultColor';
    case 'standartButton':
    default:
      return colorStyles.lightColor || 'defaultColor';
  }
}};


background-color: ${({ $buttonType, theme }) => {
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'primaryButton':
      return colorStyles.hoverColor || 'defaultBackgroundColor';
    case 'contentButton':
    case 'socialButton':
      return colorStyles.shadowColor || 'defaultBackgroundColor';
    case 'secondaryButton':
    case 'textButton':
    case 'elevatedButton':
      return colorStyles.offColor || 'defaultBackgroundColor';
    case 'favoriteButton':
    case 'circleButton':
      return 'none';
    case 'standartButton':
      return 'red';
    default:
      return colorStyles.hoverColor || 'defaultBackgroundColor';
  }
}};


border: ${({ $buttonType, theme }) => {
  const colorStyles = theme.colorStyles || {};
  switch ($buttonType) {
    case 'primaryButton':
    case 'standartButton':
    case 'circleButton':
    case 'favoriteButton':
    case 'socialButton':
      return `1px solid transparent`;
    case 'secondaryButton':
      return `1px solid ${colorStyles.primaryColor || 'defaultBorderColor'}`;
    case 'textButton':
    case 'elevatedButton':
      return `1px solid ${colorStyles.offColor || 'defaultBorderColor'}`;
    case 'contentButton':
    default:
      return `1px solid ${colorStyles.hoverColor || 'defaultBorderColor'}`;
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
  

  &:focus {
  background-color: ${({ $buttonType, theme }) => {
    const colorStyles = theme.colorStyles || {};
    switch ($buttonType) {
      case 'primaryButton':
      case 'standartButton':
        return colorStyles.hoverColor || 'defaultFocusColor';
      case 'secondaryButton':
      case 'textButton':
      case 'elevatedButton':
        return colorStyles.offColor || 'defaultFocusColor';
      case 'circleButton':
      case 'favoriteButton':
        return 'none';
      default:
        return colorStyles.disabledColor || 'defaultFocusColor';
    }
  }};
}


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
  

  &:disabled {
    color: ${({ theme }) => (theme.colorStyles ? theme.colorStyles.secondaryColor || 'defaultColor' : 'defaultColor2')};

  border: 1px solid transparent;
  cursor: auto;
  background-color: ${({ $buttonType, theme }) => {
    const colorStyles = theme.colorStyles || {};
    switch ($buttonType) {
      case 'primaryButton':
      case 'secondaryButton':
      case 'elevatedButton':
        return colorStyles.disabledColor || 'defaultDisabledColor';
      case 'textButton':
        return colorStyles.LightColor || 'defaultDisabledColor';
      default:
        return colorStyles.secondaryColor || 'defaultDisabledColor';
    }
  }};
}
  }`;