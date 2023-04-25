import React from "react";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";

import styles from "./App.module.css"

class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Header/>
                <ProductList/>
            </div>
        )
    }
}

export default App;