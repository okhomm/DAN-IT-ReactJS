import React from 'react';
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";
import styles from './Product.module.css';
class Product extends React.Component {
    render () {
        const {name, price, image, article, color} = this.props;
        return (
            <div className={styles.container}>
                <div>
                    <div className={styles.image}><img src={image} alt=""/></div>
                </div>
                <button className={styles.favorite} title="add to favorite">
                    <MdFavoriteBorder/>
                </button>
                <div className={styles.title}>
                    <h3>{name}</h3>
                </div>
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