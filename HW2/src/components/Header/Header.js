import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TopMenu from "./TopMenu/TopMenu";
import Search from "./Search/Search";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShoppingCartPopup from "../ShoppingCartPopup/ShoppingCartPopup";
import styles from "./Header.module.css";
import logo from "./logo.png";

class Header extends Component {

    static propTypes = {
        favoriteItems: PropTypes.array,
        shoppingCartItems: PropTypes.array,
        showShoppingCartPopup: PropTypes.func,
        showShoppingCart: PropTypes.bool,
        closeShoppingCart: PropTypes.func,
        removeItemFromCart: PropTypes.func
    };

    render() {
        const {
            favoriteItems,
            shoppingCartItems,
            showShoppingCartPopup,
            showShoppingCart,
            closeShoppingCart,
            removeItemFromCart
        } = this.props;

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
                            <a href="/">
                                <img src={logo} alt="logo"/>
                            </a>
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
}

export default Header;