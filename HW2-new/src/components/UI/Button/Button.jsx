import { StyledButton } from './ButtonStyles'

const Button = ({children, $buttonType, onClick, disabled}) => {
  return (
    <div>
      <StyledButton type="button" $buttonType={$buttonType} onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    </div>
  )
};

export default Button;