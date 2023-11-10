import { StyledButton } from './ButtonStyles';

const Button = (props) => {
  const { children, onClick, disabled, $buttonType, $size } = props;
  return (
    <div>
      <StyledButton
        type="button"
        $buttonType={$buttonType}
        onClick={onClick}
        disabled={disabled}
        $size={$size}
      >
        {children}
      </StyledButton>
    </div>
  )
};

export default Button;
