import React, {useState, useEffect} from 'react';
import FavoriteProductsPage from '../../pages/FavoriteProductsPage/FavoriteProductsPage';
import ShoppingCartPage from '../../pages/ShoppingCartPage/ShoppingCartPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import Modal from "../utilits/Modal/Modal";
import Button from "../utilits/Button/Button";
import NotificationPopup from "../utilits/NotificationPopup/NoficationPopup";

const App = () => {
    const [items, setItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState(() => {
        const storedFavoriteItems = localStorage.getItem('favoriteItems');
        return storedFavoriteItems ? JSON.parse(storedFavoriteItems) : [];
    });
    const [shoppingCartItems, setShoppingCartItems] = useState(() => {
        const storedShoppingCartItems = localStorage.getItem('shoppingCartItems');
        return storedShoppingCartItems ? JSON.parse(storedShoppingCartItems) : [];
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalItemAlreadyInCart, setModalItemAlreadyInCart] = useState(false);
    const [addToCartArticle, setAddToCartArticle] = useState(null);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    useEffect(() => {
        sendRequest('data.json')
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, []);

    useEffect(() => {
        const restoreDataFromLocalStorage = () => {
            const favoriteItems = localStorage.getItem('favoriteItems');
            const shoppingCartItems = localStorage.getItem('shoppingCartItems');

            if (favoriteItems) {
                setFavoriteItems(JSON.parse(favoriteItems));
            }

            if (shoppingCartItems) {
                setShoppingCartItems(JSON.parse(shoppingCartItems));
            }
        };

        restoreDataFromLocalStorage();
    }, []);

    useEffect(() => {
        const saveDataToLocalStorage = () => {
            localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
            localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
        };

        saveDataToLocalStorage();
    }, [favoriteItems, shoppingCartItems]);

    const saveFavoriteItemsToLocalStorage = () => {
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    };

    const restoreFavoriteItemsFromLocalStorage = () => {
        const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
        setFavoriteItems(favoriteItems);
    };

    const restoreShoppingCartItemsFromLocalStorage = () => {
        const shoppingCartItems = JSON.parse(localStorage.getItem('shoppingCartItems')) || [];
        setShoppingCartItems(shoppingCartItems);
    };

    const saveShoppingCartItemsToLocalStorage = () => {
        localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
    };

    const addItemToFavoriteHandler = article => {
        const isAlreadyAdded = favoriteItems.some(item => item.article === article);

        if (isAlreadyAdded) {
            const updatedFavoriteItems = favoriteItems.filter(item => item.article !== article);
            setFavoriteItems(updatedFavoriteItems);
        } else {
            const selectedItem = items.find(item => item.article === article);

            if (selectedItem) {
                setFavoriteItems(prevState => [...prevState, selectedItem]);
            }
        }
    };

    const showModalHandler = article => {
        const isAlreadyAdded = shoppingCartItems.some(item => item.article === article);

        if (isAlreadyAdded) {
            showModalNotificationPopupHandler();
        } else {
            closeModalNotificationPopupHandler();
            setModalIsOpen(true);
            setAddToCartArticle(article);
        }
    };

    const showShoppingCartHandler = () => {
        closeModalNotificationPopupHandler();
        setShowShoppingCart(true);
    };

    const closeShoppingCartHandler = () => {
        setShowShoppingCart(false);
    };

    const closeModalHandler = () => {
        setModalIsOpen(false);
    };

    const showModalNotificationPopupHandler = () => {
        setModalItemAlreadyInCart(true);
    };

    const closeModalNotificationPopupHandler = () => {
        setModalItemAlreadyInCart(false);
    };

    const addItemToShoppingCartHandler = () => {
        const isAlreadyAdded = shoppingCartItems.some(item => item.article === addToCartArticle);

        if (!isAlreadyAdded) {
            const selectedItem = items.find(item => item.article === addToCartArticle);

            if (selectedItem) {
                setShoppingCartItems(prevState => [...prevState, selectedItem]);
            }
        }

        closeModalHandler();
    };

    const removeItemFromCartHandler = article => {
        setShoppingCartItems(prevState =>
            prevState.filter(item => item.article !== article)
        );
    };

    const isItemInFavorites = article => {
        return favoriteItems.some(item => item.article === article);
    };

    return (
        <>
            

            <Header
                favoriteItems={favoriteItems}
                shoppingCartItems={shoppingCartItems}
                showShoppingCart={showShoppingCart}
                showShoppingCartPopup={showShoppingCartHandler}
                closeShoppingCart={closeShoppingCartHandler}
                removeItemFromCart={removeItemFromCartHandler}
            />

            <Routes>
                <Route 
                    path="/" 
                    element={
                        <ProductList
                            products={items}
                            shoppingCartItems={shoppingCartItems}
                            addItemToFavorite={addItemToFavoriteHandler}
                            isItemInFavorites={isItemInFavorites}
                            openCartModal={showModalHandler}
                        />
                    } 
                />
                <Route path="/favorite" element={<FavoriteProductsPage text="test text"/>}/>
                <Route path="/cart" element={<ShoppingCartPage/>} />

            </Routes>

            <Footer/>

            {modalIsOpen && (
                <Modal
                    header="Confirm adding the product to the cart"
                    text="Are you sure you want to add this item to your cart?"
                    closeButton={true}
                    isOpen={modalIsOpen}
                    closeModal={closeModalHandler}
                    actions={
                        <>
                            <Button
                                backgroundColor="#9f9f9f"
                                text="No"
                                onClick={() => closeModalHandler()}
                            />
                            <Button
                                backgroundColor="#f4ce88"
                                text="Yes"
                                onClick={() => addItemToShoppingCartHandler()}
                            />
                        </>
                    }
                />
            )}

            {modalItemAlreadyInCart && (
                <NotificationPopup
                    addToCartArticle={addToCartArticle}
                    closeModalItemAlreadyInCart={closeModalNotificationPopupHandler}
                />
            )}
        </>
    );
};

export default App;
