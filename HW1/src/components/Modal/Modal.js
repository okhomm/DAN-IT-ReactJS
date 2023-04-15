import React from "react";
import "./Modal.scss"
import { TfiClose } from 'react-icons/tfi';

class Modal extends React.Component {
    render() {
        const {header, text, actions, closeButton, closeModal, closeModalFromBg, modalBackground} = this.props;
        return (

            <div className="modal close" onClick={closeModalFromBg}>
                <div className="modal__active" style={{backgroundColor:modalBackground}}>
                    <div className="modal__window">
                        <div className="modal__header">
                            <h1>{header}</h1>
                            {closeButton && <TfiClose className="modal__close_icon" onClick={closeModal}/>}
                        </div>
                        <div className="modal__text">
                            <p>{text}</p>
                        </div>
                        <div className="modal__footer">
                            {actions}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Modal;