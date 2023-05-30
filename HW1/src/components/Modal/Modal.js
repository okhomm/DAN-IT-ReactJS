import React, {Component} from "react";
import BackDrop from "../backDrop/backDrop";
import "./Modal.scss"
import {TfiClose} from 'react-icons/tfi';

class Modal extends Component {
    render() {
        const {header, text, actions, closeButton, closeModal, isOpen} = this.props;
        return (
            <div className="modal">
                <div className="modal__active">
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
                {isOpen ? <BackDrop onClick={closeModal}/> : null}
            </div>
        )
    }
}

export default Modal;