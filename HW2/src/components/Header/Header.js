import React, {Component} from 'react';

import TopMenu from "./TopMenu/TopMenu";
import Search from "./Search/Search";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import ShoppingCartPopup from "../ShoppingCartPopup/ShoppingCartPopup";
import styles from "./Header.module.css";
import logo from "./logo.png";
class Header extends Component {
    render() {
        const {favoriteItems, shoppingCartItems, showShoppingCartPopup, showShoppingCart, closeShoppingCart, removeItemFromCart} = this.props;
        return (
            <div>
                <TopMenu/>
                <header className={styles.container}>

                    <div className={styles.content}>
                        {showShoppingCart && <ShoppingCartPopup
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
                            <FavoriteProducts
                                favoriteItems={favoriteItems}
                            />
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