import { useDispatch } from 'react-redux';
import { actionOpenModalDelete, actionSetProductInfoForModalCart, actionSelectedItemArticle } from '../store/actions';

const useModalDeleteHandler = () => {
  const dispatch = useDispatch();
  const handleModalDelete = (image, name, price, article) => {
    dispatch(actionSelectedItemArticle({ article }))
    dispatch(actionSetProductInfoForModalCart({ image, name, price, article }))
    dispatch(actionOpenModalDelete());
  };
  return handleModalDelete;
};

export default useModalDeleteHandler;