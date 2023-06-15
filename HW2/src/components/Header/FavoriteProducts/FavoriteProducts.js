import React, {Component} from "react";
import PropTypes from 'prop-types';
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./FavoriteProducts.module.css";

class FavoriteProducts extends Component{

    static propTypes = {
        favoriteItems: PropTypes.array
    }

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