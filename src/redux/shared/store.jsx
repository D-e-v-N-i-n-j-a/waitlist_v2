import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducers';


const middleware = [thunk, createLogger()];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
