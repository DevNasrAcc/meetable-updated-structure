import {persistStore, persistReducer} from 'redux-persist'
import {createStore, applyMiddleware} from 'redux';

// import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {AppReducer} from './combineReducer';

export const store = createStore(AppReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
