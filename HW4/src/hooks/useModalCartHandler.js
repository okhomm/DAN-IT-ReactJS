import { useDispatch } from 'react-redux';
import { actionOpenModalCart, actionSetProductInfoForModalCart } from '../store/actions';

const useModalCartHandler = () => {
  const dispatch = useDispatch();

  const handleModalCart = (img, name, price, article) => {

    dispatch(actionSetProductInfoForModalCart({img, name, price, article}))
    dispatch(actionOpenModalCart());
    // setOpenModalCart(!openModalCart)
    // showProductInModalCart(img, name, price)
    // setAddToCartArticle(article)

  };

  return handleModalCart;
};

export default useModalCartHandler;