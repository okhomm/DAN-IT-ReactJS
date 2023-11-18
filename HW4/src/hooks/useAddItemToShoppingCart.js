import { useDispatch, useSelector } from 'react-redux';
import { actionOpenModalCart, actionAddToShoppingCart } from '../store/actions';
import { selectSelectedItemArticle, selectProducts, selectShoppingCartItems } from '../store/selectors';

const useAddItemToShoppingCart = () => {
  const dispatch = useDispatch()
  const productList = useSelector(selectProducts)
  const shoppingCartItems = useSelector(selectShoppingCartItems)
  const addToCartArticleObj = useSelector(selectSelectedItemArticle)
  const addToCartArticle = addToCartArticleObj.article

  const handleModalCart = () => {
    const isAlreadyAdded = shoppingCartItems.some(
      (item) => item.article === addToCartArticle
    );

    if (!isAlreadyAdded) {
      const selectedItem = productList.find(
        (item) => item.article === addToCartArticle
      );

      if (selectedItem) {
        dispatch(actionAddToShoppingCart(selectedItem))
      }
    }

    dispatch(actionOpenModalCart())
  };

  return handleModalCart;
};

export default useAddItemToShoppingCart
