import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers/index';

const isDebuggingInChrome = global.__DEV__ && !!window.navigator.userAgent
require('react-devtools-core').connectToDevTools()

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(
    applyMiddleware(thunk))
);