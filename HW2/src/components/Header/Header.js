import React from 'react';
import TopMenu from "../TopMenu/TopMenu";
import Search from "../Search/Search";
import FavoriteProducts from "../FavoriteProducts/FavoriteProducts";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import styles from "./Header.module.css";
import logo from "./logo.png";
class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <TopMenu/>
                <div className={styles.container}>
                    <img src={logo} alt="logo"/>
                        <Search/>
                        <FavoriteProducts/>
                        <ShoppingCart/>
                </div>

            </header>

        )
    }
}

export default Header;