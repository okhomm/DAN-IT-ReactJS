import PropTypes from "prop-types";
import {TfiClose} from 'react-icons/tfi';
import {GiShoppingCart} from "react-icons/gi";
import {TiDelete} from "react-icons/ti";
import BackDrop from "../utilits/backDrop/backDrop";
import Button from "../utilits/Button/Button";
import styles from './ShoppingCartPopup.module.css';
import OpenShoppingCartPageHandler from '../utilits/OpenShoppingCartPageHandler/OpenShoppingCartPageHandler';


const ShoppingCartPopup = (props) => {
    const {closeShoppingCart, shoppingCartItems, removeItemFromCart} = props;

    return (
        <>
            <div className={styles.popup}>
                <div className={styles.header}>
                    <h2>Shopping cart</h2>
                    <TfiClose className={styles.close_icon} onClick={() => closeShoppingCart()}/>
                </div>
                <div className={styles.itemsList}>
                    {shoppingCartItems.length > 0
                        ? <> {shoppingCartItems.map(item => {
                            return (
                                <div className={styles.item} key={item.article}>
                                    <img src={item.image} alt=""/>
                                    <div className={styles.name}>
                                        <h3>{item.name}</h3>
                                    </div>
                                    <span>${item.price}</span>
                                    <TiDelete
                                        className={styles.deleteIcon}
                                        onClick={() => removeItemFromCart(item.article)}
                                        title="Delete"
                                    />
                                </div>
                            )
                        })}
                            <div className={styles.buttonsBlock}>
                                <Button
                                    backgroundColor={'#9f9f9f'}
                                    text="Close"
                                    onClick={() => closeShoppingCart()}
                                />
                                <OpenShoppingCartPageHandler closeShoppingCart={closeShoppingCart}/>
                            </div>

                        </>
                        : <div className={styles.empty}>
                            <GiShoppingCart className={styles.emptyIcon}/>
                            <span>Empty</span>
                        </div>
                    }
                </div>
            </div>
            <BackDrop onClick={() => closeShoppingCart()}/>
        </>
    )

}

ShoppingCartPopup.propTypes = {
    closeShoppingCart: PropTypes.func.isRequired,
    shoppingCartItems: PropTypes.array.isRequired,
    removeItemFromCart: PropTypes.func.isRequired
}

export default ShoppingCartPopup;