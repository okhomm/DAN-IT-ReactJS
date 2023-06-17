import React, {Component} from "react";
import styles from './Search.module.css';

class Search extends Component {
    render() {
        return (
            <div className={styles.box}>
                <input type="text" placeholder="Enter the name of the product"/>
                <button>Search</button>
            </div>
        )
    }
}

export default Search;