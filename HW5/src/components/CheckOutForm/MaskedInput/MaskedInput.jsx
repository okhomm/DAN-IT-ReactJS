import React from 'react'
import InputMask from 'react-input-mask'
import { useFormikContext } from 'formik'
import {
  StyledInputTitle,
  StyledField,
  StyledErrorMessage,
} from './MaskedInputStyles'

const MaskedInput = ({ name, label, ...rest }) => {
  const formikContext = useFormikContext()
  const { error, ...inputMaskProps } = rest

  return (
    <div>
      <label htmlFor={name}>
        <StyledInputTitle>{label}</StyledInputTitle>
      </label>
      <InputMask
        mask="(999) 999-99-99"
        placeholder="(999) 999-99-99"
        value={formikContext.values[name]}
        onChange={(e) => {
          const inputValue = e.target.value
          const numericValue = inputValue.replace(/[^0-9]/g, '')

          formikContext.setFieldValue(name, numericValue)
        }}
        onBlur={() => {
          formikContext.setFieldTouched(name, true, false)
        }}
        {...inputMaskProps}
      >
        {(inputProps) => (
          <StyledField id={name} {...inputProps} $error={error} />
        )}
      </InputMask>
      <StyledErrorMessage name={name} component="p" style={{ color: 'red' }} />
    </div>
  )
}

export default MaskedInput
