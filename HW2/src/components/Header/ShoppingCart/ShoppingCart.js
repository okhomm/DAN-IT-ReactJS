import React, {Component} from "react";
import PropTypes from "prop-types";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './ShoppingCart.module.css';

class ShoppingCart extends Component{

    static propTypes = {
        shoppingCartItems: PropTypes.array,
        showShoppingCartPopup: PropTypes.func
    }

    render() {
        const {shoppingCartItems, showShoppingCartPopup} = this.props;
        return (
            <div className={styles.box}>
                <MdOutlineShoppingCart onClick={() => showShoppingCartPopup()}/>
                <div className={styles.counter}>{shoppingCartItems.length}</div>
            </div>
        )
    }
}

export default ShoppingCart;