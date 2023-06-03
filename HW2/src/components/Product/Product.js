import React from 'react';
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import styles from './Product.module.css';
class Product extends React.Component {
    render () {
        const {name, price, image, article, color} = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.image}>
                    <div className={styles.image}><img src={image} alt=""/></div>
                    <button className={styles.favorite}>
                        <MdFavoriteBorder/>
                    </button>
                </div>
                <h3>{name}</h3>
                <div className={styles.footer}>
                    <span className={styles.price}>{price}</span>
                    <button className={styles.shoppingCart}>
                        <MdOutlineShoppingCart/>
                    </button>
                </div>
            </div>
            )


    }
}

export default Product;