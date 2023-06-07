import React, { Component } from 'react';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

class App extends Component {
    state = {
        items: [],
        favoriteItems: [],
    };

    componentDidMount() {
        sendRequest('data.json')
            .then(data => {
                this.setState(
                    {
                        items: data,
                    },
                    () => {
                        this.restoreFavoriteItemsFromLocalStorage();
                    }
                );
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.favoriteItems !== this.state.favoriteItems) {
            this.saveFavoriteItemsToLocalStorage();
        }
    }

    saveFavoriteItemsToLocalStorage = () => {
        localStorage.setItem('favoriteItems', JSON.stringify(this.state.favoriteItems));
    };

    restoreFavoriteItemsFromLocalStorage = () => {
        const favoriteItems = localStorage.getItem('favoriteItems');
        if (favoriteItems) {
            this.setState({
                favoriteItems: JSON.parse(favoriteItems),
            });
        }
    };

    addItemToFavoriteHandler = article => {
        const { favoriteItems, items } = this.state;
        const isAlreadyAdded = favoriteItems.some(item => item.article === article);

        if (isAlreadyAdded) {
            const updatedFavoriteItems = favoriteItems.filter(item => item.article !== article);

            this.setState(
                {
                    favoriteItems: updatedFavoriteItems,
                },
                () => {
                    this.saveFavoriteItemsToLocalStorage();
                }
            );
        } else {
            const selectedItem = items.find(item => item.article === article);

            if (selectedItem) {
                this.setState(
                    prevState => ({
                        favoriteItems: [...prevState.favoriteItems, selectedItem],
                    }),
                    () => {
                        this.saveFavoriteItemsToLocalStorage();
                    }
                );
            }
        }
    };

    isItemInFavorites = article => {
        const { favoriteItems } = this.state;
        return favoriteItems.some(item => item.article === article);
    };

    render() {
        const products = this.state.items;

        return (
            <>
                <Header favoriteItems={this.state.favoriteItems} />
                <ProductList
                    products={products}
                    addItemToFavorite={this.addItemToFavoriteHandler}
                    isItemInFavorites={this.isItemInFavorites}
                />
                <Footer />
            </>
        );
    }
}

export default App;
