import PropTypes from "prop-types";
import BackDrop from "../backDrop/backDrop";
import {TfiClose} from 'react-icons/tfi';
import styles from "./Modal.module.css";

const Modal = (props) => {
    const {header, text, actions, closeButton, closeModal, isOpen} = props;

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

Modal.propsTypes = {
    actions: PropTypes.node.isRequired,
    closeButton: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    header: PropTypes.string,
    text: PropTypes.string
}

Modal.defaultProps = {
    header: 'Modal header text',
    text: 'Modal message text'
}

export default Modal;