import { useDispatch } from 'react-redux';
import { actionOpenModalCart, actionSetProductInfoForModalCart, actionAddToCartArticle } from '../store/actions';

const useModalCartHandler = () => {
  const dispatch = useDispatch();
  const handleModalCart = (img, name, price, article) => {

    dispatch(actionSetProductInfoForModalCart({img, name, price, article}))
    dispatch(actionAddToCartArticle({article}))
    dispatch(actionOpenModalCart());
  };
  return handleModalCart;
};

export default useModalCartHandler;