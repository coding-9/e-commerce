import {combineReducers} from "redux";
import cartTotal from './totalReducer';
import cartProducts from './productsReducer';

const reducer = combineReducers({
    cartTotal,
    cartProducts
});

export default reducer;