import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopMenu from "./TopMenu/TopMenu";
import Search from "./Search/Search";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShoppingCartPopup from "../ShoppingCartPopup/ShoppingCartPopup";
import styles from "./Header.module.css";
import logo from "./logo.png";

const Header = (props) => {
    const {
        favoriteItems,
        shoppingCartItems,
        showShoppingCartPopup,
        showShoppingCart,
        closeShoppingCart,
        removeItemFromCart
    } = props;

    return (
        <div>
            <TopMenu/>
            <header className={styles.container}>
                <div className={styles.content}>
                    {showShoppingCart &&
                        <ShoppingCartPopup
                            closeShoppingCart={closeShoppingCart}
                            shoppingCartItems={shoppingCartItems}
                            removeItemFromCart={removeItemFromCart}
                        />}
                    <div className={styles.leftBox}>
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                        <Search/>
                    </div>
                    <div className={styles.rightBox}>
                        <FavoriteProducts favoriteItems={favoriteItems}/>
                        <ShoppingCart
                            shoppingCartItems={shoppingCartItems}
                            showShoppingCartPopup={showShoppingCartPopup}
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.propTypes = {
    favoriteItems: PropTypes.array.isRequired,
    shoppingCartItems: PropTypes.array.isRequired,
    showShoppingCartPopup: PropTypes.func.isRequired,
    showShoppingCart: PropTypes.bool.isRequired,
    closeShoppingCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired
}

export default Header;