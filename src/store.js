import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; 
import thunk from 'redux-thunk';

import reducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

 const generateStore = (initialState = {}) => createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, logger)
);

export default generateStore;