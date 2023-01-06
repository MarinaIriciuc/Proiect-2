import { createStore, combineReducers, applyMiddleware } from 'redux';
import {cartReducer} from "./cart/CartReducer";
import {userReducer} from "./user/UserReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {favoriteReducer} from "./favorites/FavoriteReducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoriteReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;