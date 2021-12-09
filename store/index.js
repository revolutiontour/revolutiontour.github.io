import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './saga';
import { createWrapper } from "next-redux-wrapper";
import storage from 'redux-persist/lib/storage';
// import storage from './sync_storage';


const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = ({ isServer }) => {

  const sagaMiddleware = createSagaMiddleware()

  if (isServer) {
  //If it's on server side, create a store
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
  } else {
  //If it's on client side, create a store which will persis
    const { persistStore, persistReducer } = require('redux-persist');
  const persistConfig = {
    key: "root",
    storage: storage,
    // whitelist: ["member","object"],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga)
  store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
  return store;
  }
  };
  // export an assembled wrapper
  // export const wrapper = createWrapper(makeStore);
  export const wrapper = createWrapper(makeStore, { debug: true })

// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
