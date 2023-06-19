import PropTypes from "prop-types";
import Product from "../Product/Product";
import styles from './ProductList.module.css'

const ProductList = (props) => {
    const {addItemToFavorite, isItemInFavorites, openCartModal, products} = props;

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

ProductList.propTypes = {
    addItemToFavorite: PropTypes.func.isRequired,
    isItemInFavorites: PropTypes.func.isRequired,
    openCartModal: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
}

export default ProductList;