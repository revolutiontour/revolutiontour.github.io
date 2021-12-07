import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './saga';
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  whitelist:['member'],
  storage,
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = ({ isServer }) => {
  if (isServer) {
  //If it's on server side, create a store
  return createStore(rootReducer,initialState, bindMiddleware(middleware));
  } else {
  //If it's on client side, create a store which will persis
  const persistConfig = {
    key: "root",
    storage: storage,
    whiteList: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer,initialState, bindMiddleware(middleware));
  store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
  return store;
  }
  };
  // export an assembled wrapper
  export const wrapper = createWrapper(makeStore);

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
