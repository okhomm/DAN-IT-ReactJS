import React from 'react'
import PropTypes from 'prop-types'
import { MainModalWrapper, ModalBg } from './ModalDefaultStyles'

const ModalWrapper = ({ children, closeModal }) => {
  const closeModalForomBg = (e) => {
    e.preventDefault()
    if (e.target.classList.contains('modal-bg')) closeModal()
  }

  return (
    <ModalBg className="modal-bg" onClick={closeModalForomBg}>
      <MainModalWrapper>{children}</MainModalWrapper>
    </ModalBg>
  )
}

ModalWrapper.propTypes = {
  onClick: PropTypes.func,
}

export default ModalWrapper
