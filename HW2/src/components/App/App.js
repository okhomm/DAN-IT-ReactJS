import React, {Component} from 'react';
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
        shoppingCart: [],
        modalIsOpen: false,
        article: null
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

    showModalHandler = (article) => {
        this.setState({
            modalIsOpen: true,
            article: article
        })
    }

    closeModalHandler = () => {
        this.setState({
            modalIsOpen: false
        })
    }


    // addItemToShoppingCartHandler = article => {
    //     const {shoppingCart, item} = this.state;
    //     const isAlreadyAdded = favoriteItems.some(item => item.article === article);
    // }

    testingHandler = () => {
        alert(this.state.article)
    }

    isItemInFavorites = article => {
        const {favoriteItems} = this.state;
        return favoriteItems.some(item => item.article === article);
    };



    render() {
        const products = this.state.items;

        return (
            <>
                <Header favoriteItems={this.state.favoriteItems}/>
                <ProductList
                    products={products}
                    addItemToFavorite={this.addItemToFavoriteHandler}
                    isItemInFavorites={this.isItemInFavorites}
                    openCartModal={this.showModalHandler}
                />
                <Footer/>
                {this.state.modalIsOpen && <Modal
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
                                onClick={() => this.testingHandler()}
                            />

                        </>
                    }
                />}
            </>
        );
    }
}

export default App;
