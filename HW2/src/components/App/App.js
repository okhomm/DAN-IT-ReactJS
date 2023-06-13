import React, { Component } from 'react';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import Modal from "../utilits/Modal/Modal";
import Button from "../utilits/Button/Button";
import styles from './App.module.css';

class App extends Component {
    state = {
        items: [],
        favoriteItems: [],
        shoppingCartItems: [],
        modalIsOpen: false,
        addToCartArticle: null,
        showShoppingCart: false
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
                        this.restoreShoppingCartItemsFromLocalStorage(); // Move it here
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
        if (prevState.shoppingCartItems !== this.state.shoppingCartItems) {
            this.saveShoppingCartItemsToLocalStorage();
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

    restoreShoppingCartItemsFromLocalStorage = () => {
        const shoppingCartItems = localStorage.getItem('shoppingCartItems');
        if (shoppingCartItems) {
            this.setState({
                shoppingCartItems: JSON.parse(shoppingCartItems),
            });
        }
    };

    saveShoppingCartItemsToLocalStorage = () => {
        localStorage.setItem('shoppingCartItems', JSON.stringify(this.state.shoppingCartItems));
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

    showModalHandler = article => {
        this.setState({
            modalIsOpen: true,
            addToCartArticle: article,
        });
    };

    showShoppingCartHandler = () => {
        this.setState({
            showShoppingCart: true
        })
    }

    closeShoppingCartHandler = () => {
        this.setState({
            showShoppingCart: false
        })
    };
    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false,
        });
    };

    addItemToShoppingCartHandler = () => {
        const { shoppingCartItems, items, addToCartArticle } = this.state;
        const isAlreadyAdded = shoppingCartItems.some(item => item.article === addToCartArticle);

        if (isAlreadyAdded) {
            alert('This item is already in your cart.');
        } else {
            const selectedItem = items.find(item => item.article === addToCartArticle);

            if (selectedItem) {
                this.setState(
                    prevState => ({
                        shoppingCartItems: [...prevState.shoppingCartItems, selectedItem],
                    }),
                    () => {
                        this.saveShoppingCartItemsToLocalStorage();
                    }
                );
            }
        }

        this.closeModalHandler();
    };

    removeItemFromCartHandler = (article) => {
        this.setState(prevState => ({
            shoppingCartItems: prevState.shoppingCartItems.filter(item => item.article !== article),
        }), () => {
            this.saveShoppingCartItemsToLocalStorage();
        });
    }


    isItemInFavorites = article => {
        const { favoriteItems } = this.state;
        return favoriteItems.some(item => item.article === article);
    };

    render() {
        const products = this.state.items;

        return (
            <>
                <Header
                    favoriteItems={this.state.favoriteItems}
                    shoppingCartItems={this.state.shoppingCartItems}
                    showShoppingCartPopup={this.showShoppingCartHandler}
                    closeShoppingCart={this.closeShoppingCartHandler}
                    showShoppingCart={this.state.showShoppingCart}
                    removeItemFromCart={this.removeItemFromCartHandler}
                />

                <ProductList
                    products={products}
                    addItemToFavorite={this.addItemToFavoriteHandler}
                    isItemInFavorites={this.isItemInFavorites}
                    shoppingCartItems={this.state.shoppingCartItems}
                    openCartModal={this.showModalHandler}
                />
                <Footer />
                {this.state.modalIsOpen && (
                    <Modal
                        header="Confirm adding the product to the cart"
                        closeButton={true}
                        text="Are you sure you want to add this item to your cart?"
                        closeModal={this.closeModalHandler}
                        isOpen={this.state.modalIsOpen}
                        actions={
                            <>
                                <Button
                                    backgroundColor="#9f9f9f"
                                    text="No"
                                    onClick={() => this.closeModalHandler()}
                                />
                                <Button
                                    backgroundColor="#f4ce88"
                                    text="Yes"
                                    onClick={() => this.addItemToShoppingCartHandler()}
                                />
                            </>
                        }
                    />
                )}
            </>
        );
    }
}

export default App;
