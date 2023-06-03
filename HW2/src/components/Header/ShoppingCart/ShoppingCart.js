import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import styles from './ShoppingCart.module.css';

class ShoppingCart extends React.Component{
    render() {
        return (
            <div className={styles.box}>
                <MdOutlineShoppingCart/>
                <div className={styles.counter}>1</div>
            </div>
        )
    }
}

export default ShoppingCart;