import React, {Component} from 'react';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends Component {

    state = {
        items: [],
        favoriteItems: []
    }

    addItemToFavoriteHandler (article) {
        console.log('Product article:', article)
    };

    componentDidMount() {
        sendRequest('data.json')
            .then(data => {
                this.setState({
                    items: data
                })
            })
    };

    render() {
        const products = this.state.items;
        return (
            <>
                <Header/>
                <ProductList
                    products={products}
                    addItemToFavorite={this.addItemToFavoriteHandler}/>
                <Footer/>
            </>
        )
    }
}

export default App;