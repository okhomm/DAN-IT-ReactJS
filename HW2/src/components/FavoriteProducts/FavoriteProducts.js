import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

import styles from "./FavoriteProducts.module.css";

class FavoriteProducts extends React.Component{
    render() {
        return (
            <div className={styles.box}>
                <MdFavoriteBorder/>
                <div className={styles.counter}>5</div>
            </div>
        )
    }
}

export default FavoriteProducts;