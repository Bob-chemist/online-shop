import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

const logMiddleware = () => next => action => {
  console.log(action.type);
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, logMiddleware))
);

const delayedActionCreator = timeout => dispatch => {
  setTimeout(() => {
    dispatch({ type: 'DELAYED_ACTION' });
  }, timeout);
};

store.dispatch(delayedActionCreator(2000));

export default store;
