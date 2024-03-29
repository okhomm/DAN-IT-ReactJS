import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./FavoriteProducts.module.css";

const FavoriteProducts = (props) => {
        const {favoriteItems} = props;

        return (
            <div className={styles.box}>
                <Link to='/favorite'><MdFavoriteBorder/></Link>
                <div className={styles.counter}>{favoriteItems.length}</div>
            </div>
        )
}

FavoriteProducts.propTypes = {
    favoriteItems: PropTypes.array.isRequired,
};

export default FavoriteProducts;