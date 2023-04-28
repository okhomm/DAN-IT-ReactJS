import React from "react";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";


import styles from "./App.module.css"


class App extends React.Component {

    state = {
        products: [],
    }
    constructor() {
        super();
        this.getData();
    }
    getData() {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <Header/>
                <ProductList products={this.state.products}/>
            </div>
        )
    }
}

export default App;