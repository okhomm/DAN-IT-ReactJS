import { Field } from 'formik'
import PropTypes from 'prop-types'
import { StyledInputTitle, StyledField, StyledErrorMessage } from './InputStyles'

const Input = ({ type, placeholder, label, name, error, ...restProps }) => {

  return (
    <label>
      <StyledInputTitle>{label}</StyledInputTitle>
      <StyledField
        as={Field}
        type={type}
        name={name}
        $error={error}
        placeholder={placeholder}
        {...restProps}
      />
      <StyledErrorMessage name={name} component="p" />
    </label>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
}

export default Input
