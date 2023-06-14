import React, {Component} from 'react';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import Modal from "../utilits/Modal/Modal";
import Button from "../utilits/Button/Button";
import NotificationPopup from "../utilits/NotificationPopup/NoficationPopup";
import styles from './App.module.css';

class App extends Component {
    state = {
        items: [],
        favoriteItems: [],
        shoppingCartItems: [],
        modalIsOpen: false,
        modalItemAlreadyInCart: false,
        addToCartArticle: null,
        showShoppingCart: false,
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
                        this.restoreShoppingCartItemsFromLocalStorage();
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
        const {favoriteItems, items} = this.state;
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
        const {shoppingCartItems, items, addToCartArticle} = this.state;
        const isAlreadyAdded = shoppingCartItems.some(item => item.article === article);

        if (isAlreadyAdded) {
            this.showModalNotificationPopupHandler();

        } else {
            this.closeModalNotificationPopupHandler();
            this.setState({
                modalIsOpen: true,
                addToCartArticle: article,
            });
        }
    };

    showShoppingCartHandler = () => {
        this.closeModalNotificationPopupHandler();
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

    showModalNotificationPopupHandler = () => {
        this.setState({
            modalItemAlreadyInCart: true
        });
    }

    closeModalNotificationPopupHandler = () => {
        this.setState({
            modalItemAlreadyInCart: false,
        });
    }

    addItemToShoppingCartHandler = () => {
        const {shoppingCartItems, items, addToCartArticle} = this.state;
        const isAlreadyAdded = shoppingCartItems.some(item => item.article === addToCartArticle);

        if (isAlreadyAdded) {


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
        const {favoriteItems} = this.state;
        return favoriteItems.some(item => item.article === article);
    };

    render() {
        const products = this.state.items;
        const {
            favoriteItems,
            modalIsOpen,
            shoppingCartItems,
            showShoppingCart,
            addToCartArticle
        } = this.state;

        return (
            <>
                <Header
                    favoriteItems={favoriteItems}
                    shoppingCartItems={shoppingCartItems}
                    showShoppingCart={showShoppingCart}
                    showShoppingCartPopup={this.showShoppingCartHandler}
                    closeShoppingCart={this.closeShoppingCartHandler}
                    removeItemFromCart={this.removeItemFromCartHandler}
                />

                <ProductList
                    products={products}
                    shoppingCartItems={shoppingCartItems}
                    addItemToFavorite={this.addItemToFavoriteHandler}
                    isItemInFavorites={this.isItemInFavorites}
                    openCartModal={this.showModalHandler}
                />
                <Footer/>

                {this.state.modalIsOpen && (
                    <Modal
                        header="Confirm adding the product to the cart"
                        text="Are you sure you want to add this item to your cart?"
                        closeButton={true}
                        isOpen={modalIsOpen}
                        closeModal={this.closeModalHandler}
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

                {this.state.modalItemAlreadyInCart && (
                    <NotificationPopup
                        addToCartArticle={addToCartArticle}
                        closeModalItemAlreadyInCart={this.closeModalNotificationPopupHandler}
                    />
                )}
            </>
        );
    }
}

export default App;
