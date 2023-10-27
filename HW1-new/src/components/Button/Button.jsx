import styled from "styled-components"

const StyledButton = styled.button`
  min-width: 192px;
  padding: 16px 45px;
  border-radius: 8px;
  border: 1px solid #8A33FD;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  background-color: #8A33FD;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #3C4242;
    background-color: #fff;
    color: #3C4242;
  }
`

const Button = (props) => {
  const {type, onClick, children, classNames} = props
  return (
    <div>
      <StyledButton type={type} onClick={onClick} className={classNames}>{children}</StyledButton>
    </div>
  );
};

export default Button;