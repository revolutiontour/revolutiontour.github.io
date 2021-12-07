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

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]))
  store.__persistor = persistStore(store)

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
