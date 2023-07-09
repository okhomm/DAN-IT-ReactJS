import React from 'react';
import PageTitle from '../../components/utilits/PageTitle/PageTitle';
import ShoppingCartItemsTable from '../../components/utilits/ShoppingCartItemsTable/ShoppingCartItemsTable';
import styles from './ShoppingCartPage.module.css';
import EmptyPage from "../../components/utilits/EmptyPage/EmptyPage";

const ShoppingCartPage = (props) => {
    const { shoppingCartItems, removeItemFromCart, totalSumOfItemsInCart } = props;

    const itemsArePresent = <div className={styles.container}>
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Color</th>
                <th>Article</th>
                <th>Price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <ShoppingCartItemsTable
                shoppingCartItems={shoppingCartItems}
                removeItemFromCart={removeItemFromCart}
            />
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>
                    {totalSumOfItemsInCart(shoppingCartItems)}
                </td>
                <td></td>
            </tr>

            </tfoot>
        </table>
    </div>;
    const noItems = <EmptyPage pageTitle="No products" pageName="cart"/>

    return (
        <>
            <PageTitle title="Shopping cart" />
            {shoppingCartItems.length > 0 ? itemsArePresent : noItems}

        </>
    );
};

export default ShoppingCartPage;
