import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.box}>
            <input type="text" placeholder="Enter the name of the product"/>
            <button>Search</button>
        </div>
    )
}

export default Search;