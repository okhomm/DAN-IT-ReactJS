import { useDispatch } from 'react-redux';
import { actionOpenModalDelete, actionSetProductInfoForModalCart, actionAddToCartArticle } from '../store/actions';

const useModalDeleteHandler = () => {
  const dispatch = useDispatch();
  const handleModalDelete = (image, name, price, article) => {

    dispatch(actionSetProductInfoForModalCart({image, name, price, article}))
    // dispatch(actionAddToCartArticle({article}))
    dispatch(actionOpenModalDelete());
  };
  return handleModalDelete;
};

export default useModalDeleteHandler;