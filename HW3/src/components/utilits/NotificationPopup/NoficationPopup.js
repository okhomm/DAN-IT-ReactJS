import PropTypes from "prop-types";
import {TfiClose} from 'react-icons/tfi';
import BackDrop from "../backDrop/backDrop";
import styles from './NotificationPopup.module.css';

const NotificationPopup = (props) => {
    const {addToCartArticle, closeModalItemAlreadyInCart} = props;

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

NotificationPopup.propTypes = {
    closeModalItemAlreadyInCart: PropTypes.func.isRequired,
    addToCartArticle: PropTypes.string
}

NotificationPopup.defaultProps = {
    addToCartArticle: 'Product article'
}

export default NotificationPopup;