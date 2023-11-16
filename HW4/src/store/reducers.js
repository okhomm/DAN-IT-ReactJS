import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions.js';

const initialState = {
  favorites: [],
  products: [],
  categoriesForMen: [],
  categoriesForWomen: [],
  topBrands: [],
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
    });
});

export default productsReducer;