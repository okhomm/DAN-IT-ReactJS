import React from 'react';
import Product from "../Product/Product";
import styles from './ProductList.module.css';

class ProductList extends React.Component {

    render() {
        const {products} = this.props;
        console.log(products.products[0].name)

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