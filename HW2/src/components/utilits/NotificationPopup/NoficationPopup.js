import React, {Component} from 'react';
import {TfiClose} from 'react-icons/tfi';
import BackDrop from "../backDrop/backDrop";
import styles from './NotificationPopup.module.css';

class NotificationPopup extends Component {
    render() {
        const {addToCartArticle, closeModalItemAlreadyInCart} = this.props;
        return (
            <>
                <div className={styles.active}>
                    <h2>The product {addToCartArticle} has already been added to the cart before</h2>
                    <TfiClose
                        className={styles.closeBtn}
                        onClick={() => closeModalItemAlreadyInCart()}
                    />
                </div>
                <BackDrop onClick={() => closeModalItemAlreadyInCart()}/>
            </>
        )
    }
}

export default NotificationPopup;