import React from 'react';
import {TiDelete} from "react-icons/ti";
import styles from './ShoppingCartItemsTable.module.css';

const ShoppingCartItemsTable = (props) => {
    const { shoppingCartItems, removeItemFromCart } = props;
    return (
        <>
            {shoppingCartItems.map(({ name, price, image, article, color, ...others }) => (
                <tr key={article}>
                    <td><img src={image} alt={name} /></td>
                    <td className={styles.name}>{name}</td>
                    <td>{color}</td>
                    <td>{article}</td>
                    <td>{`$${price}`}</td>
                    <td>
                        <TiDelete
                            className={styles.deleteIcon}
                            onClick={() => removeItemFromCart(article)}
                            title="Delete"
                        />
                    </td>
                </tr>
            ))}
        </>
    );
};

export default ShoppingCartItemsTable;
