import React, {Component} from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from './ShoppingCart.module.css';

class ShoppingCart extends Component{
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