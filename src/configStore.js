import { createStore, combineReducers } from 'redux';
import appReducer from './containers/reducer'
import userReducer from './containers/Users/reducer.js'
const reducer = combineReducers({
  userReducer,
  appReducer,
}
);

const store = createStore(reducer);

export default store;
