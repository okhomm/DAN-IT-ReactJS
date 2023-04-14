import React from "react";
import button from "../Button/Button";
import styles from "./Modal.module.scss"

class Modal extends React.Component {
    render() {
        const {header, text, actions, closeButton, closeModal, closeModalFromBg} = this.props;
        return (
            <div className={`${styles.background} modal`} onClick={closeModalFromBg}>
                <div className={styles.active}>
                    {closeButton && <button onClick={closeModal}>Close</button>}
                    <div className={styles.window}>
                        <h1>{header}</h1>
                        <p>{text}</p>
                        {actions}
                    </div>
                </div>

            </div>
        )
    }
}
export default Modal;