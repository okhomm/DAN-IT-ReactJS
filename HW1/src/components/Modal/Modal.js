import React from "react";
import styles from './Modal.module.css';
import button from "../Button/Button";

class Modal extends React.Component {
    render() {
        const {header, text, actions, closeButton, closeModal} = this.props;
        return (
            <div className={styles.modal}>
                {closeButton && <button onClick={closeModal}>Close</button>}
                <h1>{header}</h1>
                <p>{text}</p>
                {actions}

            </div>
        )
    }
}

export default Modal;