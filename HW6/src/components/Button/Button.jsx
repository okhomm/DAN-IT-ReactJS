import { StyledButton } from './ButtonStyles'

const Button = (props) => {
  const { children, onClick, disabled, $buttonType, $size, ...restProps } = props
  return (
    <div>
      <StyledButton
        type="button"
        $buttonType={$buttonType}
        onClick={onClick}
        disabled={disabled}
        $size={$size}
        {...restProps}
      >
        {children}
      </StyledButton>
    </div>
  )
}

export default Button
