import styles from './FavoriteProductsPage.module.css';

const FavoriteProductsPage = (props) => {
    const {text} = props;
    return (
        <h2>{text}</h2>
    )
}

export default FavoriteProductsPage;