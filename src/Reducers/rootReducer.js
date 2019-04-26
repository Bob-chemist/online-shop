import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';
import authReducer from './auth';
import { combineReducers } from 'redux';

export default combineReducers({
  bookList: updateBookList,
  shoppingCart: updateShoppingCart,
  auth: authReducer,
});
