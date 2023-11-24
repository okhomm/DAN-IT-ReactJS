import { createReducer } from '@reduxjs/toolkit'
import * as actions from './actions.js'

const initialState = {
  favoritesItems: [],
  shoppingCartItems: [],
  selectedItemArticle: {},
  products: [],
  categoriesForMen: [],
  categoriesForWomen: [],
  topBrands: [],
  openModalCart: false,
  openModalDelete: false,
  productInfoForModalCart: {},
  checkout: {
    firstName: 'First Name',
    lastName: 'Last Name',
    countryRegion: 'Country / Region',
    companyName: 'Company (optional)',
    streetAddress: 'House number and street name',
    aptSuiteUnit: 'apartment, suite, unit, etc. (optional)',
    city: 'Town / City',
    state: 'State',
    postalCode: 'Postal Code',
    phone: 'Phone'
  }
};

const productsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.actionGetProducts, (state, { payload }) => {
      state.products = payload;
    })
    .addCase(actions.actionGetCategoriesForMen, (state, { payload }) => {
      state.categoriesForMen = payload;
    })
    .addCase(actions.actionGetCategoriesForWoman, (state, { payload }) => {
      state.categoriesForWomen = payload;
    })
    .addCase(actions.actionGetTopBrands, (state, { payload }) => {
      state.topBrands = payload;
    })
    .addCase(actions.actionOpenModalCart, (state) => {
      state.openModalCart = !state.openModalCart;
    })
    .addCase(actions.actionSetProductInfoForModalCart, (state, {payload}) => {
      state.productInfoForModalCart = payload;
    })
    .addCase(actions.actionAddToFavorite, (state, { payload }) => {
      state.favoritesItems = [...state.favoritesItems, payload];
    })
    .addCase(actions.actionRemoveFromFavorite, (state, { payload }) => {
      state.favoritesItems = state.favoritesItems.filter(item => item.article !== payload);
    })
    .addCase(actions.actionAddToShoppingCart, (state, { payload }) => {
      state.shoppingCartItems = [...state.shoppingCartItems, payload];
    })
    .addCase(actions.actionRemoveFromShoppingCart, (state, { payload }) => {
      state.shoppingCartItems = state.shoppingCartItems.filter(item => item.article !== payload);
    })
    .addCase(actions.actionSelectedItemArticle, (state, { payload }) => {
      state.selectedItemArticle = payload;
    })
    .addCase(actions.actionOpenModalDelete, (state) => {
      state.openModalDelete = !state.openModalDelete;
    });
});

export default productsReducer;