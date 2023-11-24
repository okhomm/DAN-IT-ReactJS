import { Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

const Input = ({type, placeholder, label, name, error, ...restProps}) => {
  return (
    <label>
      <p>{label}</p>
      <Field type={type} name={name} placeholder={placeholder} {...restProps} />
      <ErrorMessage name={name} component='p'/>
    </label>
  )
}

// Input.defaultProps = {
//   type: 'text'
// }

// Input.PropTypes = {
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   label: PropTypes.string,
//   name: PropTypes.string,
//   error: PropTypes.object
// }

export default Input
