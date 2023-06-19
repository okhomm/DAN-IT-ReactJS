import PropTypes from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './ShoppingCart.module.css';

const ShoppingCart = (props) => {
    const {shoppingCartItems, showShoppingCartPopup} = props;

    return (
        <div className={styles.box}>
            <MdOutlineShoppingCart onClick={() => showShoppingCartPopup()}/>
            <div className={styles.counter}>{shoppingCartItems.length}</div>
        </div>
    )
}

ShoppingCart.propTypes = {
    shoppingCartItems: PropTypes.array,
    showShoppingCartPopup: PropTypes.func
}

export default ShoppingCart;