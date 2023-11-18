// Ваш компонент або хук
import { useDispatch } from 'react-redux';
import { actionOpenModalDelete, actionSetProductInfoForModalCart, actionRemoveFromShoppingCart } from '../store/actions';

const useRemoveItemFromShoppingCart = () => {
  const dispatch = useDispatch();

  const handleModalDelete = (image, name, price, article) => {
    dispatch(actionSetProductInfoForModalCart({ image, name, price, article }));
    dispatch(actionRemoveFromShoppingCart({ article }));
    dispatch(actionOpenModalDelete());
  };

  return handleModalDelete;
};

export default useRemoveItemFromShoppingCart;
