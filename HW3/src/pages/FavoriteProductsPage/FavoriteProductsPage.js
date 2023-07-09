import PageTitle from "../../components/utilits/PageTitle/PageTitle";
import Product from "../../components/Product/Product";
import styles from './FavoriteProductsPage.module.css';
import EmptyPage from '../../components/utilits/EmptyPage/EmptyPage';
import PropTypes from "prop-types";


const FavoriteProductsPage = (props) => {
    const { favoriteItems, addItemToFavorite, isItemInFavorites, openCartModal} = props;

    const itemsArePresent =
        <div className={styles.grid}>
            {favoriteItems.map(({name, price, image, article, color, ...others}) => {
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

    const noItems = <EmptyPage pageTitle="No favorite products" pageName="favorite"/>

    return (
        <>
            <PageTitle title="Favorite products"/>
            {favoriteItems.length > 0 ? itemsArePresent : noItems}
         </>
    )

}

FavoriteProductsPage.propTypes = {
    favoriteItems: PropTypes.array.isRequired,
    addItemToFavorite: PropTypes.func.isRequired,
    isItemInFavorites: PropTypes.func.isRequired,
    openCartModal: PropTypes.func.isRequired,

}

export default FavoriteProductsPage;