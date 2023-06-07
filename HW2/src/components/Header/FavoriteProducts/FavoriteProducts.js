import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

import styles from "./FavoriteProducts.module.css";

class FavoriteProducts extends React.Component{
    render() {
        const favoriteItems = this.props.favoriteItems;
        return (
            <div className={styles.box}>
                <MdFavoriteBorder/>
                <div className={styles.counter}>{favoriteItems.length}</div>
            </div>
        )
    }
}

export default FavoriteProducts;