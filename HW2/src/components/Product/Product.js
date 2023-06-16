import React, {Component} from 'react';
import PropTypes from "prop-types";
import {MdOutlineShoppingCart, MdFavoriteBorder, MdFavorite} from "react-icons/md";
import styles from './Product.module.css';

class Product extends Component {

    static propTypes = {
        addItemToFavorite: PropTypes.func.isRequired,
        isItemInFavorites: PropTypes.func.isRequired,
        openCartModal: PropTypes.func.isRequired,
        name: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
        article: PropTypes.string,
        color: PropTypes.string
    }

    static defaultProps = {
        name: 'Product name',
        price: 'Product price',
        image: 'Product image',
        article: 'Product article',
        color: 'Product color'
    }

    render() {
        const {
            addItemToFavorite,
            isItemInFavorites,
            openCartModal,
            name,
            price,
            image,
            article,
            color
        } = this.props;

        return (
            <div className={styles.container}>
                <div>
                    <div className={styles.image}>
                        <img src={image} alt=""/>
                    </div>
                </div>
                <button
                    className={styles.favorite}
                    onClick={() => addItemToFavorite(article)}
                    title="add to favorite">
                    {isItemInFavorites(article) ? <MdFavorite/> : <MdFavoriteBorder/>}
                </button>
                <div className={styles.title}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.footer}>
                    <span className={styles.price}>{price}</span>
                    <button
                        className={styles.shoppingCart}
                        onClick={() => openCartModal(article)}
                        title="Add to cart">
                        <MdOutlineShoppingCart/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Product;