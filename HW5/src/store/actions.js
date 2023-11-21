import { createAction } from "@reduxjs/toolkit"
import sendRequest from "../helpers/sendRequest"

export const actionAddToFavorite = createAction("ACTION_ADD_TO_FAVORITE")
export const actionRemoveFromFavorite = createAction("ACTION_REMOVE_FROM_FAVORITE")
export const actionAddToShoppingCart = createAction("ACTION_ADD_TO_SHOPPING_CART")
export const actionRemoveFromShoppingCart = createAction("ACTION_REMOVE_FROM_SHOPPING_CART")
export const actionSelectedItemArticle = createAction("ACTION_SELECTED_ITEM_ARTICLE")
export const actionGetProducts = createAction("ACTION_GET_PRODUCTS")
export const actionGetCategoriesForMen = createAction("ACTION_GET_CATEGORIES_FOR_MAN")
export const actionGetCategoriesForWoman = createAction("ACTION_GET_CATEGORIES_FOR_WOMEN")
export const actionGetTopBrands = createAction("ACTION_GET_TOP_BRANDS")
export const actionOpenModalCart = createAction("ACTION_OPEN_MODAL_CART")
export const actionOpenModalDelete = createAction("ACTION_OPEN_MODAL_DELETE")
export const actionSetProductInfoForModalCart = createAction("ACTION_SET_PRODUCT_INFO_FOR_MODAL_CART")


export const actionFetchProducts = () => (dispatch) => {
  return sendRequest('data.json')
    .then((data) => {
      dispatch(actionGetProducts(data))
    })
}

export const actionFetchCategoriesForMen = () => (dispatch) => {
  return sendRequest('data-categories-men.json')
    .then((data) => {
      dispatch(actionGetCategoriesForMen(data))
    })
}

export const actionFetchCategoriesForWomen = () => (dispatch) => {
  return sendRequest('data-categories-women.json')
    .then((data) => {
      dispatch(actionGetCategoriesForWoman(data))
    })
}

export const actionFetchTopBrands = () => (dispatch) => {
  return sendRequest('top-brands.json')
    .then((data) => {
      dispatch(actionGetTopBrands(data))
    })
}