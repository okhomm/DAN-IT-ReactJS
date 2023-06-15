import React, {Component} from 'react';
import PropTypes from "prop-types";
import Product from "../Product/Product";
import styles from './ProductList.module.css'

class ProductList extends Component {

    static propTypes = {
        addItemToFavorite: PropTypes.func,
        isItemInFavorites: PropTypes.func,
        openCartModal: PropTypes.func,
        products: PropTypes.array
    }

    render() {
        const {addItemToFavorite, isItemInFavorites, openCartModal, products} = this.props;

        return (
            <main className={styles.container}>
                <h2>Laptops</h2>
                <hr/>
                <div className={styles.grid}>
                    {products.map(({name, price, image, article, color, ...others}) => {
                        return (
                            <Product
                                key={article}
                                name={name}
                                price={price}
                                image={image}
                                article={article}
                                color={color}
                                addItemToFavorite={addItemToFavorite}
                                isItemInFavorites={isItemInFavorites}
                                openCartModal={openCartModal}
                            />
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default ProductList;