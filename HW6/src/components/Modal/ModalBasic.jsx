import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalWrapper, ModalBody, ModalFooter } from './components/index'
import { TitleInModal, TextInModal } from './components/ModalDefaultStyles'

const ModalBasic = (props) => {
  const { title, text, buttonText, buttonClick, closeModal } = props
  return (
    <>
      <ModalWrapper closeModal={closeModal}>
        <Modal>
          <ModalBody>
            <TitleInModal>{title}</TitleInModal>
            <TextInModal>{text}</TextInModal>
          </ModalBody>
          <ModalFooter firstText={buttonText} firstClick={buttonClick} />
        </Modal>
      </ModalWrapper>
    </>
  )
}

ModalBasic.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
}

ModalBasic.defaultProps = {
  title: 'Modal title',
  text: 'Modal text',
  buttonText: 'Button text',
}

export default ModalBasic
