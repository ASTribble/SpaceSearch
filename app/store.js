import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import {AsyncStorage} from 'react-native';

import reducers from './reducers/index';

const isDebuggingInChrome = global.__DEV__ && !!window.navigator.userAgent
require('react-devtools-core').connectToDevTools()

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(
    autoRehydrate(),
    applyMiddleware(thunk))
);

persistStore(store, {storage: AsyncStorage});

export {store}
