import React from 'react';
import Product from "../Product/Product";
import styles from './ProductList.module.css';

class ProductList extends React.Component {
    render() {
        return (
            <main className={styles.container}>
                <h2>Laptops</h2>
                <hr/>
                <div className={styles.grid}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </main>
        )
    }
}

export default ProductList;