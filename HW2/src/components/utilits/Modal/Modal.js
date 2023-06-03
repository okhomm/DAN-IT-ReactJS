import React, {Component} from "react";
import BackDrop from "../backDrop/backDrop";
import {TfiClose} from 'react-icons/tfi';
import styles from "./Modal.module.css";

class Modal extends Component {
    render() {
        const {header, text, actions, closeButton, closeModal, isOpen} = this.props;
        return (
            <>
                <div className={styles.active}>
                    <div className={styles.window}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>{header}</h1>
                            {closeButton && <TfiClose className={styles.close_icon} onClick={closeModal}/>}
                        </div>
                        <div className={styles.text}>
                            <p>{text}</p>
                        </div>
                        <div className={styles.footer}>
                            {actions}
                        </div>
                    </div>
                </div>
                {isOpen ? <BackDrop onClick={closeModal}/> : null}
            </>
        )
    }
}

export default Modal;