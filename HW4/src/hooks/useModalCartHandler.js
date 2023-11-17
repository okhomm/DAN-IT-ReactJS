import { useDispatch } from 'react-redux';
import { actionOpenModalCart, actionSetProductInfoForModalCart } from '../store/actions';

const useModalCartHandler = () => {
  const dispatch = useDispatch();

  const handleModalCart = (img, name, price, article) => {

    dispatch(actionSetProductInfoForModalCart({img, name, price, article}))
    dispatch(actionOpenModalCart());
    // setAddToCartArticle(article)

  };

  return handleModalCart;
};

export default useModalCartHandler;