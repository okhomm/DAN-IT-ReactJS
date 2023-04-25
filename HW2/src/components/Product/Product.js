import React from 'react';
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";

import styles from './Product.module.css';
class Product extends React.Component {
    render () {
        return (
            <div className={styles.container}>
                <div className={styles.image}>
                    <div style={{backgroundColor: 'gray', width: '100%', height: '250px' }}></div>
                    <button className={styles.favorite}>
                        <MdFavoriteBorder/>
                    </button>
                </div>
                <h3>ASUS TUF Gaming F15 FX506LU-HN147 Laptop</h3>
                <div className={styles.footer}>
                    <span className={styles.price}>1799</span>
                    <button className={styles.shoppingCart}>
                        <MdOutlineShoppingCart/>
                    </button>
                </div>
            </div>
            )


    }
}

export default Product;