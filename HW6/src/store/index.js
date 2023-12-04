import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers.js'

const customSerialize = (data) => {
  return JSON.stringify(data)
};

const customDeserialize = (serializedData) => {
  return JSON.parse(serializedData)
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoritesItems', 'shoppingCartItems'],
  serialize: customSerialize,
  deserialize: customDeserialize,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store)
export default store;
