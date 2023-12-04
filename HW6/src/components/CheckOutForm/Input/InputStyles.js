import { ErrorMessage } from 'formik'
import styled, {css} from 'styled-components'

export const StyledInputTitle = styled.p`
  color: #3c4242;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 0.32px;
  padding-bottom: 10px;
`

export const StyledField = styled.input`
  padding: 16px 20px;
  border-radius: 8px;
  background: #f6f6f6;
  border: none;
  width: 100%;
  max-width: 382px;
  color: #807d7e;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: ${(props) => (props.$error ? '1px solid red' : 'none')};
`;


export const StyledErrorMessage = styled(ErrorMessage)`
  font-family: Roboto;
  color: red;
`