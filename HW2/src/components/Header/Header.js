import React, {Component} from 'react';

import TopMenu from "./TopMenu/TopMenu";
import Search from "./Search/Search";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

import styles from "./Header.module.css";
import logo from "./logo.png";
class Header extends Component {
    render() {
        return (
            <header className={styles.container}>
                <TopMenu/>
                <div className={styles.content}>
                    <div className={styles.leftBox}>
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                        <Search/>
                    </div>
                    <div className={styles.rightBox}>
                        <FavoriteProducts/>
                        <ShoppingCart/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;