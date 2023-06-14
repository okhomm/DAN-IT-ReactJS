import React, {Component} from 'react';
import Product from "../Product/Product";
import styles from './ProductList.module.css'

class ProductList extends Component {
    render() {
        const products = this.props.products;
        const {addItemToFavorite, isItemInFavorites, openCartModal} = this.props;

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