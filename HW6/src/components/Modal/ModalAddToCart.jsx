import {useSelector } from 'react-redux'
import {  selectOpenModalCart, selectProductInfoForModalCart } from '../../store/selectors'
import ModalCart from '../../components/Modal/ModalCart'
import useAddItemToShoppingCartHandler from '../../hooks/useAddItemToShoppingCart'
import useModalCartHandler from '../../hooks/useModalCartHandler'

const ModalAddToCart = () => {

  const openModalCart = useSelector(selectOpenModalCart)
  const itemInfoForModalCart = useSelector(selectProductInfoForModalCart)

  const addToShoppingCartHandler = useAddItemToShoppingCartHandler()
  const modalCartHandler = useModalCartHandler() 

  return (
    <>
      {openModalCart && (
          <ModalCart
            title="Add this product to your cart?"
            text={`${itemInfoForModalCart.name} - $${itemInfoForModalCart.price}`}
            image={itemInfoForModalCart.img}
            firstButtonText="YES, ADD"
            firstButtonClick={addToShoppingCartHandler}
            secondButtonText="NO, CANCEL"
            secondButtonClick={modalCartHandler}
            closeModal={modalCartHandler}
          />
        )}
    </>
  );
};

export default ModalAddToCart;