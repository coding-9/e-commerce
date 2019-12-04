import {createStore, applyMiddleware} from 'redux';
import cart from '../reducers/productsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cart)


let store = createStore(
    persistedReducer,
    applyMiddleware(logger)
    
);
let persistor = persistStore(store)
export { store, persistor }