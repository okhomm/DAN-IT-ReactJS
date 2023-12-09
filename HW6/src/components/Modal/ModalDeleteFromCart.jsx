import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {selectOpenModalDelete, selectProductInfoForModalCart, selectSelectedItemArticle} from '../../store/selectors'
import {actionRemoveFromShoppingCart} from '../../store/actions'
import ModalCart from '../../components/Modal/ModalCart'
import useModalDeleteHandler from '../../hooks/useModalDeleteHandler'


const ModalDeleteFromCart = () => {
  const dispatch = useDispatch()
  const openModalDelete = useSelector(selectOpenModalDelete)
  const itemInfoForModalCart = useSelector(selectProductInfoForModalCart)
  const modalDeleteHandler = useModalDeleteHandler()
  const itemForRemoveFromShoppingCart = useSelector(selectSelectedItemArticle)

  const removeItemFromShoppingCartHandler = () => {
    const article = itemForRemoveFromShoppingCart.article
    dispatch(actionRemoveFromShoppingCart(article))
    modalDeleteHandler()
  }

  return (
    <>
      {openModalDelete && (
          <ModalCart
            title="Product Delete!"
            text={`${itemInfoForModalCart.name} - $${itemInfoForModalCart.price}`}
            image={itemInfoForModalCart.image}
            firstButtonText="NO, CANCEL"
            firstButtonClick={modalDeleteHandler}
            secondButtonText="YES, DELETE"
            secondButtonClick={() => removeItemFromShoppingCartHandler()}
            closeModal={modalDeleteHandler}
          />
        )}
    </>
  );
};

export default ModalDeleteFromCart;