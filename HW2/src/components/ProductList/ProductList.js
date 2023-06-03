import React, {Component} from 'react';
import Product from "../Product/Product";
import styles from './ProductList.module.css'
import product from "../Product/Product";

class ProductList extends Component {
    render() {
        const products = this.props.products;
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
                                color={color}/>
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default ProductList;