import { useDispatch } from 'react-redux';
import { actionOpenModalCart, actionSetProductInfoForModalCart, actionSelectedItemArticle } from '../store/actions';

const useModalCartHandler = () => {
  const dispatch = useDispatch();
  const handleModalCart = (img, name, price, article) => {

    dispatch(actionSetProductInfoForModalCart({ img, name, price, article }))
    dispatch(actionSelectedItemArticle({ article }))
    dispatch(actionOpenModalCart());
  };
  return handleModalCart;
};

export default useModalCartHandler;